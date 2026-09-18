import { ProductDetailData } from './product-detail.model';

export type CatalogLoader = () => Promise<Record<string, ProductDetailData>>;

export interface CatalogEntry {
  /** URL segment of the category, e.g. 'business-cards'. */
  segment: string;
  label: string;
  /** Dynamic import so each category's catalogue lives in its own lazy chunk. */
  load: CatalogLoader;
}

/**
 * Every category that has a variant catalogue. The router's variant routes and
 * the design studio both resolve products through this registry, so adding a
 * category is one entry here plus its catalogue file.
 */
export const CATALOG_REGISTRY: CatalogEntry[] = [
  {
    segment: 'business-cards',
    label: 'Business Cards',
    load: () =>
      import('../../pages/business-cards/variants/business-cards.catalog').then((m) => m.BUSINESS_CARD_VARIANTS),
  },
  {
    segment: 'postcards-print-advertising',
    label: 'Postcards & Print Advertising',
    load: () =>
      import('../../pages/postcards-print-advertising/variants/postcards.catalog').then((m) => m.POSTCARD_VARIANTS),
  },
];

export function findCatalog(segment: string): CatalogEntry | undefined {
  return CATALOG_REGISTRY.find((entry) => entry.segment === segment);
}

export async function loadProduct(segment: string, slug: string): Promise<ProductDetailData | undefined> {
  const entry = findCatalog(segment);
  if (!entry) return undefined;
  const catalog = await entry.load();
  return catalog[slug];
}
