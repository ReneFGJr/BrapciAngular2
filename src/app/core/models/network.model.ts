/**
 * Network node representing an author or entity
 */
export interface NetworkNode {
  id: string;
  label: string;
  size?: number;
  color?: string;
  type?: 'author' | 'publication' | 'institute';
}

/**
 * Network edge representing a connection between nodes
 */
export interface NetworkEdge {
  source: string;
  target: string;
  weight?: number;
  label?: string;
}

/**
 * Complete network graph data (PAJEK format compatible)
 */
export interface NetworkGraph {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}
