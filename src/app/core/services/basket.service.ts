import { Injectable, Inject, PLATFORM_ID, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private storageKey = 'marked';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  changed = new EventEmitter<void>();

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getMarked(): number[] {
    if (!this.isBrowser()) return [];
    const marked = window.localStorage.getItem(this.storageKey);
    return marked ? JSON.parse(marked) : [];
  }

  isMarked(id: number): boolean {
    return this.getMarked().includes(id);
  }

  add(id: number): void {
    if (!this.isBrowser()) return;
    const marked = this.getMarked();
    if (!marked.includes(id)) {
      marked.push(id);
      window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
      this.changed.emit();
    }
  }

  remove(id: number): void {
    if (!this.isBrowser()) return;
    let marked = this.getMarked();
    marked = marked.filter((item) => item !== id);
    window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
    this.changed.emit();
  }

  clear(): void {
    if (!this.isBrowser()) return;
    window.localStorage.removeItem(this.storageKey);
    this.changed.emit();
  }

  count(): number {
    return this.getMarked().length;
  }
}
