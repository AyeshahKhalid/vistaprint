import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';

@Component({
  selector: 'app-not-found',
  imports: [SiteShellComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-shell>
      <section class="not-found">
        <div class="not-found__inner">
          <span class="not-found__code">404</span>
          <h1 class="not-found__title">We couldn't find that page</h1>
          <p class="not-found__body">The link may be out of date, or this page hasn't been built yet.</p>
          <div class="not-found__actions">
            <a routerLink="/" class="btn btn--dark">Back to home</a>
            <a routerLink="/business-cards" class="btn btn--outline">Shop business cards</a>
          </div>
        </div>
      </section>
    </app-site-shell>
  `,
  styles: `
    @use 'variables' as v;

    .not-found {
      padding: 96px 24px;
      text-align: center;
    }
    .not-found__inner {
      max-width: 520px;
      margin: 0 auto;
    }
    .not-found__code {
      display: block;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: v.$color-primary;
      margin-bottom: 12px;
    }
    .not-found__title {
      font-size: 30px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 12px;
    }
    .not-found__body {
      font-size: 15px;
      color: v.$color-text-secondary;
      margin: 0 0 28px;
    }
    .not-found__actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      padding: 13px 20px;
      border: 1px solid transparent;
      text-decoration: none;
      cursor: pointer;
    }
    .btn--dark {
      background: v.$color-text-dark;
      color: #ffffff;
    }
    .btn--outline {
      background: #ffffff;
      color: v.$color-text-dark;
      border-color: v.$color-border;
    }
  `,
})
export class NotFoundComponent {}
