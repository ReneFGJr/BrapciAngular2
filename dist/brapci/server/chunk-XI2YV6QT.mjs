import './polyfills.server.mjs';
import {
  BarChartComponent
} from "./chunk-NTL457ZG.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-WCYYMEWF.mjs";
import {
  BrapciApiService
} from "./chunk-5N7WX2WW.mjs";
import {
  TranslateModule
} from "./chunk-KVBU5WEP.mjs";
import "./chunk-HFOHCKS4.mjs";
import "./chunk-UDICY5ZG.mjs";
import {
  CommonModule,
  Component,
  DecimalPipe,
  computed,
  forkJoin,
  inject,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TMIH7BOS.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

// src/app/pages/revista-avaliation/revista-avaliation.page.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.area;
var _forTrack3 = ($index, $item) => $item.periodStart + "-" + $item.periodEnd + "-" + $item.evaluationArea + "-" + $item.stratum;
function RevistaAvaliationPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275text(2, " Carregando avalia\xE7\xF5es\u2026");
    \u0275\u0275elementEnd();
  }
}
function RevistaAvaliationPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function RevistaAvaliationPage_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RevistaAvaliationPage_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function RevistaAvaliationPage_Conditional_12_For_4_Template_button_click_0_listener() {
      const name_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(name_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === name_r5);
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === name_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(name_r5);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_5_For_25_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slice_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", slice_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slice_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slice_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 5, slice_r6.percentage, "1.0-1"), "%");
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 19)(1, "h2", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 22)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul", 23);
    \u0275\u0275repeaterCreate(8, RevistaAvaliationPage_Conditional_12_Conditional_5_For_25_For_9_Template, 9, 8, "li", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chart_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chart_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", chart_r7.background);
    \u0275\u0275attribute("aria-label", chart_r7.title + ": " + chart_r7.total + " revistas");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chart_r7.total);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(chart_r7.slices);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "article", 15)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "peri\xF3dicos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 15)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "avalia\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "article", 15)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "sistemas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 15)(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "per\xEDodos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "article", 16);
    \u0275\u0275element(22, "app-bar-chart", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "section", 18);
    \u0275\u0275repeaterCreate(24, RevistaAvaliationPage_Conditional_12_Conditional_5_For_25_Template, 10, 5, "article", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.summary().journals);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.summary().records);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.summary().systems);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.summary().periods);
    \u0275\u0275advance(4);
    \u0275\u0275property("points", ctx_r1.sourceChart());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.overviewPieCharts());
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const area_r9 = ctx.$implicit;
    \u0275\u0275property("value", area_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(area_r9);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r10 = ctx.$implicit;
    \u0275\u0275property("value", period_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(period_r10);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stratum_r11 = ctx.$implicit;
    \u0275\u0275property("value", stratum_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stratum_r11);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 32);
    \u0275\u0275element(1, "app-bar-chart", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chart_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", "Estratos por ano \u2014 " + chart_r12.area)("points", chart_r12.points);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "/v/" + group_r13.rdfId, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r13.title);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const group_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", group_r13.title, " ");
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.periodLabel(item_r14));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r14.stratum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.evaluationArea);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.numericValue === null ? "\u2014" : \u0275\u0275pipeBind2(10, 4, item_r14.numericValue, "1.3-4"));
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 38)(1, "h3", 40);
    \u0275\u0275conditionalCreate(2, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Conditional_2_Template, 2, 2, "a", 41)(3, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "table", 43)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Ano/per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\xC1rea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Valor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_For_18_Template, 11, 7, "tr", null, _forTrack3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const group_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(group_r13.rdfId ? 2 : 3);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(group_r13.evaluations);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 46);
    \u0275\u0275listener("click", function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.showMore());
    });
    \u0275\u0275text(2, "Mostrar mais 100 peri\xF3dicos");
    \u0275\u0275elementEnd()();
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_For_2_Template, 19, 1, "section", 38, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_Conditional_3_Template, 3, 0, "div", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleGroups());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.visibleGroups().length < ctx_r1.groupedItems().length ? 3 : -1);
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Nenhum peri\xF3dico corresponde aos filtros selecionados.");
    \u0275\u0275elementEnd();
  }
}
function RevistaAvaliationPage_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 26)(2, "label")(3, "span");
    \u0275\u0275text(4, "\xC1rea de avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 27);
    \u0275\u0275listener("change", function RevistaAvaliationPage_Conditional_12_Conditional_6_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setArea($event.target.value));
    });
    \u0275\u0275elementStart(6, "option", 28);
    \u0275\u0275text(7, "Todas as \xE1reas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, RevistaAvaliationPage_Conditional_12_Conditional_6_For_9_Template, 2, 2, "option", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label")(11, "span");
    \u0275\u0275text(12, "Per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 27);
    \u0275\u0275listener("change", function RevistaAvaliationPage_Conditional_12_Conditional_6_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPeriod($event.target.value));
    });
    \u0275\u0275elementStart(14, "option", 28);
    \u0275\u0275text(15, "Todos os per\xEDodos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, RevistaAvaliationPage_Conditional_12_Conditional_6_For_17_Template, 2, 2, "option", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Estrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 27);
    \u0275\u0275listener("change", function RevistaAvaliationPage_Conditional_12_Conditional_6_Template_select_change_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStratum($event.target.value));
    });
    \u0275\u0275elementStart(22, "option", 28);
    \u0275\u0275text(23, "Todos os estratos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, RevistaAvaliationPage_Conditional_12_Conditional_6_For_25_Template, 2, 2, "option", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "Buscar peri\xF3dico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 30);
    \u0275\u0275listener("input", function RevistaAvaliationPage_Conditional_12_Conditional_6_Template_input_input_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSearch($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "section", 31);
    \u0275\u0275repeaterCreate(31, RevistaAvaliationPage_Conditional_12_Conditional_6_For_32_Template, 2, 2, "article", 32, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "article", 16)(34, "div", 33)(35, "h2", 34);
    \u0275\u0275text(36, "Peri\xF3dicos avaliados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_39_Template, 4, 1)(40, RevistaAvaliationPage_Conditional_12_Conditional_6_Conditional_40_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.activeTab());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.areaFilter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.areas());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.periodFilter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.periods());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.stratumFilter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.strata());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.searchTerm());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.strataChartsByArea());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.groupedItems().length, " peri\xF3dicos \xB7 ", ctx_r1.filteredItems().length, " avalia\xE7\xF5es");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibleGroups().length ? 39 : 40);
  }
}
function RevistaAvaliationPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 11)(1, "button", 12);
    \u0275\u0275listener("click", function RevistaAvaliationPage_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("overview"));
    });
    \u0275\u0275text(2, "Vis\xE3o geral");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RevistaAvaliationPage_Conditional_12_For_4_Template, 2, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RevistaAvaliationPage_Conditional_12_Conditional_5_Template, 26, 5)(6, RevistaAvaliationPage_Conditional_12_Conditional_6_Template, 41, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "overview");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.evaluationNames());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "overview" ? 5 : 6);
  }
}
var COLORS = {
  A1: "#176b45",
  A2: "#2b8a5b",
  A3: "#53a66f",
  A4: "#86bd7b",
  B1: "#2f6eaa",
  B2: "#548bc0",
  B3: "#75a6d2",
  B4: "#9bbedd",
  B5: "#bdd3e8",
  C: "#8b95a1",
  Q1: "#176b45",
  Q2: "#4c9a63",
  Q3: "#d69b2d",
  Q4: "#bd5b45"
};
var RevistaAvaliationPage = class _RevistaAvaliationPage {
  api = inject(BrapciApiService);
  pageSize = 100;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  journals = signal([], ...ngDevMode ? [{ debugName: "journals" }] : []);
  activeTab = signal("overview", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  areaFilter = signal("ALL", ...ngDevMode ? [{ debugName: "areaFilter" }] : []);
  periodFilter = signal("ALL", ...ngDevMode ? [{ debugName: "periodFilter" }] : []);
  stratumFilter = signal("ALL", ...ngDevMode ? [{ debugName: "stratumFilter" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  visibleLimit = signal(this.pageSize, ...ngDevMode ? [{ debugName: "visibleLimit" }] : []);
  evaluationNames = computed(() => [...new Set(this.items().map((i) => i.name))].sort((a, b) => a.localeCompare(b, "pt-BR")), ...ngDevMode ? [{ debugName: "evaluationNames" }] : []);
  selectedItems = computed(() => this.activeTab() === "overview" ? this.items() : this.items().filter((i) => i.name === this.activeTab()), ...ngDevMode ? [{ debugName: "selectedItems" }] : []);
  areas = computed(() => [...new Set(this.selectedItems().map((i) => i.evaluationArea))].sort((a, b) => a.localeCompare(b, "pt-BR")), ...ngDevMode ? [{ debugName: "areas" }] : []);
  periods = computed(() => [...new Set(this.selectedItems().map((i) => this.periodLabel(i)))].sort((a, b) => this.periodStart(b) - this.periodStart(a)), ...ngDevMode ? [{ debugName: "periods" }] : []);
  strata = computed(() => [...new Set(this.selectedItems().map((i) => i.stratum))].sort((a, b) => this.stratumOrder(a) - this.stratumOrder(b) || a.localeCompare(b, "pt-BR")), ...ngDevMode ? [{ debugName: "strata" }] : []);
  filteredItems = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase("pt-BR");
    return this.selectedItems().filter((i) => this.areaFilter() === "ALL" || i.evaluationArea === this.areaFilter()).filter((i) => this.periodFilter() === "ALL" || this.periodLabel(i) === this.periodFilter()).filter((i) => this.stratumFilter() === "ALL" || i.stratum === this.stratumFilter()).filter((i) => !term || `${i.title} ${i.stratum}`.toLocaleLowerCase("pt-BR").includes(term)).sort((a, b) => this.year(b.periodStart) - this.year(a.periodStart) || a.title.localeCompare(b.title, "pt-BR"));
  }, ...ngDevMode ? [{ debugName: "filteredItems" }] : []);
  groupedItems = computed(() => {
    const groups = /* @__PURE__ */ new Map();
    for (const item of this.filteredItems()) {
      const key = item.title.toLocaleLowerCase("pt-BR");
      const group = groups.get(key) ?? { title: item.title, rdfId: item.rdfId, evaluations: [] };
      group.evaluations.push(item);
      if (!group.rdfId && item.rdfId)
        group.rdfId = item.rdfId;
      groups.set(key, group);
    }
    return [...groups.values()].map((group) => __spreadProps(__spreadValues({}, group), {
      evaluations: group.evaluations.sort((a, b) => this.year(a.periodStart) - this.year(b.periodStart) || this.year(a.periodEnd) - this.year(b.periodEnd) || this.stratumOrder(a.stratum) - this.stratumOrder(b.stratum))
    })).sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
  }, ...ngDevMode ? [{ debugName: "groupedItems" }] : []);
  visibleGroups = computed(() => this.groupedItems().slice(0, this.visibleLimit()), ...ngDevMode ? [{ debugName: "visibleGroups" }] : []);
  summary = computed(() => ({
    records: this.items().length,
    journals: new Set(this.items().map((i) => i.rdfId || i.title)).size,
    systems: this.evaluationNames().length,
    periods: new Set(this.items().map((i) => this.periodLabel(i))).size
  }), ...ngDevMode ? [{ debugName: "summary" }] : []);
  sourceChart = computed(() => this.evaluationNames().map((name) => ({
    label: name,
    segments: [{ key: name, label: name, value: new Set(this.items().filter((i) => i.name === name).map((i) => i.rdfId || i.title)).size, color: name.toLowerCase().includes("scopus") ? "#e17b27" : "#356f9f" }]
  })), ...ngDevMode ? [{ debugName: "sourceChart" }] : []);
  overviewPieCharts = computed(() => {
    const journals = this.journals();
    const collection = this.countBy(journals, (journal) => {
      const value = String(journal.jnl_collection ?? "").trim().toUpperCase();
      return value === "JA" ? "Brasileiras" : value === "JE" ? "Estrangeiras" : "";
    });
    const historic = this.countBy(journals, (journal) => this.isTruthy(journal.jnl_historic) ? "Hist\xF3ricas" : "Correntes (ativas)");
    const status = this.countBy(journals, (journal) => this.statusLabel(journal.jnl_active));
    return [
      this.buildPieChart("Revistas por cole\xE7\xE3o", collection, ["#2f6eaa", "#d69b2d"]),
      this.buildPieChart("Revistas hist\xF3ricas", historic, ["#8b5e3c", "#6e9f73"]),
      this.buildPieChart("Revistas por status", status, ["#2b8a5b", "#bd5b45", "#8b95a1", "#775da6"])
    ];
  }, ...ngDevMode ? [{ debugName: "overviewPieCharts" }] : []);
  strataChartsByArea = computed(() => {
    const selectedArea = this.areaFilter();
    const selectedPeriod = this.periodFilter();
    const selectedStratum = this.stratumFilter();
    const source = this.selectedItems().filter((item) => selectedArea === "ALL" || item.evaluationArea === selectedArea).filter((item) => selectedPeriod === "ALL" || this.periodLabel(item) === selectedPeriod).filter((item) => selectedStratum === "ALL" || item.stratum === selectedStratum);
    const areas = /* @__PURE__ */ new Map();
    for (const item of source) {
      const items = areas.get(item.evaluationArea) ?? [];
      items.push(item);
      areas.set(item.evaluationArea, items);
    }
    return [...areas.entries()].sort(([a], [b]) => a.localeCompare(b, "pt-BR")).map(([area, items]) => ({ area, points: this.buildYearChart(items) }));
  }, ...ngDevMode ? [{ debugName: "strataChartsByArea" }] : []);
  constructor() {
    this.loadAvaliations();
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.resetFilters();
  }
  setArea(value) {
    this.areaFilter.set(value);
    this.visibleLimit.set(this.pageSize);
  }
  setPeriod(value) {
    this.periodFilter.set(value);
    this.visibleLimit.set(this.pageSize);
  }
  setStratum(value) {
    this.stratumFilter.set(value);
    this.visibleLimit.set(this.pageSize);
  }
  setSearch(value) {
    this.searchTerm.set(value);
    this.visibleLimit.set(this.pageSize);
  }
  showMore() {
    this.visibleLimit.update((value) => value + this.pageSize);
  }
  retry() {
    this.loadAvaliations();
  }
  periodLabel(item) {
    return item.periodStart === item.periodEnd ? item.periodStart : `${item.periodStart}\u2013${item.periodEnd}`;
  }
  loadAvaliations() {
    this.loading.set(true);
    this.error.set("");
    forkJoin({
      avaliations: this.api.get("brapci/avaliations"),
      journals: this.api.get("brapci/source/journal")
    }).subscribe({
      next: ({ avaliations, journals }) => {
        this.items.set(this.flatten(avaliations?.data));
        this.journals.set(Array.isArray(journals) ? journals : []);
        this.loading.set(false);
      },
      error: () => {
        this.items.set([]);
        this.error.set("N\xE3o foi poss\xEDvel carregar as avalia\xE7\xF5es de peri\xF3dicos. Tente novamente mais tarde.");
        this.loading.set(false);
      }
    });
  }
  countBy(items, getLabel) {
    const counts = /* @__PURE__ */ new Map();
    for (const item of items) {
      const label = getLabel(item);
      if (label)
        counts.set(label, (counts.get(label) ?? 0) + 1);
    }
    return counts;
  }
  buildPieChart(title, counts, colors) {
    const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
    let position = 0;
    const stops = [];
    const slices = [...counts.entries()].map(([label, value], index) => {
      const percentage = total ? value / total * 100 : 0;
      const color = colors[index % colors.length];
      stops.push(`${color} ${position}% ${position + percentage}%`);
      position += percentage;
      return { label, value, color, percentage };
    });
    return { title, total, slices, background: total ? `conic-gradient(${stops.join(", ")})` : "var(--theme-line)" };
  }
  isTruthy(value) {
    if (typeof value === "boolean")
      return value;
    if (typeof value === "number")
      return value === 1;
    return ["1", "true", "yes", "sim"].includes(String(value ?? "").trim().toLowerCase());
  }
  statusLabel(value) {
    const normalized = String(value ?? "").trim().toLowerCase();
    if (this.isTruthy(value) || ["active", "ativo", "ativa"].includes(normalized))
      return "Ativas";
    if (["0", "false", "no", "n\xE3o", "nao", "inactive", "inativo", "inativa"].includes(normalized))
      return "Inativas";
    return normalized ? String(value).trim() : "N\xE3o informado";
  }
  flatten(data) {
    const result = [];
    const visit = (value) => {
      if (Array.isArray(value)) {
        value.forEach(visit);
        return;
      }
      if (!value || typeof value !== "object")
        return;
      const record = value;
      if ("name" in record && "stratum" in record && "title" in record) {
        const item = this.toItem(record);
        if (item)
          result.push(item);
        return;
      }
      Object.values(record).forEach(visit);
    };
    visit(data);
    return result;
  }
  toItem(r) {
    const name = this.text(r["name"]);
    const title = this.text(r["title"]);
    if (name === "-" || title === "-")
      return null;
    const number = Number.parseFloat(String(r["numeric_value"] ?? ""));
    return { periodStart: this.text(r["period_start"]), periodEnd: this.text(r["period_end"]), name, evaluationArea: this.text(r["evaluation_area"]), rdfId: this.text(r["rdf_id"]) === "-" ? "" : this.text(r["rdf_id"]), title, stratum: this.text(r["stratum"]), numericValue: Number.isFinite(number) ? number : null };
  }
  resetFilters() {
    this.areaFilter.set("ALL");
    this.periodFilter.set("ALL");
    this.stratumFilter.set("ALL");
    this.searchTerm.set("");
    this.visibleLimit.set(this.pageSize);
  }
  buildYearChart(items) {
    const years = /* @__PURE__ */ new Map();
    for (const item of items) {
      const year = item.periodEnd !== "-" ? item.periodEnd : item.periodStart;
      const strata = years.get(year) ?? /* @__PURE__ */ new Map();
      strata.set(item.stratum, (strata.get(item.stratum) ?? 0) + 1);
      years.set(year, strata);
    }
    return [...years.entries()].sort(([a], [b]) => this.year(a) - this.year(b)).map(([year, strata]) => ({
      label: year,
      segments: [...strata.entries()].sort(([a], [b]) => this.stratumOrder(a) - this.stratumOrder(b)).map(([stratum, value]) => ({ key: stratum, label: stratum, value, color: COLORS[stratum] ?? "#6f7d8c" }))
    }));
  }
  text(value) {
    return typeof value === "string" && value.trim() ? value.trim() : typeof value === "number" && Number.isFinite(value) ? String(value) : "-";
  }
  year(value) {
    const year = Number.parseInt(value, 10);
    return Number.isFinite(year) ? year : 0;
  }
  periodStart(value) {
    return this.year(value.split(/[–-]/)[0]);
  }
  stratumOrder(value) {
    const order = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "B5", "C", "Q1", "Q2", "Q3", "Q4"];
    const index = order.indexOf(value);
    return index < 0 ? order.length : index;
  }
  static \u0275fac = function RevistaAvaliationPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevistaAvaliationPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevistaAvaliationPage, selectors: [["app-revista-avaliation-page"]], decls: 13, vars: 1, consts: [["aria-labelledby", "avaliation-title", 1, "revista-avaliation-wrap", "py-4"], [1, "container"], [1, "avaliation-header", "mt-3", "mb-4"], [1, "avaliation-kicker", "mb-1"], ["id", "avaliation-title", 1, "h2", "mb-2"], [1, "mb-0"], ["role", "status", 1, "state-card"], ["role", "alert", 1, "state-card", "state-card--error"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], ["role", "tablist", "aria-label", "Sistemas de avalia\xE7\xE3o", 1, "avaliation-tabs"], ["type", "button", "role", "tab", 3, "click"], ["type", "button", "role", "tab", 3, "active"], [1, "summary-grid", "mt-4"], [1, "summary-card"], [1, "content-card", "mt-4"], ["title", "Peri\xF3dicos por sistema de avalia\xE7\xE3o", 3, "points"], ["aria-label", "Distribui\xE7\xE3o das revistas", 1, "overview-pies", "mt-4"], [1, "content-card", "pie-card"], [1, "h5", "mb-3"], [1, "pie-layout"], ["role", "img", 1, "pie-chart"], [1, "pie-legend"], ["aria-hidden", "true", 1, "pie-swatch"], [1, "pie-label"], [1, "filter-grid"], [1, "form-select", 3, "change", "value"], ["value", "ALL"], [3, "value"], ["type", "search", "placeholder", "T\xEDtulo ou estrato", 1, "form-control", 3, "input", "value"], ["aria-label", "Gr\xE1ficos de estratos por ano", 1, "charts-grid", "mt-4"], [1, "content-card"], [1, "results-heading"], [1, "h5", "mb-0"], [1, "text-secondary", "mb-0", "mt-3"], [3, "title", "points"], [1, "journal-groups", "mt-3"], [1, "journal-group"], [1, "text-center", "mt-3"], [1, "journal-group__title"], [3, "href"], [1, "table-responsive"], [1, "avaliation-table", "avaliation-table--grouped"], [1, "nowrap"], [1, "stratum-pill"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function RevistaAvaliationPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "header", 2)(4, "p", 3);
      \u0275\u0275text(5, "Indicadores de peri\xF3dicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 4);
      \u0275\u0275text(7, "Avalia\xE7\xF5es de peri\xF3dicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Consulte a evolu\xE7\xE3o dos estratos Qualis CAPES e dos quartis SJR Scopus.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, RevistaAvaliationPage_Conditional_10_Template, 3, 0, "div", 6)(11, RevistaAvaliationPage_Conditional_11_Template, 5, 1, "div", 7)(12, RevistaAvaliationPage_Conditional_12_Template, 7, 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.error() ? 11 : 12);
    }
  }, dependencies: [CommonModule, TranslateModule, BreadcrumbsComponent, BarChartComponent, DecimalPipe], styles: ['\n\n.revista-avaliation-wrap[_ngcontent-%COMP%] {\n  min-height: 60vh;\n}\n.avaliation-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--theme-card-bg),\n      var(--theme-sand));\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  padding: clamp(1.25rem, 3vw, 2.5rem);\n}\n.avaliation-kicker[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.avaliation-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n}\n.avaliation-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  padding: 0.48rem 0.9rem;\n}\n.avaliation-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  font-weight: 700;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.summary-card[_ngcontent-%COMP%], \n.content-card[_ngcontent-%COMP%], \n.state-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: clamp(1.5rem, 4vw, 2.25rem);\n  line-height: 1;\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.results-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.state-card[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.7rem;\n}\n.state-card--error[_ngcontent-%COMP%] {\n  display: block;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.overview-pies[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.pie-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pie-layout[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(110px, 150px) minmax(0, 1fr);\n}\n.pie-chart[_ngcontent-%COMP%] {\n  align-items: center;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n}\n.pie-chart[_ngcontent-%COMP%]::before {\n  background: var(--theme-card-bg);\n  border-radius: 50%;\n  content: "";\n  height: 56%;\n  position: absolute;\n  width: 56%;\n}\n.pie-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  position: relative;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.pie-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  font-size: 0.82rem;\n  gap: 0.35rem;\n  grid-template-columns: 0.7rem minmax(0, 1fr) auto auto;\n}\n.pie-swatch[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 0.7rem;\n  width: 0.7rem;\n}\n.pie-label[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.pie-legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  min-width: 3.4rem;\n  text-align: right;\n}\n.filter-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 0.82rem;\n  font-weight: 600;\n  gap: 0.35rem;\n}\n.results-heading[_ngcontent-%COMP%] {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  justify-content: space-between;\n}\n.results-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.journal-groups[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.journal-group[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  overflow: hidden;\n}\n.journal-group__title[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border-bottom: 1px solid var(--theme-line);\n  font-size: 1rem;\n  margin: 0;\n  padding: 0.75rem 1rem;\n}\n.journal-group__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-link, #1f5aa6);\n  font-weight: 700;\n}\n.avaliation-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  min-width: 850px;\n  width: 100%;\n}\n.avaliation-table--grouped[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n.avaliation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.avaliation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--theme-line);\n  padding: 0.7rem;\n  text-align: left;\n  vertical-align: middle;\n}\n.avaliation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.avaliation-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.avaliation-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-link, #1f5aa6);\n  font-weight: 600;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.stratum-pill[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  display: inline-block;\n  font-weight: 700;\n  min-width: 2.8rem;\n  padding: 0.18rem 0.5rem;\n  text-align: center;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .avaliation-header[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .avaliation-header[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .content-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .content-card[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .state-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .state-card[_ngcontent-%COMP%] {\n  border-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .avaliation-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .avaliation-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .stratum-pill[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .stratum-pill[_ngcontent-%COMP%] {\n  background: rgba(33, 47, 70, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .journal-group[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-group[_ngcontent-%COMP%] {\n  border-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .journal-group__title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-group__title[_ngcontent-%COMP%] {\n  background: rgba(33, 47, 70, 0.96);\n  border-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-select[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  background-color: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n@media (min-width: 768px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.4fr) minmax(145px, 0.7fr) minmax(130px, 0.55fr) minmax(210px, 1fr);\n  }\n  .content-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .overview-pies[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .pie-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 1200px) {\n  .pie-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(105px, 135px) minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=revista-avaliation.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevistaAvaliationPage, [{
    type: Component,
    args: [{ selector: "app-revista-avaliation-page", standalone: true, imports: [CommonModule, TranslateModule, BreadcrumbsComponent, BarChartComponent], template: `<section class="revista-avaliation-wrap py-4" aria-labelledby="avaliation-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
    <header class="avaliation-header mt-3 mb-4">\r
      <p class="avaliation-kicker mb-1">Indicadores de peri\xF3dicos</p>\r
      <h1 id="avaliation-title" class="h2 mb-2">Avalia\xE7\xF5es de peri\xF3dicos</h1>\r
      <p class="mb-0">Consulte a evolu\xE7\xE3o dos estratos Qualis CAPES e dos quartis SJR Scopus.</p>\r
    </header>\r
\r
    @if (loading()) {\r
      <div class="state-card" role="status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando avalia\xE7\xF5es\u2026</div>\r
    } @else if (error()) {\r
      <div class="state-card state-card--error" role="alert"><p class="mb-3">{{ error() }}</p><button type="button" class="btn btn-outline-danger btn-sm" (click)="retry()">Tentar novamente</button></div>\r
    } @else {\r
      <nav class="avaliation-tabs" role="tablist" aria-label="Sistemas de avalia\xE7\xE3o">\r
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'overview'" [class.active]="activeTab() === 'overview'" (click)="setTab('overview')">Vis\xE3o geral</button>\r
        @for (name of evaluationNames(); track name) {\r
          <button type="button" role="tab" [attr.aria-selected]="activeTab() === name" [class.active]="activeTab() === name" (click)="setTab(name)">{{ name }}</button>\r
        }\r
      </nav>\r
\r
      @if (activeTab() === 'overview') {\r
        <div class="summary-grid mt-4">\r
          <article class="summary-card"><strong>{{ summary().journals }}</strong><span>peri\xF3dicos</span></article>\r
          <article class="summary-card"><strong>{{ summary().records }}</strong><span>avalia\xE7\xF5es</span></article>\r
          <article class="summary-card"><strong>{{ summary().systems }}</strong><span>sistemas</span></article>\r
          <article class="summary-card"><strong>{{ summary().periods }}</strong><span>per\xEDodos</span></article>\r
        </div>\r
        <article class="content-card mt-4"><app-bar-chart title="Peri\xF3dicos por sistema de avalia\xE7\xE3o" [points]="sourceChart()"></app-bar-chart></article>\r
        <section class="overview-pies mt-4" aria-label="Distribui\xE7\xE3o das revistas">
          @for (chart of overviewPieCharts(); track chart.title) {
            <article class="content-card pie-card">
              <h2 class="h5 mb-3">{{ chart.title }}</h2>
              <div class="pie-layout">
                <div class="pie-chart" role="img" [attr.aria-label]="chart.title + ': ' + chart.total + ' revistas'" [style.background]="chart.background"><span>{{ chart.total }}</span></div>
                <ul class="pie-legend">
                  @for (slice of chart.slices; track slice.label) {
                    <li><span class="pie-swatch" [style.background]="slice.color" aria-hidden="true"></span><span class="pie-label">{{ slice.label }}</span><strong>{{ slice.value }}</strong><small>{{ slice.percentage | number:'1.0-1' }}%</small></li>
                  }
                </ul>
              </div>
            </article>
          }
        </section>
      } @else {
        <section class="content-card mt-4" [attr.aria-label]="activeTab()">\r
          <div class="filter-grid">\r
            <label><span>\xC1rea de avalia\xE7\xE3o</span><select class="form-select" [value]="areaFilter()" (change)="setArea($any($event.target).value)"><option value="ALL">Todas as \xE1reas</option>@for (area of areas(); track area) { <option [value]="area">{{ area }}</option> }</select></label>\r
            <label><span>Per\xEDodo</span><select class="form-select" [value]="periodFilter()" (change)="setPeriod($any($event.target).value)"><option value="ALL">Todos os per\xEDodos</option>@for (period of periods(); track period) { <option [value]="period">{{ period }}</option> }</select></label>\r
            <label><span>Estrato</span><select class="form-select" [value]="stratumFilter()" (change)="setStratum($any($event.target).value)"><option value="ALL">Todos os estratos</option>@for (stratum of strata(); track stratum) { <option [value]="stratum">{{ stratum }}</option> }</select></label>\r
            <label><span>Buscar peri\xF3dico</span><input type="search" class="form-control" placeholder="T\xEDtulo ou estrato" [value]="searchTerm()" (input)="setSearch($any($event.target).value)"></label>\r
          </div>\r
        </section>\r
        <section class="charts-grid mt-4" aria-label="Gr\xE1ficos de estratos por ano">\r
          @for (chart of strataChartsByArea(); track chart.area) {\r
            <article class="content-card">\r
              <app-bar-chart\r
                [title]="'Estratos por ano \u2014 ' + chart.area"\r
                [points]="chart.points"\r
              ></app-bar-chart>\r
            </article>\r
          }\r
        </section>\r
        <article class="content-card mt-4">\r
          <div class="results-heading"><h2 class="h5 mb-0">Peri\xF3dicos avaliados</h2><span>{{ groupedItems().length }} peri\xF3dicos \xB7 {{ filteredItems().length }} avalia\xE7\xF5es</span></div>\r
          @if (visibleGroups().length) {\r
            <div class="journal-groups mt-3">\r
              @for (group of visibleGroups(); track group.title) {\r
                <section class="journal-group">\r
                  <h3 class="journal-group__title">\r
                    @if (group.rdfId) { <a [href]="'/v/' + group.rdfId">{{ group.title }}</a> }\r
                    @else { {{ group.title }} }\r
                  </h3>\r
                  <div class="table-responsive">\r
                    <table class="avaliation-table avaliation-table--grouped">\r
                      <thead><tr><th>Ano/per\xEDodo</th><th>Estrato</th><th>\xC1rea</th><th>Valor</th></tr></thead>\r
                      <tbody>\r
                        @for (item of group.evaluations; track item.periodStart + '-' + item.periodEnd + '-' + item.evaluationArea + '-' + item.stratum) {\r
                          <tr><td class="nowrap">{{ periodLabel(item) }}</td><td><span class="stratum-pill">{{ item.stratum }}</span></td><td>{{ item.evaluationArea }}</td><td>{{ item.numericValue === null ? '\u2014' : (item.numericValue | number:'1.3-4') }}</td></tr>\r
                        }\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                </section>\r
              }\r
            </div>\r
            @if (visibleGroups().length < groupedItems().length) { <div class="text-center mt-3"><button type="button" class="btn btn-outline-primary" (click)="showMore()">Mostrar mais 100 peri\xF3dicos</button></div> }\r
          } @else { <p class="text-secondary mb-0 mt-3">Nenhum peri\xF3dico corresponde aos filtros selecionados.</p> }\r
        </article>\r
      }\r
    }\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/revista-avaliation/revista-avaliation.page.scss */\n.revista-avaliation-wrap {\n  min-height: 60vh;\n}\n.avaliation-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--theme-card-bg),\n      var(--theme-sand));\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  padding: clamp(1.25rem, 3vw, 2.5rem);\n}\n.avaliation-kicker {\n  color: var(--theme-hint);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.avaliation-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n}\n.avaliation-tabs button {\n  background: transparent;\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  padding: 0.48rem 0.9rem;\n}\n.avaliation-tabs button.active {\n  background: var(--theme-sand);\n  font-weight: 700;\n}\n.summary-grid {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.summary-card,\n.content-card,\n.state-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.summary-card {\n  display: grid;\n  gap: 0.15rem;\n}\n.summary-card strong {\n  color: var(--theme-hint);\n  font-size: clamp(1.5rem, 4vw, 2.25rem);\n  line-height: 1;\n}\n.summary-card span,\n.results-heading span {\n  font-size: 0.85rem;\n}\n.state-card {\n  align-items: center;\n  display: flex;\n  gap: 0.7rem;\n}\n.state-card--error {\n  display: block;\n}\n.filter-grid {\n  display: grid;\n  gap: 1rem;\n}\n.charts-grid {\n  display: grid;\n  gap: 1rem;\n}\n.overview-pies {\n  display: grid;\n  gap: 1rem;\n}\n.pie-card {\n  min-width: 0;\n}\n.pie-layout {\n  align-items: center;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(110px, 150px) minmax(0, 1fr);\n}\n.pie-chart {\n  align-items: center;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n}\n.pie-chart::before {\n  background: var(--theme-card-bg);\n  border-radius: 50%;\n  content: "";\n  height: 56%;\n  position: absolute;\n  width: 56%;\n}\n.pie-chart span {\n  font-size: 1.35rem;\n  font-weight: 700;\n  position: relative;\n}\n.pie-legend {\n  display: grid;\n  gap: 0.55rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.pie-legend li {\n  align-items: center;\n  display: grid;\n  font-size: 0.82rem;\n  gap: 0.35rem;\n  grid-template-columns: 0.7rem minmax(0, 1fr) auto auto;\n}\n.pie-swatch {\n  border-radius: 50%;\n  height: 0.7rem;\n  width: 0.7rem;\n}\n.pie-label {\n  overflow-wrap: anywhere;\n}\n.pie-legend small {\n  color: var(--theme-hint);\n  min-width: 3.4rem;\n  text-align: right;\n}\n.filter-grid label {\n  display: grid;\n  font-size: 0.82rem;\n  font-weight: 600;\n  gap: 0.35rem;\n}\n.results-heading {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  justify-content: space-between;\n}\n.results-heading span {\n  color: var(--theme-hint);\n}\n.journal-groups {\n  display: grid;\n  gap: 1rem;\n}\n.journal-group {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  overflow: hidden;\n}\n.journal-group__title {\n  background: var(--theme-sand);\n  border-bottom: 1px solid var(--theme-line);\n  font-size: 1rem;\n  margin: 0;\n  padding: 0.75rem 1rem;\n}\n.journal-group__title a {\n  color: var(--theme-link, #1f5aa6);\n  font-weight: 700;\n}\n.avaliation-table {\n  border-collapse: collapse;\n  min-width: 850px;\n  width: 100%;\n}\n.avaliation-table--grouped {\n  min-width: 650px;\n}\n.avaliation-table th,\n.avaliation-table td {\n  border-bottom: 1px solid var(--theme-line);\n  padding: 0.7rem;\n  text-align: left;\n  vertical-align: middle;\n}\n.avaliation-table th {\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.avaliation-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n.avaliation-table a {\n  color: var(--theme-link, #1f5aa6);\n  font-weight: 600;\n}\n.nowrap {\n  white-space: nowrap;\n}\n.stratum-pill {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  display: inline-block;\n  font-weight: 700;\n  min-width: 2.8rem;\n  padding: 0.18rem 0.5rem;\n  text-align: center;\n}\n:host-context(body.theme-master.theme-dark) .avaliation-header,\n:host-context(body.theme-master.theme-dark) .summary-card,\n:host-context(body.theme-master.theme-dark) .content-card,\n:host-context(body.theme-master.theme-dark) .state-card {\n  border-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .avaliation-tabs button.active,\n:host-context(body.theme-master.theme-dark) .stratum-pill {\n  background: rgba(33, 47, 70, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n}\n:host-context(body.theme-master.theme-dark) .journal-group {\n  border-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .journal-group__title {\n  background: rgba(33, 47, 70, 0.96);\n  border-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .form-control,\n:host-context(body.theme-master.theme-dark) .form-select {\n  background-color: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n@media (min-width: 768px) {\n  .summary-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .filter-grid {\n    grid-template-columns: minmax(0, 1.4fr) minmax(145px, 0.7fr) minmax(130px, 0.55fr) minmax(210px, 1fr);\n  }\n  .content-card {\n    padding: 1.25rem;\n  }\n  .overview-pies {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .pie-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 1200px) {\n  .pie-layout {\n    grid-template-columns: minmax(105px, 135px) minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=revista-avaliation.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevistaAvaliationPage, { className: "RevistaAvaliationPage", filePath: "src/app/pages/revista-avaliation/revista-avaliation.page.ts", lineNumber: 30 });
})();
export {
  RevistaAvaliationPage
};
//# sourceMappingURL=chunk-XI2YV6QT.mjs.map
