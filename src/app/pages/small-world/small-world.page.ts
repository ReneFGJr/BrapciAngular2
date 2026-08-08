import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type Author = { id: string; name: string };
type AuthorResponse = { value?: Author[]; Count?: number };
type AuthorApiResponse = Author[] | AuthorResponse;
type FieldName = 'author' | 'coauthor';

@Component({
  selector: 'app-small-world-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './small-world.page.html',
  styleUrl: './small-world.page.scss',
})
export class SmallWorldPage {
  private readonly api = inject(BrapciApiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly contactForm = new FormGroup({
    author: new FormControl('', { nonNullable: true, validators: Validators.required }),
    coauthor: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  readonly suggestions = {
    author: signal<Author[]>([]),
    coauthor: signal<Author[]>([]),
  };
  readonly loadingSuggestions = {
    author: signal(false),
    coauthor: signal(false),
  };
  readonly selected = {
    author: signal<Author | null>(null),
    coauthor: signal<Author | null>(null),
  };
  readonly activeOption = {
    author: signal(-1),
    coauthor: signal(-1),
  };

  readonly searching = signal(false);
  readonly error = signal('');
  data: unknown = null;

  constructor() {
    this.configureAutocomplete('author');
    this.configureAutocomplete('coauthor');
  }

  selectAuthor(field: FieldName, author: Author): void {
    this.selected[field].set(author);
    this.contactForm.controls[field].setValue(author.name, { emitEvent: false });
    this.suggestions[field].set([]);
    this.activeOption[field].set(-1);
    this.contactForm.controls[field].setErrors(null);
  }

  onKeydown(event: KeyboardEvent, field: FieldName): void {
    const options = this.suggestions[field]();
    if (!options.length) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      const current = this.activeOption[field]();
      this.activeOption[field].set((current + delta + options.length) % options.length);
    } else if (event.key === 'Enter' && this.activeOption[field]() >= 0) {
      event.preventDefault();
      this.selectAuthor(field, options[this.activeOption[field]()]);
    } else if (event.key === 'Escape') {
      this.suggestions[field].set([]);
      this.activeOption[field].set(-1);
    }
  }

  search(): void {
    this.error.set('');
    if (!this.selected.author() || !this.selected.coauthor()) {
      this.markInvalidSelections();
      this.error.set('Selecione os dois autores nas listas de sugestões.');
      return;
    }

    this.searching.set(true);
    this.data = null;
    this.api
      .get<unknown>('tools/dijkstra', {
        source: this.contactForm.value.author ?? '',
        target: this.contactForm.value.coauthor ?? '',
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.data = response;
          this.searching.set(false);
        },
        error: () => {
          this.error.set('Não foi possível realizar a busca. Tente novamente.');
          this.searching.set(false);
        },
      });
  }

  private configureAutocomplete(field: FieldName): void {
    this.contactForm.controls[field].valueChanges
      .pipe(
        tap(() => {
          this.selected[field].set(null);
          this.activeOption[field].set(-1);
        }),
        map((value) => value.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => {
          if (query.length <= 3) {
            this.suggestions[field].set([]);
            this.loadingSuggestions[field].set(false);
            return of<Author[]>([]);
          }
          this.loadingSuggestions[field].set(true);
          return this.api.get<AuthorApiResponse>('sri/query_author', { q: query }).pipe(
            map((response) => {
              if (Array.isArray(response)) {
                return response;
              }

              return Array.isArray(response?.value) ? response.value : [];
            }),
            catchError(() => of<Author[]>([])),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((authors) => {
        this.suggestions[field].set(authors);
        this.loadingSuggestions[field].set(false);
      });
  }

  private markInvalidSelections(): void {
    (['author', 'coauthor'] as FieldName[]).forEach((field) => {
      if (!this.selected[field]()) {
        this.contactForm.controls[field].setErrors({ invalidSelection: true });
        this.contactForm.controls[field].markAsTouched();
      }
    });
  }
}
