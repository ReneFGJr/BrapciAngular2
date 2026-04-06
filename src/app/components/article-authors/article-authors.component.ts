import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type CreatorAuthor = {
  name: string;
  id?: string;
};

@Component({
  selector: 'app-article-authors',
  imports: [CommonModule],
  templateUrl: './article-authors.component.html',
  styleUrl: './article-authors.component.scss'
})
export class ArticleAuthorsComponent {
  @Input({ required: true }) authors: CreatorAuthor[] = [];

  getAuthorLink(author: CreatorAuthor): string | null {
    if (!author.id) {
      return null;
    }
    return `/v/${author.id}`;
  }

  hasAnyAuthorWithLink(): boolean {
    return this.authors.some(author => author.id);
  }
}
