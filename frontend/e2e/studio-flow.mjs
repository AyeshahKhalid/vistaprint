import { chromium } from 'playwright';
const base = process.env.E2E_BASE ?? 'http://localhost:4205';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
const errors = [];
p.on('pageerror', e => errors.push('pageerror: ' + e.message));
p.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
const step = (name, ok) => console.log((ok ? 'PASS' : 'FAIL') + '  ' + name);

// 1. PDP -> drawer -> Next -> studio
await p.goto(base + '/business-cards/matte', { waitUntil: 'networkidle' });
step('PDP renders title', (await p.locator('h1').first().textContent()).includes('Matte'));
const uploadBtn = p.getByRole('button', { name: 'Upload your design' }).first();
await uploadBtn.evaluate((el) => el.scrollIntoView({ block: 'center' }));
await uploadBtn.click();
step('drawer opens', await p.locator('.drawer').isVisible());
step('drawer pre-selects Shape', await p.locator('.drawer__option--selected').count() >= 2);
await p.locator('.drawer__option', { hasText: 'Square' }).first().click();
await p.locator('.drawer__footer button', { hasText: 'Next' }).click();
await p.waitForURL(/\/studio\/business-cards\/matte\?/);
step('Next -> /studio with config', p.url().includes('mode=upload') && p.url().includes('Shape=Square'));

// 2. Studio boots
await p.waitForSelector('canvas.lower-canvas', { timeout: 15000 });
step('Fabric canvas mounted', await p.locator('canvas.lower-canvas').count() === 1);
step('Uploads tab active from mode=upload', (await p.locator('.rail__tab--active').textContent()).includes('Uploads'));
step('empty overlay shown', await p.locator('.empty').isVisible());
step('Next disabled while empty', await p.locator('.topbar__right .btn--dark').isDisabled());
const w = await p.locator('canvas.lower-canvas').evaluate(c => c.width);
step('canvas has real dimensions (' + w + 'px wide)', w > 300);

// 3. Text tool + undo/redo
await p.locator('.rail__tab', { hasText: 'Text' }).click();
await p.getByRole('button', { name: 'Add text' }).click();
await p.waitForTimeout(200);
step('text props panel appears', await p.locator('.props select').count() === 1);
step('empty overlay hidden after add', !(await p.locator('.empty').isVisible()));
step('Next enabled', !(await p.locator('.topbar__right .btn--dark').isDisabled()));
await p.locator('.toggle', { hasText: 'B' }).click();
step('bold toggles on', await p.locator('.toggle--on').count() >= 1);
await p.keyboard.press('Escape');
await p.locator('.workspace').click({ position: { x: 20, y: 20 } });
const visible = (sel, state, ms = 3000) => p.locator(sel).first().waitFor({ state, timeout: ms }).then(() => true).catch(() => false);
await p.keyboard.press('Control+z');
await p.keyboard.press('Control+z');
step('undo x2 restores empty canvas', await visible('.empty', 'visible'));
await p.keyboard.press('Control+y');
step('redo brings text back', await visible('.empty', 'hidden'));

// 4. Zoom + guides + preview
const z0 = await p.locator('.zoombar__value').textContent();
await p.getByRole('button', { name: 'Zoom in' }).click();
const z1 = await p.locator('.zoombar__value').textContent();
step('zoom in changes level (' + z0 + ' -> ' + z1 + ')', z0 !== z1);
await p.locator('.legend', { hasText: 'Bleed' }).click();
step('bleed legend toggles off', await p.locator('.legend--off').count() === 1);
await p.getByRole('button', { name: 'Preview' }).click();
const src = await p.locator('.modal__image').getAttribute('src');
step('preview renders PNG data URL', !!src && src.startsWith('data:image/png'));
await p.getByRole('button', { name: 'Keep editing' }).click();

// 5. Save + Next -> cart with preview
await p.getByRole('button', { name: 'Save' }).click();
step('save shows timestamp', await p.locator('.topbar__saved').isVisible());
await p.locator('.topbar__right .btn--dark').click();
await p.waitForURL(/\/cart$/);
step('lands on /cart', true);
step('cart item present', await p.locator('.cart-item').count() === 1);
const imgSrc = await p.locator('.cart-item__image img').getAttribute('src');
step('cart shows studio preview', !!imgSrc && imgSrc.startsWith('data:image/png'));
step('cart label says custom design', (await p.locator('.cart-item__specs').textContent()).includes('Custom design'));
step('header badge shows 1', (await p.locator('.main-header__badge').textContent()).trim() === '1');

// 6. Reopen studio from cart restores saved design
await p.locator('.cart-item__actions a', { hasText: 'Edit design' }).click();
await p.waitForSelector('canvas.lower-canvas', { timeout: 15000 });
await p.waitForTimeout(400);
step('saved design restored (canvas not empty)', !(await p.locator('.empty').isVisible()));


// 7. Account: guard -> sign-in -> dropdown -> My Projects lists the saved design
await p.goto(base + '/my-account', { waitUntil: 'networkidle' });
step('guard redirects to /sign-in with returnUrl', p.url().includes('/sign-in') && p.url().includes('returnUrl'));
step('header shows Sign in when signed out', (await p.locator('.account-menu .main-header__action-label').textContent()).trim() === 'Sign in');
await p.getByRole('tab', { name: 'Create an account' }).click();
await p.fill('input[name="firstName"]', 'Jack');
await p.fill('input[name="lastName"]', 'Demo');
await p.fill('input[name="email"]', 'jack@example.com');
await p.fill('input[name="password"]', 'secret123');
await p.getByRole('button', { name: 'Create account' }).click();
await p.waitForURL(/\/my-account$/);
step('create account lands on dashboard', true);
step('dashboard greets by first name', (await p.locator('h1').first().textContent()).includes('Hello, Jack'));
step('sidebar has 4 sections', await p.locator('.account__heading').count() === 4);
await p.locator('.account-menu > .main-header__action').click();
step('dropdown opens with greeting', (await p.locator('.account-menu__greeting').textContent()).includes('Hello, Jack'));
step('dropdown lists 13 links', await p.locator('.account-menu__link').count() === 13);
await p.locator('.account-menu__link', { hasText: 'My Projects' }).click();
await p.waitForURL(/\/my-account\/design\/projects$/);
step('My Projects shows the saved studio design', await p.locator('.project').count() === 1 && (await p.locator('.project__preview img').getAttribute('src')).startsWith('data:image/png'));
await p.goto(base + '/my-account/orders', { waitUntil: 'networkidle' });
step('empty-state section renders', (await p.locator('.empty__title').textContent()).includes("haven't placed any orders"));
await p.locator('.account-menu > .main-header__action').click();
await p.getByRole('button', { name: 'Sign out' }).click();
await p.waitForURL(/\/$/);
step('sign out returns home and header shows Sign in', (await p.locator('.account-menu .main-header__action-label').textContent()).trim() === 'Sign in');

console.log(errors.length ? 'RUNTIME ERRORS:\n  ' + errors.join('\n  ') : 'no runtime errors');
await b.close();
