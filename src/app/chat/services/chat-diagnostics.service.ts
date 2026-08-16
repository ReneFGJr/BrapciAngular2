import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';

export interface ChatDiagnosticEntry {
  id: number;
  method: string;
  endpoint: string;
  startedAt: string;
  durationMs: number | null;
  status: number | null;
  state: 'pending' | 'success' | 'error' | 'cancelled';
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class ChatDiagnosticsService {
  private nextId = 1;
  readonly entries = signal<ChatDiagnosticEntry[]>([]);

  track<T>(method: string, endpoint: string, request: Observable<T>): Observable<T> {
    const id = this.begin(method, endpoint);
    let status = 200;
    let errorMessage: string | null = null;
    return request.pipe(
      tap(() => { status = 200; }),
      catchError((error: unknown) => {
        status = error instanceof HttpErrorResponse ? error.status : 0;
        errorMessage = this.describeError(error);
        return throwError(() => error);
      }),
      finalize(() => this.finish(id, status, errorMessage)),
    );
  }

  begin(method: string, endpoint: string): number {
    const id = this.nextId++;
    const entry: ChatDiagnosticEntry = { id, method, endpoint: this.sanitize(endpoint), startedAt: new Date().toISOString(), durationMs: null, status: null, state: 'pending', error: null };
    this.entries.update((entries) => [entry, ...entries].slice(0, 100));
    return id;
  }

  finish(id: number, status: number, error: string | null, cancelled = false): void {
    this.entries.update((entries) => entries.map((entry) => entry.id === id ? {
      ...entry,
      durationMs: Date.now() - new Date(entry.startedAt).getTime(),
      status,
      state: cancelled ? 'cancelled' : error ? 'error' : 'success',
      error,
    } : entry));
  }

  clear(): void { this.entries.set([]); }

  private sanitize(endpoint: string): string {
    return endpoint.replace(/([?&]APIKEY=)[^&]*/gi, '$1***');
  }

  private describeError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const body = error.error as { message?: unknown; error?: unknown } | string | null;
      if (typeof body === 'string' && body.trim()) return body;
      if (body && typeof body === 'object') {
        const message = typeof body.message === 'string' ? body.message : '';
        const code = typeof body.error === 'string' ? body.error : '';
        if (message || code) return [code, message].filter(Boolean).join(': ');
      }
      return error.message || `Erro HTTP ${error.status}`;
    }
    return error instanceof Error ? error.message : 'Erro desconhecido';
  }
}
