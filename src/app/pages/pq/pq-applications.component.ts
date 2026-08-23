import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, computed, signal } from '@angular/core';

export interface PqApplicationRecord {
  id_bb: string;
  nome: string;
  nivel: string;
  ies: string;
  inicio: string;
  fim: string;
  tipo: string;
  dias_interrupcao?: number;
  bolsa_anterior?: { id_bb: string; nivel: string; inicio: string; fim: string };
}

export interface PqApplicationYear {
  novas: PqApplicationRecord[];
  reconcedidas: PqApplicationRecord[];
  novas_apos_interrupcao: PqApplicationRecord[];
}

export type PqApplications = Record<string, PqApplicationYear>;

interface ApplicationItem {
  year: string;
  novas: number;
  reconcedidas: number;
  novas_apos_interrupcao: number;
  total: number;
  records: PqApplicationRecord[];
}

@Component({
  selector: 'app-pq-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pq-applications.component.html',
  styleUrl: './pq-applications.component.scss',
})
export class PqApplicationsComponent implements OnChanges {
  @Input({ required: true }) data: PqApplications = {};
  readonly years = signal<ApplicationItem[]>([]);
  readonly selectedYear = signal('');
  readonly expandedYear = signal<string | null>(null);
  readonly maximum = computed(() => Math.max(...this.years().map((item) => item.total), 1));
  readonly yearsDescending = computed(() => [...this.years()].reverse());
  readonly selected = computed(() => this.years().find((item) => item.year === this.selectedYear()) ?? this.years().at(-1));
  readonly totals = computed(() => this.years().reduce((sum, item) => ({
    novas: sum.novas + item.novas,
    reconcedidas: sum.reconcedidas + item.reconcedidas,
    novas_apos_interrupcao: sum.novas_apos_interrupcao + item.novas_apos_interrupcao,
    total: sum.total + item.total,
  }), { novas: 0, reconcedidas: 0, novas_apos_interrupcao: 0, total: 0 }));

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data']) return;
    const items = Object.entries(this.data ?? {}).map(([year, value]) => {
      const novas = Array.isArray(value.novas) ? value.novas : [];
      const reconcedidas = Array.isArray(value.reconcedidas) ? value.reconcedidas : [];
      const interrupted = Array.isArray(value.novas_apos_interrupcao) ? value.novas_apos_interrupcao : [];
      const records = [...novas, ...reconcedidas, ...interrupted]
        .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));
      return { year, novas: novas.length, reconcedidas: reconcedidas.length,
        novas_apos_interrupcao: interrupted.length, total: records.length, records };
    }).sort((a, b) => Number(a.year) - Number(b.year));
    this.years.set(items);
    if (!items.some((item) => item.year === this.selectedYear())) this.selectedYear.set(items.at(-1)?.year ?? '');
  }

  selectYear(year: string): void { this.selectedYear.set(year); }
  toggleYear(year: string): void {
    this.expandedYear.update((current) => current === year ? null : year);
  }
  isExpanded(year: string): boolean { return this.expandedYear() === year; }
  typeLabel(type: string): string {
    const labels: Record<string, string> = { nova: 'Nova', reconcedida: 'Reconcedida', nova_apos_interrupcao: 'Nova após interrupção' };
    return labels[type] || type.replaceAll('_', ' ');
  }
  exportCsv(): void {
    const header = ['Ano', 'Pesquisador', 'ID Brapci', 'Tipo', 'Nível', 'Instituição', 'Início', 'Fim', 'Dias de interrupção'];
    const rows = this.yearsDescending().flatMap((year) => year.records.map((record) => [
      year.year, record.nome, record.id_bb, this.typeLabel(record.tipo), record.nivel,
      record.ies, record.inicio, record.fim, record.dias_interrupcao ?? '',
    ]));
    const csv = [header, ...rows].map((row) => row.map((value) => this.csvCell(value)).join(';')).join('\r\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'concessoes-bolsistas-pq.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  }
  private csvCell(value: string | number): string {
    return `"${String(value).replaceAll('"', '""')}"`;
  }
  barHeight(total: number): number { return Math.max(total / this.maximum() * 100, 2); }
  share(value: number, total: number): number { return total ? value / total * 100 : 0; }
  showYearLabel(index: number): boolean {
    const item = this.years()[index];
    return index === 0 || index === this.years().length - 1 || Number(item?.year) % 5 === 0;
  }
}
