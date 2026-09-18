import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../auth/auth.service';
import { ACCOUNT_LINKS } from '../auth/account-nav';

@Component({
  selector: 'app-main-header',
  imports: [RouterLink],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeAccount()',
  },
})
export class MainHeaderComponent {
  readonly cart = inject(CartService);
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly accountLinks = ACCOUNT_LINKS;
  readonly accountOpen = signal(false);

  toggleAccount(): void {
    this.accountOpen.update((open) => !open);
  }

  closeAccount(): void {
    this.accountOpen.set(false);
  }

  onDocumentClick(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.account-menu')) this.closeAccount();
  }

  signOut(): void {
    this.auth.signOut();
    this.closeAccount();
    void this.router.navigate(['/']);
  }
}
