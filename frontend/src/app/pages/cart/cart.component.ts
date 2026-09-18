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
    return ['/studio', item.category, item.slug];
  }

  studioParams(item: CartItem): Record<string, string> {
    return {
      mode: item.design.type === 'template' ? 'templates' : item.design.type === 'upload' ? 'upload' : 'edit',
      qty: item.quantityLabel,
      ...item.options,
      ...(item.design.type === 'template' ? { template: item.design.name } : {}),
    };
  }

  designLabel(item: CartItem): string {
    switch (item.design.type) {
      case 'template':
        return `Template · ${item.design.name}`;
      case 'upload':
        return `Uploaded · ${item.design.fileName}`;
      case 'studio':
        return `Custom design · ${item.design.elements} ${item.design.elements === 1 ? 'element' : 'elements'}`;
    }
  }

  optionEntries(item: CartItem): [string, string][] {
    return Object.entries(item.options);
  }
}
