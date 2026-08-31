import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';

type JsonRecord = Record<string, unknown>;

type TableRow = {
  label: string;
  value: number | string;
};

type TableSection = {
  key: string;
  titleKey: string;
  rows: TableRow[];
};

type NetworkMetric = {
  key: string;
  labelKey: string;
  value: number | string;
};

type NetworkAuthor = {
  author: string;
  degree: number | string;
  weightedDegree: number | string;
  betweenness: number | string;
  closeness: number | string;
  eigenvector: number | string;
  community: number | string;
};

@Component({
  selector: 'app-painel-analysis',
  standalone: true,
  imports: [CommonModule, BarChartComponent, TranslateModule],
  templateUrl: './painel-analysis.component.html',
  styleUrl: './painel-analysis.component.scss',
})
export class PainelAnalysisComponent {
  private readonly dataSignal = signal<unknown>(null);

  @Input({ required: true }) set data(value: unknown) {
    this.dataSignal.set(value);
  }

  readonly yearsChartPoints = computed<BarChartPoint[]>(() => {
    const section = this.getSection(this.dataSignal(), 'YEARS');
    const pairs = this.normalizeSectionToPairs(section)
      .filter((item) => Number(item.value) > 0)
      .sort((a, b) => Number(a.label) - Number(b.label));

    return pairs.map((item) => ({
      label: item.label,
      segments: [
        {
          key: 'years',
          label: 'Produção',
          value: Number(item.value),
          color: '#1f77b4',
        },
      ],
    }));
  });

  readonly networkMetrics = computed<NetworkMetric[]>(() => {
    const network = this.asRecord(this.getSection(this.dataSignal(), 'NETWORK'));
    const summary = this.asRecord(this.getSection(network, 'network'));
    const specs = [
      { key: 'nodes', labelKey: 'painelAnalysis.network.metrics.nodes' },
      { key: 'edges', labelKey: 'painelAnalysis.network.metrics.edges' },
      { key: 'density', labelKey: 'painelAnalysis.network.metrics.density' },
      { key: 'modularity', labelKey: 'painelAnalysis.network.metrics.modularity' },
    ] as const;

    return specs
      .map((spec) => ({
        key: spec.key,
        labelKey: spec.labelKey,
        value: this.toDisplayValue(this.getSection(summary, spec.key)),
      }))
      .filter((metric) => metric.value !== '-');
  });

  readonly networkAuthors = computed<NetworkAuthor[]>(() => {
    const network = this.asRecord(this.getSection(this.dataSignal(), 'NETWORK'));
    const authors = this.getSection(network, 'authors');

    if (!Array.isArray(authors)) {
      return [];
    }

    return authors
      .map((item) => {
        const author = this.asRecord(item);
        const name = this.pickText(author, ['author', 'name', 'label']);
        if (!name) {
          return null;
        }

        return {
          author: name,
          degree: this.toDisplayValue(this.getSection(author, 'degree')),
          weightedDegree: this.toDisplayValue(this.getSection(author, 'weighted_degree')),
          betweenness: this.toDisplayValue(this.getSection(author, 'betweenness')),
          closeness: this.toDisplayValue(this.getSection(author, 'closeness')),
          eigenvector: this.toDisplayValue(this.getSection(author, 'eigenvector')),
          community: this.toDisplayValue(this.getSection(author, 'community')),
        };
      })
      .filter((author): author is NetworkAuthor => author !== null)
      .sort((a, b) => {
        const weightedDifference = Number(b.weightedDegree) - Number(a.weightedDegree);
        return weightedDifference || a.author.localeCompare(b.author, 'pt-BR', { sensitivity: 'base' });
      });
  });

  readonly tableSections = computed<TableSection[]>(() => {
    const root = this.dataSignal();
    const specs = [
      { key: 'AUTHORS', titleKey: 'painelAnalysis.sections.authors' },
      { key: 'SUBJECTS', titleKey: 'painelAnalysis.sections.subjects' },
      { key: 'SESSION', titleKey: 'painelAnalysis.sections.session' },
      { key: 'SESSION_SUB', titleKey: 'painelAnalysis.sections.sessionSub' },
      { key: 'PUBLICATIONS', titleKey: 'painelAnalysis.sections.publications' },
      { key: 'TYPES', titleKey: 'painelAnalysis.sections.types' },
    ] as const;

    return specs.map((spec) => {
      const section = this.getSection(root, spec.key);
      const rows = this.normalizeSectionToPairs(section)
        .sort((a, b) => {
          const aNum = this.toNumber(a.value);
          const bNum = this.toNumber(b.value);
          if (aNum !== null && bNum !== null) {
            return bNum - aNum;
          }

          return String(a.value).localeCompare(String(b.value), 'pt-BR', { sensitivity: 'base' });
        })
        .map((item) => ({ label: item.label, value: item.value }));

      return {
        key: spec.key,
        titleKey: spec.titleKey,
        rows,
      };
    });
  });

  exportSectionCsv(section: TableSection): void {
    if (!section.rows.length || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const header = ['Item', 'Valor'];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(','),
      ...section.rows.map((row) =>
        [this.escapeCsv(row.label), this.escapeCsv(String(row.value))].join(','),
      ),
    ];

    const csvContent = lines.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${this.toFileName(section.key)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  exportYearsCsv(): void {
    const points = this.yearsChartPoints();
    if (!points.length || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const header = ['Ano', 'Produção'];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(','),
      ...points.map((point) => {
        const total = point.segments.reduce((sum, segment) => sum + segment.value, 0);
        return [this.escapeCsv(point.label), this.escapeCsv(String(total))].join(',');
      }),
    ];

    const csvContent = lines.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'producao-por-ano.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  exportNetworkAuthorsCsv(): void {
    const authors = this.networkAuthors();
    if (!authors.length || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const header = [
      'Autor',
      'Grau',
      'Grau ponderado',
      'Intermediação',
      'Proximidade',
      'Autovetor',
      'Comunidade',
    ];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(','),
      ...authors.map((author) =>
        [
          author.author,
          author.degree,
          author.weightedDegree,
          author.betweenness,
          author.closeness,
          author.eigenvector,
          author.community,
        ]
          .map((cell) => this.escapeCsv(String(cell)))
          .join(','),
      ),
    ];

    this.downloadCsv(lines.join('\n'), 'rede-de-autores.csv');
  }

  private getSection(source: unknown, expectedKey: string): unknown {
    if (!source || typeof source !== 'object') {
      return null;
    }

    const record = source as JsonRecord;
    const wanted = expectedKey.toLowerCase();

    for (const [key, value] of Object.entries(record)) {
      if (key.toLowerCase() === wanted) {
        return value;
      }
    }

    return null;
  }

  private asRecord(value: unknown): JsonRecord {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as JsonRecord) : {};
  }

  private toDisplayValue(value: unknown): number | string {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : value.trim();
    }

    return '-';
  }

  private downloadCsv(content: string, fileName: string): void {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  private normalizeSectionToPairs(section: unknown): Array<{ label: string; value: number | string }> {
    if (!section) {
      return [];
    }

    if (Array.isArray(section)) {
      const rows = section
        .map((item) => this.normalizeArrayItem(item))
        .filter((item): item is { label: string; value: number | string } => item !== null);

      if (rows.length > 0) {
        return rows;
      }

      const counts = new Map<string, number>();
      for (const item of section) {
        if (typeof item === 'string' && item.trim()) {
          const key = item.trim();
          counts.set(key, (counts.get(key) ?? 0) + 1);
        }
      }

      return [...counts.entries()].map(([label, value]) => ({ label, value }));
    }

    if (typeof section === 'object') {
      return Object.entries(section as JsonRecord)
        .map(([label, rawValue]) => {
          if (typeof rawValue === 'number' && Number.isFinite(rawValue)) {
            return { label, value: rawValue };
          }

          if (typeof rawValue === 'string' && rawValue.trim()) {
            const parsed = Number(rawValue);
            return { label, value: Number.isFinite(parsed) ? parsed : rawValue.trim() };
          }

          if (rawValue && typeof rawValue === 'object') {
            const normalized = this.normalizeArrayItem(rawValue);
            if (normalized) {
              return normalized;
            }
          }

          return null;
        })
        .filter((item): item is { label: string; value: number | string } => item !== null);
    }

    return [];
  }

  private normalizeArrayItem(item: unknown): { label: string; value: number | string } | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const rec = item as JsonRecord;

    const label = this.pickText(rec, ['label', 'name', 'key', 'title', 'author', 'subject', 'session', 'type']);
    const value = this.pickValue(rec, ['count', 'value', 'total', 'n', 'qty', 'qtd']);

    if (!label) {
      return null;
    }

    return {
      label,
      value: value ?? '-',
    };
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    const lowerMap = new Map<string, unknown>(Object.entries(record).map(([k, v]) => [k.toLowerCase(), v]));

    for (const key of keys) {
      const value = lowerMap.get(key.toLowerCase());
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  private pickValue(record: JsonRecord, keys: string[]): number | string | null {
    const lowerMap = new Map<string, unknown>(Object.entries(record).map(([k, v]) => [k.toLowerCase(), v]));

    for (const key of keys) {
      const value = lowerMap.get(key.toLowerCase());
      if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
      }

      if (typeof value === 'string' && value.trim()) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : value.trim();
      }
    }

    return null;
  }

  private toNumber(value: number | string): number | null {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    }

    return null;
  }

  private escapeCsv(value: string): string {
    const escaped = value.replace(/"/g, '""');
    return `"${escaped}"`;
  }

  private toFileName(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'export';
  }
}
