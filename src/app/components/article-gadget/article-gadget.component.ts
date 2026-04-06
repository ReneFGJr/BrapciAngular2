import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthorWorksComponent, AuthorWorksGroup } from '../author-works/author-works.component';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';

type JsonRecord = Record<string, unknown>;

type ArticleMetric = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-article-gadget',
  imports: [CommonModule, BarChartComponent, TagCloudComponent, AuthorWorksComponent],
  templateUrl: './article-gadget.component.html',
  styleUrl: './article-gadget.component.scss'
})
export class ArticleGadgetComponent {
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: ArticleMetric[] = [];
  @Input() chartPoints: BarChartPoint[] = [];
  @Input() worksGroups: AuthorWorksGroup[] = [];
  @Input() dataJour: unknown = null;
  @Input() dataTag: unknown = null;

  field(keys: string[]): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '-';
  }

  listField(keys: string[]): string[] {
    const record = this.asRecord(this.data);
    if (!record) {
      return [];
    }

    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        const items = value
          .map((item) => String(item).trim())
          .filter((item) => item.length > 0);

        if (items.length > 0) {
          return items;
        }
      }

      if (typeof value === 'string' && value.trim()) {
        return value
          .split(';')
          .map((item) => item.trim())
          .filter((item) => item.length > 0);
      }
    }

    return [];
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }
}
