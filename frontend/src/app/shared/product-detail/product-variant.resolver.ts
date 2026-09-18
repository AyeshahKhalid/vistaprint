import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router } from '@angular/router';
import { ProductDetailData } from './product-detail.model';
import { loadProduct } from './catalog-registry';

/**
 * Resolves `:slug` against its category's catalogue before the page renders,
 * so the product template never mounts without data. The category comes from
 * static route data (`business-cards/:slug`) or a `:category` param
 * (`studio/:category/:slug`). Unknown slugs redirect to the category
 * landing page, matching vistaprint.com's behaviour for retired products.
 */
export const productVariantResolver: ResolveFn<ProductDetailData> = async (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const segment = (route.data['category'] as string | undefined) ?? route.paramMap.get('category') ?? '';
  const slug = route.paramMap.get('slug') ?? '';
  const product = await loadProduct(segment, slug);
  return product ?? new RedirectCommand(router.parseUrl(`/${segment}`));
};
