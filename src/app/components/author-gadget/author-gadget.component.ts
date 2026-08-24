import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs';
import { AuthorWorksComponent, AuthorWorksGroup } from '../author-works/author-works.component';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';
import { AuthorGenderComponent } from '../author-gender/author-gender.component';
import { AuthorAffiliationsComponent } from '../author-affiliations/author-affiliations.component';

import type { Coauthor } from '../../core/models/coauthor.model';
import type { NetworkGraph } from '../../core/models/network.model';
import { AuthService } from '../../core/services/auth.service';
import { API_CONFIG } from '../../core/tokens/api-config.token';

type AuthorMetric = {
  label: string;
  value: string;
};

type AuthorLink = {
  type: 'lattes' | 'orcid' | 'openalex' | 'googlescholar';
  icon: string;
  iconImage?: string;
  label: string;
  url: string;
};

@Component({
  selector: 'app-author-gadget',
  imports: [CommonModule, TranslateModule, BarChartComponent, TagCloudComponent, AuthorWorksComponent, AuthorGenderComponent, AuthorAffiliationsComponent],
  templateUrl: './author-gadget.component.html',
  styleUrl: './author-gadget.component.scss'
})
export class AuthorGadgetComponent {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly apiConfig = inject(API_CONFIG);
  private readonly currentUser = toSignal(this.authService.currentUser$, { initialValue: null });

  readonly rangeOptions = [5, 10, 15, 20] as const;
  readonly selectedRange = signal<number | 'all'>('all');

  @Input({ required: true }) name = '-';
  @Input({ required: true }) nameAbnt = '-';
  @Input({ required: true }) authorId = '-';
  @Input() gender = '';
  @Input() affiliations: unknown = null;
  @Input({ required: true }) metrics: AuthorMetric[] = [];
  @Input() chartPoints: BarChartPoint[] = [];
  @Input() worksGroups: AuthorWorksGroup[] = [];
  @Input() dataJour: unknown = null;
  @Input() dataTag: unknown = null;
  @Input() photoUrl = '';
  @Input() authorLinks: AuthorLink[] = [];
  @Input() coauthors: Coauthor[] = [];
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };
  @Input() citationsGranted: string[] = [];
  @Input() entityData: unknown = null;
  @Input() bolsista: unknown = null;
  @Input() variants: string[] = [];

  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');
  readonly photoPanelOpen = signal(false);
  readonly selectedPhoto = signal<File | null>(null);
  readonly photoUploading = signal(false);
  readonly photoUploadError = signal('');
  readonly uploadedPhotoUrl = signal('');
  readonly displayedPhotoUrl = computed(() => this.uploadedPhotoUrl() || this.photoUrl);

  readonly scholarshipLabels = computed(() => {
    if (!this.bolsista || typeof this.bolsista !== 'object' || Array.isArray(this.bolsista)) {
      return [] as string[];
    }

    return Object.entries(this.bolsista as Record<string, unknown>).flatMap(([agency, raw]) => {
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        return [];
      }

      const scholarship = raw as Record<string, unknown>;
      const modality = String(scholarship['mod'] ?? '').trim();
      const level = String(scholarship['nivel'] ?? '').trim();
      const details = [agency.trim(), modality, level].filter(Boolean);

      return details.length > 1 ? [details.join(' ')] : [];
    });
  });

  readonly filteredChartPoints = computed(() => {
    const range = this.selectedRange();
    const points = [...this.chartPoints].sort((a, b) => this.parseYear(a.label) - this.parseYear(b.label));

    if (range === 'all') {
      return points;
    }

    return points.slice(-range);
  });

  readonly chartTitle = computed(() => {
    const range = this.selectedRange();
    if (range === 'all') {
      return 'Producao total por ano';
    }

    return `Producao dos ultimos ${range} anos`;
  });

  setRange(value: number | 'all'): void {
    this.selectedRange.set(value);
  }

  openPhotoPanel(): void {
    if (!this.isAdmin()) return;
    this.selectedPhoto.set(null);
    this.photoUploadError.set('');
    this.photoPanelOpen.set(true);
  }

  closePhotoPanel(): void {
    if (this.photoUploading()) return;
    this.photoPanelOpen.set(false);
    this.selectedPhoto.set(null);
    this.photoUploadError.set('');
  }

  selectPhoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedPhoto.set(file);
    this.photoUploadError.set('');
  }

  uploadPhoto(): void {
    const file = this.selectedPhoto();
    if (!file || !this.authorId || this.photoUploading()) return;

    const body = new FormData();
    body.append('file', file, file.name);
    const token = this.currentUser()?.token;
    const headers = token ? new HttpHeaders({ APIKEY: token }) : undefined;
    const endpoint = `${this.apiConfig.brapciApiBaseUrl}/upload/facephoto/${encodeURIComponent(this.authorId)}`;

    this.photoUploading.set(true);
    this.photoUploadError.set('');
    this.http.post<Record<string, unknown>>(endpoint, body, { headers })
      .pipe(finalize(() => this.photoUploading.set(false)))
      .subscribe({
        next: (response) => {
          const returnedUrl = String(response['url'] ?? response['photoUrl'] ?? response['photo'] ?? '').trim();
          const fallbackUrl = this.photoUrl
            ? `${this.photoUrl}${this.photoUrl.includes('?') ? '&' : '?'}v=${Date.now()}`
            : '';
          this.uploadedPhotoUrl.set(returnedUrl || fallbackUrl);
          this.photoPanelOpen.set(false);
          this.selectedPhoto.set(null);
        },
        error: () => this.photoUploadError.set('Não foi possível enviar a imagem. Tente novamente.')
      });
  }

  private parseYear(label: string): number {
    const parsed = Number.parseInt(label, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
