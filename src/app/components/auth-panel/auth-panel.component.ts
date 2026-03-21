import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';
import { ForgotPasswordPayload, LoginPayload, RegisterPayload } from '../../core/models/user.model';

type AuthMode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-auth-panel',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './auth-panel.component.html',
  styleUrl: './auth-panel.component.scss'
})
export class AuthPanelComponent {
  private readonly authService = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly mode = signal<AuthMode>('login');
  readonly loading = signal(false);
  readonly errorMessage = signal('');
  readonly successMessage = signal('');

  readonly loginPayload: LoginPayload = {
    username: '',
    password: ''
  };

  readonly registerPayload: RegisterPayload = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

  readonly forgotPasswordPayload: ForgotPasswordPayload = {
    email: ''
  };

  readonly firstName = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return '';
    }

    const candidate = user.name.trim() || user.username.trim();
    return candidate.split(/\s+/)[0] ?? '';
  });

  switchMode(nextMode: AuthMode): void {
    this.mode.set(nextMode);
    this.errorMessage.set('');
    this.successMessage.set('');
  }

  login(): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.authService.login(this.loginPayload).subscribe((user) => {
      this.loading.set(false);

      if (!user) {
        this.errorMessage.set(this.translate.instant('auth.messages.invalidCredentials'));
        return;
      }

      this.loginPayload.password = '';
    });
  }

  register(): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.authService.register(this.registerPayload).subscribe((user) => {
      this.loading.set(false);

      if (!user) {
        this.errorMessage.set(this.translate.instant('auth.messages.registerFailed'));
        return;
      }

      this.successMessage.set(this.translate.instant('auth.messages.registerSuccess'));
      this.registerPayload.password = '';
    });
  }

  resendPassword(): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.authService.resendPassword(this.forgotPasswordPayload).subscribe((ok) => {
      this.loading.set(false);

      if (!ok) {
        this.errorMessage.set(this.translate.instant('auth.messages.resendFailed'));
        return;
      }

      this.successMessage.set(this.translate.instant('auth.messages.resendSuccess'));
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
    this.switchMode('login');
  }
}
