import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenu } from '../mega-menu/mega-menu';
import { NAV_CATEGORIES, NavCategory } from '../nav-data';

@Component({
  selector: 'app-category-nav-bar',
  imports: [RouterLink, MegaMenu],
  templateUrl: './category-nav-bar.html',
  styleUrl: './category-nav-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNavBar {
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
