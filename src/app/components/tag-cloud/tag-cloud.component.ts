import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, PLATFORM_ID, ViewChild, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import Highcharts from 'highcharts';

type TagDataPoint = {
  label: string;
  value: number;
};

@Component({
  selector: 'app-tag-cloud',
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="tag-cloud mt-3" aria-label="Nuvem de tags do autor">
      <h3 class="h6 mb-2">{{ 'author.tags.title' | translate }}</h3>

      @if (hasData()) {
        <div class="tag-cloud__chart-wrap">
          <div #chartHost class="tag-cloud__chart" role="img" [attr.aria-label]="'author.tags.title' | translate"></div>
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

      .tag-cloud__chart-wrap {
        background:
          radial-gradient(circle at 20% 10%, rgb(255 216 173 / 15%), transparent 45%),
          radial-gradient(circle at 75% 85%, rgb(255 191 132 / 12%), transparent 40%),
          linear-gradient(180deg, rgb(255 255 255 / 18%), rgb(255 255 255 / 4%));
        border: 1px solid var(--theme-line);
        border-radius: 0.7rem;
        height: 200px;
        overflow: hidden;
        padding: 0.2rem;
        width: 100%;
      }

      .tag-cloud__chart {
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class TagCloudComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartHost') private chartHost?: ElementRef<HTMLDivElement>;

  @Input() set dataTag(value: unknown) {
    this._dataTag.set(value);
    void this.renderChart();
  }

  private static wordCloudModuleReady = false;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);

  private readonly _dataTag = signal<unknown>(null);
  private chart?: Highcharts.Chart;
  private viewReady = false;

  readonly tags = computed(() => {
    const parsed = this.parseDataTag(this._dataTag());
    if (parsed.length === 0) {
      return [] as TagDataPoint[];
    }

    return parsed.sort((a, b) => b.value - a.value);
  });

  readonly hasData = computed(() => this.tags().length > 0);

  ngAfterViewInit(): void {
    this.viewReady = true;
    void this.renderChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private async ensureWordCloudModule(): Promise<void> {
    if (TagCloudComponent.wordCloudModuleReady) {
      return;
    }

    const module = await import('highcharts/modules/wordcloud');
    const init = module.default as unknown as ((hc: typeof Highcharts) => void) | undefined;
    if (typeof init === 'function') {
      init(Highcharts);
    }

    TagCloudComponent.wordCloudModuleReady = true;
  }

  private async renderChart(): Promise<void> {
    if (!this.browser || !this.viewReady || !this.chartHost?.nativeElement) {
      return;
    }

    const points = this.tags();
    if (points.length === 0) {
      this.chart?.destroy();
      this.chart = undefined;
      return;
    }

    await this.ensureWordCloudModule();

    this.chart?.destroy();
    this.chart = Highcharts.chart(this.chartHost.nativeElement, {
      chart: {
        backgroundColor: 'transparent',
        height: 200,
        margin: [0, 0, 0, 0],
        spacing: [0, 0, 0, 0]
      },
      title: {
        text: undefined
      },
      credits: {
        enabled: false
      },
      accessibility: {
        enabled: false
      },
      colors: ['#e76f51', '#f4a261', '#2a9d8f', '#e9c46a', '#264653', '#9b5de5', '#f15bb5', '#00bbf9', '#00f5d4', '#ff006e'],
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}</b><br/>Frequencia: {point.weight}'
      },
      series: [
        {
          type: 'wordcloud',
          data: points.map((point) => ({
            name: point.label,
            weight: point.value
          })),
          rotation: {
            from: 0,
            orientations: 2,
            to: 90
          },
          spiral: 'rectangular',
          placementStrategy: 'random'
        }
      ]
    });
  }

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
            obj['text'] ?? obj['tag'] ?? obj['label'] ?? obj['name'] ?? obj['term'] ?? obj['keyword'] ?? `tag ${index + 1}`;
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
      const single = value as Record<string, unknown>;
      const singleLabel = single['text'];
      const singleValue = single['value'];

      if (typeof singleLabel === 'string' && singleLabel.trim()) {
        const numericValue = Number(singleValue);
        if (Number.isFinite(numericValue) && numericValue > 0) {
          return [{ label: singleLabel.trim(), value: numericValue }];
        }
      }

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
