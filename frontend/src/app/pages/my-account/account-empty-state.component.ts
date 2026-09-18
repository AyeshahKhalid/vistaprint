import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface StartingPoint {
  label: string;
  path: string;
}

export const DEFAULT_STARTING_POINTS: StartingPoint[] = [
  { label: 'Business cards', path: '/business-cards' },
  { label: 'Marketing Materials', path: '/postcards-print-advertising/marketing-materials' },
  { label: 'Invitations & Stationery', path: '/invitations-gifts-stationery' },
  { label: 'Signs & Banners', path: '/signs-banners-posters' },
];

/** The "nothing here yet" panel used across the account area (illustration, heading, starting points). */
@Component({
  selector: 'app-account-empty-state',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="empty">
      <svg class="empty__art" width="180" height="150" viewBox="0 0 180 150" fill="none" aria-hidden="true">
        <path d="M40 70l50-22 50 22v50l-50 22-50-22z" fill="#e2f1fc" stroke="#167ef5" stroke-width="3" stroke-linejoin="round"/>
        <path d="M40 70l50 22 50-22M90 92v50" stroke="#167ef5" stroke-width="3" stroke-linejoin="round"/>
        <path d="M60 46l30-14 30 14-30 14z" fill="#ffffff" stroke="#167ef5" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="140" cy="38" r="14" stroke="#167ef5" stroke-width="3"/>
        <path d="M150 48l14 14" stroke="#167ef5" stroke-width="4" stroke-linecap="round"/>
        <path d="M22 30l4-8 4 8-4 8zM160 100l3-6 3 6-3 6zM30 120l3-6 3 6-3 6z" fill="#167ef5"/>
      </svg>
      <h2 class="empty__title">{{ heading() }}</h2>
      <p class="empty__body">{{ body() }}</p>
      <div class="empty__actions">
        @for (point of startingPoints(); track point.path) {
          <a [routerLink]="point.path" class="empty__btn">{{ point.label }}</a>
        }
      </div>
    </div>
  `,
  styles: `
    @use 'variables' as v;

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 40px 16px 24px;
    }
    .empty__art { margin-bottom: 20px; }
    .empty__title {
      font-size: 22px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 10px;
    }
    .empty__body {
      font-size: 16px;
      color: v.$color-text-body;
      margin: 0 0 24px;
      max-width: 560px;
    }
    .empty__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .empty__btn {
      display: inline-flex;
      align-items: center;
      padding: 14px 20px;
      border: 1px solid v.$color-border;
      border-radius: 8px;
      background: #ffffff;
      font-size: 16px;
      font-weight: 700;
      color: v.$color-text;
      &:hover { border-color: v.$color-text-muted; }
    }
  `,
})
export class AccountEmptyStateComponent {
  readonly heading = input.required<string>();
  readonly body = input<string>('Ready to create? So are we. Here are some popular starting points:');
  readonly startingPoints = input<StartingPoint[]>(DEFAULT_STARTING_POINTS);
}
