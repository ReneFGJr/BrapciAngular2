import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG, ApiConfig } from '../tokens/api-config.token';

@Injectable({ providedIn: 'root' })
export class BrapciApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_CONFIG) private readonly apiConfig: ApiConfig
  ) {}

  get<T>(endpoint = '', params?: Record<string, string | number | boolean>): Observable<T> {
    let httpParams = new HttpParams();

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        httpParams = httpParams.set(key, String(value));
      }
    }

    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    const url = cleanEndpoint
      ? `${this.apiConfig.brapciApiBaseUrl}/${cleanEndpoint}`
      : this.apiConfig.brapciApiBaseUrl;

    return this.http.get<T>(url, { params: httpParams });
  }

  search<T>(query: string, filters?: Array<{ name: string, value: any }>): Observable<T> {
    const params: Record<string, string | number | boolean> = { term: query, offset: 1000 };
    if (filters && Array.isArray(filters)) {
      for (const filter of filters) {
        if (filter.value !== undefined && filter.value !== null && filter.value !== "") {
          // Para arrays (ex: collection), transforma em string separada por vírgula
          params[filter.name] = Array.isArray(filter.value) ? filter.value.join(',') : filter.value;
        }
      }
    }
    return this.get<T>('brapci/search/v3', params);
  }

  authoritySearch<T>(term: string): Observable<T> {
    const body = new HttpParams().set('term', term);
    const url = `${this.apiConfig.brapciApiBaseUrl}/authority/search`;

    return this.http.post<T>(url, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  getById<T>(id: string): Observable<T> {
    return this.get<T>(`brapci/get/v1/${id}`);
  }
}
