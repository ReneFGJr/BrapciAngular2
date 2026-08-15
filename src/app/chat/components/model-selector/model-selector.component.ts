import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OllamaModel } from '../../models/chat.models';

@Component({
  selector: 'app-model-selector', standalone: true, imports: [FormsModule],
  template: `<label class="model-label" for="chat-model">Modelo</label>
    <select id="chat-model" class="form-select form-select-sm" [disabled]="disabled() || !models().length"
      [ngModel]="value()" (ngModelChange)="valueChange.emit($event)">
      @if (!models().length) { <option value="">Nenhum modelo disponível</option> }
      @for (model of models(); track model.name) { <option [value]="model.name">{{ model.displayName || model.name }}</option> }
    </select>`,
  styles: [`.model-label{display:block;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--theme-hint);margin-bottom:.2rem}.form-select{min-width:11rem;background-color:var(--theme-card-bg);color:var(--theme-ink);border-color:var(--theme-line)}`],
})
export class ModelSelectorComponent {
  readonly models = input.required<OllamaModel[]>();
  readonly value = input.required<string>();
  readonly disabled = input(false);
  readonly valueChange = output<string>();
}

