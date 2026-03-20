import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

type TagPoint = {
  label: string;
  value: number;
  sizePx: number;
};

@Component({
  selector: 'app-tag-cloud',
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="tag-cloud mt-3" aria-label="Nuvem de tags do autor">
      <h3 class="h6 mb-2">{{ 'author.tags.title' | translate }}</h3>

      @if (hasData()) {
        <div class="tag-cloud__list" role="list">
          @for (tag of tags(); track tag.label) {
            <span
              class="tag-cloud__item"
              role="listitem"
              [style.font-size.px]="tag.sizePx"
              [attr.title]="tag.label + ': ' + tag.value"
            >
              {{ tag.label }}
            </span>
          }
        </div>
      } @else {
        <p class="mb-0 text-muted">{{ 'author.tags.noData' | translate }}</p>
      }
    </section>
  `,
  styles: [
    `
      .tag-cloud {
        background: var(--theme-card-bg);
        border: 1px solid var(--theme-line);
        border-radius: 0.7rem;
        padding: 0.75rem;
      }

      .tag-cloud__list {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem 0.6rem;
      }

      .tag-cloud__item {
        background: rgb(255 255 255 / 30%);
        border: 1px solid var(--theme-line);
        border-radius: 999px;
        color: var(--theme-link);
        font-weight: 600;
        line-height: 1;
        padding: 0.35rem 0.6rem;
      }
    `
  ]
})
export class TagCloudComponent {
  @Input() set dataTag(value: unknown) {
    this._dataTag.set(value);
  }

  private readonly _dataTag = signal<unknown>(null);

  readonly tags = computed(() => {
    const parsed = this.parseDataTag(this._dataTag());
    if (parsed.length === 0) {
      return [] as TagPoint[];
    }

    const maxValue = Math.max(...parsed.map((tag) => tag.value));
    const minValue = Math.min(...parsed.map((tag) => tag.value));
    const spread = Math.max(maxValue - minValue, 1);

    return parsed
      .map((tag) => {
        const ratio = (tag.value - minValue) / spread;
        return {
          ...tag,
          sizePx: 12 + ratio * 18
        };
      })
      .sort((a, b) => b.value - a.value);
  });

  readonly hasData = computed(() => this.tags().length > 0);

  private parseDataTag(value: unknown): Array<{ label: string; value: number }> {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value
        .map((item, index) => {
          if (typeof item === 'string') {
            const trimmed = item.trim();
            return trimmed ? { label: trimmed, value: 1 } : null;
          }

          if (!item || typeof item !== 'object') {
            return null;
          }

          const obj = item as Record<string, unknown>;
          const labelCandidate =
            obj['tag'] ?? obj['label'] ?? obj['name'] ?? obj['term'] ?? obj['keyword'] ?? `tag ${index + 1}`;
          const valueCandidate = obj['value'] ?? obj['count'] ?? obj['freq'] ?? obj['total'] ?? obj['weight'] ?? 1;

          const label = String(labelCandidate).trim();
          const numericValue = Number(valueCandidate);

          if (!label || !Number.isFinite(numericValue) || numericValue <= 0) {
            return null;
          }

          return {
            label,
            value: numericValue
          };
        })
        .filter((item): item is { label: string; value: number } => item !== null);
    }

    if (typeof value === 'object') {
      const points: Array<{ label: string; value: number }> = [];

      for (const [label, rawValue] of Object.entries(value as Record<string, unknown>)) {
        const numericValue = Number(rawValue);
        if (label.trim() && Number.isFinite(numericValue) && numericValue > 0) {
          points.push({ label: label.trim(), value: numericValue });
        }
      }

      return points;
    }

    return [];
  }
}
