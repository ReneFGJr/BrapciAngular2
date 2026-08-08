import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type ApiVariable = {
  nome: string;
  tipo: string;
  descricao: string;
  local?: string;
  obrigatoria?: boolean;
  exemplo?: string;
};

type ApiEndpoint = {
  nome?: string;
  metodo_servico?: string;
  endpoint_api: {
    metodo: string;
    url: string;
    endpoint_relativo: string;
    content_type_requisicao?: string | null;
    content_type_resposta: string;
  };
  precisa_apikey: boolean;
  autenticacao?: string;
  apikey?: { obrigatoria: boolean; descricao: string };
  variaveis_api: ApiVariable[];
  exemplo_requisicao?: string;
  resultado_api: { descricao: string; exemplo: unknown };
  variaveis_retorno_api: ApiVariable[];
};

type ApiDocumentationFile = {
  nome_grupo_api: string;
  descricao: string;
  endpoints?: ApiEndpoint[];
  endpoint_api?: ApiEndpoint['endpoint_api'];
  precisa_apikey?: boolean;
  apikey?: ApiEndpoint['apikey'];
  variaveis_api?: ApiVariable[];
  exemplo_requisicao?: string;
  resultado_api?: ApiEndpoint['resultado_api'];
  variaveis_retorno_api?: ApiVariable[];
};

type ApiGroup = {
  nome: string;
  descricao: string;
  arquivo: string;
  endpoints: ApiEndpoint[];
};

@Component({
  selector: 'app-doc-page',
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './doc.page.html',
  styleUrl: './doc.page.scss',
})
export class DocPage {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly groups = signal<ApiGroup[]>([]);
  readonly selectedGroup = signal('');
  readonly searchQuery = signal('');
  readonly loading = signal(true);
  readonly error = signal('');

  readonly visibleGroups = computed(() => {
    const selected = this.selectedGroup();
    const query = this.normalize(this.searchQuery());

    return this.groups()
      .filter((group) => !selected || group.nome === selected)
      .map((group) => ({
        ...group,
        endpoints: group.endpoints.filter((endpoint) => this.matchesSearch(group, endpoint, query)),
      }))
      .filter((group) => group.endpoints.length > 0);
  });

  readonly visibleEndpointCount = computed(() =>
    this.visibleGroups().reduce((total, group) => total + group.endpoints.length, 0),
  );

  constructor() {
    this.loadDocumentation();
  }

  loadDocumentation(): void {
    this.loading.set(true);
    this.error.set('');

    this.http
      .get<{ files: string[] }>('/docs/index.json')
      .pipe(
        map((index) => index.files.filter((file) => file.endsWith('.json'))),
        switchMap((files) => {
          const requests = files.map((file) =>
            this.http.get<ApiDocumentationFile>(`/docs/${encodeURIComponent(file)}`).pipe(
              map((documentation) => this.toGroup(documentation, file)),
              catchError(() => of<ApiGroup | null>(null)),
            ),
          );
          return requests.length ? forkJoin(requests) : of<Array<ApiGroup | null>>([]);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (groups) => this.finishLoading(groups),
        error: () => this.failLoading(),
      });
  }

  setSelectedGroup(value: string): void {
    this.selectedGroup.set(value);
  }

  setSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }

  clearFilters(): void {
    this.selectedGroup.set('');
    this.searchQuery.set('');
  }

  private finishLoading(groups: Array<ApiGroup | null>): void {
    const validGroups = groups.filter((group): group is ApiGroup => group !== null);
    this.groups.set(validGroups);
    this.loading.set(false);
    if (!validGroups.length) this.failLoading();
  }

  private failLoading(): void {
    this.groups.set([]);
    this.error.set('Não foi possível carregar a documentação da API.');
    this.loading.set(false);
  }

  private toGroup(documentation: ApiDocumentationFile, file: string): ApiGroup {
    const endpoints = documentation.endpoints?.length
      ? documentation.endpoints
      : documentation.endpoint_api && documentation.resultado_api
        ? [{
            endpoint_api: documentation.endpoint_api,
            precisa_apikey: documentation.precisa_apikey ?? false,
            apikey: documentation.apikey,
            variaveis_api: documentation.variaveis_api ?? [],
            exemplo_requisicao: documentation.exemplo_requisicao,
            resultado_api: documentation.resultado_api,
            variaveis_retorno_api: documentation.variaveis_retorno_api ?? [],
          }]
        : [];

    return {
      nome: documentation.nome_grupo_api,
      descricao: documentation.descricao,
      arquivo: file,
      endpoints,
    };
  }

  private matchesSearch(group: ApiGroup, endpoint: ApiEndpoint, query: string): boolean {
    if (!query) return true;
    const searchable = [
      group.nome,
      group.descricao,
      endpoint.nome,
      endpoint.metodo_servico,
      endpoint.endpoint_api.metodo,
      endpoint.endpoint_api.url,
      endpoint.endpoint_api.endpoint_relativo,
      endpoint.resultado_api.descricao,
      ...endpoint.variaveis_api.flatMap((variable) => [variable.nome, variable.descricao]),
      ...endpoint.variaveis_retorno_api.flatMap((variable) => [variable.nome, variable.descricao]),
    ].join(' ');
    return this.normalize(searchable).includes(query);
  }

  private normalize(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }
}
