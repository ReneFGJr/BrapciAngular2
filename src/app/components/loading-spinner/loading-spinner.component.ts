import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="d-flex justify-content-center align-items-center gap-2 py-4" role="status">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <span>Processando...</span>
    </div>
  `,
})
export class LoadingSpinnerComponent {}
