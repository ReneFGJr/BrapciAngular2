import './polyfills.server.mjs';
import {
  API_CONFIG
} from "./chunk-ORSJ5FSR.mjs";
import {
  HttpClient,
  HttpParams,
  Inject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZSERIW3K.mjs";

// src/app/core/services/brapci-api.service.ts
var BrapciApiService = class _BrapciApiService {
  http;
  apiConfig;
  constructor(http, apiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }
  get(endpoint = "", params) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        httpParams = httpParams.set(key, String(value));
      }
    }
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint.substring(1) : endpoint;
    const url = cleanEndpoint ? `${this.apiConfig.brapciApiBaseUrl}/${cleanEndpoint}` : this.apiConfig.brapciApiBaseUrl;
    return this.http.get(url, { params: httpParams });
  }
  post(endpoint, body) {
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint.substring(1) : endpoint;
    const url = `${this.apiConfig.brapciApiBaseUrl}/${cleanEndpoint}`;
    return this.http.post(url, body);
  }
  search(query, filters) {
    const params = { term: query, offset: 1e3 };
    if (filters && Array.isArray(filters)) {
      for (const filter of filters) {
        if (filter.value !== void 0 && filter.value !== null && filter.value !== "") {
          params[filter.name] = Array.isArray(filter.value) ? filter.value.join(",") : filter.value;
        }
      }
    }
    console.log("Search params:", params);
    return this.get("brapci/search/v4", params);
  }
  citedSearch(term) {
    return this.get("brapci/cited-search", { q: term });
  }
  authoritySearch(term) {
    const body = new HttpParams().set("term", term);
    const url = `${this.apiConfig.brapciApiBaseUrl}/authority/search`;
    return this.http.post(url, body.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  getById(id) {
    return this.get(`brapci/get/v1/${id}`);
  }
  static \u0275fac = function BrapciApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrapciApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(API_CONFIG));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrapciApiService, factory: _BrapciApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrapciApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Inject,
    args: [API_CONFIG]
  }] }], null);
})();

export {
  BrapciApiService
};
//# sourceMappingURL=chunk-H6XEAMJQ.mjs.map
