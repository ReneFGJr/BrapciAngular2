import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type JsonRecord = Record<string, unknown>;

type ReferenceMeta = {
  label: string;
  value: string;
};

type ReferenceEntry = {
  index: number;
  citation: string;
  authors: string;
  meta: ReferenceMeta[];
};

@Component({
  selector: 'app-article-references-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-references-list.component.html',
  styleUrls: ['./article-references-list.component.scss'],
})
export class ArticleReferencesListComponent {
  constructor(private readonly sanitizer: DomSanitizer) {}

  @Input()
  set article(value: unknown) {
    this.rawArticle.set(value);
    const extractedId = this.extractIdFromPayload(value);
    if (extractedId.length > 0) {
      this.referenceId.set(extractedId);
    }
  }

  @Input()
  set references(value: unknown) {
    this.rawReferences.set(value);
  }

  @Input({ alias: 'id' })
  set externalId(value: unknown) {
    const id = this.toText(value);
    if (id.length > 0) {
      this.referenceId.set(id);
      return;
    }

    const extractedId = this.extractIdFromPayload(this.rawArticle());
    if (extractedId.length > 0) {
      this.referenceId.set(extractedId);
    }
  }

  @Input()
  set articleId(value: unknown) {
    const id = this.toText(value);
    if (id.length > 0) {
      this.referenceId.set(id);
      return;
    }

    const extractedId = this.extractIdFromPayload(this.rawArticle());
    if (extractedId.length > 0) {
      this.referenceId.set(extractedId);
    }
  }

  private readonly rawArticle = signal<unknown>(null);
  private readonly rawReferences = signal<unknown>([]);
  private readonly referenceId = signal('');
  readonly isImportPanelOpen = signal(false);
  readonly extractedId = computed(() => this.referenceId());

  readonly normalizedReferences = computed(() => this.normalizeReferences(this.rawReferences()));
  readonly importFrameUrl = computed<SafeResourceUrl | null>(() => {
    const id = this.referenceId();
    if (!id) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://cip.brapci.inf.br/tools/nlp/cited/${encodeURIComponent(id)}`,
    );
  });

  openImportPanel(): void {
    this.isImportPanelOpen.set(true);
  }

  closeImportPanel(): void {
    this.isImportPanelOpen.set(false);
  }

  private normalizeReferences(value: unknown): ReferenceEntry[] {
    if (Array.isArray(value)) {
      return value
        .map((item, index) => this.toReferenceEntry(item, index + 1))
        .filter((reference) => reference.citation.length > 0 || reference.meta.length > 0);
    }

    if (typeof value === 'string') {
      const parsed = this.tryParseJson(value);
      if (parsed !== undefined) {
        return this.normalizeReferences(parsed);
      }

      return this.parseTextReferences(value);
    }

    if (value && typeof value === 'object') {
      const reference = this.toReferenceEntry(value, 1);
      return reference.citation.length > 0 || reference.meta.length > 0 ? [reference] : [];
    }

    return [];
  }

  private parseTextReferences(value: string): ReferenceEntry[] {
    const blocks = value
      .split(/\r?\n+/)
      .map((block) => this.stripLeadingNumber(block.trim()))
      .filter((block) => block.length > 0);

    return blocks.map((citation, index) => ({
      index: index + 1,
      citation,
      authors: '',
      meta: [],
    }));
  }

  private toReferenceEntry(value: unknown, index: number): ReferenceEntry {
    if (typeof value === 'string') {
      return {
        index,
        citation: this.stripLeadingNumber(value.trim()),
        authors: '',
        meta: [],
      };
    }

    if (!value || typeof value !== 'object') {
      return {
        index,
        citation: '',
        authors: '',
        meta: [],
      };
    }

    const record = value as JsonRecord;
    const citation =
      this.pickText(record, ['ca_text', 'text', 'title', 'name', 'reference', 'citation']) ||
      this.buildFallbackCitation(record);
    const authors = this.pickText(record, ['AUTHORS', 'authors', 'author', 'creator']);
    const meta: ReferenceMeta[] = [];

    this.pushMeta(meta, 'ID', this.pickText(record, ['id_ca', 'ca_id']));
    this.pushMeta(meta, 'RDF', this.pickText(record, ['ca_rdf']));
    this.pushMeta(meta, 'DOI', this.pickText(record, ['ca_doi', 'doi', 'DOI']));
    this.pushMeta(meta, 'Ano', this.pickText(record, ['ca_year', 'year', 'ano']));
    this.pushMeta(meta, 'Periódico', this.pickText(record, ['ca_journal', 'journal', 'source', 'jnl_name']));
    this.pushMeta(meta, 'Origem', this.pickText(record, ['ca_journal_origem']));
    this.pushMeta(meta, 'Volume', this.pickText(record, ['ca_vol', 'volume']));
    this.pushMeta(meta, 'Número', this.pickText(record, ['ca_nr', 'number', 'issue']));
    this.pushMeta(meta, 'Páginas', this.pickText(record, ['ca_pag', 'pages', 'page']));
    this.pushMeta(meta, 'Tipo', this.pickText(record, ['ca_tipo', 'type']));
    this.pushMeta(meta, 'Status', this.pickText(record, ['ca_status', 'status']));
    this.pushMeta(meta, 'Ordem', this.pickText(record, ['ca_ordem', 'order']));
    this.pushMeta(meta, 'Criado em', this.pickText(record, ['ca_created_at']));
    this.pushMeta(meta, 'Atualizado em', this.pickText(record, ['ca_update_at']));
    this.pushMeta(meta, 'AI', this.pickText(record, ['ca_ai']));

    return {
      index,
      citation,
      authors,
      meta,
    };
  }

  private buildFallbackCitation(record: JsonRecord): string {
    const authors = this.pickText(record, ['AUTHORS', 'authors', 'author', 'creator']);
    const title = this.pickText(record, ['title', 'titulo', 'ca_title']);
    const journal = this.pickText(record, ['ca_journal', 'journal', 'source', 'jnl_name']);
    const year = this.pickText(record, ['ca_year', 'year', 'ano']);

    return [authors, title, journal, year].filter((part) => part.length > 0).join(' • ');
  }

  private pushMeta(meta: ReferenceMeta[], label: string, value: string): void {
    if (value.length > 0) {
      meta.push({ label, value });
    }
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = this.toText(record[key]);
      if (value.length > 0) {
        return value;
      }
    }

    return '';
  }

  private toText(value: unknown): string {
    if (typeof value === 'string') {
      const text = value.trim();
      if (!text) {
        return '';
      }

      const lowered = text.toLowerCase();
      if (text === '0' || lowered === 'null' || lowered === 'undefined' || text === '-') {
        return '';
      }

      return text;
    }

    if (typeof value === 'number' && Number.isFinite(value) && value !== 0) {
      return String(value);
    }

    return '';
  }

  private stripLeadingNumber(value: string): string {
    return value.replace(/^\s*\d+\s*[\).:-]?\s*/, '').trim();
  }

  private tryParseJson(value: string): unknown | undefined {
    const trimmed = value.trim();
    if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) {
      return undefined;
    }

    try {
      return JSON.parse(trimmed);
    } catch {
      return undefined;
    }
  }

  private extractIdFromPayload(value: unknown): string {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      const parsed = this.tryParseJson(value);
      if (parsed !== undefined) {
        return this.extractIdFromPayload(parsed);
      }

      return '';
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        const id = this.extractIdFromPayload(item);
        if (id.length > 0) {
          return id;
        }
      }

      return '';
    }

    if (typeof value !== 'object') {
      return '';
    }

    const record = value as JsonRecord;
    return this.pickText(record, ['ID', 'id', 'Id', 'id_ca', 'ca_id']);
  }
}
