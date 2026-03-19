import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly sessionService = inject(SessionService);

  private readonly languageCookieKey = 'brapci_locale';
  readonly supportedLanguages = ['pt-br', 'es', 'en'] as const;

  init(): void {
    this.translate.addLangs([...this.supportedLanguages]);
    this.translate.setFallbackLang('pt-br');

    const cookieLanguage = this.sessionService.getCookie(this.languageCookieKey);
    const selected = this.supportedLanguages.includes(cookieLanguage as (typeof this.supportedLanguages)[number])
      ? cookieLanguage!
      : 'pt-br';

    this.translate.use(selected);
  }

  setLanguage(language: (typeof this.supportedLanguages)[number]): void {
    this.translate.use(language);
    this.sessionService.setCookie(this.languageCookieKey, language);
    this.sessionService.setSessionValue(this.languageCookieKey, language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.getFallbackLang() || 'pt-br';
  }
}
