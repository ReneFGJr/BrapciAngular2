import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-sobre-brapci-page',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './sobre-brapci.page.html',
  styleUrl: './sobre-brapci.page.scss'
})
export class SobreBrapciPage {
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly pageLabels: Record<string, string> = {
    brapci: 'Sobre a Brapci',
    benancib: 'Sobre o Benancib',
    brapcilivros: 'Brapci Livros',
    how_index: 'Como ser indexado na Brapci',
    team: 'Equipe'
  };

  readonly loading = signal(true);
  readonly error = signal('');
  readonly response = signal<unknown>(null);
  readonly pageKey = signal('brapci');

  readonly title = computed(() => {
    const html = this.htmlContent();
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (h1Match?.[1]) {
      return h1Match[1].replace(/<[^>]+>/g, '').trim() || this.fallbackTitle();
    }

    const value = this.response();
    if (!value || typeof value !== 'object') {
      return this.fallbackTitle();
    }

    const data = value as Record<string, unknown>;
    const candidate = data['title'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : this.fallbackTitle();
  });

  readonly sections = computed(() => {
    const response = this.response();
    if (!response || Array.isArray(response) || typeof response !== 'object') return [];
    const data = response as Record<string, unknown>;
    if (!Array.isArray(data['content'])) return [];
    const groups = new Map<string, string[]>();
    for (const item of data['content']) {
      if (!item || typeof item !== 'object' || this.isNavigationRow(item)) continue;
      const key = typeof item.section === 'string' ? item.section.trim() : '';
      if (key === 'menu') continue;
      const id = key || `section-${groups.size + 1}`;
      const html = this.rowHtml(item);
      if (!html) continue;
      // The Angular template owns the anchor, outside sanitized API HTML.
      const content = html.replace(/\s+id\s*=\s*(["'])(.*?)\1/gi,
        (attribute, _quote, value) => value === id ? '' : attribute);
      groups.set(id, [...(groups.get(id) ?? []), content]);
    }
    const labels: Record<string, string> = {
      apresentacao: 'Apresenta\u00e7\u00e3o', missao: 'Miss\u00e3o', historico: 'Hist\u00f3rico',
      coordenacao: 'Coordena\u00e7\u00e3o', citacao: 'Como citar', acesso: 'Acesso'
    };
    const menu = Array.isArray(data['menu']) ? data['menu'] : [...groups.keys()];
    const keys = [...new Set([...menu.filter((key): key is string => typeof key === 'string' && groups.has(key)), ...groups.keys()])];
    return keys.map((id) => ({
      id,
      label: labels[id] ?? id.replace(/[_-]/g, ' '),
      html: groups.get(id)!.join('\n'),
      inMenu: menu.includes(id)
    }));
  });

  readonly navigationHtml = computed(() => {
    const sections = this.sections().filter((section) => section.inMenu);
    if (sections.length) {
      return '<strong>Nesta p\u00e1gina</strong><ul>' + sections.map((section) =>
        `<li><a href="/about/${encodeURIComponent(this.pageKey())}#${encodeURIComponent(section.id)}">${this.escapeHtml(section.label)}</a></li>`
      ).join('') + '</ul>';
    }
    const value = this.response();
    if (!Array.isArray(value)) return '';
    return value.filter((item) => this.isNavigationRow(item))
      .map((item) => this.rowHtml(item)).join('\n');
  });

  private isNavigationRow(item: unknown): boolean {
    if (!item || typeof item !== 'object') return false;
    const order = (item as Record<string, unknown>)['ordem'];
    return order === 0 || order === '0';
  }

  private rowHtml(item: unknown): string {
    if (!item || typeof item !== 'object') return '';
    const row = (item as Record<string, unknown>)['row'];
    if (typeof row !== 'string' || !row.trim()) return '';
    return /<[^>]+>/.test(row) ? row : `<p>${this.escapeHtml(row)}</p>`;
  }

  navigateToSection(event: MouseEvent): void {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest('a');
    const href = link?.getAttribute('href');
    if (!href) return;
    const currentPath = link!.ownerDocument.location.pathname;
    const url = new URL(href, link!.ownerDocument.baseURI);
    const isLocalAnchor = href.startsWith('#') || href.startsWith('/#') ||
      (url.origin === link!.ownerDocument.location.origin && url.pathname === currentPath && !!url.hash);
    if (!isLocalAnchor) return;
    // Never allow a local fragment to navigate to the base URL, even if absent.
    event.preventDefault();
    let id: string;
    try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
    const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const anchors = target.closest('.sobre-wrap')?.querySelectorAll<HTMLElement>('[id]');
    const section = Array.from(anchors ?? []).find((anchor) => anchor.id === id) ??
      Array.from(anchors ?? []).find((anchor) => normalize(anchor.id) === normalize(id));
    if (section) {
      section.scrollIntoView({ behavior: 'auto', block: 'start' });
      const location = link!.ownerDocument.location;
      link!.ownerDocument.defaultView?.history.replaceState(
        link!.ownerDocument.defaultView.history.state, '',
        `${location.pathname}${location.search}#${encodeURIComponent(section.id)}`
      );
    }
  }

  readonly htmlContent = computed(() => {
    const sections = this.sections();
    if (sections.length) return sections.map((section) =>
      `<div id="${this.escapeHtml(section.id)}" class="sobre-section">${section.html}</div>`
    ).join('\n');
    const value = this.response();
    if (!value) {
      return '';
    }

    if (Array.isArray(value)) {
      const rows = value
        .filter((item) => !this.isNavigationRow(item))
        .map((item) => {
          if (!item || typeof item !== 'object') {
            return '';
          }

          const row = (item as Record<string, unknown>)['row'];
          if (typeof row !== 'string' || !row.trim()) {
            return '';
          }

          // API can return either HTML snippets or plain text in row.
          return /<[^>]+>/.test(row) ? row : `<p>${this.escapeHtml(row)}</p>`;
        })
        .filter(Boolean)
        .join('\n');

      return rows;
    }

    if (typeof value !== 'object') {
      return '';
    }

    const data = value as Record<string, unknown>;
    const directHtml = data['html'];
    if (typeof directHtml === 'string' && directHtml.trim()) {
      return directHtml;
    }

    const content = data['content'];
    if (typeof content === 'string' && content.trim()) {
      return content;
    }

    const description = data['description'];
    if (typeof description === 'string' && description.trim()) {
      return `<p>${description}</p>`;
    }

    return '';
  });

  readonly jsonFallback = computed(() => JSON.stringify(this.response(), null, 2));
  readonly jsonFallbackHtml = computed(() => this.renderJsonNode(this.response()));

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('page')?.trim().toLowerCase() || 'brapci'),
        distinctUntilChanged(),
        tap((page) => {
          this.pageKey.set(page);
          this.loading.set(true);
          this.error.set('');
          this.response.set(null);
        }),
        switchMap((page) =>
          this.brapciApiService.get<unknown>(`page/${page}`).pipe(
            map((data) => ({ ok: true as const, data })),
            catchError(() => of({ ok: false as const, data: null }))
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((result) => {
        if (!result.ok) {
          this.error.set(`Nao foi possivel carregar o conteudo de ${this.fallbackTitle()}.`);
          this.loading.set(false);
          return;
        }

        this.response.set(result.data);
        this.loading.set(false);
      });
  }

  private fallbackTitle(): string {
    return this.pageLabels[this.pageKey()] ?? 'Sobre';
  }

  private renderJsonNode(value: unknown): string {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return '<span class="json-empty">[]</span>';
      }

      const items = value
        .map((item) => `<li><span class="json-key">item</span>${this.renderJsonValue(item)}</li>`)
        .join('');

      return `<ul class="json-list">${items}</ul>`;
    }

    if (value && typeof value === 'object') {
      const entries = Object.entries(value as Record<string, unknown>);
      if (entries.length === 0) {
        return '<span class="json-empty">{}</span>';
      }

      const items = entries
        .map(([key, entryValue]) => `<li><span class="json-key">${this.escapeHtml(key)}</span>${this.renderJsonValue(entryValue)}</li>`)
        .join('');

      return `<ul class="json-list">${items}</ul>`;
    }

    return this.renderJsonValue(value);
  }

  private renderJsonValue(value: unknown): string {
    if (Array.isArray(value) || (value && typeof value === 'object')) {
      return this.renderJsonNode(value);
    }

    if (value === null) {
      return '<span class="json-null">null</span>';
    }

    if (typeof value === 'string') {
      return `<span class="json-string">${this.escapeHtml(value)}</span>`;
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return `<span class="json-primitive">${String(value)}</span>`;
    }

    return `<span class="json-primitive">${this.escapeHtml(String(value ?? ''))}</span>`;
  }

  private escapeHtml(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}
