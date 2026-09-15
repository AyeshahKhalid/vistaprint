# PRINTGRAPHI (Vistaprint clone) — Project Notes

This is a Vistaprint-style e-commerce site (Angular frontend + NestJS backend) with a clear split of source-of-truth:

- **Functionality, UX flow, navigation, cart/checkout behavior, product configurator behavior**: follow the real vistaprint.com site as the blueprint.
- **Visual theme, design, content, copy, images**: follow the Figma file instead, NOT vistaprint.com's current look. Figma file: https://www.figma.com/design/VS9tmoBlIrg612RHABLAkt/Untitled (file key `VS9tmoBlIrg612RHABLAkt`).

**Why:** Client confirmed the Figma design should replace Vistaprint's visual design/content entirely, while the site should still function/flow like vistaprint.com since Figma has no interactive flow documentation (no prototype links, no annotations) — just static page mockups per category.

**Fidelity level**: "Exact Figma design" means close visual match — real content, images, colors, and layout structure from Figma, NOT pixel-exact spacing/sizing. Flow/behavior (navigation, mega-menu interaction, routing between pages) should mirror vistaprint.com's actual UX, not Figma's static mockups.

**Brand name in design: "PRINTGRAPHI"** (confirmed from homepage text content — header nav, footer copyright, ambassador spotlight copy, etc.). Occasional leftover "VistaPrint" text in the design is a placeholder inconsistency — PRINTGRAPHI is correct everywhere.

## Figma file structure

- Page 1 canvas: business card sub pages (38 page variants), Postcards & Print Advertising, main sections (homepage), Custom Signs/Banners/Posters, Labels & Stickers, Packaging, Clothing
- 🧩 Components canvas: **UNRELATED leftover content** from a different template ("Moxie Glow Collective" salon/spa brand) — do NOT use these components. The real header/footer/nav used throughout every PRINTGRAPHI page are nested directly inside each page frame (`top-utility-bar`, `main-header`, `category-navigation-bar`, `promo-announcement-bar`, `footer`).
- Promotional Products canvas: ~50 product pages
- Invitations & Stationery canvas: ~40 product pages
- Wedding canvas: ~40 product pages

Each category follows the same IA pattern: Landing Page → Sub-category Product Page → Material/Style Variant Pages → Shape/Specialty Variant Pages → Service Pages (next-day, reorder, sample kit).

## Build status

**All 11 top-level category pages complete**: Home (`/`), Business Cards (`/business-cards`), Postcards & Print Advertising (`/postcards-print-advertising`), Signs Banners & Posters (`/signs-banners-posters`), Labels & Stickers (`/labels-stickers`), Clothing & Bags (`/clothing-bags`), Promotional Products (`/promotional-products`), Packaging (`/packaging`), Invitations/Gifts/Stationery (`/invitations-gifts-stationery`), Wedding (`/wedding`), Design Services (`/design-services`). All verified with clean `ng build` and live dev-server 200s + spot-checked images.

**Business Cards sub-page variants (product detail pages)**: Figma's "business card sub pages" frame (node `275:4`, under Page 1) has 38 children — 1 duplicate of the category page already built, and 36 real PDPs for material/shape/use variants (matte, glossy, uncoated, premium, natural-textured, soft-touch, cotton, linen, kraft, rounded-corner, square, leaf, oval, circle, painted-edge, ultra-thick, plastic, foil-accent, raised-foil, embossed-gloss, premium-plus, qr-code, magnetic, loyalty, appointment, stickers, next-day, 2-day, holders, packaging-insert, free-sample-kit, reorder, standard, deluxe, fast-delivery).

Only the **Matte** variant is built so far (`/business-cards/matte`), as a proof-of-pattern. **35 more remain.**

Each PDP follows an identical structural pattern (confirmed from Matte, node `55:4`): breadcrumb → hero (image gallery + purchase configurator: badges, title, star rating, price, delivery estimates, shape/corner dropdowns, quantity tiers, CTA buttons, design-service upsell) → product tabs (Samples/Specs & Templates/Product Options) → popular templates carousel → feature highlights → image+text description → "personal touch" thickness/finish options → "start designing" image+text → "Better by Design" sustainability blurb → related products → frequently bought together → customer reviews (rating breakdown bars + review cards) → design-services banner → FAQ.

**Build approach for remaining variants**: ONE shared `ProductDetail` component (`frontend/src/app/shared/product-detail/product-detail.component.*`) implements the whole layout, driven by `ProductDetailData` (`frontend/src/app/shared/product-detail/product-detail.model.ts`). Each variant needs: (1) a small `<slug>.data.ts` file with its data (in `frontend/src/app/pages/business-cards/variants/`), (2) a thin wrapper component (`<slug>-business-cards.component.ts`, inline template: `<app-site-shell><app-product-detail [data]="data" /></app-site-shell>`), (3) a route entry `business-cards/<slug>`. Images per variant live at `frontend/public/images/business-cards/<slug>/`.

**⚠️ Blocked as of last session**: Figma's node-data endpoints (`/v1/files/:key/nodes` AND `/v1/files/:key?ids=...`) both hit a file-level rate limit (~3.5 day cooldown, confirmed independent of which access token is used). Only `/v1/files/:key/images` (the imageRef→URL map, used for downloading images) still works. **Check whether this has reset before resuming the remaining 35 variants** — if still blocked, either wait it out or find another way to pull fresh Figma node data.

## Figma API gotchas (important — avoid re-discovering these)

- **Image export rate limit**: the standard `/v1/images/:file_key?ids=...` render/export endpoint has a FILE-LEVEL rate limit (not per-token). Once exhausted it stays exhausted for days regardless of token. **Fix**: use `/v1/files/:file_key/images` instead — returns a `meta.images` map of every raster image fill, keyed by `imageRef` hash, as direct S3-signed URLs, NOT subject to this limit. Workflow: fetch this map once, capture each image node's `imageRef` while walking the tree, look up `imageMap[imageRef]` directly.
- **Node-data rate limit**: separately, `/v1/files/:key/nodes` and `/v1/files/:key?ids=...` (structure/text fetches) can ALSO become rate-limited on a per-file basis. If this happens, no new page content can be fetched until it resets — fall back to polishing/fixing already-built pages using cached data instead of guessing.
- The "🧩 Components" canvas nodes are a trap — they belong to a different, unrelated design (salon/spa "Moxie"). Always use the header/footer/nav nested in each actual page frame.
- Breadcrumb depth and header pattern **varies per category page** — some have no breadcrumb at all (Signs Banners & Posters uses a page-title bar + in-page nav grid instead). Never assume the previous page's pattern applies; check each page's own top-of-page frames.
- **FAQ pattern**: Figma consistently writes a real answer for only the FIRST FAQ question (sometimes with a structured table, e.g. Business Cards' sizes table); all subsequent questions are collapsed placeholders with no answer text. The `FaqAccordion` component's `answer` field is optional for this reason — leave undefined rather than fabricating content.

## Styling / color system

`frontend/src/styles/_variables.scss` holds all design tokens. Most pages share a base navy/blue palette (`$color-primary` #167ef5, `$color-text-body` #374151, etc.), but **some pages have genuinely distinct palettes per Figma** — always extract a page's own colors from its Figma data before styling, never assume the base palette applies:

- **"Modern blue" theme** (`$color-modern-text` #1a1a2e / `$color-modern-accent` #2563eb): shared across Packaging, Invitations, and Design Services.
- **Promotional Products**: distinct warm/stone neutrals (`#57534e`, `#78716c`, `#f5f5f4`, `#fafaf9`), orange accent `#ea580c`, dark near-black tones `#0f172a`/`#1a1a2e`. Prefixed `$color-promo-*`.
- **Wedding**: warm-stone palette with pink/green accents (`$color-wedding-*`), including a separate `$color-wedding-text-body` (#57534e) distinct from `$color-wedding-text-secondary` (#44403c) — easy to conflate, verified distinct in Figma.

**Before writing any new page's SCSS**: run a color-extraction pass against that page's own Figma data first (walk the tree, convert fills to hex, print alongside node path) and map to the closest existing token — add a new one only if a genuinely distinct color exists.

## Known bug classes to watch for

1. **"Component" text-leak bug**: an earlier bulk rename (see "File naming convention" below) accidentally corrupted visible page COPY, not just code — e.g. "PackagingComponent", "WeddingComponent" appearing as literal text in breadcrumbs/labels/nav. Run this sweep after any future bulk rename/replace: `grep -rn "'[A-Za-z ]*Component'" --include="*.ts" frontend/src/app` and check the shared `nav-data.ts` too (it's global, affects every page).
2. **Missing icons**: "why us"/benefit-icon sections sometimes have an icon-circle div with no SVG child — always check Figma's icon node name (star/users/truck/box/palette/etc.) and add a matching inline SVG.
3. **Bare-number ratings**: some pages had numeric ratings with no visual star icons — Figma always shows actual star vector icons (filled/empty per rating value).
4. **Generic ProductCard misuse**: the shared `ProductCard` component matches a specific spec (white bg + border + radius, 5-icon SVG star row, divider before pricing, bordered CTA button) — don't approximate this with plain text.

## File naming convention

Every Angular component uses the classic `.component` suffix: `name.component.ts/.html/.scss`, exported class `NameComponent` (e.g. `business-cards.component.ts` exports `BusinessCardsComponent`). Applies to the root `app.component.ts` (`AppComponent`) too. Selectors (`app-business-cards`, etc.) are unaffected. Use this suffix for every new component.

## Nav mega-menu

Data-driven via `frontend/src/app/shared/nav-data.ts` (`NAV_CATEGORIES`). Real mega-menu column data exists for Business Cards, Postcards & Print Advertising, and Signs Banners & Posters. Remaining categories (Labels & Stickers, Clothing & Bags, Promotional Products, Packaging, Invitation, Wedding, Design Services) have no mega-menu data yet.

Behavior: desktop opens on pure CSS `:hover`/`:focus-within` (zero JS cost), click always navigates to the category's own page (matches vistaprint.com), touch devices get a signal-based toggle fallback via `matchMedia('(hover: hover)')`.

## Reusable components

Shared UI pieces live in `frontend/src/app/shared/`: `SiteShell`, `MainHeader`, `TopUtilityBar`, `CategoryNavBar`, `PromoAnnouncementBar`, `SiteFooter`, `ChatButton`, `MegaMenu`, `SectionHeader`, `ProductCard`, `Breadcrumbs`, `FaqAccordion`, `ProductDetail`. All use `ChangeDetectionStrategy.OnPush` and Angular signals (not manual subscriptions). Reuse these when building further pages instead of duplicating markup.

## Open items / not yet done

- 35 of 36 Business Cards PDP variants still need building (see above).
- Mega-menu data missing for 7 of 10 nav categories.
- Home's "explore all categories" is a static grid but Figma shows scroll chevrons (likely should be a horizontal carousel).
- Postcards/Signs bestseller carousels are missing prev/next arrow controls shown in Figma.
- Wedding's design-help section layout wasn't fully verifiable from cached data depth — re-check once Figma access is unblocked.
- No formal flow/UX doc from the client yet — flow assumptions are based on vistaprint.com's actual site behavior.
