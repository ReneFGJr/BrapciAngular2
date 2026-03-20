import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export type BarChartSeriesSegment = {
  key: string;
  label: string;
  value: number;
  color: string;
};

export type BarChartPoint = {
  label: string;
  segments: BarChartSeriesSegment[];
};

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule, TranslateModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() title = 'Grafico';
  @Input() set points(value: BarChartPoint[]) {
    this._points.set(Array.isArray(value) ? value : []);
  }

  private readonly _points = signal<BarChartPoint[]>([]);

  readonly hasData = computed(() => this._points().length > 0);
  readonly legend = computed(() => {
    const map = new Map<string, { label: string; color: string }>();

    for (const point of this._points()) {
      for (const segment of point.segments) {
        if (!map.has(segment.key)) {
          map.set(segment.key, {
            label: segment.label,
            color: segment.color
          });
        }
      }
    }

    return [...map.entries()].map(([key, value]) => ({
      key,
      ...value
    }));
  });
  readonly maxValue = computed(() => {
    const values = this._points().map((point) =>
      point.segments.reduce((sum, segment) => sum + segment.value, 0)
    );

    return values.length ? Math.max(...values) : 0;
  });

  readonly displayPoints = computed(() => {
    const max = this.maxValue();

    return this._points().map((point) => ({
      ...point,
      total: point.segments.reduce((sum, segment) => sum + segment.value, 0),
      height: max > 0 ? Math.max((point.segments.reduce((sum, segment) => sum + segment.value, 0) / max) * 100, 3) : 0,
      stackedSegments: (() => {
        const total = point.segments.reduce((sum, segment) => sum + segment.value, 0);

        return point.segments
          .filter((segment) => segment.value > 0)
          .map((segment) => ({
            ...segment,
            height: total > 0 ? (segment.value / total) * 100 : 0
          }));
      })()
    }));
  });
}
