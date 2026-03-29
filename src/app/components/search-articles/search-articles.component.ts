import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-search-articles',
  imports: [CommonModule, FormsModule, TranslateModule, SearchResultComponent],
  templateUrl: './search-articles.component.html',
  styleUrl: './search-articles.component.scss'
})
export class SearchArticlesComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly apiResults = signal<unknown[]>([]);
  readonly filterSources = signal<unknown[]>([]);
  readonly filterAuthors = signal<unknown[]>([]);
  readonly filterKeywords = signal<unknown[]>([]);
  readonly query = signal('ciencia da informacao');
  readonly hasResults = computed(() => this.apiResults().length > 0);

  searchInBrapci(): void {
    const term = this.query().trim();

    if (!term) {
      this.apiResults.set([]);
      this.filterSources.set([]);
      this.filterAuthors.set([]);
      this.filterKeywords.set([]);
      return;
    }

    this.loading.set(true);
    console.log('[search-articles] Iniciando busca', { term });

    this.brapciApiService.search<unknown>(term).subscribe({
      next: (response) => {
        console.log('[search-articles] Resposta bruta da API', response);
        const normalizedResults = this.normalizeApiResponse(response);
        const filters = this.normalizeFilters(response);
        console.log('[search-articles] Resposta normalizada', {
          total: normalizedResults.length,
          sample: normalizedResults.slice(0, 2)
        });
        console.log('[search-articles] Filtros normalizados', {
          sources: filters.sources.length,
          authors: filters.authors.length,
          keywords: filters.keywords.length
        });
        this.loading.set(false);
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
      }
    });
  }

  private normalizeFilters(response: unknown): { sources: unknown[]; authors: unknown[]; keywords: unknown[] } {
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
      keywords: this.asArray(filters['keywords'])
    };
  }

  private asArray(value: unknown): unknown[] {
    if (Array.isArray(value)) {
      return value;
    }

    if (value && typeof value === 'object') {
      return Object.entries(value as Record<string, unknown>).map(([key, count]) => ({ key, count }));
    }

    return [];
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
