import { Component, computed, inject, input, output } from '@angular/core';
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
  readonly actionSelected = output<AdminAction>();
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');

  selectAction(action: AdminAction): void {
    this.actionSelected.emit(action);
  }

  deleteRegister(): void {
    if (!confirm('Excluir')) {
      return;
    }

    const id = this.recordId();
    const token = this.currentUser()?.token;

    this.brapciApiService
      .post(`rdf/deleteConcept/${id}`, { token })
      .subscribe(() => this.selectAction('delete'));
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
