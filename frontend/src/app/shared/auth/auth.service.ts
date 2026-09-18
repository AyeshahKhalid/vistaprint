import { Injectable, computed, effect, signal } from '@angular/core';

export interface AccountUser {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
}

const SESSION_KEY = 'printgraphi.session';
const PROFILES_KEY = 'printgraphi.profiles';

/**
 * Client-side session. There is no backend yet, so "signing in" stores the
 * profile on this device; every consumer reads `user()` / `isSignedIn()`, so
 * swapping in real authentication later touches only this file.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSignal = signal<AccountUser | null>(read<AccountUser | null>(SESSION_KEY, null));

  readonly user = this.userSignal.asReadonly();
  readonly isSignedIn = computed(() => this.userSignal() !== null);
  readonly firstName = computed(() => this.userSignal()?.firstName ?? '');

  constructor() {
    effect(() => write(SESSION_KEY, this.userSignal()));
  }

  /** Sign in with an email; restores a profile created on this device, else derives a name from the email. */
  signIn(email: string): AccountUser {
    const known = read<Record<string, AccountUser>>(PROFILES_KEY, {})[email.toLowerCase()];
    const user = known ?? { firstName: nameFromEmail(email), lastName: '', email };
    this.userSignal.set(user);
    return user;
  }

  createAccount(user: AccountUser): AccountUser {
    this.rememberProfile(user);
    this.userSignal.set(user);
    return user;
  }

  updateProfile(patch: Partial<AccountUser>): void {
    const current = this.userSignal();
    if (!current) return;
    const next = { ...current, ...patch };
    this.rememberProfile(next);
    this.userSignal.set(next);
  }

  signOut(): void {
    this.userSignal.set(null);
  }

  private rememberProfile(user: AccountUser): void {
    const profiles = read<Record<string, AccountUser>>(PROFILES_KEY, {});
    profiles[user.email.toLowerCase()] = user;
    write(PROFILES_KEY, profiles);
  }
}

function nameFromEmail(email: string): string {
  const local = email.split('@')[0] ?? '';
  const first = local.split(/[._-]/)[0] ?? '';
  return first ? first.charAt(0).toUpperCase() + first.slice(1) : 'there';
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable — the in-memory session still works.
  }
}
