import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BasketService } from '../../core/services/basket.service';

@Component({
  selector: 'app-basket-selected',
  templateUrl: './basket-selected.page.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class BasketSelectedPage implements OnInit {
  activeTab = signal<'categorias' | 'json'>('categorias');
  private readonly basket = inject(BasketService);
  private readonly http = inject(HttpClient);

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
      error: (err) => {
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
}
