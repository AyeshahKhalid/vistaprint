import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/postcards-print-advertising';

interface CategoryCard {
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
}

interface BestsellerCard {
  badge?: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
}

interface NewProductCard {
  badge: string;
  title: string;
  description: string;
  rating?: number;
  reviewCount?: number;
  image: string;
}

interface ExploreCategoryTile {
  label: string;
  path: string;
  image: string;
}

@Component({
  selector: 'app-postcards-print-advertising',
  imports: [SiteShellComponent, RouterLink, BreadcrumbsComponent, SectionHeaderComponent, ProductCardComponent, FaqAccordionComponent],
  templateUrl: './postcards-print-advertising.component.html',
  styleUrl: './postcards-print-advertising.component.scss',
})
export class PostcardsPrintAdvertisingComponent {
  @ViewChild('bestsellersTrack') bestsellersTrack?: ElementRef<HTMLElement>;

  scrollBestsellers(direction: -1 | 1): void {
    const track = this.bestsellersTrack?.nativeElement;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  readonly breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Print Advertising & Office' },
    { label: 'Postcards & Print Advertising' },
  ];

  readonly heroImage = `${IMG}/hero-right-column-hero-product-image-9_1295.png`;
  readonly heroLinks = ['Postcards', 'Flyers', 'Self-Inking Stamps'];

  readonly categoryCards: CategoryCard[] = [
    {
      title: 'Postcards',
      description: 'Sharp details, quality paper, even mailing services – get the very best for less.',
      ctaLabel: 'Shop postcards',
      image: `${IMG}/category-card-0-card-image-9_1299.png`,
    },
    {
      title: 'Marketing Materials',
      description: 'Flyers, folders, brochures and more to connect and impress, fast.',
      ctaLabel: 'Shop marketing materials',
      image: `${IMG}/category-card-1-card-image-9_1308.png`,
    },
    {
      title: 'Booklets, Catalogs & Magazines',
      description: 'Polished and professional page-turners to engage your customers.',
      ctaLabel: 'Shop booklets, catalogs & magazines',
      image: `${IMG}/category-card-2-card-image-9_1317.png`,
    },
    {
      title: 'Business Stationery',
      description: 'Branded notepads, stamps and stationery that show you mean business.',
      ctaLabel: 'Shop business stationery',
      image: `${IMG}/category-card-3-card-image-9_1326.png`,
    },
  ];

  readonly bestsellers: BestsellerCard[] = [
    {
      badge: 'New options',
      title: 'Postcards',
      description: 'Sale? Event? Saying thanks? Share it in style with these small biz faves!',
      rating: 4.8,
      reviewCount: 29124,
      image: `${IMG}/image-container-product-image-9_1347.png`,
    },
    {
      badge: 'New options',
      title: 'Flyers',
      description: 'Engage customers on the go with scannable, one-sheet advertising.',
      rating: 4.7,
      reviewCount: 13011,
      image: `${IMG}/image-container-product-image-9_1371.png`,
    },
    {
      badge: 'New low price',
      title: 'Presentation Folders',
      description: 'Level up at events and presentations with custom-printed info packets.',
      rating: 4.5,
      reviewCount: 1486,
      image: `${IMG}/image-container-product-image-9_1395.png`,
    },
    {
      badge: 'New options',
      title: 'Self-Inking Stamps',
      description: 'Breeze through busy work and give documents a personal touch.',
      rating: 4.3,
      reviewCount: 8267,
      image: `${IMG}/image-container-product-image-9_1419.png`,
    },
    {
      badge: 'New low price',
      title: 'Notebooks',
      description: 'Add a custom logo, message or name to this workspace must-have.',
      rating: 4.7,
      reviewCount: 4344,
      image: `${IMG}/image-container-product-image-9_1443.png`,
    },
    {
      badge: 'New low price',
      title: 'Notepads',
      description: 'Personalize messages and reminders with this budget-friendly option.',
      rating: 4.7,
      reviewCount: 3459,
      image: `${IMG}/image-container-product-image-9_1467.png`,
    },
    {
      title: 'Wallet Checks',
      description: 'Give your payments more personality with your choice of design.',
      rating: 4.8,
      reviewCount: 1770,
      image: `${IMG}/image-container-product-image-9_1491.png`,
    },
    {
      badge: 'New options',
      title: 'Fridge Magnets',
      description: 'Make your logo stick with custom multi-use magnets.',
      rating: 4.6,
      reviewCount: 2035,
      image: `${IMG}/image-container-product-image-9_1513.png`,
    },
  ];

  readonly eddmImage = `${IMG}/eddm-promo-banner-eddm-image-9_1541.png`;
  readonly mailingImage = `${IMG}/mailing-services-banner-mailing-image-9_1555.png`;

  readonly newProducts: NewProductCard[] = [
    {
      badge: 'New',
      title: 'Gift Certificate Holders',
      description: 'Give your certificates a finishing touch that adds a special unboxing moment.',
      image: `${IMG}/image-wrapper-rectangle-9_1563.png`,
    },
    {
      badge: 'New options',
      title: 'Saddle-Stitch Booklets',
      description: 'Share projects, services and more in a professional, multi-page format.',
      rating: 4.7,
      reviewCount: 873,
      image: `${IMG}/image-wrapper-rectangle-9_1572.png`,
    },
    {
      badge: 'New options',
      title: 'Wire-Bound Booklets',
      description: 'Transform everyday notes, guides, and planners into flexible booklets.',
      rating: 4.8,
      reviewCount: 12,
      image: `${IMG}/image-wrapper-rectangle-9_1590.png`,
    },
  ];

  readonly exploreCategories: ExploreCategoryTile[] = [
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-tile-rectangle-9_1611.png` },
    {
      label: 'Postcards & Print Advertising',
      path: '/postcards-print-advertising',
      image: `${IMG}/category-tile-rectangle-9_1614.png`,
    },
    {
      label: 'Signs Banners & Posters',
      path: '/signs-banners-posters',
      image: `${IMG}/category-tile-rectangle-9_1617.png`,
    },
    { label: 'Labels & Stickers', path: '/labels-stickers', image: `${IMG}/category-tile-rectangle-9_1621.png` },
    { label: 'Packaging', path: '/packaging', image: `${IMG}/category-tile-rectangle-9_1624.png` },
    {
      label: 'Invitations Gifts & Stationery',
      path: '/invitations-gifts-stationery',
      image: `${IMG}/category-tile-rectangle-9_1627.png`,
    },
  ];

  readonly seoParagraphs = [
    "Small businesses come in all shapes and sizes, and so should the materials you have to run the show. Our custom print advertising and office supplies adapt to any business and workspace, with standout designs and professional printing available for everything from flyers to desk accessories. So whether you run an office, storefront, market booth or online shop, find a variety of tools to set you up for success.",
    "Once you've settled on some print advertising or office products, explore our library of customizable templates. Keep in mind that you can browse by your style and industry for a more narrowed search. Once you've selected a design, you'll be able to add colors, logos, slogans and more for a totally unique look. And don't forget that you can build the same cohesive look across multiple products based on your previous designs – just make sure you're signed into your PRINTGRAPHI account, and we'll give you some recommendations.",
    "Ready to get started? Explore our templates or upload your own design. We have design services available if you're looking for professional help, as well as 24-hour customer care for any other questions that may come up.",
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Can print advertisements be used with direct mail?',
      answer:
        'That depends on the product. Postcards can be sent via direct mail, and PRINTGRAPHI offers a few services to help you get it done. Every Door Direct Mail®: Create EDDM® postcards using our USPS-compliant templates. We send them to you with the necessary postage. All you have to do is drop them off at the post office. PRINTGRAPHI Mailing Services: Skip the trip and let us mail your postcards for you. Choose from multiple postcard styles and mailing list options to get a unique style that works for you.',
    },
    {
      question: 'Can I order custom amounts of print advertising?',
      answer:
        'Yes — most of our print advertising products let you choose from a range of quantities so you can order exactly what you need, whether that’s a small batch or a bulk run.',
    },
    {
      question: 'Can I use my branding across multiple marketing materials?',
      answer:
        'Absolutely. Save your logo, colors, and fonts to your account and apply them consistently across postcards, flyers, stationery, and more for a cohesive brand look.',
    },
  ];

  readonly helpLinks = ['My Account', 'Shipping', 'Contact & Support', 'Ideas & Advice', 'Accessibility'];
}
