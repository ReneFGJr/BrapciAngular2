import './polyfills.server.mjs';
import {
  identity_default,
  path_default
} from "./chunk-GCFZDOB3.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-XW3PUGC7.mjs";
import "./chunk-YPPRAXG6.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-KBHAFJY6.mjs";
import {
  TranslateModule
} from "./chunk-NSIT2XAS.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  Input,
  NgIf,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZBQU5EHV.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

// src/app/pages/pq/pq.page.ts
var _forTrack0 = ($index, $item) => $item.code;
function PqBrazilMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275text(2, " Carregando mapa\u2026");
    \u0275\u0275domElementEnd();
  }
}
function PqBrazilMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar a malha do mapa.");
    \u0275\u0275domElementEnd();
  }
}
function PqBrazilMapComponent_Conditional_2_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "text", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const shape_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("x", shape_r1.x)("y", shape_r1.y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(shape_r1.code);
  }
}
function PqBrazilMapComponent_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "path")(1, "title");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(3, PqBrazilMapComponent_Conditional_2_For_6_Conditional_3_Template, 2, 3, ":svg:text", 6);
  }
  if (rf & 2) {
    const shape_r1 = ctx.$implicit;
    \u0275\u0275attribute("d", shape_r1.path)("class", "state-shape intensity-" + shape_r1.intensity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", shape_r1.name, ": ", shape_r1.count, " bolsista(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(shape_r1.count > 0 ? 3 : -1);
  }
}
function PqBrazilMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2)(1, "title", 4);
    \u0275\u0275text(2, "Distribui\xE7\xE3o de bolsistas por estado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "desc", 5);
    \u0275\u0275text(4, "Mapa coropl\xE9tico do Brasil. Estados mais escuros possuem mais bolsistas.");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(5, PqBrazilMapComponent_Conditional_2_For_6_Template, 4, 5, null, null, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.shapes());
  }
}
var _forTrack1 = ($index, $item) => $item.label;
function PqPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 9);
    \u0275\u0275text(2, " Carregando dados dos bolsistas\u2026");
    \u0275\u0275elementEnd();
  }
}
function PqPage_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function PqPage_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
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
function PqPage_Conditional_14_Conditional_22_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "N\xEDvel " + item_r5.label + ": " + item_r5.count + " bolsistas");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", item_r5.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.count);
  }
}
function PqPage_Conditional_14_Conditional_22_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_173_r7 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_173_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r6.count, " bolsistas");
  }
}
function PqPage_Conditional_14_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "article", 20)(2, "span", 21);
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Bolsistas ativos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "article", 23)(10, "span", 21);
    \u0275\u0275element(11, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Institui\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "article", 23)(18, "span", 21);
    \u0275\u0275element(19, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Regi\xF5es representadas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 25)(26, "article", 26)(27, "div", 27)(28, "div")(29, "span", 4);
    \u0275\u0275text(30, "Perfil das bolsas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h2");
    \u0275\u0275text(32, "Modalidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "span", 28);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 29);
    \u0275\u0275repeaterCreate(36, PqPage_Conditional_14_Conditional_22_For_37_Template, 7, 5, "div", 30, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "article", 26)(39, "div", 27)(40, "div")(41, "span", 4);
    \u0275\u0275text(42, "Maior concentra\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h2");
    \u0275\u0275text(44, "Principais institui\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 31);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Conditional_22_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("instituicoes"));
    });
    \u0275\u0275text(46, "Ver todas ");
    \u0275\u0275element(47, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 33);
    \u0275\u0275repeaterCreate(49, PqPage_Conditional_14_Conditional_22_For_50_Template, 7, 3, "div", 34, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.response()) == null ? null : tmp_2_0.actives) || ctx_r1.scholars().length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.response()) == null ? null : tmp_3_0.institutions) || ctx_r1.institutionCounts().length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.regionCounts().length);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.scholars().length, " bolsistas");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levelCounts());
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.institutionCounts().slice(0, 6));
  }
}
function PqPage_Conditional_14_Conditional_23_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("N\xEDvel ", item_r9);
  }
}
function PqPage_Conditional_14_Conditional_23_For_39_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r10 = ctx.ngIf;
    \u0275\u0275property("href", url_r10, \u0275\u0275sanitizeUrl);
  }
}
function PqPage_Conditional_14_Conditional_23_For_39_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r11 = ctx.ngIf;
    \u0275\u0275property("href", url_r11, \u0275\u0275sanitizeUrl);
  }
}
function PqPage_Conditional_14_Conditional_23_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 50);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 51);
    \u0275\u0275template(14, PqPage_Conditional_14_Conditional_23_For_39_a_14_Template, 2, 1, "a", 52)(15, PqPage_Conditional_14_Conditional_23_For_39_a_15_Template, 2, 1, "a", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.bs_nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r12.mod_sigla, " ", ctx_r1.level(item_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.BS_IES);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(11, 8, item_r12.bs_start, "MM/yyyy", "UTC"), " \u2014 ", \u0275\u0275pipeBind3(12, 12, item_r12.bs_finish, "MM/yyyy", "UTC"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.brapciUrl(item_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lattesUrl(item_r12));
  }
}
function PqPage_Conditional_14_Conditional_23_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2, "Nenhum bolsista encontrado com estes filtros.");
    \u0275\u0275elementEnd()();
  }
}
function PqPage_Conditional_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Rela\xE7\xE3o nominal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Bolsistas e modalidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "label", 41)(10, "span", 42);
    \u0275\u0275text(11, "Buscar bolsista");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "i", 43);
    \u0275\u0275elementStart(13, "input", 44);
    \u0275\u0275listener("ngModelChange", function PqPage_Conditional_14_Conditional_23_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label")(15, "span", 42);
    \u0275\u0275text(16, "Filtrar por n\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 45);
    \u0275\u0275listener("ngModelChange", function PqPage_Conditional_14_Conditional_23_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateLevel($event));
    });
    \u0275\u0275elementStart(18, "option", 46);
    \u0275\u0275text(19, "Todos os n\xEDveis");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, PqPage_Conditional_14_Conditional_23_For_21_Template, 2, 2, "option", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 48)(23, "table", 49)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "Bolsista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Institui\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Vig\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th")(35, "span", 42);
    \u0275\u0275text(36, "Perfis");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, PqPage_Conditional_14_Conditional_23_For_39_Template, 16, 16, "tr", null, \u0275\u0275componentInstance().trackScholar, true, PqPage_Conditional_14_Conditional_23_ForEmpty_40_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredScholars().length, " resultado(s)");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.searchTerm());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.levelFilter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredScholars());
  }
}
function PqPage_Conditional_14_Conditional_24_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "div", 63)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 64);
    \u0275\u0275element(10, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "strong", 65);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const \u0275$index_308_r14 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_308_r14 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.regionFor(item_r13.label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r13.count / ctx_r1.maxInstitutionCount() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.count);
  }
}
function PqPage_Conditional_14_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "V\xEDnculo institucional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Institui\xE7\xF5es dos bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275repeaterCreate(9, PqPage_Conditional_14_Conditional_24_For_10_Template, 13, 6, "div", 60, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.institutionCounts().length, " institui\xE7\xF5es");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.institutionCounts());
  }
}
function PqPage_Conditional_14_Conditional_25_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 67)(1, "div", 70)(2, "span", 71);
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10, "bolsistas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 73);
    \u0275\u0275element(12, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.count);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", item_r15.count / ctx_r1.maxRegionCount() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 5, item_r15.percentage, "1.1-1"), "% do total");
  }
}
function PqPage_Conditional_14_Conditional_25_For_20_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const institution_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(institution_r16.label);
  }
}
function PqPage_Conditional_14_Conditional_25_For_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PqPage_Conditional_14_Conditional_25_For_20_For_5_Conditional_0_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const institution_r16 = ctx.$implicit;
    const region_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.regionFor(institution_r16.label) === region_r17.label ? 0 : -1);
  }
}
function PqPage_Conditional_14_Conditional_25_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275repeaterCreate(4, PqPage_Conditional_14_Conditional_25_For_20_For_5_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const region_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.institutionCounts());
  }
}
function PqPage_Conditional_14_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Distribui\xE7\xE3o territorial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Regi\xF5es dos bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "Brasil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66);
    \u0275\u0275repeaterCreate(9, PqPage_Conditional_14_Conditional_25_For_10_Template, 16, 8, "article", 67, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "article", 68)(12, "div", 27)(13, "div")(14, "span", 4);
    \u0275\u0275text(15, "Composi\xE7\xE3o regional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Institui\xE7\xF5es por regi\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 69);
    \u0275\u0275repeaterCreate(19, PqPage_Conditional_14_Conditional_25_For_20_Template, 6, 1, "div", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.regionCounts());
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.regionCounts());
  }
}
function PqPage_Conditional_14_Conditional_26_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "strong", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const state_r19 = ctx_r17.$implicit;
    const \u0275$index_448_r20 = ctx_r17.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_448_r20 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r19.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 5, state_r19.percentage, "1.1-1"), "% do total");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r19.count);
  }
}
function PqPage_Conditional_14_Conditional_26_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PqPage_Conditional_14_Conditional_26_For_27_Conditional_0_Template, 13, 8, "div", 83);
  }
  if (rf & 2) {
    const state_r19 = ctx.$implicit;
    \u0275\u0275conditional(state_r19.count > 0 ? 0 : -1);
  }
}
function PqPage_Conditional_14_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Distribui\xE7\xE3o estadual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Mapa dos bolsistas por estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 74)(9, "div", 75);
    \u0275\u0275element(10, "app-pq-brazil-map", 76);
    \u0275\u0275elementStart(11, "div", 77)(12, "span");
    \u0275\u0275text(13, "Menor concentra\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 78)(15, "i", 79)(16, "i", 80);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Maior concentra\xE7\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "aside", 81)(20, "div", 27)(21, "div")(22, "span", 4);
    \u0275\u0275text(23, "Ranking estadual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h2", 82);
    \u0275\u0275text(25, "Bolsistas por UF");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(26, PqPage_Conditional_14_Conditional_26_For_27_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.scholars().length, " bolsistas");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.stateCounts());
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.stateCounts());
  }
}
function PqPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 11)(1, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("resumo"));
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Resumo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("bolsistas"));
    });
    \u0275\u0275element(6, "i", 14);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("instituicoes"));
    });
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Institui\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("regioes"));
    });
    \u0275\u0275element(14, "i", 16);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Regi\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("mapa"));
    });
    \u0275\u0275element(18, "i", 17);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Mapa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275conditionalCreate(22, PqPage_Conditional_14_Conditional_22_Template, 51, 4);
    \u0275\u0275conditionalCreate(23, PqPage_Conditional_14_Conditional_23_Template, 41, 4);
    \u0275\u0275conditionalCreate(24, PqPage_Conditional_14_Conditional_24_Template, 11, 1);
    \u0275\u0275conditionalCreate(25, PqPage_Conditional_14_Conditional_25_Template, 21, 0);
    \u0275\u0275conditionalCreate(26, PqPage_Conditional_14_Conditional_26_Template, 28, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "resumo");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "resumo");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "bolsistas");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "bolsistas");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "instituicoes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "instituicoes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "regioes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "regioes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "mapa");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "mapa");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.activeTab() === "resumo" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "bolsistas" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "instituicoes" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "regioes" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "mapa" ? 26 : -1);
  }
}
var INSTITUTION_REGION = {
  CNEN: "Sudeste",
  IBICT: "Sudeste",
  UEL: "Sul",
  UFC: "Nordeste",
  UFAL: "Nordeste",
  UFBA: "Nordeste",
  UFCA: "Nordeste",
  UFES: "Sudeste",
  UFG: "Centro-Oeste",
  UFMG: "Sudeste",
  UFPA: "Norte",
  UFPB: "Nordeste",
  UFPE: "Nordeste",
  UFF: "Sudeste",
  UFRGS: "Sul",
  UFRJ: "Sudeste",
  UFS: "Nordeste",
  UFSC: "Sul",
  UFSCAR: "Sudeste",
  UnB: "Centro-Oeste",
  UNESP: "Sudeste",
  UNIRIO: "Sudeste",
  USP: "Sudeste"
};
var INSTITUTION_STATE = {
  CNEN: "RJ",
  IBICT: "RJ",
  UEL: "PR",
  UFC: "CE",
  UFAL: "AL",
  UFBA: "BA",
  UFCA: "CE",
  UFES: "ES",
  UFG: "GO",
  UFMG: "MG",
  UFPA: "PA",
  UFPB: "PB",
  UFPE: "PE",
  UFF: "RJ",
  UFRGS: "RS",
  UFRJ: "RJ",
  UFS: "SE",
  UFSC: "SC",
  UFSCAR: "SP",
  UnB: "DF",
  UNESP: "SP",
  UNIRIO: "RJ",
  USP: "SP"
};
var STATE_INFO = {
  AC: { name: "Acre", ibgeCode: "12" },
  AL: { name: "Alagoas", ibgeCode: "27" },
  AP: { name: "Amap\xE1", ibgeCode: "16" },
  AM: { name: "Amazonas", ibgeCode: "13" },
  BA: { name: "Bahia", ibgeCode: "29" },
  CE: { name: "Cear\xE1", ibgeCode: "23" },
  DF: { name: "Distrito Federal", ibgeCode: "53" },
  ES: { name: "Esp\xEDrito Santo", ibgeCode: "32" },
  GO: { name: "Goi\xE1s", ibgeCode: "52" },
  MA: { name: "Maranh\xE3o", ibgeCode: "21" },
  MT: { name: "Mato Grosso", ibgeCode: "51" },
  MS: { name: "Mato Grosso do Sul", ibgeCode: "50" },
  MG: { name: "Minas Gerais", ibgeCode: "31" },
  PA: { name: "Par\xE1", ibgeCode: "15" },
  PB: { name: "Para\xEDba", ibgeCode: "25" },
  PR: { name: "Paran\xE1", ibgeCode: "41" },
  PE: { name: "Pernambuco", ibgeCode: "26" },
  PI: { name: "Piau\xED", ibgeCode: "22" },
  RJ: { name: "Rio de Janeiro", ibgeCode: "33" },
  RN: { name: "Rio Grande do Norte", ibgeCode: "24" },
  RS: { name: "Rio Grande do Sul", ibgeCode: "43" },
  RO: { name: "Rond\xF4nia", ibgeCode: "11" },
  RR: { name: "Roraima", ibgeCode: "14" },
  SC: { name: "Santa Catarina", ibgeCode: "42" },
  SP: { name: "S\xE3o Paulo", ibgeCode: "35" },
  SE: { name: "Sergipe", ibgeCode: "28" },
  TO: { name: "Tocantins", ibgeCode: "17" }
};
var PqBrazilMapComponent = class _PqBrazilMapComponent {
  http = inject(HttpClient);
  shapes = signal([], ...ngDevMode ? [{ debugName: "shapes" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  stateData = [];
  set data(value) {
    this.stateData = value || [];
    if (!this.loading())
      this.buildShapes(this.geoJson);
  }
  geoJson = null;
  ngOnInit() {
    this.http.get("assets/data/brasil-estados.geojson").subscribe({
      next: (geoJson) => {
        this.geoJson = geoJson;
        this.buildShapes(geoJson);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
  buildShapes(geoJson) {
    if (!geoJson?.features)
      return;
    const projection = identity_default().reflectY(true).fitExtent([[18, 18], [602, 552]], geoJson);
    const pathGenerator = path_default(projection);
    const max = Math.max(...this.stateData.map((item) => item.count), 1);
    const byIbge = new Map(this.stateData.map((item) => [item.ibgeCode, item]));
    this.shapes.set(geoJson.features.map((feature) => {
      const state = byIbge.get(String(feature.properties?.codarea)) || { code: "", ibgeCode: "", label: "", count: 0, percentage: 0 };
      const [x, y] = pathGenerator.centroid(feature);
      const ratio = state.count / max;
      return __spreadProps(__spreadValues({}, state), { name: state.label, path: pathGenerator(feature) || "", x, y, intensity: state.count === 0 ? 0 : ratio <= 0.34 ? 1 : ratio <= 0.67 ? 2 : 3 });
    }));
  }
  static \u0275fac = function PqBrazilMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqBrazilMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqBrazilMapComponent, selectors: [["app-pq-brazil-map"]], inputs: { data: "data" }, decls: 3, vars: 1, consts: [[1, "map-status"], [1, "map-status", "text-danger"], ["viewBox", "0 0 620 570", "role", "img", "aria-labelledby", "map-title map-desc", 1, "brazil-map"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["id", "map-title"], ["id", "map-desc"], [1, "state-label"]], template: function PqBrazilMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PqBrazilMapComponent_Conditional_0_Template, 3, 0, "div", 0)(1, PqBrazilMapComponent_Conditional_1_Template, 2, 0, "div", 1)(2, PqBrazilMapComponent_Conditional_2_Template, 7, 0, ":svg:svg", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.error() ? 1 : 2);
    }
  }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.map-status[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 420px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--theme-muted);\n}\n.brazil-map[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 570px;\n}\n.state-shape[_ngcontent-%COMP%] {\n  stroke: var(--theme-card-bg);\n  stroke-width: 1.5;\n  vector-effect: non-scaling-stroke;\n  transition: fill 0.2s ease;\n}\n.intensity-0[_ngcontent-%COMP%] {\n  fill: var(--theme-sand);\n}\n.intensity-1[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 28%, var(--theme-sand));\n}\n.intensity-2[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 55%, var(--theme-sand));\n}\n.intensity-3[_ngcontent-%COMP%] {\n  fill: var(--pq-map-color, #9a654d);\n}\n.state-shape[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.92);\n  stroke: var(--theme-ink);\n}\n.state-label[_ngcontent-%COMP%] {\n  fill: #fff;\n  font: 700 12px "Raleway", sans-serif;\n  text-anchor: middle;\n  pointer-events: none;\n  paint-order: stroke;\n  stroke: rgba(0, 0, 0, 0.28);\n  stroke-width: 2px;\n}\n/*# sourceMappingURL=pq.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqBrazilMapComponent, [{
    type: Component,
    args: [{ selector: "app-pq-brazil-map", standalone: true, imports: [CommonModule], template: `
    @if (loading()) {
      <div class="map-status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando mapa\u2026</div>
    } @else if (error()) {
      <div class="map-status text-danger">N\xE3o foi poss\xEDvel carregar a malha do mapa.</div>
    } @else {
      <svg class="brazil-map" viewBox="0 0 620 570" role="img" aria-labelledby="map-title map-desc">
        <title id="map-title">Distribui\xE7\xE3o de bolsistas por estado</title>
        <desc id="map-desc">Mapa coropl\xE9tico do Brasil. Estados mais escuros possuem mais bolsistas.</desc>
        @for (shape of shapes(); track shape.code) {
          <path [attr.d]="shape.path" [attr.class]="'state-shape intensity-' + shape.intensity">
            <title>{{ shape.name }}: {{ shape.count }} bolsista(s)</title>
          </path>
          @if (shape.count > 0) {<text [attr.x]="shape.x" [attr.y]="shape.y" class="state-label">{{ shape.code }}</text>}
        }
      </svg>
    }
  `, styles: ['/* angular:styles/component:scss;33e7a04d6141e22c3b84de925e985ddadf43da12deded4720f10dc0615c3ed50;D:/Projeto/BrapciAngular2/src/app/pages/pq/pq.page.ts */\n:host {\n  display: block;\n}\n.map-status {\n  display: flex;\n  min-height: 420px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--theme-muted);\n}\n.brazil-map {\n  display: block;\n  width: 100%;\n  max-height: 570px;\n}\n.state-shape {\n  stroke: var(--theme-card-bg);\n  stroke-width: 1.5;\n  vector-effect: non-scaling-stroke;\n  transition: fill 0.2s ease;\n}\n.intensity-0 {\n  fill: var(--theme-sand);\n}\n.intensity-1 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 28%, var(--theme-sand));\n}\n.intensity-2 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 55%, var(--theme-sand));\n}\n.intensity-3 {\n  fill: var(--pq-map-color, #9a654d);\n}\n.state-shape:hover {\n  filter: brightness(0.92);\n  stroke: var(--theme-ink);\n}\n.state-label {\n  fill: #fff;\n  font: 700 12px "Raleway", sans-serif;\n  text-anchor: middle;\n  pointer-events: none;\n  paint-order: stroke;\n  stroke: rgba(0, 0, 0, 0.28);\n  stroke-width: 2px;\n}\n/*# sourceMappingURL=pq.page.css.map */\n'] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqBrazilMapComponent, { className: "PqBrazilMapComponent", filePath: "src/app/pages/pq/pq.page.ts", lineNumber: 81 });
})();
var PqPage = class _PqPage {
  http = inject(HttpClient);
  endpoint = "https://cip.brapci.inf.br/api/pq";
  activeTab = signal("resumo", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  response = signal(null, ...ngDevMode ? [{ debugName: "response" }] : []);
  scholars = signal([], ...ngDevMode ? [{ debugName: "scholars" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  levelFilter = signal("todos", ...ngDevMode ? [{ debugName: "levelFilter" }] : []);
  levels = computed(() => [...new Set(this.scholars().map((item) => this.level(item)))].sort(this.sortLevel), ...ngDevMode ? [{ debugName: "levels" }] : []);
  filteredScholars = computed(() => {
    const term = this.normalize(this.searchTerm());
    const level = this.levelFilter();
    return this.scholars().filter((item) => (level === "todos" || this.level(item) === level) && (!term || this.normalize(`${item.bs_nome} ${item.BS_IES} ${this.level(item)}`).includes(term))).sort((a, b) => a.bs_nome.localeCompare(b.bs_nome, "pt-BR", { sensitivity: "base" }));
  }, ...ngDevMode ? [{ debugName: "filteredScholars" }] : []);
  levelCounts = computed(() => this.countBy(this.scholars(), (item) => this.level(item), this.sortLevel), ...ngDevMode ? [{ debugName: "levelCounts" }] : []);
  institutionCounts = computed(() => this.countBy(this.scholars(), (item) => item.BS_IES), ...ngDevMode ? [{ debugName: "institutionCounts" }] : []);
  regionCounts = computed(() => this.countBy(this.scholars(), (item) => this.regionFor(item.BS_IES)), ...ngDevMode ? [{ debugName: "regionCounts" }] : []);
  stateCounts = computed(() => {
    const counts = /* @__PURE__ */ new Map();
    this.scholars().forEach((item) => {
      const code = INSTITUTION_STATE[item.BS_IES];
      if (code)
        counts.set(code, (counts.get(code) || 0) + 1);
    });
    const total = this.scholars().length || 1;
    return Object.entries(STATE_INFO).map(([code, info]) => ({ code, ibgeCode: info.ibgeCode, label: info.name, count: counts.get(code) || 0, percentage: (counts.get(code) || 0) / total * 100 })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "pt-BR"));
  }, ...ngDevMode ? [{ debugName: "stateCounts" }] : []);
  maxInstitutionCount = computed(() => this.institutionCounts()[0]?.count || 1, ...ngDevMode ? [{ debugName: "maxInstitutionCount" }] : []);
  maxRegionCount = computed(() => this.regionCounts()[0]?.count || 1, ...ngDevMode ? [{ debugName: "maxRegionCount" }] : []);
  ngOnInit() {
    this.loadData();
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  updateSearch(value) {
    this.searchTerm.set(value);
  }
  updateLevel(value) {
    this.levelFilter.set(value);
  }
  loadData() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get(this.endpoint).subscribe({
      next: (response) => {
        this.response.set(response);
        this.scholars.set(Array.isArray(response.data) ? response.data : []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("N\xE3o foi poss\xEDvel carregar os dados dos bolsistas. Tente novamente.");
        this.loading.set(false);
      }
    });
  }
  level(item) {
    return item.bs_nivel?.trim() || "N\xE3o informado";
  }
  regionFor(institution) {
    return INSTITUTION_REGION[institution] || "N\xE3o informada";
  }
  lattesUrl(item) {
    return item.bs_lattes && item.bs_lattes !== "NI" ? `https://lattes.cnpq.br/${item.bs_lattes}` : null;
  }
  brapciUrl(item) {
    return item.bd_brapci && item.bd_brapci !== "0" ? `/v/${item.bd_brapci}` : null;
  }
  trackScholar(_, item) {
    return item.id_bb;
  }
  countBy(items, label, sortLabels) {
    const counts = /* @__PURE__ */ new Map();
    items.forEach((item) => counts.set(label(item), (counts.get(label(item)) || 0) + 1));
    const total = items.length || 1;
    return [...counts.entries()].map(([itemLabel, count]) => ({ label: itemLabel, count, percentage: count / total * 100 })).sort((a, b) => sortLabels ? sortLabels(a.label, b.label) : b.count - a.count || a.label.localeCompare(b.label));
  }
  sortLevel = (a, b) => {
    const order = ["A", "B", "C", "1A", "1B", "1C", "1D", "2"];
    return (order.indexOf(a) < 0 ? 99 : order.indexOf(a)) - (order.indexOf(b) < 0 ? 99 : order.indexOf(b));
  };
  normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  static \u0275fac = function PqPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqPage, selectors: [["app-pq-page"]], decls: 15, vars: 1, consts: [["aria-labelledby", "pq-title", 1, "pq-page", "py-4"], [1, "container"], [1, "pq-hero"], [1, "pq-hero-copy"], [1, "eyebrow"], ["id", "pq-title"], ["src", "assets/logos/logo_pq.png", "alt", "Base de dados dos bolsistas PQ", 1, "pq-logo"], ["role", "status", "aria-live", "polite", 1, "status-panel"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], ["aria-label", "Visualiza\xE7\xF5es dos bolsistas", "role", "tablist", 1, "pq-tabs"], ["type", "button", "role", "tab", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-grid-1x2"], ["aria-hidden", "true", 1, "bi", "bi-people"], ["aria-hidden", "true", 1, "bi", "bi-building"], ["aria-hidden", "true", 1, "bi", "bi-geo-alt"], ["aria-hidden", "true", 1, "bi", "bi-map"], ["role", "tabpanel", 1, "tab-content"], [1, "summary-grid"], [1, "metric-card", "metric-primary"], [1, "metric-icon"], ["aria-hidden", "true", 1, "bi", "bi-person-check"], [1, "metric-card"], ["aria-hidden", "true", 1, "bi", "bi-bank"], [1, "content-grid"], [1, "panel"], [1, "panel-heading"], [1, "total-label"], [1, "level-list"], [1, "level-row"], ["type", "button", 1, "text-action", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-arrow-right"], [1, "ranking-list"], [1, "ranking-row"], [1, "level-badge"], ["role", "img", 1, "level-progress"], [1, "rank"], [1, "section-heading"], [1, "result-count"], [1, "filters"], [1, "search-field"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "bi", "bi-search"], ["type", "search", "placeholder", "Buscar por nome ou institui\xE7\xE3o", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "todos"], [3, "value"], [1, "table-responsive", "scholar-table-wrap"], [1, "table", "align-middle", "scholar-table"], [1, "text-nowrap"], [1, "profile-links"], ["aria-label", "Ver perfil na Brapci", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "aria-label", "Abrir curr\xEDculo Lattes", 3, "href", 4, "ngIf"], ["aria-label", "Ver perfil na Brapci", 3, "href"], ["aria-hidden", "true", 1, "bi", "bi-journal-text"], ["target", "_blank", "rel", "noopener", "aria-label", "Abrir curr\xEDculo Lattes", 3, "href"], ["aria-hidden", "true", 1, "bi", "bi-box-arrow-up-right"], ["colspan", "5", 1, "empty-state"], [1, "bar-list"], [1, "bar-row"], [1, "bar-rank"], [1, "bar-main"], [1, "bar-label"], [1, "bar-track"], [1, "bar-value"], [1, "region-grid"], [1, "region-card"], [1, "panel", "mt-4"], [1, "region-institutions"], [1, "region-top"], [1, "region-pin"], ["aria-hidden", "true", 1, "bi", "bi-geo-alt-fill"], [1, "region-share"], [1, "map-layout"], [1, "map-panel"], [3, "data"], ["aria-label", "Legenda de intensidade", 1, "map-legend"], [1, "legend-step", "level-1"], [1, "legend-step", "level-2"], [1, "legend-step", "level-3"], ["aria-labelledby", "state-ranking-title", 1, "state-ranking"], ["id", "state-ranking-title"], [1, "state-row"], [1, "state-position"], [1, "state-code"], [1, "state-value"]], template: function PqPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "header", 2)(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6, "Panorama da Ci\xEAncia da Informa\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Bolsistas de Produtividade CNPq");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Conhe\xE7a a distribui\xE7\xE3o dos pesquisadores por modalidade, institui\xE7\xE3o e regi\xE3o do Brasil.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, PqPage_Conditional_12_Template, 3, 0, "div", 7)(13, PqPage_Conditional_13_Template, 5, 1, "div", 8)(14, PqPage_Conditional_14_Template, 27, 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.error() ? 13 : 14);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslateModule, BreadcrumbsComponent, PqBrazilMapComponent, DecimalPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.pq-page[_ngcontent-%COMP%] {\n  --pq-accent: #9a654d;\n  --pq-accent-dark: #704330;\n  --pq-accent-soft: #f4e8e1;\n  --pq-green: #3b796b;\n  color: var(--theme-ink);\n  min-height: 70vh;\n}\n.pq-hero[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 210px;\n  margin: 1rem 0 1.5rem;\n  padding: 2.25rem 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--pq-accent) 25%, var(--theme-line));\n  border-radius: 1.25rem;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      color-mix(in srgb, var(--pq-accent) 13%, transparent),\n      transparent 34%),\n    linear-gradient(\n      125deg,\n      var(--theme-card-bg),\n      color-mix(in srgb, var(--theme-sand) 70%, transparent));\n}\n.pq-hero-copy[_ngcontent-%COMP%] {\n  max-width: 690px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.pq-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(1.9rem, 4vw, 3.25rem);\n  line-height: 1.08;\n}\n.pq-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 620px;\n  margin: 0;\n  color: var(--theme-muted);\n  font-size: 1.05rem;\n}\n.pq-logo[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.status-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 180px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n}\n.pq-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 1.5rem;\n  padding: 0.35rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.8rem 1rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: 0;\n  border-radius: 0.6rem;\n  color: var(--theme-muted);\n  background: transparent;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--pq-accent) 7%, transparent);\n}\n.pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--pq-accent-dark);\n  box-shadow: 0 4px 12px rgba(55, 32, 22, 0.18);\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.metric-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.region-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1.35rem;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 1rem;\n}\n.metric-card.metric-primary[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--pq-accent) 35%, var(--theme-line));\n}\n.metric-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 1.2rem;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n  line-height: 1;\n}\n.metric-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.88rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 1rem;\n}\n.panel-heading[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.total-label[_ngcontent-%COMP%], \n.result-count[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.level-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n.level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr 2rem;\n  align-items: center;\n  gap: 0.75rem;\n}\n.level-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 2.2rem;\n  padding: 0.28rem 0.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.level-progress[_ngcontent-%COMP%], \n.bar-track[_ngcontent-%COMP%], \n.region-share[_ngcontent-%COMP%] {\n  height: 8px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.level-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.bar-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.region-share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--pq-accent);\n}\n.text-action[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.ranking-list[_ngcontent-%COMP%] {\n  display: grid;\n}\n.ranking-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8rem 1fr auto;\n  padding: 0.72rem 0;\n  align-items: center;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.ranking-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.ranking-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  color: var(--theme-muted);\n  font-size: 0.83rem;\n}\n.rank[_ngcontent-%COMP%], \n.bar-rank[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-variant-numeric: tabular-nums;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(260px, 1fr) minmax(180px, 240px);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.search-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.9rem;\n  z-index: 1;\n  color: var(--theme-muted);\n  transform: translateY(-50%);\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 2.4rem;\n}\n.scholar-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.scholar-table[_ngcontent-%COMP%] {\n  --bs-table-color: var(--theme-ink);\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: var(--theme-ink);\n  --bs-table-hover-color: var(--theme-ink);\n  margin: 0;\n  color: var(--theme-ink);\n}\n.scholar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border-color: var(--theme-line);\n}\n.profile-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.8rem;\n  white-space: nowrap;\n}\n.profile-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pq-accent);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.bar-list[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.4rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem 1fr 2.5rem;\n  padding: 1rem 0;\n  align-items: center;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.bar-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.bar-value[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.region-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.region-card[_ngcontent-%COMP%] {\n  padding: 1.35rem;\n  border-radius: 1rem;\n}\n.region-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.region-pin[_ngcontent-%COMP%] {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-green);\n  background: color-mix(in srgb, var(--pq-green) 12%, transparent);\n}\n.region-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.region-pin), \n.region-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--theme-muted);\n}\n.region-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n}\n.region-share[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.region-share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--pq-green);\n}\n.region-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n  text-align: right;\n}\n.region-institutions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.region-institutions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0.55rem 0 0;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.region-institutions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: var(--theme-muted);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.map-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.75fr);\n  gap: 1rem;\n  align-items: start;\n}\n.map-panel[_ngcontent-%COMP%], \n.state-ranking[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.map-panel[_ngcontent-%COMP%] {\n  --pq-map-color: var(--pq-accent);\n  padding: 1rem 1.5rem;\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.75rem 0 0.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.76rem;\n}\n.legend-step[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 9px;\n  border-radius: 999px;\n}\n.legend-step.level-1[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 28%, var(--theme-sand));\n}\n.legend-step.level-2[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 55%, var(--theme-sand));\n}\n.legend-step.level-3[_ngcontent-%COMP%] {\n  background: var(--pq-accent);\n}\n.state-ranking[_ngcontent-%COMP%] {\n  padding: 1.35rem;\n}\n.state-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5rem 2.5rem 1fr 2rem;\n  padding: 0.68rem 0;\n  align-items: center;\n  gap: 0.55rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.state-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.state-position[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.state-code[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  border-radius: 0.55rem;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-weight: 700;\n}\n.state-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.state-value[_ngcontent-%COMP%] {\n  text-align: right;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-page[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-page[_ngcontent-%COMP%] {\n  --pq-accent: #d29b7e;\n  --pq-accent-dark: #865943;\n  --pq-accent-soft: #35261f;\n  --pq-green: #74bbaa;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-logo[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-logo[_ngcontent-%COMP%] {\n  mix-blend-mode: normal;\n  opacity: 0.9;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n@media (max-width: 991.98px) {\n  .map-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767.98px) {\n  .pq-hero[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 1.5rem;\n  }\n  .pq-logo[_ngcontent-%COMP%] {\n    width: 105px;\n    height: 105px;\n  }\n  .pq-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .summary-grid[_ngcontent-%COMP%], \n   .content-grid[_ngcontent-%COMP%], \n   .region-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .region-institutions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .pq-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .pq-logo[_ngcontent-%COMP%] {\n    width: 72px;\n    height: 72px;\n  }\n  .pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.7rem 0.35rem;\n    font-size: 0.82rem;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .region-institutions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pq.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqPage, [{
    type: Component,
    args: [{ selector: "app-pq-page", standalone: true, imports: [CommonModule, FormsModule, TranslateModule, BreadcrumbsComponent, PqBrazilMapComponent], template: `<section class="pq-page py-4" aria-labelledby="pq-title">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>
    <header class="pq-hero">
      <div class="pq-hero-copy"><span class="eyebrow">Panorama da Ci\xEAncia da Informa\xE7\xE3o</span><h1 id="pq-title">Bolsistas de Produtividade CNPq</h1><p>Conhe\xE7a a distribui\xE7\xE3o dos pesquisadores por modalidade, institui\xE7\xE3o e regi\xE3o do Brasil.</p></div>
      <img src="assets/logos/logo_pq.png" alt="Base de dados dos bolsistas PQ" class="pq-logo" />
    </header>

    @if (loading()) {
      <div class="status-panel" role="status" aria-live="polite"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando dados dos bolsistas\u2026</div>
    } @else if (error()) {
      <div class="alert alert-warning d-flex flex-wrap align-items-center justify-content-between gap-3" role="alert"><span>{{ error() }}</span><button type="button" class="btn btn-outline-dark btn-sm" (click)="loadData()">Tentar novamente</button></div>
    } @else {
      <nav class="pq-tabs" aria-label="Visualiza\xE7\xF5es dos bolsistas" role="tablist">
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'resumo'" [class.active]="activeTab() === 'resumo'" (click)="setTab('resumo')"><i class="bi bi-grid-1x2" aria-hidden="true"></i><span>Resumo</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'bolsistas'" [class.active]="activeTab() === 'bolsistas'" (click)="setTab('bolsistas')"><i class="bi bi-people" aria-hidden="true"></i><span>Bolsistas</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'instituicoes'" [class.active]="activeTab() === 'instituicoes'" (click)="setTab('instituicoes')"><i class="bi bi-building" aria-hidden="true"></i><span>Institui\xE7\xF5es</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'regioes'" [class.active]="activeTab() === 'regioes'" (click)="setTab('regioes')"><i class="bi bi-geo-alt" aria-hidden="true"></i><span>Regi\xF5es</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'mapa'" [class.active]="activeTab() === 'mapa'" (click)="setTab('mapa')"><i class="bi bi-map" aria-hidden="true"></i><span>Mapa</span></button>
      </nav>

      <div class="tab-content" role="tabpanel">
        @if (activeTab() === 'resumo') {
          <div class="summary-grid">
            <article class="metric-card metric-primary"><span class="metric-icon"><i class="bi bi-person-check" aria-hidden="true"></i></span><div><strong>{{ response()?.actives || scholars().length }}</strong><span>Bolsistas ativos</span></div></article>
            <article class="metric-card"><span class="metric-icon"><i class="bi bi-bank" aria-hidden="true"></i></span><div><strong>{{ response()?.institutions || institutionCounts().length }}</strong><span>Institui\xE7\xF5es</span></div></article>
            <article class="metric-card"><span class="metric-icon"><i class="bi bi-map" aria-hidden="true"></i></span><div><strong>{{ regionCounts().length }}</strong><span>Regi\xF5es representadas</span></div></article>
          </div>
          <div class="content-grid">
            <article class="panel"><div class="panel-heading"><div><span class="eyebrow">Perfil das bolsas</span><h2>Modalidades</h2></div><span class="total-label">{{ scholars().length }} bolsistas</span></div><div class="level-list">
              @for (item of levelCounts(); track item.label) {<div class="level-row"><span class="level-badge">{{ item.label }}</span><div class="level-progress" role="img" [attr.aria-label]="'N\xEDvel ' + item.label + ': ' + item.count + ' bolsistas'"><span [style.width.%]="item.percentage"></span></div><strong>{{ item.count }}</strong></div>}
            </div></article>
            <article class="panel"><div class="panel-heading"><div><span class="eyebrow">Maior concentra\xE7\xE3o</span><h2>Principais institui\xE7\xF5es</h2></div><button class="text-action" type="button" (click)="setTab('instituicoes')">Ver todas <i class="bi bi-arrow-right" aria-hidden="true"></i></button></div><div class="ranking-list">
              @for (item of institutionCounts().slice(0, 6); track item.label; let index = $index) {<div class="ranking-row"><span class="rank">{{ index + 1 }}</span><strong>{{ item.label }}</strong><span>{{ item.count }} bolsistas</span></div>}
            </div></article>
          </div>
        }

        @if (activeTab() === 'bolsistas') {
          <div class="section-heading"><div><span class="eyebrow">Rela\xE7\xE3o nominal</span><h2>Bolsistas e modalidades</h2></div><span class="result-count">{{ filteredScholars().length }} resultado(s)</span></div>
          <div class="filters"><label class="search-field"><span class="visually-hidden">Buscar bolsista</span><i class="bi bi-search" aria-hidden="true"></i><input type="search" class="form-control" placeholder="Buscar por nome ou institui\xE7\xE3o" [ngModel]="searchTerm()" (ngModelChange)="updateSearch($event)" /></label><label><span class="visually-hidden">Filtrar por n\xEDvel</span><select class="form-select" [ngModel]="levelFilter()" (ngModelChange)="updateLevel($event)"><option value="todos">Todos os n\xEDveis</option>@for (item of levels(); track item) {<option [value]="item">N\xEDvel {{ item }}</option>}</select></label></div>
          <div class="table-responsive scholar-table-wrap"><table class="table align-middle scholar-table"><thead><tr><th>Bolsista</th><th>Modalidade</th><th>Institui\xE7\xE3o</th><th>Vig\xEAncia</th><th><span class="visually-hidden">Perfis</span></th></tr></thead><tbody>
            @for (item of filteredScholars(); track trackScholar($index, item)) {<tr><td><strong>{{ item.bs_nome }}</strong></td><td><span class="level-badge">{{ item.mod_sigla }} {{ level(item) }}</span></td><td>{{ item.BS_IES }}</td><td class="text-nowrap">{{ item.bs_start | date:'MM/yyyy':'UTC' }} \u2014 {{ item.bs_finish | date:'MM/yyyy':'UTC' }}</td><td class="profile-links"><a *ngIf="brapciUrl(item) as url" [href]="url" aria-label="Ver perfil na Brapci"><i class="bi bi-journal-text" aria-hidden="true"></i></a><a *ngIf="lattesUrl(item) as url" [href]="url" target="_blank" rel="noopener" aria-label="Abrir curr\xEDculo Lattes"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></td></tr>} @empty {<tr><td colspan="5" class="empty-state">Nenhum bolsista encontrado com estes filtros.</td></tr>}
          </tbody></table></div>
        }

        @if (activeTab() === 'instituicoes') {
          <div class="section-heading"><div><span class="eyebrow">V\xEDnculo institucional</span><h2>Institui\xE7\xF5es dos bolsistas</h2></div><span class="result-count">{{ institutionCounts().length }} institui\xE7\xF5es</span></div>
          <div class="bar-list">@for (item of institutionCounts(); track item.label; let index = $index) {<div class="bar-row"><span class="bar-rank">{{ index + 1 }}</span><div class="bar-main"><div class="bar-label"><strong>{{ item.label }}</strong><span>{{ regionFor(item.label) }}</span></div><div class="bar-track"><span [style.width.%]="item.count / maxInstitutionCount() * 100"></span></div></div><strong class="bar-value">{{ item.count }}</strong></div>}</div>
        }

        @if (activeTab() === 'regioes') {
          <div class="section-heading"><div><span class="eyebrow">Distribui\xE7\xE3o territorial</span><h2>Regi\xF5es dos bolsistas</h2></div><span class="result-count">Brasil</span></div>
          <div class="region-grid">@for (item of regionCounts(); track item.label) {<article class="region-card"><div class="region-top"><span class="region-pin"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></span><div><span>{{ item.label }}</span><strong>{{ item.count }}</strong><small>bolsistas</small></div></div><div class="region-share"><span [style.width.%]="item.count / maxRegionCount() * 100"></span></div><p>{{ item.percentage | number:'1.1-1' }}% do total</p></article>}</div>
          <article class="panel mt-4"><div class="panel-heading"><div><span class="eyebrow">Composi\xE7\xE3o regional</span><h2>Institui\xE7\xF5es por regi\xE3o</h2></div></div><div class="region-institutions">@for (region of regionCounts(); track region.label) {<div><strong>{{ region.label }}</strong><p>@for (institution of institutionCounts(); track institution.label) {@if (regionFor(institution.label) === region.label) {<span>{{ institution.label }}</span>}}</p></div>}</div></article>
        }

        @if (activeTab() === 'mapa') {
          <div class="section-heading"><div><span class="eyebrow">Distribui\xE7\xE3o estadual</span><h2>Mapa dos bolsistas por estado</h2></div><span class="result-count">{{ scholars().length }} bolsistas</span></div>
          <div class="map-layout">
            <div class="map-panel">
              <app-pq-brazil-map [data]="stateCounts()"></app-pq-brazil-map>
              <div class="map-legend" aria-label="Legenda de intensidade"><span>Menor concentra\xE7\xE3o</span><i class="legend-step level-1"></i><i class="legend-step level-2"></i><i class="legend-step level-3"></i><span>Maior concentra\xE7\xE3o</span></div>
            </div>
            <aside class="state-ranking" aria-labelledby="state-ranking-title">
              <div class="panel-heading"><div><span class="eyebrow">Ranking estadual</span><h2 id="state-ranking-title">Bolsistas por UF</h2></div></div>
              @for (state of stateCounts(); track state.code; let index = $index) {
                @if (state.count > 0) {<div class="state-row"><span class="state-position">{{ index + 1 }}</span><span class="state-code">{{ state.code }}</span><div><strong>{{ state.label }}</strong><small>{{ state.percentage | number:'1.1-1' }}% do total</small></div><strong class="state-value">{{ state.count }}</strong></div>}
              }
            </aside>
          </div>
        }
      </div>
    }
  </div>
</section>
`, styles: ['/* src/app/pages/pq/pq.page.scss */\n:host {\n  display: block;\n}\n.pq-page {\n  --pq-accent: #9a654d;\n  --pq-accent-dark: #704330;\n  --pq-accent-soft: #f4e8e1;\n  --pq-green: #3b796b;\n  color: var(--theme-ink);\n  min-height: 70vh;\n}\n.pq-hero {\n  display: flex;\n  min-height: 210px;\n  margin: 1rem 0 1.5rem;\n  padding: 2.25rem 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--pq-accent) 25%, var(--theme-line));\n  border-radius: 1.25rem;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      color-mix(in srgb, var(--pq-accent) 13%, transparent),\n      transparent 34%),\n    linear-gradient(\n      125deg,\n      var(--theme-card-bg),\n      color-mix(in srgb, var(--theme-sand) 70%, transparent));\n}\n.pq-hero-copy {\n  max-width: 690px;\n}\n.eyebrow {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.pq-hero h1 {\n  margin: 0 0 0.75rem;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(1.9rem, 4vw, 3.25rem);\n  line-height: 1.08;\n}\n.pq-hero p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--theme-muted);\n  font-size: 1.05rem;\n}\n.pq-logo {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.status-panel {\n  display: flex;\n  min-height: 180px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n}\n.pq-tabs {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 1.5rem;\n  padding: 0.35rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.pq-tabs button {\n  display: flex;\n  padding: 0.8rem 1rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: 0;\n  border-radius: 0.6rem;\n  color: var(--theme-muted);\n  background: transparent;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.pq-tabs button:hover {\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--pq-accent) 7%, transparent);\n}\n.pq-tabs button.active {\n  color: #fff;\n  background: var(--pq-accent-dark);\n  box-shadow: 0 4px 12px rgba(55, 32, 22, 0.18);\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.metric-card,\n.panel,\n.region-card {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.metric-card {\n  display: flex;\n  padding: 1.35rem;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 1rem;\n}\n.metric-card.metric-primary {\n  border-color: color-mix(in srgb, var(--pq-accent) 35%, var(--theme-line));\n}\n.metric-icon {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 1.2rem;\n}\n.metric-card strong {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n  line-height: 1;\n}\n.metric-card div span {\n  display: block;\n  margin-top: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.88rem;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.panel {\n  padding: 1.5rem;\n  border-radius: 1rem;\n}\n.panel-heading,\n.section-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.panel-heading {\n  margin-bottom: 1.25rem;\n}\n.panel-heading h2,\n.section-heading h2 {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.total-label,\n.result-count {\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.level-list {\n  display: grid;\n  gap: 0.9rem;\n}\n.level-row {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr 2rem;\n  align-items: center;\n  gap: 0.75rem;\n}\n.level-badge {\n  display: inline-flex;\n  min-width: 2.2rem;\n  padding: 0.28rem 0.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.level-progress,\n.bar-track,\n.region-share {\n  height: 8px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.level-progress span,\n.bar-track span,\n.region-share span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--pq-accent);\n}\n.text-action {\n  border: 0;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.ranking-list {\n  display: grid;\n}\n.ranking-row {\n  display: grid;\n  grid-template-columns: 1.8rem 1fr auto;\n  padding: 0.72rem 0;\n  align-items: center;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.ranking-row:last-child {\n  border-bottom: 0;\n}\n.ranking-row > span:last-child {\n  color: var(--theme-muted);\n  font-size: 0.83rem;\n}\n.rank,\n.bar-rank {\n  color: var(--theme-muted);\n  font-variant-numeric: tabular-nums;\n}\n.section-heading {\n  margin: 0.35rem 0 1rem;\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(260px, 1fr) minmax(180px, 240px);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.search-field {\n  position: relative;\n}\n.search-field i {\n  position: absolute;\n  top: 50%;\n  left: 0.9rem;\n  z-index: 1;\n  color: var(--theme-muted);\n  transform: translateY(-50%);\n}\n.search-field input {\n  padding-left: 2.4rem;\n}\n.scholar-table-wrap {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.scholar-table {\n  --bs-table-color: var(--theme-ink);\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: var(--theme-ink);\n  --bs-table-hover-color: var(--theme-ink);\n  margin: 0;\n  color: var(--theme-ink);\n}\n.scholar-table th {\n  padding: 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.scholar-table td {\n  padding: 0.9rem 1rem;\n  border-color: var(--theme-line);\n}\n.profile-links {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.8rem;\n  white-space: nowrap;\n}\n.profile-links a {\n  color: var(--pq-accent);\n}\n.empty-state {\n  padding: 3rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.bar-list {\n  padding: 0.4rem 1.4rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.bar-row {\n  display: grid;\n  grid-template-columns: 2rem 1fr 2.5rem;\n  padding: 1rem 0;\n  align-items: center;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.bar-row:last-child {\n  border-bottom: 0;\n}\n.bar-label {\n  display: flex;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.bar-label span {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.bar-value {\n  text-align: right;\n}\n.region-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.region-card {\n  padding: 1.35rem;\n  border-radius: 1rem;\n}\n.region-top {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.region-pin {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-green);\n  background: color-mix(in srgb, var(--pq-green) 12%, transparent);\n}\n.region-top span:not(.region-pin),\n.region-top small {\n  display: block;\n  color: var(--theme-muted);\n}\n.region-top strong {\n  margin-right: 0.35rem;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n}\n.region-share {\n  margin-top: 1rem;\n}\n.region-share span {\n  background: var(--pq-green);\n}\n.region-card p {\n  margin: 0.55rem 0 0;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n  text-align: right;\n}\n.region-institutions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.region-institutions p {\n  display: flex;\n  margin: 0.55rem 0 0;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.region-institutions p span {\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: var(--theme-muted);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.map-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.75fr);\n  gap: 1rem;\n  align-items: start;\n}\n.map-panel,\n.state-ranking {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.map-panel {\n  --pq-map-color: var(--pq-accent);\n  padding: 1rem 1.5rem;\n}\n.map-legend {\n  display: flex;\n  padding: 0.75rem 0 0.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.76rem;\n}\n.legend-step {\n  width: 28px;\n  height: 9px;\n  border-radius: 999px;\n}\n.legend-step.level-1 {\n  background: color-mix(in srgb, var(--pq-accent) 28%, var(--theme-sand));\n}\n.legend-step.level-2 {\n  background: color-mix(in srgb, var(--pq-accent) 55%, var(--theme-sand));\n}\n.legend-step.level-3 {\n  background: var(--pq-accent);\n}\n.state-ranking {\n  padding: 1.35rem;\n}\n.state-row {\n  display: grid;\n  grid-template-columns: 1.5rem 2.5rem 1fr 2rem;\n  padding: 0.68rem 0;\n  align-items: center;\n  gap: 0.55rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.state-row:last-child {\n  border-bottom: 0;\n}\n.state-position {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.state-code {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  border-radius: 0.55rem;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-weight: 700;\n}\n.state-row small {\n  display: block;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.state-value {\n  text-align: right;\n}\n:host-context(body.theme-master.theme-dark) .pq-page {\n  --pq-accent: #d29b7e;\n  --pq-accent-dark: #865943;\n  --pq-accent-soft: #35261f;\n  --pq-green: #74bbaa;\n}\n:host-context(body.theme-master.theme-dark) .pq-logo {\n  mix-blend-mode: normal;\n  opacity: 0.9;\n}\n:host-context(body.theme-master.theme-dark) .pq-tabs button.active {\n  color: #fff;\n}\n:host-context(body.theme-master.theme-dark) .scholar-table,\n:host-context(body.theme-master.theme-dark) .scholar-table td,\n:host-context(body.theme-master.theme-dark) .scholar-table td strong {\n  color: var(--theme-ink);\n}\n@media (max-width: 991.98px) {\n  .map-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767.98px) {\n  .pq-hero {\n    min-height: auto;\n    padding: 1.5rem;\n  }\n  .pq-logo {\n    width: 105px;\n    height: 105px;\n  }\n  .pq-tabs {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .summary-grid,\n  .content-grid,\n  .region-grid {\n    grid-template-columns: 1fr;\n  }\n  .region-institutions {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .pq-hero {\n    align-items: flex-start;\n  }\n  .pq-logo {\n    width: 72px;\n    height: 72px;\n  }\n  .pq-tabs button {\n    padding: 0.7rem 0.35rem;\n    font-size: 0.82rem;\n  }\n  .filters {\n    grid-template-columns: 1fr;\n  }\n  .section-heading {\n    align-items: flex-start;\n  }\n  .region-institutions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pq.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqPage, { className: "PqPage", filePath: "src/app/pages/pq/pq.page.ts", lineNumber: 118 });
})();
export {
  PqBrazilMapComponent,
  PqPage
};
//# sourceMappingURL=chunk-PFTBDRK6.mjs.map
