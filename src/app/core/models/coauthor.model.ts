/**
 * Model for co-author information
 */
export interface Coauthor {
  id: string;
  name: string;
  totalPublications: number;
  photoUrl?: string;
  link?: string;
}

/**
 * Array of co-authors
 */
export type CoauthorsList = Coauthor[];
