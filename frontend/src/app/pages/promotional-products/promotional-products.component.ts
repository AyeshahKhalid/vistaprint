import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';

const IMG = '/images/promotional-products';

interface IconCategory {
  label: string;
  image: string;
}

interface Bestseller {
  title: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  image: string;
}

interface GiftItem {
  label: string;
  image: string;
}

interface BudgetItem {
  title: string;
  priceRange: string;
  minQty: string;
  image: string;
}

interface Collection {
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
  selector: 'app-promotional-products',
  imports: [SiteShellComponent, RouterLink, BreadcrumbsComponent, SectionHeaderComponent, FaqAccordionComponent, DecimalPipe],
  templateUrl: './promotional-products.component.html',
  styleUrl: './promotional-products.component.scss',
})
export class PromotionalProductsComponent {
  readonly breadcrumbs = [{ label: 'Home', path: '/' }, { label: 'Promotional Products' }];

  readonly heroImage = `${IMG}/hero-right-hero-lifestyle-image-16_2184.png`;
  readonly categoryAnchors = ['Bestsellers', 'Gifts and giveaways', 'Budget-friendly picks', 'Popular brands', 'Our collections'];

  readonly dealsImage = `${IMG}/deals-feature-deals-image-16_2195.png`;

  readonly categories: IconCategory[] = [
    { label: 'Drinkware', image: `${IMG}/category-card-category-image-16_2207.png` },
    { label: 'Lifestyle & Personal Items', image: `${IMG}/category-card-category-image-16_2210.png` },
    { label: 'Office & Writing', image: `${IMG}/category-card-category-image-16_2213.png` },
    { label: 'Bags', image: `${IMG}/category-card-category-image-16_2216.png` },
    { label: 'Snacks and Candies', image: `${IMG}/category-card-category-image-16_2219.png` },
    { label: 'Technology', image: `${IMG}/category-card-category-image-16_2222.png` },
    { label: 'Clothing', image: `${IMG}/category-card-category-image-16_2225.png` },
  ];

  readonly bestsellers: Bestseller[] = [
    { title: 'PrintGraphi Design Wrap Ballpoint Pen', rating: 4.6, reviewCount: 12784, priceRange: '$0.89 - $3.49', image: `${IMG}/bestseller-card-0-product-image-16_2238.png` },
    { title: 'Gaming Mouse Pad', rating: 4.5, reviewCount: 29, priceRange: '$7.49 - $14.99', image: `${IMG}/bestseller-card-1-product-image-16_2259.png` },
    { title: 'PrintGraphi Photo Keychain', rating: 4.4, reviewCount: 814, priceRange: '$6.49 - $12.99', image: `${IMG}/bestseller-card-2-product-image-16_2280.png` },
    { title: 'PrintGraphi Urban Insulated Mug 16 oz', rating: 4.8, reviewCount: 93, priceRange: '$11.99 - $19.99', image: `${IMG}/bestseller-card-3-product-image-16_2301.png` },
  ];

  readonly giftItems: GiftItem[] = [
    { label: 'Pens', image: `${IMG}/gift-card-gift-image-16_2326.png` },
    { label: 'Tote Bags', image: `${IMG}/gift-card-gift-image-16_2329.png` },
    { label: 'Badge Holders & Lanyards', image: `${IMG}/gift-card-gift-image-16_2332.png` },
    { label: 'Mugs', image: `${IMG}/gift-card-gift-image-16_2335.png` },
    { label: 'Notes Pads & Journals', image: `${IMG}/gift-card-gift-image-16_2339.png` },
    { label: 'Travel Mugs & Tumblers', image: `${IMG}/gift-card-gift-image-16_2342.png` },
    { label: 'Keychains', image: `${IMG}/gift-card-gift-image-16_2345.png` },
    { label: 'Mouse Pads', image: `${IMG}/gift-card-gift-image-16_2348.png` },
  ];

  readonly budgetItems: BudgetItem[] = [
    { title: 'Sutton Metallic Aluminium Ballpoint Pen', priceRange: '$0.95 - $2.26 each', minQty: 'Min 50', image: `${IMG}/budget-card-0-product-image-16_2357.png` },
    { title: 'Chroma Spiral Bound Lined Notebook', priceRange: '$1.60 - $2.67 each', minQty: 'Min 50', image: `${IMG}/budget-card-1-product-image-16_2364.png` },
    { title: 'Round Button 3 inch Diameter', priceRange: '$0.49 - $3.28 each', minQty: 'Min 50', image: `${IMG}/budget-card-2-product-image-16_2371.png` },
    { title: 'Custom Hand Sanitizers', priceRange: '$1.25 - $2.99 each', minQty: 'Min 20', image: `${IMG}/budget-card-r2-0-product-image-16_2379.png` },
    { title: 'Engraved Carabiner Keychain', priceRange: '$0.99 - $1.80 each', minQty: 'Min 50', image: `${IMG}/budget-card-r2-1-product-image-16_2386.png` },
    { title: 'Bamboo Bottle Opener', priceRange: '$1.21 - $2.01 each', minQty: 'Min 50', image: `${IMG}/budget-card-r2-2-product-image-16_2393.png` },
  ];

  readonly whyItems = [
    { title: 'Product selection made easy', description: "Not sure what works best? We'll help guide you to the perfect branded choice.", icon: 'box' },
    { title: 'Free bag samples availability', description: 'See it, feel it, love it. Try our physical promotional products before you commit.', icon: 'shopping-bag' },
    { title: 'Design help', description: 'Need a second set of eyes? Our expert design team is just a single click away.', icon: 'edit' },
    { title: 'Shipping assistance', description: 'Everything you need to know from order placement to doorstep arrival.', icon: 'truck' },
  ];

  readonly popularBrands = ['YETI', 'Moleskine', 'PopSockets', 'Owala', 'Cuisinart', 'Stanley'];

  readonly collections: Collection[] = [
    { title: 'Event and Trade Show Giveaways', description: 'Drive traffic to your stand with fun and practical merch that draws eyes.', image: `${IMG}/collection-card-card-image-16_2541.png` },
    { title: 'Holiday Business Gifts', description: 'Find business gifts worth giving, from everyday essentials to premium picks.', image: `${IMG}/collection-card-card-image-16_2550.png` },
    { title: 'No Minimum Order Quantity', description: 'Explore custom promo products available in quantities as low as a single item.', image: `${IMG}/collection-card-card-image-16_2559.png` },
    { title: 'New Arrivals', description: 'Showcase your logo or message on our latest curated product collections.', image: `${IMG}/collection-card-card-image-16_2569.png` },
    { title: 'Groups and Teams', description: "Refresh your team's wardrobe with matching, highly durable outfits in minutes.", image: `${IMG}/collection-card-card-image-16_2578.png` },
    { title: 'Free Samples', description: 'Try before you buy with free samples to see and feel the high print quality firsthand.', image: `${IMG}/collection-card-card-image-16_2587.png` },
  ];

  readonly exploreCategories: ExploreTile[] = [
    { label: 'Deals', path: '/deals', image: `${IMG}/category-tile-category-image-16_2601.png` },
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/category-tile-category-image-16_2605.png` },
    { label: 'Postcards and Print Advertising', path: '/postcards-print-advertising', image: `${IMG}/category-tile-category-image-16_2609.png` },
    { label: 'Signs Banners and Posters', path: '/signs-banners-posters', image: `${IMG}/category-tile-category-image-16_2613.png` },
    { label: 'Labels and Stickers', path: '/labels-stickers', image: `${IMG}/category-tile-category-image-16_2618.png` },
    { label: 'Packaging', path: '/packaging', image: `${IMG}/category-tile-category-image-16_2622.png` },
    { label: 'Clothing and Bags', path: '/clothing-bags', image: `${IMG}/category-tile-category-image-16_2626.png` },
    { label: 'Invitations Gifts and Stationery', path: '/invitations-gifts-stationery', image: `${IMG}/category-tile-category-image-16_2630.png` },
  ];

  readonly socialImages = [
    `${IMG}/social-row-1-rectangle-16_2647.png`,
    `${IMG}/social-row-1-rectangle-16_2648.png`,
    `${IMG}/social-row-1-rectangle-16_2649.png`,
    `${IMG}/social-row-2-rectangle-16_2651.png`,
    `${IMG}/social-row-2-rectangle-16_2652.png`,
    `${IMG}/social-row-2-rectangle-16_2653.png`,
  ];

  readonly seoParagraphs = [
    'Make a long-lasting impression on clients and customers with practical promo products. From pens to water bottles to keychains to USB sticks and more, we have got a variety of promotional products and gifts that you can customize according to your business needs.',
    "From neighborhood cafes to growing tech companies, local gyms or online shops, the right promotional items help keep your brand in people's hands and on their minds.",
    'Whether you are looking for custom giveaways or simply want to say thank you, it is easy to create professional-looking promotional swag. Our promo products are both practical and memorable, available in different colors and designs that make your logo stand out.',
    'They are ideal for trade show and event swag, employee welcome kits, customer loyalty gifts and marketing campaigns that need a little extra spark.',
    'At PRINTGRAPHI, we offer a wide range of promotional gifts and branded merchandise for your employees and customers that will put your brand on display while making people smile. We are here to make the process easy for you with expert design assistance and customer support if you need it.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What are promotional products?',
      answer:
        'Promotional products are customizable items branded with your logo or message that you give to customers, employees, or event attendees. They range from everyday items like pens and mugs to premium gifts like insulated bottles and tech accessories.',
    },
    {
      question: 'How to use promotional items effectively?',
      answer: 'Give useful items that fit your audience, brand them clearly but tastefully, and tie distribution to a specific event or campaign for maximum impact.',
    },
    {
      question: 'How do I measure the ROI of my promotional items?',
      answer: 'Track redemption codes, new customer sign-ups, or social mentions tied to the giveaway to gauge engagement and reach.',
    },
    {
      question: 'Why do custom merchandise work?',
      answer: 'Physical items create repeated brand impressions over time and build goodwill through a useful, tangible gift.',
    },
    {
      question: 'Is there a minimum quantity to buy these custom promotional products?',
      answer: 'Most products have a minimum order quantity, though several collections and items support orders as low as a single unit.',
    },
    {
      question: 'What are some promotional product ideas for my business?',
      answer: 'Pens, tote bags, drinkware, keychains, and notebooks are versatile, budget-friendly options for most businesses.',
    },
    {
      question: 'Do you have custom promotional giveaways with express shipping options?',
      answer: 'Yes — select products offer expedited production and shipping for time-sensitive events.',
    },
    {
      question: 'Do you have any tips to design merch?',
      answer: 'Keep your logo simple and high-contrast, and choose products your audience will actually want to keep and use.',
    },
  ];
}
