import {
  BreadcrumbsComponent
} from "./chunk-BU6M5KF3.js";
import {
  BrapciApiService
} from "./chunk-MURG4VPZ.js";
import "./chunk-B656RPDE.js";
import "./chunk-CM64UOJM.js";
import {
  CommonModule,
  RouterLink
} from "./chunk-5VDMIUJO.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PFN54DTC.js";
import "./chunk-UKK5MWW6.js";

// src/app/pages/pensadores/pensadores.page.ts
var _c0 = (a0) => ["/pensadores", a0];
var _forTrack0 = ($index, $item) => $item.id;
function PensadoresPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.filteredPensadores().length, " ");
  }
}
function PensadoresPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275text(2, " Carregando pensadores... ");
    \u0275\u0275elementEnd();
  }
}
function PensadoresPage_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function PensadoresPage_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPensadores());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PensadoresPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Nenhum pensador encontrado.");
    \u0275\u0275elementEnd();
  }
}
function PensadoresPage_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function PensadoresPage_Conditional_15_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementEnd();
  }
}
function PensadoresPage_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Nenhum pensador encontrado para \u201C", ctx_r0.searchTerm(), "\u201D. ");
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 31);
    \u0275\u0275listener("error", function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.hideBrokenImage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", pensador_r6.foto, \u0275\u0275sanitizeUrl)("alt", "Retrato de " + pensador_r6.nome);
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pensador_r6.nome.charAt(0).toUpperCase(), " ");
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pensador_r6.nome_citacao);
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1, " Wikip\xE9dia ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", pensador_r6.link_wikipedia, \u0275\u0275sanitizeUrl);
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1, " Wikidata ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", pensador_r6.link_wikidata, \u0275\u0275sanitizeUrl);
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275conditionalCreate(1, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Conditional_1_Template, 2, 1, "a", 32);
    \u0275\u0275conditionalCreate(2, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Conditional_2_Template, 2, 1, "a", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pensador_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pensador_r6.link_wikipedia ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(pensador_r6.link_wikidata ? 2 : -1);
  }
}
function PensadoresPage_Conditional_15_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 21)(1, "a", 22);
    \u0275\u0275conditionalCreate(2, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_2_Template, 1, 2, "img", 23)(3, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "h2")(6, "a", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_8_Template, 2, 1, "p", 27);
    \u0275\u0275conditionalCreate(9, PensadoresPage_Conditional_15_Conditional_7_For_2_Conditional_9_Template, 3, 2, "div", 28);
    \u0275\u0275elementStart(10, "a", 29);
    \u0275\u0275text(11, " Ver perfil ");
    \u0275\u0275element(12, "i", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pensador_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, pensador_r6.id));
    \u0275\u0275attribute("aria-label", "Ver perfil de " + pensador_r6.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(pensador_r6.foto ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, pensador_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pensador_r6.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(pensador_r6.nome_citacao ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(pensador_r6.link_wikipedia || pensador_r6.link_wikidata ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, pensador_r6.id));
  }
}
function PensadoresPage_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, PensadoresPage_Conditional_15_Conditional_7_For_2_Template, 13, 14, "article", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredPensadores());
  }
}
function PensadoresPage_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3, "Pesquisar pensadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275listener("input", function PensadoresPage_Conditional_15_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PensadoresPage_Conditional_15_Conditional_5_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PensadoresPage_Conditional_15_Conditional_6_Template, 2, 1, "div", 17)(7, PensadoresPage_Conditional_15_Conditional_7_Template, 3, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.searchTerm());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.searchTerm() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filteredPensadores().length === 0 ? 6 : 7);
  }
}
var PensadoresPage = class _PensadoresPage {
  api = inject(BrapciApiService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  pensadores = signal([], ...ngDevMode ? [{ debugName: "pensadores" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  hasResults = computed(() => this.pensadores().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  filteredPensadores = computed(() => {
    const term = this.normalize(this.searchTerm());
    if (!term) {
      return this.pensadores();
    }
    return this.pensadores().filter((pensador) => this.normalize(`${pensador.nome} ${pensador.nome_citacao ?? ""}`).includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredPensadores" }] : []);
  constructor() {
    this.loadPensadores();
  }
  loadPensadores() {
    this.loading.set(true);
    this.error.set("");
    this.api.get("pensadores").subscribe({
      next: (response) => {
        this.pensadores.set(Array.isArray(response) ? response : []);
        this.loading.set(false);
      },
      error: () => {
        this.pensadores.set([]);
        this.error.set("N\xE3o foi poss\xEDvel carregar os pensadores. Tente novamente mais tarde.");
        this.loading.set(false);
      }
    });
  }
  hideBrokenImage(event) {
    event.target.hidden = true;
  }
  updateSearch(event) {
    this.searchTerm.set(event.target.value);
  }
  clearSearch() {
    this.searchTerm.set("");
  }
  normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLocaleLowerCase("pt-BR");
  }
  static \u0275fac = function PensadoresPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PensadoresPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PensadoresPage, selectors: [["app-pensadores-page"]], decls: 16, vars: 2, consts: [["aria-labelledby", "pensadores-title", 1, "pensadores-wrap", "py-4"], [1, "container"], [1, "page-heading", "mb-4"], [1, "eyebrow", "mb-1"], ["id", "pensadores-title", 1, "mb-1"], [1, "subtitle", "mb-0"], ["aria-label", "Quantidade de pensadores exibidos", 1, "total"], ["role", "status", 1, "state"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "justify-content-between", "align-items-center"], [1, "state"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["role", "search", 1, "search-box", "mb-4"], ["aria-hidden", "true", 1, "bi", "bi-search"], ["for", "pensadores-search", 1, "visually-hidden"], ["id", "pensadores-search", "type", "search", "placeholder", "Pesquisar por nome ou nome de cita\xE7\xE3o", "autocomplete", "off", 3, "input", "value"], ["type", "button", "aria-label", "Limpar pesquisa"], ["aria-live", "polite", 1, "state"], [1, "pensadores-grid"], ["type", "button", "aria-label", "Limpar pesquisa", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-x-lg"], [1, "pensador-card"], [1, "profile-media", 3, "routerLink"], ["loading", "lazy", 1, "pensador-foto", 3, "src", "alt"], ["aria-hidden", "true", 1, "pensador-placeholder"], [1, "card-body"], [3, "routerLink"], [1, "citation", "mb-0"], ["aria-label", "Fontes externas", 1, "links"], [1, "profile-link", 3, "routerLink"], ["aria-hidden", "true", 1, "bi", "bi-arrow-right"], ["loading", "lazy", 1, "pensador-foto", 3, "error", "src", "alt"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function PensadoresPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2)(4, "div")(5, "p", 3);
      \u0275\u0275text(6, "Brapci");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 4);
      \u0275\u0275text(8, "Pensadores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, "Autores que ajudam a construir o pensamento cient\xEDfico.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, PensadoresPage_Conditional_11_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, PensadoresPage_Conditional_12_Template, 3, 0, "div", 7)(13, PensadoresPage_Conditional_13_Template, 5, 1, "div", 8)(14, PensadoresPage_Conditional_14_Template, 2, 0, "div", 9)(15, PensadoresPage_Conditional_15_Template, 8, 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.hasResults() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.error() ? 13 : !ctx.hasResults() ? 14 : 15);
    }
  }, dependencies: [CommonModule, RouterLink, BreadcrumbsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.pensadores-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef3f7 100%);\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #31726a;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  color: #17252a;\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  font-weight: 700;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #65747b;\n}\n.total[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-align: center;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: min(100%, 42rem);\n  min-height: 3rem;\n  padding: 0 0.9rem;\n  border: 1px solid #ccd8dc;\n  border-radius: 0.75rem;\n  background: #fff;\n  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.06);\n  color: #687a80;\n  transition: border-color 160ms ease, box-shadow 160ms ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #438a81;\n  box-shadow: 0 0 0 0.2rem rgba(67, 138, 129, 0.16);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 0.7rem;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #1e3035;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #849298;\n}\n.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: #64757b;\n}\n.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e7efee;\n  color: #245c56;\n}\n.pensadores-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.pensador-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dde5e8;\n  border-radius: 0.75rem;\n  background: #fff;\n  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.07);\n  transition: box-shadow 180ms ease, transform 180ms ease;\n}\n.pensador-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 22px rgba(26, 49, 55, 0.14);\n}\n.pensador-foto[_ngcontent-%COMP%], \n.pensador-placeholder[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4/5;\n  background: #e8eeef;\n}\n.profile-media[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n.pensador-foto[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.pensador-placeholder[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #5c7777;\n  font-family: Georgia, serif;\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  background:\n    linear-gradient(\n      145deg,\n      #e8f1ef,\n      #d5e4e1);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.85rem;\n}\n.card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e3035;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  overflow-wrap: anywhere;\n}\n.card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #236c64;\n  text-decoration: underline;\n}\n.citation[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: #718087;\n  font-size: 0.8rem;\n  line-height: 1.35;\n}\n.links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem 0.7rem;\n  margin-top: 0.75rem;\n  font-size: 0.78rem;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #236c64;\n  font-weight: 600;\n  text-decoration: none;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.profile-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.8rem;\n  color: #236c64;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.profile-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6rem;\n  min-height: 12rem;\n  color: #65747b;\n}\n@media (min-width: 576px) {\n  .pensadores-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 992px) {\n  .pensadores-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pensadores-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pensadores-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #181d1f 0%,\n      #20282b 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   h1[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   h1[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #edf4f3;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .citation[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .citation[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .state[_ngcontent-%COMP%] {\n  color: #aebcbe;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pensador-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pensador-card[_ngcontent-%COMP%] {\n  border-color: #3b484b;\n  background: #273033;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  border-color: #465457;\n  background: #273033;\n  color: #aebcbe;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #edf4f3;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #354244;\n  color: #b9d9d4;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pensador-placeholder[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pensador-placeholder[_ngcontent-%COMP%] {\n  color: #a6c7c2;\n  background:\n    linear-gradient(\n      145deg,\n      #344441,\n      #263532);\n}\n/*# sourceMappingURL=pensadores.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PensadoresPage, [{
    type: Component,
    args: [{ selector: "app-pensadores-page", imports: [CommonModule, RouterLink, BreadcrumbsComponent], template: `<section class="pensadores-wrap py-4" aria-labelledby="pensadores-title">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>

    <div class="page-heading mb-4">
      <div>
        <p class="eyebrow mb-1">Brapci</p>
        <h1 id="pensadores-title" class="mb-1">Pensadores</h1>
        <p class="subtitle mb-0">Autores que ajudam a construir o pensamento cient\xEDfico.</p>
      </div>
      @if (hasResults()) {
        <span class="total" aria-label="Quantidade de pensadores exibidos">
          {{ filteredPensadores().length }}
        </span>
      }
    </div>

    @if (loading()) {
      <div class="state" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        Carregando pensadores...
      </div>
    } @else if (error()) {
      <div class="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
        <span>{{ error() }}</span>
        <button type="button" class="btn btn-sm btn-outline-danger" (click)="loadPensadores()">
          Tentar novamente
        </button>
      </div>
    } @else if (!hasResults()) {
      <div class="state">Nenhum pensador encontrado.</div>
    } @else {
      <div class="search-box mb-4" role="search">
        <i class="bi bi-search" aria-hidden="true"></i>
        <label class="visually-hidden" for="pensadores-search">Pesquisar pensadores</label>
        <input
          id="pensadores-search"
          type="search"
          [value]="searchTerm()"
          (input)="updateSearch($event)"
          placeholder="Pesquisar por nome ou nome de cita\xE7\xE3o"
          autocomplete="off"
        />
        @if (searchTerm()) {
          <button type="button" (click)="clearSearch()" aria-label="Limpar pesquisa">
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        }
      </div>

      @if (filteredPensadores().length === 0) {
        <div class="state" aria-live="polite">
          Nenhum pensador encontrado para \u201C{{ searchTerm() }}\u201D.
        </div>
      } @else {
        <div class="pensadores-grid">
          @for (pensador of filteredPensadores(); track pensador.id) {
            <article class="pensador-card">
            <a class="profile-media" [routerLink]="['/pensadores', pensador.id]" [attr.aria-label]="'Ver perfil de ' + pensador.nome">
            @if (pensador.foto) {
              <img
                class="pensador-foto"
                [src]="pensador.foto"
                [alt]="'Retrato de ' + pensador.nome"
                loading="lazy"
                (error)="hideBrokenImage($event)"
              />
            } @else {
              <div class="pensador-placeholder" aria-hidden="true">
                {{ pensador.nome.charAt(0).toUpperCase() }}
              </div>
            }
            </a>

            <div class="card-body">
              <h2>
                <a [routerLink]="['/pensadores', pensador.id]">{{ pensador.nome }}</a>
              </h2>
              @if (pensador.nome_citacao) {
                <p class="citation mb-0">{{ pensador.nome_citacao }}</p>
              }
              @if (pensador.link_wikipedia || pensador.link_wikidata) {
                <div class="links" aria-label="Fontes externas">
                  @if (pensador.link_wikipedia) {
                    <a [href]="pensador.link_wikipedia" target="_blank" rel="noopener noreferrer">
                      Wikip\xE9dia
                    </a>
                  }
                  @if (pensador.link_wikidata) {
                    <a [href]="pensador.link_wikidata" target="_blank" rel="noopener noreferrer">
                      Wikidata
                    </a>
                  }
                </div>
              }
              <a class="profile-link" [routerLink]="['/pensadores', pensador.id]">
                Ver perfil <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            </article>
          }
        </div>
      }
    }
  </div>
</section>
`, styles: ["/* src/app/pages/pensadores/pensadores.page.scss */\n:host {\n  display: block;\n}\n.pensadores-wrap {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef3f7 100%);\n}\n.page-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.eyebrow {\n  color: #31726a;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh1 {\n  color: #17252a;\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  font-weight: 700;\n}\n.subtitle {\n  color: #65747b;\n}\n.total {\n  min-width: 2.5rem;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-align: center;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  width: min(100%, 42rem);\n  min-height: 3rem;\n  padding: 0 0.9rem;\n  border: 1px solid #ccd8dc;\n  border-radius: 0.75rem;\n  background: #fff;\n  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.06);\n  color: #687a80;\n  transition: border-color 160ms ease, box-shadow 160ms ease;\n}\n.search-box:focus-within {\n  border-color: #438a81;\n  box-shadow: 0 0 0 0.2rem rgba(67, 138, 129, 0.16);\n}\n.search-box input {\n  flex: 1;\n  min-width: 0;\n  padding: 0.7rem;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #1e3035;\n}\n.search-box input::placeholder {\n  color: #849298;\n}\n.search-box button {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: #64757b;\n}\n.search-box button:hover {\n  background: #e7efee;\n  color: #245c56;\n}\n.pensadores-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.pensador-card {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dde5e8;\n  border-radius: 0.75rem;\n  background: #fff;\n  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.07);\n  transition: box-shadow 180ms ease, transform 180ms ease;\n}\n.pensador-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 22px rgba(26, 49, 55, 0.14);\n}\n.pensador-foto,\n.pensador-placeholder {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4/5;\n  background: #e8eeef;\n}\n.profile-media {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n.pensador-foto {\n  object-fit: cover;\n}\n.pensador-placeholder {\n  display: grid;\n  place-items: center;\n  color: #5c7777;\n  font-family: Georgia, serif;\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  background:\n    linear-gradient(\n      145deg,\n      #e8f1ef,\n      #d5e4e1);\n}\n.card-body {\n  padding: 0.85rem;\n}\n.card-body h2 {\n  margin: 0;\n  color: #1e3035;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.3;\n  overflow-wrap: anywhere;\n}\n.card-body h2 a {\n  color: inherit;\n  text-decoration: none;\n}\n.card-body h2 a:hover {\n  color: #236c64;\n  text-decoration: underline;\n}\n.citation {\n  margin-top: 0.35rem;\n  color: #718087;\n  font-size: 0.8rem;\n  line-height: 1.35;\n}\n.links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem 0.7rem;\n  margin-top: 0.75rem;\n  font-size: 0.78rem;\n}\n.links a {\n  color: #236c64;\n  font-weight: 600;\n  text-decoration: none;\n}\n.links a:hover {\n  text-decoration: underline;\n}\n.profile-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.8rem;\n  color: #236c64;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.profile-link:hover {\n  text-decoration: underline;\n}\n.state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6rem;\n  min-height: 12rem;\n  color: #65747b;\n}\n@media (min-width: 576px) {\n  .pensadores-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 992px) {\n  .pensadores-grid {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\n:host-context(body.theme-master.theme-dark) .pensadores-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #181d1f 0%,\n      #20282b 100%);\n}\n:host-context(body.theme-master.theme-dark) h1,\n:host-context(body.theme-master.theme-dark) .card-body h2 {\n  color: #edf4f3;\n}\n:host-context(body.theme-master.theme-dark) .subtitle,\n:host-context(body.theme-master.theme-dark) .citation,\n:host-context(body.theme-master.theme-dark) .state {\n  color: #aebcbe;\n}\n:host-context(body.theme-master.theme-dark) .pensador-card {\n  border-color: #3b484b;\n  background: #273033;\n}\n:host-context(body.theme-master.theme-dark) .search-box {\n  border-color: #465457;\n  background: #273033;\n  color: #aebcbe;\n}\n:host-context(body.theme-master.theme-dark) .search-box input {\n  color: #edf4f3;\n}\n:host-context(body.theme-master.theme-dark) .search-box button:hover {\n  background: #354244;\n  color: #b9d9d4;\n}\n:host-context(body.theme-master.theme-dark) .pensador-placeholder {\n  color: #a6c7c2;\n  background:\n    linear-gradient(\n      145deg,\n      #344441,\n      #263532);\n}\n/*# sourceMappingURL=pensadores.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PensadoresPage, { className: "PensadoresPage", filePath: "src/app/pages/pensadores/pensadores.page.ts", lineNumber: 22 });
})();
export {
  PensadoresPage
};
//# sourceMappingURL=chunk-3X23EI3E.js.map
