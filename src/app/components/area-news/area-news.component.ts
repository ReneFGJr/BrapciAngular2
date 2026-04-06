import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface NewsBlock {
  version: string;
  items: string[];
}

@Component({
  selector: 'app-area-news',
  imports: [CommonModule],
  templateUrl: './area-news.component.html',
  styleUrl: './area-news.component.scss'
})
export class AreaNewsComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly updates = signal<NewsBlock[]>([]);

  constructor() {
    this.loadNews();
  }

  private loadNews(): void {
    this.loading.set(true);
    this.error.set(null);

    this.brapciApiService.get<unknown>('brapci/news').subscribe({
      next: (response) => {
        this.updates.set(this.normalizeNews(response));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Nao foi possivel carregar as atualizacoes no momento.');
        this.updates.set([]);
        this.loading.set(false);
      }
    });
  }

  private normalizeNews(response: unknown): NewsBlock[] {
    if (!response || typeof response !== 'object') {
      return [];
    }

    const root = response as JsonRecord;
    const html = this.pickText(root, ['text', 'html', 'content']);
    if (!html) {
      return [];
    }

    const lines = html
      .split(/<br\s*\/?\s*>/gi)
      .map((line) => this.stripHtml(line))
      .map((line) => this.decodeHtmlEntities(line).trim())
      .filter((line) => line.length > 0);

    const result: NewsBlock[] = [];
    let current: NewsBlock | null = null;

    for (const line of lines) {
      if (this.isVersionLine(line)) {
        if (current) {
          result.push(current);
        }

        current = { version: line, items: [] };
        continue;
      }

      if (!current) {
        current = { version: 'Atualizacoes', items: [] };
      }

      current.items.push(line);
    }

    if (current) {
      result.push(current);
    }

    return result.slice(0, 6);
  }

  private isVersionLine(value: string): boolean {
    return /^v\d{2}\.\d{2}\.\d{2}$/i.test(value);
  }

  private stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, ' ');
  }

  private decodeHtmlEntities(value: string): string {
    return value
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }

    return '';
  }

  trackByVersion(index: number, block: NewsBlock): string {
    return `${block.version}-${index}`;
  }

  trackByItem(index: number, item: string): string {
    return `${item}-${index}`;
  }
}
