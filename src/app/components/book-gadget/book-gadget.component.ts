import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type BookData = Record<string, unknown>;

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

  private readonly api = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly data = signal<BookData | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookId'] && this.bookId) {
      this.loadBook();
    }
  }

  private loadBook(): void {
    this.loading.set(true);
    this.error.set('');
    this.data.set(null);

    this.api.get<BookData>(`v/${this.bookId}`).subscribe({
      next: (res) => {
        this.data.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Não foi possível carregar os dados do livro.');
        this.loading.set(false);
      },
    });
  }

  str(key: string): string {
    const d = this.data();
    if (!d) return '';
    const v = d[key];
    return typeof v === 'string' && v.trim() ? v : '';
  }

  arr(key: string): string[] {
    const d = this.data();
    if (!d) return [];
    const v = d[key];
    if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string');
    return [];
  }
}
