import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { Breadcrumb, BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { CartItem, CartService } from '../../shared/cart/cart.service';

/**
 * Cart page. Reads from the client-side CartService; checkout is the next step
 * of the flow and stays disabled until sign-in and payment are scoped.
 */
@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink, SiteShellComponent, BreadcrumbsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  readonly cart = inject(CartService);

  readonly breadcrumbs: Breadcrumb[] = [{ label: 'Home', path: '/' }, { label: 'Your cart' }];

  productPath(item: CartItem): string {
    return `/${item.category}/${item.slug}`;
  }

  studioLink(item: CartItem): string[] {
    return ['/design-studio', item.category, item.slug];
  }

  studioParams(item: CartItem): Record<string, string> {
    return {
      mode: item.design.type === 'template' ? 'templates' : 'upload',
      qty: item.quantityLabel,
      ...item.options,
      ...(item.design.type === 'template' ? { template: item.design.name } : {}),
    };
  }

  designLabel(item: CartItem): string {
    return item.design.type === 'template'
      ? `Template · ${item.design.name}`
      : `Uploaded · ${item.design.fileName}`;
  }

  optionEntries(item: CartItem): [string, string][] {
    return Object.entries(item.options);
  }
}
