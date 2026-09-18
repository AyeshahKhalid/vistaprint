import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { CartService } from '../../shared/cart/cart.service';
import { ProjectsService } from '../../shared/projects/projects.service';

@Component({
  selector: 'app-account-dashboard',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="page-title">Hello, {{ auth.firstName() }}</h1>
    <p class="page-subtitle">Everything you've designed, saved and ordered, in one place.</p>

    <div class="tiles">
      <a routerLink="/my-account/design/projects" class="tile">
        <span class="tile__value">{{ projects.count() }}</span>
        <span class="tile__label">{{ projects.count() === 1 ? 'Project' : 'Projects' }}</span>
        <span class="tile__link">Open My Projects</span>
      </a>
      <a routerLink="/my-account/orders" class="tile">
        <span class="tile__value">0</span>
        <span class="tile__label">Orders</span>
        <span class="tile__link">Order history &amp; reorder</span>
      </a>
      <a routerLink="/cart" class="tile">
        <span class="tile__value">{{ cart.count() }}</span>
        <span class="tile__label">{{ cart.count() === 1 ? 'Item in cart' : 'Items in cart' }}</span>
        <span class="tile__link">Go to cart</span>
      </a>
      <a routerLink="/my-account/profile" class="tile">
        <span class="tile__value tile__value--text">{{ auth.user()?.email }}</span>
        <span class="tile__label">Account profile</span>
        <span class="tile__link">Edit details</span>
      </a>
    </div>

    @if (projects.list().length) {
      <h2 class="section-title">Recent projects</h2>
      <div class="recent">
        @for (project of projects.list().slice(0, 3); track project.id) {
          <a [routerLink]="['/studio', project.category, project.slug]" [queryParams]="{ mode: 'edit' }" class="recent__card">
            <img [src]="project.preview" [alt]="project.title" />
            <span>{{ project.title }}</span>
          </a>
        }
      </div>
    }
  `,
  styles: `
    @use 'variables' as v;

    .page-title {
      font-size: 40px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 6px;
    }
    .page-subtitle {
      font-size: 15px;
      color: v.$color-text-secondary;
      margin: 0 0 28px;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .tile {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 20px;
      border: 1px solid v.$color-border-card;
      border-radius: 12px;
      background: #ffffff;
      color: v.$color-text;
      &:hover { border-color: v.$color-primary; }
    }
    .tile__value {
      font-size: 32px;
      font-weight: 800;
      &--text { font-size: 15px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    }
    .tile__label { font-size: 14px; color: v.$color-text-secondary; }
    .tile__link { margin-top: 10px; font-size: 13px; font-weight: 700; color: v.$color-link; }
    .section-title {
      font-size: 22px;
      font-weight: 800;
      margin: 0 0 16px;
    }
    .recent {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
    }
    .recent__card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 12px;
      border: 1px solid v.$color-border-card;
      border-radius: 12px;
      background: #ffffff;
      font-size: 14px;
      font-weight: 700;
      color: v.$color-text;
      img { width: 100%; border-radius: 4px; box-shadow: 0 4px 14px rgba(7, 26, 61, 0.12); }
    }
  `,
})
export class AccountDashboardComponent {
  readonly auth = inject(AuthService);
  readonly cart = inject(CartService);
  readonly projects = inject(ProjectsService);
}
