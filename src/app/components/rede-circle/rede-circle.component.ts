import { CommonModule } from '@angular/common';
import { Component, Input, computed } from '@angular/core';
import type { NetworkEdge, NetworkGraph, NetworkNode } from '../../core/models/network.model';

type GraphNode = {
  id: string;
  label: string;
  size: number;
  x: number;
  y: number;
  radius: number;
  color: string;
};

type GraphEdge = {
  source: string;
  target: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeWidth: number;
  label: string;
  midX: number;
  midY: number;
};

type NormalizedNode = NetworkNode & { size: number; label: string; id: string };

@Component({
  selector: 'app-rede-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rede-circle.component.html',
  styleUrl: './rede-circle.component.scss'
})
export class RedeCircleComponent {
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };

  readonly viewSize = 860;
  private readonly center = this.viewSize / 2;
  private readonly ringRadius = 300;

  readonly normalizedNodes = computed(() => this.normalizeNodes(this.networkData.nodes));

  readonly sizedNodes = computed(() => {
    const nodes = this.normalizedNodes();
    if (nodes.length === 0) {
      return [] as GraphNode[];
    }

    const maxSize = Math.max(...nodes.map((node) => node.size), 1);

    return nodes.map((node, index) => {
      const angle = (Math.PI * 2 * index) / nodes.length - Math.PI / 2;
      const x = this.center + this.ringRadius * Math.cos(angle);
      const y = this.center + this.ringRadius * Math.sin(angle);
      const radius = 8 + (node.size / maxSize) * 18;

      return {
        id: node.id,
        label: node.label,
        size: node.size,
        x,
        y,
        radius,
        color: this.colorFromId(node.id)
      };
    });
  });

  readonly edges = computed(() => {
    const nodes = this.sizedNodes();
    const nodeMap = new Map(nodes.map((node) => [node.id, node]));
    const edges = this.normalizeEdges(this.networkData.edges);

    if (edges.length === 0) {
      return [] as GraphEdge[];
    }

    const maxWeight = Math.max(...edges.map((edge) => edge.weight), 1);

    return edges
      .map((edge) => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);

        if (!source || !target || source.id === target.id) {
          return null;
        }

        const strokeWidth = 1 + (edge.weight / maxWeight) * 7;

        return {
          source: source.id,
          target: target.id,
          x1: source.x,
          y1: source.y,
          x2: target.x,
          y2: target.y,
          strokeWidth,
          label: edge.label,
          midX: (source.x + target.x) / 2,
          midY: (source.y + target.y) / 2
        };
      })
      .filter((edge): edge is GraphEdge => edge !== null);
  });

  readonly hasData = computed(() => this.sizedNodes().length > 0);

  private normalizeNodes(rawNodes: NetworkNode[]): NormalizedNode[] {
    const unique = new Map<string, NormalizedNode>();

    for (const node of rawNodes) {
      const normalizedId = String(node.id);
      const existing = unique.get(normalizedId);
      const numericSize = Number(node.size ?? 1.6);
      const normalizedSize = Number.isFinite(numericSize) && numericSize > 0 ? numericSize : 1.6;

      if (!existing || normalizedSize > Number(existing.size ?? 0)) {
        unique.set(normalizedId, {
          ...node,
          id: normalizedId,
          size: normalizedSize,
          label: (node.label || normalizedId).trim()
        });
      }
    }

    return [...unique.values()].sort((a, b) => (b.size ?? 0) - (a.size ?? 0));
  }

  private normalizeEdges(rawEdges: NetworkEdge[]): Array<NetworkEdge & { weight: number; label: string }> {
    return rawEdges
      .map((edge) => {
        const rawWeight = Number(edge.weight ?? edge.label ?? 1);
        const weight = Number.isFinite(rawWeight) && rawWeight > 0 ? rawWeight : 1;

        return {
          ...edge,
          source: String(edge.source),
          target: String(edge.target),
          weight,
          label: String(edge.label ?? weight)
        };
      })
      .filter((edge) => edge.source.length > 0 && edge.target.length > 0);
  }

  private colorFromId(id: string): string {
    let hash = 0;
    for (let i = 0; i < id.length; i += 1) {
      hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    }

    const hue = hash % 360;
    const saturation = 62 + (hash % 18);
    const lightness = 42 + (hash % 16);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}
