import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { BasketService } from '../../core/services/basket.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { AreaEventsComponent } from '../area-events/area-events.component';
import { AreaNewsComponent } from '../area-news/area-news.component';
import { AreaStatisticsComponent } from '../area-statistics/area-statistics.component';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-search-articles',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    SearchResultComponent,
  ],
  templateUrl: './search-articles.component.html',
  styleUrl: './search-articles.component.scss',
})
export class SearchArticlesComponent {
  public loadingImg: string = '/assets/img/loading.svg';
  private readonly basketService = inject(BasketService);
  private readonly brapciApiService = inject(BrapciApiService);
  readonly areaNewsComponent = AreaNewsComponent;
  readonly areaEventsComponent = AreaEventsComponent;
  readonly areaStatisticsComponent = AreaStatisticsComponent;
  readonly showJsonPanel = signal(false);
  showFilters = false;
  search = false;

  filtersForm: FormGroup;
  yearsStart: number[] = [];
  yearsEnd: number[] = [];
  publicationTypes = [
    { label: 'Revistas Brasileiras', value: 'JA' },
    { label: 'Revistas estrangeiras', value: 'JE' },
    { label: 'Anais de eventos', value: 'EV' },
    { label: 'Livros e capítulo', value: 'BK' },
  ];
  searchFields = [
    { label: 'Título', value: 'TI' },
    { label: 'Resumo', value: 'AB' },
    { label: 'Palavras-chave', value: 'KW' },
    { label: 'Autor', value: 'AU' },
    { label: 'Todos os campos', value: 'FL' },
  ];

  constructor(private router: Router) {
    this.initYears();
    // Marca todos os tipos de publicação por padrão
    const allTypes = this.publicationTypes.map((t) => t.value);
    this.filtersForm = new FormGroup({
      year_start: new FormControl(this.yearsStart[0]),
      year_end: new FormControl(this.yearsEnd[0]),
      collection: new FormControl(allTypes),
      fields: new FormControl('FL'),
    });
  }

  initYears() {
    const currentYear = new Date().getFullYear();
    for (let y = 1962; y <= currentYear + 1; y++) {
      this.yearsStart.push(y);
    }
    for (let y = currentYear + 1; y >= 1962; y--) {
      this.yearsEnd.push(y);
    }
  }

  onCollectionChange(event: any) {
    const value = event.target.value;
    const checked = event.target.checked;
    const collection = this.filtersForm.value.collection || [];
    if (checked) {
      if (!collection.includes(value)) {
        this.filtersForm.patchValue({ collection: [...collection, value] });
      }
    } else {
      this.filtersForm.patchValue({ collection: collection.filter((v: string) => v !== value) });
    }
  }

  readonly loading = signal(false);
  readonly apiResults = signal<unknown[]>([]);
  readonly filterSources = signal<unknown[]>([]);
  readonly filterAuthors = signal<unknown[]>([]);
  readonly filterKeywords = signal<unknown[]>([]);
  readonly rawSearchResponse = signal<unknown>(null);
  readonly query = signal('"Indexação Automática"');
  readonly hasResults = computed(() => this.apiResults().length > 0);
  readonly searchResponseJson = computed(() => {
    const response = this.rawSearchResponse();

    if (response === null || response === undefined) {
      return '';
    }

    try {
      return JSON.stringify(response, null, 2);
    } catch {
      return '[Nao foi possivel serializar a resposta da consulta]';
    }
  });

  get works(): any[] {
    const response = this.rawSearchResponse();
    if (response && typeof response === 'object' && 'works' in response) {
      return this.asArray((response as any).works);
    }
    return [];
  }

  get markedCount(): number {
    try {
      const marked = localStorage.getItem('marked');
      return !!marked ? JSON.parse(marked).length : 0;
    } catch {
      return 0;
    }
  }

  get hasMarked(): boolean {
    // Acesso direto ao localStorage para simplificar, pode ser adaptado para usar o serviço
    try {
      const marked = localStorage.getItem('marked');
      return !!marked && JSON.parse(marked).length > 0;
    } catch {
      return false;
    }
  }

  clearMarked() {
    if (window.confirm('Deseja realmente desmarcar todos os trabalhos selecionados?')) {
      // Use o serviço basket diretamente para garantir atualização reativa
      window.localStorage.setItem('marked', '[]');
      this.basketService.changed.emit();
    }
  }

  showResultsPanel(): void {
    this.showJsonPanel.set(false);
  }

  showJsonResponsePanel(): void {
    this.showJsonPanel.set(true);
  }

  searchInBrapci(): void {
    const term = this.query().trim();

    // Monta o array de filtros
    const filters = [
      { name: 'year_start', value: this.filtersForm.value.year_start },
      { name: 'year_end', value: this.filtersForm.value.year_end },
      { name: 'collection', value: this.filtersForm.value.collection },
      { name: 'fields', value: this.filtersForm.value.fields },
    ];

    if (!term) {
      this.search = false;
      this.showJsonPanel.set(false);
      this.apiResults.set([]);
      this.filterSources.set([]);
      this.filterAuthors.set([]);
      this.filterKeywords.set([]);
      this.rawSearchResponse.set(null);
      return;
    }

    this.search = true;
    this.loading.set(true);

    this.brapciApiService.search<unknown>(term, filters).subscribe({
      next: (response) => {
        const normalizedResults = this.normalizeApiResponse(response);
        const filters = this.normalizeFilters(response);
        this.loading.set(false);
        this.rawSearchResponse.set(response);
        this.apiResults.set(normalizedResults);
        this.filterSources.set(filters.sources);
        this.filterAuthors.set(filters.authors);
        this.filterKeywords.set(filters.keywords);

        if (!normalizedResults.length) {
          console.warn('[search-articles] Nenhum resultado exibivel apos normalizacao', response);
        }
      },
      error: (error) => {
        console.error('[search-articles] Erro na consulta da API', error);
        this.loading.set(false);
        this.apiResults.set([]);
        this.filterSources.set([]);
        this.filterAuthors.set([]);
        this.filterKeywords.set([]);
        this.rawSearchResponse.set({ error: 'Erro ao consultar a API' });
      },
    });
  }

  private normalizeFilters(response: unknown): {
    sources: unknown[];
    authors: unknown[];
    keywords: unknown[];
  } {
    if (!response || typeof response !== 'object') {
      return { sources: [], authors: [], keywords: [] };
    }

    const root = response as Record<string, unknown>;
    if (!root['filters'] || typeof root['filters'] !== 'object') {
      return { sources: [], authors: [], keywords: [] };
    }

    const filters = root['filters'] as Record<string, unknown>;

    return {
      sources: this.asArray(filters['sources']),
      authors: this.asArray(filters['authors']),
      keywords: this.asArray(filters['keywords']),
    };
  }

  public asArray(value: unknown): any[] {
    if (Array.isArray(value)) {
      return value;
    }
    if (value && typeof value === 'object') {
      return Object.entries(value as Record<string, unknown>).map(([key, count]) => ({
        key,
        count,
      }));
    }
    return [];
  }
  selectAllWorks() {
    // Recupera todos os IDs dos works
    const response = this.rawSearchResponse() as any;
    const works = this.asArray(
      response && typeof response === 'object' && 'works' in response ? response.works : [],
    );
    const ids = works
      .map((work: any) => {
        if (work && typeof work === 'object' && 'id' in work) {
          return Number(work.id);
        }
        return null;
      })
      .filter((id: number | null) => id !== null);

    // Atualiza o localStorage diretamente
    window.localStorage.setItem('marked', JSON.stringify(ids));
    // Emite evento para atualizar menu/navbar
    this.basketService.changed.emit();
  }

  private normalizeApiResponse(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      const data = response as Record<string, unknown>;
      if (Array.isArray(data['works'])) {
        return data['works'];
      }

      if (Array.isArray(data['results'])) {
        return data['results'];
      }

      if (Array.isArray(data['items'])) {
        return data['items'];
      }

      if (Array.isArray(data['data'])) {
        return data['data'];
      }
    }

    return [];
  }
}
