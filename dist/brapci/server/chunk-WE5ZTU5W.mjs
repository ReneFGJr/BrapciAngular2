import './polyfills.server.mjs';
import {
  EventEmitter,
  Inject,
  Injectable,
  PLATFORM_ID,
  isPlatformBrowser,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-I4K3GZHF.mjs";

// src/app/core/services/basket.service.ts
var BasketService = class _BasketService {
  platformId;
  storageKey = "marked";
  constructor(platformId) {
    this.platformId = platformId;
  }
  changed = new EventEmitter();
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  getMarked() {
    if (!this.isBrowser())
      return [];
    const marked = window.localStorage.getItem(this.storageKey);
    return marked ? JSON.parse(marked) : [];
  }
  isMarked(id) {
    return this.getMarked().includes(id);
  }
  add(id) {
    if (!this.isBrowser())
      return;
    const marked = this.getMarked();
    if (!marked.includes(id)) {
      marked.push(id);
      window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
      this.changed.emit();
    }
  }
  remove(id) {
    if (!this.isBrowser())
      return;
    let marked = this.getMarked();
    marked = marked.filter((item) => item !== id);
    window.localStorage.setItem(this.storageKey, JSON.stringify(marked));
    this.changed.emit();
  }
  clear() {
    if (!this.isBrowser())
      return;
    window.localStorage.removeItem(this.storageKey);
    this.changed.emit();
  }
  count() {
    return this.getMarked().length;
  }
  static \u0275fac = function BasketService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasketService)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BasketService, factory: _BasketService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasketService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  BasketService
};
//# sourceMappingURL=chunk-WE5ZTU5W.mjs.map
