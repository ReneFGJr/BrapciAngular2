import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, inject, output, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../core/services/auth.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';

interface BugForm {
  problems: { value: string; label: string }[];
  message?: string;
}

@Component({
  selector: 'app-bug-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  template: `
    <div class="bug-backdrop" (click)="close()">
      <section #panel class="bug-panel" role="dialog" aria-modal="true" aria-labelledby="bug-title"
        tabindex="-1" (click)="$event.stopPropagation()">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 id="bug-title" class="h5 mb-0">Reportar problema</h2>
          <button type="button" class="btn-close" aria-label="Fechar" (click)="close()"></button>
        </div>
        @if (!user() || loginRequired()) {
          <p>Para reportar problemas, entre na sua conta.</p>
          <a routerLink="/signin" class="btn btn-primary" (click)="close()">Ir para a página de login</a>
        } @else if (success()) {
          <p role="status">{{ success() }}</p>
        } @else {
          @if (loading()) { <p role="status">Carregando formulário…</p> }
          @if (error()) { <p class="text-danger" role="alert">{{ error() }}</p> }
          @if (form()) {
            <p class="alert alert-info">{{ 'bugs.notice' | translate }}</p>
            <form #report="ngForm" (ngSubmit)="submit()">
              <label for="bug-problem" class="form-label">Problema</label>
              <select id="bug-problem" name="problem" class="form-select mb-3" required [(ngModel)]="problem">
                <option value="" disabled>Selecione o problema</option>
                @for (item of form()!.problems; track item.value) {
                  <option [value]="item.value">{{ item.label }}</option>
                }
              </select>
              @if (problem === 'other') {
                <label for="bug-description" class="form-label">Descreva o problema</label>
                <textarea id="bug-description" name="description" class="form-control mb-3" rows="4"
                  required maxlength="2000" [(ngModel)]="description"></textarea>
              }
              <button class="btn btn-primary" type="submit" [disabled]="report.invalid || sending()">
                {{ sending() ? 'Enviando…' : 'Enviar relato' }}
              </button>
            </form>
            <p class="mt-3 mb-0 small text-break"><strong>{{ 'bugs.url' | translate }}:</strong> {{ reportUrl }}</p>
          } @else if (!loading()) {
            <button type="button" class="btn btn-outline-primary" (click)="load()">Tentar novamente</button>
          }
        }
      </section>
    </div>
  `,
  styles: [`
    .bug-backdrop { position: fixed; inset: 0; z-index: 1100; background: #0008; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .bug-panel { width: 100%; max-width: 520px; max-height: 90vh; overflow-y: auto; padding: 1.5rem; border-radius: .75rem; background: var(--bs-body-bg, white); color: var(--bs-body-color, #212529); box-shadow: 0 1rem 3rem #0004; }
  `]
})
export class BugPanelComponent implements OnInit, OnDestroy {
  private readonly auth = inject(AuthService);
  private readonly api = inject(BrapciApiService);
  private readonly router = inject(Router);
  readonly user = toSignal(this.auth.currentUser$, { initialValue: null });
  readonly closed = output<void>();
  readonly form = signal<BugForm | null>(null);
  readonly loading = signal(false);
  readonly sending = signal(false);
  readonly loginRequired = signal(false);
  readonly error = signal('');
  readonly success = signal('');
  readonly reportUrl = typeof window === 'undefined' ? this.router.url : window.location.href;
  recordId: number | null = Number(this.router.url.match(/^\/v\/(\d+)/)?.[1]) || null;
  problem = '';
  description = '';
  @ViewChild('panel', { static: true }) panel!: ElementRef<HTMLElement>;
  private previousFocus = typeof document === 'undefined' ? null : document.activeElement as HTMLElement;

  ngOnInit(): void { this.panel.nativeElement.focus(); if (this.user()) this.load(); }
  ngOnDestroy(): void { this.previousFocus?.focus(); }
  close(): void { this.closed.emit(); }
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') this.close();
    if (event.key !== 'Tab') return;
    const elements = Array.from(this.panel.nativeElement.querySelectorAll<HTMLElement>('button:not(:disabled), a, input, select, textarea'));
    const first = elements[0]; const last = elements[elements.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === this.panel.nativeElement)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }
  load(): void {
    this.loading.set(true); this.error.set('');
    this.api.postForm<BugForm>('bugs/form', { token: this.user()?.token ?? '', action: 'form' }).subscribe({
      next: (form) => { this.form.set(form); this.loading.set(false); },
      error: (err) => { this.loading.set(false); this.loginRequired.set(err.status === 401); this.error.set('Não foi possível carregar o formulário.'); }
    });
  }
  submit(): void {
    if (this.sending() || !this.user()) return;
    if (!Number.isInteger(this.recordId) || Number(this.recordId) < 1) {
      this.error.set('Abra a página do registro para reportar um problema.'); return;
    }
    if (!this.form()?.problems.some(p => p.value === this.problem) || (this.problem === 'other' && !this.description.trim())) {
      this.error.set('Selecione o problema e informe a descrição quando selecionar Outro.'); return;
    }
    this.sending.set(true); this.error.set('');
    this.api.postForm<{ message: string }>('bugs/form', {
      action: 'submit', token: this.user()?.token ?? '', id: this.recordId!, problem: this.problem,
      description: this.problem === 'other' ? this.description.trim() : '',
      url: this.reportUrl
    }).subscribe({
      next: (response) => { this.sending.set(false); this.success.set(response.message); },
      error: (err) => { this.sending.set(false); this.loginRequired.set(err.status === 401); this.error.set(err.error?.message || 'Não foi possível enviar o relato. Tente novamente.'); }
    });
  }
}
