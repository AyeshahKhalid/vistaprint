import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component';
import { AuthService } from '../../shared/auth/auth.service';

type Tab = 'sign-in' | 'create';

/**
 * Sign in / create account, modelled on vistaprint's unified Vista account page
 * (email + password, or Google / Facebook / Apple). Until the backend exists the
 * session is stored on this device only; the page says so.
 */
@Component({
  selector: 'app-sign-in',
  imports: [SiteShellComponent, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  /** `?tab=create` opens the create-account form; `?returnUrl=` is honoured after sign-in. */
  readonly tab = input<string>();
  readonly returnUrl = input<string>();

  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly activeTab = signal<Tab>('sign-in');
  readonly error = signal<string | null>(null);
  readonly destination = computed(() => this.returnUrl() || '/my-account');

  constructor() {
    if (this.tab() === 'create') this.activeTab.set('create');
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
    this.error.set(null);
  }

  submitSignIn(event: Event): void {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const email = String(data.get('email') ?? '').trim();
    const password = String(data.get('password') ?? '');
    if (!isEmail(email)) return this.error.set('Please enter a valid email address.');
    if (password.length < 6) return this.error.set('Your password must be at least 6 characters.');
    this.auth.signIn(email);
    this.finish();
  }

  submitCreate(event: Event): void {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const firstName = String(data.get('firstName') ?? '').trim();
    const lastName = String(data.get('lastName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const password = String(data.get('password') ?? '');
    if (!firstName) return this.error.set('Please enter your first name.');
    if (!isEmail(email)) return this.error.set('Please enter a valid email address.');
    if (password.length < 6) return this.error.set('Your password must be at least 6 characters.');
    this.auth.createAccount({ firstName, lastName, email });
    this.finish();
  }

  /** Social sign-in is a preview until the providers are connected: signs in a demo user. */
  socialSignIn(provider: 'Google' | 'Facebook' | 'Apple'): void {
    this.auth.createAccount({ firstName: 'Jack', lastName: 'Demo', email: `jack.demo@${provider.toLowerCase()}.example` });
    this.finish();
  }

  private finish(): void {
    void this.router.navigateByUrl(this.destination());
  }
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
