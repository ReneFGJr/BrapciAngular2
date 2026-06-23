import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'autoridade',
    loadComponent: () => import('./pages/autoridade/autoridade.page').then((m) => m.AutoridadePage),
  },
  {
    path: 'v/:id',
    loadComponent: () => import('./pages/v-id/v-id.page').then((m) => m.VIdPage),
  },
  {
    path: 'sobre/brapci',
    redirectTo: 'about/brapci',
    pathMatch: 'full',
  },
  {
    path: 'basket/selected',
    loadComponent: () =>
      import('./pages/basket-selected/basket-selected.page').then((m) => m.BasketSelectedPage),
  },
  {
    path: 'painel',
    loadComponent: () => import('./pages/painel/painel.page').then((m) => m.PainelPage),
  },
  {
    path: 'about/:page',
    loadComponent: () =>
      import('./pages/sobre-brapci/sobre-brapci.page').then((m) => m.SobreBrapciPage),
  },
  {
    path: 'doc',
    loadComponent: () => import('./pages/doc/doc.page').then((m) => m.DocPage),
  },
  {
    path: 'revistas',
    loadComponent: () => import('./pages/revistas/revistas.page').then((m) => m.RevistasPage),
  },
  {
    path: 'revistas/timeline',
    loadComponent: () => import('./pages/revista-timeline/revista-timeline.page').then((m) => m.RevistaTimelinePage),
  },
  {
    path: 'eventos',
    loadComponent: () => import('./pages/eventos/eventos.page').then((m) => m.EventosPage),
  },
  {
    path: 'livros',
    loadComponent: () => import('./pages/livros/livros.page').then((m) => m.LivrosPage),
  },
  {
    path: 'livros/submit',
    loadComponent: () => import('./pages/livros-submit/livros-submit.page').then((m) => m.LivrosSubmitPage),
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.page').then((m) => m.SigninPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: 'tools_bibliografics',
    loadComponent: () =>
      import('./pages/tools-bibliografics/tools-bibliografics.page').then(
        (m) => m.ToolsBibliograficsPage,
      ),
  },
  {
    path: 'tools_bibliometric',
    loadComponent: () =>
      import('./pages/tools-bibliometric/tools-bibliometric.page').then(
        (m) => m.ToolsBibliometricPage,
      ),
  },
  {
    path: 'tools_text',
    loadComponent: () => import('./pages/tools-text/tools-text.page').then((m) => m.ToolsTextPage),
  },
  {
    path: 'cited',
    loadComponent: () => import('./pages/cited/cited.page').then((m) => m.CitedPage),
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
