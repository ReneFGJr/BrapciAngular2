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
  RadioControlValueAccessor,
  ɵNgNoValidate
} from "./chunk-2VENA5I5.mjs";
import {
  CommonModule,
  HttpClient,
  JsonPipe
} from "./chunk-TG5MYEEE.mjs";
import {
  Component,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QTSSUGT7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-normalize-cites/tools-normalize-cites.page.ts
var _c0 = ["editor"];
var _c1 = () => ({ tools: "Ferramentas", normalize_cites: "Normaliza\xE7\xE3o de refer\xEAncias" });
function ToolsNormalizeCitesPage_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 26)(1, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ToolsNormalizeCitesPage_For_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.standard, $event) || (ctx_r2.standard = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.standard === item_r4);
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.standard);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4);
  }
}
function ToolsNormalizeCitesPage_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275text(1, " Normalizando... ");
  }
}
function ToolsNormalizeCitesPage_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Normalizar refer\xEAncias ");
  }
}
function ToolsNormalizeCitesPage_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", ctx, \u0275\u0275sanitizeHtml);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, " A resposta n\xE3o cont\xE9m um resultado textual para exibi\xE7\xE3o. ");
    \u0275\u0275elementEnd();
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275conditionalCreate(1, ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Conditional_1_Template, 1, 1, "div", 35)(2, ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Conditional_2_Template, 2, 0, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.resultHtml()) ? 1 : 2, tmp_3_0);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.result));
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rawResponse);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275conditionalCreate(1, ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Conditional_1_Template, 3, 3, "pre", 37)(2, ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Conditional_2_Template, 2, 1, "pre", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result !== null ? 1 : 2);
  }
}
function ToolsNormalizeCitesPage_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ToolsNormalizeCitesPage_Conditional_37_Conditional_0_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(1, "div", 30)(2, "button", 31);
    \u0275\u0275listener("click", function ToolsNormalizeCitesPage_Conditional_37_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab("result"));
    });
    \u0275\u0275text(3, " Resultado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function ToolsNormalizeCitesPage_Conditional_37_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab("json"));
    });
    \u0275\u0275text(5, " JSON ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ToolsNormalizeCitesPage_Conditional_37_Conditional_6_Template, 3, 1, "div", 33)(7, ToolsNormalizeCitesPage_Conditional_37_Conditional_7_Template, 3, 1, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.error ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "result");
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab === "result");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "json");
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab === "json");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.activeTab === "result" ? 6 : 7);
  }
}
function ToolsNormalizeCitesPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "As refer\xEAncias normalizadas ser\xE3o exibidas aqui.");
    \u0275\u0275elementEnd();
  }
}
var ToolsNormalizeCitesPage = class _ToolsNormalizeCitesPage {
  http = inject(HttpClient);
  editor;
  standards = ["ABNT", "Vancouver", "APA"];
  standard = "ABNT";
  editorHtml = "";
  result = null;
  rawResponse = "";
  activeTab = "result";
  error = "";
  loading = false;
  updateText(event) {
    this.editorHtml = event.currentTarget.innerHTML;
  }
  format(command, event) {
    event.preventDefault();
    this.editor?.nativeElement.focus();
    document.execCommand(command);
    this.editorHtml = this.editor?.nativeElement.innerHTML ?? "";
  }
  normalize() {
    if (!this.hasText() || this.loading) {
      return;
    }
    this.loading = true;
    this.error = "";
    this.result = null;
    this.rawResponse = "";
    this.activeTab = "result";
    this.http.post(`/api/cite/normalize/${this.standard}`, { text: this.editorHtml }, { responseType: "text" }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => {
        this.rawResponse = response;
        this.result = this.parseResponse(response);
      },
      error: (error) => {
        if (typeof error.error === "string" && error.error.trim()) {
          this.rawResponse = error.error;
          this.result = this.parseResponse(error.error);
        }
        this.error = typeof error.error !== "string" && error.error?.message || "N\xE3o foi poss\xEDvel normalizar as refer\xEAncias. Verifique o texto e tente novamente.";
      }
    });
  }
  hasText() {
    const text = this.editorHtml.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/gi, " ").trim();
    return text.length > 0;
  }
  resultHtml() {
    if (typeof this.result === "string") {
      return this.result;
    }
    if (this.result && typeof this.result === "object") {
      const data = this.result;
      const value = data["result"] ?? data["text"] ?? data["reference"] ?? data["data"];
      return typeof value === "string" ? value : null;
    }
    return null;
  }
  selectTab(tab) {
    this.activeTab = tab;
  }
  parseResponse(response) {
    const cleanResponse = response.replace(/<!--[^]*?-->/g, "").trim();
    try {
      return JSON.parse(cleanResponse);
    } catch {
      const jsonPositions = [cleanResponse.indexOf("{"), cleanResponse.indexOf("[")].filter((index) => index >= 0);
      const jsonStart = jsonPositions.length ? Math.min(...jsonPositions) : -1;
      if (jsonStart >= 0) {
        try {
          return JSON.parse(cleanResponse.slice(jsonStart));
        } catch {
        }
      }
      return cleanResponse;
    }
  }
  static \u0275fac = function ToolsNormalizeCitesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsNormalizeCitesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsNormalizeCitesPage, selectors: [["app-tools-normalize-cites-page"]], viewQuery: function ToolsNormalizeCitesPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editor = _t.first);
    }
  }, decls: 39, vars: 8, consts: [["editor", ""], ["aria-labelledby", "normalize-title", 1, "normalize-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "normalize-card", "p-4", "p-md-5"], [1, "normalize-eyebrow", "mb-2"], ["id", "normalize-title", 1, "h2", "mb-2"], [1, "normalize-subtitle", "mb-4"], [3, "ngSubmit"], [1, "mb-4"], [1, "h6", "mb-2"], ["aria-label", "Escolha a norma bibliogr\xE1fica", 1, "standard-options"], [1, "standard-option", 3, "selected"], [1, "mb-3"], ["id", "references-label", 1, "form-label", "fw-semibold"], [1, "editor-shell"], ["role", "toolbar", "aria-label", "Formata\xE7\xE3o do texto", 1, "editor-toolbar"], ["type", "button", "title", "Negrito", "aria-label", "Aplicar negrito", 1, "format-button", "fw-bold", 3, "mousedown", "disabled"], ["type", "button", "title", "It\xE1lico", "aria-label", "Aplicar it\xE1lico", 1, "format-button", "fst-italic", 3, "mousedown", "disabled"], ["contenteditable", "true", "role", "textbox", "aria-labelledby", "references-label", "aria-multiline", "true", "data-placeholder", "Digite ou cole uma ou mais refer\xEAncias aqui", 1, "rich-editor", 3, "input"], [1, "form-text"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-live", "polite", "aria-labelledby", "result-title", 1, "result", "mt-4"], ["id", "result-title", 1, "h5", "mb-3"], ["role", "alert", 1, "alert", "alert-danger", "mb-0"], [1, "text-body-secondary", "mb-0"], [1, "standard-option"], ["type", "radio", "name", "standard", 3, "ngModelChange", "value", "ngModel", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "tablist", "aria-label", "Visualiza\xE7\xE3o do retorno", 1, "result-tabs"], ["type", "button", "id", "result-tab", "role", "tab", "aria-controls", "result-panel", 1, "result-tab", 3, "click"], ["type", "button", "id", "json-tab", "role", "tab", "aria-controls", "json-panel", 1, "result-tab", 3, "click"], ["id", "result-panel", "role", "tabpanel", "aria-labelledby", "result-tab"], ["id", "json-panel", "role", "tabpanel", "aria-labelledby", "json-tab"], [1, "result-content", 3, "innerHTML"], [1, "result-content", "mb-0", "text-body-secondary"], [1, "result-content", "result-json", "mb-0"]], template: function ToolsNormalizeCitesPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2);
      \u0275\u0275element(2, "app-breadcrumbs", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "p", 5);
      \u0275\u0275text(5, "Ferramentas bibliogr\xE1ficas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Normaliza\xE7\xE3o de refer\xEAncias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " Cole suas refer\xEAncias, mantenha os destaques necess\xE1rios e escolha a norma desejada. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function ToolsNormalizeCitesPage_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.normalize());
      });
      \u0275\u0275elementStart(11, "fieldset", 9)(12, "legend", 10);
      \u0275\u0275text(13, "Norma bibliogr\xE1fica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275repeaterCreate(15, ToolsNormalizeCitesPage_For_16_Template, 4, 6, "label", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
      \u0275\u0275text(19, "Refer\xEAncias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "button", 17);
      \u0275\u0275listener("mousedown", function ToolsNormalizeCitesPage_Template_button_mousedown_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.format("bold", $event));
      });
      \u0275\u0275text(23, " B ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275listener("mousedown", function ToolsNormalizeCitesPage_Template_button_mousedown_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.format("italic", $event));
      });
      \u0275\u0275text(25, " I ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19, 0);
      \u0275\u0275listener("input", function ToolsNormalizeCitesPage_Template_div_input_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateText($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275text(29, "Selecione um trecho para aplicar negrito ou it\xE1lico.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 21);
      \u0275\u0275conditionalCreate(31, ToolsNormalizeCitesPage_Conditional_31_Template, 2, 0)(32, ToolsNormalizeCitesPage_Conditional_32_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "section", 22)(34, "h2", 23);
      \u0275\u0275text(35, "Resultado");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, ToolsNormalizeCitesPage_Conditional_36_Template, 2, 1, "div", 24)(37, ToolsNormalizeCitesPage_Conditional_37_Template, 8, 8)(38, ToolsNormalizeCitesPage_Conditional_38_Template, 2, 0, "p", 25);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(7, _c1));
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.standards);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("contenteditable", ctx.loading ? "false" : "true");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.hasText() || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 31 : 32);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.error && ctx.result === null ? 36 : ctx.result !== null || ctx.rawResponse ? 37 : 38);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, BreadcrumbsComponent, JsonPipe], styles: ["\n\n.normalize-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.normalize-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.normalize-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  text-transform: uppercase;\n}\n.normalize-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.standard-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n.standard-option[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.6rem;\n  cursor: pointer;\n  display: flex;\n  gap: 0.5rem;\n  min-width: 8rem;\n  padding: 0.65rem 0.9rem;\n}\n.standard-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--theme-link);\n  box-shadow: 0 0 0 1px var(--theme-link);\n}\n.editor-shell[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow: hidden;\n}\n.editor-shell[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--theme-link);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2);\n}\n.editor-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--theme-sand);\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.35rem;\n  padding: 0.45rem;\n}\n.format-button[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.35rem;\n  color: var(--theme-ink);\n  height: 2rem;\n  width: 2rem;\n}\n.format-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.format-button[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--theme-link);\n}\n.rich-editor[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  min-height: 16rem;\n  outline: 0;\n  overflow-wrap: anywhere;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.rich-editor[_ngcontent-%COMP%]:empty::before {\n  color: var(--theme-hint);\n  content: attr(data-placeholder);\n  pointer-events: none;\n}\n.result[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.5rem;\n}\n.result-content[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow-x: auto;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.result-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}\n.result-tab[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-hint);\n  font-weight: 600;\n  margin-bottom: -1px;\n  padding: 0.65rem 1rem;\n}\n.result-tab[_ngcontent-%COMP%]:hover, \n.result-tab[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-link);\n}\n.result-tab.active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.result-json[_ngcontent-%COMP%] {\n  font-family: var(--bs-font-monospace);\n  font-size: 0.875rem;\n  white-space: pre;\n}\n/*# sourceMappingURL=tools-normalize-cites.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsNormalizeCitesPage, [{
    type: Component,
    args: [{ selector: "app-tools-normalize-cites-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="normalize-wrap py-4" aria-labelledby="normalize-title">\r
  <div class="container">\r
    <app-breadcrumbs\r
      [labels]="{ tools: 'Ferramentas', normalize_cites: 'Normaliza\xE7\xE3o de refer\xEAncias' }"\r
    ></app-breadcrumbs>\r
\r
    <div class="normalize-card p-4 p-md-5">\r
      <p class="normalize-eyebrow mb-2">Ferramentas bibliogr\xE1ficas</p>\r
      <h1 id="normalize-title" class="h2 mb-2">Normaliza\xE7\xE3o de refer\xEAncias</h1>\r
      <p class="normalize-subtitle mb-4">\r
        Cole suas refer\xEAncias, mantenha os destaques necess\xE1rios e escolha a norma desejada.\r
      </p>\r
\r
      <form (ngSubmit)="normalize()">\r
        <fieldset class="mb-4">\r
          <legend class="h6 mb-2">Norma bibliogr\xE1fica</legend>\r
          <div class="standard-options" aria-label="Escolha a norma bibliogr\xE1fica">\r
            @for (item of standards; track item) {\r
              <label class="standard-option" [class.selected]="standard === item">\r
                <input\r
                  type="radio"\r
                  name="standard"\r
                  [value]="item"\r
                  [(ngModel)]="standard"\r
                  [disabled]="loading"\r
                />\r
                <span>{{ item }}</span>\r
              </label>\r
            }\r
          </div>\r
        </fieldset>\r
\r
        <div class="mb-3">\r
          <label id="references-label" class="form-label fw-semibold">Refer\xEAncias</label>\r
          <div class="editor-shell">\r
            <div class="editor-toolbar" role="toolbar" aria-label="Formata\xE7\xE3o do texto">\r
              <button\r
                type="button"\r
                class="format-button fw-bold"\r
                title="Negrito"\r
                aria-label="Aplicar negrito"\r
                [disabled]="loading"\r
                (mousedown)="format('bold', $event)"\r
              >\r
                B\r
              </button>\r
              <button\r
                type="button"\r
                class="format-button fst-italic"\r
                title="It\xE1lico"\r
                aria-label="Aplicar it\xE1lico"\r
                [disabled]="loading"\r
                (mousedown)="format('italic', $event)"\r
              >\r
                I\r
              </button>\r
            </div>\r
            <div\r
              #editor\r
              class="rich-editor"\r
              contenteditable="true"\r
              role="textbox"\r
              aria-labelledby="references-label"\r
              aria-multiline="true"\r
              data-placeholder="Digite ou cole uma ou mais refer\xEAncias aqui"\r
              [attr.contenteditable]="loading ? 'false' : 'true'"\r
              (input)="updateText($event)"\r
            ></div>\r
          </div>\r
          <div class="form-text">Selecione um trecho para aplicar negrito ou it\xE1lico.</div>\r
        </div>\r
\r
        <button type="submit" class="btn btn-primary" [disabled]="!hasText() || loading">\r
          @if (loading) {\r
            <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>\r
            Normalizando...\r
          } @else {\r
            Normalizar refer\xEAncias\r
          }\r
        </button>\r
      </form>\r
\r
      <section class="result mt-4" aria-live="polite" aria-labelledby="result-title">\r
        <h2 id="result-title" class="h5 mb-3">Resultado</h2>\r
        @if (error && result === null) {\r
          <div class="alert alert-danger mb-0" role="alert">{{ error }}</div>\r
        } @else if (result !== null || rawResponse) {\r
          @if (error) {\r
            <div class="alert alert-warning" role="alert">{{ error }}</div>\r
          }\r
          <div class="result-tabs" role="tablist" aria-label="Visualiza\xE7\xE3o do retorno">\r
            <button\r
              type="button"\r
              id="result-tab"\r
              class="result-tab"\r
              role="tab"\r
              [class.active]="activeTab === 'result'"\r
              [attr.aria-selected]="activeTab === 'result'"\r
              aria-controls="result-panel"\r
              (click)="selectTab('result')"\r
            >\r
              Resultado\r
            </button>\r
            <button\r
              type="button"\r
              id="json-tab"\r
              class="result-tab"\r
              role="tab"\r
              [class.active]="activeTab === 'json'"\r
              [attr.aria-selected]="activeTab === 'json'"\r
              aria-controls="json-panel"\r
              (click)="selectTab('json')"\r
            >\r
              JSON\r
            </button>\r
          </div>\r
\r
          @if (activeTab === 'result') {\r
            <div id="result-panel" role="tabpanel" aria-labelledby="result-tab">\r
              @if (resultHtml(); as html) {\r
                <div class="result-content" [innerHTML]="html"></div>\r
              } @else {\r
                <p class="result-content mb-0 text-body-secondary">\r
                  A resposta n\xE3o cont\xE9m um resultado textual para exibi\xE7\xE3o.\r
                </p>\r
              }\r
            </div>\r
          } @else {\r
            <div id="json-panel" role="tabpanel" aria-labelledby="json-tab">\r
              @if (result !== null) {\r
                <pre class="result-content result-json mb-0">{{ result | json }}</pre>\r
              } @else {\r
                <pre class="result-content result-json mb-0">{{ rawResponse }}</pre>\r
              }\r
            </div>\r
          }\r
        } @else {\r
          <p class="text-body-secondary mb-0">As refer\xEAncias normalizadas ser\xE3o exibidas aqui.</p>\r
        }\r
      </section>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-normalize-cites/tools-normalize-cites.page.scss */\n.normalize-wrap {\n  color: var(--theme-ink);\n}\n.normalize-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.normalize-eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  text-transform: uppercase;\n}\n.normalize-subtitle {\n  color: var(--theme-hint);\n}\n.standard-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n.standard-option {\n  align-items: center;\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.6rem;\n  cursor: pointer;\n  display: flex;\n  gap: 0.5rem;\n  min-width: 8rem;\n  padding: 0.65rem 0.9rem;\n}\n.standard-option.selected {\n  border-color: var(--theme-link);\n  box-shadow: 0 0 0 1px var(--theme-link);\n}\n.editor-shell {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow: hidden;\n}\n.editor-shell:focus-within {\n  border-color: var(--theme-link);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2);\n}\n.editor-toolbar {\n  align-items: center;\n  background: var(--theme-sand);\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.35rem;\n  padding: 0.45rem;\n}\n.format-button {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.35rem;\n  color: var(--theme-ink);\n  height: 2rem;\n  width: 2rem;\n}\n.format-button:hover:not(:disabled),\n.format-button:focus-visible {\n  border-color: var(--theme-link);\n}\n.rich-editor {\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  min-height: 16rem;\n  outline: 0;\n  overflow-wrap: anywhere;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.rich-editor:empty::before {\n  color: var(--theme-hint);\n  content: attr(data-placeholder);\n  pointer-events: none;\n}\n.result {\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.5rem;\n}\n.result-content {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  overflow-x: auto;\n  padding: 1rem;\n  white-space: pre-wrap;\n}\n.result-tabs {\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}\n.result-tab {\n  background: transparent;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-hint);\n  font-weight: 600;\n  margin-bottom: -1px;\n  padding: 0.65rem 1rem;\n}\n.result-tab:hover,\n.result-tab:focus-visible {\n  color: var(--theme-link);\n}\n.result-tab.active {\n  border-bottom-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.result-json {\n  font-family: var(--bs-font-monospace);\n  font-size: 0.875rem;\n  white-space: pre;\n}\n/*# sourceMappingURL=tools-normalize-cites.page.css.map */\n"] }]
  }], null, { editor: [{
    type: ViewChild,
    args: ["editor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsNormalizeCitesPage, { className: "ToolsNormalizeCitesPage", filePath: "src/app/pages/tools-normalize-cites/tools-normalize-cites.page.ts", lineNumber: 17 });
})();
export {
  ToolsNormalizeCitesPage
};
//# sourceMappingURL=chunk-MA5DC5YS.mjs.map
