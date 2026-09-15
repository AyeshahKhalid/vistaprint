import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/packaging';

interface LineupCard {
  title: string;
  description: string;
  image: string;
}

interface NeedCard {
  title: string;
  description: string;
  image: string;
}

interface ProductItem {
  badge?: string;
  title: string;
  description?: string;
  rating: number;
  reviewCount: number;
  price: string;
  priceLabel?: string;
  ctaLabel: string;
  image: string;
}

interface AccessoryItem {
  title: string;
  description: string;
  image: string;
}

interface ExploreTile {
  label: string;
  path: string;
  image: string;
}

@Component({
  selector: 'app-packaging',
  imports: [SiteShellComponent, RouterLink, FaqAccordionComponent],
  templateUrl: './packaging.component.html',
  styleUrl: './packaging.component.scss',
})
export class PackagingComponent {
  readonly heroImage = `${IMG}/hero-right-hero-image-18_89.png`;
  readonly heroQuickLinks = ['New Arrivals', 'Packaging Samples', 'Reorder'];
  readonly categoryNav = ['All Packaging', 'New Arrivals', 'Samples', 'Bestsellers', 'Accessories'];

  readonly lineupCards: LineupCard[] = [
    { title: 'Custom Mailer Boxes', description: 'Protect your products while putting your brand front and center', image: `${IMG}/frame-card-image-18_105.png` },
    { title: 'Product Boxes', description: 'Create retail-ready packaging that makes your products stand out', image: `${IMG}/frame-card-image-18_115.png` },
    { title: 'Shopping and Gift Bags', description: 'Turn every carry-out into a branded experience for customers', image: `${IMG}/frame-card-image-18_125.png` },
    { title: 'Custom Pouches', description: 'Flexible packaging designed for products that deserve attention', image: `${IMG}/frame-card-image-18_135.png` },
  ];

  readonly needCards: NeedCard[] = [
    { title: 'Shipping Packaging', description: 'Get each order where its going safely and on brand', image: `${IMG}/frame-grid-card-18_153.png` },
    { title: 'Retail Packaging', description: 'Give your products the retail presence they deserve', image: `${IMG}/frame-grid-card-18_158.png` },
    { title: 'Food Packaging', description: 'Serve up any dish drink or treat with your brand on top', image: `${IMG}/frame-grid-card-18_162.png` },
    { title: 'Unboxing Essentials', description: 'Turn every delivery into a moment customers wont forget', image: `${IMG}/frame-grid-card-18_162.png` },
  ];

  readonly newProducts: ProductItem[] = [
    { badge: 'New', title: 'Kraft Takeout Bowls', rating: 4.5, reviewCount: 42, price: '$89.99', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_173.png` },
    { badge: 'New', title: 'Custom Paper Merchandise Bags', rating: 4.3, reviewCount: 28, price: '$64.99', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_200.png` },
    { badge: 'New', title: 'Kraft Mailers', rating: 4.7, reviewCount: 156, price: '$49.99', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_227.png` },
    { badge: 'New', title: 'Paper Bags', rating: 4.4, reviewCount: 89, price: '$54.99', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_254.png` },
  ];

  readonly samplesPromoImage = `${IMG}/promo-left-promo-image-18_281.png`;

  readonly preprintedSamples: ProductItem[] = [
    { title: 'Mailer Box Samples', rating: 4.8, reviewCount: 234, price: '$4.99', ctaLabel: 'View Sample', image: `${IMG}/sample-card-0-sample-image-18_294.png` },
    { title: 'Shipping Box Samples', rating: 4.7, reviewCount: 167, price: '$3.99', ctaLabel: 'View Sample', image: `${IMG}/sample-card-1-sample-image-18_318.png` },
    { title: 'Square Mailer Box Samples', rating: 4.6, reviewCount: 89, price: '$4.99', ctaLabel: 'View Sample', image: `${IMG}/sample-card-2-sample-image-18_342.png` },
    { title: 'Tuck Top Mailer Box Samples', rating: 4.5, reviewCount: 56, price: '$5.99', ctaLabel: 'View Sample', image: `${IMG}/sample-card-3-sample-image-18_366.png` },
  ];

  readonly whyUs = [
    { number: 1, title: 'Fast and Easy Shipping', description: 'Get your packaging moving quickly so you can keep your business moving.' },
    { number: 2, title: 'Quantities as Low as 1', description: 'Need just one? Start small and scale your order when you are ready.' },
    { number: 3, title: 'Custom Samples', description: "See it, feel it and make sure it's right before committing to a larger order." },
  ];

  readonly bestsellers: ProductItem[] = [
    { badge: 'Bestseller', title: 'Hang Tags', description: 'Perfect for retail apparel and branding', rating: 4.6, reviewCount: 342, price: '$29.99', priceLabel: 'From', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_599.png` },
    { badge: 'Bestseller', title: 'Custom Mailer Boxes', description: 'E-commerce ready shipping & unboxing experience', rating: 4.8, reviewCount: 1204, price: '$3.49 each', priceLabel: 'From', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_624.png` },
    { badge: 'Bestseller', title: 'Stand-Up Pouches', description: 'Resealable barrier bags for coffee and snacks', rating: 4.5, reviewCount: 267, price: '$149.99', priceLabel: 'From', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_649.png` },
    { badge: 'Bestseller', title: 'Die-Cut Handle Bags', description: 'Durable retail carrying bags with sleek look', rating: 4.7, reviewCount: 189, price: '$89.99', priceLabel: 'From', ctaLabel: 'Customize', image: `${IMG}/image-container-product-image-18_674.png` },
  ];

  readonly accessories: AccessoryItem[] = [
    { title: 'Custom Tissue Paper', description: 'Wrap items beautifully with lightweight patterned sheet paper', image: `${IMG}/accessory-card-0-acc-image-18_703.png` },
    { title: 'Custom Wrapping Paper', description: 'Premium wrapping for upscale gifting and solid retail box setups', image: `${IMG}/accessory-card-1-acc-image-18_708.png` },
    { title: 'Crinkle Paper', description: 'Eco-friendly nested accordion shred fill for cushioning shipping items', image: `${IMG}/accessory-card-2-acc-image-18_713.png` },
    { title: 'Custom Ribbon', description: 'Satin fabric ribbons personalized with your typography or logo', image: `${IMG}/accessory-card-3-acc-image-18_718.png` },
  ];

  readonly designServicesImage = `${IMG}/section-design-services-designer-image-18_727.png`;

  readonly exploreCategories: ExploreTile[] = [
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-tile-0-category-image-18_743.png` },
    { label: 'Print Advertising', path: '/postcards-print-advertising', image: `${IMG}/category-tile-1-category-image-18_748.png` },
    { label: 'Signs and Banners', path: '/signs-banners-posters', image: `${IMG}/category-tile-2-category-image-18_753.png` },
    { label: 'Labels and Stickers', path: '/labels-stickers', image: `${IMG}/category-tile-3-category-image-18_758.png` },
    { label: 'Clothing and Bags', path: '/clothing-bags', image: `${IMG}/category-tile-4-category-image-18_763.png` },
    { label: 'Promotional Products', path: '/promotional-products', image: `${IMG}/category-tile-5-category-image-18_768.png` },
    { label: 'Invitations and Stationery', path: '/invitations-gifts-stationery', image: `${IMG}/category-tile-6-category-image-18_773.png` },
  ];

  readonly seoParagraphs = [
    "Great packaging does more than protect what's inside—it creates an impression before your customer even opens the box.",
    'PRINTGRAPHI makes it easy to create custom boxes, mailers, bags, pouches and more that put your brand exactly where it belongs.',
    'From shipping supplies and retail-ready product packaging to food service and unboxing essentials, build a packaging experience that feels unmistakably yours.',
    'Add your logo, choose your colors, and personalize every detail with easy-to-use design tools and professional templates.',
    'Not sure where to start? Explore samples, test different formats, and choose the packaging that works best for your products and customers.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'How do I design my custom product packaging?',
      answer:
        'Use our online design tool to upload your logo, artwork and brand colors. Choose from professional templates or start from scratch. Preview your design in 3D before ordering.',
    },
    { question: 'Do you offer custom sizes for packaging?' },
    { question: 'What is the difference between shipping packaging and product packaging?' },
    { question: 'Can I get samples before placing a larger order?' },
    { question: 'Do you offer sustainable packaging options?' },
    { question: 'What is the minimum order quantity?' },
    { question: 'What are the benefits of custom packaging for branding?' },
    { question: 'What are the turnaround times and shipping options?' },
    { question: 'Do you offer bulk discounts?' },
  ];
}
