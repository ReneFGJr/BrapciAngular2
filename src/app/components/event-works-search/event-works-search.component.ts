import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type WorkResult = {
  id: string;
  title: string;
  subtitle: string;
};

@Component({
  selector: 'app-event-works-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './event-works-search.component.html',
  styleUrl: './event-works-search.component.scss',
})
export class EventWorksSearchComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  @Input({ required: true }) journalId = '';

  readonly query = signal('');
  readonly loading = signal(false);
  readonly searched = signal(false);
  readonly error = signal('');
  readonly results = signal<WorkResult[]>([]);
  readonly rawSearchResponse = signal<unknown>(null);
  readonly showJsonPanel = signal(false);
  showFilters = false;

  readonly yearsStart: number[] = [];
  readonly yearsEnd: number[] = [];
  readonly searchFields = [
    { label: 'Titulo', value: 'TI' },
    { label: 'Resumo', value: 'AB' },
    { label: 'Palavras-chave', value: 'KW' },
    { label: 'Autor', value: 'AU' },
    { label: 'Todos os campos', value: 'FL' },
  ];

  readonly filtersForm = new FormGroup({
    year_start: new FormControl(1962, { nonNullable: true }),
    year_end: new FormControl(new Date().getFullYear() + 1, { nonNullable: true }),
    fields: new FormControl('FL', { nonNullable: true }),
  });

  readonly hasResults = computed(() => this.results().length > 0);
  readonly canSearch = computed(() => this.query().trim().length > 0 && this.normalizedJournalId().length > 0);
  readonly searchResponseJson = computed(() => {
    const response = this.rawSearchResponse();
    if (response === null || response === undefined) {
      return '';
    }

    try {
      return JSON.stringify(response, null, 2);
    } catch {
      return '[Nao foi possivel serializar a resposta da consulta]';
    }
  });

  constructor() {
    this.initYears();
    this.filtersForm.patchValue({
      year_start: this.yearsStart[0],
      year_end: this.yearsEnd[0],
    });
  }

  showResultsPanel(): void {
    this.showJsonPanel.set(false);
  }

  showJsonResponsePanel(): void {
    this.showJsonPanel.set(true);
  }

  searchWorks(): void {
    const term = this.query().trim();
    const idJnl = this.normalizedJournalId();
    const { year_start, year_end, fields } = this.filtersForm.getRawValue();

    if (!term || !idJnl) {
      this.searched.set(false);
      this.results.set([]);
      this.rawSearchResponse.set(null);
      this.error.set('Informe um termo para pesquisar trabalhos deste evento.');
      return;
    }

    this.loading.set(true);
    this.searched.set(true);
    this.error.set('');

    this.brapciApiService
      .search<unknown>(term, [
        { name: 'journal', value: idJnl },
        { name: 'year_start', value: year_start },
        { name: 'year_end', value: year_end },
        { name: 'fields', value: fields },
      ])
      .subscribe({
        next: (response) => {
          console.log('API response:', response);
          const mapped = this.normalizeWorks(response)
            .map((item) => this.mapWork(item))
            .filter((item): item is WorkResult => item !== null);

          this.results.set(mapped);
          this.rawSearchResponse.set(response);
          this.loading.set(false);

          if (!mapped.length) {
            this.error.set('Nenhum trabalho encontrado para este evento com o termo informado.');
          }
        },
        error: () => {
          this.results.set([]);
          this.rawSearchResponse.set({ error: 'Erro ao consultar a API' });
          this.loading.set(false);
          this.error.set('Nao foi possivel realizar a busca no momento.');
        },
      });
  }

  private initYears(): void {
    const currentYear = new Date().getFullYear() + 1;

    for (let y = 1962; y <= currentYear; y += 1) {
      this.yearsStart.push(y);
    }

    for (let y = currentYear; y >= 1962; y -= 1) {
      this.yearsEnd.push(y);
    }
  }

  private normalizedJournalId(): string {
    return String(this.journalId ?? '').trim();
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

  private mapWork(item: unknown): WorkResult | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const row = item as Record<string, unknown>;
    const nested =
      row['data'] && typeof row['data'] === 'object'
        ? (row['data'] as Record<string, unknown>)
        : null;

    const id = String(row['id'] ?? row['ID'] ?? nested?.['ID'] ?? row['rdf'] ?? '').trim();
    const title = String(
      row['title'] ?? row['TI'] ?? row['name'] ?? nested?.['TITLE'] ?? nested?.['title'] ?? ''
    ).trim();
    if (!title) {
      return null;
    }

    const year = String(row['year'] ?? row['PY'] ?? nested?.['year'] ?? nested?.['YEAR'] ?? '').trim();
    const authors = this.readAuthors(row);
    const subtitle = [authors, year].filter(Boolean).join(' - ') || 'Sem metadados adicionais';

    return { id, title, subtitle };
  }

  private readAuthors(row: Record<string, unknown>): string {
    const nested =
      row['data'] && typeof row['data'] === 'object'
        ? (row['data'] as Record<string, unknown>)
        : null;

    const raw = row['authors'] ?? row['AU'] ?? row['author'] ?? nested?.['AUTHORS'] ?? nested?.['authors'];

    if (Array.isArray(raw)) {
      return raw
        .map((value) => String(value).trim())
        .filter((value) => value.length > 0)
        .slice(0, 3)
        .join(', ');
    }

    if (typeof raw === 'string') {
      return raw
        .split(';')
        .map((value) => value.trim())
        .filter((value) => value.length > 0)
        .slice(0, 3)
        .join(', ');
    }

    return String(raw ?? '').trim();
  }
}
