import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BookPanelComponent } from '../book-panel/book-panel.component';

type BookCarouselApiItem = {
  ID?: string;
  data?: {
    hasTitle?: string;
    hasCover?: string;
  };
};

type BookCarouselApiResponse = {
  news?: BookCarouselApiItem[];
};

type BookSlide = {
  id: string;
  title: string;
  cover: string;
};

@Component({
  selector: 'app-book-carousel',
  imports: [CommonModule, BookPanelComponent],
  templateUrl: './book-carousel.component.html',
  styleUrl: './book-carousel.component.scss',
})
export class BookCarouselComponent {
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly stepSize = 188;

  readonly loading = signal(true);
  readonly error = signal('');
  readonly books = signal<BookSlide[]>([]);
  readonly activeIndex = signal(0);
  readonly hasMultipleBooks = computed(() => this.books().length > 1);
  readonly trackTransform = computed(() => `translateX(-${this.activeIndex() * this.stepSize}px)`);

  readonly panelOpen = signal(false);
  readonly panelBookId = signal('');
  readonly panelCover = signal('');
  readonly panelTitle = signal('');
  readonly panelData = signal<Record<string, unknown> | null>(null);

  constructor() {
    this.loadBooks();
  }

  prev(): void {
    const total = this.books().length;
    if (total < 2) {
      return;
    }

    this.activeIndex.update((index) => (index - 1 + total) % total);
  }

  next(): void {
    const total = this.books().length;
    if (total < 2) {
      return;
    }

    this.activeIndex.update((index) => (index + 1) % total);
  }

  setActive(index: number): void {
    const total = this.books().length;
    if (index < 0 || index >= total) {
      return;
    }

    this.activeIndex.set(index);
  }

  openPanel(book: BookSlide, index: number): void {
    this.setActive(index);
    this.panelBookId.set(book.id);
    this.panelCover.set(book.cover);
    this.panelTitle.set(book.title);
    this.panelData.set(null);

    // Carregar dados do livro antes de abrir o painel
    this.brapciApiService.getById<Record<string, unknown>>(book.id).subscribe({
      next: (data) => {
        this.panelData.set(data);
        this.panelOpen.set(true);
      },
      error: () => {
        // Abre painel mesmo com erro, book-gadget trata o erro
        this.panelOpen.set(true);
      },
    });
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }

  getPositionClass(index: number): string {
    const offset = index - this.activeIndex();

    if (offset === 0) {
      return 'in-view';
    }

    if (offset === 1) {
      return 'right';
    }

    if (offset === -1) {
      return 'left';
    }

    if (offset > 1) {
      return 'far-right';
    }

    return 'far-left';
  }

  private loadBooks(): void {
    this.loading.set(true);
    this.error.set('');

    this.brapciApiService.get<BookCarouselApiResponse>('book/vitrine').subscribe({
      next: (response) => {
        const books = (response.news ?? [])
          .map((item, index) => this.mapApiItem(item, index))
          .filter((item): item is BookSlide => item !== null);

        this.books.set(books);
        this.activeIndex.set(0);
        this.loading.set(false);

        if (!books.length) {
          this.error.set('Nenhum livro foi encontrado na vitrine.');
        }
      },
      error: () => {
        this.books.set([]);
        this.error.set('Nao foi possivel carregar a vitrine de livros.');
        this.loading.set(false);
      },
    });
  }

  private mapApiItem(item: BookCarouselApiItem, index: number): BookSlide | null {
    const title = this.cleanText(item.data?.hasTitle);
    const cover = this.cleanText(item.data?.hasCover);

    if (!title || !cover) {
      return null;
    }

    return {
      id: String(item.ID ?? index),
      title,
      cover,
    };
  }

  private cleanText(value: string | undefined): string {
    return String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
