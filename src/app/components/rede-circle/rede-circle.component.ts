import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import type { NetworkEdge, NetworkGraph, NetworkNode } from '../../core/models/network.model';

type ArcNode = {
  id: string;
  label: string;
  url: string;
  color: string;
  weight: number;
  startAngle: number;
  endAngle: number;
  midAngle: number;
  arcPath: string;
  labelTransform: string;
  labelAnchor: 'start' | 'end';
  tooltip: string;
};

type Ribbon = {
  id: string;
  source: string;
  target: string;
  path: string;
  color: string;
  opacity: number;
  width: number;
  label: string;
  tooltip: string;
};

type NormalizedNode = NetworkNode & { size: number; label: string; id: string };
type NormalizedEdge = NetworkEdge & { weight: number; label: string; source: string; target: string };

@Component({
  selector: 'app-rede-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rede-circle.component.html',
  styleUrl: './rede-circle.component.scss'
})
export class RedeCircleComponent {
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };
  readonly hoveredNodeId = signal<string | null>(null);

  readonly viewSize = 680;
  private readonly center = this.viewSize / 2;
  readonly outerRadius = 130;
  readonly innerRadius = 212;
  readonly labelRadius = 221;
  private readonly arcGap = 0.018;

  readonly normalizedNodes = computed(() => this.normalizeNodes(this.networkData.nodes));
  readonly normalizedEdges = computed(() => this.normalizeEdges(this.networkData.edges));

  readonly arcNodes = computed(() => {
    const nodes = this.normalizedNodes();
    const edges = this.normalizedEdges();

    if (nodes.length === 0) {
      return [] as ArcNode[];
    }

    const nodeWeight = new Map<string, number>();

    for (const node of nodes) {
      nodeWeight.set(node.id, Math.max(1, node.size));
    }

    for (const edge of edges) {
      nodeWeight.set(edge.source, (nodeWeight.get(edge.source) ?? 0) + edge.weight);
      if (edge.target !== edge.source) {
        nodeWeight.set(edge.target, (nodeWeight.get(edge.target) ?? 0) + edge.weight);
      }
    }

    const totalWeight = [...nodeWeight.values()].reduce((sum, value) => sum + value, 0) || nodes.length;
    const availableAngle = Math.PI * 2 - this.arcGap * nodes.length;

    let currentAngle = -Math.PI / 2;

    return nodes.map((node) => {
      const weight = nodeWeight.get(node.id) ?? 1;
      const span = availableAngle * (weight / totalWeight);
      const startAngle = currentAngle;
      const endAngle = startAngle + Math.max(0.02, span);
      const midAngle = (startAngle + endAngle) / 2;
      currentAngle = endAngle + this.arcGap;

      const midDegrees = this.radToDeg(midAngle);
      const flip = midDegrees > 90 || midDegrees < -90;
      const labelAnchor: 'start' | 'end' = flip ? 'end' : 'start';
      const labelTransform = flip
        ? `rotate(${midDegrees}) translate(${this.labelRadius}) rotate(180)`
        : `rotate(${midDegrees}) translate(${this.labelRadius})`;

      return {
        id: node.id,
        label: node.label,
        url: this.authorUrl(node.id),
        color: this.colorFromId(node.id),
        weight,
        startAngle,
        endAngle,
        midAngle,
        arcPath: this.describeArcBand(startAngle, endAngle, this.innerRadius, this.outerRadius),
        labelTransform,
        labelAnchor,
        tooltip: `Coautorias/peso total: ${weight}`
      };
    });
  });

  readonly ribbons = computed(() => {
    const arcs = this.arcNodes();
    const edges = this.normalizedEdges();

    if (arcs.length === 0 || edges.length === 0) {
      return [] as Ribbon[];
    }

    const arcMap = new Map(arcs.map((arc) => [arc.id, arc]));
    const maxWeight = Math.max(...edges.map((edge) => edge.weight), 1);

    return edges
      .map((edge, index) => {
        const source = arcMap.get(edge.source);
        const target = arcMap.get(edge.target);

        if (!source || !target || source.id === target.id) {
          return null;
        }

        const width = Math.min(0.085, 0.012 + (edge.weight / maxWeight) * 0.055);
        const sourceA1 = source.midAngle - width / 2;
        const sourceA2 = source.midAngle + width / 2;
        const targetA1 = target.midAngle - width / 2;
        const targetA2 = target.midAngle + width / 2;

        const p1 = this.polar(sourceA1, this.innerRadius);
        const p2 = this.polar(targetA1, this.innerRadius);
        const p3 = this.polar(targetA2, this.innerRadius);
        const p4 = this.polar(sourceA2, this.innerRadius);

        const path = [
          `M${p1.x},${p1.y}`,
          `Q0,0 ${p2.x},${p2.y}`,
          `L${p3.x},${p3.y}`,
          `Q0,0 ${p4.x},${p4.y}`,
          'Z'
        ].join(' ');

        return {
          id: `${edge.source}-${edge.target}-${index}`,
          source: edge.source,
          target: edge.target,
          path,
          color: source.color,
          opacity: 0.4 + (edge.weight / maxWeight) * 0.4,
          width,
          label: edge.label,
          tooltip: `${source.label} -> ${target.label} (${edge.label})`
        };
      })
      .filter((ribbon): ribbon is Ribbon => ribbon !== null);
  });

  readonly hasData = computed(() => this.arcNodes().length > 0);

  setHoveredNode(nodeId: string | null): void {
    this.hoveredNodeId.set(nodeId);
  }

  isLabelDimmed(nodeId: string): boolean {
    const hoveredId = this.hoveredNodeId();
    if (!hoveredId || hoveredId === nodeId) {
      return false;
    }

    return !this.normalizedEdges().some(
      (edge) =>
        (edge.source === hoveredId && edge.target === nodeId) ||
        (edge.target === hoveredId && edge.source === nodeId),
    );
  }

  isRibbonDimmed(sourceId: string, targetId: string): boolean {
    const hoveredId = this.hoveredNodeId();
    return Boolean(hoveredId && sourceId !== hoveredId && targetId !== hoveredId);
  }

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

  private normalizeEdges(rawEdges: NetworkEdge[]): NormalizedEdge[] {
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

  private describeArcBand(start: number, end: number, innerRadius: number, outerRadius: number): string {
    const startOuter = this.polar(start, outerRadius);
    const endOuter = this.polar(end, outerRadius);
    const startInner = this.polar(start, innerRadius);
    const endInner = this.polar(end, innerRadius);
    const largeArc = end - start > Math.PI ? 1 : 0;

    return [
      `M${startOuter.x},${startOuter.y}`,
      `A${outerRadius},${outerRadius},0,${largeArc},1,${endOuter.x},${endOuter.y}`,
      `L${endInner.x},${endInner.y}`,
      `A${innerRadius},${innerRadius},0,${largeArc},0,${startInner.x},${startInner.y}`,
      'Z'
    ].join(' ');
  }

  private polar(angle: number, radius: number): { x: number; y: number } {
    return {
      x: Number((Math.cos(angle) * radius).toFixed(3)),
      y: Number((Math.sin(angle) * radius).toFixed(3))
    };
  }

  private radToDeg(angle: number): number {
    return (angle * 180) / Math.PI;
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

  private authorUrl(id: string): string {
    return `/v/${encodeURIComponent(id)}`;
  }
}
