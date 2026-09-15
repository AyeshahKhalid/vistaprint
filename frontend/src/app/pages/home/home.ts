import { Component } from '@angular/core';
import { SiteShell } from '../../shared/site-shell/site-shell';

const IMG = '/images/home';

interface Category {
  label: string;
  path: string;
  image: string;
}

interface Collection {
  title: string;
  description: string;
  path: string;
  image: string;
}

interface Idea {
  label: string;
  path: string;
  image: string;
}

interface ServiceItem {
  title: string;
  description: string;
}

interface UgcPost {
  handle: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [SiteShell],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly heroImage = `${IMG}/hero-graphic-hero-image-3_75.png`;
  readonly newCustomerOfferImage = `${IMG}/section-new-customer-offer-promo-image-3_278.png`;
  readonly signupFeatureImage = `${IMG}/section-signup-feature-apparel-promo-image-3_376.png`;
  readonly promoBannerImage = `${IMG}/banner-image-container-banner-image-3_214.png`;

  readonly categories: Category[] = [
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-card-0-card-image-3_86.png` },
    {
      label: 'Postcards & Flyers',
      path: '/postcards-print-advertising',
      image: `${IMG}/category-card-1-card-image-3_90.png`,
    },
    {
      label: 'Signs & Posters',
      path: '/signs-banners-posters',
      image: `${IMG}/category-card-2-card-image-3_94.png`,
    },
    { label: 'Labels & Stickers', path: '/labels-stickers', image: `${IMG}/category-card-3-card-image-3_98.png` },
    { label: 'Clothing & Bags', path: '/clothing-bags', image: `${IMG}/category-card-4-card-image-3_102.png` },
    {
      label: 'Promo Products',
      path: '/promotional-products',
      image: `${IMG}/category-card-5-card-image-3_106.png`,
    },
    { label: 'Packaging', path: '/packaging', image: `${IMG}/category-card-6-card-image-3_110.png` },
    {
      label: 'Booklets & Catalogs',
      path: '/booklets-catalogs',
      image: `${IMG}/category-card-7-card-image-3_114.png`,
    },
  ];

  readonly collections: Collection[] = [
    {
      title: 'Try for $10',
      description: 'Sample packs of premium stocks and print finishes',
      path: '/collections/sample-packs',
      image: `${IMG}/collection-card-0-collection-image-3_123.png`,
    },
    {
      title: 'Prepare for busy season',
      description: 'Essential promo materials and signage designed to convert',
      path: '/collections/busy-season',
      image: `${IMG}/collection-card-1-collection-image-3_131.png`,
    },
    {
      title: 'Professional Events',
      description: 'High-end banner stands, flyers and badges for conferences',
      path: '/collections/professional-events',
      image: `${IMG}/collection-card-2-collection-image-3_139.png`,
    },
    {
      title: 'Business Gifts & Giveaways',
      description: 'Curated merchandise to delight your best clients',
      path: '/collections/gifts-giveaways',
      image: `${IMG}/collection-card-3-collection-image-3_147.png`,
    },
    {
      title: 'Holiday Packaging',
      description: 'Festive custom mailers, ribbons, and gift wrap boxes',
      path: '/collections/holiday-packaging',
      image: `${IMG}/collection-card-4-collection-image-3_155.png`,
    },
    {
      title: 'Weddings & Celebrations',
      description: 'Coordinating invitations, placecards, and menus',
      path: '/collections/weddings-celebrations',
      image: `${IMG}/collection-card-5-collection-image-3_163.png`,
    },
  ];

  readonly ideas: Idea[] = [
    { label: 'Custom T-Shirts', path: '/clothing-bags/t-shirts', image: `${IMG}/idea-card-0-card-image-3_175.png` },
    {
      label: 'Shipping Packaging',
      path: '/packaging/shipping',
      image: `${IMG}/idea-card-1-card-image-3_180.png`,
    },
    {
      label: 'Outdoor Banners',
      path: '/signs-banners-posters/outdoor-banners',
      image: `${IMG}/idea-card-2-card-image-3_185.png`,
    },
    {
      label: 'Shopping Bags',
      path: '/clothing-bags/shopping-bags',
      image: `${IMG}/idea-card-3-card-image-3_190.png`,
    },
    {
      label: 'Celebration Invitations',
      path: '/invitations-gifts-stationery',
      image: `${IMG}/idea-card-4-card-image-3_195.png`,
    },
    {
      label: 'Feather Flags',
      path: '/signs-banners-posters/feather-flags',
      image: `${IMG}/idea-card-5-card-image-3_200.png`,
    },
  ];

  readonly services: ServiceItem[] = [
    {
      title: 'Brand Kit',
      description:
        'Maintain absolute brand consistency with pre-saved layouts, logos, color palettes, and fonts for all print items.',
    },
    {
      title: 'Sampling Hub',
      description:
        'Get hands-on experience by ordering physically printed sample packs to test paper thickness, finishes, and textures.',
    },
    {
      title: 'Design Services',
      description:
        'Work closely with real graphic design professionals who will draw up custom visual assets specifically for your products.',
    },
    {
      title: 'AI Logomaker',
      description:
        'Draft premium smart logos in minutes with our algorithmic designer tool, instantly ready for web and high-resolution print.',
    },
    {
      title: 'PRINTGRAPHI x Wix Websites',
      description:
        'Build a stunning, fully customizable digital storefront integrated with your printed collateral for full multichannel success.',
    },
  ];

  readonly ambassadorCards = [
    { eyebrow: 'Ambassador Spotlight', title: 'Flour & Blooms Bakery', image: `${IMG}/carousel-card-0-card-image-3_295.png` },
    { eyebrow: 'Business Cards', title: 'Foil & Specialty Finishes', image: `${IMG}/carousel-card-1-card-image-3_300.png` },
    { eyebrow: 'Mailer Boxes', title: 'Eco-Friendly Custom Packaging', image: `${IMG}/carousel-card-2-card-image-3_305.png` },
    { eyebrow: 'Stickers', title: 'Custom Die-Cut Sheet Stickers', image: `${IMG}/carousel-card-3-card-image-3_310.png` },
  ];

  readonly ugcPosts: UgcPost[] = [
    { handle: '@bloom_boutique', image: `${IMG}/frame-ugc-img-3_361.png` },
    { handle: '@roasters_den', image: `${IMG}/frame-ugc-img-3_364.png` },
    { handle: '@clay_studio', image: `${IMG}/frame-ugc-img-3_367.png` },
    { handle: '@paper_crafts', image: `${IMG}/frame-ugc-img-3_370.png` },
    { handle: '@wear_art', image: `${IMG}/frame-ugc-img-3_373.png` },
  ];
}
