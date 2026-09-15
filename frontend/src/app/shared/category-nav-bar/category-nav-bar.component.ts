import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { NAV_CATEGORIES, NavCategory } from '../nav-data';

@Component({
  selector: 'app-category-nav-bar',
  imports: [RouterLink, MegaMenuComponent],
  templateUrl: './category-nav-bar.component.html',
  styleUrl: './category-nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNavBarComponent {
  readonly categories: NavCategory[] = NAV_CATEGORIES;

  /** Touch/keyboard fallback only — desktop hover is handled entirely in CSS via :hover/:focus-within. */
  readonly touchOpenCategory = signal<string | null>(null);

  toggleOnTouch(category: NavCategory, event: Event): void {
    if (!category.megaMenu) return;
    if (window.matchMedia('(hover: hover)').matches) return;
    event.preventDefault();
    this.touchOpenCategory.update((current) => (current === category.path ? null : category.path));
  }
}
