import { Component, Input, computed, signal } from '@angular/core';
import type { NetworkGraph, NetworkNode } from '../../core/models/network.model';

type SankeyAuthor = NetworkNode & {
  group: number;
  value: number;
  x: number;
  y: number;
  height: number;
};

type SankeyGroup = {
  id: number;
  label: string;
  color: string;
  value: number;
  x: number;
  y: number;
  height: number;
  authors: SankeyAuthor[];
};

type SankeyLink = {
  id: string;
  path: string;
  color: string;
  width: number;
};

type SankeyLayout = {
  groups: SankeyGroup[];
  authors: SankeyAuthor[];
  links: SankeyLink[];
  height: number;
  totalAuthors: number;
};

@Component({
  selector: 'app-author-clusters-sankey',
  standalone: true,
  templateUrl: './author-clusters-sankey.component.html',
  styleUrl: './author-clusters-sankey.component.scss'
})
export class AuthorClustersSankeyComponent {
  private readonly graph = signal<NetworkGraph>({ nodes: [], edges: [] });

  @Input() set networkData(value: NetworkGraph | null | undefined) {
    this.graph.set(value ?? { nodes: [], edges: [] });
  }

  readonly layout = computed(() => this.buildLayout(this.graph()));

  private buildLayout(graph: NetworkGraph): SankeyLayout {
    const nodes = this.uniqueNodes(graph.nodes);
    const nodeIds = new Set(nodes.map((node) => node.id));
    const edges = graph.edges
      .map((edge) => ({
        source: String(edge.source),
        target: String(edge.target),
        weight: Math.max(1, Number(edge.weight ?? edge.label ?? 1) || 1)
      }))
      .filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target) && edge.source !== edge.target);

    if (!nodes.length) {
      return { groups: [], authors: [], links: [], height: 260, totalAuthors: 0 };
    }

    const degrees = new Map(nodes.map((node) => [node.id, 0]));
    for (const edge of edges) {
      degrees.set(edge.source, (degrees.get(edge.source) ?? 0) + edge.weight);
      degrees.set(edge.target, (degrees.get(edge.target) ?? 0) + edge.weight);
    }

    const communities = this.detectCommunities(nodes, edges, degrees);
    const rankedNodes = [...nodes]
      .sort((a, b) => (degrees.get(b.id) ?? 0) - (degrees.get(a.id) ?? 0))
      .slice(0, 70);
    const grouped = new Map<number, NetworkNode[]>();

    for (const node of rankedNodes) {
      const groupId = communities.get(node.id) ?? 0;
      grouped.set(groupId, [...(grouped.get(groupId) ?? []), node]);
    }

    const palette = ['#2563eb', '#0d9488', '#7c3aed', '#db2777', '#ea580c', '#65a30d', '#0891b2', '#9333ea'];
    const authorHeight = 18;
    const authorGap = 7;
    const groupGap = 28;
    const top = 22;
    let cursorY = top;
    const groups: SankeyGroup[] = [];
    const authors: SankeyAuthor[] = [];

    [...grouped.entries()]
      .sort((a, b) => b[1].length - a[1].length)
      .forEach(([communityId, members], index) => {
        const color = palette[index % palette.length];
        const sortedMembers = [...members].sort((a, b) => (degrees.get(b.id) ?? 0) - (degrees.get(a.id) ?? 0));
        const groupStart = cursorY;
        const groupAuthors = sortedMembers.map((node) => {
          const author: SankeyAuthor = {
            ...node,
            group: index + 1,
            value: Math.max(1, degrees.get(node.id) ?? 1),
            x: 520,
            y: cursorY,
            height: authorHeight
          };
          cursorY += authorHeight + authorGap;
          authors.push(author);
          return author;
        });
        const contentHeight = Math.max(authorHeight, cursorY - groupStart - authorGap);
        groups.push({
          id: communityId,
          label: `Grupo ${index + 1}`,
          color,
          value: groupAuthors.reduce((sum, author) => sum + author.value, 0),
          x: 24,
          y: groupStart,
          height: contentHeight,
          authors: groupAuthors
        });
        cursorY += groupGap;
      });

    const links: SankeyLink[] = [];
    for (const group of groups) {
      const total = group.authors.reduce((sum, author) => sum + author.value, 0) || 1;
      let sourceOffset = 0;
      for (const author of group.authors) {
        const band = Math.max(2, (author.value / total) * group.height);
        const sourceY = group.y + sourceOffset + band / 2;
        const targetY = author.y + author.height / 2;
        links.push({
          id: `${group.id}-${author.id}`,
          path: `M174 ${sourceY} C300 ${sourceY}, 394 ${targetY}, 520 ${targetY}`,
          color: group.color,
          width: Math.min(author.height - 2, band)
        });
        sourceOffset += band;
      }
    }

    return {
      groups,
      authors,
      links,
      height: Math.max(260, cursorY),
      totalAuthors: nodes.length
    };
  }

  private uniqueNodes(nodes: NetworkNode[]): NetworkNode[] {
    const unique = new Map<string, NetworkNode>();
    for (const node of nodes) {
      const id = String(node.id);
      if (!unique.has(id)) unique.set(id, { ...node, id, label: node.label || id });
    }
    return [...unique.values()];
  }

  private detectCommunities(
    nodes: NetworkNode[],
    edges: Array<{ source: string; target: string; weight: number }>,
    degrees: Map<string, number>
  ): Map<string, number> {
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
        const current = between.get(key);
        between.set(key, { a: low, b: high, weight: (current?.weight ?? 0) + edge.weight });
      }

      let best: { a: number; b: number; gain: number } | null = null;
      for (const pair of between.values()) {
        const expected = ((communityDegree.get(pair.a) ?? 0) * (communityDegree.get(pair.b) ?? 0)) / (2 * totalWeight);
        const gain = pair.weight - expected;
        if (gain > 0.0001 && (!best || gain > best.gain)) best = { ...pair, gain };
      }
      if (!best) break;
      for (const [nodeId, community] of memberships) {
        if (community === best.b) memberships.set(nodeId, best.a);
      }
    }

    return memberships;
  }
}
