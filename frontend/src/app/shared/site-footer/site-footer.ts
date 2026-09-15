import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly helpLinks: FooterLink[] = [
    { label: 'My Account', path: '/account' },
    { label: 'Shipping', path: '/shipping' },
    { label: 'Contact & Support', path: '/support' },
    { label: 'Ideas & Advice', path: '/ideas-advice' },
    { label: 'Accessibility', path: '/accessibility' },
  ];

  readonly companyLinks: FooterLink[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Ambassador Program', path: '/ambassador-program' },
    { label: 'PRINTGRAPHI Advantage', path: '/advantage' },
    { label: 'For Investors', path: '/investors' },
    { label: 'For Media', path: '/media' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Do Not Sell or Share My Info', path: '/privacy-choices' },
  ];

  readonly paymentMethods = ['AMEX', 'DISCOVER', 'MC', 'PAYPAL', 'VISA', 'APPLE PAY'];

  readonly currentYear = new Date().getFullYear();
}
