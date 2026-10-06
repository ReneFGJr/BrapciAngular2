import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PqApplications } from './pq-applications.component';
import { CrossingDimension, CrossingScholar, LevelClassification, MISSING, classification, clean, crossingRows, historicalRecords, snapshot, validDates } from './pq-crossings-data';

@Component({
  selector: 'app-pq-crossings', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './pq-crossings.component.html', styleUrl: './pq-crossings.component.scss',
})
export class PqCrossingsComponent {
  private readonly activeRecords = signal<CrossingScholar[]>([]);
  private readonly historyRecords = signal<CrossingScholar[]>([]);
  private readonly regions = signal<Record<string, string>>({});
  @Input() set active(value: CrossingScholar[]) { this.activeRecords.set(value ?? []); }
  @Input() set history(value: PqApplications | undefined) { this.historyRecords.set(historicalRecords(value ?? {})); }
  @Input() set institutionRegions(value: Record<string, string>) { this.regions.set(value); }
  readonly dimension = signal<CrossingDimension>('genero');
  readonly period = signal('atual');
  readonly scheme = signal<LevelClassification>('todos');
  readonly presentation = signal<'absolutos' | 'percentuais'>('absolutos');
  readonly selectedLevels = signal<string[] | null>(null);
  readonly currentYear = Number(new Intl.DateTimeFormat('en', { timeZone: 'America/Sao_Paulo', year: 'numeric' }).format(new Date()));
  readonly source = 'https://www.gov.br/cnpq/pt-br/assuntos/comites-assessoramento/paginas-dos-cas/artes-ciencia-da-informacao-comunicacao-e-museologia-ac/criterios/criterios-para-avaliacao-de-bolsas-de-produtividade-nas-chamadas-de-2024-2025-e-2026';
  readonly periods = computed(() => {
    const years = new Set<number>();
    for (const record of this.historyRecords().filter(validDates)) {
      for (let year = Number(record.bs_start.slice(0, 4)); year <= Math.min(this.currentYear - 1, Number(record.bs_finish.slice(0, 4))); year++) {
        years.add(year);
      }
    }
    return [...years].sort((a, b) => b - a);
  });
  readonly records = computed(() => this.period() === 'atual' ? snapshot(this.activeRecords())
    : snapshot(this.historyRecords(), `${this.period()}-12-31`));
  readonly levels = computed(() => [...new Set(this.records().map((item) => {
    const level = clean(item.bs_nivel);
    return level === MISSING ? level : level.toUpperCase();
  }))].filter((level) => this.scheme() === 'todos' || classification(level) === this.scheme())
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true })));
  readonly visibleLevels = computed(() => this.levels().filter((level) => this.selectedLevels() === null || this.selectedLevels()!.includes(level)));
  readonly rows = computed(() => crossingRows(this.records(), this.visibleLevels(), (item) => this.category(item)));
  readonly total = computed(() => this.rows().reduce((sum, row) => sum + row.total, 0));
  readonly maximum = computed(() => Math.max(1, ...this.rows().flatMap((row) => row.cells.map((cell) => cell.count))));
  readonly missingCount = computed(() => this.records().filter((item) => this.visibleLevels().includes(clean(item.bs_nivel) === MISSING ? MISSING : clean(item.bs_nivel).toUpperCase()) &&
    (this.category(item).startsWith(MISSING) || clean(item.bs_nivel) === MISSING)).length);
  readonly invalidHistory = computed(() => this.historyRecords().filter((item) => !validDates(item)).length);
  readonly radarRings = [20, 40, 60, 80, 100];
  readonly highlighted = signal<{ category: string; level: string } | null>(null);
  readonly radarAxes = computed(() => this.rows().map((row, index) => ({
    ...row, end: this.radarPosition(index, 100), labelPosition: this.radarPosition(index, 118),
  })));
  readonly radarSeries = computed(() => this.visibleLevels().map((level) => {
    const points = this.rows().map((row, index) => {
      const cell = row.cells.find((item) => item.level === level)!;
      return { ...this.radarPosition(index, this.width(cell)), category: row.label, level,
        description: this.tooltip(row, cell) };
    });
    return { level, points, polygon: points.map((point) => `${point.x},${point.y}`).join(' ') };
  }));
  readonly radarDetail = computed(() => {
    const selected = this.highlighted();
    return this.radarSeries().flatMap((series) => series.points)
      .find((point) => point.category === selected?.category && point.level === selected?.level)?.description
      ?? 'Passe o cursor sobre um ponto ou use Tab para ver categoria, nível, quantidade e percentual.';
  });
  radarPosition(index: number, percentage: number): { x: number; y: number } {
    const angle = index * 2 * Math.PI / Math.max(this.rows().length, 1) - Math.PI / 2;
    const radius = 260 * percentage / 100;
    return { x: 500 + Math.cos(angle) * radius, y: 400 + Math.sin(angle) * radius };
  }
  axisLabel(label: string): string {
    return label.length > 25 ? label.slice(0, 22) + '…' : label;
  }
  ringLabel(value: number): string {
    return this.presentation() === 'percentuais' ? value + '%' : (this.maximum() * value / 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  }
  category(item: CrossingScholar): string {
    if (this.dimension() === 'genero') {
      const code = clean(item.bs_genero).toUpperCase();
      return code === 'F' ? 'Feminino' : code === 'M' ? 'Masculino' : `${MISSING} / indefinido`;
    }
    const institution = clean(item.BS_IES);
    if (this.dimension() === 'instituicao') return institution;
    const region = Object.entries(this.regions()).find(([key]) => key.toUpperCase() === institution.toUpperCase())?.[1];
    return region ?? `${MISSING} / instituição sem região mapeada`;
  }
  setPeriod(value: string): void { this.period.set(value); this.selectedLevels.set(null); }
  setScheme(value: LevelClassification): void { this.scheme.set(value); this.selectedLevels.set(null); }
  toggleLevel(level: string): void {
    const selected = this.visibleLevels();
    this.selectedLevels.set(selected.includes(level) ? selected.filter((item) => item !== level) : [...selected, level]);
  }
  color(level: string): string {
    const order = ['A', 'B', 'C', '1A', '1B', '1C', '1D', '2', '2A', '2B', '2C'];
    const palette = ['#1769aa', '#b34700', '#247a49', '#814bb0', '#ba315e', '#007d88', '#806000', '#445a83', '#72513b', '#775a9f', '#a13c36'];
    const index = order.indexOf(level);
    return index < 0 ? '#66717e' : palette[index];
  }
  width(cell: { count: number; percentage: number }): number {
    return this.presentation() === 'percentuais' ? cell.percentage : cell.count / this.maximum() * 100;
  }
  formatPercentage(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '%';
  }
  tooltip(row: { label: string; total: number }, cell: { level: string; count: number; percentage: number }): string {
    return `${row.label} · Nível ${cell.level}: ${cell.count} bolsista(s), ${cell.percentage.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%. Base: ${row.total} bolsista(s) desta categoria nos níveis selecionados.`;
  }
}
