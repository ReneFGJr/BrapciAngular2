// ...existing code...
import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { BasketService } from '../../core/services/basket.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basket-selected',
  templateUrl: './basket-selected.page.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterLink],
})
export class BasketSelectedPage implements OnInit {
  public readonly abntCategories = ['Articles', 'Proceedings', 'Books', 'BooksChapter'];
  readonly exportOptions = [
    { type: 'csv', label: 'CSV' },
    { type: 'xls', label: 'XLS' },
    { type: 'doc', label: 'DOC' },
    { type: 'ris', label: 'RIS' },
    { type: 'bibtex', label: 'BibTex' },
    { type: 'cited', label: 'Citacoes' },
    { type: 'ID', label: 'TT' },
  ] as const;

  public get abntLabels() {
    return [
      'Artigos',
      'Trabalhos em Eventos',
      'Livros',
      'Capítulos de Livros'
    ];
  }

  public get abntCounts() {
    const data = this.data?.ABNT;
    if (!data) return [0, 0, 0, 0];
    return this.abntCategories.map((cat) => Array.isArray(data[cat]) ? data[cat].length : 0);
  }

  activeTab = signal<string>('Articles');
  private readonly basket = inject(BasketService);
  private readonly http = inject(HttpClient);
  private readonly exportBaseUrl = 'https://cip.brapci.inf.br/api/brapci/export/';

  markedIds = signal<number[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  results = signal<any>(null);
  data: any = null;

  ngOnInit() {
    const ids = this.basket.getMarked();
    this.markedIds.set(ids);
    if (ids.length === 0) return;

    this.loading.set(true);
    const url = 'https://cip.brapci.inf.br/api/brapci/basket';
    const formData = new FormData();
    formData.append('row', ids.join(','));
    this.http.post(url, formData).subscribe({
      next: (data) => {
        this.data = data;
        this.results.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erro ao buscar dados da API');
        this.loading.set(false);
      },
    });
  }

  get categories() {
    const data = this.results();
    if (!data || typeof data !== 'object') return [];
    return Object.keys(data);
  }

  getResultsByCategory(category: string) {
    const data = this.results();
    if (!data || !data[category]) return [];
    // Se vier string (ex: '20714,45382,...'), retorna array vazio para evitar erro no ngFor
    if (typeof data[category] === 'string') return [];
    return Array.isArray(data[category]) ? data[category] : [];
  }

  clearSelection() {
    this.basket.clear();
    this.markedIds.set([]);
    this.results.set(null);
    this.data = null;
    this.error.set(null);
    this.loading.set(false);
    this.activeTab.set('Articles');
  }

  export(typeE: string): void {
    const ids = this.basket.getMarked();

    if (!ids.length) {
      return;
    }

    const formData = new FormData();
    const row = ids.join(',');
    formData.append('row', row);
    formData.append('typeE', typeE);
    formData.append('type', typeE);
    formData.append('export', typeE);

    this.http
      .post<unknown>(`${this.exportBaseUrl}${encodeURIComponent(typeE)}`, formData)
      .subscribe({
        next: (response) => {
          const payload = response as Record<string, unknown>;
          const downloadLink = typeof payload['download'] === 'string' ? payload['download'].trim() : '';

          if (!downloadLink) {
            this.error.set('Nao foi possivel obter o link de download.');
            return;
          }

          window.open(downloadLink, '_blank', 'noopener,noreferrer');
        },
        error: () => {
          this.error.set('Erro ao exportar os dados do Basket.');
        },
      });
  }
}
