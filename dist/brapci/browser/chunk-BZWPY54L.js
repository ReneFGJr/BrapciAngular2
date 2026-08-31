import {
  BreadcrumbsComponent
} from "./chunk-RFP7KIPN.js";
import "./chunk-Y3JQWDW7.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3F47I5MF.js";
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
} from "./chunk-Y3FCEOIS.js";
import "./chunk-UKK5MWW6.js";

// src/app/pages/tools-text/tools-text.page.ts
var ToolsTextPage = class _ToolsTextPage {
  static \u0275fac = function ToolsTextPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsTextPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsTextPage, selectors: [["app-tools-text-page"]], decls: 31, vars: 21, consts: [["aria-labelledby", "tools-text-title", 1, "tools-wrap", "py-4"], [1, "container"], [1, "tools-card", "p-4", "p-md-5"], [1, "tools-eyebrow", "mb-2"], ["id", "tools-text-title", 1, "h2", "mb-2"], [1, "tools-subtitle", "mb-4"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], ["href", "/tools_text/specialist", 1, "d-block", "h-100", "text-decoration-none", "text-reset"], [1, "tool-item", "p-3", "h-100"], [1, "h5", "mb-2"], [1, "mb-0"]], template: function ToolsTextPage_Template(rf, ctx) {
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
      \u0275\u0275elementStart(23, "div", 7)(24, "article", 9)(25, "h2", 10);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 11);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "tools.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "tools.text.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "tools.text.subtitle"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "tools.text.card1Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "tools.text.card1Text"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 17, "tools.text.card2Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 19, "tools.text.card2Text"));
    }
  }, dependencies: [CommonModule, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.tools-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.tools-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.tool-item[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n/*# sourceMappingURL=tools-text.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsTextPage, [{
    type: Component,
    args: [{ selector: "app-tools-text-page", imports: [CommonModule, TranslateModule, BreadcrumbsComponent], template: `<section class="tools-wrap py-4" aria-labelledby="tools-text-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
\r
    <div class="tools-card p-4 p-md-5">\r
      <p class="tools-eyebrow mb-2">{{ 'tools.kicker' | translate }}</p>\r
      <h1 id="tools-text-title" class="h2 mb-2">{{ 'tools.text.title' | translate }}</h1>\r
      <p class="tools-subtitle mb-4">\r
        {{ 'tools.text.subtitle' | translate }}\r
      </p>\r
\r
      <div class="row g-3">\r
        <div class="col-12 col-md-6">\r
          <a href="/tools_text/specialist" class="d-block h-100 text-decoration-none text-reset">\r
            <article class="tool-item p-3 h-100">\r
              <h2 class="h5 mb-2">{{ 'tools.text.card1Title' | translate }}</h2>\r
              <p class="mb-0">{{ 'tools.text.card1Text' | translate }}</p>\r
            </article>\r
          </a>\r
        </div>\r
        <div class="col-12 col-md-6">\r
          <article class="tool-item p-3 h-100">\r
            <h2 class="h5 mb-2">{{ 'tools.text.card2Title' | translate }}</h2>\r
            <p class="mb-0">{{ 'tools.text.card2Text' | translate }}</p>\r
          </article>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-text/tools-text.page.scss */\n.tools-wrap {\n  color: var(--theme-ink);\n}\n.tools-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle {\n  color: var(--theme-hint);\n}\n.tool-item {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item p {\n  color: var(--theme-hint);\n}\n/*# sourceMappingURL=tools-text.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsTextPage, { className: "ToolsTextPage", filePath: "src/app/pages/tools-text/tools-text.page.ts", lineNumber: 12 });
})();
export {
  ToolsTextPage
};
//# sourceMappingURL=chunk-BZWPY54L.js.map
