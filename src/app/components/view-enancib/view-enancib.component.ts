import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type JsonRecord = Record<string, unknown>;

@Component({
  selector: 'app-view-enancib',
  imports: [CommonModule],
  templateUrl: './view-enancib.component.html',
  styleUrl: './view-enancib.component.scss'
})
export class ViewEnancibComponent {
  @Input({ required: true }) data: unknown = null;

  field(keys: string[]): string {
    const record = this.asRecord(this.data);
    if (!record) {
      return '-';
    }

    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '-';
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }
}
