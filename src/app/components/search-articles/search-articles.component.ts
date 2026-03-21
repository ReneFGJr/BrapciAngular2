import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

@Component({
  selector: 'app-search-articles',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './search-articles.component.html',
  styleUrl: './search-articles.component.scss'
})
export class SearchArticlesComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly apiResults = signal<unknown[]>([]);
  readonly query = signal('ciencia da informacao');
  readonly hasResults = computed(() => this.apiResults().length > 0);

  searchInBrapci(): void {
    const term = this.query().trim();

    if (!term) {
      this.apiResults.set([]);
      return;
    }

    this.loading.set(true);

    this.brapciApiService.search<unknown>(term).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.apiResults.set(this.normalizeApiResponse(response));
      },
      error: () => {
        this.loading.set(false);
        this.apiResults.set([]);
      }
    });
  }

  private normalizeApiResponse(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      const data = response as Record<string, unknown>;
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
