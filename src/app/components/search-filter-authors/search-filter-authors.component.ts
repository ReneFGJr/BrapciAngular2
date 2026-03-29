import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

type FilterItem = {
  label: string;
  count: number | null;
};

@Component({
  selector: 'app-search-filter-authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filter-authors.component.html',
  styleUrl: './search-filter-authors.component.scss'
})
export class SearchFilterAuthorsComponent {
  @Input() set items(value: unknown[]) {
    this.rawItems.set(Array.isArray(value) ? value : []);
  }

  encode(value: string): string {
    return encodeURIComponent(value);
  }

  readonly expanded = signal(false);
  private readonly rawItems = signal<unknown[]>([]);

  readonly normalizedItems = computed(() => this.rawItems().map((item) => this.toFilterItem(item)).filter((item) => !!item.label));
  readonly topItems = computed(() => this.normalizedItems().slice(0, 10));
  readonly panelItems = computed(() => this.normalizedItems().slice(0, 100));
  readonly hasMoreThanTop = computed(() => this.normalizedItems().length > 10);

  togglePanel(): void {
    this.expanded.update((value) => !value);
  }

  private toFilterItem(item: unknown): FilterItem {
    if (typeof item === 'string') {
      return { label: item.trim(), count: null };
    }

    if (!item || typeof item !== 'object') {
      return { label: '', count: null };
    }

    const data = item as Record<string, unknown>;
    const label = this.pickFirstString(data, ['label', 'name', 'author', 'key', 'value', 'title']);
    const count = this.pickFirstNumber(data, ['count', 'doc_count', 'total', 'value']);

    return { label, count };
  }

  private pickFirstString(data: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }

    return '';
  }

  private pickFirstNumber(data: Record<string, unknown>, keys: string[]): number | null {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
      }

      if (typeof value === 'string') {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) {
          return parsed;
        }
      }
    }

    return null;
  }
}
