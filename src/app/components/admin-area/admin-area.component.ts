import { Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';

export type AdminAction = 'delete' | 'edit' | 'translate' | 'process';

@Component({
  selector: 'app-admin-area',
  imports: [TranslateModule],
  templateUrl: './admin-area.component.html',
  styleUrl: './admin-area.component.scss',
})
export class AdminAreaComponent {
  private readonly authService = inject(AuthService);
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly router = inject(Router);
  private readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });

  readonly recordId = input.required<string>();
  readonly editOnly = input(false);
  readonly recordData = input<unknown>(undefined);
  readonly showJson = signal(false);
  readonly deleting = signal(false);
  readonly deleteError = signal('');
  readonly jsonContent = computed(() => JSON.stringify(this.recordData(), null, 2));
  readonly actionSelected = output<AdminAction>();
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');

  selectAction(action: AdminAction): void {
    this.actionSelected.emit(action);
  }

  deleteRegister(): void {
    if (this.deleting() || !this.isAdmin()) return;
    const id = this.recordId();
    const token = this.currentUser()?.token;
    if (!id || !token) {
      this.deleteError.set('Entre novamente para excluir o registro.');
      return;
    }
    if (!confirm('Excluir este trabalho?')) return;

    this.deleting.set(true);
    this.deleteError.set('');
    this.brapciApiService
      .postForm<{ status?: string | number; message?: string }>(`rdf/deleteConcept/${encodeURIComponent(id)}`, { token })
      .subscribe({
        next: (response) => {
          this.deleting.set(false);
          if (!['200', '300'].includes(String(response?.status))) {
            this.deleteError.set(response?.message || 'Não foi possível excluir o registro.');
            return;
          }
          this.selectAction('delete');
          void this.router.navigate(['/']);
        },
        error: () => {
          this.deleting.set(false);
          this.deleteError.set('Não foi possível excluir o registro. Tente novamente.');
        },
      });
  }

  editConcept(): void {
    const id = this.recordId();
    if (!id) {
      console.warn('ID inválido para navegação.');
      return;
    }

    const url = this.router.serializeUrl(this.router.createUrlTree([`/admin/a/${id}`]));
    window.open(url, '_blank');
    this.selectAction('edit');
  }
}
