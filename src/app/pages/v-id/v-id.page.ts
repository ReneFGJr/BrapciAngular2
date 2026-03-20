import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { AuthorGadgetComponent } from '../../components/author-gadget/author-gadget.component';
import { BarChartPoint } from '../../components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-v-id-page',
  imports: [CommonModule, AuthorGadgetComponent],
  templateUrl: './v-id.page.html',
  styleUrl: './v-id.page.scss'
})
export class VIdPage {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly brapciApiService = inject(BrapciApiService);

  readonly id = signal('');
  readonly loading = signal(true);
  readonly error = signal('');
  readonly response = signal<unknown>(null);

  readonly classe = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['Classe'] ?? data['classe'] ?? data['Class'] ?? data['class'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly isPerson = computed(() => this.classe().toLowerCase() === 'person');

  readonly authorName = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['name'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly authorNameAbnt = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['name_abnt'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly authorId = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return this.id();
    }

    const data = value as Record<string, unknown>;
    const candidate = data['ID'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : this.id();
  });

  readonly variantsCount = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return 0;
    }

    const variants = (value as Record<string, unknown>)['variants'];
    return Array.isArray(variants) ? variants.length : 0;
  });

  readonly worksCount = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return 0;
    }

    const works = (value as Record<string, unknown>)['works'];
    return Array.isArray(works) ? works.length : 0;
  });

  readonly authorMetrics = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [] as Array<{ label: string; value: string }>;
    }

    const data = value as Record<string, unknown>;
    const toValue = (field: string): string => {
      const raw = data[field];
      if (typeof raw === 'number') {
        return raw.toLocaleString('pt-BR');
      }

      if (typeof raw === 'string' && raw.trim()) {
        return raw;
      }

      return '-';
    };

    return [
      { label: 'Visualizacoes', value: toValue('Views') },
      { label: 'Downloads', value: toValue('Download') },
      { label: 'Curtidas', value: toValue('Likes') },
      { label: 'Citacoes', value: toValue('cited') },
      { label: 'Variantes', value: this.variantsCount().toString() },
      { label: 'Trabalhos', value: this.worksCount().toString() }
    ];
  });

  readonly chartYearsBars = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [] as BarChartPoint[];
    }

    const chartYears = (value as Record<string, unknown>)['chart_years'];
    if (!chartYears || typeof chartYears !== 'object') {
      return [] as BarChartPoint[];
    }

    const chartData = chartYears as Record<string, unknown>;
    const labelsRaw = chartData['labels'];
    const datasetsRaw = chartData['data'];

    if (!Array.isArray(labelsRaw) || !datasetsRaw || typeof datasetsRaw !== 'object') {
      return [] as BarChartPoint[];
    }

    const labels = labelsRaw.map((item) => String(item));
    const seriesMap = datasetsRaw as Record<string, unknown>;
    const palette = {
      Article: '#5EA9FF',
      Proceeding: '#4DCCBD',
      BookChapter: '#F4A259',
      Book: '#C084FC'
    } as const;

    const bars = labels.map((label, index) => {
      const segments = Object.entries(palette).map(([key, color]) => {
        const source = seriesMap[key];
        const values = Array.isArray(source) ? source : [];
        const raw = values[index];
        const value = typeof raw === 'number' ? raw : 0;

        return {
          key,
          label: key,
          value,
          color
        };
      });

      return {
        label,
        segments
      };
    });

    return bars.filter((point) => point.segments.reduce((sum, segment) => sum + segment.value, 0) > 0);
  });

  readonly jsonContent = computed(() => JSON.stringify(this.response(), null, 2));

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')?.trim() || ''),
        distinctUntilChanged(),
        tap((id) => {
          this.id.set(id);
          this.loading.set(true);
          this.error.set('');
          this.response.set(null);
        }),
        switchMap((id) => {
          if (!id) {
            return of({ ok: false as const, data: null });
          }

          return this.brapciApiService.getById<unknown>(id).pipe(
            map((data) => ({ ok: true as const, data })),
            catchError(() => of({ ok: false as const, data: null }))
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((result) => {
        if (!result.ok) {
          this.error.set('Nao foi possivel carregar os dados para este ID.');
          this.loading.set(false);
          return;
        }

        this.response.set(result.data);
        this.loading.set(false);
      });
  }
}
