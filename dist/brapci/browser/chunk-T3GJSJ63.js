import {
  BrapciApiService
} from "./chunk-I3Q2WKSF.js";
import "./chunk-DKSORO5X.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-PHIXLPJT.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-DD5AALCM.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGL3YMRP.js";
import "./chunk-3OV72XIM.js";

// src/app/components/cited-search/cited-search.component.ts
var _c0 = (a0) => ["/v", a0];
function CitedSearchComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "cited.loading"));
  }
}
function CitedSearchComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function CitedSearchComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cited.empty"), " ");
  }
}
function CitedSearchComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Total de referencias localizadas: ", ctx_r0.cards().length, " ");
  }
}
function CitedSearchComponent_div_22_tr_15_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, card_r2.rdf));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r2.rdf, " ");
  }
}
function CitedSearchComponent_div_22_tr_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CitedSearchComponent_div_22_tr_15_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.getDoiUrl(card_r2.doi), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r2.doi, " ");
  }
}
function CitedSearchComponent_div_22_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CitedSearchComponent_div_22_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, CitedSearchComponent_div_22_tr_15_a_2_Template, 2, 4, "a", 24)(3, CitedSearchComponent_div_22_tr_15_span_3_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, CitedSearchComponent_div_22_tr_15_a_11_Template, 2, 2, "a", 27)(12, CitedSearchComponent_div_22_tr_15_span_12_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r2.rdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !card_r2.rdf);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.year || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.type || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.text);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r2.doi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !card_r2.doi);
  }
}
function CitedSearchComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 19)(2, "thead")(3, "tr")(4, "th", 20);
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 20);
    \u0275\u0275text(7, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 20);
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 21);
    \u0275\u0275text(11, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 22);
    \u0275\u0275text(13, "DOI");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, CitedSearchComponent_div_22_tr_15_Template, 13, 7, "tr", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.cards());
  }
}
var CitedSearchComponent = class _CitedSearchComponent {
  brapciApiService = inject(BrapciApiService);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  searched = signal(false, ...ngDevMode ? [{ debugName: "searched" }] : []);
  cards = signal([], ...ngDevMode ? [{ debugName: "cards" }] : []);
  hasResults = computed(() => this.cards().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  searchCitations() {
    const term = this.query().trim();
    if (!term) {
      this.searched.set(false);
      this.error.set(null);
      this.cards.set([]);
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.searched.set(true);
    this.brapciApiService.citedSearch(term).subscribe({
      next: (response) => {
        const works = this.normalizeWorks(response);
        console.log("Normalized works:", works);
        this.cards.set(works.map((work) => this.toCard(work)).filter((card) => card.text.length > 0));
        this.loading.set(false);
      },
      error: () => {
        this.error.set("cited.error");
        this.cards.set([]);
        this.loading.set(false);
      }
    });
  }
  normalizeWorks(response) {
    if (Array.isArray(response)) {
      return response;
    }
    if (!response || typeof response !== "object") {
      return [];
    }
    const root = response;
    if (Array.isArray(root["works"])) {
      return root["works"];
    }
    if (Array.isArray(root["results"])) {
      return root["results"];
    }
    if (Array.isArray(root["items"])) {
      return root["items"];
    }
    if (Array.isArray(root["data"])) {
      return root["data"];
    }
    return [];
  }
  toCard(work) {
    const entry = this.asRecord(work);
    return {
      text: this.toText(entry["ca_text"]),
      rdf: this.toText(entry["ca_rdf"]),
      doi: this.toText(entry["ca_doi"]),
      year: this.toText(entry["ca_year"]),
      type: this.toText(entry["ca_tipo"])
    };
  }
  getDoiUrl(doi) {
    const trimmedDoi = doi.trim();
    if (!trimmedDoi) {
      return "";
    }
    if (/^https?:\/\//i.test(trimmedDoi)) {
      return trimmedDoi;
    }
    return `https://doi.org/${trimmedDoi.replace(/^doi:\s*/i, "")}`;
  }
  asRecord(value) {
    return value && typeof value === "object" ? value : {};
  }
  toText(value) {
    return typeof value === "string" ? value.trim() : value === null || value === void 0 ? "" : String(value);
  }
  static \u0275fac = function CitedSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CitedSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CitedSearchComponent, selectors: [["app-cited-search"]], decls: 23, vars: 22, consts: [["aria-labelledby", "cited-title", 1, "cited-search"], [1, "cited-search__header"], ["id", "cited-title", 1, "cited-search__title"], [1, "cited-search__subtitle"], [1, "cited-search__form", 3, "ngSubmit"], ["for", "cited-query", 1, "form-label"], [1, "input-group"], ["id", "cited-query", "name", "citedQuery", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "alert alert-secondary mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], ["class", "alert alert-info mt-3", 4, "ngIf"], ["class", "cited-search__count", 4, "ngIf"], ["class", "cited-search__table-wrap", 4, "ngIf"], [1, "alert", "alert-secondary", "mt-3"], [1, "alert", "alert-danger", "mt-3"], [1, "alert", "alert-info", "mt-3"], [1, "cited-search__count"], [1, "cited-search__table-wrap"], [1, "cited-search__table"], ["width", "5%"], ["width", "70%"], ["width", "15%"], [4, "ngFor", "ngForOf"], ["class", "citation-card__id-link", "target", "_blank", "rel", "noopener noreferrer", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], [1, "cited-search__reference"], ["class", "citation-card__id-link", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "citation-card__id-link", 3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", 1, "citation-card__id-link", 3, "href"]], template: function CitedSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function CitedSearchComponent_Template_form_ngSubmit_8_listener() {
        return ctx.searchCitations();
      });
      \u0275\u0275elementStart(9, "label", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "input", 7);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("ngModelChange", function CitedSearchComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.query.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, CitedSearchComponent_div_18_Template, 3, 3, "div", 9)(19, CitedSearchComponent_div_19_Template, 3, 3, "div", 10)(20, CitedSearchComponent_div_20_Template, 3, 3, "div", 11)(21, CitedSearchComponent_p_21_Template, 2, 1, "p", 12)(22, CitedSearchComponent_div_22_Template, 16, 1, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "cited.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "cited.subtitle"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "cited.inputLabel"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.query())("placeholder", \u0275\u0275pipeBind1(14, 18, "cited.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, "cited.searchButton"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searched() && !ctx.loading() && !ctx.error() && !ctx.hasResults());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.hasResults());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.hasResults());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.cited-search[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.cited-search__header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n.cited-search__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cited-search__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-muted);\n}\n.cited-search__count[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-ink);\n  font-weight: 600;\n}\n.cited-search__table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: var(--theme-card-bg);\n}\n.cited-search__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 760px;\n}\n.cited-search__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.cited-search__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.625rem;\n  border-bottom: 1px solid var(--theme-line);\n  vertical-align: top;\n  font-size: 0.9rem;\n}\n.cited-search__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-weight: 600;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n}\n.cited-search__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.cited-search__reference[_ngcontent-%COMP%] {\n  min-width: 28rem;\n  color: var(--theme-ink);\n  line-height: 1.35;\n}\n.citation-card__id-link[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  text-decoration: none;\n  font-weight: 600;\n}\n.citation-card__id-link[_ngcontent-%COMP%]:hover {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.cited-search__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  color: var(--theme-muted);\n  word-break: break-word;\n}\n@media (max-width: 640px) {\n  .cited-search__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .cited-search__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.45rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=cited-search.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CitedSearchComponent, [{
    type: Component,
    args: [{ selector: "app-cited-search", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<section class="cited-search" aria-labelledby="cited-title">\r
  <header class="cited-search__header">\r
    <h2 id="cited-title" class="cited-search__title">{{ 'cited.title' | translate }}</h2>\r
    <p class="cited-search__subtitle">{{ 'cited.subtitle' | translate }}</p>\r
  </header>\r
\r
  <form class="cited-search__form" (ngSubmit)="searchCitations()">\r
    <label for="cited-query" class="form-label">{{ 'cited.inputLabel' | translate }}</label>\r
    <div class="input-group">\r
      <input\r
        id="cited-query"\r
        name="citedQuery"\r
        class="form-control"\r
        [ngModel]="query()"\r
        (ngModelChange)="query.set($event)"\r
        [placeholder]="'cited.placeholder' | translate"\r
      />\r
      <button type="submit" class="btn btn-primary" [disabled]="loading()">\r
        {{ 'cited.searchButton' | translate }}\r
      </button>\r
    </div>\r
  </form>\r
\r
  <div *ngIf="loading()" class="alert alert-secondary mt-3">{{ 'cited.loading' | translate }}</div>\r
  <div *ngIf="error()" class="alert alert-danger mt-3">{{ error()! | translate }}</div>\r
\r
  <div *ngIf="searched() && !loading() && !error() && !hasResults()" class="alert alert-info mt-3">\r
    {{ 'cited.empty' | translate }}\r
  </div>\r
\r
  <p class="cited-search__count" *ngIf="!loading() && hasResults()">\r
    Total de referencias localizadas: {{ cards().length }}\r
  </p>\r
\r
  <div class="cited-search__table-wrap" *ngIf="!loading() && hasResults()">\r
    <table class="cited-search__table">\r
      <thead>\r
        <tr>\r
          <th width="5%">ID</th>\r
          <th width="5%">Ano</th>\r
          <th width="5%">Tipo</th>\r
          <th width="70%">Referencia</th>\r
          <th width="15%">DOI</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let card of cards()">\r
          <td>\r
            <a\r
              *ngIf="card.rdf"\r
              class="citation-card__id-link"\r
              [routerLink]="['/v', card.rdf]"\r
              target="_blank"\r
              rel="noopener noreferrer"\r
            >\r
              {{ card.rdf }}\r
            </a>\r
            <span *ngIf="!card.rdf">-</span>\r
          </td>\r
          <td>{{ card.year || '-' }}</td>\r
          <td>{{ card.type || '-' }}</td>\r
          <td class="cited-search__reference">{{ card.text }}</td>\r
          <td>\r
            <a\r
              *ngIf="card.doi"\r
              class="citation-card__id-link"\r
              [href]="getDoiUrl(card.doi)"\r
              target="_blank"\r
              rel="noopener noreferrer"\r
            >\r
              {{ card.doi }}\r
            </a>\r
            <span *ngIf="!card.doi">-</span>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/components/cited-search/cited-search.component.scss */\n.cited-search {\n  display: grid;\n  gap: 1rem;\n}\n.cited-search__header {\n  display: grid;\n  gap: 0.35rem;\n}\n.cited-search__title {\n  margin: 0;\n}\n.cited-search__subtitle {\n  margin: 0;\n  color: var(--theme-muted);\n}\n.cited-search__count {\n  margin: 0;\n  color: var(--theme-ink);\n  font-weight: 600;\n}\n.cited-search__table-wrap {\n  overflow-x: auto;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: var(--theme-card-bg);\n}\n.cited-search__table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 760px;\n}\n.cited-search__table th,\n.cited-search__table td {\n  padding: 0.5rem 0.625rem;\n  border-bottom: 1px solid var(--theme-line);\n  vertical-align: top;\n  font-size: 0.9rem;\n}\n.cited-search__table th {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-weight: 600;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n}\n.cited-search__table tbody tr:last-child td {\n  border-bottom: 0;\n}\n.cited-search__reference {\n  min-width: 28rem;\n  color: var(--theme-ink);\n  line-height: 1.35;\n}\n.citation-card__id-link {\n  color: var(--theme-link);\n  text-decoration: none;\n  font-weight: 600;\n}\n.citation-card__id-link:hover {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.cited-search__table td:last-child {\n  color: var(--theme-muted);\n  word-break: break-word;\n}\n@media (max-width: 640px) {\n  .cited-search__table th,\n  .cited-search__table td {\n    padding: 0.45rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=cited-search.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CitedSearchComponent, { className: "CitedSearchComponent", filePath: "src/app/components/cited-search/cited-search.component.ts", lineNumber: 23 });
})();

// src/app/pages/cited/cited.page.ts
var CitedPage = class _CitedPage {
  static \u0275fac = function CitedPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CitedPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CitedPage, selectors: [["app-cited-page"]], decls: 3, vars: 0, consts: [[1, "cited-page", "py-4"], [1, "container"]], template: function CitedPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-cited-search");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, TranslateModule, CitedSearchComponent], styles: ["\n\n.cited-page[_ngcontent-%COMP%] {\n  min-height: 40vh;\n}\n/*# sourceMappingURL=cited.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CitedPage, [{
    type: Component,
    args: [{ selector: "app-cited-page", standalone: true, imports: [CommonModule, TranslateModule, CitedSearchComponent], template: '<main class="cited-page py-4">\r\n  <div class="container">\r\n    <app-cited-search></app-cited-search>\r\n  </div>\r\n</main>\r\n', styles: ["/* src/app/pages/cited/cited.page.scss */\n.cited-page {\n  min-height: 40vh;\n}\n/*# sourceMappingURL=cited.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CitedPage, { className: "CitedPage", filePath: "src/app/pages/cited/cited.page.ts", lineNumber: 13 });
})();
export {
  CitedPage
};
//# sourceMappingURL=chunk-T3GJSJ63.js.map
