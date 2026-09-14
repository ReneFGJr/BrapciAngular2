import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type CitationStandard = 'ABNT' | 'Vancouver' | 'APA';
type ResultTab = 'result' | 'json';

@Component({
  selector: 'app-tools-normalize-cites-page',
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './tools-normalize-cites.page.html',
  styleUrl: './tools-normalize-cites.page.scss',
})
export class ToolsNormalizeCitesPage {
  private readonly http = inject(HttpClient);

  @ViewChild('editor') private editor?: ElementRef<HTMLDivElement>;

  readonly standards: CitationStandard[] = ['ABNT', 'Vancouver', 'APA'];
  standard: CitationStandard = 'ABNT';
  editorHtml = '';
  result: unknown = null;
  rawResponse = '';
  activeTab: ResultTab = 'result';
  error = '';
  loading = false;

  updateText(event: Event): void {
    this.editorHtml = (event.currentTarget as HTMLDivElement).innerHTML;
  }

  format(command: 'bold' | 'italic', event: MouseEvent): void {
    event.preventDefault();
    this.editor?.nativeElement.focus();
    document.execCommand(command);
    this.editorHtml = this.editor?.nativeElement.innerHTML ?? '';
  }

  normalize(): void {
    if (!this.hasText() || this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;
    this.rawResponse = '';
    this.activeTab = 'result';

    this.http
      .post(`/api/cite/normalize/${this.standard}`, { text: this.editorHtml }, { responseType: 'text' })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.rawResponse = response;
          this.result = this.parseResponse(response);
        },
        error: (error: HttpErrorResponse) => {
          if (typeof error.error === 'string' && error.error.trim()) {
            this.rawResponse = error.error;
            this.result = this.parseResponse(error.error);
          }
          this.error =
            (typeof error.error !== 'string' && error.error?.message) ||
            'Não foi possível normalizar as referências. Verifique o texto e tente novamente.';
        },
      });
  }

  hasText(): boolean {
    const text = this.editorHtml
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;|&#160;/gi, ' ')
      .trim();
    return text.length > 0;
  }

  resultHtml(): string | null {
    if (typeof this.result === 'string') {
      return this.result;
    }

    if (this.result && typeof this.result === 'object') {
      const data = this.result as Record<string, unknown>;
      const value = data['result'] ?? data['text'] ?? data['reference'] ?? data['data'];
      return typeof value === 'string' ? value : null;
    }

    return null;
  }

  selectTab(tab: ResultTab): void {
    this.activeTab = tab;
  }

  private parseResponse(response: string): unknown {
    const cleanResponse = response.replace(/<!--[^]*?-->/g, '').trim();

    try {
      return JSON.parse(cleanResponse);
    } catch {
      const jsonPositions = [cleanResponse.indexOf('{'), cleanResponse.indexOf('[')].filter(
        (index) => index >= 0,
      );
      const jsonStart = jsonPositions.length ? Math.min(...jsonPositions) : -1;

      if (jsonStart >= 0) {
        try {
          return JSON.parse(cleanResponse.slice(jsonStart));
        } catch {
          // O retorno original continua disponível na aba JSON.
        }
      }

      return cleanResponse;
    }
  }
}
