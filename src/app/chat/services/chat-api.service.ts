import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_CONFIG, ApiConfig } from '../../core/tokens/api-config.token';
import { AuthService } from '../../core/services/auth.service';
import { ChatDiagnosticsService } from './chat-diagnostics.service';
import { Chat, ChatRequest, ItemResponse, ListResponse, Message, OllamaModel, Project, ProjectPayload } from '../models/chat.models';

@Injectable({ providedIn: 'root' })
export class ChatApiService {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpClient,
    private readonly auth: AuthService,
    private readonly diagnostics: ChatDiagnosticsService,
    @Inject(API_CONFIG) config: ApiConfig,
  ) {
    this.baseUrl = config.aiApiBaseUrl.replace(/\/$/, '');
  }

  private options(): { headers: HttpHeaders; params: HttpParams } {
    const apiKey = this.auth.getLocalUser()?.token;
    return {
      headers: apiKey ? new HttpHeaders({ APIKEY: apiKey }) : new HttpHeaders(),
      params: apiKey ? new HttpParams().set('APIKEY', apiKey) : new HttpParams(),
    };
  }

  getModels(): Observable<OllamaModel[]> {
    const url = `${this.baseUrl}/models`;
    return this.diagnostics.track('GET', url, this.http.get<ListResponse<OllamaModel> | OllamaModel[]>(url, this.options()))
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  getProjects(): Observable<Project[]> {
    const url = `${this.baseUrl}/projects`;
    return this.diagnostics.track('GET', url, this.http.get<ListResponse<Project> | Project[]>(url, this.options()))
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  createProject(payload: ProjectPayload): Observable<Project> {
    const url = `${this.baseUrl}/projects`;
    return this.diagnostics.track('POST', url, this.http.post<ItemResponse<Project> | Project>(url, payload, this.options()))
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  getChats(): Observable<Chat[]> {
    const url = `${this.baseUrl}/chats`;
    return this.diagnostics.track('GET', url, this.http.get<ListResponse<Chat> | Chat[]>(url, this.options()))
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  createChat(payload: { title: string; model: string; projectId: number | null }): Observable<Chat> {
    const url = `${this.baseUrl}/chats`;
    return this.diagnostics.track('POST', url, this.http.post<ItemResponse<Chat> | Chat>(url, payload, this.options()))
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  updateChat(id: number, payload: Partial<Pick<Chat, 'title' | 'model' | 'projectId' | 'status'>>): Observable<Chat> {
    const url = `${this.baseUrl}/chats/${id}`;
    return this.diagnostics.track('PUT', url, this.http.put<ItemResponse<Chat> | Chat>(url, payload, this.options()))
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  deleteChat(id: number): Observable<void> {
    const url = `${this.baseUrl}/chats/${id}`;
    return this.diagnostics.track('DELETE', url, this.http.delete<void>(url, this.options()));
  }

  getMessages(chatId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/chats/${chatId}/messages`;
    return this.diagnostics.track('GET', url, this.http.get<ListResponse<Message> | Message[]>(url, this.options()))
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  streamingUrl(chatId: number): string {
    const apiKey = this.auth.getLocalUser()?.token;
    const query = apiKey ? `?APIKEY=${encodeURIComponent(apiKey)}` : '';
    return `${this.baseUrl}/chats/${chatId}/message${query}`;
  }
  authHeaders(): HeadersInit {
    const apiKey = this.auth.getLocalUser()?.token;
    return apiKey ? { APIKEY: apiKey } : {};
  }
}
