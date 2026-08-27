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
      <label for="rdf-lang" class="form-label">{{ 'adminEdit.fields.n_lang' | translate }}</label>
      <input id="rdf-lang" class="form-control" [ngModel]="draft['n_lang']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="change.emit({ field: 'n_lang', value: $event })" />
    </div>
  `,
})
export class AdminLiteralEditorComponent {
  @Input({ required: true }) draft!: Record<string, unknown>;
  @Output() readonly change = new EventEmitter<{ field: 'n_name' | 'n_lang'; value: string }>();
}
