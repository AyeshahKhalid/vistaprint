import { Injectable, computed, effect, signal } from '@angular/core';

export type CartDesign =
  | { type: 'template'; name: string }
  | { type: 'upload'; fileName: string }
  | { type: 'studio'; elements: number };

export interface CartItem {
  id: string;
  category: string;
  slug: string;
  title: string;
  image: string;
  /** PNG data URL rendered by the studio, shown instead of the product image. */
  preview?: string;
  quantityLabel: string;
  price: string;
  perUnit: string;
  options: Record<string, string>;
  design: CartDesign;
  addedAt: number;
}

const STORAGE_KEY = 'printgraphi.cart';

/**
 * Client-side cart. State lives in signals and is mirrored to localStorage so it
 * survives reloads; when the backend lands, `read`/`persist` become API calls
 * and nothing else changes.
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>(readStoredItems());

  readonly items = this.itemsSignal.asReadonly();
  readonly count = computed(() => this.itemsSignal().length);
  readonly subtotal = computed(() => this.itemsSignal().reduce((sum, item) => sum + parsePrice(item.price), 0));

  constructor() {
    effect(() => persistItems(this.itemsSignal()));
  }

  add(item: Omit<CartItem, 'id' | 'addedAt'>): CartItem {
    const addedAt = Date.now();
    const entry: CartItem = { ...item, id: `${item.category}/${item.slug}:${addedAt}`, addedAt };
    this.itemsSignal.update((items) => [...items, entry]);
    return entry;
  }

  remove(id: string): void {
    this.itemsSignal.update((items) => items.filter((item) => item.id !== id));
  }

  clear(): void {
    this.itemsSignal.set([]);
  }
}

function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, '')) || 0;
}

function readStoredItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function persistItems(items: CartItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable (private mode, quota) — the in-memory cart still works.
  }
}
