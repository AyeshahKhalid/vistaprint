import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { Breadcrumb, BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { ProductDetailData } from '../../shared/product-detail/product-detail.model';
import { findCatalog } from '../../shared/product-detail/catalog-registry';
import { CartService } from '../../shared/cart/cart.service';

type StudioMode = 'templates' | 'upload';

interface UploadedFile {
  name: string;
  size: number;
  previewUrl: SafeUrl | null;
  objectUrl: string | null;
}

/** Query params that carry studio state rather than configurator selections. */
const RESERVED_PARAMS = new Set(['mode', 'qty', 'template']);
const ACCEPTED_TYPES = '.pdf,.png,.jpg,.jpeg,.svg,.ai';
const MAX_FILE_BYTES = 50 * 1024 * 1024;

/**
 * Entry point of the design flow: the product page hands over here with its
 * configuration in the query string, and the customer either starts from a
 * template or uploads finished artwork before adding the item to the cart.
 * The full canvas editor that vistaprint.com opens after this step is a
 * separate build, pending scope confirmation.
 */
@Component({
  selector: 'app-design-studio',
  imports: [SiteShellComponent, BreadcrumbsComponent, RouterLink],
  templateUrl: './design-studio.component.html',
  styleUrl: './design-studio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cart = inject(CartService);

  readonly acceptedTypes = ACCEPTED_TYPES;

  /** Configurator selections (Shape, Corners, …) passed through from the product page. */
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

  readonly activeMode = linkedSignal<StudioMode>(() => (this.mode() === 'upload' ? 'upload' : 'templates'));
  readonly selectedTemplate = linkedSignal<string | null>(() => this.template() ?? null);
  readonly uploadedFile = signal<UploadedFile | null>(null);
  readonly uploadError = signal<string | null>(null);
  readonly dragging = signal(false);

  readonly selectedQuantity = computed(() => {
    const { quantityOptions } = this.product();
    return quantityOptions.find((tier) => tier.quantity === this.qty()) ?? quantityOptions[0];
  });
  readonly productPath = computed(() => `/${this.category()}/${this.slug()}`);
  readonly canContinue = computed(() =>
    this.activeMode() === 'templates' ? this.selectedTemplate() !== null : this.uploadedFile() !== null,
  );
  readonly breadcrumbs = computed<Breadcrumb[]>(() => [
    { label: 'Home', path: '/' },
    { label: findCatalog(this.category())?.label ?? this.category(), path: `/${this.category()}` },
    { label: this.product().productTitle, path: this.productPath() },
    { label: 'Design Studio' },
  ]);

  setMode(mode: StudioMode): void {
    this.activeMode.set(mode);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  pickTemplate(brand: string): void {
    this.selectedTemplate.set(brand);
  }

  onFileInput(event: Event): void {
    this.acceptFile((event.target as HTMLInputElement).files?.[0]);
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

  clearFile(): void {
    const current = this.uploadedFile();
    if (current?.objectUrl) URL.revokeObjectURL(current.objectUrl);
    this.uploadedFile.set(null);
    this.uploadError.set(null);
  }

  addToCart(): void {
    const product = this.product();
    const tier = this.selectedQuantity();
    const design =
      this.activeMode() === 'templates'
        ? { type: 'template' as const, name: this.selectedTemplate() ?? '' }
        : { type: 'upload' as const, fileName: this.uploadedFile()?.name ?? '' };

    this.cart.add({
      category: this.category(),
      slug: this.slug(),
      title: product.productTitle,
      image: product.mainImage,
      quantityLabel: tier.quantity,
      price: tier.price,
      perUnit: tier.perUnit,
      options: this.options(),
      design,
    });
    void this.router.navigate(['/cart']);
  }

  formatSize(bytes: number): string {
    return bytes >= 1024 * 1024
      ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
      : `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  private acceptFile(file: File | undefined): void {
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) {
      this.uploadError.set('That file is over 50 MB. Please export a smaller version and try again.');
      return;
    }
    this.clearFile();
    const objectUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
    this.uploadedFile.set({
      name: file.name,
      size: file.size,
      objectUrl,
      previewUrl: objectUrl ? this.sanitizer.bypassSecurityTrustUrl(objectUrl) : null,
    });
  }
}
