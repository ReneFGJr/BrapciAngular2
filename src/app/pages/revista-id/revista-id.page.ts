import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type Journal = {
  id_jnl: string;
  jnl_name?: string;
  jnl_name_abrev?: string;
  jnl_issn?: string;
  jnl_eissn?: string;
  jnl_ano_inicio?: string;
  jnl_ano_final?: string;
  jnl_active?: string;
  jnl_url?: string;
  cover?: string;
  jnl_collection?: string;
  [key: string]: unknown;
};

@Component({
  selector: 'app-revista-id-page',
  imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent],
  templateUrl: './revista-id.page.html',
  styleUrl: './revista-id.page.scss'
})
export class RevistaIdPage {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly brapciApiService = inject(BrapciApiService);

  readonly id = signal('');
  readonly loading = signal(true);
  readonly error = signal('');
  readonly journal = signal<Journal | null>(null);

  readonly title = computed(() => this.journal()?.jnl_name?.trim() || this.journal()?.jnl_name_abrev?.trim() || '-');

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => (params.get('id') ?? '').trim()),
        distinctUntilChanged(),
        tap((id) => {
          this.id.set(id);
          this.loading.set(true);
          this.error.set('');
          this.journal.set(null);
        }),
        switchMap((id) => {
          if (!id) {
            return of<Journal | null>(null);
          }

          return this.fetchJournal(id);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((journal) => {
        this.loading.set(false);

        if (!journal) {
          this.error.set('Revista não encontrada.');
          return;
        }

        this.journal.set(journal);
      });
  }

  private fetchJournal(id: string) {
    return this.brapciApiService.get<unknown>(`brapci/source/journal/${id}`).pipe(
      map((response) => this.normalizeJournalResponse(response, id)),
      switchMap((journal) => {
        if (journal) {
          return of(journal);
        }

        return this.brapciApiService
          .get<unknown>('brapci/source/journal', { id_jnl: id })
          .pipe(map((response) => this.normalizeJournalResponse(response, id)));
      }),
      catchError(() =>
        this.brapciApiService.get<unknown>('brapci/source/journal', { id_jnl: id }).pipe(
          map((response) => this.normalizeJournalResponse(response, id)),
          catchError(() => of(null))
        )
      )
    );
  }

  private normalizeJournalResponse(response: unknown, id: string): Journal | null {
    if (!response) {
      return null;
    }

    if (Array.isArray(response)) {
      const match = response.find((item) => {
        if (!item || typeof item !== 'object') {
          return false;
        }

        const obj = item as Record<string, unknown>;
        return String(obj['id_jnl'] ?? '').trim() === id;
      });

      if (!match || typeof match !== 'object') {
        return null;
      }

      return match as Journal;
    }

    if (typeof response === 'object') {
      const obj = response as Record<string, unknown>;

      if (Array.isArray(obj['data'])) {
        return this.normalizeJournalResponse(obj['data'], id);
      }

      if (Array.isArray(obj['results'])) {
        return this.normalizeJournalResponse(obj['results'], id);
      }

      const responseId = String(obj['id_jnl'] ?? '').trim();
      if (!responseId || responseId === id) {
        return obj as Journal;
      }
    }

    return null;
  }
}
