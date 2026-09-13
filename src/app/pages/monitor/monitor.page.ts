import { CommonModule } from '@angular/common';
import { Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { TranslateModule } from '@ngx-translate/core';

type MonitorComputer = {
  ip: string;
  server: string;
  status: 'On' | 'Off';
};

@Component({
  selector: 'app-monitor-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './monitor.page.html',
  styleUrl: './monitor.page.scss'
})
export class MonitorPage {
  private readonly api = inject(BrapciApiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly computers = signal<MonitorComputer[]>([]);
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal('');
  readonly updatedAt = signal<Date | null>(null);
  readonly online = computed(() => this.computers().filter((computer) => computer.status === 'On'));
  readonly offline = computed(() => this.computers().filter((computer) => computer.status === 'Off'));

  constructor() {
    afterNextRender(() => {
      this.loadComputers();
      interval(30_000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadComputers(true));
    });
  }

  loadComputers(silent = false): void {
    if (this.refreshing()) return;
    if (!silent) this.loading.set(true);
    this.refreshing.set(true);
    this.error.set('');

    this.api.get<unknown>('tools/monitor').subscribe({
      next: (response) => {
        this.computers.set(this.normalize(response));
        this.updatedAt.set(new Date());
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('monitor.error');
        this.loading.set(false);
        this.refreshing.set(false);
      }
    });
  }

  private normalize(response: unknown): MonitorComputer[] {
    if (!response || typeof response !== 'object') return [];
    const root = Array.isArray(response) ? null : response as Record<string, unknown>;
    const values = Array.isArray(response)
      ? response
      : Array.isArray(root?.['value'])
        ? root['value']
        : [];
    return values.flatMap((item) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) return [];
      const record = item as Record<string, unknown>;
      const server = String(record['server'] ?? '').trim();
      const ip = String(record['ip'] ?? '').trim();
      const status: MonitorComputer['status'] = String(record['status'] ?? '').trim().toLowerCase() === 'on' ? 'On' : 'Off';
      return server && ip ? [{ server, ip, status }] : [];
    }).sort((a, b) => Number(b.status === 'On') - Number(a.status === 'On') || a.server.localeCompare(b.server));
  }
}
