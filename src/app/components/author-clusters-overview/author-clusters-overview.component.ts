import { Component, ElementRef, Input, ViewChild, computed, input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import type { NetworkGraph, NetworkNode } from '../../core/models/network.model';

type Edge = { source: string; target: string; weight: number };
type MapNode = NetworkNode & { publications: number; x: number; y: number; radius: number };
type MapLine = { id: string; x1: number; y1: number; x2: number; y2: number; weight: number };
type MapGroup = { id: number; label: string; color: string; x: number; y: number; width: number; height: number; nodes: MapNode[]; lines: MapLine[] };
type MapBridge = MapLine & { label: string };
type MapLayout = { groups: MapGroup[]; bridges: MapBridge[]; links?: (MapBridge & { thickness: number; color: string })[]; width: number; height: number; authorCount: number };

@Component({
  selector: 'app-author-clusters-overview',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './author-clusters-overview.component.html',
  styleUrl: './author-clusters-overview.component.scss'
})
export class AuthorClustersOverviewComponent {
  private readonly graph = signal<NetworkGraph>({ nodes: [], edges: [] });
  readonly coupling = input(false);
  @ViewChild('clusterSvg') private clusterSvg?: ElementRef<SVGSVGElement>;

  @Input() set networkData(value: NetworkGraph | null | undefined) {
    this.graph.set(value ?? { nodes: [], edges: [] });
  }

  readonly layout = computed(() => this.buildLayout(this.graph()));
  readonly minimumConnections = signal(1);
  readonly visibleLinks = computed(() =>
    (this.layout().links ?? []).filter((link) => link.weight >= this.minimumConnections()),
  );
  readonly Math = Math;
  readonly currentYear = new Date().getFullYear();
  readonly zoom = signal(100);

  setMinimumConnections(value: number): void {
    this.minimumConnections.set(Number.isFinite(value) ? Math.max(1, Math.ceil(value)) : 1);
  }

  zoomIn(): void {
    this.zoom.update((value) => Math.min(180, value + 20));
  }

  zoomOut(): void {
    this.zoom.update((value) => Math.max(60, value - 20));
  }

  resetZoom(): void {
    this.zoom.set(100);
  }

  saveAsPng(): void {
    const svg = this.clusterSvg?.nativeElement;
    if (!svg || typeof document === 'undefined') return;

    const clone = svg.cloneNode(true) as SVGSVGElement;
    const dark = document.body.classList.contains('theme-dark');
    const width = this.layout().width;
    const height = this.layout().height;
    clone.setAttribute('width', String(width));
    clone.setAttribute('height', String(height));
    clone.insertAdjacentHTML('afterbegin', `<style>
      .cluster-title{font:600 18px monospace;text-anchor:middle}.cluster-subtitle{fill:${dark ? '#aeb4bd' : '#526174'};font:11px monospace;text-anchor:middle}
      .author-link{stroke:${dark ? '#f5f7fa' : '#526174'};stroke-linecap:round;opacity:.75}.cluster-bridges line{stroke:${dark ? '#818cf8' : '#4f46e5'};stroke-dasharray:7 6;opacity:.42}
      .author-node{stroke:#fff;stroke-width:1.5}.author-node__halo{display:none}.author-node__label{fill:${dark ? '#f8fafc' : '#172033'};font:600 7px Arial,sans-serif;text-anchor:middle;paint-order:stroke;stroke:${dark ? '#202124' : '#f8fafc'};stroke-width:2.5px;stroke-linejoin:round}
      .clusters-map__chart-source{fill:${dark ? '#c3cad4' : '#526174'};font:600 10px Arial,sans-serif;text-anchor:end}
    </style>`);
    const background = dark ? '#202124' : '#f8fafc';
    clone.insertAdjacentHTML('afterbegin', `<rect width="100%" height="100%" fill="${background}"/>`);

    const source = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(2, 4096 / width, 12000 / height);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      const context = canvas.getContext('2d');
      if (!context) {
        URL.revokeObjectURL(url);
        return;
      }
      context.scale(scale, scale);
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob((png) => {
        if (!png) return;
        const downloadUrl = URL.createObjectURL(png);
        const anchor = document.createElement('a');
        anchor.href = downloadUrl;
        anchor.download = this.coupling() ? 'clusters-de-acoplamento.png' : 'mapa-global-clusters.png';
        anchor.click();
        URL.revokeObjectURL(downloadUrl);
      }, 'image/png');
    };
    image.src = url;
  }

  private buildLayout(graph: NetworkGraph): MapLayout {
    const coupling = this.coupling();
    const nodes = this.uniqueNodes(graph.nodes);
    const ids = new Set(nodes.map((node) => node.id));
    const edges: Edge[] = graph.edges
      .map((edge) => ({ source: String(edge.source), target: String(edge.target), weight: coupling ? edge.weight ?? 1 : Math.max(1, Number(edge.weight ?? edge.label ?? 1) || 1) }))
      .filter((edge) => ids.has(edge.source) && ids.has(edge.target) && edge.source !== edge.target);
    const degrees = new Map(nodes.map((node) => [node.id, 0]));
    for (const edge of edges) {
      degrees.set(edge.source, (degrees.get(edge.source) ?? 0) + edge.weight);
      degrees.set(edge.target, (degrees.get(edge.target) ?? 0) + edge.weight);
    }
    const memberships = this.detectCommunities(nodes, edges, degrees);
    const representatives = coupling ? nodes : nodes.filter((node) => Number(node.size ?? 0) > 1);
    const representativeIds = new Set(representatives.map((node) => node.id));
    const grouped = new Map<number, NetworkNode[]>();
    for (const node of representatives) {
      const community = memberships.get(node.id) ?? 0;
      grouped.set(community, [...(grouped.get(community) ?? []), node]);
    }

    const largestGroup = Math.max(1, ...Array.from(grouped.values(), (members) => members.length));
    const outerOrbit = 72 + Math.max(0, Math.ceil((largestGroup - 1) / 8) - 1) * 58;
    const groupWidth = coupling ? Math.max(420, outerOrbit * 2 + 100) : 420;
    const groupHeight = coupling ? Math.max(330, outerOrbit * 2 + 120) : 330;
    const width = (groupWidth + 30) * 2;
    const maxSize = Math.max(1, ...representatives.map((node) => node.size ?? 1));
    const palette = ['#67e8f9', '#c4b5fd', '#86efac', '#f9a8d4', '#fdba74', '#93c5fd', '#bef264', '#fca5a5'];
    const entries = [...grouped.entries()].filter(([, members]) => members.length).sort((a, b) => this.total(b[1]) - this.total(a[1]));
    const groups: MapGroup[] = entries.map(([communityId, members], groupIndex) => {
      const x = 15 + (groupIndex % 2) * (groupWidth + 30);
      const y = 18 + Math.floor(groupIndex / 2) * (groupHeight + 34);
      const centerX = x + groupWidth / 2;
      const centerY = y + groupHeight / 2 + 16;
      const sorted = [...members].sort((a, b) => (degrees.get(b.id) ?? 0) - (degrees.get(a.id) ?? 0));
      const maxPublications = Math.max(...sorted.map((node) => Number(node.size ?? 2)), 2);
      const mapNodes = sorted.map((node, index): MapNode => {
        const ring = index ? Math.floor((index - 1) / 8) : 0;
        const position = index ? (index - 1) % 8 : 0;
        const items = index ? Math.min(8, sorted.length - 1 - ring * 8) : 1;
        const angle = -Math.PI / 2 + (position / Math.max(1, items)) * Math.PI * 2 + ring * 0.28;
        const orbit = index ? 72 + ring * 58 : 0;
        const publications = Number(node.size);
        const radius = coupling
          ? 3 + 12 * (publications / maxSize)
          : index ? 3.5 + (publications / maxPublications) * 3.5 : 7;
        return { ...node, publications, x: centerX + Math.cos(angle) * orbit, y: centerY + Math.sin(angle) * orbit, radius };
      });
      const positions = new Map(mapNodes.map((node) => [node.id, node]));
      const lines = coupling ? [] : edges.filter((edge) => positions.has(edge.source) && positions.has(edge.target)).map((edge): MapLine => {
        const source = positions.get(edge.source)!;
        const target = positions.get(edge.target)!;
        return { id: `${edge.source}-${edge.target}`, x1: source.x, y1: source.y, x2: target.x, y2: target.y, weight: edge.weight };
      });
      return { id: communityId, label: String.fromCharCode(65 + groupIndex), color: palette[groupIndex % palette.length], x, y, width: groupWidth, height: groupHeight, nodes: mapNodes, lines };
    });

    const height = Math.max(360, Math.ceil(groups.length / 2) * (groupHeight + 34) + 10);
    if (coupling) {
      const positions = new Map(groups.flatMap((group) => group.nodes.map((node) => [node.id, node] as const)));
      const maxWeight = Math.max(1, ...edges.map((edge) => edge.weight));
      const links = edges.map((edge, index) => {
        const source = positions.get(edge.source)!;
        const target = positions.get(edge.target)!;
        const strength = Math.log1p(edge.weight) / Math.log1p(maxWeight);
        return {
          id: String(index),
          x1: source.x,
          y1: source.y,
          x2: target.x,
          y2: target.y,
          weight: edge.weight,
          thickness: 0.35 + 4.65 * strength,
          color: `hsl(217, 55%, ${82 - 38 * strength}%)`,
          label: `${source.label} — ${target.label}`,
        };
      }).sort((a, b) => a.weight - b.weight);
      return { groups, bridges: [], links, width, height, authorCount: representatives.length };
    }

    const groupByCommunity = new Map(groups.map((group) => [group.id, group]));
    const bridgeMap = new Map<string, { source: MapGroup; target: MapGroup; weight: number }>();
    for (const edge of edges) {
      if (!representativeIds.has(edge.source) || !representativeIds.has(edge.target)) continue;
      const source = groupByCommunity.get(memberships.get(edge.source) ?? -1);
      const target = groupByCommunity.get(memberships.get(edge.target) ?? -1);
      if (!source || !target || source.id === target.id) continue;
      const key = [source.id, target.id].sort((a, b) => a - b).join(':');
      bridgeMap.set(key, { source, target, weight: (bridgeMap.get(key)?.weight ?? 0) + edge.weight });
    }
    const bridges = [...bridgeMap.entries()].map(([id, bridge]): MapBridge => ({ id, x1: bridge.source.x + 210, y1: bridge.source.y + 181, x2: bridge.target.x + 210, y2: bridge.target.y + 181, weight: bridge.weight, label: `${bridge.source.label} — ${bridge.target.label}` }));
    return { groups, bridges, width, height, authorCount: representatives.length };
  }

  private uniqueNodes(nodes: NetworkNode[]): NetworkNode[] {
    const unique = new Map<string, NetworkNode>();
    for (const node of nodes) {
      const id = String(node.id);
      const current = unique.get(id);
      if (!current || Number(node.size ?? 0) > Number(current.size ?? 0)) unique.set(id, { ...node, id, label: node.label || id });
    }
    return [...unique.values()];
  }

  private total(nodes: NetworkNode[]): number {
    return nodes.reduce((sum, node) => sum + Number(node.size ?? 0), 0);
  }

  private detectCommunities(nodes: NetworkNode[], edges: Edge[], degrees: Map<string, number>): Map<string, number> {
    const memberships = new Map(nodes.map((node, index) => [node.id, index]));
    const totalWeight = edges.reduce((sum, edge) => sum + edge.weight, 0) || 1;
    while (true) {
      const communityDegree = new Map<number, number>();
      for (const node of nodes) {
        const community = memberships.get(node.id)!;
        communityDegree.set(community, (communityDegree.get(community) ?? 0) + (degrees.get(node.id) ?? 0));
      }
      const between = new Map<string, { a: number; b: number; weight: number }>();
      for (const edge of edges) {
        const a = memberships.get(edge.source)!;
        const b = memberships.get(edge.target)!;
        if (a === b) continue;
        const low = Math.min(a, b);
        const high = Math.max(a, b);
        const key = `${low}:${high}`;
        between.set(key, { a: low, b: high, weight: (between.get(key)?.weight ?? 0) + edge.weight });
      }
      let best: { a: number; b: number; gain: number } | null = null;
      for (const pair of between.values()) {
        const gain = pair.weight - ((communityDegree.get(pair.a) ?? 0) * (communityDegree.get(pair.b) ?? 0)) / (2 * totalWeight);
        if (gain > 0.0001 && (!best || gain > best.gain)) best = { ...pair, gain };
      }
      if (!best) break;
      for (const [nodeId, community] of memberships) if (community === best.b) memberships.set(nodeId, best.a);
    }
    return memberships;
  }
}
