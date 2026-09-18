import { Route, Routes } from '@angular/router';

/** An account page that only has an empty state so far. */
function section(path: string, title: string, emptyHeading: string, emptyBody?: string): Route {
  return {
    path,
    title,
    loadComponent: () => import('./account-section.component').then((m) => m.AccountSectionComponent),
    data: { heading: title, emptyHeading, ...(emptyBody ? { emptyBody } : {}) },
  };
}

/** Children of `/my-account`, mirroring vistaprint.com's account area. */
export const MY_ACCOUNT_ROUTES: Routes = [
  { path: '', title: 'My Account', loadComponent: () => import('./account-dashboard.component').then((m) => m.AccountDashboardComponent) },
  { path: 'profile', title: 'Account Profile', loadComponent: () => import('./account-profile.component').then((m) => m.AccountProfileComponent) },
  { path: 'design/projects', title: 'My Projects', loadComponent: () => import('./my-projects.component').then((m) => m.MyProjectsComponent) },
  section('design-services', 'My Design Services', "You haven't requested a design yet.", 'Work with a professional designer on your logo, cards or full brand.'),
  section('websites-digital', 'Websites & Digital', 'No websites or digital products yet.', 'Build a site, secure a domain or set up business email to go with your print.'),
  section('brand-kit', 'Brand Kit', "You haven't created a Brand Kit yet.", 'Save your logo, colours and fonts once and apply them to everything you design.'),
  section('uploads', 'My Uploads', "You haven't uploaded anything yet.", 'Images you upload in the studio will be kept here for your next design.'),
  section('favorites', 'My Favorites', "You haven't saved any favorites yet.", 'Tap the heart on any product to keep it here for later.'),
  section('mailing-lists', 'Mailing Lists', 'No mailing lists yet.', 'Upload an address list to send postcards straight to your customers.'),
  section('orders', 'Order History & Reorder', "You haven't placed any orders yet.", 'Once you order, everything you have printed will be here to track and reorder in a click.'),
  section('subscriptions', 'Subscriptions', "You don't have any subscriptions.", 'Repeat orders and services you subscribe to will appear here.'),
  section('settings', 'Account Settings', 'Password and communication preferences', 'Password changes and email preferences arrive with the account backend.'),
  section('payment-delivery', 'Payment & Delivery', 'No saved payment methods or addresses yet.', 'Saved cards and delivery addresses will appear here after your first checkout.'),
];
