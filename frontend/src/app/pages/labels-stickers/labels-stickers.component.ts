import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/labels-stickers';

interface FeaturedProduct {
  title: string;
  description: string;
  price: string;
  ctaLabel: string;
  badge?: string;
  image: string;
}

interface RatedProduct {
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  salePrice?: string;
  badge?: string;
  ctaLabel: string;
  image: string;
}

interface ExploreTile {
  label: string;
  path: string;
  image: string;
}

interface SocialTile {
  handle: string;
  image: string;
}

@Component({
  selector: 'app-labels-stickers',
  imports: [SiteShellComponent, RouterLink, BreadcrumbsComponent, SectionHeaderComponent, ProductCardComponent, FaqAccordionComponent],
  templateUrl: './labels-stickers.component.html',
  styleUrl: './labels-stickers.component.scss',
})
export class LabelsStickersComponent {
  readonly breadcrumbs = [{ label: 'HomeComponent', path: '/' }, { label: 'Labels and Stickers' }];

  readonly heroImage = `${IMG}/hero-right-hero-lifestyle-image-16_1294.png`;
  readonly heroPills = ['Sticker Singles', 'Sticker Sheets', 'Roll Labels'];

  readonly featuredProducts: FeaturedProduct[] = [
    {
      title: 'Sticker Singles',
      description: 'Ideal for event giveaways, customer orders, gifting, and personalizing everyday items.',
      price: 'From $10.00',
      ctaLabel: 'Shop sticker singles',
      image: `${IMG}/product-card-sticker-singles-card-image-16_1298.png`,
    },
    {
      title: 'Sticker Sheets',
      description: 'Great for product labeling, envelopes, classroom projects, activities, and rewards.',
      price: 'From $24.99',
      ctaLabel: 'Shop sticker sheets',
      badge: 'Best Seller',
      image: `${IMG}/product-card-sticker-sheets-card-image-16_1311.png`,
    },
    {
      title: 'Roll Labels',
      description: 'Ideal for packaging, high-volume stock, warehouse use, and professional product labeling.',
      price: 'From $99.99',
      ctaLabel: 'Shop roll labels',
      image: `${IMG}/product-card-roll-labels-card-image-16_1322.png`,
    },
  ];

  readonly rollLabelsPromoImage = `${IMG}/promo-left-promo-image-16_1334.png`;

  readonly foodBeverageItems: RatedProduct[] = [
    { title: 'Food PackagingComponent Labels', rating: 4.5, reviewCount: 312, price: '$99.99', ctaLabel: 'Shop', image: `${IMG}/grid-item-1-item-image-16_1347.png` },
    { title: 'Wine Labels', rating: 4.4, reviewCount: 189, price: '$121.99', ctaLabel: 'Shop', image: `${IMG}/grid-item-2-item-image-16_1372.png` },
    { title: 'Beer Labels', rating: 4.6, reviewCount: 97, price: '$189.00', ctaLabel: 'Shop', image: `${IMG}/grid-item-3-item-image-16_1397.png` },
    { title: 'Waterproof Labels', rating: 4.7, reviewCount: 428, price: '$104.99', ctaLabel: 'Shop', image: `${IMG}/grid-item-4-item-image-16_1422.png` },
  ];

  readonly retailEventItems: RatedProduct[] = [
    { title: 'PackagingComponent Labels', rating: 4.5, reviewCount: 267, price: '$99.99', ctaLabel: 'Shop', image: `${IMG}/retail-item-1-item-image-16_1452.png` },
    { title: 'Product Labels on Sheets', rating: 4.3, reviewCount: 156, price: '$24.99', ctaLabel: 'Shop', image: `${IMG}/retail-item-2-item-image-16_1477.png` },
    { title: 'Custom Tags', rating: 4.6, reviewCount: 89, price: '$34.99', ctaLabel: 'Shop', image: `${IMG}/retail-item-3-item-image-16_1502.png` },
    { title: 'QR Code Stickers', rating: 4.8, reviewCount: 203, price: '$15.99', badge: 'Popular', ctaLabel: 'Shop', image: `${IMG}/retail-item-4-item-image-16_1529.png` },
  ];

  readonly shippingItems: RatedProduct[] = [
    { title: 'Shipping Labels', rating: 4.4, reviewCount: 198, price: '$44.99', ctaLabel: 'Shop', image: `${IMG}/shipping-item-1-item-image-16_1559.png` },
    { title: 'Return Address Labels', rating: 4.6, reviewCount: 312, price: '$19.99', salePrice: '$29.99', ctaLabel: 'Shop', image: `${IMG}/shipping-item-2-item-image-16_1584.png` },
    { title: 'Envelope Seals', rating: 4.5, reviewCount: 145, price: '$12.99', ctaLabel: 'Shop', image: `${IMG}/shipping-item-3-item-image-16_1611.png` },
    { title: 'Mailing Labels', rating: 4.3, reviewCount: 87, price: '$24.99', ctaLabel: 'Shop', image: `${IMG}/shipping-item-4-item-image-16_1636.png` },
  ];

  readonly carSignageImage = `${IMG}/car-signage-promo-lifestyle-car-image-16_1904.png`;
  readonly wallDecalsImage = `${IMG}/wall-window-decals-promo-storefront-decals-image-16_1919.png`;

  readonly exploreCategories: ExploreTile[] = [
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-tile-tile-image-16_1925.png` },
    { label: 'Postcards and Print Advertising', path: '/postcards-print-advertising', image: `${IMG}/category-tile-tile-image-16_1929.png` },
    { label: 'Signs Banners and Posters', path: '/signs-banners-posters', image: `${IMG}/category-tile-tile-image-16_1933.png` },
    { label: 'PackagingComponent', path: '/packaging', image: `${IMG}/category-tile-tile-image-16_1938.png` },
    { label: 'Invitations Gifts and Stationery', path: '/invitations-gifts-stationery', image: `${IMG}/category-tile-tile-image-16_1942.png` },
    { label: 'Clothing and Bags', path: '/clothing-bags', image: `${IMG}/category-tile-tile-image-16_1946.png` },
  ];

  readonly socialTiles: SocialTile[] = [
    { handle: '@sweetbloomcandles', image: `${IMG}/social-tile-social-image-16_1963.png` },
    { handle: '@thelocaloven', image: `${IMG}/social-tile-social-image-16_1966.png` },
    { handle: '@paperandpetal', image: `${IMG}/social-tile-social-image-16_1969.png` },
    { handle: '@craftedbyhand', image: `${IMG}/social-tile-social-image-16_1972.png` },
    { handle: '@studiobrewco', image: `${IMG}/social-tile-social-image-16_1974.png` },
    { handle: '@littlemarketco', image: `${IMG}/social-tile-social-image-16_1976.png` },
  ];

  readonly seoParagraphs = [
    'Every surface can become a branding opportunity. Choose from customizable stickers, labels, and tags in a variety of shapes, sizes, and finishes. Upload your own artwork or start with a professional template.',
    'Whether you need product labels, shipping stickers, return address labels, custom shapes, or branded packaging labels, PRINTGRAPHI gives you the tools to create professional printed products for your business.',
    'Not sure where to start? Explore our products and find the printing solution that fits your needs.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What materials are used to make custom label stickers?',
      answer:
        'Our labels are made from premium vinyl, paper, and polyester materials. Choose from matte, gloss, clear, or specialty finishes depending on your application and durability needs.',
    },
    {
      question: 'Can you print custom-shaped sticker labels?',
      answer: 'Yes — we offer die-cut custom shapes in addition to standard circle, square, and rectangle labels.',
    },
    {
      question: 'I need waterproof labels. What do you recommend?',
      answer: 'Our vinyl waterproof labels are designed to hold up in wet, humid, or outdoor conditions without peeling or fading.',
    },
    {
      question: 'How can I keep custom sticker labels from peeling?',
      answer: 'Apply to a clean, dry surface at room temperature, and choose a permanent adhesive finish for long-term use.',
    },
    {
      question: 'How can I avoid bubbles when applying label stickers?',
      answer: 'Apply slowly from one edge, smoothing outward with a card or squeegee to push air out as you go.',
    },
    {
      question: 'Can I write on my personalized label stickers?',
      answer: 'Yes — our matte and uncoated finishes are writable with most pens and markers.',
    },
    {
      question: 'What are the most common packaging products to put labels and stickers on?',
      answer: 'Boxes, jars, bottles, bags, and mailers are the most common surfaces for custom labels and stickers.',
    },
  ];
}
