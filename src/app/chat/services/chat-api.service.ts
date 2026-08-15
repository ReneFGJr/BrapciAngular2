import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_CONFIG, ApiConfig } from '../../core/tokens/api-config.token';
import { AuthService } from '../../core/services/auth.service';
import { Chat, ChatRequest, ItemResponse, ListResponse, Message, OllamaModel, Project, ProjectPayload } from '../models/chat.models';

@Injectable({ providedIn: 'root' })
export class ChatApiService {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpClient,
    private readonly auth: AuthService,
    @Inject(API_CONFIG) config: ApiConfig,
  ) {
    this.baseUrl = config.aiApiBaseUrl.replace(/\/$/, '');
  }

  private options(): { withCredentials: true; headers: HttpHeaders } {
    const token = this.auth.getLocalUser()?.token;
    return {
      withCredentials: true,
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders(),
    };
  }

  getModels(): Observable<OllamaModel[]> {
    return this.http.get<ListResponse<OllamaModel> | OllamaModel[]>(`${this.baseUrl}/models`, this.options())
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<ListResponse<Project> | Project[]>(`${this.baseUrl}/projects`, this.options())
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  createProject(payload: ProjectPayload): Observable<Project> {
    return this.http.post<ItemResponse<Project> | Project>(`${this.baseUrl}/projects`, payload, this.options())
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  getChats(): Observable<Chat[]> {
    return this.http.get<ListResponse<Chat> | Chat[]>(`${this.baseUrl}/chats`, this.options())
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  createChat(payload: { title: string; model: string; projectId: number | null }): Observable<Chat> {
    return this.http.post<ItemResponse<Chat> | Chat>(`${this.baseUrl}/chats`, payload, this.options())
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  updateChat(id: number, payload: Partial<Pick<Chat, 'title' | 'model' | 'projectId' | 'status'>>): Observable<Chat> {
    return this.http.put<ItemResponse<Chat> | Chat>(`${this.baseUrl}/chats/${id}`, payload, this.options())
      .pipe(map((response) => 'data' in response ? response.data : response));
  }

  deleteChat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/chats/${id}`, this.options());
  }

  getMessages(chatId: number): Observable<Message[]> {
    return this.http.get<ListResponse<Message> | Message[]>(`${this.baseUrl}/chats/${chatId}/messages`, this.options())
      .pipe(map((response) => Array.isArray(response) ? response : response.data));
  }

  streamingUrl(chatId: number): string { return `${this.baseUrl}/chats/${chatId}/message`; }
  authHeaders(): HeadersInit {
    const token = this.auth.getLocalUser()?.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

