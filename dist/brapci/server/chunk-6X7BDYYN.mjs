import './polyfills.server.mjs';
import {
  BreadcrumbsComponent
} from "./chunk-WCYYMEWF.mjs";
import {
  AuthService
} from "./chunk-KNBI7DSD.mjs";
import "./chunk-HFOHCKS4.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-FKOHU7FA.mjs";
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
} from "./chunk-TMIH7BOS.mjs";
import {
  __async
} from "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-txt4network/tools-txt4network.page.ts
var _c0 = () => ({ tools: "Ferramentas", txt4network: "An\xE1lise de Rede" });
function ToolsTxt4networkPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Arquivo carregado: ", ctx_r0.selectedFileName);
  }
}
function ToolsTxt4networkPage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ToolsTxt4networkPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
    \u0275\u0275text(1, " Analisando... ");
  }
}
function ToolsTxt4networkPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Analisar rede ");
  }
}
var ToolsTxt4networkPage = class _ToolsTxt4networkPage {
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
      if (!file)
        return;
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
  analyze() {
    const text = this.text.trim();
    if (!text || this.loading)
      return;
    const apiKey = this.auth.getLocalUser()?.token;
    if (!apiKey) {
      this.error = "Sua conta n\xE3o possui uma APIKEY v\xE1lida. Entre novamente para continuar.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.http.post("/api/tools/txt4network", { text }, {
      headers: new HttpHeaders({ APIKEY: apiKey }),
      params: new HttpParams().set("APIKEY", apiKey),
      observe: "response",
      responseType: "blob"
    }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => this.downloadResult(response),
      error: (error) => {
        this.error = error.status === 401 || error.status === 403 ? "APIKEY inv\xE1lida ou sem permiss\xE3o para realizar a an\xE1lise." : "N\xE3o foi poss\xEDvel analisar a rede. Tente novamente.";
      }
    });
  }
  downloadResult(response) {
    if (!response.body) {
      this.error = "A API n\xE3o retornou o arquivo da an\xE1lise.";
      return;
    }
    const contentDisposition = response.headers.get("content-disposition") ?? "";
    const headerFileName = /filename\*?=(?:UTF-8''|["'])?([^"';]+)/i.exec(contentDisposition)?.[1];
    const fileName = headerFileName ? decodeURIComponent(headerFileName.trim()) : this.defaultOutputFileName();
    const url = URL.createObjectURL(response.body);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }
  defaultOutputFileName() {
    const baseName = this.selectedFileName.replace(/\.[^.]+$/, "").trim();
    return `${baseName || "analise-de-rede"}.net`;
  }
  static \u0275fac = function ToolsTxt4networkPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsTxt4networkPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsTxt4networkPage, selectors: [["app-tools-txt4network-page"]], decls: 37, vars: 9, consts: [["aria-labelledby", "txt4network-title", 1, "txt4network-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "txt4network-card", "p-4", "p-md-5"], ["id", "txt4network-title", 1, "h2", "mb-2"], [1, "txt4network-subtitle", "mb-4"], [1, "row", "g-4", "align-items-start"], [1, "col-12", "col-lg-7"], [3, "ngSubmit"], [1, "mb-3"], ["for", "network-text", 1, "form-label", "fw-semibold"], ["id", "network-text", "name", "network", "rows", "8", "placeholder", "Cole aqui os dados da rede", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text"], ["for", "network-file", 1, "form-label", "fw-semibold"], ["id", "network-file", "type", "file", "accept", ".txt,.net,text/plain", 1, "form-control", 3, "change", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-labelledby", "network-instructions-title", 1, "col-12", "col-lg-5"], ["id", "network-instructions-title", 1, "h5", "mb-3"], [1, "instructions-card", "p-3"], [1, "mb-0", "ps-3"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ToolsTxt4networkPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "An\xE1lise de Rede");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Insira os dados da rede ou selecione um arquivo para gerar os indicadores de colabora\xE7\xE3o entre pesquisadores. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function ToolsTxt4networkPage_Template_form_ngSubmit_10_listener() {
        return ctx.analyze();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
      \u0275\u0275text(13, "Dados da rede");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "textarea", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ToolsTxt4networkPage_Template_textarea_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Informe os dados que ser\xE3o utilizados para calcular os indicadores da rede.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "label", 13);
      \u0275\u0275text(19, "Carregar arquivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 14);
      \u0275\u0275listener("change", function ToolsTxt4networkPage_Template_input_change_20_listener($event) {
        return ctx.loadFile($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ToolsTxt4networkPage_Conditional_21_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, ToolsTxt4networkPage_Conditional_22_Template, 2, 1, "div", 15);
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275conditionalCreate(24, ToolsTxt4networkPage_Conditional_24_Template, 2, 0)(25, ToolsTxt4networkPage_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "aside", 17)(27, "h2", 18);
      \u0275\u0275text(28, "Como utilizar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "ol", 20)(31, "li");
      \u0275\u0275text(32, "Insira os dados no campo ou carregue um arquivo.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, "Confira o conte\xFAdo antes de iniciar.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li");
      \u0275\u0275text(36, "Clique em \u201CAnalisar rede\u201D para baixar o resultado.");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.text);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedFileName ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.text.trim() || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 24 : 25);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BreadcrumbsComponent], styles: ["\n\n.txt4network-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.txt4network-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.txt4network-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.instructions-card[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.instructions-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 0.65rem;\n}\n/*# sourceMappingURL=tools-txt4network.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsTxt4networkPage, [{
    type: Component,
    args: [{ selector: "app-tools-txt4network-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="txt4network-wrap py-4" aria-labelledby="txt4network-title">
  <div class="container">
    <app-breadcrumbs [labels]="{ tools: 'Ferramentas', txt4network: 'An\xE1lise de Rede' }"></app-breadcrumbs>

    <div class="txt4network-card p-4 p-md-5">
      <h1 id="txt4network-title" class="h2 mb-2">An\xE1lise de Rede</h1>
      <p class="txt4network-subtitle mb-4">
        Insira os dados da rede ou selecione um arquivo para gerar os indicadores de colabora\xE7\xE3o entre pesquisadores.
      </p>

      <div class="row g-4 align-items-start">
        <div class="col-12 col-lg-7">
          <form (ngSubmit)="analyze()">
            <div class="mb-3">
              <label for="network-text" class="form-label fw-semibold">Dados da rede</label>
              <textarea id="network-text" name="network" class="form-control" rows="8" [(ngModel)]="text" [disabled]="loading" placeholder="Cole aqui os dados da rede" required></textarea>
              <div class="form-text">Informe os dados que ser\xE3o utilizados para calcular os indicadores da rede.</div>
            </div>

            <div class="mb-3">
              <label for="network-file" class="form-label fw-semibold">Carregar arquivo</label>
              <input id="network-file" class="form-control" type="file" accept=".txt,.net,text/plain" [disabled]="loading" (change)="loadFile($event)" />
              @if (selectedFileName) { <div class="form-text">Arquivo carregado: {{ selectedFileName }}</div> }
            </div>

            @if (error) { <div class="alert alert-danger" role="alert">{{ error }}</div> }

            <button type="submit" class="btn btn-primary" [disabled]="!text.trim() || loading">
              @if (loading) { <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> Analisando... }
              @else { Analisar rede }
            </button>
          </form>
        </div>

        <aside class="col-12 col-lg-5" aria-labelledby="network-instructions-title">
          <h2 id="network-instructions-title" class="h5 mb-3">Como utilizar</h2>
          <div class="instructions-card p-3">
            <ol class="mb-0 ps-3">
              <li>Insira os dados no campo ou carregue um arquivo.</li>
              <li>Confira o conte\xFAdo antes de iniciar.</li>
              <li>Clique em \u201CAnalisar rede\u201D para baixar o resultado.</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/tools-txt4network/tools-txt4network.page.scss */\n.txt4network-wrap {\n  color: var(--theme-ink);\n}\n.txt4network-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.txt4network-subtitle {\n  color: var(--theme-hint);\n}\ntextarea {\n  resize: vertical;\n}\n.instructions-card {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.65rem;\n}\n.instructions-card li + li {\n  margin-top: 0.65rem;\n}\n/*# sourceMappingURL=tools-txt4network.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsTxt4networkPage, { className: "ToolsTxt4networkPage", filePath: "src/app/pages/tools-txt4network/tools-txt4network.page.ts", lineNumber: 15 });
})();
export {
  ToolsTxt4networkPage
};
//# sourceMappingURL=chunk-6X7BDYYN.mjs.map
