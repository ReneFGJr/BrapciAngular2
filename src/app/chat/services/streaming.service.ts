import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRequest, StreamingEvent } from '../models/chat.models';
import { ChatApiService } from './chat-api.service';
import { ChatDiagnosticsService } from './chat-diagnostics.service';

@Injectable({ providedIn: 'root' })
export class StreamingService {
  constructor(
    private readonly api: ChatApiService,
    private readonly diagnostics: ChatDiagnosticsService,
  ) {}

  send(chatId: number, payload: ChatRequest, signal: AbortSignal): Observable<StreamingEvent> {
    return new Observable((subscriber) => {
      void this.consume(chatId, payload, signal, (event) => subscriber.next(event))
        .then(() => subscriber.complete())
        .catch((error: unknown) => subscriber.error(error));
    });
  }

  private async consume(chatId: number, payload: ChatRequest, signal: AbortSignal, emit: (event: StreamingEvent) => void): Promise<void> {
    const url = this.api.streamingUrl(chatId);
    const diagnosticId = this.diagnostics.begin('POST · STREAM', url);
    let response: Response;
    try {
      response = await fetch(url, {
        method: 'POST', credentials: 'omit',
        headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream, application/x-ndjson', ...this.api.authHeaders() },
        body: JSON.stringify(payload), signal,
      });
    } catch (error: unknown) {
      const cancelled = signal.aborted;
      const message = cancelled ? 'Geração interrompida pelo usuário.' : error instanceof Error ? error.message : 'Falha de rede.';
      this.diagnostics.finish(diagnosticId, 0, message, cancelled);
      throw error;
    }
    if (!response.ok) {
      const message = await this.readHttpError(response);
      this.diagnostics.finish(diagnosticId, response.status, message);
      throw new Error(message);
    }
    if (!response.body) {
      const message = 'O servidor não iniciou o streaming.';
      this.diagnostics.finish(diagnosticId, response.status, message);
      throw new Error(message);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let eventName = '';
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? '';
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (line.startsWith('event:')) { eventName = line.slice(6).trim().toLowerCase(); continue; }
        if (!line) { eventName = ''; continue; }
        const streamError = this.parseDataLine(line, eventName, emit);
        if (streamError) {
          await reader.cancel();
          this.diagnostics.finish(diagnosticId, response.status, streamError);
          return;
        }
      }
    }
    if (buffer.trim()) {
      const streamError = this.parseDataLine(buffer.trim(), eventName, emit);
      if (streamError) { this.diagnostics.finish(diagnosticId, response.status, streamError); return; }
    }
    this.diagnostics.finish(diagnosticId, response.status, null);
  }

  private parseDataLine(rawLine: string, eventName: string, emit: (event: StreamingEvent) => void): string | null {
    if (rawLine.startsWith(':')) return null;
    const line = rawLine.replace(/^data:\s?/, '').trim();
    if (!line || line === '[DONE]') { if (line === '[DONE]') emit({ type: 'done' }); return null; }
    let parsed: Record<string, unknown> | null = null;
    try { const value = JSON.parse(line) as unknown; if (value && typeof value === 'object') parsed = value as Record<string, unknown>; } catch { /* texto simples */ }
    const type = String(parsed?.['type'] ?? eventName).toLowerCase();
    if (type === 'error') {
      const message = String(parsed?.['message'] ?? parsed?.['error'] ?? line);
      emit({ type: 'error', error: message });
      return message;
    }
    if (type === 'done' || parsed?.['done'] === true) { emit({ type: 'done' }); return null; }
    const content = String(parsed?.['content'] ?? parsed?.['response'] ?? line);
    emit({ type: 'token', content });
    return null;
  }

  private async readHttpError(response: Response): Promise<string> {
    try {
      const body = await response.clone().json() as { message?: unknown; error?: unknown };
      const detail = String(body.message ?? body.error ?? '').trim();
      if (detail) return detail;
    } catch { /* usa mensagem por status */ }
    return this.messageForStatus(response.status);
  }

  private messageForStatus(status: number): string {
    if (status === 401) return 'Sua APIKEY é inválida ou sua sessão expirou.';
    if (status === 403) return 'Você não tem acesso a esta conversa.';
    if (status === 404) return 'A conversa ou o modelo não está mais disponível.';
    if (status === 408 || status === 504) return 'O modelo demorou demais para responder.';
    if (status >= 500) return 'O serviço de IA está indisponível no momento.';
    return 'Não foi possível enviar a mensagem.';
  }
}
