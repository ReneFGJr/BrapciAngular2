import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BasketService } from '../../core/services/basket.service';

type BookData = Record<string, unknown>;

type BookAuthor = {
  name: string;
  id: string;
};

@Component({
  selector: 'app-book-gadget',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-gadget.component.html',
  styleUrl: './book-gadget.component.scss',
})
export class BookGadgetComponent implements OnChanges {
  @Input({ required: true }) bookId = '';
  @Input() cover = '';
  @Input() title = '';
  @Input() data: BookData | null = null;

  private readonly api = inject(BrapciApiService);
  private readonly basketService = inject(BasketService);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly bookData = signal<BookData | null>(null);
  readonly basketVersion = signal(0);

  constructor() {
    this.basketService.changed.pipe(takeUntilDestroyed()).subscribe(() => {
      this.basketVersion.update((value) => value + 1);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Se dados foram recebidos como input, usar diretamente
    if (this.data) {
      this.bookData.set(this.data);
      this.error.set('');
      this.loading.set(false);
    } else if (changes['bookId'] && this.bookId) {
      // Caso contrário, carregar dados
      this.loadBook();
    }
  }

  private loadBook(): void {
    this.loading.set(true);
    this.error.set('');
    this.bookData.set(null);

    this.api.getById<BookData>(this.bookId).subscribe({
      next: (res) => {
        this.bookData.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Não foi possível carregar os dados do livro.');
        this.loading.set(false);
      },
    });
  }

  str(key: string): string {
    const d = this.bookData();
    if (!d) return '';
    const v = d[key];
    return typeof v === 'string' && v.trim() ? v : '';
  }

  arr(key: string): string[] {
    const d = this.bookData();
    if (!d) return [];
    const v = d[key];
    if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string');
    return [];
  }

  publisherName(): string {
    return this.str('hasPublisher') || this.str('publisher');
  }

  authorsWithLink(): BookAuthor[] {
    const d = this.bookData();
    if (!d) return [];

    const creatorAuthor = d['creator_author'];
    if (Array.isArray(creatorAuthor)) {
      const linked = creatorAuthor
        .filter((item): item is Record<string, unknown> => !!item && typeof item === 'object' && !Array.isArray(item))
        .map((item) => ({
          name: typeof item['name'] === 'string' ? item['name'].trim() : '',
          id: typeof item['ID'] === 'string' ? item['ID'].trim() : '',
        }))
        .filter((item) => item.name.length > 0);

      if (linked.length) {
        return linked;
      }
    }

    const hasAuthor = d['hasAuthor'];
    if (Array.isArray(hasAuthor)) {
      return hasAuthor
        .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
        .map((name) => ({ name: name.trim(), id: '' }));
    }

    return [];
  }

  trackAuthor(_: number, author: BookAuthor): string {
    return author.id || author.name;
  }

  isMarked(): boolean {
    this.basketVersion();
    const numericId = Number(this.bookId);
    if (!Number.isFinite(numericId)) return false;
    return this.basketService.isMarked(numericId);
  }

  toggleBasket(): void {
    const numericId = Number(this.bookId);
    if (!Number.isFinite(numericId)) return;

    if (this.basketService.isMarked(numericId)) {
      this.basketService.remove(numericId);
      return;
    }

    this.basketService.add(numericId);
  }
}
