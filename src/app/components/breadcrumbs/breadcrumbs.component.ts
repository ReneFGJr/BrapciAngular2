import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

type BreadcrumbItem = {
  label: string;
  url: string;
  active: boolean;
};

const DEFAULT_LABELS: Record<string, string> = {
  autoridade: 'Autoridades',
  revistas: 'Revistas',
  revista: 'Revista',
  v: 'Autor',
  about: 'Sobre',
  brapci: 'Sobre a Brapci',
  benancib: 'Sobre o Benancib',
  brapcilivros: 'Brapci Livros',
  how_index: 'Como ser indexado na Brapci',
  team: 'Equipe',
  doc: 'Documentacao API'
};

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  private readonly router = inject(Router);

  readonly homeLabel = input('Inicio');
  readonly labels = input<Record<string, string>>({});

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  readonly items = computed((): BreadcrumbItem[] => {
    const fullUrl = this.currentUrl() || '/';
    const pathOnly = fullUrl.split('?')[0]?.split('#')[0] ?? '/';
    const segments = pathOnly.split('/').filter(Boolean);

    const items: BreadcrumbItem[] = [
      {
        label: this.homeLabel(),
        url: '/',
        active: segments.length === 0
      }
    ];

    const mergedLabels = {
      ...DEFAULT_LABELS,
      ...this.labels()
    };

    let url = '';
    segments.forEach((segment, index) => {
      url += `/${segment}`;
      const decoded = decodeURIComponent(segment);
      const key = decoded.toLowerCase();
      const isLast = index === segments.length - 1;

      items.push({
        label: mergedLabels[key] ?? this.formatLabel(decoded),
        url,
        active: isLast
      });
    });

    return items;
  });

  private formatLabel(value: string): string {
    if (/^\d+$/.test(value)) {
      return `#${value}`;
    }

    return value
      .replaceAll('-', ' ')
      .replaceAll('_', ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
}
