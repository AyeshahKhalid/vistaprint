import { ProductDetailData } from './product-detail.model';

/**
 * Shared catalogue machinery for product variant pages.
 *
 * vistaprint.com renders every product variant from one template plus catalogue
 * data rather than a hand-built page per variant, so each category supplies a
 * list of `VariantSpec` records and a base `ProductDetailData` to inherit the
 * structural sections from. Only fields that genuinely differ per variant are
 * declared per spec.
 */
export interface VariantSpec {
  slug: string;
  title: string;
  /** Breadcrumb leaf. Defaults to `title`. */
  breadcrumb?: string;
  briefDescription: string;
  price: string;
  priceDetail: string;
  rating: number;
  reviewCount: number;
  quantityOptions?: ProductDetailData['quantityOptions'];
  promoHeadline: string;
  featureHighlights: ProductDetailData['featureHighlights'];
  sectionTitle: string;
  sectionBody: string;
  personalTouchBody?: string;
  faqs: ProductDetailData['faqs'];
  /** Image folder under /images/<category>/. Falls back to the base page's folder. */
  imageDir?: string;
}

export interface CatalogConfig {
  /** Image root, e.g. 'business-cards' — the segment after /images/. */
  imageRoot: string;
  /** Folder the base page's images live in, e.g. 'matte'. */
  baseImageDir: string;
  /** Breadcrumb prefix, e.g. 'Home / Business Cards'. */
  breadcrumbPrefix: string;
  /** Category landing route, e.g. '/business-cards'. Used for breadcrumb and studio links. */
  categoryPath: string;
  /** Figma-verified page whose structural sections every variant inherits. */
  base: ProductDetailData;
}

/** Builds one variant by overlaying its spec onto the category's base page. */
export function buildVariant(spec: VariantSpec, config: CatalogConfig): ProductDetailData {
  const { base, imageRoot, baseImageDir, breadcrumbPrefix, categoryPath } = config;
  const dir = spec.imageDir ?? baseImageDir;
  const retarget = (path: string) =>
    path.replace(`/images/${imageRoot}/${baseImageDir}`, `/images/${imageRoot}/${dir}`);

  return {
    ...base,

    slug: spec.slug,
    categoryPath,
    breadcrumb: `${breadcrumbPrefix} / ${spec.breadcrumb ?? spec.title}`,
    productTitle: spec.title,
    briefDescription: spec.briefDescription,
    price: spec.price,
    priceDetail: spec.priceDetail,
    rating: spec.rating,
    reviewCount: spec.reviewCount,
    quantityOptions: spec.quantityOptions ?? base.quantityOptions,

    promoHeadline: spec.promoHeadline,
    featureHighlights: spec.featureHighlights,
    coatedSectionTitle: spec.sectionTitle,
    coatedSectionBody: spec.sectionBody,
    personalTouchBody: spec.personalTouchBody ?? base.personalTouchBody,
    faqs: spec.faqs,

    ratingSummary: spec.rating,
    ratingCount: spec.reviewCount,

    mainImage: retarget(base.mainImage),
    thumbnails: base.thumbnails.map(retarget),
    coatedSectionImage: retarget(base.coatedSectionImage),
    startDesigningImage: retarget(base.startDesigningImage),
    sustainabilityImage: retarget(base.sustainabilityImage),
    designBannerImage: retarget(base.designBannerImage),
    templates: base.templates.map((t) => ({ ...t, image: retarget(t.image) })),
    relatedProducts: base.relatedProducts.map((p) => ({ ...p, image: retarget(p.image) })),
    frequentlyBought: base.frequentlyBought.map((p) => ({ ...p, image: retarget(p.image) })),
  };
}

/** Builds a slug -> ProductDetailData map for a category. */
export function buildCatalog(
  specs: VariantSpec[],
  config: CatalogConfig,
  /** Variants that keep their own hand-built data instead of being generated. */
  overrides: Record<string, ProductDetailData> = {},
): Record<string, ProductDetailData> {
  const stamped = Object.entries(overrides).map(([slug, data]) => [
    slug,
    { ...data, slug, categoryPath: data.categoryPath ?? config.categoryPath },
  ]);
  return {
    ...Object.fromEntries(specs.map((spec) => [spec.slug, buildVariant(spec, config)])),
    ...Object.fromEntries(stamped),
  };
}
