import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-canceled',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="canceled-record" aria-labelledby="v-title">
      <i class="bi bi-file-earmark-x" aria-hidden="true"></i>
      <h1 id="v-title">Este registro não existe mais</h1>
      <p>O registro foi removido da Brapci e não está mais disponível para consulta.</p>
      <a routerLink="/" class="btn btn-outline-primary">Voltar para a página inicial</a>
    </article>
  `,
  styles: `
    .canceled-record {
      padding: 3rem 1.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
      background: var(--theme-card-bg);
      border: 1px solid var(--theme-line);
      border-radius: 0.9rem;
      color: var(--theme-ink);
    }
    i { font-size: 3rem; color: var(--theme-muted); }
    h1 { margin-top: 1rem; font-size: 1.75rem; }
    p { color: var(--theme-muted); margin-bottom: 1.5rem; }
  `,
})
export class ViewCanceledComponent {}
