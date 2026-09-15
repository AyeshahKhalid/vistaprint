import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CategoryLink {
  label: string;
  path: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-category-nav-bar',
  imports: [RouterLink],
  templateUrl: './category-nav-bar.html',
  styleUrl: './category-nav-bar.css',
})
export class CategoryNavBar {
  readonly categories: CategoryLink[] = [
    { label: 'Deals', path: '/deals', highlight: true },
    { label: 'Holiday', path: '/holiday' },
    { label: 'Business Cards', path: '/business-cards' },
    { label: 'Postcards & Print Advertising', path: '/postcards-print-advertising' },
    { label: 'Signs Banners & Posters', path: '/signs-banners-posters' },
    { label: 'Labels & Stickers', path: '/labels-stickers' },
    { label: 'Clothing & Bags', path: '/clothing-bags' },
    { label: 'Promotional Products', path: '/promotional-products' },
    { label: 'Packaging', path: '/packaging' },
    { label: 'Invitation', path: '/invitations-gifts-stationery' },
    { label: 'Wedding', path: '/wedding' },
    { label: 'Design Services', path: '/design-services' },
  ];
}
