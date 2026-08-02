import { Component, computed, input } from '@angular/core';

type Affiliation = {
  id: string;
  name: string;
  logo: string;
};

@Component({
  selector: 'app-author-affiliations',
  standalone: true,
  templateUrl: './author-affiliations.component.html',
  styleUrl: './author-affiliations.component.scss',
})
export class AuthorAffiliationsComponent {
  readonly data = input<unknown>(null);

  readonly affiliations = computed<Affiliation[]>(() => {
    const value = this.data();
    if (!Array.isArray(value)) {
      return [];
    }

    const unique = new Map<string, Affiliation>();
    for (const entry of value) {
      if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
        continue;
      }
      const record = entry as Record<string, unknown>;
      const idValue = record['ID'] ?? record['id'];
      const id = typeof idValue === 'string' || typeof idValue === 'number'
        ? String(idValue).trim()
        : '';
      const name = typeof record['name'] === 'string' ? record['name'].trim() : '';
      const logo = typeof record['logo'] === 'string' ? record['logo'].trim() : '';
      if (id && name) {
        unique.set(id, { id, name, logo });
      }
    }
    return [...unique.values()];
  });
}
