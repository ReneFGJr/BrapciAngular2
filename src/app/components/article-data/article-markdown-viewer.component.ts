import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'app-article-markdown-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="markdown-wrapper">
      @if (!markdownText().trim()) {
        <p class="markdown-empty">Sem conteúdo markdown disponível.</p>
      } @else {
        <article class="markdown-body" [innerHTML]="renderedHtml()"></article>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .markdown-wrapper {
        color: var(--theme-ink);
      }

      .markdown-empty {
        margin: 0;
        padding: 1rem;
        color: var(--theme-muted);
        text-align: center;
        font-style: italic;
      }

      .markdown-body {
        line-height: 1.65;
        font-size: 0.96rem;
        word-break: break-word;
      }

      .markdown-body :is(h1, h2, h3, h4, h5, h6) {
        margin: 1rem 0 0.55rem;
        color: var(--theme-ink);
        line-height: 1.35;
      }

      .markdown-body h1 {
        font-size: 1.4rem;
      }

      .markdown-body h2 {
        font-size: 1.25rem;
      }

      .markdown-body h3 {
        font-size: 1.1rem;
      }

      .markdown-body p {
        margin: 0.5rem 0;
      }

      .markdown-body ul,
      .markdown-body ol {
        margin: 0.45rem 0 0.75rem;
        padding-left: 1.35rem;
      }

      .markdown-body li {
        margin: 0.25rem 0;
      }

      .markdown-body a {
        color: var(--theme-link);
      }

      .markdown-body code {
        font-family: 'Courier New', Courier, monospace;
        background: var(--theme-sand);
        border: 1px solid var(--theme-line);
        border-radius: 4px;
        padding: 0.1rem 0.35rem;
      }

      .markdown-body pre {
        margin: 0.75rem 0;
        padding: 0.8rem;
        background: var(--theme-sand);
        border: 1px solid var(--theme-line);
        border-radius: 6px;
        overflow: auto;
      }

      .markdown-body pre code {
        background: transparent;
        border: none;
        padding: 0;
      }
    `,
  ],
})
export class ArticleMarkdownViewerComponent {
  @Input()
  set markdown(value: string) {
    this.markdownText.set(typeof value === 'string' ? value : '');
  }

  readonly markdownText = signal('');
  readonly renderedHtml = computed(() => this.renderMarkdown(this.markdownText()));

  private renderMarkdown(markdown: string): string {
    const source = markdown.replace(/\r\n/g, '\n').trim();
    if (!source) {
      return '';
    }

    const codeBlocks: string[] = [];
    const withoutCode = source.replace(/```([\s\S]*?)```/g, (_match, code: string) => {
      const escapedCode = this.escapeHtml(code.trim());
      const token = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(`<pre><code>${escapedCode}</code></pre>`);
      return token;
    });

    const lines = withoutCode.split('\n');
    const html: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const closeList = () => {
      if (listType) {
        html.push(`</${listType}>`);
        listType = null;
      }
    };

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (!line) {
        closeList();
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        closeList();
        const level = heading[1].length;
        html.push(`<h${level}>${this.renderInline(heading[2])}</h${level}>`);
        continue;
      }

      const ordered = line.match(/^\d+\.\s+(.+)$/);
      if (ordered) {
        if (listType !== 'ol') {
          closeList();
          html.push('<ol>');
          listType = 'ol';
        }
        html.push(`<li>${this.renderInline(ordered[1])}</li>`);
        continue;
      }

      const unordered = line.match(/^[-*]\s+(.+)$/);
      if (unordered) {
        if (listType !== 'ul') {
          closeList();
          html.push('<ul>');
          listType = 'ul';
        }
        html.push(`<li>${this.renderInline(unordered[1])}</li>`);
        continue;
      }

      closeList();
      html.push(`<p>${this.renderInline(line)}</p>`);
    }

    closeList();

    let output = html.join('\n');
    codeBlocks.forEach((block, index) => {
      output = output.replace(`__CODE_BLOCK_${index}__`, block);
    });

    return output;
  }

  private renderInline(text: string): string {
    let line = this.escapeHtml(text);

    line = line.replace(/`([^`]+)`/g, '<code>$1</code>');
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    line = line.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    return line;
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
