import './polyfills.server.mjs';
import {
  BreadcrumbsComponent
} from "./chunk-626Q7N5T.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PPKTTR3S.mjs";
import "./chunk-VL7NMCPF.mjs";
import {
  CommonModule,
  RouterLink
} from "./chunk-TG5MYEEE.mjs";
import {
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
} from "./chunk-QTSSUGT7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-bibliografics/tools-bibliografics.page.ts
var ToolsBibliograficsPage = class _ToolsBibliograficsPage {
  static \u0275fac = function ToolsBibliograficsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsBibliograficsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsBibliograficsPage, selectors: [["app-tools-bibliografics-page"]], decls: 38, vars: 27, consts: [["aria-labelledby", "tools-title", 1, "tools-wrap", "py-4"], [1, "container"], [1, "tools-card", "p-4", "p-md-5"], [1, "tools-eyebrow", "mb-2"], ["id", "tools-title", 1, "h2", "mb-2"], [1, "tools-subtitle", "mb-4"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], ["routerLink", "/tools/normalize_cites", 1, "tool-item", "tool-item-link", "d-block", "p-3", "h-100"], [1, "h5", "mb-2"], [1, "mb-0"], [1, "tool-item", "p-3", "h-100"], ["routerLink", "/tools/halflive", 1, "tool-item", "tool-item-link", "d-block", "p-3", "h-100"]], template: function ToolsBibliograficsPage_Template(rf, ctx) {
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
      \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "a", 8)(16, "h2", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 10);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 7)(23, "article", 11)(24, "h2", 9);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 10);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 7)(31, "a", 12)(32, "h2", 9);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 10);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "tools.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "tools.bibliographics.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "tools.bibliographics.subtitle"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 15, "tools.bibliographics.card1Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, "tools.bibliographics.card1Text"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 19, "tools.bibliographics.card2Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 21, "tools.bibliographics.card2Text"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 23, "tools.bibliographics.card3Title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 25, "tools.bibliographics.card3Text"));
    }
  }, dependencies: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.tools-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.tools-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.tool-item[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.tool-item-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.tool-item-link[_ngcontent-%COMP%]:hover, \n.tool-item-link[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--theme-link);\n  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=tools-bibliografics.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsBibliograficsPage, [{
    type: Component,
    args: [{ selector: "app-tools-bibliografics-page", imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent], template: `<section class="tools-wrap py-4" aria-labelledby="tools-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
\r
    <div class="tools-card p-4 p-md-5">\r
      <p class="tools-eyebrow mb-2">{{ 'tools.kicker' | translate }}</p>\r
      <h1 id="tools-title" class="h2 mb-2">{{ 'tools.bibliographics.title' | translate }}</h1>\r
      <p class="tools-subtitle mb-4">\r
        {{ 'tools.bibliographics.subtitle' | translate }}\r
      </p>\r
\r
      <div class="row g-3">\r
        <div class="col-12 col-md-6">\r
          <a class="tool-item tool-item-link d-block p-3 h-100" routerLink="/tools/normalize_cites">
            <h2 class="h5 mb-2">{{ 'tools.bibliographics.card1Title' | translate }}</h2>
            <p class="mb-0">{{ 'tools.bibliographics.card1Text' | translate }}</p>
          </a>
        </div>\r
        <div class="col-12 col-md-6">
          <article class="tool-item p-3 h-100">
            <h2 class="h5 mb-2">{{ 'tools.bibliographics.card2Title' | translate }}</h2>
            <p class="mb-0">{{ 'tools.bibliographics.card2Text' | translate }}</p>
          </article>
        </div>
        <div class="col-12 col-md-6">
          <a class="tool-item tool-item-link d-block p-3 h-100" routerLink="/tools/halflive">
            <h2 class="h5 mb-2">{{ 'tools.bibliographics.card3Title' | translate }}</h2>
            <p class="mb-0">{{ 'tools.bibliographics.card3Text' | translate }}</p>
          </a>
        </div>
      </div>
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-bibliografics/tools-bibliografics.page.scss */\n.tools-wrap {\n  color: var(--theme-ink);\n}\n.tools-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.tools-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.tools-subtitle {\n  color: var(--theme-hint);\n}\n.tool-item {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.tool-item p {\n  color: var(--theme-hint);\n}\n.tool-item-link {\n  color: inherit;\n  text-decoration: none;\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.tool-item-link:hover,\n.tool-item-link:focus-visible {\n  border-color: var(--theme-link);\n  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=tools-bibliografics.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsBibliograficsPage, { className: "ToolsBibliograficsPage", filePath: "src/app/pages/tools-bibliografics/tools-bibliografics.page.ts", lineNumber: 13 });
})();
export {
  ToolsBibliograficsPage
};
//# sourceMappingURL=chunk-AYNEXVB3.mjs.map
