import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteShellComponent } from '../site-shell/site-shell.component';
import { ProductDetail } from './product-detail.component';
import { ProductDetailData } from './product-detail.model';

/**
 * Route target for every catalogue-driven product page. `product` is bound from
 * the route's resolved data via `withComponentInputBinding()`.
 */
@Component({
  selector: 'app-product-variant-page',
  imports: [SiteShellComponent, ProductDetail],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-shell>
      <app-product-detail [data]="product()" />
    </app-site-shell>
  `,
})
export class ProductVariantPageComponent {
  readonly product = input.required<ProductDetailData>();
}
