import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Canvas, Circle, FabricImage, FabricObject, IText, Line, Rect, Triangle } from 'fabric';
import { ProductDetailData } from '../../shared/product-detail/product-detail.model';
import { findCatalog } from '../../shared/product-detail/catalog-registry';
import { CartService } from '../../shared/cart/cart.service';
import { ProjectsService } from '../../shared/projects/projects.service';

type Tool = 'options' | 'text' | 'uploads' | 'graphics' | 'background' | 'template';
type ShapeKind = 'rectangle' | 'circle' | 'triangle' | 'line';

interface TextProps {
  fontFamily: string;
  fontSize: number;
  fill: string;
  bold: boolean;
  italic: boolean;
  align: string;
}

interface Upload {
  name: string;
  url: string;
}

/** Canvas pixels per inch at 100% zoom. */
const PX_PER_INCH = 250;
const BLEED_IN = 0.0625;
const SAFETY_IN = 0.125;
const ZOOM_MIN = 0.25;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;
const MAX_UNDO = 60;
const MAX_FILE_BYTES = 50 * 1024 * 1024;

/** Query params that carry studio state rather than configurator selections. */
const RESERVED_PARAMS = new Set(['mode', 'qty', 'template']);
const ACCEPTED_TYPES = 'image/png,image/jpeg,image/svg+xml,image/webp';

export const FONTS = ['Inter', 'Georgia', 'Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Trebuchet MS', 'Impact'];
export const SWATCHES = ['#ffffff', '#111827', '#167ef5', '#0b3b91', '#00b67a', '#f59e0b', '#ea580c', '#e2725b', '#f5f5f4', '#d4af37'];

/** Trim size in inches, from the product's Size option if it has one, else by category. */
function trimInches(product: ProductDetailData, options: Record<string, string>): { w: number; h: number } {
  const size = options['Size'] ?? '';
  const match = size.match(/(\d+(?:\.\d+)?)"\s*x\s*(\d+(?:\.\d+)?)"/i);
  if (match) return { w: Number(match[2]), h: Number(match[1]) };
  return product.categoryPath === '/postcards-print-advertising' ? { w: 6, h: 4 } : { w: 3.5, h: 2 };
}

/**
 * Stage 1 of the design studio: a Fabric.js canvas at the product's real
 * dimensions with bleed/safety guides, text, uploads, shapes, background,
 * template, undo/redo, save (localStorage) and preview. Mirrors the tool rail
 * and canvas chrome of vistaprint.com/studio; Pattern and the full asset
 * library are later stages.
 */
@Component({
  selector: 'app-design-studio',
  imports: [RouterLink],
  templateUrl: './design-studio.component.html',
  styleUrl: './design-studio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onKeydown($event)' },
})
export class DesignStudioComponent {
  // Bound from the route by withComponentInputBinding().
  readonly product = input.required<ProductDetailData>();
  readonly category = input.required<string>();
  readonly slug = input.required<string>();
  readonly mode = input<string>();
  readonly qty = input<string>();
  readonly template = input<string>();

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cart = inject(CartService);
  private readonly projects = inject(ProjectsService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly canvasEl = viewChild.required<ElementRef<HTMLCanvasElement>>('canvasEl');
  private readonly workspaceEl = viewChild.required<ElementRef<HTMLElement>>('workspaceEl');

  readonly fonts = FONTS;
  readonly swatches = SWATCHES;
  readonly acceptedTypes = ACCEPTED_TYPES;

  private canvas?: Canvas;
  private guides: FabricObject[] = [];
  private undoStack: string[] = [];
  private redoStack: string[] = [];
  private restoring = false;

  /** Configurator selections (Shape, Corners, Size, …) passed through from the product page. */
  readonly options = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => {
        const options: Record<string, string> = {};
        for (const key of params.keys) {
          if (!RESERVED_PARAMS.has(key)) options[key] = params.get(key) ?? '';
        }
        return options;
      }),
    ),
    { initialValue: {} as Record<string, string> },
  );
  readonly optionEntries = computed(() => Object.entries(this.options()));

  // Derived from the route's `mode` (inputs bind after construction, so a plain
  // signal initialised here would read undefined); still writable by the rail.
  readonly activeTool = linkedSignal<Tool>(() =>
    this.mode() === 'upload' ? 'uploads' : this.mode() === 'templates' ? 'template' : 'text',
  );
  readonly zoom = signal(1);
  readonly objectCount = signal(0);
  readonly hasBackgroundImage = signal(false);
  readonly activeKind = signal<'text' | 'image' | 'shape' | null>(null);
  readonly textProps = signal<TextProps | null>(null);
  readonly canUndo = signal(false);
  readonly canRedo = signal(false);
  readonly uploads = signal<Upload[]>([]);
  readonly uploadError = signal<string | null>(null);
  readonly dragging = signal(false);
  readonly showBleed = signal(true);
  readonly showSafety = signal(true);
  readonly savedAt = signal<Date | null>(null);
  readonly previewUrl = signal<string | null>(null);

  readonly trim = computed(() => trimInches(this.product(), this.options()));
  /** Canvas size includes bleed on every edge, like vistaprint's 3.61" × 2.11" card. */
  readonly full = computed(() => ({ w: this.trim().w + 2 * BLEED_IN, h: this.trim().h + 2 * BLEED_IN }));
  readonly basePx = computed(() => ({ w: Math.round(this.full().w * PX_PER_INCH), h: Math.round(this.full().h * PX_PER_INCH) }));
  readonly zoomPercent = computed(() => Math.round(this.zoom() * 100));
  readonly isEmpty = computed(() => this.objectCount() === 0 && !this.hasBackgroundImage());
  readonly selectedQuantity = computed(() => {
    const { quantityOptions } = this.product();
    return quantityOptions.find((tier) => tier.quantity === this.qty()) ?? quantityOptions[0];
  });
  readonly productPath = computed(() => `/${this.category()}/${this.slug()}`);
  readonly categoryLabel = computed(() => findCatalog(this.category())?.label ?? this.category());
  private readonly saveKey = computed(() => `printgraphi.studio.${this.category()}/${this.slug()}`);

  constructor() {
    afterNextRender(() => this.initCanvas());
    this.destroyRef.onDestroy(() => {
      void this.canvas?.dispose();
      this.uploads().forEach((upload) => URL.revokeObjectURL(upload.url));
    });
  }

  // ---------------------------------------------------------------- Canvas

  private initCanvas(): void {
    const { w, h } = this.basePx();
    const canvas = new Canvas(this.canvasEl().nativeElement, {
      width: w,
      height: h,
      backgroundColor: '#ffffff',
      preserveObjectStacking: true,
    });
    this.canvas = canvas;

    canvas.on('selection:created', () => this.syncSelection());
    canvas.on('selection:updated', () => this.syncSelection());
    canvas.on('selection:cleared', () => this.syncSelection());
    canvas.on('object:modified', () => this.commit());
    canvas.on('object:added', ({ target }) => {
      if (!this.guides.includes(target)) this.commit();
    });
    canvas.on('object:removed', ({ target }) => {
      if (!this.guides.includes(target)) this.commit();
    });
    canvas.on('text:editing:exited', () => this.commit());

    this.addGuides();
    this.fitToWorkspace();

    const saved = this.readSaved();
    if (saved) {
      void this.load(saved).then(() => this.resetHistory());
    } else {
      const wanted = this.template();
      const tpl = wanted ? this.product().templates.find((t) => t.brand === wanted) : undefined;
      if (tpl) {
        void this.applyTemplate(tpl.image).then(() => this.resetHistory());
      } else {
        this.resetHistory();
      }
    }
  }

  private addGuides(): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const { w, h } = this.basePx();
    const inset = (BLEED_IN + SAFETY_IN) * PX_PER_INCH;
    const common = { selectable: false, evented: false, excludeFromExport: true, fill: 'transparent', hoverCursor: 'default' };
    const bleed = new Rect({ ...common, left: 1, top: 1, width: w - 2, height: h - 2, stroke: '#3b82f6', strokeWidth: 2, visible: this.showBleed() });
    const safety = new Rect({
      ...common,
      left: inset,
      top: inset,
      width: w - inset * 2,
      height: h - inset * 2,
      stroke: '#00b67a',
      strokeWidth: 1.5,
      strokeDashArray: [8, 6],
      visible: this.showSafety(),
    });
    this.guides = [bleed, safety];
    canvas.add(bleed, safety);
    this.guides.forEach((guide) => canvas.bringObjectToFront(guide));
  }

  private safetyBox() {
    const { w, h } = this.basePx();
    const inset = (BLEED_IN + SAFETY_IN) * PX_PER_INCH;
    return { left: inset, top: inset, width: w - inset * 2, height: h - inset * 2 };
  }

  private fitToWorkspace(): void {
    const available = this.workspaceEl().nativeElement.clientWidth - 160;
    const fit = Math.min(1, available / this.basePx().w);
    this.setZoom(Math.max(ZOOM_MIN, Math.floor(fit * 20) / 20));
  }

  setZoom(value: number): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value));
    const { w, h } = this.basePx();
    canvas.setZoom(zoom);
    canvas.setDimensions({ width: w * zoom, height: h * zoom });
    this.zoom.set(zoom);
  }

  zoomIn(): void {
    this.setZoom(this.zoom() + ZOOM_STEP);
  }

  zoomOut(): void {
    this.setZoom(this.zoom() - ZOOM_STEP);
  }

  toggleBleed(): void {
    this.showBleed.update((shown) => !shown);
    this.guides[0]?.set('visible', this.showBleed());
    this.canvas?.requestRenderAll();
  }

  toggleSafety(): void {
    this.showSafety.update((shown) => !shown);
    this.guides[1]?.set('visible', this.showSafety());
    this.canvas?.requestRenderAll();
  }

  // --------------------------------------------------------------- History

  private snapshot(): string {
    return JSON.stringify(this.canvas?.toJSON() ?? {});
  }

  private resetHistory(): void {
    this.undoStack = [this.snapshot()];
    this.redoStack = [];
    this.syncHistory();
    this.syncCounts();
  }

  private commit(): void {
    if (this.restoring || !this.canvas) return;
    const snap = this.snapshot();
    if (snap === this.undoStack[this.undoStack.length - 1]) return;
    this.undoStack.push(snap);
    if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
    this.redoStack = [];
    this.syncHistory();
    this.syncCounts();
  }

  private syncHistory(): void {
    this.canUndo.set(this.undoStack.length > 1);
    this.canRedo.set(this.redoStack.length > 0);
  }

  private syncCounts(): void {
    const canvas = this.canvas;
    if (!canvas) return;
    this.objectCount.set(canvas.getObjects().filter((obj) => !this.guides.includes(obj)).length);
    this.hasBackgroundImage.set(!!canvas.backgroundImage);
  }

  private async load(json: string): Promise<void> {
    const canvas = this.canvas;
    if (!canvas) return;
    this.restoring = true;
    try {
      await canvas.loadFromJSON(json);
      this.addGuides();
      canvas.requestRenderAll();
    } finally {
      this.restoring = false;
    }
    this.syncSelection();
    this.syncCounts();
  }

  /** Loads run strictly one after another so rapid undo/redo cannot resolve out of order. */
  private loadQueue: Promise<void> = Promise.resolve();

  private queueLoad(json: string): Promise<void> {
    this.loadQueue = this.loadQueue.then(() => this.load(json)).then(() => this.syncHistory());
    return this.loadQueue;
  }

  undo(): void {
    if (this.undoStack.length < 2) return;
    this.redoStack.push(this.undoStack.pop() as string);
    void this.queueLoad(this.undoStack[this.undoStack.length - 1]);
  }

  redo(): void {
    const snap = this.redoStack.pop();
    if (!snap) return;
    this.undoStack.push(snap);
    void this.queueLoad(snap);
  }

  // ------------------------------------------------------------- Selection

  private syncSelection(): void {
    const obj = this.canvas?.getActiveObject() ?? null;
    if (obj instanceof IText) {
      this.activeKind.set('text');
      this.textProps.set({
        fontFamily: obj.fontFamily,
        fontSize: Math.round(obj.fontSize),
        fill: typeof obj.fill === 'string' ? obj.fill : '#111827',
        bold: obj.fontWeight === 'bold' || obj.fontWeight === 700,
        italic: obj.fontStyle === 'italic',
        align: obj.textAlign,
      });
      if (this.activeTool() !== 'text') this.activeTool.set('text');
    } else {
      this.textProps.set(null);
      this.activeKind.set(obj instanceof FabricImage ? 'image' : obj ? 'shape' : null);
    }
  }

  selectTool(tool: Tool): void {
    this.activeTool.set(tool);
  }

  deleteActive(): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const targets = canvas.getActiveObjects();
    if (!targets.length) return;
    this.restoring = true;
    targets.forEach((obj) => canvas.remove(obj));
    canvas.discardActiveObject();
    this.restoring = false;
    canvas.requestRenderAll();
    this.commit();
    this.syncSelection();
  }

  bringForward(): void {
    const canvas = this.canvas;
    const obj = canvas?.getActiveObject();
    if (!canvas || !obj) return;
    canvas.bringObjectForward(obj);
    this.guides.forEach((guide) => canvas.bringObjectToFront(guide));
    canvas.requestRenderAll();
    this.commit();
  }

  sendBackward(): void {
    const canvas = this.canvas;
    const obj = canvas?.getActiveObject();
    if (!canvas || !obj) return;
    canvas.sendObjectBackwards(obj);
    canvas.requestRenderAll();
    this.commit();
  }

  onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) return;
    const active = this.canvas?.getActiveObject();
    const editing = active instanceof IText && active.isEditing;
    const modifier = event.ctrlKey || event.metaKey;

    if (modifier && (event.key.toLowerCase() === 'z' || event.key.toLowerCase() === 'y')) {
      event.preventDefault();
      // Undo while typing ends the edit first (committing any text change), so
      // the shortcut undoes the most recent change rather than doing nothing.
      if (editing) active.exitEditing();
      const redo = event.key.toLowerCase() === 'y' || event.shiftKey;
      redo ? this.redo() : this.undo();
    } else if (event.key === 'Delete' || event.key === 'Backspace') {
      // While typing, these edit the text; otherwise they remove the selection.
      if (editing || !active) return;
      event.preventDefault();
      this.deleteActive();
    }
  }

  // ------------------------------------------------------------------ Text

  addText(): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const box = this.safetyBox();
    const text = new IText('Your text here', {
      left: box.left + 24,
      top: box.top + 24,
      fontFamily: 'Inter',
      fontSize: 28,
      fill: '#111827',
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    text.enterEditing();
    text.selectAll();
    canvas.requestRenderAll();
  }

  updateText(patch: Partial<TextProps>): void {
    const canvas = this.canvas;
    const obj = canvas?.getActiveObject();
    if (!canvas || !(obj instanceof IText)) return;
    if (patch.fontFamily !== undefined) obj.set('fontFamily', patch.fontFamily);
    if (patch.fontSize !== undefined) obj.set('fontSize', Math.max(6, Math.min(200, patch.fontSize)));
    if (patch.fill !== undefined) obj.set('fill', patch.fill);
    if (patch.bold !== undefined) obj.set('fontWeight', patch.bold ? 'bold' : 'normal');
    if (patch.italic !== undefined) obj.set('fontStyle', patch.italic ? 'italic' : 'normal');
    if (patch.align !== undefined) obj.set('textAlign', patch.align);
    canvas.requestRenderAll();
    this.syncSelection();
    this.commit();
  }

  onFontChange(event: Event): void {
    this.updateText({ fontFamily: (event.target as HTMLSelectElement).value });
  }

  onSizeChange(event: Event): void {
    this.updateText({ fontSize: Number((event.target as HTMLInputElement).value) || 24 });
  }

  onColorChange(event: Event): void {
    this.updateText({ fill: (event.target as HTMLInputElement).value });
  }

  // --------------------------------------------------------------- Uploads

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.acceptFile(input.files?.[0]);
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(true);
  }

  onDragLeave(): void {
    this.dragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    this.acceptFile(event.dataTransfer?.files?.[0]);
  }

  private acceptFile(file: File | undefined): void {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.uploadError.set('Please upload a PNG, JPG, SVG or WebP image. PDF and AI support is coming in a later stage.');
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      this.uploadError.set('That file is over 50 MB. Please export a smaller version and try again.');
      return;
    }
    this.uploadError.set(null);
    const url = URL.createObjectURL(file);
    this.uploads.update((list) => [{ name: file.name, url }, ...list]);
    void this.placeImage(url);
    this.activeTool.set('uploads');
  }

  async placeImage(url: string): Promise<void> {
    const canvas = this.canvas;
    if (!canvas) return;
    const img = await FabricImage.fromURL(url);
    const box = this.safetyBox();
    const scale = Math.min((box.width * 0.9) / img.width, (box.height * 0.9) / img.height, 1);
    img.scale(scale);
    img.set({
      left: box.left + (box.width - img.getScaledWidth()) / 2,
      top: box.top + (box.height - img.getScaledHeight()) / 2,
    });
    canvas.add(img);
    canvas.setActiveObject(img);
    this.guides.forEach((guide) => canvas.bringObjectToFront(guide));
    canvas.requestRenderAll();
  }

  // -------------------------------------------------------------- Graphics

  addShape(kind: ShapeKind): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const box = this.safetyBox();
    const size = Math.min(box.width, box.height) * 0.4;
    const left = box.left + (box.width - size) / 2;
    const top = box.top + (box.height - size) / 2;
    const fill = '#167ef5';
    let shape: FabricObject;
    switch (kind) {
      case 'rectangle':
        shape = new Rect({ left, top, width: size, height: size * 0.6, fill, rx: 8, ry: 8 });
        break;
      case 'circle':
        shape = new Circle({ left, top, radius: size / 2, fill });
        break;
      case 'triangle':
        shape = new Triangle({ left, top, width: size, height: size, fill });
        break;
      case 'line':
        shape = new Line([box.left + 40, top + size / 2, box.left + box.width - 40, top + size / 2], { stroke: '#111827', strokeWidth: 4 });
        break;
    }
    canvas.add(shape);
    canvas.setActiveObject(shape);
    this.guides.forEach((guide) => canvas.bringObjectToFront(guide));
    canvas.requestRenderAll();
  }

  // ------------------------------------------------------------ Background

  setBackground(color: string): void {
    const canvas = this.canvas;
    if (!canvas) return;
    canvas.backgroundColor = color;
    canvas.requestRenderAll();
    this.commit();
  }

  onBackgroundInput(event: Event): void {
    this.setBackground((event.target as HTMLInputElement).value);
  }

  async applyTemplate(url: string): Promise<void> {
    const canvas = this.canvas;
    if (!canvas) return;
    const img = await FabricImage.fromURL(url);
    const { w, h } = this.basePx();
    const scale = Math.max(w / img.width, h / img.height);
    img.scale(scale);
    img.set({ left: (w - img.getScaledWidth()) / 2, top: (h - img.getScaledHeight()) / 2, selectable: false, evented: false });
    canvas.backgroundImage = img;
    canvas.requestRenderAll();
    this.commit();
  }

  removeTemplate(): void {
    const canvas = this.canvas;
    if (!canvas) return;
    canvas.backgroundImage = undefined;
    canvas.requestRenderAll();
    this.commit();
  }

  // ------------------------------------------------------ Save & handover

  save(): void {
    try {
      localStorage.setItem(this.saveKey(), this.snapshot());
      this.savedAt.set(new Date());
    } catch {
      // Storage unavailable — the in-memory design still works.
    }
    this.projects.upsert({
      id: `${this.category()}/${this.slug()}`,
      category: this.category(),
      slug: this.slug(),
      title: this.product().productTitle,
      preview: this.render(0.3),
      updatedAt: Date.now(),
    });
  }

  private readSaved(): string | null {
    try {
      return localStorage.getItem(this.saveKey());
    } catch {
      return null;
    }
  }

  private render(multiplier: number): string {
    const canvas = this.canvas;
    if (!canvas) return '';
    const active = canvas.getActiveObject();
    this.guides.forEach((guide) => guide.set('visible', false));
    canvas.discardActiveObject();
    const url = canvas.toDataURL({ format: 'png', multiplier: multiplier / this.zoom() });
    this.guides[0]?.set('visible', this.showBleed());
    this.guides[1]?.set('visible', this.showSafety());
    if (active) canvas.setActiveObject(active);
    canvas.requestRenderAll();
    return url;
  }

  openPreview(): void {
    this.previewUrl.set(this.render(1));
  }

  closePreview(): void {
    this.previewUrl.set(null);
  }

  addToCart(): void {
    const product = this.product();
    const tier = this.selectedQuantity();
    this.save();
    this.cart.add({
      category: this.category(),
      slug: this.slug(),
      title: product.productTitle,
      image: product.mainImage,
      preview: this.render(0.5),
      quantityLabel: tier.quantity,
      price: tier.price,
      perUnit: tier.perUnit,
      options: this.options(),
      design: { type: 'studio', elements: this.objectCount() },
    });
    void this.router.navigate(['/cart']);
  }
}
