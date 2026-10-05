import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

type AnalyticsWindow = Window & {
  __env?: { GoogleAnalytics?: string };
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private initialized = false;

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.initialized) return;
    const browser = this.document.defaultView as AnalyticsWindow | null;
    const id = browser?.__env?.GoogleAnalytics?.trim();
    if (!browser || !id || !/^G-[A-Z0-9]+$/.test(id)) return;
    this.initialized = true;

    const load = () => {
      browser.dataLayer = browser.dataLayer || [];
      browser.gtag = browser.gtag || function (..._args: unknown[]) {
        browser.dataLayer!.push(arguments);
      };
      browser.gtag('js', new Date());
      // GA4 enhanced measurement tracks subsequent browser history changes.
      browser.gtag('config', id);
      if (!this.document.getElementById('google-analytics-script')) {
        const script = this.document.createElement('script');
        script.id = 'google-analytics-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
        this.document.head.appendChild(script);
      }
    };

    if (this.router.navigated) load();
    else this.router.events.pipe(
      filter(event => event instanceof NavigationEnd), take(1)
    ).subscribe(load);
  }
}