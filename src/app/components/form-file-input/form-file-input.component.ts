import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { finalize } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';

@Component({
  selector: 'app-form-file-input',
  standalone: true,
  template: `
    <div class="upload-body">
      <label for="book-file" class="form-label">{{ message }}</label>
      <input
        id="book-file"
        type="file"
        class="form-control"
        [disabled]="uploading"
        (change)="upload($event)"
      />
      @if (uploading) {
        <div class="small text-muted mt-2" role="status">Enviando arquivo...</div>
      }
    </div>
  `,
  styles: `
    .upload-body {
      border: 1px solid rgba(124, 86, 46, 0.25);
      border-radius: 0.45rem;
      padding: 0.8rem;
      background: rgba(255, 255, 255, 0.72);
    }

    :host-context(body.theme-master.theme-dark) .upload-body {
      border-color: rgba(232, 213, 190, 0.22);
      background: rgba(23, 20, 17, 0.55);
      color: #d6c4b2;
    }

    :host-context(body.theme-master.theme-dark) .form-control {
      border-color: rgba(232, 213, 190, 0.28);
      background-color: #211c18;
      color: #f7ecdf;
    }

    :host-context(body.theme-master.theme-dark) .form-control::file-selector-button {
      border-color: rgba(232, 213, 190, 0.22);
      background-color: #342b24;
      color: #f7ecdf;
    }

    :host-context(body.theme-master.theme-dark) .text-muted {
      color: #bbaa99 !important;
    }
  `,
})
export class FormFileInputComponent {
  private readonly api = inject(BrapciApiService);

  @Input({ required: true }) action = '';
  @Input() message = 'Selecione um arquivo';
  @Input() property = 'hasAuthor';
  @Output() readonly dataset = new EventEmitter<Record<string, unknown>>();

  uploading = false;

  upload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !this.action) {
      return;
    }

    const body = new FormData();
    body.append('file', file, file.name);
    body.append('property', this.property);
    this.uploading = true;

    this.api
      .post<Record<string, unknown>>(`sendfile/${this.action}`, body)
      .pipe(finalize(() => (this.uploading = false)))
      .subscribe({
        next: (response) => {
          const savedFile = response['file'] ?? response['fileO'] ?? file.name;
          this.dataset.emit({ ...response, file: savedFile });
        },
        error: () => this.dataset.emit({ status: '500', file: file.name }),
      });
  }
}
