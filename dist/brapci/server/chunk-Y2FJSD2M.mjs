import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-ZBXFVRSR.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-XW3PUGC7.mjs";
import "./chunk-YPPRAXG6.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-KBHAFJY6.mjs";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  HttpParams,
  JsonPipe,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZBQU5EHV.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-text-specialist/tools-text-specialist.page.ts
var _c0 = () => ({ tools_text: "Ferramentas textuais", specialist: "Busca por especialista" });
function ToolsTextSpecialistPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
    \u0275\u0275text(1, " Analisando... ");
  }
}
function ToolsTextSpecialistPage_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Analisar ");
  }
}
function ToolsTextSpecialistPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ToolsTextSpecialistPage_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.result);
  }
}
function ToolsTextSpecialistPage_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 17);
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
function ToolsTextSpecialistPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToolsTextSpecialistPage_Conditional_20_Conditional_0_Template, 2, 1, "div", 16)(1, ToolsTextSpecialistPage_Conditional_20_Conditional_1_Template, 3, 3, "pre", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isTextResult() ? 0 : 1);
  }
}
function ToolsTextSpecialistPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "O resultado da an\xE1lise ser\xE1 exibido aqui.");
    \u0275\u0275elementEnd();
  }
}
var ToolsTextSpecialistPage = class _ToolsTextSpecialistPage {
  http = inject(HttpClient);
  auth = inject(AuthService);
  text = "";
  result = null;
  error = "";
  loading = false;
  analyze() {
    const text = this.text.trim();
    if (!text || this.loading) {
      return;
    }
    const apiKey = this.auth.getLocalUser()?.token;
    if (!apiKey) {
      this.error = "Sua conta n\xE3o possui uma APIKEY v\xE1lida. Entre novamente para continuar.";
      this.result = null;
      return;
    }
    this.loading = true;
    this.error = "";
    this.result = null;
    const options = {
      headers: new HttpHeaders({ APIKEY: apiKey }),
      params: new HttpParams().set("APIKEY", apiKey)
    };
    this.http.post("/api/tools/specialist", { text }, options).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => this.result = response,
      error: (error) => {
        this.error = error.status === 401 || error.status === 403 ? "APIKEY inv\xE1lida ou sem permiss\xE3o para realizar a an\xE1lise." : "N\xE3o foi poss\xEDvel analisar o texto. Tente novamente.";
      }
    });
  }
  isTextResult() {
    return typeof this.result === "string";
  }
  static \u0275fac = function ToolsTextSpecialistPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsTextSpecialistPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsTextSpecialistPage, selectors: [["app-tools-text-specialist-page"]], decls: 22, vars: 7, consts: [["aria-labelledby", "specialist-title", 1, "specialist-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "specialist-card", "p-4", "p-md-5"], ["id", "specialist-title", 1, "h2", "mb-2"], [1, "specialist-subtitle", "mb-4"], [3, "ngSubmit"], [1, "mb-3"], ["for", "specialist-text", 1, "form-label", "fw-semibold"], ["id", "specialist-text", "name", "text", "rows", "15", "placeholder", "Digite ou cole o texto aqui", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-live", "polite", 1, "result", "mt-4"], [1, "h5", "mb-3"], ["role", "alert", 1, "alert", "alert-danger", "mb-0"], [1, "text-body-secondary", "mb-0"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "result-content"], [1, "result-content", "mb-0"]], template: function ToolsTextSpecialistPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Busca por especialista");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Informe o texto que deseja analisar para localizar especialistas relacionados ao conte\xFAdo. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ToolsTextSpecialistPage_Template_form_ngSubmit_8_listener() {
        return ctx.analyze();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Texto para an\xE1lise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "textarea", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ToolsTextSpecialistPage_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275conditionalCreate(14, ToolsTextSpecialistPage_Conditional_14_Template, 2, 0)(15, ToolsTextSpecialistPage_Conditional_15_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "h2", 12);
      \u0275\u0275text(18, "Resultado");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ToolsTextSpecialistPage_Conditional_19_Template, 2, 1, "div", 13)(20, ToolsTextSpecialistPage_Conditional_20_Template, 2, 1)(21, ToolsTextSpecialistPage_Conditional_21_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.text);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.text.trim() || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 14 : 15);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.error ? 19 : ctx.result !== null ? 20 : 21);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BreadcrumbsComponent, JsonPipe], styles: ["\n\n.specialist-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.specialist-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.specialist-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.result[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  min-height: 8rem;\n  padding: 1rem;\n}\n.result-content[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=tools-text-specialist.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsTextSpecialistPage, [{
    type: Component,
    args: [{ selector: "app-tools-text-specialist-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="specialist-wrap py-4" aria-labelledby="specialist-title">\r
  <div class="container">\r
    <app-breadcrumbs\r
      [labels]="{ tools_text: 'Ferramentas textuais', specialist: 'Busca por especialista' }"\r
    ></app-breadcrumbs>\r
\r
    <div class="specialist-card p-4 p-md-5">\r
      <h1 id="specialist-title" class="h2 mb-2">Busca por especialista</h1>\r
      <p class="specialist-subtitle mb-4">\r
        Informe o texto que deseja analisar para localizar especialistas relacionados ao conte\xFAdo.\r
      </p>\r
\r
      <form (ngSubmit)="analyze()">\r
        <div class="mb-3">\r
          <label for="specialist-text" class="form-label fw-semibold">Texto para an\xE1lise</label>\r
          <textarea\r
            id="specialist-text"\r
            name="text"\r
            class="form-control"\r
            rows="15"\r
            [(ngModel)]="text"\r
            [disabled]="loading"\r
            placeholder="Digite ou cole o texto aqui"\r
            required\r
          ></textarea>\r
        </div>\r
\r
        <button type="submit" class="btn btn-primary" [disabled]="!text.trim() || loading">\r
          @if (loading) {\r
            <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>\r
            Analisando...\r
          } @else {\r
            Analisar\r
          }\r
        </button>\r
      </form>\r
\r
      <div class="result mt-4" aria-live="polite">\r
        <h2 class="h5 mb-3">Resultado</h2>\r
\r
        @if (error) {\r
          <div class="alert alert-danger mb-0" role="alert">{{ error }}</div>\r
        } @else if (result !== null) {\r
          @if (isTextResult()) {\r
            <div class="result-content">{{ result }}</div>\r
          } @else {\r
            <pre class="result-content mb-0">{{ result | json }}</pre>\r
          }\r
        } @else {\r
          <p class="text-body-secondary mb-0">O resultado da an\xE1lise ser\xE1 exibido aqui.</p>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-text-specialist/tools-text-specialist.page.scss */\n.specialist-wrap {\n  color: var(--theme-ink);\n}\n.specialist-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.specialist-subtitle {\n  color: var(--theme-hint);\n}\ntextarea {\n  resize: vertical;\n}\n.result {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n  min-height: 8rem;\n  padding: 1rem;\n}\n.result-content {\n  margin: 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=tools-text-specialist.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsTextSpecialistPage, { className: "ToolsTextSpecialistPage", filePath: "src/app/pages/tools-text-specialist/tools-text-specialist.page.ts", lineNumber: 15 });
})();
export {
  ToolsTextSpecialistPage
};
//# sourceMappingURL=chunk-Y2FJSD2M.mjs.map
