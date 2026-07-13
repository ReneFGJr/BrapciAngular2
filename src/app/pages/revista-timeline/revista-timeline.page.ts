import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, forkJoin, of } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type TimelineJournal = {
  name: string;
  ID: string;
  jnl_collection?: string;
  jnl_historic?: string | number | boolean;
  jnl_active?: string | number | boolean;
  [key: string]: any;
};

type TimelineYear = {
  year: number;
  journals: TimelineJournal[];
};

type JournalCatalogItem = {
  id_jnl?: string | number;
  jnl_frbr?: string | number;
  jnl_name?: string;
  jnl_issn?: string;
  gc_name?: string;
  jnl_ano_inicio?: string | number;
  jnl_ano_final?: string | number;
  jnl_collection?: string;
  jnl_historic?: string | number | boolean;
  [key: string]: unknown;
};

type SummaryRow = {
  name: string;
  issn: string;
  city: string;
  startYear: string;
  endYear: string;
  status: 'Histórica' | 'Corrente';
};

type SummaryStatus = SummaryRow['status'];

type TypeFilter = 'ALL' | 'JA' | 'JE';
type StatusFilter = 'ALL' | 'CURRENT' | 'HISTORIC';
type TimelineTab = 'summary' | 'timeline' | 'chart';

@Component({
  selector: 'app-revista-timeline-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './revista-timeline.page.html',
  styleUrl: './revista-timeline.page.scss',
  standalone: true
})
export class RevistaTimelinePage {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly timelineData = signal<TimelineYear[]>([]);
  readonly activeTab = signal<TimelineTab>('summary');
  readonly typeFilter = signal<TypeFilter>('ALL');
  readonly statusFilter = signal<StatusFilter>('ALL');

  readonly filteredTimeline = computed(() => {
    const activeType = this.typeFilter();
    const activeStatus = this.statusFilter();

    return this.timelineData()
      .map((yearItem) => ({
        ...yearItem,
        journals: yearItem.journals.filter((journal) => {
          const matchesType = this.matchesTypeFilter(journal, activeType);
          const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
          return matchesType && matchesStatus;
        }),
      }))
      .filter((yearItem) => yearItem.journals.length > 0);
  });

  readonly yearsRange = computed(() => {
    const timeline = this.filteredTimeline();
    if (timeline.length === 0) return { min: 0, max: 0 };

    return {
      min: timeline[timeline.length - 1].year,
      max: timeline[0].year,
    };
  });

  readonly hasResults = computed(() => this.timelineData().length > 0);
  readonly hasFilteredResults = computed(() => this.filteredTimeline().length > 0);

  readonly summary = computed(() => {
    const timeline = this.filteredTimeline();
    const totalJournals = timeline.reduce((sum, item) => sum + item.journals.length, 0);

    if (timeline.length === 0) {
      return {
        years: 0,
        journals: 0,
        oldestYear: 0,
        newestYear: 0,
      };
    }

    return {
      years: timeline.length,
      journals: totalJournals,
      oldestYear: timeline[timeline.length - 1].year,
      newestYear: timeline[0].year,
    };
  });

  readonly summaryTableRows = computed<SummaryRow[]>(() => {
    return this.filteredTimeline()
      .flatMap((yearItem) =>
        yearItem.journals.map((journal) => {
          const startYear = this.toDisplayValue(journal['jnl_ano_inicio']);
          const endYearRaw = this.toDisplayValue(journal['jnl_ano_final']);

          return {
            name: String(journal.name ?? '-'),
            issn: this.toDisplayValue(journal['jnl_issn']),
            city: this.toDisplayValue(journal['gc_name']),
            startYear,
            endYear: endYearRaw === '0' ? '-' : endYearRaw,
            status: (this.isHistoricJournal(journal) ? 'Histórica' : 'Corrente') as SummaryStatus,
          };
        })
      )
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  });

  readonly chartBars = computed(() => {
    const bars = this.filteredTimeline().map((item) => ({
      year: item.year,
      total: item.journals.length,
    }));

    return bars.sort((a, b) => a.year - b.year);
  });

  readonly maxBarTotal = computed(() => {
    const totals = this.chartBars().map((item) => item.total);
    return totals.length ? Math.max(...totals) : 0;
  });

  constructor() {
    this.loadTimeline();
  }

  loadTimeline(): void {
    this.loading.set(true);
    this.error.set('');

    forkJoin({
      timeline: this.brapciApiService.get<TimelineYear[]>('brapci/timeline/2'),
      journals: this.brapciApiService
        .get<JournalCatalogItem[]>('brapci/source/journal')
        .pipe(catchError(() => of([] as JournalCatalogItem[]))),
    }).subscribe({
      next: (response) => {
        const items = this.parseTimelineResponse(response.timeline);
        const metadataMap = this.buildJournalMetadataMap(response.journals);
        const enriched = this.enrichTimelineWithMetadata(items, metadataMap);

        enriched.sort((a, b) => b.year - a.year);
        this.timelineData.set(enriched);
        this.loading.set(false);
      },
      error: () => {
        this.timelineData.set([]);
        this.error.set('Não foi possível carregar o timeline de revistas. Tente novamente mais tarde.');
        this.loading.set(false);
      },
    });
  }

  private parseTimelineResponse(response: any): TimelineYear[] {
    if (Array.isArray(response)) {
      return this.normalizeTimeline(response);
    }

    if (response && typeof response === 'object') {
      if (Array.isArray(response.data)) {
        return this.normalizeTimeline(response.data);
      }
      if (Array.isArray(response.items)) {
        return this.normalizeTimeline(response.items);
      }
      if (Array.isArray(response.timeline)) {
        return this.normalizeTimeline(response.timeline);
      }
    }

    return [];
  }

  private normalizeTimeline(items: unknown[]): TimelineYear[] {
    return items
      .map((item) => {
        if (!item || typeof item !== 'object') {
          return null;
        }

        const timelineItem = item as Record<string, unknown>;
        const yearNumber = Number.parseInt(String(timelineItem['year'] ?? ''), 10);
        const journals = Array.isArray(timelineItem['journals'])
          ? (timelineItem['journals'] as TimelineJournal[])
          : [];

        if (!Number.isFinite(yearNumber) || journals.length === 0) {
          return null;
        }

        return {
          year: yearNumber,
          journals,
        };
      })
      .filter((item): item is TimelineYear => item !== null);
  }

  private enrichTimelineWithMetadata(
    timeline: TimelineYear[],
    metadataMap: Map<
      string,
      Pick<JournalCatalogItem, 'jnl_collection' | 'jnl_historic' | 'jnl_issn' | 'gc_name' | 'jnl_ano_inicio' | 'jnl_ano_final'>
    >
  ): TimelineYear[] {
    return timeline.map((yearItem) => ({
      ...yearItem,
      journals: yearItem.journals.map((journal) => {
        const journalId = this.normalizeId(this.getJournalLinkId(journal));
        const metadata = metadataMap.get(journalId);

        if (!metadata) {
          return journal;
        }

        return {
          ...journal,
          jnl_issn: journal['jnl_issn'] ?? metadata.jnl_issn,
          gc_name: journal['gc_name'] ?? metadata.gc_name,
          jnl_ano_inicio: journal['jnl_ano_inicio'] ?? metadata.jnl_ano_inicio,
          jnl_ano_final: journal['jnl_ano_final'] ?? metadata.jnl_ano_final,
          jnl_collection: journal.jnl_collection ?? metadata.jnl_collection,
          jnl_historic: journal.jnl_historic ?? metadata.jnl_historic,
        };
      }),
    }));
  }

  private buildJournalMetadataMap(
    journals: JournalCatalogItem[]
  ): Map<
    string,
    Pick<JournalCatalogItem, 'jnl_collection' | 'jnl_historic' | 'jnl_issn' | 'gc_name' | 'jnl_ano_inicio' | 'jnl_ano_final'>
  > {
    const map = new Map<
      string,
      Pick<JournalCatalogItem, 'jnl_collection' | 'jnl_historic' | 'jnl_issn' | 'gc_name' | 'jnl_ano_inicio' | 'jnl_ano_final'>
    >();

    for (const journal of journals) {
      const metadata = {
        jnl_collection: journal.jnl_collection,
        jnl_historic: journal.jnl_historic,
        jnl_issn: journal.jnl_issn,
        gc_name: journal.gc_name,
        jnl_ano_inicio: journal.jnl_ano_inicio,
        jnl_ano_final: journal.jnl_ano_final,
      };

      const keys = [journal.id_jnl, journal.jnl_frbr]
        .map((value) => this.normalizeId(value))
        .filter((value) => value.length > 0);

      for (const key of keys) {
        map.set(key, metadata);
      }
    }

    return map;
  }

  private normalizeId(value: unknown): string {
    return String(value ?? '').trim();
  }

  setActiveTab(tab: TimelineTab): void {
    this.activeTab.set(tab);
  }

  setTypeFilter(type: TypeFilter): void {
    this.typeFilter.set(type);
  }

  setStatusFilter(status: StatusFilter): void {
    this.statusFilter.set(status);
  }

  exportCsv(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const rows = this.filteredTimeline().flatMap((yearItem) =>
      yearItem.journals.map((journal) => ({
        year: yearItem.year,
        id: this.getJournalLinkId(journal),
        name: String(journal.name ?? ''),
        jnl_collection: String(journal.jnl_collection ?? ''),
        jnl_historic: String(journal.jnl_historic ?? ''),
      }))
    );

    if (!rows.length) {
      return;
    }

    const headers = ['year', 'id', 'name', 'jnl_collection', 'jnl_historic'];
    const csvRows = [
      headers,
      ...rows.map((row) => headers.map((header) => this.csvValue(row[header as keyof typeof row]))),
    ];

    const csvContent = csvRows.map((line) => line.map((cell) => this.escapeCsv(cell)).join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'revistas-timeline.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  barWidth(total: number): number {
    const max = this.maxBarTotal();
    if (!max) {
      return 0;
    }

    return Math.max(5, Math.round((total / max) * 100));
  }

  getJournalLinkId(journal: TimelineJournal): string {
    const id = String(journal.ID ?? journal['id_jnl'] ?? journal['id'] ?? journal['jnl_frbr'] ?? '').trim();
    return id;
  }

  getJournalsForYear(year: number): TimelineJournal[] {
    const yearData = this.filteredTimeline().find((item) => item.year === year);
    return yearData?.journals || [];
  }

  private matchesTypeFilter(journal: TimelineJournal, type: TypeFilter): boolean {
    if (type === 'ALL') {
      return true;
    }

    const collection = this.normalizeCollection(journal);
    return collection === type;
  }

  private matchesStatusFilter(journal: TimelineJournal, status: StatusFilter): boolean {
    if (status === 'ALL') {
      return true;
    }

    const isHistoric = this.isHistoricJournal(journal);
    return status === 'HISTORIC' ? isHistoric : !isHistoric;
  }

  private normalizeCollection(journal: TimelineJournal): string {
    const value = String(journal.jnl_collection ?? '')
      .trim()
      .toUpperCase();

    return value === 'JA' || value === 'JE' ? value : '';
  }

  private isHistoricJournal(journal: TimelineJournal): boolean {
    const value = journal.jnl_historic;

    if (typeof value === 'number') {
      return value === 1;
    }

    if (typeof value === 'string') {
      return value.trim() === '1';
    }

    return value === true;
  }

  private csvValue(value: unknown): string {
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

  private escapeCsv(value: string): string {
    return `"${value.replaceAll('"', '""')}"`;
  }

  private toDisplayValue(value: unknown): string {
    const parsed = String(value ?? '').trim();
    return parsed.length ? parsed : '-';
  }
}
