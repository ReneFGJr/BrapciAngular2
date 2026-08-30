import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface StatisticCard {
  name: string;
  total: string;
  icon: string;
  translationKey: string | null;
}

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './statistics.page.html',
  styleUrl: './statistics.page.scss',
})
export class StatisticsPage {
  private readonly api = inject(BrapciApiService);

  readonly loading = signal(true);
  readonly error = signal(false);
  readonly statistics = signal<StatisticCard[]>([]);
  readonly updateDate = signal('');

  constructor() {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.loading.set(true);
    this.error.set(false);

    this.api.get<unknown>('brapci/statistics').subscribe({
      next: (response) => {
        const result = this.normalizeResponse(response);
        this.statistics.set(result.statistics);
        this.updateDate.set(result.updateDate);
        this.loading.set(false);
      },
      error: () => {
        this.statistics.set([]);
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  trackByName(_index: number, item: StatisticCard): string {
    return item.name;
  }

  private normalizeResponse(response: unknown): {
    statistics: StatisticCard[];
    updateDate: string;
  } {
    if (!response || typeof response !== 'object') {
      return { statistics: [], updateDate: '' };
    }

    const root = response as JsonRecord;
    const data = Array.isArray(root['data']) ? root['data'] : [];

    return {
      statistics: data
        .map((item) => this.toStatistic(item))
        .filter((item): item is StatisticCard => item !== null),
      updateDate: this.pickText(root, ['update', 'updated_at', 'date']),
    };
  }

  private toStatistic(value: unknown): StatisticCard | null {
    if (!value || typeof value !== 'object') {
      return null;
    }

    const record = value as JsonRecord;
    const name = this.pickText(record, ['name', 'label', 'title']);
    const total = this.pickText(record, ['total', 'count', 'value']);

    if (!name || !total) {
      return null;
    }

    const normalized = this.normalizeName(name);
    const metadata: Record<string, { icon: string; translationKey: string }> = {
      'total de artigos': { icon: 'bi-file-earmark-text', translationKey: 'home.statistics.items.articles' },
      'total de livros': { icon: 'bi-book', translationKey: 'home.statistics.items.books' },
      'total de capitulos de livros': { icon: 'bi-bookmark', translationKey: 'home.statistics.items.bookChapters' },
      'total de trabalhos em eventos': { icon: 'bi-calendar-event', translationKey: 'home.statistics.items.proceedings' },
      'total de autores': { icon: 'bi-people', translationKey: 'home.statistics.items.authors' },
      'total de instituicoes': { icon: 'bi-buildings', translationKey: 'home.statistics.items.institutions' },
      'total de fontes': { icon: 'bi-journals', translationKey: 'home.statistics.items.sources' },
      'total de arquivos': { icon: 'bi-folder2-open', translationKey: 'home.statistics.items.files' },
      'evendos indexados': { icon: 'bi-calendar-check', translationKey: 'home.statistics.items.indexedEvents' },
      'eventos indexados': { icon: 'bi-calendar-check', translationKey: 'home.statistics.items.indexedEvents' },
      'revistas brasileiras indexadas': { icon: 'bi-journal-check', translationKey: 'home.statistics.items.indexedBrazilianJournals' },
      'revistas estrangeiras indexadas': { icon: 'bi-globe-americas', translationKey: 'home.statistics.items.indexedForeignJournals' },
      'revistas brasileitas historicas': { icon: 'bi-clock-history', translationKey: 'home.statistics.items.historicBrazilianJournals' },
      'revistas brasileiras historicas': { icon: 'bi-clock-history', translationKey: 'home.statistics.items.historicBrazilianJournals' },
    };
    const itemMetadata = metadata[normalized];

    return {
      name,
      total,
      icon: itemMetadata?.icon ?? 'bi-bar-chart',
      translationKey: itemMetadata?.translationKey ?? null,
    };
  }

  private normalizeName(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) return value.trim();
      if (typeof value === 'number' && Number.isFinite(value)) return String(value);
    }
    return '';
  }
}
