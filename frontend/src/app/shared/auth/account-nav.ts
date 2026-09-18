export interface AccountLink {
  label: string;
  path: string;
}

export interface AccountSection {
  heading: string;
  links: AccountLink[];
}

/**
 * The account area's navigation, in vistaprint.com's grouping and order. The
 * header dropdown shows the flat list; the account sidebar shows the sections.
 */
export const ACCOUNT_SECTIONS: AccountSection[] = [
  {
    heading: 'Account',
    links: [
      { label: 'Dashboard', path: '/my-account' },
      { label: 'Account Profile', path: '/my-account/profile' },
    ],
  },
  {
    heading: 'Workspace',
    links: [
      { label: 'My Projects', path: '/my-account/design/projects' },
      { label: 'My Design Services', path: '/my-account/design-services' },
      { label: 'Websites & Digital', path: '/my-account/websites-digital' },
      { label: 'Brand Kit', path: '/my-account/brand-kit' },
      { label: 'My Uploads', path: '/my-account/uploads' },
      { label: 'My Favorites', path: '/my-account/favorites' },
      { label: 'Mailing Lists', path: '/my-account/mailing-lists' },
    ],
  },
  {
    heading: 'Orders',
    links: [
      { label: 'Order History & Reorder', path: '/my-account/orders' },
      { label: 'Subscriptions', path: '/my-account/subscriptions' },
    ],
  },
  {
    heading: 'Settings',
    links: [
      { label: 'Account Settings', path: '/my-account/settings' },
      { label: 'Payment & Delivery', path: '/my-account/payment-delivery' },
    ],
  },
];

export const ACCOUNT_LINKS: AccountLink[] = ACCOUNT_SECTIONS.flatMap((section) => section.links);
