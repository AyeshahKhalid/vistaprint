import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShell } from '../../shared/site-shell/site-shell';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { SectionHeader } from '../../shared/section-header/section-header';
import { ProductCard } from '../../shared/product-card/product-card';
import { FaqAccordion, FaqItem } from '../../shared/faq-accordion/faq-accordion';

const IMG = '/images/clothing-bags';

interface IconTile {
  label: string;
  image: string;
}

interface Bestseller {
  brand: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
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
  selector: 'app-clothing-bags',
  imports: [SiteShell, RouterLink, Breadcrumbs, SectionHeader, ProductCard, FaqAccordion],
  templateUrl: './clothing-bags.html',
  styleUrl: './clothing-bags.scss',
})
export class ClothingBags {
  readonly breadcrumbs = [{ label: 'Home', path: '/' }, { label: 'Clothing and Bags' }];

  readonly heroImage = `${IMG}/hero-right-column-hero-product-image-16_482.png`;
  readonly heroSecondaryLinks = ['Matching Team Outfits', 'Bestsellers', 'Custom Workwear'];

  readonly clothingItems: IconTile[] = [
    { label: 'T-shirts', image: `${IMG}/card-t-shirts-category-image-16_487.png` },
    { label: 'Polo Shirts', image: `${IMG}/card-polo-shirts-category-image-16_495.png` },
    { label: 'Sweatshirts & Hoodies', image: `${IMG}/card-sweatshirts-hoodies-category-image-16_503.png` },
    { label: 'Activewear', image: `${IMG}/card-activewear-category-image-16_511.png` },
    { label: 'Jackets', image: `${IMG}/card-jackets-category-image-16_519.png` },
    { label: 'Aprons', image: `${IMG}/card-aprons-category-image-16_527.png` },
  ];

  readonly bagItems: IconTile[] = [
    { label: 'Totes', image: `${IMG}/card-totes-category-image-16_538.png` },
    { label: 'Drawstring Bags', image: `${IMG}/card-drawstring-bags-category-image-16_546.png` },
    { label: 'Backpacks', image: `${IMG}/card-backpacks-category-image-16_554.png` },
    { label: 'Laptop Bags', image: `${IMG}/card-laptop-bags-category-image-16_562.png` },
    { label: 'Travel & Gym Bags', image: `${IMG}/card-travel-gym-bags-category-image-16_570.png` },
    { label: 'Cooler Bags', image: `${IMG}/card-cooler-bags-category-image-16_578.png` },
  ];

  readonly hatItems: IconTile[] = [
    { label: 'Baseball Caps', image: `${IMG}/card-baseball-caps-category-image-16_589.png` },
    { label: 'Trucker Caps', image: `${IMG}/card-trucker-caps-category-image-16_597.png` },
    { label: 'Beanies', image: `${IMG}/card-beanies-category-image-16_605.png` },
    { label: 'Performance Caps', image: `${IMG}/card-performance-caps-category-image-16_613.png` },
    { label: 'Visors', image: `${IMG}/card-visors-category-image-16_621.png` },
    { label: 'Custom Patch Caps', image: `${IMG}/card-custom-patch-caps-category-image-16_629.png` },
  ];

  readonly bestsellers: Bestseller[] = [
    {
      brand: 'GILDAN',
      title: 'Gildan Softstyle Unisex T-shirt',
      description: 'Make your design shine at your next event with this lightweight softstyle tee.',
      rating: 4.6,
      reviewCount: 3387,
      price: '$7.99',
      image: `${IMG}/bestseller-gildan-softstyle-unisex-t-shirt-product-image-16_669.png`,
    },
    {
      brand: 'PRINTGRAPHI',
      title: 'PrintGraphi Large Cotton Tote Bag',
      description: 'Carry your brand further with large canvas tote bags. 15in H x 18.5in W.',
      rating: 4.8,
      reviewCount: 3111,
      price: '$9.75',
      image: `${IMG}/bestseller-printgraphi-large-cotton-tote-bag-product-image-16_698.png`,
    },
    {
      brand: 'ELEVATE',
      title: 'Elevate Dade Polo Shirt',
      description: 'Outfit your team with custom polo shirts designed to keep everyone fresh.',
      rating: 4.7,
      reviewCount: 1398,
      price: '$16.99',
      image: `${IMG}/bestseller-elevate-dade-polo-shirt-product-image-16_727.png`,
    },
    {
      brand: 'PRINTGRAPHI',
      title: 'PrintGraphi Printed Baseball Cap',
      description: 'Keep your team stylish and your brand top of mind.',
      rating: 4.3,
      reviewCount: 4464,
      price: '$8.99',
      image: `${IMG}/bestseller-printgraphi-printed-baseball-cap-product-image-16_756.png`,
    },
  ];

  readonly whyChooseItems = [
    {
      title: 'Product Selection Made Easy',
      description: "Not sure what works best? We'll help you choose the perfect fit.",
      icon: 'box-select',
    },
    {
      title: 'Free Samples',
      description: 'See it, feel it, and love it. Try our materials before you commit.',
      icon: 'percent',
    },
    {
      title: 'Design Help',
      description: 'Need a second set of eyes? Our design specialists are here to help.',
      icon: 'palette',
    },
    {
      title: 'Shipping Assistance',
      description: 'Everything you need to know from our production line to your arrival.',
      icon: 'truck',
    },
  ];

  readonly trustedBrands = ['THE NORTH FACE', 'carhartt', 'adidas', 'Champion'];

  readonly matchingTeamImage = `${IMG}/matching-team-banner-lifestyle-image-16_995.png`;

  readonly collections: Collection[] = [
    {
      title: '100% Cotton T-shirts',
      description: 'Design breathable, stylish tees that offer premium comfortable wear.',
      image: `${IMG}/collection-card-0-rectangle-16_1008.png`,
    },
    {
      title: 'Custom Work Uniforms',
      description: 'Stand out on any job site with durable and reliable workwear.',
      image: `${IMG}/collection-card-1-rectangle-16_1016.png`,
    },
    {
      title: 'New Arrivals',
      description: 'Refresh your business wardrobe with the latest styles and cuts.',
      image: `${IMG}/collection-card-2-rectangle-16_1024.png`,
    },
    {
      title: 'Express Shipping',
      description: 'Get your custom corporate giveaways just in time for your event.',
      image: `${IMG}/collection-card-3-rectangle-16_1032.png`,
    },
  ];

  readonly exploreCategories: ExploreTile[] = [
    { label: 'Deals', path: '/deals', image: `${IMG}/cat-tile-r1-0-rectangle-16_1045.png` },
    { label: 'Business Cards', path: '/business-cards', image: `${IMG}/cat-tile-r1-1-rectangle-16_1048.png` },
    {
      label: 'Postcards & Print Advertising',
      path: '/postcards-print-advertising',
      image: `${IMG}/cat-tile-r1-2-rectangle-16_1051.png`,
    },
    {
      label: 'Signs, Banners & Posters',
      path: '/signs-banners-posters',
      image: `${IMG}/cat-tile-r2-0-rectangle-16_1055.png`,
    },
    { label: 'Labels & Stickers', path: '/labels-stickers', image: `${IMG}/cat-tile-r2-1-rectangle-16_1058.png` },
    { label: 'Packaging', path: '/packaging', image: `${IMG}/cat-tile-r2-2-rectangle-16_1061.png` },
  ];

  readonly ugcImages = [
    `${IMG}/ugc-col-1-rectangle-16_1077.png`,
    `${IMG}/ugc-col-1-rectangle-16_1078.png`,
    `${IMG}/asymmetric-ugc-grid-ugc-col-2-large-16_1079.png`,
    `${IMG}/ugc-col-3-rectangle-16_1081.png`,
    `${IMG}/ugc-col-3-rectangle-16_1082.png`,
  ];

  readonly seoParagraphs = [
    "Get the attention your brand deserves with custom clothing, branded apparel, and personalized bags designed to make your business, team, or event stand out. Adding your logo to custom apparel like T-shirts, hoodies, jackets, hats, and totes creates a cohesive, professional look that helps customers recognize and remember your brand.",
    "Custom clothing is also a great way to promote your business at trade shows, corporate events, and fundraisers while creating memorable keepsakes for group trips, schools, sports teams, and special occasions. Whether you're looking for employee uniforms, company apparel, business apparel, or branded swag for giveaways, PRINTGRAPHI offers a wide variety of high-quality products to fit every style, need, and budget.",
    'Simply upload your logo, artwork, or message and create clothing with designs made to stand out.',
    "Here you'll find a broad selection of custom apparel and trusted brands known for comfort, durability, and premium print quality. From everyday merch apparel and company swag to polished embroidered styles, our products are designed to help your brand look its best, wear after wear.",
    'So why choose PRINTGRAPHI? We make it easy to bring your clothing design ideas to life with intuitive customization tools, high-quality printing, and expert support every step of the way.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Any tips on how to customize clothing?',
      answer:
        'Our intuitive design studio makes it easy to create custom apparel for your brand: choose your desired product color and sizing options, upload your high-resolution logo or digital artwork, customize placement, size, added texts, and color palettes, preview your creation in high-definition real time, then review your order details and check out securely.',
    },
    {
      question: 'What materials is your custom clothing made from?',
      answer: 'We offer a range of materials including 100% cotton, cotton blends, polyester performance fabric, and fleece, depending on the product.',
    },
    {
      question: 'Is there a minimum order quantity for branded clothing?',
      answer: 'Most products can be ordered individually, though discounts apply at higher quantities for team and bulk orders.',
    },
    {
      question: 'What printing methods does PRINTGRAPHI offer?',
      answer: 'We offer screen printing, direct-to-garment printing, and embroidery depending on the product and design complexity.',
    },
  ];
}
