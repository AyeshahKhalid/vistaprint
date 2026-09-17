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
  {
    label: 'Labels & Stickers',
    path: '/labels-stickers',
    megaMenu: [
      {
        heading: 'Rolls',
        links: [
          { label: 'Roll Labels', path: '/labels-stickers/roll-labels' },
          { label: 'Die-Cut Roll Labels', path: '/labels-stickers/die-cut-roll-labels' },
          { label: 'Packaging Labels', path: '/labels-stickers/packaging-labels' },
          { label: 'Tamper-Proof Labels', path: '/labels-stickers/tamper-proof-labels' },
          { label: 'Manual Label Dispenser', path: '/labels-stickers/manual-label-dispenser' },
          { label: 'Fast-Delivery Labels', path: '/labels-stickers/fast-delivery-labels' },
          { label: '2-Day Roll Labels', path: '/labels-stickers/2-day-roll-labels' },
        ],
      },
      {
        heading: 'Stickers',
        links: [
          { label: 'Sticker Singles', path: '/labels-stickers/sticker-singles' },
          { label: 'Die-Cut Sticker Singles', path: '/labels-stickers/die-cut-sticker-singles' },
          { label: 'Kiss-Cut Stickers', path: '/labels-stickers/kiss-cut-stickers' },
          { label: 'Circle Stickers', path: '/labels-stickers/circle-stickers' },
          { label: 'Oval Stickers', path: '/labels-stickers/oval-stickers' },
          { label: 'Square Stickers', path: '/labels-stickers/square-stickers' },
          { label: 'Rectangle Stickers', path: '/labels-stickers/rectangle-stickers' },
          { label: 'Sheet Stickers', path: '/labels-stickers/sheet-stickers' },
          { label: 'Die-Cut Sticker Sheets', path: '/labels-stickers/die-cut-sticker-sheets' },
          { label: 'Product Labels on Sheets', path: '/labels-stickers/product-labels-on-sheets' },
        ],
      },
      {
        heading: 'Specialty Labels',
        links: [
          { label: 'Return Address Labels', path: '/labels-stickers/return-address-labels' },
          { label: 'Food Packaging Labels', path: '/labels-stickers/food-packaging-labels' },
          { label: 'Water Bottle Labels', path: '/labels-stickers/water-bottle-labels' },
          { label: 'Beer Labels', path: '/labels-stickers/beer-labels' },
          { label: 'Wine Labels', path: '/labels-stickers/wine-labels' },
          { label: 'Cosmetic Labels', path: '/labels-stickers/cosmetic-labels' },
          { label: 'Waterproof Labels', path: '/labels-stickers/waterproof-labels' },
          { label: 'Candle Labels', path: '/labels-stickers/candle-labels' },
        ],
      },
      {
        heading: 'Decals & Tags',
        links: [
          { label: 'Wall & Window Decals', path: '/labels-stickers/wall-window-decals' },
          { label: 'Car Door Decals', path: '/labels-stickers/car-door-decals' },
          { label: 'Custom Tags', path: '/labels-stickers/custom-tags' },
          { label: 'QR Code Stickers', path: '/labels-stickers/qr-code-stickers' },
          { label: 'Name Tags', path: '/labels-stickers/name-tags' },
          { label: 'Shop all labels & stickers', path: '/labels-stickers', isViewAll: true },
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
          { label: 'Totes', path: '/clothing-bags/totes' },
          { label: 'Backpacks', path: '/clothing-bags/backpacks' },
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
        heading: 'Collections & Special',
        links: [
          { label: 'Bestsellers', path: '/clothing-bags/bestsellers' },
          { label: 'No Minimum Order Quantity', path: '/clothing-bags/no-minimum' },
          { label: 'New Arrivals', path: '/clothing-bags/new-arrivals' },
          { label: 'Team Outfits', path: '/clothing-bags/team-outfits' },
          { label: 'Workwear', path: '/clothing-bags/workwear' },
          { label: 'Holiday Business Gifts', path: '/clothing-bags/holiday-business-gifts' },
          { label: 'Activewear', path: '/clothing-bags/activewear' },
          { label: 'Popular Brands', path: '/clothing-bags/popular-brands' },
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
          { label: 'Pens', path: '/promotional-products/pens' },
          { label: 'Pencils', path: '/promotional-products/pencils' },
          { label: 'Markers & Highlighters', path: '/promotional-products/markers-highlighters' },
          { label: 'Notes, Pads & Journals', path: '/promotional-products/notes-pads-journals' },
          { label: 'Badge Holders & Lanyards', path: '/promotional-products/badge-holders-lanyards' },
          { label: 'Desk & Workspace Accessories', path: '/promotional-products/desk-workspace-accessories' },
          { label: 'Magnetic Clips', path: '/promotional-products/magnetic-clips' },
        ],
      },
      {
        heading: 'Lifestyle & Personal Items',
        links: [
          { label: 'Keychains', path: '/promotional-products/keychains' },
          { label: 'Health & Wellness', path: '/promotional-products/health-wellness' },
          { label: 'Travel Accessories', path: '/promotional-products/travel-accessories' },
          { label: 'Games & Toys', path: '/promotional-products/games-toys' },
          { label: 'Tools & Auto', path: '/promotional-products/tools-auto' },
          { label: 'Sports & Fitness', path: '/promotional-products/sports-fitness' },
          { label: 'Sunglasses', path: '/promotional-products/sunglasses' },
          { label: 'Kitchenware', path: '/promotional-products/kitchenware' },
          { label: 'Towels', path: '/promotional-products/towels' },
        ],
      },
      {
        heading: 'Technology',
        links: [
          { label: 'Mouse Pads', path: '/promotional-products/mouse-pads' },
          { label: 'Music & Audio', path: '/promotional-products/music-audio' },
          { label: 'USB Flash Drives', path: '/promotional-products/usb-flash-drives' },
          { label: 'Chargers & Power Banks', path: '/promotional-products/chargers-power-banks' },
          { label: 'Phone Accessories', path: '/promotional-products/phone-accessories' },
          { label: 'Laptop & Desk Essentials', path: '/promotional-products/laptop-desk-essentials' },
        ],
      },
      {
        heading: 'Food',
        links: [
          { label: 'Candy & Chocolate', path: '/promotional-products/candy-chocolate' },
          { label: 'Snacks', path: '/promotional-products/snacks' },
          { label: 'Gourmet Gifts', path: '/promotional-products/gourmet-gifts' },
        ],
      },
      {
        heading: 'Collections',
        links: [
          { label: 'Bestsellers', path: '/promotional-products/bestsellers' },
          { label: 'No Minimum Order Quantity', path: '/promotional-products/no-minimum' },
          { label: 'New Arrivals', path: '/promotional-products/new-arrivals' },
          { label: 'Holiday Business Gifts', path: '/promotional-products/holiday-business-gifts' },
          { label: 'Event & Trade Show Giveaways', path: '/promotional-products/event-tradeshow-giveaways' },
          { label: 'Team Outfits', path: '/promotional-products/team-outfits' },
          { label: 'Free Promotional Product Samples', path: '/promotional-products/free-promo-samples' },
          { label: 'Popular Brands', path: '/promotional-products/popular-brands' },
          { label: 'Shop all promotional products', path: '/promotional-products', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Packaging',
    path: '/packaging',
    megaMenu: [
      {
        heading: 'Shipping Packaging',
        links: [
          { label: 'Mailer Boxes', path: '/packaging/mailer-boxes' },
          { label: 'Shipping Boxes', path: '/packaging/shipping-boxes' },
          { label: 'Shipping Mailers & Envelopes', path: '/packaging/shipping-mailers-envelopes' },
          { label: 'Packaging Accessories & Inserts', path: '/packaging/accessories-inserts' },
        ],
      },
      {
        heading: 'Retail Packaging',
        links: [
          { label: 'Shopping Bags', path: '/packaging/shopping-bags' },
          { label: 'Custom Tags', path: '/packaging/custom-tags' },
          { label: 'Custom Pouches', path: '/packaging/custom-pouches' },
          { label: 'Product Packaging', path: '/packaging/product-packaging' },
          { label: 'Food Packaging', path: '/packaging/food-packaging' },
        ],
      },
      {
        heading: 'Food & Beverage',
        links: [
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
        heading: 'Packaging Materials',
        links: [
          { label: 'Custom Tissue Paper', path: '/packaging/tissue-paper' },
          { label: 'Custom Ribbon', path: '/packaging/ribbon' },
          { label: 'Custom Wrapping Paper', path: '/packaging/wrapping-paper' },
          { label: 'Crinkle Paper', path: '/packaging/crinkle-paper' },
          { label: 'Packaging Insert Cards', path: '/packaging/insert-cards' },
          { label: 'Labels & Stickers', path: '/labels-stickers' },
        ],
      },
      {
        heading: 'Collections & Resources',
        links: [
          { label: 'Bestsellers', path: '/packaging/bestsellers' },
          { label: 'New Arrivals', path: '/packaging/new-arrivals' },
          { label: 'Shop By Industry', path: '/packaging/shop-by-industry' },
          { label: 'Packaging Samples', path: '/packaging/samples' },
          { label: 'Unboxing Experience', path: '/packaging/unboxing-experience' },
          { label: 'Shop all packaging', path: '/packaging', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Invitation',
    path: '/invitations-gifts-stationery',
    megaMenu: [
      {
        heading: 'Invitations & Cards',
        links: [
          { label: 'Invitations & Announcements', path: '/invitations-gifts-stationery/invitations-announcements' },
          { label: 'Thank You Cards', path: '/invitations-gifts-stationery/thank-you-cards' },
          { label: 'Party Invitations', path: '/invitations-gifts-stationery/party-invitations' },
          { label: 'Holiday Cards', path: '/invitations-gifts-stationery/holiday-cards' },
        ],
      },
      {
        heading: 'Personal Stationery',
        links: [
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
          { label: 'Canvas Prints & Wall Art', path: '/invitations-gifts-stationery/canvas-prints-wall-art' },
          { label: 'Photo Books', path: '/invitations-gifts-stationery/photo-books' },
          { label: 'Photo Calendars', path: '/invitations-gifts-stationery/photo-calendars' },
          { label: 'Home Decor', path: '/invitations-gifts-stationery/home-decor' },
          { label: 'Corporate Gifting', path: '/invitations-gifts-stationery/corporate-gifting' },
          { label: 'Gift Bags, Tags & Wrapping Paper', path: '/invitations-gifts-stationery/gift-bags-tags-wrap' },
          { label: 'Drinkware', path: '/invitations-gifts-stationery/drinkware' },
        ],
      },
      {
        heading: 'Party Supplies & Signs',
        links: [
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
        heading: 'Specialized Collections',
        links: [
          { label: 'Graduation Shop', path: '/invitations-gifts-stationery/graduation-shop' },
          { label: 'Birthday Shop', path: '/invitations-gifts-stationery/birthday-shop' },
          { label: 'Baby Shop', path: '/invitations-gifts-stationery/baby-shop' },
          { label: 'Gifts by Price', path: '/invitations-gifts-stationery/gifts-by-price' },
          { label: 'Gifts For Her', path: '/invitations-gifts-stationery/gifts-for-her' },
          { label: 'Gifts For Him', path: '/invitations-gifts-stationery/gifts-for-him' },
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
        heading: 'Invitations & Essentials',
        links: [
          { label: 'Save the Dates', path: '/wedding/save-the-dates' },
          { label: 'Invitation Suites', path: '/wedding/invitation-suites' },
          { label: 'Wedding Invitations', path: '/wedding/wedding-invitations' },
          { label: 'RSVP Cards', path: '/wedding/rsvp-cards' },
          { label: 'Wedding Enclosure Cards', path: '/wedding/enclosure-cards' },
          { label: 'Return Address Labels', path: '/wedding/return-address-labels' },
          { label: 'Circle Stamps', path: '/wedding/circle-stamps' },
          { label: 'Wax Seals', path: '/wedding/wax-seals' },
        ],
      },
      {
        heading: 'Ceremony & Reception',
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
          { label: 'Engagement Party Invites', path: '/wedding/engagement-party-invites' },
          { label: 'Bridal Shower Invites', path: '/wedding/bridal-shower-invites' },
          { label: 'Bridal Shower Games', path: '/wedding/bridal-shower-games' },
          { label: 'Foam Board Wedding Signs', path: '/wedding/foam-board-wedding-signs' },
          { label: 'Luncheon Napkins', path: '/wedding/luncheon-napkins' },
          { label: 'Wedding Party Proposal Cards', path: '/wedding/party-proposal-cards' },
        ],
      },
      {
        heading: 'Thank You & Keepsakes',
        links: [
          { label: 'Thank You Cards', path: '/wedding/thank-you-cards' },
          { label: 'Photo Books', path: '/wedding/photo-books' },
          { label: 'Canvas Prints', path: '/wedding/canvas-prints' },
          { label: 'Custom Acrylic Photo Blocks', path: '/wedding/acrylic-photo-blocks' },
        ],
      },
      {
        heading: 'Design Collections',
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
        heading: 'Resources',
        links: [
          { label: 'Free Invitation Sample Kit', path: '/wedding/free-invitation-sample-kit' },
          { label: 'Free Recipient Addressing', path: '/wedding/free-recipient-addressing' },
          { label: 'Shop all wedding', path: '/wedding', isViewAll: true },
        ],
      },
    ],
  },
  {
    label: 'Design Services',
    path: '/design-services',
    megaMenu: [
      {
        heading: 'Logo & Branding',
        links: [
          { label: 'Logo Design', path: '/design-services/logo-design' },
          { label: 'AI Logomaker', path: '/design-services/ai-logomaker' },
          { label: 'Logo Design Services', path: '/design-services/logo-design-services' },
          { label: 'Logo Inspiration', path: '/design-services/logo-inspiration' },
          { label: 'Business Name Generator', path: '/design-services/business-name-generator' },
        ],
      },
      {
        heading: 'Digital Presence',
        links: [
          { label: 'List Your Business with Yelp', path: '/design-services/list-with-yelp' },
          { label: 'Form your LLC', path: '/design-services/form-llc' },
          { label: 'Websites & Domains', path: '/design-services/websites-domains' },
          { label: 'Create a Free Website', path: '/design-services/free-website' },
          { label: 'Get a Custom Domain Name', path: '/design-services/custom-domain' },
          { label: 'Get Business Email', path: '/design-services/business-email' },
        ],
      },
      {
        heading: 'Social Media',
        links: [
          { label: 'Instagram Templates', path: '/design-services/social-media-templates/instagram' },
          { label: 'Facebook Templates', path: '/design-services/social-media-templates/facebook' },
          { label: 'YouTube Thumbnails', path: '/design-services/social-media-templates/youtube' },
          { label: 'Career Posts', path: '/design-services/social-media-templates/career-posts' },
        ],
      },
      {
        heading: 'Setup Tools',
        links: [
          { label: 'Get Set Up', path: '/design-services/get-set-up' },
          { label: 'Build Websites in Minutes', path: '/design-services/build-websites' },
          { label: 'Create a Free Logo', path: '/design-services/free-logo' },
          { label: 'Secure Your Domain', path: '/design-services/secure-domain' },
          { label: 'Be Found on Yelp', path: '/design-services/be-found-on-yelp' },
          { label: 'Launch Your Business', path: '/design-services/launch-your-business' },
        ],
      },
      {
        heading: 'Professional Services',
        links: [
          { label: 'Brand Kit', path: '/design-services/brand-kit' },
          { label: 'Design Services', path: '/design-services' },
          { label: 'Wedding Design Services', path: '/design-services/wedding-design-services' },
          { label: 'Shop all design services', path: '/design-services', isViewAll: true },
        ],
      },
    ],
  },
];
