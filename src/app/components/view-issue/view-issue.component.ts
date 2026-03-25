import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

type JsonRecord = Record<string, unknown>;
type TabId = 'works' | 'authors' | 'json';

type WorkItem = {
  text: string;
  link?: string;
};

@Component({
  selector: 'app-view-issue',
  imports: [CommonModule],
  templateUrl: './view-issue.component.html',
  styleUrl: './view-issue.component.scss'
})
export class ViewIssueComponent {
  @Input({ required: true }) data: unknown = null;
  readonly activeTab = signal<TabId>('works');

  readonly title = computed(() => this.field(['title', 'titulo', 'name', 'jnl_name', 'journal']));

  readonly works = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as WorkItem[];
    }

    const source = this.pickArraySource(record, ['works', 'trabalhos', 'items', 'articles', 'docs']);
    if (!source) {
      return [] as WorkItem[];
    }

    if (Array.isArray(source)) {
      return source
        .map((item) => this.normalizeWorkItem(item))
        .filter((item): item is WorkItem => item !== null);
    }

    return Object.values(source)
      .flatMap((value) => (Array.isArray(value) ? value : [value]))
      .map((item) => this.normalizeWorkItem(item))
      .filter((item): item is WorkItem => item !== null);
  });

  readonly authors = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as string[];
    }

    const rawList = this.pickArraySource(record, ['authors', 'autores', 'coauthors', 'co_autores']);
    if (!rawList || !Array.isArray(rawList)) {
      return [] as string[];
    }

    return rawList
      .map((item) => this.itemToText(item))
      .filter((item) => item.length > 0)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
  });

  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  private normalizeWorkItem(item: unknown): WorkItem | null {
    if (typeof item === 'string' && item.trim()) {
      return { text: item.trim() };
    }

    if (typeof item === 'number' && Number.isFinite(item)) {
      return { text: String(item) };
    }

    if (!item || typeof item !== 'object') {
      return null;
    }

    const data = item as JsonRecord;
    const text = this.itemToText(item);
    if (!text) {
      return null;
    }

    const idCandidate = data['ID'] ?? data['id'] ?? data['doc_id'] ?? data['work_id'];
    const link = this.idToLink(idCandidate);

    return link ? { text, link } : { text };
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
}
