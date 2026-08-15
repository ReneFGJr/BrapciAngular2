export type ChatUiState = 'idle' | 'loading' | 'streaming' | 'completed' | 'error' | 'cancelled';
export type MessageRole = 'user' | 'assistant' | 'system' | 'tool';
export type MessageStatus = 'pending' | 'streaming' | 'completed' | 'error' | 'cancelled';

export interface Project {
  id: number;
  name: string;
  description: string | null;
  systemPrompt: string | null;
  context: string | null;
  defaultModel: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectPayload {
  name: string;
  description?: string;
  systemPrompt?: string;
  context?: string;
  defaultModel?: string;
}

export interface Chat {
  id: number;
  projectId: number | null;
  title: string;
  model: string;
  status: 'active' | 'archived' | 'deleted';
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: number | string;
  chatId: number;
  role: MessageRole;
  content: string;
  model: string | null;
  status: MessageStatus;
  createdAt: string;
}

export interface OllamaModel {
  name: string;
  displayName?: string;
  size?: number;
  modifiedAt?: string;
}

export interface ChatRequest {
  content: string;
  model: string;
  clientMessageId: string;
}

export interface StreamingEvent {
  type: 'start' | 'token' | 'message' | 'done' | 'error';
  content?: string;
  message?: Message;
  error?: string;
}

export interface ListResponse<T> { data: T[]; }
export interface ItemResponse<T> { data: T; }

