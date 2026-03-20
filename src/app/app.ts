import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { BrapciApiService } from './core/services/brapci-api.service';
import { LanguageService } from './core/services/language.service';
import { SeoService } from './core/services/seo.service';
import { AuthPanelComponent } from './components/auth-panel/auth-panel.component';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, TranslateModule, AuthPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly authService = inject(AuthService);
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly sessionService = inject(SessionService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly themeCookieKey = 'brapci_theme';

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly firstName = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return '';
    }

    const candidate = user.name.trim() || user.username.trim();
    return candidate.split(/\s+/)[0] ?? '';
  });
  readonly selectedLanguage = signal<'pt-br' | 'es' | 'en'>('pt-br');
  readonly languageOptions = [
    { code: 'pt-br' as const, label: 'PT-BR', flag: '🇧🇷' },
    { code: 'es' as const, label: 'ES', flag: '🇪🇸' },
    { code: 'en' as const, label: 'EN', flag: '🇺🇸' }
  ];

  readonly loading = signal(false);
  readonly isDarkMode = signal(false);
  readonly docsMenuOpen = signal(false);
  readonly apiResults = signal<unknown[]>([]);
  readonly query = signal('ciencia da informacao');
  readonly hasResults = computed(() => this.apiResults().length > 0);
  readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );
  readonly isDocRoute = computed(() => {
    const url = this.currentUrl();
    return (
      url.startsWith('/doc') ||
      url.startsWith('/sobre/') ||
      url.startsWith('/about/') ||
      url.startsWith('/autoridade') ||
      url.startsWith('/v/') ||
      url.startsWith('/revistas')
    );
  });

  constructor() {
    this.languageService.init();
    const currentLanguage = this.languageService.getCurrentLanguage() as 'pt-br' | 'es' | 'en';
    this.selectedLanguage.set(currentLanguage);

    this.seoService.updateHomeMetadata(currentLanguage);
    this.authService.loadUserFromSession();
    this.initializeTheme();
    this.authService.checkSession().subscribe();
  }

  setLanguage(language: 'pt-br' | 'es' | 'en'): void {
    this.selectedLanguage.set(language);
    this.languageService.setLanguage(language);
    this.seoService.updateHomeMetadata(language);
  }

  setDarkMode(enabled: boolean): void {
    this.isDarkMode.set(enabled);
    this.applyThemeClass();

    if (isPlatformBrowser(this.platformId)) {
      const mode = enabled ? 'dark' : 'light';
      localStorage.setItem(this.themeCookieKey, mode);
      this.sessionService.setCookie(this.themeCookieKey, mode);
    }

    this.authService.updateThemePreference(enabled ? 'dark' : 'light');
  }

  toggleDocsMenu(): void {
    this.docsMenuOpen.update((open) => !open);
  }

  closeDocsMenu(): void {
    this.docsMenuOpen.set(false);
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

  private initializeTheme(): void {
    const userTheme = this.authService.getThemePreference();

    if (!isPlatformBrowser(this.platformId)) {
      this.isDarkMode.set(userTheme === 'dark');
      this.applyThemeClass();
      return;
    }

    const cookieTheme = this.sessionService.getCookie(this.themeCookieKey);
    const storedTheme = localStorage.getItem(this.themeCookieKey);
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const persisted = userTheme ?? cookieTheme ?? storedTheme;
    const shouldUseDark = persisted ? persisted === 'dark' : preferredDark;

    this.isDarkMode.set(shouldUseDark);
    this.applyThemeClass();

    const mode = shouldUseDark ? 'dark' : 'light';
    localStorage.setItem(this.themeCookieKey, mode);
    this.sessionService.setCookie(this.themeCookieKey, mode);
    this.authService.updateThemePreference(mode);
  }

  private applyThemeClass(): void {
    const body = this.document.body;
    body.classList.add('theme-master');
    body.classList.toggle('theme-dark', this.isDarkMode());
  }
}
