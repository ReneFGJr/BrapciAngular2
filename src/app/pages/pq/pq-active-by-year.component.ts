import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, computed, signal } from '@angular/core';

export type PqActivesByYear = Record<string, Record<string, number>>;

interface YearItem {
  year: string;
  total: number;
  modalities: Array<{ label: string; count: number }>;
}

@Component({
  selector: 'app-pq-active-by-year',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pq-active-by-year.component.html',
  styleUrl: './pq-active-by-year.component.scss',
})
export class PqActiveByYearComponent implements OnChanges {
  @Input({ required: true }) data: PqActivesByYear = {};

  readonly years = signal<YearItem[]>([]);
  readonly selectedYear = signal('');
  readonly maximum = computed(() => Math.max(...this.years().map((item) => item.total), 1));
  readonly selected = computed(() =>
    this.years().find((item) => item.year === this.selectedYear()) ?? this.years().at(-1),
  );
  readonly modalityLabels = computed(() => {
    const labels = new Set(this.years().flatMap((item) => item.modalities.map((modality) => modality.label)));
    return [...labels].sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data']) return;
    const items = Object.entries(this.data ?? {})
      .map(([year, rawModalities]) => {
        const normalized = new Map<string, number>();
        Object.entries(rawModalities ?? {}).forEach(([label, count]) => {
          const cleanLabel = label.trim();
          normalized.set(cleanLabel, (normalized.get(cleanLabel) ?? 0) + Number(count || 0));
        });
        const modalities = [...normalized.entries()]
          .map(([label, count]) => ({ label, count }))
          .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
        return { year, modalities, total: modalities.reduce((sum, item) => sum + item.count, 0) };
      })
      .sort((a, b) => Number(a.year) - Number(b.year));
    this.years.set(items);
    if (!items.some((item) => item.year === this.selectedYear())) {
      this.selectedYear.set(items.at(-1)?.year ?? '');
    }
  }

  selectYear(year: string): void {
    this.selectedYear.set(year);
  }

  barHeight(total: number): number {
    return Math.max((total / this.maximum()) * 100, 2);
  }

  modalityShare(count: number, total: number): number {
    return total ? count / total * 100 : 0;
  }

  modalityColor(label: string): string {
    const index = Math.max(this.modalityLabels().indexOf(label), 0);
    return `var(--pq-history-orange-${index % 12 + 1})`;
  }

  showYearLabel(index: number): boolean {
    const item = this.years()[index];
    return index === 0 || index === this.years().length - 1 || Number(item?.year) % 5 === 0;
  }
}
