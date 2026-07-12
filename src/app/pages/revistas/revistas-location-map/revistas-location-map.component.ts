import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

type JournalLocation = {
  id_jnl: string;
  jnl_name: string;
  jnl_name_abrev?: string;
  gc_name?: string | null;
  lat?: string | null;
  long?: string | null;
  type?: string | null;
  code?: string | null;
  cover?: string | null;
};

type GeoPoint = {
  id: string;
  title: string;
  subtitle: string;
  lat: number;
  long: number;
};

@Component({
  selector: 'app-revistas-location-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revistas-location-map.component.html',
  styleUrl: './revistas-location-map.component.scss'
})
export class RevistasLocationMapComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() journals: JournalLocation[] = [];
  @ViewChild('mapContainer') mapContainer?: ElementRef<HTMLDivElement>;

  private mapInstance: any = null;
  private renderAttempts = 0;

  readonly mapPoints = (() => this.buildPoints()) as () => GeoPoint[];

  ngAfterViewInit(): void {
    this.scheduleRender();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['journals']) {
      this.scheduleRender();
    }
  }

  ngOnDestroy(): void {
    this.destroyMap();
  }

  private buildPoints(): GeoPoint[] {
    return this.journals
      .map((journal) => this.toPoint(journal))
      .filter((point): point is GeoPoint => point !== null);
  }

  private toPoint(journal: JournalLocation): GeoPoint | null {
    const lat = Number.parseFloat(String(journal.lat ?? '').trim());
    const long = Number.parseFloat(String(journal.long ?? '').trim());

    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }

    return {
      id: String(journal.id_jnl),
      title: journal.jnl_name_abrev?.trim() || journal.jnl_name?.trim() || 'Revista',
      subtitle: journal.gc_name?.trim() || journal.code?.trim() || '',
      lat,
      long
    };
  }

  private async renderMap(): Promise<void> {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const container = this.mapContainer?.nativeElement;
    const points = this.buildPoints();

    if (!container || points.length === 0) {
      return;
    }

    if (container.getBoundingClientRect().width === 0 || container.getBoundingClientRect().height === 0) {
      this.scheduleRender();
      return;
    }

    const leaflet = await import('leaflet');
    this.destroyMap();

    const map = leaflet.map(container, {
      zoomControl: true,
      scrollWheelZoom: true
    });

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    const bounds = leaflet.latLngBounds([]);

    for (const point of points) {
      const marker = leaflet.circleMarker([point.lat, point.long], {
        color: '#385a7c',
        fillColor: '#385a7c',
        fillOpacity: 0.9,
        radius: 7,
        weight: 2
      }).addTo(map);

      marker.bindPopup(
        `<strong>${point.title}</strong><br>${point.subtitle ? `${point.subtitle}<br>` : ''}Lat: ${point.lat}<br>Long: ${point.long}`
      );

      bounds.extend([point.lat, point.long]);
    }

    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.2));
    } else {
      map.setView([points[0].lat, points[0].long], 4);
    }

    this.mapInstance = map;
    this.renderAttempts = 0;

    requestAnimationFrame(() => {
      map.invalidateSize();
      setTimeout(() => map.invalidateSize(), 120);
    });
  }

  private scheduleRender(): void {
    if (this.renderAttempts >= 8) {
      return;
    }

    this.renderAttempts += 1;
    setTimeout(() => requestAnimationFrame(() => this.renderMap()), 50);
  }

  private destroyMap(): void {
    if (!this.mapInstance) {
      return;
    }

    this.mapInstance.remove();
    this.mapInstance = null;
  }
}
