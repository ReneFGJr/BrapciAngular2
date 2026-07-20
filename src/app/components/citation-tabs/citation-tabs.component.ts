import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type CitationStyle = 'abnt' | 'apa' | 'vancouver';

type CitationTab = {
  id: CitationStyle;
  label: string;
  i18nKey: string;
};

@Component({
  selector: 'app-citation-tabs',
  imports: [CommonModule, TranslateModule],
  templateUrl: './citation-tabs.component.html',
  styleUrl: './citation-tabs.component.scss',
})
export class CitationTabsComponent {
  @Input({ required: true }) citations: Partial<Record<CitationStyle, string>> = {};

  readonly tabs: CitationTab[] = [
    { id: 'abnt', label: 'ABNT', i18nKey: 'citation.styles.abnt' },
    { id: 'apa', label: 'APA', i18nKey: 'citation.styles.apa' },
    { id: 'vancouver', label: 'Vancouver', i18nKey: 'citation.styles.vancouver' },
  ];

  readonly selectedTab = signal<CitationStyle>('abnt');

  selectTab(tabId: CitationStyle): void {
    this.selectedTab.set(tabId);
  }

  getTabContent(tabId: CitationStyle): string {
    return this.citations[tabId] ?? '';
  }

  getRenderedContent(tabId: CitationStyle): string {
    return this.getTabContent(tabId).replace(/\r?\n/g, '<br>');
  }

  hasContent(tabId: CitationStyle): boolean {
    return Boolean(this.citations[tabId]?.trim());
  }

  getVisibleTabs(): CitationTab[] {
    return this.tabs.filter((tab) => this.hasContent(tab.id));
  }

  shouldRenderHtml(tabId: CitationStyle): boolean {
    const content = this.getTabContent(tabId);
    return /<[^>]+>/.test(content) || content.includes('\n') || content.includes('\r');
  }

  private getClipboardText(tabId: CitationStyle): string {
    const content = this.getTabContent(tabId);
    const normalized = content.replace(/<br\s*\/?>/gi, '\n');

    if (!/<[^>]+>/.test(normalized)) {
      return normalized;
    }

    const element = document.createElement('div');
    element.innerHTML = normalized;
    return element.textContent?.trim() ?? '';
  }

  copyToClipboard(tabId: CitationStyle): void {
    const text = this.getClipboardText(tabId);
    if (text) {
      navigator.clipboard.writeText(text).catch((err) => {
        console.error('Failed to copy citation:', err);
      });
    }
  }
}
