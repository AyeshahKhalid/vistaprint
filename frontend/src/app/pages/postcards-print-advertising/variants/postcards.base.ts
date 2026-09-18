import { ProductDetailData } from '../../../shared/product-detail/product-detail.model';

const IMG = '/images/postcards-print-advertising';

/**
 * Structural base for Postcards & Print Advertising variant pages.
 *
 * Mirrors the section structure of the Figma-verified Matte business card PDP,
 * with copy and imagery appropriate to this category. Category-level Figma
 * exports are reused until per-variant assets are available.
 */
export const POSTCARDS_BASE: ProductDetailData = {
  breadcrumb: 'Home / Postcards & Print Advertising / Postcards',
  productTitle: 'Postcards',
  rating: 4.8,
  reviewCount: 24180,
  briefDescription:
    'Send a message that lands in the hand, not the inbox. Full-colour postcards in a range of sizes and finishes. See details',
  price: '$16.99',
  priceDetail: '$0.17 each / 100 units',
  zipCode: '02451',
  fastDelivery: { price: '$23.99', date: 'Thursday, Aug 27' },
  standardDelivery: { price: '$5.99', date: 'Wednesday, Sep 9' },
  dropdowns: [
    { label: 'Size', options: ['Small (4.2" x 5.5")', 'Standard (4" x 6")', 'Large (5" x 7")', 'Jumbo (6" x 11")'] },
    { label: 'Finish', options: ['Matte', 'Glossy', 'Uncoated'] },
  ],
  quantityOptions: [
    { quantity: '50 units', price: '$12.00', perUnit: '$0.24/unit' },
    { quantity: '100 units', price: '$16.99', perUnit: '$0.17/unit' },
    { quantity: '250 units', price: '$29.99', perUnit: '$0.12/unit' },
    { quantity: '500 units', price: '$44.99', perUnit: '$0.09/unit' },
    { quantity: '1000 units', price: '$74.99', perUnit: '$0.07/unit' },
    { quantity: '1500 units', price: '$99.99', perUnit: '$0.07/unit' },
    { quantity: '2000 units', price: '$124.99', perUnit: '$0.06/unit' },
    { quantity: '2500 units', price: '$149.99', perUnit: '$0.06/unit' },
    { quantity: '5000 units', price: '$269.99', perUnit: '$0.05/unit' },
    { quantity: '10000 units', price: '$479.99', perUnit: '$0.05/unit' },
  ],
  designServicePrice: '$10.00',

  mainImage: `${IMG}/hero-right-column-hero-product-image-9_1295.png`,
  thumbnails: [
    `${IMG}/hero-right-column-hero-product-image-9_1295.png`,
    `${IMG}/image-container-product-image-9_1347.png`,
    `${IMG}/image-container-product-image-9_1371.png`,
    `${IMG}/image-container-product-image-9_1395.png`,
    `${IMG}/image-container-product-image-9_1419.png`,
    `${IMG}/image-container-product-image-9_1443.png`,
  ],

  tabs: ['Samples', 'Specs & Templates', 'Product Options'],

  templatesSectionTitle: 'Explore most popular templates',
  templates: [
    { category: 'Marketing', brand: 'Northgate Realty', description: 'Bold property announcement with photo panel', tag: 'Modern & Simple', image: `${IMG}/category-card-0-card-image-9_1299.png` },
    { category: 'Marketing', brand: 'Bloom Florists', description: 'Soft botanical seasonal promotion layout', tag: 'Minimal', image: `${IMG}/category-card-1-card-image-9_1308.png` },
    { category: 'Marketing', brand: 'Harbour Dental', description: 'Clean clinical appointment reminder design', tag: 'Professional', image: `${IMG}/category-card-2-card-image-9_1317.png` },
    { category: 'Marketing', brand: 'Copper Kitchen', description: 'Warm restaurant grand opening announcement', tag: 'Industry', image: `${IMG}/category-card-3-card-image-9_1326.png` },
    { category: 'Marketing', brand: 'Summit Fitness', description: 'High-energy membership offer with bold type', tag: 'Creative', image: `${IMG}/image-container-product-image-9_1467.png` },
    { category: 'Marketing', brand: 'Atlas Movers', description: 'Straightforward service card with clear pricing', tag: 'Modern & Simple', image: `${IMG}/image-container-product-image-9_1491.png` },
  ],

  promoHeadline: 'Printed marketing that arrives, gets held, and gets remembered.',
  featureHighlights: [
    { title: 'Full-colour both sides', description: 'Print front and back at no additional cost.' },
    { title: 'Four standard sizes', description: 'From pocket-sized to jumbo, whatever suits the message.' },
    { title: 'Matte, glossy or uncoated', description: 'Choose the finish that fits your design and budget.' },
    { title: 'Mailing services available', description: 'We can address and post them directly for you.' },
    { title: 'Bulk pricing', description: 'Unit costs fall sharply at higher quantities.' },
  ],

  coatedSectionTitle: 'Direct mail that still works',
  coatedSectionImage: `${IMG}/eddm-promo-banner-eddm-image-9_1541.png`,
  coatedSectionBody:
    'A postcard needs no envelope and no opening. The message is visible the moment it is picked up, which is why direct mail continues to earn its place alongside digital marketing for local businesses, events and seasonal offers.',

  personalTouchTitle: 'Add your personal touch',
  personalTouchBody:
    'Make your postcards work harder with our range of custom options. Choose from four standard sizes, three finishes and a range of paper weights. Add rounded corners for a softer look, or go die-cut for a shape that stands out in the post.',
  thicknessOptions: [
    { title: 'Standard (14pt)', description: 'Budget-friendly weight, ideal for large mailings.' },
    { title: 'Premium (16pt)', description: 'Sturdier card that survives the post in better condition.' },
    { title: 'Premium Plus (18pt)', description: 'Substantial board for high-value campaigns.' },
  ],
  finishOptions: [
    { title: 'Matte', description: 'Smooth, glare-free surface' },
    { title: 'Glossy', description: 'Bright, high-shine coating' },
    { title: 'Uncoated', description: 'Natural and writable' },
    { title: 'Rounded Corners', description: 'Modern curved border style' },
  ],

  startDesigningTitle: 'Start designing',
  startDesigningBody:
    'Our design studio makes postcard printing straightforward. Upload a finished design, or start from one of thousands of templates organised by industry, occasion and style.',
  startDesigningImage: `${IMG}/image-container-product-image-9_1513.png`,

  sustainabilityImage: `${IMG}/category-tile-rectangle-9_1611.png`,
  sustainabilityBody:
    'This item is part of our Better by Design collection, which connects you to responsibly sourced products. Products selected with consideration for environmental impact, workers, communities and biodiversity.',

  relatedProducts: [
    { title: 'Flyers', price: 'From $14.99', image: `${IMG}/category-tile-rectangle-9_1614.png`, path: '/postcards-print-advertising/flyers' },
    { title: 'Brochures', price: 'From $24.99', image: `${IMG}/category-tile-rectangle-9_1617.png`, path: '/postcards-print-advertising/brochures' },
    { title: 'Rack Cards', price: 'From $19.99', image: `${IMG}/category-tile-rectangle-9_1621.png`, path: '/postcards-print-advertising/rack-cards' },
    { title: 'Door Hangers', price: 'From $22.99', image: `${IMG}/category-tile-rectangle-9_1624.png`, path: '/postcards-print-advertising/door-hangers' },
    { title: 'Magnets', price: 'From $17.99', image: `${IMG}/category-tile-rectangle-9_1627.png`, path: '/postcards-print-advertising/magnets' },
    { title: 'Menus', price: 'From $21.99', image: `${IMG}/category-card-0-card-image-9_1299.png`, path: '/postcards-print-advertising/menus' },
  ],
  frequentlyBought: [
    { title: 'Business Cards', price: 'From $14.99', image: `${IMG}/category-card-1-card-image-9_1308.png`, path: '/business-cards/standard' },
    { title: 'Company Letterhead', price: 'From $19.99', image: `${IMG}/category-card-2-card-image-9_1317.png`, path: '/postcards-print-advertising/company-letterhead' },
    { title: 'Shipping Mailers & Envelopes', price: 'From $24.99', image: `${IMG}/category-card-3-card-image-9_1326.png`, path: '/postcards-print-advertising/shipping-mailers-envelopes' },
    { title: 'Custom Bookmarks', price: 'From $12.99', image: `${IMG}/image-container-product-image-9_1347.png`, path: '/postcards-print-advertising/custom-bookmarks' },
    { title: 'Notebooks & Journals', price: 'From $12.99', image: `${IMG}/image-container-product-image-9_1371.png`, path: '/postcards-print-advertising/notebooks-pads-journals' },
    { title: 'Stamps & Ink', price: 'From $24.99', image: `${IMG}/image-container-product-image-9_1395.png`, path: '/postcards-print-advertising/stamps-ink' },
  ],

  ratingSummary: 4.8,
  ratingCount: 24180,
  ratingBreakdown: [
    { stars: '5★', percent: '89%' },
    { stars: '4★', percent: '6%' },
    { stars: '3★', percent: '2%' },
    { stars: '2★', percent: '1%' },
    { stars: '1★', percent: '2%' },
  ],
  reviews: [
    {
      title: 'Great response from our mailing',
      body: 'We sent 500 to our local area and had calls the same week. Print quality was excellent and the colours matched our brand exactly.',
      author: 'Rebecca T.',
      date: 'Aug 14, 2026',
    },
    {
      title: 'Sharp and professional',
      body: 'Text is crisp even at small sizes and the card is sturdier than I expected. Arrived two days ahead of the estimate.',
      author: 'James O.',
      date: 'Aug 02, 2026',
    },
    {
      title: 'Will order again',
      body: 'Straightforward to set up in the design studio and the proof preview was accurate. Good value at the 500 quantity.',
      author: 'Priya N.',
      date: 'Jul 21, 2026',
    },
  ],

  designBannerBody:
    'No more guesswork. We take care of the entire design process, from brainstorming ideas to delivering the files to your account.',
  designBannerImage: `${IMG}/image-container-product-image-9_1419.png`,

  faqs: [
    {
      question: 'What sizes are available for postcards?',
      answer:
        'We offer four standard postcard sizes: Small (4.2" x 5.5"), Standard (4" x 6"), Large (5" x 7") and Jumbo (6" x 11"). All are available in matte, glossy or uncoated finishes and in Standard, Premium and Premium Plus thicknesses.',
    },
    { question: 'Can you post the cards for me?' },
    { question: 'What is EDDM® and am I eligible?' },
    { question: 'Which finish is best for direct mail?' },
    { question: 'Do I need to leave space for the address?' },
    { question: 'How should I prepare my artwork files?' },
  ],
};
