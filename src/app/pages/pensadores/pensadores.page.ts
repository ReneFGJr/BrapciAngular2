import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type Pensador = {
  id: number | string;
  nome: string;
  nome_citacao?: string | null;
  link_wikipedia?: string | null;
  link_wikidata?: string | null;
  foto?: string | null;
};

@Component({
  selector: 'app-pensadores-page',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './pensadores.page.html',
  styleUrl: './pensadores.page.scss',
})
export class PensadoresPage {
  private readonly api = inject(BrapciApiService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly pensadores = signal<Pensador[]>([]);
  readonly searchTerm = signal('');
  readonly hasResults = computed(() => this.pensadores().length > 0);
  readonly filteredPensadores = computed(() => {
    const term = this.normalize(this.searchTerm());

    if (!term) {
      return this.pensadores();
    }

    return this.pensadores().filter((pensador) =>
      this.normalize(`${pensador.nome} ${pensador.nome_citacao ?? ''}`).includes(term),
    );
  });

  constructor() {
    this.loadPensadores();
  }

  loadPensadores(): void {
    this.loading.set(true);
    this.error.set('');

    this.api.get<Pensador[]>('pensadores').subscribe({
      next: (response) => {
        this.pensadores.set(Array.isArray(response) ? response : []);
        this.loading.set(false);
      },
      error: () => {
        this.pensadores.set([]);
        this.error.set('Não foi possível carregar os pensadores. Tente novamente mais tarde.');
        this.loading.set(false);
      },
    });
  }

  hideBrokenImage(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }

  updateSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }

  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLocaleLowerCase('pt-BR');
  }
}
