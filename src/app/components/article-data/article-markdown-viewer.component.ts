import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article-markdown-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-markdown-viewer.component.html',
  styleUrl: './article-markdown-viewer.component.scss',
})
export class ArticleMarkdownViewerComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input()
  set markdown(value: string) {
    this.markdownText.set(typeof value === 'string' ? value : '');
  }

  @Input() articleId: string | number | null = null;

  @Output() readonly processFullText = new EventEmitter<void>();

  readonly markdownText = signal('');
  readonly panelOpen = signal(false);
  readonly iframeUrl = computed(() => {
    const rawId = this.articleId;
    const id = rawId === null || rawId === undefined ? '' : String(rawId).trim();
    return id ? `https://cip.brapci.inf.br/tools/nlp/fulltext/${id}` : '';
  });
  readonly iframeSafeUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.iframeUrl();
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });
  readonly renderedHtml = computed(() => this.renderMarkdown(this.markdownText()));

  onProcessFullText(): void {
    this.panelOpen.set(true);
    this.processFullText.emit();
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }

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
