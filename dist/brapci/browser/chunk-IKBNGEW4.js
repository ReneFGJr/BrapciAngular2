import {
  AuthService
} from "./chunk-NXK6FIJG.js";
import {
  BrapciApiService
} from "./chunk-ZPUTVDRH.js";
import {
  BreadcrumbsComponent
} from "./chunk-NI4QFABF.js";
import "./chunk-YP4CUC5U.js";
import "./chunk-UQTTNLOX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MMYNVZIM.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Q2GW23SR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// src/app/components/form-file-input/form-file-input.component.ts
function FormFileInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1, "Enviando arquivo...");
    \u0275\u0275domElementEnd();
  }
}
var FormFileInputComponent = class _FormFileInputComponent {
  api = inject(BrapciApiService);
  action = "";
  message = "Selecione um arquivo";
  property = "hasAuthor";
  dataset = new EventEmitter();
  uploading = false;
  upload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !this.action) {
      return;
    }
    const body = new FormData();
    body.append("file", file, file.name);
    body.append("property", this.property);
    this.uploading = true;
    this.api.post(`sendfile/${this.action}`, body).pipe(finalize(() => this.uploading = false)).subscribe({
      next: (response) => {
        const savedFile = response["file"] ?? response["fileO"] ?? file.name;
        this.dataset.emit(__spreadProps(__spreadValues({}, response), { file: savedFile }));
      },
      error: () => this.dataset.emit({ status: "500", file: file.name })
    });
  }
  static \u0275fac = function FormFileInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFileInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFileInputComponent, selectors: [["app-form-file-input"]], inputs: { action: "action", message: "message", property: "property" }, outputs: { dataset: "dataset" }, decls: 5, vars: 3, consts: [[1, "upload-body"], ["for", "book-file", 1, "form-label"], ["id", "book-file", "type", "file", 1, "form-control", 3, "change", "disabled"], ["role", "status", 1, "small", "text-muted", "mt-2"]], template: function FormFileInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "input", 2);
      \u0275\u0275domListener("change", function FormFileInputComponent_Template_input_change_3_listener($event) {
        return ctx.upload($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, FormFileInputComponent_Conditional_4_Template, 2, 0, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.uploading ? 4 : -1);
    }
  }, styles: ["\n\n.upload-body[_ngcontent-%COMP%] {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .upload-body[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .upload-body[_ngcontent-%COMP%] {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n  color: #d6c4b2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: rgba(232, 213, 190, 0.28);\n  background-color: #211c18;\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::file-selector-button, body.theme-master.theme-dark   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::file-selector-button {\n  border-color: rgba(232, 213, 190, 0.22);\n  background-color: #342b24;\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .text-muted[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #bbaa99 !important;\n}\n/*# sourceMappingURL=form-file-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFileInputComponent, [{
    type: Component,
    args: [{ selector: "app-form-file-input", standalone: true, template: `
    <div class="upload-body">
      <label for="book-file" class="form-label">{{ message }}</label>
      <input
        id="book-file"
        type="file"
        class="form-control"
        [disabled]="uploading"
        (change)="upload($event)"
      />
      @if (uploading) {
        <div class="small text-muted mt-2" role="status">Enviando arquivo...</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;7d7aaa8d3bb4dc14529146d87085af1f7ae9e5182ba3de683fd68f50282607ae;C:/Projetos/www/BrapciAngular2/src/app/components/form-file-input/form-file-input.component.ts */\n.upload-body {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\n:host-context(body.theme-master.theme-dark) .upload-body {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n  color: #d6c4b2;\n}\n:host-context(body.theme-master.theme-dark) .form-control {\n  border-color: rgba(232, 213, 190, 0.28);\n  background-color: #211c18;\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .form-control::file-selector-button {\n  border-color: rgba(232, 213, 190, 0.22);\n  background-color: #342b24;\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .text-muted {\n  color: #bbaa99 !important;\n}\n/*# sourceMappingURL=form-file-input.component.css.map */\n"] }]
  }], null, { action: [{
    type: Input,
    args: [{ required: true }]
  }], message: [{
    type: Input
  }], property: [{
    type: Input
  }], dataset: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFileInputComponent, { className: "FormFileInputComponent", filePath: "src/app/components/form-file-input/form-file-input.component.ts", lineNumber: 54 });
})();

// src/app/components/loading-spinner/loading-spinner.component.ts
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  static \u0275fac = function LoadingSpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingSpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 4, vars: 0, consts: [["role", "status", 1, "d-flex", "justify-content-center", "align-items-center", "gap-2", "py-4"], ["aria-hidden", "true", 1, "spinner-border", "text-primary"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "span", 1);
      \u0275\u0275domElementStart(2, "span");
      \u0275\u0275text(3, "Processando...");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "app-loading-spinner",
      standalone: true,
      template: `
    <div class="d-flex justify-content-center align-items-center gap-2 py-4" role="status">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <span>Processando...</span>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "src/app/components/loading-spinner/loading-spinner.component.ts", lineNumber: 13 });
})();

// src/app/components/upload-file/upload-file.component.ts
function UploadFileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-file-input", 7);
    \u0275\u0275listener("dataset", function UploadFileComponent_Conditional_6_Template_app_form_file_input_dataset_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateDataset($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("action", ctx_r1.action);
  }
}
function UploadFileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function UploadFileComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.toolsName);
  }
}
function UploadFileComponent_Conditional_9_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Por favor, insira um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function UploadFileComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 8);
    \u0275\u0275text(2, "Confirma\xE7\xE3o de autoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function UploadFileComponent_Conditional_9_Conditional_7_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmitEmail());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "label", 14);
    \u0275\u0275text(6, "Nome completo do autor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275elementStart(8, "label", 16);
    \u0275\u0275text(9, "Informe seu e-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 17);
    \u0275\u0275conditionalCreate(11, UploadFileComponent_Conditional_9_Conditional_7_Conditional_11_Template, 2, 0, "div", 18);
    \u0275\u0275elementStart(12, "label", 19);
    \u0275\u0275element(13, "input", 20);
    \u0275\u0275text(14, " Concordo com os termos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275text(16, " Enviar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.emailForm.controls.email.invalid && ctx_r1.emailForm.controls.email.touched ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.emailForm.invalid);
  }
}
function UploadFileComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UploadFileComponent_Conditional_9_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.process());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.buttonName, " ");
  }
}
function UploadFileComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "span", 8);
    \u0275\u0275text(3, "Nome do arquivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, UploadFileComponent_Conditional_9_Conditional_7_Template, 17, 3, "div", 10)(8, UploadFileComponent_Conditional_9_Conditional_8_Template, 2, 1, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("title", ctx_r1.dataset["file"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.displayFileName(ctx_r1.dataset["file"]));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailSend ? 7 : 8);
  }
}
function UploadFileComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-loading-spinner");
    \u0275\u0275elementEnd();
  }
}
function UploadFileComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "Prezado(a), ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ",");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " A submiss\xE3o de seu livro ");
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " foi realizada com sucesso! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Um e-mail foi enviado para sua conta, autorizando a publica\xE7\xE3o.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "strong");
    \u0275\u0275text(15, "Sucesso:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Seu livro foi enviado com \xEAxito. Assim que recebermos o retorno do e-mail (");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, ") de confirma\xE7\xE3o, iniciaremos o processo de indexa\xE7\xE3o. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25)(21, "strong");
    \u0275\u0275text(22, "Aten\xE7\xE3o:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Caso n\xE3o encontre o e-mail em sua caixa de entrada, verifique a caixa de spam. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 26);
    \u0275\u0275listener("click", function UploadFileComponent_Conditional_11_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.restart());
    });
    \u0275\u0275text(25, "REINICIAR");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dataset["name"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.dataset["file"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.displayFileName(ctx_r1.dataset["file"]));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.dataset["email"]);
  }
}
var UploadFileComponent = class _UploadFileComponent {
  api = inject(BrapciApiService);
  auth = inject(AuthService);
  fb = inject(FormBuilder);
  toolsName = "Submiss\xE3o de livro";
  toolsNameDescription = "Envie o arquivo do livro para avalia\xE7\xE3o da equipe da Brapci Livros.";
  buttonName = "Processar arquivo";
  endpoint = "brapci/book/submit";
  action = "bookSubmit";
  emailSend = true;
  dataset = null;
  data;
  status = 0;
  errorMessage = "";
  emailForm = this.fb.nonNullable.group({
    name: [this.auth.getLocalUser()?.name ?? "", Validators.required],
    email: [this.auth.getLocalUser()?.username ?? "", [Validators.required, Validators.email]],
    agree: [false, Validators.requiredTrue]
  });
  updateDataset(newDataset) {
    this.dataset = newDataset;
    if (String(newDataset["status"] ?? "") === "500") {
      this.errorMessage = "Erro no processamento do arquivo.";
      return;
    }
    this.errorMessage = "";
    this.status = 1;
  }
  onSubmitEmail() {
    if (this.emailForm.invalid || !this.dataset) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.submit(__spreadValues(__spreadValues({}, this.dataset), this.emailForm.getRawValue()), "brapci/book/submit");
  }
  process() {
    console.log("Processing dataset:", this.dataset);
    if (this.dataset) {
      this.submit(this.dataset, this.endpoint);
    }
  }
  restart() {
    this.status = 0;
    this.dataset = null;
    this.data = null;
    this.errorMessage = "";
    this.emailForm.controls.agree.setValue(false);
  }
  displayFileName(value, maxLength = 55) {
    const fileName = String(value ?? "");
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const extensionIndex = fileName.lastIndexOf(".");
    const extension = extensionIndex > 0 ? fileName.substring(extensionIndex) : "";
    const availableLength = Math.max(12, maxLength - extension.length - 3);
    return `${fileName.substring(0, availableLength)}...${extension}`;
  }
  submit(payload, endpoint) {
    this.dataset = payload;
    this.status = 2;
    this.errorMessage = "";
    this.api.post(endpoint, payload).pipe(finalize(() => void 0)).subscribe({
      next: (response) => {
        this.data = response;
        this.status = 3;
      },
      error: () => {
        this.status = 1;
        this.errorMessage = "N\xE3o foi poss\xEDvel concluir a submiss\xE3o. Tente novamente.";
      }
    });
  }
  static \u0275fac = function UploadFileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadFileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadFileComponent, selectors: [["app-upload-file"]], inputs: { toolsName: "toolsName", toolsNameDescription: "toolsNameDescription", buttonName: "buttonName", endpoint: "endpoint", action: "action", emailSend: "emailSend" }, decls: 12, vars: 8, consts: [[1, "col-lg-6", "col-12"], ["aria-labelledby", "upload-title", 1, "livros-submit-card", "h-100"], ["id", "upload-title", 1, "mb-2"], ["message", "Anexe o arquivo do livro", 3, "action"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], [1, "upload-head", "mt-3"], [1, "upload-process"], ["message", "Anexe o arquivo do livro", 3, "dataset", "action"], [1, "field-hint"], [1, "big", 3, "title"], [1, "pt-3", "pb-2"], ["type", "button", 1, "btn", "btn-primary", "full", "mt-3"], [1, "mt-2", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["id", "name", "type", "text", "formControlName", "name", 1, "form-control"], ["for", "email", 1, "form-label", "mt-3"], ["id", "email", "type", "email", "formControlName", "email", 1, "form-control"], [1, "text-danger"], ["for", "agree", 1, "form-check-label", "mt-3"], ["id", "agree", "type", "checkbox", "formControlName", "agree", 1, "form-check-input", "me-2"], ["type", "submit", 1, "btn", "btn-primary", "full", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "full", "mt-3", 3, "click"], [3, "title"], [1, "alert", "alert-success", "mt-2"], [1, "alert", "alert-warning", "mt-2"], ["type", "button", 1, "btn", "btn-secondary", "full", "mt-2", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, UploadFileComponent_Conditional_6_Template, 1, 1, "app-form-file-input", 3);
      \u0275\u0275conditionalCreate(7, UploadFileComponent_Conditional_7_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(8, UploadFileComponent_Conditional_8_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(9, UploadFileComponent_Conditional_9_Template, 9, 3, "div", 6);
      \u0275\u0275conditionalCreate(10, UploadFileComponent_Conditional_10_Template, 2, 0, "div", 6);
      \u0275\u0275conditionalCreate(11, UploadFileComponent_Conditional_11_Template, 26, 4, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.toolsName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.toolsNameDescription);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status === 0 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dataset ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status === 1 && ctx.dataset ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status === 2 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status === 3 && ctx.dataset ? 11 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormFileInputComponent, LoadingSpinnerComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.livros-submit-card[_ngcontent-%COMP%] {\n  padding: 1.3rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 16px 30px rgba(92, 63, 29, 0.08);\n}\n.livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #35210f;\n}\n.livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5a4634;\n  line-height: 1.55;\n}\n.upload-head[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 0.6rem 0.8rem;\n  border-radius: 0.45rem 0.45rem 0 0;\n  border: 1px solid #6b5aa3;\n  border-bottom: 0;\n  background-color: #483d8b;\n  color: #fff;\n  font-weight: 700;\n}\n.upload-process[_ngcontent-%COMP%] {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0 0 0.45rem 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.big[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 1.1rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.upload-body[_ngcontent-%COMP%] {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0 0 0.45rem 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\n.upload-note[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #6a5542;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%] {\n  background: rgba(37, 31, 26, 0.9);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d6c4b2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .upload-head[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .upload-head[_ngcontent-%COMP%] {\n  border-color: #8f7bc8;\n  background-color: #5d4fb0;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .upload-body[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .upload-body[_ngcontent-%COMP%] {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .upload-process[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .upload-process[_ngcontent-%COMP%] {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n}\n/*# sourceMappingURL=upload-file.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadFileComponent, [{
    type: Component,
    args: [{ selector: "app-upload-file", standalone: true, imports: [ReactiveFormsModule, FormFileInputComponent, LoadingSpinnerComponent], template: `<div class="col-lg-6 col-12">\r
  <section class="livros-submit-card h-100" aria-labelledby="upload-title">\r
    <h3 id="upload-title" class="mb-2">{{ toolsName }}</h3>\r
    <p>{{ toolsNameDescription }}</p>\r
\r
    @if (status === 0) {\r
      <app-form-file-input\r
        [action]="action"\r
        message="Anexe o arquivo do livro"\r
        (dataset)="updateDataset($event)"\r
      />\r
    }\r
\r
    @if (errorMessage) {\r
      <div class="alert alert-danger mt-3" role="alert">{{ errorMessage }}</div>\r
    }\r
\r
    @if (dataset) {\r
      <div class="upload-head mt-3">{{ toolsName }}</div>\r
    }\r
\r
    @if (status === 1 && dataset) {\r
      <div class="upload-process">\r
        <div>\r
          <span class="field-hint">Nome do arquivo:</span><br />\r
          <span class="big" [title]="dataset['file']">{{ displayFileName(dataset['file']) }}</span>\r
        </div>\r
\r
        @if (emailSend) {\r
          <div class="pt-3 pb-2">\r
            <span class="field-hint">Confirma\xE7\xE3o de autoria</span>\r
            <form class="mt-2" [formGroup]="emailForm" (ngSubmit)="onSubmitEmail()">\r
              <div class="mb-3">\r
                <label for="name" class="form-label">Nome completo do autor</label>\r
                <input id="name" type="text" class="form-control" formControlName="name" />\r
\r
                <label for="email" class="form-label mt-3">Informe seu e-mail</label>\r
                <input id="email" type="email" class="form-control" formControlName="email" />\r
                @if (emailForm.controls.email.invalid && emailForm.controls.email.touched) {\r
                  <div class="text-danger">Por favor, insira um e-mail v\xE1lido.</div>\r
                }\r
\r
                <label for="agree" class="form-check-label mt-3">\r
                  <input id="agree" type="checkbox" class="form-check-input me-2" formControlName="agree" />\r
                  Concordo com os termos\r
                </label>\r
              </div>\r
              <button type="submit" class="btn btn-primary full" [disabled]="emailForm.invalid">\r
                Enviar\r
              </button>\r
            </form>\r
          </div>\r
        } @else {\r
          <button type="button" class="btn btn-primary full mt-3" (click)="process()">\r
            {{ buttonName }}\r
          </button>\r
        }\r
      </div>\r
    }\r
\r
    @if (status === 2) {\r
      <div class="upload-process"><app-loading-spinner /></div>\r
    }\r
\r
    @if (status === 3 && dataset) {\r
      <div class="upload-process">\r
        <p>Prezado(a), <strong>{{ dataset['name'] }}</strong>,</p>\r
        <p>\r
          A submiss\xE3o de seu livro\r
          <span [title]="dataset['file']">{{ displayFileName(dataset['file']) }}</span>\r
          foi realizada com sucesso!\r
        </p>\r
        <p>Um e-mail foi enviado para sua conta, autorizando a publica\xE7\xE3o.</p>\r
        <div class="alert alert-success mt-2">\r
          <strong>Sucesso:</strong> Seu livro foi enviado com \xEAxito. Assim que recebermos o retorno\r
          do e-mail (<strong>{{ dataset['email'] }}</strong>) de confirma\xE7\xE3o, iniciaremos o processo\r
          de indexa\xE7\xE3o.\r
        </div>\r
        <div class="alert alert-warning mt-2">\r
          <strong>Aten\xE7\xE3o:</strong> Caso n\xE3o encontre o e-mail em sua caixa de entrada, verifique a\r
          caixa de spam.\r
        </div>\r
        <button type="button" class="btn btn-secondary full mt-2" (click)="restart()">REINICIAR</button>\r
      </div>\r
    }\r
  </section>\r
</div>\r
`, styles: ["/* src/app/components/upload-file/upload-file.component.scss */\n:host {\n  display: contents;\n}\n.livros-submit-card {\n  padding: 1.3rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 16px 30px rgba(92, 63, 29, 0.08);\n}\n.livros-submit-card h3 {\n  color: #35210f;\n}\n.livros-submit-card p {\n  color: #5a4634;\n  line-height: 1.55;\n}\n.upload-head {\n  margin-bottom: 0;\n  padding: 0.6rem 0.8rem;\n  border-radius: 0.45rem 0.45rem 0 0;\n  border: 1px solid #6b5aa3;\n  border-bottom: 0;\n  background-color: #483d8b;\n  color: #fff;\n  font-weight: 700;\n}\n.upload-process {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0 0 0.45rem 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\n.field-hint {\n  font-size: 0.7rem;\n}\n.big {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 1.1rem;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.full {\n  width: 100%;\n}\n.upload-body {\n  border: 1px solid rgba(124, 86, 46, 0.25);\n  border-radius: 0 0 0.45rem 0.45rem;\n  padding: 0.8rem;\n  background: rgba(255, 255, 255, 0.72);\n}\n.upload-note {\n  font-size: 0.88rem;\n  color: #6a5542;\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card {\n  background: rgba(37, 31, 26, 0.9);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card h3 {\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card p,\n:host-context(body.theme-master.theme-dark) .livros-submit-card a {\n  color: #d6c4b2;\n}\n:host-context(body.theme-master.theme-dark) .upload-head {\n  border-color: #8f7bc8;\n  background-color: #5d4fb0;\n}\n:host-context(body.theme-master.theme-dark) .upload-body {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n}\n:host-context(body.theme-master.theme-dark) .upload-process {\n  border-color: rgba(232, 213, 190, 0.22);\n  background: rgba(23, 20, 17, 0.55);\n}\n/*# sourceMappingURL=upload-file.component.css.map */\n"] }]
  }], null, { toolsName: [{
    type: Input
  }], toolsNameDescription: [{
    type: Input
  }], buttonName: [{
    type: Input
  }], endpoint: [{
    type: Input
  }], action: [{
    type: Input
  }], emailSend: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadFileComponent, { className: "UploadFileComponent", filePath: "src/app/components/upload-file/upload-file.component.ts", lineNumber: 16 });
})();

// src/app/pages/livros-submit/livros-submit.page.ts
var LivrosSubmitPage = class _LivrosSubmitPage {
  static \u0275fac = function LivrosSubmitPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivrosSubmitPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivrosSubmitPage, selectors: [["app-livros-submit-page"]], decls: 26, vars: 0, consts: [["aria-labelledby", "livros-submit-title", 1, "livros-submit-wrap", "py-4"], [1, "container", "livros-submit-shell"], [1, "row", "g-4"], [1, "col-lg-6", "col-12"], [1, "livros-submit-card", "h-100"], ["id", "livros-submit-title"], [1, "livros-submit-list"], ["href", "mailto:brapcici@gmail.com"]], template: function LivrosSubmitPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "article", 4)(6, "h2", 5);
      \u0275\u0275text(7, "Termo de Indexacao");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, " Ao submeter seu livro para indexacao na Brapci Livros, voce, como autor ou representante autorizado, declara que: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li");
      \u0275\u0275text(12, " Voce detem os direitos autorais ou esta devidamente autorizado a submeter o conteudo para indexacao. Certifica que o material enviado e original e nao infringe direitos de terceiros. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li");
      \u0275\u0275text(14, " O conteudo do livro esta relacionado a temas pertinentes as areas de Ciencia da Informacao, Biblioteconomia, Arquivologia, Museologia ou disciplinas correlatas, alinhando-se ao escopo da Brapci Livros. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li");
      \u0275\u0275text(16, " Autoriza a Brapci Livros a disponibilizar os metadados do livro para consulta publica em sua plataforma. Esta autorizacao nao implica a disponibilizacao do texto completo da obra, salvo indicacao explicita e consentimento do autor. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "h5");
      \u0275\u0275text(18, "Contato e Suporte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul", 6)(20, "li");
      \u0275\u0275text(21, " Em caso de duvidas ou solicitacoes relacionadas ao processo de indexacao, entre em contato com a equipe da Brapci Livros por meio do e-mail: ");
      \u0275\u0275elementStart(22, "a", 7);
      \u0275\u0275text(23, "brapcici@gmail.com");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, ". ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(25, "app-upload-file");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, BreadcrumbsComponent, UploadFileComponent], styles: ["\n\n.livros-submit-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.84),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.livros-submit-shell[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.2rem;\n}\n.livros-submit-card[_ngcontent-%COMP%] {\n  padding: 1.3rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 16px 30px rgba(92, 63, 29, 0.08);\n}\n.livros-submit-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.livros-submit-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #35210f;\n}\n.livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.livros-submit-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #5a4634;\n  line-height: 1.55;\n}\n.livros-submit-list[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  padding-left: 1.2rem;\n}\n.livros-submit-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-wrap[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%] {\n  background: rgba(37, 31, 26, 0.9);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-submit-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d6c4b2;\n}\n/*# sourceMappingURL=livros-submit.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivrosSubmitPage, [{
    type: Component,
    args: [{ selector: "app-livros-submit-page", standalone: true, imports: [CommonModule, BreadcrumbsComponent, UploadFileComponent], template: '<section class="livros-submit-wrap py-4" aria-labelledby="livros-submit-title">\r\n  <div class="container livros-submit-shell">\r\n    <app-breadcrumbs></app-breadcrumbs>\r\n\r\n    <div class="row g-4">\r\n      <div class="col-lg-6 col-12">\r\n        <article class="livros-submit-card h-100">\r\n          <h2 id="livros-submit-title">Termo de Indexacao</h2>\r\n\r\n          <p>\r\n            Ao submeter seu livro para indexacao na Brapci Livros, voce, como autor ou\r\n            representante autorizado, declara que:\r\n          </p>\r\n\r\n          <ul class="livros-submit-list">\r\n            <li>\r\n              Voce detem os direitos autorais ou esta devidamente autorizado a submeter o conteudo\r\n              para indexacao. Certifica que o material enviado e original e nao infringe direitos de\r\n              terceiros.\r\n            </li>\r\n            <li>\r\n              O conteudo do livro esta relacionado a temas pertinentes as areas de Ciencia da\r\n              Informacao, Biblioteconomia, Arquivologia, Museologia ou disciplinas correlatas,\r\n              alinhando-se ao escopo da Brapci Livros.\r\n            </li>\r\n            <li>\r\n              Autoriza a Brapci Livros a disponibilizar os metadados do livro para consulta publica em\r\n              sua plataforma. Esta autorizacao nao implica a disponibilizacao do texto completo da\r\n              obra, salvo indicacao explicita e consentimento do autor.\r\n            </li>\r\n          </ul>\r\n\r\n          <h5>Contato e Suporte</h5>\r\n          <ul class="livros-submit-list">\r\n            <li>\r\n              Em caso de duvidas ou solicitacoes relacionadas ao processo de indexacao, entre em\r\n              contato com a equipe da Brapci Livros por meio do e-mail:\r\n              <a href="mailto:brapcici@gmail.com">brapcici@gmail.com</a>.\r\n            </li>\r\n          </ul>\r\n        </article>\r\n      </div>\r\n\r\n      <app-upload-file />\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/livros-submit/livros-submit.page.scss */\n.livros-submit-wrap {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.84),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.livros-submit-shell {\n  display: grid;\n  gap: 1.2rem;\n}\n.livros-submit-card {\n  padding: 1.3rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 16px 30px rgba(92, 63, 29, 0.08);\n}\n.livros-submit-card h2,\n.livros-submit-card h3,\n.livros-submit-card h5 {\n  color: #35210f;\n}\n.livros-submit-card p,\n.livros-submit-card li {\n  color: #5a4634;\n  line-height: 1.55;\n}\n.livros-submit-list {\n  margin: 0 0 1rem;\n  padding-left: 1.2rem;\n}\n.livros-submit-list li + li {\n  margin-top: 0.55rem;\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-wrap {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card {\n  background: rgba(37, 31, 26, 0.9);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card h2,\n:host-context(body.theme-master.theme-dark) .livros-submit-card h3,\n:host-context(body.theme-master.theme-dark) .livros-submit-card h5 {\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .livros-submit-card p,\n:host-context(body.theme-master.theme-dark) .livros-submit-card li,\n:host-context(body.theme-master.theme-dark) .livros-submit-card a {\n  color: #d6c4b2;\n}\n/*# sourceMappingURL=livros-submit.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivrosSubmitPage, { className: "LivrosSubmitPage", filePath: "src/app/pages/livros-submit/livros-submit.page.ts", lineNumber: 13 });
})();
export {
  LivrosSubmitPage
};
//# sourceMappingURL=chunk-IKBNGEW4.js.map
