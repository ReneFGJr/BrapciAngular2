import { HttpClient, HttpContext } from '@angular/common/http';
import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { retry, timeout } from 'rxjs';
import { HomeSearchComponent } from '../../components/home-search/home-search.component';
import { SKIP_HOME_CONNECTION_REDIRECT } from '../../core/interceptors/home-connection.interceptor';
import { API_CONFIG } from '../../core/tokens/api-config.token';

@Component({
  selector: 'app-home-page',
  imports: [HomeSearchComponent],
  template: `
    @defer (when ready()) {
      <app-home-search></app-home-search>
    } @placeholder {
      <main class="container loading-screen" aria-busy="true">
        <div role="status" aria-live="polite">
          <span class="loading-spinner mb-3" aria-hidden="true"></span>
          <p>Carregando ....</p>
        </div>
      </main>
    }
  `,
  styles: `
    .loading-screen {
      min-height: 60vh;
      display: grid;
      place-items: center;
      text-align: center;
      color: var(--bs-body-color);
    }
    p { font-size: 1.25rem; }
    .loading-spinner {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      border: 0.25rem solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: loading-spin 0.8s linear infinite;
    }
    @keyframes loading-spin {
      to { transform: rotate(360deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .loading-spinner { animation-duration: 2s; }
    }
  `,
})
export class HomePage {
  readonly ready = signal(false);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly apiConfig = inject(API_CONFIG);

  constructor() {
    // Keep the prerendered page lightweight; check the live API in the browser.
    afterNextRender(() => {
      const baseUrl = this.apiConfig.brapciApiBaseUrl.replace(/\/$/, '');
      this.http.get(`${baseUrl}/brapci/statistics`, {
        context: new HttpContext().set(SKIP_HOME_CONNECTION_REDIRECT, true),
        transferCache: false,
      }).pipe(
        timeout(8000),
        retry({ count: 1, delay: 1000 }),
        takeUntilDestroyed(this.destroyRef),
      ).subscribe({
        next: () => this.ready.set(true),
        error: () => {
          void this.router.navigateByUrl('/501', { replaceUrl: true });
        },
      });
    });
  }
}
