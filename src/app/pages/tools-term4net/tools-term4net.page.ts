import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-tools-term4net-page',
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './tools-term4net.page.html',
  styleUrl: './tools-term4net.page.scss',
})
export class ToolsTerm4netPage {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  text = '';
  selectedFileName = '';
  error = '';
  loading = false;

  async loadFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    this.error = '';
    try {
      this.text = await file.text();
      this.selectedFileName = file.name;
    } catch {
      this.error = 'Não foi possível ler o arquivo selecionado.';
      this.selectedFileName = '';
    }
  }

  convert(): void {
    const text = this.text.trim();
    if (!text || this.loading) {
      return;
    }

    const apiKey = this.auth.getLocalUser()?.token;
    if (!apiKey) {
      this.error = 'Sua conta não possui uma APIKEY válida. Entre novamente para continuar.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.http
      .post('/api/tools/term4net', { text }, {
        headers: new HttpHeaders({ APIKEY: apiKey }),
        params: new HttpParams().set('APIKEY', apiKey),
        observe: 'response',
        responseType: 'blob',
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => this.downloadResult(response),
        error: (error: HttpErrorResponse) => {
          this.error =
            error.status === 401 || error.status === 403
              ? 'APIKEY inválida ou sem permissão para realizar a conversão.'
              : 'Não foi possível converter os assuntos. Tente novamente.';
        },
      });
  }

  private downloadResult(response: HttpResponse<Blob>): void {
    if (!response.body) {
      this.error = 'A API não retornou o arquivo convertido.';
      return;
    }

    const contentDisposition = response.headers.get('content-disposition') ?? '';
    const headerFileName = /filename\*?=(?:UTF-8''|["'])?([^"';]+)/i.exec(contentDisposition)?.[1];
    const fileName = headerFileName
      ? decodeURIComponent(headerFileName.trim())
      : this.defaultOutputFileName();
    const normalizedFileName = fileName.toLowerCase().endsWith('.net') ? fileName : `${fileName}.net`;
    const url = URL.createObjectURL(response.body);
    const link = document.createElement('a');
    link.href = url;
    link.download = normalizedFileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  private defaultOutputFileName(): string {
    const baseName = this.selectedFileName.replace(/\.[^.]+$/, '').trim();
    return `${baseName || 'assuntos'}.net`;
  }
}
