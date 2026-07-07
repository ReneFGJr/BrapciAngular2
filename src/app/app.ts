import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { BasketService } from './core/services/basket.service';
import { PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { AccessibilityPanelComponent } from './components/accessibility-panel/accessibility-panel.component';
import { LanguageService } from './core/services/language.service';
import { SeoService } from './core/services/seo.service';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    AccessibilityPanelComponent,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly basket = inject(BasketService);
  private readonly markedCountSignal = signal(0);
  readonly markedCount = computed(() => this.markedCountSignal());
  private readonly authService = inject(AuthService);
  readonly accessibilityPanelOpen = signal(false);
  readonly accessibilityFontScale = signal(1);
  readonly accessibilityLetterSpacing = signal(false);
  readonly accessibilityCursorLarge = signal(false);
  readonly accessibilityHighlights = signal(false);
  private readonly accessibilityStorageKey = 'brapci_accessibility';

  constructor() {
    this.languageService.init();
    const currentLanguage = this.languageService.getCurrentLanguage() as 'pt-br' | 'es' | 'en';
    this.selectedLanguage.set(currentLanguage);

    this.seoService.updateHomeMetadata(currentLanguage);
    this.authService.loadUserFromSession();
    this.initializeTheme();
    this.initializeAccessibilityPreferences();
    this.authService.checkSession().subscribe();
    this.markedCountSignal.set(this.basket.count());
    this.basket.changed.subscribe(() => {
      this.markedCountSignal.set(this.basket.count());
    });
  }
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
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
  readonly sessionUserLabel = computed(() => {
    console.log("==>", this.currentUser());
    const user = this.currentUser();
    if (!user) {
      return '';
    }

    const name = user.name.trim();
    const username = user.username.trim();

    if (name && username && name !== username) {
      return `${name} (${username})`;
    }

    return name || username;
  });
  readonly selectedLanguage = signal<'pt-br' | 'es' | 'en'>('pt-br');
  readonly languageOptions = [
    { code: 'pt-br' as const, label: 'PT-BR', flagSrc: 'assets/img/flags/br.svg' },
    { code: 'es' as const, label: 'ES', flagSrc: 'assets/img/flags/es.svg' },
    { code: 'en' as const, label: 'EN', flagSrc: 'assets/img/flags/gb.svg' }
  ];
  readonly selectedLanguageOption = computed(
    () => this.languageOptions.find((option) => option.code === this.selectedLanguage()) ?? this.languageOptions[0]
  );

  readonly isDarkMode = signal(false);
  readonly docsMenuOpen = signal(false);
  readonly toolsMenuOpen = signal(false);
  readonly revistasMenuOpen = signal(false);
  readonly languageMenuOpen = signal(false);
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
      url.startsWith('/eventos') ||
      url.startsWith('/v/') ||
      url.startsWith('/revistas') ||
      url.startsWith('/signin') ||
      url.startsWith('/perfil') ||
      url.startsWith('/search-boolean') ||
      url.startsWith('/tools_') ||
      url.startsWith('/basket/')
    );
  });


  setLanguage(language: 'pt-br' | 'es' | 'en'): void {
    this.selectedLanguage.set(language);
    this.languageService.setLanguage(language);
    this.seoService.updateHomeMetadata(language);
    this.languageMenuOpen.set(false);
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen.update((open) => !open);
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

  toggleAccessibilityPanel(): void {
    this.accessibilityPanelOpen.update((open) => !open);
  }

  closeAccessibilityPanel(): void {
    this.accessibilityPanelOpen.set(false);
  }

  setAccessibilityFontScale(scale: number): void {
    this.accessibilityFontScale.set(scale);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }

  setAccessibilityLetterSpacing(enabled: boolean): void {
    this.accessibilityLetterSpacing.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }

  setAccessibilityCursorLarge(enabled: boolean): void {
    this.accessibilityCursorLarge.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }

  setAccessibilityHighlights(enabled: boolean): void {
    this.accessibilityHighlights.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }

  toggleDocsMenu(): void {
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
    this.docsMenuOpen.update((open) => !open);
  }

  closeDocsMenu(): void {
    this.docsMenuOpen.set(false);
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
  }

  toggleToolsMenu(): void {
    this.docsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
    this.toolsMenuOpen.update((open) => !open);
  }

  closeToolsMenu(): void {
    this.toolsMenuOpen.set(false);
  }

  toggleRevistasMenu(): void {
    this.docsMenuOpen.set(false);
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.update((open) => !open);
  }

  closeRevistasMenu(): void {
    this.revistasMenuOpen.set(false);
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

  private initializeAccessibilityPreferences(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.applyAccessibilityPreferences();
      return;
    }

    const raw = localStorage.getItem(this.accessibilityStorageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as {
          fontScale?: number;
          letterSpacing?: boolean;
          cursorLarge?: boolean;
          highlights?: boolean;
        };

        if (typeof parsed.fontScale === 'number') {
          this.accessibilityFontScale.set(parsed.fontScale);
        }
        this.accessibilityLetterSpacing.set(!!parsed.letterSpacing);
        this.accessibilityCursorLarge.set(!!parsed.cursorLarge);
        this.accessibilityHighlights.set(!!parsed.highlights);
      } catch {
        localStorage.removeItem(this.accessibilityStorageKey);
      }
    }

    this.applyAccessibilityPreferences();
  }

  private persistAccessibilityPreferences(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(
      this.accessibilityStorageKey,
      JSON.stringify({
        fontScale: this.accessibilityFontScale(),
        letterSpacing: this.accessibilityLetterSpacing(),
        cursorLarge: this.accessibilityCursorLarge(),
        highlights: this.accessibilityHighlights()
      })
    );
  }

  private applyAccessibilityPreferences(): void {
    const body = this.document.body;
    const root = this.document.documentElement;
    body.classList.add('theme-master');
    body.classList.toggle('theme-dark', this.isDarkMode());
    body.classList.toggle('a11y-letter-spacing', this.accessibilityLetterSpacing());
    body.classList.toggle('a11y-cursor-large', this.accessibilityCursorLarge());
    body.classList.toggle('a11y-highlights', this.accessibilityHighlights());
    body.classList.toggle('a11y-text-scale', this.accessibilityFontScale() !== 1);
    root.style.setProperty('--a11y-font-scale', String(this.accessibilityFontScale()));
  }

  private applyThemeClass(): void {
    const body = this.document.body;
    const root = this.document.documentElement;
    body.classList.add('theme-master');
    body.classList.toggle('theme-dark', this.isDarkMode());
    root.style.setProperty('--a11y-font-scale', String(this.accessibilityFontScale()));
  }
}
