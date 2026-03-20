import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CoauthorsListComponent } from '../coauthors-list/coauthors-list.component';
import { NetworkGraph3dComponent } from '../network-graph-3d/network-graph-3d.component';
import type { Coauthor } from '../../core/models/coauthor.model';
import type { NetworkGraph } from '../../core/models/network.model';

export type AuthorWorksGroup = {
  key: 'Article' | 'Proceeding' | 'BookChapter' | 'Book';
  label: string;
  items: string[];
};

export type AuthorContentTab = {
  id: 'works' | 'coauthors' | 'network';
  label: string;
  type: 'works' | 'coauthors' | 'network';
  data?: AuthorWorksGroup[] | Coauthor[] | NetworkGraph;
};

@Component({
  selector: 'app-author-works',
  imports: [CommonModule, TranslateModule, CoauthorsListComponent, NetworkGraph3dComponent],
  templateUrl: './author-works.component.html',
  styleUrl: './author-works.component.scss'
})
export class AuthorWorksComponent {
  @Input({ required: true }) groups: AuthorWorksGroup[] = [];
  @Input() coauthors: Coauthor[] = [];
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };

  readonly selectedTab = signal<'works' | 'coauthors' | 'network'>('works');

  readonly contentTabs = computed(() => {
    const tabs: AuthorContentTab[] = [
      {
        id: 'works',
        label: 'author.bibliographic',
        type: 'works',
        data: this.groups
      },
      {
        id: 'coauthors',
        label: 'author.coauthors.label',
        type: 'coauthors',
        data: this.coauthors
      },
      {
        id: 'network',
        label: 'author.network.label',
        type: 'network',
        data: this.networkData
      }
    ];

    return tabs;
  });

  readonly totalWorks = computed(() => this.groups.reduce((sum, group) => sum + group.items.length, 0));

  readonly activeTab = computed(() => this.contentTabs().find((t) => t.id === this.selectedTab()));

  readonly worksTab = computed(() => {
    return this.contentTabs().find((t) => t.type === 'works') as AuthorContentTab | undefined;
  });

  readonly worksGroups = computed(() => {
    const worksTab = this.worksTab();
    return (worksTab?.data as AuthorWorksGroup[]) ?? [];
  });

  readonly selectedWorkTab = signal<'Article' | 'Proceeding' | 'BookChapter' | 'Book'>('Article');

  readonly activeWorkGroup = computed(() => {
    return this.worksGroups().find((g) => g.key === this.selectedWorkTab()) ?? null;
  });

  setTab(tabId: string): void {
    if (tabId === 'works' || tabId === 'coauthors' || tabId === 'network') {
      this.selectedTab.set(tabId);
    }
  }

  setWorkTab(key: 'Article' | 'Proceeding' | 'BookChapter' | 'Book'): void {
    this.selectedWorkTab.set(key);
  }
}
