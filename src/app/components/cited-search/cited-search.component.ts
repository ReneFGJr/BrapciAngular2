import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type CitedWork = {
  text: string;
  rdf: string;
  doi: string;
  year: string;
  type: string;
};

@Component({
  selector: 'app-cited-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './cited-search.component.html',
  styleUrl: './cited-search.component.scss',
})
export class CitedSearchComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly query = signal('');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly searched = signal(false);
  readonly cards = signal<CitedWork[]>([]);

  readonly hasResults = computed(() => this.cards().length > 0);

  searchCitations(): void {
    const term = this.query().trim();

    if (!term) {
      this.searched.set(false);
      this.error.set(null);
      this.cards.set([]);
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.searched.set(true);

    this.brapciApiService.citedSearch<unknown>(term).subscribe({
      next: (response) => {
        const works = this.normalizeWorks(response);
        console.log('Normalized works:', works);
        this.cards.set(works.map((work) => this.toCard(work)).filter((card) => card.text.length > 0));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('cited.error');
        this.cards.set([]);
        this.loading.set(false);
      },
    });
  }

  private normalizeWorks(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (!response || typeof response !== 'object') {
      return [];
    }

    const root = response as Record<string, unknown>;

    if (Array.isArray(root['works'])) {
      return root['works'] as unknown[];
    }

    if (Array.isArray(root['results'])) {
      return root['results'] as unknown[];
    }

    if (Array.isArray(root['items'])) {
      return root['items'] as unknown[];
    }

    if (Array.isArray(root['data'])) {
      return root['data'] as unknown[];
    }

    return [];
  }

  private toCard(work: unknown): CitedWork {
    const entry = this.asRecord(work);

    return {
      text: this.toText(entry['ca_text']),
      rdf: this.toText(entry['ca_rdf']),
      doi: this.toText(entry['ca_doi']),
      year: this.toText(entry['ca_year']),
      type: this.toText(entry['ca_tipo']),
    };
  }

  private asRecord(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
  }

  private toText(value: unknown): string {
    return typeof value === 'string' ? value.trim() : value === null || value === undefined ? '' : String(value);
  }
}
