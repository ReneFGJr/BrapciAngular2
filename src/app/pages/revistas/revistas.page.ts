import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type Journal = {
  id_jnl: string;
  jnl_name: string;
  jnl_name_abrev?: string;
  jnl_issn?: string;
  jnl_eissn?: string;
  jnl_ano_inicio?: string;
  jnl_ano_final?: string;
  jnl_active?: string;
  jnl_url?: string;
  cover?: string;
  jnl_collection?: string;
  [key: string]: any;
};

@Component({
  selector: 'app-revistas-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './revistas.page.html',
  styleUrl: './revistas.page.scss'
})
export class RevistasPage {
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly router = inject(Router);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly journals = signal<Journal[]>([]);

  readonly hasResults = computed(() => this.journals().length > 0);

  constructor() {
    this.loadJournals();
  }

  loadJournals(): void {
    this.loading.set(true);
    this.error.set('');

    this.brapciApiService.get<Journal[]>('brapci/source/journal').subscribe({
      next: (response) => {
        const items = Array.isArray(response) ? response : [];
        this.journals.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.journals.set([]);
        this.error.set('Não foi possível carregar as revistas. Tente novamente mais tarde.');
        this.loading.set(false);
      }
    });
  }

  openJournal(journal: Journal): void {
    const id = String(journal?.id_jnl ?? '').trim();
    if (!id) {
      return;
    }

    this.router.navigate(['/revista', id]);
  }
}
