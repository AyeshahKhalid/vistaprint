import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { ProductDetailData } from './product-detail/product-detail.model';

const SITE_NAME = 'PRINTGRAPHI';

/**
 * Sets the document title from the route's static `title`, or from the resolved
 * product on catalogue-driven pages, so every page in the flow is identifiable
 * in the tab bar and browser history.
 */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const leaf = deepestChild(snapshot);
    const product = leaf.data['product'] as ProductDetailData | undefined;
    const studio = leaf.routeConfig?.path?.startsWith('design-studio');
    const pageTitle = product
      ? studio
        ? `Design your ${product.productTitle}`
        : product.productTitle
      : this.buildTitle(snapshot);

    this.title.setTitle(pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME);
  }
}

function deepestChild(snapshot: RouterStateSnapshot) {
  let route = snapshot.root;
  while (route.firstChild) route = route.firstChild;
  return route;
}
