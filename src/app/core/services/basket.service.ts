import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private storageKey = 'marked';

  getMarked(): number[] {
    const marked = window.localStorage.getItem(this.storageKey);
    return marked ? JSON.parse(marked) : [];
  }

  isMarked(id: number): boolean {
    return this.getMarked().includes(id);
  }

  add(id: number): void {
    const marked = this.getMarked();
    if (!marked.includes(id)) {
      marked.push(id);
      window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
    }
  }

  remove(id: number): void {
    let marked = this.getMarked();
    marked = marked.filter((item) => item !== id);
    window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
  }

  count(): number {
    return this.getMarked().length;
  }
}
