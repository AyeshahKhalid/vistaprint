import { Component } from '@angular/core';
import { SiteShellComponent } from '../../../shared/site-shell/site-shell.component';
import { ProductDetail } from '../../../shared/product-detail/product-detail.component';
import { MATTE_BUSINESS_CARDS } from './matte.data';

@Component({
  selector: 'app-matte-business-cards',
  imports: [SiteShellComponent, ProductDetail],
  template: `
    <app-site-shell>
      <app-product-detail [data]="data" />
    </app-site-shell>
  `,
})
export class MatteBusinessCardsComponent {
  readonly data = MATTE_BUSINESS_CARDS;
}
