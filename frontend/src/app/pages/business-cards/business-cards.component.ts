import { Component } from '@angular/core';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/business-cards';

interface PricingOption {
  tier: string;
  description: string;
  price: string;
  priceDetail: string;
  ctaLabel: string;
  image: string;
}

interface ShapeOption {
  label: string;
  reviewCount: string;
  price: string;
  image: string;
}

interface Swatch {
  label: string;
  color: string;
}

interface Template {
  category: string;
  image: string;
}

interface UseCase {
  eyebrow: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
  priceDetail: string;
  ctaLabel: string;
  image: string;
}

interface HolderOption {
  eyebrow: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
  ctaLabel: string;
  image: string;
}

interface WhyUsItem {
  title: string;
  description: string;
  icon: 'star' | 'users' | 'truck';
}

interface GalleryPost {
  handle: string;
  image: string;
}

@Component({
  selector: 'app-business-cards',
  imports: [SiteShellComponent, BreadcrumbsComponent, SectionHeaderComponent, ProductCardComponent, FaqAccordionComponent],
  templateUrl: './business-cards.component.html',
  styleUrl: './business-cards.component.scss',
})
export class BusinessCardsComponent {
  readonly breadcrumbs = [{ label: 'HomeComponent', path: '/' }, { label: 'Business Cards' }];

  readonly heroImage = `${IMG}/hero-right-column-hero-product-image-8_95.png`;

  readonly pricingOptions: PricingOption[] = [
    {
      tier: 'Standard',
      description: 'Our tried-and-true cards, available in a variety of papers, finishes and shapes.',
      price: '$10.00',
      priceDetail: '$0.20 each / 50 units',
      ctaLabel: 'Shop standard',
      image: `${IMG}/option-card-0-card-image-8_102.png`,
    },
    {
      tier: 'Premium',
      description: 'Thicker or textured papers with an eye-catching look and interesting feel.',
      price: '$18.99',
      priceDetail: '$0.19 each / 100 units',
      ctaLabel: 'Shop premium',
      image: `${IMG}/option-card-1-card-image-8_116.png`,
    },
    {
      tier: 'Deluxe',
      description: 'Our most unique options, including plastic, triple-color layer, and painted edge cards.',
      price: '$27.99',
      priceDetail: '$0.28 each / 100 units',
      ctaLabel: 'Shop deluxe',
      image: `${IMG}/option-card-2-card-image-8_130.png`,
    },
  ];

  readonly shapes: ShapeOption[] = [
    { label: 'Rounded Corners', reviewCount: '(2.4k)', price: 'From $11.49', image: `${IMG}/square-image-wrap-shape-image-8_150.png` },
    { label: 'Square', reviewCount: '(1.1k)', price: 'From $12.99', image: `${IMG}/square-image-wrap-shape-image-8_164.png` },
    { label: 'Circle', reviewCount: '(890)', price: 'From $19.99', image: `${IMG}/square-image-wrap-shape-image-8_178.png` },
    { label: 'Oval', reviewCount: '(420)', price: 'From $18.49', image: `${IMG}/square-image-wrap-shape-image-8_192.png` },
    { label: 'Leaf', reviewCount: '(310)', price: 'From $21.99', image: `${IMG}/square-image-wrap-shape-image-8_206.png` },
  ];

  readonly swatches: Swatch[] = [
    { label: 'Matte', color: '#c9c9c9' },
    { label: 'Glossy', color: '#8fb8e8' },
    { label: 'Embossed Gloss', color: '#d8c39a' },
    { label: 'Uncoated', color: '#e8dfc8' },
    { label: 'White Plastic', color: '#f2f2f2' },
    { label: 'Soft Touch', color: '#b8a89a' },
    { label: 'Foil Accent', color: '#d4af37' },
    { label: 'Painted Edge', color: '#e2725b' },
    { label: 'Ultra Thick', color: '#4b5563' },
    { label: 'Clear Plastic', color: '#cfe8f0' },
    { label: 'Pearl', color: '#f0e6e6' },
    { label: 'Natural Textured', color: '#c2b280' },
  ];

  readonly matteFinishImage = `${IMG}/detail-panel-left-matte-finish-image-8_261.png`;
  readonly matteHighlights = [
    'Coated and classic, with a smooth, shine-free finish',
    'Feel: Silky smooth front and back',
    'Thickness: 14pt standard, 16pt premium or 18pt premium plus',
  ];

  readonly templates: Template[] = [
    { category: 'Elegant Minimalist', image: `${IMG}/template-card-0-template-mockup-9_488.png` },
    { category: 'Botanical Garden', image: `${IMG}/template-card-1-template-mockup-9_493.png` },
    { category: 'Neon Modernist', image: `${IMG}/template-card-2-template-mockup-9_498.png` },
    { category: 'Kraft Studio', image: `${IMG}/template-card-3-template-mockup-9_503.png` },
  ];

  readonly templateFilters = [
    'Most Popular', 'Agriculture & Farming', 'Animals & Pet Care', 'Appointment Cards',
    'Arts, Crafts, & Design', 'Automotive & Transportation', 'Beauty & Spa',
    'Construction & Real Estate', 'Education Services', 'Entertainment & Recreation',
    'Finance & Insurance', 'Food & Beverage', 'Health & Social Services',
    'Household Services', 'Information & Technology', 'Loyalty Cards', 'Manufacturing',
    'Non-Profits, Charity, & Politics', 'Professional Services', 'Public Safety',
    'QR Code', 'Religious & Spiritual', 'Retail & Sales', 'Thank You',
    'Travel & Accommodation',
  ];

  readonly fastDeliveryImage = `${IMG}/banner-right-banner-image-9_523.png`;

  readonly useCases: UseCase[] = [
    {
      eyebrow: 'Loyalty Cards',
      title: 'Loyalty Business Cards',
      description: 'Punch and stamp templates, with space for logo and text.',
      rating: 4.8,
      reviewCount: 1138,
      price: '$15.99',
      priceDetail: '$0.16 each / 100 units',
      ctaLabel: 'Shop loyalty',
      image: `${IMG}/product-card-card-image-9_530.png`,
    },
    {
      eyebrow: 'QR Code Cards',
      title: 'QR Code Business Cards',
      description: 'Scannable codes to help people connect with you online.',
      rating: 4.8,
      reviewCount: 2557,
      price: '$10.00',
      priceDetail: '$0.20 each / 50 units',
      ctaLabel: 'Shop QR code',
      image: `${IMG}/product-card-card-image-9_559.png`,
    },
    {
      eyebrow: 'Appointment Cards',
      title: 'Appointment Cards',
      description: 'Pen-friendly templates for a handy scheduling tool.',
      rating: 4.9,
      reviewCount: 286,
      price: '$18.99',
      priceDetail: '$0.19 each / 100 units',
      ctaLabel: 'Shop appointment',
      image: `${IMG}/product-card-card-image-9_588.png`,
    },
    {
      eyebrow: 'Magnetic Cards',
      title: 'Magnetic Business Cards',
      description: 'Convenient and flexible vinyl that sticks to most metallic surfaces.',
      rating: 4.7,
      reviewCount: 3488,
      price: '$17.99',
      priceDetail: '$0.72 each / 25 units',
      ctaLabel: 'Shop magnetic',
      image: `${IMG}/product-card-card-image-9_617.png`,
    },
  ];

  readonly holders: HolderOption[] = [
    {
      eyebrow: 'Acrylic Holder',
      title: 'Black Acrylic Holders',
      description: 'Smooth black acrylic with custom front printing. Holds up to 40 cards.',
      rating: 4.8,
      reviewCount: 1610,
      price: '$8.99',
      ctaLabel: 'Shop black acrylic',
      image: `${IMG}/product-card-card-image-9_651.png`,
    },
    {
      eyebrow: 'Clear Holder',
      title: 'Clear Acrylic Holders',
      description: 'Budget-friendly acrylic with optional front printing. Holds up to 40 cards.',
      rating: 4.8,
      reviewCount: 1610,
      price: '$8.99',
      ctaLabel: 'Shop clear acrylic',
      image: `${IMG}/product-card-card-image-9_679.png`,
    },
    {
      eyebrow: 'Desk Stand',
      title: 'Steel Desk Holders',
      description: 'Solid black base for tabletop use. Holds up to 60 standard cards.',
      rating: 4.9,
      reviewCount: 1701,
      price: '$11.99',
      ctaLabel: 'Shop steel desk',
      image: `${IMG}/product-card-card-image-9_707.png`,
    },
    {
      eyebrow: 'Leather Wallet',
      title: 'Black Leather Holders',
      description: 'Leather with metal and fabric details. Holds up to 25 standard cards.',
      rating: 4.8,
      reviewCount: 1647,
      price: '$16.99',
      ctaLabel: 'Shop black leather',
      image: `${IMG}/product-card-card-image-9_735.png`,
    },
  ];

  readonly sampleKitImage = `${IMG}/banner-left-image-kit-mockup-9_765.png`;

  readonly whyUs: WhyUsItem[] = [
    {
      title: '5-star quality for $15 (or less)',
      description:
        "Business cards are kinda our thing. There's nowhere else you can expect results this good for a price this low.",
      icon: 'star',
    },
    {
      title: '75 million+ customers',
      description: 'In fact, more people come to us for business cards than any other company. Why go anywhere else?',
      icon: 'users',
    },
    {
      title: 'Fast, express shipping options',
      description: 'Pair that with user-friendly design tools (and help on standby), and getting your new cards is a breeze.',
      icon: 'truck',
    },
  ];

  readonly seoParagraphs = [
    "Whether you're networking at a conference, meeting new clients, or just introducing yourself to someone new, a custom business card makes a lasting impression. With PRINTGRAPHI, you can design and print professional business cards that perfectly represent your brand—no design experience needed.",
    'Choose from hundreds of professionally designed templates or start from scratch with our easy-to-use design tools. Upload your own logo, adjust colors and fonts, and create a card that\'s uniquely yours. From standard matte cards to premium options like foil accents, painted edges, and textured papers, we offer a wide range of materials and finishes to match your style.',
    'Our business cards are printed on high-quality stock with crisp, vibrant colors that make your design pop. Whether you prefer a classic look or something more modern and creative, we have options for every industry and aesthetic.',
    'Looking for something specific? Try our rounded corner cards for a softer look, square cards for a modern twist, or die-cut shapes like circles, ovals, and leaves for a truly unique first impression. We also offer specialty options like magnetic business cards, QR code cards, and loyalty cards.',
    'Need your cards fast? We offer next-day and 2-day delivery options so you can get professional business cards on a tight timeline. Plus, with free economy shipping on orders over $100, you can stock up and save.',
    "Not sure where to start? Order our free business card sample kit to feel our papers and finishes in person before you commit. It's the perfect way to find the right look and feel for your brand.",
  ];

  readonly galleryPosts: GalleryPost[] = [
    { handle: '@_pocket_pebbles', image: `${IMG}/frame-rectangle-9_943.png` },
    { handle: '@wild_things_art', image: `${IMG}/frame-rectangle-9_946.png` },
    { handle: '@mariannas.beauty.room', image: `${IMG}/frame-rectangle-9_949.png` },
    { handle: '@abbeymaedesigns', image: `${IMG}/frame-rectangle-9_952.png` },
    { handle: '@blossom_nails2021', image: `${IMG}/frame-rectangle-9_955.png` },
    { handle: '@twojsbakehouse', image: `${IMG}/frame-rectangle-9_958.png` },
  ];

  readonly sizesTable = [
    { shape: 'Standard', size: '3.5" x 2"' },
    { shape: 'Rounded Corners', size: '3.5" x 2"' },
    { shape: 'Square', size: '2.5" x 2.5"' },
    { shape: 'Circle', size: '2.5" diameter' },
    { shape: 'Oval', size: '3.5" x 2"' },
    { shape: 'Leaf', size: '3.5" x 2"' },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What sizes and thicknesses are available for business cards?',
      answerIntro: "That depends on the shape you choose. Here's a rundown of our business card sizes and thicknesses by shape:",
      table: [
        { label: 'Standard', value: '3.5" x 2"' },
        { label: 'Rounded Corners', value: '3.5" x 2"' },
        { label: 'Square', value: '2.5" x 2.5"' },
        { label: 'Circle', value: '2.5" diameter' },
        { label: 'Oval', value: '3.5" x 2"' },
        { label: 'Leaf', value: '3.5" x 2"' },
      ],
      answerOutro:
        'Card thickness is measured in points (pt). Standard cards are 14pt, premium cards are 16pt, and premium plus cards are 18pt. All cards include a standard bleed area and are designed to fit in a standard wallet.',
    },
    { question: 'How do I design a custom business card online?' },
    { question: 'What information should I include on my business card, and how should it be organized?' },
    { question: 'Should I put anything on the back of my business card?' },
    { question: 'How quickly can I receive my order?' },
    { question: 'Can I order sample business cards?' },
    { question: 'What material and finish should I use for my custom business card?' },
    { question: 'Do you offer holders and cases for my business cards?' },
  ];
}
