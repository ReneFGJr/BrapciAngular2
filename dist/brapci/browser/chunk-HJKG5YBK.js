import {
  BreadcrumbsComponent
} from "./chunk-RFP7KIPN.js";
import {
  takeUntilDestroyed
} from "./chunk-Y3JQWDW7.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  HttpClient,
  JsonPipe,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Y3FCEOIS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UKK5MWW6.js";

// src/app/pages/doc/doc.page.ts
var _forTrack0 = ($index, $item) => $item.arquivo;
var _forTrack1 = ($index, $item) => $item.endpoint_api.metodo + $item.endpoint_api.url;
var _forTrack2 = ($index, $item) => $item.nome;
function DocPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Carregando documenta\xE7\xE3o\u2026");
    \u0275\u0275elementEnd();
  }
}
function DocPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function DocPage_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadDocumentation());
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
function DocPage_Conditional_12_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275property("value", group_r4.nome);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r4.nome);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2014 ", endpoint_r5.apikey == null ? null : endpoint_r5.apikey.descricao, " ");
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Autentica\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(endpoint_r5.autenticacao);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "M\xE9todo no servi\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(endpoint_r5.metodo_servico);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_34_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38)(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "code");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const variable_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r6.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r6.local || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r6.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(variable_r6.obrigatoria ? "Sim" : "N\xE3o");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(variable_r6.descricao);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r6.exemplo || "\u2014");
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 35)(2, "caption", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead")(5, "tr")(6, "th", 37);
    \u0275\u0275text(7, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 37);
    \u0275\u0275text(9, "Local");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 37);
    \u0275\u0275text(11, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13, "Obrigat\xF3ria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 37);
    \u0275\u0275text(15, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 37);
    \u0275\u0275text(17, "Exemplo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, DocPage_Conditional_12_For_21_For_7_Conditional_34_For_20_Template, 17, 6, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Par\xE2metros de ", endpoint_r5.endpoint_api.endpoint_relativo);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(endpoint_r5.variaveis_api);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Este endpoint n\xE3o recebe vari\xE1veis.");
    \u0275\u0275elementEnd();
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 30);
    \u0275\u0275text(1, "Exemplo de requisi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "pre", 33)(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(endpoint_r5.exemplo_requisicao);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_47_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38)(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variable_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r7.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(variable_r7.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(variable_r7.descricao);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 35)(2, "caption", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead")(5, "tr")(6, "th", 37);
    \u0275\u0275text(7, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 37);
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 37);
    \u0275\u0275text(11, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, DocPage_Conditional_12_For_21_For_7_Conditional_47_For_14_Template, 9, 3, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const endpoint_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Campos retornados por ", endpoint_r5.endpoint_api.endpoint_relativo);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(endpoint_r5.variaveis_retorno_api);
  }
}
function DocPage_Conditional_12_For_21_For_7_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, "Este endpoint n\xE3o retorna conte\xFAdo documentado.");
    \u0275\u0275elementEnd();
  }
}
function DocPage_Conditional_12_For_21_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 26)(1, "h3", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 29)(6, "div")(7, "dt");
    \u0275\u0275text(8, "Endpoint da API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd")(10, "code");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Endpoint relativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd")(16, "code");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "dt");
    \u0275\u0275text(20, "Content-Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd")(22, "code");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div")(25, "dt");
    \u0275\u0275text(26, "Precisa de APIKEY?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275conditionalCreate(29, DocPage_Conditional_12_For_21_For_7_Conditional_29_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, DocPage_Conditional_12_For_21_For_7_Conditional_30_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(31, DocPage_Conditional_12_For_21_For_7_Conditional_31_Template, 6, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h4", 30);
    \u0275\u0275text(33, "Vari\xE1veis da API");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, DocPage_Conditional_12_For_21_For_7_Conditional_34_Template, 21, 1, "div", 31)(35, DocPage_Conditional_12_For_21_For_7_Conditional_35_Template, 2, 0, "p", 32);
    \u0275\u0275conditionalCreate(36, DocPage_Conditional_12_For_21_For_7_Conditional_36_Template, 5, 1);
    \u0275\u0275elementStart(37, "h4", 30);
    \u0275\u0275text(38, "Resultado da API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "pre", 33)(42, "code");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "h4", 30);
    \u0275\u0275text(46, "Vari\xE1veis de retorno");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, DocPage_Conditional_12_For_21_For_7_Conditional_47_Template, 15, 1, "div", 31)(48, DocPage_Conditional_12_For_21_For_7_Conditional_48_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const endpoint_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(endpoint_r5.endpoint_api.metodo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", endpoint_r5.nome || endpoint_r5.endpoint_api.endpoint_relativo, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(endpoint_r5.endpoint_api.url);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(endpoint_r5.endpoint_api.endpoint_relativo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(endpoint_r5.endpoint_api.content_type_resposta);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(endpoint_r5.precisa_apikey ? "Sim" : "N\xE3o");
    \u0275\u0275advance();
    \u0275\u0275conditional((endpoint_r5.apikey == null ? null : endpoint_r5.apikey.descricao) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(endpoint_r5.autenticacao ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(endpoint_r5.metodo_servico ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(endpoint_r5.variaveis_api.length ? 34 : 35);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(endpoint_r5.exemplo_requisicao ? 36 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(endpoint_r5.resultado_api.descricao);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 14, endpoint_r5.resultado_api.exemplo));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(endpoint_r5.variaveis_retorno_api.length ? 47 : 48);
  }
}
function DocPage_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "header", 23)(2, "h2", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, DocPage_Conditional_12_For_21_For_7_Template, 49, 16, "article", 26, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    \u0275\u0275attribute("aria-labelledby", "group-" + $index_r9);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "group-" + $index_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r8.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r8.descricao);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r8.endpoints);
  }
}
function DocPage_Conditional_12_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Nenhuma documenta\xE7\xE3o corresponde aos filtros informados.");
    \u0275\u0275elementEnd();
  }
}
function DocPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "h2", 11);
    \u0275\u0275text(2, "Filtros da documenta\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "label", 12);
    \u0275\u0275text(5, "Grupo da API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 13);
    \u0275\u0275listener("change", function DocPage_Conditional_12_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSelectedGroup($event.target.value));
    });
    \u0275\u0275elementStart(7, "option", 14);
    \u0275\u0275text(8, "Todos os grupos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, DocPage_Conditional_12_For_10_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 16);
    \u0275\u0275text(13, "Buscar na documenta\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 17);
    \u0275\u0275listener("input", function DocPage_Conditional_12_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSearchQuery($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "button", 19);
    \u0275\u0275listener("click", function DocPage_Conditional_12_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(17, "Limpar filtros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, DocPage_Conditional_12_For_21_Template, 8, 4, "section", 21, _forTrack0, false, DocPage_Conditional_12_ForEmpty_22_Template, 2, 0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.selectedGroup());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.groups());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.searchQuery());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.visibleEndpointCount(), " ", ctx_r1.visibleEndpointCount() === 1 ? "endpoint encontrado" : "endpoints encontrados", ". ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleGroups());
  }
}
var DocPage = class _DocPage {
  http = inject(HttpClient);
  destroyRef = inject(DestroyRef);
  groups = signal([], ...ngDevMode ? [{ debugName: "groups" }] : []);
  selectedGroup = signal("", ...ngDevMode ? [{ debugName: "selectedGroup" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  visibleGroups = computed(() => {
    const selected = this.selectedGroup();
    const query = this.normalize(this.searchQuery());
    return this.groups().filter((group) => !selected || group.nome === selected).map((group) => __spreadProps(__spreadValues({}, group), {
      endpoints: group.endpoints.filter((endpoint) => this.matchesSearch(group, endpoint, query))
    })).filter((group) => group.endpoints.length > 0);
  }, ...ngDevMode ? [{ debugName: "visibleGroups" }] : []);
  visibleEndpointCount = computed(() => this.visibleGroups().reduce((total, group) => total + group.endpoints.length, 0), ...ngDevMode ? [{ debugName: "visibleEndpointCount" }] : []);
  constructor() {
    this.loadDocumentation();
  }
  loadDocumentation() {
    this.loading.set(true);
    this.error.set("");
    this.http.get("/docs/index.json").pipe(map((index) => index.files.filter((file) => file.endsWith(".json"))), switchMap((files) => {
      const requests = files.map((file) => this.http.get(`/docs/${encodeURIComponent(file)}`).pipe(map((documentation) => this.toGroup(documentation, file)), catchError(() => of(null))));
      return requests.length ? forkJoin(requests) : of([]);
    }), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (groups) => this.finishLoading(groups),
      error: () => this.failLoading()
    });
  }
  setSelectedGroup(value) {
    this.selectedGroup.set(value);
  }
  setSearchQuery(value) {
    this.searchQuery.set(value);
  }
  clearFilters() {
    this.selectedGroup.set("");
    this.searchQuery.set("");
  }
  finishLoading(groups) {
    const validGroups = groups.filter((group) => group !== null);
    this.groups.set(validGroups);
    this.loading.set(false);
    if (!validGroups.length)
      this.failLoading();
  }
  failLoading() {
    this.groups.set([]);
    this.error.set("N\xE3o foi poss\xEDvel carregar a documenta\xE7\xE3o da API.");
    this.loading.set(false);
  }
  toGroup(documentation, file) {
    const endpoints = documentation.endpoints?.length ? documentation.endpoints : documentation.endpoint_api && documentation.resultado_api ? [{
      endpoint_api: documentation.endpoint_api,
      precisa_apikey: documentation.precisa_apikey ?? false,
      apikey: documentation.apikey,
      variaveis_api: documentation.variaveis_api ?? [],
      exemplo_requisicao: documentation.exemplo_requisicao,
      resultado_api: documentation.resultado_api,
      variaveis_retorno_api: documentation.variaveis_retorno_api ?? []
    }] : [];
    return {
      nome: documentation.nome_grupo_api,
      descricao: documentation.descricao,
      arquivo: file,
      endpoints
    };
  }
  matchesSearch(group, endpoint, query) {
    if (!query)
      return true;
    const searchable = [
      group.nome,
      group.descricao,
      endpoint.nome,
      endpoint.metodo_servico,
      endpoint.endpoint_api.metodo,
      endpoint.endpoint_api.url,
      endpoint.endpoint_api.endpoint_relativo,
      endpoint.resultado_api.descricao,
      ...endpoint.variaveis_api.flatMap((variable) => [variable.nome, variable.descricao]),
      ...endpoint.variaveis_retorno_api.flatMap((variable) => [variable.nome, variable.descricao])
    ].join(" ");
    return this.normalize(searchable).includes(query);
  }
  normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  static \u0275fac = function DocPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocPage, selectors: [["app-doc-page"]], decls: 13, vars: 1, consts: [["aria-labelledby", "doc-title", 1, "doc-wrap", "py-4"], [1, "container"], [1, "doc-card", "p-4", "p-md-5"], [1, "doc-eyebrow", "mb-2"], ["id", "doc-title", 1, "h2", "mb-2"], [1, "doc-subtitle", "mb-4"], ["role", "status", 1, "doc-status", "mb-0"], ["role", "alert", 1, "alert", "alert-danger", "mb-0"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["aria-labelledby", "filters-title", 1, "doc-filters", "mb-4"], ["id", "filters-title", 1, "visually-hidden"], ["for", "api-group", 1, "form-label"], ["id", "api-group", 1, "form-select", 3, "change", "value"], ["value", ""], [3, "value"], ["for", "api-search", 1, "form-label"], ["id", "api-search", "type", "search", "placeholder", "Endpoint, vari\xE1vel ou descri\xE7\xE3o", 1, "form-control", 3, "input", "value"], [1, "filter-action"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["role", "status", "aria-live", "polite", 1, "doc-status", "mb-4"], [1, "api-group", "mb-5"], ["role", "status", 1, "alert", "alert-info", "mb-0"], [1, "group-header", "mb-3"], [1, "h3", "mb-2", 3, "id"], [1, "doc-subtitle", "mb-0"], [1, "endpoint-card", "mb-4"], [1, "h5", "mb-3"], [1, "method-badge"], [1, "endpoint-grid", "mb-4"], [1, "h6", "mt-4"], [1, "table-responsive"], [1, "doc-status"], [1, "code-block"], [1, "doc-status", "mb-0"], [1, "table", "doc-table", "align-middle", "mb-0"], [1, "visually-hidden"], ["scope", "col"], ["scope", "row"]], template: function DocPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "section", 2)(4, "p", 3);
      \u0275\u0275text(5, "Documenta\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 4);
      \u0275\u0275text(7, "Documenta\xE7\xE3o da API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Consulte os grupos e endpoints utilizados pela Brapci.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, DocPage_Conditional_10_Template, 2, 0, "p", 6)(11, DocPage_Conditional_11_Template, 5, 1, "div", 7)(12, DocPage_Conditional_12_Template, 23, 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.error() ? 11 : 12);
    }
  }, dependencies: [CommonModule, BreadcrumbsComponent, JsonPipe], styles: ["\n\n.doc-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.doc-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.doc-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.doc-subtitle[_ngcontent-%COMP%], \n.doc-note[_ngcontent-%COMP%], \n.doc-status[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.doc-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 0.7fr) minmax(16rem, 1fr) auto;\n  gap: 1rem;\n  align-items: end;\n}\n.filter-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 2.5vw, 1.5rem);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.endpoint-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 86%, var(--theme-line));\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.endpoint-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin-bottom: 0.35rem;\n  color: var(--theme-hint);\n  font-size: 0.82rem;\n  text-transform: uppercase;\n}\n.endpoint-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.method-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.55rem;\n  color: #fff;\n  background: #157347;\n  border-radius: 0.35rem;\n  font-weight: 700;\n}\n.doc-table[_ngcontent-%COMP%] {\n  --bs-table-bg: transparent;\n  --bs-table-color: var(--theme-ink);\n  --bs-table-border-color: var(--theme-line);\n}\n.doc-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--theme-card-bg) 82%, var(--theme-line));\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n@media (max-width: 767.98px) {\n  .doc-filters[_ngcontent-%COMP%], \n   .endpoint-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filter-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=doc.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocPage, [{
    type: Component,
    args: [{ selector: "app-doc-page", imports: [CommonModule, BreadcrumbsComponent], template: `<main class="doc-wrap py-4" aria-labelledby="doc-title">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>

    <section class="doc-card p-4 p-md-5">
      <p class="doc-eyebrow mb-2">Documenta\xE7\xE3o</p>
      <h1 id="doc-title" class="h2 mb-2">Documenta\xE7\xE3o da API</h1>
      <p class="doc-subtitle mb-4">Consulte os grupos e endpoints utilizados pela Brapci.</p>

      @if (loading()) {
        <p class="doc-status mb-0" role="status">Carregando documenta\xE7\xE3o\u2026</p>
      } @else if (error()) {
        <div class="alert alert-danger mb-0" role="alert">
          <p class="mb-3">{{ error() }}</p>
          <button type="button" class="btn btn-outline-danger" (click)="loadDocumentation()">Tentar novamente</button>
        </div>
      } @else {
        <section class="doc-filters mb-4" aria-labelledby="filters-title">
          <h2 id="filters-title" class="visually-hidden">Filtros da documenta\xE7\xE3o</h2>
          <div>
            <label for="api-group" class="form-label">Grupo da API</label>
            <select
              id="api-group"
              class="form-select"
              [value]="selectedGroup()"
              (change)="setSelectedGroup($any($event.target).value)"
            >
              <option value="">Todos os grupos</option>
              @for (group of groups(); track group.arquivo) {
                <option [value]="group.nome">{{ group.nome }}</option>
              }
            </select>
          </div>
          <div>
            <label for="api-search" class="form-label">Buscar na documenta\xE7\xE3o</label>
            <input
              id="api-search"
              type="search"
              class="form-control"
              placeholder="Endpoint, vari\xE1vel ou descri\xE7\xE3o"
              [value]="searchQuery()"
              (input)="setSearchQuery($any($event.target).value)"
            />
          </div>
          <div class="filter-action">
            <button type="button" class="btn btn-outline-secondary" (click)="clearFilters()">Limpar filtros</button>
          </div>
        </section>

        <p class="doc-status mb-4" role="status" aria-live="polite">
          {{ visibleEndpointCount() }} {{ visibleEndpointCount() === 1 ? 'endpoint encontrado' : 'endpoints encontrados' }}.
        </p>

        @for (group of visibleGroups(); track group.arquivo) {
          <section class="api-group mb-5" [attr.aria-labelledby]="'group-' + $index">
            <header class="group-header mb-3">
              <h2 [id]="'group-' + $index" class="h3 mb-2">{{ group.nome }}</h2>
              <p class="doc-subtitle mb-0">{{ group.descricao }}</p>
            </header>

            @for (endpoint of group.endpoints; track endpoint.endpoint_api.metodo + endpoint.endpoint_api.url) {
              <article class="endpoint-card mb-4">
                <h3 class="h5 mb-3">
                  <span class="method-badge">{{ endpoint.endpoint_api.metodo }}</span>
                  {{ endpoint.nome || endpoint.endpoint_api.endpoint_relativo }}
                </h3>

                <dl class="endpoint-grid mb-4">
                  <div><dt>Endpoint da API</dt><dd><code>{{ endpoint.endpoint_api.url }}</code></dd></div>
                  <div><dt>Endpoint relativo</dt><dd><code>{{ endpoint.endpoint_api.endpoint_relativo }}</code></dd></div>
                  <div><dt>Content-Type</dt><dd><code>{{ endpoint.endpoint_api.content_type_resposta }}</code></dd></div>
                  <div>
                    <dt>Precisa de APIKEY?</dt>
                    <dd>{{ endpoint.precisa_apikey ? 'Sim' : 'N\xE3o' }}@if (endpoint.apikey?.descricao) { \u2014 {{ endpoint.apikey?.descricao }} }</dd>
                  </div>
                  @if (endpoint.autenticacao) { <div><dt>Autentica\xE7\xE3o</dt><dd>{{ endpoint.autenticacao }}</dd></div> }
                  @if (endpoint.metodo_servico) { <div><dt>M\xE9todo no servi\xE7o</dt><dd><code>{{ endpoint.metodo_servico }}</code></dd></div> }
                </dl>

                <h4 class="h6 mt-4">Vari\xE1veis da API</h4>
                @if (endpoint.variaveis_api.length) {
                  <div class="table-responsive">
                    <table class="table doc-table align-middle mb-0">
                      <caption class="visually-hidden">Par\xE2metros de {{ endpoint.endpoint_api.endpoint_relativo }}</caption>
                      <thead><tr><th scope="col">Nome</th><th scope="col">Local</th><th scope="col">Tipo</th><th scope="col">Obrigat\xF3ria</th><th scope="col">Descri\xE7\xE3o</th><th scope="col">Exemplo</th></tr></thead>
                      <tbody>
                        @for (variable of endpoint.variaveis_api; track variable.nome) {
                          <tr><th scope="row"><code>{{ variable.nome }}</code></th><td><code>{{ variable.local || '\u2014' }}</code></td><td><code>{{ variable.tipo }}</code></td><td>{{ variable.obrigatoria ? 'Sim' : 'N\xE3o' }}</td><td>{{ variable.descricao }}</td><td><code>{{ variable.exemplo || '\u2014' }}</code></td></tr>
                        }
                      </tbody>
                    </table>
                  </div>
                } @else { <p class="doc-status">Este endpoint n\xE3o recebe vari\xE1veis.</p> }

                @if (endpoint.exemplo_requisicao) {
                  <h4 class="h6 mt-4">Exemplo de requisi\xE7\xE3o</h4>
                  <pre class="code-block"><code>{{ endpoint.exemplo_requisicao }}</code></pre>
                }

                <h4 class="h6 mt-4">Resultado da API</h4>
                <p>{{ endpoint.resultado_api.descricao }}</p>
                <pre class="code-block"><code>{{ endpoint.resultado_api.exemplo | json }}</code></pre>

                <h4 class="h6 mt-4">Vari\xE1veis de retorno</h4>
                @if (endpoint.variaveis_retorno_api.length) {
                  <div class="table-responsive">
                    <table class="table doc-table align-middle mb-0">
                      <caption class="visually-hidden">Campos retornados por {{ endpoint.endpoint_api.endpoint_relativo }}</caption>
                      <thead><tr><th scope="col">Nome</th><th scope="col">Tipo</th><th scope="col">Descri\xE7\xE3o</th></tr></thead>
                      <tbody>
                        @for (variable of endpoint.variaveis_retorno_api; track variable.nome) {
                          <tr><th scope="row"><code>{{ variable.nome }}</code></th><td><code>{{ variable.tipo }}</code></td><td>{{ variable.descricao }}</td></tr>
                        }
                      </tbody>
                    </table>
                  </div>
                } @else { <p class="doc-status mb-0">Este endpoint n\xE3o retorna conte\xFAdo documentado.</p> }
              </article>
            }
          </section>
        } @empty {
          <div class="alert alert-info mb-0" role="status">Nenhuma documenta\xE7\xE3o corresponde aos filtros informados.</div>
        }
      }
    </section>
  </div>
</main>
`, styles: ["/* src/app/pages/doc/doc.page.scss */\n.doc-wrap {\n  color: var(--theme-ink);\n}\n.doc-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.doc-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.doc-subtitle,\n.doc-note,\n.doc-status {\n  color: var(--theme-hint);\n}\n.doc-filters {\n  display: grid;\n  grid-template-columns: minmax(12rem, 0.7fr) minmax(16rem, 1fr) auto;\n  gap: 1rem;\n  align-items: end;\n}\n.filter-action .btn {\n  white-space: nowrap;\n}\n.endpoint-card {\n  padding: clamp(1rem, 2.5vw, 1.5rem);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n}\n.endpoint-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.endpoint-grid > div {\n  min-width: 0;\n  padding: 1rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 86%, var(--theme-line));\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.endpoint-grid dt {\n  margin-bottom: 0.35rem;\n  color: var(--theme-hint);\n  font-size: 0.82rem;\n  text-transform: uppercase;\n}\n.endpoint-grid dd {\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.method-badge {\n  display: inline-block;\n  padding: 0.2rem 0.55rem;\n  color: #fff;\n  background: #157347;\n  border-radius: 0.35rem;\n  font-weight: 700;\n}\n.doc-table {\n  --bs-table-bg: transparent;\n  --bs-table-color: var(--theme-ink);\n  --bs-table-border-color: var(--theme-line);\n}\n.doc-table code {\n  color: var(--theme-ink);\n}\n.code-block {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--theme-card-bg) 82%, var(--theme-line));\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n@media (max-width: 767.98px) {\n  .doc-filters,\n  .endpoint-grid {\n    grid-template-columns: 1fr;\n  }\n  .filter-action .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=doc.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocPage, { className: "DocPage", filePath: "src/app/pages/doc/doc.page.ts", lineNumber: 62 });
})();
export {
  DocPage
};
//# sourceMappingURL=chunk-HJKG5YBK.js.map
