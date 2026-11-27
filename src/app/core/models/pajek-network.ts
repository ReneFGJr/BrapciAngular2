import type { NetworkEdge, NetworkGraph, NetworkNode } from './network.model';

export function parsePajekNetwork(content: string): NetworkGraph {
  const nodes = new Map<string, NetworkNode>();
  const edges: NetworkEdge[] = [];
  let section = '';

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('%')) continue;
    if (line.startsWith('*')) {
      section = line.split(/\s+/, 1)[0].toLowerCase();
      continue;
    }

    if (section === '*vertices') {
      const vertex = /^(\d+)\s+"([^"]+)"(.*)$/.exec(line);
      if (!vertex) continue;
      const [, id, label, attributes] = vertex;
      const x = /\bx_fact\s+(\S+)/i.exec(attributes)?.[1];
      const y = /\by_fact\s+(\S+)/i.exec(attributes)?.[1];
      const size = Math.max(Number(x) || 0, Number(y) || 0);
      nodes.set(id, { id, label, size: Number.isFinite(size) && size > 0 ? size : 1 });
    } else if (section === '*edges') {
      const [source, target, value = '1'] = line.split(/\s+/);
      const weight = Number(value);
      if (source !== target && Number.isFinite(weight) && weight > 0) {
        edges.push({ source, target, weight });
      }
    }
  }

  return {
    nodes: [...nodes.values()],
    edges: edges.filter(({ source, target }) => nodes.has(source) && nodes.has(target)),
  };
}
