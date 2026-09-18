import { Injectable, computed, effect, signal } from '@angular/core';

export interface Project {
  /** `<category>/<slug>` — one saved design per product, like a studio document. */
  id: string;
  category: string;
  slug: string;
  title: string;
  /** PNG data URL thumbnail rendered by the studio on save. */
  preview: string;
  updatedAt: number;
}

const INDEX_KEY = 'printgraphi.projects';
const DESIGN_PREFIX = 'printgraphi.studio.';

/**
 * Index of designs saved from the studio. The studio keeps each design's canvas
 * JSON under `printgraphi.studio.<id>`; this service keeps the list shown in
 * My Projects. Both move to the API once accounts are real.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly listSignal = signal<Project[]>(readIndex());

  readonly list = computed(() => [...this.listSignal()].sort((a, b) => b.updatedAt - a.updatedAt));
  readonly count = computed(() => this.listSignal().length);

  constructor() {
    effect(() => writeIndex(this.listSignal()));
  }

  upsert(project: Project): void {
    this.listSignal.update((list) => [...list.filter((p) => p.id !== project.id), project]);
  }

  remove(id: string): void {
    this.listSignal.update((list) => list.filter((p) => p.id !== id));
    try {
      localStorage.removeItem(DESIGN_PREFIX + id);
    } catch {
      // Storage unavailable — nothing to remove.
    }
  }
}

function readIndex(): Project[] {
  try {
    const raw = localStorage.getItem(INDEX_KEY);
    return raw ? (JSON.parse(raw) as Project[]) : [];
  } catch {
    return [];
  }
}

function writeIndex(list: Project[]): void {
  try {
    localStorage.setItem(INDEX_KEY, JSON.stringify(list));
  } catch {
    // Storage unavailable (private mode, quota) — the in-memory list still works.
  }
}
