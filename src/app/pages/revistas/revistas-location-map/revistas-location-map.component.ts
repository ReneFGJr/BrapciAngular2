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
  jnl_issn?: string | null;
  jnl_eissn?: string | null;
  jnl_url?: string | null;
  jnl_url_oai?: string | null;
  publisher?: string | null;
  jnl_editor?: string | null;
  editor?: string | null;
  email?: string | null;
  jnl_email?: string | null;
  editor_email?: string | null;
  email_editor?: string | null;
  gc_name?: string | null;
  state?: string | null;
  uf?: string | null;
  estado?: string | null;
  lat?: string | null;
  long?: string | null;
  type?: string | null;
  code?: string | null;
  cover?: string | null;
  [key: string]: unknown;
};

type GeoPoint = {
  id: string;
  name: string;
  issn: string;
  city: string;
  country: string;
  lat: number;
  long: number;
};

type CityAggregate = {
  key: string;
  city: string;
  country: string;
  lat: number;
  long: number;
  total: number;
  journals: GeoPoint[];
};

type JournalTableRow = {
  id: string;
  title: string;
  issn: string;
  city: string;
  state: string;
  country: string;
};

const COUNTRY_LABELS: Record<string, string> = {
  AR: 'Argentina',
  BR: 'Brasil',
  CL: 'Chile',
  CO: 'Colombia',
  CR: 'Costa Rica',
  CU: 'Cuba',
  EC: 'Equador',
  ES: 'Espanha',
  ET: 'Estonia',
  MX: 'México',
  PA: 'Panamá',
  PE: 'Peru',
  PT: 'Portugal',
  UY: 'Uruguai',
  US: 'Estados Unidos'
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
  readonly cityAggregates = (() => this.buildCityAggregates()) as () => CityAggregate[];
  readonly tableRows = (() => this.buildTableRows()) as () => JournalTableRow[];

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

  private buildTableRows(): JournalTableRow[] {
    return this.journals
      .map((journal) => this.toTableRow(journal))
      .filter((row): row is JournalTableRow => row !== null)
      .sort((left, right) => left.title.localeCompare(right.title, 'pt-BR'));
  }

  private buildCityAggregates(): CityAggregate[] {
    const grouped = new Map<string, CityAggregate>();

    for (const point of this.buildPoints()) {
      const key = `${point.city}__${point.country}__${point.lat.toFixed(6)}__${point.long.toFixed(6)}`;
      const current = grouped.get(key);

      if (current) {
        current.total += 1;
        current.journals.push(point);
        continue;
      }

      grouped.set(key, {
        key,
        city: point.city,
        country: point.country,
        lat: point.lat,
        long: point.long,
        total: 1,
        journals: [point]
      });
    }

    return Array.from(grouped.values()).sort((left, right) => {
      if (right.total !== left.total) {
        return right.total - left.total;
      }

      return left.city.localeCompare(right.city, 'pt-BR');
    });
  }

  private toPoint(journal: JournalLocation): GeoPoint | null {
    const lat = Number.parseFloat(String(journal.lat ?? '').trim());
    const long = Number.parseFloat(String(journal.long ?? '').trim());

    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }

    return {
      id: String(journal.id_jnl),
      name: journal.jnl_name?.trim() || journal.jnl_name_abrev?.trim() || 'Revista',
      issn: journal.jnl_issn?.trim() || '-',
      city: journal.gc_name?.trim() || '-',
      country: this.countryFromCode(journal.code),
      lat,
      long
    };
  }

  private toTableRow(journal: JournalLocation): JournalTableRow | null {
    const lat = Number.parseFloat(String(journal.lat ?? '').trim());
    const long = Number.parseFloat(String(journal.long ?? '').trim());

    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }

    return {
      id: String(journal.id_jnl),
      title: this.pickText(journal, ['jnl_name', 'jnl_name_abrev']) || 'Revista',
      issn: this.pickText(journal, ['jnl_issn', 'jnl_eissn', 'issn', 'eissn']) || '-',
      city: this.pickText(journal, ['gc_name', 'city', 'cidade']) || '-',
      state: this.stateFromJournal(journal),
      country: this.countryFromCode(this.pickText(journal, ['code', 'country_code', 'country']))
    };
  }

  private pickText(source: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const value = source[key];

      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }

      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }

    return '';
  }

  private stateFromJournal(journal: JournalLocation): string {
    const explicitState = this.pickText(journal, ['state', 'uf', 'estado']);
    if (explicitState) {
      return explicitState;
    }

    const code = this.pickText(journal, ['code']);
    if (code.includes('-')) {
      const parts = code.split('-').map((part) => part.trim()).filter(Boolean);
      if (parts.length > 1) {
        return parts[1];
      }
    }

    return '-';
  }

  private countryFromCode(code?: string | null): string {
    const value = String(code ?? '').trim().toUpperCase();
    if (!value) {
      return '-';
    }

    const countryCode = value.includes('-') ? value.split('-')[0] : value;
    return COUNTRY_LABELS[countryCode] ?? countryCode;
  }

  private async renderMap(): Promise<void> {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const container = this.mapContainer?.nativeElement;
    const cities = this.buildCityAggregates();

    if (!container || cities.length === 0) {
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

    for (const city of cities) {
      const marker = leaflet.circleMarker([city.lat, city.long], {
        color: '#385a7c',
        fillColor: '#385a7c',
        fillOpacity: 0.9,
        radius: this.markerRadius(city.total),
        weight: 2
      }).addTo(map);

      marker.bindPopup(
        `<strong>${city.city}</strong><br>País: ${city.country}<br>Total de revistas: ${city.total}<br>${city.journals.map((journal) => journal.name).join('<br>')}`
      );

      bounds.extend([city.lat, city.long]);
    }

    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.2));
    } else {
      map.setView([cities[0].lat, cities[0].long], 4);
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

  private markerRadius(total: number): number {
    return Math.min(18, 7 + Math.max(0, total - 1) * 2);
  }

  protected cityBarWidth(total: number): number {
    const maxTotal = this.cityAggregates()[0]?.total ?? 0;
    if (!maxTotal) {
      return 0;
    }

    return Math.max(8, Math.round((total / maxTotal) * 100));
  }

}
