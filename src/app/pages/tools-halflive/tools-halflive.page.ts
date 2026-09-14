import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

interface TypologyAnalysis {
  quantidade: number;
  percentual: number;
  referencias: string[];
}

interface CitationAnalysisData {
  ano_atual: number;
  total_referencias: number;
  referencias_com_ano: number;
  referencias_sem_ano: number;
  ano_mediano: number | null;
  meia_vida: number | null;
  ano_mais_antigo: number | null;
  ano_mais_recente: number | null;
  distribuicao_por_ano: Record<string, number>;
  tipologias: Record<string, TypologyAnalysis>;
  idiomas: Record<string, TypologyAnalysis>;
  referencias: Array<{
    referencia: string;
    ano: number | null;
    idade: number | null;
    tipologia: string;
    idioma?: string;
  }>;
}

@Component({
  selector: 'app-tools-halflive-page',
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './tools-halflive.page.html',
  styleUrl: './tools-halflive.page.scss',
})
export class ToolsHalflivePage {
  private readonly http = inject(HttpClient);

  citations = '';
  result: unknown = null;
  rawResponse = '';
  error = '';
  loading = false;
  activeTab: 'result' | 'json' = 'result';

  analyze(): void {
    const text = this.citations.trim();
    if (!text || this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;
    this.rawResponse = '';
    this.activeTab = 'result';

    this.http
      .post('/api/cite/halflive', { text }, { responseType: 'text' })
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
            'Não foi possível analisar as citações. Verifique o conteúdo e tente novamente.';
        },
      });
  }

  resultText(): string | null {
    if (typeof this.result === 'string') {
      return this.result;
    }

    if (this.result && typeof this.result === 'object') {
      const data = this.result as Record<string, unknown>;
      const value = data['result'] ?? data['text'] ?? data['message'] ?? data['data'];
      return typeof value === 'string' ? value : null;
    }

    return null;
  }

  analysisData(): CitationAnalysisData | null {
    if (!this.result || typeof this.result !== 'object') {
      return null;
    }

    const response = this.result as Record<string, unknown>;
    const data = response['data'];
    if (!data || typeof data !== 'object' || !('total_referencias' in data)) {
      return null;
    }

    return data as CitationAnalysisData;
  }

  typologyEntries(data: CitationAnalysisData): Array<{
    key: string;
    label: string;
    value: TypologyAnalysis;
  }> {
    const labels: Record<string, string> = {
      artigos: 'Artigos',
      eventos: 'Eventos',
      livros: 'Livros',
      capitulos_de_livros: 'Capítulos de livros',
      sites: 'Sites',
      teses: 'Teses',
      dissertacoes: 'Dissertações',
      outras_tipologias: 'Outras tipologias',
    };

    return Object.entries(data.tipologias).map(([key, value]) => ({
      key,
      label: labels[key] ?? key.replaceAll('_', ' '),
      value,
    }));
  }

  yearEntries(data: CitationAnalysisData): Array<{ year: string; count: number }> {
    return Object.entries(data.distribuicao_por_ano)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => Number(b.year) - Number(a.year));
  }

  languageEntries(data: CitationAnalysisData): Array<{
    key: string;
    label: string;
    flag: string | null;
    value: TypologyAnalysis;
  }> {
    const metadata: Record<string, { label: string; flag: string | null }> = {
      portugues: { label: 'Português', flag: '/assets/flags/pt.svg' },
      ingles: { label: 'Inglês', flag: '/assets/flags/en.svg' },
      espanhol: { label: 'Espanhol', flag: '/assets/flags/es.svg' },
      frances: { label: 'Francês', flag: '/assets/flags/fr.svg' },
      nao_identificado: { label: 'Não identificado', flag: null },
    };

    return Object.entries(data.idiomas ?? {}).map(([key, value]) => ({
      key,
      label: metadata[key]?.label ?? key.replaceAll('_', ' '),
      flag: metadata[key]?.flag ?? null,
      value,
    }));
  }

  private parseResponse(response: string): unknown {
    const cleanResponse = response.replace(/<!--[^]*?-->/g, '').trim();

    try {
      return JSON.parse(cleanResponse);
    } catch {
      const positions = [cleanResponse.indexOf('{'), cleanResponse.indexOf('[')].filter(
        (index) => index >= 0,
      );
      const jsonStart = positions.length ? Math.min(...positions) : -1;

      if (jsonStart >= 0) {
        try {
          return JSON.parse(cleanResponse.slice(jsonStart));
        } catch {
          // Mantém a resposta textual para exibição quando ela não for JSON válido.
        }
      }

      return cleanResponse;
    }
  }
}
