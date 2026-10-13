import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type PensadorDetalhe = {
  id: number | string;
  nome: string;
  nome_citacao?: string | null;
  link_wikipedia?: string | null;
  link_wikidata?: string | null;
  foto?: string | null;
  fotos?: string[];
  dados?: Record<string, string | unknown[]>;
  obras?: ObraRelacionada[];
  status?: number;
};

type ObraRelacionada = {
  id_ca: number | string;
  ca_text?: string | null;
  ca_authors?: string | null;
  ca_year?: number | string | null;
  ca_doi?: string | null;
  cited_by?: number | string | null;
};

@Component({
  selector: 'app-pensador-id-page',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent, TranslateModule],
  templateUrl: './pensador-id.page.html',
  styleUrl: './pensador-id.page.scss',
})
export class PensadorIdPage {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(BrapciApiService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly betaNoticeOpen = signal(false);
  readonly pensador = signal<PensadorDetalhe | null>(null);
  readonly obrasOrdenadas = computed(() =>
    [...(this.pensador()?.obras ?? [])].sort(
      (a, b) => this.citationCount(b) - this.citationCount(a),
    ),
  );

  citationCount(obra: ObraRelacionada): number {
    const count = Number(obra.cited_by ?? 0);
    return Number.isFinite(count) ? Math.max(0, count) : 0;
  }

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || !/^\d+$/.test(id)) {
      this.error.set('Pensador não encontrado.');
      this.loading.set(false);
      return;
    }

    this.api.get<PensadorDetalhe>(`pensadores/${id}`).subscribe({
      next: (response) => {
        if (!response || response.status === 404 || !response.id) {
          this.error.set('Pensador não encontrado.');
        } else {
          this.pensador.set(response);
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Não foi possível carregar o pensador.');
        this.loading.set(false);
      },
    });
  }

  doiUrl(doi: string): string {
    const normalized = doi
      .trim()
      .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
      .replace(/^doi:\s*/i, '');
    return `https://doi.org/${encodeURIComponent(normalized).replace(/%2F/gi, '/')}`;
  }
}
