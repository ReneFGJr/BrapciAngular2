import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';

type JsonRecord = Record<string, unknown>;

@Component({
  selector: 'app-time-cloud-tag',
  standalone: true,
  imports: [CommonModule, TagCloudComponent],
  templateUrl: './time-cloud-tag.component.html',
  styleUrl: './time-cloud-tag.component.scss',
})
export class TimeCloudTagComponent {
  private readonly subjectValue = signal<unknown>(null);
  readonly selectedMin = signal(0);
  readonly selectedMax = signal(0);

  @Input() set subject(value: unknown) {
    this.subjectValue.set(value);
    const years = this.availableYearsFrom(value);
    const record = this.asRecord(value);
    const configuredMin = this.numberValue(record?.['subject.year_min'] ?? record?.['year_min']);
    const configuredMax = this.numberValue(record?.['subject.year_max'] ?? record?.['year_max']);
    this.selectedMin.set(configuredMin ?? years[0] ?? 0);
    this.selectedMax.set(configuredMax ?? years.at(-1) ?? 0);
  }

  readonly subjectYears = computed(() => {
    const record = this.asRecord(this.subjectValue());
    return this.asRecord(record?.['subject_year']) ?? {};
  });

  readonly availableYears = computed(() => this.availableYearsFrom(this.subjectValue()));
  readonly yearMin = computed(() => {
    const record = this.asRecord(this.subjectValue());
    return this.numberValue(record?.['subject.year_min'] ?? record?.['year_min'])
      ?? this.availableYears()[0]
      ?? 0;
  });
  readonly yearMax = computed(() => {
    const record = this.asRecord(this.subjectValue());
    return this.numberValue(record?.['subject.year_max'] ?? record?.['year_max'])
      ?? this.availableYears().at(-1)
      ?? 0;
  });
  readonly hasData = computed(() => this.availableYears().length > 0);

  readonly dataTag = computed(() => {
    const totals = new Map<string, { label: string; value: number }>();
    const start = Math.min(this.selectedMin(), this.selectedMax());
    const end = Math.max(this.selectedMin(), this.selectedMax());

    for (const [yearText, rawTerms] of Object.entries(this.subjectYears())) {
      const year = Number(yearText);
      const terms = this.asRecord(rawTerms);
      if (!Number.isFinite(year) || year < start || year > end || !terms) {
        continue;
      }
      for (const [label, rawValue] of Object.entries(terms)) {
        const value = Number(rawValue);
        if (!label.trim() || !Number.isFinite(value) || value <= 0) {
          continue;
        }
        const key = label.trim().toLocaleLowerCase('pt-BR');
        const found = totals.get(key);
        if (found) {
          found.value += value;
        } else {
          totals.set(key, { label: label.trim(), value });
        }
      }
    }

    return [...totals.values()]
      .sort((left, right) => right.value - left.value)
      .slice(0, 80);
  });

  updateMin(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.selectedMin.set(Math.min(value, this.selectedMax()));
  }

  updateMax(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.selectedMax.set(Math.max(value, this.selectedMin()));
  }

  private availableYearsFrom(value: unknown): number[] {
    const record = this.asRecord(value);
    const years = this.asRecord(record?.['subject_year']);
    if (!years) return [];
    return Object.keys(years)
      .map(Number)
      .filter(Number.isFinite)
      .sort((left, right) => left - right);
  }

  private numberValue(value: unknown): number | null {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' && !Array.isArray(value) ? value as JsonRecord : null;
  }
}
