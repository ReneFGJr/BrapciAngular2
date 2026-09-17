import { Component, effect, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';

@Component({
  selector: 'app-article-like',
  standalone: true,
  template: `
    <button type="button" [class.liked]="liked()" [disabled]="busy() || !articleId() || !user()?.token"
      [attr.aria-pressed]="liked()" [attr.aria-busy]="busy()"
      [title]="!user()?.token ? 'Entre para curtir' : (liked() ? 'Descurtir' : 'Curtir')"
      [attr.aria-label]="liked() ? 'Descurtir' : 'Curtir'" (click)="toggle()">
      <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"
        [attr.fill]="liked() ? 'currentColor' : 'none'" aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    </button>
    @if (error()) { <small role="status">{{ error() }}</small> }
  `,
  styles: `
    :host { display: block; position: relative; width: 100%; }
    button { width: 100%; max-width: 1.75rem; height: 1.75rem; padding: .25rem; display: grid; place-items: center;
      border: 1px solid var(--theme-line); border-radius: .4rem; background: var(--theme-card-bg, #fff);
      color: var(--theme-ink, #172b4d); cursor: pointer; }
    button.liked { color: #dc2626; }
    button.liked svg {
      transform-box: fill-box;
      transform-origin: center;
      animation: heart-pulse 1s ease-in-out infinite;
    }
    @keyframes heart-pulse {
      0%, 55%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
      15%, 35% { transform: scale(1.5); filter: drop-shadow(0 0 4px rgb(239 68 68 / 80%)); }
      25% { transform: scale(1.1); filter: drop-shadow(0 0 2px rgb(239 68 68 / 45%)); }
    }
    @keyframes heart-pulse-soft {
      0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px rgb(239 68 68 / 80%)); }
      50% { opacity: .35; filter: drop-shadow(0 0 0 transparent); }
    }
    @media (prefers-reduced-motion: reduce) {
      button.liked svg { animation: heart-pulse-soft 1.6s ease-in-out infinite; }
    }
    button:disabled { cursor: default; opacity: .65; }
    button:focus-visible { outline: 2px solid var(--theme-link); outline-offset: 2px; }
    svg { width: 1rem; height: 1rem; overflow: visible; }
    small { display: block; position: absolute; right: 0; top: 100%; min-width: 12rem;
      background: var(--theme-card-bg, #fff); color: var(--theme-ink); padding: .5rem; z-index: 2; }
  `,
})
export class ArticleLikeComponent {
  readonly articleId = input<string | null>(null);
  private readonly api = inject(BrapciApiService);
  readonly user = toSignal(inject(AuthService).currentUser$, { initialValue: null });
  readonly liked = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  private loaded = false;
  private action?: Subscription;

  constructor() {
    effect((onCleanup) => {
      const id = this.articleId();
      const token = this.user()?.token;
      this.liked.set(false);
      this.error.set('');
      this.loaded = false;
      this.busy.set(false);
      onCleanup(() => this.action?.unsubscribe());
      if (!id || !token) return;
      this.busy.set(true);
      const request = this.api.postForm<{ liked?: number | string | boolean }>(`getLike/${encodeURIComponent(id)}`, { id, user: token })
        .subscribe({
          next: (response) => {
            this.loaded = response.liked !== undefined;
            this.liked.set(response.liked === 1 || response.liked === '1' || response.liked === true);
            if (!this.loaded) this.error.set('Falha ao consultar curtida.');
            this.busy.set(false);
          },
          error: () => { this.error.set('Falha ao consultar curtida.'); this.busy.set(false); },
        });
      onCleanup(() => { request.unsubscribe(); this.action?.unsubscribe(); });
    });
  }

  toggle(): void {
    const id = this.articleId();
    const token = this.user()?.token;
    if (!id || !token || this.busy()) return;
    if (!this.loaded) { this.error.set('Recarregue a página para consultar a curtida.'); return; }
    const next = !this.liked();
    this.busy.set(true);
    this.error.set('');
    this.action = this.api.postForm<{ status?: number | string }>(`${next ? 'like' : 'disliked'}/${encodeURIComponent(id)}`, { id, user: token })
      .subscribe({
        next: (response) => {
          if (String(response.status) === '200') this.liked.set(next);
          else this.error.set('Não foi possível atualizar a curtida.');
          this.busy.set(false);
        },
        error: () => { this.error.set('Não foi possível atualizar a curtida.'); this.busy.set(false); },
      });
  }
}
