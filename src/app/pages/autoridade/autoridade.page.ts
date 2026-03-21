import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type AuthorityItem = {
  ID?: string;
  Term?: string;
  use?: string;
};

type AuthorityResult = {
  id: string;
  term: string;
};

type AuthorityResponse = {
  data?: {
    item?: AuthorityItem[];
  };
};

@Component({
  selector: 'app-autoridade-page',
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './autoridade.page.html',
  styleUrl: './autoridade.page.scss'
})
export class AutoridadePage {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly term = signal('Rene Faustino');
  readonly loading = signal(false);
  readonly error = signal('');
  readonly results = signal<AuthorityResult[]>([]);

  readonly hasResults = computed(() => this.results().length > 0);

  constructor() {
    this.search();
  }

  search(): void {
    const value = this.term().trim();
    if (!value) {
      this.results.set([]);
      return;
    }

    this.loading.set(true);
    this.error.set('');

    this.brapciApiService.authoritySearch<AuthorityResponse>(value).subscribe({
      next: (response) => {
        const items = response.data?.item ?? [];
        const filtered = items
          .filter((entry) => !!entry.ID && !!entry.use && entry.ID === entry.use)
          .map((entry) => ({
            id: entry.ID as string,
            term: (entry.Term ?? '').trim() || (entry.ID as string)
          }));

        this.results.set(filtered);
        this.loading.set(false);
      },
      error: () => {
        this.results.set([]);
        this.error.set('Nao foi possivel consultar a API de autoridade.');
        this.loading.set(false);
      }
    });
  }
}
