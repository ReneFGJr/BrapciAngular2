import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { groupLikes } from './liked-periods';
import { RouterLink } from '@angular/router';
import { BasketService } from '../../core/services/basket.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';

interface LikedWork { id: string; title: string; authors: string; year: string; publication: string; likedAt?: string | null; }
@Component({
  selector: 'app-user-liked',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './user-liked.component.scss',
  template: `
    <section aria-labelledby="liked-title" [attr.aria-busy]="loading()">
      <h2 id="liked-title" class="h5 mb-3">Trabalhos curtidos</h2>
      @if (loading()) {
        <p role="status"><span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Carregando curtidas...</p>
      } @else if (error()) {
        <p role="alert">{{ error() }}</p>
        <button type="button" class="btn btn-outline-primary" (click)="retry.update(increment)">Tentar novamente</button>
      } @else {
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <p class="liked-total mb-0">{{ works().length }} trabalho(s)</p>
          <button type="button" class="btn btn-outline-primary btn-sm" [disabled]="!works().length" (click)="sendToBasket()">
            <i class="bi bi-basket me-1" aria-hidden="true"></i> Enviar todos para o Basket
          </button>
        </div>
        @if (basketFeedback()) {
          <p class="small mb-3" role="status">{{ basketFeedback() }} <a routerLink="/basket/selected">Abrir Basket</a></p>
        }
        @for (group of groupedWorks(); track group.label) {
          <section class="liked-group" [attr.aria-label]="group.label">
            <h3 class="liked-group-title">{{ group.label }} <span class="liked-count">{{ group.works.length }}</span></h3>
            <ul class="liked-list">
              @for (work of group.works; track work.id) {
                <li class="liked-item">
                  <a [routerLink]="['/v', work.id]" target="_blank" rel="noopener noreferrer" class="liked-title">{{ work.title || ('Registro ' + work.id) }}</a>
                  @if (work.authors) { <p class="liked-authors"><em>{{ work.authors }}</em></p> }
                  @if (work.publication || work.year) { <p class="liked-publication">{{ work.publication }} @if (work.publication && work.year) { <span aria-hidden="true">&middot;</span> } {{ work.year }}</p> }
                </li>
              }
            </ul>
          </section>
        } @empty { <p>Você ainda não curtiu nenhum trabalho.</p> }
      }
    </section>
  `,
})
export class UserLikedComponent {
  readonly userKey = input.required<string>();
  readonly works = signal<LikedWork[]>([]);
  readonly groupedWorks = computed(() => groupLikes(this.works()));
  readonly loading = signal(false);
  readonly error = signal('');
  readonly retry = signal(0);
  readonly increment = (value: number) => value + 1;
  private readonly api = inject(BrapciApiService);
  private readonly basket = inject(BasketService);
  readonly basketFeedback = signal('');

  sendToBasket(): void {
    if (this.loading() || this.error()) return;
    const ids = this.works().map(work => Number(work.id)).filter(id => Number.isInteger(id) && id > 0);
    try {
      this.basket.addMany(ids);
      this.basketFeedback.set('Trabalhos enviados para o Basket.');
    } catch {
      this.basketFeedback.set('Não foi possível salvar no Basket. Tente novamente.');
    }
  }

  constructor() {
    effect((onCleanup) => {
      const userKey = this.userKey();
      this.retry();
      this.works.set([]);
      this.basketFeedback.set('');
      this.error.set('');
      this.loading.set(false);
      if (!userKey) { this.error.set('Entre novamente para consultar suas curtidas.'); return; }
      this.loading.set(true);
      const request = this.api.postForm<{ status: string; works: LikedWork[] }>('like/getUserLiked', { userKey })
        .subscribe({
          next: (response) => {
            if (String(response.status) === '200' && Array.isArray(response.works)) this.works.set(response.works);
            else this.error.set('Não foi possível carregar as curtidas.');
            this.loading.set(false);
          },
          error: () => { this.error.set('Não foi possível carregar as curtidas.'); this.loading.set(false); },
        });
      onCleanup(() => request.unsubscribe());
    });
  }
}
