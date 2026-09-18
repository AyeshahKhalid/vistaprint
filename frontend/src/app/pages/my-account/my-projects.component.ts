import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project, ProjectsService } from '../../shared/projects/projects.service';
import { AccountEmptyStateComponent } from './account-empty-state.component';

/** Designs saved from the studio, with previews; empty state matches vistaprint's. */
@Component({
  selector: 'app-my-projects',
  imports: [RouterLink, AccountEmptyStateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="page-title">My Projects</h1>
    @if (projects.list().length) {
      <div class="projects">
        @for (project of projects.list(); track project.id) {
          <article class="project">
            <a [routerLink]="studioLink(project)" [queryParams]="{ mode: 'edit' }" class="project__preview">
              <img [src]="project.preview" [alt]="project.title" />
            </a>
            <div class="project__body">
              <h2 class="project__title">{{ project.title }}</h2>
              <p class="project__meta">Edited {{ relative(project.updatedAt) }}</p>
              <div class="project__actions">
                <a [routerLink]="studioLink(project)" [queryParams]="{ mode: 'edit' }" class="btn btn--dark">Edit design</a>
                <a [routerLink]="'/' + project.id" class="btn btn--outline">Order</a>
                <button type="button" class="project__delete" (click)="projects.remove(project.id)">Delete</button>
              </div>
            </div>
          </article>
        }
      </div>
    } @else {
      <app-account-empty-state heading="You don't have any projects yet." />
    }
  `,
  styles: `
    @use 'variables' as v;

    .page-title {
      font-size: 40px;
      font-weight: 800;
      color: v.$color-text;
      margin: 0 0 24px;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .project {
      border: 1px solid v.$color-border-card;
      border-radius: 12px;
      background: #ffffff;
      overflow: hidden;
    }
    .project__preview {
      display: block;
      background: v.$color-bg-subtle;
      padding: 16px;
      img {
        display: block;
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 4px 14px rgba(7, 26, 61, 0.12);
      }
    }
    .project__body { padding: 16px; }
    .project__title {
      font-size: 16px;
      font-weight: 700;
      color: v.$color-text;
      margin: 0 0 4px;
    }
    .project__meta {
      font-size: 13px;
      color: v.$color-text-secondary;
      margin: 0 0 14px;
    }
    .project__actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .project__delete {
      margin-left: auto;
      background: none;
      border: none;
      padding: 0;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: v.$color-link;
      cursor: pointer;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      padding: 9px 14px;
      border: 1px solid transparent;
      &--dark { background: v.$color-text-dark; color: #ffffff; }
      &--outline { background: #ffffff; color: v.$color-text-dark; border-color: v.$color-border; }
    }
  `,
})
export class MyProjectsComponent {
  readonly projects = inject(ProjectsService);

  studioLink(project: Project): string[] {
    return ['/studio', project.category, project.slug];
  }

  relative(timestamp: number): string {
    const minutes = Math.round((Date.now() - timestamp) / 60000);
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.round(minutes / 60);
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    const days = Math.round(hours / 24);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
}
