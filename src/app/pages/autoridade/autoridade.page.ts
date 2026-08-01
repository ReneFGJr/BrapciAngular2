import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type AuthorityItem = {
  ID?: string;
  Term?: string;
  use?: string;
  picture?: string;
};

type AuthorityResult = {
  id: string;
  term: string;
  picture?: string;
};

type AuthorityResponse = {
  data?: {
    item?: AuthorityItem[] | Record<string, AuthorityItem>;
    corporate?: AuthorityItem[] | Record<string, AuthorityItem>;
  };
};

@Component({
  selector: 'app-autoridade-page',
  imports: [CommonModule, FormsModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './autoridade.page.html',
  styleUrl: './autoridade.page.scss'
})
export class AutoridadePage {
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly translate = inject(TranslateService);

  readonly term = signal('');
  readonly loading = signal(false);
  readonly error = signal('');
  readonly results = signal<AuthorityResult[]>([]);
  readonly corporateResults = signal<AuthorityResult[]>([]);

  readonly hasResults = computed(() => this.results().length > 0);
  readonly hasCorporateResults = computed(() => this.corporateResults().length > 0);
  readonly hasAnyResults = computed(() => this.hasResults() || this.hasCorporateResults());

  private normalizeItems(items?: AuthorityItem[] | Record<string, AuthorityItem>): AuthorityItem[] {
    if (!items) {
      return [];
    }

    if (Array.isArray(items)) {
      return items;
    }

    return Object.values(items);
  }

  constructor() {
    this.search();
  }

  search(): void {
    const value = this.term().trim();
    if (!value) {
      this.results.set([]);
      this.corporateResults.set([]);
      return;
    }

    this.loading.set(true);
    this.error.set('');

    this.brapciApiService.authoritySearch<AuthorityResponse>(value).subscribe({
      next: (response) => {
        const items = this.normalizeItems(response.data?.item);
        const corporate = this.normalizeItems(response.data?.corporate);
        const filtered = items
          .filter((entry) => !!entry.ID && !!entry.use && entry.ID === entry.use)
          .map((entry) => ({
            id: entry.ID as string,
            term: (entry.Term ?? '').trim() || (entry.ID as string),
            picture: (entry.picture ?? '').trim() || undefined
          }));

        const corporateFiltered = corporate
          .filter((entry) => !!entry.ID && !!entry.use && entry.ID === entry.use)
          .map((entry) => ({
            id: entry.ID as string,
            term: (entry.Term ?? '').trim() || (entry.ID as string),
            picture: (entry.picture ?? '').trim() || undefined
          }));

        this.results.set(filtered);
        this.corporateResults.set(corporateFiltered);
        this.loading.set(false);
      },
      error: () => {
        this.results.set([]);
        this.corporateResults.set([]);
        this.error.set(this.translate.instant('authority.apiError'));
        this.loading.set(false);
      }
    });
  }
}
