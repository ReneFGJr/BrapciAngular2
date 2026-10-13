import {
  BreadcrumbsComponent
} from "./chunk-BU6M5KF3.js";
import {
  BrapciApiService
} from "./chunk-MURG4VPZ.js";
import "./chunk-B656RPDE.js";
import "./chunk-CM64UOJM.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink
} from "./chunk-5VDMIUJO.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PFN54DTC.js";
import "./chunk-UKK5MWW6.js";

// src/app/pages/pensador-id/pensador-id.page.ts
var _forTrack0 = ($index, $item) => $item.id_ca;
function PensadorIdPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275text(2, " Carregando pensador... ");
    \u0275\u0275elementEnd();
  }
}
function PensadorIdPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 5);
    \u0275\u0275text(3, "Voltar aos pensadores");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PensadorIdPage_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", item_r2.foto, \u0275\u0275sanitizeUrl)("alt", "Retrato de " + item_r2.nome);
  }
}
function PensadorIdPage_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.nome.charAt(0).toUpperCase());
  }
}
function PensadorIdPage_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.nome_citacao);
  }
}
function PensadorIdPage_Conditional_5_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Nascimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dados_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dados_r3["data_nascimento"]);
  }
}
function PensadorIdPage_Conditional_5_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Falecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dados_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dados_r3["data_falecimento"]);
  }
}
function PensadorIdPage_Conditional_5_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Local de nascimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dados_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dados_r3["local_nascimento"]);
  }
}
function PensadorIdPage_Conditional_5_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Pa\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dados_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dados_r3["pais_nascimento"]);
  }
}
function PensadorIdPage_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl");
    \u0275\u0275conditionalCreate(1, PensadorIdPage_Conditional_5_Conditional_13_Conditional_1_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(2, PensadorIdPage_Conditional_5_Conditional_13_Conditional_2_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(3, PensadorIdPage_Conditional_5_Conditional_13_Conditional_3_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(4, PensadorIdPage_Conditional_5_Conditional_13_Conditional_4_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dados_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275conditional(dados_r3["data_nascimento"] ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dados_r3["data_falecimento"] ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dados_r3["local_nascimento"] ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dados_r3["pais_nascimento"] ? 4 : -1);
  }
}
function PensadorIdPage_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, "Wikip\xE9dia");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", item_r2.link_wikipedia, \u0275\u0275sanitizeUrl);
  }
}
function PensadorIdPage_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, "Wikidata");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", item_r2.link_wikidata, \u0275\u0275sanitizeUrl);
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obra_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obra_r4.ca_year);
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obra_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obra_r4.ca_authors);
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obra_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r0.doiUrl(obra_r4.ca_doi), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" DOI: ", obra_r4.ca_doi, " ");
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obra_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Citado por ", obra_r4.cited_by);
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 22)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_4_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_7_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275conditionalCreate(9, PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_9_Template, 2, 2, "a", 15);
    \u0275\u0275conditionalCreate(10, PensadorIdPage_Conditional_5_Conditional_26_For_2_Conditional_10_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obra_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Refer\xEAncia #", obra_r4.id_ca);
    \u0275\u0275advance();
    \u0275\u0275conditional(obra_r4.ca_year ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obra_r4.ca_text || "Refer\xEAncia sem t\xEDtulo cadastrado.");
    \u0275\u0275advance();
    \u0275\u0275conditional(obra_r4.ca_authors ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(obra_r4.ca_doi ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obra_r4.cited_by !== null && obra_r4.cited_by !== void 0 ? 10 : -1);
  }
}
function PensadorIdPage_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, PensadorIdPage_Conditional_5_Conditional_26_For_2_Template, 11, 6, "article", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r2.obras);
  }
}
function PensadorIdPage_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Nenhuma obra relacionada foi cadastrada para este pensador.");
    \u0275\u0275elementEnd();
  }
}
function PensadorIdPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2, " Todos os pensadores ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "article", 8)(4, "div");
    \u0275\u0275conditionalCreate(5, PensadorIdPage_Conditional_5_Conditional_5_Template, 1, 2, "img", 9)(6, PensadorIdPage_Conditional_5_Conditional_6_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "p", 12);
    \u0275\u0275text(9, "Pensador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, PensadorIdPage_Conditional_5_Conditional_12_Template, 2, 1, "p", 13);
    \u0275\u0275conditionalCreate(13, PensadorIdPage_Conditional_5_Conditional_13_Template, 5, 4, "dl");
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275conditionalCreate(15, PensadorIdPage_Conditional_5_Conditional_15_Template, 2, 1, "a", 15);
    \u0275\u0275conditionalCreate(16, PensadorIdPage_Conditional_5_Conditional_16_Template, 2, 1, "a", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "section", 16)(18, "div", 17)(19, "div")(20, "p", 12);
    \u0275\u0275text(21, "Produ\xE7\xE3o relacionada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h2", 18);
    \u0275\u0275text(23, "Obras relacionadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, PensadorIdPage_Conditional_5_Conditional_26_Template, 3, 0, "div", 20)(27, PensadorIdPage_Conditional_5_Conditional_27_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r2 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r2.foto ? 5 : 6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r2.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.nome_citacao ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = item_r2.dados) ? 13 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r2.link_wikipedia ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.link_wikidata ? 16 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((item_r2.obras == null ? null : item_r2.obras.length) ?? 0);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r2.obras == null ? null : item_r2.obras.length) ? 26 : 27);
  }
}
var PensadorIdPage = class _PensadorIdPage {
  route = inject(ActivatedRoute);
  api = inject(BrapciApiService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  pensador = signal(null, ...ngDevMode ? [{ debugName: "pensador" }] : []);
  constructor() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id || !/^\d+$/.test(id)) {
      this.error.set("Pensador n\xE3o encontrado.");
      this.loading.set(false);
      return;
    }
    this.api.get(`pensadores/${id}`).subscribe({
      next: (response) => {
        if (!response || response.status === 404 || !response.id) {
          this.error.set("Pensador n\xE3o encontrado.");
        } else {
          this.pensador.set(response);
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set("N\xE3o foi poss\xEDvel carregar o pensador.");
        this.loading.set(false);
      }
    });
  }
  doiUrl(doi) {
    const normalized = doi.trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "").replace(/^doi:\s*/i, "");
    return `https://doi.org/${encodeURIComponent(normalized).replace(/%2F/gi, "/")}`;
  }
  static \u0275fac = function PensadorIdPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PensadorIdPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PensadorIdPage, selectors: [["app-pensador-id-page"]], decls: 6, vars: 1, consts: [[1, "pensador-wrap", "py-4"], [1, "container"], ["role", "status", 1, "state"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "alert", "alert-warning"], ["routerLink", "/pensadores", 1, "btn", "btn-outline-primary"], ["routerLink", "/pensadores", 1, "back-link"], ["aria-hidden", "true", 1, "bi", "bi-arrow-left"], [1, "profile", "mt-3"], [1, "portrait", 3, "src", "alt"], ["aria-hidden", "true", 1, "portrait", "placeholder"], [1, "profile-content"], [1, "eyebrow", "mb-1"], [1, "citation"], [1, "external-links"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["aria-labelledby", "related-works-title", 1, "works", "mt-4"], [1, "works-heading"], ["id", "related-works-title"], [1, "works-total"], [1, "works-list"], [1, "empty-works", "mb-0"], [1, "work-card"], [1, "work-meta"], [1, "year"], [1, "authors"], [1, "work-footer"]], template: function PensadorIdPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275conditionalCreate(3, PensadorIdPage_Conditional_3_Template, 3, 0, "div", 2)(4, PensadorIdPage_Conditional_4_Template, 4, 1)(5, PensadorIdPage_Conditional_5_Template, 28, 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.error() ? 4 : (tmp_0_0 = ctx.pensador()) ? 5 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterLink, BreadcrumbsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.pensador-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #eef3f7);\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6rem;\n  min-height: 14rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #236c64;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.profile[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(14rem, 22rem) 1fr;\n  gap: clamp(1.5rem, 4vw, 3.5rem);\n  padding: clamp(1rem, 3vw, 2rem);\n  border: 1px solid #dde5e8;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(26, 49, 55, 0.09);\n}\n.portrait[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 4/5;\n  border-radius: 0.75rem;\n  object-fit: cover;\n  background: #e8eeef;\n}\n.placeholder[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #5c7777;\n  font: 5rem Georgia, serif;\n  background:\n    linear-gradient(\n      145deg,\n      #e8f1ef,\n      #d5e4e1);\n}\n.profile-content[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #31726a;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  color: #17252a;\n  font-size: clamp(2rem, 5vw, 3.5rem);\n}\n.citation[_ngcontent-%COMP%] {\n  color: #65747b;\n  font-size: 1.1rem;\n}\ndl[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  border-bottom: 1px solid #e5ebed;\n}\ndt[_ngcontent-%COMP%] {\n  color: #65747b;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #24373c;\n}\n.external-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.external-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.8rem;\n  border-radius: 0.5rem;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-decoration: none;\n}\n.works[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 3vw, 2rem);\n  border: 1px solid #dde5e8;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(26, 49, 55, 0.07);\n}\n.works-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.works-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #17252a;\n  font-size: clamp(1.4rem, 3vw, 2rem);\n}\n.works-total[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-align: center;\n}\n.works-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n}\n.work-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e0e7e9;\n  border-radius: 0.75rem;\n  background: #fbfcfc;\n}\n.work-meta[_ngcontent-%COMP%], \n.work-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.5rem 1rem;\n  color: #718087;\n  font-size: 0.78rem;\n}\n.year[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  background: #e8efef;\n  color: #41595d;\n  font-weight: 700;\n}\n.work-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.55rem 0;\n  color: #25383d;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.authors[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: #65747b;\n  font-size: 0.88rem;\n}\n.work-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #236c64;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.empty-works[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  background: #f3f6f7;\n  color: #65747b;\n  text-align: center;\n}\n@media (max-width: 767.98px) {\n  .profile[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: min(100%, 20rem);\n    margin-inline: auto;\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pensador-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pensador-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #181d1f,\n      #20282b);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .profile[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .profile[_ngcontent-%COMP%] {\n  border-color: #3b484b;\n  background: #273033;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .works[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .works[_ngcontent-%COMP%] {\n  border-color: #3b484b;\n  background: #273033;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .work-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-card[_ngcontent-%COMP%] {\n  border-color: #3b484b;\n  background: #20282b;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   h1[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   h1[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   dd[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .works-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .works-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .work-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #edf4f3;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .citation[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .citation[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   dt[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .authors[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .work-meta[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-meta[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .work-footer[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-footer[_ngcontent-%COMP%] {\n  color: #aebcbe;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .empty-works[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .empty-works[_ngcontent-%COMP%] {\n  background: #20282b;\n  color: #aebcbe;\n}\n/*# sourceMappingURL=pensador-id.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PensadorIdPage, [{
    type: Component,
    args: [{ selector: "app-pensador-id-page", imports: [CommonModule, RouterLink, BreadcrumbsComponent], template: `<section class="pensador-wrap py-4">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>

    @if (loading()) {
      <div class="state" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        Carregando pensador...
      </div>
    } @else if (error()) {
      <div class="alert alert-warning">{{ error() }}</div>
      <a class="btn btn-outline-primary" routerLink="/pensadores">Voltar aos pensadores</a>
    } @else if (pensador(); as item) {
      <a class="back-link" routerLink="/pensadores">
        <i class="bi bi-arrow-left" aria-hidden="true"></i> Todos os pensadores
      </a>

      <article class="profile mt-3">
        <div>
          @if (item.foto) {
            <img class="portrait" [src]="item.foto" [alt]="'Retrato de ' + item.nome" />
          } @else {
            <div class="portrait placeholder" aria-hidden="true">{{ item.nome.charAt(0).toUpperCase() }}</div>
          }
        </div>
        <div class="profile-content">
          <p class="eyebrow mb-1">Pensador</p>
          <h1>{{ item.nome }}</h1>
          @if (item.nome_citacao) {
            <p class="citation">{{ item.nome_citacao }}</p>
          }

          @if (item.dados; as dados) {
            <dl>
              @if (dados['data_nascimento']) { <div><dt>Nascimento</dt><dd>{{ dados['data_nascimento'] }}</dd></div> }
              @if (dados['data_falecimento']) { <div><dt>Falecimento</dt><dd>{{ dados['data_falecimento'] }}</dd></div> }
              @if (dados['local_nascimento']) { <div><dt>Local de nascimento</dt><dd>{{ dados['local_nascimento'] }}</dd></div> }
              @if (dados['pais_nascimento']) { <div><dt>Pa\xEDs</dt><dd>{{ dados['pais_nascimento'] }}</dd></div> }
            </dl>
          }

          <div class="external-links">
            @if (item.link_wikipedia) {
              <a [href]="item.link_wikipedia" target="_blank" rel="noopener noreferrer">Wikip\xE9dia</a>
            }
            @if (item.link_wikidata) {
              <a [href]="item.link_wikidata" target="_blank" rel="noopener noreferrer">Wikidata</a>
            }
          </div>
        </div>
      </article>

      <section class="works mt-4" aria-labelledby="related-works-title">
        <div class="works-heading">
          <div>
            <p class="eyebrow mb-1">Produ\xE7\xE3o relacionada</p>
            <h2 id="related-works-title">Obras relacionadas</h2>
          </div>
          <span class="works-total">{{ item.obras?.length ?? 0 }}</span>
        </div>

        @if (item.obras?.length) {
          <div class="works-list">
            @for (obra of item.obras; track obra.id_ca) {
              <article class="work-card">
                <div class="work-meta">
                  <span>Refer\xEAncia #{{ obra.id_ca }}</span>
                  @if (obra.ca_year) {
                    <span class="year">{{ obra.ca_year }}</span>
                  }
                </div>
                <h3>{{ obra.ca_text || 'Refer\xEAncia sem t\xEDtulo cadastrado.' }}</h3>
                @if (obra.ca_authors) {
                  <p class="authors">{{ obra.ca_authors }}</p>
                }
                <div class="work-footer">
                  @if (obra.ca_doi) {
                    <a [href]="doiUrl(obra.ca_doi)" target="_blank" rel="noopener noreferrer">
                      DOI: {{ obra.ca_doi }}
                    </a>
                  }
                  @if (obra.cited_by !== null && obra.cited_by !== undefined) {
                    <span>Citado por {{ obra.cited_by }}</span>
                  }
                </div>
              </article>
            }
          </div>
        } @else {
          <p class="empty-works mb-0">Nenhuma obra relacionada foi cadastrada para este pensador.</p>
        }
      </section>
    }
  </div>
</section>
`, styles: ["/* src/app/pages/pensador-id/pensador-id.page.scss */\n:host {\n  display: block;\n}\n.pensador-wrap {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #eef3f7);\n}\n.state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6rem;\n  min-height: 14rem;\n}\n.back-link {\n  color: #236c64;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.profile {\n  display: grid;\n  grid-template-columns: minmax(14rem, 22rem) 1fr;\n  gap: clamp(1.5rem, 4vw, 3.5rem);\n  padding: clamp(1rem, 3vw, 2rem);\n  border: 1px solid #dde5e8;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(26, 49, 55, 0.09);\n}\n.portrait {\n  width: 100%;\n  aspect-ratio: 4/5;\n  border-radius: 0.75rem;\n  object-fit: cover;\n  background: #e8eeef;\n}\n.placeholder {\n  display: grid;\n  place-items: center;\n  color: #5c7777;\n  font: 5rem Georgia, serif;\n  background:\n    linear-gradient(\n      145deg,\n      #e8f1ef,\n      #d5e4e1);\n}\n.profile-content {\n  padding-top: 0.5rem;\n}\n.eyebrow {\n  color: #31726a;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh1 {\n  color: #17252a;\n  font-size: clamp(2rem, 5vw, 3.5rem);\n}\n.citation {\n  color: #65747b;\n  font-size: 1.1rem;\n}\ndl {\n  margin: 2rem 0;\n}\ndl div {\n  padding: 0.7rem 0;\n  border-bottom: 1px solid #e5ebed;\n}\ndt {\n  color: #65747b;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n}\ndd {\n  margin: 0.15rem 0 0;\n  color: #24373c;\n}\n.external-links {\n  display: flex;\n  gap: 0.75rem;\n}\n.external-links a {\n  padding: 0.5rem 0.8rem;\n  border-radius: 0.5rem;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-decoration: none;\n}\n.works {\n  padding: clamp(1rem, 3vw, 2rem);\n  border: 1px solid #dde5e8;\n  border-radius: 1rem;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(26, 49, 55, 0.07);\n}\n.works-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.works-heading h2 {\n  margin: 0;\n  color: #17252a;\n  font-size: clamp(1.4rem, 3vw, 2rem);\n}\n.works-total {\n  min-width: 2.5rem;\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background: #dceeea;\n  color: #245c56;\n  font-weight: 700;\n  text-align: center;\n}\n.works-list {\n  display: grid;\n  gap: 0.8rem;\n}\n.work-card {\n  padding: 1rem;\n  border: 1px solid #e0e7e9;\n  border-radius: 0.75rem;\n  background: #fbfcfc;\n}\n.work-meta,\n.work-footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.5rem 1rem;\n  color: #718087;\n  font-size: 0.78rem;\n}\n.year {\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  background: #e8efef;\n  color: #41595d;\n  font-weight: 700;\n}\n.work-card h3 {\n  margin: 0.55rem 0;\n  color: #25383d;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.authors {\n  margin: 0 0 0.75rem;\n  color: #65747b;\n  font-size: 0.88rem;\n}\n.work-footer a {\n  color: #236c64;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.empty-works {\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  background: #f3f6f7;\n  color: #65747b;\n  text-align: center;\n}\n@media (max-width: 767.98px) {\n  .profile {\n    grid-template-columns: 1fr;\n  }\n  .profile > div:first-child {\n    width: min(100%, 20rem);\n    margin-inline: auto;\n  }\n}\n:host-context(body.theme-master.theme-dark) .pensador-wrap {\n  background:\n    linear-gradient(\n      180deg,\n      #181d1f,\n      #20282b);\n}\n:host-context(body.theme-master.theme-dark) .profile {\n  border-color: #3b484b;\n  background: #273033;\n}\n:host-context(body.theme-master.theme-dark) .works {\n  border-color: #3b484b;\n  background: #273033;\n}\n:host-context(body.theme-master.theme-dark) .work-card {\n  border-color: #3b484b;\n  background: #20282b;\n}\n:host-context(body.theme-master.theme-dark) h1,\n:host-context(body.theme-master.theme-dark) dd,\n:host-context(body.theme-master.theme-dark) .works-heading h2,\n:host-context(body.theme-master.theme-dark) .work-card h3 {\n  color: #edf4f3;\n}\n:host-context(body.theme-master.theme-dark) .citation,\n:host-context(body.theme-master.theme-dark) dt,\n:host-context(body.theme-master.theme-dark) .authors,\n:host-context(body.theme-master.theme-dark) .work-meta,\n:host-context(body.theme-master.theme-dark) .work-footer {\n  color: #aebcbe;\n}\n:host-context(body.theme-master.theme-dark) .empty-works {\n  background: #20282b;\n  color: #aebcbe;\n}\n/*# sourceMappingURL=pensador-id.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PensadorIdPage, { className: "PensadorIdPage", filePath: "src/app/pages/pensador-id/pensador-id.page.ts", lineNumber: 35 });
})();
export {
  PensadorIdPage
};
//# sourceMappingURL=chunk-XHGPUR5I.js.map
