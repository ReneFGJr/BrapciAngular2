import { Component, Input, computed, signal } from '@angular/core';

type JsonRecord = Record<string, unknown>;

type StratumItem = {
  name: string;
  evaluationArea: string;
  stratum: string;
  periodStart: string;
  periodEnd: string;
};

type StratumGroup = {
  name: string;
  items: StratumItem[];
};

@Component({
  selector: 'app-journal-strata',
  standalone: true,
  templateUrl: './journal-strata.component.html',
  styleUrl: './journal-strata.component.scss'
})
export class JournalStrataComponent {
  private readonly source = signal<unknown>(null);

  @Input()
  set avaliations(value: unknown) {
    this.source.set(value);
  }

  readonly groups = computed<StratumGroup[]>(() => {
    const values = Array.isArray(this.source()) ? this.source() as unknown[] : [];
    const grouped = new Map<string, StratumItem[]>();

    for (const value of values) {
      const item = this.toStratumItem(value);
      if (!item) continue;

      const items = grouped.get(item.name) ?? [];
      items.push(item);
      grouped.set(item.name, items);
    }

    return [...grouped.entries()]
      .sort(([left], [right]) => left.localeCompare(right, 'pt-BR', { sensitivity: 'base' }))
      .map(([name, items]) => ({
        name,
        items: items.sort((left, right) =>
          this.yearValue(left.periodStart) - this.yearValue(right.periodStart)
          || this.yearValue(left.periodEnd) - this.yearValue(right.periodEnd)
        )
      }));
  });

  periodLabel(item: StratumItem): string {
    return item.periodStart === item.periodEnd
      ? item.periodStart
      : `${item.periodStart}–${item.periodEnd}`;
  }

  private toStratumItem(value: unknown): StratumItem | null {
    if (!value || typeof value !== 'object') return null;

    const record = value as JsonRecord;
    const name = this.text(record['name']);
    if (name === '-') return null;

    return {
      name,
      evaluationArea: this.text(record['evaluation_area']),
      stratum: this.text(record['stratum']),
      periodStart: this.text(record['period_start']),
      periodEnd: this.text(record['period_end'])
    };
  }

  private text(value: unknown): string {
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'number' && Number.isFinite(value)) return String(value);
    return '-';
  }

  private yearValue(value: string): number {
    const year = Number.parseInt(value, 10);
    return Number.isFinite(year) ? year : Number.MAX_SAFE_INTEGER;
  }
}
