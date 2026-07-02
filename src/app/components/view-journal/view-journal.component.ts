import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { ViewType01Component } from '../issue/view-type-01/view-type-01.component';

type JsonRecord = Record<string, unknown>;
type TabId = 'summary' | 'issues' | 'json';

@Component({
  selector: 'app-view-journal',
  imports: [CommonModule, ViewType01Component],
  templateUrl: './view-journal.component.html',
  styleUrl: './view-journal.component.scss'
})
export class ViewJournalComponent {
  @Input({ required: true }) data: unknown = null;
  readonly activeTab = signal<TabId>('summary');

  readonly title = computed(() => this.field(['jnl_name', 'title', 'name']));
  readonly acronym = computed(() => this.field(['jnl_name_abrev', 'acronym', 'sigla']));
  readonly journalId = computed(() => this.field(['id_jnl', 'ID', 'id']));
  readonly publisher = computed(() => this.field(['publisher', 'jnl_editor', 'editor']));
  readonly issn = computed(() => this.field(['jnl_issn', 'issn']));
  readonly eissn = computed(() => this.field(['jnl_eissn', 'eissn']));
  readonly collection = computed(() => this.field(['jnl_collection', 'collection']));
  readonly period = computed(() => {
    const start = this.field(['jnl_ano_inicio', 'start_year']);
    const end = this.field(['jnl_ano_final', 'end_year']);

    if (start === '-' && end === '-') {
      return '-';
    }

    if (start !== '-' && end !== '-') {
      return `${start} - ${end}`;
    }

    return start !== '-' ? `${start} -` : `- ${end}`;
  });

  readonly url = computed(() => this.field(['jnl_url', 'url']));
  readonly oaiUrl = computed(() => this.field(['jnl_url_oai', 'oai_url']));
  readonly coverUrl = computed(() => this.field(['cover', 'image', 'cover_url']));

  readonly issueItems = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as unknown[];
    }

    const items = [...this.arrayFromKeys(record, ['issues']), ...this.arrayFromKeys(record, ['issue'])];
    if (items.length === 0) {
      return [] as unknown[];
    }

    const seen = new Set<string>();
    const unique: unknown[] = [];

    for (const item of items) {
      const key = this.issueKey(item);
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      unique.push(item);
    }

    return unique;
  });

  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);
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

  private arrayFromKeys(record: JsonRecord, keys: string[]): unknown[] {
    const collected: unknown[] = [];

    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        collected.push(...value);
      } else if (value && typeof value === 'object') {
        collected.push(value);
      }
    }

    return collected;
  }

  private issueKey(item: unknown): string {
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item);
    }

    if (!item || typeof item !== 'object') {
      return '';
    }

    const record = item as JsonRecord;
    const candidates = ['ID', 'id', 'issue_id', 'id_issue', 'id_edition', 'YEAR', 'year', 'VOL', 'vol', 'NR', 'nr'];

    for (const key of candidates) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return `${key}:${value.trim()}`;
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return `${key}:${value}`;
      }
    }

    return JSON.stringify(record);
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }
}
