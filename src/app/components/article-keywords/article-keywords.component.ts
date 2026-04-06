import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type LocalizedKeywords = {
  language: 'pt' | 'es' | 'en' | 'fr' | 'other';
  languageLabel: string;
  keywords: string[];
};

@Component({
  selector: 'app-article-keywords',
  imports: [CommonModule, TranslateModule],
  templateUrl: './article-keywords.component.html',
  styleUrl: './article-keywords.component.scss'
})
export class ArticleKeywordsComponent {
  @Input({ required: true }) keywordsList: LocalizedKeywords[] = [];

  trackByLanguage(index: number, item: LocalizedKeywords): string {
    return item.language;
  }
}
