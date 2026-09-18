import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { ACCOUNT_SECTIONS } from '../../shared/auth/account-nav';

/** Account area shell: grouped sidebar (Account / Workspace / Orders / Settings) + page outlet. */
@Component({
  selector: 'app-my-account-layout',
  imports: [SiteShellComponent, RouterLink, RouterLinkActive, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-shell>
      <div class="account">
        <aside class="account__sidebar">
          @for (section of sections; track section.heading) {
            <h2 class="account__heading">{{ section.heading }}</h2>
            <nav class="account__nav">
              @for (link of section.links; track link.path) {
                <a
                  [routerLink]="link.path"
                  routerLinkActive="account__link--active"
                  [routerLinkActiveOptions]="{ exact: link.path === '/my-account' }"
                  class="account__link"
                >
                  {{ link.label }}
                </a>
              }
            </nav>
          }
        </aside>
        <main class="account__main">
          <router-outlet />
        </main>
      </div>
    </app-site-shell>
  `,
  styles: `
    @use 'variables' as v;
    @use 'mixins' as m;

    .account {
      @include m.container(v.$header-container-max-width);
      display: grid;
      grid-template-columns: 272px 1fr;
      gap: 48px;
      padding-top: 40px;
      padding-bottom: 80px;
    }
    .account__heading {
      font-size: 24px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid v.$color-border;
    }
    .account__nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 36px;
    }
    .account__link {
      font-size: 15px;
      color: v.$color-text;
      &:hover { color: v.$color-link; }
      &--active { color: v.$color-primary; font-weight: 700; }
    }
    .account__main { min-width: 0; }
    @include m.mobile {
      .account { grid-template-columns: 1fr; gap: 24px; }
    }
  `,
})
export class MyAccountLayoutComponent {
  readonly sections = ACCOUNT_SECTIONS;
}
