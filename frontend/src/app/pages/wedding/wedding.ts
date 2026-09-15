import { Component } from '@angular/core';
import { FaqAccordion, FaqItem } from '../../shared/faq-accordion/faq-accordion';
import { SiteShell } from '../../shared/site-shell/site-shell';

const IMG = '/images/wedding';

interface CategoryTile {
  label: string;
  image: string;
}

interface BestsellerItem {
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
}

interface ExtraItem {
  title: string;
  description: string;
}

interface ThemeTile {
  label: string;
  image: string;
}

interface NewProduct {
  title: string;
  price: string;
  image: string;
}

interface BenefitItem {
  title: string;
  description: string;
}

interface ArticleCard {
  category: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-wedding',
  imports: [SiteShell, FaqAccordion],
  templateUrl: './wedding.html',
  styleUrl: './wedding.scss',
})
export class Wedding {
  readonly heroImage = `${IMG}/hero-right-hero-image-22_608.png`;
  readonly promoHighlights = [
    'Up to 50% off invites, enclosure cards, and RSVPs',
    'Get 50 invites for under $50',
    'Envelopes and backside printing always included',
  ];
  readonly heroPills = ['2026 Designs', 'All Invites', 'Free Sample Kit'];

  readonly shopAllWedding: CategoryTile[] = [
    { label: 'Save the Dates', image: `${IMG}/frame-rectangle-22_614.png` },
    { label: 'Invitation Suites', image: `${IMG}/frame-rectangle-22_618.png` },
    { label: 'Ceremony & Reception Essentials', image: `${IMG}/frame-rectangle-22_622.png` },
    { label: 'Wedding Signs', image: `${IMG}/frame-rectangle-22_626.png` },
    { label: 'Parties & Showers', image: `${IMG}/frame-rectangle-22_631.png` },
    { label: 'Thank You Cards', image: `${IMG}/frame-rectangle-22_635.png` },
    { label: 'Keepsakes', image: `${IMG}/frame-rectangle-22_639.png` },
    { label: 'Free Sample Kit', image: `${IMG}/frame-rectangle-22_643.png` },
  ];

  readonly bestsellers: BestsellerItem[] = [
    { title: 'Wedding Invites', rating: 4.8, reviewCount: 3420, price: '$0.48', originalPrice: '$0.96', badge: '50% off', image: `${IMG}/image-container-rectangle-22_654.png` },
    { title: 'Save the Date Cards', rating: 4.7, reviewCount: 1890, price: '$0.54', originalPrice: '$1.08', badge: '50% off', image: `${IMG}/image-container-rectangle-22_679.png` },
    { title: 'Foam Board Signs', rating: 4.6, reviewCount: 567, price: '$19.99', image: `${IMG}/image-container-rectangle-22_704.png` },
    { title: 'Custom Napkins', rating: 4.5, reviewCount: 890, price: '$0.42', image: `${IMG}/image-container-rectangle-22_726.png` },
  ];

  readonly weddingExtras: ExtraItem[] = [
    { title: 'Free Sample Kit', description: 'A 10-piece set of our most popular wedding stationery in a variety of papers, shapes, and more.' },
    { title: 'Free Addressing', description: "Tackle addressing with ease. Simply upload your addresses and we'll print them right on your envelopes." },
    { title: 'Free QR Code Generator', description: 'From RSVPs to registries, give guests instant access to all your wedding details with custom codes.' },
  ];

  readonly designHelpImage = `${IMG}/frame-rectangle-22_773.png`;

  readonly themes: ThemeTile[] = [
    { label: 'Storybook Romance', image: `${IMG}/frame-rectangle-22_784.png` },
    { label: 'Hand-Crafted Details', image: `${IMG}/frame-rectangle-22_788.png` },
    { label: 'Vintage Luxury', image: `${IMG}/frame-rectangle-22_792.png` },
    { label: 'Graphic & Editorial', image: `${IMG}/frame-rectangle-22_797.png` },
    { label: 'Blooms & Blossoms', image: `${IMG}/frame-rectangle-22_801.png` },
    { label: 'Coastal Chic', image: `${IMG}/frame-rectangle-22_805.png` },
  ];

  readonly newProducts: NewProduct[] = [
    { title: 'Custom Matches', price: 'From $24.99', image: `${IMG}/image-container-rectangle-22_888.png` },
    { title: 'Letterpress Wedding Invitations', price: 'From $2.49', image: `${IMG}/image-container-rectangle-22_897.png` },
    { title: 'Favor Bags', price: 'From $0.89', image: `${IMG}/image-container-rectangle-22_906.png` },
    { title: 'Wax Seals', price: 'From $1.29', image: `${IMG}/image-container-rectangle-22_916.png` },
    { title: 'Guest Books', price: 'From $34.99', image: `${IMG}/image-container-rectangle-22_925.png` },
    { title: 'Stadium Cups', price: 'From $1.49', image: `${IMG}/image-container-rectangle-22_934.png` },
  ];

  readonly finishingTouchesImage = `${IMG}/left-column-rectangle-22_943.png`;

  readonly benefits: BenefitItem[] = [
    { title: 'Quality that fits your budget', description: 'All of our wedding products are made and priced with you in mind. That means the best for your dream day without breaking the bank.' },
    { title: 'Designs for everyone', description: 'Explore designs that complement any theme or style, then tailor every detail to make it yours.' },
    { title: 'Here when you need us', description: 'From product questions to professional design help and more, our team of experts is here every step of the way.' },
    { title: 'Trusted printing experience', description: 'PRINTGRAPHI brings years of professional printing experience to help bring your custom wedding products to life.' },
  ];

  readonly articles: ArticleCard[] = [
    { category: 'Guides & Advice', title: 'How to plan your dream day step-by-step', image: `${IMG}/article-card-rectangle-22_994.png` },
    { category: 'Trends', title: '2026 wedding trends', image: `${IMG}/article-card-rectangle-22_999.png` },
    { category: 'Inspiration', title: 'Find your wedding color palette', image: `${IMG}/article-card-rectangle-22_1004.png` },
    { category: 'Checklists', title: 'Our complete stationery checklist', image: `${IMG}/article-card-rectangle-22_1010.png` },
    { category: 'Design Ideas', title: 'Vintage-style invitation ideas', image: `${IMG}/article-card-rectangle-22_1015.png` },
    { category: 'Quotes', title: '40+ quotes to elevate save the dates', image: `${IMG}/article-card-rectangle-22_1020.png` },
  ];

  readonly seoParagraphs = [
    'Your wedding stationery is the first glimpse guests get of your special day. From save the dates that build anticipation to invitations that set the tone, PRINTGRAPHI helps you create a cohesive suite that reflects your unique love story.',
    'Choose from thousands of professionally designed templates or start fresh with your own vision. Our easy-to-use design tools let you customize every detail, from paper stock and color palette to fonts and finishing touches like foil and letterpress.',
    'Whether you are planning an intimate garden ceremony or a grand ballroom celebration, we have stationery for every style and budget. Explore matching suites that carry your design across save the dates, invitations, RSVPs, programs, menus, place cards, and thank you notes.',
    'Not sure where to start? Our wedding planning guides and design experts are here to help you every step of the way, from choosing your paper to addressing your envelopes.',
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What does stationery mean for a wedding?',
      answer:
        'Wedding stationery refers to all the printed materials you use throughout your wedding journey. This includes save the dates, invitations, RSVP cards, programs, menus, place cards, thank you notes, and more. A cohesive stationery suite helps set the tone and theme for your celebration.',
    },
    { question: 'What should I put on wedding stationery?' },
    { question: 'Does wedding stationery have to match?' },
    { question: 'How can I create a matching wedding stationery suite?' },
    { question: 'What wedding stationery do I need?' },
    { question: 'How do I plan my wedding stationery suite?' },
    { question: 'How do I package my wedding stationery?' },
  ];
}
