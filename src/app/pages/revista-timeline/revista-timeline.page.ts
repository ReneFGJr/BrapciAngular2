import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

type TimelineJournal = {
  name: string;
  ID: string;
  [key: string]: any;
};

type TimelineYear = {
  year: number;
  journals: TimelineJournal[];
};

@Component({
  selector: 'app-revista-timeline-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './revista-timeline.page.html',
  styleUrl: './revista-timeline.page.scss',
  standalone: true
})
export class RevistaTimelinePage {
  private readonly brapciApiService = inject(BrapciApiService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly timelineData = signal<TimelineYear[]>([]);
  readonly filteredTimeline = computed(() => this.timelineData());

  readonly yearsRange = computed(() => {
    const timeline = this.filteredTimeline();
    if (timeline.length === 0) return { min: 0, max: 0 };

    return {
      min: timeline[timeline.length - 1].year,
      max: timeline[0].year,
    };
  });

  readonly hasResults = computed(() => this.timelineData().length > 0);

  constructor() {
    this.loadTimeline();
  }

  loadTimeline(): void {
    this.loading.set(true);
    this.error.set('');

    this.brapciApiService.get<TimelineYear[]>('brapci/timeline/2').subscribe({
      next: (response) => {
        const items = this.parseTimelineResponse(response);
        // Ordenar descendente (anos mais recentes primeiro)
        items.sort((a, b) => b.year - a.year);
        this.timelineData.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.timelineData.set([]);
        this.error.set('Não foi possível carregar o timeline de revistas. Tente novamente mais tarde.');
        this.loading.set(false);
      },
    });
  }

  private parseTimelineResponse(response: any): TimelineYear[] {
    // Se a resposta já for um array de TimelineYear, retornar como está
    if (Array.isArray(response)) {
      return response.filter(
        (item) => item && typeof item === 'object' && 'year' in item && 'journals' in item
      );
    }

    // Se for um objeto com propriedade data
    if (response && typeof response === 'object') {
      if (Array.isArray(response.data)) {
        return response.data;
      }
      if (Array.isArray(response.items)) {
        return response.items;
      }
      if (Array.isArray(response.timeline)) {
        return response.timeline;
      }
    }

    return [];
  }

  getJournalsForYear(year: number): TimelineJournal[] {
    const yearData = this.timelineData().find((item) => item.year === year);
    return yearData?.journals || [];
  }
}
