import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

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
  template: `
    <div class="references-wrapper">
      @if (normalizedReferences().length === 0) {
        <p class="references-empty">Nenhuma referência disponível.</p>
      } @else {
        <ol class="references-list" aria-label="Lista de referências">
          @for (reference of normalizedReferences(); track reference.index) {
            <li class="reference-card small">
              <div class="reference-top">
                <span class="reference-index">{{ reference.index }}</span>

                <div class="reference-content">
                  <p class="reference-citation">{{ reference.citation }}</p>

                  @if (reference.authors) {
                    <p class="reference-authors">{{ reference.authors }}</p>
                  }
                </div>
              </div>
            </li>
          }
        </ol>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: inherit;
      }

      .references-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .references-empty {
        margin: 0;
        padding: 1rem;
        text-align: center;
        color: var(--theme-muted);
        font-style: italic;
      }

      .references-list {
        display: grid;
        gap: 0.85rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .reference-card {
        padding: 1rem 1rem 0.9rem;
        border: 1px solid var(--theme-line);
        border-radius: 12px;
        background: var(--theme-paper);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
      }

      .reference-top {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 0.75rem;
        align-items: start;
      }

      .reference-index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        background: var(--theme-link);
        color: var(--theme-paper);
        font-size: 0.85rem;
        font-weight: 700;
        line-height: 1;
      }

      .reference-content {
        min-width: 0;
      }

      .reference-citation {
        margin: 0;
        color: var(--theme-ink);
        font-size: 0.95rem;
        line-height: 1.55;
        white-space: pre-wrap;
      }

      .reference-authors {
        margin: 0.4rem 0 0;
        color: var(--theme-muted);
        font-size: 0.86rem;
        line-height: 1.45;
        white-space: pre-wrap;
      }

      .reference-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        margin-top: 0.85rem;
      }

      .reference-chip {
        display: inline-flex;
        gap: 0.25rem;
        align-items: center;
        padding: 0.35rem 0.6rem;
        border: 1px solid var(--theme-line);
        border-radius: 999px;
        background: var(--theme-sand);
        color: var(--theme-ink);
        font-size: 0.8rem;
        line-height: 1.2;
      }

      .reference-chip strong {
        font-weight: 700;
      }
    `,
  ],
})
export class ArticleReferencesListComponent {
  @Input()
  set references(value: unknown) {
    this.rawReferences.set(value);
  }

  private readonly rawReferences = signal<unknown>([]);

  readonly normalizedReferences = computed(() => this.normalizeReferences(this.rawReferences()));

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
}
