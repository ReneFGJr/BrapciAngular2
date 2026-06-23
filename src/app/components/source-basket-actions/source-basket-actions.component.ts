import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BasketService } from '../../core/services/basket.service';

@Component({
  selector: 'app-source-basket-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source-basket-actions.component.html',
  styleUrl: './source-basket-actions.component.scss',
})
export class SourceBasketActionsComponent implements OnChanges {
  @Input({ required: true }) idJnl: string = '';

  private readonly http = inject(HttpClient);
  private readonly basket = inject(BasketService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly allWorkIds = signal<number[]>([]);

  readonly markedCount = signal<number>(0);

  readonly totalCount = computed(() => this.allWorkIds().length);

  readonly allSelected = computed(() => {
    const ids = this.allWorkIds();
    if (!ids.length) return false;
    this.markedCount(); // dependência reativa
    return ids.every((id) => this.basket.isMarked(id));
  });

  constructor() {
    this.markedCount.set(this.basket.count());
    this.basket.changed.pipe(takeUntilDestroyed()).subscribe(() => {
      this.markedCount.set(this.basket.count());
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idJnl'] && this.idJnl?.trim()) {
      this.loadWorkIds(this.idJnl.trim());
    }
  }

  private loadWorkIds(idJnl: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.allWorkIds.set([]);

    const url = `https://cip.brapci.inf.br/api/brapci/source/${encodeURIComponent(idJnl)}`;
    this.http.get<unknown>(url).subscribe({
      next: (response) => {

        this.allWorkIds.set(this.extractIds(response));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erro ao carregar os trabalhos da fonte.');
        this.loading.set(false);
      },
    });
  }

  private extractIds(response: unknown): number[] {
    return this.extractWorksIdField(response);
  }

  private extractWorksIdField(response: unknown): number[] {
    const parsed: number[] = [];
    const visited = new Set<object>();

    const parseWorksIdsValue = (value: unknown): number[] => {
      if (Array.isArray(value)) {
        return value.flatMap((item) => parseWorksIdsValue(item));
      }

      if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
        return [value];
      }

      if (typeof value === 'string' && value.trim()) {
        return value
          .split(/[\s,;|]+/)
          .map((part) => Number(part))
          .filter((id) => Number.isFinite(id) && id > 0);
      }

      return [];
    };

    const walk = (node: unknown): void => {
      if (!node || typeof node !== 'object') {
        return;
      }

      if (visited.has(node as object)) {
        return;
      }

      visited.add(node as object);

      if (Array.isArray(node)) {
        node.forEach((item) => walk(item));
        return;
      }

      const record = node as Record<string, unknown>;

      for (const [key, value] of Object.entries(record)) {
        const normalizedKey = key.toLowerCase();
        if (normalizedKey === 'worksid' || normalizedKey === 'works_id') {
          parsed.push(...parseWorksIdsValue(value));
        }

        walk(value);
      }
    };

    walk(response);

    return Array.from(new Set(parsed));
  }

  private pickId(item: unknown): number | null {
    if (typeof item === 'number' && Number.isFinite(item)) return item;
    if (typeof item === 'string') {
      const n = Number(item);
      return Number.isFinite(n) && n > 0 ? n : null;
    }
    if (item && typeof item === 'object') {
      const rec = item as Record<string, unknown>;
      const raw = rec['id'] ?? rec['ID'] ?? rec['doc_id'] ?? rec['work_id'] ?? rec['wk_id'];
      return this.pickId(raw);
    }
    return null;
  }

  selectAll(): void {
    this.allWorkIds().forEach((id) => this.basket.add(id));
  }

  clearSelection(): void {
    this.basket.clear();
  }

  viewSelection(): void {
    this.router.navigateByUrl('/basket/selected');
  }
}
