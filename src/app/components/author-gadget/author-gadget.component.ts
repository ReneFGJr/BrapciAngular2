import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorWorksComponent, AuthorWorksGroup } from '../author-works/author-works.component';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';

import type { Coauthor } from '../../core/models/coauthor.model';
import type { NetworkGraph } from '../../core/models/network.model';

type AuthorMetric = {
  label: string;
  value: string;
};

type AuthorLink = {
  type: 'lattes' | 'orcid' | 'openalex' | 'googlescholar';
  icon: string;
  label: string;
  url: string;
};

@Component({
  selector: 'app-author-gadget',
  imports: [CommonModule, TranslateModule, BarChartComponent, AuthorWorksComponent],
  templateUrl: './author-gadget.component.html',
  styleUrl: './author-gadget.component.scss'
})
export class AuthorGadgetComponent {
  readonly rangeOptions = [5, 10, 15, 20] as const;
  readonly selectedRange = signal<number | 'all'>('all');

  @Input({ required: true }) name = '-';
  @Input({ required: true }) nameAbnt = '-';
  @Input({ required: true }) authorId = '-';
  @Input({ required: true }) metrics: AuthorMetric[] = [];
  @Input() chartPoints: BarChartPoint[] = [];
  @Input() worksGroups: AuthorWorksGroup[] = [];
  @Input() dataJour: unknown = null;
  @Input() photoUrl = '';
  @Input() authorLinks: AuthorLink[] = [];
  @Input() coauthors: Coauthor[] = [];
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };

  readonly filteredChartPoints = computed(() => {
    const range = this.selectedRange();
    const points = [...this.chartPoints].sort((a, b) => this.parseYear(a.label) - this.parseYear(b.label));

    if (range === 'all') {
      return points;
    }

    return points.slice(-range);
  });

  readonly chartTitle = computed(() => {
    const range = this.selectedRange();
    if (range === 'all') {
      return 'Producao total por ano';
    }

    return `Producao dos ultimos ${range} anos`;
  });

  setRange(value: number | 'all'): void {
    this.selectedRange.set(value);
  }

  private parseYear(label: string): number {
    const parsed = Number.parseInt(label, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
