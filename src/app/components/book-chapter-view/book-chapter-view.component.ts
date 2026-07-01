import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticleGadgetComponent } from '../article-gadget/article-gadget.component';

type BookChapterMetric = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-book-chapter-view',
  imports: [CommonModule, ArticleGadgetComponent],
  templateUrl: './book-chapter-view.component.html',
  styleUrl: './book-chapter-view.component.scss',
})
export class BookChapterViewComponent {
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: BookChapterMetric[] = [];
  @Input() dataTag: unknown = null;
}
