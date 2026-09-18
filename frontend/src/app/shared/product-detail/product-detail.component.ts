import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, linkedSignal, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Breadcrumb, BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
import { ProductDetailData } from './product-detail.model';

const INITIAL_QUANTITY_ROWS = 5;
const DESIGN_SERVICES_PATH = '/design-services';

@Component({
  selector: 'app-product-detail',
  imports: [DecimalPipe, RouterLink, BreadcrumbsComponent, FaqAccordionComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeDrawer()' },
})
export class ProductDetail {
  readonly data = input.required<ProductDetailData>();
  /** `?design=upload` opens the options drawer on load (category pages deep-link here). */
  readonly openDesign = input<string>();

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  // Per-product UI state. One component instance serves every variant route, so
  // linkedSignal resets these whenever a different product is bound.
  readonly activeImageIndex = linkedSignal({ source: this.data, computation: () => 0 });
  readonly activeTabIndex = linkedSignal({ source: this.data, computation: () => 0 });
  readonly selectedQuantityIndex = linkedSignal({ source: this.data, computation: () => 0 });
  readonly selections = linkedSignal<ProductDetailData, Partial<Record<string, string>>>({
    source: this.data,
    computation: () => ({}),
  });
  readonly zipCode = linkedSignal(() => this.data().zipCode);
  readonly showAllQuantities = signal(false);
  readonly editingZip = signal(false);

  // "Upload your design" opens an options drawer first, as on vistaprint.com;
  // only its Next button hands over to the studio.
  readonly drawerOpen = linkedSignal(() => this.openDesign() === 'upload');

  constructor() {
    // The drawer forces a choice for every option group, so it pre-selects the
    // first option of any group the customer has not touched.
    effect(() => {
      if (!this.drawerOpen()) return;
      this.selections.update((current) => {
        const next = { ...current };
        for (const group of this.data().dropdowns) {
          if (!next[group.label]) next[group.label] = group.options[0];
        }
        return next;
      });
    });
    effect((onCleanup) => {
      document.body.style.overflow = this.drawerOpen() ? 'hidden' : '';
      onCleanup(() => (document.body.style.overflow = ''));
    });
  }

  // Price follows the selected quantity tier, as on vistaprint.com.
  readonly selectedQuantity = computed(() => this.data().quantityOptions[this.selectedQuantityIndex()]);
  readonly displayPrice = computed(() => this.selectedQuantity()?.price ?? this.data().price);
  readonly displayPriceDetail = computed(() => {
    const tier = this.selectedQuantity();
    return tier ? `${tier.perUnit.replace('/unit', ' each')} / ${tier.quantity}` : this.data().priceDetail;
  });
  readonly hasMoreQuantities = computed(() => this.data().quantityOptions.length > INITIAL_QUANTITY_ROWS);
  readonly visibleQuantities = computed(() => {
    const tiers = this.data().quantityOptions;
    return this.showAllQuantities() ? tiers : tiers.slice(0, INITIAL_QUANTITY_ROWS);
  });

  readonly breadcrumbItems = computed<Breadcrumb[]>(() => {
    const { breadcrumb, categoryPath } = this.data();
    return breadcrumb.split('/').map((part, i) => ({
      label: part.trim(),
      path: i === 0 ? '/' : i === 1 ? categoryPath : undefined,
    }));
  });

  // Studio entry point. The current configuration travels in the query string,
  // the same way vistaprint.com hands a product page's options to /studio.
  readonly studioLink = computed(() => {
    const { categoryPath = '', slug = '' } = this.data();
    return ['/studio', categoryPath.replace(/^\//, ''), slug];
  });
  private readonly configParams = computed(() => ({ qty: this.selectedQuantity()?.quantity, ...this.selections() }));
  readonly templatesParams = computed(() => ({ mode: 'templates', ...this.configParams() }));
  readonly uploadParams = computed(() => ({ mode: 'upload', ...this.configParams() }));
  readonly designServicesPath = DESIGN_SERVICES_PATH;

  templateParams(brand: string): Record<string, string | undefined> {
    return { ...this.templatesParams(), template: brand };
  }

  setActiveImage(index: number): void {
    this.activeImageIndex.set(index);
  }

  setActiveTab(index: number): void {
    this.activeTabIndex.set(index);
  }

  selectQuantity(index: number): void {
    this.selectedQuantityIndex.set(index);
  }

  selectOption(label: string, event: Event): void {
    this.setSelection(label, (event.target as HTMLSelectElement).value);
  }

  setSelection(label: string, value: string): void {
    this.selections.update((current) => {
      const next = { ...current };
      if (value) {
        next[label] = value;
      } else {
        delete next[label];
      }
      return next;
    });
  }

  toggleQuantities(): void {
    this.showAllQuantities.update((shown) => !shown);
  }

  startZipEdit(): void {
    this.editingZip.set(true);
  }

  commitZip(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim();
    if (/^\d{5}$/.test(value)) {
      this.zipCode.set(value);
    }
    this.editingZip.set(false);
  }

  openUploadDrawer(): void {
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    if (!this.drawerOpen()) return;
    this.drawerOpen.set(false);
    if (this.openDesign()) {
      // Drop the deep-link param so a reload does not reopen the drawer.
      void this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { design: null },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }
  }

  continueToStudio(): void {
    void this.router.navigate(this.studioLink(), { queryParams: this.uploadParams() });
  }
}
