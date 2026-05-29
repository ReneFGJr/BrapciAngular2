import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type BookResult = {
  id: string;
  title: string;
  subtitle: string;
};

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss',
})
export class SearchBookComponent {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly results = signal<BookResult[]>([]);
  readonly searched = signal(false);

  readonly yearsStart: number[] = [];
  readonly yearsEnd: number[] = [];

  readonly form = new FormGroup({
    term: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    collection: new FormControl('', { nonNullable: true }),
    year_start: new FormControl(1960, { nonNullable: true }),
    year_end: new FormControl(new Date().getFullYear() + 1, { nonNullable: true }),
  });

  readonly hasResults = computed(() => this.results().length > 0);

  constructor() {
    this.initYears();
    this.form.patchValue({
      year_start: this.yearsStart[0],
      year_end: this.yearsEnd[0],
    });
  }

  search(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { term, collection, year_start, year_end } = this.form.getRawValue();
    const normalizedTerm = term.trim();

    if (!normalizedTerm) {
      this.form.controls.term.setErrors({ required: true });
      return;
    }

    const selectedCollection = collection ? [collection] : ['BK', 'BC'];

    this.loading.set(true);
    this.error.set('');
    this.searched.set(true);

    this.brapciApiService
      .search<unknown>(normalizedTerm, [
        { name: 'collection', value: selectedCollection },
        { name: 'year_start', value: year_start },
        { name: 'year_end', value: year_end },
        { name: 'fields', value: 'FL' },
      ])
      .subscribe({
        next: (response) => {
          const normalized = this.normalizeWorks(response)
            .map((item) => this.mapResult(item))
            .filter((item): item is BookResult => item !== null);

          this.results.set(normalized);
          this.loading.set(false);

          if (!normalized.length) {
            this.error.set('Nenhum livro encontrado para os filtros informados.');
          }
        },
        error: () => {
          this.results.set([]);
          this.loading.set(false);
          this.error.set('Nao foi possivel buscar livros neste momento.');
        },
      });
  }

  private initYears(): void {
    const currentYear = new Date().getFullYear() + 1;
    for (let year = 1960; year <= currentYear; year += 1) {
      this.yearsStart.push(year);
    }
    for (let year = currentYear; year >= 1960; year -= 1) {
      this.yearsEnd.push(year);
    }
  }

  private normalizeWorks(response: unknown): any[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      const payload = response as Record<string, unknown>;

      if (Array.isArray(payload['works'])) {
        return payload['works'];
      }

      if (Array.isArray(payload['results'])) {
        return payload['results'];
      }

      if (Array.isArray(payload['items'])) {
        return payload['items'];
      }
    }

    return [];
  }

  private mapResult(item: any): BookResult | null {
    const id = String(item?.id ?? item?.ID ?? '').trim();
    const title = String(item?.title ?? item?.TI ?? item?.name ?? '').trim();
    const year = String(item?.year ?? item?.PY ?? item?.publish_year ?? '').trim();
    const authors = this.parseAuthors(item);

    if (!title) {
      return null;
    }

    const subtitleParts = [authors, year].filter(Boolean);

    return {
      id,
      title,
      subtitle: subtitleParts.length ? subtitleParts.join(' - ') : 'Sem metadados adicionais',
    };
  }

  private parseAuthors(item: any): string {
    const raw = item?.authors ?? item?.AU ?? item?.author ?? item?.creator;

    if (Array.isArray(raw)) {
      return raw
        .map((value) => String(value).trim())
        .filter(Boolean)
        .slice(0, 3)
        .join(', ');
    }

    return String(raw ?? '').trim();
  }
}
