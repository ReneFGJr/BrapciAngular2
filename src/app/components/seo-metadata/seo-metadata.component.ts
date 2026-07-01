import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type JsonRecord = Record<string, unknown>;

type MetaItem = {
  name?: string;
  content?: string;
};

@Component({
  selector: 'app-seo-metadata',
  standalone: true,
  templateUrl: './seo-metadata.component.html',
  styleUrl: './seo-metadata.component.scss',
})
export class SeoMetadataComponent implements OnChanges {
  @Input() data: unknown = null;
  @Input() recordId = '';
  @Input() recordClass = '';

  constructor(
    private readonly meta: Meta,
    private readonly titleService: Title,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnChanges(): void {
    this.applyMetadata();
  }

  private applyMetadata(): void {
    const record = this.asRecord(this.data);
    const title = this.pickText(record, ['title', 'hasTitle', 'name', 'Title']) || 'BRAPCI';
    const description =
      this.pickText(record, ['description', 'hasAbstract', 'abstract', 'Resumo']) ||
      'Registro bibliografico da BRAPCI.';
    const keywords = this.collectKeywords(record);
    const creators = this.collectCreators(record);
    const publisher = this.pickText(record, ['publisher', 'hasPublisher', 'source']);
    const date = this.pickText(record, ['year', 'date', 'hasDate']);
    const language = this.pickLanguage(record) || 'pt-BR';
    const typeName = this.recordClass || this.pickText(record, ['Class', 'class', 'Classe']) || 'CreativeWork';
    const canonicalUrl = this.buildCanonicalUrl();

    this.titleService.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords || 'BRAPCI, Ciencia da Informacao, Biblioteconomia' });
    this.meta.updateTag({ name: 'robots', content: 'index,follow,max-image-preview:large' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'BRAPCI' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.meta.updateTag({ name: 'DC.Title', content: title });
    this.meta.updateTag({ name: 'DC.Description', content: description });
    this.meta.updateTag({ name: 'DC.Creator', content: creators });
    this.meta.updateTag({ name: 'DC.Subject', content: keywords });
    this.meta.updateTag({ name: 'DC.Publisher', content: publisher });
    this.meta.updateTag({ name: 'DC.Date', content: date });
    this.meta.updateTag({ name: 'DC.Identifier', content: canonicalUrl });
    this.meta.updateTag({ name: 'DC.Language', content: language });
    this.meta.updateTag({ name: 'DC.Type', content: typeName });

    this.updateCanonical(canonicalUrl);
    this.updateJsonLd({ title, description, creators, publisher, date, language, canonicalUrl, typeName });
    this.applyIncomingMetaItems(record);
  }

  private applyIncomingMetaItems(record: JsonRecord | null): void {
    if (!record) return;

    const metaList = record['meta'];
    if (!Array.isArray(metaList)) return;

    for (const entry of metaList) {
      const item = this.asRecord(entry) as MetaItem | null;
      if (!item) continue;

      const name = typeof item.name === 'string' ? item.name.trim() : '';
      const content = typeof item.content === 'string' ? item.content.trim() : '';
      if (!name || !content) continue;

      if (name.toLowerCase().startsWith('og:')) {
        this.meta.updateTag({ property: name, content });
      } else {
        this.meta.updateTag({ name, content });
      }
    }
  }

  private updateCanonical(url: string): void {
    let link = this.document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private updateJsonLd(payload: {
    title: string;
    description: string;
    creators: string;
    publisher: string;
    date: string;
    language: string;
    canonicalUrl: string;
    typeName: string;
  }): void {
    const previous = this.document.getElementById('v-id-jsonld');
    if (previous) {
      previous.remove();
    }

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('id', 'v-id-jsonld');

    const authorList = payload.creators
      .split(';')
      .map((name) => name.trim())
      .filter((name) => name.length > 0)
      .map((name) => ({ '@type': 'Person', name }));

    const jsonLd: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': this.toSchemaType(payload.typeName),
      name: payload.title,
      headline: payload.title,
      description: payload.description,
      author: authorList.length ? authorList : undefined,
      publisher: payload.publisher ? { '@type': 'Organization', name: payload.publisher } : undefined,
      datePublished: payload.date || undefined,
      inLanguage: payload.language,
      url: payload.canonicalUrl,
    };

    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }

  private toSchemaType(typeName: string): string {
    const value = typeName.trim().toLowerCase();

    if (value === 'article') return 'ScholarlyArticle';
    if (value === 'book') return 'Book';
    if (value === 'bookchapter') return 'Chapter';
    if (value === 'proceeding') return 'ScholarlyArticle';
    if (value === 'person') return 'Person';

    return 'CreativeWork';
  }

  private collectKeywords(record: JsonRecord | null): string {
    if (!record) return '';

    const fromSubject = this.collectSubjectNames(record);
    if (fromSubject.length > 0) {
      return fromSubject.join('; ');
    }

    const hasKeyword = record['hasKeyword'];
    if (Array.isArray(hasKeyword)) {
      return hasKeyword
        .map((item) => String(item).trim())
        .filter((item) => item.length > 0)
        .join('; ');
    }

    const keywordText = this.pickText(record, ['keywords', 'keyword', 'KEYWORDS']);
    if (!keywordText) return '';

    return keywordText
      .split(';')
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
      .join('; ');
  }

  private collectSubjectNames(record: JsonRecord): string[] {
    const subject = this.asRecord(record['subject']);
    if (!subject) return [];

    const all: string[] = [];
    for (const value of Object.values(subject)) {
      if (!Array.isArray(value)) continue;

      for (const entry of value) {
        const item = this.asRecord(entry);
        if (!item) continue;

        const name = typeof item['name'] === 'string' ? item['name'].trim() : '';
        if (name) all.push(name);
      }
    }

    return [...new Set(all)];
  }

  private collectCreators(record: JsonRecord | null): string {
    if (!record) return '';

    const creatorAuthor = record['creator_author'];
    if (Array.isArray(creatorAuthor)) {
      const names = creatorAuthor
        .map((entry) => {
          const item = this.asRecord(entry);
          return item && typeof item['name'] === 'string' ? item['name'].trim() : '';
        })
        .filter((name) => name.length > 0);

      if (names.length > 0) return names.join('; ');
    }

    const hasAuthor = record['hasAuthor'];
    if (Array.isArray(hasAuthor)) {
      const names = hasAuthor
        .map((entry) => String(entry).trim())
        .filter((name) => name.length > 0);
      if (names.length > 0) return names.join('; ');
    }

    return this.pickText(record, ['author', 'Authors', 'creator']);
  }

  private pickLanguage(record: JsonRecord | null): string {
    if (!record) return '';

    const direct = this.pickText(record, ['language', 'lang']);
    if (direct) return direct;

    const dataRecord = this.asRecord(record['data']);
    const hasLanguageExpression = this.asRecord(dataRecord?.['hasLanguageExpression']);
    if (!hasLanguageExpression) return '';

    const firstLang = Object.keys(hasLanguageExpression)[0];
    return firstLang || '';
  }

  private buildCanonicalUrl(): string {
    const origin = this.document.location?.origin ?? '';
    const id = this.recordId.trim();

    if (!origin || !id) return '';
    return `${origin}/v/${id}`;
  }

  private pickText(record: JsonRecord | null, keys: string[]): string {
    if (!record) return '';

    for (const key of keys) {
      const value = record[key];

      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  private asRecord(value: unknown): JsonRecord | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return null;
    }

    return value as JsonRecord;
  }
}
