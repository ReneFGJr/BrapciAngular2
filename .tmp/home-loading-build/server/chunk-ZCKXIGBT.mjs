import './polyfills.server.mjs';
import {
  SKIP_HOME_CONNECTION_REDIRECT
} from "./chunk-ZHDAOKZ3.mjs";
import {
  takeUntilDestroyed
} from "./chunk-VL7NMCPF.mjs";
import {
  API_CONFIG
} from "./chunk-VS5JFHDV.mjs";
import {
  HttpClient,
  HttpContext,
  Router
} from "./chunk-TG5MYEEE.mjs";
import {
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  retry,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefer,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-QTSSUGT7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/home/home.page.ts
var HomePage_Defer_2_DepsFn = () => [import("./chunk-V7RHUJDS.mjs").then((m) => m.HomeSearchComponent)];
function HomePage_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-home-search");
  }
}
function HomePage_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
    \u0275\u0275element(2, "span", 2);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Carregando ....");
    \u0275\u0275elementEnd()()();
  }
}
var HomePage = class _HomePage {
  ready = signal(false, ...ngDevMode ? [{ debugName: "ready" }] : []);
  http = inject(HttpClient);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  apiConfig = inject(API_CONFIG);
  constructor() {
    afterNextRender(() => {
      const baseUrl = this.apiConfig.brapciApiBaseUrl.replace(/\/$/, "");
      this.http.get(`${baseUrl}/brapci/statistics`, {
        context: new HttpContext().set(SKIP_HOME_CONNECTION_REDIRECT, true),
        transferCache: false
      }).pipe(timeout(8e3), retry({ count: 1, delay: 1e3 }), takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => this.ready.set(true),
        error: () => {
          void this.router.navigateByUrl("/501", { replaceUrl: true });
        }
      });
    });
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], decls: 4, vars: 1, consts: [["aria-busy", "true", 1, "container", "loading-screen"], ["role", "status", "aria-live", "polite"], ["aria-hidden", "true", 1, "spinner-border", "mb-3"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domTemplate(0, HomePage_Defer_0_Template, 1, 0)(1, HomePage_DeferPlaceholder_1_Template, 5, 0);
      \u0275\u0275defer(2, 0, HomePage_Defer_2_DepsFn, null, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275deferWhen(ctx.ready());
    }
  }, styles: ["\n\n.loading-screen[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  color: var(--bs-body-color);\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(HomePage, () => [import("./chunk-V7RHUJDS.mjs").then((m) => m.HomeSearchComponent)], (HomeSearchComponent) => {
    setClassMetadata(HomePage, [{
      type: Component,
      args: [{ selector: "app-home-page", imports: [HomeSearchComponent], template: `
    @defer (when ready()) {
      <app-home-search></app-home-search>
    } @placeholder {
      <main class="container loading-screen" aria-busy="true">
        <div role="status" aria-live="polite">
          <span class="spinner-border mb-3" aria-hidden="true"></span>
          <p>Carregando ....</p>
        </div>
      </main>
    }
  `, styles: ["/* angular:styles/component:scss;21de110f28c2a9e4f7d41f7d6dcb35c0c5e27e32c3926cff85a8a0b8c018b771;D:/www/BrapciAngular2/src/app/pages/home/home.page.ts */\n.loading-screen {\n  min-height: 60vh;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  color: var(--bs-body-color);\n}\np {\n  font-size: 1.25rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
    }], () => [], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.page.ts", lineNumber: 39 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-ZCKXIGBT.mjs.map
