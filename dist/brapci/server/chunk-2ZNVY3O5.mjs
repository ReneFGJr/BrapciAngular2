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
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TMIH7BOS.mjs";
import {
  __async
} from "./chunk-DTEGX4RB.mjs";

// src/app/pages/tools-txt4net/tools-txt4net.page.ts
var _c0 = () => ({ tools: "Ferramentas", txt4net: "Converter TXT para .NET (Autor)" });
function ToolsTxt4netPage_Conditional_21_Template(rf, ctx) {
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
function ToolsTxt4netPage_Conditional_22_Template(rf, ctx) {
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
function ToolsTxt4netPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
    \u0275\u0275text(1, " Convertendo... ");
  }
}
function ToolsTxt4netPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Converter e baixar .NET ");
  }
}
var ToolsTxt4netPage = class _ToolsTxt4netPage {
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
    this.http.post("/api/tools/txt4net", { text }, {
      headers: new HttpHeaders({ APIKEY: apiKey }),
      params: new HttpParams().set("APIKEY", apiKey),
      observe: "response",
      responseType: "blob"
    }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => this.downloadResult(response),
      error: (error) => {
        this.error = error.status === 401 || error.status === 403 ? "APIKEY inv\xE1lida ou sem permiss\xE3o para realizar a convers\xE3o." : "N\xE3o foi poss\xEDvel converter o texto. Tente novamente.";
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
    return `${baseName || "autores"}.net`;
  }
  static \u0275fac = function ToolsTxt4netPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolsTxt4netPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsTxt4netPage, selectors: [["app-tools-txt4net-page"]], decls: 31, vars: 9, consts: [["aria-labelledby", "txt4net-title", 1, "txt4net-wrap", "py-4"], [1, "container"], [3, "labels"], [1, "txt4net-card", "p-4", "p-md-5"], ["id", "txt4net-title", 1, "h2", "mb-2"], [1, "txt4net-subtitle", "mb-4"], [1, "row", "g-4", "align-items-start"], [1, "col-12", "col-lg-7"], [3, "ngSubmit"], [1, "mb-3"], ["for", "authors-text", 1, "form-label", "fw-semibold"], ["id", "authors-text", "name", "authors", "rows", "8", "placeholder", "Exemplo: Maria da Silva; Jo\xE3o dos Santos; Ana Oliveira", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text"], ["for", "authors-file", 1, "form-label", "fw-semibold"], ["id", "authors-file", "type", "file", "accept", ".txt,text/plain", 1, "form-control", 3, "change", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-labelledby", "instructions-video-title", 1, "col-12", "col-lg-5"], ["id", "instructions-video-title", 1, "h5", "mb-3"], [1, "ratio", "ratio-16x9", "video-frame"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/qOUddBznpRU`, "title", "Instru\xE7\xF5es para converter TXT para .NET", "loading", "lazy", "referrerpolicy", "strict-origin-when-cross-origin", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", ""], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ToolsTxt4netPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Converter TXT para .NET (Autor)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Insira os nomes dos autores separados por ponto e v\xEDrgula (;), ou selecione um arquivo de texto. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function ToolsTxt4netPage_Template_form_ngSubmit_10_listener() {
        return ctx.convert();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
      \u0275\u0275text(13, "Nomes dos autores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "textarea", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ToolsTxt4netPage_Template_textarea_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Separe cada nome de autor usando ponto e v\xEDrgula (;).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "label", 13);
      \u0275\u0275text(19, "Carregar arquivo TXT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 14);
      \u0275\u0275listener("change", function ToolsTxt4netPage_Template_input_change_20_listener($event) {
        return ctx.loadFile($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ToolsTxt4netPage_Conditional_21_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, ToolsTxt4netPage_Conditional_22_Template, 2, 1, "div", 15);
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275conditionalCreate(24, ToolsTxt4netPage_Conditional_24_Template, 2, 0)(25, ToolsTxt4netPage_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "aside", 17)(27, "h2", 18);
      \u0275\u0275text(28, "V\xEDdeo com instru\xE7\xF5es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275element(30, "iframe", 20);
      \u0275\u0275elementEnd()()()()()();
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
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BreadcrumbsComponent], styles: ["\n\n.txt4net-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.txt4net-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.txt4net-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.video-frame[_ngcontent-%COMP%] {\n  background: #000;\n  border-radius: 0.65rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=tools-txt4net.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolsTxt4netPage, [{
    type: Component,
    args: [{ selector: "app-tools-txt4net-page", imports: [CommonModule, FormsModule, BreadcrumbsComponent], template: `<section class="txt4net-wrap py-4" aria-labelledby="txt4net-title">\r
  <div class="container">\r
    <app-breadcrumbs\r
      [labels]="{ tools: 'Ferramentas', txt4net: 'Converter TXT para .NET (Autor)' }"\r
    ></app-breadcrumbs>\r
\r
    <div class="txt4net-card p-4 p-md-5">\r
      <h1 id="txt4net-title" class="h2 mb-2">Converter TXT para .NET (Autor)</h1>\r
      <p class="txt4net-subtitle mb-4">\r
        Insira os nomes dos autores separados por ponto e v\xEDrgula (;), ou selecione um arquivo de texto.\r
      </p>\r
\r
      <div class="row g-4 align-items-start">\r
        <div class="col-12 col-lg-7">\r
          <form (ngSubmit)="convert()">\r
        <div class="mb-3">\r
          <label for="authors-text" class="form-label fw-semibold">Nomes dos autores</label>\r
          <textarea\r
            id="authors-text"\r
            name="authors"\r
            class="form-control"\r
            rows="8"\r
            [(ngModel)]="text"\r
            [disabled]="loading"\r
            placeholder="Exemplo: Maria da Silva; Jo\xE3o dos Santos; Ana Oliveira"\r
            required\r
          ></textarea>\r
          <div class="form-text">Separe cada nome de autor usando ponto e v\xEDrgula (;).</div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="authors-file" class="form-label fw-semibold">Carregar arquivo TXT</label>\r
          <input\r
            id="authors-file"\r
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
\r
        <aside class="col-12 col-lg-5" aria-labelledby="instructions-video-title">\r
          <h2 id="instructions-video-title" class="h5 mb-3">V\xEDdeo com instru\xE7\xF5es</h2>\r
          <div class="ratio ratio-16x9 video-frame">\r
            <iframe\r
              src="https://www.youtube-nocookie.com/embed/qOUddBznpRU"\r
              title="Instru\xE7\xF5es para converter TXT para .NET"\r
              loading="lazy"\r
              referrerpolicy="strict-origin-when-cross-origin"\r
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\r
              allowfullscreen\r
            ></iframe>\r
          </div>\r
        </aside>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/tools-txt4net/tools-txt4net.page.scss */\n.txt4net-wrap {\n  color: var(--theme-ink);\n}\n.txt4net-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.txt4net-subtitle {\n  color: var(--theme-hint);\n}\ntextarea {\n  resize: vertical;\n}\n.video-frame {\n  background: #000;\n  border-radius: 0.65rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=tools-txt4net.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsTxt4netPage, { className: "ToolsTxt4netPage", filePath: "src/app/pages/tools-txt4net/tools-txt4net.page.ts", lineNumber: 15 });
})();
export {
  ToolsTxt4netPage
};
//# sourceMappingURL=chunk-2ZNVY3O5.mjs.map
