import { Route, Routes } from '@angular/router';
import { productVariantResolver } from './shared/product-detail/product-variant.resolver';
import { authGuard } from './shared/auth/auth.guard';

type LoadComponent = NonNullable<Route['loadComponent']>;

/**
 * Every route is lazy (`loadComponent`) so the initial bundle carries only the
 * shell and whichever page was requested. Variant pages share one component and
 * resolve their product from the category catalogue before rendering.
 */

const home = () => import('./pages/home/home.component').then((m) => m.HomeComponent);
const variantPage = () =>
  import('./shared/product-detail/product-variant-page.component').then((m) => m.ProductVariantPageComponent);

/** Landing page + catalogue-driven `:slug` pages for one category. */
function category(path: string, title: string, loadComponent: LoadComponent, hasCatalog = false): Routes {
  const landing = { path, title, loadComponent };
  if (!hasCatalog) return [landing];
  return [
    landing,
    {
      path: `${path}/:slug`,
      loadComponent: variantPage,
      resolve: { product: productVariantResolver },
      data: { category: path },
    },
  ];
}

export const routes: Routes = [
  { path: '', title: 'Custom Printing for Small Business', loadComponent: home },
  { path: 'deals', title: 'Deals', loadComponent: home },

  ...category('business-cards', 'Business Cards', () =>
    import('./pages/business-cards/business-cards.component').then((m) => m.BusinessCardsComponent), true),
  ...category('postcards-print-advertising', 'Postcards & Print Advertising', () =>
    import('./pages/postcards-print-advertising/postcards-print-advertising.component').then(
      (m) => m.PostcardsPrintAdvertisingComponent,
    ), true),
  ...category('signs-banners-posters', 'Signs, Banners & Posters', () =>
    import('./pages/signs-banners-posters/signs-banners-posters.component').then((m) => m.SignsBannersPostersComponent)),
  ...category('labels-stickers', 'Labels & Stickers', () =>
    import('./pages/labels-stickers/labels-stickers.component').then((m) => m.LabelsStickersComponent)),
  ...category('clothing-bags', 'Clothing & Bags', () =>
    import('./pages/clothing-bags/clothing-bags.component').then((m) => m.ClothingBagsComponent)),
  ...category('promotional-products', 'Promotional Products', () =>
    import('./pages/promotional-products/promotional-products.component').then((m) => m.PromotionalProductsComponent)),
  ...category('packaging', 'Retail, Food & Shipping Packaging', () =>
    import('./pages/packaging/packaging.component').then((m) => m.PackagingComponent)),
  ...category('invitations-gifts-stationery', 'Invitations, Gifts & Stationery', () =>
    import('./pages/invitations-gifts-stationery/invitations-gifts-stationery.component').then(
      (m) => m.InvitationsGiftsStationeryComponent,
    )),
  ...category('wedding', 'Wedding', () => import('./pages/wedding/wedding.component').then((m) => m.WeddingComponent)),
  ...category('design-services', 'Design Services', () =>
    import('./pages/design-services/design-services.component').then((m) => m.DesignServicesComponent)),

  // Purchase flow (client-side until the backend lands).
  {
    path: 'studio/:category/:slug',
    loadComponent: () => import('./pages/design-studio/design-studio.component').then((m) => m.DesignStudioComponent),
    resolve: { product: productVariantResolver },
  },
  {
    path: 'cart',
    title: 'Your Cart',
    loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
  },

  // Account (session is client-side until the backend lands; see AuthService).
  {
    path: 'sign-in',
    title: 'Sign In',
    loadComponent: () => import('./pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
  },
  {
    path: 'my-account',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/my-account/my-account-layout.component').then((m) => m.MyAccountLayoutComponent),
    loadChildren: () => import('./pages/my-account/my-account.routes').then((m) => m.MY_ACCOUNT_ROUTES),
  },

  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
