import { Component, computed, input } from '@angular/core';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-publication-statistics',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './publication-statistics.component.html',
  styleUrl: './publication-statistics.component.scss',
})
export class PublicationStatisticsComponent {
  readonly data = input.required<unknown>();
  readonly view = input.required<'authors' | 'years'>();
  readonly sourceId = input<string>('publicacao');
  readonly showEmpty = input(true);

  readonly authorRows = computed(() =>
    this.countEntries('authors').sort((a, b) =>
      b.total - a.total || a.label.localeCompare(b.label, 'pt-BR'),
    ),
  );

  readonly yearPoints = computed<BarChartPoint[]>(() =>
    this.countEntries('years')
      .filter((entry) => /^\d{4}$/.test(entry.label))
      .sort((a, b) => Number(a.label) - Number(b.label))
      .map((entry) => ({
        label: entry.label,
        segments: [{ key: 'works', label: 'Trabalhos', value: entry.total, color: '#385a7c' }],
      })),
  );

  private countEntries(key: 'authors' | 'years'): { label: string; total: number }[] {
    const value = (this.data() as Record<string, unknown> | null)?.[key];
    if (!value || typeof value !== 'object' || Array.isArray(value)) return [];
    return Object.entries(value).flatMap(([label, count]) =>
      label.trim() && typeof count === 'number' && Number.isSafeInteger(count) && count >= 0
        ? [{ label, total: count }]
        : [],
    );
  }

  exportAuthorsCsv(): void {
    if (typeof document === 'undefined' || !this.authorRows().length) return;
    const quote = (value: string): string => {
      const safe = /^[=+\-@\t\r\n]/.test(value) ? "'" + value : value;
      return '"' + safe.replace(/"/g, '""') + '"';
    };
    const rows = [
      ['Autor', 'Total de trabalhos'],
      ...this.authorRows().map((author) => [author.label, String(author.total)]),
    ];
    const csv = '\uFEFF' + rows.map((row) => row.map(quote).join(';')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'autores-' + this.sourceId().replace(/[^a-zA-Z0-9_-]/g, '_') + '.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
