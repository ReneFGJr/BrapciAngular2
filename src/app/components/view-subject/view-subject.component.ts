import { CommonModule } from '@angular/common';
import { Component, Input, computed } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type JsonRecord = Record<string, unknown>;

@Component({
  selector: 'app-view-subject',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './view-subject.component.html',
  styleUrl: './view-subject.component.scss'
})
export class ViewSubjectComponent {
  @Input({ required: true }) data: unknown = null;

  readonly title = computed(() => this.field(['name', 'title', 'label', 'subject']));
  readonly subjectId = computed(() => this.field(['ID', 'id']));
  readonly classe = computed(() => this.field(['Classe', 'classe', 'Class', 'class']));
  readonly description = computed(() => this.field(['description', 'summary', 'resume', 'about']));
  readonly broaderTerms = computed(() => this.extractRelation(['broader', 'parents', 'broaderTerms']));
  readonly narrowerTerms = computed(() => this.extractRelation(['narrower', 'children', 'narrowerTerms']));
  readonly relatedTerms = computed(() => this.extractRelation(['related', 'relatedTerms', 'seeAlso']));
  readonly aliases = computed(() => this.extractRelation(['aliases', 'altLabels', 'variants']));
  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  trackByValue(_: number, item: string): string {
    return item;
  }

  private field(keys: string[]): string {
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

  private extractRelation(keys: string[]): string[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    for (const key of keys) {
      const values = this.normalizeList(record[key]);
      if (values.length > 0) {
        return values;
      }
    }

    return [];
  }

  private normalizeList(value: unknown): string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    const items = value
      .map((entry) => this.toLabel(entry))
      .filter((entry): entry is string => entry.length > 0);

    return [...new Set(items)];
  }

  private toLabel(value: unknown): string {
    if (typeof value === 'string') {
      return value.trim();
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }

    const record = this.asRecord(value);
    if (!record) {
      return '';
    }

    const candidate =
      record['name'] ??
      record['label'] ??
      record['title'] ??
      record['subject'] ??
      record['description'] ??
      record['ID'] ??
      record['id'];

    if (typeof candidate === 'string' && candidate.trim()) {
      return candidate.trim();
    }

    if (typeof candidate === 'number' && Number.isFinite(candidate)) {
      return String(candidate);
    }

    return '';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as JsonRecord) : null;
  }
}
