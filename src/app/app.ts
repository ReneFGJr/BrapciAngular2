import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from './core/services/auth.service';
import { BrapciApiService } from './core/services/brapci-api.service';
import { LanguageService } from './core/services/language.service';
import { SeoService } from './core/services/seo.service';
import { LoginPayload } from './core/models/user.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly authService = inject(AuthService);
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
  private readonly brapciApiService = inject(BrapciApiService);

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly selectedLanguage = signal<'pt-br' | 'es' | 'en'>('pt-br');
  readonly languageOptions = [
    { code: 'pt-br' as const, label: 'PT-BR' },
    { code: 'es' as const, label: 'ES' },
    { code: 'en' as const, label: 'EN' }
  ];

  readonly loginPayload: LoginPayload = {
    username: '',
    password: ''
  };

  readonly loading = signal(false);
  readonly authError = signal(false);
  readonly apiResults = signal<unknown[]>([]);
  readonly query = signal('ciencia da informacao');
  readonly hasResults = computed(() => this.apiResults().length > 0);

  constructor() {
    this.languageService.init();
    const currentLanguage = this.languageService.getCurrentLanguage() as 'pt-br' | 'es' | 'en';
    this.selectedLanguage.set(currentLanguage);

    this.seoService.updateHomeMetadata(currentLanguage);
    this.authService.loadUserFromSession();
    this.authService.checkSession().subscribe();
  }

  setLanguage(language: 'pt-br' | 'es' | 'en'): void {
    this.selectedLanguage.set(language);
    this.languageService.setLanguage(language);
    this.seoService.updateHomeMetadata(language);
  }

  login(): void {
    this.loading.set(true);
    this.authError.set(false);

    this.authService.login(this.loginPayload).subscribe((user) => {
      this.loading.set(false);
      this.authError.set(!user);
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
  }

  searchInBrapci(): void {
    const term = this.query().trim();

    if (!term) {
      this.apiResults.set([]);
      return;
    }

    this.loading.set(true);

    this.brapciApiService.search<unknown>(term).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.apiResults.set(this.normalizeApiResponse(response));
      },
      error: () => {
        this.loading.set(false);
        this.apiResults.set([]);
      }
    });
  }

  private normalizeApiResponse(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      const data = response as Record<string, unknown>;
      if (Array.isArray(data['results'])) {
        return data['results'];
      }

      if (Array.isArray(data['items'])) {
        return data['items'];
      }

      if (Array.isArray(data['data'])) {
        return data['data'];
      }
    }

    return [];
  }
}
