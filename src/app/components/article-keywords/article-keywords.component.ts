import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type KeywordItem = {
  term: string;
  id?: string;
  link?: string;
};

type SubjectGroup = {
  language: 'pt' | 'es' | 'en' | 'fr';
  languageLabel: string;
  keywords: KeywordItem[];
};

@Component({
  selector: 'app-article-keywords',
  imports: [CommonModule, TranslateModule],
  templateUrl: './article-keywords.component.html',
  styleUrl: './article-keywords.component.scss'
})
export class ArticleKeywordsComponent {
  @Input() subject: unknown = null;
  @Input() abstractLanguage: 'pt' | 'es' | 'en' | 'fr' | null = null;

  get visibleKeywords(): SubjectGroup | null {
    const language = this.normalizeLanguage(this.abstractLanguage);
    if (!language) {
      return null;
    }

    const subjectRecord = this.asRecord(this.subject);
    if (!subjectRecord) {
      return null;
    }

    const languageSubjects = subjectRecord[language];
    const keywords = this.normalizeSubjects(languageSubjects);
    if (keywords.length === 0) {
      return null;
    }

    return {
      language,
      languageLabel: this.languageLabel(language),
      keywords,
    };
  }

  keywordsIntro(language: 'pt' | 'es' | 'en' | 'fr'): string {
    if (language === 'pt') {
      return 'Palavras-chave';
    }

    if (language === 'en') {
      return 'Keywords';
    }

    if (language === 'es') {
      return 'Palabras clave';
    }

    return 'Mots clés';
  }

  trackByKeyword(index: number, item: KeywordItem): string {
    return `${item.id ?? ''}-${item.term}`;
  }

  private normalizeSubjects(value: unknown): KeywordItem[] {
    if (!Array.isArray(value)) {
      return [];
    }

    const keywords: KeywordItem[] = [];
    const seen = new Set<string>();

    for (const item of value) {
      if (!item || typeof item !== 'object') {
        continue;
      }

      const record = this.asRecord(item);
      const term = this.toText(record?.['name'] ?? record?.['term'] ?? record?.['label']);
      const id = this.toText(record?.['ID'] ?? record?.['id']);

      if (!term) {
        continue;
      }

      const dedupeKey = `${id}|${term}`.toLowerCase();
      if (seen.has(dedupeKey)) {
        continue;
      }

      seen.add(dedupeKey);
      keywords.push({
        term,
        id: id || undefined,
        link: id ? `/v/${id}` : undefined,
      });
    }

    return keywords;
  }

  private normalizeLanguage(value: 'pt' | 'es' | 'en' | 'fr' | null): 'pt' | 'es' | 'en' | 'fr' | null {
    return value;
  }

  private languageLabel(language: 'pt' | 'es' | 'en' | 'fr'): string {
    if (language === 'pt') {
      return 'Português';
    }

    if (language === 'es') {
      return 'Español';
    }

    if (language === 'en') {
      return 'English';
    }

    return 'Français';
  }

  trackByLanguage(index: number, item: SubjectGroup): string {
    return item.language;
  }

  private asRecord(value: unknown): Record<string, unknown> | null {
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
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
}
