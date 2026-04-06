import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorWorksComponent, AuthorWorksGroup } from '../author-works/author-works.component';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';
import { CitationTabsComponent } from '../citation-tabs/citation-tabs.component';
import { ArticleAuthorsComponent } from '../article-authors/article-authors.component';
import { ArticleKeywordsComponent } from '../article-keywords/article-keywords.component';

type JsonRecord = Record<string, unknown>;

type ArticleMetric = {
  label: string;
  value: string;
};

type LocalizedTitle = {
  language: 'pt' | 'es' | 'en' | 'fr' | 'other';
  languageLabel: string;
  title: string;
};

type LocalizedText = {
  language: 'pt' | 'es' | 'en' | 'fr' | 'other';
  languageLabel: string;
  text: string;
};

type LocalizedKeywords = {
  language: 'pt' | 'es' | 'en' | 'fr' | 'other';
  languageLabel: string;
  keywords: string[];
};

type CreatorAuthor = {
  name: string;
  id?: string;
};

@Component({
  selector: 'app-article-gadget',
  imports: [CommonModule, TranslateModule, BarChartComponent, TagCloudComponent, AuthorWorksComponent, CitationTabsComponent, ArticleAuthorsComponent, ArticleKeywordsComponent],
  templateUrl: './article-gadget.component.html',
  styleUrl: './article-gadget.component.scss'
})
export class ArticleGadgetComponent {
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: ArticleMetric[] = [];
  @Input() chartPoints: BarChartPoint[] = [];
  @Input() worksGroups: AuthorWorksGroup[] = [];
  @Input() dataJour: unknown = null;
  @Input() dataTag: unknown = null;

  readonly preferredLanguageOrder: Array<LocalizedTitle['language']> = ['pt', 'es', 'en', 'fr', 'other'];

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

  journalCoverUrl(): string {
    return this.field(['cover']);
  }

  journalName(): string {
    const issue = this.asRecord(this.asRecord(this.data)?.['Issue']);
    const issuePublisher = issue ? this.toText(issue['publisher']) : '';
    return issuePublisher || this.field(['publisher', 'jnl_name', 'journal', 'source']);
  }

  legend(): string {
    return this.field(['legend']);
  }

  pdfUrl(): string {
    return this.field(['resource_pdf']);
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

    if (!text) {
      return 'other';
    }

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

    return 'other';
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
}
