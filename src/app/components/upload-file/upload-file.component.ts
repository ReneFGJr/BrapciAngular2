import { Component, Input, OnChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { FormFileInputComponent } from '../form-file-input/form-file-input.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [ReactiveFormsModule, FormFileInputComponent, LoadingSpinnerComponent],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
})
export class UploadFileComponent implements OnChanges {
  private readonly api = inject(BrapciApiService);
  private readonly auth = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  @Input() toolsName = 'Submissão de livro';
  @Input() toolsNameDescription = 'Envie o arquivo do livro para avaliação da equipe da Brapci Livros.';
  @Input() buttonName = 'Processar arquivo';
  @Input() endpoint = 'brapci/book/submit';
  @Input() action = 'bookSubmit';
  @Input() emailSend = true;
  @Input() requireTerms = false;
  @Input() termsAccepted = true;

  dataset: Record<string, unknown> | null = null;
  data: unknown;
  status = 0;
  errorMessage = '';

  readonly emailForm = this.fb.nonNullable.group({
    name: [this.auth.getLocalUser()?.name ?? '', [Validators.required, Validators.pattern(/\S/)]],
    email: [this.auth.getLocalUser()?.username ?? '', [Validators.required, Validators.email]],
    agree: [false, Validators.requiredTrue],
  });

  ngOnChanges(): void {
    if (this.requireTerms) {
      this.emailForm.controls.agree.setValue(this.termsAccepted);
    }
  }

  updateDataset(newDataset: Record<string, unknown>): void {
    const status = Number(newDataset['status'] ?? 200);
    if (status >= 400 || (this.action === 'bookSubmit' && !newDataset['fileO'])) {
      this.dataset = null;
      this.status = 0;
      this.errorMessage = 'Não foi possível preparar o arquivo. Tente enviá-lo novamente.';
      return;
    }
    this.dataset = newDataset;
    this.errorMessage = '';
    this.status = 1;
  }

  onSubmitEmail(): void {
    this.emailForm.patchValue({
      name: this.emailForm.controls.name.value.trim(),
      email: this.emailForm.controls.email.value.trim(),
    });
    if (!this.termsAccepted || this.status !== 1 || this.emailForm.invalid || !this.dataset) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.submit({ ...this.dataset, ...this.emailForm.getRawValue() }, 'brapci/book/submit');
  }

  process(): void {
    if (this.dataset) {
      this.submit(this.dataset, this.endpoint);
    }
  }

  restart(): void {
    this.status = 0;
    this.dataset = null;
    this.data = null;
    this.errorMessage = '';
    this.emailForm.controls.agree.setValue(this.requireTerms && this.termsAccepted);
  }

  displayFileName(value: unknown, maxLength = 55): string {
    const fileName = String(value ?? '');
    if (fileName.length <= maxLength) {
      return fileName;
    }

    const extensionIndex = fileName.lastIndexOf('.');
    const extension = extensionIndex > 0 ? fileName.substring(extensionIndex) : '';
    const availableLength = Math.max(12, maxLength - extension.length - 3);
    return `${fileName.substring(0, availableLength)}...${extension}`;
  }

  private submit(payload: Record<string, unknown>, endpoint: string): void {
    if (!this.termsAccepted || this.status === 2) return;
    this.dataset = payload;
    this.status = 2;
    this.errorMessage = '';

    const body = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      if (value !== null && value !== undefined) body.append(key, String(value));
    }
    body.set('user', this.auth.getLocalUser()?.token ?? '');
    this.api
      .post<unknown>(endpoint, body)
      .subscribe({
        next: (response) => {
          this.data = response;
          const result = response && typeof response === 'object'
            ? response as Record<string, unknown> : {};
          const code = String(result['status'] ?? '');
          if (code !== '200' && code !== '201') {
            this.status = 1;
            this.errorMessage = typeof result['message'] === 'string'
              ? result['message'] : 'Não foi possível confirmar a submissão. Tente novamente.';
            return;
          }
          this.status = code === '201' ? 4 : 3;
        },
        error: () => {
          this.status = 1;
          this.errorMessage = 'Não foi possível concluir a submissão. Tente novamente.';
        },
      });
  }
}
