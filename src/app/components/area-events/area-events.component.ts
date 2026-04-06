import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface AreaEvent {
  id: string;
  redirectId: string;
  redirectUrl: string;
  title: string;
  date: string;
  location: string;
  logo: string | null;
}

@Component({
  selector: 'app-area-events',
  imports: [CommonModule],
  templateUrl: './area-events.component.html',
  styleUrl: './area-events.component.scss'
})
export class AreaEventsComponent {
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly redirectBaseUrl = 'https://cip.brapci.inf.br/api/event/redirect';

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly events = signal<AreaEvent[]>([]);

  constructor() {
    this.loadEvents();
  }

  private loadEvents(): void {
    this.loading.set(true);
    this.error.set(null);

    this.brapciApiService.get<unknown>('event').subscribe({
      next: (response) => {
        const normalizedEvents = this.normalizeResponse(response);
        this.events.set(normalizedEvents);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Nao foi possivel carregar os eventos no momento.');
        this.events.set([]);
        this.loading.set(false);
      }
    });
  }

  private normalizeResponse(response: unknown): AreaEvent[] {
    const source = this.extractArray(response);
    return source
      .map((item) => this.toAreaEvent(item))
      .filter((item): item is AreaEvent => item !== null);
  }

  private extractArray(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (!response || typeof response !== 'object') {
      return [];
    }

    const data = response as JsonRecord;
    const candidates = ['events', 'results', 'items', 'data', 'rows', 'list', 'value'];

    for (const key of candidates) {
      if (Array.isArray(data[key])) {
        return data[key] as unknown[];
      }
    }

    return [];
  }

  private toAreaEvent(item: unknown): AreaEvent | null {
    if (!item || typeof item !== 'object') {
      return null;
    }

    const event = item as JsonRecord;
    const title = this.pickText(event, ['event', 'evento', 'title', 'name', 'jnl_name']);
    const redirectId = this.extractRedirectId(event);

    if (!title || !redirectId) {
      return null;
    }

    return {
      id: this.pickText(event, ['id', 'ID', 'id_event', 'id_jnl']) || redirectId,
      redirectId,
      redirectUrl: `${this.redirectBaseUrl}/${redirectId}`,
      title,
      date: this.pickText(event, ['date', 'data', 'start_date', 'year', 'ano', 'start']) || '-',
      location: this.pickText(event, ['location', 'local', 'city', 'cidade', 'country', 'place']) || '-',
      logo: this.pickText(event, ['logo', 'image', 'img', 'banner', 'thumb', 'thumbnail']) || null
    };
  }

  private extractRedirectId(record: JsonRecord): string {
    const directId = this.pickText(record, ['id', 'ID', 'id_event']);
    if (directId) {
      return directId;
    }

    const url = this.pickText(record, ['URL', 'url', 'link', 'site']);
    if (!url) {
      return '';
    }

    const match = url.match(/\/redirect\/(\d+)/i);
    return match?.[1] ?? '';
  }

  private pickText(record: JsonRecord, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  trackByEventId(index: number, event: AreaEvent): string {
    return event.id || String(index);
  }

  goToEvent(event: AreaEvent): void {
    window.open(event.redirectUrl, '_blank', 'noopener,noreferrer');
  }
}
