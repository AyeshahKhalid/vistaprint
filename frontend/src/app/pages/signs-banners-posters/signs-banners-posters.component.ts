import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/signs-banners-posters';

interface IconCategory {
  label: string;
  image: string;
}

interface Bestseller {
  badge: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
  ctaLabel: string;
  image: string;
}

interface FastShipItem {
  title: string;
  description: string;
  image: string;
}

interface NewProduct {
  badge: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  ctaLabel: string;
  image: string;
}

interface ExploreTile {
  label: string;
  path: string;
  image: string;
}

@Component({
  selector: 'app-signs-banners-posters',
  imports: [SiteShellComponent, RouterLink, SectionHeaderComponent, ProductCardComponent, FaqAccordionComponent],
  templateUrl: './signs-banners-posters.component.html',
  styleUrl: './signs-banners-posters.component.scss',
})
export class SignsBannersPostersComponent {
  readonly pageTitle = 'Custom Signs, Banners and Posters';

  readonly heroImage = `${IMG}/hero-right-hero-image-13_116.png`;
  readonly heroLinks = ['Vinyl Banners', 'Yard Signs', 'Retractable Banners'];

  readonly megaNav = [
    {
      heading: 'Banners',
      links: ['Hanging Banners', 'Standing Banners'],
    },
    {
      heading: 'Flags & Posters',
      links: ['Feather Flags', 'Teardrop Flags', 'Custom Posters', 'Poster Accessories', 'Car Signage'],
    },
    {
      heading: 'Signs',
      links: ['Yard Signs', 'Rigid Signs', 'A-Frame Signs', 'Tabletop Signs', 'Door and Desk Signs', 'Canvas Prints and Wall Art'],
    },
    {
      heading: 'Decals, Displays & Accessories',
      links: ['Car Decals and Magnets', 'Wall and Window Decals', 'Table Covers', 'Displays and Tents', 'Portable Counters', 'Signage Accessories'],
    },
  ];

  readonly iconCategories: IconCategory[] = [
    { label: 'Banners', image: `${IMG}/category-card-category-image-13_124.png` },
    { label: 'Flags', image: `${IMG}/category-card-category-image-13_127.png` },
    { label: 'Custom Posters', image: `${IMG}/category-card-category-image-13_130.png` },
    { label: 'Car Signage', image: `${IMG}/category-card-category-image-13_133.png` },
    { label: 'Signs', image: `${IMG}/category-card-category-image-13_136.png` },
    { label: 'Decals', image: `${IMG}/category-card-category-image-13_139.png` },
  ];

  readonly bestsellers: Bestseller[] = [
    {
      badge: 'New low price',
      title: 'Vinyl Banners',
      description: "Attention-grabbers that you'll love at prices you'll love too.",
      rating: 4.8,
      reviewCount: 21195,
      price: '$10.00',
      ctaLabel: 'Customize',
      image: `${IMG}/card-top-group-image-area-13_155.png`,
    },
    {
      badge: 'New options',
      title: 'Retractable Banners',
      description: 'Unroll to watch the customers roll in with this preassembled option.',
      rating: 4.7,
      reviewCount: 7722,
      price: '$18.99',
      ctaLabel: 'Customize',
      image: `${IMG}/card-top-group-image-area-13_179.png`,
    },
    {
      badge: 'New low price',
      title: 'Yard Signs',
      description: 'Turn every lawn into a front-page ad for your business.',
      rating: 4.7,
      reviewCount: 10839,
      price: '$11.99',
      ctaLabel: 'Customize',
      image: `${IMG}/card-top-group-image-area-13_203.png`,
    },
    {
      badge: 'New low price',
      title: 'Custom Car Magnets',
      description: 'Take your brand on the road with durable car magnets.',
      rating: 4.6,
      reviewCount: 13369,
      price: '$14.49',
      ctaLabel: 'Customize',
      image: `${IMG}/card-top-group-image-area-13_227.png`,
    },
  ];

  readonly boothPromoImage = `${IMG}/signs-banners-posters-page-promo-banner-booth-13_342.png`;
  readonly outdoorsPromoImage = `${IMG}/promo-banner-outdoors-outdoors-right-image-13_357.png`;

  readonly fastShipItems: FastShipItem[] = [
    {
      title: '2-Day Yard Signs',
      description: 'Turn any lawn into prime ad space delivered when you need it.',
      image: `${IMG}/card-top-product-image-13_369.png`,
    },
    {
      title: '2-Day Custom Car Magnets',
      description: 'Take your brand on the road with magnets ready in 2 days.',
      image: `${IMG}/card-top-product-image-13_380.png`,
    },
    {
      title: '2-Day Posters',
      description: 'Make a bold statement on vibrant posters ready when it counts.',
      image: `${IMG}/card-top-product-image-13_391.png`,
    },
    {
      title: '2-Day Foam Boards',
      description: 'Display information anywhere using boards that arrive on schedule.',
      image: `${IMG}/card-top-product-image-13_402.png`,
    },
  ];

  readonly newProducts: NewProduct[] = [
    {
      badge: 'New',
      title: 'Triangular Point of Sale Displays',
      description: 'Turn your messaging into a 3D marketing display that catches the eye.',
      rating: 4.6,
      reviewCount: 7,
      ctaLabel: 'Configure options',
      image: `${IMG}/img-container-product-image-13_419.png`,
    },
    {
      badge: 'Heavy duty',
      title: 'Parking Sign Post Bases',
      description: 'Hold signs steady with a heavy-duty 33 lb cast iron base and metal post.',
      rating: 4.8,
      reviewCount: 12,
      ctaLabel: 'Configure options',
      image: `${IMG}/img-container-product-image-13_442.png`,
    },
    {
      badge: 'Essential',
      title: 'U-Channel Posts',
      description: 'Use sturdy steel posts to keep your outdoor signs secure year-round.',
      rating: 3.5,
      reviewCount: 4,
      ctaLabel: 'Configure options',
      image: `${IMG}/img-container-product-image-13_465.png`,
    },
    {
      badge: 'Portable',
      title: 'X-Banner Frames',
      description: 'Set up your branded display in seconds with this lightweight frame.',
      rating: 3.5,
      reviewCount: 4,
      ctaLabel: 'Configure options',
      image: `${IMG}/img-container-product-image-13_488.png`,
    },
  ];

  readonly needHelpImage = `${IMG}/help-right-help-image-13_520.png`;

  readonly exploreCategories: ExploreTile[] = [
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-tile-category-image-13_525.png` },
    {
      label: 'Postcards & Print Ads',
      path: '/postcards-print-advertising',
      image: `${IMG}/category-tile-category-image-13_528.png`,
    },
    {
      label: 'Invitations & HomeComponent',
      path: '/invitations-gifts-stationery',
      image: `${IMG}/category-tile-category-image-13_531.png`,
    },
    { label: 'Labels & Stickers', path: '/labels-stickers', image: `${IMG}/category-tile-category-image-13_534.png` },
    { label: 'PackagingComponent', path: '/packaging', image: `${IMG}/category-tile-category-image-13_537.png` },
    { label: 'Clothing & Bags', path: '/clothing-bags', image: `${IMG}/category-tile-category-image-13_540.png` },
  ];

  readonly ugcImages = [
    `${IMG}/ugc-grid-ugc-tile-13_568.png`,
    `${IMG}/ugc-grid-ugc-tile-13_569.png`,
    `${IMG}/ugc-grid-ugc-tile-13_570.png`,
    `${IMG}/ugc-grid-ugc-tile-13_571.png`,
    `${IMG}/ugc-grid-ugc-tile-13_572.png`,
    `${IMG}/ugc-grid-ugc-tile-13_573.png`,
  ];

  readonly seoParagraphs = [
    "Whether you're trying to attract busy foot traffic on a crowded street or looking to guide customers safely inside your physical location, custom signage makes all the difference. At PRINTGRAPHI, we make designing and printing custom signs, banners, and posters easy, reliable, and accessible for businesses of all scopes.",
    'From temporary promo setups to heavy-duty, long-term exterior displays, we provide a wide selection of signs tailored to the specific environment you want to control:',
  ];

  readonly seoBullets = [
    'Outdoor promotions: Weather-ready vinyl banners, teardrop flags, or rigid yard signs designed to withstand the element.',
    'Storefront displays: Removable window decals, custom A-frame sidewalk signs, and large-format high-resolution paper posters.',
    'Events & trade shows: Lightweight retractable pop-up displays, tabletop displays, and branded table covers.',
    'Celebrations & gatherings: Personalized signs like wedding yard signs, outdoor birthday banners, or celebration announcements.',
  ];

  readonly seoParagraphsAfter = [
    "We use durable, industry-grade materials including robust weather-proof vinyl, corrugated plastic, thick cardboard, rigid foam, and rust-resistant aluminum metal. Each sign variant supports deep, high-resolution full-color printing to ensure your brand's colors pop precisely as imagined.",
    'Customization is at the core of what we do. You can easily upload a print-ready design of your own, choose and modify one of our thousands of industry-focused templates, or collaborate directly with our professional graphic designers to build a high-converting sign layout from scratch.',
    'PRINTGRAPHI makes it simple, fast, and budget-friendly to turn every local space into a reliable advertising channel. Start designing today.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Can I purchase accessories for custom signs on their own?',
      answer:
        'Yes, you can. We have a variety of signage accessory options available for purchase, including metal yard stakes, heavy-duty iron bases, flag hardware, A-frame sandwich boards, and hanging grommet strips. Explore our signage accessories page to see the full list of products.',
    },
    {
      question: 'Which personalized signs are best for long-term outdoor use?',
      answer:
        'Rigid aluminum signs, weather-proof vinyl banners, and rigid foam board signs hold up best to sun, rain, and wind over extended outdoor use.',
    },
    {
      question: 'What resolution and file type should I use when uploading my signage design?',
      answer:
        'We recommend high-resolution PDF or PNG files at 150-300 DPI at full print size, with text and logos converted to outlines or embedded fonts.',
    },
    {
      question: 'Do you offer custom sign sizes or shapes for my sign printing?',
      answer: 'Yes — most sign products support custom sizing, and several also offer custom die-cut shapes.',
    },
    {
      question: 'Can I order sample business signs?',
      answer: 'Select sign categories offer sample kits so you can check material quality before ordering in bulk.',
    },
    {
      question: 'Do you have any tips for where to place custom signs for business?',
      answer:
        'Place signs at eye level near high foot-traffic areas, ensure clear sightlines from the street, and avoid visual clutter around your message.',
    },
    {
      question: "What's the best way to design custom signs for business?",
      answer:
        'Keep your message short, use bold contrasting colors, and make sure your logo and key text are readable from a distance.',
    },
    {
      question: 'What is the turnaround time for personalized signs?',
      answer: 'Standard turnaround varies by product, with 2-day and next-day options available on select signage.',
    },
  ];
}
