import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

type JsonRecord = Record<string, unknown>;
type TabId = 'summary' | 'works' | 'metadata' | 'json';

type CorporateBodyWork = {
  id: string;
  html: string;
};

type CorporateBodyMetadata = {
  label: string;
  value: string;
};

type CorporateBodyPerson = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-view-corporate-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-corporate-body.component.html',
  styleUrl: './view-corporate-body.component.scss',
})
export class ViewCorporateBodyComponent {
  @Input({ required: true }) data: unknown = null;

  readonly activeTab = signal<TabId>('summary');
  readonly name = computed(() =>
    this.field(['name', 'Name', 'title', 'Title', 'label', 'Label', 'corporateBody', 'publisher']),
  );
  readonly corporateBodyId = computed(() => this.field(['ID', 'id']));
  readonly className = computed(() => this.field(['Classe', 'classe', 'Class', 'class']));
  readonly acronym = computed(() => this.field(['acronym', 'Acronym', 'sigla', 'abbreviation']));
  readonly location = computed(() =>
    this.field(['place', 'Place', 'location', 'Location', 'city', 'Cidade', 'country', 'Country']),
  );
  readonly description = computed(() =>
    this.field(['description', 'Description', 'summary', 'resume', 'about', 'note']),
  );
  readonly website = computed(() => this.urlField(['url', 'URL', 'website', 'Website', 'site']));
  readonly logotype = computed(() => this.extractRelation('hasLogotype', true));
  readonly rorId = computed(() =>
    this.normalizeRorId(this.extractRelation('hasCorporateBodyRORID')),
  );
  readonly rorUrl = computed(() => (this.rorId() ? `https://ror.org/${this.rorId()}` : ''));
  readonly people = computed(() => this.extractPeople());
  readonly views = computed(() => this.field(['Views', 'views']));
  readonly downloads = computed(() => this.field(['Download', 'download', 'downloads']));
  readonly likes = computed(() => this.field(['Likes', 'likes']));
  readonly works = computed(() => this.extractWorks());
  readonly metadata = computed(() => this.extractMetadata());
  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  private extractWorks(): CorporateBodyWork[] {
    const record = this.asRecord(this.data);
    if (!record) return [];

    const raw =
      record['works'] ?? record['Works'] ?? record['publications'] ?? record['Publications'];
    const ids = Array.isArray(record['worksID']) ? record['worksID'] : [];
    const entries = Array.isArray(raw)
      ? raw
      : this.asRecord(raw)
        ? Object.values(raw as JsonRecord)
        : [];

    return entries
      .map((entry, index) => {
        const item = this.asRecord(entry);
        const html =
          typeof entry === 'string'
            ? entry.trim()
            : this.stringValue(
                item?.['html'] ?? item?.['citation'] ?? item?.['title'] ?? item?.['name'],
              );
        if (!html) return null;
        const id =
          this.stringValue(item?.['ID'] ?? item?.['id'] ?? ids[index]) || String(index + 1);
        return { id, html };
      })
      .filter((item): item is CorporateBodyWork => item !== null);
  }

  private extractMetadata(): CorporateBodyMetadata[] {
    const record = this.asRecord(this.data);
    if (!record) return [];

    const raw = record['data'] ?? record['metadata'] ?? record['Metadata'];
    if (!Array.isArray(raw)) return [];

    return raw.flatMap((entry) => {
      const item = this.asRecord(entry);
      if (!item) return [];
      const label = this.stringValue(
        item['Property'] ?? item['property'] ?? item['label'] ?? item['name'],
      );
      const value = this.stringValue(
        item['Caption'] ?? item['caption'] ?? item['value'] ?? item['Value'],
      );
      if (['hasLogotype', 'hasCorporateBodyRORID', 'altLabel'].includes(label)) return [];
      return label && value ? [{ label, value }] : [];
    });
  }

  private extractRelation(property: string, isUrl = false): string {
    const record = this.asRecord(this.data);
    if (!record) return '';

    const direct = this.stringValue(record[property]);
    const value =
      direct ||
      this.dataEntries(record).reduce((found, entry) => {
        if (found || this.stringValue(entry['Property'] ?? entry['property']) !== property)
          return found;
        return this.stringValue(
          entry['Caption'] ?? entry['caption'] ?? entry['value'] ?? entry['Value'],
        );
      }, '');

    if (!value || !isUrl) return value;
    return /^https?:\/\//i.test(value) || value.startsWith('/') ? value : `https://${value}`;
  }

  private extractPeople(): CorporateBodyPerson[] {
    const record = this.asRecord(this.data);
    if (!record) return [];

    const unique = new Map<string, CorporateBodyPerson>();
    for (const entry of this.dataEntries(record)) {
      const className = this.stringValue(entry['Class'] ?? entry['class']);
      const property = this.stringValue(entry['Property'] ?? entry['property']);
      if (className.toLowerCase() !== 'person' || property !== 'altLabel') continue;

      const id = this.stringValue(entry['ID'] ?? entry['id']);
      const name = this.stringValue(entry['Caption'] ?? entry['caption']);
      if (id && name) unique.set(id, { id, name });
    }

    return [...unique.values()].sort((left, right) =>
      left.name.localeCompare(right.name, 'pt-BR', { sensitivity: 'base' }),
    );
  }

  private dataEntries(record: JsonRecord): JsonRecord[] {
    return Array.isArray(record['data'])
      ? record['data']
          .map((entry) => this.asRecord(entry))
          .filter((entry): entry is JsonRecord => entry !== null)
      : [];
  }

  private normalizeRorId(value: string): string {
    return value
      .trim()
      .replace(/^https?:\/\/ror\.org\//i, '')
      .replace(/^ror\.org\//i, '');
  }

  private field(keys: string[]): string {
    const record = this.asRecord(this.data);
    for (const key of keys) {
      const value = this.stringValue(record?.[key]);
      if (value) return value;
    }
    return '-';
  }

  private urlField(keys: string[]): string {
    const value = this.field(keys);
    if (value === '-') return '';
    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
  }

  private stringValue(value: unknown): string {
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'number' && Number.isFinite(value)) return String(value);
    return '';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as JsonRecord)
      : null;
  }
}
