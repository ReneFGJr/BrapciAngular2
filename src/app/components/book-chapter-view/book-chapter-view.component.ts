import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleAuthorsComponent } from '../article-authors/article-authors.component';
import { ArticleDataComponent } from '../article-data/article-data.component';
import { CitationTabsComponent } from '../citation-tabs/citation-tabs.component';

type BookChapterMetric = {
  label: string;
  value: string;
};

type JsonRecord = Record<string, unknown>;

type CreatorAuthor = {
  name: string;
  id?: string;
};

@Component({
  selector: 'app-book-chapter-view',
  standalone: true,
  imports: [CommonModule, TranslateModule, ArticleAuthorsComponent, CitationTabsComponent, ArticleDataComponent],
  templateUrl: './book-chapter-view.component.html',
  styleUrl: './book-chapter-view.component.scss',
})
export class BookChapterViewComponent {
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: BookChapterMetric[] = [];
  @Input() dataTag: unknown = null;

  field(keys: string[]): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    for (const key of keys) {
      const value = record[key];
      const text = this.toText(value);
      if (text) {
        return text;
      }
    }

    return '-';
  }

  primaryTitle(): string {
    return this.field(['title', 'titulo', 'Title', 'hasTitle', 'bookchapter_title']);
  }

  legend(): string {
    return this.field(['legend', 'LEGEND']);
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
            const obj = this.asRecord(item);
            if (!obj) {
              return null;
            }

            const name = this.toText(obj['name']);
            const id = this.toText(obj['ID'] ?? obj['id']);
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

    const hasAuthor = record['hasAuthor'];
    if (!Array.isArray(hasAuthor)) {
      return [];
    }

    return hasAuthor
      .map((item) => this.toText(item))
      .filter((name) => name.length > 0)
      .map((name) => ({ name }));
  }

  chapterBookTitle(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    const direct = this.field(['book_title', 'bookTitle', 'title_book', 'source', 'publisher', 'jnl_name']);
    if (direct !== '-') {
      return direct;
    }

    const bookRecord = this.asRecord(record['Book'] ?? record['book']);
    if (!bookRecord) {
      return '-';
    }

    return this.pickText(bookRecord, ['title', 'hasTitle', 'name']) || '-';
  }

  chapterBookId(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const direct = this.pickText(record, ['bookID', 'bookId', 'id_book', 'ID_book', 'ID_BOOK', 'book_id']);
    if (direct) {
      return direct;
    }

    const bookRecord = this.asRecord(record['Book'] ?? record['book']);
    if (!bookRecord) {
      return '';
    }

    return this.pickText(bookRecord, ['ID', 'id']);
  }

  bookCoverUrl(): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '';
    }

    const direct = this.pickText(record, ['book_cover', 'bookCover', 'cover_book', 'cover', 'hasCover']);
    if (direct) {
      return direct;
    }

    const bookRecord = this.asRecord(record['Book'] ?? record['book']);
    if (!bookRecord) {
      return '';
    }

    return this.pickText(bookRecord, ['hasCover', 'cover', 'Cover', 'image']);
  }

  pages(): string {
    return this.field(['pages', 'page', 'pagination', 'hasPages']);
  }

  year(): string {
    return this.field(['year', 'ano', 'hasYear', 'datePublished', 'hasDate']);
  }

  doi(): string {
    return this.field(['doi', 'DOI']);
  }

  language(): string {
    return this.field(['language', 'idioma', 'lang']);
  }

  isbn(): string {
    return this.field(['hasISBN', 'isbn', 'ISBN']);
  }

  pdfUrl(): string {
    const url = this.field(['resource_pdf', 'pdf', 'url_pdf']);
    return url === '-' ? '' : url;
  }

  chapterId(): string {
    return this.field(['ID', 'id']);
  }

  abstractText(): string {
    return this.field(['description', 'abstract', 'resumo', 'resumen', 'hasAbstract']);
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

  hasImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (!img) {
      return;
    }

    img.style.display = 'none';
  }

  getCitations(): { abnt: string; apa: string; vancouver: string } {
    return {
      abnt: this.citation('abnt'),
      apa: this.citation('apa'),
      vancouver: this.citation('vancouver'),
    };
  }

  private asRecord(value: unknown): JsonRecord | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return null;
    }

    return value as JsonRecord;
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

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const text = this.toText(record[key]);
      if (text) {
        return text;
      }
    }

    return '';
  }
}
