import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, distinctUntilChanged, forkJoin, map, of, switchMap } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { AuthorClustersOverviewComponent } from '../../components/author-clusters-overview/author-clusters-overview.component';
import { parsePajekNetwork } from '../../core/models/pajek-network';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type PensadorDetalhe = {
  id: number | string;
  nome: string;
  brapci_id?: number | string | null;
  nome_citacao?: string | null;
  link_wikipedia?: string | null;
  link_wikidata?: string | null;
  foto?: string | null;
  fotos?: string[];
  dados?: Record<string, string | unknown[]>;
  obras?: ObraRelacionada[];
  coautores?: Coautor[];
  acoplamento?: string | Acoplamento[];
  status?: number;
};

type Coautor = { id: number | string; nome: string };
type Acoplamento = Coautor & { total: number | string; foto?: string | null };

type DadosAcoplamento = {
  coautores?: Coautor[];
  acoplamento?: PensadorDetalhe['acoplamento'];
};

type RespostaPensador = PensadorDetalhe | (DadosAcoplamento & { pensador: PensadorDetalhe });

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
  imports: [CommonModule, RouterLink, BreadcrumbsComponent, TranslateModule, AuthorClustersOverviewComponent],
  templateUrl: './pensador-id.page.html',
  styleUrl: './pensador-id.page.scss',
})
export class PensadorIdPage {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(BrapciApiService);
  private readonly title = inject(Title);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly betaNoticeOpen = signal(false);
  readonly abaAtiva = signal<'producao' | 'acoplamento'>('producao');
  readonly pensador = signal<PensadorDetalhe | null>(null);
  readonly erroAcoplamento = signal(false);
  readonly coautores = computed(() => this.pensador()?.coautores ?? []);
  readonly limiteInicialAcoplamentos = 10;
  readonly mostrarTodosAcoplamentos = signal(false);
  readonly grafoAcoplamento = computed(() => {
    const dados = this.pensador()?.acoplamento;
    return typeof dados === 'string' ? parsePajekNetwork(dados) : null;
  });
  readonly redeAcoplamento = computed(() => {
    const pensador = this.pensador();
    const registros = pensador?.acoplamento;
    if (!Array.isArray(registros)) return [];
    const autores = registros
      .map((autor) => ({ ...autor, id: String(autor.id), total: Number(autor.total) }))
      .filter((autor) => autor.id !== String(pensador?.id) && Number.isFinite(autor.total) && autor.total > 0)
      .sort((a, b) => b.total - a.total);
    const maiorTotal = autores[0]?.total ?? 1;

    return autores.map((autor) => ({
      ...autor,
      percentual: 100 * autor.total / maiorTotal,
    }));
  });
  readonly acoplamentosVisiveis = computed(() =>
    this.mostrarTodosAcoplamentos()
      ? this.redeAcoplamento()
      : this.redeAcoplamento().slice(0, this.limiteInicialAcoplamentos),
  );
  readonly brapciId = computed(() => {
    const id = String(this.pensador()?.brapci_id ?? '').trim();
    return /^\d+$/.test(id) && Number(id) > 0 ? id : null;
  });
  readonly obrasOrdenadas = computed(() =>
    [...(this.pensador()?.obras ?? [])].sort(
      (a, b) => this.citationCount(b) - this.citationCount(a),
    ),
  );

  citationCount(obra: ObraRelacionada): number {
    const count = Number(obra.cited_by ?? 0);
    return Number.isFinite(count) ? Math.max(0, count) : 0;
  }

  navegarAbas(event: KeyboardEvent, producao: HTMLButtonElement, acoplamento: HTMLButtonElement): void {
    let proximaAba: HTMLButtonElement;
    switch (event.key) {
      case 'Home':
        proximaAba = producao;
        break;
      case 'End':
        proximaAba = acoplamento;
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        proximaAba = this.abaAtiva() === 'producao' ? acoplamento : producao;
        break;
      default:
        return;
    }
    event.preventDefault();
    proximaAba.click();
    proximaAba.focus();
  }

  constructor() {
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      distinctUntilChanged(),
      switchMap((id) => {
        this.loading.set(true);
        this.error.set('');
        this.erroAcoplamento.set(false);
        this.pensador.set(null);
        this.abaAtiva.set('producao');
        this.betaNoticeOpen.set(false);
        this.mostrarTodosAcoplamentos.set(false);

        if (!id || !/^\d+$/.test(id)) {
          return of({ perfil: null, rede: null });
        }

        return forkJoin({
          perfil: this.api.get<RespostaPensador | null>(`pensadores/${id}`).pipe(
            catchError(() => {
              this.error.set('Não foi possível carregar o pensador.');
              return of(null);
            }),
          ),
          rede: this.api.get<DadosAcoplamento>(`cited/coupling/${id}`).pipe(
            catchError(() => {
              this.erroAcoplamento.set(true);
              return of(null);
            }),
          ),
        });
      }),
      takeUntilDestroyed(),
    ).subscribe(({ perfil: response, rede }) => {
      const pensador = response && 'pensador' in response
        ? {
            ...response.pensador,
            coautores: response.coautores ?? response.pensador?.coautores,
            acoplamento: response.acoplamento ?? response.pensador?.acoplamento,
          }
        : response;

      if (pensador?.id && pensador.status !== 404) {
        this.pensador.set({
          ...pensador,
          coautores: rede?.coautores ?? pensador.coautores,
          acoplamento: rede?.acoplamento ?? pensador.acoplamento,
        });
        const nome = pensador.nome?.trim();
        if (nome) {
          this.title.setTitle(`${nome} | Brapci | Pensador`);
        }
      } else if (!this.error()) {
        this.error.set('Pensador não encontrado.');
      }
      this.loading.set(false);
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
