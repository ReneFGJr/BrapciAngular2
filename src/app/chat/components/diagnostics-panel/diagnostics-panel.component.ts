import { DatePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ChatDiagnosticsService } from '../../services/chat-diagnostics.service';

@Component({
  selector: 'app-diagnostics-panel', standalone: true, imports: [DatePipe],
  template: `@if(open()){<div class="shade" (click)="close.emit()"><section class="panel" role="dialog" aria-modal="true" aria-labelledby="diagnostics-title" (click)="$event.stopPropagation()">
    <header><div><span>Diagnóstico da API</span><h2 id="diagnostics-title">Endpoints chamados</h2></div><button type="button" (click)="close.emit()" aria-label="Fechar painel"><i class="bi bi-x-lg"></i></button></header>
    <div class="toolbar"><small>As APIKEYs são ocultadas neste painel.</small><button type="button" (click)="diagnostics.clear()"><i class="bi bi-trash"></i> Limpar</button></div>
    <div class="entries">@for(entry of diagnostics.entries();track entry.id){<article [class]="entry.state">
      <div class="entry-head"><strong>{{entry.method}}</strong><code>{{entry.endpoint}}</code><span>{{entry.startedAt | date:'HH:mm:ss'}}</span></div>
      <div class="entry-meta"><span>Status: {{entry.status ?? 'aguardando'}}</span><span>Duração: {{entry.durationMs === null ? '—' : entry.durationMs + ' ms'}}</span><span>{{entry.state}}</span></div>
      @if(entry.error){<pre>{{entry.error}}</pre>}
    </article>}@empty{<div class="empty"><i class="bi bi-activity"></i><p>Nenhuma chamada registrada nesta sessão.</p></div>}</div>
  </section></div>}`,
  styles: [`.shade{position:fixed;inset:0;background:rgb(0 0 0/.55);z-index:60;display:flex;justify-content:flex-end}.panel{width:min(48rem,100%);height:100%;background:var(--theme-card-bg);color:var(--theme-ink);box-shadow:-1rem 0 3rem rgb(0 0 0/.2);display:flex;flex-direction:column}header{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.2rem;border-bottom:1px solid var(--theme-line)}header span{color:var(--theme-hint);font-size:.7rem;text-transform:uppercase;letter-spacing:.08em}h2{font-size:1.25rem;margin:.1rem 0 0}header button,.toolbar button{border:0;background:transparent;color:inherit}.toolbar{display:flex;justify-content:space-between;gap:1rem;padding:.65rem 1.2rem;border-bottom:1px solid var(--theme-line);color:var(--theme-hint)}.entries{padding:1rem;overflow:auto;display:grid;align-content:start;gap:.65rem}.entries article{border:1px solid var(--theme-line);border-left:4px solid #777;border-radius:.55rem;padding:.7rem;background:var(--theme-bg)}.entries article.success{border-left-color:#43845d}.entries article.error{border-left-color:#b13a48}.entries article.pending{border-left-color:#c39036}.entries article.cancelled{border-left-color:#777}.entry-head{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:.6rem;align-items:center}.entry-head strong{font-size:.72rem;color:#6b5fb1}.entry-head code{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--theme-ink)}.entry-head>span,.entry-meta{color:var(--theme-hint);font-size:.7rem}.entry-meta{display:flex;gap:1rem;margin-top:.45rem}.entries pre{white-space:pre-wrap;margin:.6rem 0 0;padding:.55rem;border-radius:.35rem;background:#351e24;color:#ffdce2;font-size:.75rem}.empty{text-align:center;padding:4rem 1rem;color:var(--theme-hint)}.empty i{font-size:2rem}@media(max-width:600px){.entry-head{grid-template-columns:auto 1fr}.entry-head>span{grid-column:2}.entry-meta{flex-wrap:wrap}}`],
})
export class DiagnosticsPanelComponent {
  readonly diagnostics = inject(ChatDiagnosticsService);
  readonly open = input(false);
  readonly close = output<void>();
}
