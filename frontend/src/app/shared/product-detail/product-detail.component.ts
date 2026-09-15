import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
import { ProductDetailData } from './product-detail.model';

@Component({
  selector: 'app-product-detail',
  imports: [DecimalPipe, BreadcrumbsComponent, FaqAccordionComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  @Input({ required: true }) data!: ProductDetailData;

  readonly activeImageIndex = signal(0);
  readonly activeTabIndex = signal(0);

  setActiveImage(index: number): void {
    this.activeImageIndex.set(index);
  }

  setActiveTab(index: number): void {
    this.activeTabIndex.set(index);
  }

  get breadcrumbItems() {
    const parts = this.data.breadcrumb.split('/').map((p) => p.trim());
    return parts.map((label, i) => ({ label, path: i === 0 ? '/' : undefined }));
  }
}
