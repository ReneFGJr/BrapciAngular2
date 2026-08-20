import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-tools-text-specialist-page',
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './tools-text-specialist.page.html',
  styleUrl: './tools-text-specialist.page.scss',
})
export class ToolsTextSpecialistPage {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  text = '';
  result: unknown = null;
  error = '';
  loading = false;

  analyze(): void {
    const text = this.text.trim();
    if (!text || this.loading) {
      return;
    }

    const apiKey = this.auth.getLocalUser()?.token;
    if (!apiKey) {
      this.error = 'Sua conta não possui uma APIKEY válida. Entre novamente para continuar.';
      this.result = null;
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;

    const options = {
      headers: new HttpHeaders({ APIKEY: apiKey }),
      params: new HttpParams().set('APIKEY', apiKey),
    };

    this.http
      .post<unknown>('/api/tools/specialist', { text }, options)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => (this.result = response),
        error: (error: HttpErrorResponse) => {
          this.error =
            error.status === 401 || error.status === 403
              ? 'APIKEY inválida ou sem permissão para realizar a análise.'
              : 'Não foi possível analisar o texto. Tente novamente.';
        },
      });
  }

  isTextResult(): boolean {
    return typeof this.result === 'string';
  }
}
