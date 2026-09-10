import './polyfills.server.mjs';
import {
  BreadcrumbsComponent
} from "./chunk-WCYYMEWF.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-KVBU5WEP.mjs";
import "./chunk-HFOHCKS4.mjs";
import {
  CommonModule,
  Component,
  HttpClient,
  Router,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TMIH7BOS.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/eventos/eventos.page.ts
var _forTrack0 = ($index, $item) => $item.id_jnl;
function EventosPage_Conditional_3_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const journal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", journal_r2.cover, \u0275\u0275sanitizeUrl)("alt", journal_r2.jnl_name);
  }
}
function EventosPage_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275listener("click", function EventosPage_Conditional_3_For_7_Template_div_click_1_listener() {
      const journal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openV(journal_r2));
    });
    \u0275\u0275conditionalCreate(2, EventosPage_Conditional_3_For_7_Conditional_2_Template, 1, 2, "img", 8);
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const journal_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(journal_r2.cover ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(journal_r2.jnl_name_abrev);
  }
}
function EventosPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275repeaterCreate(6, EventosPage_Conditional_3_For_7_Template, 5, 2, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "journals.eventsList"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.journals());
  }
}
var EventosPage = class _EventosPage {
  http = inject(HttpClient);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  journals = signal([], ...ngDevMode ? [{ debugName: "journals" }] : []);
  hasResults = computed(() => this.journals().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  constructor() {
    this.loadJournals();
  }
  loadJournals() {
    this.loading.set(true);
    this.error.set("");
    this.http.get("https://cip.brapci.inf.br/api/brapci/source/E").subscribe({
      next: (response) => {
        const items = Array.isArray(response) ? response : [];
        this.journals.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.journals.set([]);
        this.error.set("N\xE3o foi poss\xEDvel carregar as revistas. Tente novamente mais tarde.");
        this.loading.set(false);
      }
    });
  }
  openV(journal) {
    const id = String(journal?.jnl_frbr ?? "").trim();
    if (!id) {
      return;
    }
    this.router.navigate(["/v/", id]);
  }
  static \u0275fac = function EventosPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventosPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventosPage, selectors: [["app-eventos-page"]], decls: 4, vars: 1, consts: [["aria-labelledby", "eventos-title", 1, "perfil-wrap", "py-4"], [1, "container"], [1, "container", "mt-0", "mb-4"], [1, "col-12"], ["id", "eventos-title", 1, "eventos-title", "mb-0"], [1, "container", "revistas-grid"], [1, "revista-card", "border", "p-0"], [2, "cursor", "pointer", 3, "click"], [1, "revista-cover", 3, "src", "alt"], [1, "mb-2", "small"]], template: function EventosPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, EventosPage_Conditional_3_Template, 8, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.hasResults() ? 3 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.revistas-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: calc(100vh - 70px);\n}\n.revistas-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.revistas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.eventos-title[_ngcontent-%COMP%] {\n  color: #222;\n}\n@media (min-width: 992px) {\n  .revistas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\n.revista-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n}\n.revista-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.revista-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  word-break: break-word;\n}\n.revista-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333;\n}\n.revista-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.revista-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-weight: 500;\n}\n.revista-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #0052a3;\n  text-decoration: underline;\n}\n.revista-cover[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 0;\n  background: #f0f0f0;\n}\n.small[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.35rem 0 0.5rem;\n  padding: 0 0.25rem;\n  font-size: 0.875rem;\n  color: #666;\n  line-height: 1.25rem;\n  text-align: center;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .eventos-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .eventos-title[_ngcontent-%COMP%] {\n  color: #e8e8e8;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n  border-color: #444;\n  border: 1px solid #444;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);\n  border-color: #666;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-cover[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-cover[_ngcontent-%COMP%] {\n  background: #444;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .small[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n/*# sourceMappingURL=eventos.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventosPage, [{
    type: Component,
    args: [{ selector: "app-eventos-page", imports: [CommonModule, TranslateModule, BreadcrumbsComponent], template: `<section class="perfil-wrap py-4" aria-labelledby="eventos-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
  </div>\r
\r
@if (hasResults()) {\r
  <div class="container mt-0 mb-4">\r
    <div class="col-12">\r
      <h2 id="eventos-title" class="eventos-title mb-0">{{ 'journals.eventsList' | translate }}</h2>\r
    </div>\r
  </div>\r
  <div class="container revistas-grid">\r
    @for (journal of journals(); track journal.id_jnl) {\r
      <div class="revista-card border p-0">\r
        <div style="cursor: pointer" (click)="openV(journal)">\r
        @if (journal.cover) {\r
          <img class="revista-cover" [src]="journal.cover" [alt]="journal.jnl_name" />\r
        }\r
\r
        <span class="mb-2 small">{{ journal.jnl_name_abrev }}</span>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
}\r
</section>\r
`, styles: ["/* src/app/pages/eventos/eventos.page.scss */\n.revistas-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: calc(100vh - 70px);\n}\n.revistas-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.revistas-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.eventos-title {\n  color: #222;\n}\n@media (min-width: 992px) {\n  .revistas-grid {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\n.revista-card {\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n}\n.revista-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.revista-card h2 {\n  color: #333;\n  word-break: break-word;\n}\n.revista-card p {\n  color: #333;\n}\n.revista-card p strong {\n  color: #333;\n}\n.revista-card .link {\n  color: #0066cc;\n  text-decoration: none;\n  font-weight: 500;\n}\n.revista-card .link:hover {\n  color: #0052a3;\n  text-decoration: underline;\n}\n.revista-cover {\n  display: block;\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 0;\n  background: #f0f0f0;\n}\n.small {\n  display: block;\n  margin: 0.35rem 0 0.5rem;\n  padding: 0 0.25rem;\n  font-size: 0.875rem;\n  color: #666;\n  line-height: 1.25rem;\n  text-align: center;\n}\n:host-context(body.theme-master.theme-dark) .revistas-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\n:host-context(body.theme-master.theme-dark) .eventos-title {\n  color: #e8e8e8;\n}\n:host-context(body.theme-master.theme-dark) .revista-card {\n  background: #2a2a2a;\n  border-color: #444;\n  border: 1px solid #444;\n}\n:host-context(body.theme-master.theme-dark) .revista-card:hover {\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);\n  border-color: #666;\n}\n:host-context(body.theme-master.theme-dark) .revista-cover {\n  background: #444;\n}\n:host-context(body.theme-master.theme-dark) .small {\n  color: #b0b0b0;\n}\n/*# sourceMappingURL=eventos.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventosPage, { className: "EventosPage", filePath: "src/app/pages/eventos/eventos.page.ts", lineNumber: 30 });
})();
export {
  EventosPage
};
//# sourceMappingURL=chunk-6GTJOTPF.mjs.map
