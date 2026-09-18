import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccountEmptyStateComponent } from './account-empty-state.component';

/**
 * Generic account page: a title and an empty state, driven by route `data`
 * (`heading`, `emptyHeading`, `emptyBody`). Used for every section that has no
 * data source yet (orders, favorites, uploads, subscriptions, …).
 */
@Component({
  selector: 'app-account-section',
  imports: [AccountEmptyStateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="page-title">{{ heading() }}</h1>
    <app-account-empty-state [heading]="emptyHeading()" [body]="emptyBody()" />
  `,
  styles: `
    @use 'variables' as v;
    .page-title {
      font-size: 40px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 24px;
    }
  `,
})
export class AccountSectionComponent {
  readonly heading = input.required<string>();
  readonly emptyHeading = input.required<string>();
  readonly emptyBody = input<string>('Ready to create? So are we. Here are some popular starting points:');
}
