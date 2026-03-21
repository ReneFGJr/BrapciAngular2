import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-perfil-page',
  imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent],
  templateUrl: './perfil.page.html',
  styleUrl: './perfil.page.scss'
})
export class PerfilPage {
  private readonly authService = inject(AuthService);

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly isLogged = computed(() => !!this.currentUser());
  readonly localUser = computed(() => {
    this.currentUser();
    return this.authService.getLocalUser();
  });
  readonly localSessionExpiresAt = computed(() => {
    this.currentUser();
    return this.authService.getLocalSessionExpiresAt();
  });
  readonly localSessionExpiresAtDate = computed(() => {
    const expiresAt = this.localSessionExpiresAt();
    return expiresAt ? new Date(expiresAt) : null;
  });

  logout(): void {
    this.authService.logout().subscribe();
  }
}
