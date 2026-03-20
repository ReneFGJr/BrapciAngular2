import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import type { Coauthor } from '../../core/models/coauthor.model';

@Component({
  selector: 'app-coauthors-list',
  imports: [CommonModule, TranslateModule],
  template: `<div class="coauthors-table-wrapper">
    @if (coauthors.length === 0) {
      <p class="coauthors-empty mb-0">{{ 'author.noRecords' | translate }}</p>
    } @else {
      <table class="coauthors-table">
        <thead>
          <tr>
            <th>{{ 'author.coauthors.name' | translate }}</th>
            <th>{{ 'author.coauthors.publications' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          @for (coauthor of coauthors; track coauthor.id) {
            <tr>
              <td>
                @if (coauthor.link) {
                  <a [href]="coauthor.link" target="_blank" rel="noopener noreferrer">
                    {{ coauthor.name }}
                  </a>
                } @else {
                  {{ coauthor.name }}
                }
              </td>
              <td class="text-center">{{ coauthor.totalPublications }}</td>
            </tr>
          }
        </tbody>
      </table>
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
      color: var(--theme-text-muted, #6c757d);
      font-style: italic;
    }

    .coauthors-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;

      thead {
        background-color: var(--theme-card-bg, #f8f9fa);
        border-bottom: 2px solid var(--theme-line, #dee2e6);
      }

      th {
        padding: 0.75rem;
        text-align: left;
        font-weight: 600;
        color: var(--theme-text, #333);
      }

      td {
        padding: 0.75rem;
        border-bottom: 1px solid var(--theme-line, #dee2e6);
        color: var(--theme-text, #333);
      }

      tbody tr:hover {
        background-color: var(--theme-card-hover, #f8f9fa);
      }

      a {
        color: var(--theme-primary, #483d8b);
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
}
