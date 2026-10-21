import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-literal-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <div class="mb-3">
      <label for="rdf-name" class="form-label">{{ 'adminEdit.fields.n_name' | translate }}</label>
      <textarea id="rdf-name" class="form-control border border-secondary" rows="5" [ngModel]="draft['n_name']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="change.emit({ field: 'n_name', value: $event })"></textarea>
    </div>
    <div>
      <span id="rdf-lang-label" class="form-label d-block">{{ 'adminEdit.fields.n_lang' | translate }}</span>
      <div class="d-flex flex-wrap gap-3" role="radiogroup" aria-labelledby="rdf-lang-label">
        <div class="form-check" *ngFor="let language of languages">
          <input
            class="form-check-input"
            type="radio"
            name="rdf-lang"
            [id]="'rdf-lang-' + language.value"
            [value]="language.value"
            [ngModel]="draft['n_lang'] || 'pt'"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change.emit({ field: 'n_lang', value: $event })"
          />
          <label class="form-check-label" [for]="'rdf-lang-' + language.value">{{ language.label }}</label>
        </div>
      </div>
    </div>
  `,
})
export class AdminLiteralEditorComponent {
  readonly languages = [
    { value: 'pt', label: 'Português' },
    { value: 'es', label: 'Espanhol' },
    { value: 'en', label: 'Inglês' },
    { value: 'fr', label: 'Francês' },
    { value: 'de', label: 'Alemão' },
  ] as const;

  @Input({ required: true }) draft!: Record<string, unknown>;
  @Output() readonly change = new EventEmitter<{ field: 'n_name' | 'n_lang'; value: string }>();
}
