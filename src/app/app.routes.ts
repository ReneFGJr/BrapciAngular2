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
    path: 'eventos',
    loadComponent: () => import('./pages/eventos/eventos.page').then((m) => m.EventosPage),
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
      import('./pages/tools-bibliografics/tools-bibliografics.page').then((m) => m.ToolsBibliograficsPage),
  },
  {
    path: 'tools_bibliometric',
    loadComponent: () =>
      import('./pages/tools-bibliometric/tools-bibliometric.page').then((m) => m.ToolsBibliometricPage),
  },
  {
    path: 'tools_text',
    loadComponent: () =>
      import('./pages/tools-text/tools-text.page').then((m) => m.ToolsTextPage),
  },
  {
    path: 'search-boolean',
    loadComponent: () => import('./components/search-boolean/search-boolean.component').then(m => m.SearchBooleanComponent)
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  }
];
