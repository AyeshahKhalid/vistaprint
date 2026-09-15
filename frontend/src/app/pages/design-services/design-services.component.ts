import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { FaqAccordionComponent, FaqItem } from '../../shared/faq-accordion/faq-accordion.component';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';

const IMG = '/images/design-services';

interface ServiceCard {
  title: string;
  price: string;
  image: string;
}

interface WhyItem {
  icon: 'badge-check' | 'dollar-sign' | 'message-circle' | 'archive';
  title: string;
  description: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface Review {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-design-services',
  imports: [SiteShellComponent, BreadcrumbsComponent, FaqAccordionComponent],
  templateUrl: './design-services.component.html',
  styleUrl: './design-services.component.scss',
})
export class DesignServicesComponent {
  readonly breadcrumbs = [{ label: 'Home', path: '/' }, { label: 'Design Services' }];

  readonly heroImage = `${IMG}/hero-right-hero-image-22_100.png`;
  readonly sectionNav = ['Design services', 'Why PRINTGRAPHI?', 'How it works', 'FAQs'];

  readonly categoryPills = [
    'Popular', 'Business Cards', 'Packaging', 'Marketing Materials', 'Signs and Posters',
    'Stationery', 'Banners', 'Labels and Stickers', 'Clothing and Bags', 'Wedding',
  ];

  readonly serviceCards: ServiceCard[] = [
    { title: 'Pro Logo Design', price: '$97.00', image: `${IMG}/frame-card-image-22_143.png` },
    { title: 'Standard Business Cards Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_150.png` },
    { title: 'Flyers Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_157.png` },
    { title: 'Bi-Fold Brochures Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_164.png` },
    { title: 'Vinyl Banners Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_172.png` },
    { title: 'Retractable Banners Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_179.png` },
    { title: 'Standard Postcards Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_186.png` },
    { title: 'Bella Canvas Ultra-Soft Jersey T-shirt Design', price: 'From $10.00', image: `${IMG}/frame-card-image-22_193.png` },
  ];

  readonly whyItems: WhyItem[] = [
    { icon: 'badge-check', title: 'Leave it to the professionals', description: 'Our global community of vetted professional designers will create and deliver every pixel-perfect file and format you need.' },
    { icon: 'dollar-sign', title: 'Stick to your budget', description: 'From minor tweaks to complete redesigns, we offer a range of services to grow your brand without breaking the bank.' },
    { icon: 'message-circle', title: '24/7 customer support', description: 'Our Customer Care Team are here to support you with your design or print journey whenever you need it.' },
    { icon: 'archive', title: 'Design, print, store, deliver — all in one place', description: 'All your designs are stored within your PRINTGRAPHI account, ready to print onto marketing materials, merch, packaging and more.' },
  ];

  readonly processSteps: ProcessStep[] = [
    { number: 1, title: 'Complete your design brief', description: 'Fill out a quick online form with details about your design idea — think text, colors and images. Once you are ready, hit submit.' },
    { number: 2, title: 'Receive and review your design', description: 'Now its time to review your design, collaborate with your designer and share your feedback via a live video call or review online.' },
    { number: 3, title: 'Approve your design', description: 'Once you are happy, your finished design will be loaded into your PRINTGRAPHI account to view and print at any time.' },
  ];

  readonly logoFeatureImage = `${IMG}/logo-feature-left-premium-logo-mockups-22_304.png`;

  readonly reviews: Review[] = [
    { quote: 'The designer understood exactly what I needed. My logo looks incredible and the turnaround was so fast.', name: 'Sarah M.', role: 'Small Business Owner' },
    { quote: 'I was amazed by the quality for the price. PRINTGRAPHI made it so easy to get professional designs for my packaging.', name: 'James T.', role: 'E-commerce Founder' },
    { quote: 'From brief to final delivery everything was smooth. The design team was responsive and talented.', name: 'Michelle R.', role: 'Marketing Director' },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What is a revision?',
      answer:
        'A revision is an opportunity to provide feedback on your design and request changes. Each design service includes a set number of revisions so you can refine the design until it meets your expectations. Your designer will make adjustments based on your feedback and deliver an updated version.',
    },
    { question: 'How do I review my Design Services request?' },
    { question: "What if I'm not happy with my design?" },
  ];
}
