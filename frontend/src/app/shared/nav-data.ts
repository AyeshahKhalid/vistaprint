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

// Category order, labels and column groupings follow the client sitemap, which
// matches vistaprint.com's live mega-menu. Navigation is functionality, so the
// real site is the source of truth here rather than Figma's static mockups.
export const NAV_CATEGORIES: NavCategory[] = [
  {
    label: 'Deals',
    path: '/deals',
    highlight: true,
    megaMenu: [
      {
        heading: 'Deals & Offers',
        links: [
          { label: 'All Deals', path: '/deals/all' },
          { label: 'Business Card Deals', path: '/deals/business-cards' },
          { label: 'Signs, Banners & Posters Deals', path: '/deals/signs-banners-posters' },
          { label: 'Stickers & Labels 15% Off', path: '/deals/stickers-labels' },
          { label: 'Customer Favorites', path: '/deals/customer-favorites' },
          { label: 'Promotional Product Deals', path: '/deals/promotional-products' },
          { label: 'Military Discount', path: '/deals/military-discount' },
          { label: 'Shop all deals', path: '/deals', isViewAll: true },
        ],
      },
    ],
  },
  { label: 'Holiday', path: '/holiday' },
  {
    label: 'Business Cards',
    path: '/business-cards',
    megaMenu: [
      {
        heading: 'Standard Cards',
        links: [
          { label: 'Standard Cards', path: '/business-cards/standard' },
          { label: 'Matte', path: '/business-cards/matte' },
          { label: 'Glossy', path: '/business-cards/glossy' },
          { label: 'Uncoated', path: '/business-cards/uncoated' },
          { label: 'Shop all standard cards', path: '/business-cards/standard', isViewAll: true },
        ],
      },
      {
        heading: 'Unique Shapes',
        links: [
          { label: 'Rounded Corner', path: '/business-cards/rounded-corner' },
          { label: 'Square', path: '/business-cards/square' },
          { label: 'Circle', path: '/business-cards/circle' },
          { label: 'Oval', path: '/business-cards/oval' },
          { label: 'Leaf', path: '/business-cards/leaf' },
        ],
      },
      {
        heading: 'Premium Cards',
        links: [
          { label: 'Premium Cards', path: '/business-cards/premium' },
          { label: 'Natural Textured', path: '/business-cards/natural-textured' },
          { label: 'Soft Touch', path: '/business-cards/soft-touch' },
          { label: 'Cotton', path: '/business-cards/cotton' },
          { label: 'Linen', path: '/business-cards/linen' },
          { label: 'Kraft', path: '/business-cards/kraft' },
          { label: 'Shop all premium cards', path: '/business-cards/premium', isViewAll: true },
        ],
      },
      {
        heading: 'Deluxe Cards',
        links: [
          { label: 'Deluxe Cards', path: '/business-cards/deluxe' },
          { label: 'Premium Plus', path: '/business-cards/premium-plus' },
          { label: 'Painted Edge', path: '/business-cards/painted-edge' },
          { label: 'Ultra Thick', path: '/business-cards/ultra-thick' },
          { label: 'Plastic', path: '/business-cards/plastic' },
          { label: 'Shop all deluxe cards', path: '/business-cards/deluxe', isViewAll: true },
        ],
      },
      {
        heading: 'Special Finishes',
        links: [
          { label: 'Foil Accent', path: '/business-cards/foil-accent' },
          { label: 'Embossed Gloss', path: '/business-cards/embossed-gloss' },
          { label: 'Raised Foil', path: '/business-cards/raised-foil' },
        ],
      },
      {
        heading: 'Digital Business Cards',
        links: [
          { label: 'QR Code Business Cards', path: '/business-cards/qr-code' },
        ],
      },
      {
        heading: 'Fast-Delivery Business Cards',
        links: [
          { label: 'Fast-Delivery Business Cards', path: '/business-cards/fast-delivery' },
          { label: 'Next-Day Business Cards', path: '/business-cards/next-day' },
          { label: '2-Day Business Cards', path: '/business-cards/2-day' },
          { label: 'Shop all fast-delivery cards', path: '/business-cards/fast-delivery', isViewAll: true },
        ],
      },
      {
        heading: 'Holders & More',
        links: [
          { label: 'Business Card Holders', path: '/business-cards/holders' },
          { label: 'Magnetic Business Cards', path: '/business-cards/magnetic' },
          { label: 'Business Card Stickers', path: '/business-cards/stickers' },
          { label: 'Loyalty Cards', path: '/business-cards/loyalty-cards' },
          { label: 'Appointment Cards', path: '/business-cards/appointment-cards' },
          { label: 'Free Business Card Sample Kit', path: '/business-cards/free-sample-kit' },
          { label: 'Reorder Business Cards', path: '/business-cards/reorder' },
          { label: 'Browse Designs', path: '/business-cards/browse-designs' },
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
          { label: 'Postcards', path: '/postcards-print-advertising/postcards' },
          { label: 'Standard Postcards', path: '/postcards-print-advertising/standard' },
          { label: 'Rounded Corner Postcards', path: '/postcards-print-advertising/rounded-corner' },
          { label: 'Die-Cut Postcards', path: '/postcards-print-advertising/die-cut' },
          { label: 'Postcard Mailing Services', path: '/postcards-print-advertising/mailing-services' },
          { label: 'EDDM® Postcards', path: '/postcards-print-advertising/eddm' },
          { label: 'Shop all postcards', path: '/postcards-print-advertising/postcards', isViewAll: true },
        ],
      },
      {
        heading: 'Booklets, Catalogs & Magazines',
        links: [
          { label: 'Booklets, Catalogs & Magazines', path: '/postcards-print-advertising/booklets-catalogs-magazines' },
          { label: 'Saddle-Stitch Booklets', path: '/postcards-print-advertising/saddle-stitch' },
          { label: 'Wire-Bound Booklets', path: '/postcards-print-advertising/wire-bound' },
          { label: 'Perfect Bound Booklets', path: '/postcards-print-advertising/perfect-bound' },
          { label: 'Self-Cover Booklets', path: '/postcards-print-advertising/self-cover' },
        ],
      },
      {
        heading: 'Marketing Materials',
        links: [
          { label: 'Marketing Materials', path: '/postcards-print-advertising/marketing-materials' },
          { label: 'Flyers', path: '/postcards-print-advertising/flyers' },
          { label: 'Brochures', path: '/postcards-print-advertising/brochures' },
          { label: 'Folders', path: '/postcards-print-advertising/folders' },
          { label: 'Rack Cards', path: '/postcards-print-advertising/rack-cards' },
          { label: 'Magnets', path: '/postcards-print-advertising/magnets' },
          { label: 'Door Hangers', path: '/postcards-print-advertising/door-hangers' },
          { label: 'Custom Tickets', path: '/postcards-print-advertising/custom-tickets' },
          { label: 'Tabletop Displays', path: '/postcards-print-advertising/tabletop-displays' },
          { label: 'Menus', path: '/postcards-print-advertising/menus' },
          { label: 'Calendars', path: '/postcards-print-advertising/calendars' },
        ],
      },
      {
        heading: 'Business Stationery',
        links: [
          { label: 'Business Stationery', path: '/postcards-print-advertising/business-stationery' },
          { label: 'Stamps & Ink', path: '/postcards-print-advertising/stamps-ink' },
          { label: 'Notebooks, Pads & Journals', path: '/postcards-print-advertising/notebooks-pads-journals' },
          { label: 'Notecards', path: '/postcards-print-advertising/notecards' },
          { label: 'Checks', path: '/postcards-print-advertising/checks' },
          { label: 'Shipping Mailers & Envelopes', path: '/postcards-print-advertising/shipping-mailers-envelopes' },
          { label: 'Custom Bookmarks', path: '/postcards-print-advertising/custom-bookmarks' },
          { label: 'Company Letterhead', path: '/postcards-print-advertising/company-letterhead' },
          { label: 'Business Invitations', path: '/postcards-print-advertising/business-invitations' },
          { label: 'Gift Certificates', path: '/postcards-print-advertising/gift-certificates' },
          { label: 'Gift Certificate Holders', path: '/postcards-print-advertising/gift-certificate-holders' },
        ],
      },
      {
        heading: 'Fast-Delivery Marketing Materials',
        links: [
          { label: 'Fast-Delivery Marketing Materials', path: '/postcards-print-advertising/fast-delivery' },
          { label: '2-Day Postcards', path: '/postcards-print-advertising/2-day-postcards' },
          { label: '2-Day Flyers', path: '/postcards-print-advertising/2-day-flyers' },
        ],
      },
      {
        heading: 'Postcards by Size',
        links: [
          { label: 'Small (4.2" x 5.5")', path: '/postcards-print-advertising/small' },
          { label: 'Standard (4" x 6")', path: '/postcards-print-advertising/standard-size' },
          { label: 'Large (5" x 7")', path: '/postcards-print-advertising/large' },
          { label: 'Jumbo (6" x 11")', path: '/postcards-print-advertising/jumbo' },
        ],
      },
      {
        heading: 'Holiday Products',
        links: [
          { label: 'Rectangular Address Stamps', path: '/postcards-print-advertising/rectangular-address-stamps' },
          { label: 'Circular Address Stamps', path: '/postcards-print-advertising/circular-address-stamps' },
          { label: 'Calendar Magnets', path: '/postcards-print-advertising/calendar-magnets' },
          { label: 'Raised Foil Postcards', path: '/postcards-print-advertising/raised-foil-postcards' },
          { label: 'Raised Foil Rack Cards', path: '/postcards-print-advertising/raised-foil-rack-cards' },
        ],
      },
      {
        heading: 'Other',
        links: [
          { label: 'Free Business Sample Kit', path: '/postcards-print-advertising/free-sample-kit' },
          { label: 'Marketing Materials Accessories', path: '/postcards-print-advertising/accessories' },
          { label: 'Shop all print advertising', path: '/postcards-print-advertising', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Signs, Banners & Posters',
    path: '/signs-banners-posters',
    megaMenu: [
      {
        heading: 'Banners',
        links: [
          { label: 'Banners', path: '/signs-banners-posters/banners' },
          { label: 'Hanging Banners', path: '/signs-banners-posters/hanging-banners' },
          { label: 'Standing Banners', path: '/signs-banners-posters/standing-banners' },
          { label: 'Custom Flags', path: '/signs-banners-posters/custom-flags' },
          { label: 'Shop all banners', path: '/signs-banners-posters/banners', isViewAll: true },
        ],
      },
      {
        heading: 'Posters and Foam Boards',
        links: [
          { label: 'Posters and Foam Boards', path: '/signs-banners-posters/posters-foam-boards' },
          { label: 'Custom Posters', path: '/signs-banners-posters/custom-posters' },
          { label: 'Foam Boards', path: '/signs-banners-posters/foam-boards' },
          { label: 'Car Signage', path: '/signs-banners-posters/car-signage' },
        ],
      },
      {
        heading: 'Signs',
        links: [
          { label: 'Signs', path: '/signs-banners-posters/signs' },
          { label: 'Yard Signs', path: '/signs-banners-posters/yard-signs' },
          { label: 'Rigid Signs & Boards', path: '/signs-banners-posters/rigid-signs-boards' },
          { label: 'A-Frame Signs', path: '/signs-banners-posters/a-frame-signs' },
          { label: 'Tabletop Signs', path: '/signs-banners-posters/tabletop-signs' },
          { label: 'Door & Desk Signs', path: '/signs-banners-posters/door-desk-signs' },
          { label: 'Canvas Prints & Wall Art', path: '/signs-banners-posters/canvas-prints-wall-art' },
          { label: 'Shop all signs', path: '/signs-banners-posters/signs', isViewAll: true },
        ],
      },
      {
        heading: 'Decals',
        links: [
          { label: 'Decals', path: '/signs-banners-posters/decals' },
          { label: 'Wall & Window Decals', path: '/signs-banners-posters/wall-window-decals' },
          { label: 'Car Decals & Magnets', path: '/signs-banners-posters/car-decals-magnets' },
        ],
      },
      {
        heading: 'Displays',
        links: [
          { label: 'Displays', path: '/signs-banners-posters/displays' },
          { label: 'Table Covers', path: '/signs-banners-posters/table-covers' },
          { label: 'Displays & Tents', path: '/signs-banners-posters/displays-tents' },
          { label: 'Portable Counters', path: '/signs-banners-posters/portable-counters' },
          { label: 'Signage Accessories', path: '/signs-banners-posters/signage-accessories' },
        ],
      },
      {
        heading: 'Fast-Delivery Signage',
        links: [
          { label: 'Fast-Delivery Signage', path: '/signs-banners-posters/fast-delivery' },
          { label: '2-Day Yard Signs', path: '/signs-banners-posters/2-day-yard-signs' },
          { label: '2-Day Foam Boards', path: '/signs-banners-posters/2-day-foam-boards' },
          { label: '2-Day Posters', path: '/signs-banners-posters/2-day-posters' },
          { label: '2-Day Custom Car Magnets', path: '/signs-banners-posters/2-day-car-magnets' },
        ],
      },
      {
        heading: 'Bestsellers',
        links: [
          { label: 'Vinyl Banners', path: '/signs-banners-posters/vinyl-banners' },
          { label: 'Retractable Banners', path: '/signs-banners-posters/retractable-banners' },
          { label: 'Custom Tablecloths', path: '/signs-banners-posters/custom-tablecloths' },
          { label: 'Custom Car Magnets', path: '/signs-banners-posters/custom-car-magnets' },
          { label: 'Feather Flags', path: '/signs-banners-posters/feather-flags' },
        ],
      },
      {
        heading: 'Shop by Bulk Quantity',
        links: [
          { label: 'Bulk Yard Signs', path: '/signs-banners-posters/bulk-yard-signs' },
          { label: 'Bulk Posters', path: '/signs-banners-posters/bulk-posters' },
          { label: 'Bulk Bumper Stickers', path: '/signs-banners-posters/bulk-bumper-stickers' },
          { label: 'Bulk Custom Car Magnets', path: '/signs-banners-posters/bulk-car-magnets' },
        ],
      },
      {
        heading: 'Shop by Use Case',
        links: [
          { label: 'Trade Show Supplies', path: '/signs-banners-posters/trade-show-supplies' },
          { label: 'Real Estate Signs', path: '/signs-banners-posters/real-estate-signs' },
          { label: 'Election & Political Signs', path: '/signs-banners-posters/election-political-signs' },
          { label: 'Wedding & Party Signs', path: '/signs-banners-posters/wedding-party-signs' },
          { label: 'Outdoor Signs', path: '/signs-banners-posters/outdoor-signs' },
          { label: 'Community Events', path: '/signs-banners-posters/community-events' },
        ],
      },
      {
        heading: 'New Arrivals',
        links: [
          { label: 'New Arrivals', path: '/signs-banners-posters/new-arrivals' },
          { label: 'Life-Size Cutouts', path: '/signs-banners-posters/life-size-cutouts' },
          { label: 'Canopy Tent Walls', path: '/signs-banners-posters/canopy-tent-walls' },
          { label: 'Triangle Point of Sale Displays', path: '/signs-banners-posters/triangle-pos-displays' },
          { label: 'Tower Displays', path: '/signs-banners-posters/tower-displays' },
          { label: 'Menu Boards', path: '/signs-banners-posters/menu-boards' },
          { label: 'Shop Holiday Signage', path: '/signs-banners-posters/holiday-signage' },
        ],
      },
    ],
  },
  {
    label: 'Labels & Stickers',
    path: '/labels-stickers',
    megaMenu: [
      {
        heading: 'Singles',
        links: [
          { label: 'Singles / Stickers', path: '/labels-stickers/singles' },
          { label: 'Sticker Singles', path: '/labels-stickers/sticker-singles' },
          { label: 'Die-Cut Sticker Singles', path: '/labels-stickers/die-cut-sticker-singles' },
          { label: 'Kiss-Cut Stickers', path: '/labels-stickers/kiss-cut-stickers' },
        ],
      },
      {
        heading: 'Sheets',
        links: [
          { label: 'Sheets', path: '/labels-stickers/sheets' },
          { label: 'Sheet Stickers', path: '/labels-stickers/sheet-stickers' },
          { label: 'Die-Cut Sticker Sheets', path: '/labels-stickers/die-cut-sticker-sheets' },
          { label: 'Product Labels on Sheets', path: '/labels-stickers/product-labels-on-sheets' },
          { label: 'Return Address Labels', path: '/labels-stickers/return-address-labels' },
        ],
      },
      {
        heading: 'Rolls',
        links: [
          { label: 'Rolls', path: '/labels-stickers/rolls' },
          { label: 'Roll Labels', path: '/labels-stickers/roll-labels' },
          { label: 'Die-Cut Roll Labels', path: '/labels-stickers/die-cut-roll-labels' },
          { label: 'Packaging Labels', path: '/labels-stickers/packaging-labels' },
          { label: 'Manual Label Dispenser', path: '/labels-stickers/manual-label-dispenser' },
        ],
      },
      {
        heading: 'Decals',
        links: [
          { label: 'Decals', path: '/labels-stickers/decals' },
          { label: 'Car Door Decals', path: '/labels-stickers/car-door-decals' },
          { label: 'Wall & Window Decals', path: '/labels-stickers/wall-window-decals' },
        ],
      },
      {
        heading: 'Fast-Delivery Labels',
        links: [
          { label: 'Fast-Delivery Labels', path: '/labels-stickers/fast-delivery' },
          { label: '2-Day Roll Labels', path: '/labels-stickers/2-day-roll-labels' },
        ],
      },
      {
        heading: 'Standard Shape Stickers',
        links: [
          { label: 'Circle Stickers', path: '/labels-stickers/circle-stickers' },
          { label: 'Rectangle Stickers', path: '/labels-stickers/rectangle-stickers' },
          { label: 'Square Stickers', path: '/labels-stickers/square-stickers' },
          { label: 'Oval Stickers', path: '/labels-stickers/oval-stickers' },
        ],
      },
      {
        heading: 'Labels by Use',
        links: [
          { label: 'Food Packaging Labels', path: '/labels-stickers/food-packaging-labels' },
          { label: 'Water Bottle Labels', path: '/labels-stickers/water-bottle-labels' },
          { label: 'Beer Labels', path: '/labels-stickers/beer-labels' },
          { label: 'Wine Labels', path: '/labels-stickers/wine-labels' },
          { label: 'Cosmetic Labels', path: '/labels-stickers/cosmetic-labels' },
          { label: 'Waterproof Labels', path: '/labels-stickers/waterproof-labels' },
          { label: 'Candle Labels', path: '/labels-stickers/candle-labels' },
          { label: 'Custom Tags', path: '/labels-stickers/custom-tags' },
          { label: 'Name Tags', path: '/labels-stickers/name-tags' },
          { label: 'Mailing Labels', path: '/labels-stickers/mailing-labels' },
        ],
      },
      {
        heading: 'Fun Stickers',
        links: [
          { label: 'Face Stickers', path: '/labels-stickers/face-stickers' },
          { label: 'Party Stickers', path: '/labels-stickers/party-stickers' },
          { label: 'QR Code Stickers', path: '/labels-stickers/qr-code-stickers' },
          { label: 'Holographic Stickers', path: '/labels-stickers/holographic-stickers' },
        ],
      },
      {
        heading: 'Holiday Products',
        links: [
          { label: 'Envelope Seals', path: '/labels-stickers/envelope-seals' },
          { label: 'Foil Sticker Singles', path: '/labels-stickers/foil-sticker-singles' },
          { label: 'Foil Sheet Stickers', path: '/labels-stickers/foil-sheet-stickers' },
          { label: 'Foil Roll Labels', path: '/labels-stickers/foil-roll-labels' },
        ],
      },
      {
        heading: 'Shop All',
        links: [
          { label: 'Stickers', path: '/labels-stickers/stickers' },
          { label: 'Labels & Tags', path: '/labels-stickers/labels-tags' },
          { label: 'Shop all labels & stickers', path: '/labels-stickers', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Retail, Food & Shipping Packaging',
    path: '/packaging',
    megaMenu: [
      {
        heading: 'Shipping Packaging',
        links: [
          { label: 'Shipping Packaging', path: '/packaging/shipping-packaging' },
          { label: 'Mailer Boxes', path: '/packaging/mailer-boxes' },
          { label: 'Shipping Boxes', path: '/packaging/shipping-boxes' },
          { label: 'Shipping Mailers & Envelopes', path: '/packaging/shipping-mailers-envelopes' },
          { label: 'Packaging Accessories & Inserts', path: '/packaging/accessories-inserts' },
        ],
      },
      {
        heading: 'Retail Packaging',
        links: [
          { label: 'Retail Packaging', path: '/packaging/retail-packaging' },
          { label: 'Shopping Bags', path: '/packaging/shopping-bags' },
          { label: 'Custom Tags', path: '/packaging/custom-tags' },
          { label: 'Custom Pouches', path: '/packaging/custom-pouches' },
          { label: 'Product Packaging', path: '/packaging/product-packaging' },
        ],
      },
      {
        heading: 'Food Packaging',
        links: [
          { label: 'Food Packaging', path: '/packaging/food-packaging' },
          { label: 'Paper Cups', path: '/packaging/paper-cups' },
          { label: 'Cold Cups', path: '/packaging/cold-cups' },
          { label: 'Custom Coffee Sleeves', path: '/packaging/coffee-sleeves' },
          { label: 'To-Go Bags', path: '/packaging/to-go-bags' },
          { label: 'SOS Bags', path: '/packaging/sos-bags' },
          { label: 'Custom Pizza Boxes', path: '/packaging/pizza-boxes' },
          { label: 'Custom Deli Paper', path: '/packaging/deli-paper' },
          { label: 'Custom Paper Clamshell Packaging', path: '/packaging/paper-clamshell' },
        ],
      },
      {
        heading: 'Packaging Accessories',
        links: [
          { label: 'Packaging Accessories', path: '/packaging/packaging-accessories' },
          { label: 'Custom Tissue Paper', path: '/packaging/tissue-paper' },
          { label: 'Custom Ribbon', path: '/packaging/ribbon' },
          { label: 'Custom Wrapping Paper', path: '/packaging/wrapping-paper' },
          { label: 'Crinkle Paper', path: '/packaging/crinkle-paper' },
          { label: 'Packaging Insert Cards', path: '/packaging/insert-cards' },
          { label: 'Labels & Stickers', path: '/labels-stickers' },
        ],
      },
      {
        heading: 'Best Sellers',
        links: [
          { label: 'Best Sellers', path: '/packaging/bestsellers' },
          { label: 'Mailer Boxes', path: '/packaging/mailer-boxes' },
          { label: 'Full-Print Paper Cups', path: '/packaging/full-print-paper-cups' },
          { label: 'Custom Paper Bags', path: '/packaging/custom-paper-bags' },
          { label: 'Hang Tags', path: '/packaging/hang-tags' },
        ],
      },
      {
        heading: 'New Arrivals',
        links: [
          { label: 'New Arrivals', path: '/packaging/new-arrivals' },
          { label: 'Custom Food Zipper Bags', path: '/packaging/food-zipper-bags' },
          { label: 'Kraft Mailers', path: '/packaging/kraft-mailers' },
          { label: 'Custom Poly Mailers', path: '/packaging/poly-mailers' },
          { label: 'Paper Ice Cream Cups', path: '/packaging/paper-ice-cream-cups' },
          { label: 'Plastic Ice Cream Cups', path: '/packaging/plastic-ice-cream-cups' },
        ],
      },
      {
        heading: 'Shop By Industry',
        links: [
          { label: 'Shop By Industry', path: '/packaging/shop-by-industry' },
          { label: 'Retail & E-commerce', path: '/packaging/retail-ecommerce' },
          { label: 'Food & Beverage', path: '/packaging/food-beverage' },
          { label: 'Beauty & Spa', path: '/packaging/beauty-spa' },
        ],
      },
      {
        heading: 'Packaging Samples',
        links: [
          { label: 'Packaging Samples', path: '/packaging/samples' },
          { label: 'Paper Cups Sample Kit', path: '/packaging/paper-cups-sample-kit' },
          { label: 'Custom Pouches Sample Kit', path: '/packaging/pouches-sample-kit' },
          { label: 'Unboxing Experience', path: '/packaging/unboxing-experience' },
          { label: 'Shop Holiday Packaging', path: '/packaging/holiday-packaging' },
          { label: 'Shop all packaging', path: '/packaging', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Clothing & Bags',
    path: '/clothing-bags',
    megaMenu: [
      {
        heading: 'Clothing',
        links: [
          { label: 'Clothing', path: '/clothing-bags/clothing' },
          { label: 'Custom T-shirts', path: '/clothing-bags/t-shirts' },
          { label: 'Tank Tops', path: '/clothing-bags/tank-tops' },
          { label: 'Polo Shirts', path: '/clothing-bags/polo-shirts' },
          { label: 'Dress Shirts', path: '/clothing-bags/dress-shirts' },
          { label: 'Jackets & Vests', path: '/clothing-bags/jackets-vests' },
          { label: 'Hoodies & Sweatshirts', path: '/clothing-bags/hoodies-sweatshirts' },
          { label: 'Pants & Shorts', path: '/clothing-bags/pants-shorts' },
          { label: 'Aprons', path: '/clothing-bags/aprons' },
          { label: 'Clothing Accessories', path: '/clothing-bags/clothing-accessories' },
        ],
      },
      {
        heading: 'Bags',
        links: [
          { label: 'Bags', path: '/clothing-bags/bags' },
          { label: 'Totes', path: '/clothing-bags/totes' },
          { label: 'Backpacks', path: '/clothing-bags/backpacks' },
          { label: 'Paper Bags', path: '/clothing-bags/paper-bags' },
          { label: 'Drawstring Bags', path: '/clothing-bags/drawstring-bags' },
          { label: 'Cooler Bags', path: '/clothing-bags/cooler-bags' },
          { label: 'Travel & Gym Bags', path: '/clothing-bags/travel-gym-bags' },
          { label: 'Messenger Bags', path: '/clothing-bags/messenger-bags' },
          { label: 'Briefcases', path: '/clothing-bags/briefcases' },
          { label: 'Laptop Bags', path: '/clothing-bags/laptop-bags' },
          { label: 'Fanny Packs', path: '/clothing-bags/fanny-packs' },
        ],
      },
      {
        heading: 'Hats',
        links: [
          { label: 'Hats', path: '/clothing-bags/hats' },
          { label: 'Baseball Caps', path: '/clothing-bags/baseball-caps' },
          { label: 'Trucker Caps', path: '/clothing-bags/trucker-caps' },
          { label: 'Performance Caps', path: '/clothing-bags/performance-caps' },
          { label: 'Custom Patch Caps', path: '/clothing-bags/custom-patch-caps' },
          { label: 'Beanies', path: '/clothing-bags/beanies' },
          { label: 'Visors', path: '/clothing-bags/visors' },
          { label: 'Bucket Hats', path: '/clothing-bags/bucket-hats' },
        ],
      },
      {
        heading: 'T-shirts by Gender',
        links: [
          { label: 'Unisex', path: '/clothing-bags/t-shirts-unisex' },
          { label: 'Men', path: '/clothing-bags/t-shirts-men' },
          { label: 'Women', path: '/clothing-bags/t-shirts-women' },
          { label: 'Kids', path: '/clothing-bags/t-shirts-kids' },
        ],
      },
      {
        heading: 'T-shirts by Style',
        links: [
          { label: 'Long Sleeve', path: '/clothing-bags/long-sleeve' },
          { label: 'Short Sleeve', path: '/clothing-bags/short-sleeve' },
          { label: 'Crewneck', path: '/clothing-bags/crewneck' },
          { label: 'V-neck', path: '/clothing-bags/v-neck' },
          { label: 'Backside Printing', path: '/clothing-bags/backside-printing' },
        ],
      },
      {
        heading: 'Featured',
        links: [
          { label: 'Bestsellers', path: '/clothing-bags/bestsellers' },
          { label: 'No Minimum Order Quantity', path: '/clothing-bags/no-minimum' },
          { label: 'New Arrivals', path: '/clothing-bags/new-arrivals' },
        ],
      },
      {
        heading: 'Shop by Use Case',
        links: [
          { label: 'Team Outfits', path: '/clothing-bags/team-outfits' },
          { label: 'Workwear', path: '/clothing-bags/workwear' },
          { label: 'Holiday Business Gifts', path: '/clothing-bags/holiday-business-gifts' },
          { label: 'Activewear', path: '/clothing-bags/activewear' },
          { label: 'Carhartt®, The North Face® & more', path: '/clothing-bags/popular-brands' },
          { label: 'Free Bag Samples', path: '/clothing-bags/free-bag-samples' },
          { label: 'Shop all clothing & bags', path: '/clothing-bags', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Promotional Products',
    path: '/promotional-products',
    megaMenu: [
      {
        heading: 'Drinkware',
        links: [
          { label: 'Drinkware', path: '/promotional-products/drinkware' },
          { label: 'Water Bottles', path: '/promotional-products/water-bottles' },
          { label: 'Travel Mugs', path: '/promotional-products/travel-mugs' },
          { label: 'Tumblers', path: '/promotional-products/tumblers' },
          { label: 'Mugs', path: '/promotional-products/mugs' },
          { label: 'Cups', path: '/promotional-products/cups' },
          { label: 'Glassware', path: '/promotional-products/glassware' },
          { label: 'Can & Bottle Coolers', path: '/promotional-products/can-bottle-coolers' },
          { label: 'Drinkware Sets & Accessories', path: '/promotional-products/drinkware-sets-accessories' },
        ],
      },
      {
        heading: 'Office Supplies & Writing',
        links: [
          { label: 'Office Supplies & Writing', path: '/promotional-products/office-supplies-writing' },
          { label: 'Pens', path: '/promotional-products/pens' },
          { label: 'Pencils', path: '/promotional-products/pencils' },
          { label: 'Markers & Highlighters', path: '/promotional-products/markers-highlighters' },
          { label: 'Notes, Pads & Journals', path: '/promotional-products/notes-pads-journals' },
          { label: 'Badge Holders & Lanyards', path: '/promotional-products/badge-holders-lanyards' },
          { label: 'Desk & Workspace Accessories', path: '/promotional-products/desk-workspace-accessories' },
        ],
      },
      {
        heading: 'Lifestyle & Personal Items',
        links: [
          { label: 'Lifestyle & Personal Items', path: '/promotional-products/lifestyle-personal-items' },
          { label: 'Keychains', path: '/promotional-products/keychains' },
          { label: 'Health & Wellness', path: '/promotional-products/health-wellness' },
          { label: 'Travel Accessories', path: '/promotional-products/travel-accessories' },
          { label: 'Games & Toys', path: '/promotional-products/games-toys' },
          { label: 'Tools & Auto', path: '/promotional-products/tools-auto' },
          { label: 'Magnetic Clips', path: '/promotional-products/magnetic-clips' },
          { label: 'Sports & Fitness', path: '/promotional-products/sports-fitness' },
          { label: 'Sunglasses', path: '/promotional-products/sunglasses' },
          { label: 'Kitchenware', path: '/promotional-products/kitchenware' },
          { label: 'Towels', path: '/promotional-products/towels' },
        ],
      },
      {
        heading: 'Technology',
        links: [
          { label: 'Technology', path: '/promotional-products/technology' },
          { label: 'Mouse Pads', path: '/promotional-products/mouse-pads' },
          { label: 'Music & Audio', path: '/promotional-products/music-audio' },
          { label: 'USB Flash Drives', path: '/promotional-products/usb-flash-drives' },
          { label: 'Chargers & Power Banks', path: '/promotional-products/chargers-power-banks' },
          { label: 'Phone Accessories', path: '/promotional-products/phone-accessories' },
          { label: 'Laptop & Desk Essentials', path: '/promotional-products/laptop-desk-essentials' },
        ],
      },
      {
        heading: 'Snacks, Candy & Treats',
        links: [
          { label: 'Snacks, Candy & Treats', path: '/promotional-products/snacks-candy-treats' },
          { label: 'Candy & Chocolate', path: '/promotional-products/candy-chocolate' },
          { label: 'Snacks', path: '/promotional-products/snacks' },
          { label: 'Gourmet Gifts', path: '/promotional-products/gourmet-gifts' },
        ],
      },
      {
        heading: 'Featured',
        links: [
          { label: 'Our Bestsellers', path: '/promotional-products/bestsellers' },
          { label: 'No Minimum Order Quantity', path: '/promotional-products/no-minimum' },
          { label: 'New Arrivals', path: '/promotional-products/new-arrivals' },
        ],
      },
      {
        heading: 'Shop by Use Case',
        links: [
          { label: 'Holiday Business Gifts', path: '/promotional-products/holiday-business-gifts' },
          { label: 'Event & Trade Show Giveaways', path: '/promotional-products/event-tradeshow-giveaways' },
          { label: 'Team Outfits', path: '/promotional-products/team-outfits' },
          { label: 'Free Promotional Product Samples', path: '/promotional-products/free-promo-samples' },
        ],
      },
      {
        heading: 'Popular Brands',
        links: [
          { label: 'Popular Brands', path: '/promotional-products/popular-brands' },
          { label: 'Anker®', path: '/promotional-products/brands/anker' },
          { label: 'Castelli®', path: '/promotional-products/brands/castelli' },
          { label: "M&M'S®", path: '/promotional-products/brands/mms' },
          { label: 'Moleskine®', path: '/promotional-products/brands/moleskine' },
          { label: 'Owala®', path: '/promotional-products/brands/owala' },
          { label: 'PopSockets®', path: '/promotional-products/brands/popsockets' },
          { label: 'Sharpie®', path: '/promotional-products/brands/sharpie' },
          { label: 'Stanley®', path: '/promotional-products/brands/stanley' },
          { label: 'YETI®', path: '/promotional-products/brands/yeti' },
          { label: 'Shop all promotional products', path: '/promotional-products', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Invitations, Gifts & Stationery',
    path: '/invitations-gifts-stationery',
    megaMenu: [
      {
        heading: 'Invitations & Cards',
        links: [
          { label: 'Invitations & Cards', path: '/invitations-gifts-stationery/invitations-cards' },
          { label: 'Invitations & Announcements', path: '/invitations-gifts-stationery/invitations-announcements' },
          { label: 'Thank You Cards', path: '/invitations-gifts-stationery/thank-you-cards' },
          { label: 'Party Invitations', path: '/invitations-gifts-stationery/party-invitations' },
          { label: 'Holiday Cards', path: '/invitations-gifts-stationery/holiday-cards' },
        ],
      },
      {
        heading: 'Personal Stationery',
        links: [
          { label: 'Personal Stationery', path: '/invitations-gifts-stationery/personal-stationery' },
          { label: 'Note Cards', path: '/invitations-gifts-stationery/note-cards' },
          { label: 'Stamps & Ink', path: '/invitations-gifts-stationery/stamps-ink' },
          { label: 'Custom Bookmarks', path: '/invitations-gifts-stationery/custom-bookmarks' },
          { label: 'Envelopes & Mailing', path: '/invitations-gifts-stationery/envelopes-mailing' },
          { label: 'Notebooks, Pads & Journals', path: '/invitations-gifts-stationery/notebooks-pads-journals' },
          { label: 'Pens, Pencils & Markers', path: '/invitations-gifts-stationery/pens-pencils-markers' },
        ],
      },
      {
        heading: 'Home & Gifting',
        links: [
          { label: 'Home & Gifting', path: '/invitations-gifts-stationery/home-gifting' },
          { label: 'Canvas Prints & Wall Art', path: '/invitations-gifts-stationery/canvas-prints-wall-art' },
          { label: 'Photo Books', path: '/invitations-gifts-stationery/photo-books' },
          { label: 'Photo Calendars', path: '/invitations-gifts-stationery/photo-calendars' },
          { label: 'Home Decor', path: '/invitations-gifts-stationery/home-decor' },
          { label: 'Corporate Gifting', path: '/invitations-gifts-stationery/corporate-gifting' },
          { label: 'Gift Bags, Tags & Wrapping Paper', path: '/invitations-gifts-stationery/gift-bags-tags-wrap' },
        ],
      },
      {
        heading: 'Drinkware',
        links: [
          { label: 'Drinkware', path: '/invitations-gifts-stationery/drinkware' },
          { label: 'Mugs', path: '/invitations-gifts-stationery/mugs' },
          { label: 'Travel Mugs', path: '/invitations-gifts-stationery/travel-mugs' },
          { label: 'Tumblers', path: '/invitations-gifts-stationery/tumblers' },
          { label: 'Glassware', path: '/invitations-gifts-stationery/glassware' },
        ],
      },
      {
        heading: 'Party Supplies & Signs',
        links: [
          { label: 'Party Supplies & Signs', path: '/invitations-gifts-stationery/party-supplies-signs' },
          { label: 'Napkins', path: '/invitations-gifts-stationery/napkins' },
          { label: 'Stadium Cups', path: '/invitations-gifts-stationery/stadium-cups' },
          { label: 'Banners', path: '/invitations-gifts-stationery/banners' },
          { label: 'Guest Books', path: '/invitations-gifts-stationery/guest-books' },
          { label: 'Paper Coasters', path: '/invitations-gifts-stationery/paper-coasters' },
          { label: 'Foam Board Signs', path: '/invitations-gifts-stationery/foam-board-signs' },
          { label: 'Favor Bags', path: '/invitations-gifts-stationery/favor-bags' },
        ],
      },
      {
        heading: 'Shop by Occasion',
        links: [
          { label: 'Graduation Shop', path: '/invitations-gifts-stationery/graduation-shop' },
          { label: 'Birthday Shop', path: '/invitations-gifts-stationery/birthday-shop' },
          { label: 'Baby Shop', path: '/invitations-gifts-stationery/baby-shop' },
        ],
      },
      {
        heading: 'Bestsellers',
        links: [
          { label: 'Mugs', path: '/invitations-gifts-stationery/mugs' },
          { label: 'Photo Books', path: '/invitations-gifts-stationery/photo-books' },
          { label: 'Canvas Prints', path: '/invitations-gifts-stationery/canvas-prints' },
          { label: 'Note Cards', path: '/invitations-gifts-stationery/note-cards' },
          { label: 'Custom Napkins', path: '/invitations-gifts-stationery/custom-napkins' },
        ],
      },
      {
        heading: 'Summer Picks',
        links: [
          { label: 'Custom Picnic Blankets', path: '/invitations-gifts-stationery/picnic-blankets' },
          { label: 'Personalized Beach Towel', path: '/invitations-gifts-stationery/beach-towels' },
          { label: '20 oz. Tumbler', path: '/invitations-gifts-stationery/20oz-tumbler' },
          { label: 'Custom Canvas Tote Bags', path: '/invitations-gifts-stationery/canvas-tote-bags' },
          { label: 'Custom Playing Cards', path: '/invitations-gifts-stationery/playing-cards' },
        ],
      },
      {
        heading: 'New Arrivals',
        links: [
          { label: 'Letterpress Note Cards', path: '/invitations-gifts-stationery/letterpress-note-cards' },
          { label: 'Custom Cutting Boards', path: '/invitations-gifts-stationery/cutting-boards' },
          { label: 'Custom Sweatshirt Blankets', path: '/invitations-gifts-stationery/sweatshirt-blankets' },
          { label: 'Custom Yoga Mats', path: '/invitations-gifts-stationery/yoga-mats' },
          { label: 'Custom Ceramic Coasters', path: '/invitations-gifts-stationery/ceramic-coasters' },
          { label: 'Painted Edge Invitations & Announcements', path: '/invitations-gifts-stationery/painted-edge-invitations' },
          { label: 'Wedding & Event Menus', path: '/invitations-gifts-stationery/wedding-event-menus' },
        ],
      },
      {
        heading: 'Gift Guides',
        links: [
          { label: 'Gifts by Price', path: '/invitations-gifts-stationery/gifts-by-price' },
          { label: 'Gifts For Her', path: '/invitations-gifts-stationery/gifts-for-her' },
          { label: 'Gifts For Him', path: '/invitations-gifts-stationery/gifts-for-him' },
          { label: 'Gifts for Clients & Employees', path: '/invitations-gifts-stationery/gifts-for-clients-employees' },
          { label: 'Shop all invitations & gifts', path: '/invitations-gifts-stationery', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Wedding',
    path: '/wedding',
    megaMenu: [
      {
        heading: 'Wedding Shop',
        links: [
          { label: 'The Wedding Shop', path: '/wedding/wedding-shop' },
          { label: 'Save the Dates', path: '/wedding/save-the-dates' },
        ],
      },
      {
        heading: 'Invitation Suites',
        links: [
          { label: 'Invitation Suites', path: '/wedding/invitation-suites' },
          { label: 'Wedding Invitations', path: '/wedding/wedding-invitations' },
          { label: 'RSVP Cards', path: '/wedding/rsvp-cards' },
          { label: 'Wedding Enclosure Cards', path: '/wedding/enclosure-cards' },
        ],
      },
      {
        heading: 'Finishing Touches',
        links: [
          { label: 'Return Address Labels', path: '/wedding/return-address-labels' },
          { label: 'Circle Stamps', path: '/wedding/circle-stamps' },
          { label: 'Wax Seals', path: '/wedding/wax-seals' },
        ],
      },
      {
        heading: 'Day of Essentials',
        links: [
          { label: 'Day of Essentials', path: '/wedding/day-of-essentials' },
          { label: 'Itinerary Cards', path: '/wedding/itinerary-cards' },
          { label: 'Wedding Place Cards', path: '/wedding/place-cards' },
          { label: 'Custom Napkins', path: '/wedding/custom-napkins' },
          { label: 'Guest Books', path: '/wedding/guest-books' },
          { label: 'Favor Bags', path: '/wedding/favor-bags' },
          { label: 'Menu Cards', path: '/wedding/menu-cards' },
        ],
      },
      {
        heading: 'Wedding Signage',
        links: [
          { label: 'Wedding Signage', path: '/wedding/wedding-signage' },
          { label: 'Foam Board Welcome Signs', path: '/wedding/foam-board-welcome-signs' },
          { label: 'Foam Board Seating Charts', path: '/wedding/foam-board-seating-charts' },
          { label: 'Acrylic Tabletop Signs', path: '/wedding/acrylic-tabletop-signs' },
          { label: 'Mounted Tabletop Signs', path: '/wedding/mounted-tabletop-signs' },
          { label: 'Party Banners', path: '/wedding/party-banners' },
        ],
      },
      {
        heading: 'Parties & Showers',
        links: [
          { label: 'Parties & Showers', path: '/wedding/parties-showers' },
          { label: 'Engagement Party Invites', path: '/wedding/engagement-party-invites' },
          { label: 'Bridal Shower Invites', path: '/wedding/bridal-shower-invites' },
          { label: 'Bridal Shower Games', path: '/wedding/bridal-shower-games' },
          { label: 'Foam Board Wedding Signs', path: '/wedding/foam-board-wedding-signs' },
          { label: 'Luncheon Napkins', path: '/wedding/luncheon-napkins' },
          { label: 'Wedding Party Proposal Cards', path: '/wedding/party-proposal-cards' },
        ],
      },
      {
        heading: 'Thank You Cards & Keepsakes',
        links: [
          { label: 'Thank You Cards & Keepsakes', path: '/wedding/thank-you-keepsakes' },
          { label: 'Thank You Cards', path: '/wedding/thank-you-cards' },
          { label: 'Photo Books', path: '/wedding/photo-books' },
          { label: 'Canvas Prints', path: '/wedding/canvas-prints' },
          { label: 'Custom Acrylic Photo Blocks', path: '/wedding/acrylic-photo-blocks' },
        ],
      },
      {
        heading: 'New Arrivals',
        links: [
          { label: 'Custom Playing Cards', path: '/wedding/playing-cards' },
          { label: 'Custom Foil Napkins', path: '/wedding/foil-napkins' },
          { label: 'Letterpress Wedding Invitations', path: '/wedding/letterpress-invitations' },
          { label: 'Tabletop Photo Tiles', path: '/wedding/tabletop-photo-tiles' },
        ],
      },
      {
        heading: 'Shop Top Collections',
        links: [
          { label: 'Classic Bold', path: '/wedding/classic-bold' },
          { label: 'Hand-Drawn Whimsy', path: '/wedding/hand-drawn-whimsy' },
          { label: 'Botanical Charm', path: '/wedding/botanical-charm' },
          { label: 'Monogram Sprig', path: '/wedding/monogram-sprig' },
          { label: 'Gilded Romance', path: '/wedding/gilded-romance' },
          { label: 'Fresh Wildflowers', path: '/wedding/fresh-wildflowers' },
        ],
      },
      {
        heading: 'Wedding Extras',
        links: [
          { label: 'Free Invitation Sample Kit', path: '/wedding/free-invitation-sample-kit' },
          { label: 'Free Recipient Addressing', path: '/wedding/free-recipient-addressing' },
          { label: 'Shop all wedding', path: '/wedding', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Logo, Websites & Social',
    path: '/logo-websites-social',
    megaMenu: [
      {
        heading: 'Logo & Branding',
        links: [
          { label: 'Logo Design', path: '/logo-websites-social/logo-design' },
          { label: 'AI Logomaker', path: '/logo-websites-social/ai-logomaker' },
          { label: 'Logo Design Services', path: '/logo-websites-social/logo-design-services' },
          { label: 'Logo Inspiration', path: '/logo-websites-social/logo-inspiration' },
          { label: 'Business Name Generator', path: '/logo-websites-social/business-name-generator' },
          { label: 'Brand Kit', path: '/logo-websites-social/brand-kit' },
        ],
      },
      {
        heading: 'Websites & Domains',
        links: [
          { label: 'Websites & Domains', path: '/logo-websites-social/websites-domains' },
          { label: 'Create a Free Website', path: '/logo-websites-social/free-website' },
          { label: 'Get a Custom Domain Name', path: '/logo-websites-social/custom-domain' },
          { label: 'Get Business Email', path: '/logo-websites-social/business-email' },
          { label: 'Build Websites in Minutes', path: '/logo-websites-social/build-websites' },
        ],
      },
      {
        heading: 'Social Media',
        links: [
          { label: 'Instagram Templates', path: '/logo-websites-social/social-templates/instagram' },
          { label: 'Facebook Templates', path: '/logo-websites-social/social-templates/facebook' },
          { label: 'YouTube Thumbnails', path: '/logo-websites-social/social-templates/youtube' },
          { label: 'Career Posts', path: '/logo-websites-social/social-templates/career-posts' },
        ],
      },
      {
        heading: 'Business Setup',
        links: [
          { label: 'Get Set Up', path: '/logo-websites-social/get-set-up' },
          { label: 'Form your LLC', path: '/logo-websites-social/form-llc' },
          { label: 'List Your Business with Yelp', path: '/logo-websites-social/list-with-yelp' },
          { label: 'Launch Your Business', path: '/logo-websites-social/launch-your-business' },
          { label: 'Shop all logo & web services', path: '/logo-websites-social', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Design Services',
    path: '/design-services',
    megaMenu: [
      {
        heading: 'Design Services',
        links: [
          { label: 'Design Services', path: '/design-services' },
          { label: 'Logo Design Services', path: '/design-services/logo-design-services' },
          { label: 'Wedding Design Services', path: '/design-services/wedding-design-services' },
          { label: 'Brand Kit', path: '/design-services/brand-kit' },
          { label: 'Shop all design services', path: '/design-services', isViewAll: true },
        ],
      },
    ],
  },
];
