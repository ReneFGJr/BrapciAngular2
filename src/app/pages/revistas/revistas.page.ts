import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { RevistasLocationMapComponent } from './revistas-location-map/revistas-location-map.component';

type Journal = {
  id_jnl: string;
  jnl_name: string;
  jnl_name_abrev?: string;
  jnl_issn?: string;
  jnl_eissn?: string;
  jnl_ano_inicio?: string;
  jnl_ano_final?: string;
  jnl_active?: string;
  jnl_historic?: string | number | boolean;
  jnl_frbr?: string;
  jnl_url?: string;
  cover?: string;
  jnl_collection?: string;
  lat?: string;
  long?: string;
  [key: string]: any;
};

@Component({
  selector: 'app-revistas-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './revistas.page.html',
  styleUrl: './revistas.page.scss',
})
export class RevistasPage {
  readonly revistasLocationMapComponent = RevistasLocationMapComponent;
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly router = inject(Router);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly journals = signal<Journal[]>([]);
  readonly typeFilter = signal<'ALL' | 'JA' | 'JE'>('ALL');
  readonly statusFilter = signal<'ALL' | 'CURRENT' | 'HISTORIC'>('ALL');
  readonly titleQuery = signal('');
  readonly activeSection = signal<'list' | 'location'>('list');

  readonly allLocationJournals = computed(() => this.journals().filter((journal) => this.hasLocation(journal)));
  readonly locationJournals = computed(() =>
    this.allLocationJournals().filter((journal) => {
      const query = this.titleQuery().trim().toLowerCase();
      const activeType = this.typeFilter();
      const activeStatus = this.statusFilter();

      const collection = String(journal.jnl_collection ?? '').trim().toUpperCase();
      const title = String(journal.jnl_name ?? '').toLowerCase();

      const matchesType = activeType === 'ALL' ? true : collection === activeType;
      const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
      const matchesTitle = query ? title.includes(query) : true;

      return matchesType && matchesStatus && matchesTitle;
    })
  );

  readonly filteredJournals = computed(() => {
    const activeType = this.typeFilter();
    const activeStatus = this.statusFilter();
    const query = this.titleQuery().trim().toLowerCase();

    return this.journals().filter((journal) => {
      const collection = String(journal.jnl_collection ?? '')
        .trim()
        .toUpperCase();
      const title = String(journal.jnl_name ?? '').toLowerCase();

      const matchesType = activeType === 'ALL' ? true : collection === activeType;
      const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
      const matchesTitle = query ? title.includes(query) : true;

      return matchesType && matchesStatus && matchesTitle;
    });
  });

  readonly hasResults = computed(() => this.journals().length > 0);
  readonly hasFilteredResults = computed(() => this.filteredJournals().length > 0);

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
      },
    });
  }

  setTypeFilter(type: 'ALL' | 'JA' | 'JE'): void {
    this.typeFilter.set(type);
  }

  setStatusFilter(status: 'ALL' | 'CURRENT' | 'HISTORIC'): void {
    this.statusFilter.set(status);
  }

  setTitleQuery(value: string): void {
    this.titleQuery.set(value);
  }

  setSection(section: 'list' | 'location'): void {
    this.activeSection.set(section);
  }

  exportCsv(): void {
    const journals = this.filteredJournals();
    if (!journals.length || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const preferredKeys = [
      'id_jnl',
      'jnl_name',
      'jnl_name_abrev',
      'jnl_collection',
      'jnl_issn',
      'jnl_eissn',
      'jnl_ano_inicio',
      'jnl_ano_final',
      'jnl_active',
      'jnl_frbr',
      'jnl_url',
      'cover',
    ];

    const allKeys = new Set<string>();
    for (const journal of journals) {
      for (const key of Object.keys(journal)) {
        allKeys.add(key);
      }
    }

    const columns = [
      ...preferredKeys.filter((key) => allKeys.has(key)),
      ...[...allKeys].filter((key) => !preferredKeys.includes(key)).sort((a, b) => a.localeCompare(b)),
    ];

    const rows = [
      columns,
      ...journals.map((journal) => columns.map((column) => this.toCsvValue(journal[column]))),
    ];

    const csvContent = rows.map((row) => row.map((cell) => this.escapeCsv(cell)).join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'revistas.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  openV(journal: Journal): void {
    const id = String(journal?.jnl_frbr ?? '').trim();
    if (!id) {
      return;
    }
    this.router.navigate(['/v/', id]);
  }

  private escapeCsv(value: string): string {
    return `"${value.replaceAll('"', '""')}"`;
  }

  private toCsvValue(value: unknown): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }

    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }

  private hasLocation(journal: Journal): boolean {
    const lat = Number.parseFloat(String(journal['lat'] ?? '').trim());
    const long = Number.parseFloat(String(journal['long'] ?? '').trim());

    return Number.isFinite(lat) && Number.isFinite(long);
  }

  private matchesStatusFilter(journal: Journal, status: 'ALL' | 'CURRENT' | 'HISTORIC'): boolean {
    if (status === 'ALL') {
      return true;
    }

    const isHistoric = this.isHistoricJournal(journal);
    return status === 'HISTORIC' ? isHistoric : !isHistoric;
  }

  private isHistoricJournal(journal: Journal): boolean {
    const value = journal.jnl_historic;

    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'number') {
      return value === 1;
    }

    const normalized = String(value ?? '').trim().toLowerCase();
    return normalized === '1' || normalized === 'true' || normalized === 'yes';
  }
}
