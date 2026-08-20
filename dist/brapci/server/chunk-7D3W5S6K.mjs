import './polyfills.server.mjs';
import {
  BreadcrumbsComponent
} from "./chunk-ZSF25U32.mjs";
import "./chunk-Y34GZRIJ.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-L37U4KFU.mjs";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZSERIW3K.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-bibliometric/tools-bibliometric.page.ts
var ToolsBibliometricPage = class _ToolsBibliometricPage {
  static \u0275fac = function ToolsBibliometricPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsBibliometricPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsBibliometricPage, selectors: [["app-tools-bibliometric-page"]], decls: 32, vars: 21, consts: [["aria-labelledby", "tools-bibliometric-title", 1, "tools-wrap", "py-4"], [1, "container"], [1, "tools-card", "p-4", "p-md-5"], [1, "tools-eyebrow", "mb-2"], ["id", "tools-bibliometric-title", 1, "h2", "mb-2"], [1, "tools-subtitle", "mb-4"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], ["href", "/tools/txt4net", 1, "d-block", "h-100", "text-decoration-none", "text-reset"], [1, "tool-item", "p-3", "h-100"], [1, "h5", "mb-2"], [1, "mb-0"], ["href", "/tools/term4net", 1, "d-block", "h-100", "text-decoration-none", "text-reset"]], template: function ToolsBibliometricPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2)(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "a", 8)(16, "article", 9)(17, "h2", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 11);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 7)(24, "a", 12)(25, "article", 9)(26, "h2", 10);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 11);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "tools.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "tools.bibliometric.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "tools.bibliometric.subtitle"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "tools.bibliometric.card1Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "tools.bibliometric.card1Text"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 17, "tools.bibliometric.card2Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 19, "tools.bibliometric.card2Text"));
    }
  }, dependencies: [CommonModule, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.tools-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.tools-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.tool-item[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n/*# sourceMappingURL=tools-bibliometric.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsBibliometricPage, [{
    type: Component,
    args: [{ selector: "app-tools-bibliometric-page", imports: [CommonModule, TranslateModule, BreadcrumbsComponent], template: `<section class="tools-wrap py-4" aria-labelledby="tools-bibliometric-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
\r
    <div class="tools-card p-4 p-md-5">\r
      <p class="tools-eyebrow mb-2">{{ 'tools.kicker' | translate }}</p>\r
      <h1 id="tools-bibliometric-title" class="h2 mb-2">{{ 'tools.bibliometric.title' | translate }}</h1>\r
      <p class="tools-subtitle mb-4">\r
        {{ 'tools.bibliometric.subtitle' | translate }}\r
      </p>\r
\r
      <div class="row g-3">\r
        <div class="col-12 col-md-6">
          <a href="/tools/txt4net" class="d-block h-100 text-decoration-none text-reset">
            <article class="tool-item p-3 h-100">
              <h2 class="h5 mb-2">{{ 'tools.bibliometric.card1Title' | translate }}</h2>
              <p class="mb-0">{{ 'tools.bibliometric.card1Text' | translate }}</p>
            </article>
          </a>
        </div>
        <div class="col-12 col-md-6">
          <a href="/tools/term4net" class="d-block h-100 text-decoration-none text-reset">
            <article class="tool-item p-3 h-100">
              <h2 class="h5 mb-2">{{ 'tools.bibliometric.card2Title' | translate }}</h2>
              <p class="mb-0">{{ 'tools.bibliometric.card2Text' | translate }}</p>
            </article>
          </a>
        </div>
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-bibliometric/tools-bibliometric.page.scss */\n.tools-wrap {\n  color: var(--theme-ink);\n}\n.tools-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle {\n  color: var(--theme-hint);\n}\n.tool-item {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item p {\n  color: var(--theme-hint);\n}\n/*# sourceMappingURL=tools-bibliometric.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsBibliometricPage, { className: "ToolsBibliometricPage", filePath: "src/app/pages/tools-bibliometric/tools-bibliometric.page.ts", lineNumber: 12 });
})();
export {
  ToolsBibliometricPage
};
//# sourceMappingURL=chunk-7D3W5S6K.mjs.map
