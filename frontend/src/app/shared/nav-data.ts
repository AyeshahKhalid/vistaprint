export interface MegaMenuLink {
  label: string;
  path: string;
  isViewAll?: boolean;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface NavCategory {
  label: string;
  path: string;
  highlight?: boolean;
  megaMenu?: MegaMenuColumn[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  { label: 'Deals', path: '/deals', highlight: true },
  { label: 'Holiday', path: '/holiday' },
  {
    label: 'Business Cards',
    path: '/business-cards',
    megaMenu: [
      {
        heading: 'Business Cards',
        links: [
          { label: 'Standard Business Cards', path: '/business-cards/standard' },
          { label: 'Premium Business Cards', path: '/business-cards/premium' },
          { label: 'Uncoated Business Cards', path: '/business-cards/uncoated' },
          { label: 'Glossy Business Cards', path: '/business-cards/glossy' },
          { label: 'Matte Business Cards', path: '/business-cards/matte' },
          { label: 'Shop all business cards', path: '/business-cards', isViewAll: true },
        ],
      },
      {
        heading: 'Specialty Finishes',
        links: [
          { label: 'Foil Accent Business Cards', path: '/business-cards/foil-accent' },
          { label: 'Raised Foil Business Cards', path: '/business-cards/raised-foil' },
          { label: 'Embossed Gloss Business Cards', path: '/business-cards/embossed-gloss' },
          { label: 'Painted Edge Business Cards', path: '/business-cards/painted-edge' },
          { label: 'Ultra Thick Business Cards', path: '/business-cards/ultra-thick' },
        ],
      },
      {
        heading: 'Shapes & Materials',
        links: [
          { label: 'Rounded Corner Cards', path: '/business-cards/rounded-corner' },
          { label: 'Circle Business Cards', path: '/business-cards/circle' },
          { label: 'Oval Business Cards', path: '/business-cards/oval' },
          { label: 'Plastic Business Cards', path: '/business-cards/plastic' },
          { label: 'Kraft Business Cards', path: '/business-cards/kraft' },
          { label: 'Linen Business Cards', path: '/business-cards/linen' },
        ],
      },
      {
        heading: 'By Use',
        links: [
          { label: 'Loyalty Cards', path: '/business-cards/loyalty-cards' },
          { label: 'Appointment Cards', path: '/business-cards/appointment-cards' },
          { label: 'QR Code Business Cards', path: '/business-cards/qr-code' },
          { label: 'Magnetic Business Cards', path: '/business-cards/magnetic' },
          { label: 'Business Card Holders', path: '/business-cards/holders' },
          { label: 'Free Sample Kit', path: '/business-cards/free-sample-kit' },
        ],
      },
    ],
  },
  {
    label: 'Postcards & Print Advertising',
    path: '/postcards-print-advertising',
    megaMenu: [
      {
        heading: 'Postcards',
        links: [
          { label: 'Standard', path: '/postcards-print-advertising/standard' },
          { label: 'Rounded Corner', path: '/postcards-print-advertising/rounded-corner' },
          { label: 'Die-Cut', path: '/postcards-print-advertising/die-cut' },
          { label: 'Postcard Mailing Services', path: '/postcards-print-advertising/mailing-services' },
          { label: 'Every Door Direct Mail® Postcards', path: '/postcards-print-advertising/eddm' },
          { label: 'Shop all postcards', path: '/postcards-print-advertising', isViewAll: true },
        ],
      },
      {
        heading: 'Marketing Materials',
        links: [
          { label: 'Flyers', path: '/postcards-print-advertising/flyers' },
          { label: 'Brochures', path: '/postcards-print-advertising/brochures' },
          { label: 'Folders', path: '/postcards-print-advertising/folders' },
          { label: 'Rack Cards', path: '/postcards-print-advertising/rack-cards' },
          { label: 'Magnets', path: '/postcards-print-advertising/magnets' },
          { label: 'Door Hangers', path: '/postcards-print-advertising/door-hangers' },
          { label: 'Tickets & Vouchers', path: '/postcards-print-advertising/tickets-vouchers' },
          { label: 'Tabletop Displays', path: '/postcards-print-advertising/tabletop-displays' },
          { label: 'Menus', path: '/postcards-print-advertising/menus' },
          { label: 'Shop all marketing materials', path: '/postcards-print-advertising', isViewAll: true },
        ],
      },
      {
        heading: 'Booklets, Catalogs & Magazines',
        links: [
          { label: 'Saddle-Stitch', path: '/postcards-print-advertising/saddle-stitch' },
          { label: 'Wire-Bound', path: '/postcards-print-advertising/wire-bound' },
          { label: 'Perfect-Bound', path: '/postcards-print-advertising/perfect-bound' },
          { label: 'Self-Cover', path: '/postcards-print-advertising/self-cover' },
          { label: 'Shop all booklets, catalogs & magazines', path: '/postcards-print-advertising', isViewAll: true },
        ],
      },
      {
        heading: 'Business Stationery',
        links: [
          { label: 'Stamps & Ink', path: '/postcards-print-advertising/stamps-ink' },
          { label: 'Notebooks Pads & Journals', path: '/postcards-print-advertising/notebooks-pads-journals' },
          { label: 'Notecards', path: '/postcards-print-advertising/notecards' },
          { label: 'Checks', path: '/postcards-print-advertising/checks' },
          { label: 'Envelopes & Mailing', path: '/postcards-print-advertising/envelopes-mailing' },
          { label: 'Letterhead', path: '/postcards-print-advertising/letterhead' },
          { label: 'Forms', path: '/postcards-print-advertising/forms' },
          { label: 'Calendars', path: '/postcards-print-advertising/calendars' },
          { label: 'Shop all business stationery', path: '/postcards-print-advertising', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Signs Banners & Posters',
    path: '/signs-banners-posters',
    megaMenu: [
      {
        heading: 'Banners',
        links: [
          { label: 'Hanging Banners', path: '/signs-banners-posters/hanging-banners' },
          { label: 'Standing Banners', path: '/signs-banners-posters/standing-banners' },
          { label: 'Shop all banners', path: '/signs-banners-posters', isViewAll: true },
        ],
      },
      {
        heading: 'Flags & Posters',
        links: [
          { label: 'Feather Flags', path: '/signs-banners-posters/feather-flags' },
          { label: 'Teardrop Flags', path: '/signs-banners-posters/teardrop-flags' },
          { label: 'Shop all flags', path: '/signs-banners-posters', isViewAll: true },
          { label: 'Custom Posters', path: '/signs-banners-posters/custom-posters' },
          { label: 'Poster Accessories', path: '/signs-banners-posters/poster-accessories' },
          { label: 'Shop all posters', path: '/signs-banners-posters', isViewAll: true },
          { label: 'Car Signage', path: '/signs-banners-posters/car-signage' },
          { label: 'Shop all car signage', path: '/signs-banners-posters', isViewAll: true },
        ],
      },
      {
        heading: 'Signs',
        links: [
          { label: 'Yard Signs', path: '/signs-banners-posters/yard-signs' },
          { label: 'Rigid Signs', path: '/signs-banners-posters/rigid-signs' },
          { label: 'A-Frame Signs', path: '/signs-banners-posters/a-frame-signs' },
          { label: 'Tabletop Signs', path: '/signs-banners-posters/tabletop-signs' },
          { label: 'Door and Desk Signs', path: '/signs-banners-posters/door-desk-signs' },
          { label: 'Canvas Prints and Wall Art', path: '/signs-banners-posters/canvas-prints-wall-art' },
          { label: 'Shop all signs', path: '/signs-banners-posters', isViewAll: true },
        ],
      },
      {
        heading: 'Decals, Displays & Accessories',
        links: [
          { label: 'Car Decals and Magnets', path: '/signs-banners-posters/car-decals-magnets' },
          { label: 'Wall and Window Decals', path: '/signs-banners-posters/wall-window-decals' },
          { label: 'Shop all decals', path: '/signs-banners-posters', isViewAll: true },
          { label: 'Table Covers', path: '/signs-banners-posters/table-covers' },
          { label: 'Displays and Tents', path: '/signs-banners-posters/displays-tents' },
          { label: 'Portable Counters', path: '/signs-banners-posters/portable-counters' },
          { label: 'Shop all displays', path: '/signs-banners-posters', isViewAll: true },
          { label: 'Signage Accessories', path: '/signs-banners-posters/signage-accessories' },
          { label: 'Shop all signage accessories', path: '/signs-banners-posters', isViewAll: true },
        ],
      },
    ],
  },
  { label: 'Labels & Stickers', path: '/labels-stickers' },
  { label: 'Clothing & Bags', path: '/clothing-bags' },
  { label: 'Promotional Products', path: '/promotional-products' },
  { label: 'PackagingComponent', path: '/packaging' },
  { label: 'Invitation', path: '/invitations-gifts-stationery' },
  { label: 'WeddingComponent', path: '/wedding' },
  { label: 'Design Services', path: '/design-services' },
];
