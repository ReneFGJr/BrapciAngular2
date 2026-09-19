import './polyfills.server.mjs';
import {
  BreadcrumbsComponent
} from "./chunk-626Q7N5T.mjs";
import "./chunk-VL7NMCPF.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-EWVK3MTF.mjs";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  JsonPipe
} from "./chunk-TG5MYEEE.mjs";
import {
  Component,
  finalize,
  inject,
  setClassMetadata,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QTSSUGT7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-halflive/tools-halflive.page.ts
var _c0 = () => ({ tools: "Ferramentas", halflive: "An\xE1lise das cita\xE7\xF5es (meia-vida)" });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.year;
function ToolsHalflivePage_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
    \u0275\u0275text(1, " Analisando... ");
  }
}
function ToolsHalflivePage_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Analisar cita\xE7\xF5es ");
  }
}
function ToolsHalflivePage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 56)(1, "div", 57)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 58);
    \u0275\u0275element(7, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("is-empty", item_r3.value.quantidade === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.value.quantidade);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", item_r3.label)("aria-valuenow", item_r3.value.percentual);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", item_r3.value.percentual, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 9, item_r3.value.percentual, "1.0-2"), "%");
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 60);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.flag, \u0275\u0275sanitizeUrl)("alt", "Bandeira: " + item_r4.label);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "?");
    \u0275\u0275elementEnd();
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 46);
    \u0275\u0275conditionalCreate(1, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Conditional_1_Template, 1, 2, "img", 60)(2, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Conditional_2_Template, 2, 0, "span", 61);
    \u0275\u0275elementStart(3, "div", 62)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "strong", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.flag ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 4, item_r4.value.percentual, "1.0-2"), "% das refer\xEAncias");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.value.quantidade);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_68_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const data_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.year);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r5.count / data_r6.referencias_com_ano * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.count);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275repeaterCreate(1, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_68_For_2_Template, 7, 4, "div", 64, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.yearEntries(data_r6));
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Nenhum ano foi identificado.");
    \u0275\u0275elementEnd();
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reference_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reference_r7.referencia);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", reference_r7.tipologia.replaceAll("_", " "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((reference_r7.idioma == null ? null : reference_r7.idioma.replaceAll("_", " ")) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reference_r7.ano ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", reference_r7.idade === null ? "\u2014" : reference_r7.idade + " anos", " ");
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 24)(2, "article", 25)(3, "span", 26);
    \u0275\u0275text(4, "Meia-vida da literatura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 29)(12, "article", 30)(13, "span");
    \u0275\u0275text(14, "Total de refer\xEAncias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "article", 31)(18, "span");
    \u0275\u0275text(19, "Com ano identificado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "article", 32)(23, "span");
    \u0275\u0275text(24, "Sem ano identificado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "article", 30)(28, "span");
    \u0275\u0275text(29, "Per\xEDodo das publica\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong", 33);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "aside", 34);
    \u0275\u0275element(33, "i", 35);
    \u0275\u0275elementStart(34, "div")(35, "strong");
    \u0275\u0275text(36, "Aviso sobre o processamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 36);
    \u0275\u0275text(38, " Esta an\xE1lise \xE9 realizada automaticamente por m\xE1quinas e podem ocorrer erros na interpreta\xE7\xE3o dos dados. Recomendamos revisar os resultados antes de utiliz\xE1-los. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "section", 37)(40, "div", 38)(41, "div")(42, "p", 39);
    \u0275\u0275text(43, "Composi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "h3", 40);
    \u0275\u0275text(45, "Tipologias das fontes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 41);
    \u0275\u0275repeaterCreate(47, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_48_Template, 11, 12, "article", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "section", 43)(50, "div", 38)(51, "div")(52, "p", 39);
    \u0275\u0275text(53, "Idiomas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3", 44);
    \u0275\u0275text(55, "Idioma das refer\xEAncias");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 45);
    \u0275\u0275repeaterCreate(57, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_58_Template, 11, 7, "article", 46, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "section", 47)(60, "div", 38)(61, "div")(62, "p", 39);
    \u0275\u0275text(63, "Cronologia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "h3", 48);
    \u0275\u0275text(65, "Distribui\xE7\xE3o por ano");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "span", 49);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(68, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_68_Template, 3, 0, "div", 50)(69, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Conditional_69_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "section", 51)(71, "div", 38)(72, "div")(73, "p", 39);
    \u0275\u0275text(74, "Detalhamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "h3", 52);
    \u0275\u0275text(76, "Refer\xEAncias analisadas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 53)(78, "table", 54)(79, "thead")(80, "tr")(81, "th", 55);
    \u0275\u0275text(82, "Refer\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 55);
    \u0275\u0275text(84, "Tipologia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 55);
    \u0275\u0275text(86, "Idioma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th", 55);
    \u0275\u0275text(88, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "th", 55);
    \u0275\u0275text(90, "Idade");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "tbody");
    \u0275\u0275repeaterCreate(92, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_For_93_Template, 12, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", data_r6.meia_vida === null ? "\u2014" : data_r6.meia_vida, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.meia_vida === 1 ? "ano" : "anos");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ano mediano: ", data_r6.ano_mediano ?? "n\xE3o identificado");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r6.total_referencias);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r6.referencias_com_ano);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r6.referencias_sem_ano);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", data_r6.ano_mais_antigo ?? "\u2014", "\u2013", data_r6.ano_mais_recente ?? "\u2014", " ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.typologyEntries(data_r6));
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r0.languageEntries(data_r6));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Ano atual: ", data_r6.ano_atual);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.yearEntries(data_r6).length ? 68 : 69);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(data_r6.referencias);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.result));
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_0_Template, 94, 10, "div", 21)(1, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_1_Template, 2, 1, "div", 22)(2, ToolsHalflivePage_Conditional_22_Conditional_6_Conditional_2_Template, 3, 3, "pre", 23);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.analysisData()) ? 0 : (tmp_2_0 = ctx_r0.resultText()) ? 1 : 2, tmp_2_0);
  }
}
function ToolsHalflivePage_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.result));
  }
}
function ToolsHalflivePage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ToolsHalflivePage_Conditional_22_Conditional_0_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function ToolsHalflivePage_Conditional_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "result");
    });
    \u0275\u0275text(3, " Resultado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function ToolsHalflivePage_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "json");
    });
    \u0275\u0275text(5, " JSON ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ToolsHalflivePage_Conditional_22_Conditional_6_Template, 3, 1)(7, ToolsHalflivePage_Conditional_22_Conditional_7_Template, 3, 3, "pre", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "result");
    \u0275\u0275attribute("aria-selected", ctx_r0.activeTab === "result");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "json");
    \u0275\u0275attribute("aria-selected", ctx_r0.activeTab === "json");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTab === "result" ? 6 : 7);
  }
}
function ToolsHalflivePage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "O resultado da an\xE1lise ser\xE1 exibido aqui.");
    \u0275\u0275elementEnd();
  }
}
var ToolsHalflivePage = class _ToolsHalflivePage {
  http = inject(HttpClient);
  citations = "";
  result = null;
  rawResponse = "";
  error = "";
  loading = false;
  activeTab = "result";
  analyze() {
    const text = this.citations.trim();
    if (!text || this.loading) {
      return;
    }
    this.loading = true;
    this.error = "";
    this.result = null;
    this.rawResponse = "";
    this.activeTab = "result";
    this.http.post("/api/cite/halflive", { text }, { responseType: "text" }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => {
        this.rawResponse = response;
        this.result = this.parseResponse(response);
      },
      error: (error) => {
        if (typeof error.error === "string" && error.error.trim()) {
          this.rawResponse = error.error;
          this.result = this.parseResponse(error.error);
        }
        this.error = typeof error.error !== "string" && error.error?.message || "N\xE3o foi poss\xEDvel analisar as cita\xE7\xF5es. Verifique o conte\xFAdo e tente novamente.";
      }
    });
  }
  resultText() {
    if (typeof this.result === "string") {
      return this.result;
    }
    if (this.result && typeof this.result === "object") {
      const data = this.result;
      const value = data["result"] ?? data["text"] ?? data["message"] ?? data["data"];
      return typeof value === "string" ? value : null;
    }
    return null;
  }
  analysisData() {
    if (!this.result || typeof this.result !== "object") {
      return null;
    }
    const response = this.result;
    const data = response["data"];
    if (!data || typeof data !== "object" || !("total_referencias" in data)) {
      return null;
    }
    return data;
  }
  typologyEntries(data) {
    const labels = {
      artigos: "Artigos",
      eventos: "Eventos",
      livros: "Livros",
      capitulos_de_livros: "Cap\xEDtulos de livros",
      sites: "Sites",
      teses: "Teses",
      dissertacoes: "Disserta\xE7\xF5es",
      outras_tipologias: "Outras tipologias"
    };
    return Object.entries(data.tipologias).map(([key, value]) => ({
      key,
      label: labels[key] ?? key.replaceAll("_", " "),
      value
    }));
  }
  yearEntries(data) {
    return Object.entries(data.distribuicao_por_ano).map(([year, count]) => ({ year, count })).sort((a, b) => Number(b.year) - Number(a.year));
  }
  languageEntries(data) {
    const metadata = {
      portugues: { label: "Portugu\xEAs", flag: "/assets/flags/pt.svg" },
      ingles: { label: "Ingl\xEAs", flag: "/assets/flags/en.svg" },
      espanhol: { label: "Espanhol", flag: "/assets/flags/es.svg" },
      frances: { label: "Franc\xEAs", flag: "/assets/flags/fr.svg" },
      nao_identificado: { label: "N\xE3o identificado", flag: null }
    };
    return Object.entries(data.idiomas ?? {}).map(([key, value]) => ({
      key,
      label: metadata[key]?.label ?? key.replaceAll("_", " "),
      flag: metadata[key]?.flag ?? null,
      value
    }));
  }
  parseResponse(response) {
    const cleanResponse = response.replace(/<!--[^]*?-->/g, "").trim();
    try {
      return JSON.parse(cleanResponse);
    } catch {
      const positions = [cleanResponse.indexOf("{"), cleanResponse.indexOf("[")].filter((index) => index >= 0);
      const jsonStart = positions.length ? Math.min(...positions) : -1;
      if (jsonStart >= 0) {
        try {
          return JSON.parse(cleanResponse.slice(jsonStart));
        } catch {
        }
      }
      return cleanResponse;
    }
  }
  static \u0275fac = function ToolsHalflivePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsHalflivePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsHalflivePage, selectors: [["app-tools-halflive-page"]], decls: 24, vars: 7, consts: [["aria-labelledby", "halflive-title", 1, "halflive-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "halflive-card", "p-4", "p-md-5"], [1, "halflive-eyebrow", "mb-2"], ["id", "halflive-title", 1, "h2", "mb-2"], [1, "halflive-subtitle", "mb-4"], [3, "ngSubmit"], [1, "mb-3"], ["for", "citations", 1, "form-label", "fw-semibold"], ["id", "citations", "name", "citations", "rows", "15", "placeholder", "Digite ou cole as cita\xE7\xF5es, preferencialmente uma por linha", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-live", "polite", "aria-labelledby", "result-title", 1, "analysis-result", "mt-4"], ["id", "result-title", 1, "h5", "mb-3"], ["role", "alert", 1, "alert", "alert-danger", "mb-0"], [1, "text-body-secondary", "mb-0"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "tablist", "aria-label", "Visualiza\xE7\xE3o do retorno", 1, "result-tabs"], ["type", "button", "role", "tab", 1, "result-tab", 3, "click"], [1, "result-content", "result-json", "mb-0"], [1, "analysis-dashboard"], [1, "result-content"], [1, "result-content", "mb-0"], [1, "summary-grid"], [1, "half-life-card"], [1, "summary-label"], [1, "half-life-value"], [1, "half-life-unit"], [1, "metric-grid"], [1, "metric-card"], [1, "metric-card", "metric-card-success"], [1, "metric-card", "metric-card-warning"], [1, "period-value"], ["role", "note", "aria-label", "Aviso sobre o processamento", 1, "machine-disclaimer"], ["aria-hidden", "true", 1, "bi", "bi-exclamation-triangle-fill"], [1, "mb-0"], ["aria-labelledby", "typologies-title", 1, "dashboard-section"], [1, "section-heading"], [1, "section-kicker"], ["id", "typologies-title", 1, "h5", "mb-0"], [1, "typology-grid"], [1, "typology-card", 3, "is-empty"], ["aria-labelledby", "languages-title", 1, "dashboard-section"], ["id", "languages-title", 1, "h5", "mb-0"], [1, "language-grid"], [1, "language-card"], ["aria-labelledby", "years-title", 1, "dashboard-section"], ["id", "years-title", 1, "h5", "mb-0"], [1, "current-year"], [1, "year-list"], ["aria-labelledby", "references-title", 1, "dashboard-section"], ["id", "references-title", 1, "h5", "mb-0"], [1, "table-responsive"], [1, "table", "references-table", "align-middle", "mb-0"], ["scope", "col"], [1, "typology-card"], [1, "typology-heading"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "typology-progress"], [1, "progress-bar"], [1, "language-flag", 3, "src", "alt"], ["aria-hidden", "true", 1, "unknown-language"], [1, "language-info"], [1, "language-count"], [1, "year-item"], [1, "year-track"], [1, "type-badge"]], template: function ToolsHalflivePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5, "Ferramentas bibliogr\xE1ficas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, "An\xE1lise das cita\xE7\xF5es (meia-vida)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Insira as refer\xEAncias citadas para calcular e analisar a meia-vida da literatura. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function ToolsHalflivePage_Template_form_ngSubmit_10_listener() {
        return ctx.analyze();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, "Cita\xE7\xF5es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "textarea", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ToolsHalflivePage_Template_textarea_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.citations, $event) || (ctx.citations = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275conditionalCreate(16, ToolsHalflivePage_Conditional_16_Template, 2, 0)(17, ToolsHalflivePage_Conditional_17_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "section", 12)(19, "h2", 13);
      \u0275\u0275text(20, "Resultado");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ToolsHalflivePage_Conditional_21_Template, 2, 1, "div", 14)(22, ToolsHalflivePage_Conditional_22_Template, 8, 8)(23, ToolsHalflivePage_Conditional_23_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.citations);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.citations.trim() || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 16 : 17);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.error && ctx.result === null ? 21 : ctx.result !== null || ctx.rawResponse ? 22 : 23);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BreadcrumbsComponent, JsonPipe, DecimalPipe], styles: ["\n\n.halflive-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.halflive-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.halflive-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  text-transform: uppercase;\n}\n.halflive-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.analysis-result[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.5rem;\n}\n.result-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}\n.result-tab[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-hint);\n  font-weight: 600;\n  margin-bottom: -1px;\n  padding: 0.65rem 1rem;\n}\n.result-tab[_ngcontent-%COMP%]:hover, \n.result-tab[_ngcontent-%COMP%]:focus-visible, \n.result-tab.active[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n}\n.result-tab.active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--theme-link);\n}\n.result-content[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow-x: auto;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.result-json[_ngcontent-%COMP%] {\n  font-family: var(--bs-font-monospace);\n  font-size: 0.875rem;\n  white-space: pre;\n}\n.analysis-dashboard[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.machine-disclaimer[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background: color-mix(in srgb, #ffc107 14%, var(--theme-card-bg));\n  border: 1px solid color-mix(in srgb, #d98b00 55%, var(--theme-line));\n  border-left: 4px solid #d98b00;\n  border-radius: 0.7rem;\n  display: flex;\n  gap: 0.85rem;\n  padding: 1rem 1.1rem;\n}\n.machine-disclaimer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b26a00;\n  flex: 0 0 auto;\n  font-size: 1.35rem;\n  line-height: 1.2;\n}\n.machine-disclaimer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.2rem;\n}\n.machine-disclaimer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.9rem;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(15rem, 0.8fr) minmax(0, 1.7fr);\n}\n.half-life-card[_ngcontent-%COMP%] {\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--theme-link),\n      #5846c7);\n  border-radius: 0.8rem;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 13rem;\n  padding: 1.5rem;\n  text-align: center;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.half-life-value[_ngcontent-%COMP%] {\n  font-size: clamp(3.5rem, 8vw, 5.5rem);\n  line-height: 1;\n  margin-top: 0.55rem;\n}\n.half-life-unit[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.half-life-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n.metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.metric-card[_ngcontent-%COMP%], \n.dashboard-section[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n}\n.metric-card[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--theme-link);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 1.15rem;\n}\n.metric-card-success[_ngcontent-%COMP%] {\n  border-left-color: #198754;\n}\n.metric-card-warning[_ngcontent-%COMP%] {\n  border-left-color: #d98b00;\n}\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.15;\n  margin-top: 0.35rem;\n}\n.metric-card[_ngcontent-%COMP%]   .period-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dashboard-section[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.section-kicker[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin: 0 0 0.2rem;\n  text-transform: uppercase;\n}\n.typology-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.language-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.language-card[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  display: flex;\n  gap: 0.7rem;\n  min-width: 0;\n  padding: 0.8rem;\n}\n.language-flag[_ngcontent-%COMP%], \n.unknown-language[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.25rem;\n  flex: 0 0 auto;\n  height: 2rem;\n  object-fit: cover;\n  width: 2.8rem;\n}\n.unknown-language[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n}\n.language-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n}\n.language-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.language-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.7rem;\n}\n.language-count[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  font-size: 1.35rem;\n}\n.typology-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  padding: 0.85rem;\n}\n.typology-heading[_ngcontent-%COMP%] {\n  align-items: start;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n}\n.typology-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.typology-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  font-size: 1.3rem;\n}\n.typology-progress[_ngcontent-%COMP%] {\n  height: 0.35rem;\n  margin-top: 0.55rem;\n}\n.typology-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], \n.year-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--theme-link);\n}\n.typology-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.current-year[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.current-year[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.year-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.year-item[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: 3.5rem minmax(4rem, 1fr) 2rem;\n}\n.year-track[_ngcontent-%COMP%] {\n  background: var(--theme-line);\n  border-radius: 999px;\n  height: 0.55rem;\n  overflow: hidden;\n}\n.year-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.references-table[_ngcontent-%COMP%] {\n  --bs-table-bg: transparent;\n  color: var(--theme-ink);\n}\n.references-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n}\n.type-badge[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-link) 12%, transparent);\n  border-radius: 999px;\n  color: var(--theme-link);\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  text-transform: capitalize;\n}\n@media (max-width: 991.98px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .typology-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .language-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 575.98px) {\n  .metric-grid[_ngcontent-%COMP%], \n   .typology-grid[_ngcontent-%COMP%], \n   .language-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.35rem;\n  }\n}\n/*# sourceMappingURL=tools-halflive.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsHalflivePage, [{
    type: Component,
    args: [{ selector: "app-tools-halflive-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="halflive-wrap py-4" aria-labelledby="halflive-title">
  <div class="container">
    <app-breadcrumbs
      [labels]="{ tools: 'Ferramentas', halflive: 'An\xE1lise das cita\xE7\xF5es (meia-vida)' }"
    ></app-breadcrumbs>

    <div class="halflive-card p-4 p-md-5">
      <p class="halflive-eyebrow mb-2">Ferramentas bibliogr\xE1ficas</p>
      <h1 id="halflive-title" class="h2 mb-2">An\xE1lise das cita\xE7\xF5es (meia-vida)</h1>
      <p class="halflive-subtitle mb-4">
        Insira as refer\xEAncias citadas para calcular e analisar a meia-vida da literatura.
      </p>

      <form (ngSubmit)="analyze()">
        <div class="mb-3">
          <label for="citations" class="form-label fw-semibold">Cita\xE7\xF5es</label>
          <textarea
            id="citations"
            name="citations"
            class="form-control"
            rows="15"
            [(ngModel)]="citations"
            [disabled]="loading"
            placeholder="Digite ou cole as cita\xE7\xF5es, preferencialmente uma por linha"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="!citations.trim() || loading">
          @if (loading) {
            <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
            Analisando...
          } @else {
            Analisar cita\xE7\xF5es
          }
        </button>
      </form>

      <section class="analysis-result mt-4" aria-live="polite" aria-labelledby="result-title">
        <h2 id="result-title" class="h5 mb-3">Resultado</h2>

        @if (error && result === null) {
          <div class="alert alert-danger mb-0" role="alert">{{ error }}</div>
        } @else if (result !== null || rawResponse) {
          @if (error) {
            <div class="alert alert-warning" role="alert">{{ error }}</div>
          }

          <div class="result-tabs" role="tablist" aria-label="Visualiza\xE7\xE3o do retorno">
            <button
              type="button"
              class="result-tab"
              role="tab"
              [class.active]="activeTab === 'result'"
              [attr.aria-selected]="activeTab === 'result'"
              (click)="activeTab = 'result'"
            >
              Resultado
            </button>
            <button
              type="button"
              class="result-tab"
              role="tab"
              [class.active]="activeTab === 'json'"
              [attr.aria-selected]="activeTab === 'json'"
              (click)="activeTab = 'json'"
            >
              JSON
            </button>
          </div>

          @if (activeTab === 'result') {
            @if (analysisData(); as data) {
              <div class="analysis-dashboard">
                <div class="summary-grid">
                  <article class="half-life-card">
                    <span class="summary-label">Meia-vida da literatura</span>
                    <strong class="half-life-value">
                      {{ data.meia_vida === null ? '\u2014' : data.meia_vida }}
                    </strong>
                    <span class="half-life-unit">{{ data.meia_vida === 1 ? 'ano' : 'anos' }}</span>
                    <small>Ano mediano: {{ data.ano_mediano ?? 'n\xE3o identificado' }}</small>
                  </article>

                  <div class="metric-grid">
                    <article class="metric-card">
                      <span>Total de refer\xEAncias</span>
                      <strong>{{ data.total_referencias }}</strong>
                    </article>
                    <article class="metric-card metric-card-success">
                      <span>Com ano identificado</span>
                      <strong>{{ data.referencias_com_ano }}</strong>
                    </article>
                    <article class="metric-card metric-card-warning">
                      <span>Sem ano identificado</span>
                      <strong>{{ data.referencias_sem_ano }}</strong>
                    </article>
                    <article class="metric-card">
                      <span>Per\xEDodo das publica\xE7\xF5es</span>
                      <strong class="period-value">
                        {{ data.ano_mais_antigo ?? '\u2014' }}\u2013{{ data.ano_mais_recente ?? '\u2014' }}
                      </strong>
                    </article>
                  </div>
                </div>

                <aside class="machine-disclaimer" role="note" aria-label="Aviso sobre o processamento">
                  <i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                  <div>
                    <strong>Aviso sobre o processamento</strong>
                    <p class="mb-0">
                      Esta an\xE1lise \xE9 realizada automaticamente por m\xE1quinas e podem ocorrer erros
                      na interpreta\xE7\xE3o dos dados. Recomendamos revisar os resultados antes de
                      utiliz\xE1-los.
                    </p>
                  </div>
                </aside>

                <section class="dashboard-section" aria-labelledby="typologies-title">
                  <div class="section-heading">
                    <div>
                      <p class="section-kicker">Composi\xE7\xE3o</p>
                      <h3 id="typologies-title" class="h5 mb-0">Tipologias das fontes</h3>
                    </div>
                  </div>
                  <div class="typology-grid">
                    @for (item of typologyEntries(data); track item.key) {
                      <article class="typology-card" [class.is-empty]="item.value.quantidade === 0">
                        <div class="typology-heading">
                          <span>{{ item.label }}</span>
                          <strong>{{ item.value.quantidade }}</strong>
                        </div>
                        <div
                          class="progress typology-progress"
                          role="progressbar"
                          [attr.aria-label]="item.label"
                          [attr.aria-valuenow]="item.value.percentual"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar"
                            [style.width.%]="item.value.percentual"
                          ></div>
                        </div>
                        <small>{{ item.value.percentual | number: '1.0-2' }}%</small>
                      </article>
                    }
                  </div>
                </section>

                <section class="dashboard-section" aria-labelledby="languages-title">
                  <div class="section-heading">
                    <div>
                      <p class="section-kicker">Idiomas</p>
                      <h3 id="languages-title" class="h5 mb-0">Idioma das refer\xEAncias</h3>
                    </div>
                  </div>
                  <div class="language-grid">
                    @for (item of languageEntries(data); track item.key) {
                      <article class="language-card">
                        @if (item.flag) {
                          <img class="language-flag" [src]="item.flag" [alt]="'Bandeira: ' + item.label" />
                        } @else {
                          <span class="unknown-language" aria-hidden="true">?</span>
                        }
                        <div class="language-info">
                          <strong>{{ item.label }}</strong>
                          <span>{{ item.value.percentual | number: '1.0-2' }}% das refer\xEAncias</span>
                        </div>
                        <strong class="language-count">{{ item.value.quantidade }}</strong>
                      </article>
                    }
                  </div>
                </section>

                <section class="dashboard-section" aria-labelledby="years-title">
                  <div class="section-heading">
                    <div>
                      <p class="section-kicker">Cronologia</p>
                      <h3 id="years-title" class="h5 mb-0">Distribui\xE7\xE3o por ano</h3>
                    </div>
                    <span class="current-year">Ano atual: {{ data.ano_atual }}</span>
                  </div>
                  @if (yearEntries(data).length) {
                    <div class="year-list">
                      @for (item of yearEntries(data); track item.year) {
                        <div class="year-item">
                          <strong>{{ item.year }}</strong>
                          <div class="year-track">
                            <span
                              [style.width.%]="(item.count / data.referencias_com_ano) * 100"
                            ></span>
                          </div>
                          <span>{{ item.count }}</span>
                        </div>
                      }
                    </div>
                  } @else {
                    <p class="text-body-secondary mb-0">Nenhum ano foi identificado.</p>
                  }
                </section>

                <section class="dashboard-section" aria-labelledby="references-title">
                  <div class="section-heading">
                    <div>
                      <p class="section-kicker">Detalhamento</p>
                      <h3 id="references-title" class="h5 mb-0">Refer\xEAncias analisadas</h3>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table references-table align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Refer\xEAncia</th>
                          <th scope="col">Tipologia</th>
                          <th scope="col">Idioma</th>
                          <th scope="col">Ano</th>
                          <th scope="col">Idade</th>
                        </tr>
                      </thead>
                      <tbody>
                        @for (reference of data.referencias; track $index) {
                          <tr>
                            <td>{{ reference.referencia }}</td>
                            <td>
                              <span class="type-badge">
                                {{ reference.tipologia.replaceAll('_', ' ') }}
                              </span>
                            </td>
                            <td>{{ reference.idioma?.replaceAll('_', ' ') || '\u2014' }}</td>
                            <td>{{ reference.ano ?? '\u2014' }}</td>
                            <td>
                              {{ reference.idade === null ? '\u2014' : reference.idade + ' anos' }}
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            } @else if (resultText(); as text) {
              <div class="result-content">{{ text }}</div>
            } @else {
              <pre class="result-content mb-0">{{ result | json }}</pre>
            }
          } @else {
            <pre class="result-content result-json mb-0">{{ result | json }}</pre>
          }
        } @else {
          <p class="text-body-secondary mb-0">O resultado da an\xE1lise ser\xE1 exibido aqui.</p>
        }
      </section>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/tools-halflive/tools-halflive.page.scss */\n.halflive-wrap {\n  color: var(--theme-ink);\n}\n.halflive-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.halflive-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  text-transform: uppercase;\n}\n.halflive-subtitle {\n  color: var(--theme-hint);\n}\n.analysis-result {\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.5rem;\n}\n.result-tabs {\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}\n.result-tab {\n  background: transparent;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-hint);\n  font-weight: 600;\n  margin-bottom: -1px;\n  padding: 0.65rem 1rem;\n}\n.result-tab:hover,\n.result-tab:focus-visible,\n.result-tab.active {\n  color: var(--theme-link);\n}\n.result-tab.active {\n  border-bottom-color: var(--theme-link);\n}\n.result-content {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow-x: auto;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.result-json {\n  font-family: var(--bs-font-monospace);\n  font-size: 0.875rem;\n  white-space: pre;\n}\n.analysis-dashboard {\n  display: grid;\n  gap: 1.25rem;\n}\n.machine-disclaimer {\n  align-items: flex-start;\n  background: color-mix(in srgb, #ffc107 14%, var(--theme-card-bg));\n  border: 1px solid color-mix(in srgb, #d98b00 55%, var(--theme-line));\n  border-left: 4px solid #d98b00;\n  border-radius: 0.7rem;\n  display: flex;\n  gap: 0.85rem;\n  padding: 1rem 1.1rem;\n}\n.machine-disclaimer i {\n  color: #b26a00;\n  flex: 0 0 auto;\n  font-size: 1.35rem;\n  line-height: 1.2;\n}\n.machine-disclaimer strong {\n  display: block;\n  margin-bottom: 0.2rem;\n}\n.machine-disclaimer p {\n  color: var(--theme-hint);\n  font-size: 0.9rem;\n}\n.summary-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(15rem, 0.8fr) minmax(0, 1.7fr);\n}\n.half-life-card {\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--theme-link),\n      #5846c7);\n  border-radius: 0.8rem;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 13rem;\n  padding: 1.5rem;\n  text-align: center;\n}\n.summary-label {\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.half-life-value {\n  font-size: clamp(3.5rem, 8vw, 5.5rem);\n  line-height: 1;\n  margin-top: 0.55rem;\n}\n.half-life-unit {\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.half-life-card small {\n  color: rgba(255, 255, 255, 0.78);\n}\n.metric-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.metric-card,\n.dashboard-section {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n}\n.metric-card {\n  border-left: 4px solid var(--theme-link);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 1.15rem;\n}\n.metric-card-success {\n  border-left-color: #198754;\n}\n.metric-card-warning {\n  border-left-color: #d98b00;\n}\n.metric-card span {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n}\n.metric-card strong {\n  font-size: 2rem;\n  line-height: 1.15;\n  margin-top: 0.35rem;\n}\n.metric-card .period-value {\n  font-size: 1.5rem;\n}\n.dashboard-section {\n  padding: 1.25rem;\n}\n.section-heading {\n  align-items: end;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.section-kicker {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin: 0 0 0.2rem;\n  text-transform: uppercase;\n}\n.typology-grid {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.language-grid {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.language-card {\n  align-items: center;\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  display: flex;\n  gap: 0.7rem;\n  min-width: 0;\n  padding: 0.8rem;\n}\n.language-flag,\n.unknown-language {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.25rem;\n  flex: 0 0 auto;\n  height: 2rem;\n  object-fit: cover;\n  width: 2.8rem;\n}\n.unknown-language {\n  align-items: center;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n}\n.language-info {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n}\n.language-info strong {\n  font-size: 0.88rem;\n}\n.language-info span {\n  color: var(--theme-hint);\n  font-size: 0.7rem;\n}\n.language-count {\n  color: var(--theme-link);\n  font-size: 1.35rem;\n}\n.typology-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  padding: 0.85rem;\n}\n.typology-heading {\n  align-items: start;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n}\n.typology-heading span {\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.typology-heading strong {\n  color: var(--theme-link);\n  font-size: 1.3rem;\n}\n.typology-progress {\n  height: 0.35rem;\n  margin-top: 0.55rem;\n}\n.typology-progress .progress-bar,\n.year-track span {\n  background: var(--theme-link);\n}\n.typology-card small,\n.current-year {\n  color: var(--theme-hint);\n}\n.current-year {\n  font-size: 0.82rem;\n}\n.year-list {\n  display: grid;\n  gap: 0.65rem;\n}\n.year-item {\n  align-items: center;\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: 3.5rem minmax(4rem, 1fr) 2rem;\n}\n.year-track {\n  background: var(--theme-line);\n  border-radius: 999px;\n  height: 0.55rem;\n  overflow: hidden;\n}\n.year-track span {\n  display: block;\n  height: 100%;\n}\n.references-table {\n  --bs-table-bg: transparent;\n  color: var(--theme-ink);\n}\n.references-table th {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n}\n.type-badge {\n  background: color-mix(in srgb, var(--theme-link) 12%, transparent);\n  border-radius: 999px;\n  color: var(--theme-link);\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  text-transform: capitalize;\n}\n@media (max-width: 991.98px) {\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .typology-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .language-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 575.98px) {\n  .metric-grid,\n  .typology-grid,\n  .language-grid {\n    grid-template-columns: 1fr;\n  }\n  .section-heading {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.35rem;\n  }\n}\n/*# sourceMappingURL=tools-halflive.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsHalflivePage, { className: "ToolsHalflivePage", filePath: "src/app/pages/tools-halflive/tools-halflive.page.ts", lineNumber: 41 });
})();
export {
  ToolsHalflivePage
};
//# sourceMappingURL=chunk-4Z7FYQYA.mjs.map
