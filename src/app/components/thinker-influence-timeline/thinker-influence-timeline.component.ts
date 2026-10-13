import { Component, Input, OnChanges, OnDestroy, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

type ThinkerInfluence = {
  id: number; nome: string; total: number; unknown_year: number;
  years: { year: number; total: number }[];
};

@Component({
  selector: 'app-thinker-influence-timeline',
  imports: [RouterLink, LoadingSpinnerComponent],
  templateUrl: './thinker-influence-timeline.component.html',
  styleUrl: './thinker-influence-timeline.component.scss',
})
export class ThinkerInfluenceTimelineComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) authorId = '';
  @Input() authorName = '';
  private readonly api = inject(BrapciApiService);
  private request?: Subscription;
  readonly loading = signal(false);
  readonly error = signal(false);
  readonly exporting = signal(false);
  readonly exportError = signal(false);
  readonly thinkers = signal<ThinkerInfluence[]>([]);
  readonly years = computed(() => {
    const values = this.thinkers().flatMap((thinker) => thinker.years.map((point) => point.year));
    if (!values.length) return [];
    const min = Math.min(...values), max = Math.max(...values);
    return Array.from({ length: max - min + 1 }, (_, index) => min + index);
  });
  readonly unknownYears = computed(() => this.thinkers().reduce((sum, thinker) => sum + thinker.unknown_year, 0));
  ngOnChanges(): void { this.load(); }
  ngOnDestroy(): void { this.request?.unsubscribe(); }
  load(): void {
    this.request?.unsubscribe();
    this.thinkers.set([]);
    this.error.set(false);
    if (!this.authorId) return;
    this.loading.set(true);
    this.request = this.api.get<ThinkerInfluence[]>(`cited/author/${encodeURIComponent(this.authorId)}/timeline`).subscribe({
      next: (rows) => {
        this.thinkers.set([...rows].sort((a, b) => b.total - a.total));
        this.loading.set(false);
      },
      error: () => { this.loading.set(false); this.error.set(true); },
    });
  }
  position(year: number): number {
    const years = this.years();
    return years.length <= 1 ? 50 : (year - years[0]) / (years.length - 1) * 100;
  }

  dotSize(total: number): number {
    return Math.min(22, 14 + 2 * Math.sqrt(Math.max(0, total - 1)));
  }

  exportPng(): void {
    if (this.exporting() || this.loading() || this.error() || !this.years().length) return;
    this.exporting.set(true);
    this.exportError.set(false);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas unavailable');
      const thinkers = this.thinkers();
      const years = this.years();
      ctx.font = '13px Arial';
      const labelWidth = Math.max(180, ...thinkers.map((thinker) =>
        ctx.measureText(`${thinker.nome} (${thinker.total})`).width + 24));
      const left = 24 + labelWidth;
      const trackWidth = Math.max(300, (years.length - 1) * 22);
      ctx.font = '12px Arial';
      const authorLabel = `Autor: ${this.authorName || '#' + this.authorId} · Brapci #${this.authorId}`;
      const width = Math.max(780, left + trackWidth + 36, ctx.measureText(authorLabel).width + 48);
      const height = 144 + thinkers.length * 36 + (this.unknownYears() ? 26 : 0);
      canvas.width = Math.ceil(width * 2);
      canvas.height = height * 2;
      ctx.scale(2, 2);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#17252a';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('Influências dos pensadores ao longo dos anos', 24, 32);
      ctx.font = '12px Arial';
      ctx.fillText(authorLabel, 24, 55);
      ctx.fillText('Bolinhas maiores indicam mais citações no ano. Totais entre parênteses.', 24, 74);
      const x = (year: number) => left + this.position(year) / 100 * trackWidth;
      ctx.font = '11px Arial';
      for (const year of years) {
        ctx.strokeStyle = 'rgba(127, 127, 127, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x(year), 122);
        ctx.lineTo(x(year), 140 + (thinkers.length - 1) * 36 + 18);
        ctx.stroke();
        ctx.save();
        ctx.translate(x(year), 116);
        ctx.rotate(-Math.PI / 3);
        ctx.fillText(String(year), 0, 0);
        ctx.restore();
      }
      thinkers.forEach((thinker, index) => {
        const y = 140 + index * 36;
        ctx.fillStyle = '#17252a';
        ctx.font = '13px Arial';
        ctx.fillText(`${thinker.nome} (${thinker.total})`, 24, y + 4);
        ctx.strokeStyle = '#93b6ae';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(left, y);
        ctx.lineTo(left + trackWidth, y);
        ctx.stroke();
        for (const point of thinker.years) {
          ctx.beginPath();
          ctx.arc(x(point.year), y, this.dotSize(point.total) / 2, 0, Math.PI * 2);
          ctx.fillStyle = '#236c64';
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();
        }
      });
      if (this.unknownYears()) {
        ctx.fillStyle = '#65747b';
        ctx.font = '12px Arial';
        ctx.fillText(`${this.unknownYears()} citações sem ano de publicação não aparecem nos marcadores.`, 24, height - 14);
      }
      canvas.toBlob((blob) => {
        if (!blob) {
          this.exportError.set(true);
        } else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `influencias-pensadores-autor-${this.authorId}.png`;
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
        this.exporting.set(false);
      }, 'image/png');
    } catch {
      this.exportError.set(true);
      this.exporting.set(false);
    }
  }
}
