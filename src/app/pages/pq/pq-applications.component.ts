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
  modalidade?: string;
  mod_sigla?: string;
  mod?: string;
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
  encerradas: number;
  records: PqApplicationRecord[];
}

interface ActiveScholarshipItem {
  year: string;
  total: number;
  modalities: Array<{ label: string; total: number }>;
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
  readonly activeScholarships = computed<ActiveScholarshipItem[]>(() => {
    const uniqueRecords = new Map<string, PqApplicationRecord>();
    for (const item of this.years()) {
      for (const record of item.records) {
        const key = `${record.id_bb}|${record.inicio}|${record.fim}`;
        uniqueRecords.set(key, record);
      }
    }

    return this.years().map(({ year }) => {
      const selectedYear = Number(year);
      const referenceDate = this.referenceDateForYear(selectedYear);
      const activeContracts = [...uniqueRecords.values()].filter((record) => {
        const startDate = this.dateValue(record.inicio);
        const finishDate = this.dateValue(record.fim);
        return startDate !== null && finishDate !== null && startDate <= referenceDate && finishDate >= referenceDate;
      });
      const activeByScholar = new Map<string, PqApplicationRecord>();
      for (const record of activeContracts) {
        const scholarKey = String(record.id_bb || record.nome).trim();
        const current = activeByScholar.get(scholarKey);
        if (!current || String(record.inicio) > String(current.inicio)) {
          activeByScholar.set(scholarKey, record);
        }
      }
      const activeRecords = [...activeByScholar.values()];
      const counts = new Map<string, number>();
      for (const record of activeRecords) {
        const modality = this.modalityOf(record);
        counts.set(modality, (counts.get(modality) ?? 0) + 1);
      }

      return {
        year,
        total: activeRecords.length,
        modalities: [...counts.entries()]
          .map(([label, total]) => ({ label, total }))
          .sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'))
      };
    });
  });
  readonly activeModalities = computed(() =>
    [...new Set(this.activeScholarships().flatMap((item) => item.modalities.map((modality) => modality.label)))]
      .sort((a, b) => a.localeCompare(b, 'pt-BR'))
  );
  readonly activeMaximum = computed(() => Math.max(...this.activeScholarships().map((item) => item.total), 1));
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
        novas_apos_interrupcao: interrupted.length, total: records.length, encerradas: 0, records };
    }).sort((a, b) => Number(a.year) - Number(b.year));

    const uniqueRecords = new Map<string, PqApplicationRecord>();
    for (const item of items) {
      for (const record of item.records) {
        uniqueRecords.set(`${record.id_bb}|${record.inicio}|${record.fim}`, record);
      }
    }
    for (const item of items) {
      item.encerradas = [...uniqueRecords.values()]
        .filter((record) => this.yearFromDate(record.fim) === Number(item.year)).length;
    }
    this.years.set(items);
    if (!items.some((item) => item.year === this.selectedYear())) this.selectedYear.set(items.at(-1)?.year ?? '');
  }

  selectYear(year: string): void { this.selectedYear.set(year); }
  toggleYear(year: string): void {
    this.expandedYear.update((current) => current === year ? null : year);
  }
  isExpanded(year: string): boolean { return this.expandedYear() === year; }
  difference(item: ApplicationItem): number {
    return item.total - item.encerradas;
  }
  differenceLabel(item: ApplicationItem): string {
    const value = this.difference(item);
    if (value > 0) return `Aumento de ${value}`;
    if (value < 0) return `Diminuição de ${Math.abs(value)}`;
    return 'Estabilidade';
  }
  typeLabel(type: string): string {
    const labels: Record<string, string> = { nova: 'Nova', reconcedida: 'Reconcedida', nova_apos_interrupcao: 'Nova após interrupção' };
    return labels[type] || type.replaceAll('_', ' ');
  }
  exportCsv(): void {
    const header = ['Ano', 'Bolsas encerradas', 'Pesquisador', 'ID Brapci', 'Tipo', 'Nível', 'Instituição', 'Início', 'Fim', 'Dias de interrupção'];
    const rows = this.yearsDescending().flatMap((year) => year.records.map((record) => [
      year.year, year.encerradas, record.nome, record.id_bb, this.typeLabel(record.tipo), record.nivel,
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
  activeBarHeight(total: number): number { return total === 0 ? 0 : Math.max(total / this.activeMaximum() * 100, 2); }
  modalityColor(modality: string): string {
    const normalized = modality.trim().toUpperCase();
    const redPalette: Record<string, string> = {
      'PQ A': '#9f2430',
      'PQ B': '#c43d45',
      'PQ C': '#e06464'
    };
    if (redPalette[normalized]) {
      return redPalette[normalized];
    }

    const palette = ['#c45112', '#df6f1d', '#ef8c32', '#f5a552', '#f8bd76', '#ffd09b'];
    const index = this.activeModalities().indexOf(modality);
    return palette[(index < 0 ? 0 : index) % palette.length];
  }
  share(value: number, total: number): number { return total ? value / total * 100 : 0; }
  showYearLabel(index: number): boolean {
    const item = this.years()[index];
    return index === 0 || index === this.years().length - 1 || Number(item?.year) % 5 === 0;
  }

  private yearFromDate(value: string): number | null {
    const match = String(value ?? '').match(/^(\d{4})/);
    return match ? Number(match[1]) : null;
  }
  private referenceDateForYear(year: number): number {
    const today = new Date();
    if (year === today.getFullYear()) {
      return Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    }
    return Date.UTC(year, 11, 31);
  }
  private dateValue(value: string): number | null {
    const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return null;
    return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  private modalityOf(record: PqApplicationRecord): string {
    const modality = String(record.modalidade ?? record.mod_sigla ?? record.mod ?? 'PQ').trim() || 'Não informada';
    const level = String(record.nivel ?? '').trim();
    return [modality, level].filter(Boolean).join(' ');
  }
}
