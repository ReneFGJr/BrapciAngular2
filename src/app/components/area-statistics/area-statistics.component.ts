import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface BaseStatistic {
  name: string;
  total: string;
}

@Component({
  selector: 'app-area-statistics',
  imports: [CommonModule],
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
        this.error.set('Nao foi possivel carregar as estatisticas no momento.');
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

    return { name, total };
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
