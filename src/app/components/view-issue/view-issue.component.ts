import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';

type JsonRecord = Record<string, unknown>;
type TabId = 'summary' | 'works' | 'authors' | 'keywords' | 'json';

type WorkItem = {
  id: string;
  text: string;
  link?: string;
  authors: string[];
  session: string;
  pdf: string;
};

type WorkGroup = {
  name: string;
  items: WorkItem[];
};

type NamedStat = {
  name: string;
  total: number;
};

type CreatorAuthor = {
  name: string;
  id?: string;
};

type AuthorWorkStat = {
  name: string;
  id?: string;
  totalWorks: number;
};

type AuthorDistributionStat = {
  authorsCount: number;
  totalWorks: number;
};

type KeywordStat = {
  name: string;
  total: number;
  size: number;
};

@Component({
  selector: 'app-view-issue',
  imports: [CommonModule, TagCloudComponent, TranslateModule],
  templateUrl: './view-issue.component.html',
  styleUrl: './view-issue.component.scss'
})
export class ViewIssueComponent {
  @Input({ required: true }) data: unknown = null;
  readonly activeTab = signal<TabId>('summary');

  readonly title = computed(() => this.field(['title', 'titulo', 'name', 'jnl_name', 'journal']));
  readonly issueId = computed(() => this.field(['ID', 'id', 'issue_id']));
  readonly year = computed(() => this.field(['year', 'YEAR', 'ano']));
  readonly sourceName = computed(() => this.pickText(this.asRecord(this.data), ['source', 'name']) ?? '-');
  readonly journalId = computed(() => this.pickText(this.pickRecord(this.asRecord(this.data), ['source']), ['id_jnl', 'ID', 'id']) ?? '-');
  readonly acronym = computed(() => this.field(['acron', 'acronym', 'sigla']));
  readonly place = computed(() => this.field(['place', 'city', 'cidade', 'location', 'local']));
  readonly issueNumber = computed(() => this.field(['nr', 'NR', 'number', 'num']));
  readonly worksTotal = computed(() => this.toNumber(this.field(['worksTotal', 'works_total'])) ?? this.workGroups().reduce((sum, group) => sum + group.items.length, 0));

  readonly workGroups = computed(() => this.buildWorkGroups());

  readonly works = computed(() => this.workGroups().flatMap((group) => group.items));

  readonly authors = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as CreatorAuthor[];
    }

    const rawList = this.pickArraySource(record, ['authors', 'autores', 'coauthors', 'co_autores']);
    if (!rawList || !Array.isArray(rawList)) {
      return [] as CreatorAuthor[];
    }

    return rawList
      .map((item) => this.normalizeCreatorAuthor(item))
      .filter((item): item is CreatorAuthor => item !== null)
      .filter((value, index, arr) => arr.findIndex((item) => this.normalizeKey(item.name) === this.normalizeKey(value.name)) === index)
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));
  });

  readonly authorWorkStats = computed(() => {
    const counts = new Map<string, number>();
    const authorIds = new Map<string, string | undefined>();

    for (const author of this.authors()) {
      authorIds.set(this.normalizeKey(author.name), author.id);
    }

    for (const work of this.works()) {
      const uniqueAuthors = [...new Set(work.authors.map((author) => author.trim()).filter((author) => author.length > 0))];

      for (const author of uniqueAuthors) {
        const key = this.normalizeKey(author);
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }

    return [...counts.entries()]
      .map(([key, totalWorks]) => {
        const name = this.authors().find((author) => this.normalizeKey(author.name) === key)?.name ?? key;
        return { name, id: authorIds.get(key), totalWorks };
      })
      .sort((a, b) => b.totalWorks - a.totalWorks || a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));
  });

  readonly authorDistribution = computed(() => {
    const counts = new Map<number, number>();

    for (const work of this.works()) {
      const uniqueAuthors = [...new Set(work.authors.map((author) => author.trim()).filter((author) => author.length > 0))];
      const key = uniqueAuthors.length;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }

    return [...counts.entries()]
      .map(([authorsCount, totalWorks]) => ({ authorsCount, totalWorks }))
      .sort((a, b) => a.authorsCount - b.authorsCount);
  });

  readonly coAuthors = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as NamedStat[];
    }

    const rawList = this.pickArraySource(record, ['coAuthors', 'coauthors']);
    if (!rawList || !Array.isArray(rawList)) {
      return [] as NamedStat[];
    }

    return rawList
      .map((item) => this.normalizeNamedStat(item))
      .filter((item): item is NamedStat => item !== null)
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));
  });

  readonly totalAuthors = computed(() => this.toNumber(this.field(['totalAuthors', 'authorsTotal'])) ?? this.authors().length);
  readonly coAuthorsMedia = computed(() => this.field(['coAuthorsMedia', 'coauthorsMedia']));
  readonly keywords = computed(() => this.buildKeywords());
  readonly keywordsForCloud = computed(() => this.keywords().map((keyword) => ({ label: keyword.name, value: keyword.total })));
  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  exportKeywordsCsv(): void {
    const keywords = this.keywords();
    if (!keywords.length || typeof window === 'undefined') {
      return;
    }

    const escapeCsv = (value: string): string => `"${value.replaceAll('"', '""')}"`;
    const rows = [
      ['Palavra-chave', 'Frequencia'],
      ...keywords.map((keyword) => [keyword.name, String(keyword.total)]),
    ];

    const csvContent = rows
      .map((row) => row.map((cell) => escapeCsv(cell)).join(','))
      .join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${this.slugify(this.title()) || 'palavras-chave'}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  exportAuthorsCsv(): void {
    const authors = this.authorWorkStats();
    if (!authors.length || typeof window === 'undefined') {
      return;
    }

    const escapeCsv = (value: string): string => `"${value.replaceAll('"', '""')}"`;
    const rows = [
      ['Autor', 'Total de trabalhos', 'ID'],
      ...authors.map((author) => [author.name, String(author.totalWorks), author.id ?? '']),
    ];

    const csvContent = rows
      .map((row) => row.map((cell) => escapeCsv(cell)).join(','))
      .join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${this.slugify(this.title()) || 'autores'}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  private buildWorkGroups(): WorkGroup[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const source = this.pickArraySource(record, ['works', 'trabalhos', 'items', 'articles', 'docs']);
    if (!source) {
      return [];
    }

    if (Array.isArray(source)) {
      return source
        .map((item) => this.normalizeWorkGroup(item))
        .filter((item): item is WorkGroup => item !== null);
    }

    return Object.entries(source)
      .map(([name, value]) => {
        const items = Array.isArray(value)
          ? value
          : value && typeof value === 'object'
            ? [value]
            : [];

        const normalizedItems = items
          .map((item) => this.normalizeWorkItem(item))
          .filter((item): item is WorkItem => item !== null);

        return normalizedItems.length > 0 ? { name, items: normalizedItems } : null;
      })
      .filter((item): item is WorkGroup => item !== null);
  }

  private normalizeWorkGroup(item: unknown): WorkGroup | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const name = this.pickText(data, ['name', 'title', 'label', 'SESSION', 'session']) ?? 'Trabalhos';
    const rawItemsSource = this.pickArraySource(data, ['data', 'items', 'works', 'articles']);
    const rawItems = Array.isArray(rawItemsSource)
      ? rawItemsSource
      : rawItemsSource && typeof rawItemsSource === 'object'
        ? Object.values(rawItemsSource)
        : [];

    const normalizedItems = rawItems
      .map((raw) => this.normalizeWorkItem(raw))
      .filter((entry): entry is WorkItem => entry !== null);

    return normalizedItems.length > 0 ? { name, items: normalizedItems } : null;
  }

  private normalizeWorkItem(item: unknown): WorkItem | null {
    if (typeof item === 'string' && item.trim()) {
      return {
        id: item.trim(),
        text: item.trim(),
        authors: [],
        session: '',
        pdf: '',
      };
    }

    if (typeof item === 'number' && Number.isFinite(item)) {
      const value = String(item);
      return {
        id: value,
        text: value,
        authors: [],
        session: '',
        pdf: '',
      };
    }

    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const text = this.pickText(data, ['LEGEND', 'title', 'titulo', 'name', 'nome', 'label', 'work', 'article']) ?? '';
    if (!text) {
      return null;
    }

    const idCandidate = data['ID'] ?? data['id'] ?? data['doc_id'] ?? data['work_id'];
    const link = this.idToLink(idCandidate);
    const authors = this.splitNames(this.pickText(data, ['AUTHORS', 'authors', 'autores', 'author']) ?? '');
    const session = this.pickText(data, ['SESSION', 'session']) ?? '';
    const pdf = this.pickText(data, ['PDF', 'pdf']) ?? '';
    const id = typeof idCandidate === 'string' && idCandidate.trim()
      ? idCandidate.trim()
      : typeof idCandidate === 'number' && Number.isFinite(idCandidate)
        ? String(idCandidate)
        : text;

    return {
      id,
      text,
      link,
      authors,
      session,
      pdf,
    };
  }

  private idToLink(value: unknown): string | undefined {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return `/v/${String(value)}`;
    }

    if (typeof value === 'string' && value.trim()) {
      return `/v/${value.trim()}`;
    }

    return undefined;
  }

  private itemToText(item: unknown): string {
    if (typeof item === 'string' && item.trim()) {
      return item.trim();
    }

    if (typeof item === 'number' && Number.isFinite(item)) {
      return String(item);
    }

    if (!item || typeof item !== 'object') {
      return '';
    }

    const data = item as JsonRecord;
    for (const key of ['title', 'titulo', 'name', 'nome', 'label', 'work', 'article']) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }

    return '';
  }

  private normalizeNamedStat(item: unknown): NamedStat | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const name = this.pickText(data, ['name', 'nome', 'label']) ?? '';
    if (!name) {
      return null;
    }

    const totalRaw = data['total'] ?? data['count'] ?? data['qtd'];
    const total = this.toNumber(totalRaw) ?? 1;

    return { name, total };
  }

  private normalizeCreatorAuthor(item: unknown): CreatorAuthor | null {
    if (typeof item === 'string' && item.trim()) {
      return { name: item.trim() };
    }

    if (typeof item === 'number' && Number.isFinite(item)) {
      return { name: String(item) };
    }

    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const name = this.pickText(data, ['name', 'nome', 'label', 'author']) ?? '';
    if (!name) {
      return null;
    }

    const id = this.pickText(data, ['id', 'ID', 'author_id', 'id_author', 'id_autor']) ?? undefined;
    return { name, id };
  }

  private buildKeywords(): KeywordStat[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const source = record['keywords'];
    const items: NamedStat[] = [];

    if (Array.isArray(source)) {
      for (const item of source) {
        const normalized = this.normalizeNamedStat(item);
        if (normalized) {
          items.push(normalized);
        }
      }
    } else if (source && typeof source === 'object') {
      for (const value of Object.values(source as JsonRecord)) {
        const normalized = this.normalizeNamedStat(value);
        if (normalized) {
          items.push(normalized);
        }
      }
    }

    const merged = new Map<string, number>();
    for (const item of items) {
      const key = item.name.trim().toLowerCase();
      merged.set(key, Math.max(merged.get(key) ?? 0, item.total));
    }

    const totals = [...merged.entries()]
      .map(([key, total]) => ({ name: items.find((item) => item.name.trim().toLowerCase() === key)?.name ?? key, total }))
      .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));

    if (!totals.length) {
      return [];
    }

    const minTotal = totals[totals.length - 1].total;
    const maxTotal = totals[0].total;
    const range = Math.max(maxTotal - minTotal, 1);

    return totals.map((item) => ({
      ...item,
      size: 0.8 + ((item.total - minTotal) / range) * 1.2,
    }));
  }

  private pickText(record: JsonRecord | null, keys: string[]): string | null {
    if (!record) {
      return null;
    }

    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return null;
  }

  private pickRecord(record: JsonRecord | null, keys: string[]): JsonRecord | null {
    if (!record) {
      return null;
    }

    for (const key of keys) {
      const value = record[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value as JsonRecord;
      }
    }

    return null;
  }

  private splitNames(value: string): string[] {
    return value
      .split(/\s*[;|]\s*/)
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
  }

  private toNumber(value: unknown): number | null {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value.replace(',', '.'));
      return Number.isFinite(parsed) ? parsed : null;
    }

    return null;
  }

  field(keys: string[]): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '-';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }

  private pickArraySource(record: JsonRecord, keys: string[]): unknown[] | JsonRecord | null {
    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        return value;
      }

      if (value && typeof value === 'object') {
        return value as JsonRecord;
      }
    }

    return null;
  }

  private slugify(value: string): string {
    return value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private normalizeKey(value: string): string {
    return value.trim().toLowerCase();
  }
}
