import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import type { Coauthor } from '../../core/models/coauthor.model';

@Component({
  selector: 'app-coauthors-list',
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `<div class="coauthors-table-wrapper">
    @if (coauthors.length === 0) {
      <p class="coauthors-empty mb-0">{{ 'author.noRecords' | translate }}</p>
    } @else {
      <h2 class="mb-2">Total de colaboradores: <strong>{{ collaboratorTotal }}</strong></h2>
      <ul class="coauthors-list" aria-label="Lista de coautores" style="column-count: 2; column-gap: 30px;">
        @for (coauthor of coauthors; track coauthor.id) {
          <li class="coauthors-item">
            <span class="coauthor-name">
              @if (coauthor.id && !coauthor.id.startsWith('coauthor_')) {
                <a [routerLink]="['/v', coauthor.id]" [class.is-strong]="coauthor.totalPublications > 5">
                  {{ coauthor.name }}
                </a>
              } @else {
                <span [class.is-strong]="coauthor.totalPublications > 5">{{ coauthor.name }}</span>
              }
            </span>
            <span class="coauthor-count">{{ coauthor.totalPublications }}</span>
          </li>
        }
      </ul>
    }
  </div>`,
  styles: `
    :host {
      display: block;
    }

    .coauthors-table-wrapper {
      width: 100%;
      overflow-x: auto;
    }

    .coauthors-empty {
      padding: 1rem;
      text-align: center;
      color: var(--theme-muted);
      font-style: italic;
    }

    .coauthors-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .coauthors-total {
      color: var(--theme-ink);
      font-size: 0.92rem;
      margin: 0;
    }

    .coauthors-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 0.5rem;
      break-inside: avoid;
      margin: 0;
      padding: 0;
      line-height: 1.15;
      border-bottom: 1px solid var(--theme-line);
    }

    .coauthor-name,
    .coauthor-count {
      padding: 0.35rem 0.15rem;
    }

    .coauthor-count {
      min-width: 2ch;
      text-align: right;
      font-weight: 600;
    }

    .coauthor-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .is-strong {
      font-weight: 700;
    }

    a {
      color: var(--theme-link);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .coauthors-item:hover {
      background-color: var(--theme-sand);
    }

    /* Keep previous class for backward compatibility if referenced elsewhere. */
    .coauthors-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;

      thead {
        background-color: var(--theme-card-bg);
        border-bottom: 2px solid var(--theme-line);
      }

      th {
        padding: 0.75rem;
        text-align: left;
        font-weight: 600;
        color: var(--theme-ink);
      }

      td {
        padding: 0.75rem;
        border-bottom: 1px solid var(--theme-line);
        color: var(--theme-ink);
      }

      tbody tr:hover {
        background-color: var(--theme-sand);
      }

      a {
        color: var(--theme-link);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      th:last-child,
      td:last-child {
        text-align: center;
        width: 100px;
      }
    }
  `
})
export class CoauthorsListComponent {
  @Input() coauthors: Coauthor[] = [];

  get collaboratorTotal(): number {
    return Math.max(this.coauthors.length - 1, 0);
  }
}
