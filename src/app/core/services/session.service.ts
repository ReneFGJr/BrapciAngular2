import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  setSessionValue(key: string, value: string): void {
    if (!this.isBrowser()) {
      return;
    }

    sessionStorage.setItem(key, value);
  }

  getSessionValue(key: string): string | null {
    if (!this.isBrowser()) {
      return null;
    }

    return sessionStorage.getItem(key);
  }

  clearSessionValue(key: string): void {
    if (!this.isBrowser()) {
      return;
    }

    sessionStorage.removeItem(key);
  }

  setCookie(name: string, value: string, days = 365): void {
    if (!this.isBrowser()) {
      return;
    }

    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    this.document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  getCookie(name: string): string | null {
    if (!this.isBrowser()) {
      return null;
    }

    const target = `${name}=`;
    const values = this.document.cookie.split(';');

    for (const cookie of values) {
      const item = cookie.trim();
      if (item.startsWith(target)) {
        return decodeURIComponent(item.substring(target.length));
      }
    }

    return null;
  }
}
