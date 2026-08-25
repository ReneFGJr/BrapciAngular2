import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { TranslateModule } from '@ngx-translate/core';

type JsonRecord = Record<string, unknown>;

interface BaseStatistic {
  name: string;
  total: string;
  translationKey: string | null;
}

@Component({
  selector: 'app-area-statistics',
  imports: [CommonModule, TranslateModule],
  templateUrl: './area-statistics.component.html',
  styleUrl: './area-statistics.component.scss'
})
export class AreaStatisticsComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly stats = signal<BaseStatistic[]>([]);
  readonly updateDate = signal('');

  constructor() {
    this.loadStatistics();
  }

  private loadStatistics(): void {
    this.loading.set(true);
    this.error.set(null);

    this.brapciApiService.get<unknown>('brapci/statistics').subscribe({
      next: (response) => {
        const normalized = this.normalizeResponse(response);
        this.stats.set(normalized.stats);
        this.updateDate.set(normalized.updateDate);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('home.statistics.error');
        this.stats.set([]);
        this.updateDate.set('');
        this.loading.set(false);
      }
    });
  }

  private normalizeResponse(response: unknown): { stats: BaseStatistic[]; updateDate: string } {
    if (!response || typeof response !== 'object') {
      return { stats: [], updateDate: '' };
    }

    const root = response as JsonRecord;
    const rawStats = Array.isArray(root['data']) ? root['data'] : [];
    const updateDate = this.pickText(root, ['update', 'updated_at', 'date']) || '';

    const stats = rawStats
      .map((item) => this.toStatistic(item))
      .filter((item): item is BaseStatistic => item !== null);

    return { stats, updateDate };
  }

  private toStatistic(value: unknown): BaseStatistic | null {
    if (!value || typeof value !== 'object') {
      return null;
    }

    const record = value as JsonRecord;
    const name = this.pickText(record, ['name', 'label', 'title']);
    const total = this.pickText(record, ['total', 'count', 'value']);

    if (!name || !total) {
      return null;
    }

    return { name, total, translationKey: this.statisticTranslationKey(name) };
  }

  private statisticTranslationKey(name: string): string | null {
    const normalizedName = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

    const keys: Record<string, string> = {
      'total de artigos': 'home.statistics.items.articles',
      'total de livros': 'home.statistics.items.books',
      'total de capitulos de livros': 'home.statistics.items.bookChapters',
      'total de trabalhos em eventos': 'home.statistics.items.proceedings',
      'total de autores': 'home.statistics.items.authors',
      'total de instituicoes': 'home.statistics.items.institutions',
      'total de fontes': 'home.statistics.items.sources',
      'total de arquivos': 'home.statistics.items.files'
    };

    return keys[normalizedName] ?? null;
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  trackByName(index: number, item: BaseStatistic): string {
    return item.name || String(index);
  }
}
