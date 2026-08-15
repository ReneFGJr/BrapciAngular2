import { Component, input, output } from '@angular/core';
import { Chat, OllamaModel, Project } from '../../models/chat.models';
import { ModelSelectorComponent } from '../model-selector/model-selector.component';

@Component({
  selector: 'app-chat-header', standalone: true, imports: [ModelSelectorComponent],
  template: `<header class="chat-header">
    <div class="title-row">
      <button type="button" class="icon-btn menu-btn" (click)="menu.emit()" aria-label="Abrir menu"><i class="bi bi-list"></i></button>
      <div class="title-block"><span>{{ project()?.name || 'Conversa sem projeto' }}</span><h1>{{ chat()?.title || 'Nova conversa' }}</h1></div>
    </div>
    <app-model-selector [models]="models()" [value]="model()" [disabled]="streaming()" (valueChange)="modelChange.emit($event)" />
  </header>`,
  styles: [`.chat-header{min-height:4.5rem;padding:.7rem 1.25rem;border-bottom:1px solid var(--theme-line);display:flex;align-items:center;justify-content:space-between;gap:1rem;background:var(--theme-card-bg)}.title-row{display:flex;align-items:center;gap:.65rem;min-width:0}.title-block{min-width:0}.title-block span{font-size:.72rem;color:var(--theme-hint)}h1{font:600 1.05rem/1.25 'Raleway',sans-serif;margin:0;color:var(--theme-ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.icon-btn{border:0;background:transparent;color:var(--theme-ink);font-size:1.35rem}.menu-btn{display:none}@media(max-width:850px){.menu-btn{display:inline-flex}.chat-header{padding:.65rem}.title-block{max-width:42vw}}`],
})
export class ChatHeaderComponent {
  readonly chat = input<Chat | null>(null); readonly project = input<Project | null>(null);
  readonly models = input.required<OllamaModel[]>(); readonly model = input.required<string>(); readonly streaming = input(false);
  readonly menu = output<void>(); readonly modelChange = output<string>();
}

