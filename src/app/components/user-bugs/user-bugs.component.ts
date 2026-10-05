import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, map, of, startWith, Subject, switchMap, combineLatest } from 'rxjs';
import { BrapciApiService } from '../../core/services/brapci-api.service';

interface UserBug {
  id_bug: number;
  bug_v: number;
  bug_problem: string;
  bug_status: number | string;
  bug_solution: string | null;
  bug_url: string | null;
  bug_description: string | null;
}
interface ReportState { loading: boolean; error: boolean; bugs: UserBug[]; }

@Component({
  selector: 'app-user-bugs',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section role="tabpanel" [attr.aria-label]="'bugs.tab' | translate">
      @if (state().loading) {
        <p role="status">{{ 'bugs.loading' | translate }}</p>
      } @else if (state().error) {
        <p role="alert" class="text-danger">{{ 'bugs.error' | translate }}</p>
        <button type="button" class="btn btn-outline-primary" (click)="reload.next()">{{ 'bugs.retry' | translate }}</button>
      } @else {
        <ul class="bug-list list-unstyled mb-0">
          @for (bug of state().bugs; track bug.id_bug) {
            <li class="bug-row">
              <div class="bug-content">
                <h2 class="h6 mb-1">#{{ bug.id_bug }} · {{ problemLabel(bug.bug_problem) | translate }}</h2>
                <p class="small mb-0">{{ 'bugs.record' | translate }}: <a [routerLink]="['/v', bug.bug_v]">{{ bug.bug_v }}</a></p>
                @if (bug.bug_description) {
                  <p class="small report-text mt-1 mb-0"><strong>{{ 'bugs.description' | translate }}:</strong> {{ bug.bug_description }}</p>
                }
                @if (bug.bug_url) {
                  <p class="small text-break mt-1 mb-0"><strong>{{ 'bugs.url' | translate }}:</strong> {{ bug.bug_url }}</p>
                }
                @if (bug.bug_solution) {
                  <p class="small report-text mt-1 mb-0"><strong>{{ 'bugs.solution' | translate }}:</strong> {{ bug.bug_solution }}</p>
                }
              </div>
              <span class="bug-status" [class.bug-status-resolved]="isResolved(bug)" [class.bug-status-pending]="!isResolved(bug)">
                <span class="visually-hidden">{{ 'bugs.status' | translate }}: </span>
                {{ (isResolved(bug) ? 'bugs.resolved' : 'bugs.pending') | translate }}
              </span>
            </li>
          } @empty {
            <li>{{ 'bugs.empty' | translate }}</li>
          }
        </ul>
      }
    </section>
  `,
  styles: [`
    .bug-row { display: flex; align-items: center; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--bs-border-color, #dee2e6); }
    .bug-row:first-child { padding-top: 0; }
    .bug-content { flex: 1; min-width: 0; }
    .bug-status { flex-shrink: 0; display: inline-block; padding: .5rem .85rem; border-radius: .375rem; font-size: .875rem; font-weight: 600; text-align: center; }
    .bug-status-pending { background: #fff3cd; color: #664d03; border: 1px solid #ffecb5; }
    .bug-status-resolved { background: #d1e7dd; color: #0f5132; border: 1px solid #badbcc; }
    .report-text { white-space: pre-wrap; overflow-wrap: anywhere; }
    @media (max-width: 575px) { .bug-row { gap: .5rem; } .bug-status { padding: .4rem .6rem; font-size: .75rem; } }
  `]
})
export class UserBugsComponent {
  private readonly api = inject(BrapciApiService);
  readonly userKey = input.required<string>();
  readonly reload = new Subject<void>();
  readonly state = toSignal(combineLatest([toObservable(this.userKey), this.reload.pipe(startWith(undefined))]).pipe(
    switchMap(([key]) => key ? this.api.get<{ bugs: UserBug[] }>(`bugs/user/${encodeURIComponent(key)}`).pipe(
      map(response => ({ loading: false, error: false, bugs: response.bugs })),
      catchError(() => of<ReportState>({ loading: false, error: true, bugs: [] })),
      startWith<ReportState>({ loading: true, error: false, bugs: [] })
    ) : of<ReportState>({ loading: false, error: true, bugs: [] }))
  ), { initialValue: { loading: true, error: false, bugs: [] } as ReportState });

  isResolved(bug: UserBug): boolean { return Number(bug.bug_status) === 2; }
  problemLabel(problem: string): string {
    return ['pdfIncorrect', 'pdfInaccessible', 'other', 'authorincorrect'].includes(problem) ? `bugs.${problem}` : problem;
  }
}
