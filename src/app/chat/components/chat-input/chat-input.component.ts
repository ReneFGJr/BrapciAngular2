import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input', standalone: true, imports: [FormsModule],
  template: `<div class="composer-shell">
    <div class="composer">
      <label class="visually-hidden" for="chat-message">Digite uma mensagem</label>
      <textarea #editor id="chat-message" rows="1" maxlength="12000" [(ngModel)]="draft" (input)="resize()"
        (keydown)="onKeydown($event)" [disabled]="disabled()" placeholder="Digite uma mensagem..."></textarea>
      @if (streaming()) {
        <button type="button" class="send stop" (click)="cancel.emit()" aria-label="Interromper geração" title="Interromper"><i class="bi bi-stop-fill"></i></button>
      } @else {
        <button type="button" class="send" (click)="submit()" [disabled]="disabled() || !draft.trim()" aria-label="Enviar mensagem" title="Enviar"><i class="bi bi-arrow-up"></i></button>
      }
    </div><small>Enter envia · Shift+Enter cria uma nova linha</small>
  </div>`,
  styles: [`.composer-shell{padding:.85rem clamp(.75rem,3vw,2rem) 1rem;background:var(--theme-card-bg);border-top:1px solid var(--theme-line)}.composer{max-width:52rem;margin:auto;display:flex;align-items:flex-end;gap:.5rem;border:1px solid var(--theme-line);border-radius:1rem;padding:.55rem;background:var(--theme-bg);box-shadow:0 5px 20px rgb(0 0 0/.05)}textarea{flex:1;border:0;outline:0;background:transparent;color:var(--theme-ink);resize:none;min-height:2.25rem;max-height:11rem;padding:.45rem;font:inherit}.send{flex:0 0 auto;border:0;border-radius:.7rem;width:2.35rem;height:2.35rem;background:#483d8b;color:#fff}.send:disabled{opacity:.4}.stop{background:#9d3340}small{display:block;text-align:center;color:var(--theme-hint);font-size:.68rem;margin-top:.35rem}`],
})
export class ChatInputComponent {
  readonly streaming = input(false); readonly disabled = input(false); readonly send = output<string>(); readonly cancel = output<void>();
  readonly editor = viewChild<ElementRef<HTMLTextAreaElement>>('editor'); draft = '';
  submit(): void { const value = this.draft.trim(); if (!value || this.disabled() || this.streaming()) return; this.send.emit(value); this.draft = ''; this.resize(); }
  onKeydown(event: KeyboardEvent): void { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); this.submit(); } }
  resize(): void { const el = this.editor()?.nativeElement; if (!el) return; el.style.height = 'auto'; el.style.height = `${Math.min(el.scrollHeight, 176)}px`; }
}

