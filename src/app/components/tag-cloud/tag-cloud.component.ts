import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, PLATFORM_ID, ViewChild, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as d3 from 'd3';

type TagDataPoint = {
  label: string;
  displayLabel: string;
  value: number;
};

@Component({
  selector: 'app-tag-cloud',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="tag-cloud mt-3" [attr.aria-label]="titleKey | translate">
      <h3 class="h6 mb-2">{{ titleKey | translate }}</h3>

      @if (hasData()) {
        <div class="tag-cloud__chart-wrap">
          <div #chartHost class="tag-cloud__chart" role="img" [attr.aria-label]="titleKey | translate"></div>
        </div>
      } @else {
        <p class="mb-0 text-muted">{{ noDataKey | translate }}</p>
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
        background: transparent;
        border: 1px solid var(--theme-line);
        border-radius: 0.7rem;
        height: 300px;
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
  @Input() titleKey = 'author.tags.title';
  @Input() noDataKey = 'author.tags.noData';

  @Input() set dataTag(value: unknown) {
    this._dataTag.set(value);
    this.renderCloud();
  }

  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);

  private readonly _dataTag = signal<unknown>(null);
  private svg?: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private viewReady = false;

  readonly tags = computed(() => {
    const parsed = this.parseDataTag(this._dataTag()).map((term) => ({
      ...term,
      displayLabel: term.label.length > 30 ? `${term.label.slice(0, 30)}...` : term.label
    }));
    if (parsed.length === 0) {
      return [] as TagDataPoint[];
    }

    const aboveOneCount = parsed.filter((term) => term.value > 1).length;
    const filtered = aboveOneCount > 20 ? parsed.filter((term) => term.value >= 2) : parsed;

    return filtered.sort((a, b) => b.value - a.value);
  });

  readonly hasData = computed(() => this.tags().length > 0);



  ngAfterViewInit(): void {
    this.viewReady = true;
    this.renderCloud();
  }

  ngOnDestroy(): void {
    this.svg?.remove();
  }

  private renderCloud(): void {
    if (!this.browser || !this.viewReady || !this.chartHost?.nativeElement) {
      return;
    }

    const points = this.tags();
    const host = this.chartHost.nativeElement;

    if (points.length === 0) {
      host.innerHTML = '';
      this.svg = undefined;
      return;
    }

    const width = Math.max(host.clientWidth, 220);
    const height = 300;
    const palette = ['#e76f51', '#f4a261', '#2a9d8f', '#e9c46a', '#264653', '#9b5de5', '#f15bb5', '#00bbf9', '#00f5d4', '#ff006e'];
    const maxValue = d3.max(points, (d) => d.value) ?? 1;
    const minValue = d3.min(points, (d) => d.value) ?? 1;
    const fontScale = d3.scaleLinear().domain([minValue, maxValue]).range([8, 60]);

    const nodes = points.map((point, index) => {
      const fontSize = fontScale(point.value);
      const rotate = index % 4 === 0 ? 90 : 0;
      const textWidth = point.displayLabel.length * fontSize * 0.56;
      const textHeight = fontSize * 1.05;
      const boxWidth = rotate === 90 ? textHeight : textWidth;
      const boxHeight = rotate === 90 ? textWidth : textHeight;

      return {
        ...point,
        fontSize,
        rotate,
        boxWidth,
        boxHeight,
        hidden: false,
        color: palette[index % palette.length],
        x: width / 2,
        y: height / 2
      };
    });

    const placed: Array<{ x: number; y: number; boxWidth: number; boxHeight: number }> = [];
    const margin = 6;

    const overlaps = (x: number, y: number, w: number, h: number): boolean => {
      const left = x - w / 2;
      const right = x + w / 2;
      const top = y - h / 2;
      const bottom = y + h / 2;

      if (left < margin || right > width - margin || top < margin || bottom > height - margin) {
        return true;
      }

      return placed.some((p) => {
        const pLeft = p.x - p.boxWidth / 2;
        const pRight = p.x + p.boxWidth / 2;
        const pTop = p.y - p.boxHeight / 2;
        const pBottom = p.y + p.boxHeight / 2;

        return !(right < pLeft || left > pRight || bottom < pTop || top > pBottom);
      });
    };

    const targetAt = (index: number): { x: number; y: number } => {
      // Use a low-discrepancy distribution to spread targets over the whole canvas.
      const phi = 0.61803398875;
      const fracX = (index * phi) % 1;
      const fracY = (index * phi * phi) % 1;
      return {
        x: margin + fracX * (width - margin * 2),
        y: margin + fracY * (height - margin * 2)
      };
    };

    const boxFor = (label: string, fontSize: number, rotate: 0 | 90): { boxWidth: number; boxHeight: number } => {
      const textWidth = label.length * fontSize * 0.56;
      const textHeight = fontSize * 1.05;
      return rotate === 90
        ? { boxWidth: textHeight, boxHeight: textWidth }
        : { boxWidth: textWidth, boxHeight: textHeight };
    };

    const tryPlaceNode = (node: typeof nodes[number], target: { x: number; y: number }): boolean => {
      for (let step = 0; step < 420; step += 1) {
        const angle = step * 0.42;
        const radius = 0.7 * Math.sqrt(step) * 3.2;
        const x = target.x + Math.cos(angle) * radius;
        const y = target.y + Math.sin(angle) * radius;

        if (!overlaps(x, y, node.boxWidth, node.boxHeight)) {
          node.x = x;
          node.y = y;
          placed.push({ x, y, boxWidth: node.boxWidth, boxHeight: node.boxHeight });
          return true;
        }
      }

      for (let yy = margin + node.boxHeight / 2; yy <= height - margin - node.boxHeight / 2; yy += 8) {
        for (let xx = margin + node.boxWidth / 2; xx <= width - margin - node.boxWidth / 2; xx += 8) {
          if (!overlaps(xx, yy, node.boxWidth, node.boxHeight)) {
            node.x = xx;
            node.y = yy;
            placed.push({ x: xx, y: yy, boxWidth: node.boxWidth, boxHeight: node.boxHeight });
            return true;
          }
        }
      }

      return false;
    };

    nodes.forEach((node, index) => {
      const target = targetAt(index + 1);
      let placedOk = false;

      const rotations: Array<0 | 90> = node.rotate === 90 ? [90, 0] : [0, 90];
      const baseSize = node.fontSize;
      for (let factor = 1; factor >= 0.7 && !placedOk; factor -= 0.1) {
        for (const rotation of rotations) {
          const fontSize = Math.max(8, baseSize * factor);
          const box = boxFor(node.displayLabel, fontSize, rotation);
          node.fontSize = fontSize;
          node.rotate = rotation;
          node.boxWidth = box.boxWidth;
          node.boxHeight = box.boxHeight;

          if (tryPlaceNode(node, target)) {
            placedOk = true;
            break;
          }
        }
      }

      if (!placedOk) {
        node.hidden = true;
      }
    });

    host.innerHTML = '';

    this.svg = d3
      .select(host)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('role', 'img')
      .attr('aria-label', 'Nuvem de tags');

    const text = this.svg
      .append('g')
      .selectAll('text')
      .data(nodes.filter((node) => !node.hidden))
      .enter()
      .append('text')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-family', "'Raleway', 'Trebuchet MS', sans-serif")
      .attr('font-size', (d) => d.fontSize)
      .attr('font-weight', 600)
      .attr('fill', (d) => d.color)
      .attr('transform', (d) => `rotate(${d.rotate} ${d.x} ${d.y})`)
      .text((d) => d.displayLabel);

    text.append('title').text((d) => `${d.label}: ${d.value}`);
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
