import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, computed, signal, inject } from '@angular/core';
import { BasketService } from '../../core/services/basket.service';
import { SearchFilterAuthorsComponent } from '../search-filter-authors/search-filter-authors.component';
import { SearchFilterKeywordsComponent } from '../search-filter-keywords/search-filter-keywords.component';
import { SearchFilterSourcesComponent } from '../search-filter-sources/search-filter-sources.component';

type WorkData = {
  AUTHORS?: string;
  CLASS?: string;
  ID?: string;
  JOURNAL?: string;
  KEYWORDS?: string;
  LEGEND?: string;
  TITLE?: string;
  cover?: string;
};

type WorkEntry = {
  id?: string;
  type?: string;
  year?: string | number;
  score?: number;
  data?: WorkData;
};

type WorkCardView = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  type: string;
  legend: string;
  coverUrl: string;
  score: string;
  keywords: string[];
};

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {
  basket = inject(BasketService);
    isMarked(id: string): boolean {
      return this.basket.isMarked(Number(id));
    }

    toggleMarked(id: string, checked: boolean) {
      const numId = Number(id);
      if (checked) {
        this.basket.add(numId);
      } else {
        this.basket.remove(numId);
      }
    }

    markedCount(): number {
      return this.basket.count();
    }
  private readonly pageSize = 5;

  @Input() set results(value: unknown[]) {
    this.allResults.set(Array.isArray(value) ? value : []);
    this.visibleCount.set(this.pageSize);
  }

  @Input() sources: unknown[] = [];
  @Input() authors: unknown[] = [];
  @Input() keywords: unknown[] = [];

  readonly sourcesFilterComponent = SearchFilterSourcesComponent;
  readonly authorsFilterComponent = SearchFilterAuthorsComponent;
  readonly keywordsFilterComponent = SearchFilterKeywordsComponent;

  private readonly allResults = signal<unknown[]>([]);
  private readonly visibleCount = signal(this.pageSize);

  readonly visibleResults = computed(() => this.allResults().slice(0, this.visibleCount()));
  readonly visibleCards = computed(() =>
    this.visibleResults().map((item, index) => this.toWorkCard(item, index))
  );
  readonly hasMore = computed(() => this.visibleCount() < this.allResults().length);
  readonly visibleTotal = computed(() => this.visibleResults().length);
  readonly totalResults = computed(() => this.allResults().length);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.hasMore()) {
      return;
    }

    const threshold = 200;
    const viewportBottom = window.innerHeight + window.scrollY;
    const pageBottom = document.documentElement.scrollHeight;

    if (viewportBottom >= pageBottom - threshold) {
      this.loadMore();
    }
  }

  private loadMore(): void {
    this.visibleCount.update((current) => Math.min(current + this.pageSize, this.allResults().length));
  }

  private toWorkCard(item: unknown, index: number): WorkCardView {
    const entry = (item ?? {}) as WorkEntry;
    const data = entry.data ?? {};
    const id = this.asString(entry.id) || this.asString(data.ID) || String(index + 1);
    const title = this.asString(data.TITLE) || 'Titulo nao informado';
    const authors = this.asString(data.AUTHORS) || 'Autor(es) nao informado(s)';
    const journal = this.asString(data.JOURNAL) || 'Fonte nao informada';
    const year = this.asString(entry.year) || 'Ano nao informado';
    const type = this.asString(entry.type) || this.asString(data.CLASS) || 'Tipo nao informado';
    const legend = this.asString(data.LEGEND);
    const coverUrl = this.asString(data.cover);
    const score = typeof entry.score === 'number' ? entry.score.toFixed(2) : '-';
    const keywords = this.extractKeywords(data.KEYWORDS);

    return {
      id,
      title,
      authors,
      journal,
      year,
      type,
      legend,
      coverUrl,
      score,
      keywords
    };
  }

  private extractKeywords(rawKeywords: string | undefined): string[] {
    if (!rawKeywords) {
      return [];
    }

    return rawKeywords
      .split(';')
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0)
      .slice(0, 4);
  }

  private asString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }
}
