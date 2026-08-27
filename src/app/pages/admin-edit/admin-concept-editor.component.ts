import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface SelectOption { name: string; use: string; }

@Component({
  selector: 'app-admin-concept-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <input type="hidden" [value]="draft['ID']" readonly />
    <div class="mb-3">
      <label for="rdf-name" class="form-label">{{ 'adminEdit.fields.n_name' | translate }}</label>
      <input type="search" class="form-control w-100 mb-2" placeholder="Buscar nome ou valor" autocomplete="off" [value]="query" (input)="queryChange.emit($any($event.target).value)" />
      <pre class="autocomplete-query">{{ payloadJson }}</pre>
      <select id="rdf-name" class="form-select w-100" size="5" [ngModel]="draft['ID']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="selectionChange.emit($event)">
        <option value="" disabled>{{ loading ? 'Buscando...' : 'Selecione' }}</option>
        <option *ngFor="let option of options" [value]="option.use">{{ option.name }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="rdf-class" class="form-label">{{ 'adminEdit.fields.c_class' | translate }}</label>
      <select id="rdf-class" class="form-select w-100" [ngModel]="draft['c_class']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="classChange.emit($event)">
        <option *ngFor="let type of allowedTypes()" [value]="type['c_class']">{{ type['c_class'] }}</option>
      </select>
    </div>
  `,
  styles: [`
    .autocomplete-query { margin: 0 0 .5rem; padding: .65rem .8rem; border: 1px solid var(--bs-border-color); border-radius: .4rem; background: var(--bs-tertiary-bg); color: var(--bs-body-color); font-size: .78rem; white-space: pre-wrap; }
  `],
})
export class AdminConceptEditorComponent {
  @Input({ required: true }) draft!: Record<string, unknown>;
  @Input() query = '';
  @Input() options: SelectOption[] = [];
  @Input() loading = false;
  @Input() payloadJson = '';
  @Output() readonly queryChange = new EventEmitter<string>();
  @Output() readonly selectionChange = new EventEmitter<string>();
  @Output() readonly classChange = new EventEmitter<string>();

  allowedTypes(): Record<string, unknown>[] {
    const allow = this.draft['propertyAllow'];
    const types = allow && typeof allow === 'object' ? (allow as Record<string, unknown>)['type'] : [];
    return Array.isArray(types) ? types.filter((type) => typeof type === 'object' && type !== null) : [];
  }
}
