import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-account-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="page-title">Account Profile</h1>
    <p class="page-subtitle">The details we use on your orders and to get in touch about them.</p>

    <form class="profile" (submit)="save($event)" novalidate>
      <div class="field-row">
        <label class="field"><span>First name</span><input type="text" name="firstName" [value]="auth.user()?.firstName ?? ''" required /></label>
        <label class="field"><span>Last name</span><input type="text" name="lastName" [value]="auth.user()?.lastName ?? ''" /></label>
      </div>
      <label class="field"><span>Email address</span><input type="email" name="email" [value]="auth.user()?.email ?? ''" required /></label>
      <div class="field-row">
        <label class="field"><span>Phone (optional)</span><input type="tel" name="phone" [value]="auth.user()?.phone ?? ''" /></label>
        <label class="field"><span>Company (optional)</span><input type="text" name="company" [value]="auth.user()?.company ?? ''" /></label>
      </div>
      <div class="profile__actions">
        <button type="submit" class="btn btn--dark">Save changes</button>
        @if (saved()) {
          <span class="profile__saved">Saved</span>
        }
      </div>
    </form>
  `,
  styles: `
    @use 'variables' as v;

    .page-title { font-size: 40px; font-weight: 800; color: v.$color-text; margin: 0 0 6px; }
    .page-subtitle { font-size: 15px; color: v.$color-text-secondary; margin: 0 0 28px; }
    .profile {
      max-width: 620px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      border: 1px solid v.$color-border-card;
      border-radius: 12px;
      background: #ffffff;
    }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 13px;
      font-weight: 600;
      color: v.$color-text;
      input {
        border: 1px solid v.$color-border;
        border-radius: 8px;
        padding: 11px 12px;
        font-family: inherit;
        font-size: 15px;
        color: v.$color-text;
        &:focus { outline: none; border-color: v.$color-primary; box-shadow: 0 0 0 3px v.$color-bg-accent; }
      }
    }
    .profile__actions { display: flex; align-items: center; gap: 14px; margin-top: 4px; }
    .profile__saved { font-size: 14px; font-weight: 700; color: v.$color-success; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      padding: 12px 20px;
      border: 1px solid transparent;
      font-family: inherit;
      cursor: pointer;
      &--dark { background: v.$color-text-dark; color: #ffffff; }
    }
  `,
})
export class AccountProfileComponent {
  readonly auth = inject(AuthService);
  readonly saved = signal(false);

  save(event: Event): void {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    this.auth.updateProfile({
      firstName: value('firstName') || this.auth.firstName(),
      lastName: value('lastName'),
      email: value('email') || (this.auth.user()?.email ?? ''),
      phone: value('phone') || undefined,
      company: value('company') || undefined,
    });
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2500);
  }
}
