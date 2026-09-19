import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BannerLivrosComponent } from '../../components/banner-livros/banner-livros.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type ConfirmationState = 'loading' | 'success' | 'error';

interface DisclaimerResponse {
  bs_post?: string | Record<string, unknown>;
  bs_status?: string | number;
  message?: string;
}

interface SubmissionDetails {
  name: string;
  file: string;
}

@Component({
  selector: 'app-book-disclaimer-page',
  standalone: true,
  imports: [
    BannerLivrosComponent,
    BreadcrumbsComponent,
    CommonModule,
    LoadingSpinnerComponent,
    RouterLink,
  ],
  templateUrl: './book-disclaimer.page.html',
  styleUrl: './book-disclaimer.page.scss',
})
export class BookDisclaimerPage {
  private readonly api = inject(BrapciApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly state = signal<ConfirmationState>('loading');
  readonly details = signal<SubmissionDetails>({ name: '', file: '' });
  readonly errorMessage = signal('');

  constructor() {
    this.confirmSubmission();
  }

  retry(): void {
    this.confirmSubmission();
  }

  private confirmSubmission(): void {
    const id = this.route.snapshot.paramMap.get('id')?.trim() ?? '';
    const check = this.route.snapshot.paramMap.get('check')?.trim() ?? '';

    if (!/^\d+$/.test(id) || !/^[a-f\d]{32}$/i.test(check)) {
      this.fail('O link de confirmacao e invalido ou esta incompleto.');
      return;
    }

    this.state.set('loading');
    this.errorMessage.set('');

    this.api
      .post<DisclaimerResponse>(`brapci/book/disclaimer/${id}/${check}`, new FormData())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          const post = this.parseSubmission(response?.bs_post);
          if (!post) {
            this.fail(response?.message || 'Nao foi possivel validar os dados da submissao.');
            return;
          }

          this.details.set({
            name: this.asText(post['name']) || 'autor(a)',
            file: this.asText(post['file']) || 'enviado',
          });
          this.state.set('success');
        },
        error: () => {
          this.fail('Nao foi possivel confirmar a submissao. Verifique o link e tente novamente.');
        },
      });
  }

  private parseSubmission(value: DisclaimerResponse['bs_post']): Record<string, unknown> | null {
    if (value && typeof value === 'object') return value;
    if (typeof value !== 'string' || value.trim() === '') return null;

    try {
      const parsed: unknown = JSON.parse(value);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed as Record<string, unknown>
        : null;
    } catch {
      return null;
    }
  }

  private asText(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private fail(message: string): void {
    this.errorMessage.set(message);
    this.state.set('error');
  }
}
