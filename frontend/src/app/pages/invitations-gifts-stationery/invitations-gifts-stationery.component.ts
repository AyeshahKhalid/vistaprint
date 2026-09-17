import { Component } from '@angular/core';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';

const IMG = '/images/invitations-gifts-stationery';

interface CategoryCard {
  label: string;
  image: string;
}

interface ProductItem {
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  salePrice?: string;
  saleBadge?: boolean;
  ctaLabel?: string;
  image: string;
}

interface EditorialCard {
  title: string;
  description: string;
  image: string;
}

interface InviteCard {
  title: string;
  image: string;
}

interface StationeryItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-invitations-gifts-stationery',
  imports: [SiteShellComponent, FaqAccordionComponent],
  templateUrl: './invitations-gifts-stationery.component.html',
  styleUrl: './invitations-gifts-stationery.component.scss',
})
export class InvitationsGiftsStationeryComponent {
  readonly heroImage = `${IMG}/hero-right-hero-image-18_1390.png`;
  readonly heroPills = ['Invitations and Cards', 'Home and Gifts', 'Personal Stationery'];
  readonly anchorNav = ['Bestsellers', 'Celebrations', 'Shop by Category', 'Invites and Announcements', 'New Arrivals', 'Personal Stationery'];

  readonly shopAllCategories: CategoryCard[] = [
    { label: 'Invitations and Announcements', image: `${IMG}/category-card-0-card-image-18_1404.png` },
    { label: 'Home and Gifts', image: `${IMG}/category-card-1-card-image-18_1410.png` },
    { label: 'Personal Stationery', image: `${IMG}/category-card-2-card-image-18_1416.png` },
    { label: 'Wall Art', image: `${IMG}/category-card-3-card-image-18_1422.png` },
    { label: 'Note Cards and Thank You Cards', image: `${IMG}/category-card-4-card-image-18_1428.png` },
    { label: 'Mugs Glasses and Drinkware', image: `${IMG}/category-card-5-card-image-18_1434.png` },
    { label: 'Tabletop Decor', image: `${IMG}/category-card-6-card-image-18_1440.png` },
    { label: 'Party Supplies and Signage', image: `${IMG}/category-card-7-card-image-18_1446.png` },
  ];

  readonly bestsellers: ProductItem[] = [
    { title: 'Wedding Invitations', rating: 4.8, reviewCount: 2340, price: '$0.60 each', image: `${IMG}/image-container-product-image-18_1462.png` },
    { title: 'Wall Calendars', rating: 4.7, reviewCount: 1890, price: '$24.99', salePrice: '$34.99', saleBadge: true, image: `${IMG}/image-container-product-image-18_1483.png` },
    { title: 'Photo Books', rating: 4.9, reviewCount: 3120, price: '$19.99', image: `${IMG}/image-container-product-image-18_1507.png` },
    { title: 'Custom Mugs', rating: 4.6, reviewCount: 4521, price: '$8.99', image: `${IMG}/image-container-product-image-18_1528.png` },
  ];

  readonly celebrations: EditorialCard[] = [
    { title: 'Graduation', description: 'Celebrate your favorite student with invites and party decor made to honor their big moment.', image: `${IMG}/editorial-card-0-card-bg-image-18_1554.png` },
    { title: 'Wedding', description: 'Explore gorgeous and affordable essentials for every stage of planning.', image: `${IMG}/editorial-card-1-card-bg-image-18_1559.png` },
    { title: 'Birthday', description: 'Matching banners, signs, napkins and more. Getting older just got way more fun.', image: `${IMG}/editorial-card-2-card-bg-image-18_1564.png` },
    { title: 'Baby', description: 'Celebrate the arrival of your little love with adorable shower invites and gifts.', image: `${IMG}/editorial-card-3-card-bg-image-18_1569.png` },
  ];

  readonly homeCollection: InviteCard[] = [
    { title: 'Mugs, Glasses and Drinkware', image: `${IMG}/large-home-card-0-card-image-18_1579.png` },
    { title: 'Tabletop Decor', image: `${IMG}/large-home-card-1-card-image-18_1585.png` },
    { title: 'Photo Books', image: `${IMG}/large-home-card-2-card-image-18_1591.png` },
    { title: 'Wall Art', image: `${IMG}/large-home-card-3-card-image-18_1597.png` },
  ];

  readonly inviteOccasions: InviteCard[] = [
    { title: 'Wedding Invites', image: `${IMG}/invite-card-0-card-image-18_1727.png` },
    { title: 'Graduation Invites', image: `${IMG}/invite-card-1-card-image-18_1731.png` },
    { title: 'Save the Dates', image: `${IMG}/invite-card-2-card-image-18_1735.png` },
    { title: 'Baby Shower Invites', image: `${IMG}/invite-card-3-card-image-18_1739.png` },
    { title: 'Kids Birthday Invites', image: `${IMG}/invite-card-4-card-image-18_1744.png` },
    { title: 'Bridal Shower Invites', image: `${IMG}/invite-card-5-card-image-18_1748.png` },
    { title: 'Adult Birthday Invites', image: `${IMG}/invite-card-6-card-image-18_1752.png` },
    { title: 'Charity and Awareness Events', image: `${IMG}/invite-card-7-card-image-18_1756.png` },
  ];

  readonly newArrivals: ProductItem[] = [
    { title: 'Custom Yoga Mats', rating: 4.5, reviewCount: 34, price: 'From $49.99', image: `${IMG}/image-wrapper-product-image-18_1766.png` },
    { title: 'Pet Face Pillows', rating: 4.7, reviewCount: 128, price: 'From $29.99', image: `${IMG}/image-wrapper-product-image-18_1783.png` },
    { title: 'Personalized Beach Towel', rating: 4.6, reviewCount: 67, price: 'From $34.99', image: `${IMG}/image-wrapper-product-image-18_1800.png` },
    { title: 'Custom Playing Cards', rating: 4.4, reviewCount: 45, price: 'From $19.99', image: `${IMG}/image-wrapper-product-image-18_1817.png` },
  ];

  readonly personalStationery: StationeryItem[] = [
    { title: 'Note Cards and Thank You Cards', image: `${IMG}/stationery-card-0-card-image-18_1838.png` },
    { title: 'Envelopes and Mailing', image: `${IMG}/stationery-card-1-card-image-18_1845.png` },
    { title: 'Notebooks Pads and Journals', image: `${IMG}/stationery-card-2-card-image-18_1852.png` },
    { title: 'Stamps and Ink', image: `${IMG}/stationery-card-3-card-image-18_1859.png` },
  ];

  readonly socialImages = [
    `${IMG}/grid-row-1-social-image-0-18_1871.png`,
    `${IMG}/grid-row-1-social-image-1-18_1872.png`,
    `${IMG}/grid-row-1-social-image-2-18_1873.png`,
    `${IMG}/grid-row-2-social-image-3-18_1875.png`,
    `${IMG}/grid-row-2-social-image-4-18_1876.png`,
    `${IMG}/grid-row-2-social-image-5-18_1877.png`,
  ];

  readonly seoParagraphs = [
    'Whether you are planning an unforgettable celebration or looking for the perfect personalized gift, PRINTGRAPHI has everything you need to make it special. From custom invitations and announcements to photo books, wall art, mugs, and home decor, we make it easy to create products that are uniquely yours.',
    'Our invitations collection covers every milestone, from elegant wedding suites and save-the-dates to graduation announcements, baby showers, and birthday parties. Choose from hundreds of professionally designed templates, or upload your own artwork for a truly custom creation.',
    'Looking to brighten your space? Explore our home and gifts collection, including custom canvas prints, framed photos, tabletop decor, blankets, and drinkware that make thoughtful gifts or beautiful additions to any room.',
    'Every product is expertly printed on premium materials with a satisfaction guarantee. Start designing today and create something you will love.',
  ];

  ratingRoundedDown(rating: number): number {
    return Math.floor(rating);
  }

  readonly faqs: FaqItem[] = [
    {
      question: 'What does stationery include?',
      answer:
        'Our stationery collection includes note cards, thank you cards, personalized notebooks, journals, stamps, envelopes, and mailing supplies. Everything you need to add a personal touch to your everyday correspondence and special occasions.',
    },
    { question: 'How do I choose a gift for a special event?' },
    { question: 'How do I choose invitations for my occasion?' },
  ];
}
