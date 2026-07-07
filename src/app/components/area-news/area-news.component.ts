import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface NewsItem {
  title: string;
  description: string;
  link: string | null;
  nwLink: string | null;
}

interface NewsBlock {
  version: string;
  items: NewsItem[];
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

  formatBlockLabel(block: NewsBlock): string {
    return block.version;
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
    const structuredNews = this.extractStructuredNews(root['news']);
    if (structuredNews.length) {
      return structuredNews.slice(0, 6);
    }

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
      const versionMeta = this.parseVersionLine(line);
      if (versionMeta) {
        if (current) {
          result.push(current);
        }

        current = {
          version: versionMeta.version,
          items: []
        };
        continue;
      }

      if (!current) {
        current = { version: 'Atualizacoes', items: [] };
      }

      current.items.push({ title: line, description: '', link: null, nwLink: null });
    }

    if (current) {
      result.push(current);
    }

    return result.slice(0, 6);
  }

  private extractStructuredNews(newsValue: unknown): NewsBlock[] {
    if (!newsValue || typeof newsValue !== 'object' || Array.isArray(newsValue)) {
      return [];
    }

    const entries = Object.entries(newsValue as JsonRecord);

    return entries
      .map(([version, items]) => {
        if (!Array.isArray(items)) {
          return null;
        }

        const normalizedItems = items
          .map((item) => this.toNewsItem(item))
          .filter((item): item is NewsItem => item !== null);

        return normalizedItems.length
          ? { version, items: normalizedItems }
          : null;
      })
      .filter((block): block is NewsBlock => block !== null);
  }

  private toNewsItem(value: unknown): NewsItem | null {
    if (!value || typeof value !== 'object') {
      return null;
    }

    const record = value as JsonRecord;
    const title = this.pickText(record, ['title', 'name', 'label']);
    const description = this.pickText(record, ['description', 'content', 'text']);
    const link = this.pickText(record, ['link']) || null;
    const nwLink = this.pickText(record, ['nw_link', 'nwLink', 'link', 'url']) || null;

    if (!title) {
      return null;
    }

    return {
      title,
      description,
      link,
      nwLink
    };
  }

  private parseVersionLine(value: string): { version: string; releaseDate: string | null } | null {
    const normalized = value.trim();
    const match = normalized.match(/^((?:v\d{2}\.\d{2}\.\d{2})|(?:\d{4}[-/]\d{2}[-/]\d{2}))(?:(?:\s*[-|]\s*|\s+)(\d{2}[/-]\d{2}[/-]\d{2,4}|\d{4}[-/]\d{2}[-/]\d{2}))?$/i);
    if (!match) {
      return null;
    }

    return {
      version: match[1],
      releaseDate: match[2] ?? null
    };
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

  trackByItem(index: number, item: NewsItem): string {
    return `${item.title}-${index}`;
  }
}
