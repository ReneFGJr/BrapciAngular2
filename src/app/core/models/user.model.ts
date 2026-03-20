export interface User {
  id: number;
  username: string;
  name: string;
  role: 'admin' | 'user';
  themePreference?: 'light' | 'dark';
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface AuthResponse {
  authenticated: boolean;
  user: User | null;
}
