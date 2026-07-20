import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CitationTabsComponent } from '../citation-tabs/citation-tabs.component';

type JsonRecord = Record<string, unknown>;
type TabId = 'summary' | 'works' | 'json';

type SubjectWorkItem = {
  id: string;
  html: string;
};

type SubjectDataItem = {
  id: string;
  className: string;
  property: string;
  caption: string;
  language: string;
  relationType: string;
};

@Component({
  selector: 'app-view-subject',
  standalone: true,
  imports: [CommonModule, TranslateModule, CitationTabsComponent],
  templateUrl: './view-subject.component.html',
  styleUrl: './view-subject.component.scss'
})
export class ViewSubjectComponent {
  @Input({ required: true }) data: unknown = null;

  readonly activeTab = signal<TabId>('summary');

  readonly title = computed(() => this.field(['title', 'name', 'label', 'subject']));
  readonly subjectId = computed(() => this.field(['ID', 'id']));
  readonly classe = computed(() => this.field(['Classe', 'classe', 'Class', 'class']));
  readonly description = computed(() => this.field(['description', 'summary', 'resume', 'about']));
  readonly prefLabel = computed(() => this.extractPrefLabel());
  readonly views = computed(() => this.field(['Views', 'views']));
  readonly downloads = computed(() => this.field(['Download', 'download', 'downloads']));
  readonly likes = computed(() => this.field(['Likes', 'likes']));
  readonly works = computed(() => this.extractWorks());
  readonly worksTotal = computed(() => this.works().length);
  readonly dataItems = computed(() => this.extractDataItems());
  readonly dataTotal = computed(() => this.dataItems().length);
  readonly classSummary = computed(() => this.summarizeBy(this.dataItems(), (item) => item.className));
  readonly languageSummary = computed(() => this.summarizeBy(this.dataItems(), (item) => item.language));
  readonly citedAbnt = computed(() => this.extractCitation('abnt'));
  readonly citedApa = computed(() => this.extractCitation('apa'));
  readonly citedVancouver = computed(() => this.extractCitation('vancouver'));
  readonly citations = computed(() => ({
    abnt: this.citedAbnt(),
    apa: this.citedApa(),
    vancouver: this.citedVancouver(),
  }));
  readonly hasCitationData = computed(() => Boolean(this.citedAbnt() || this.citedApa() || this.citedVancouver()));
  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  trackByWork(_: number, item: SubjectWorkItem): string {
    return item.id || item.html;
  }

  trackByValue(_: number, item: string): string {
    return item;
  }

  trackBySummary(_: number, item: { label: string; total: number }): string {
    return item.label;
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

  private extractPrefLabel(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    const rawData = record['data'];
    if (!Array.isArray(rawData)) {
      return '-';
    }

    for (const entry of rawData) {
      const item = this.asRecord(entry);
      if (!item) {
        continue;
      }

      const property = this.stringValue(item['Property']);
      const caption = this.stringValue(item['Caption']);
      if (property === 'prefLabel' && caption) {
        return caption;
      }
    }

    return '-';
  }

  private extractWorks(): SubjectWorkItem[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const values = Array.isArray(record['works']) ? record['works'] : [];
    const ids = Array.isArray(record['worksID']) ? record['worksID'] : [];

    return values
      .map((entry, index) => {
        if (typeof entry !== 'string' || !entry.trim()) {
          return null;
        }

        const id = typeof ids[index] === 'string' ? ids[index] : String(index + 1);
        return {
          id,
          html: entry.trim(),
        };
      })
      .filter((item): item is SubjectWorkItem => item !== null);
  }

  private extractDataItems(): SubjectDataItem[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const values = record['data'];
    if (!Array.isArray(values)) {
      return [];
    }

    return values
      .map((entry) => {
        const item = this.asRecord(entry);
        if (!item) {
          return null;
        }

        return {
          id: this.stringValue(item['ID']) || '-',
          className: this.stringValue(item['Class']) || '-',
          property: this.stringValue(item['Property']) || '-',
          caption: this.stringValue(item['Caption']) || '-',
          language: this.stringValue(item['Lang']) || '-',
          relationType: this.stringValue(item['tp']) || '-',
        };
      })
      .filter((item): item is SubjectDataItem => item !== null);
  }

  private summarizeBy<T>(items: T[], pick: (item: T) => string): Array<{ label: string; total: number }> {
    const totals = new Map<string, number>();

    for (const item of items) {
      const label = pick(item).trim() || '-';
      totals.set(label, (totals.get(label) ?? 0) + 1);
    }

    return [...totals.entries()]
      .map(([label, total]) => ({ label, total }))
      .sort((left, right) => right.total - left.total || left.label.localeCompare(right.label, 'pt-BR', { sensitivity: 'base' }));
  }

  private extractCitation(key: 'abnt' | 'apa' | 'vancouver'): string {
    const record = this.asRecord(this.data);
    const cited = this.asRecord(record?.['cited']);
    const value = cited?.[key];
    return typeof value === 'string' && value.trim() ? value.trim() : '';
  }

  private stringValue(value: unknown): string {
    if (typeof value === 'string') {
      return value.trim();
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }

    return '';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as JsonRecord) : null;
  }
}
