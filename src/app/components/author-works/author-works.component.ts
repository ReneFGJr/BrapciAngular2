import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export type AuthorWorksGroup = {
  key: 'Article' | 'Proceeding' | 'BookChapter' | 'Book';
  label: string;
  items: string[];
};

@Component({
  selector: 'app-author-works',
  imports: [CommonModule, TranslateModule],
  templateUrl: './author-works.component.html',
  styleUrl: './author-works.component.scss'
})
export class AuthorWorksComponent {
  @Input({ required: true }) groups: AuthorWorksGroup[] = [];

  readonly selectedTab = signal<'Article' | 'Proceeding' | 'BookChapter' | 'Book'>('Article');

  readonly totalWorks = computed(() => this.groups.reduce((sum, group) => sum + group.items.length, 0));

  readonly activeGroup = computed(() => this.groups.find((g) => g.key === this.selectedTab()) ?? null);

  setTab(key: 'Article' | 'Proceeding' | 'BookChapter' | 'Book'): void {
    this.selectedTab.set(key);
  }
}
