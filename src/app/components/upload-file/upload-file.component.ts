import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
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
export class UploadFileComponent {
  private readonly api = inject(BrapciApiService);
  private readonly auth = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  @Input() toolsName = 'Submissão de livro';
  @Input() toolsNameDescription = 'Envie o arquivo do livro para avaliação da equipe da Brapci Livros.';
  @Input() buttonName = 'Processar arquivo';
  @Input() endpoint = 'brapci/book/submit';
  @Input() action = 'bookSubmit';
  @Input() emailSend = true;

  dataset: Record<string, unknown> | null = null;
  data: unknown;
  status = 0;
  errorMessage = '';

  readonly emailForm = this.fb.nonNullable.group({
    name: [this.auth.getLocalUser()?.name ?? '', Validators.required],
    email: [this.auth.getLocalUser()?.username ?? '', [Validators.required, Validators.email]],
    agree: [false, Validators.requiredTrue],
  });

  updateDataset(newDataset: Record<string, unknown>): void {
    this.dataset = newDataset;
    if (String(newDataset['status'] ?? '') === '500') {
      this.errorMessage = 'Erro no processamento do arquivo.';
      return;
    }

    this.errorMessage = '';
    this.status = 1;
  }

  onSubmitEmail(): void {
    if (this.emailForm.invalid || !this.dataset) {
      this.emailForm.markAllAsTouched();
      return;
    }

    this.submit({ ...this.dataset, ...this.emailForm.getRawValue() }, 'brapci/book/submit');
  }

  process(): void {
    console.log('Processing dataset:', this.dataset);
    if (this.dataset) {
      this.submit(this.dataset, this.endpoint);
    }
  }

  restart(): void {
    this.status = 0;
    this.dataset = null;
    this.data = null;
    this.errorMessage = '';
    this.emailForm.controls.agree.setValue(false);
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
    this.dataset = payload;
    this.status = 2;
    this.errorMessage = '';

    this.api
      .post<unknown>(endpoint, payload)
      .pipe(finalize(() => undefined))
      .subscribe({
        next: (response) => {
          this.data = response;
          this.status = 3;
        },
        error: () => {
          this.status = 1;
          this.errorMessage = 'Não foi possível concluir a submissão. Tente novamente.';
        },
      });
  }
}
