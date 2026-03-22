import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';
import { AuthorGadgetComponent } from '../../components/author-gadget/author-gadget.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { ViewJournalComponent } from '../../components/view-journal/view-journal.component';
import { ViewEventComponent } from '../../components/view-event/view-event.component';
import { ViewEnancibComponent } from '../../components/view-enancib/view-enancib.component';
import type { AuthorWorksGroup } from '../../components/author-works/author-works.component';
import { BarChartPoint } from '../../components/bar-chart/bar-chart.component';

import type { Coauthor } from '../../core/models/coauthor.model';
import type { NetworkGraph } from '../../core/models/network.model';

type AuthorLink = {
  type: 'lattes' | 'orcid' | 'openalex' | 'googlescholar';
  icon: string;
  label: string;
  url: string;
};

@Component({
  selector: 'app-v-id-page',
  imports: [
    CommonModule,
    AuthorGadgetComponent,
    BreadcrumbsComponent,
    ViewJournalComponent,
    ViewEventComponent,
    ViewEnancibComponent
  ],
  templateUrl: './v-id.page.html',
  styleUrl: './v-id.page.scss'
})
export class VIdPage {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly brapciApiService = inject(BrapciApiService);
  private readonly worksKeys = ['Article', 'Proceeding', 'BookChapter', 'Book'] as const;

  readonly id = signal('');
  readonly loading = signal(true);
  readonly error = signal('');
  readonly response = signal<unknown>(null);

  readonly classe = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['Classe'] ?? data['classe'] ?? data['Class'] ?? data['class'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly isPerson = computed(() => this.classe().toLowerCase() === 'person');

  readonly publicationView = computed<'journal' | 'event' | 'enancib'>(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return 'journal';
    }

    const data = value as Record<string, unknown>;
    const idJnlRaw = data['id_jnl'] ?? data['ID_jnl'] ?? data['ID_JNL'];
    const idJnl = String(idJnlRaw ?? '').trim();

    if (idJnl === '75') {
      return 'enancib';
    }

    const collectionRaw = data['jnl_collection'] ?? data['JNL_COLLECTION'] ?? data['collection'];
    const collection = String(collectionRaw ?? '').trim().toUpperCase();

    if (collection === 'EV') {
      return 'event';
    }

    return 'journal';
  });

  readonly authorName = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['name'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly authorNameAbnt = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '-';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['name_abnt'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '-';
  });

  readonly authorId = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return this.id();
    }

    const data = value as Record<string, unknown>;
    const candidate = data['ID'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : this.id();
  });

  readonly photoUrl = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return '';
    }

    const data = value as Record<string, unknown>;
    const candidate = data['Photo'];
    return typeof candidate === 'string' && candidate.trim() ? candidate : '';
  });

  readonly authorLinks = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [] as AuthorLink[];
    }

    const data = value as Record<string, unknown>;
    const idsRaw = data['IDs'];
    if (!Array.isArray(idsRaw)) {
      return [] as AuthorLink[];
    }

    const links: AuthorLink[] = [];

    for (const idObj of idsRaw) {
      if (!idObj || typeof idObj !== 'object') {
        continue;
      }

      const obj = idObj as Record<string, unknown>;

      if (obj['lattes']) {
        links.push({
          type: 'lattes',
          icon: '🎓',
          label: 'Lattes',
          url: `https://lattes.cnpq.br/${obj['lattes']}`
        });
      }

      if (obj['orcid']) {
        links.push({
          type: 'orcid',
          icon: '🔗',
          label: 'ORCID',
          url: `https://orcid.org/${obj['orcid']}`
        });
      }

      if (obj['OpenAlex']) {
        links.push({
          type: 'openalex',
          icon: '🌐',
          label: 'OpenAlex',
          url: `https://openalex.org/${obj['OpenAlex']}`
        });
      }

      if (obj['GoogleScholar']) {
        links.push({
          type: 'googlescholar',
          icon: '📊',
          label: 'Google Scholar',
          url: `https://scholar.google.com/citations?user=${obj['GoogleScholar']}`
        });
      }
    }

    return links;
  });

  readonly variantsCount = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return 0;
    }

    const variants = (value as Record<string, unknown>)['variants'];
    return Array.isArray(variants) ? variants.length : 0;
  });

  readonly worksByType = computed(() => {
    const value = this.response();
    const groups: AuthorWorksGroup[] = this.worksKeys.map((key) => ({
      key,
      label: `author.workTypes.${key}`,
      items: []
    }));

    if (!value || typeof value !== 'object') {
      return groups;
    }

    const works = (value as Record<string, unknown>)['works'];
    if (!works || typeof works !== 'object') {
      return groups;
    }

    const worksMap = works as Record<string, unknown>;

    return groups.map((group) => {
      const rawItems = worksMap[group.key];
      const items = Array.isArray(rawItems)
        ? rawItems.map((item) => String(item)).filter((item) => item.trim().length > 0)
        : [];

      return {
        ...group,
        items
      };
    });
  });

  readonly worksCount = computed(() => this.worksByType().reduce((sum, group) => sum + group.items.length, 0));

  readonly coauthorsList = computed((): Coauthor[] => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [];
    }

    const data = value as Record<string, unknown>;
    const raw = data['coauthors'] ?? data['coAuthors'] ?? data['Coauthors'] ?? data['CoAuthors'];
    const coauthorsArray: unknown[] = Array.isArray(raw)
      ? raw
      : typeof raw === 'string'
        ? (() => {
            try {
              const parsed = JSON.parse(raw);
              return Array.isArray(parsed) ? parsed : [];
            } catch {
              return [];
            }
          })()
        : [];

    const fromApi = coauthorsArray
      .map((item, index) => {
        if (typeof item === 'string' && item.trim()) {
          return {
            id: `coauthor_${index + 1}`,
            name: item.trim(),
            totalPublications: 1
          } satisfies Coauthor;
        }

        if (!item || typeof item !== 'object') {
          return null;
        }

        const obj = item as Record<string, unknown>;
        const nameCandidate = obj['nome'] ?? obj['Nome'] ?? obj['name'] ?? obj['Name'] ?? obj['author'] ?? obj['Author'];
        const name = typeof nameCandidate === 'string' ? nameCandidate.trim() : '';
        if (!name) {
          return null;
        }

        const countRaw =
          obj['colaborations'] ??
          obj['collaborations'] ??
          obj['totalPublications'] ??
          obj['publications'] ??
          obj['count'];
        const totalPublications =
          typeof countRaw === 'number' ? countRaw : Number.parseInt(String(countRaw ?? '1'), 10) || 1;

        const idCandidate = obj['ID'] ?? obj['id'];
        const id =
          typeof idCandidate === 'string' && idCandidate.trim()
            ? idCandidate.trim()
            : typeof idCandidate === 'number' && Number.isFinite(idCandidate)
              ? String(idCandidate)
              : `coauthor_${index + 1}`;

        const link = id && !id.startsWith('coauthor_') ? `/v/${id}` : undefined;

        return {
          id,
          name,
          totalPublications,
          link
        } satisfies Coauthor;
      })
      .filter((item): item is Coauthor => item !== null)
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));

    if (fromApi.length > 0) {
      return fromApi;
    }

    const selfNameCandidates = [this.authorName(), this.authorNameAbnt()]
      .map((name) => this.normalizeAuthorName(name))
      .filter((name) => name.length > 0);

    const counts = new Map<string, { displayName: string; totalPublications: number; link?: string }>();

    for (const group of this.worksByType()) {
      for (const item of group.items) {
        const candidates = this.extractCoauthorCandidatesFromWorkItem(item);
        for (const candidate of candidates) {
          const normalized = this.normalizeAuthorName(candidate.name);
          if (!normalized) {
            continue;
          }

          if (selfNameCandidates.some((selfName) => selfName === normalized)) {
            continue;
          }

          const found = counts.get(normalized);
          if (found) {
            found.totalPublications += 1;
            if (!found.link && candidate.link) {
              found.link = candidate.link;
            }
          } else {
            counts.set(normalized, {
              displayName: candidate.name,
              totalPublications: 1,
              link: candidate.link
            });
          }
        }
      }
    }

    return [...counts.entries()]
      .map(([normalized, entry], index) => ({
        id: `coauthor_${index + 1}_${normalized.slice(0, 16)}`,
        name: entry.displayName,
        totalPublications: entry.totalPublications,
        link: entry.link
      }))
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }))
      .slice(0, 30);
  });

  readonly collaborationNetwork = computed((): NetworkGraph => {
    const coauthors = this.coauthorsList();
    if (coauthors.length === 0) {
      return { nodes: [], edges: [] };
    }

    const mainId = this.authorId() || this.id() || 'main';
    const mainName = this.authorName() || 'Autor';

    const nodes: NetworkGraph['nodes'] = [
      {
        id: mainId,
        label: mainName,
        size: 3,
        color: '#483d8b',
        type: 'author'
      }
    ];

    const edges: NetworkGraph['edges'] = [];

    coauthors.forEach((coauthor, index) => {
      const nodeId = coauthor.id || `coauthor_${index + 1}`;
      nodes.push({
        id: nodeId,
        label: coauthor.name,
        size: 1.5 + Math.min(coauthor.totalPublications / 10, 2.5),
        color: '#5EA9FF',
        type: 'author'
      });

      edges.push({
        source: mainId,
        target: nodeId,
        weight: Math.max(1, coauthor.totalPublications),
        label: `${coauthor.totalPublications}`
      });
    });

    // Add lateral links for denser collaboration topology.
    for (let i = 0; i < coauthors.length; i += 1) {
      const sourceId = coauthors[i].id || `coauthor_${i + 1}`;
      const next = coauthors[i + 1];
      if (next) {
        edges.push({
          source: sourceId,
          target: next.id || `coauthor_${i + 2}`,
          weight: 1,
          label: 'co'
        });
      }

      const secondNext = coauthors[i + 2];
      if (secondNext && i % 2 === 0) {
        edges.push({
          source: sourceId,
          target: secondNext.id || `coauthor_${i + 3}`,
          weight: 1,
          label: 'co'
        });
      }
    }

    return { nodes, edges };
  });

  private extractCoauthorCandidatesFromWorkItem(item: string): Array<{ name: string; link?: string }> {
    const byAnchors: Array<{ name: string; link?: string }> = [];
    const anchorRegex = /<a[^>]*href=["']([^"']*\/v\/[^"']+)["'][^>]*>([^<]+)<\/a>/gi;
    let anchorMatch: RegExpExecArray | null = anchorRegex.exec(item);
    while (anchorMatch) {
      const link = anchorMatch[1]?.trim();
      const name = anchorMatch[2]?.replace(/\s+/g, ' ').trim();
      if (name) {
        byAnchors.push({ name, link });
      }
      anchorMatch = anchorRegex.exec(item);
    }

    if (byAnchors.length > 0) {
      return byAnchors;
    }

    const plain = item
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!plain) {
      return [];
    }

    const head = plain.slice(0, 260);
    const candidateChunks = head.split(';').map((chunk) => chunk.trim());
    const collected: Array<{ name: string; link?: string }> = [];

    for (const chunk of candidateChunks) {
      const matches = chunk.match(/[A-ZÀ-Ý][A-ZÀ-Ý'`\-\s]+,\s*[A-ZÀ-Ý][^.;:0-9]{1,80}/g);
      if (!matches) {
        continue;
      }

      for (const match of matches) {
        const cleaned = match.replace(/\s+/g, ' ').trim();
        if (cleaned.length >= 5) {
          collected.push({ name: cleaned });
        }
      }
    }

    const seen = new Set<string>();
    const unique: Array<{ name: string; link?: string }> = [];
    for (const candidate of collected) {
      const key = this.normalizeAuthorName(candidate.name);
      if (!key || seen.has(key)) {
        continue;
      }

      seen.add(key);
      unique.push(candidate);
    }

    return unique;
  }

  private normalizeAuthorName(name: string): string {
    return name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z,\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  readonly authorMetrics = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [] as Array<{ label: string; value: string }>;
    }

    const data = value as Record<string, unknown>;
    const toValue = (field: string): string => {
      const raw = data[field];
      if (typeof raw === 'number') {
        return raw.toLocaleString('pt-BR');
      }

      if (typeof raw === 'string' && raw.trim()) {
        return raw;
      }

      return '-';
    };

    return [
      { label: 'Visualizacoes', value: toValue('Views') },
      { label: 'Downloads', value: toValue('Download') },
      { label: 'Curtidas', value: toValue('Likes') },
      { label: 'Citacoes', value: toValue('cited') },
      { label: 'Variantes', value: this.variantsCount().toString() },
      { label: 'Trabalhos', value: this.worksCount().toString() }
    ];
  });

  readonly chartYearsBars = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return [] as BarChartPoint[];
    }

    const chartYears = (value as Record<string, unknown>)['chart_years'];
    if (!chartYears || typeof chartYears !== 'object') {
      return [] as BarChartPoint[];
    }

    const chartData = chartYears as Record<string, unknown>;
    const labelsRaw = chartData['labels'];
    const datasetsRaw = chartData['data'];

    if (!Array.isArray(labelsRaw) || !datasetsRaw || typeof datasetsRaw !== 'object') {
      return [] as BarChartPoint[];
    }

    const labels = labelsRaw.map((item) => String(item));
    const seriesMap = datasetsRaw as Record<string, unknown>;
    const palette = {
      Article: '#0f0fbd',
      Proceeding: '#3f3fdd',
      Book: '#927b00',
      BookChapter: '#e2cb46',
    } as const;

    const bars = labels.map((label, index) => {
      const segments = Object.entries(palette).map(([key, color]) => {
        const source = seriesMap[key];
        const values = Array.isArray(source) ? source : [];
        const raw = values[index];
        const value = typeof raw === 'number' ? raw : 0;

        return {
          key,
          label: `author.workTypes.${key}`,
          value,
          color
        };
      });

      return {
        label,
        segments
      };
    });

    return bars.filter((point) => point.segments.reduce((sum, segment) => sum + segment.value, 0) > 0);
  });

  readonly jsonContent = computed(() => JSON.stringify(this.response(), null, 2));

  readonly dataJour = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return null;
    }

    const data = value as Record<string, unknown>;
    return data['dataJOUR'] ?? data['dataJour'] ?? data['data_jour'] ?? null;
  });

  readonly dataTag = computed(() => {
    const value = this.response();
    if (!value || typeof value !== 'object') {
      return null;
    }

    const data = value as Record<string, unknown>;
    return data['dataTAG'] ?? data['dataTag'] ?? data['data_tag'] ?? null;
  });

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')?.trim() || ''),
        distinctUntilChanged(),
        tap((id) => {
          this.id.set(id);
          this.loading.set(true);
          this.error.set('');
          this.response.set(null);
        }),
        switchMap((id) => {
          if (!id) {
            return of({ ok: false as const, data: null });
          }
          return this.brapciApiService.getById<unknown>(id).pipe(
            map((data) => ({ ok: true as const, data })),
            catchError(() => of({ ok: false as const, data: null }))
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((result) => {
        if (!result.ok) {
          this.error.set('Nao foi possivel carregar os dados para este ID.');
          this.loading.set(false);
          return;
        }

        this.response.set(result.data);
        this.loading.set(false);
      });
  }
}
