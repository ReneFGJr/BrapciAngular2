import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasketService } from '../../core/services/basket.service';
import { PainelAnalysisComponent } from '../../components/painel-analysis/painel-analysis.component';

@Component({
  selector: 'app-painel-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, PainelAnalysisComponent],
  templateUrl: './painel.page.html',
  styleUrl: './painel.page.scss',
})
export class PainelPage implements OnInit {
  private readonly basket = inject(BasketService);
  private readonly http = inject(HttpClient);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly worksIds = signal<number[]>([]);
  readonly result = signal<unknown>(null);

  readonly endpoint = 'https://cip.brapci.inf.br/api/brapci/analysis';

  ngOnInit(): void {
    const ids = this.basket.getMarked();
    this.worksIds.set(ids);

    if (!ids.length) {
      this.error.set('Nenhum artigo selecionado no Basket.');
      return;
    }

    this.loadAnalysis(ids);
  }

  private loadAnalysis(ids: number[]): void {
    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);

    const formData = new FormData();
    formData.append('worksID', ids.join(','));

    this.http.post<unknown>(this.endpoint, formData).subscribe({
      next: (response) => {
        this.result.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erro ao carregar a análise do endpoint.');
        this.loading.set(false);
      },
    });
  }

  resultJson(): string {
    const value = this.result();
    if (value === null || value === undefined) {
      return '';
    }

    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return 'Nao foi possivel serializar a resposta.';
    }
  }
}
