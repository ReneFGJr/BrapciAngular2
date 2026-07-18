import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
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
  private readonly externalProfileBaseUrl = 'https://cip.brapci.inf.br/social/token/?token=';
  private readonly copyFeedbackTimeoutMs = 2500;

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly isLogged = computed(() => !!this.currentUser());
  readonly copyStatus = signal<'idle' | 'success' | 'error'>('idle');
  readonly localUser = computed(() => {
    this.currentUser();
    return this.authService.getLocalUser();
  });
  readonly userApiToken = computed(() => this.currentUser()?.token || this.localUser()?.token || '');
  readonly localSessionExpiresAt = computed(() => {
    this.currentUser();
    return this.authService.getLocalSessionExpiresAt();
  });
  readonly localSessionExpiresAtDate = computed(() => {
    const expiresAt = this.localSessionExpiresAt();
    return expiresAt ? new Date(expiresAt) : null;
  });
  readonly externalProfileUrl = computed(() => {
    const token = this.userApiToken();
    return token ? `${this.externalProfileBaseUrl}${encodeURIComponent(token)}` : '';
  });

  private resetCopyStatus(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.setTimeout(() => {
      this.copyStatus.set('idle');
    }, this.copyFeedbackTimeoutMs);
  }

  async copyUserApiToken(): Promise<void> {
    const token = this.userApiToken();
    if (!token) {
      this.copyStatus.set('error');
      this.resetCopyStatus();
      return;
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(token);
      } else if (typeof document !== 'undefined') {
        const input = document.createElement('textarea');
        input.value = token;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(input);

        if (!copied) {
          throw new Error('Nao foi possivel copiar para a area de transferencia.');
        }
      } else {
        throw new Error('Clipboard indisponivel neste ambiente.');
      }

      this.copyStatus.set('success');
    } catch {
      this.copyStatus.set('error');
    }

    this.resetCopyStatus();
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
