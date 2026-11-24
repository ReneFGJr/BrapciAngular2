import { UserBugsComponent } from '../../components/user-bugs/user-bugs.component';
import { UserLikedComponent } from '../../components/user-liked/user-liked.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { AuthService } from '../../core/services/auth.service';
import { API_CONFIG } from '../../core/tokens/api-config.token';

interface LoginHistoryEntry {
  date: string;
  success: boolean;
  reason: string;
  ip: string;
  agent: string;
}

@Component({
  selector: 'app-perfil-page',
  imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent, UserLikedComponent, UserBugsComponent],
  templateUrl: './perfil.page.html',
  styleUrl: './perfil.page.scss'
})
export class PerfilPage {
  private readonly authService = inject(AuthService);
  private readonly http = inject(HttpClient);
  private readonly apiConfig = inject(API_CONFIG);
  private readonly externalProfileBaseUrl = 'https://cip.brapci.inf.br/social/token/?token=';
  private readonly copyFeedbackTimeoutMs = 2500;

  readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  readonly isLogged = computed(() => !!this.currentUser());
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');
  readonly activeTab = signal<'session' | 'logins' | 'likes' | 'monitor' | 'bugs'>('session');
  readonly loginHistory = signal<LoginHistoryEntry[]>([]);
  readonly loginHistoryLoading = signal(false);
  readonly loginHistoryLoaded = signal(false);
  readonly loginHistoryError = signal('');
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

  setTab(tab: 'session' | 'logins' | 'likes' | 'monitor' | 'bugs'): void {
    if (tab === 'monitor' && !this.isAdmin()) return;
    this.activeTab.set(tab);
    if (tab === 'logins' && !this.loginHistoryLoaded()) {
      this.loadLoginHistory();
    }
  }

  loadLoginHistory(): void {
    const apiKey = this.userApiToken();
    if (!apiKey || this.loginHistoryLoading()) {
      this.loginHistoryError.set('APIKEY não disponível para consultar os acessos.');
      return;
    }

    const apiOrigin = this.apiConfig.brapciApiBaseUrl.replace(/\/api\/?$/, '');
    this.loginHistoryLoading.set(true);
    this.loginHistoryError.set('');

    this.http.post<unknown>(`${apiOrigin}/auth/lastlogin`, { APIKEY: apiKey }, {
      headers: new HttpHeaders({ APIKEY: apiKey }),
    }).subscribe({
      next: (response) => {
        this.loginHistory.set(this.normalizeLoginHistory(response));
        this.loginHistoryLoaded.set(true);
        this.loginHistoryLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.loginHistoryError.set(
          error.status === 401 || error.status === 403
            ? 'APIKEY inválida ou sem permissão para consultar os acessos.'
            : 'Não foi possível consultar o histórico de acessos.',
        );
        this.loginHistoryLoading.set(false);
      },
    });
  }

  private normalizeLoginHistory(response: unknown): LoginHistoryEntry[] {
    const parsedResponse = this.parseLoginHistoryResponse(response);
    const root = parsedResponse && typeof parsedResponse === 'object'
      ? parsedResponse as Record<string, unknown>
      : {};
    const data = root['data'] && typeof root['data'] === 'object' ? root['data'] : parsedResponse;
    const container = data && typeof data === 'object' ? data as Record<string, unknown> : {};
    const direct = Array.isArray(data) ? data : Array.isArray(container['logins']) ? container['logins'] : [];
    const successful = this.firstArray(container, ['success', 'successful', 'succeeded', 'valid', 'bem_sucedidos']);
    const failed = this.firstArray(container, ['failed', 'failure', 'failures', 'invalid', 'mal_sucedidos']);

    return [
      ...direct.map((item) => this.normalizeLoginEntry(item)),
      ...successful.map((item) => this.normalizeLoginEntry(item, true)),
      ...failed.map((item) => this.normalizeLoginEntry(item, false)),
    ].sort((a, b) => this.dateValue(b.date) - this.dateValue(a.date));
  }

  private parseLoginHistoryResponse(response: unknown): unknown {
    if (typeof response !== 'string') return response;

    try {
      return JSON.parse(response);
    } catch {
      return null;
    }
  }

  private firstArray(container: Record<string, unknown>, keys: string[]): unknown[] {
    for (const key of keys) {
      if (Array.isArray(container[key])) return container[key];
    }
    return [];
  }

  private normalizeLoginEntry(value: unknown, forcedSuccess?: boolean): LoginHistoryEntry {
    const item = value && typeof value === 'object' ? value as Record<string, unknown> : {};
    const rawStatus = item['successful'] ?? item['success'] ?? item['status'] ?? item['result'] ?? item['valid'] ?? item['lg_status'];
    const status = String(rawStatus ?? '').trim().toLowerCase();

    return {
      date: String(item['date'] ?? item['datetime'] ?? item['created_at'] ?? item['timestamp'] ?? item['lg_date'] ?? ''),
      success: forcedSuccess ?? (rawStatus === true || rawStatus === 1 || ['1', '200', 'ok', 'success', 'successful', 'true'].includes(status)),
      reason: String(item['reason'] ?? item['message'] ?? ''),
      ip: String(item['ip'] ?? item['ip_address'] ?? item['remote_addr'] ?? item['lg_ip'] ?? '-'),
      agent: String(item['user_agent'] ?? item['agent'] ?? item['browser'] ?? item['device'] ?? '-'),
    };
  }

  private dateValue(value: string): number {
    const timestamp = Date.parse(value);
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

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
