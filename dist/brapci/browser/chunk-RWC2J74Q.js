import {
  AuthService
} from "./chunk-EAX4WRIZ.js";
import {
  BreadcrumbsComponent
} from "./chunk-NVI7LSCX.js";
import "./chunk-NIH3DZUO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-IZFBC5RH.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  HttpParams,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JXUQBXUX.js";
import {
  __async
} from "./chunk-UKK5MWW6.js";

// src/app/pages/tools-term4net/tools-term4net.page.ts
var _c0 = () => ({ tools: "Ferramentas", term4net: "Converter TXT para .NET (Assunto)" });
function ToolsTerm4netPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Arquivo carregado: ", ctx_r0.selectedFileName);
  }
}
function ToolsTerm4netPage_Conditional_20_Template(rf, ctx) {
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
function ToolsTerm4netPage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
    \u0275\u0275text(1, " Convertendo... ");
  }
}
function ToolsTerm4netPage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Converter e baixar .NET ");
  }
}
var ToolsTerm4netPage = class _ToolsTerm4netPage {
  http = inject(HttpClient);
  auth = inject(AuthService);
  text = "";
  selectedFileName = "";
  error = "";
  loading = false;
  loadFile(event) {
    return __async(this, null, function* () {
      const input = event.target;
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      this.error = "";
      try {
        this.text = yield file.text();
        this.selectedFileName = file.name;
      } catch {
        this.error = "N\xE3o foi poss\xEDvel ler o arquivo selecionado.";
        this.selectedFileName = "";
      }
    });
  }
  convert() {
    const text = this.text.trim();
    if (!text || this.loading) {
      return;
    }
    const apiKey = this.auth.getLocalUser()?.token;
    if (!apiKey) {
      this.error = "Sua conta n\xE3o possui uma APIKEY v\xE1lida. Entre novamente para continuar.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.http.post("/api/tools/term4net", { text }, {
      headers: new HttpHeaders({ APIKEY: apiKey }),
      params: new HttpParams().set("APIKEY", apiKey),
      observe: "response",
      responseType: "blob"
    }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => this.downloadResult(response),
      error: (error) => {
        this.error = error.status === 401 || error.status === 403 ? "APIKEY inv\xE1lida ou sem permiss\xE3o para realizar a convers\xE3o." : "N\xE3o foi poss\xEDvel converter os assuntos. Tente novamente.";
      }
    });
  }
  downloadResult(response) {
    if (!response.body) {
      this.error = "A API n\xE3o retornou o arquivo convertido.";
      return;
    }
    const contentDisposition = response.headers.get("content-disposition") ?? "";
    const headerFileName = /filename\*?=(?:UTF-8''|["'])?([^"';]+)/i.exec(contentDisposition)?.[1];
    const fileName = headerFileName ? decodeURIComponent(headerFileName.trim()) : this.defaultOutputFileName();
    const normalizedFileName = fileName.toLowerCase().endsWith(".net") ? fileName : `${fileName}.net`;
    const url = URL.createObjectURL(response.body);
    const link = document.createElement("a");
    link.href = url;
    link.download = normalizedFileName;
    link.click();
    URL.revokeObjectURL(url);
  }
  defaultOutputFileName() {
    const baseName = this.selectedFileName.replace(/\.[^.]+$/, "").trim();
    return `${baseName || "assuntos"}.net`;
  }
  static \u0275fac = function ToolsTerm4netPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsTerm4netPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsTerm4netPage, selectors: [["app-tools-term4net-page"]], decls: 24, vars: 9, consts: [["aria-labelledby", "term4net-title", 1, "term4net-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "term4net-card", "p-4", "p-md-5"], ["id", "term4net-title", 1, "h2", "mb-2"], [1, "term4net-subtitle", "mb-4"], [3, "ngSubmit"], [1, "mb-3"], ["for", "terms-text", 1, "form-label", "fw-semibold"], ["id", "terms-text", "name", "terms", "rows", "8", "placeholder", "Exemplo: Ci\xEAncia da informa\xE7\xE3o; Bibliometria; Gest\xE3o do conhecimento", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text"], ["for", "terms-file", 1, "form-label", "fw-semibold"], ["id", "terms-file", "type", "file", "accept", ".txt,text/plain", 1, "form-control", 3, "change", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ToolsTerm4netPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Converter TXT para .NET (Assunto)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Insira os assuntos separados por ponto e v\xEDrgula (;), ou selecione um arquivo de texto. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ToolsTerm4netPage_Template_form_ngSubmit_8_listener() {
        return ctx.convert();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Assuntos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "textarea", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ToolsTerm4netPage_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275text(14, "Separe cada assunto usando ponto e v\xEDrgula (;).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 11);
      \u0275\u0275text(17, "Carregar arquivo TXT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 12);
      \u0275\u0275listener("change", function ToolsTerm4netPage_Template_input_change_18_listener($event) {
        return ctx.loadFile($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ToolsTerm4netPage_Conditional_19_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, ToolsTerm4netPage_Conditional_20_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275conditionalCreate(22, ToolsTerm4netPage_Conditional_22_Template, 2, 0)(23, ToolsTerm4netPage_Conditional_23_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.text);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedFileName ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.text.trim() || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 22 : 23);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BreadcrumbsComponent], styles: ["\n\n.term4net-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.term4net-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.term4net-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n/*# sourceMappingURL=tools-term4net.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsTerm4netPage, [{
    type: Component,
    args: [{ selector: "app-tools-term4net-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="term4net-wrap py-4" aria-labelledby="term4net-title">\r
  <div class="container">\r
    <app-breadcrumbs\r
      [labels]="{ tools: 'Ferramentas', term4net: 'Converter TXT para .NET (Assunto)' }"\r
    ></app-breadcrumbs>\r
\r
    <div class="term4net-card p-4 p-md-5">\r
      <h1 id="term4net-title" class="h2 mb-2">Converter TXT para .NET (Assunto)</h1>\r
      <p class="term4net-subtitle mb-4">\r
        Insira os assuntos separados por ponto e v\xEDrgula (;), ou selecione um arquivo de texto.\r
      </p>\r
\r
      <form (ngSubmit)="convert()">\r
        <div class="mb-3">\r
          <label for="terms-text" class="form-label fw-semibold">Assuntos</label>\r
          <textarea\r
            id="terms-text"\r
            name="terms"\r
            class="form-control"\r
            rows="8"\r
            [(ngModel)]="text"\r
            [disabled]="loading"\r
            placeholder="Exemplo: Ci\xEAncia da informa\xE7\xE3o; Bibliometria; Gest\xE3o do conhecimento"\r
            required\r
          ></textarea>\r
          <div class="form-text">Separe cada assunto usando ponto e v\xEDrgula (;).</div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="terms-file" class="form-label fw-semibold">Carregar arquivo TXT</label>\r
          <input\r
            id="terms-file"\r
            class="form-control"\r
            type="file"\r
            accept=".txt,text/plain"\r
            [disabled]="loading"\r
            (change)="loadFile($event)"\r
          />\r
          @if (selectedFileName) {\r
            <div class="form-text">Arquivo carregado: {{ selectedFileName }}</div>\r
          }\r
        </div>\r
\r
        @if (error) {\r
          <div class="alert alert-danger" role="alert">{{ error }}</div>\r
        }\r
\r
        <button type="submit" class="btn btn-primary" [disabled]="!text.trim() || loading">\r
          @if (loading) {\r
            <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>\r
            Convertendo...\r
          } @else {\r
            Converter e baixar .NET\r
          }\r
        </button>\r
      </form>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-term4net/tools-term4net.page.scss */\n.term4net-wrap {\n  color: var(--theme-ink);\n}\n.term4net-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.term4net-subtitle {\n  color: var(--theme-hint);\n}\ntextarea {\n  resize: vertical;\n}\n/*# sourceMappingURL=tools-term4net.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsTerm4netPage, { className: "ToolsTerm4netPage", filePath: "src/app/pages/tools-term4net/tools-term4net.page.ts", lineNumber: 15 });
})();
export {
  ToolsTerm4netPage
};
//# sourceMappingURL=chunk-RWC2J74Q.js.map
