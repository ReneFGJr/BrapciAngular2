import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookGadgetComponent } from '../book-gadget/book-gadget.component';

type JsonRecord = Record<string, unknown>;

interface CreatorAuthor {
  name: string;
  ID?: string;
  complement?: string;
}

interface SubjectItem {
  name: string;
  ID?: string;
  complement?: string;
}

interface ChapterItem {
  id: string;
  title: string;
  pages: string;
  authors: string;
}

@Component({
  selector: 'app-book-panel',
  standalone: true,
  imports: [CommonModule, BookGadgetComponent],
  templateUrl: './book-panel.component.html',
  styleUrl: './book-panel.component.scss',
})
export class BookPanelComponent {
  @Input() bookId = '';
  @Input() cover = '';
  @Input() title = '';
  @Input() data: Record<string, unknown> | null = null;
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  get displayTitle(): string {
    return this.stringAt('title') || this.title;
  }

  get description(): string {
    return this.stringAt('description');
  }

  get publisher(): string {
    return this.stringAt('publisher');
  }

  get isbn(): string {
    return this.stringAt('isbn');
  }

  get year(): string {
    const year = this.at('year');
    return typeof year === 'number' ? String(year) : this.stringAt('year');
  }

  get pages(): string {
    const pages = this.at('pages');
    return typeof pages === 'number' ? String(pages) : this.stringAt('pages');
  }

  get resourcePdf(): string {
    return this.stringAt('resource_pdf');
  }

  get views(): string {
    return this.stringAt('Views');
  }

  get downloads(): string {
    return this.stringAt('Download');
  }

  get likes(): string {
    return this.stringAt('Likes');
  }

  get creators(): CreatorAuthor[] {
    const value = this.at('creator_author');
    if (!Array.isArray(value)) return [];

    return value
      .filter((item): item is JsonRecord => this.isRecord(item) && typeof item['name'] === 'string')
      .map((item) => ({
        name: String(item['name']),
        ID: typeof item['ID'] === 'string' ? item['ID'] : undefined,
        complement: typeof item['complement'] === 'string' ? item['complement'] : undefined,
      }));
  }

  get subjectsPt(): SubjectItem[] {
    const subject = this.at('subject');
    if (!this.isRecord(subject)) return [];

    const pt = subject['pt'];
    if (!Array.isArray(pt)) return [];

    return pt
      .filter((item): item is JsonRecord => this.isRecord(item) && typeof item['name'] === 'string')
      .map((item) => ({
        name: String(item['name']),
        ID: typeof item['ID'] === 'string' ? item['ID'] : undefined,
        complement: typeof item['complement'] === 'string' ? item['complement'] : undefined,
      }));
  }

  get chapters(): ChapterItem[] {
    const value = this.at('summary');
    if (!Array.isArray(value)) return [];

    return value
      .filter((entry): entry is unknown[] => Array.isArray(entry) && entry.length >= 2)
      .map((entry) => {
        const id = typeof entry[0] === 'string' ? entry[0] : '';
        const html = typeof entry[1] === 'string' ? entry[1] : '';
        return {
          id,
          title: this.extractHtmlTag(html, 'b') || 'Capítulo sem título',
          pages: this.extractPages(html),
          authors: this.extractHtmlTag(html, 'i'),
        };
      });
  }

  get hasMetadataGrid(): boolean {
    return !!(this.publisher || this.year || this.isbn || this.pages);
  }

  get hasEngagementStats(): boolean {
    return !!(this.views || this.downloads || this.likes);
  }

  trackByName(_: number, item: SubjectItem | CreatorAuthor): string {
    return item.ID || item.name;
  }

  trackByChapter(_: number, item: ChapterItem): string {
    return item.id || item.title;
  }

  close(): void {
    this.closed.emit();
  }

  private at(key: string): unknown {
    if (!this.data) return undefined;
    return this.data[key];
  }

  private stringAt(key: string): string {
    const value = this.at(key);
    return typeof value === 'string' ? value.trim() : '';
  }

  private isRecord(value: unknown): value is JsonRecord {
    return !!value && typeof value === 'object' && !Array.isArray(value);
  }

  private extractHtmlTag(html: string, tag: 'b' | 'i'): string {
    const match = html.match(new RegExp(`<${tag}>(.*?)<\\/${tag}>`, 'i'));
    if (!match?.[1]) return '';
    return this.cleanInlineHtml(match[1]);
  }

  private extractPages(html: string): string {
    const match = html.match(/\((p\s*[^)]*)\)/i);
    return match?.[1]?.trim() || '';
  }

  private cleanInlineHtml(text: string): string {
    return text
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
