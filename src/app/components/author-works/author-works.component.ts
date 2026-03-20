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

type WorkSubTabKey = AuthorWorksGroup['key'] | 'summary';

type DispersionPoint = {
  x: number;
  y: number;
  label: string;
  radius: number;
};

type PieSlice = {
  label: string;
  value: number;
  percentage: number;
  color: string;
};

type PieArc = PieSlice & {
  d: string;
  labelX: number;
  labelY: number;
  percentText: string;
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
  @Input() dataJour: unknown = null;
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

  readonly selectedWorkTab = signal<WorkSubTabKey>('summary');

  readonly activeWorkGroup = computed(() => {
    const selected = this.selectedWorkTab();
    if (selected === 'summary') {
      return null;
    }

    return this.worksGroups().find((g) => g.key === selected) ?? null;
  });

  readonly dispersionPoints = computed(() => this.parseDataJour(this.dataJour));

  readonly dispersionXRange = computed(() => {
    const points = this.dispersionPoints();
    if (points.length === 0) {
      return { min: 0, max: 1 };
    }

    const xs = points.map((point) => point.x);
    const min = Math.min(...xs);
    const max = Math.max(...xs);
    return min === max ? { min: min - 1, max: max + 1 } : { min, max };
  });

  readonly dispersionYRange = computed(() => {
    const points = this.dispersionPoints();
    if (points.length === 0) {
      return { min: 0, max: 1 };
    }

    const ys = points.map((point) => point.y);
    const min = Math.min(...ys);
    const max = Math.max(...ys);
    return min === max ? { min: 0, max: max + 1 } : { min, max };
  });

  readonly summaryTotals = computed(() => {
    const points = this.dispersionPoints();
    const totalVolume = points.reduce((sum, point) => sum + point.y, 0);
    const uniqueLabels = new Set(points.map((point) => point.label));

    return {
      journals: uniqueLabels.size,
      points: points.length,
      volume: totalVolume
    };
  });

  readonly chartPoints = computed(() => {
    const width = 640;
    const height = 260;
    const paddingX = 42;
    const paddingY = 22;
    const xRange = this.dispersionXRange();
    const yRange = this.dispersionYRange();
    const points = this.dispersionPoints();

    return points.map((point) => {
      const xRatio = (point.x - xRange.min) / (xRange.max - xRange.min);
      const yRatio = (point.y - yRange.min) / (yRange.max - yRange.min);

      return {
        cx: paddingX + xRatio * (width - paddingX * 2),
        cy: height - paddingY - yRatio * (height - paddingY * 2),
        r: point.radius,
        label: point.label,
        x: point.x,
        y: point.y,
        color: this.colorForLabel(point.label)
      };
    });
  });

  readonly summaryRows = computed(() => {
    return [...this.dispersionPoints()]
      .sort((a, b) => b.y - a.y || a.x - b.x)
      .map((point) => ({
        ...point,
        color: this.colorForLabel(point.label)
      }));
  });

  readonly pieSlices = computed(() => {
    const totals = new Map<string, number>();
    for (const point of this.dispersionPoints()) {
      totals.set(point.label, (totals.get(point.label) ?? 0) + point.y);
    }

    const totalVolume = [...totals.values()].reduce((sum, value) => sum + value, 0);
    if (totalVolume <= 0) {
      return [] as PieSlice[];
    }

    const major: PieSlice[] = [];
    let othersValue = 0;

    for (const [label, value] of totals.entries()) {
      const percentage = value / totalVolume;
      if (percentage < 0.02) {
        othersValue += value;
        continue;
      }

      major.push({
        label,
        value,
        percentage,
        color: this.colorForLabel(label)
      });
    }

    const sortedMajor = [...major].sort((a, b) => b.value - a.value);
    const topMajor = sortedMajor.slice(0, 10);

    const trimmedOut = sortedMajor
      .slice(10)
      .reduce((sum, slice) => sum + slice.value, 0);

    othersValue += trimmedOut;

    if (othersValue > 0) {
      topMajor.push({
        label: 'author.summary.others',
        value: othersValue,
        percentage: othersValue / totalVolume,
        color: '#9aa3ad'
      });
    }

    return topMajor;
  });

  readonly pieArcs = computed(() => {
    const slices = this.pieSlices();
    if (slices.length === 0) {
      return [] as PieArc[];
    }

    const centerX = 100;
    const centerY = 100;
    const radius = 84;
    const labelRadius = 52;
    let currentAngle = -90;

    return slices.map((slice) => {
      const sweep = slice.percentage * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sweep;
      currentAngle = endAngle;

      const start = this.polarToCartesian(centerX, centerY, radius, endAngle);
      const end = this.polarToCartesian(centerX, centerY, radius, startAngle);
      const largeArc = sweep > 180 ? 1 : 0;
      const midAngle = startAngle + sweep / 2;
      const labelPoint = this.polarToCartesian(centerX, centerY, labelRadius, midAngle);

      return {
        ...slice,
        d: `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} Z`,
        labelX: labelPoint.x,
        labelY: labelPoint.y,
        percentText: `${(slice.percentage * 100).toFixed(1)}%`
      };
    });
  });

  setTab(tabId: string): void {
    if (tabId === 'works' || tabId === 'coauthors' || tabId === 'network') {
      this.selectedTab.set(tabId);
    }
  }

  setWorkTab(key: WorkSubTabKey): void {
    this.selectedWorkTab.set(key);
  }

  private parseDataJour(value: unknown): DispersionPoint[] {
    const points = this.extractRawDataJourPoints(value)
      .map((item) => ({
        ...item,
        x: Number(item.x),
        y: Number(item.y)
      }))
      .filter((item) => Number.isFinite(item.x) && Number.isFinite(item.y) && item.y > 0);

    if (points.length === 0) {
      return [];
    }

    const maxY = Math.max(...points.map((point) => point.y));

    return points.map((point) => ({
      ...point,
      radius: 3 + (maxY > 0 ? (point.y / maxY) * 5 : 0)
    }));
  }

  private extractRawDataJourPoints(value: unknown): Array<{ x: number; y: number; label: string }> {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value
        .map((item, index) => {
          if (!item || typeof item !== 'object') {
            return null;
          }

          const record = item as Record<string, unknown>;
          const xCandidate = record['x'] ?? record['year'] ?? record['ano'] ?? record['Year'] ?? record['Ano'];
          const yCandidate =
            record['y'] ??
            record['count'] ??
            record['total'] ??
            record['qtd'] ??
            record['value'] ??
            record['freq'];
          const labelCandidate =
            record['label'] ?? record['journal'] ?? record['periodico'] ?? record['source'] ?? `item ${index + 1}`;

          return {
            x: Number(xCandidate),
            y: Number(yCandidate),
            label: String(labelCandidate)
          };
        })
        .filter((item): item is { x: number; y: number; label: string } => item !== null);
    }

    if (typeof value === 'object') {
      const obj = value as Record<string, unknown>;

      const labels = Array.isArray(obj['labels']) ? (obj['labels'] as unknown[]) : [];
      const series = Array.isArray(obj['data']) ? (obj['data'] as unknown[]) : [];

      if (labels.length > 0 && series.length > 0) {
        return series.map((valueAtIndex, index) => {
          const label = String(labels[index] ?? `item ${index + 1}`);
          const maybeYear = Number(label);

          return {
            x: Number.isFinite(maybeYear) ? maybeYear : index + 1,
            y: Number(valueAtIndex),
            label
          };
        });
      }

      const points: Array<{ x: number; y: number; label: string }> = [];
      for (const [key, rawValue] of Object.entries(obj)) {
        const maybeX = Number(key);
        const maybeY = Number(rawValue);
        if (Number.isFinite(maybeX) && Number.isFinite(maybeY)) {
          points.push({ x: maybeX, y: maybeY, label: key });
        }
      }

      return points;
    }

    return [];
  }

  private colorForLabel(label: string): string {
    const palette = ['#c24d00', '#d66a1a', '#e9872f', '#f2a648', '#f9bf6b', '#ffcf86', '#ffdeab'];
    const hash = [...label].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return palette[hash % palette.length];
  }

  private polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): { x: number; y: number } {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }
}
