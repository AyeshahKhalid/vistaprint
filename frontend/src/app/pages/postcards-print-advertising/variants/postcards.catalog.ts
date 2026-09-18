import { ProductDetailData } from '../../../shared/product-detail/product-detail.model';
import { VariantSpec, CatalogConfig, buildCatalog } from '../../../shared/product-detail/variant-catalog';
import { POSTCARDS_BASE } from './postcards.base';

/**
 * Catalogue-driven Postcards & Print Advertising variants.
 *
 * Structural sections are inherited from POSTCARDS_BASE; each spec below
 * declares only what differs. Per-variant Figma assets are not yet available,
 * so all variants share the category's imagery until they are.
 */
const CONFIG: CatalogConfig = {
  imageRoot: 'postcards-print-advertising',
  baseImageDir: '',
  breadcrumbPrefix: 'Home / Postcards & Print Advertising',
  categoryPath: '/postcards-print-advertising',
  base: POSTCARDS_BASE,
};

/** Standard 5-FAQ tail used where a variant has no distinctive questions. */
const artworkFaq = { question: 'How should I prepare my artwork files?' };

const SPECS: VariantSpec[] = [
  // ------------------------------------------------------------- Postcards
  {
    slug: 'postcards',
    title: 'Postcards',
    briefDescription:
      'Send a message that lands in the hand, not the inbox. Full-colour postcards in a range of sizes and finishes. See details',
    price: '$16.99',
    priceDetail: '$0.17 each / 100 units',
    rating: 4.8,
    reviewCount: 24180,
    promoHeadline: 'Printed marketing that arrives, gets held, and gets remembered.',
    featureHighlights: [
      { title: 'Full-colour both sides', description: 'Print front and back at no additional cost.' },
      { title: 'Four standard sizes', description: 'From pocket-sized to jumbo, whatever suits the message.' },
      { title: 'Matte, glossy or uncoated', description: 'Choose the finish that fits your design and budget.' },
      { title: 'Mailing services available', description: 'We can address and post them directly for you.' },
      { title: 'Bulk pricing', description: 'Unit costs fall sharply at higher quantities.' },
    ],
    sectionTitle: 'Direct mail that still works',
    sectionBody:
      'A postcard needs no envelope and no opening. The message is visible the moment it is picked up, which is why direct mail continues to earn its place alongside digital marketing for local businesses, events and seasonal offers.',
    faqs: [
      {
        question: 'What sizes are available for postcards?',
        answer:
          'We offer four standard postcard sizes: Small (4.2" x 5.5"), Standard (4" x 6"), Large (5" x 7") and Jumbo (6" x 11"). All are available in matte, glossy or uncoated finishes.',
      },
      { question: 'Can you post the cards for me?' },
      { question: 'Which finish is best for direct mail?' },
      { question: 'Do I need to leave space for the address?' },
      artworkFaq,
    ],
  },
  {
    slug: 'standard',
    title: 'Standard Postcards',
    briefDescription:
      'The classic 4" x 6" postcard. Affordable, postable and effective for any campaign. See details',
    price: '$16.99',
    priceDetail: '$0.17 each / 100 units',
    rating: 4.8,
    reviewCount: 18420,
    promoHeadline: 'The size that works for almost every message.',
    featureHighlights: [
      { title: 'Classic 4" x 6" format', description: 'The most widely used and most economical to post.' },
      { title: 'Full-colour both sides', description: 'Message on one side, offer on the other.' },
      { title: 'Three finish options', description: 'Matte, glossy or uncoated to suit your design.' },
      { title: 'Qualifies for standard postage', description: 'Sized to keep mailing costs down.' },
      { title: 'Fast turnaround', description: 'Printed and dispatched quickly.' },
    ],
    sectionTitle: 'A reliable standard',
    sectionBody:
      'At 4 by 6 inches, the standard postcard is large enough to carry a real message and small enough to keep postage affordable. It is the default choice for most direct mail campaigns for good reason.',
    faqs: [
      {
        question: 'What are the exact dimensions of a standard postcard?',
        answer:
          'Standard postcards measure 4 inches by 6 inches. This size qualifies for standard postcard postage rates, making it the most economical option for larger mailings.',
      },
      { question: 'Which finish should I choose?' },
      { question: 'Can I print different designs in one order?' },
      { question: 'Do I need to leave space for the address?' },
      artworkFaq,
    ],
  },
  {
    slug: 'rounded-corner',
    title: 'Rounded Corner Postcards',
    briefDescription:
      'Softly curved corners that feel considered and survive the post in better shape. See details',
    price: '$21.99',
    priceDetail: '$0.22 each / 100 units',
    rating: 4.7,
    reviewCount: 6240,
    promoHeadline: 'A curve that makes the card look deliberate.',
    featureHighlights: [
      { title: 'Curved corner die-cut', description: 'A quarter-inch radius on all four corners.' },
      { title: 'Resists damage in transit', description: 'Rounded corners survive sorting machinery better.' },
      { title: 'All standard sizes', description: 'Available across our full size range.' },
      { title: 'Three finish options', description: 'Matte, glossy or uncoated coating.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'Softer at the edges',
    sectionBody:
      'Rounded corners change very little and quite a lot at the same time. The card reads as more considered, and it arrives in noticeably better condition after passing through automated postal sorting.',
    faqs: [
      {
        question: 'What corner radius is used on rounded corner postcards?',
        answer:
          'Rounded corner postcards use a quarter-inch (6mm) radius on all four corners. The overall card dimensions remain unchanged from the standard size you select.',
      },
      { question: 'Do rounded corners affect postage rates?' },
      { question: 'Do I need to adjust my artwork?' },
      { question: 'Which sizes support rounded corners?' },
      artworkFaq,
    ],
  },
  {
    slug: 'die-cut',
    title: 'Die-Cut Postcards',
    briefDescription:
      'Custom-shaped postcards cut to an outline of your choosing. See details',
    price: '$34.99',
    priceDetail: '$0.35 each / 100 units',
    rating: 4.7,
    reviewCount: 3180,
    promoHeadline: 'Break out of the rectangle entirely.',
    featureHighlights: [
      { title: 'Custom cut shapes', description: 'Circles, arches, tags and bespoke outlines.' },
      { title: 'Impossible to ignore', description: 'An unusual shape stands out in a stack of post.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
      { title: 'Premium stocks', description: 'Heavier board holds the cut shape crisply.' },
      { title: 'Shape templates provided', description: 'Download a cutting guide before you design.' },
    ],
    sectionTitle: 'Shaped to be noticed',
    sectionBody:
      'Die-cut postcards are cut to a custom outline rather than a rectangle. The shape itself becomes part of the message — an arch for a property listing, a circle for a badge, a tag for a sale.',
    faqs: [
      {
        question: 'What shapes are available for die-cut postcards?',
        answer:
          'We offer a range of standard die-cut shapes including circles, arches, rounded tags and scalloped edges. Download the cutting template for your chosen shape before designing so your artwork aligns with the cut line.',
      },
      { question: 'Do die-cut postcards cost more to post?' },
      { question: 'How do I design artwork for a die-cut shape?' },
      { question: 'Can I request a completely custom shape?' },
      artworkFaq,
    ],
  },
  {
    slug: 'mailing-services',
    title: 'Postcard Mailing Services',
    briefDescription:
      'We print, address and post your campaign for you. No stamps, no queue. See details',
    price: '$0.58',
    priceDetail: 'Per card, including postage',
    rating: 4.6,
    reviewCount: 4920,
    promoHeadline: 'Hand us the list. We will handle the rest.',
    featureHighlights: [
      { title: 'Printing and posting combined', description: 'One order covers production and delivery.' },
      { title: 'Upload your mailing list', description: 'We address each card individually.' },
      { title: 'Address verification', description: 'Bad addresses flagged before postage is paid.' },
      { title: 'No trip to the post office', description: 'Cards go straight into the postal system.' },
      { title: 'Campaign tracking', description: 'See when your mailing was dispatched.' },
    ],
    sectionTitle: 'Print, address, post',
    sectionBody:
      'Our mailing service takes the campaign end to end. Upload your address list, we print and individually address every card, verify the addresses and put the whole mailing into the post for you.',
    faqs: [
      {
        question: 'How do I supply my mailing list?',
        answer:
          'Upload your mailing list as a spreadsheet during checkout. We verify each address against postal records before printing and flag any that appear incomplete or undeliverable so you are not paying postage on them.',
      },
      { question: 'How much does postage cost?' },
      { question: 'Can I mail to a purchased list?' },
      { question: 'How long does a mailing take to arrive?' },
      artworkFaq,
    ],
  },
  {
    slug: 'eddm',
    title: 'EDDM® Postcards',
    briefDescription:
      'Every Door Direct Mail® — reach every address on a postal route without a mailing list. See details',
    price: '$0.42',
    priceDetail: 'Per card, including EDDM® postage',
    rating: 4.7,
    reviewCount: 5610,
    promoHeadline: 'Reach a whole neighbourhood without knowing a single name.',
    featureHighlights: [
      { title: 'No mailing list needed', description: 'Target by postal route rather than by name.' },
      { title: 'Lower postage rates', description: 'EDDM® rates are cheaper than standard direct mail.' },
      { title: 'Choose routes on a map', description: 'Select the exact areas you want to reach.' },
      { title: 'Ideal for local business', description: 'Perfect for shops, trades and restaurants.' },
      { title: 'Paperwork handled', description: 'We prepare the required postal forms.' },
    ],
    sectionTitle: 'Every door on the route',
    sectionBody:
      'Every Door Direct Mail® delivers to every address along postal routes you choose on a map, with no mailing list required and at reduced postage rates. For a business serving a defined local area, it is the most efficient mail there is.',
    faqs: [
      {
        question: 'What is EDDM® and how does it differ from standard direct mail?',
        answer:
          'Every Door Direct Mail® is a postal service that delivers to every address along selected postal routes without requiring a mailing list. You choose routes on a map rather than supplying names and addresses, and postage rates are lower than standard direct mail.',
      },
      { question: 'What size must EDDM® postcards be?' },
      { question: 'How do I choose which routes to target?' },
      { question: 'Do I need to complete any postal paperwork?' },
      artworkFaq,
    ],
  },

  // ----------------------------------------------- Booklets & publications
  {
    slug: 'booklets-catalogs-magazines',
    title: 'Booklets, Catalogs & Magazines',
    briefDescription:
      'Multi-page publications bound to your specification, from eight pages to hundreds. See details',
    price: '$42.99',
    priceDetail: '$4.30 each / 10 units',
    rating: 4.8,
    reviewCount: 7340,
    promoHeadline: 'Give your story the pages it deserves.',
    featureHighlights: [
      { title: 'Four binding methods', description: 'Saddle-stitch, wire-bound, perfect bound and self-cover.' },
      { title: 'Eight pages upwards', description: 'From slim booklets to full catalogues.' },
      { title: 'Cover stock options', description: 'Heavier covers for a more substantial publication.' },
      { title: 'Full-colour throughout', description: 'Every page printed in full colour as standard.' },
      { title: 'Page count guidance', description: 'We advise on binding suited to your page count.' },
    ],
    sectionTitle: 'More than a single page',
    sectionBody:
      'When one page is not enough, a bound publication carries the detail that a flyer cannot. Product catalogues, programmes, annual reports and lookbooks all benefit from a format people sit down with.',
    faqs: [
      {
        question: 'Which binding method should I choose?',
        answer:
          'Saddle-stitch suits 8 to 64 pages and lies reasonably flat. Wire-bound opens completely flat, which is ideal for manuals. Perfect bound gives a square printed spine and suits 60 pages or more. Self-cover is the most economical for simple booklets.',
      },
      { question: 'What is the minimum and maximum page count?' },
      { question: 'Must page counts be a multiple of four?' },
      { question: 'Can the cover use a different stock?' },
      artworkFaq,
    ],
  },
  {
    slug: 'saddle-stitch',
    title: 'Saddle-Stitch Booklets',
    briefDescription:
      'Folded and stapled through the spine — the most common and economical binding. See details',
    price: '$38.99',
    priceDetail: '$3.90 each / 10 units',
    rating: 4.7,
    reviewCount: 4180,
    promoHeadline: 'Simple, neat binding that suits most booklets.',
    featureHighlights: [
      { title: 'Stapled through the fold', description: 'Two staples along the spine hold the pages.' },
      { title: 'Best for 8 to 64 pages', description: 'The sweet spot for this binding method.' },
      { title: 'Most economical binding', description: 'The lowest cost per booklet at most quantities.' },
      { title: 'Lies reasonably flat', description: 'Opens well for reading and display.' },
      { title: 'Page counts in fours', description: 'Total pages must be a multiple of four.' },
    ],
    sectionTitle: 'The everyday booklet',
    sectionBody:
      'Saddle-stitching folds the sheets and staples them through the spine. It is quick, economical and entirely appropriate for programmes, newsletters, short catalogues and anything up to around 64 pages.',
    faqs: [
      {
        question: 'Why must saddle-stitched page counts be a multiple of four?',
        answer:
          'Each folded sheet creates four pages — two on the front and two on the back. Because the booklet is assembled from folded sheets, the total page count must always be divisible by four.',
      },
      { question: 'What is the maximum page count for saddle-stitch?' },
      { question: 'Will the booklet lie flat when opened?' },
      { question: 'Can I use a heavier stock for the cover?' },
      artworkFaq,
    ],
  },
  {
    slug: 'wire-bound',
    title: 'Wire-Bound Booklets',
    briefDescription:
      'Metal spiral binding that lets pages open completely flat and fold right back. See details',
    price: '$48.99',
    priceDetail: '$4.90 each / 10 units',
    rating: 4.7,
    reviewCount: 2840,
    promoHeadline: 'Opens flat, folds back, stays put.',
    featureHighlights: [
      { title: 'Metal wire spiral', description: 'Durable binding along the spine edge.' },
      { title: 'Lies completely flat', description: 'Essential for manuals and workbooks.' },
      { title: 'Folds fully back on itself', description: 'Halves the desk space needed to read it.' },
      { title: 'Any page count', description: 'No multiple-of-four requirement.' },
      { title: 'Durable for repeated use', description: 'Survives regular handling far better.' },
    ],
    sectionTitle: 'Built to be used',
    sectionBody:
      'Wire binding threads a metal spiral through punched holes along the spine. The result opens completely flat and folds back on itself — which is why manuals, training workbooks and recipe books are almost always wire-bound.',
    faqs: [
      {
        question: 'What are the advantages of wire binding?',
        answer:
          'Wire-bound booklets open completely flat and can fold back on themselves, making them ideal for manuals, workbooks and anything used hands-free. They also accept any page count, unlike saddle-stitching which requires multiples of four.',
      },
      { question: 'What wire colours are available?' },
      { question: 'Is there a minimum or maximum page count?' },
      { question: 'How much margin should I leave for the punch holes?' },
      artworkFaq,
    ],
  },
  {
    slug: 'perfect-bound',
    title: 'Perfect Bound Booklets',
    briefDescription:
      'Glued square spine that can carry printed text, exactly like a paperback book. See details',
    price: '$64.99',
    priceDetail: '$6.50 each / 10 units',
    rating: 4.8,
    reviewCount: 3420,
    promoHeadline: 'A printed spine makes it a book, not a booklet.',
    featureHighlights: [
      { title: 'Square glued spine', description: 'The professional paperback finish.' },
      { title: 'Printable spine text', description: 'Title and branding visible on a shelf.' },
      { title: 'Best for 60+ pages', description: 'Needs sufficient bulk for a stable spine.' },
      { title: 'Premium appearance', description: 'The most substantial binding we offer.' },
      { title: 'Heavier cover stock', description: 'A sturdy cover wraps the glued block.' },
    ],
    sectionTitle: 'Shelf-ready',
    sectionBody:
      'Perfect binding glues the pages into a square spine and wraps them in a heavier cover, exactly as a paperback is made. Because the spine is flat it can carry printed text, so the publication is identifiable on a shelf.',
    faqs: [
      {
        question: 'What page count does perfect binding require?',
        answer:
          'Perfect binding needs roughly 60 pages or more to create a spine thick enough to hold the glue reliably and carry printed text. Below that, saddle-stitching is usually the better choice.',
      },
      { question: 'Can I print text on the spine?' },
      { question: 'Will a perfect bound booklet lie flat?' },
      { question: 'What cover stocks are available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'self-cover',
    title: 'Self-Cover Booklets',
    briefDescription:
      'Cover printed on the same stock as the inside pages — simple and economical. See details',
    price: '$32.99',
    priceDetail: '$3.30 each / 10 units',
    rating: 4.6,
    reviewCount: 1980,
    promoHeadline: 'One stock throughout keeps the cost down.',
    featureHighlights: [
      { title: 'Single stock throughout', description: 'Cover and interior on the same paper.' },
      { title: 'Most economical option', description: 'No separate cover stock to buy.' },
      { title: 'Lighter to post', description: 'Reduced weight cuts mailing costs.' },
      { title: 'Quick turnaround', description: 'Fewer production steps than a separate cover.' },
      { title: 'Ideal for short runs', description: 'Newsletters, programmes and reports.' },
    ],
    sectionTitle: 'Straightforward and economical',
    sectionBody:
      'A self-cover booklet prints the cover on the same stock as the interior pages. It costs less, weighs less in the post and produces faster — a sensible choice for newsletters, event programmes and internal reports.',
    faqs: [
      {
        question: 'What is a self-cover booklet?',
        answer:
          'A self-cover booklet uses the same paper stock for the cover as for the inside pages, rather than a separate heavier cover. This reduces cost and postal weight, though the booklet is less rigid than one with a dedicated cover stock.',
      },
      { question: 'Is a self-cover booklet durable enough?' },
      { question: 'What page counts are available?' },
      { question: 'Can I still use saddle-stitch binding?' },
      artworkFaq,
    ],
  },

  // ---------------------------------------------------- Marketing materials
  {
    slug: 'marketing-materials',
    title: 'Marketing Materials',
    briefDescription:
      'Everything printed that promotes your business, from flyers to tabletop displays. See details',
    price: '$14.99',
    priceDetail: 'From, per 100 units',
    rating: 4.8,
    reviewCount: 19240,
    promoHeadline: 'The printed toolkit for getting noticed.',
    featureHighlights: [
      { title: 'Full product range', description: 'Flyers, brochures, folders, magnets and more.' },
      { title: 'Consistent branding', description: 'Apply one design across every format.' },
      { title: 'Bulk pricing', description: 'Unit costs drop substantially at volume.' },
      { title: 'Fast-delivery options', description: 'Two-day production on popular items.' },
      { title: 'Design help available', description: 'Work with a designer if you would rather not.' },
    ],
    sectionTitle: 'Everything that promotes you',
    sectionBody:
      'Marketing materials cover everything printed that puts your business in front of people — handed out, posted through doors, left on counters or displayed at events. Applying one design across the range keeps the brand coherent.',
    faqs: [
      {
        question: 'Which marketing materials work best for a small business?',
        answer:
          'Flyers and postcards are the most cost-effective starting point for local promotion. Brochures suit businesses needing to explain a service in detail, while rack cards and door hangers work well for targeted local distribution.',
      },
      { question: 'Can I use the same design across different products?' },
      { question: 'What quantities should I order?' },
      { question: 'How quickly can materials be delivered?' },
      artworkFaq,
    ],
  },
  {
    slug: 'flyers',
    title: 'Flyers',
    briefDescription:
      'Single-sheet promotion for events, offers and announcements. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.7,
    reviewCount: 16880,
    promoHeadline: 'One page, one message, very little money.',
    featureHighlights: [
      { title: 'Low cost per unit', description: 'The most economical print promotion available.' },
      { title: 'Multiple sizes', description: 'From A6 handbills to full A4 sheets.' },
      { title: 'Single or double sided', description: 'Use the reverse for detail or a map.' },
      { title: 'Matte, glossy or uncoated', description: 'Finish to suit the setting.' },
      { title: 'Fast-delivery available', description: 'Two-day options for urgent events.' },
    ],
    sectionTitle: 'The workhorse of print promotion',
    sectionBody:
      'Flyers do one job well: get a single message in front of as many people as possible for as little as possible. Handed out, posted through doors or left on counters, they remain the cheapest printed promotion per person reached.',
    faqs: [
      {
        question: 'What sizes are available for flyers?',
        answer:
          'Flyers are available in a range of sizes from compact handbills through to full-page sheets. Smaller sizes suit hand distribution and door drops; larger sizes carry more detail and work better as counter displays.',
      },
      { question: 'Should I print single or double sided?' },
      { question: 'Which paper weight is best for flyers?' },
      { question: 'What quantity should I order?' },
      artworkFaq,
    ],
  },
  {
    slug: 'brochures',
    title: 'Brochures',
    briefDescription:
      'Folded multi-panel printing that explains a service properly. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.8,
    reviewCount: 11420,
    promoHeadline: 'Room to explain what a flyer cannot.',
    featureHighlights: [
      { title: 'Multiple fold styles', description: 'Tri-fold, z-fold, half-fold and gate-fold.' },
      { title: 'Six or more panels', description: 'Space for detail, pricing and images.' },
      { title: 'Structured storytelling', description: 'Panels guide the reader through in order.' },
      { title: 'Premium stock options', description: 'Heavier paper for a quality feel.' },
      { title: 'Fits standard racks', description: 'Tri-fold sizes suit display stands.' },
    ],
    sectionTitle: 'Space to make the case',
    sectionBody:
      'A brochure folds a single sheet into several panels, giving you a sequence to work with rather than one flat surface. That structure suits services that need explaining — packages, pricing tiers, treatment lists and itineraries.',
    faqs: [
      {
        question: 'Which fold style should I choose for my brochure?',
        answer:
          'Tri-fold is the most common and fits standard display racks. Z-fold opens concertina-style and suits step-by-step content. Half-fold gives four large panels for image-led designs, and gate-fold creates a dramatic reveal.',
      },
      { question: 'How do I set up artwork for folded panels?' },
      { question: 'Which paper weight works best for brochures?' },
      { question: 'Will tri-fold brochures fit a standard rack?' },
      artworkFaq,
    ],
  },
  {
    slug: 'folders',
    title: 'Folders',
    briefDescription:
      'Branded presentation folders with pockets for documents and a business card slot. See details',
    price: '$44.99',
    priceDetail: '$0.90 each / 50 units',
    rating: 4.7,
    reviewCount: 6180,
    promoHeadline: 'Hand over paperwork that looks like it matters.',
    featureHighlights: [
      { title: 'Interior pockets', description: 'Hold loose documents securely.' },
      { title: 'Business card slot', description: 'Die-cut holder on the pocket face.' },
      { title: 'Heavy card construction', description: 'Sturdy enough to protect contents.' },
      { title: 'Full-colour exterior', description: 'Branding across the whole outside.' },
      { title: 'Professional presentation', description: 'Essential for proposals and packs.' },
    ],
    sectionTitle: 'Presentation that holds together',
    sectionBody:
      'A presentation folder turns a stack of loose paper into a considered package. Interior pockets hold proposals, price lists and specifications, while a die-cut slot keeps your business card in place.',
    faqs: [
      {
        question: 'What size documents do presentation folders hold?',
        answer:
          'Our presentation folders are sized to hold standard letter or A4 documents. Interior pockets secure loose sheets, and a die-cut slot on the pocket holds a standard 3.5 by 2.0 inch business card.',
      },
      { question: 'Can I print on the inside of the folder?' },
      { question: 'How many sheets will a folder hold?' },
      { question: 'Are different pocket configurations available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'rack-cards',
    title: 'Rack Cards',
    briefDescription:
      'Tall, narrow cards sized to fit standard display racks and counter stands. See details',
    price: '$19.99',
    priceDetail: '$0.20 each / 100 units',
    rating: 4.7,
    reviewCount: 5420,
    promoHeadline: 'Sized precisely for the rack it sits in.',
    featureHighlights: [
      { title: 'Standard rack dimensions', description: 'Fits tourist and hotel display stands.' },
      { title: 'Tall narrow format', description: 'Eye-catching in a row of competing cards.' },
      { title: 'Full-colour both sides', description: 'Headline on the front, detail on the back.' },
      { title: 'Sturdy card stock', description: 'Stands upright without curling.' },
      { title: 'Ideal for tourism', description: 'The standard format for attractions and hotels.' },
    ],
    sectionTitle: 'Built for the display stand',
    sectionBody:
      'Rack cards are cut to the dimensions that standard display racks expect, which is why they fill hotel lobbies and visitor centres. The tall narrow format puts your headline at eye level in a row of competitors.',
    faqs: [
      {
        question: 'What are the standard dimensions for rack cards?',
        answer:
          'Rack cards are typically 4 inches wide by 9 inches tall, which is the standard size that display racks in hotels, visitor centres and tourist information points are designed to hold.',
      },
      { question: 'Which part of the card is visible in a rack?' },
      { question: 'What paper weight is best for rack cards?' },
      { question: 'Can rack cards be posted as mailers?' },
      artworkFaq,
    ],
  },
  {
    slug: 'magnets',
    title: 'Magnets',
    briefDescription:
      'Printed fridge magnets that keep your details visible for months. See details',
    price: '$17.99',
    priceDetail: '$0.18 each / 100 units',
    rating: 4.7,
    reviewCount: 7920,
    promoHeadline: 'Marketing that never gets thrown away.',
    featureHighlights: [
      { title: 'Strong magnetic backing', description: 'Holds firmly on any ferrous surface.' },
      { title: 'Months of visibility', description: 'Stays on the fridge long after a flyer is binned.' },
      { title: 'Multiple shapes and sizes', description: 'Rectangles, circles and custom cuts.' },
      { title: 'Full-colour printing', description: 'Vivid printing across the whole face.' },
      { title: 'Ideal for local services', description: 'Perfect for trades and takeaways.' },
    ],
    sectionTitle: 'Stays in sight',
    sectionBody:
      'A magnet is the rare piece of marketing people choose to keep. On a fridge door it is seen several times a day for months — which is exactly why plumbers, electricians and takeaways rely on them.',
    faqs: [
      {
        question: 'How strong are the printed magnets?',
        answer:
          'Our magnets use a full magnetic backing that holds securely on fridges, filing cabinets and other ferrous surfaces. They are strong enough to hold a sheet of paper against the surface but easy to reposition.',
      },
      { question: 'What shapes and sizes are available?' },
      { question: 'Can magnets be posted as direct mail?' },
      { question: 'Are the magnets weatherproof?' },
      artworkFaq,
    ],
  },
  {
    slug: 'door-hangers',
    title: 'Door Hangers',
    briefDescription:
      'Die-cut hangers that go straight onto the handle, not into the letterbox. See details',
    price: '$22.99',
    priceDetail: '$0.23 each / 100 units',
    rating: 4.6,
    reviewCount: 4280,
    promoHeadline: 'Impossible to miss on the way in.',
    featureHighlights: [
      { title: 'Die-cut handle hole', description: 'Hangs directly on the door handle.' },
      { title: 'Cannot be missed', description: 'Seen on entry, not buried in post.' },
      { title: 'No postage required', description: 'Distribute by hand at no mailing cost.' },
      { title: 'Full-colour both sides', description: 'Message visible from either direction.' },
      { title: 'Sturdy stock', description: 'Withstands weather and handling.' },
    ],
    sectionTitle: 'Straight to the door',
    sectionBody:
      'A door hanger bypasses the letterbox entirely. It is seen the moment someone reaches for the handle, which makes it far harder to ignore than a flyer among the post — and there is no postage to pay.',
    faqs: [
      {
        question: 'What size are door hangers and how do they attach?',
        answer:
          'Door hangers are printed on sturdy card with a die-cut hole and slot at the top that slides over a standard door handle. The typical size is around 4.25 by 11 inches, giving plenty of room for a clear message.',
      },
      { question: 'Are door hangers weather resistant?' },
      { question: 'Can I print on both sides?' },
      { question: 'Are there restrictions on door-to-door distribution?' },
      artworkFaq,
    ],
  },
  {
    slug: 'custom-tickets',
    title: 'Custom Tickets',
    briefDescription:
      'Numbered event tickets with perforated stubs for admission and raffles. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.7,
    reviewCount: 3640,
    promoHeadline: 'Sequential numbering, tear-off stubs, ready for the door.',
    featureHighlights: [
      { title: 'Sequential numbering', description: 'Every ticket uniquely numbered.' },
      { title: 'Perforated stub', description: 'Tears cleanly for admission control.' },
      { title: 'Matching stub numbers', description: 'Ideal for raffles and prize draws.' },
      { title: 'Full-colour printing', description: 'Branding across the whole ticket.' },
      { title: 'Sturdy card stock', description: 'Survives pockets and handling.' },
    ],
    sectionTitle: 'Control the door',
    sectionBody:
      'Custom tickets are sequentially numbered and perforated so the stub tears away cleanly on entry. The matching numbers on ticket and stub make raffles and prize draws straightforward to run and to audit.',
    faqs: [
      {
        question: 'Are tickets individually numbered?',
        answer:
          'Yes. Every ticket is printed with a unique sequential number, and the number is repeated on the perforated stub so the two halves can be matched — essential for raffles, prize draws and admission reconciliation.',
      },
      { question: 'Can I choose the starting number?' },
      { question: 'How strong is the perforation?' },
      { question: 'Can I order tickets in multiple designs?' },
      artworkFaq,
    ],
  },
  {
    slug: 'tabletop-displays',
    title: 'Tabletop Displays',
    briefDescription:
      'Freestanding printed displays for counters, desks and trade show tables. See details',
    price: '$29.99',
    priceDetail: 'Each',
    rating: 4.6,
    reviewCount: 2840,
    promoHeadline: 'Stand your message up where people already are.',
    featureHighlights: [
      { title: 'Freestanding construction', description: 'No stand or fixing required.' },
      { title: 'Double-sided options', description: 'Visible from both sides of a table.' },
      { title: 'Folds flat for transport', description: 'Packs down between events.' },
      { title: 'Rigid printed board', description: 'Holds shape without curling.' },
      { title: 'Ideal for trade shows', description: 'Counter-height visibility at events.' },
    ],
    sectionTitle: 'Eye level on the table',
    sectionBody:
      'Tabletop displays stand on their own on a counter, desk or trade show table. They put an offer or a message at the height people are already looking, and they fold flat to travel between events.',
    faqs: [
      {
        question: 'How do tabletop displays stand up?',
        answer:
          'Our tabletop displays are constructed from rigid printed board with a folding base or easel back, so they stand unaided on any flat surface. They fold flat for storage and transport between events.',
      },
      { question: 'Can displays be printed on both sides?' },
      { question: 'What sizes are available?' },
      { question: 'Are they durable enough for repeated use?' },
      artworkFaq,
    ],
  },
  {
    slug: 'menus',
    title: 'Menus',
    briefDescription:
      'Printed menus in single-sheet, folded and multi-page formats. See details',
    price: '$21.99',
    priceDetail: '$0.44 each / 50 units',
    rating: 4.7,
    reviewCount: 5180,
    promoHeadline: 'The one thing every diner reads from start to finish.',
    featureHighlights: [
      { title: 'Single, folded or bound', description: 'Formats to suit any menu length.' },
      { title: 'Wipeable finishes', description: 'Laminated options survive service.' },
      { title: 'Premium stock options', description: 'Heavier paper feels considerably better.' },
      { title: 'Full-colour printing', description: 'Food photography reproduces beautifully.' },
      { title: 'Quick reprints', description: 'Update prices and reorder easily.' },
    ],
    sectionTitle: 'Read cover to cover',
    sectionBody:
      'The menu is the one piece of print in a restaurant that every customer reads completely. Weight, finish and typography all quietly set expectations before the food arrives — which makes it worth getting right.',
    faqs: [
      {
        question: 'Which finish is best for menus that get handled constantly?',
        answer:
          'Laminated or coated finishes are strongly recommended for menus in regular service, as they resist spills and can be wiped clean. Uncoated stock looks excellent but marks easily and suits single-use or low-volume settings.',
      },
      { question: 'What menu formats are available?' },
      { question: 'How often should menus be reprinted?' },
      { question: 'Can I order a small quantity for a trial?' },
      artworkFaq,
    ],
  },
  {
    slug: 'calendars',
    title: 'Calendars',
    briefDescription:
      'Wall and desk calendars that keep your brand in view all year. See details',
    price: '$19.99',
    priceDetail: 'Each',
    rating: 4.8,
    reviewCount: 9420,
    promoHeadline: 'Twelve months of visibility from one print run.',
    featureHighlights: [
      { title: 'Wall and desk formats', description: 'Hanging or freestanding options.' },
      { title: 'Full-colour image pages', description: 'A different image for every month.' },
      { title: 'Year-long visibility', description: 'On the wall for twelve months.' },
      { title: 'Space for notes', description: 'Date grids sized for writing.' },
      { title: 'Popular business gift', description: 'A practical, welcome client gift.' },
    ],
    sectionTitle: 'A gift that keeps working',
    sectionBody:
      'A branded calendar is one of the few promotional items people actively want and then look at every day for a year. Twelve image panels give you twelve opportunities to show products, work or team.',
    faqs: [
      {
        question: 'What calendar formats are available?',
        answer:
          'We offer wall calendars that hang from a hook or wire binding, and desk calendars that stand freely on a surface. Both feature a full-colour image panel and date grid for each month of the year.',
      },
      { question: 'Can I start the calendar from any month?' },
      { question: 'Can I mark my own dates and events?' },
      { question: 'When should I order calendars for the new year?' },
      artworkFaq,
    ],
  },

  // ---------------------------------------------------- Business stationery
  {
    slug: 'business-stationery',
    title: 'Business Stationery',
    briefDescription:
      'Letterhead, notecards, envelopes and everything else the office runs on. See details',
    price: '$19.99',
    priceDetail: 'From, per 100 units',
    rating: 4.7,
    reviewCount: 8640,
    promoHeadline: 'The everyday paperwork, properly branded.',
    featureHighlights: [
      { title: 'Full stationery range', description: 'Letterhead, envelopes, notecards and pads.' },
      { title: 'Consistent branding', description: 'One identity across every document.' },
      { title: 'Quality paper stocks', description: 'Weights that feel professional in the hand.' },
      { title: 'Printer-friendly options', description: 'Stocks that run through office printers.' },
      { title: 'Easy reordering', description: 'Reprint from your saved designs.' },
    ],
    sectionTitle: 'Branded from the letterhead down',
    sectionBody:
      'Business stationery is the print nobody notices until it looks wrong. Letterhead, compliment slips and envelopes carrying one consistent identity make an organisation look established, whatever its actual size.',
    faqs: [
      {
        question: 'Which paper weight is best for letterhead?',
        answer:
          'Letterhead is typically printed on 100 to 120 gsm stock, which feels substantial while still running reliably through office laser and inkjet printers. Heavier weights can jam some desktop printers.',
      },
      { question: 'Will printed letterhead work in my office printer?' },
      { question: 'Can I order matching envelopes?' },
      { question: 'What quantities should I order?' },
      artworkFaq,
    ],
  },
  {
    slug: 'stamps-ink',
    title: 'Stamps & Ink',
    briefDescription:
      'Self-inking rubber stamps for addresses, logos and repeated messages. See details',
    price: '$24.99',
    priceDetail: 'Each',
    rating: 4.7,
    reviewCount: 6420,
    promoHeadline: 'Print it once, stamp it thousands of times.',
    featureHighlights: [
      { title: 'Self-inking mechanism', description: 'No separate ink pad required.' },
      { title: 'Thousands of impressions', description: 'Re-inkable for extended life.' },
      { title: 'Custom text and logos', description: 'Your artwork engraved into the die.' },
      { title: 'Multiple ink colours', description: 'Black, blue, red and green available.' },
      { title: 'Ideal for packaging', description: 'Brand boxes and mailers quickly.' },
    ],
    sectionTitle: 'The cheapest printing there is',
    sectionBody:
      'A custom stamp costs once and prints thousands of times. For return addresses, logos on packaging or repeated messages on paperwork, it works out cheaper than any printed label and takes a second to apply.',
    faqs: [
      {
        question: 'How many impressions will a self-inking stamp make?',
        answer:
          'A self-inking stamp typically produces several thousand clear impressions before needing re-inking, and the ink pad can be replaced or re-inked repeatedly, giving the stamp a very long working life.',
      },
      { question: 'What ink colours are available?' },
      { question: 'Can I have my logo on a stamp?' },
      { question: 'What surfaces can I stamp on?' },
      artworkFaq,
    ],
  },
  {
    slug: 'notebooks-pads-journals',
    title: 'Notebooks, Pads & Journals',
    briefDescription:
      'Branded notebooks and notepads for the desk, the bag and the client gift. See details',
    price: '$12.99',
    priceDetail: 'Each',
    rating: 4.7,
    reviewCount: 7180,
    promoHeadline: 'Branding that sits on a desk for months.',
    featureHighlights: [
      { title: 'Notebooks and tear-off pads', description: 'Bound journals or gummed notepads.' },
      { title: 'Custom cover printing', description: 'Full-colour branding on the cover.' },
      { title: 'Printed inside pages', description: 'Add branding or grids to every sheet.' },
      { title: 'Several sizes', description: 'Pocket, A5 and desk formats.' },
      { title: 'Popular client gift', description: 'Practical and genuinely used.' },
    ],
    sectionTitle: 'Used daily, seen daily',
    sectionBody:
      'A branded notebook sits on a desk for months and is opened every day. Unlike most promotional items it earns its place by being useful, which is exactly why it keeps working as a gift.',
    faqs: [
      {
        question: 'Can I print on the inside pages as well as the cover?',
        answer:
          'Yes. As well as full-colour cover printing, you can add a logo, footer or custom grid to the interior pages, so your branding appears on every sheet rather than only on the cover.',
      },
      { question: 'What sizes and page counts are available?' },
      { question: 'What is the difference between a notepad and a notebook?' },
      { question: 'Are lined, plain and grid pages available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'notecards',
    title: 'Notecards',
    briefDescription:
      'Folded cards for thank-yous, notes and personal correspondence. See details',
    price: '$18.99',
    priceDetail: '$0.38 each / 50 units',
    rating: 4.8,
    reviewCount: 5920,
    promoHeadline: 'A handwritten note still beats an email.',
    featureHighlights: [
      { title: 'Folded card format', description: 'Blank inside for a handwritten message.' },
      { title: 'Matching envelopes', description: 'Supplied with every order.' },
      { title: 'Quality paper stocks', description: 'Weights that feel worth keeping.' },
      { title: 'Writable uncoated interior', description: 'Takes pen ink cleanly.' },
      { title: 'Ideal for client thank-yous', description: 'A memorable follow-up gesture.' },
    ],
    sectionTitle: 'The note people keep',
    sectionBody:
      'A handwritten card cuts through in a way that no email does. Folded notecards with your branding on the front and a blank interior make the gesture easy to repeat for thank-yous, follow-ups and apologies.',
    faqs: [
      {
        question: 'Are envelopes included with notecards?',
        answer:
          'Yes. Matching envelopes are supplied with every notecard order at no additional cost, sized correctly for the folded card. Printed envelopes with your return address are also available.',
      },
      { question: 'Can I print inside the card?' },
      { question: 'Which paper stock is best for handwriting?' },
      { question: 'What sizes are available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'checks',
    title: 'Checks',
    briefDescription:
      'Business cheques printed to banking specification with security features. See details',
    price: '$39.99',
    priceDetail: 'Per 250 cheques',
    rating: 4.6,
    reviewCount: 3180,
    promoHeadline: 'Banking-compliant cheques with your branding.',
    featureHighlights: [
      { title: 'Banking specification', description: 'Printed to required standards.' },
      { title: 'Security features', description: 'Microprint and watermarks included.' },
      { title: 'Compatible with software', description: 'Aligns with common accounting packages.' },
      { title: 'Your branding included', description: 'Logo and business details printed.' },
      { title: 'Sequential numbering', description: 'Continues from your existing series.' },
    ],
    sectionTitle: 'Compliant and branded',
    sectionBody:
      'Business cheques must meet banking specifications to clear reliably. Ours are printed to those standards with security features built in, while still carrying your logo and business details.',
    faqs: [
      {
        question: 'What security features are included on business cheques?',
        answer:
          'Our business cheques include microprinting, security watermarks and chemical-sensitive paper that reveals tampering. These features meet standard banking requirements for cheque processing.',
      },
      { question: 'Will the cheques work with my accounting software?' },
      { question: 'Can I continue my existing cheque numbering?' },
      { question: 'What information do I need to supply?' },
      artworkFaq,
    ],
  },
  {
    slug: 'shipping-mailers-envelopes',
    title: 'Shipping Mailers & Envelopes',
    briefDescription:
      'Branded envelopes and mailers for post, packing and despatch. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.7,
    reviewCount: 6840,
    promoHeadline: 'Branding that arrives before the contents do.',
    featureHighlights: [
      { title: 'Full envelope range', description: 'Standard, window and padded mailers.' },
      { title: 'Full-colour exterior', description: 'Branding across the whole envelope.' },
      { title: 'Self-seal options', description: 'Faster packing for volume despatch.' },
      { title: 'Multiple sizes', description: 'From letter through to document mailers.' },
      { title: 'Protects in transit', description: 'Padded options for fragile contents.' },
    ],
    sectionTitle: 'The first thing they see',
    sectionBody:
      'The envelope arrives before its contents. A branded mailer signals who the post is from before it is opened, which raises the chance it gets opened at all — and makes the unboxing feel deliberate.',
    faqs: [
      {
        question: 'What envelope sizes are available?',
        answer:
          'We offer standard letter envelopes, larger document mailers and padded mailers for fragile items. Window envelopes are also available so addresses printed on the enclosed document show through.',
      },
      { question: 'Are self-seal envelopes available?' },
      { question: 'Can I print on the reverse of the envelope?' },
      { question: 'Which mailer is best for fragile items?' },
      artworkFaq,
    ],
  },
  {
    slug: 'custom-bookmarks',
    title: 'Custom Bookmarks',
    briefDescription:
      'Slim printed bookmarks that stay in use long after they are handed over. See details',
    price: '$12.99',
    priceDetail: '$0.13 each / 100 units',
    rating: 4.6,
    reviewCount: 2940,
    promoHeadline: 'A small piece of print with a long life.',
    featureHighlights: [
      { title: 'Slim tall format', description: 'The classic bookmark proportion.' },
      { title: 'Full-colour both sides', description: 'Two surfaces for your message.' },
      { title: 'Sturdy card stock', description: 'Survives months inside a book.' },
      { title: 'Optional tassel hole', description: 'Add a ribbon or tassel finish.' },
      { title: 'Ideal for libraries and shops', description: 'Popular with bookshops and schools.' },
    ],
    sectionTitle: 'Kept, not discarded',
    sectionBody:
      'Bookmarks are among the few promotional items that get used repeatedly rather than thrown away. For bookshops, libraries, schools and publishers they are a natural fit, and the cost per impression is remarkably low.',
    faqs: [
      {
        question: 'What size are custom bookmarks?',
        answer:
          'Bookmarks are typically 2 inches wide by 6 to 8 inches tall, slim enough to sit inside a closed book without distorting the spine. Both sides can be printed in full colour.',
      },
      { question: 'Can I add a tassel or ribbon?' },
      { question: 'Which card weight is best?' },
      { question: 'Are laminated bookmarks available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'company-letterhead',
    title: 'Company Letterhead',
    briefDescription:
      'Branded letterhead paper that runs through your office printer. See details',
    price: '$19.99',
    priceDetail: '$0.20 each / 100 units',
    rating: 4.7,
    reviewCount: 5640,
    promoHeadline: 'Formal correspondence that looks the part.',
    featureHighlights: [
      { title: 'Printer-friendly stock', description: 'Runs through laser and inkjet printers.' },
      { title: 'Full-colour branding', description: 'Logo and details in your brand colours.' },
      { title: 'Quality paper weights', description: 'Substantial without jamming printers.' },
      { title: 'Matching stationery', description: 'Pair with envelopes and compliment slips.' },
      { title: 'Easy reordering', description: 'Reprint from your saved design.' },
    ],
    sectionTitle: 'Correspondence with authority',
    sectionBody:
      'Letterhead is expected on anything formal — contracts, quotations, official notices. Printed on quality stock with consistent branding, it signals that the organisation behind the letter is established and organised.',
    faqs: [
      {
        question: 'Will printed letterhead run through my office printer?',
        answer:
          'Yes. We print letterhead on stocks between 100 and 120 gsm, chosen specifically to feel substantial while still feeding reliably through standard office laser and inkjet printers without jamming.',
      },
      { question: 'What margins should I leave for printed text?' },
      { question: 'Can I order matching envelopes and compliment slips?' },
      { question: 'What quantity should I order?' },
      artworkFaq,
    ],
  },
  {
    slug: 'business-invitations',
    title: 'Business Invitations',
    briefDescription:
      'Formal invitations for launches, conferences and corporate events. See details',
    price: '$22.99',
    priceDetail: '$0.46 each / 50 units',
    rating: 4.7,
    reviewCount: 3420,
    promoHeadline: 'An invitation that signals the event matters.',
    featureHighlights: [
      { title: 'Formal card stocks', description: 'Heavier weights for a sense of occasion.' },
      { title: 'Matching envelopes', description: 'Supplied with every order.' },
      { title: 'Premium finishes', description: 'Foil and embossed options available.' },
      { title: 'Flat or folded formats', description: 'Single card or folded invitation.' },
      { title: 'RSVP cards available', description: 'Add reply cards to the order.' },
    ],
    sectionTitle: 'Set the tone before they arrive',
    sectionBody:
      'A printed invitation tells people how seriously to take an event before they read a word of it. Weight, finish and typography do that work — which is why formal business events still send cards rather than calendar invites.',
    faqs: [
      {
        question: 'Are envelopes included with business invitations?',
        answer:
          'Yes. Matching envelopes are included with every invitation order. Printed envelopes carrying your return address, and separate RSVP reply cards, can both be added to the order.',
      },
      { question: 'What finishes are available for invitations?' },
      { question: 'How far in advance should invitations be sent?' },
      { question: 'Can I order RSVP cards to match?' },
      artworkFaq,
    ],
  },
  {
    slug: 'gift-certificates',
    title: 'Gift Certificates',
    briefDescription:
      'Branded gift certificates with optional numbering and security features. See details',
    price: '$14.99',
    priceDetail: '$0.30 each / 50 units',
    rating: 4.7,
    reviewCount: 4180,
    promoHeadline: 'Sell now, deliver later.',
    featureHighlights: [
      { title: 'Sequential numbering', description: 'Track and redeem individual certificates.' },
      { title: 'Space for value and expiry', description: 'Fields for amount and valid-until date.' },
      { title: 'Quality card stock', description: 'Feels like something worth receiving.' },
      { title: 'Full-colour branding', description: 'Your identity across the certificate.' },
      { title: 'Matching holders available', description: 'Present them in a branded sleeve.' },
    ],
    sectionTitle: 'Revenue before the visit',
    sectionBody:
      'Gift certificates bring in money before any service is delivered, and they bring new customers through the door on someone else\'s recommendation. Numbering makes them straightforward to track and redeem.',
    faqs: [
      {
        question: 'Can gift certificates be individually numbered?',
        answer:
          'Yes. Sequential numbering can be added to every certificate, which makes tracking issued and redeemed certificates straightforward and helps prevent duplication or fraudulent copies.',
      },
      { question: 'Should I print a value on the certificate?' },
      { question: 'Are matching holders available?' },
      { question: 'What security features can be added?' },
      artworkFaq,
    ],
  },
  {
    slug: 'gift-certificate-holders',
    title: 'Gift Certificate Holders',
    briefDescription:
      'Branded folders and sleeves that present a certificate properly. See details',
    price: '$16.99',
    priceDetail: '$0.34 each / 50 units',
    rating: 4.6,
    reviewCount: 2180,
    promoHeadline: 'Presentation turns a voucher into a gift.',
    featureHighlights: [
      { title: 'Holds a standard certificate', description: 'Sized for our certificate range.' },
      { title: 'Full-colour exterior', description: 'Branding across the whole holder.' },
      { title: 'Folded or sleeve formats', description: 'Choose the presentation style.' },
      { title: 'Quality card stock', description: 'Substantial enough to feel like a gift.' },
      { title: 'Ready to hand over', description: 'No wrapping required.' },
    ],
    sectionTitle: 'Worth presenting properly',
    sectionBody:
      'A certificate handed over loose feels like a receipt. In a branded holder it feels like a gift — and the holder carries your branding into the recipient\'s hands as well as the buyer\'s.',
    faqs: [
      {
        question: 'Will the holders fit certificates from elsewhere?',
        answer:
          'Our holders are sized for our standard gift certificate dimensions. If you are using certificates from another source, check their measurements against the holder specification before ordering.',
      },
      { question: 'What holder formats are available?' },
      { question: 'Can I print inside the holder?' },
      { question: 'Can I order holders and certificates together?' },
      artworkFaq,
    ],
  },

  // -------------------------------------------------------- Fast delivery
  {
    slug: 'fast-delivery',
    title: 'Fast-Delivery Marketing Materials',
    briefDescription:
      'Marketing print on an accelerated production schedule. See details',
    price: '$19.99',
    priceDetail: 'From, per 100 units',
    rating: 4.7,
    reviewCount: 8420,
    promoHeadline: 'For the deadline that moved.',
    featureHighlights: [
      { title: 'Accelerated production', description: 'Priority printing on a compressed schedule.' },
      { title: 'Two-day options', description: 'Popular products on a fast track.' },
      { title: 'No quality compromise', description: 'The same stocks and printing as standard.' },
      { title: 'Clear cut-off times', description: 'Deadlines shown before you order.' },
      { title: 'Tracked dispatch', description: 'Follow the order to the door.' },
    ],
    sectionTitle: 'Speed without compromise',
    sectionBody:
      'Fast-delivery marketing materials run on a compressed production schedule without changing the stock or print quality. Cut-off times are shown clearly before you order so the promise is one we can keep.',
    faqs: [
      {
        question: 'Which products are available for fast delivery?',
        answer:
          'Our most popular marketing products — postcards, flyers and selected other items — are available on two-day production. Availability and cut-off times are shown on each product page before you order.',
      },
      { question: 'What is the ordering cut-off time?' },
      { question: 'Does fast delivery affect print quality?' },
      { question: 'What happens if I miss the cut-off?' },
      artworkFaq,
    ],
  },
  {
    slug: '2-day-postcards',
    title: '2-Day Postcards',
    briefDescription:
      'Postcards printed and dispatched on a two business day schedule. See details',
    price: '$21.99',
    priceDetail: '$0.22 each / 100 units',
    rating: 4.6,
    reviewCount: 4620,
    promoHeadline: 'Postcards, in a hurry.',
    featureHighlights: [
      { title: 'Two business day production', description: 'Priority scheduling through the press.' },
      { title: 'Full standard quality', description: 'Identical stock and printing.' },
      { title: 'Popular sizes available', description: 'Standard and large formats qualify.' },
      { title: 'Tracked delivery', description: 'Follow the order from press to door.' },
      { title: 'Clear cut-off displayed', description: 'Know the deadline before ordering.' },
    ],
    sectionTitle: 'When the campaign date will not move',
    sectionBody:
      'Two-day postcards go into priority production immediately after ordering. The stock, the printing and the finish are identical to a standard order — only the schedule changes.',
    faqs: [
      {
        question: 'How quickly will 2-day postcards arrive?',
        answer:
          'Two-day postcards are printed and dispatched within two business days of your order clearing artwork checks. Delivery time on top of that depends on your chosen shipping method and destination.',
      },
      { question: 'Which postcard sizes qualify?' },
      { question: 'What is the ordering cut-off?' },
      { question: 'Does the two-day window include weekends?' },
      artworkFaq,
    ],
  },
  {
    slug: '2-day-flyers',
    title: '2-Day Flyers',
    briefDescription:
      'Flyers printed and dispatched on a two business day schedule. See details',
    price: '$19.99',
    priceDetail: '$0.20 each / 100 units',
    rating: 4.6,
    reviewCount: 3980,
    promoHeadline: 'Flyers for the event this weekend.',
    featureHighlights: [
      { title: 'Two business day production', description: 'Priority scheduling through the press.' },
      { title: 'Full standard quality', description: 'Identical stock and printing.' },
      { title: 'Popular sizes available', description: 'Common flyer formats qualify.' },
      { title: 'Tracked delivery', description: 'Follow the order from press to door.' },
      { title: 'Clear cut-off displayed', description: 'Know the deadline before ordering.' },
    ],
    sectionTitle: 'Events do not wait',
    sectionBody:
      'Two-day flyers exist because event dates rarely move to accommodate print schedules. Priority production gets them off the press fast without changing the paper or the print quality.',
    faqs: [
      {
        question: 'How quickly will 2-day flyers arrive?',
        answer:
          'Two-day flyers are printed and dispatched within two business days of your order clearing artwork checks. Add your chosen shipping time on top of that for the total delivery estimate.',
      },
      { question: 'Which flyer sizes qualify?' },
      { question: 'What is the ordering cut-off?' },
      { question: 'Does the two-day window include weekends?' },
      artworkFaq,
    ],
  },

  // ------------------------------------------------------ Postcards by size
  {
    slug: 'small',
    title: 'Small Postcards (4.2" x 5.5")',
    breadcrumb: 'Small Postcards',
    briefDescription:
      'Compact postcards that keep postage costs to a minimum. See details',
    price: '$13.99',
    priceDetail: '$0.14 each / 100 units',
    rating: 4.6,
    reviewCount: 4280,
    promoHeadline: 'Small format, small postage, large mailings.',
    featureHighlights: [
      { title: 'Compact 4.2" x 5.5"', description: 'The most economical size to post.' },
      { title: 'Lowest unit cost', description: 'Ideal for high-volume mailings.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
      { title: 'Three finish options', description: 'Matte, glossy or uncoated.' },
      { title: 'Fits standard racks', description: 'Suitable for counter displays.' },
    ],
    sectionTitle: 'Economical at volume',
    sectionBody:
      'The small postcard is the budget option for large mailings. There is less room for detail, but for a single clear offer across thousands of addresses the reduced postage and print cost matters more.',
    faqs: [
      {
        question: 'What are the exact dimensions of small postcards?',
        answer:
          'Small postcards measure 4.2 inches by 5.5 inches. They qualify for the lowest postcard postage rates, making them the most economical option for high-volume direct mail.',
      },
      { question: 'Is there enough room for an address panel?' },
      { question: 'Which finish works best at this size?' },
      { question: 'What quantity should I order?' },
      artworkFaq,
    ],
  },
  {
    slug: 'standard-size',
    title: 'Standard Postcards (4" x 6")',
    breadcrumb: 'Standard Size Postcards',
    briefDescription:
      'The most widely used postcard size, balancing space and postage cost. See details',
    price: '$16.99',
    priceDetail: '$0.17 each / 100 units',
    rating: 4.8,
    reviewCount: 14820,
    promoHeadline: 'The size most campaigns settle on.',
    featureHighlights: [
      { title: 'Classic 4" x 6" format', description: 'The most widely used postcard size.' },
      { title: 'Balanced space and cost', description: 'Room for a real message at a sensible price.' },
      { title: 'Standard postage rates', description: 'Qualifies for economical postcard postage.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
      { title: 'All finishes available', description: 'Matte, glossy or uncoated.' },
    ],
    sectionTitle: 'The sensible default',
    sectionBody:
      'Four by six inches is where most campaigns land. It carries enough message to be persuasive, stays within economical postage rates, and is the size people instinctively recognise as a postcard.',
    faqs: [
      {
        question: 'Why is 4" x 6" the most popular postcard size?',
        answer:
          'It balances three things well: enough space for a headline, image and call to action; qualification for standard postcard postage rates; and a familiar format that recipients recognise immediately as a postcard rather than junk mail.',
      },
      { question: 'How much space should I leave for the address?' },
      { question: 'Which finish is best for direct mail?' },
      { question: 'Can I print different designs in one order?' },
      artworkFaq,
    ],
  },
  {
    slug: 'large',
    title: 'Large Postcards (5" x 7")',
    breadcrumb: 'Large Postcards',
    briefDescription:
      'Extra space for images and detail without moving to a jumbo format. See details',
    price: '$21.99',
    priceDetail: '$0.22 each / 100 units',
    rating: 4.7,
    reviewCount: 6420,
    promoHeadline: 'More room where the standard size runs out.',
    featureHighlights: [
      { title: 'Generous 5" x 7"', description: 'Noticeably larger than standard.' },
      { title: 'Room for imagery', description: 'Photography reproduces at a useful scale.' },
      { title: 'Stands out in the post', description: 'Larger format is harder to overlook.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
      { title: 'All finishes available', description: 'Matte, glossy or uncoated.' },
    ],
    sectionTitle: 'Space to show as well as tell',
    sectionBody:
      'At five by seven inches there is room for photography that actually reads, alongside a headline and detail. For property listings, menus and anything visual, the extra space earns back the extra postage.',
    faqs: [
      {
        question: 'Do large postcards cost more to post?',
        answer:
          'Yes. At 5 by 7 inches, large postcards typically exceed standard postcard postage dimensions and are charged at letter rates. The greater impact often justifies the additional cost for image-led campaigns.',
      },
      { question: 'When is the larger size worth the extra cost?' },
      { question: 'Which finish works best for photography?' },
      { question: 'How much space should I leave for the address?' },
      artworkFaq,
    ],
  },
  {
    slug: 'jumbo',
    title: 'Jumbo Postcards (6" x 11")',
    breadcrumb: 'Jumbo Postcards',
    briefDescription:
      'Our largest postcard — effectively a flyer that arrives without an envelope. See details',
    price: '$29.99',
    priceDetail: '$0.30 each / 100 units',
    rating: 4.7,
    reviewCount: 3840,
    promoHeadline: 'Impossible to overlook in a stack of post.',
    featureHighlights: [
      { title: 'Large 6" x 11" format', description: 'Our biggest postcard size.' },
      { title: 'Dominates the post pile', description: 'Physically larger than everything around it.' },
      { title: 'Room for multiple offers', description: 'Space for several products or services.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
      { title: 'No envelope needed', description: 'Flyer-scale impact, postcard simplicity.' },
    ],
    sectionTitle: 'The largest we post',
    sectionBody:
      'A jumbo postcard is effectively a flyer that needs no envelope. It is physically larger than everything else in the day\'s post, which makes it very difficult to discard without reading — the whole point.',
    faqs: [
      {
        question: 'How much does it cost to post a jumbo postcard?',
        answer:
          'Jumbo postcards at 6 by 11 inches are charged at letter or large-letter postage rates rather than postcard rates. The higher postage is offset by substantially greater visibility in the recipient\'s post.',
      },
      { question: 'Is a jumbo postcard worth the extra postage?' },
      { question: 'How should I use the extra space?' },
      { question: 'Where does the address panel go?' },
      artworkFaq,
    ],
  },

  // ------------------------------------------------------ Holiday products
  {
    slug: 'rectangular-address-stamps',
    title: 'Rectangular Address Stamps',
    briefDescription:
      'Self-inking return address stamps in a classic rectangular format. See details',
    price: '$24.99',
    priceDetail: 'Each',
    rating: 4.8,
    reviewCount: 5180,
    promoHeadline: 'Address a hundred envelopes in a minute.',
    featureHighlights: [
      { title: 'Self-inking mechanism', description: 'No separate ink pad needed.' },
      { title: 'Classic rectangular die', description: 'Fits address text naturally.' },
      { title: 'Thousands of impressions', description: 'Re-inkable for long life.' },
      { title: 'Multiple ink colours', description: 'Black, blue, red and green.' },
      { title: 'Ideal for card season', description: 'Saves hours on holiday post.' },
    ],
    sectionTitle: 'The seasonal time-saver',
    sectionBody:
      'Anyone who has hand-written a hundred return addresses in December understands the appeal. A self-inking address stamp does the same job in a fraction of the time and looks considerably neater.',
    faqs: [
      {
        question: 'How many lines of text fit on a rectangular address stamp?',
        answer:
          'A rectangular address stamp typically accommodates four to five lines of text, which is sufficient for a name, street address, town and postcode. Text is automatically sized to fit the die.',
      },
      { question: 'What ink colours are available?' },
      { question: 'Can the stamp be re-inked?' },
      { question: 'Can I include a small logo or motif?' },
      artworkFaq,
    ],
  },
  {
    slug: 'circular-address-stamps',
    title: 'Circular Address Stamps',
    briefDescription:
      'Round self-inking address stamps with a decorative border. See details',
    price: '$26.99',
    priceDetail: 'Each',
    rating: 4.7,
    reviewCount: 3420,
    promoHeadline: 'A round stamp that looks like a seal.',
    featureHighlights: [
      { title: 'Circular die format', description: 'Distinctive round impression.' },
      { title: 'Decorative border options', description: 'Wreaths, rings and ornamental frames.' },
      { title: 'Self-inking mechanism', description: 'No separate ink pad needed.' },
      { title: 'Multiple ink colours', description: 'Black, blue, red and green.' },
      { title: 'Ideal for cards and gifts', description: 'Doubles as a decorative seal.' },
    ],
    sectionTitle: 'Part address, part seal',
    sectionBody:
      'A circular address stamp reads more like a wax seal than a postal necessity. With a decorative border it works equally well on envelopes, gift tags and packaging, which makes it a favourite through the card season.',
    faqs: [
      {
        question: 'How much text fits on a circular address stamp?',
        answer:
          'Circular stamps hold slightly less text than rectangular ones — typically three to four short lines within the central area, with the outer ring available for a decorative border or curved text.',
      },
      { question: 'What border designs are available?' },
      { question: 'Can I use it on gift tags and packaging?' },
      { question: 'What ink colours are available?' },
      artworkFaq,
    ],
  },
  {
    slug: 'calendar-magnets',
    title: 'Calendar Magnets',
    briefDescription:
      'Magnetic calendars that stay on the fridge for the whole year. See details',
    price: '$22.99',
    priceDetail: '$0.23 each / 100 units',
    rating: 4.8,
    reviewCount: 6240,
    promoHeadline: 'Twelve months on the fridge door.',
    featureHighlights: [
      { title: 'Full magnetic backing', description: 'Holds firmly on any fridge.' },
      { title: 'Full-year date grid', description: 'All twelve months at a glance.' },
      { title: 'Your branding alongside', description: 'Contact details always visible.' },
      { title: 'Full-colour printing', description: 'Vivid printing across the face.' },
      { title: 'Popular seasonal gift', description: 'Genuinely useful, so genuinely kept.' },
    ],
    sectionTitle: 'A year of quiet advertising',
    sectionBody:
      'A calendar magnet combines two things people keep: a magnet and a calendar. It stays on the fridge for twelve months and is glanced at daily, with your contact details sitting right beside the dates.',
    faqs: [
      {
        question: 'Does a calendar magnet show the whole year?',
        answer:
          'Yes. Our calendar magnets show all twelve months of the year on a single magnet, with space alongside for your logo and contact details. Single-month tear-off formats are also available.',
      },
      { question: 'When should I order calendar magnets?' },
      { question: 'How strong is the magnetic backing?' },
      { question: 'Can I choose which year the calendar shows?' },
      artworkFaq,
    ],
  },
  {
    slug: 'raised-foil-postcards',
    title: 'Raised Foil Postcards',
    briefDescription:
      'Postcards with dimensional metallic foil detail for premium campaigns. See details',
    price: '$44.99',
    priceDetail: '$0.45 each / 100 units',
    rating: 4.8,
    reviewCount: 2840,
    promoHeadline: 'Direct mail that feels expensive because it is.',
    featureHighlights: [
      { title: 'Dimensional metallic foil', description: 'Foil raised above the card surface.' },
      { title: 'Four foil colours', description: 'Gold, silver, copper and rose gold.' },
      { title: 'Striking on dark stock', description: 'Foil against dark card is dramatic.' },
      { title: 'Premium card weight', description: 'Heavy stock supports the foil.' },
      { title: 'Ideal for high-value campaigns', description: 'Worth it when each recipient matters.' },
    ],
    sectionTitle: 'When every recipient counts',
    sectionBody:
      'Raised foil costs more per card, which makes it the wrong choice for a mass mailing and the right one for a short list of high-value prospects. The card feels expensive in the hand, and that impression transfers.',
    faqs: [
      {
        question: 'What foil colours are available on postcards?',
        answer:
          'Raised foil postcards are available in gold, silver, copper and rose gold. The foil is applied over a dimensional layer so it both reflects light and stands physically proud of the card surface.',
      },
      { question: 'Can foil postcards go through the post safely?' },
      { question: 'What minimum quantity applies?' },
      { question: 'How should I set up artwork for foil areas?' },
      artworkFaq,
    ],
  },
  {
    slug: 'raised-foil-rack-cards',
    title: 'Raised Foil Rack Cards',
    briefDescription:
      'Rack cards with dimensional metallic foil that catches the eye on a display stand. See details',
    price: '$39.99',
    priceDetail: '$0.40 each / 100 units',
    rating: 4.7,
    reviewCount: 1920,
    promoHeadline: 'Shine that wins the rack.',
    featureHighlights: [
      { title: 'Dimensional metallic foil', description: 'Foil raised above the card surface.' },
      { title: 'Stands out in a rack', description: 'Catches light where competitors do not.' },
      { title: 'Four foil colours', description: 'Gold, silver, copper and rose gold.' },
      { title: 'Standard rack dimensions', description: 'Fits conventional display stands.' },
      { title: 'Premium card weight', description: 'Heavy stock stands upright cleanly.' },
    ],
    sectionTitle: 'Win the rack',
    sectionBody:
      'A display rack is a competition between a dozen similar cards. Raised foil is the simplest way to win it — the card catches the light as someone walks past, which is usually all the advantage needed.',
    faqs: [
      {
        question: 'Why use foil on rack cards specifically?',
        answer:
          'Display racks hold many competing cards at once. Metallic foil catches ambient light and movement in a way that flat printing cannot, drawing the eye to your card first as someone scans the rack.',
      },
      { question: 'What foil colours are available?' },
      { question: 'Do foil rack cards fit standard racks?' },
      { question: 'How should I set up artwork for foil areas?' },
      artworkFaq,
    ],
  },

  // ------------------------------------------------------------------ Other
  {
    slug: 'free-sample-kit',
    title: 'Free Business Sample Kit',
    briefDescription:
      'A free pack of printed samples so you can judge stocks and finishes in the hand. See details',
    price: 'Free',
    priceDetail: 'One kit per customer',
    rating: 4.8,
    reviewCount: 8420,
    promoHeadline: 'Judge paper with your hands, not your monitor.',
    featureHighlights: [
      { title: 'Completely free', description: 'No charge for the kit itself.' },
      { title: 'Range of stocks included', description: 'Compare weights and finishes directly.' },
      { title: 'Special finishes shown', description: 'Foil and raised gloss samples included.' },
      { title: 'Print quality demonstrated', description: 'See how colour reproduces on each stock.' },
      { title: 'Avoids costly reprints', description: 'Choosing right first time saves money.' },
    ],
    sectionTitle: 'The best way to choose',
    sectionBody:
      'No screen can show you what a paper stock feels like or how a finish catches the light. Our free sample kit sends printed examples of the range so you can decide with the material in your hands.',
    faqs: [
      {
        question: 'What is included in the free business sample kit?',
        answer:
          'The kit contains printed samples across our main paper stocks and weights, together with examples of special finishes such as metallic foil and raised gloss, so you can compare them side by side before ordering.',
      },
      { question: 'Is the sample kit genuinely free?' },
      { question: 'How long does the kit take to arrive?' },
      { question: 'Can I request specific samples?' },
      { question: 'Can I order more than one kit?' },
    ],
  },
  {
    slug: 'accessories',
    title: 'Marketing Materials Accessories',
    briefDescription:
      'Stands, holders and display accessories that present your print properly. See details',
    price: '$14.99',
    priceDetail: 'From, each',
    rating: 4.5,
    reviewCount: 2140,
    promoHeadline: 'Print looks better when it is displayed properly.',
    featureHighlights: [
      { title: 'Counter and rack stands', description: 'Display holders for print materials.' },
      { title: 'Acrylic and metal options', description: 'Durable materials for daily use.' },
      { title: 'Fits standard formats', description: 'Sized for our print product range.' },
      { title: 'Freestanding and wall-mount', description: 'Options for any space.' },
      { title: 'Reusable across campaigns', description: 'Swap the print, keep the stand.' },
    ],
    sectionTitle: 'The frame around the print',
    sectionBody:
      'A stack of flyers on a counter looks like clutter; the same flyers in a proper holder look like an offer. Display accessories are a small cost that changes how the print itself is perceived.',
    faqs: [
      {
        question: 'Which accessories fit which print products?',
        answer:
          'Our display accessories are sized to our standard print formats — rack card holders, flyer stands and brochure displays each list the print dimensions they accommodate on their product page.',
      },
      { question: 'Are wall-mounted options available?' },
      { question: 'What materials are the stands made from?' },
      { question: 'Can accessories be branded?' },
      artworkFaq,
    ],
  },
];

/** slug -> full ProductDetailData, built from the shared template. */
export const POSTCARD_VARIANTS: Record<string, ProductDetailData> = buildCatalog(SPECS, CONFIG);

export const POSTCARD_SLUGS = Object.keys(POSTCARD_VARIANTS);
