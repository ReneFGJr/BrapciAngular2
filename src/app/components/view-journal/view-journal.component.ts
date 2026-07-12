import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, computed, signal } from '@angular/core';
import { ViewType01Component } from '../issue/view-type-01/view-type-01.component';
import { JournalMetaGridComponent } from './journal-hero-info/journal-meta-grid/journal-meta-grid.component';

type JsonRecord = Record<string, unknown>;
type TabId = 'summary' | 'issues' | 'location' | 'json';

type GeoPlace = {
  name: string;
  lat: string;
  long: string;
  altitude: string;
  id: string;
};

type GeoPoint = {
  name: string;
  lat: number;
  long: number;
  altitude: string;
  id: string;
};

@Component({
  selector: 'app-view-journal',
  standalone: true,
  imports: [CommonModule, ViewType01Component, JournalMetaGridComponent],
  templateUrl: './view-journal.component.html',
  styleUrl: './view-journal.component.scss'
})
export class ViewJournalComponent {
  @Input({ required: true }) data: unknown = null;
  @ViewChild('locationMap') locationMap?: ElementRef<HTMLDivElement>;
  readonly activeTab = signal<TabId>('summary');
  private mapInstance: any = null;
  private locationMapAttempt = 0;

  readonly title = computed(() => this.field(['jnl_name', 'title', 'name']));
  readonly acronym = computed(() => this.field(['jnl_name_abrev', 'acronym', 'sigla']));
  readonly journalId = computed(() => this.field(['id_jnl', 'ID', 'id']));
  readonly publisher = computed(() => this.field(['publisher', 'jnl_editor', 'editor']));
  readonly issn = computed(() => this.field(['jnl_issn', 'issn']));
  readonly eissn = computed(() => this.field(['jnl_eissn', 'eissn']));
  readonly collection = computed(() => this.field(['jnl_collection', 'collection']));
  readonly period = computed(() => {
    const start = this.field(['jnl_ano_inicio', 'start_year']);
    const end = this.field(['jnl_ano_final', 'end_year']);

    if (start === '-' && end === '-') {
      return '-';
    }

    if (start !== '-' && end !== '-') {
      return `${start} - ${end}`;
    }

    return start !== '-' ? `${start} -` : `- ${end}`;
  });

  readonly url = computed(() => this.field(['jnl_url', 'url']));
  readonly oaiUrl = computed(() => this.field(['jnl_url_oai', 'oai_url']));
  readonly coverUrl = computed(() => this.field(['cover', 'image', 'cover_url']));
  readonly location = computed(() => this.extractLocation());
  readonly mapPoints = computed(() => this.locationPoints());
  readonly issnPortalUrl = computed(() => {
    const value = this.issn();
    if (value === '-') {
      return '-';
    }

    return `https://portal.issn.org/resource/ISSN/${value}`;
  });

  readonly issueItems = computed(() => {
    const record = this.asRecord(this.data);
    if (!record) {
      return [] as unknown[];
    }

    const items = [...this.arrayFromKeys(record, ['issues']), ...this.arrayFromKeys(record, ['issue'])];
    if (items.length === 0) {
      return [] as unknown[];
    }

    const seen = new Set<string>();
    const unique: unknown[] = [];

    for (const item of items) {
      const key = this.issueKey(item);
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      unique.push(item);
    }

    return unique;
  });

  readonly jsonContent = computed(() => JSON.stringify(this.data, null, 2));

  setTab(tab: TabId): void {
    this.activeTab.set(tab);

    if (tab === 'location') {
      this.scheduleLocationMapRender();
      return;
    }

    this.destroyMap();
  }

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

  private arrayFromKeys(record: JsonRecord, keys: string[]): unknown[] {
    const collected: unknown[] = [];

    for (const key of keys) {
      const value = record[key];
      if (Array.isArray(value)) {
        collected.push(...value);
      } else if (value && typeof value === 'object') {
        collected.push(value);
      }
    }

    return collected;
  }

  private issueKey(item: unknown): string {
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item);
    }

    if (!item || typeof item !== 'object') {
      return '';
    }

    const record = item as JsonRecord;
    const candidates = ['ID', 'id', 'issue_id', 'id_issue', 'id_edition', 'YEAR', 'year', 'VOL', 'vol', 'NR', 'nr'];

    for (const key of candidates) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return `${key}:${value.trim()}`;
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return `${key}:${value}`;
      }
    }

    return JSON.stringify(record);
  }

  private asRecord(value: unknown): JsonRecord | null {
    return value && typeof value === 'object' ? (value as JsonRecord) : null;
  }

  ngAfterViewInit(): void {
    if (this.activeTab() === 'location') {
      this.scheduleLocationMapRender();
    }
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

  private extractLocation(): { city: GeoPlace | null } {
    const record = this.asRecord(this.data);
    const geo = this.asRecord(record?.['geo']);

    return {
      city: this.asGeoPlace(geo?.['city'])
    };
  }

  private asGeoPlace(value: unknown): GeoPlace | null {
    const record = this.asRecord(value);
    if (!record) {
      return null;
    }

    const name = this.stringFromRecord(record, ['name']);
    const lat = this.stringFromRecord(record, ['lat']);
    const long = this.stringFromRecord(record, ['long']);
    const altitude = this.stringFromRecord(record, ['altitude']);
    const id = this.stringFromRecord(record, ['id']);

    if (name === '-' && lat === '-' && long === '-' && altitude === '-' && id === '-') {
      return null;
    }

    return { name, lat, long, altitude, id };
  }

  private stringFromRecord(record: JsonRecord, keys: string[]): string {
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

  private locationPoints(): GeoPoint[] {
    const location = this.location();
    const points: GeoPoint[] = [];

    if (location.city) {
      const city = this.toGeoPoint(location.city);
      if (city) {
        points.push(city);
      }
    }

    return points;
  }

  private toGeoPoint(place: GeoPlace): GeoPoint | null {
    const lat = Number.parseFloat(place.lat);
    const long = Number.parseFloat(place.long);

    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }

    return {
      name: place.name,
      lat,
      long,
      altitude: place.altitude,
      id: place.id
    };
  }

  private async renderLocationMap(): Promise<void> {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const container = this.locationMap?.nativeElement;
    const points = this.mapPoints();

    if (!container || points.length === 0) {
      return;
    }

    if (container.getBoundingClientRect().width === 0 || container.getBoundingClientRect().height === 0) {
      this.scheduleLocationMapRender();
      return;
    }

    const leaflet = await import('leaflet');

    this.destroyMap();

    const map = leaflet.map(container, {
      zoomControl: true,
      scrollWheelZoom: true
    });

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      })
      .addTo(map);

    const bounds = leaflet.latLngBounds([]);

    for (const point of points) {
      const color = point === points[0] ? '#385a7c' : '#157347';
      const marker = leaflet.circleMarker([point.lat, point.long], {
        color,
        fillColor: color,
        fillOpacity: 0.9,
        radius: 8,
        weight: 2
      }).addTo(map);

      marker.bindPopup(
        `<strong>${point.name}</strong><br>Lat: ${point.lat}<br>Long: ${point.long}<br>Altitude: ${point.altitude}`
      );
      bounds.extend([point.lat, point.long]);
    }

    if (points.length === 1) {
      map.setView([points[0].lat, points[0].long], 12);
    } else if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.35));
    } else {
      map.setView([points[0].lat, points[0].long], 12);
    }

    this.mapInstance = map;
    this.locationMapAttempt = 0;

    requestAnimationFrame(() => {
      map.invalidateSize();
      setTimeout(() => map.invalidateSize(), 120);
    });
  }

  private scheduleLocationMapRender(): void {
    if (this.locationMapAttempt >= 8) {
      return;
    }

    this.locationMapAttempt += 1;
    setTimeout(() => requestAnimationFrame(() => this.renderLocationMap()), 50);
  }

  private destroyMap(): void {
    if (!this.mapInstance) {
      return;
    }

    this.mapInstance.remove();
    this.mapInstance = null;
  }
}
