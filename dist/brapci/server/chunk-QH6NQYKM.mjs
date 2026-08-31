import './polyfills.server.mjs';
import {
  BrapciApiService
} from "./chunk-5N7WX2WW.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-KVBU5WEP.mjs";
import "./chunk-UDICY5ZG.mjs";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  RouterLink,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TMIH7BOS.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/statistics/statistics.page.ts
var _c0 = (a0) => ({ date: a0 });
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function StatisticsPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "home.statistics.updatedAt", \u0275\u0275pureFunction1(4, _c0, ctx_r0.updateDate())), " ");
  }
}
function StatisticsPage_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "span", 16)(2, "span", 17)(3, "span", 18);
    \u0275\u0275elementEnd();
  }
}
function StatisticsPage_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, StatisticsPage_Conditional_16_For_2_Template, 4, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function StatisticsPage_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function StatisticsPage_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadStatistics());
    });
    \u0275\u0275text(6, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "home.statistics.error"));
  }
}
function StatisticsPage_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "home.statistics.empty"));
  }
}
function StatisticsPage_Conditional_19_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23)(1, "span", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.translationKey ? \u0275\u0275pipeBind1(7, 3, item_r3.translationKey) : item_r3.name, " ");
  }
}
function StatisticsPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, StatisticsPage_Conditional_19_article_1_Template, 8, 5, "article", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.statistics())("ngForTrackBy", ctx_r0.trackByName);
  }
}
var StatisticsPage = class _StatisticsPage {
  api = inject(BrapciApiService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  statistics = signal([], ...ngDevMode ? [{ debugName: "statistics" }] : []);
  updateDate = signal("", ...ngDevMode ? [{ debugName: "updateDate" }] : []);
  constructor() {
    this.loadStatistics();
  }
  loadStatistics() {
    this.loading.set(true);
    this.error.set(false);
    this.api.get("brapci/statistics").subscribe({
      next: (response) => {
        const result = this.normalizeResponse(response);
        this.statistics.set(result.statistics);
        this.updateDate.set(result.updateDate);
        this.loading.set(false);
      },
      error: () => {
        this.statistics.set([]);
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
  trackByName(_index, item) {
    return item.name;
  }
  normalizeResponse(response) {
    if (!response || typeof response !== "object") {
      return { statistics: [], updateDate: "" };
    }
    const root = response;
    const data = Array.isArray(root["data"]) ? root["data"] : [];
    return {
      statistics: data.map((item) => this.toStatistic(item)).filter((item) => item !== null),
      updateDate: this.pickText(root, ["update", "updated_at", "date"])
    };
  }
  toStatistic(value) {
    if (!value || typeof value !== "object") {
      return null;
    }
    const record = value;
    const name = this.pickText(record, ["name", "label", "title"]);
    const total = this.pickText(record, ["total", "count", "value"]);
    if (!name || !total) {
      return null;
    }
    const normalized = this.normalizeName(name);
    const metadata = {
      "total de artigos": { icon: "bi-file-earmark-text", translationKey: "home.statistics.items.articles" },
      "total de livros": { icon: "bi-book", translationKey: "home.statistics.items.books" },
      "total de capitulos de livros": { icon: "bi-bookmark", translationKey: "home.statistics.items.bookChapters" },
      "total de trabalhos em eventos": { icon: "bi-calendar-event", translationKey: "home.statistics.items.proceedings" },
      "total de autores": { icon: "bi-people", translationKey: "home.statistics.items.authors" },
      "total de instituicoes": { icon: "bi-buildings", translationKey: "home.statistics.items.institutions" },
      "total de fontes": { icon: "bi-journals", translationKey: "home.statistics.items.sources" },
      "total de arquivos": { icon: "bi-folder2-open", translationKey: "home.statistics.items.files" },
      "evendos indexados": { icon: "bi-calendar-check", translationKey: "home.statistics.items.indexedEvents" },
      "eventos indexados": { icon: "bi-calendar-check", translationKey: "home.statistics.items.indexedEvents" },
      "revistas brasileiras indexadas": { icon: "bi-journal-check", translationKey: "home.statistics.items.indexedBrazilianJournals" },
      "revistas estrangeiras indexadas": { icon: "bi-globe-americas", translationKey: "home.statistics.items.indexedForeignJournals" },
      "revistas brasileitas historicas": { icon: "bi-clock-history", translationKey: "home.statistics.items.historicBrazilianJournals" },
      "revistas brasileiras historicas": { icon: "bi-clock-history", translationKey: "home.statistics.items.historicBrazilianJournals" }
    };
    const itemMetadata = metadata[normalized];
    return {
      name,
      total,
      icon: itemMetadata?.icon ?? "bi-bar-chart",
      translationKey: itemMetadata?.translationKey ?? null
    };
  }
  normalizeName(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  pickText(record, keys) {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === "string" && value.trim())
        return value.trim();
      if (typeof value === "number" && Number.isFinite(value))
        return String(value);
    }
    return "";
  }
  static \u0275fac = function StatisticsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatisticsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatisticsPage, selectors: [["app-statistics-page"]], decls: 20, vars: 8, consts: [[1, "statistics-page"], ["aria-labelledby", "statistics-title", 1, "statistics-hero"], [1, "container"], ["routerLink", "/", 1, "back-link"], ["aria-hidden", "true", 1, "bi", "bi-arrow-left"], [1, "statistics-kicker"], ["id", "statistics-title"], [1, "statistics-intro"], [1, "update-date"], ["aria-live", "polite", 1, "container", "statistics-content"], ["aria-label", "Carregando estat\xEDsticas", 1, "statistics-grid"], [1, "statistics-message", "statistics-message--error"], [1, "statistics-message"], [1, "statistics-grid"], ["aria-hidden", "true", 1, "bi", "bi-clock-history"], [1, "stat-card", "stat-card--loading"], [1, "skeleton", "skeleton-icon"], [1, "skeleton", "skeleton-number"], [1, "skeleton", "skeleton-label"], ["aria-hidden", "true", 1, "bi", "bi-exclamation-circle"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-inbox"], ["class", "stat-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stat-card"], [1, "stat-card__icon"], ["aria-hidden", "true", 1, "bi", 3, "ngClass"], [1, "stat-card__total"], [1, "stat-card__label"]], template: function StatisticsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Brapci ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13, " Uma vis\xE3o atualizada da produ\xE7\xE3o cient\xEDfica e dos conte\xFAdos dispon\xEDveis na Brapci. ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, StatisticsPage_Conditional_14_Template, 4, 6, "p", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 9);
      \u0275\u0275conditionalCreate(16, StatisticsPage_Conditional_16_Template, 3, 1, "div", 10)(17, StatisticsPage_Conditional_17_Template, 7, 3, "div", 11)(18, StatisticsPage_Conditional_18_Template, 5, 3, "div", 12)(19, StatisticsPage_Conditional_19_Template, 2, 2, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "home.statistics.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "home.statistics.title"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.updateDate() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.error() ? 17 : !ctx.statistics().length ? 18 : 19);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.statistics-page[_ngcontent-%COMP%] {\n  background: var(--theme-bg, #f5f8fb);\n  min-height: calc(100vh - 4rem);\n}\n.statistics-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 85% 15%,\n      rgba(255, 255, 255, 0.18),\n      transparent 25rem),\n    linear-gradient(\n      135deg,\n      #031c31 0%,\n      #052c49 58%,\n      #06445a 100%);\n  color: #fff;\n  overflow: hidden;\n  padding: clamp(0.75rem, 2vw, 1.1rem) 0 clamp(2.5rem, 4vw, 3.25rem);\n}\n.back-link[_ngcontent-%COMP%] {\n  align-items: center;\n  color: rgba(255, 255, 255, 0.82);\n  display: inline-flex;\n  font-size: 0.9rem;\n  gap: 0.45rem;\n  margin-bottom: 0.5rem;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover, \n.back-link[_ngcontent-%COMP%]:focus-visible {\n  color: #fff;\n}\n.statistics-kicker[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  margin: 0 0 0.3rem;\n  opacity: 0.75;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.5rem);\n  font-weight: 750;\n  letter-spacing: -0.04em;\n  margin: 0;\n}\n.statistics-intro[_ngcontent-%COMP%] {\n  font-size: clamp(0.88rem, 1.5vw, 1rem);\n  line-height: 1.4;\n  margin: 0.35rem 0 0;\n  max-width: 42rem;\n  opacity: 0.84;\n}\n.update-date[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  font-size: 0.85rem;\n  gap: 0.45rem;\n  margin: 0.45rem 0 0;\n  opacity: 0.72;\n}\n.statistics-content[_ngcontent-%COMP%] {\n  margin-top: clamp(-2rem, -3vw, -2.5rem);\n  padding-bottom: 5rem;\n  position: relative;\n}\n.statistics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg, #fff);\n  border: 1px solid var(--theme-line, #dce5ec);\n  border-radius: 1.15rem;\n  box-shadow: 0 1rem 2.5rem rgba(11, 54, 83, 0.1);\n  display: flex;\n  flex-direction: column;\n  min-height: 9.5rem;\n  padding: 1.1rem;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.stat-card[_ngcontent-%COMP%]:not(.stat-card--loading):hover {\n  box-shadow: 0 1.3rem 3rem rgba(11, 54, 83, 0.16);\n  transform: translateY(-4px);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(8, 145, 166, 0.11);\n  border-radius: 0.8rem;\n  color: #087e98;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2.35rem;\n  justify-content: center;\n  margin-bottom: auto;\n  width: 2.35rem;\n}\n.stat-card__total[_ngcontent-%COMP%] {\n  color: var(--theme-ink, #133248);\n  font-size: clamp(1.75rem, 3vw, 2.35rem);\n  letter-spacing: -0.04em;\n  line-height: 1.05;\n  margin-top: 0.9rem;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  color: var(--theme-muted, #647787);\n  font-size: 0.9rem;\n  font-weight: 550;\n  line-height: 1.35;\n  margin: 0.3rem 0 0;\n}\n.statistics-message[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-card-bg, #fff);\n  border: 1px solid var(--theme-line, #dce5ec);\n  border-radius: 1rem;\n  color: var(--theme-muted, #647787);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 4rem 1.5rem;\n  text-align: center;\n}\n.statistics-message[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.statistics-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n}\n.statistics-message--error[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #b42318;\n}\n.skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.35s ease-in-out infinite;\n  background: #e7edf1;\n  border-radius: 0.5rem;\n  display: block;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  height: 2.35rem;\n  width: 2.35rem;\n}\n.skeleton-number[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin-top: auto;\n  width: 58%;\n}\n.skeleton-label[_ngcontent-%COMP%] {\n  height: 0.8rem;\n  margin-top: 0.7rem;\n  width: 78%;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  50% {\n    opacity: 0.48;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .stat-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .skeleton[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=statistics.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatisticsPage, [{
    type: Component,
    args: [{ selector: "app-statistics-page", standalone: true, imports: [CommonModule, RouterLink, TranslateModule], template: `<main class="statistics-page">\r
  <section class="statistics-hero" aria-labelledby="statistics-title">\r
    <div class="container">\r
      <a class="back-link" routerLink="/">\r
        <i class="bi bi-arrow-left" aria-hidden="true"></i>\r
        Brapci\r
      </a>\r
      <p class="statistics-kicker">{{ 'home.statistics.kicker' | translate }}</p>\r
      <h1 id="statistics-title">{{ 'home.statistics.title' | translate }}</h1>\r
      <p class="statistics-intro">\r
        Uma vis\xE3o atualizada da produ\xE7\xE3o cient\xEDfica e dos conte\xFAdos dispon\xEDveis na Brapci.\r
      </p>\r
      @if (updateDate()) {\r
        <p class="update-date">\r
          <i class="bi bi-clock-history" aria-hidden="true"></i>\r
          {{ 'home.statistics.updatedAt' | translate: { date: updateDate() } }}\r
        </p>\r
      }\r
    </div>\r
  </section>\r
\r
  <section class="container statistics-content" aria-live="polite">\r
    @if (loading()) {\r
      <div class="statistics-grid" aria-label="Carregando estat\xEDsticas">\r
        @for (placeholder of [1, 2, 3, 4, 5, 6, 7, 8]; track placeholder) {\r
          <div class="stat-card stat-card--loading">\r
            <span class="skeleton skeleton-icon"></span>\r
            <span class="skeleton skeleton-number"></span>\r
            <span class="skeleton skeleton-label"></span>\r
          </div>\r
        }\r
      </div>\r
    } @else if (error()) {\r
      <div class="statistics-message statistics-message--error">\r
        <i class="bi bi-exclamation-circle" aria-hidden="true"></i>\r
        <h2>{{ 'home.statistics.error' | translate }}</h2>\r
        <button type="button" class="btn btn-primary" (click)="loadStatistics()">Tentar novamente</button>\r
      </div>\r
    } @else if (!statistics().length) {\r
      <div class="statistics-message">\r
        <i class="bi bi-inbox" aria-hidden="true"></i>\r
        <h2>{{ 'home.statistics.empty' | translate }}</h2>\r
      </div>\r
    } @else {\r
      <div class="statistics-grid">\r
        <article *ngFor="let item of statistics(); trackBy: trackByName" class="stat-card">\r
          <span class="stat-card__icon"><i class="bi" [ngClass]="item.icon" aria-hidden="true"></i></span>\r
          <strong class="stat-card__total">{{ item.total }}</strong>\r
          <h2 class="stat-card__label">\r
            {{ item.translationKey ? (item.translationKey | translate) : item.name }}\r
          </h2>\r
        </article>\r
      </div>\r
    }\r
  </section>\r
</main>\r
`, styles: ["/* src/app/pages/statistics/statistics.page.scss */\n:host {\n  display: block;\n}\n.statistics-page {\n  background: var(--theme-bg, #f5f8fb);\n  min-height: calc(100vh - 4rem);\n}\n.statistics-hero {\n  background:\n    radial-gradient(\n      circle at 85% 15%,\n      rgba(255, 255, 255, 0.18),\n      transparent 25rem),\n    linear-gradient(\n      135deg,\n      #031c31 0%,\n      #052c49 58%,\n      #06445a 100%);\n  color: #fff;\n  overflow: hidden;\n  padding: clamp(0.75rem, 2vw, 1.1rem) 0 clamp(2.5rem, 4vw, 3.25rem);\n}\n.back-link {\n  align-items: center;\n  color: rgba(255, 255, 255, 0.82);\n  display: inline-flex;\n  font-size: 0.9rem;\n  gap: 0.45rem;\n  margin-bottom: 0.5rem;\n  text-decoration: none;\n}\n.back-link:hover,\n.back-link:focus-visible {\n  color: #fff;\n}\n.statistics-kicker {\n  font-size: 0.76rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  margin: 0 0 0.3rem;\n  opacity: 0.75;\n  text-transform: uppercase;\n}\nh1 {\n  font-size: clamp(1.6rem, 3vw, 2.5rem);\n  font-weight: 750;\n  letter-spacing: -0.04em;\n  margin: 0;\n}\n.statistics-intro {\n  font-size: clamp(0.88rem, 1.5vw, 1rem);\n  line-height: 1.4;\n  margin: 0.35rem 0 0;\n  max-width: 42rem;\n  opacity: 0.84;\n}\n.update-date {\n  align-items: center;\n  display: flex;\n  font-size: 0.85rem;\n  gap: 0.45rem;\n  margin: 0.45rem 0 0;\n  opacity: 0.72;\n}\n.statistics-content {\n  margin-top: clamp(-2rem, -3vw, -2.5rem);\n  padding-bottom: 5rem;\n  position: relative;\n}\n.statistics-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));\n}\n.stat-card {\n  background: var(--theme-card-bg, #fff);\n  border: 1px solid var(--theme-line, #dce5ec);\n  border-radius: 1.15rem;\n  box-shadow: 0 1rem 2.5rem rgba(11, 54, 83, 0.1);\n  display: flex;\n  flex-direction: column;\n  min-height: 9.5rem;\n  padding: 1.1rem;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.stat-card:not(.stat-card--loading):hover {\n  box-shadow: 0 1.3rem 3rem rgba(11, 54, 83, 0.16);\n  transform: translateY(-4px);\n}\n.stat-card__icon {\n  align-items: center;\n  background: rgba(8, 145, 166, 0.11);\n  border-radius: 0.8rem;\n  color: #087e98;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2.35rem;\n  justify-content: center;\n  margin-bottom: auto;\n  width: 2.35rem;\n}\n.stat-card__total {\n  color: var(--theme-ink, #133248);\n  font-size: clamp(1.75rem, 3vw, 2.35rem);\n  letter-spacing: -0.04em;\n  line-height: 1.05;\n  margin-top: 0.9rem;\n}\n.stat-card__label {\n  color: var(--theme-muted, #647787);\n  font-size: 0.9rem;\n  font-weight: 550;\n  line-height: 1.35;\n  margin: 0.3rem 0 0;\n}\n.statistics-message {\n  align-items: center;\n  background: var(--theme-card-bg, #fff);\n  border: 1px solid var(--theme-line, #dce5ec);\n  border-radius: 1rem;\n  color: var(--theme-muted, #647787);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 4rem 1.5rem;\n  text-align: center;\n}\n.statistics-message > i {\n  font-size: 2rem;\n}\n.statistics-message h2 {\n  font-size: 1rem;\n  margin: 0;\n}\n.statistics-message--error > i {\n  color: #b42318;\n}\n.skeleton {\n  animation: pulse 1.35s ease-in-out infinite;\n  background: #e7edf1;\n  border-radius: 0.5rem;\n  display: block;\n}\n.skeleton-icon {\n  height: 2.35rem;\n  width: 2.35rem;\n}\n.skeleton-number {\n  height: 2rem;\n  margin-top: auto;\n  width: 58%;\n}\n.skeleton-label {\n  height: 0.8rem;\n  margin-top: 0.7rem;\n  width: 78%;\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.48;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .stat-card {\n    transition: none;\n  }\n  .skeleton {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=statistics.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatisticsPage, { className: "StatisticsPage", filePath: "src/app/pages/statistics/statistics.page.ts", lineNumber: 23 });
})();
export {
  StatisticsPage
};
//# sourceMappingURL=chunk-QH6NQYKM.mjs.map
