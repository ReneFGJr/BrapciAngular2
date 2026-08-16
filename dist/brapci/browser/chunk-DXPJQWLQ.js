import {
  BrapciApiService
} from "./chunk-I3Q2WKSF.js";
import {
  BreadcrumbsComponent
} from "./chunk-LTOQCP6Z.js";
import {
  takeUntilDestroyed
} from "./chunk-H3IWRHIK.js";
import "./chunk-DKSORO5X.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DestroyRef,
  catchError,
  computed,
  distinctUntilChanged,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IGL3YMRP.js";
import "./chunk-3OV72XIM.js";

// src/app/pages/sobre-brapci/sobre-brapci.page.ts
function SobreBrapciPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Carregando conteudo...");
    \u0275\u0275elementEnd();
  }
}
function SobreBrapciPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function SobreBrapciPage_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "article", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.htmlContent(), \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "A API nao retornou conteudo HTML formatado. Exibindo JSON formatado:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "article", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.jsonFallbackHtml(), \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SobreBrapciPage_Conditional_6_Conditional_2_Template, 1, 1, "article", 6)(3, SobreBrapciPage_Conditional_6_Conditional_3_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.htmlContent() ? 2 : 3);
  }
}
var SobreBrapciPage = class _SobreBrapciPage {
  brapciApiService = inject(BrapciApiService);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  pageLabels = {
    brapci: "Sobre a Brapci",
    benancib: "Sobre o Benancib",
    brapcilivros: "Brapci Livros",
    how_index: "Como ser indexado na Brapci",
    team: "Equipe"
  };
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  response = signal(null, ...ngDevMode ? [{ debugName: "response" }] : []);
  pageKey = signal("brapci", ...ngDevMode ? [{ debugName: "pageKey" }] : []);
  title = computed(() => {
    const html = this.htmlContent();
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (h1Match?.[1]) {
      return h1Match[1].replace(/<[^>]+>/g, "").trim() || this.fallbackTitle();
    }
    const value = this.response();
    if (!value || typeof value !== "object") {
      return this.fallbackTitle();
    }
    const data = value;
    const candidate = data["title"];
    return typeof candidate === "string" && candidate.trim() ? candidate : this.fallbackTitle();
  }, ...ngDevMode ? [{ debugName: "title" }] : []);
  htmlContent = computed(() => {
    const value = this.response();
    if (!value) {
      return "";
    }
    if (Array.isArray(value)) {
      const rows = value.map((item) => {
        if (!item || typeof item !== "object") {
          return "";
        }
        const row = item["row"];
        if (typeof row !== "string" || !row.trim()) {
          return "";
        }
        return /<[^>]+>/.test(row) ? row : `<p>${this.escapeHtml(row)}</p>`;
      }).filter(Boolean).join("\n");
      return rows;
    }
    if (typeof value !== "object") {
      return "";
    }
    const data = value;
    const directHtml = data["html"];
    if (typeof directHtml === "string" && directHtml.trim()) {
      return directHtml;
    }
    const content = data["content"];
    if (typeof content === "string" && content.trim()) {
      return content;
    }
    const description = data["description"];
    if (typeof description === "string" && description.trim()) {
      return `<p>${description}</p>`;
    }
    return "";
  }, ...ngDevMode ? [{ debugName: "htmlContent" }] : []);
  jsonFallback = computed(() => JSON.stringify(this.response(), null, 2), ...ngDevMode ? [{ debugName: "jsonFallback" }] : []);
  jsonFallbackHtml = computed(() => this.renderJsonNode(this.response()), ...ngDevMode ? [{ debugName: "jsonFallbackHtml" }] : []);
  constructor() {
    this.route.paramMap.pipe(map((params) => params.get("page")?.trim().toLowerCase() || "brapci"), distinctUntilChanged(), tap((page) => {
      this.pageKey.set(page);
      this.loading.set(true);
      this.error.set("");
      this.response.set(null);
    }), switchMap((page) => this.brapciApiService.get(`page/${page}`).pipe(map((data) => ({ ok: true, data })), catchError(() => of({ ok: false, data: null })))), takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      if (!result.ok) {
        this.error.set(`Nao foi possivel carregar o conteudo de ${this.fallbackTitle()}.`);
        this.loading.set(false);
        return;
      }
      this.response.set(result.data);
      this.loading.set(false);
    });
  }
  fallbackTitle() {
    return this.pageLabels[this.pageKey()] ?? "Sobre";
  }
  renderJsonNode(value) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return '<span class="json-empty">[]</span>';
      }
      const items = value.map((item) => `<li><span class="json-key">item</span>${this.renderJsonValue(item)}</li>`).join("");
      return `<ul class="json-list">${items}</ul>`;
    }
    if (value && typeof value === "object") {
      const entries = Object.entries(value);
      if (entries.length === 0) {
        return '<span class="json-empty">{}</span>';
      }
      const items = entries.map(([key, entryValue]) => `<li><span class="json-key">${this.escapeHtml(key)}</span>${this.renderJsonValue(entryValue)}</li>`).join("");
      return `<ul class="json-list">${items}</ul>`;
    }
    return this.renderJsonValue(value);
  }
  renderJsonValue(value) {
    if (Array.isArray(value) || value && typeof value === "object") {
      return this.renderJsonNode(value);
    }
    if (value === null) {
      return '<span class="json-null">null</span>';
    }
    if (typeof value === "string") {
      return `<span class="json-string">${this.escapeHtml(value)}</span>`;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return `<span class="json-primitive">${String(value)}</span>`;
    }
    return `<span class="json-primitive">${this.escapeHtml(String(value ?? ""))}</span>`;
  }
  escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }
  static \u0275fac = function SobreBrapciPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SobreBrapciPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SobreBrapciPage, selectors: [["app-sobre-brapci-page"]], decls: 7, vars: 1, consts: [["aria-labelledby", "sobre-title", 1, "sobre-wrap", "py-4"], [1, "container"], [1, "sobre-card", "p-4", "p-md-5"], [1, "mb-0"], [1, "sobre-error", "mb-0"], ["id", "sobre-title", 1, "h2", "mb-3"], [1, "sobre-content", 3, "innerHTML"], [1, "mb-2"], [1, "sobre-json", 3, "innerHTML"]], template: function SobreBrapciPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275conditionalCreate(4, SobreBrapciPage_Conditional_4_Template, 2, 0, "p", 3)(5, SobreBrapciPage_Conditional_5_Template, 2, 1, "p", 4)(6, SobreBrapciPage_Conditional_6_Template, 4, 2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 4 : ctx.error() ? 5 : 6);
    }
  }, dependencies: [CommonModule, BreadcrumbsComponent], styles: ["\n\n.sobre-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.sobre-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.sobre-content[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  line-height: 1.65;\n}\n.sobre-content[_ngcontent-%COMP%]   :where(h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]) {\n  margin-top: 1.1rem;\n}\n.sobre-content[_ngcontent-%COMP%]   :where(a[_ngcontent-%COMP%]) {\n  color: var(--theme-hint);\n}\n.sobre-error[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n}\n.sobre-json[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border-radius: 0.45rem;\n  max-height: 360px;\n  overflow: auto;\n  padding: 0.8rem;\n}\n.sobre-json[_ngcontent-%COMP%]   :where(.json-list[_ngcontent-%COMP%]) {\n  border-left: 2px solid var(--theme-line);\n  list-style: none;\n  margin: 0.3rem 0 0.3rem 0.2rem;\n  padding-left: 0.8rem;\n}\n.sobre-json[_ngcontent-%COMP%]   :where(li[_ngcontent-%COMP%]) {\n  margin: 0.18rem 0;\n}\n.sobre-json[_ngcontent-%COMP%]   :where(.json-key[_ngcontent-%COMP%]) {\n  color: var(--theme-hint);\n  font-weight: 700;\n  margin-right: 0.45rem;\n}\n.sobre-json[_ngcontent-%COMP%]   :where(.json-string[_ngcontent-%COMP%]) {\n  color: var(--theme-ink);\n}\n.sobre-json[_ngcontent-%COMP%]   :where(.json-primitive[_ngcontent-%COMP%]) {\n  color: var(--theme-hint);\n}\n.sobre-json[_ngcontent-%COMP%]   :where(.json-null[_ngcontent-%COMP%], .json-empty[_ngcontent-%COMP%]) {\n  color: var(--theme-muted);\n  font-style: italic;\n}\n/*# sourceMappingURL=sobre-brapci.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SobreBrapciPage, [{
    type: Component,
    args: [{ selector: "app-sobre-brapci-page", imports: [CommonModule, BreadcrumbsComponent], template: '<section class="sobre-wrap py-4" aria-labelledby="sobre-title">\r\n  <div class="container">\r\n    <app-breadcrumbs></app-breadcrumbs>\r\n\r\n    <div class="sobre-card p-4 p-md-5">\r\n      @if (loading()) {\r\n        <p class="mb-0">Carregando conteudo...</p>\r\n      } @else if (error()) {\r\n        <p class="sobre-error mb-0">{{ error() }}</p>\r\n      } @else {\r\n        <h1 id="sobre-title" class="h2 mb-3">{{ title() }}</h1>\r\n\r\n        @if (htmlContent()) {\r\n          <article class="sobre-content" [innerHTML]="htmlContent()"></article>\r\n        } @else {\r\n          <p class="mb-2">A API nao retornou conteudo HTML formatado. Exibindo JSON formatado:</p>\r\n          <article class="sobre-json" [innerHTML]="jsonFallbackHtml()"></article>\r\n        }\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/sobre-brapci/sobre-brapci.page.scss */\n.sobre-wrap {\n  color: var(--theme-ink);\n}\n.sobre-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.sobre-content {\n  color: var(--theme-ink);\n  line-height: 1.65;\n}\n.sobre-content :where(h2, h3, h4) {\n  margin-top: 1.1rem;\n}\n.sobre-content :where(a) {\n  color: var(--theme-hint);\n}\n.sobre-error {\n  color: var(--theme-error);\n}\n.sobre-json {\n  background: var(--theme-sand);\n  border-radius: 0.45rem;\n  max-height: 360px;\n  overflow: auto;\n  padding: 0.8rem;\n}\n.sobre-json :where(.json-list) {\n  border-left: 2px solid var(--theme-line);\n  list-style: none;\n  margin: 0.3rem 0 0.3rem 0.2rem;\n  padding-left: 0.8rem;\n}\n.sobre-json :where(li) {\n  margin: 0.18rem 0;\n}\n.sobre-json :where(.json-key) {\n  color: var(--theme-hint);\n  font-weight: 700;\n  margin-right: 0.45rem;\n}\n.sobre-json :where(.json-string) {\n  color: var(--theme-ink);\n}\n.sobre-json :where(.json-primitive) {\n  color: var(--theme-hint);\n}\n.sobre-json :where(.json-null, .json-empty) {\n  color: var(--theme-muted);\n  font-style: italic;\n}\n/*# sourceMappingURL=sobre-brapci.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SobreBrapciPage, { className: "SobreBrapciPage", filePath: "src/app/pages/sobre-brapci/sobre-brapci.page.ts", lineNumber: 15 });
})();
export {
  SobreBrapciPage
};
//# sourceMappingURL=chunk-DXPJQWLQ.js.map
