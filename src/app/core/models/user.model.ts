export interface User {
  id: number;
  username: string;
  name: string;
  role: 'admin' | 'user';
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  authenticated: boolean;
  user: User | null;
}
