import { ProductDetailData } from '../../../shared/product-detail/product-detail.model';

const IMG = '/images/business-cards/matte';

export const MATTE_BUSINESS_CARDS: ProductDetailData = {
  breadcrumb: 'Home / Business Cards / Matte Business Cards',
  productTitle: 'Matte Business Cards',
  rating: 4.7,
  reviewCount: 18401,
  briefDescription:
    'Impress customers with the smooth, polished look of matte business cards. Assorted shape, corner and finish options. See details',
  price: '$14.99',
  priceDetail: '$0.15 each / 100 units',
  zipCode: '02451',
  fastDelivery: { price: '$23.99', date: 'Thursday, Aug 27' },
  standardDelivery: { price: '$5.99', date: 'Wednesday, Sep 9' },
  dropdowns: [
    { label: 'Shape', options: ['Standard', 'Rounded Corners', 'Square', 'Circle', 'Oval', 'Leaf'] },
    { label: 'Corners', options: ['Square', 'Rounded'] },
  ],
  quantityOptions: [
    { quantity: '50 units', price: '$10.00', perUnit: '$0.20/unit' },
    { quantity: '100 units', price: '$14.99', perUnit: '$0.15/unit' },
    { quantity: '250 units', price: '$19.99', perUnit: '$0.08/unit' },
    { quantity: '500 units', price: '$24.99', perUnit: '$0.05/unit' },
    { quantity: '1000 units', price: '$39.99', perUnit: '$0.04/unit' },
    { quantity: '1500 units', price: '$52.49', perUnit: '$0.03/unit' },
    { quantity: '2000 units', price: '$64.99', perUnit: '$0.03/unit' },
    { quantity: '2500 units', price: '$74.99', perUnit: '$0.03/unit' },
    { quantity: '5000 units', price: '$129.99', perUnit: '$0.03/unit' },
    { quantity: '10000 units', price: '$229.99', perUnit: '$0.02/unit' },
  ],
  designServicePrice: '$10.00',

  mainImage: `${IMG}/main-image-container-main-mockup-55_46.png`,
  thumbnails: [
    `${IMG}/main-image-container-main-mockup-55_46.png`,
    `${IMG}/thumb-0-thumb-img-55_53.png`,
    `${IMG}/thumb-1-thumb-img-55_55.png`,
    `${IMG}/thumb-2-thumb-img-55_57.png`,
    `${IMG}/thumb-3-thumb-img-55_59.png`,
    `${IMG}/thumb-4-thumb-img-55_61.png`,
    `${IMG}/thumb-5-thumb-img-55_63.png`,
    `${IMG}/thumb-6-thumb-img-55_65.png`,
  ],

  tabs: ['Samples', 'Specs & Templates', 'Product Options'],

  templatesSectionTitle: 'Explore most popular templates',
  templates: [
    { category: 'Business Services', brand: 'Apex Solutions', description: 'Deep navy and copper geometric corporate template', tag: 'Modern & Simple', image: `${IMG}/template-card-0-card-visual-55_200.png` },
    { category: 'Business Services', brand: 'Lumina Studio', description: 'Minimalist pastel colors with elegant typography', tag: 'Minimal', image: `${IMG}/template-card-1-card-visual-55_206.png` },
    { category: 'Business Services', brand: 'Kanso Interiors', description: 'Earth-toned raw space aesthetic card layout', tag: 'Professional', image: `${IMG}/template-card-2-card-visual-55_212.png` },
    { category: 'Business Services', brand: 'Vanguard Law', description: 'Classic serif typography on textured card stock', tag: 'Industry', image: `${IMG}/template-card-3-card-visual-55_218.png` },
    { category: 'Business Services', brand: 'Built Construction', description: 'Bold high-contrast industrial brand template', tag: 'Creative', image: `${IMG}/template-card-4-card-visual-55_224.png` },
    { category: 'Business Services', brand: 'Abstract Studio', description: 'Artistic liquid organic shapes with matte finish', tag: 'Creative', image: `${IMG}/template-card-5-card-visual-55_230.png` },
  ],

  promoHeadline: 'Go for a traditional paper that looks and feels great with matte finish business cards.',
  featureHighlights: [
    { title: 'Rich, shine-free finish', description: 'Provides high readability with a sophisticated, non-reflective exterior style.' },
    { title: 'Great for readability', description: 'Allows clear contrast for fine prints, phone numbers, and sleek dark palettes.' },
    { title: 'Multiple thickness options', description: 'Available in Standard (14pt), Premium (16pt), and Premium Plus (18pt).' },
    { title: '2 shape & corner options', description: 'Go classic rectangular or sleek rounded corners to fit your professional style.' },
    { title: 'Special finishes available', description: 'Accentuate your card with eye-catching metallic foil or embossed spot gloss.' },
  ],

  coatedSectionTitle: 'A smoothly coated classic',
  coatedSectionImage: `${IMG}/coated-classic-section-coated-image-aside-55_272.png`,
  coatedSectionBody:
    "Polished and professional, matte finish business cards are always in style. Matte paper has been a customer favorite for years, and it's easy to see why. The smooth, low-contrast finish reduces glare and deepens colors, making them a great option for readability and modern designs like black business cards.",

  personalTouchTitle: 'Add your personal touch',
  personalTouchBody:
    'Make your matte business cards speak for your business with our variety of custom options. We have standard, premium and premium plus thicknesses available. You can also select a square shape or rounded corners to make your design stand out. For an ultra-eye-catching touch, try adding one of our special finishes, like metallic foil or embossed gloss.',
  thicknessOptions: [
    { title: 'Standard (14pt)', description: 'Budget-friendly classic feel, ideal for large team distributions.' },
    { title: 'Premium (16pt)', description: 'Noticeably sturdier weight that leaves an upgraded impression.' },
    { title: 'Premium Plus (18pt)', description: 'Substantial, ultra-durable premium board for distinguished brands.' },
  ],
  finishOptions: [
    { title: 'Metallic Foil', description: 'Shiny reflective details' },
    { title: 'Embossed Gloss', description: 'Raised, high-impact varnish' },
    { title: 'Rounded Corners', description: 'Modern curved border style' },
    { title: 'Square Shape', description: 'Bold and unique format' },
  ],

  startDesigningTitle: 'Start designing',
  startDesigningBody:
    'Our user-friendly design studio makes business card printing easier than ever. You can upload your own complete design, or you can pick from a wide range of templates, all tailored to specific industries, themes and uses.',
  startDesigningImage: `${IMG}/start-designing-section-studio-mockup-aside-55_309.png`,

  sustainabilityImage: `${IMG}/better-by-design-section-eco-sustainability-visual-55_311.png`,
  sustainabilityBody:
    'This item is part of our Better by Design collection, which connects you to responsibly sourced products. Products selected with consideration for environmental impact, workers, communities and biodiversity.',

  relatedProducts: [
    { title: 'QR Code Business Cards', price: 'From $10.00', image: `${IMG}/related-0-rel-image-55_326.png`, path: '/business-cards/qr-code' },
    { title: 'Standard Business Cards', price: 'From $14.99', image: `${IMG}/related-1-rel-image-55_331.png`, path: '/business-cards/standard' },
    { title: 'Square Business Cards', price: 'From $26.99', image: `${IMG}/related-2-rel-image-55_336.png`, path: '/business-cards/square' },
    { title: 'Glossy Business Cards', price: 'From $15.99', image: `${IMG}/related-3-rel-image-55_341.png`, path: '/business-cards/glossy' },
    { title: 'Rounded Corner Cards', price: 'From $22.99', image: `${IMG}/related-4-rel-image-55_346.png`, path: '/business-cards/rounded-corner' },
    { title: 'Magnetic Business Cards', price: 'From $17.99', image: `${IMG}/related-5-rel-image-55_351.png`, path: '/business-cards/magnetic' },
  ],
  frequentlyBought: [
    { title: 'PrintGraphi Design Wrap Pen', price: '$0.89–$3.49 each', image: `${IMG}/freq-0-freq-image-55_359.png` },
    { title: 'PrintGraphi Printed Baseball Cap', price: '$8.99–$16.99', image: `${IMG}/freq-1-freq-image-55_364.png` },
    { title: 'Gift Certificates', price: 'From $14.99', image: `${IMG}/freq-2-freq-image-55_369.png`, path: '/postcards-print-advertising/gift-certificates' },
    { title: 'Car Window Decals', price: 'From $10.09', image: `${IMG}/freq-3-freq-image-55_374.png` },
    { title: 'Custom Notebooks', price: 'From $12.99', image: `${IMG}/freq-4-freq-image-55_379.png`, path: '/postcards-print-advertising/notebooks-pads-journals' },
    { title: 'Photo Mouse Pad', price: '$3.59–$9.99', image: `${IMG}/freq-5-freq-image-55_384.png` },
  ],

  ratingSummary: 4.7,
  ratingCount: 18401,
  ratingBreakdown: [
    { stars: '5★', percent: '90%' },
    { stars: '4★', percent: '4%' },
    { stars: '3★', percent: '2%' },
    { stars: '2★', percent: '1%' },
    { stars: '1★', percent: '3%' },
  ],
  reviews: [
    {
      title: 'My Biz Cards Turned out Great!',
      body: 'The matte finish feels extremely premium and nice to hold. The colors match exactly what was in my digital mockup. Highly recommend this standard size card option.',
      author: 'Marcus K.',
      date: 'Aug 12, 2026',
    },
    {
      title: 'Perfect',
      body: 'Exactly what I expected. The rounded corners look clean and modern. Outstanding print precision and fast turn-around from the shipping department.',
      author: 'Sarah L.',
      date: 'Aug 05, 2026',
    },
    {
      title: 'Great job!',
      body: 'Super readable. The text is crisp and there is absolutely zero reflection glare. Customer support was incredibly helpful during template alignment.',
      author: 'David P.',
      date: 'Jul 28, 2026',
    },
  ],

  designBannerBody:
    'No more guesswork. We take care of the entire design process, from brainstorming ideas to delivering the files to your account.',
  designBannerImage: `${IMG}/design-banner-section-workspace-visual-55_501.png`,

  faqs: [
    {
      question: 'How thick are matte business cards? What are the dimensions?',
      answer:
        'Our matte business cards are available in three thicknesses: Standard (14pt, 300 gsm), Premium (16pt, 350 gsm), and Premium Plus (18pt, 400 gsm). The dimensions are standard 3.5 inches by 2.0 inches.',
    },
    { question: 'Is it a matte surface on both the front and back?' },
    { question: 'Is it easy to write on matte coated business cards?' },
    { question: 'Can I choose a custom shape, rounded corners or other special finishes for my matte business cards?' },
    { question: "Can I get a glossy finish for my business cards instead of matte? What's the difference?" },
    { question: 'How should I prepare my artwork or design files for matte business card printing?' },
  ],
};
