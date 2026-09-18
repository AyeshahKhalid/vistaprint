export interface QuantityOption {
  quantity: string;
  price: string;
  perUnit: string;
}

export interface DropdownField {
  label: string;
  options: string[];
}

export interface FeatureHighlight {
  title: string;
  description: string;
}

export interface ThicknessOption {
  title: string;
  description: string;
}

export interface FinishOption {
  title: string;
  description: string;
}

export interface TemplateCard {
  category: string;
  brand: string;
  description: string;
  tag: string;
  image: string;
}

export interface RelatedProduct {
  title: string;
  price: string;
  image: string;
  /** Route to the product. Omit when the target page does not exist yet. */
  path?: string;
}

export interface ReviewCard {
  title: string;
  body: string;
  author: string;
  date: string;
}

export interface RatingBreakdownRow {
  stars: string;
  percent: string;
}

export interface PdpFaqItem {
  question: string;
  answer?: string;
}

export interface ProductDetailData {
  /** URL slug within the category, e.g. 'matte'. Stamped by the catalogue builder. */
  slug?: string;
  /** Category landing route, e.g. '/business-cards'. Stamped by the catalogue builder. */
  categoryPath?: string;
  breadcrumb: string;
  productTitle: string;
  rating: number;
  reviewCount: number;
  briefDescription: string;
  price: string;
  priceDetail: string;
  zipCode: string;
  fastDelivery: { price: string; date: string };
  standardDelivery: { price: string; date: string };
  dropdowns: DropdownField[];
  quantityOptions: QuantityOption[];
  designServicePrice: string;

  mainImage: string;
  thumbnails: string[];

  tabs: string[];

  templatesSectionTitle: string;
  templates: TemplateCard[];

  promoHeadline: string;
  featureHighlights: FeatureHighlight[];

  coatedSectionTitle: string;
  coatedSectionImage: string;
  coatedSectionBody: string;

  personalTouchTitle: string;
  personalTouchBody: string;
  thicknessOptions: ThicknessOption[];
  finishOptions: FinishOption[];

  startDesigningTitle: string;
  startDesigningBody: string;
  startDesigningImage: string;

  sustainabilityImage: string;
  sustainabilityBody: string;

  relatedProducts: RelatedProduct[];
  frequentlyBought: RelatedProduct[];

  ratingSummary: number;
  ratingCount: number;
  ratingBreakdown: RatingBreakdownRow[];
  reviews: ReviewCard[];

  designBannerBody: string;
  designBannerImage: string;

  faqs: PdpFaqItem[];
}
