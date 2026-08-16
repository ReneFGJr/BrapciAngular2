import './polyfills.server.mjs';
import {
  BrapciApiService
} from "./chunk-I4OFVR6D.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-JRAWCWAR.mjs";
import "./chunk-B75V37RH.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-WIMNDPIY.mjs";
import "./chunk-CAKRQXY5.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ROSQ7UD6.mjs";
import {
  CommonModule,
  Component,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WX7YRWV7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/autoridade/autoridade.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function AutoridadePage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authority.loading"));
  }
}
function AutoridadePage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", entry_r2.picture, \u0275\u0275sanitizeUrl)("alt", entry_r2.term);
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r2.term.charAt(0));
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 16);
    \u0275\u0275conditionalCreate(2, AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Conditional_2_Template, 1, 2, "img", 17)(3, AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Conditional_3_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(4, "span", 19)(5, "strong", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", "/v/" + entry_r2.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r2.picture ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r2.term);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", entry_r2.id);
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 13);
    \u0275\u0275text(1, "Autores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 14);
    \u0275\u0275repeaterCreate(3, AutoridadePage_Conditional_21_Conditional_0_Conditional_0_For_4_Template, 9, 4, "li", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.results());
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", entry_r3.picture, \u0275\u0275sanitizeUrl)("alt", entry_r3.term);
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.term.charAt(0));
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 16);
    \u0275\u0275conditionalCreate(2, AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Conditional_2_Template, 1, 2, "img", 17)(3, AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Conditional_3_Template, 2, 1, "span", 18);
    \u0275\u0275elementStart(4, "span", 19)(5, "strong", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", "/v/" + entry_r3.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r3.picture ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r3.term);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", entry_r3.id);
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 13);
    \u0275\u0275text(1, "Corporate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 22);
    \u0275\u0275repeaterCreate(3, AutoridadePage_Conditional_21_Conditional_0_Conditional_1_For_4_Template, 9, 4, "li", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.corporateResults());
  }
}
function AutoridadePage_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AutoridadePage_Conditional_21_Conditional_0_Conditional_0_Template, 5, 0);
    \u0275\u0275conditionalCreate(1, AutoridadePage_Conditional_21_Conditional_0_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.hasResults() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasCorporateResults() ? 1 : -1);
  }
}
function AutoridadePage_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authority.empty"));
  }
}
function AutoridadePage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AutoridadePage_Conditional_21_Conditional_0_Template, 2, 2)(1, AutoridadePage_Conditional_21_Conditional_1_Template, 3, 3, "p", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasAnyResults() ? 0 : 1);
  }
}
var AutoridadePage = class _AutoridadePage {
  brapciApiService = inject(BrapciApiService);
  translate = inject(TranslateService);
  term = signal("", ...ngDevMode ? [{ debugName: "term" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  results = signal([], ...ngDevMode ? [{ debugName: "results" }] : []);
  corporateResults = signal([], ...ngDevMode ? [{ debugName: "corporateResults" }] : []);
  hasResults = computed(() => this.results().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  hasCorporateResults = computed(() => this.corporateResults().length > 0, ...ngDevMode ? [{ debugName: "hasCorporateResults" }] : []);
  hasAnyResults = computed(() => this.hasResults() || this.hasCorporateResults(), ...ngDevMode ? [{ debugName: "hasAnyResults" }] : []);
  normalizeItems(items) {
    if (!items) {
      return [];
    }
    if (Array.isArray(items)) {
      return items;
    }
    return Object.values(items);
  }
  constructor() {
    this.search();
  }
  search() {
    const value = this.term().trim();
    if (!value) {
      this.results.set([]);
      this.corporateResults.set([]);
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.brapciApiService.authoritySearch(value).subscribe({
      next: (response) => {
        const items = this.normalizeItems(response.data?.item);
        const corporate = this.normalizeItems(response.data?.corporate);
        const filtered = items.filter((entry) => !!entry.ID && !!entry.use && entry.ID === entry.use).map((entry) => ({
          id: entry.ID,
          term: (entry.Term ?? "").trim() || entry.ID,
          picture: (entry.picture ?? "").trim() || void 0
        }));
        const corporateFiltered = corporate.filter((entry) => !!entry.ID && !!entry.use && entry.ID === entry.use).map((entry) => ({
          id: entry.ID,
          term: (entry.Term ?? "").trim() || entry.ID,
          picture: (entry.picture ?? "").trim() || void 0
        }));
        this.results.set(filtered);
        this.corporateResults.set(corporateFiltered);
        this.loading.set(false);
      },
      error: () => {
        this.results.set([]);
        this.corporateResults.set([]);
        this.error.set(this.translate.instant("authority.apiError"));
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function AutoridadePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoridadePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoridadePage, selectors: [["app-autoridade-page"]], decls: 22, vars: 20, consts: [["aria-labelledby", "autoridade-title", 1, "autoridade-wrap", "py-4"], [1, "container"], [1, "autoridade-card"], ["src", "assets/img/banner_authority.png", 1, "autoridade-banner", 3, "alt"], ["id", "autoridade-title", 1, "h2", "mt-3", "mb-3", "p-3"], [1, "autoridade-form", "mb-4", 3, "ngSubmit"], ["for", "term", 1, "form-label", "ps-3"], [1, "input-group", "ps-3", "pe-3"], ["id", "term", "name", "term", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "mb-0"], [1, "autoridade-error", "mb-0"], [1, "mb-0", "ps-3", "p-3"], [1, "autoridade-section-title", "ps-3", "pe-3", "mb-2"], [1, "autoridade-results", "mb-3", "ps-3", "pe-3"], [1, "autoridade-result-item"], [1, "autoridade-link", 3, "href"], ["loading", "lazy", 1, "autoridade-picture", 3, "src", "alt"], ["aria-hidden", "true", 1, "autoridade-picture", "autoridade-picture--placeholder"], [1, "autoridade-content"], [1, "autoridade-term"], [1, "autoridade-id"], [1, "autoridade-results", "mb-0", "ps-3", "pe-3"]], template: function AutoridadePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "h1", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function AutoridadePage_Template_form_ngSubmit_9_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(10, "label", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "input", 8);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("ngModelChange", function AutoridadePage_Template_input_ngModelChange_14_listener($event) {
        return ctx.term.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, AutoridadePage_Conditional_19_Template, 3, 3, "p", 10);
      \u0275\u0275conditionalCreate(20, AutoridadePage_Conditional_20_Template, 2, 1, "p", 11);
      \u0275\u0275conditionalCreate(21, AutoridadePage_Conditional_21_Template, 2, 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("alt", \u0275\u0275pipeBind1(5, 10, "authority.bannerAlt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "authority.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "authority.searchLabel"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.term())("placeholder", \u0275\u0275pipeBind1(15, 16, "authority.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "search.button"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 21 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.autoridade-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.autoridade-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.autoridade-banner[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  display: block;\n  max-height: 240px;\n  object-fit: cover;\n  width: 100%;\n}\n.autoridade-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n.autoridade-results[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.autoridade-section-title[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 1rem;\n  font-weight: 700;\n}\n.autoridade-result-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.autoridade-link[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.6rem;\n  color: var(--theme-ink);\n  display: flex;\n  gap: 0.75rem;\n  min-height: 4.4rem;\n  padding: 0.5rem 0.65rem;\n  text-decoration: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.autoridade-link[_ngcontent-%COMP%]:hover, \n.autoridade-link[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--theme-hint);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.09);\n  color: var(--theme-hint);\n  text-decoration: none;\n  transform: translateY(-1px);\n}\n.autoridade-picture[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.5rem;\n  flex: 0 0 3.1rem;\n  height: 3.1rem;\n  object-fit: cover;\n  width: 3.1rem;\n}\n.autoridade-picture--placeholder[_ngcontent-%COMP%] {\n  align-items: center;\n  background: color-mix(in oklab, var(--theme-sand) 60%, var(--theme-hint) 40%);\n  color: var(--theme-card-bg);\n  display: inline-flex;\n  font-size: 1.05rem;\n  font-weight: 700;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.autoridade-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n  min-width: 0;\n}\n.autoridade-term[_ngcontent-%COMP%] {\n  color: inherit;\n  display: block;\n  overflow-wrap: anywhere;\n}\n.autoridade-id[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  display: block;\n  font-size: 0.78rem;\n}\n.autoridade-error[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n}\n/*# sourceMappingURL=autoridade.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoridadePage, [{
    type: Component,
    args: [{ selector: "app-autoridade-page", imports: [CommonModule, FormsModule, TranslateModule, BreadcrumbsComponent], template: `<section class="autoridade-wrap py-4" aria-labelledby="autoridade-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
\r
    <div class="autoridade-card">\r
      <img class="autoridade-banner" src="assets/img/banner_authority.png" [alt]="'authority.bannerAlt' | translate" />\r
\r
      <h1 id="autoridade-title" class="h2 mt-3 mb-3 p-3">{{ 'authority.title' | translate }}</h1>\r
\r
      <form class="autoridade-form mb-4" (ngSubmit)="search()">\r
        <label for="term" class="form-label ps-3">{{ 'authority.searchLabel' | translate }}</label>\r
        <div class="input-group ps-3 pe-3">\r
          <input\r
            id="term"\r
            name="term"\r
            class="form-control"\r
            [ngModel]="term()"\r
            (ngModelChange)="term.set($event)"\r
            [placeholder]="'authority.placeholder' | translate"\r
          />\r
          <button type="submit" class="btn btn-primary" [disabled]="loading()">{{ 'search.button' | translate }}</button>\r
        </div>\r
      </form>\r
\r
      @if (loading()) {\r
        <p class="mb-0">{{ 'authority.loading' | translate }}</p>\r
      }\r
\r
      @if (error()) {\r
        <p class="autoridade-error mb-0">{{ error() }}</p>\r
      }\r
\r
      @if (!loading() && !error()) {\r
\r
        @if (hasAnyResults()) {\r
          @if (hasResults()) {\r
            <h2 class="autoridade-section-title ps-3 pe-3 mb-2">Autores</h2>\r
            <ul class="autoridade-results mb-3 ps-3 pe-3">\r
              @for (entry of results(); track entry.id) {\r
                <li class="autoridade-result-item">\r
                  <a class="autoridade-link" [href]="'/v/' + entry.id">\r
                    @if (entry.picture) {\r
                      <img class="autoridade-picture" [src]="entry.picture" [alt]="entry.term" loading="lazy" />\r
                    } @else {\r
                      <span class="autoridade-picture autoridade-picture--placeholder" aria-hidden="true">{{ entry.term.charAt(0) }}</span>\r
                    }\r
                    <span class="autoridade-content">\r
                      <strong class="autoridade-term">{{ entry.term }}</strong>\r
                      <small class="autoridade-id">ID: {{ entry.id }}</small>\r
                    </span>\r
                  </a>\r
                </li>\r
              }\r
            </ul>\r
          }\r
\r
          @if (hasCorporateResults()) {\r
            <h2 class="autoridade-section-title ps-3 pe-3 mb-2">Corporate</h2>\r
            <ul class="autoridade-results mb-0 ps-3 pe-3">\r
              @for (entry of corporateResults(); track entry.id) {\r
                <li class="autoridade-result-item">\r
                  <a class="autoridade-link" [href]="'/v/' + entry.id">\r
                    @if (entry.picture) {\r
                      <img class="autoridade-picture" [src]="entry.picture" [alt]="entry.term" loading="lazy" />\r
                    } @else {\r
                      <span class="autoridade-picture autoridade-picture--placeholder" aria-hidden="true">{{ entry.term.charAt(0) }}</span>\r
                    }\r
                    <span class="autoridade-content">\r
                      <strong class="autoridade-term">{{ entry.term }}</strong>\r
                      <small class="autoridade-id">ID: {{ entry.id }}</small>\r
                    </span>\r
                  </a>\r
                </li>\r
              }\r
            </ul>\r
          }\r
        } @else {\r
          <p class="mb-0 ps-3 p-3">{{ 'authority.empty' | translate }}</p>\r
        }\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/autoridade/autoridade.page.scss */\n.autoridade-wrap {\n  color: var(--theme-ink);\n}\n.autoridade-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.autoridade-banner {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  display: block;\n  max-height: 240px;\n  object-fit: cover;\n  width: 100%;\n}\n.autoridade-form {\n  display: grid;\n  gap: 0.55rem;\n}\n.autoridade-results {\n  display: grid;\n  gap: 0.55rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.autoridade-section-title {\n  color: var(--theme-hint);\n  font-size: 1rem;\n  font-weight: 700;\n}\n.autoridade-result-item {\n  margin: 0;\n}\n.autoridade-link {\n  align-items: center;\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.6rem;\n  color: var(--theme-ink);\n  display: flex;\n  gap: 0.75rem;\n  min-height: 4.4rem;\n  padding: 0.5rem 0.65rem;\n  text-decoration: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.autoridade-link:hover,\n.autoridade-link:focus-visible {\n  border-color: var(--theme-hint);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.09);\n  color: var(--theme-hint);\n  text-decoration: none;\n  transform: translateY(-1px);\n}\n.autoridade-picture {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.5rem;\n  flex: 0 0 3.1rem;\n  height: 3.1rem;\n  object-fit: cover;\n  width: 3.1rem;\n}\n.autoridade-picture--placeholder {\n  align-items: center;\n  background: color-mix(in oklab, var(--theme-sand) 60%, var(--theme-hint) 40%);\n  color: var(--theme-card-bg);\n  display: inline-flex;\n  font-size: 1.05rem;\n  font-weight: 700;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.autoridade-content {\n  display: grid;\n  gap: 0.18rem;\n  min-width: 0;\n}\n.autoridade-term {\n  color: inherit;\n  display: block;\n  overflow-wrap: anywhere;\n}\n.autoridade-id {\n  color: var(--theme-hint);\n  display: block;\n  font-size: 0.78rem;\n}\n.autoridade-error {\n  color: var(--theme-error);\n}\n/*# sourceMappingURL=autoridade.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoridadePage, { className: "AutoridadePage", filePath: "src/app/pages/autoridade/autoridade.page.ts", lineNumber: 34 });
})();
export {
  AutoridadePage
};
//# sourceMappingURL=chunk-NBGF2NVE.mjs.map
