import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'chat',
    renderMode: RenderMode.Client
  },
  {
    path: 'v/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'about/:page',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
