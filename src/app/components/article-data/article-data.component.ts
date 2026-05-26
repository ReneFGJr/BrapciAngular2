import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleMarkdownViewerComponent } from './article-markdown-viewer.component';
import { ArticleReferencesListComponent } from './article-references-list.component';

@Component({
  selector: 'app-article-data',
  standalone: true,
  imports: [CommonModule, TranslateModule, ArticleMarkdownViewerComponent, ArticleReferencesListComponent],
  templateUrl: './article-data.component.html',
  styleUrl: './article-data.component.scss'
})
export class ArticleDataComponent {
  @Input({ required: true }) data: unknown = null;

  selectedTab = signal<'fulltext' | 'json' | 'rdf' | 'ris' | 'marc21' | 'references' | 'citations'>('fulltext');

  selectTab(tabId: 'fulltext' | 'json' | 'rdf' | 'ris' | 'marc21' | 'references' | 'citations'): void {
    this.selectedTab.set(tabId);
  }

  getFullTextData(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    return this.extractListOrText(record, [
      'fulltext',
      'full_text',
      'texto_completo',
      'textoCompleto',
      'text',
      'body',
      'content',
      'description',
      'abstract',
      'resumo',
      'resumen',
    ]);
  }

  getMarkdownData(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const direct = this.pickText(record, ['markdown', 'md', 'fulltext_markdown']);
    if (direct) {
      return direct;
    }

    const nested = this.asRecord(record['data']);
    if (!nested) {
      return '';
    }

    return this.pickText(nested, ['markdown', 'md', 'fulltext_markdown']);
  }

  getArticleId(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const readId = (obj: Record<string, unknown>): string => {
      const raw = obj['ID'] ?? obj['id'];
      if (typeof raw === 'number' && Number.isFinite(raw)) {
        return String(raw);
      }

      return this.toText(raw);
    };

    const direct = readId(record);
    if (direct) {
      return direct;
    }

    const nested = this.asRecord(record['data']);
    if (!nested) {
      return '';
    }

    return readId(nested);
  }

  getJsonData(): string {
    if (!this.data) {
      return '{}';
    }

    try {
      return JSON.stringify(this.data, null, 2);
    } catch {
      return '{}';
    }
  }

  getRdfData(): string {
    // Simular RDF em formato textual baseado nos dados JSON
    if (!this.data || typeof this.data !== 'object') {
      return '';
    }

    const record = this.data as Record<string, unknown>;
    let rdf = '@prefix dc: <http://purl.org/dc/elements/1.1/> .\n';
    rdf += '@prefix dcat: <http://www.w3.org/ns/dcat#> .\n';
    rdf += '@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n\n';

    const resourceId = record['ID'] ? `<http://example.com/article/${record['ID']}>` : '<http://example.com/article/unknown>';

    if (record['title'] || record['titulo']) {
      const title = record['title'] || record['titulo'];
      rdf += `${resourceId} dc:title "${this.escapeQuotes(String(title))}" .\n`;
    }

    if (record['creator_author']) {
      const creators = Array.isArray(record['creator_author']) ? record['creator_author'] : [record['creator_author']];
      creators.forEach((creator) => {
        if (creator && typeof creator === 'object') {
          const creatorObj = creator as Record<string, unknown>;
          const name = creatorObj['name'];
          if (name) {
            rdf += `${resourceId} dc:creator "${this.escapeQuotes(String(name))}" .\n`;
          }
        }
      });
    }

    if (record['publisher']) {
      rdf += `${resourceId} dc:publisher "${this.escapeQuotes(String(record['publisher']))}" .\n`;
    }

    if (record['year'] || record['ano']) {
      const year = record['year'] || record['ano'];
      rdf += `${resourceId} dc:date "${this.escapeQuotes(String(year))}" .\n`;
    }

    if (record['language'] || record['idioma']) {
      const language = record['language'] || record['idioma'];
      rdf += `${resourceId} dc:language "${this.escapeQuotes(String(language))}" .\n`;
    }

    return rdf;
  }

  getRisData(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const lines: string[] = [];
    lines.push('TY  - JOUR');

    const title = this.pickText(record, ['title', 'titulo']);
    if (title) {
      lines.push(`TI  - ${title}`);
    }

    for (const author of this.getAuthors(record)) {
      lines.push(`AU  - ${author}`);
    }

    const year = this.pickText(record, ['year', 'ano']);
    if (year) {
      lines.push(`PY  - ${year}`);
    }

    const journal = this.pickText(record, ['publisher', 'jnl_name', 'journal', 'source']);
    if (journal) {
      lines.push(`JO  - ${journal}`);
    }

    const doi = this.pickText(record, ['doi', 'DOI']);
    if (doi) {
      lines.push(`DO  - ${doi}`);
    }

    const url = this.pickText(record, ['resource_pdf']);
    if (url) {
      lines.push(`UR  - ${url}`);
    }

    for (const keyword of this.getKeywords(record)) {
      lines.push(`KW  - ${keyword}`);
    }

    const abstract = this.pickText(record, ['description', 'abstract']);
    if (abstract) {
      lines.push(`AB  - ${abstract}`);
    }

    lines.push('ER  -');
    return lines.join('\n');
  }

  getMarc21Data(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const lines: string[] = [];
    const id = this.pickText(record, ['ID']) || '000000';
    const title = this.pickText(record, ['title', 'titulo']);
    const year = this.pickText(record, ['year', 'ano']);
    const journal = this.pickText(record, ['publisher', 'jnl_name', 'journal', 'source']);
    const lang = this.pickText(record, ['language', 'idioma']);
    const abstract = this.pickText(record, ['description', 'abstract']);
    const doi = this.pickText(record, ['doi', 'DOI']);
    const pdfUrl = this.pickText(record, ['resource_pdf']);

    lines.push('=LDR  00000naa a2200000 i 4500');
    lines.push(`=001  ${id}`);

    if (doi) {
      lines.push(`=024  7\\$a${doi}$2doi`);
    }

    if (lang) {
      lines.push(`=041  0\\$a${lang}`);
    }

    if (title) {
      lines.push(`=245  10$a${title}`);
    }

    if (journal || year) {
      lines.push(`=260  \\\\$b${journal}$c${year}`);
    }

    if (abstract) {
      lines.push(`=520  \\\\$a${abstract}`);
    }

    for (const keyword of this.getKeywords(record)) {
      lines.push(`=650  \\0$a${keyword}`);
    }

    for (const author of this.getAuthors(record)) {
      lines.push(`=700  1\\$a${author}`);
    }

    if (pdfUrl) {
      lines.push(`=856  40$u${pdfUrl}`);
    }

    return lines.join('\n');
  }

  getReferencesData(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    return this.extractListOrText(record, [
      'references',
      'referencias',
      'referências',
      'refs',
      'bibliography',
      'bibliografia',
    ]);
  }

  getReferencesValue(): unknown {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    return this.extractValue(record, [
      'references',
      'referencias',
      'referências',
      'refs',
      'bibliography',
      'bibliografia',
    ]);
  }

  getCitationsData(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    return this.extractListOrText(record, [
      'citations',
      'citacoes',
      'citações',
      'cited_by',
      'citedBy',
      'citation_list',
      'citationList',
    ]);
  }

  private asRecord(value: unknown): Record<string, unknown> | null {
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
  }

  private toText(value: unknown): string {
    return typeof value === 'string' && value.trim() ? value.trim() : '';
  }

  private pickText(record: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const text = this.toText(record[key]);
      if (text) {
        return text;
      }
    }

    return '';
  }

  private getAuthors(record: Record<string, unknown>): string[] {
    const source = record['creator_author'];
    if (!Array.isArray(source)) {
      return [];
    }

    return source
      .map((item) => {
        if (!item || typeof item !== 'object') {
          return '';
        }

        return this.toText((item as Record<string, unknown>)['name']);
      })
      .filter((name) => name.length > 0);
  }

  private getKeywords(record: Record<string, unknown>): string[] {
    const result = new Set<string>();

    const pushKeywords = (value: unknown): void => {
      if (Array.isArray(value)) {
        for (const item of value) {
          const text = this.toText(item);
          if (text) {
            result.add(text);
          }
        }
        return;
      }

      const text = this.toText(value);
      if (!text) {
        return;
      }

      for (const item of text.split(/[,;]/).map((entry) => entry.trim()).filter((entry) => entry.length > 0)) {
        result.add(item);
      }
    };

    pushKeywords(record['keywords']);
    pushKeywords(record['keyword']);

    const subject = this.asRecord(record['subject']) ?? this.asRecord(record['subjects']);
    if (subject) {
      for (const value of Object.values(subject)) {
        pushKeywords(value);
      }
    }

    return [...result];
  }

  private extractListOrText(record: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      const normalized = this.normalizeListOrText(value);
      if (normalized) {
        return normalized;
      }
    }

    const nestedData = this.asRecord(record['data']);
    if (nestedData) {
      for (const key of keys) {
        const value = nestedData[key];
        const normalized = this.normalizeListOrText(value);
        if (normalized) {
          return normalized;
        }
      }
    }

    return '';
  }

  private extractValue(record: Record<string, unknown>, keys: string[]): unknown {
    for (const key of keys) {
      const value = record[key];

      if (value !== null && value !== undefined) {
        return value;
      }
    }

    const nestedData = this.asRecord(record['data']);
    if (nestedData) {
      for (const key of keys) {
        const value = nestedData[key];

        if (value !== null && value !== undefined) {
          return value;
        }
      }
    }

    return [];
  }

  private normalizeListOrText(value: unknown): string {
    if (Array.isArray(value)) {
      const lines = value
        .map((item) => {
          if (typeof item === 'string') {
            return item.trim();
          }

          if (item && typeof item === 'object') {
            const entry = item as Record<string, unknown>;
            const candidate = this.toText(entry['text']) || this.toText(entry['title']) || this.toText(entry['name']) || this.toText(entry['reference']) || this.toText(entry['citation']);
            return candidate;
          }

          return '';
        })
        .filter((line) => line.length > 0);

      if (lines.length > 0) {
        return lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
      }

      return '';
    }

    if (typeof value === 'string') {
      return value.trim();
    }

    if (value && typeof value === 'object') {
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return '';
      }
    }

    return '';
  }

  private escapeQuotes(text: string): string {
    return text.replace(/"/g, '\\"');
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {
      console.error('Erro ao copiar para área de transferência');
    });
  }
}
