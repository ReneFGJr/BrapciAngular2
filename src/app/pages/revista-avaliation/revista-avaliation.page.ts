import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BarChartComponent, BarChartPoint } from '../../components/bar-chart/bar-chart.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;
type AvaliationItem = { periodStart: string; periodEnd: string; name: string; evaluationArea: string; rdfId: string; title: string; stratum: string; numericValue: number | null };
type JournalAvaliationGroup = { title: string; rdfId: string; evaluations: AvaliationItem[] };
type AvaliationsResponse = { status?: string | number; message?: string; data?: unknown };

const COLORS: Record<string, string> = {
  A1: '#176b45', A2: '#2b8a5b', A3: '#53a66f', A4: '#86bd7b',
  B1: '#2f6eaa', B2: '#548bc0', B3: '#75a6d2', B4: '#9bbedd', B5: '#bdd3e8',
  C: '#8b95a1', Q1: '#176b45', Q2: '#4c9a63', Q3: '#d69b2d', Q4: '#bd5b45'
};

@Component({
  selector: 'app-revista-avaliation-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent, BarChartComponent],
  templateUrl: './revista-avaliation.page.html',
  styleUrl: './revista-avaliation.page.scss'
})
export class RevistaAvaliationPage {
  private readonly api = inject(BrapciApiService);
  private readonly pageSize = 100;
  readonly loading = signal(true);
  readonly error = signal('');
  readonly items = signal<AvaliationItem[]>([]);
  readonly activeTab = signal('overview');
  readonly areaFilter = signal('ALL');
  readonly periodFilter = signal('ALL');
  readonly stratumFilter = signal('ALL');
  readonly searchTerm = signal('');
  readonly visibleLimit = signal(this.pageSize);

  readonly evaluationNames = computed(() => [...new Set(this.items().map(i => i.name))].sort((a, b) => a.localeCompare(b, 'pt-BR')));
  readonly selectedItems = computed(() => this.activeTab() === 'overview' ? this.items() : this.items().filter(i => i.name === this.activeTab()));
  readonly areas = computed(() => [...new Set(this.selectedItems().map(i => i.evaluationArea))].sort((a, b) => a.localeCompare(b, 'pt-BR')));
  readonly periods = computed(() => [...new Set(this.selectedItems().map(i => this.periodLabel(i)))].sort((a, b) => this.periodStart(b) - this.periodStart(a)));
  readonly strata = computed(() => [...new Set(this.selectedItems().map(i => i.stratum))].sort((a, b) => this.stratumOrder(a) - this.stratumOrder(b) || a.localeCompare(b, 'pt-BR')));
  readonly filteredItems = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase('pt-BR');
    return this.selectedItems()
      .filter(i => this.areaFilter() === 'ALL' || i.evaluationArea === this.areaFilter())
      .filter(i => this.periodFilter() === 'ALL' || this.periodLabel(i) === this.periodFilter())
      .filter(i => this.stratumFilter() === 'ALL' || i.stratum === this.stratumFilter())
      .filter(i => !term || `${i.title} ${i.stratum}`.toLocaleLowerCase('pt-BR').includes(term))
      .sort((a, b) => this.year(b.periodStart) - this.year(a.periodStart) || a.title.localeCompare(b.title, 'pt-BR'));
  });
  readonly groupedItems = computed<JournalAvaliationGroup[]>(() => {
    const groups = new Map<string, JournalAvaliationGroup>();
    for (const item of this.filteredItems()) {
      const key = item.title.toLocaleLowerCase('pt-BR');
      const group = groups.get(key) ?? { title: item.title, rdfId: item.rdfId, evaluations: [] };
      group.evaluations.push(item);
      if (!group.rdfId && item.rdfId) group.rdfId = item.rdfId;
      groups.set(key, group);
    }
    return [...groups.values()]
      .map(group => ({
        ...group,
        evaluations: group.evaluations.sort((a, b) =>
          this.year(a.periodStart) - this.year(b.periodStart)
          || this.year(a.periodEnd) - this.year(b.periodEnd)
          || this.stratumOrder(a.stratum) - this.stratumOrder(b.stratum)
        )
      }))
      .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  });
  readonly visibleGroups = computed(() => this.groupedItems().slice(0, this.visibleLimit()));
  readonly summary = computed(() => ({
    records: this.items().length,
    journals: new Set(this.items().map(i => i.rdfId || i.title)).size,
    systems: this.evaluationNames().length,
    periods: new Set(this.items().map(i => this.periodLabel(i))).size
  }));
  readonly sourceChart = computed<BarChartPoint[]>(() => this.evaluationNames().map(name => ({
    label: name,
    segments: [{ key: name, label: name, value: new Set(this.items().filter(i => i.name === name).map(i => i.rdfId || i.title)).size, color: name.toLowerCase().includes('scopus') ? '#e17b27' : '#356f9f' }]
  })));
  readonly strataChartsByArea = computed(() => {
    const selectedArea = this.areaFilter();
    const selectedPeriod = this.periodFilter();
    const selectedStratum = this.stratumFilter();
    const source = this.selectedItems()
      .filter(item => selectedArea === 'ALL' || item.evaluationArea === selectedArea)
      .filter(item => selectedPeriod === 'ALL' || this.periodLabel(item) === selectedPeriod)
      .filter(item => selectedStratum === 'ALL' || item.stratum === selectedStratum);
    const areas = new Map<string, AvaliationItem[]>();

    for (const item of source) {
      const items = areas.get(item.evaluationArea) ?? [];
      items.push(item);
      areas.set(item.evaluationArea, items);
    }

    return [...areas.entries()]
      .sort(([a], [b]) => a.localeCompare(b, 'pt-BR'))
      .map(([area, items]) => ({ area, points: this.buildYearChart(items) }));
  });

  constructor() { this.loadAvaliations(); }
  setTab(tab: string): void { this.activeTab.set(tab); this.resetFilters(); }
  setArea(value: string): void { this.areaFilter.set(value); this.visibleLimit.set(this.pageSize); }
  setPeriod(value: string): void { this.periodFilter.set(value); this.visibleLimit.set(this.pageSize); }
  setStratum(value: string): void { this.stratumFilter.set(value); this.visibleLimit.set(this.pageSize); }
  setSearch(value: string): void { this.searchTerm.set(value); this.visibleLimit.set(this.pageSize); }
  showMore(): void { this.visibleLimit.update(value => value + this.pageSize); }
  retry(): void { this.loadAvaliations(); }
  periodLabel(item: Pick<AvaliationItem, 'periodStart' | 'periodEnd'>): string { return item.periodStart === item.periodEnd ? item.periodStart : `${item.periodStart}–${item.periodEnd}`; }

  private loadAvaliations(): void {
    this.loading.set(true); this.error.set('');
    this.api.get<AvaliationsResponse>('brapci/avaliations').subscribe({
      next: response => { this.items.set(this.flatten(response?.data)); this.loading.set(false); },
      error: () => { this.items.set([]); this.error.set('Não foi possível carregar as avaliações de periódicos. Tente novamente mais tarde.'); this.loading.set(false); }
    });
  }
  private flatten(data: unknown): AvaliationItem[] {
    const result: AvaliationItem[] = [];
    const visit = (value: unknown): void => {
      if (Array.isArray(value)) { value.forEach(visit); return; }
      if (!value || typeof value !== 'object') return;
      const record = value as JsonRecord;
      if ('name' in record && 'stratum' in record && 'title' in record) { const item = this.toItem(record); if (item) result.push(item); return; }
      Object.values(record).forEach(visit);
    };
    visit(data); return result;
  }
  private toItem(r: JsonRecord): AvaliationItem | null {
    const name = this.text(r['name']); const title = this.text(r['title']);
    if (name === '-' || title === '-') return null;
    const number = Number.parseFloat(String(r['numeric_value'] ?? ''));
    return { periodStart: this.text(r['period_start']), periodEnd: this.text(r['period_end']), name, evaluationArea: this.text(r['evaluation_area']), rdfId: this.text(r['rdf_id']) === '-' ? '' : this.text(r['rdf_id']), title, stratum: this.text(r['stratum']), numericValue: Number.isFinite(number) ? number : null };
  }
  private resetFilters(): void { this.areaFilter.set('ALL'); this.periodFilter.set('ALL'); this.stratumFilter.set('ALL'); this.searchTerm.set(''); this.visibleLimit.set(this.pageSize); }
  private buildYearChart(items: AvaliationItem[]): BarChartPoint[] {
    const years = new Map<string, Map<string, number>>();
    for (const item of items) {
      const year = item.periodEnd !== '-' ? item.periodEnd : item.periodStart;
      const strata = years.get(year) ?? new Map<string, number>();
      strata.set(item.stratum, (strata.get(item.stratum) ?? 0) + 1);
      years.set(year, strata);
    }
    return [...years.entries()]
      .sort(([a], [b]) => this.year(a) - this.year(b))
      .map(([year, strata]) => ({
        label: year,
        segments: [...strata.entries()]
          .sort(([a], [b]) => this.stratumOrder(a) - this.stratumOrder(b))
          .map(([stratum, value]) => ({ key: stratum, label: stratum, value, color: COLORS[stratum] ?? '#6f7d8c' }))
      }));
  }
  private text(value: unknown): string { return typeof value === 'string' && value.trim() ? value.trim() : typeof value === 'number' && Number.isFinite(value) ? String(value) : '-'; }
  private year(value: string): number { const year = Number.parseInt(value, 10); return Number.isFinite(year) ? year : 0; }
  private periodStart(value: string): number { return this.year(value.split(/[–-]/)[0]); }
  private stratumOrder(value: string): number { const order = ['A1','A2','A3','A4','B1','B2','B3','B4','B5','C','Q1','Q2','Q3','Q4']; const index = order.indexOf(value); return index < 0 ? order.length : index; }
}
