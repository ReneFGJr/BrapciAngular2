import { Component, input } from '@angular/core';
import { Message } from '../../models/chat.models';

@Component({
  selector: 'app-chat-message', standalone: true,
  template: `<article class="message" [class.user]="message().role === 'user'" [attr.aria-label]="label()">
    <div class="avatar" aria-hidden="true"><i class="bi" [class.bi-person-fill]="message().role === 'user'" [class.bi-stars]="message().role === 'assistant'"></i></div>
    <div class="content"><div class="meta"><strong>{{ label() }}</strong>@if(message().model){<span>{{message().model}}</span>}</div>
      <div class="body">@for(block of blocks(); track $index){
        @switch(block.kind){
          @case('code'){<div class="code"><div><span>{{block.language || 'código'}}</span><button type="button" (click)="copy(block.text)" aria-label="Copiar código"><i class="bi bi-copy"></i> Copiar</button></div><pre><code>{{block.text}}</code></pre></div>}
          @case('heading'){<h3>{{block.text}}</h3>}
          @case('quote'){<blockquote>{{block.text}}</blockquote>}
          @case('list'){<ul>@for(item of block.items;track $index){<li>{{item}}</li>}</ul>}
          @default{<p>{{block.text}}</p>}
        }
      }@if(message().status==='streaming'){<span class="cursor" aria-label="Gerando resposta"></span>}</div>
      @if(message().role==='assistant' && message().content){<button class="copy-answer" type="button" (click)="copy(message().content)" aria-label="Copiar resposta"><i class="bi bi-copy"></i></button>}
    </div>
  </article>`,
  styles: [`.message{display:grid;grid-template-columns:2rem minmax(0,1fr);gap:.75rem;padding:1rem clamp(.85rem,3vw,1.5rem);max-width:56rem;margin:auto}.message.user{background:color-mix(in srgb,var(--theme-sand) 45%,transparent);border-radius:1rem}.avatar{display:grid;place-items:center;width:2rem;height:2rem;border-radius:.6rem;background:#483d8b;color:#fff}.user .avatar{background:#50725b}.content{min-width:0;position:relative}.meta{display:flex;align-items:center;gap:.5rem;font-size:.75rem;margin-bottom:.35rem}.meta span{color:var(--theme-hint);font-size:.68rem}.body{line-height:1.65;color:var(--theme-ink)}p{white-space:pre-wrap;margin:0 0 .65rem}h3{font-size:1.08rem;margin:1rem 0 .45rem}blockquote{border-left:3px solid #776db5;padding-left:.8rem;color:var(--theme-hint)}.code{border-radius:.65rem;overflow:hidden;background:#171821;color:#edf0f7;margin:.65rem 0}.code>div{display:flex;justify-content:space-between;padding:.4rem .7rem;background:#252735;font-size:.7rem}.code button{border:0;background:transparent;color:#d9dce7}.code pre{margin:0;padding:.8rem;overflow:auto;font-size:.82rem}.copy-answer{position:absolute;right:0;top:0;border:0;background:transparent;color:var(--theme-hint);opacity:0}.message:hover .copy-answer,.copy-answer:focus-visible{opacity:1}.cursor{display:inline-block;width:.45rem;height:1.05rem;background:#6f63aa;animation:blink 1s infinite;vertical-align:text-bottom}@keyframes blink{50%{opacity:.2}}`],
})
export class ChatMessageComponent {
  readonly message = input.required<Message>();
  label(): string { return this.message().role === 'user' ? 'Você' : 'Assistente'; }
  blocks(): Array<{ kind: string; text: string; language?: string; items?: string[] }> {
    const content = this.message().content; const result: Array<{ kind: string; text: string; language?: string; items?: string[] }> = [];
    const parts = content.split(/```/);
    parts.forEach((part, index) => {
      if (index % 2) { const newline = part.indexOf('\n'); result.push({ kind: 'code', language: newline > -1 ? part.slice(0,newline).trim() : '', text: newline > -1 ? part.slice(newline+1).trimEnd() : part }); return; }
      const list: string[] = [];
      for (const line of part.split('\n')) { const trimmed=line.trim(); if (!trimmed) continue; if (/^[-*]\s/.test(trimmed)) list.push(trimmed.slice(2)); else { if(list.length) result.push({kind:'list',text:'',items:list.splice(0)}); if(/^#{1,3}\s/.test(trimmed)) result.push({kind:'heading',text:trimmed.replace(/^#{1,3}\s/,'')}); else if(trimmed.startsWith('> ')) result.push({kind:'quote',text:trimmed.slice(2)}); else result.push({kind:'text',text:line}); } }
      if(list.length) result.push({kind:'list',text:'',items:list});
    }); return result;
  }
  copy(text: string): void { void navigator.clipboard?.writeText(text); }
}
