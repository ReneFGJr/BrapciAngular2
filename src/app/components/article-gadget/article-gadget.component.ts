import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { CitationTabsComponent } from '../citation-tabs/citation-tabs.component';
import { ArticleAuthorsComponent } from '../article-authors/article-authors.component';
import { ArticleKeywordsComponent } from '../article-keywords/article-keywords.component';
import { ArticleDataComponent } from '../article-data/article-data.component';
import { ArticlePdfLinkComponent } from '../article-pdf-link/article-pdf-link.component';

type JsonRecord = Record<string, unknown>;

type ArticleMetric = {
  label: string;
  value: string;
};

type LocalizedTitle = {
  language: 'pt' | 'es' | 'en' | 'fr';
  languageLabel: string;
  title: string;
};

type LocalizedText = {
  language: 'pt' | 'es' | 'en' | 'fr';
  languageLabel: string;
  text: string;
};

type CreatorAuthor = {
  name: string;
  id?: string;
};

@Component({
  selector: 'app-article-gadget',
  imports: [CommonModule, TranslateModule, CitationTabsComponent, ArticleAuthorsComponent, ArticleKeywordsComponent, ArticleDataComponent, ArticlePdfLinkComponent],
  templateUrl: './article-gadget.component.html',
  styleUrl: './article-gadget.component.scss'
})
export class ArticleGadgetComponent implements OnInit, OnChanges {
  private metaService = inject(Meta);
  private titleService = inject(Title);
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: ArticleMetric[] = [];
  @Input() dataTag: unknown = null;

  readonly preferredLanguageOrder: Array<LocalizedTitle['language']> = ['pt', 'es', 'en', 'fr'];

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

  listField(keys: string[]): string[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        const items = value
          .map((item) => String(item).trim())
          .filter((item) => item.length > 0);

        if (items.length > 0) {
          return items;
        }
      }

      if (typeof value === 'string' && value.trim()) {
        return value
          .split(';')
          .map((item) => item.trim())
          .filter((item) => item.length > 0);
      }
    }

    return [];
  }

  titleVariants(): LocalizedTitle[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const byLanguage = new Map<LocalizedTitle['language'], LocalizedTitle>();

    const addVariant = (languageValue: unknown, titleValue: unknown): void => {
      const title = this.toText(titleValue);
      if (!title) {
        return;
      }

      const language = this.normalizeLanguage(languageValue);
      const existing = byLanguage.get(language);
      if (!existing) {
        byLanguage.set(language, {
          language,
          languageLabel: this.languageLabel(language),
          title,
        });
      }
    };

    this.addVariantsFromArray(record['variants'], addVariant);

    addVariant('pt', record['title_pt'] ?? record['titulo_pt']);
    addVariant('es', record['title_es'] ?? record['titulo_es']);
    addVariant('en', record['title_en'] ?? record['titulo_en']);
    addVariant('fr', record['title_fr'] ?? record['titulo_fr']);

    const dataRecord = this.asRecord(record['data']);
    const hasTitle = this.asRecord(dataRecord?.['hasTitle']);
    if (hasTitle) {
      this.addLocalizedFromGroupedObject(hasTitle, (language, text) => addVariant(language, text));
    }

    addVariant(record['language'] ?? record['idioma'], record['title'] ?? record['titulo'] ?? record['Title']);

    return [...byLanguage.values()].sort(
      (a, b) => this.preferredLanguageOrder.indexOf(a.language) - this.preferredLanguageOrder.indexOf(b.language),
    );
  }

  primaryTitle(): string {
    const variants = this.titleVariants();
    if (variants.length > 0) {
      return variants[0].title;
    }

    return this.field(['title', 'titulo', 'Title']);
  }

  getAbstractLabel(language: LocalizedTitle['language']): string {
    if (language === 'pt') {
      return 'Resumo';
    }

    if (language === 'es') {
      return 'Resumen';
    }

    if (language === 'en') {
      return 'Abstract';
    }

    if (language === 'fr') {
      return 'Résumé';
    }

    return 'Resumo';
  }

  abstractLanguage(abstract: LocalizedText): LocalizedText['language'] {
    return abstract.language;
  }

  subjectData(): unknown {
    const record = this.asRecord(this.data);
    if (!record) {
      return null;
    }

    return (
      record['subject'] ??
      record['subjects'] ??
      this.asRecord(record['data'])?.['hasSubject'] ??
      this.asRecord(record['data'])?.['subjects'] ??
      null
    );
  }

  metaRecord(): JsonRecord | null {
    const record = this.asRecord(this.data);
    if (!record) {
      return null;
    }

    return this.asRecord(record['meta']) ?? this.asRecord(record['Meta']) ?? this.asRecord(this.asRecord(record['data'])?.['meta']) ?? this.asRecord(this.asRecord(record['data'])?.['Meta']);
  }

  metaField(keys: string[]): string {
    const meta = this.metaRecord();
    if (!meta) {
      return this.field(keys);
    }

    for (const key of keys) {
      const value = meta[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return this.field(keys);
  }

  abstractSummary(): string {
    const abstracts = this.abstractVariants();
    return abstracts.map((item) => item.text).join(' ').trim();
  }

  articleJsonLd(): string {
    const authors = this.creatorAuthors().map((author) => ({
      '@type': 'Person',
      name: author.name,
      url: author.id ? `/v/${author.id}` : undefined,
    }));

    const payload: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: this.primaryTitle(),
      headline: this.primaryTitle(),
      description: this.abstractSummary() || undefined,
      author: authors.length > 0 ? authors : undefined,
      datePublished: this.metaField(['datePublished', 'year', 'ano']) || undefined,
      inLanguage: this.metaField(['language', 'idioma']) || undefined,
      isPartOf: this.journalName() || undefined,
      identifier: this.metaField(['doi', 'DOI']) || undefined,
      url: this.pdfUrl() || undefined,
    };

    return JSON.stringify(payload);
  }

  journalCoverUrl(): string {
    return this.field(['cover']);
  }

  journalName(): string {
    const issue = this.asRecord(this.asRecord(this.data)?.['Issue']);
    const issuePublisher = issue ? this.toText(issue['publisher']) : '';
    return issuePublisher || this.metaField(['journal', 'jnl_name', 'publisher', 'source']);
  }

  legend(): string {
    return this.field(['legend']);
  }

  pdfUrl(): string {
    return this.field(['resource_pdf']);
  }

  articleId(): string {
    return this.field(['ID', 'id']);
  }

  articleAuthorsForShare(): string {
    return this.creatorAuthors()
      .map((author) => author.name)
      .filter((name) => name.trim().length > 0)
      .join('; ');
  }

  articleKeywordsForShare(): string {
    return this.getKeywordsForMeta();
  }

  creatorAuthors(): CreatorAuthor[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const creators = record['creator_author'];
    const fromCreators = Array.isArray(creators)
      ? creators
          .map((item) => {
            if (!item || typeof item !== 'object') {
              return null;
            }

            const obj = item as Record<string, unknown>;
            const name = this.toText(obj['name']);
            const id = this.toText(obj['ID']);
            if (!name) {
              return null;
            }

            return id ? ({ name, id } satisfies CreatorAuthor) : ({ name } satisfies CreatorAuthor);
          })
          .filter((item): item is CreatorAuthor => item !== null)
      : [];

    if (fromCreators.length > 0) {
      return fromCreators;
    }

    const dataRecord = this.asRecord(record['data']);
    const hasAuthor = this.asRecord(dataRecord?.['hasAuthor']);
    const nn = hasAuthor ? hasAuthor['nn'] : null;
    if (!Array.isArray(nn)) {
      return [];
    }

    const authors: CreatorAuthor[] = [];
    for (const item of nn) {
      if (!item || typeof item !== 'object') {
        continue;
      }

      const obj = item as Record<string, unknown>;
      for (const [name, idValue] of Object.entries(obj)) {
        const normalizedName = this.toText(name);
        const normalizedId = this.toText(idValue);
        if (!normalizedName) {
          continue;
        }

        authors.push({
          name: normalizedName,
          id: normalizedId || undefined,
        });
      }
    }

    return authors;
  }

  authorLink(author: CreatorAuthor): string | null {
    if (!author.id) {
      return null;
    }

    return `/v/${author.id}`;
  }

  abstractVariants(): LocalizedText[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const byLanguage = new Map<LocalizedText['language'], LocalizedText>();
    const addText = (languageValue: unknown, textValue: unknown): void => {
      const text = this.toText(textValue);
      if (!text) {
        return;
      }

      const language = this.normalizeLanguage(languageValue);
      if (!byLanguage.has(language)) {
        byLanguage.set(language, {
          language,
          languageLabel: this.languageLabel(language),
          text,
        });
      }
    };

    addText(record['language'] ?? record['idioma'], record['description'] ?? record['abstract']);

    const dataRecord = this.asRecord(record['data']);
    const hasAbstract = this.asRecord(dataRecord?.['hasAbstract']);
    if (hasAbstract) {
      this.addLocalizedFromGroupedObject(hasAbstract, (language, text) => addText(language, text));
    }

    return [...byLanguage.values()].sort(
      (a, b) => this.preferredLanguageOrder.indexOf(a.language) - this.preferredLanguageOrder.indexOf(b.language),
    );
  }

  citation(style: 'abnt' | 'apa' | 'vancouver'): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const cited = this.asRecord(record['cited']);
    return cited ? this.toText(cited[style]) : '';
  }

  hasCitationData(): boolean {
    return Boolean(this.citation('abnt') || this.citation('apa') || this.citation('vancouver'));
  }

  getCitations(): { abnt: string; apa: string; vancouver: string } {
    return {
      abnt: this.citation('abnt'),
      apa: this.citation('apa'),
      vancouver: this.citation('vancouver'),
    };
  }

  sectionNames(): string[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    const section = record['section'];
    if (!Array.isArray(section)) {
      return [];
    }

    return section
      .map((item) => {
        if (!item || typeof item !== 'object') {
          return '';
        }

        return this.toText((item as Record<string, unknown>)['name']);
      })
      .filter((item) => item.length > 0);
  }

  hasImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (!img) {
      return;
    }

    img.style.display = 'none';
  }

  private toText(value: unknown): string {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }

    return '';
  }

  private normalizeLanguage(value: unknown): LocalizedTitle['language'] {
    const text = String(value ?? '')
      .trim()
      .toLowerCase();

    if (text === 'pt' || text === 'pt-br' || text.includes('portug')) {
      return 'pt';
    }

    if (text === 'es' || text === 'es-es' || text.includes('espan')) {
      return 'es';
    }

    if (text === 'en' || text === 'en-us' || text.includes('english') || text.includes('ingles')) {
      return 'en';
    }

    if (text === 'fr' || text === 'fr-fr' || text.includes('fran')) {
      return 'fr';
    }

    return 'pt';
  }

  private addVariantsFromArray(
    value: unknown,
    addVariant: (languageValue: unknown, titleValue: unknown) => void,
  ): void {
    if (!Array.isArray(value)) {
      return;
    }

    for (const variant of value) {
      if (!variant || typeof variant !== 'object') {
        continue;
      }

      const item = variant as Record<string, unknown>;
      addVariant(item['language'] ?? item['lang'] ?? item['idioma'], item['title'] ?? item['titulo'] ?? item['name']);
    }
  }

  private addLocalizedFromGroupedObject(
    grouped: Record<string, unknown>,
    addEntry: (languageValue: unknown, textValue: unknown) => void,
  ): void {
    for (const [language, value] of Object.entries(grouped)) {
      if (!Array.isArray(value)) {
        continue;
      }

      for (const obj of value) {
        if (!obj || typeof obj !== 'object') {
          continue;
        }

        for (const [entryKey, entryValue] of Object.entries(obj as Record<string, unknown>)) {
          addEntry(language, entryKey || entryValue);
        }
      }
    }
  }

  private languageLabel(language: LocalizedTitle['language']): string {
    if (language === 'pt') {
      return 'Portugues';
    }

    if (language === 'es') {
      return 'Espanhol';
    }

    if (language === 'en') {
      return 'Ingles';
    }

    if (language === 'fr') {
      return 'Frances';
    }

    return 'Outro idioma';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }

  ngOnInit(): void {
    // Initial update when component initializes
    this.updateDocumentHead();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update when inputs change
    if (changes['data']) {
      this.updateDocumentHead();
    }
  }

  private updateDocumentHead(): void {
    const title = this.primaryTitle();
    const description = this.abstractSummary() || this.field(['description', 'descricao']);
    const authors = this.creatorAuthors()
      .map((author) => author.name)
      .join('; ');
    const keywords = this.getKeywordsForMeta();
    const journal = this.journalName();
    const year = this.field(['year', 'ano']);
    const doi = this.field(['doi', 'DOI']);
    const language = this.field(['language', 'idioma']) || 'pt';

    // Update title tag
    if (title && title !== '-') {
      this.titleService.setTitle(title + ' - Brapci');
    }

    // Remove existing meta tags we manage
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("name='keywords'");
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:type'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("name='citation_title'");
    this.metaService.removeTag("name='citation_authors'");
    this.metaService.removeTag("name='citation_publication_date'");
    this.metaService.removeTag("name='citation_journal_title'");
    this.metaService.removeTag("name='citation_doi'");
    this.metaService.removeTag("name='citation_language'");

    // Add new meta tags with article metadata
    if (description && description !== '-') {
      this.metaService.addTag({
        name: 'description',
        content: description.substring(0, 160) // Limit to 160 chars for SEO
      });
    }

    if (keywords) {
      this.metaService.addTag({
        name: 'keywords',
        content: keywords
      });
    }

    // OpenGraph tags
    if (title && title !== '-') {
      this.metaService.addTag({
        property: 'og:title',
        content: title
      });
    }

    if (description && description !== '-') {
      this.metaService.addTag({
        property: 'og:description',
        content: description.substring(0, 160)
      });
    }

    this.metaService.addTag({
      property: 'og:type',
      content: 'article'
    });

    // Citation metadata (for academic indexing)
    if (title && title !== '-') {
      this.metaService.addTag({
        name: 'citation_title',
        content: title
      });
    }

    if (authors) {
      const authorList = authors.split('; ');
      for (const author of authorList) {
        this.metaService.addTag({
          name: 'citation_author',
          content: author.trim()
        });
      }
    }

    if (year && year !== '-') {
      this.metaService.addTag({
        name: 'citation_publication_date',
        content: year
      });
    }

    if (journal && journal !== '-') {
      this.metaService.addTag({
        name: 'citation_journal_title',
        content: journal
      });
    }

    if (doi && doi !== '-') {
      this.metaService.addTag({
        name: 'citation_doi',
        content: doi
      });
    }

    if (language && language !== '-') {
      this.metaService.addTag({
        name: 'citation_language',
        content: language.substring(0, 2)
      });
    }
  }

  private getKeywordsForMeta(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const keywords: string[] = [];

    // Try to get keywords from subject/subjects field
    const subject = record['subject'];
    if (subject && typeof subject === 'object') {
      for (const [lang, items] of Object.entries(subject)) {
        if (Array.isArray(items)) {
          for (const item of items) {
            if (typeof item === 'string') {
              keywords.push(item);
            } else if (item && typeof item === 'object') {
              const term = this.toText(
                (item as Record<string, unknown>)['name'] ||
                  (item as Record<string, unknown>)['term'] ||
                  (item as Record<string, unknown>)['label']
              );
              if (term) {
                keywords.push(term);
              }
            }
          }
        }
      }
    }

    // Also check data.hasSubject
    const dataRecord = this.asRecord(record['data']);
    const hasSubject = this.asRecord(dataRecord?.['hasSubject']);
    if (hasSubject) {
      for (const [lang, items] of Object.entries(hasSubject)) {
        if (Array.isArray(items)) {
          for (const item of items) {
            if (typeof item === 'string') {
              keywords.push(item);
            } else if (item && typeof item === 'object') {
              const term = this.toText(
                (item as Record<string, unknown>)['name'] ||
                  (item as Record<string, unknown>)['term'] ||
                  (item as Record<string, unknown>)['label']
              );
              if (term) {
                keywords.push(term);
              }
            }
          }
        }
      }
    }

    return [...new Set(keywords)].slice(0, 10).join(', ');
  }
}
