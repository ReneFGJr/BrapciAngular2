import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer: Renderer2;

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateHomeMetadata(language: string): void {
    const labels: Record<string, { title: string; description: string }> = {
      'pt-br': {
        title: 'Brapci - Portal de Informacao Cientifica',
        description: 'Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO.'
      },
      en: {
        title: 'Brapci - Scientific Information Portal',
        description: 'Brapci portal with authentication, API search and semantic SEO resources.'
      },
      es: {
        title: 'Brapci - Portal de Informacion Cientifica',
        description: 'Portal Brapci con autenticacion, busqueda en API y recursos semanticos para SEO.'
      }
    };

    const content = labels[language] ?? labels['pt-br'];

    this.title.setTitle(content.title);
    this.meta.updateTag({ name: 'description', content: content.description });
    this.meta.updateTag({ name: 'keywords', content: 'Brapci, Ciencia da Informacao, SEO, Angular 20, API' });
    this.meta.updateTag({ property: 'og:title', content: content.title });
    this.meta.updateTag({ property: 'og:description', content: content.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.applyJsonLd(language);
  }

  private applyJsonLd(language: string): void {
    const previous = this.document.getElementById('brapci-jsonld');

    if (previous) {
      previous.remove();
    }

    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Brapci',
      inLanguage: language,
      url: 'https://cip.brapci.inf.br',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://cip.brapci.inf.br/api?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'id', 'brapci-jsonld');
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.document.head, script);
  }
}
