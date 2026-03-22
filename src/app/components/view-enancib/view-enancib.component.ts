import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

type JsonRecord = Record<string, unknown>;
type TabId = 'editions' | 'summary' | 'authors' | 'json';

@Component({
  selector: 'app-view-enancib',
  imports: [CommonModule],
  templateUrl: './view-enancib.component.html',
  styleUrl: './view-enancib.component.scss'
})
export class ViewEnancibComponent {
  @Input({ required: true }) data: unknown = null;
  readonly activeTab = signal<TabId>('summary');

  readonly title = computed(() => this.field(['jnl_name', 'title', 'name']));
  readonly editions = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as string[];
    }

    const rawList = this.arrayFromKeys(record, [
      'editions',
      'edition',
      'edition_list',
      'events',
      'eventos',
      'lista_edicoes',
      'items'
    ]);

    const normalized = rawList
      .map((item) => this.itemToText(item))
      .filter((text) => text.length > 0);

    if (normalized.length > 0) {
      return normalized;
    }

    const startYear = this.field(['jnl_ano_inicio', 'start_year']);
    const endYear = this.field(['jnl_ano_final', 'end_year']);
    if (startYear !== '-' || endYear !== '-') {
      return [`Periodo do evento: ${startYear} - ${endYear}`];
    }

    return [] as string[];
  });

  readonly authors = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as string[];
    }

    const rawList = this.arrayFromKeys(record, [
      'authors',
      'author',
      'autores',
      'coauthors',
      'participants',
      'organizadores'
    ]);

    return rawList
      .map((item) => this.itemToText(item))
      .filter((text) => text.length > 0)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
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

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }

  private arrayFromKeys(record: JsonRecord, keys: string[]): unknown[] {
    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        return value;
      }
    }

    return [];
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
    for (const key of ['title', 'name', 'event', 'edition', 'label', 'autor', 'author', 'nome']) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }

    return '';
  }
}
