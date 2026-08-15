import { Routes } from '@angular/router';
import { chatAuthGuard } from './guards/chat-auth.guard';

export const CHAT_ROUTES: Routes = [{
  path: '',
  canActivate: [chatAuthGuard],
  loadComponent: () => import('./pages/chat-page/chat-page.component').then((m) => m.ChatPageComponent),
}];
