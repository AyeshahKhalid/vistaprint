import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  TitleStrategy,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { PageTitleStrategy } from './shared/page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // Every route is lazy, so the first paint ships only the shell and the
      // landing page; remaining chunks download in the background afterwards
      // so later navigations are instant.
      withPreloading(PreloadAllModules),
      // New pages open at the top, Back restores the previous position, and
      // `fragment` links (e.g. "reviews") scroll to their anchor.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      // Route params, query params and resolved data bind straight to
      // component inputs — no ActivatedRoute plumbing in page components.
      withComponentInputBinding(),
    ),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
};
