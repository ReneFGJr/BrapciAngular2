import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { geoIdentity, geoPath } from 'd3';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { PqActiveByYearComponent, PqActivesByYear } from './pq-active-by-year.component';
import { PqApplications, PqApplicationsComponent } from './pq-applications.component';

type PqTab = 'resumo' | 'bolsistas' | 'instituicoes' | 'regioes' | 'mapa' | 'concessoes';
interface PqScholar { id_bb: string; bs_nome: string; bs_nivel: string; bs_start: string; bs_finish: string; BS_IES: string; bs_lattes: string; bs_rdf_id: string; bd_brapci: string; mod_sigla: string; mod_descricao: string; }
interface PqResponse { status: string; message: string; actives: number; institutions: number; actives_by_year?: PqActivesByYear; applications?: PqApplications; data: PqScholar[]; }
interface CountItem { label: string; count: number; percentage: number; }
interface StateCount extends CountItem { code: string; ibgeCode: string; }
interface MapShape extends StateCount { name: string; path: string; x: number; y: number; intensity: number; }

const INSTITUTION_REGION: Record<string, string> = {
  CNEN: 'Sudeste', IBICT: 'Sudeste', UEL: 'Sul', UFC: 'Nordeste', UFAL: 'Nordeste',
  UFBA: 'Nordeste', UFCA: 'Nordeste', UFES: 'Sudeste', UFG: 'Centro-Oeste', UFMG: 'Sudeste',
  UFPA: 'Norte', UFPB: 'Nordeste', UFPE: 'Nordeste', UFF: 'Sudeste', UFRGS: 'Sul',
  UFRJ: 'Sudeste', UFS: 'Nordeste', UFSC: 'Sul', UFSCAR: 'Sudeste', UnB: 'Centro-Oeste',
  UNESP: 'Sudeste', UNIRIO: 'Sudeste', USP: 'Sudeste',
};

const INSTITUTION_STATE: Record<string, string> = {
  CNEN: 'RJ', IBICT: 'RJ', UEL: 'PR', UFC: 'CE', UFAL: 'AL', UFBA: 'BA', UFCA: 'CE',
  UFES: 'ES', UFG: 'GO', UFMG: 'MG', UFPA: 'PA', UFPB: 'PB', UFPE: 'PE', UFF: 'RJ',
  UFRGS: 'RS', UFRJ: 'RJ', UFS: 'SE', UFSC: 'SC', UFSCAR: 'SP', UnB: 'DF', UNESP: 'SP',
  UNIRIO: 'RJ', USP: 'SP',
};

const STATE_INFO: Record<string, { name: string; ibgeCode: string }> = {
  AC: { name: 'Acre', ibgeCode: '12' }, AL: { name: 'Alagoas', ibgeCode: '27' },
  AP: { name: 'Amapá', ibgeCode: '16' }, AM: { name: 'Amazonas', ibgeCode: '13' },
  BA: { name: 'Bahia', ibgeCode: '29' }, CE: { name: 'Ceará', ibgeCode: '23' },
  DF: { name: 'Distrito Federal', ibgeCode: '53' }, ES: { name: 'Espírito Santo', ibgeCode: '32' },
  GO: { name: 'Goiás', ibgeCode: '52' }, MA: { name: 'Maranhão', ibgeCode: '21' },
  MT: { name: 'Mato Grosso', ibgeCode: '51' }, MS: { name: 'Mato Grosso do Sul', ibgeCode: '50' },
  MG: { name: 'Minas Gerais', ibgeCode: '31' }, PA: { name: 'Pará', ibgeCode: '15' },
  PB: { name: 'Paraíba', ibgeCode: '25' }, PR: { name: 'Paraná', ibgeCode: '41' },
  PE: { name: 'Pernambuco', ibgeCode: '26' }, PI: { name: 'Piauí', ibgeCode: '22' },
  RJ: { name: 'Rio de Janeiro', ibgeCode: '33' }, RN: { name: 'Rio Grande do Norte', ibgeCode: '24' },
  RS: { name: 'Rio Grande do Sul', ibgeCode: '43' }, RO: { name: 'Rondônia', ibgeCode: '11' },
  RR: { name: 'Roraima', ibgeCode: '14' }, SC: { name: 'Santa Catarina', ibgeCode: '42' },
  SP: { name: 'São Paulo', ibgeCode: '35' }, SE: { name: 'Sergipe', ibgeCode: '28' },
  TO: { name: 'Tocantins', ibgeCode: '17' },
};

@Component({
  selector: 'app-pq-brazil-map', standalone: true, imports: [CommonModule],
  template: `
    @if (loading()) {
      <div class="map-status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando mapa…</div>
    } @else if (error()) {
      <div class="map-status text-danger">Não foi possível carregar a malha do mapa.</div>
    } @else {
      <svg class="brazil-map" viewBox="0 0 620 570" role="img" aria-labelledby="map-title map-desc">
        <title id="map-title">Distribuição de bolsistas por estado</title>
        <desc id="map-desc">Mapa coroplético do Brasil. Estados mais escuros possuem mais bolsistas.</desc>
        @for (shape of shapes(); track shape.code) {
          <path [attr.d]="shape.path" [attr.class]="'state-shape intensity-' + shape.intensity">
            <title>{{ shape.name }}: {{ shape.count }} bolsista(s)</title>
          </path>
          @if (shape.count > 0) {<text [attr.x]="shape.x" [attr.y]="shape.y" class="state-label">{{ shape.code }}</text>}
        }
      </svg>
    }
  `,
  styles: [`
    :host { display: block; }
    .map-status { display:flex; min-height:420px; align-items:center; justify-content:center; gap:.5rem; color:var(--theme-muted); }
    .brazil-map { display:block; width:100%; max-height:570px; }
    .state-shape { stroke:var(--theme-card-bg); stroke-width:1.5; vector-effect:non-scaling-stroke; transition:fill .2s ease; }
    .intensity-0 { fill:var(--theme-sand); }
    .intensity-1 { fill:color-mix(in srgb, var(--pq-map-color, #9a654d) 18%, var(--theme-sand)); }
    .intensity-2 { fill:color-mix(in srgb, var(--pq-map-color, #9a654d) 38%, var(--theme-sand)); }
    .intensity-3 { fill:color-mix(in srgb, var(--pq-map-color, #9a654d) 58%, var(--theme-sand)); }
    .intensity-4 { fill:color-mix(in srgb, var(--pq-map-color, #9a654d) 78%, var(--theme-sand)); }
    .intensity-5 { fill:var(--pq-map-color, #9a654d); }
    .state-shape:hover { filter:brightness(.92); stroke:var(--theme-ink); }
    .state-label { fill:#fff; font:700 12px 'Raleway',sans-serif; text-anchor:middle; pointer-events:none; paint-order:stroke; stroke:rgb(0 0 0 / 28%); stroke-width:2px; }
  `],
})
export class PqBrazilMapComponent implements OnInit {
  private readonly http = inject(HttpClient);
  readonly shapes = signal<MapShape[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  private stateData: StateCount[] = [];
  @Input() set data(value: StateCount[]) { this.stateData = value || []; if (!this.loading()) this.buildShapes(this.geoJson); }
  private geoJson: any = null;
  ngOnInit(): void {
    this.http.get<any>('assets/data/brasil-estados.geojson').subscribe({
      next: (geoJson) => { this.geoJson = geoJson; this.buildShapes(geoJson); this.loading.set(false); },
      error: () => { this.error.set(true); this.loading.set(false); },
    });
  }
  private buildShapes(geoJson: any): void {
    if (!geoJson?.features) return;
    // A malha simplificada do IBGE usa anéis com orientação incompatível com
    // a interpretação esférica do d3-geo. A projeção cartesiana preserva as
    // coordenadas geográficas e evita que o exterior dos estados seja pintado.
    const projection = geoIdentity().reflectY(true).fitExtent([[18, 18], [602, 552]], geoJson);
    const pathGenerator = geoPath(projection);
    const max = Math.max(...this.stateData.map((item) => item.count), 1);
    const byIbge = new Map(this.stateData.map((item) => [item.ibgeCode, item]));
    this.shapes.set(geoJson.features.map((feature: any) => {
      const state = byIbge.get(String(feature.properties?.codarea)) || { code: '', ibgeCode: '', label: '', count: 0, percentage: 0 };
      const [x, y] = pathGenerator.centroid(feature);
      const ratio = state.count / max;
      return { ...state, name: state.label, path: pathGenerator(feature) || '', x, y,
        intensity: state.count === 0 ? 0 : ratio <= .15 ? 1 : ratio <= .3 ? 2 : ratio <= .5 ? 3 : ratio <= .75 ? 4 : 5 };
    }));
  }
}

@Component({
  selector: 'app-pq-page', standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, BreadcrumbsComponent, PqBrazilMapComponent, PqActiveByYearComponent, PqApplicationsComponent],
  templateUrl: './pq.page.html', styleUrl: './pq.page.scss',
})
export class PqPage implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://cip.brapci.inf.br/api/pq';
  readonly activeTab = signal<PqTab>('resumo');
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly response = signal<PqResponse | null>(null);
  readonly scholars = signal<PqScholar[]>([]);
  readonly searchTerm = signal('');
  readonly levelFilter = signal('todos');
  readonly levels = computed(() => [...new Set(this.scholars().map((item) => this.level(item)))].sort(this.sortLevel));
  readonly filteredScholars = computed(() => {
    const term = this.normalize(this.searchTerm());
    const level = this.levelFilter();
    return this.scholars()
      .filter((item) => (level === 'todos' || this.level(item) === level) &&
        (!term || this.normalize(`${item.bs_nome} ${item.BS_IES} ${this.level(item)}`).includes(term)))
      .sort((a, b) => a.bs_nome.localeCompare(b.bs_nome, 'pt-BR', { sensitivity: 'base' }));
  });
  readonly levelCounts = computed(() => this.countBy(this.scholars(), (item) => this.level(item), this.sortLevel));
  readonly institutionCounts = computed(() => this.countBy(this.scholars(), (item) => item.BS_IES));
  readonly regionCounts = computed(() => this.countBy(this.scholars(), (item) => this.regionFor(item.BS_IES)));
  readonly stateCounts = computed<StateCount[]>(() => {
    const counts = new Map<string, number>();
    this.scholars().forEach((item) => {
      const code = INSTITUTION_STATE[item.BS_IES];
      if (code) counts.set(code, (counts.get(code) || 0) + 1);
    });
    const total = this.scholars().length || 1;
    return Object.entries(STATE_INFO).map(([code, info]) => ({ code, ibgeCode: info.ibgeCode, label: info.name, count: counts.get(code) || 0, percentage: (counts.get(code) || 0) / total * 100 }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'pt-BR'));
  });
  readonly maxInstitutionCount = computed(() => this.institutionCounts()[0]?.count || 1);
  readonly maxRegionCount = computed(() => this.regionCounts()[0]?.count || 1);

  ngOnInit(): void { this.loadData(); }
  setTab(tab: PqTab): void { this.activeTab.set(tab); }
  updateSearch(value: string): void { this.searchTerm.set(value); }
  updateLevel(value: string): void { this.levelFilter.set(value); }
  loadData(): void {
    this.loading.set(true); this.error.set(null);
    this.http.get<PqResponse>(this.endpoint).subscribe({
      next: (response) => { this.response.set(response); this.scholars.set(Array.isArray(response.data) ? response.data : []); this.loading.set(false); },
      error: () => { this.error.set('Não foi possível carregar os dados dos bolsistas. Tente novamente.'); this.loading.set(false); },
    });
  }
  level(item: PqScholar): string { return item.bs_nivel?.trim() || 'Não informado'; }
  regionFor(institution: string): string { return INSTITUTION_REGION[institution] || 'Não informada'; }
  lattesUrl(item: PqScholar): string | null { return item.bs_lattes && item.bs_lattes !== 'NI' ? `https://lattes.cnpq.br/${item.bs_lattes}` : null; }
  brapciUrl(item: PqScholar): string | null { return item.bs_rdf_id && item.bs_rdf_id !== '0' ? `/v/${item.bs_rdf_id}` : null; }
  trackScholar(_: number, item: PqScholar): string { return item.id_bb; }
  exportStateCsv(): void {
    const populatedStates = this.stateCounts().filter((state) => state.count > 0);
    const rows = populatedStates.map((state, index) => [
      index + 1,
      state.code,
      state.label,
      state.count,
      state.percentage.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    ]);
    const csv = [['Posição', 'UF', 'Estado', 'Bolsistas', 'Percentual do total'], ...rows]
      .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(';'))
      .join('\r\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'bolsistas-pq-por-estado.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  }
  private countBy(items: PqScholar[], label: (item: PqScholar) => string, sortLabels?: (a: string, b: string) => number): CountItem[] {
    const counts = new Map<string, number>();
    items.forEach((item) => counts.set(label(item), (counts.get(label(item)) || 0) + 1));
    const total = items.length || 1;
    return [...counts.entries()].map(([itemLabel, count]) => ({ label: itemLabel, count, percentage: count / total * 100 }))
      .sort((a, b) => sortLabels ? sortLabels(a.label, b.label) : b.count - a.count || a.label.localeCompare(b.label));
  }
  private readonly sortLevel = (a: string, b: string): number => {
    const order = ['A', 'B', 'C', '1A', '1B', '1C', '1D', '2'];
    return (order.indexOf(a) < 0 ? 99 : order.indexOf(a)) - (order.indexOf(b) < 0 ? 99 : order.indexOf(b));
  };
  private normalize(value: string): string { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }
}
