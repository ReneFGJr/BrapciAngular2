import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

type JsonRecord = Record<string, unknown>;

type IssueViewItem = {
  id: string;
  year: string;
  journal: string;
  vol: string;
  nr: string;
};

@Component({
  selector: 'app-issue-view-type',
  imports: [CommonModule],
  templateUrl: './view-type-01.component.html',
  styleUrl: './view-type-01.component.scss'
})
export class ViewType01Component {
  private readonly issuesSignal = signal<unknown[]>([]);

  @Input() set issues(value: unknown) {
    if (Array.isArray(value)) {
      this.issuesSignal.set(value);
      return;
    }

    if (value && typeof value === 'object') {
      this.issuesSignal.set([value]);
      return;
    }

    this.issuesSignal.set([]);
  }

  readonly viewItems = computed(() =>
    this.issuesSignal()
      .map((item) => this.normalizeItem(item))
      .filter((item): item is IssueViewItem => item !== null)
      .sort((a, b) => {
        const byYear = this.toSortableNumber(b.year) - this.toSortableNumber(a.year);
        if (byYear !== 0) {
          return byYear;
        }

        const byVol = this.toSortableNumber(b.vol) - this.toSortableNumber(a.vol);
        if (byVol !== 0) {
          return byVol;
        }

        return this.toSortableNumber(b.nr) - this.toSortableNumber(a.nr);
      })
  );

  private normalizeItem(item: unknown): IssueViewItem | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const id = this.pick(data, ['ID', 'id']);
    const year = this.pick(data, ['YEAR', 'year', 'ano']);
    const journal = this.pick(data, ['JOURNAL', 'journal']);
    const vol = this.pick(data, ['VOL', 'vol', 'volume']);
    const nr = this.pick(data, ['NR', 'nr', 'number']);

    if (!id && !year && !journal && !vol && !nr) {
      return null;
    }

    return { id, year, journal, vol, nr };
  }

  private pick(data: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  private toSortableNumber(value: string): number {
    if (!value) {
      return Number.NEGATIVE_INFINITY;
    }

    const match = value.match(/-?\d+(?:[\.,]\d+)?/);
    if (!match) {
      return Number.NEGATIVE_INFINITY;
    }

    const normalized = match[0].replace(',', '.');
    const parsed = Number.parseFloat(normalized);

    return Number.isFinite(parsed) ? parsed : Number.NEGATIVE_INFINITY;
  }
}
