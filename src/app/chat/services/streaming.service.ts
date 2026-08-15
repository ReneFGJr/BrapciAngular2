import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRequest, StreamingEvent } from '../models/chat.models';
import { ChatApiService } from './chat-api.service';

@Injectable({ providedIn: 'root' })
export class StreamingService {
  constructor(private readonly api: ChatApiService) {}

  send(chatId: number, payload: ChatRequest, signal: AbortSignal): Observable<StreamingEvent> {
    return new Observable((subscriber) => {
      void this.consume(chatId, payload, signal, (event) => subscriber.next(event))
        .then(() => subscriber.complete())
        .catch((error: unknown) => subscriber.error(error));
    });
  }

  private async consume(chatId: number, payload: ChatRequest, signal: AbortSignal, emit: (event: StreamingEvent) => void): Promise<void> {
    const response = await fetch(this.api.streamingUrl(chatId), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream, application/x-ndjson', ...this.api.authHeaders() },
      body: JSON.stringify(payload),
      signal,
    });
    if (!response.ok) throw new Error(this.messageForStatus(response.status));
    if (!response.body) throw new Error('O servidor não iniciou o streaming.');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? '';
      for (const line of lines) this.parseLine(line, emit);
    }
    if (buffer.trim()) this.parseLine(buffer, emit);
  }

  private parseLine(rawLine: string, emit: (event: StreamingEvent) => void): void {
    const line = rawLine.replace(/^data:\s?/, '').trim();
    if (!line || line === '[DONE]') return;
    try {
      const parsed = JSON.parse(line) as StreamingEvent | { response?: string; done?: boolean };
      if ('type' in parsed) emit(parsed);
      else if (parsed.response) emit({ type: parsed.done ? 'done' : 'token', content: parsed.response });
      else if (parsed.done) emit({ type: 'done' });
    } catch {
      emit({ type: 'token', content: line });
    }
  }

  private messageForStatus(status: number): string {
    if (status === 401) return 'Sua sessão expirou. Entre novamente.';
    if (status === 403) return 'Você não tem acesso a esta conversa.';
    if (status === 404) return 'A conversa ou o modelo não está mais disponível.';
    if (status === 408 || status === 504) return 'O modelo demorou demais para responder.';
    if (status >= 500) return 'O serviço de IA está indisponível no momento.';
    return 'Não foi possível enviar a mensagem.';
  }
}

