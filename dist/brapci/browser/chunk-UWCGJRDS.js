import {
  BasketService
} from "./chunk-SERRY7FI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-DD5AALCM.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  NgForOf,
  NgIf,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGL3YMRP.js";
import "./chunk-3OV72XIM.js";

// src/app/pages/basket-selected/basket-selected.page.ts
function BasketSelectedPage_div_8_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function BasketSelectedPage_div_8_button_3_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.export(option_r2.type));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275attribute("aria-label", "Exportar em " + option_r2.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function BasketSelectedPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Exportar:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BasketSelectedPage_div_8_button_3_Template, 2, 3, "button", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.exportOptions);
  }
}
function BasketSelectedPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "basket.selected.none"), " ");
  }
}
function BasketSelectedPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "basket.selected.loading"), " ");
  }
}
function BasketSelectedPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.abntCounts[i_r4]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "basket.selected." + ctx_r2.abntCategories[i_r4]));
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 36)(1, "button", 37);
    \u0275\u0275listener("click", function BasketSelectedPage_ng_container_12_div_2_div_2_li_2_Template_button_click_1_listener() {
      const categoria_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.activeTab.set(categoria_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const categoria_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === categoria_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "basket.selected." + categoria_r6), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.abntCounts[i_r7]);
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43);
    \u0275\u0275element(1, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r8, \u0275\u0275sanitizeHtml);
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 41);
    \u0275\u0275template(1, BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_ul_4_li_1_Template, 2, 1, "li", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.data.ABNT[categoria_r9]);
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "basket.selected.none_category"), " ");
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_ul_4_Template, 2, 1, "ul", 39)(5, BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_div_5_Template, 3, 3, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "basket.selected." + categoria_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.data.ABNT[categoria_r9] == null ? null : ctx_r2.data.ABNT[categoria_r9].length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.data.ABNT[categoria_r9] || ctx_r2.data.ABNT[categoria_r9].length === 0);
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, BasketSelectedPage_ng_container_12_div_2_div_2_div_4_div_1_Template, 6, 5, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === categoria_r9);
  }
}
function BasketSelectedPage_ng_container_12_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "ul", 32);
    \u0275\u0275template(2, BasketSelectedPage_ng_container_12_div_2_div_2_li_2_Template, 6, 6, "li", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275template(4, BasketSelectedPage_ng_container_12_div_2_div_2_div_4_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.abntCategories);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.abntCategories);
  }
}
function BasketSelectedPage_ng_container_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, BasketSelectedPage_ng_container_12_div_2_div_1_Template, 8, 4, "div", 21)(2, BasketSelectedPage_ng_container_12_div_2_div_2_Template, 5, 2, "div", 22);
    \u0275\u0275elementStart(3, "div", 23)(4, "strong");
    \u0275\u0275text(5, "Painel (An\xE1lise)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "a", 25);
    \u0275\u0275text(8, " Ir para o painel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.abntLabels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.data == null ? null : ctx_r2.data.ABNT);
  }
}
function BasketSelectedPage_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275template(2, BasketSelectedPage_ng_container_12_div_2_Template, 9, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.data == null ? null : ctx_r2.data.ABNT);
  }
}
var BasketSelectedPage = class _BasketSelectedPage {
  abntCategories = ["Articles", "Proceedings", "Books", "BooksChapter"];
  exportOptions = [
    { type: "csv", label: "CSV" },
    { type: "xls", label: "XLS" },
    { type: "doc", label: "DOC" },
    { type: "ris", label: "RIS" },
    { type: "bibtex", label: "BibTex" },
    { type: "cited", label: "Citacoes" },
    { type: "ID", label: "TT" }
  ];
  get abntLabels() {
    return [
      "Artigos",
      "Trabalhos em Eventos",
      "Livros",
      "Cap\xEDtulos de Livros"
    ];
  }
  get abntCounts() {
    const data = this.data?.ABNT;
    if (!data)
      return [0, 0, 0, 0];
    return this.abntCategories.map((cat) => Array.isArray(data[cat]) ? data[cat].length : 0);
  }
  activeTab = signal("Articles", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  basket = inject(BasketService);
  http = inject(HttpClient);
  exportBaseUrl = "https://cip.brapci.inf.br/api/brapci/export/";
  markedIds = signal([], ...ngDevMode ? [{ debugName: "markedIds" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  results = signal(null, ...ngDevMode ? [{ debugName: "results" }] : []);
  data = null;
  ngOnInit() {
    const ids = this.basket.getMarked();
    this.markedIds.set(ids);
    if (ids.length === 0)
      return;
    this.loading.set(true);
    const url = "https://cip.brapci.inf.br/api/brapci/basket";
    const formData = new FormData();
    formData.append("row", ids.join(","));
    this.http.post(url, formData).subscribe({
      next: (data) => {
        this.data = data;
        this.results.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erro ao buscar dados da API");
        this.loading.set(false);
      }
    });
  }
  get categories() {
    const data = this.results();
    if (!data || typeof data !== "object")
      return [];
    return Object.keys(data);
  }
  getResultsByCategory(category) {
    const data = this.results();
    if (!data || !data[category])
      return [];
    if (typeof data[category] === "string")
      return [];
    return Array.isArray(data[category]) ? data[category] : [];
  }
  clearSelection() {
    this.basket.clear();
    this.markedIds.set([]);
    this.results.set(null);
    this.data = null;
    this.error.set(null);
    this.loading.set(false);
    this.activeTab.set("Articles");
  }
  export(typeE) {
    const ids = this.basket.getMarked();
    if (!ids.length) {
      return;
    }
    const formData = new FormData();
    const row = ids.join(",");
    formData.append("row", row);
    formData.append("typeE", typeE);
    formData.append("type", typeE);
    formData.append("export", typeE);
    this.http.post(`${this.exportBaseUrl}${encodeURIComponent(typeE)}`, formData).subscribe({
      next: (response) => {
        const payload = response;
        const downloadLink = typeof payload["download"] === "string" ? payload["download"].trim() : "";
        if (!downloadLink) {
          this.error.set("Nao foi possivel obter o link de download.");
          return;
        }
        window.open(downloadLink, "_blank", "noopener,noreferrer");
      },
      error: () => {
        this.error.set("Erro ao exportar os dados do Basket.");
      }
    });
  }
  static \u0275fac = function BasketSelectedPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasketSelectedPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasketSelectedPage, selectors: [["app-basket-selected"]], decls: 13, vars: 9, consts: [[1, "container", "py-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2"], [1, "mb-0"], ["type", "button", "aria-label", "Limpar selecao", "title", "Limpar selecao", 1, "btn", "btn-outline-danger", "basket-clear-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false"], ["fill", "currentColor", "d", "M9 3h6l1 2h4v2h-2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7H4V5h4l1-2Zm-1 4v12h8V7H8Zm2 2h2v8h-2V9Zm4 0h2v8h-2V9Z"], ["class", "mt-2 mb-2 export-actions", 4, "ngIf"], ["class", "alert alert-info mt-3", 4, "ngIf"], ["class", "alert alert-secondary mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [4, "ngIf"], [1, "mt-2", "mb-2", "export-actions"], [1, "export-label"], ["type", "button", "class", "btn btn-outline-primary btn-sm me-2 small", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "me-2", "small", 3, "click", "disabled"], [1, "alert", "alert-info", "mt-3"], [1, "alert", "alert-secondary", "mt-3"], [1, "alert", "alert-danger", "mt-3"], [1, "container"], ["class", "row mb-3 g-2", 4, "ngIf"], [1, "row", "mb-3", "g-2"], ["class", "col-6 col-md-3", 4, "ngFor", "ngForOf"], ["class", "col-md-9 col-12", 4, "ngIf"], [1, "col-12", "col-lg-3"], [1, "mt-2"], ["routerLink", "/painel", 1, "btn", "btn-sm", "btn-primary", "full"], [1, "col-6", "col-md-3"], [1, "card", "text-center", "h-100"], [1, "card-body", "py-2"], [1, "display-6", "fw-bold"], [1, "small"], [1, "col-md-9", "col-12"], [1, "nav", "nav-tabs", "mb-3"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-12"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "badge", "bg-secondary", "ms-1"], ["class", "list-group", 4, "ngIf"], ["class", "alert alert-warning mt-2", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item small", 4, "ngFor", "ngForOf"], [1, "list-group-item", "small"], [3, "innerHTML"], [1, "alert", "alert-warning", "mt-2"]], template: function BasketSelectedPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function BasketSelectedPage_Template_button_click_5_listener() {
        return ctx.clearSelection();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, BasketSelectedPage_div_8_Template, 4, 1, "div", 6)(9, BasketSelectedPage_div_9_Template, 3, 3, "div", 7)(10, BasketSelectedPage_div_10_Template, 3, 3, "div", 8)(11, BasketSelectedPage_div_11_Template, 2, 1, "div", 9)(12, BasketSelectedPage_ng_container_12_Template, 3, 1, "ng-container", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "basket.selected.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.markedIds().length === 0 || ctx.loading());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.markedIds().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.markedIds().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.results());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, HttpClientModule, TranslateModule, RouterLink, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasketSelectedPage, [{
    type: Component,
    args: [{ selector: "app-basket-selected", standalone: true, imports: [CommonModule, HttpClientModule, TranslateModule, RouterLink], template: `<section class="container py-4">\r
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">\r
    <h2 class="mb-0">{{ 'basket.selected.title' | translate }}</h2>\r
    <button\r
      type="button"\r
      class="btn btn-outline-danger basket-clear-btn"\r
      (click)="clearSelection()"\r
      [disabled]="markedIds().length === 0 || loading()"\r
      aria-label="Limpar selecao"\r
      title="Limpar selecao"\r
    >\r
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r
        <path\r
          fill="currentColor"\r
          d="M9 3h6l1 2h4v2h-2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7H4V5h4l1-2Zm-1 4v12h8V7H8Zm2 2h2v8h-2V9Zm4 0h2v8h-2V9Z"\r
        />\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <div class="mt-2 mb-2 export-actions" *ngIf="markedIds().length > 0">\r
    <span class="export-label">Exportar:</span>\r
\r
    <button\r
      *ngFor="let option of exportOptions"\r
      type="button"\r
      (click)="export(option.type)"\r
      class="btn btn-outline-primary btn-sm me-2 small"\r
      [disabled]="loading()"\r
      [attr.aria-label]="'Exportar em ' + option.label"\r
    >\r
      {{ option.label }}\r
    </button>\r
  </div>\r
\r
  <div *ngIf="markedIds().length === 0 && !loading()" class="alert alert-info mt-3">\r
    {{ 'basket.selected.none' | translate }}\r
  </div>\r
\r
  <div *ngIf="loading()" class="alert alert-secondary mt-3">\r
    {{ 'basket.selected.loading' | translate }}\r
  </div>\r
\r
  <div *ngIf="error()" class="alert alert-danger mt-3">\r
    {{ error() }}\r
  </div>\r
\r
  <ng-container *ngIf="!loading() && !error() && results()">\r
    <div class="container">\r
      <!-- Resumo totalizador no topo -->\r
      <div class="row mb-3 g-2" *ngIf="data?.ABNT">\r
        <div class="col-6 col-md-3" *ngFor="let label of abntLabels; let i = index">\r
          <div class="card text-center h-100">\r
            <div class="card-body py-2">\r
              <div class="display-6 fw-bold">{{ abntCounts[i] }}</div>\r
              <div class="small">{{ 'basket.selected.' + abntCategories[i] | translate }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="data?.ABNT" class="col-md-9 col-12">\r
\r
          <!-- Nav tabs -->\r
          <ul class="nav nav-tabs mb-3">\r
            <li class="nav-item" *ngFor="let categoria of abntCategories; let i = index">\r
              <button\r
                class="nav-link"\r
                [class.active]="activeTab() === categoria"\r
                (click)="activeTab.set(categoria)"\r
              >\r
                {{ 'basket.selected.' + categoria | translate }}\r
                <span class="badge bg-secondary ms-1">{{ abntCounts[i] }}</span>\r
              </button>\r
            </li>\r
          </ul>\r
\r
          <!-- Tab content -->\r
          <div class="col-12">\r
            <div *ngFor="let categoria of abntCategories; let i = index">\r
              <div *ngIf="activeTab() === categoria">\r
                <strong>{{ 'basket.selected.' + categoria | translate }}</strong>\r
                <ul class="list-group" *ngIf="data.ABNT[categoria]?.length > 0">\r
                  <li *ngFor="let item of data.ABNT[categoria]" class="list-group-item small">\r
                    <span [innerHTML]="item"></span>\r
                  </li>\r
                </ul>\r
                <div\r
                  *ngIf="!data.ABNT[categoria] || data.ABNT[categoria].length === 0"\r
                  class="alert alert-warning mt-2"\r
                >\r
                  {{ 'basket.selected.none_category' | translate }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-12 col-lg-3">\r
          <strong>Painel (An\xE1lise)</strong>\r
          <div class="mt-2">\r
            <a class="btn btn-sm btn-primary full" routerLink="/painel">\r
              Ir para o painel\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </ng-container>\r
</section>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasketSelectedPage, { className: "BasketSelectedPage", filePath: "src/app/pages/basket-selected/basket-selected.page.ts", lineNumber: 15 });
})();
export {
  BasketSelectedPage
};
//# sourceMappingURL=chunk-UWCGJRDS.js.map
