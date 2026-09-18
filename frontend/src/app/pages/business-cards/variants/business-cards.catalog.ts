import { ProductDetailData } from '../../../shared/product-detail/product-detail.model';
import { VariantSpec, CatalogConfig, buildCatalog } from '../../../shared/product-detail/variant-catalog';
import { MATTE_BUSINESS_CARDS } from './matte.data';

/**
 * Catalogue-driven business card variants.
 *
 * `ProductDetail` is the template and each entry below is the data for one
 * slug; structural sections are inherited from the Figma-verified Matte page
 * by `buildCatalog`.
 *
 * Images: only Matte has its own Figma exports so far. Other variants fall back
 * to Matte's imagery until their own assets are available; set `imageDir` on a
 * variant once `frontend/public/images/business-cards/<slug>/` is populated.
 */
const CONFIG: CatalogConfig = {
  imageRoot: 'business-cards',
  baseImageDir: 'matte',
  breadcrumbPrefix: 'Home / Business Cards',
  categoryPath: '/business-cards',
  base: MATTE_BUSINESS_CARDS,
};

const SPECS: VariantSpec[] = [
  // ---------------------------------------------------------------- Standard
  {
    slug: 'standard',
    title: 'Standard Business Cards',
    briefDescription:
      'Our most popular business card. Quality 14pt stock with your choice of matte, glossy or uncoated finish. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.8,
    reviewCount: 42130,
    promoHeadline: 'The everyday business card that works for every business.',
    featureHighlights: [
      { title: 'Three finish options', description: 'Choose matte, glossy or uncoated to suit your brand style.' },
      { title: 'Quality 14pt stock', description: 'Sturdy, professional card stock that holds colour beautifully.' },
      { title: 'Shape & corner choices', description: 'Classic rectangular or modern rounded corners.' },
      { title: 'Fast turnaround', description: 'Printed and dispatched quickly, with next-day options available.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'A dependable classic',
    sectionBody:
      'Standard business cards are the reliable choice for any business. Printed on quality 14pt stock with your choice of finish, they deliver a professional impression at an everyday price.',
    faqs: [
      {
        question: 'What are the dimensions of standard business cards?',
        answer:
          'Standard business cards measure 3.5 inches by 2.0 inches, printed on 14pt (300 gsm) stock. Rounded corner and square formats are also available.',
      },
      { question: 'Which finish should I choose?' },
      { question: 'Can I print on both sides?' },
      { question: 'How quickly can I receive my order?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'glossy',
    title: 'Glossy Business Cards',
    briefDescription:
      'Make colours pop with a bright, reflective gloss coating. Ideal for photography and vivid brand palettes. See details',
    price: '$15.99',
    priceDetail: '$0.16 each / 100 units',
    rating: 4.7,
    reviewCount: 15208,
    promoHeadline: 'Bright, high-shine cards that make your colours leap off the card.',
    featureHighlights: [
      { title: 'Vivid colour reproduction', description: 'The gloss coating deepens colour and boosts contrast.' },
      { title: 'Photo-friendly finish', description: 'Ideal for image-led designs and photography.' },
      { title: 'Smudge and scuff resistant', description: 'The coating protects against everyday handling marks.' },
      { title: 'Multiple thickness options', description: 'Available in Standard (14pt), Premium (16pt) and Premium Plus (18pt).' },
      { title: 'Shape & corner choices', description: 'Rectangular or rounded corners to suit your style.' },
    ],
    sectionTitle: 'Shine that sells',
    sectionBody:
      'Glossy business cards use a reflective coating that intensifies colour and sharpens contrast. They are the natural choice for photographers, designers and any brand built on bold, saturated colour.',
    faqs: [
      {
        question: 'What is the difference between glossy and matte business cards?',
        answer:
          'Glossy cards have a reflective coating that deepens colour and increases contrast, making them ideal for photographs and vivid designs. Matte cards have a smooth, non-reflective finish that reduces glare and is easier to write on.',
      },
      { question: 'Can I write on glossy business cards?' },
      { question: 'Is the gloss coating applied to both sides?' },
      { question: 'Do glossy cards show fingerprints?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'uncoated',
    title: 'Uncoated Business Cards',
    briefDescription:
      'Natural, tactile card with no coating at all. Easy to write on and pleasingly understated. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.6,
    reviewCount: 9874,
    promoHeadline: 'Honest, tactile cards with nothing between you and the paper.',
    featureHighlights: [
      { title: 'Completely writable', description: 'No coating means pen and ink take instantly.' },
      { title: 'Natural paper feel', description: 'A soft, tactile surface with genuine paper character.' },
      { title: 'Understated and timeless', description: 'Muted, non-reflective colours suit classic branding.' },
      { title: 'Multiple thickness options', description: 'Available in Standard (14pt), Premium (16pt) and Premium Plus (18pt).' },
      { title: 'Shape & corner choices', description: 'Rectangular or rounded corners available.' },
    ],
    sectionTitle: 'Naturally understated',
    sectionBody:
      'Uncoated business cards leave the paper exactly as it is. The result is a soft, tactile card with a natural finish that takes pen beautifully — perfect for appointment notes and personal touches.',
    faqs: [
      {
        question: 'Can I write on uncoated business cards?',
        answer:
          'Yes. Because there is no coating, uncoated cards absorb ink readily and can be written on with virtually any pen, making them ideal for appointment details and handwritten notes.',
      },
      { question: 'Do colours look different on uncoated stock?' },
      { question: 'Are uncoated cards more prone to marking?' },
      { question: 'What thicknesses are available?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // ----------------------------------------------------------- Unique shapes
  {
    slug: 'rounded-corner',
    title: 'Rounded Corner Business Cards',
    briefDescription:
      'Softly curved corners that feel modern in the hand and resist bending in the pocket. See details',
    price: '$22.99',
    priceDetail: '$0.23 each / 100 units',
    rating: 4.8,
    reviewCount: 12045,
    promoHeadline: 'A small change in shape that makes a large change in impression.',
    featureHighlights: [
      { title: 'Modern silhouette', description: 'Curved corners read as contemporary and considered.' },
      { title: 'Resists dog-earing', description: 'Rounded edges survive wallets and pockets far better.' },
      { title: 'Choice of corner radius', description: 'Subtle or pronounced curves to suit your design.' },
      { title: 'Any finish', description: 'Available with matte, glossy or uncoated coating.' },
      { title: 'Multiple thickness options', description: 'Standard, Premium and Premium Plus stocks.' },
    ],
    sectionTitle: 'Curved for comfort',
    sectionBody:
      'Rounded corner business cards trade the sharp right angle for a soft curve. The change is subtle, but it reads as modern and deliberate — and the cards stay crisp far longer in a wallet.',
    faqs: [
      {
        question: 'What corner radius is used on rounded corner business cards?',
        answer:
          'Our rounded corner cards use a quarter-inch (6mm) radius by default, which gives a clearly curved but still professional silhouette. The overall card remains the standard 3.5 by 2.0 inches.',
      },
      { question: 'Do rounded corners cost more than square corners?' },
      { question: 'Can I combine rounded corners with a special finish?' },
      { question: 'Do I need to change my artwork for rounded corners?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'square',
    title: 'Square Business Cards',
    briefDescription:
      'A bold 2.5-inch square format that stands apart from every other card in the stack. See details',
    price: '$26.99',
    priceDetail: '$0.27 each / 100 units',
    rating: 4.7,
    reviewCount: 6321,
    promoHeadline: 'Break the rectangle. Square cards get noticed and kept.',
    featureHighlights: [
      { title: 'Distinctive format', description: 'A square card stands out instantly in a stack of rectangles.' },
      { title: 'Balanced composition', description: 'Equal sides suit logos, monograms and centred layouts.' },
      { title: 'Any finish', description: 'Matte, glossy or uncoated coating available.' },
      { title: 'Premium stocks', description: 'Choose heavier weights for extra presence.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'Perfectly balanced',
    sectionBody:
      'Square business cards measure 2.5 inches on every side. The symmetry suits logo-led and monogram designs, and the unfamiliar shape means your card is the one people pick back up.',
    faqs: [
      {
        question: 'What size are square business cards?',
        answer:
          'Square business cards measure 2.5 inches by 2.5 inches. They are available in Standard (14pt), Premium (16pt) and Premium Plus (18pt) thicknesses with matte, glossy or uncoated finishes.',
      },
      { question: 'Will square cards fit in a standard card holder?' },
      { question: 'Can I have rounded corners on a square card?' },
      { question: 'Do square cards cost more to print?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'circle',
    title: 'Circle Business Cards',
    briefDescription:
      'A fully round card that turns a simple handover into something memorable. See details',
    price: '$28.99',
    priceDetail: '$0.29 each / 100 units',
    rating: 4.6,
    reviewCount: 3480,
    promoHeadline: 'No corners, no competition. Round cards nobody forgets.',
    featureHighlights: [
      { title: 'Completely round', description: 'A die-cut circle that reads as playful and confident.' },
      { title: 'Ideal for logos', description: 'Circular badges and emblems sit perfectly in the format.' },
      { title: 'Any finish', description: 'Matte, glossy or uncoated coating available.' },
      { title: 'Premium stocks', description: 'Heavier weights give the shape extra presence.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'Round and remembered',
    sectionBody:
      'Circle business cards are precision die-cut into a full round. They suit badge-style logos and brands with a playful streak, and they are almost impossible to throw away without a second look.',
    faqs: [
      {
        question: 'What size are circle business cards?',
        answer:
          'Circle business cards are die-cut to a 2.5 inch diameter. They are available in Standard (14pt), Premium (16pt) and Premium Plus (18pt) thicknesses with matte, glossy or uncoated finishes.',
      },
      { question: 'How should I design artwork for a circular card?' },
      { question: 'Will circle cards fit in a card holder?' },
      { question: 'Is there a bleed area for round cards?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'oval',
    title: 'Oval Business Cards',
    briefDescription:
      'Softly elliptical cards that feel elegant and approachable at the same time. See details',
    price: '$27.99',
    priceDetail: '$0.28 each / 100 units',
    rating: 4.6,
    reviewCount: 2914,
    promoHeadline: 'An elegant curve on every edge.',
    featureHighlights: [
      { title: 'Elliptical die-cut', description: 'A soft, flowing outline with no hard corners.' },
      { title: 'Elegant and approachable', description: 'Suits beauty, wellness and hospitality brands.' },
      { title: 'Any finish', description: 'Matte, glossy or uncoated coating available.' },
      { title: 'Premium stocks', description: 'Heavier weights hold the shape crisply.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'Softly distinctive',
    sectionBody:
      'Oval business cards are die-cut into a smooth ellipse. The shape feels gentler than a rectangle and more familiar than a circle — a considered middle ground that photographs beautifully.',
    faqs: [
      {
        question: 'What size are oval business cards?',
        answer:
          'Oval business cards are die-cut from the standard 3.5 by 2.0 inch footprint, giving a smooth elliptical outline. They are available in Standard (14pt), Premium (16pt) and Premium Plus (18pt) thicknesses.',
      },
      { question: 'How should I design artwork for an oval card?' },
      { question: 'Will oval cards fit in a standard holder?' },
      { question: 'Can I choose a finish for oval cards?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'leaf',
    title: 'Leaf Business Cards',
    briefDescription:
      'Two opposite corners rounded into a leaf silhouette — understated and unusual. See details',
    price: '$26.99',
    priceDetail: '$0.27 each / 100 units',
    rating: 4.5,
    reviewCount: 2106,
    promoHeadline: 'A quiet twist on the classic rectangle.',
    featureHighlights: [
      { title: 'Distinctive leaf cut', description: 'Two opposing corners curve into a leaf outline.' },
      { title: 'Subtle differentiation', description: 'Unusual without being showy — ideal for professional services.' },
      { title: 'Any finish', description: 'Matte, glossy or uncoated coating available.' },
      { title: 'Premium stocks', description: 'Heavier weights emphasise the cut.' },
      { title: 'Full-colour both sides', description: 'Print front and back at no extra cost.' },
    ],
    sectionTitle: 'Gently unexpected',
    sectionBody:
      'Leaf business cards round two opposite corners while leaving the others square. The result is a shape that reads as organic and considered, and it works particularly well for wellness, garden and eco-minded brands.',
    faqs: [
      {
        question: 'What is a leaf shaped business card?',
        answer:
          'A leaf card is cut from the standard 3.5 by 2.0 inch format with two diagonally opposite corners rounded, creating a leaf-like silhouette. The remaining two corners stay square.',
      },
      { question: 'Can I choose which corners are rounded?' },
      { question: 'Do I need to adjust my artwork for the leaf cut?' },
      { question: 'What finishes are available?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // ---------------------------------------------------------------- Premium
  {
    slug: 'premium',
    title: 'Premium Business Cards',
    briefDescription:
      'Heavier 16pt stock with a noticeably more substantial feel. Available in a range of premium papers. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.8,
    reviewCount: 21766,
    promoHeadline: 'Weight people notice the moment they take your card.',
    featureHighlights: [
      { title: 'Substantial 16pt stock', description: 'Noticeably heavier and stiffer than standard cards.' },
      { title: 'Range of premium papers', description: 'Includes textured, soft touch, cotton, linen and kraft.' },
      { title: 'Superior colour reproduction', description: 'Heavier stock holds ink richly and evenly.' },
      { title: 'Shape & corner choices', description: 'Rectangular or rounded corners available.' },
      { title: 'Special finishes available', description: 'Add metallic foil or embossed gloss for extra impact.' },
    ],
    sectionTitle: 'Quality you can feel',
    sectionBody:
      'Premium business cards use a heavier 16pt stock that feels immediately more substantial. Available across our full range of premium papers, they are the straightforward way to make a stronger first impression.',
    faqs: [
      {
        question: 'How thick are premium business cards?',
        answer:
          'Premium business cards are printed on 16pt (350 gsm) stock, noticeably heavier than our Standard 14pt cards. Premium Plus at 18pt (400 gsm) is also available for maximum presence.',
      },
      { question: 'Which premium paper should I choose?' },
      { question: 'Can I add a special finish to premium cards?' },
      { question: 'Are premium cards available in all shapes?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'natural-textured',
    title: 'Natural Textured Business Cards',
    briefDescription:
      'Lightly textured, responsibly sourced stock with visible natural grain. See details',
    price: '$25.99',
    priceDetail: '$0.26 each / 100 units',
    rating: 4.7,
    reviewCount: 8402,
    promoHeadline: 'Paper with a grain you can see and feel.',
    featureHighlights: [
      { title: 'Visible natural grain', description: 'A subtle texture that catches the light across the surface.' },
      { title: 'Responsibly sourced', description: 'Part of our Better by Design collection.' },
      { title: 'Warm, organic colour', description: 'Slightly off-white tone that softens printed colour.' },
      { title: 'Premium 16pt weight', description: 'Substantial stock that suits the tactile finish.' },
      { title: 'Writable surface', description: 'Uncoated texture takes pen readily.' },
    ],
    sectionTitle: 'Texture with character',
    sectionBody:
      'Natural textured cards use a lightly grained, responsibly sourced stock. The texture is visible and tactile without being rough, and the slightly warm paper tone lends printed colour a softer, more organic quality.',
    faqs: [
      {
        question: 'What does natural textured card stock feel like?',
        answer:
          'Natural textured stock has a fine, visible grain across the surface — tactile to the touch but smooth enough for crisp printing. It is uncoated, so it takes pen well and has a warm, slightly off-white tone.',
      },
      { question: 'Is the stock recycled?' },
      { question: 'How does texture affect printed colour?' },
      { question: 'Can I add a special finish to textured cards?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'soft-touch',
    title: 'Soft Touch Business Cards',
    briefDescription:
      'A velvety laminate that feels remarkable in the hand and resists fingerprints. See details',
    price: '$29.99',
    priceDetail: '$0.30 each / 100 units',
    rating: 4.9,
    reviewCount: 14290,
    promoHeadline: 'The card people keep touching while you talk.',
    featureHighlights: [
      { title: 'Velvety laminate', description: 'A suede-like surface unlike any other finish we offer.' },
      { title: 'Fingerprint resistant', description: 'The matte laminate hides marks and handling.' },
      { title: 'Deep, rich colour', description: 'Colours sit dark and saturated under the soft coating.' },
      { title: 'Durable and tear resistant', description: 'The laminate adds real strength to the card.' },
      { title: 'Pairs with special finishes', description: 'Spot gloss and foil stand out dramatically against it.' },
    ],
    sectionTitle: 'Unmistakable in the hand',
    sectionBody:
      'Soft touch cards are finished with a velvety laminate that feels closer to suede than paper. It is the finish people comment on unprompted, and it makes metallic foil or spot gloss details look extraordinary by contrast.',
    faqs: [
      {
        question: 'What is a soft touch finish?',
        answer:
          'Soft touch is a matte laminate applied over the printed card, giving a velvety, suede-like surface. It deepens colours, resists fingerprints and adds durability compared with an uncoated or standard matte card.',
      },
      { question: 'Can I write on soft touch business cards?' },
      { question: 'Does soft touch work with foil or spot gloss?' },
      { question: 'Is soft touch more durable than matte?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'cotton',
    title: 'Cotton Business Cards',
    briefDescription:
      'Luxuriously soft 100% cotton stock with a distinctive, pillowy feel. See details',
    price: '$34.99',
    priceDetail: '$0.35 each / 100 units',
    rating: 4.8,
    reviewCount: 5180,
    promoHeadline: 'Tree-free cotton paper with a feel all of its own.',
    featureHighlights: [
      { title: '100% cotton stock', description: 'Made from cotton fibre rather than wood pulp.' },
      { title: 'Soft, pillowy texture', description: 'A plush surface quite unlike conventional card.' },
      { title: 'Tree-free and sustainable', description: 'Part of our Better by Design collection.' },
      { title: 'Bright, clean white', description: 'Cotton holds a crisp white that flatters minimal designs.' },
      { title: 'Excellent for letterpress', description: 'The soft fibre takes impression beautifully.' },
    ],
    sectionTitle: 'Soft to the last fibre',
    sectionBody:
      'Cotton business cards are made entirely from cotton fibre, giving a soft, pillowy surface and a bright natural white. They are tree-free, distinctive to handle, and particularly well suited to minimal, typographic designs.',
    faqs: [
      {
        question: 'What are cotton business cards made from?',
        answer:
          'Cotton business cards are made from 100% cotton fibre rather than wood pulp, which gives them a notably soft, pillowy texture and a bright natural white tone. They are a tree-free, sustainable choice.',
      },
      { question: 'How does cotton stock affect printed colour?' },
      { question: 'Can I write on cotton business cards?' },
      { question: 'Is cotton stock more durable than standard card?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'linen',
    title: 'Linen Business Cards',
    briefDescription:
      'A fine woven texture pressed into the stock, giving classic understated elegance. See details',
    price: '$26.99',
    priceDetail: '$0.27 each / 100 units',
    rating: 4.7,
    reviewCount: 7655,
    promoHeadline: 'A woven texture that signals quality without saying a word.',
    featureHighlights: [
      { title: 'Fine woven texture', description: 'A crosshatch pattern pressed into the card surface.' },
      { title: 'Classic and timeless', description: 'Long associated with formal, established brands.' },
      { title: 'Uncoated and writable', description: 'Takes pen readily for notes and appointments.' },
      { title: 'Premium 16pt weight', description: 'Substantial stock that suits the formal texture.' },
      { title: 'Elegant with foil', description: 'Metallic foil sits beautifully against the weave.' },
    ],
    sectionTitle: 'Texture with tradition',
    sectionBody:
      'Linen business cards carry a fine woven pattern pressed into the surface. It is a texture long associated with law firms, consultancies and established institutions — quietly formal, and unmistakably considered.',
    faqs: [
      {
        question: 'What does linen card stock look like?',
        answer:
          'Linen stock has a fine crosshatch texture embossed into the surface, resembling woven fabric. It is uncoated, takes pen well, and gives printed colour a subtly softened, traditional appearance.',
      },
      { question: 'How does the texture affect fine detail?' },
      { question: 'Can I add foil to linen business cards?' },
      { question: 'Is linen stock available in all shapes?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'kraft',
    title: 'Kraft Business Cards',
    briefDescription:
      'Unbleached brown kraft stock with a rustic, honest character. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.6,
    reviewCount: 6890,
    promoHeadline: 'Honest brown board for brands that keep it real.',
    featureHighlights: [
      { title: 'Unbleached kraft stock', description: 'Natural brown board with visible fibre.' },
      { title: 'Rustic, artisan character', description: 'Ideal for makers, cafés and craft brands.' },
      { title: 'Recycled and recyclable', description: 'Part of our Better by Design collection.' },
      { title: 'Uncoated and writable', description: 'Takes pen readily across the surface.' },
      { title: 'Striking with white ink', description: 'Light inks stand out dramatically on brown board.' },
    ],
    sectionTitle: 'Naturally unrefined',
    sectionBody:
      'Kraft business cards use unbleached brown board with visible fibre and a rustic, honest character. They are a natural fit for makers, roasters, growers and any brand whose story is about craft rather than polish.',
    faqs: [
      {
        question: 'How does printing work on brown kraft stock?',
        answer:
          'Kraft stock is unbleached brown board, so printed colours take on a warm, muted tone. Designs using dark inks or white ink print most effectively; pale colours may be less visible against the brown background.',
      },
      { question: 'Can I print white ink on kraft cards?' },
      { question: 'Is kraft stock recycled?' },
      { question: 'Can I write on kraft business cards?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // ----------------------------------------------------------------- Deluxe
  {
    slug: 'deluxe',
    title: 'Deluxe Business Cards',
    briefDescription:
      'Our heaviest, most distinctive cards — thick stocks, painted edges and speciality materials. See details',
    price: '$39.99',
    priceDetail: '$0.40 each / 100 units',
    rating: 4.9,
    reviewCount: 9340,
    promoHeadline: 'When the card itself needs to be the statement.',
    featureHighlights: [
      { title: 'Heaviest stocks available', description: 'Includes 18pt Premium Plus and ultra thick board.' },
      { title: 'Speciality materials', description: 'Painted edge and plastic options available.' },
      { title: 'Exceptional durability', description: 'Built to survive wallets, pockets and years of use.' },
      { title: 'Premium finishes', description: 'Pairs with foil, embossed gloss and soft touch.' },
      { title: 'Unmistakable presence', description: 'Weight and thickness that communicate instantly.' },
    ],
    sectionTitle: 'The top of our range',
    sectionBody:
      'Deluxe business cards bring together our heaviest stocks and most distinctive materials — ultra thick board, painted edges and durable plastic. They cost more because they feel like they do.',
    faqs: [
      {
        question: 'What makes a business card deluxe?',
        answer:
          'Deluxe cards use our heaviest and most specialised materials, including 18pt Premium Plus stock, ultra thick multi-layer board, painted edges and plastic. They are designed for maximum physical impact.',
      },
      { question: 'Which deluxe option should I choose?' },
      { question: 'Can I combine deluxe stock with special finishes?' },
      { question: 'Do deluxe cards take longer to produce?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'premium-plus',
    title: 'Premium Plus Business Cards',
    briefDescription:
      'Our substantial 18pt stock — noticeably thicker, stiffer and more durable. See details',
    price: '$29.99',
    priceDetail: '$0.30 each / 100 units',
    rating: 4.8,
    reviewCount: 11208,
    promoHeadline: 'Eighteen points of pure presence.',
    featureHighlights: [
      { title: 'Heavyweight 18pt stock', description: 'Our thickest single-layer board at 400 gsm.' },
      { title: 'Rigid and durable', description: 'Resists bending far better than standard card.' },
      { title: 'Rich colour depth', description: 'Heavy stock absorbs ink for deep, even coverage.' },
      { title: 'All finishes available', description: 'Matte, glossy, soft touch and speciality coatings.' },
      { title: 'Shape & corner choices', description: 'Rectangular or rounded corners available.' },
    ],
    sectionTitle: 'Weight that speaks first',
    sectionBody:
      'Premium Plus cards are printed on 18pt stock — noticeably thicker and stiffer than standard 14pt. The extra substance is felt immediately on handover, and the card stays flat and crisp far longer.',
    faqs: [
      {
        question: 'How thick is Premium Plus stock?',
        answer:
          'Premium Plus business cards are printed on 18pt (400 gsm) stock. For comparison, our Standard cards are 14pt (300 gsm) and Premium are 16pt (350 gsm).',
      },
      { question: 'Is Premium Plus the thickest option available?' },
      { question: 'Which finishes work with Premium Plus?' },
      { question: 'Will Premium Plus fit in a standard card holder?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'painted-edge',
    title: 'Painted Edge Business Cards',
    briefDescription:
      'Thick stock with a band of colour painted along every edge. See details',
    price: '$49.99',
    priceDetail: '$0.50 each / 100 units',
    rating: 4.9,
    reviewCount: 4270,
    promoHeadline: 'A stripe of colour where nobody expects one.',
    featureHighlights: [
      { title: 'Hand-painted edges', description: 'A band of colour applied along the full card edge.' },
      { title: 'Choice of edge colours', description: 'Match your brand or contrast deliberately.' },
      { title: 'Thick stock required', description: 'Printed on heavyweight board so the edge is visible.' },
      { title: 'Striking in a stack', description: 'The colour band is unmistakable side-on.' },
      { title: 'Premium finishes', description: 'Pairs beautifully with soft touch and foil.' },
    ],
    sectionTitle: 'Colour on every side',
    sectionBody:
      'Painted edge cards add a band of colour along the full thickness of the card. Because the edge is only visible on a thick stock, these cards are substantial by necessity — and quietly spectacular in a stack.',
    faqs: [
      {
        question: 'How are painted edge business cards made?',
        answer:
          'Painted edge cards are printed on heavyweight stock, then a band of colour is applied along the cut edges of the card. The thick board is essential so that the painted edge is clearly visible.',
      },
      { question: 'What edge colours are available?' },
      { question: 'Can the edge colour differ from the card design?' },
      { question: 'Do painted edge cards take longer to produce?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'ultra-thick',
    title: 'Ultra Thick Business Cards',
    briefDescription:
      'Multi-layer board at 32pt — about twice the thickness of a standard card. See details',
    price: '$54.99',
    priceDetail: '$0.55 each / 100 units',
    rating: 4.9,
    reviewCount: 5602,
    promoHeadline: 'Twice the thickness. Ten times the impression.',
    featureHighlights: [
      { title: 'Substantial 32pt board', description: 'Roughly twice the thickness of a standard card.' },
      { title: 'Multi-layer construction', description: 'Layers bonded for rigidity and a clean edge.' },
      { title: 'Virtually unbendable', description: 'Holds its shape through years of handling.' },
      { title: 'Pairs with painted edges', description: 'The thick edge is an ideal canvas for colour.' },
      { title: 'All premium finishes', description: 'Soft touch, foil and embossed gloss available.' },
    ],
    sectionTitle: 'Impossible to ignore',
    sectionBody:
      'Ultra thick cards are built from bonded layers to reach 32pt — around double a standard card. They are rigid, weighty and quite unlike anything else in a wallet, which is precisely the point.',
    faqs: [
      {
        question: 'How thick are ultra thick business cards?',
        answer:
          'Ultra thick business cards are 32pt, built from bonded layers of board. That is roughly twice the thickness of our Standard 14pt card and noticeably heavier than Premium Plus at 18pt.',
      },
      { question: 'Will ultra thick cards fit in a card holder?' },
      { question: 'Can I add painted edges to ultra thick cards?' },
      { question: 'Do ultra thick cards take longer to produce?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'plastic',
    title: 'Plastic Business Cards',
    briefDescription:
      'Durable, waterproof plastic cards with optional frosted or clear areas. See details',
    price: '$59.99',
    priceDetail: '$0.60 each / 100 units',
    rating: 4.8,
    reviewCount: 3915,
    promoHeadline: 'Waterproof, tear-proof and built to last for years.',
    featureHighlights: [
      { title: 'Fully waterproof', description: 'Unaffected by spills, rain or humidity.' },
      { title: 'Tear and crease resistant', description: 'Survives conditions that destroy paper cards.' },
      { title: 'Frosted or clear options', description: 'Translucent areas create striking layered designs.' },
      { title: 'Vivid colour on white plastic', description: 'Colours print bright and stay bright.' },
      { title: 'Ideal as membership cards', description: 'Durable enough for long-term wallet carry.' },
    ],
    sectionTitle: 'Built to survive',
    sectionBody:
      'Plastic business cards are waterproof, tear-resistant and effectively permanent. Available in solid white, frosted or clear, they double as membership and loyalty cards that stay in a wallet for years.',
    faqs: [
      {
        question: 'What are plastic business cards made from?',
        answer:
          'Plastic business cards are printed on durable PVC-style stock, available in solid white, frosted translucent or fully clear. They are waterproof, tear-resistant and considerably more durable than any paper card.',
      },
      { question: 'Can I have clear or transparent areas?' },
      { question: 'Can I write on plastic business cards?' },
      { question: 'Do plastic cards take longer to produce?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // -------------------------------------------------------- Special finishes
  {
    slug: 'foil-accent',
    title: 'Foil Accent Business Cards',
    briefDescription:
      'Metallic foil details pressed into your design in gold, silver, copper or rose gold. See details',
    price: '$44.99',
    priceDetail: '$0.45 each / 100 units',
    rating: 4.9,
    reviewCount: 8117,
    promoHeadline: 'Catch the light, and the eye, with real metallic foil.',
    featureHighlights: [
      { title: 'Genuine metallic foil', description: 'Real foil pressed into the card, not printed ink.' },
      { title: 'Four foil colours', description: 'Gold, silver, copper and rose gold available.' },
      { title: 'Stunning on dark stock', description: 'Foil against matte black is especially dramatic.' },
      { title: 'Apply to any element', description: 'Logos, names, borders or fine decorative detail.' },
      { title: 'Premium stocks', description: 'Heavier boards hold the foil impression crisply.' },
    ],
    sectionTitle: 'Real metal, real impact',
    sectionBody:
      'Foil accent cards press genuine metallic foil into selected parts of your design. Unlike printed metallic ink, real foil reflects light as you turn the card — a detail people notice immediately and remember.',
    faqs: [
      {
        question: 'What foil colours are available?',
        answer:
          'Foil accents are available in gold, silver, copper and rose gold. The foil is physically pressed into the card, so it reflects light in a way that printed metallic ink cannot reproduce.',
      },
      { question: 'Can I apply foil to both sides of the card?' },
      { question: 'Which stocks work best with foil?' },
      { question: 'How should I set up artwork for foil areas?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'embossed-gloss',
    title: 'Embossed Gloss Business Cards',
    briefDescription:
      'Raised, high-shine varnish applied to selected parts of your design. See details',
    price: '$39.99',
    priceDetail: '$0.40 each / 100 units',
    rating: 4.8,
    reviewCount: 6044,
    promoHeadline: 'Raised gloss you can feel under your fingertips.',
    featureHighlights: [
      { title: 'Raised spot varnish', description: 'A tactile, raised gloss layer over chosen elements.' },
      { title: 'Dramatic on matte stock', description: 'High shine against a matte surface is striking.' },
      { title: 'Highlight any element', description: 'Logos, headlines, patterns or background texture.' },
      { title: 'Adds depth and dimension', description: 'The card gains physical relief, not just contrast.' },
      { title: 'Premium stocks', description: 'Heavier boards support the raised varnish cleanly.' },
    ],
    sectionTitle: 'Texture you can see and feel',
    sectionBody:
      'Embossed gloss applies a raised, high-shine varnish to selected areas of your design. Against a matte or soft touch background the contrast is dramatic — and unlike printed effects, you can feel it.',
    faqs: [
      {
        question: 'What is embossed gloss?',
        answer:
          'Embossed gloss is a raised, high-shine varnish applied to selected areas of your design. It creates both a visual contrast against matte areas and a physical, tactile relief you can feel on the card surface.',
      },
      { question: 'How is it different from a full gloss finish?' },
      { question: 'Can I combine embossed gloss with foil?' },
      { question: 'How should I set up artwork for gloss areas?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'raised-foil',
    title: 'Raised Foil Business Cards',
    briefDescription:
      'Metallic foil with added dimensional height — shine and texture together. See details',
    price: '$49.99',
    priceDetail: '$0.50 each / 100 units',
    rating: 4.9,
    reviewCount: 4831,
    promoHeadline: 'Foil that rises off the card.',
    featureHighlights: [
      { title: 'Dimensional metallic foil', description: 'Foil applied over a raised layer for real height.' },
      { title: 'Shine and texture together', description: 'Combines reflectivity with tactile relief.' },
      { title: 'Multiple foil colours', description: 'Gold, silver, copper and rose gold available.' },
      { title: 'Exceptional on dark stock', description: 'Raised gold on matte black is our most striking option.' },
      { title: 'Premium stocks', description: 'Heavier boards carry the raised foil best.' },
    ],
    sectionTitle: 'The most tactile finish we offer',
    sectionBody:
      'Raised foil applies metallic foil over a dimensional layer, so the detail both shines and stands proud of the card. It is the most tactile finish in our range, and on dark stock it is genuinely arresting.',
    faqs: [
      {
        question: 'How is raised foil different from flat foil accent?',
        answer:
          'Flat foil accent presses foil level with the card surface. Raised foil applies the foil over a dimensional layer, so the detail physically stands proud of the card — you can feel the raised element as well as see the shine.',
      },
      { question: 'What foil colours are available?' },
      { question: 'Which stocks work best with raised foil?' },
      { question: 'Can I combine raised foil with other finishes?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // ----------------------------------------------------- Digital & fast
  {
    slug: 'qr-code',
    title: 'QR Code Business Cards',
    briefDescription:
      'Add a scannable QR code linking to your website, portfolio or contact details. See details',
    price: '$10.00',
    priceDetail: '$0.10 each / 100 units',
    rating: 4.7,
    reviewCount: 10442,
    promoHeadline: 'One scan and they have everything.',
    featureHighlights: [
      { title: 'Free QR code generation', description: 'Create and place your code inside the design studio.' },
      { title: 'Link anywhere', description: 'Website, portfolio, booking page, socials or contact card.' },
      { title: 'Print and digital together', description: 'A physical card that opens your digital presence.' },
      { title: 'Tested for scannability', description: 'We check contrast and sizing before printing.' },
      { title: 'All stocks and finishes', description: 'Add a QR code to any of our card ranges.' },
    ],
    sectionTitle: 'Bridge print and digital',
    sectionBody:
      'QR code business cards carry a scannable code straight to wherever you want people to go — your site, your portfolio, your booking page. Generate the code free in our design studio and place it anywhere on the card.',
    faqs: [
      {
        question: 'Can I create a QR code within the design studio?',
        answer:
          'Yes. Our design studio includes a free QR code generator. Enter the destination web address and the code is created and placed on your card automatically, sized and contrasted for reliable scanning.',
      },
      { question: 'Can I change where the QR code points after printing?' },
      { question: 'How large does the QR code need to be?' },
      { question: 'Will the code scan on dark or textured stock?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'fast-delivery',
    title: 'Fast-Delivery Business Cards',
    briefDescription:
      'Quality business cards printed and dispatched on an accelerated schedule. See details',
    price: '$19.99',
    priceDetail: '$0.20 each / 100 units',
    rating: 4.7,
    reviewCount: 13880,
    promoHeadline: 'Cards in hand sooner than you think.',
    featureHighlights: [
      { title: 'Accelerated production', description: 'Priority printing on a compressed schedule.' },
      { title: 'Next-day and 2-day options', description: 'Choose the speed that matches your deadline.' },
      { title: 'No quality compromise', description: 'The same stocks and printing as standard orders.' },
      { title: 'Clear cut-off times', description: 'Order deadlines shown before you pay.' },
      { title: 'Tracked dispatch', description: 'Follow your order right to the door.' },
    ],
    sectionTitle: 'When the deadline moved',
    sectionBody:
      'Fast-delivery business cards run on an accelerated production schedule without changing the stock or the print quality. Choose next-day or two-day options, with order cut-off times shown clearly before you commit.',
    faqs: [
      {
        question: 'How quickly can I receive fast-delivery business cards?',
        answer:
          'Next-day cards are printed and dispatched for delivery the following business day when ordered before the daily cut-off. Two-day options allow slightly more production time at a lower cost. Exact cut-off times are shown at checkout.',
      },
      { question: 'Are all card types available for fast delivery?' },
      { question: 'What is the ordering cut-off time?' },
      { question: 'Does fast delivery affect print quality?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'next-day',
    title: 'Next-Day Business Cards',
    briefDescription:
      'Order before the daily cut-off and your cards are dispatched for next business day delivery. See details',
    price: '$24.99',
    priceDetail: '$0.25 each / 100 units',
    rating: 4.6,
    reviewCount: 7290,
    promoHeadline: 'Tomorrow is not too late.',
    featureHighlights: [
      { title: 'Next business day dispatch', description: 'Order before cut-off and we print immediately.' },
      { title: 'Full standard quality', description: 'Identical stock and printing to our regular cards.' },
      { title: 'Tracked delivery', description: 'Follow the order from press to doorstep.' },
      { title: 'Popular stocks available', description: 'Matte, glossy and uncoated all qualify.' },
      { title: 'Clear deadline display', description: 'The exact cut-off is shown before you order.' },
    ],
    sectionTitle: 'For the meeting tomorrow',
    sectionBody:
      'Next-day business cards go straight into priority production the moment you order, provided you make the daily cut-off. Same stocks, same printing, dispatched for delivery the following business day.',
    faqs: [
      {
        question: 'What is the cut-off time for next-day business cards?',
        answer:
          'The daily cut-off time is displayed on the product page and at checkout, as it varies by product and destination. Orders placed before the cut-off are printed the same day and dispatched for next business day delivery.',
      },
      { question: 'Which stocks are available for next-day orders?' },
      { question: 'Does next-day delivery include weekends?' },
      { question: 'What happens if I miss the cut-off?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: '2-day',
    title: '2-Day Business Cards',
    briefDescription:
      'A slightly longer production window than next-day, at a lower price. See details',
    price: '$19.99',
    priceDetail: '$0.20 each / 100 units',
    rating: 4.6,
    reviewCount: 6115,
    promoHeadline: 'Fast, but a little easier on the budget.',
    featureHighlights: [
      { title: 'Two business day dispatch', description: 'A modest production window at a lower cost.' },
      { title: 'Cheaper than next-day', description: 'The sensible choice when you have a day to spare.' },
      { title: 'Full standard quality', description: 'Identical stock and printing to regular orders.' },
      { title: 'Tracked delivery', description: 'Follow the order from press to doorstep.' },
      { title: 'Wide stock selection', description: 'Most popular finishes qualify.' },
    ],
    sectionTitle: 'The sensible rush',
    sectionBody:
      'Two-day business cards give production a little more room than our next-day service, which brings the price down. If your deadline allows one extra day, this is usually the better value choice.',
    faqs: [
      {
        question: 'How does 2-day delivery differ from next-day?',
        answer:
          'Two-day orders are allowed an additional business day in production, which reduces the cost compared with next-day service. Both use identical stock and printing quality; only the production schedule differs.',
      },
      { question: 'Which stocks are available for 2-day orders?' },
      { question: 'What is the cut-off time?' },
      { question: 'Does the 2-day window include weekends?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // -------------------------------------------------------- Holders & more
  {
    slug: 'holders',
    title: 'Business Card Holders',
    briefDescription:
      'Desk and pocket holders that keep your cards crisp and to hand. See details',
    price: '$12.99',
    priceDetail: 'Each',
    rating: 4.5,
    reviewCount: 2840,
    promoHeadline: 'Keep every card as crisp as the day it was printed.',
    featureHighlights: [
      { title: 'Desk and pocket styles', description: 'Holders for the office and for carrying.' },
      { title: 'Protects card edges', description: 'Prevents the bending and dog-earing of loose cards.' },
      { title: 'Range of materials', description: 'Metal, acrylic and leather-effect options.' },
      { title: 'Customisable options', description: 'Selected holders can carry your logo.' },
      { title: 'Presentable on a counter', description: 'Desk holders display cards neatly for walk-ins.' },
    ],
    sectionTitle: 'Presentation matters',
    sectionBody:
      'A card pulled bent from a pocket undoes the impression the card was meant to make. Our desk and pocket holders keep cards flat, clean and immediately to hand, in materials from brushed metal to acrylic.',
    faqs: [
      {
        question: 'What sizes of business card do the holders fit?',
        answer:
          'Our holders are designed for standard 3.5 by 2.0 inch business cards. Capacity varies by model — pocket holders typically carry 15 to 25 cards, while desk holders hold considerably more.',
      },
      { question: 'Can business card holders be customised?' },
      { question: 'What materials are available?' },
      { question: 'Will holders fit thicker premium cards?' },
      { question: 'How do I order holders alongside cards?' },
    ],
  },
  {
    slug: 'magnetic',
    title: 'Magnetic Business Cards',
    briefDescription:
      'Business cards with a magnetic backing that stick where people will see them. See details',
    price: '$17.99',
    priceDetail: '$0.18 each / 100 units',
    rating: 4.7,
    reviewCount: 5560,
    promoHeadline: 'The card that lives on the fridge, not in the bin.',
    featureHighlights: [
      { title: 'Full magnetic backing', description: 'Sticks firmly to any ferrous surface.' },
      { title: 'Stays visible for months', description: 'Fridges and filing cabinets keep you in sight.' },
      { title: 'Ideal for local services', description: 'Perfect for trades, takeaways and repair businesses.' },
      { title: 'Full-colour printing', description: 'Vivid printing across the whole face.' },
      { title: 'Durable and wipeable', description: 'Resists kitchen wear and handling.' },
    ],
    sectionTitle: 'Stay on the fridge, stay in mind',
    sectionBody:
      'Magnetic business cards carry a full magnetic backing, so they end up on a fridge or filing cabinet rather than in a drawer. For plumbers, electricians, takeaways and any service people call in a hurry, that visibility is the whole point.',
    faqs: [
      {
        question: 'How strong is the magnetic backing?',
        answer:
          'The magnetic backing covers the full reverse of the card and holds securely on fridges, filing cabinets and other ferrous surfaces. It is strong enough to stay put but easy to reposition.',
      },
      { question: 'Can I print on the magnetic side?' },
      { question: 'What size are magnetic business cards?' },
      { question: 'Are magnetic cards more expensive to post?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'stickers',
    title: 'Business Card Stickers',
    briefDescription:
      'Card-sized adhesive stickers for packaging, folders and promotional use. See details',
    price: '$13.99',
    priceDetail: '$0.14 each / 100 units',
    rating: 4.6,
    reviewCount: 3204,
    promoHeadline: 'Your card, wherever you want to stick it.',
    featureHighlights: [
      { title: 'Strong adhesive backing', description: 'Sticks securely to packaging, folders and glass.' },
      { title: 'Business card dimensions', description: 'Familiar 3.5 by 2.0 inch format.' },
      { title: 'Ideal for packaging', description: 'Seal boxes and mailers with your branding.' },
      { title: 'Matte or glossy finish', description: 'Choose the surface that suits your design.' },
      { title: 'Weather-resistant options', description: 'Durable stock available for outdoor use.' },
    ],
    sectionTitle: 'Brand anything',
    sectionBody:
      'Business card stickers take your card design and add an adhesive backing. Seal a parcel, brand a folder, label a product or hand one over as a card — the same artwork, considerably more places to put it.',
    faqs: [
      {
        question: 'What surfaces do business card stickers adhere to?',
        answer:
          'Our card stickers adhere well to cardboard, paper, glass, plastic and most smooth surfaces. Weather-resistant stock is available if the stickers will be used outdoors or on refrigerated packaging.',
      },
      { question: 'Can I remove and reposition the stickers?' },
      { question: 'Are waterproof options available?' },
      { question: 'What finishes are available?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'loyalty-cards',
    title: 'Loyalty Cards',
    briefDescription:
      'Punch and stamp cards that bring customers back through the door. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.6,
    reviewCount: 4715,
    promoHeadline: 'Give them a reason to come back.',
    featureHighlights: [
      { title: 'Stamp and punch layouts', description: 'Ready-made grids for tracking visits.' },
      { title: 'Writable stock available', description: 'Uncoated finishes take pen and stamp ink cleanly.' },
      { title: 'Durable for repeat carry', description: 'Sturdy stock that survives months in a wallet.' },
      { title: 'Full-colour both sides', description: 'Branding on the front, reward grid on the back.' },
      { title: 'Ideal for hospitality', description: 'Cafés, salons and takeaways use these constantly.' },
    ],
    sectionTitle: 'Repeat business, by design',
    sectionBody:
      'Loyalty cards turn a single visit into a habit. Choose a stamp or punch layout, print your offer on the reverse, and pick an uncoated stock so the ink takes cleanly every time it is marked.',
    faqs: [
      {
        question: 'Which stock is best for stamped loyalty cards?',
        answer:
          'Uncoated stock is the best choice for loyalty cards that will be stamped or written on, as it absorbs ink immediately without smudging. Coated matte and glossy finishes can resist stamp ink and take longer to dry.',
      },
      { question: 'Can I add a punch grid to the design?' },
      { question: 'How durable are loyalty cards over months of use?' },
      { question: 'Can I print different offers in one order?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },
  {
    slug: 'appointment-cards',
    title: 'Appointment Cards',
    briefDescription:
      'Cards with space to write the date and time of the next visit. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.6,
    reviewCount: 5127,
    promoHeadline: 'Fewer missed appointments, in one small card.',
    featureHighlights: [
      { title: 'Writable uncoated stock', description: 'Takes pen instantly without smudging.' },
      { title: 'Date and time fields', description: 'Ready-made layouts with space to write.' },
      { title: 'Your details on the front', description: 'Contact information always to hand.' },
      { title: 'Ideal for clinics and salons', description: 'Standard practice for scheduled services.' },
      { title: 'Reduces no-shows', description: 'A physical reminder that ends up in a wallet.' },
    ],
    sectionTitle: 'A reminder they keep',
    sectionBody:
      'Appointment cards give clients something physical to take away with the date written on it. Printed on uncoated stock so pen takes instantly, with your contact details on the front for when plans change.',
    faqs: [
      {
        question: 'Which stock is best for appointment cards?',
        answer:
          'Uncoated stock is strongly recommended for appointment cards, as it absorbs pen ink instantly without smudging. Coated matte and glossy finishes can cause ink to sit on the surface and smear.',
      },
      { question: 'Can I include a cancellation policy on the card?' },
      { question: 'Are pre-designed appointment layouts available?' },
      { question: 'Can I add my booking website or QR code?' },
      { question: 'How should I prepare my artwork files?' },
    ],
  },

  // ------------------------------------------------------------------ Other
  {
    slug: 'free-sample-kit',
    title: 'Free Business Card Sample Kit',
    briefDescription:
      'A free pack of printed samples so you can feel every stock and finish before ordering. See details',
    price: 'Free',
    priceDetail: 'One kit per customer',
    rating: 4.8,
    reviewCount: 9633,
    promoHeadline: 'Feel the difference before you commit.',
    featureHighlights: [
      { title: 'Completely free', description: 'No charge for the kit itself.' },
      { title: 'Every stock included', description: 'Matte, glossy, uncoated, linen, kraft, cotton and more.' },
      { title: 'Special finishes shown', description: 'Foil, embossed gloss and soft touch samples included.' },
      { title: 'Thickness comparison', description: 'Feel 14pt, 16pt, 18pt and ultra thick side by side.' },
      { title: 'Helps avoid reprints', description: 'Choosing correctly first time saves money.' },
    ],
    sectionTitle: 'The best way to choose',
    sectionBody:
      'Paper is difficult to judge on a screen. Our free sample kit sends you printed examples of every stock, thickness and special finish we offer, so you can handle them all before deciding what your cards should be.',
    faqs: [
      {
        question: 'What is included in the free sample kit?',
        answer:
          'The kit includes printed samples of our full range of card stocks and thicknesses, along with examples of special finishes such as metallic foil, embossed gloss and soft touch, so you can compare them directly.',
      },
      { question: 'Is the sample kit really free?' },
      { question: 'How long does the sample kit take to arrive?' },
      { question: 'Can I order more than one kit?' },
      { question: 'Can I request specific samples?' },
    ],
  },
  {
    slug: 'reorder',
    title: 'Reorder Business Cards',
    briefDescription:
      'Order your previous design again in a few clicks, with no need to redesign. See details',
    price: '$14.99',
    priceDetail: '$0.15 each / 100 units',
    rating: 4.8,
    reviewCount: 16720,
    promoHeadline: 'Running low? Order the same again.',
    featureHighlights: [
      { title: 'Saved designs ready to go', description: 'Previous artwork is kept in your account.' },
      { title: 'Reorder in a few clicks', description: 'No re-uploading and no redesigning.' },
      { title: 'Edit before reprinting', description: 'Update a phone number or title if anything changed.' },
      { title: 'Change quantity or stock', description: 'Reorder the same design on a different card.' },
      { title: 'Consistent results', description: 'The same artwork prints the same way every time.' },
    ],
    sectionTitle: 'Same card, one click',
    sectionBody:
      'Reordering keeps your previous designs in your account so running out of cards means a few clicks rather than a redesign. Adjust the quantity, swap the stock or edit a detail — or simply order exactly what you had before.',
    faqs: [
      {
        question: 'How do I reorder business cards I ordered previously?',
        answer:
          'Sign in to your account and open Order History. Find the previous order and choose to reorder it. You can print the identical design again, or open it in the design studio first to update any details before printing.',
      },
      { question: 'Can I change the design before reordering?' },
      { question: 'How long are my previous designs kept?' },
      { question: 'Can I reorder if I checked out as a guest?' },
      { question: 'Can I change the quantity when reordering?' },
    ],
  },
  {
    slug: 'browse-designs',
    title: 'Browse Business Card Designs',
    briefDescription:
      'Explore thousands of ready-made templates by industry, style and colour. See details',
    price: '$14.99',
    priceDetail: 'From, per 100 units',
    rating: 4.7,
    reviewCount: 22410,
    promoHeadline: 'Start from a design that already works.',
    featureHighlights: [
      { title: 'Thousands of templates', description: 'Professionally designed layouts for every trade.' },
      { title: 'Browse by industry', description: 'Templates grouped by the work you actually do.' },
      { title: 'Fully customisable', description: 'Change every colour, word and image.' },
      { title: 'Preview with your details', description: 'See your name and logo in place while browsing.' },
      { title: 'Any stock or finish', description: 'Apply a template to any card in our range.' },
    ],
    sectionTitle: 'A head start on design',
    sectionBody:
      'Starting from blank is difficult. Our template library groups thousands of professionally designed layouts by industry and style, all fully editable — change the colours, swap the type, drop in your logo and print.',
    faqs: [
      {
        question: 'Can I customise a template completely?',
        answer:
          'Yes. Every template is fully editable in the design studio. You can change colours, fonts, text, layout and imagery, and add your own logo or photographs. Templates are a starting point, not a fixed design.',
      },
      { question: 'Are templates free to use?' },
      { question: 'Can I apply a template to any card stock?' },
      { question: 'Can I save a template and come back to it?' },
      { question: 'Can I upload my own design instead?' },
    ],
  },
];

/** slug -> full ProductDetailData, built from the shared template. */
export const BUSINESS_CARD_VARIANTS: Record<string, ProductDetailData> = buildCatalog(SPECS, CONFIG, {
  // Matte keeps its own Figma-verified data rather than a generated variant.
  matte: MATTE_BUSINESS_CARDS,
});

export const BUSINESS_CARD_SLUGS = Object.keys(BUSINESS_CARD_VARIANTS);
