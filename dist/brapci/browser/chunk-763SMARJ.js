import {
  BrapciApiService
} from "./chunk-SPW4FZDW.js";
import {
  BreadcrumbsComponent
} from "./chunk-TPMMW2PY.js";
import "./chunk-5PH66TCU.js";
import "./chunk-FVCOQ7LK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-NJGCINW2.js";
import "./chunk-OYM44MPZ.js";
import {
  CommonModule,
  Component,
  catchError,
  computed,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FWZKW7K5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// src/app/pages/revista-timeline/revista-timeline.page.ts
var _forTrack0 = ($index, $item) => $item.name + "-" + $item.issn + "-" + $item.city;
var _forTrack1 = ($index, $item) => $item.year;
var _forTrack2 = ($index, $item) => $item.ID;
function RevistaTimelinePage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "common.loading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "timeline.loading"));
  }
}
function RevistaTimelinePage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_0_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.issn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.startYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.endYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.status);
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "article", 22)(2, "p", 23);
    \u0275\u0275text(3, "Per\xEDodo da timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 22)(7, "p", 23);
    \u0275\u0275text(8, "Anos com revistas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "article", 22)(12, "p", 23);
    \u0275\u0275text(13, "Total de revistas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 28)(22, "table", 29)(23, "thead")(24, "tr")(25, "th");
    \u0275\u0275text(26, "Revista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "ISSN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Cidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Data in\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Data fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_0_For_39_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.summary().oldestYear, " - ", ctx_r0.summary().newestYear);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summary().years);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summary().journals);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 5, "timeline.yearsRange", ctx_r0.yearsRange()), " ");
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.summaryTableRows());
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h4", 38)(3, "a", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const journal_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/v/" + ctx_r0.getJournalLinkId(journal_r4), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", journal_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", ctx_r0.getJournalLinkId(journal_r4));
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementStart(3, "h3", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275repeaterCreate(8, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_For_2_For_9_Template, 7, 3, "div", 36, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275attribute("data-year", item_r5.year);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.journals.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r5.journals);
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_For_2_Template, 10, 3, "div", 30, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredTimeline());
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275element(4, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-label", "Ano " + bar_r6.year + ": " + bar_r6.total + " revistas");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r6.total);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r0.barWidth(bar_r6.total), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r6.year);
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 41);
    \u0275\u0275repeaterCreate(2, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_2_For_3_Template, 7, 5, "div", 42, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.chartBars());
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_0_Template, 40, 8);
    \u0275\u0275conditionalCreate(1, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_1_Template, 3, 0, "div", 19);
    \u0275\u0275conditionalCreate(2, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Conditional_2_Template, 4, 0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.activeTab() === "summary" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "timeline" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "chart" ? 2 : -1);
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Nenhum resultado para os filtros selecionados. ");
    \u0275\u0275elementEnd();
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 10)(2, "div", 11);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTypeFilter("ALL"));
    });
    \u0275\u0275text(5, " Todas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTypeFilter("JA"));
    });
    \u0275\u0275text(7, " Revistas nacionais ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTypeFilter("JE"));
    });
    \u0275\u0275text(9, " Revistas estrangeiras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "button", 13);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatusFilter("ALL"));
    });
    \u0275\u0275text(12, " Todas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatusFilter("CURRENT"));
    });
    \u0275\u0275text(14, " Revistas ativas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatusFilter("HISTORIC"));
    });
    \u0275\u0275text(16, " Revistas hist\xF3ricas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 15);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exportCsv());
    });
    \u0275\u0275text(18, " Exportar CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16)(20, "button", 17);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setActiveTab("summary"));
    });
    \u0275\u0275text(21, " Resumo das publica\xE7\xF5es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setActiveTab("timeline"));
    });
    \u0275\u0275text(23, " Timeline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 17);
    \u0275\u0275listener("click", function RevistaTimelinePage_Conditional_5_Conditional_5_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setActiveTab("chart"));
    });
    \u0275\u0275text(25, " Gr\xE1fico de barras por ano de cria\xE7\xE3o ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_26_Template, 3, 3)(27, RevistaTimelinePage_Conditional_5_Conditional_5_Conditional_27_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 33, "journals.filterAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r0.typeFilter() === "ALL")("btn-outline-primary", ctx_r0.typeFilter() !== "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r0.typeFilter() === "JA")("btn-outline-primary", ctx_r0.typeFilter() !== "JA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r0.typeFilter() === "JE")("btn-outline-primary", ctx_r0.typeFilter() !== "JE");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-danger", ctx_r0.statusFilter() === "ALL")("btn-outline-danger", ctx_r0.statusFilter() !== "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", ctx_r0.statusFilter() === "CURRENT")("btn-outline-danger", ctx_r0.statusFilter() !== "CURRENT");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", ctx_r0.statusFilter() === "HISTORIC")("btn-outline-danger", ctx_r0.statusFilter() !== "HISTORIC");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.hasFilteredResults());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "summary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "timeline");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "chart");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasFilteredResults() ? 26 : 27);
  }
}
function RevistaTimelinePage_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "timeline.noData"), " ");
  }
}
function RevistaTimelinePage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(5, RevistaTimelinePage_Conditional_5_Conditional_5_Template, 28, 35, "div", 1)(6, RevistaTimelinePage_Conditional_5_Conditional_6_Template, 4, 3, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "timeline.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasResults() ? 5 : 6);
  }
}
function RevistaTimelinePage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "journals.noResults"), " ");
  }
}
var RevistaTimelinePage = class _RevistaTimelinePage {
  brapciApiService = inject(BrapciApiService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  timelineData = signal([], ...ngDevMode ? [{ debugName: "timelineData" }] : []);
  activeTab = signal("summary", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  typeFilter = signal("ALL", ...ngDevMode ? [{ debugName: "typeFilter" }] : []);
  statusFilter = signal("ALL", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  filteredTimeline = computed(() => {
    const activeType = this.typeFilter();
    const activeStatus = this.statusFilter();
    return this.timelineData().map((yearItem) => __spreadProps(__spreadValues({}, yearItem), {
      journals: yearItem.journals.filter((journal) => {
        const matchesType = this.matchesTypeFilter(journal, activeType);
        const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
        return matchesType && matchesStatus;
      })
    })).filter((yearItem) => yearItem.journals.length > 0);
  }, ...ngDevMode ? [{ debugName: "filteredTimeline" }] : []);
  yearsRange = computed(() => {
    const timeline = this.filteredTimeline();
    if (timeline.length === 0)
      return { min: 0, max: 0 };
    return {
      min: timeline[timeline.length - 1].year,
      max: timeline[0].year
    };
  }, ...ngDevMode ? [{ debugName: "yearsRange" }] : []);
  hasResults = computed(() => this.timelineData().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  hasFilteredResults = computed(() => this.filteredTimeline().length > 0, ...ngDevMode ? [{ debugName: "hasFilteredResults" }] : []);
  summary = computed(() => {
    const timeline = this.filteredTimeline();
    const totalJournals = timeline.reduce((sum, item) => sum + item.journals.length, 0);
    if (timeline.length === 0) {
      return {
        years: 0,
        journals: 0,
        oldestYear: 0,
        newestYear: 0
      };
    }
    return {
      years: timeline.length,
      journals: totalJournals,
      oldestYear: timeline[timeline.length - 1].year,
      newestYear: timeline[0].year
    };
  }, ...ngDevMode ? [{ debugName: "summary" }] : []);
  summaryTableRows = computed(() => {
    return this.filteredTimeline().flatMap((yearItem) => yearItem.journals.map((journal) => {
      const startYear = this.toDisplayValue(journal["jnl_ano_inicio"]);
      const endYearRaw = this.toDisplayValue(journal["jnl_ano_final"]);
      return {
        name: String(journal.name ?? "-"),
        issn: this.toDisplayValue(journal["jnl_issn"]),
        city: this.toDisplayValue(journal["gc_name"]),
        startYear,
        endYear: endYearRaw === "0" ? "-" : endYearRaw,
        status: this.isHistoricJournal(journal) ? "Hist\xF3rica" : "Corrente"
      };
    })).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, ...ngDevMode ? [{ debugName: "summaryTableRows" }] : []);
  chartBars = computed(() => {
    const bars = this.filteredTimeline().map((item) => ({
      year: item.year,
      total: item.journals.length
    }));
    return bars.sort((a, b) => a.year - b.year);
  }, ...ngDevMode ? [{ debugName: "chartBars" }] : []);
  maxBarTotal = computed(() => {
    const totals = this.chartBars().map((item) => item.total);
    return totals.length ? Math.max(...totals) : 0;
  }, ...ngDevMode ? [{ debugName: "maxBarTotal" }] : []);
  constructor() {
    this.loadTimeline();
  }
  loadTimeline() {
    this.loading.set(true);
    this.error.set("");
    forkJoin({
      timeline: this.brapciApiService.get("brapci/timeline/2"),
      journals: this.brapciApiService.get("brapci/source/journal").pipe(catchError(() => of([])))
    }).subscribe({
      next: (response) => {
        const items = this.parseTimelineResponse(response.timeline);
        const metadataMap = this.buildJournalMetadataMap(response.journals);
        const enriched = this.enrichTimelineWithMetadata(items, metadataMap);
        enriched.sort((a, b) => b.year - a.year);
        this.timelineData.set(enriched);
        this.loading.set(false);
      },
      error: () => {
        this.timelineData.set([]);
        this.error.set("N\xE3o foi poss\xEDvel carregar o timeline de revistas. Tente novamente mais tarde.");
        this.loading.set(false);
      }
    });
  }
  parseTimelineResponse(response) {
    if (Array.isArray(response)) {
      return this.normalizeTimeline(response);
    }
    if (response && typeof response === "object") {
      if (Array.isArray(response.data)) {
        return this.normalizeTimeline(response.data);
      }
      if (Array.isArray(response.items)) {
        return this.normalizeTimeline(response.items);
      }
      if (Array.isArray(response.timeline)) {
        return this.normalizeTimeline(response.timeline);
      }
    }
    return [];
  }
  normalizeTimeline(items) {
    return items.map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }
      const timelineItem = item;
      const yearNumber = Number.parseInt(String(timelineItem["year"] ?? ""), 10);
      const journals = Array.isArray(timelineItem["journals"]) ? timelineItem["journals"] : [];
      if (!Number.isFinite(yearNumber) || journals.length === 0) {
        return null;
      }
      return {
        year: yearNumber,
        journals
      };
    }).filter((item) => item !== null);
  }
  enrichTimelineWithMetadata(timeline, metadataMap) {
    return timeline.map((yearItem) => __spreadProps(__spreadValues({}, yearItem), {
      journals: yearItem.journals.map((journal) => {
        const journalId = this.normalizeId(this.getJournalLinkId(journal));
        const metadata = metadataMap.get(`frbr:${journalId}`) ?? metadataMap.get(`id_jnl:${journalId}`);
        if (!metadata) {
          return journal;
        }
        return __spreadProps(__spreadValues({}, journal), {
          jnl_issn: journal["jnl_issn"] ?? metadata.jnl_issn,
          gc_name: journal["gc_name"] ?? metadata.gc_name,
          jnl_ano_inicio: journal["jnl_ano_inicio"] ?? metadata.jnl_ano_inicio,
          jnl_ano_final: journal["jnl_ano_final"] ?? metadata.jnl_ano_final,
          jnl_collection: journal.jnl_collection ?? metadata.jnl_collection,
          jnl_historic: journal.jnl_historic ?? metadata.jnl_historic
        });
      })
    }));
  }
  buildJournalMetadataMap(journals) {
    const map = /* @__PURE__ */ new Map();
    for (const journal of journals) {
      const metadata = {
        jnl_collection: journal.jnl_collection,
        jnl_historic: journal.jnl_historic,
        jnl_issn: journal.jnl_issn,
        gc_name: journal.gc_name,
        jnl_ano_inicio: journal.jnl_ano_inicio,
        jnl_ano_final: journal.jnl_ano_final
      };
      const keys = [journal.id_jnl, journal.jnl_frbr].map((value) => this.normalizeId(value));
      if (keys[0].length > 0) {
        map.set(`id_jnl:${keys[0]}`, metadata);
      }
      if (keys[1].length > 0) {
        map.set(`frbr:${keys[1]}`, metadata);
      }
    }
    return map;
  }
  normalizeId(value) {
    return String(value ?? "").trim();
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  setTypeFilter(type) {
    this.typeFilter.set(type);
  }
  setStatusFilter(status) {
    this.statusFilter.set(status);
  }
  exportCsv() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const rows = this.filteredTimeline().flatMap((yearItem) => yearItem.journals.map((journal) => ({
      year: yearItem.year,
      id: this.getJournalLinkId(journal),
      name: String(journal.name ?? ""),
      jnl_collection: String(journal.jnl_collection ?? ""),
      jnl_historic: String(journal.jnl_historic ?? "")
    })));
    if (!rows.length) {
      return;
    }
    const headers = ["year", "id", "name", "jnl_collection", "jnl_historic"];
    const csvRows = [
      headers,
      ...rows.map((row) => headers.map((header) => this.csvValue(row[header])))
    ];
    const csvContent = csvRows.map((line) => line.map((cell) => this.escapeCsv(cell)).join(",")).join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "revistas-timeline.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  barWidth(total) {
    const max = this.maxBarTotal();
    if (!max) {
      return 0;
    }
    return Math.max(5, Math.round(total / max * 100));
  }
  getJournalLinkId(journal) {
    const id = String(journal.ID ?? journal["id_jnl"] ?? journal["id"] ?? journal["jnl_frbr"] ?? "").trim();
    return id;
  }
  getJournalsForYear(year) {
    const yearData = this.filteredTimeline().find((item) => item.year === year);
    return yearData?.journals || [];
  }
  matchesTypeFilter(journal, type) {
    if (type === "ALL") {
      return true;
    }
    const collection = this.normalizeCollection(journal);
    return collection === type;
  }
  matchesStatusFilter(journal, status) {
    if (status === "ALL") {
      return true;
    }
    const isHistoric = this.isHistoricJournal(journal);
    return status === "HISTORIC" ? isHistoric : !isHistoric;
  }
  normalizeCollection(journal) {
    const value = String(journal.jnl_collection ?? "").trim().toUpperCase();
    return value === "JA" || value === "JE" ? value : "";
  }
  isHistoricJournal(journal) {
    const value = journal.jnl_historic;
    if (typeof value === "number") {
      return value === 1;
    }
    if (typeof value === "string") {
      return value.trim() === "1";
    }
    return value === true;
  }
  csvValue(value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  escapeCsv(value) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  toDisplayValue(value) {
    const parsed = String(value ?? "").trim();
    return parsed.length ? parsed : "-";
  }
  static \u0275fac = function RevistaTimelinePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevistaTimelinePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevistaTimelinePage, selectors: [["app-revista-timeline-page"]], decls: 7, vars: 3, consts: [["aria-labelledby", "timeline-title", 1, "revista-timeline-wrap", "py-4"], [1, "container"], ["aria-live", "polite", 1, "timeline-loading"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"], ["role", "alert", 1, "alert", "alert-danger"], [1, "container", "mt-0", "mb-4"], [1, "col-12"], ["id", "timeline-title", 1, "eventos-title", "mb-0"], [1, "timeline-filters", "mb-4"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "ms-2", 3, "click"], ["role", "group", "aria-label", "Filtro de status das revistas", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", "ms-2", 3, "click", "disabled"], ["role", "tablist", "aria-label", "Abas de visualiza\xE7\xE3o da timeline de revistas", 1, "timeline-tabs", "mb-4"], ["type", "button", 1, "timeline-tab-btn", 3, "click"], [1, "alert", "alert-info"], [1, "timeline-container"], ["aria-label", "Gr\xE1fico de barras por ano de cria\xE7\xE3o", 1, "bars-wrap"], [1, "timeline-summary-grid"], [1, "summary-card"], [1, "summary-label"], [1, "summary-value"], [1, "timeline-info", "mt-4"], [1, "text-muted", "mb-0"], [1, "summary-table-wrap", "mt-4"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle", "mb-0", "summary-table"], [1, "timeline-year-group"], [1, "timeline-year-header"], [1, "timeline-dot"], [1, "timeline-year"], [1, "timeline-count"], [1, "timeline-journals"], [1, "timeline-journal-card"], [1, "journal-header"], [1, "journal-title"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "journal-id"], [1, "bars-plot"], [1, "bar-column"], [1, "bar-total"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-year"]], template: function RevistaTimelinePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, RevistaTimelinePage_Conditional_3_Template, 9, 6, "div", 1);
      \u0275\u0275conditionalCreate(4, RevistaTimelinePage_Conditional_4_Template, 3, 1, "div", 1);
      \u0275\u0275conditionalCreate(5, RevistaTimelinePage_Conditional_5_Template, 7, 4)(6, RevistaTimelinePage_Conditional_6_Template, 4, 3, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.error() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() && ctx.hasResults() ? 5 : !ctx.loading() ? 6 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ['\n\n.revista-timeline-wrap[_ngcontent-%COMP%] {\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n}\n.timeline-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.timeline-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.timeline-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n.timeline-tab-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 999px;\n  padding: 0.45rem 0.9rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.timeline-tab-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.timeline-tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--theme-link);\n  border-color: var(--theme-link);\n  color: #fff;\n}\n.timeline-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 1rem;\n}\n.summary-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.summary-value[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--theme-link);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n}\n.timeline-info[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--theme-card-bg);\n  border-left: 4px solid var(--theme-link);\n  border-radius: 0.3rem;\n}\n.summary-table-wrap[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  overflow: hidden;\n}\n.summary-table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-link) 12%, var(--theme-card-bg));\n  color: var(--theme-ink);\n  font-weight: 700;\n  border-bottom: 1px solid var(--theme-line);\n  white-space: nowrap;\n}\n.summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: var(--theme-line);\n  color: var(--theme-ink);\n}\n.timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--theme-link),\n      var(--theme-line));\n  opacity: 0.3;\n}\n.timeline-year-group[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  margin-left: 2rem;\n  position: relative;\n}\n.timeline-year-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -48px;\n  width: 20px;\n  height: 20px;\n  background: var(--theme-link);\n  border: 3px solid var(--theme-bg);\n  border-radius: 50%;\n  box-shadow: 0 0 0 3px var(--theme-card-bg);\n  z-index: 2;\n}\n.timeline-year[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-link);\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n}\n.timeline-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.5rem;\n  background: rgba(72, 61, 139, 0.1);\n  color: var(--theme-link);\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.timeline-journals[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-left: 1rem;\n}\n.timeline-journal-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 1.2rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.timeline-journal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: var(--theme-link);\n}\n.journal-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.journal-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: var(--theme-ink);\n  line-height: 1.3;\n}\n.journal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  text-decoration: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.journal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--theme-link);\n  text-decoration: underline;\n  opacity: 0.8;\n}\n.journal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--theme-link);\n  outline-offset: 2px;\n  border-radius: 0.25rem;\n}\n.journal-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--theme-hint);\n  font-weight: 500;\n}\n.bars-wrap[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  padding-bottom: 0.4rem;\n}\n.bars-plot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  flex-wrap: nowrap;\n  min-width: 680px;\n  min-height: 290px;\n}\n.bar-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n  width: 56px;\n}\n.bar-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--theme-ink);\n  font-size: 0.82rem;\n  line-height: 1;\n}\n.bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 10px 10px 0 0;\n  background: color-mix(in srgb, var(--theme-line) 65%, transparent);\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border-radius: 10px 10px 0 0;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--theme-link) 70%, white),\n      var(--theme-link));\n  min-height: 8px;\n}\n.bar-year[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n  transform: rotate(-45deg);\n  transform-origin: top center;\n  white-space: nowrap;\n  margin-top: 0.2rem;\n}\n.journal-abbrev[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--theme-hint);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 768px) {\n  .timeline-filters[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .timeline-filters[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .timeline-filters[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0.4rem;\n    margin-bottom: 0.4rem;\n  }\n  .timeline-container[_ngcontent-%COMP%]::before {\n    left: 10px;\n  }\n  .timeline-year-header[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .timeline-dot[_ngcontent-%COMP%] {\n    left: -38px;\n    width: 16px;\n    height: 16px;\n  }\n  .timeline-year[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .timeline-journals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .timeline-year-group[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n  .timeline-journals[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .bars-plot[_ngcontent-%COMP%] {\n    min-width: 560px;\n    min-height: 250px;\n    gap: 0.55rem;\n  }\n  .bar-column[_ngcontent-%COMP%] {\n    width: 48px;\n  }\n  .bar-track[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .bar-year[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n}\n@media (max-width: 480px) {\n  .revista-timeline-wrap[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .timeline-container[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .timeline-year-group[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .timeline-journal-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .journal-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=revista-timeline.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevistaTimelinePage, [{
    type: Component,
    args: [{ selector: "app-revista-timeline-page", imports: [CommonModule, TranslateModule, BreadcrumbsComponent], standalone: true, template: `<section class="revista-timeline-wrap py-4" aria-labelledby="timeline-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="container">\r
      <div class="timeline-loading" aria-live="polite">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="visually-hidden">{{ 'common.loading' | translate }}</span>\r
        </div>\r
        <p class="mt-3">{{ 'timeline.loading' | translate }}</p>\r
      </div>\r
    </div>\r
  }\r
\r
  @if (!loading() && error()) {\r
    <div class="container">\r
      <div class="alert alert-danger" role="alert">\r
        {{ error() }}\r
      </div>\r
    </div>\r
  }\r
\r
  @if (!loading() && !error() && hasResults()) {\r
    <div class="container mt-0 mb-4">\r
      <div class="col-12">\r
        <h2 id="timeline-title" class="eventos-title mb-0">{{ 'timeline.title' | translate }}</h2>\r
      </div>\r
    </div>\r
\r
    @if (hasResults()) {\r
      <div class="container">\r
        <div class="timeline-filters mb-4">\r
          <div class="btn-group btn-group-sm" role="group" [attr.aria-label]="'journals.filterAriaLabel' | translate">\r
            <button\r
              type="button"\r
              class="btn"\r
              [class.btn-primary]="typeFilter() === 'ALL'"\r
              [class.btn-outline-primary]="typeFilter() !== 'ALL'"\r
              (click)="setTypeFilter('ALL')"\r
            >\r
              Todas\r
            </button>\r
            <button\r
              type="button"\r
              class="btn ms-2"\r
              [class.btn-primary]="typeFilter() === 'JA'"\r
              [class.btn-outline-primary]="typeFilter() !== 'JA'"\r
              (click)="setTypeFilter('JA')"\r
            >\r
              Revistas nacionais\r
            </button>\r
            <button\r
              type="button"\r
              class="btn ms-2"\r
              [class.btn-primary]="typeFilter() === 'JE'"\r
              [class.btn-outline-primary]="typeFilter() !== 'JE'"\r
              (click)="setTypeFilter('JE')"\r
            >\r
              Revistas estrangeiras\r
            </button>\r
          </div>\r
\r
          <div class="btn-group btn-group-sm" role="group" aria-label="Filtro de status das revistas">\r
            <button\r
              type="button"\r
              class="btn ms-2"\r
              [class.btn-danger]="statusFilter() === 'ALL'"\r
              [class.btn-outline-danger]="statusFilter() !== 'ALL'"\r
              (click)="setStatusFilter('ALL')"\r
            >\r
              Todas\r
            </button>\r
            <button\r
              type="button"\r
              class="btn ms-2"\r
              [class.btn-danger]="statusFilter() === 'CURRENT'"\r
              [class.btn-outline-danger]="statusFilter() !== 'CURRENT'"\r
              (click)="setStatusFilter('CURRENT')"\r
            >\r
              Revistas ativas\r
            </button>\r
            <button\r
              type="button"\r
              class="btn ms-2"\r
              [class.btn-danger]="statusFilter() === 'HISTORIC'"\r
              [class.btn-outline-danger]="statusFilter() !== 'HISTORIC'"\r
              (click)="setStatusFilter('HISTORIC')"\r
            >\r
              Revistas hist\xF3ricas\r
            </button>\r
          </div>\r
\r
          <button\r
            type="button"\r
            class="btn btn-sm btn-outline-success ms-2"\r
            (click)="exportCsv()"\r
            [disabled]="!hasFilteredResults()"\r
          >\r
            Exportar CSV\r
          </button>\r
        </div>\r
\r
        <div class="timeline-tabs mb-4" role="tablist" aria-label="Abas de visualiza\xE7\xE3o da timeline de revistas">\r
          <button\r
            type="button"\r
            class="timeline-tab-btn"\r
            [class.active]="activeTab() === 'summary'"\r
            (click)="setActiveTab('summary')"\r
          >\r
            Resumo das publica\xE7\xF5es\r
          </button>\r
          <button\r
            type="button"\r
            class="timeline-tab-btn"\r
            [class.active]="activeTab() === 'timeline'"\r
            (click)="setActiveTab('timeline')"\r
          >\r
            Timeline\r
          </button>\r
          <button\r
            type="button"\r
            class="timeline-tab-btn"\r
            [class.active]="activeTab() === 'chart'"\r
            (click)="setActiveTab('chart')"\r
          >\r
            Gr\xE1fico de barras por ano de cria\xE7\xE3o\r
          </button>\r
        </div>\r
\r
        @if (hasFilteredResults()) {\r
          @if (activeTab() === 'summary') {\r
            <div class="timeline-summary-grid">\r
              <article class="summary-card">\r
                <p class="summary-label">Per\xEDodo da timeline</p>\r
                <p class="summary-value">{{ summary().oldestYear }} - {{ summary().newestYear }}</p>\r
              </article>\r
              <article class="summary-card">\r
                <p class="summary-label">Anos com revistas</p>\r
                <p class="summary-value">{{ summary().years }}</p>\r
              </article>\r
              <article class="summary-card">\r
                <p class="summary-label">Total de revistas</p>\r
                <p class="summary-value">{{ summary().journals }}</p>\r
              </article>\r
            </div>\r
\r
            <div class="timeline-info mt-4">\r
              <p class="text-muted mb-0">\r
                {{ 'timeline.yearsRange' | translate: yearsRange() }}\r
              </p>\r
            </div>\r
\r
            <div class="summary-table-wrap mt-4">\r
              <div class="table-responsive">\r
                <table class="table table-sm align-middle mb-0 summary-table">\r
                  <thead>\r
                    <tr>\r
                      <th>Revista</th>\r
                      <th>ISSN</th>\r
                      <th>Cidade</th>\r
                      <th>Data in\xEDcio</th>\r
                      <th>Data fim</th>\r
                      <th>Status</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (row of summaryTableRows(); track row.name + '-' + row.issn + '-' + row.city) {\r
                      <tr>\r
                        <td>{{ row.name }}</td>\r
                        <td>{{ row.issn }}</td>\r
                        <td>{{ row.city }}</td>\r
                        <td>{{ row.startYear }}</td>\r
                        <td>{{ row.endYear }}</td>\r
                        <td>{{ row.status }}</td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            </div>\r
          }\r
\r
          @if (activeTab() === 'timeline') {\r
            <div class="timeline-container">\r
              @for (item of filteredTimeline(); track item.year) {\r
                <div class="timeline-year-group" [attr.data-year]="item.year">\r
                  <div class="timeline-year-header">\r
                    <div class="timeline-dot"></div>\r
                    <h3 class="timeline-year">{{ item.year }}</h3>\r
                    <span class="timeline-count">{{ item.journals.length }}</span>\r
                  </div>\r
\r
                  <div class="timeline-journals">\r
                    @for (journal of item.journals; track journal.ID) {\r
                      <div class="timeline-journal-card">\r
                        <div class="journal-header">\r
                          <h4 class="journal-title">\r
                            <a [href]="'/v/' + getJournalLinkId(journal)" target="_blank" rel="noopener noreferrer">\r
                              {{ journal.name }}\r
                            </a>\r
                          </h4>\r
                          <span class="journal-id">ID: {{ getJournalLinkId(journal) }}</span>\r
                        </div>\r
                      </div>\r
                    }\r
                  </div>\r
                </div>\r
              }\r
            </div>\r
          }\r
\r
          @if (activeTab() === 'chart') {\r
            <div class="bars-wrap" aria-label="Gr\xE1fico de barras por ano de cria\xE7\xE3o">\r
              <div class="bars-plot">\r
                @for (bar of chartBars(); track bar.year) {\r
                  <div class="bar-column" [attr.aria-label]="'Ano ' + bar.year + ': ' + bar.total + ' revistas'">\r
                    <span class="bar-total">{{ bar.total }}</span>\r
                    <div class="bar-track">\r
                      <div class="bar-fill" [style.height.%]="barWidth(bar.total)"></div>\r
                    </div>\r
                    <span class="bar-year">{{ bar.year }}</span>\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
          }\r
        } @else {\r
          <div class="alert alert-info">\r
            Nenhum resultado para os filtros selecionados.\r
          </div>\r
        }\r
      </div>\r
    } @else {\r
      <div class="container">\r
        <div class="alert alert-info">\r
          {{ 'timeline.noData' | translate }}\r
        </div>\r
      </div>\r
    }\r
  } @else if (!loading()) {\r
    <div class="container">\r
      <div class="alert alert-info">\r
        {{ 'journals.noResults' | translate }}\r
      </div>\r
    </div>\r
  }\r
</section>\r
`, styles: ['/* src/app/pages/revista-timeline/revista-timeline.page.scss */\n.revista-timeline-wrap {\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n}\n.timeline-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.timeline-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.timeline-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n.timeline-tab-btn {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 999px;\n  padding: 0.45rem 0.9rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.timeline-tab-btn:hover {\n  border-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.timeline-tab-btn.active {\n  background: var(--theme-link);\n  border-color: var(--theme-link);\n  color: #fff;\n}\n.timeline-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.summary-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 1rem;\n}\n.summary-label {\n  margin: 0;\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.summary-value {\n  margin: 0.35rem 0 0;\n  color: var(--theme-link);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n}\n.timeline-info {\n  padding: 1rem;\n  background: var(--theme-card-bg);\n  border-left: 4px solid var(--theme-link);\n  border-radius: 0.3rem;\n}\n.summary-table-wrap {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  overflow: hidden;\n}\n.summary-table {\n  margin-bottom: 0;\n}\n.summary-table thead th {\n  background: color-mix(in srgb, var(--theme-link) 12%, var(--theme-card-bg));\n  color: var(--theme-ink);\n  font-weight: 700;\n  border-bottom: 1px solid var(--theme-line);\n  white-space: nowrap;\n}\n.summary-table tbody td {\n  border-color: var(--theme-line);\n  color: var(--theme-ink);\n}\n.timeline-container {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline-container::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--theme-link),\n      var(--theme-line));\n  opacity: 0.3;\n}\n.timeline-year-group {\n  margin-bottom: 3rem;\n  margin-left: 2rem;\n  position: relative;\n}\n.timeline-year-header {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.timeline-dot {\n  position: absolute;\n  left: -48px;\n  width: 20px;\n  height: 20px;\n  background: var(--theme-link);\n  border: 3px solid var(--theme-bg);\n  border-radius: 50%;\n  box-shadow: 0 0 0 3px var(--theme-card-bg);\n  z-index: 2;\n}\n.timeline-year {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-link);\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n}\n.timeline-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.5rem;\n  background: rgba(72, 61, 139, 0.1);\n  color: var(--theme-link);\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.timeline-journals {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-left: 1rem;\n}\n.timeline-journal-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 1.2rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.timeline-journal-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: var(--theme-link);\n}\n.journal-header {\n  margin-bottom: 1rem;\n}\n.journal-title {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: var(--theme-ink);\n  line-height: 1.3;\n}\n.journal-title a {\n  color: var(--theme-link);\n  text-decoration: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.journal-title a:hover {\n  color: var(--theme-link);\n  text-decoration: underline;\n  opacity: 0.8;\n}\n.journal-title a:focus-visible {\n  outline: 2px solid var(--theme-link);\n  outline-offset: 2px;\n  border-radius: 0.25rem;\n}\n.journal-id {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--theme-hint);\n  font-weight: 500;\n}\n.bars-wrap {\n  display: block;\n  overflow-x: auto;\n  padding-bottom: 0.4rem;\n}\n.bars-plot {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  flex-wrap: nowrap;\n  min-width: 680px;\n  min-height: 290px;\n}\n.bar-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n  width: 56px;\n}\n.bar-total {\n  font-weight: 600;\n  color: var(--theme-ink);\n  font-size: 0.82rem;\n  line-height: 1;\n}\n.bar-track {\n  width: 100%;\n  height: 220px;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 10px 10px 0 0;\n  background: color-mix(in srgb, var(--theme-line) 65%, transparent);\n  overflow: hidden;\n}\n.bar-fill {\n  display: block;\n  width: 100%;\n  border-radius: 10px 10px 0 0;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--theme-link) 70%, white),\n      var(--theme-link));\n  min-height: 8px;\n}\n.bar-year {\n  font-weight: 600;\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n  transform: rotate(-45deg);\n  transform-origin: top center;\n  white-space: nowrap;\n  margin-top: 0.2rem;\n}\n.journal-abbrev {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--theme-hint);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 768px) {\n  .timeline-filters {\n    align-items: flex-start;\n  }\n  .timeline-filters .btn-group {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .timeline-filters .btn-group .btn {\n    margin-left: 0 !important;\n    margin-right: 0.4rem;\n    margin-bottom: 0.4rem;\n  }\n  .timeline-container::before {\n    left: 10px;\n  }\n  .timeline-year-header {\n    gap: 1rem;\n  }\n  .timeline-dot {\n    left: -38px;\n    width: 16px;\n    height: 16px;\n  }\n  .timeline-year {\n    font-size: 1.4rem;\n  }\n  .timeline-journals {\n    grid-template-columns: 1fr;\n  }\n  .timeline-year-group {\n    margin-left: 1rem;\n  }\n  .timeline-journals {\n    margin-left: 0;\n  }\n  .bars-plot {\n    min-width: 560px;\n    min-height: 250px;\n    gap: 0.55rem;\n  }\n  .bar-column {\n    width: 48px;\n  }\n  .bar-track {\n    height: 180px;\n  }\n  .bar-year {\n    font-size: 0.72rem;\n  }\n}\n@media (max-width: 480px) {\n  .revista-timeline-wrap {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .timeline-container {\n    padding: 1rem 0;\n  }\n  .timeline-year-group {\n    margin-bottom: 2rem;\n  }\n  .timeline-journal-card {\n    padding: 1rem;\n  }\n  .journal-title {\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=revista-timeline.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevistaTimelinePage, { className: "RevistaTimelinePage", filePath: "src/app/pages/revista-timeline/revista-timeline.page.ts", lineNumber: 57 });
})();
export {
  RevistaTimelinePage
};
//# sourceMappingURL=chunk-763SMARJ.js.map
