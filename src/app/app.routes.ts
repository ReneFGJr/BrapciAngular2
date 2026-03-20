import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
	},
	{
		path: 'autoridade',
		loadComponent: () => import('./pages/autoridade/autoridade.page').then((m) => m.AutoridadePage)
	},
	{
		path: 'v/:id',
		loadComponent: () => import('./pages/v-id/v-id.page').then((m) => m.VIdPage)
	},
	{
		path: 'sobre/brapci',
		redirectTo: 'about/brapci',
		pathMatch: 'full'
	},
	{
		path: 'about/:page',
		loadComponent: () => import('./pages/sobre-brapci/sobre-brapci.page').then((m) => m.SobreBrapciPage)
	},
	{
		path: 'doc',
		loadComponent: () => import('./pages/doc/doc.page').then((m) => m.DocPage)
	}
];
