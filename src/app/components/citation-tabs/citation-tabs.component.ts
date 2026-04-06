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

  hasContent(tabId: CitationStyle): boolean {
    return Boolean(this.citations[tabId]?.trim());
  }

  getVisibleTabs(): CitationTab[] {
    return this.tabs.filter((tab) => this.hasContent(tab.id));
  }

  // For ABNT, preserve HTML formatting
  isAbntTab(tabId: CitationStyle): boolean {
    return tabId === 'abnt';
  }

  copyToClipboard(tabId: CitationStyle): void {
    const text = this.getTabContent(tabId);
    if (text) {
      navigator.clipboard.writeText(text).catch((err) => {
        console.error('Failed to copy citation:', err);
      });
    }
  }
}
