import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-KNBI7DSD.mjs";
import {
  BrapciApiService
} from "./chunk-5N7WX2WW.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-KVBU5WEP.mjs";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HFOHCKS4.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FKOHU7FA.mjs";
import "./chunk-UDICY5ZG.mjs";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  RouterLink,
  Subject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TMIH7BOS.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

// src/app/pages/admin-edit/admin-concept-editor.component.ts
var _c0 = () => ({ standalone: true });
function AdminConceptEditorComponent_pre_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.payloadJson);
  }
}
function AdminConceptEditorComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.use);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.name);
  }
}
function AdminConceptEditorComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3["c_class"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r3["c_class"]);
  }
}
var AdminConceptEditorComponent = class _AdminConceptEditorComponent {
  draft;
  query = "";
  options = [];
  loading = false;
  payloadJson = "";
  queryChange = new EventEmitter();
  selectionChange = new EventEmitter();
  classChange = new EventEmitter();
  allowedTypes() {
    const allow = this.draft["propertyAllow"];
    const types = allow && typeof allow === "object" ? allow["type"] : [];
    return Array.isArray(types) ? types.filter((type) => typeof type === "object" && type !== null) : [];
  }
  static \u0275fac = function AdminConceptEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminConceptEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminConceptEditorComponent, selectors: [["app-admin-concept-editor"]], inputs: { draft: "draft", query: "query", options: "options", loading: "loading", payloadJson: "payloadJson" }, outputs: { queryChange: "queryChange", selectionChange: "selectionChange", classChange: "classChange" }, decls: 17, vars: 18, consts: [["type", "hidden", "readonly", "", 3, "value"], [1, "mb-3"], ["for", "rdf-name", 1, "form-label"], ["type", "search", "placeholder", "Buscar nome ou valor", "autocomplete", "off", 1, "form-control", "w-100", "mb-2", 3, "input", "value"], ["class", "autocomplete-query", 4, "ngIf"], ["id", "rdf-name", "size", "5", 1, "form-select", "w-100", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "rdf-class", 1, "form-label"], ["id", "rdf-class", 1, "form-select", "w-100", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "autocomplete-query"], [3, "value"]], template: function AdminConceptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "label", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 3);
      \u0275\u0275listener("input", function AdminConceptEditorComponent_Template_input_input_5_listener($event) {
        return ctx.queryChange.emit($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, AdminConceptEditorComponent_pre_6_Template, 2, 1, "pre", 4);
      \u0275\u0275elementStart(7, "select", 5);
      \u0275\u0275listener("ngModelChange", function AdminConceptEditorComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.selectionChange.emit($event);
      });
      \u0275\u0275elementStart(8, "option", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AdminConceptEditorComponent_option_10_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 1)(12, "label", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 9);
      \u0275\u0275listener("ngModelChange", function AdminConceptEditorComponent_Template_select_ngModelChange_15_listener($event) {
        return ctx.classChange.emit($event);
      });
      \u0275\u0275template(16, AdminConceptEditorComponent_option_16_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.draft["ID"]);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "adminEdit.fields.n_name"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.query);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.payloadJson);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.draft["ID"])("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.loading ? "Buscando..." : "Selecione");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.options);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "adminEdit.fields.c_class"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.draft["c_class"])("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.allowedTypes());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe], styles: ["\n\n.autocomplete-query[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.4rem;\n  background: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  font-size: 0.78rem;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=admin-concept-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminConceptEditorComponent, [{
    type: Component,
    args: [{ selector: "app-admin-concept-editor", standalone: true, imports: [CommonModule, FormsModule, TranslateModule], template: `
    <input type="hidden" [value]="draft['ID']" readonly />
    <div class="mb-3">
      <label for="rdf-name" class="form-label">{{ 'adminEdit.fields.n_name' | translate }}</label>
      <input type="search" class="form-control w-100 mb-2" placeholder="Buscar nome ou valor" autocomplete="off" [value]="query" (input)="queryChange.emit($any($event.target).value)" />
      <pre *ngIf="payloadJson" class="autocomplete-query">{{ payloadJson }}</pre>
      <select id="rdf-name" class="form-select w-100" size="5" [ngModel]="draft['ID']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="selectionChange.emit($event)">
        <option value="" disabled>{{ loading ? 'Buscando...' : 'Selecione' }}</option>
        <option *ngFor="let option of options" [value]="option.use">{{ option.name }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="rdf-class" class="form-label">{{ 'adminEdit.fields.c_class' | translate }}</label>
      <select id="rdf-class" class="form-select w-100" [ngModel]="draft['c_class']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="classChange.emit($event)">
        <option *ngFor="let type of allowedTypes()" [value]="type['c_class']">{{ type['c_class'] }}</option>
      </select>
    </div>
  `, styles: ["/* angular:styles/component:scss;b303de315785e790c7a0ae10123983ed93e68318c5fc4e22b1e4c8cb8f23da51;D:/Projeto/BrapciAngular2/src/app/pages/admin-edit/admin-concept-editor.component.ts */\n.autocomplete-query {\n  margin: 0 0 0.5rem;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.4rem;\n  background: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  font-size: 0.78rem;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=admin-concept-editor.component.css.map */\n"] }]
  }], null, { draft: [{
    type: Input,
    args: [{ required: true }]
  }], query: [{
    type: Input
  }], options: [{
    type: Input
  }], loading: [{
    type: Input
  }], payloadJson: [{
    type: Input
  }], queryChange: [{
    type: Output
  }], selectionChange: [{
    type: Output
  }], classChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminConceptEditorComponent, { className: "AdminConceptEditorComponent", filePath: "src/app/pages/admin-edit/admin-concept-editor.component.ts", lineNumber: 34 });
})();

// src/app/pages/admin-edit/admin-image-editor.component.ts
function AdminImageEditorComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "adminEdit.currentFile"), ": ", ctx_r0.draft["n_name"]);
  }
}
var AdminImageEditorComponent = class _AdminImageEditorComponent {
  mode;
  draft;
  fileChange = new EventEmitter();
  static \u0275fac = function AdminImageEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminImageEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminImageEditorComponent, selectors: [["app-admin-image-editor"]], inputs: { mode: "mode", draft: "draft" }, outputs: { fileChange: "fileChange" }, decls: 5, vars: 5, consts: [["for", "rdf-file", 1, "form-label"], ["id", "rdf-file", "type", "file", 1, "form-control", 3, "change", "accept"], ["class", "small text-secondary mt-2", 4, "ngIf"], [1, "small", "text-secondary", "mt-2"]], template: function AdminImageEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 1);
      \u0275\u0275listener("change", function AdminImageEditorComponent_Template_input_change_3_listener($event) {
        return ctx.fileChange.emit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AdminImageEditorComponent_p_4_Template, 3, 4, "p", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, ctx.mode === "image" ? "adminEdit.selectImage" : "adminEdit.selectFile"));
      \u0275\u0275advance(2);
      \u0275\u0275property("accept", ctx.mode === "image" ? "image/*" : void 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.draft["n_name"]);
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminImageEditorComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-image-editor",
      standalone: true,
      imports: [CommonModule, TranslateModule],
      template: `
    <label for="rdf-file" class="form-label">{{ (mode === 'image' ? 'adminEdit.selectImage' : 'adminEdit.selectFile') | translate }}</label>
    <input id="rdf-file" class="form-control" type="file" [accept]="mode === 'image' ? 'image/*' : undefined" (change)="fileChange.emit($event)" />
    <p *ngIf="draft['n_name']" class="small text-secondary mt-2">{{ 'adminEdit.currentFile' | translate }}: {{ draft['n_name'] }}</p>
  `
    }]
  }], null, { mode: [{
    type: Input,
    args: [{ required: true }]
  }], draft: [{
    type: Input,
    args: [{ required: true }]
  }], fileChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminImageEditorComponent, { className: "AdminImageEditorComponent", filePath: "src/app/pages/admin-edit/admin-image-editor.component.ts", lineNumber: 15 });
})();

// src/app/pages/admin-edit/admin-literal-editor.component.ts
var _c02 = () => ({ standalone: true });
var AdminLiteralEditorComponent = class _AdminLiteralEditorComponent {
  draft;
  change = new EventEmitter();
  static \u0275fac = function AdminLiteralEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLiteralEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLiteralEditorComponent, selectors: [["app-admin-literal-editor"]], inputs: { draft: "draft" }, outputs: { change: "change" }, decls: 10, vars: 12, consts: [[1, "mb-3"], ["for", "rdf-name", 1, "form-label"], ["id", "rdf-name", "rows", "5", 1, "form-control", "border", "border-secondary", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "rdf-lang", 1, "form-label"], ["id", "rdf-lang", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function AdminLiteralEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "textarea", 2);
      \u0275\u0275listener("ngModelChange", function AdminLiteralEditorComponent_Template_textarea_ngModelChange_4_listener($event) {
        return ctx.change.emit({ field: "n_name", value: $event });
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div")(6, "label", 3);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 4);
      \u0275\u0275listener("ngModelChange", function AdminLiteralEditorComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.change.emit({ field: "n_lang", value: $event });
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "adminEdit.fields.n_name"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.draft["n_name"])("ngModelOptions", \u0275\u0275pureFunction0(10, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "adminEdit.fields.n_lang"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.draft["n_lang"])("ngModelOptions", \u0275\u0275pureFunction0(11, _c02));
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLiteralEditorComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-literal-editor",
      standalone: true,
      imports: [CommonModule, FormsModule, TranslateModule],
      template: `
    <div class="mb-3">
      <label for="rdf-name" class="form-label">{{ 'adminEdit.fields.n_name' | translate }}</label>
      <textarea id="rdf-name" class="form-control border border-secondary" rows="5" [ngModel]="draft['n_name']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="change.emit({ field: 'n_name', value: $event })"></textarea>
    </div>
    <div>
      <label for="rdf-lang" class="form-label">{{ 'adminEdit.fields.n_lang' | translate }}</label>
      <input id="rdf-lang" class="form-control" [ngModel]="draft['n_lang']" [ngModelOptions]="{ standalone: true }" (ngModelChange)="change.emit({ field: 'n_lang', value: $event })" />
    </div>
  `
    }]
  }], null, { draft: [{
    type: Input,
    args: [{ required: true }]
  }], change: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLiteralEditorComponent, { className: "AdminLiteralEditorComponent", filePath: "src/app/pages/admin-edit/admin-literal-editor.component.ts", lineNumber: 21 });
})();

// src/app/pages/admin-edit/admin-edit.page.ts
var _c03 = (a0) => ({ id: a0 });
var _c1 = (a0) => ["/v", a0];
var _c2 = (a0) => ({ name: a0 });
function AdminEditPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "adminEdit.loading"));
  }
}
function AdminEditPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function AdminEditPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "adminEdit.success"));
  }
}
function AdminEditPage_div_18_section_1_div_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "adminEdit.noValues"));
  }
}
function AdminEditPage_div_18_section_1_div_4_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.languageLabel(data_r6.n_lang));
  }
}
function AdminEditPage_div_18_section_1_div_4_ng_container_10_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminEditPage_div_18_section_1_div_4_ng_container_10_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const dataIndex_r7 = \u0275\u0275nextContext().index;
      const propertyIndex_r3 = \u0275\u0275nextContext().index;
      const groupIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(groupIndex_r4, propertyIndex_r3, dataIndex_r7));
    });
    \u0275\u0275element(3, "i", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "adminEdit.edit"))("title", \u0275\u0275pipeBind1(2, 4, "adminEdit.edit"));
  }
}
function AdminEditPage_div_18_section_1_div_4_ng_container_10_sup_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sup");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r6.n_lang);
  }
}
function AdminEditPage_div_18_section_1_div_4_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminEditPage_div_18_section_1_div_4_ng_container_10_div_1_Template, 3, 1, "div", 28);
    \u0275\u0275elementStart(2, "article", 29)(3, "div", 30)(4, "button", 31);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminEditPage_div_18_section_1_div_4_ng_container_10_Template_button_click_4_listener() {
      const dataIndex_r7 = \u0275\u0275restoreView(_r5).index;
      const propertyIndex_r3 = \u0275\u0275nextContext().index;
      const groupIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestDelete(groupIndex_r4, propertyIndex_r3, dataIndex_r7));
    });
    \u0275\u0275element(7, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminEditPage_div_18_section_1_div_4_ng_container_10_button_8_Template, 4, 6, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminEditPage_div_18_section_1_div_4_ng_container_10_sup_13_Template, 2, 1, "sup", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const dataIndex_r7 = ctx.index;
    const property_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dataIndex_r7 === 0 || property_r9.Data[dataIndex_r7 - 1].n_lang !== data_r6.n_lang);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "adminEdit.delete"))("title", \u0275\u0275pipeBind1(6, 8, "adminEdit.delete"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.canEditData(property_r9, data_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r6.n_name || \u0275\u0275pipeBind1(12, 10, "adminEdit.unnamed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", data_r6.n_lang);
  }
}
function AdminEditPage_div_18_section_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminEditPage_div_18_section_1_div_4_Template_button_click_4_listener() {
      const propertyIndex_r3 = \u0275\u0275restoreView(_r2).index;
      const groupIndex_r4 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openNew(groupIndex_r4, propertyIndex_r3));
    });
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275template(9, AdminEditPage_div_18_section_1_div_4_span_9_Template, 3, 3, "span", 25)(10, AdminEditPage_div_18_section_1_div_4_ng_container_10_Template, 14, 12, "ng-container", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const property_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(property_r9.property);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 7, "adminEdit.add"))("title", \u0275\u0275pipeBind1(6, 9, "adminEdit.add"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("rdf-property__values--empty", !property_r9.Data.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !property_r9.Data.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", property_r9.Data);
  }
}
function AdminEditPage_div_18_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "h2", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminEditPage_div_18_section_1_div_4_Template, 11, 11, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "adminEdit.groups." + group_r10.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r10.properties);
  }
}
function AdminEditPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, AdminEditPage_div_18_section_1_Template, 5, 4, "section", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.groups());
  }
}
function AdminEditPage_div_19_app_admin_image_editor_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-image-editor", 49);
    \u0275\u0275listener("fileChange", function AdminEditPage_div_19_app_admin_image_editor_14_Template_app_admin_image_editor_fileChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r13 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("mode", state_r13.mode === "image" ? "image" : "file")("draft", state_r13.draft);
  }
}
function AdminEditPage_div_19_ng_template_15_app_admin_literal_editor_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-literal-editor", 51);
    \u0275\u0275listener("change", function AdminEditPage_div_19_ng_template_15_app_admin_literal_editor_0_Template_app_admin_literal_editor_change_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateDraft($event.field, $event.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r13 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("draft", state_r13.draft);
  }
}
function AdminEditPage_div_19_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-concept-editor", 52);
    \u0275\u0275listener("queryChange", function AdminEditPage_div_19_ng_template_15_ng_template_1_Template_app_admin_concept_editor_queryChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateAutocompleteQuery($event));
    })("selectionChange", function AdminEditPage_div_19_ng_template_15_ng_template_1_Template_app_admin_concept_editor_selectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectAutocomplete($event));
    })("classChange", function AdminEditPage_div_19_ng_template_15_ng_template_1_Template_app_admin_concept_editor_classChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateDraft("c_class", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r13 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("draft", state_r13.draft)("query", ctx_r0.autocompleteQuery())("options", ctx_r0.autocompleteOptions())("loading", ctx_r0.autocompleteLoading())("payloadJson", state_r13.dataIndex === null ? "" : ctx_r0.autocompletePayloadJson());
  }
}
function AdminEditPage_div_19_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminEditPage_div_19_ng_template_15_app_admin_literal_editor_0_Template, 1, 1, "app-admin-literal-editor", 50)(1, AdminEditPage_div_19_ng_template_15_ng_template_1_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const conceptEditor_r16 = \u0275\u0275reference(2);
    const state_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.isLiteralDraft(state_r13.draft))("ngIfElse", conceptEditor_r16);
  }
}
function AdminEditPage_div_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 54);
    \u0275\u0275text(2, "JSON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const state_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editorParameters(state_r13.draft));
  }
}
function AdminEditPage_div_19_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 56)(2, "p", 57)(3, "strong");
    \u0275\u0275text(4, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 58)(7, "strong");
    \u0275\u0275text(8, "Mensagem:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saveResponseStatus());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saveResponseMessage());
  }
}
function AdminEditPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275listener("click", function AdminEditPage_div_19_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditor());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 41)(4, "header")(5, "div")(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 43);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function AdminEditPage_div_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44);
    \u0275\u0275template(14, AdminEditPage_div_19_app_admin_image_editor_14_Template, 1, 2, "app-admin-image-editor", 45)(15, AdminEditPage_div_19_ng_template_15_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, AdminEditPage_div_19_div_17_Template, 5, 1, "div", 46)(18, AdminEditPage_div_19_div_18_Template, 10, 2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "footer")(20, "button", 47);
    \u0275\u0275listener("click", function AdminEditPage_div_19_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditor());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 48);
    \u0275\u0275listener("click", function AdminEditPage_div_19_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmEditor());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const state_r13 = ctx.ngIf;
    const valueEditor_r17 = \u0275\u0275reference(16);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 11, "adminEdit.modalTitle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(state_r13.draft.c_class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, state_r13.dataIndex === null ? "adminEdit.addTitle" : "adminEdit.editTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 15, "adminEdit.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", state_r13.mode === "image" || state_r13.mode === "file")("ngIfElse", valueEditor_r17);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", state_r13.dataIndex !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saveResponse() !== null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "adminEdit.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.uploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 19, ctx_r0.saveResponse() !== null ? "adminEdit.close" : ctx_r0.uploading() ? "adminEdit.uploading" : "adminEdit.confirm"));
  }
}
function AdminEditPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 40);
    \u0275\u0275listener("click", function AdminEditPage_div_20_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 60)(3, "header")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 43);
    \u0275\u0275listener("click", function AdminEditPage_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "footer")(13, "button", 47);
    \u0275\u0275listener("click", function AdminEditPage_div_20_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(14, "Fechar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 61);
    \u0275\u0275listener("click", function AdminEditPage_div_20_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const target_r19 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "adminEdit.deleteTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, "adminEdit.deleteConfirm", \u0275\u0275pureFunction1(9, _c2, target_r19.data.n_name)));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.deleting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deleting() ? "Excluindo..." : "Excluir");
  }
}
var AdminEditPage = class _AdminEditPage {
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  api = inject(BrapciApiService);
  auth = inject(AuthService);
  id = signal("", ...ngDevMode ? [{ debugName: "id" }] : []);
  currentUser = toSignal(this.auth.currentUser$, { initialValue: null });
  concept = signal({}, ...ngDevMode ? [{ debugName: "concept" }] : []);
  groups = signal([], ...ngDevMode ? [{ debugName: "groups" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : []);
  editor = signal(null, ...ngDevMode ? [{ debugName: "editor" }] : []);
  deleteTarget = signal(null, ...ngDevMode ? [{ debugName: "deleteTarget" }] : []);
  deleting = signal(false, ...ngDevMode ? [{ debugName: "deleting" }] : []);
  uploading = signal(false, ...ngDevMode ? [{ debugName: "uploading" }] : []);
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : []);
  autocompleteQuery = signal("", ...ngDevMode ? [{ debugName: "autocompleteQuery" }] : []);
  autocompleteOptions = signal([], ...ngDevMode ? [{ debugName: "autocompleteOptions" }] : []);
  autocompleteLoading = signal(false, ...ngDevMode ? [{ debugName: "autocompleteLoading" }] : []);
  autocompletePayload = signal({ q: "", prop: "", ID: "" }, ...ngDevMode ? [{ debugName: "autocompletePayload" }] : []);
  saveResponse = signal(null, ...ngDevMode ? [{ debugName: "saveResponse" }] : []);
  autocompleteRequests = new Subject();
  conceptFields = ["n_name", "n_lang", "c_class", "cc_status"];
  constructor() {
    this.autocompleteRequests.pipe(debounceTime(300), distinctUntilChanged((previous, current) => previous.q === current.q && previous.prop === current.prop && previous.ID === current.ID), tap((payload) => this.autocompleteLoading.set(payload.q.length > 3)), switchMap((payload) => payload.q.length > 3 ? this.api.postForm("rdf/searchSelect", payload).pipe(catchError(() => of([]))) : of([])), takeUntilDestroyed(this.destroyRef)).subscribe((options) => {
      this.autocompleteOptions.set(Array.isArray(options) ? options : []);
      this.autocompleteLoading.set(false);
    });
    this.route.paramMap.pipe(map((params) => params.get("id")?.trim() ?? ""), distinctUntilChanged(), tap((id) => {
      this.id.set(id);
      this.loading.set(true);
      this.error.set("");
      this.success.set(false);
    }), filter(Boolean), switchMap((id) => this.api.get(`rdf/a/${id}`)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => this.applyResponse(response),
      error: () => {
        this.error.set("adminEdit.errors.load");
        this.loading.set(false);
      }
    });
  }
  applyResponse(response) {
    this.concept.set(__spreadValues({}, response.concept));
    const order = response.groups?.length ? response.groups : Object.keys(response.form ?? {});
    this.groups.set(order.map((key) => ({
      key,
      properties: (response.form?.[key] ?? []).map((property) => __spreadProps(__spreadValues({}, property), {
        Allow: __spreadValues({}, property.Allow ?? {}),
        Data: (property.Data ?? []).map((data) => __spreadValues({}, data)).sort((left, right) => this.compareRdfData(left, right))
      })).sort((left, right) => this.compareText(left.property, right.property))
    })));
    this.loading.set(false);
  }
  compareRdfData(left, right) {
    return this.compareLanguage(left.n_lang, right.n_lang) || this.compareText(left.n_name, right.n_name);
  }
  compareLanguage(left, right) {
    const leftCode = String(left ?? "").toLocaleLowerCase();
    const rightCode = String(right ?? "").toLocaleLowerCase();
    const leftPriority = leftCode === "pt" || leftCode.startsWith("pt-") ? 0 : 1;
    const rightPriority = rightCode === "pt" || rightCode.startsWith("pt-") ? 0 : 1;
    return leftPriority - rightPriority || this.compareText(leftCode, rightCode);
  }
  compareText(left, right) {
    return String(left ?? "").localeCompare(String(right ?? ""), "pt-BR", {
      sensitivity: "base",
      numeric: true
    });
  }
  languageLabel(language) {
    const code = String(language ?? "").toLocaleLowerCase();
    if (code === "pt" || code.startsWith("pt-"))
      return `Portugu\xEAs (${language})`;
    if (code === "en" || code.startsWith("en-"))
      return `Ingl\xEAs (${language})`;
    if (code === "es" || code.startsWith("es-"))
      return `Espanhol (${language})`;
    return language ? language : "Sem idioma";
  }
  refreshData() {
    this.api.get(`rdf/a/${this.id()}`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => this.applyResponse(response),
      error: () => this.error.set("adminEdit.errors.load")
    });
  }
  conceptValue(field) {
    return String(this.concept()[field] ?? "");
  }
  updateConcept(field, value) {
    this.concept.update((concept) => __spreadProps(__spreadValues({}, concept), { [field]: value }));
    this.markChanged();
  }
  updateData(groupIndex, propertyIndex, dataIndex, field, value) {
    this.groups.update((groups) => groups.map((group, gi) => gi !== groupIndex ? group : __spreadProps(__spreadValues({}, group), {
      properties: group.properties.map((property, pi) => pi !== propertyIndex ? property : __spreadProps(__spreadValues({}, property), {
        Data: property.Data.map((data, di) => di === dataIndex ? __spreadProps(__spreadValues({}, data), { [field]: value }) : data)
      }))
    })));
    this.markChanged();
  }
  openNew(groupIndex, propertyIndex) {
    const property = this.groups()[groupIndex].properties[propertyIndex];
    const allow = property.Allow ?? {};
    const allowedTypes = Array.isArray(allow["type"]) ? allow["type"] : [];
    const allowedClass = allowedTypes.find((type) => typeof type === "object" && type !== null && typeof type["c_class"] === "string")?.["c_class"];
    const mode = allow["imagem"] || allow["cover"] ? "image" : allow["pdf"] ? "file" : allow["literal"] ? "literal" : "concept";
    this.editor.set({
      groupIndex,
      propertyIndex,
      dataIndex: null,
      mode,
      draft: {
        id_d: "",
        ID: this.id(),
        ID2: this.id(),
        id_c: property.IDp,
        id_n: "",
        property: property.property,
        propertyAllow: __spreadValues({}, allow),
        c_class: String(allowedClass ?? property.property),
        n_name: "",
        n_lang: "nn"
      }
    });
    this.selectedFile.set(null);
    this.autocompleteQuery.set("");
    this.autocompleteOptions.set([]);
    this.autocompletePayload.set({ q: "", prop: property.property, ID: this.id() });
    this.saveResponse.set(null);
  }
  openEdit(groupIndex, propertyIndex, dataIndex) {
    const property = this.groups()[groupIndex].properties[propertyIndex];
    const allow = property.Allow ?? {};
    const mode = allow["imagem"] || allow["cover"] ? "image" : allow["pdf"] ? "file" : allow["literal"] ? "literal" : "concept";
    this.editor.set({
      groupIndex,
      propertyIndex,
      dataIndex,
      mode,
      draft: __spreadProps(__spreadValues({}, property.Data[dataIndex]), {
        property: property.property,
        propertyAllow: __spreadValues({}, allow)
      })
    });
    this.selectedFile.set(null);
    this.autocompleteQuery.set("");
    this.autocompleteOptions.set([]);
    this.autocompletePayload.set({ q: "", prop: property.property, ID: this.id() });
    this.saveResponse.set(null);
  }
  closeEditor() {
    this.editor.set(null);
    this.selectedFile.set(null);
    this.autocompleteQuery.set("");
    this.autocompleteOptions.set([]);
    this.autocompleteLoading.set(false);
    this.autocompletePayload.set({ q: "", prop: "", ID: "" });
    this.saveResponse.set(null);
  }
  updateDraft(field, value) {
    this.editor.update((state) => state ? __spreadProps(__spreadValues({}, state), { draft: __spreadProps(__spreadValues({}, state.draft), { [field]: value }) }) : null);
  }
  editorParameters(draft) {
    return JSON.stringify(draft, null, 2);
  }
  canEditData(property, data) {
    const propertyAllow = data.propertyAllow ?? property.Allow;
    const allowedTypes = Array.isArray(propertyAllow?.["type"]) ? propertyAllow["type"] : [];
    return allowedTypes.some((type) => typeof type === "object" && type !== null && type["c_class"] === "Literal");
  }
  isLiteralDraft(draft) {
    return this.allowedTypeOptions(draft).some((type) => type["c_class"] === "Literal");
  }
  allowedTypeOptions(draft) {
    const types = draft.propertyAllow?.["type"];
    return Array.isArray(types) ? types.filter((type) => typeof type === "object" && type !== null) : [];
  }
  typeOptionValue(type) {
    return String(type["n_name"] ?? type["name"] ?? type["c_class"] ?? "");
  }
  /** Compatibilidade temporária com templates mantidos pelo hot reload. */
  filteredTypeOptions(draft) {
    if (this.autocompleteOptions().length) {
      return this.autocompleteOptions().map((option) => __spreadValues({}, option));
    }
    return this.allowedTypeOptions(draft);
  }
  updateAutocompleteQuery(value) {
    this.autocompleteQuery.set(value);
    const state = this.editor();
    if (!state)
      return;
    const payload = {
      q: value.trim(),
      prop: state.draft.property,
      ID: state.draft.ID2 || this.id()
    };
    this.autocompletePayload.set(payload);
    this.autocompleteRequests.next(payload);
  }
  autocompletePayloadJson() {
    return JSON.stringify(this.autocompletePayload(), null, 2);
  }
  saveResponseStatus() {
    const response = this.saveResponse();
    return response && typeof response === "object" ? String(response["status"] ?? "") : "";
  }
  saveResponseMessage() {
    const response = this.saveResponse();
    return response && typeof response === "object" ? String(response["message"] ?? "") : "";
  }
  selectAutocomplete(use) {
    const option = this.autocompleteOptions().find((item) => item.use === use);
    if (!option)
      return;
    this.editor.update((state) => state ? __spreadProps(__spreadValues({}, state), {
      draft: __spreadProps(__spreadValues({}, state.draft), {
        ID: option.use,
        n_name: option.name,
        n_lang: option.lang
      })
    }) : null);
  }
  selectFile(event) {
    const input = event.target;
    this.selectedFile.set(input.files?.[0] ?? null);
  }
  confirmEditor() {
    const state = this.editor();
    if (!state)
      return;
    if (this.saveResponse() !== null) {
      this.closeEditor();
      return;
    }
    if (state.mode === "literal") {
      const isNew = state.dataIndex === null;
      const endpoint = isNew ? "rdf/dataAddLiteral" : `rdf/updateLiteral/${state.draft.id_n}`;
      const payload = isNew ? { q: state.draft.n_name, prop: state.draft.property, ID: state.draft.ID || this.id(), c_class: state.draft.c_class, propertyAllow: state.draft.propertyAllow } : { q: state.draft.n_name, prop: state.draft.property, ID: state.draft.ID, c_class: state.draft.c_class, propertyAllow: state.draft.propertyAllow };
      this.uploading.set(true);
      this.api.post(endpoint, payload).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.uploading.set(false);
          this.closeEditor();
          this.refreshData();
        },
        error: () => {
          this.uploading.set(false);
          this.error.set("adminEdit.errors.save");
        }
      });
      return;
    }
    if (state.mode === "concept") {
      const principalId = state.draft.ID2 || this.id();
      const selectedId = state.draft.ID;
      const payload = {
        q: selectedId,
        prop: state.draft.property,
        ID: principalId,
        source: principalId,
        resource: selectedId
      };
      this.uploading.set(true);
      this.error.set("");
      this.api.postForm("rdf/dataAdd", payload).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          this.uploading.set(false);
          this.saveResponse.set(response);
          this.refreshData();
        },
        error: () => {
          this.uploading.set(false);
          this.error.set("adminEdit.errors.save");
        }
      });
      return;
    }
    const file = this.selectedFile();
    if ((state.mode === "image" || state.mode === "file") && file) {
      const payload = new FormData();
      payload.append("file", file);
      payload.append("ID", this.id());
      payload.append("IDp", state.draft.id_c);
      payload.append("type", state.mode === "image" ? "bookCover" : "file");
      this.uploading.set(true);
      this.api.post("tools/upload", payload).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          const result = response && typeof response === "object" ? response : {};
          const uploadedName = String(result["filename"] ?? result["file"] ?? result["name"] ?? file.name);
          this.applyEditor(__spreadProps(__spreadValues({}, state.draft), { n_name: uploadedName }));
          this.uploading.set(false);
        },
        error: () => {
          this.uploading.set(false);
          this.error.set("adminEdit.errors.upload");
        }
      });
      return;
    }
    this.applyEditor(state.draft);
  }
  requestDelete(groupIndex, propertyIndex, dataIndex) {
    const data = this.groups()[groupIndex].properties[propertyIndex].Data[dataIndex];
    this.deleteTarget.set({ groupIndex, propertyIndex, dataIndex, data });
  }
  cancelDelete() {
    this.deleteTarget.set(null);
    this.refreshData();
  }
  confirmDelete() {
    const target = this.deleteTarget();
    if (!target || this.deleting())
      return;
    if (!target.data.id_d) {
      this.removeAt(target.groupIndex, target.propertyIndex, target.dataIndex);
      this.deleteTarget.set(null);
      return;
    }
    this.deleting.set(true);
    this.deleteTarget.set(null);
    this.removeAt(target.groupIndex, target.propertyIndex, target.dataIndex);
    const endpoint = `rdf/delData/${encodeURIComponent(target.data.id_d)}`;
    const token = this.currentUser()?.token ?? "";
    console.log("RDF delete endpoint:", `https://cip.brapci.inf.br/api/${endpoint}`);
    this.api.postForm(endpoint, { user: token }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.deleting.set(false);
        setTimeout(() => this.refreshData(), 300);
      },
      error: () => {
        this.deleting.set(false);
        this.error.set("adminEdit.errors.delete");
        this.refreshData();
      }
    });
  }
  applyEditor(data) {
    const state = this.editor();
    if (!state)
      return;
    this.groups.update((groups) => groups.map((group, gi) => gi !== state.groupIndex ? group : __spreadProps(__spreadValues({}, group), {
      properties: group.properties.map((property, pi) => pi !== state.propertyIndex ? property : __spreadProps(__spreadValues({}, property), {
        Data: state.dataIndex === null ? [...property.Data, data] : property.Data.map((item, di) => di === state.dataIndex ? data : item)
      }))
    })));
    this.closeEditor();
    this.markChanged();
  }
  removeAt(groupIndex, propertyIndex, dataIndex) {
    this.groups.update((groups) => groups.map((group, gi) => gi !== groupIndex ? group : __spreadProps(__spreadValues({}, group), {
      properties: group.properties.map((property, pi) => pi !== propertyIndex ? property : __spreadProps(__spreadValues({}, property), { Data: property.Data.filter((_, di) => di !== dataIndex) }))
    })));
    this.markChanged();
  }
  save() {
    if (this.saving())
      return;
    const form = Object.fromEntries(this.groups().map((group) => [group.key, group.properties]));
    this.saving.set(true);
    this.error.set("");
    this.success.set(false);
    this.api.post(`rdf/a/${this.id()}`, {
      token: this.auth.user?.token ?? this.auth.getLocalUser()?.token,
      concept: this.concept(),
      groups: this.groups().map((group) => group.key),
      form
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.saving.set(false);
        this.success.set(true);
      },
      error: () => {
        this.saving.set(false);
        this.error.set("adminEdit.errors.save");
      }
    });
  }
  markChanged() {
    this.success.set(false);
    this.error.set("");
  }
  static \u0275fac = function AdminEditPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEditPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEditPage, selectors: [["app-admin-edit-page"]], decls: 21, vars: 24, consts: [["valueEditor", ""], ["conceptEditor", ""], [1, "container-fluid", "admin-edit"], [1, "admin-edit__header"], [1, "admin-edit__kicker"], [1, "admin-edit__record"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], ["class", "alert alert-secondary mt-4", 4, "ngIf"], ["class", "alert alert-danger mt-4", 4, "ngIf"], ["class", "alert alert-success mt-4", 4, "ngIf"], ["class", "rdf-groups", 4, "ngIf"], ["class", "admin-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "admin-modal", "role", "alertdialog", "aria-modal", "true", 4, "ngIf"], [1, "alert", "alert-secondary", "mt-4"], [1, "alert", "alert-danger", "mt-4"], [1, "alert", "alert-success", "mt-4"], [1, "rdf-groups"], ["class", "rdf-group", 4, "ngFor", "ngForOf"], [1, "rdf-group"], [1, "rdf-group__title"], ["class", "rdf-property", 4, "ngFor", "ngForOf"], [1, "rdf-property"], [1, "rdf-property__label"], ["type", "button", 1, "rdf-property__add", 3, "click"], [1, "rdf-property__values"], ["class", "rdf-property__empty", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "rdf-property__empty"], ["class", "rdf-language-separator", 4, "ngIf"], [1, "rdf-value"], [1, "rdf-value__actions"], ["type", "button", 1, "rdf-icon", "rdf-icon--delete", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-trash"], ["type", "button", "class", "rdf-icon rdf-icon--edit", 3, "click", 4, "ngIf"], [1, "rdf-value__content"], [4, "ngIf"], [1, "rdf-language-separator"], ["type", "button", 1, "rdf-icon", "rdf-icon--edit", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-pencil"], ["role", "dialog", "aria-modal", "true", 1, "admin-modal"], [1, "admin-modal__backdrop", 3, "click"], [1, "admin-modal__panel"], [1, "admin-edit__eyebrow"], ["type", "button", 1, "btn-close", 3, "click"], [1, "admin-modal__body"], [3, "mode", "draft", "fileChange", 4, "ngIf", "ngIfElse"], ["class", "admin-modal__parameters", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "fileChange", "mode", "draft"], [3, "draft", "change", 4, "ngIf", "ngIfElse"], [3, "change", "draft"], [3, "queryChange", "selectionChange", "classChange", "draft", "query", "options", "loading", "payloadJson"], [1, "admin-modal__parameters"], ["for", "rdf-parameters", 1, "form-label"], ["id", "rdf-parameters", "aria-live", "polite"], ["id", "rdf-save-response", "aria-live", "polite", 1, "alert", "alert-secondary", "mb-0"], [1, "mb-1"], [1, "mb-0"], ["role", "alertdialog", "aria-modal", "true", 1, "admin-modal"], [1, "admin-modal__panel", "admin-modal__panel--small"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"]], template: function AdminEditPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 2)(1, "header", 3)(2, "div")(3, "p", 4);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "a", 6);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, AdminEditPage_div_15_Template, 3, 3, "div", 7)(16, AdminEditPage_div_16_Template, 3, 3, "div", 8)(17, AdminEditPage_div_17_Template, 3, 3, "div", 9)(18, AdminEditPage_div_18_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, AdminEditPage_div_19_Template, 26, 21, "div", 11)(20, AdminEditPage_div_20_Template, 17, 11, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "adminEdit.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "adminEdit.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, "adminEdit.record", \u0275\u0275pureFunction1(20, _c03, ctx.id())));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, ctx.id()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "adminEdit.back"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editor());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteTarget());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, RouterLink, TranslateModule, AdminConceptEditorComponent, AdminImageEditorComponent, AdminLiteralEditorComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f4f5f6;\n  color: #252a2e;\n}\n.admin-edit[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem clamp(1.25rem, 4vw, 4.5rem) 4rem;\n}\n.admin-edit__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  max-width: 116rem;\n  margin: 0 auto 2.5rem;\n}\n.admin-edit__kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  color: #c21874;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.admin-edit__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.5rem, 2.2vw, 2.1rem);\n  font-weight: 300;\n  letter-spacing: -0.025em;\n}\n.admin-edit__record[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: #6c757d;\n}\n.rdf-groups[_ngcontent-%COMP%] {\n  max-width: 116rem;\n  margin: 0 auto;\n}\n.rdf-group[_ngcontent-%COMP%]    + .rdf-group[_ngcontent-%COMP%] {\n  margin-top: 2.75rem;\n}\n.rdf-group__title[_ngcontent-%COMP%] {\n  margin: 0 0 1.15rem;\n  font-size: clamp(1.25rem, 2vw, 1.8rem);\n  font-weight: 300;\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n}\n.rdf-property[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(15rem, 25%) minmax(0, 1fr);\n  align-items: start;\n}\n.rdf-property[_ngcontent-%COMP%]    + .rdf-property[_ngcontent-%COMP%] {\n  margin-top: 1.05rem;\n}\n.rdf-property__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  min-height: 3.25rem;\n  padding: 0.6rem 1.35rem 0.6rem 0;\n  font-size: clamp(0.9rem, 1.1vw, 1.05rem);\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n.rdf-property__add[_ngcontent-%COMP%] {\n  display: inline-grid;\n  flex: 0 0 auto;\n  width: 1.75rem;\n  height: 1.75rem;\n  place-items: center;\n  padding: 0 0 0.12rem;\n  border: 2px solid #d3177b;\n  border-radius: 50%;\n  background: transparent;\n  color: #d3177b;\n  font-size: 1.45rem;\n  font-weight: 300;\n  line-height: 1;\n  transition: 0.18s ease;\n}\n.rdf-property__add[_ngcontent-%COMP%]:hover, \n.rdf-property__add[_ngcontent-%COMP%]:focus-visible {\n  background: #d3177b;\n  color: #fff;\n  box-shadow: 0 0 0 0.25rem rgba(211, 23, 123, 0.14);\n  transform: scale(1.06);\n}\n.rdf-property__values[_ngcontent-%COMP%] {\n  min-height: 3.25rem;\n  border-top: 2px solid #8a949b;\n  border-left: 2px solid #8a949b;\n}\n.rdf-property__values--empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.rdf-property__empty[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  color: #8a949b;\n  font-style: italic;\n}\n.rdf-value[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  min-height: 3.25rem;\n  padding: 0.55rem 1rem;\n}\n.rdf-value[_ngcontent-%COMP%]    + .rdf-value[_ngcontent-%COMP%] {\n  border-top: 1px solid #aab1b6;\n}\n.rdf-language-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  border-top: 1px solid rgba(194, 24, 116, 0.32);\n  border-bottom: 1px solid rgba(194, 24, 116, 0.18);\n  background: rgba(194, 24, 116, 0.07);\n  color: #a71363;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.rdf-value__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: flex-start;\n  gap: 0.2rem;\n  padding-top: 0.05rem;\n}\n.rdf-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  border-radius: 0.4rem;\n  background: transparent;\n  color: #5d6368;\n  font-size: 1.25rem;\n  transition: 0.15s ease;\n}\n.rdf-icon[_ngcontent-%COMP%]:hover, \n.rdf-icon[_ngcontent-%COMP%]:focus-visible {\n  background: #fff;\n  color: #252a2e;\n  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.13);\n}\n.rdf-icon--delete[_ngcontent-%COMP%]:hover, \n.rdf-icon--delete[_ngcontent-%COMP%]:focus-visible {\n  color: #c9293f;\n}\n.rdf-icon--edit[_ngcontent-%COMP%]:hover, \n.rdf-icon--edit[_ngcontent-%COMP%]:focus-visible {\n  color: #1266b3;\n}\n.rdf-value__content[_ngcontent-%COMP%] {\n  min-width: 0;\n  font-size: clamp(0.95rem, 1.15vw, 1.1rem);\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n.rdf-value__content[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n  color: #42484c;\n  font-size: 0.65em;\n  font-weight: 500;\n}\n.admin-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1080;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n}\n.admin-modal__backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(16, 20, 24, 0.62);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.admin-modal__panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(640px, 100%);\n  max-height: calc(100vh - 2rem);\n  overflow: auto;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 1rem;\n  background: var(--bs-body-bg);\n  box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.34);\n  font-size: 0.92rem;\n}\n.admin-modal__panel--small[_ngcontent-%COMP%] {\n  width: min(460px, 100%);\n}\n.admin-modal__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.admin-modal__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.admin-modal__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.admin-modal__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  border-top: 1px solid var(--bs-border-color);\n  border-bottom: 0;\n}\n.admin-modal__body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.admin-modal__parameters[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.admin-modal__parameters[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-height: 18rem;\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.5rem;\n  background: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  font-size: 0.85rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.admin-edit__eyebrow[_ngcontent-%COMP%] {\n  color: #c21874;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%] {\n  background: #171a1d;\n  color: #edf0f2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-property__values[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-property__values[_ngcontent-%COMP%] {\n  border-color: #68747c;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-value[_ngcontent-%COMP%]    + .rdf-value[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-value[_ngcontent-%COMP%]    + .rdf-value[_ngcontent-%COMP%] {\n  border-color: #4d565c;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-language-separator[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-language-separator[_ngcontent-%COMP%] {\n  border-color: rgba(241, 123, 185, 0.28);\n  background: rgba(211, 23, 123, 0.1);\n  color: #f17bb9;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-icon[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-icon[_ngcontent-%COMP%] {\n  color: #bac2c7;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-icon[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-icon[_ngcontent-%COMP%]:hover {\n  background: #2b3035;\n  color: #fff;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .rdf-value__content[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .rdf-value__content[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  color: #b9c0c5;\n}\n@media (max-width: 767.98px) {\n  .admin-edit[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem 3rem;\n  }\n  .admin-edit__header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .admin-edit__header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .rdf-property[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rdf-property__label[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    min-height: auto;\n    padding: 0.25rem 0 0.55rem;\n  }\n  .rdf-property__values[_ngcontent-%COMP%] {\n    margin-left: 0.8rem;\n  }\n  .rdf-group[_ngcontent-%COMP%]    + .rdf-group[_ngcontent-%COMP%] {\n    margin-top: 2.2rem;\n  }\n}\n/*# sourceMappingURL=admin-edit.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEditPage, [{
    type: Component,
    args: [{ selector: "app-admin-edit-page", standalone: true, imports: [CommonModule, FormsModule, RouterLink, TranslateModule, AdminConceptEditorComponent, AdminImageEditorComponent, AdminLiteralEditorComponent], template: `<main class="container-fluid admin-edit">\r
  <header class="admin-edit__header">\r
    <div>\r
      <p class="admin-edit__kicker">{{ 'adminEdit.kicker' | translate }}</p>\r
      <h1>{{ 'adminEdit.title' | translate }}</h1>\r
      <p class="admin-edit__record">{{ 'adminEdit.record' | translate: { id: id() } }}</p>\r
    </div>\r
    <a class="btn btn-outline-secondary" [routerLink]="['/v', id()]">{{ 'adminEdit.back' | translate }}</a>\r
  </header>\r
\r
  <div *ngIf="loading()" class="alert alert-secondary mt-4">{{ 'adminEdit.loading' | translate }}</div>\r
  <div *ngIf="error()" class="alert alert-danger mt-4">{{ error() | translate }}</div>\r
  <div *ngIf="success()" class="alert alert-success mt-4">{{ 'adminEdit.success' | translate }}</div>\r
\r
  <div *ngIf="!loading()" class="rdf-groups">\r
    <section *ngFor="let group of groups(); let groupIndex = index" class="rdf-group">\r
      <h2 class="rdf-group__title">{{ 'adminEdit.groups.' + group.key | translate }}</h2>\r
\r
      <div *ngFor="let property of group.properties; let propertyIndex = index" class="rdf-property">\r
        <div class="rdf-property__label">\r
          <span>{{ property.property }}</span>\r
          <button\r
            type="button"\r
            class="rdf-property__add"\r
            [attr.aria-label]="'adminEdit.add' | translate"\r
            [attr.title]="'adminEdit.add' | translate"\r
            (click)="openNew(groupIndex, propertyIndex)"\r
          >+</button>\r
        </div>\r
\r
        <div class="rdf-property__values" [class.rdf-property__values--empty]="!property.Data.length">\r
          <span *ngIf="!property.Data.length" class="rdf-property__empty">{{ 'adminEdit.noValues' | translate }}</span>\r
\r
          <ng-container *ngFor="let data of property.Data; let dataIndex = index">
            <div *ngIf="dataIndex === 0 || property.Data[dataIndex - 1].n_lang !== data.n_lang" class="rdf-language-separator">
              <span>{{ languageLabel(data.n_lang) }}</span>
            </div>
            <article class="rdf-value">
              <div class="rdf-value__actions">
                <button type="button" class="rdf-icon rdf-icon--delete" [attr.aria-label]="'adminEdit.delete' | translate" [attr.title]="'adminEdit.delete' | translate" (click)="requestDelete(groupIndex, propertyIndex, dataIndex)">
                  <i class="bi bi-trash" aria-hidden="true"></i>
                </button>
                <button *ngIf="canEditData(property, data)" type="button" class="rdf-icon rdf-icon--edit" [attr.aria-label]="'adminEdit.edit' | translate" [attr.title]="'adminEdit.edit' | translate" (click)="openEdit(groupIndex, propertyIndex, dataIndex)">
                  <i class="bi bi-pencil" aria-hidden="true"></i>
                </button>
              </div>
              <div class="rdf-value__content">
                <span>{{ data.n_name || ('adminEdit.unnamed' | translate) }}</span>
                <sup *ngIf="data.n_lang">{{ data.n_lang }}</sup>
              </div>
            </article>
          </ng-container>
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</main>\r
<div *ngIf="editor() as state" class="admin-modal" role="dialog" aria-modal="true" [attr.aria-label]="'adminEdit.modalTitle' | translate">\r
  <div class="admin-modal__backdrop" (click)="closeEditor()"></div>\r
  <section class="admin-modal__panel">\r
    <header><div><span class="admin-edit__eyebrow">{{ state.draft.c_class }}</span><h2>{{ (state.dataIndex === null ? 'adminEdit.addTitle' : 'adminEdit.editTitle') | translate }}</h2></div><button type="button" class="btn-close" [attr.aria-label]="'adminEdit.close' | translate" (click)="closeEditor()"></button></header>
    <div class="admin-modal__body">
      <app-admin-image-editor *ngIf="state.mode === 'image' || state.mode === 'file'; else valueEditor" [mode]="state.mode === 'image' ? 'image' : 'file'" [draft]="state.draft" (fileChange)="selectFile($event)" />
      <ng-template #valueEditor>
        <app-admin-literal-editor *ngIf="isLiteralDraft(state.draft); else conceptEditor" [draft]="state.draft" (change)="updateDraft($event.field, $event.value)" />
        <ng-template #conceptEditor>
          <app-admin-concept-editor
            [draft]="state.draft"
            [query]="autocompleteQuery()"
            [options]="autocompleteOptions()"
            [loading]="autocompleteLoading()"
            [payloadJson]="state.dataIndex === null ? '' : autocompletePayloadJson()"
            (queryChange)="updateAutocompleteQuery($event)"
            (selectionChange)="selectAutocomplete($event)"
            (classChange)="updateDraft('c_class', $event)"
          />
        </ng-template>
      </ng-template>
      <div *ngIf="state.dataIndex !== null" class="admin-modal__parameters">
        <label class="form-label" for="rdf-parameters">JSON</label>
        <pre id="rdf-parameters" aria-live="polite">{{ editorParameters(state.draft) }}</pre>
      </div>
      <div *ngIf="saveResponse() !== null" class="admin-modal__parameters">
        <div id="rdf-save-response" class="alert alert-secondary mb-0" aria-live="polite">
          <p class="mb-1"><strong>Status:</strong> {{ saveResponseStatus() }}</p>
          <p class="mb-0"><strong>Mensagem:</strong> {{ saveResponseMessage() }}</p>
        </div>
      </div>
    </div>
    <footer><button type="button" class="btn btn-outline-secondary" (click)="closeEditor()">{{ 'adminEdit.cancel' | translate }}</button><button type="button" class="btn btn-warning" [disabled]="uploading()" (click)="confirmEditor()">{{ (saveResponse() !== null ? 'adminEdit.close' : (uploading() ? 'adminEdit.uploading' : 'adminEdit.confirm')) | translate }}</button></footer>
  </section>\r
</div>\r
\r
<div *ngIf="deleteTarget() as target" class="admin-modal" role="alertdialog" aria-modal="true">\r
  <div class="admin-modal__backdrop" (click)="cancelDelete()"></div>\r
  <section class="admin-modal__panel admin-modal__panel--small">\r
    <header><h2>{{ 'adminEdit.deleteTitle' | translate }}</h2><button type="button" class="btn-close" (click)="cancelDelete()"></button></header>
    <div class="admin-modal__body">
      <p>{{ 'adminEdit.deleteConfirm' | translate: { name: target.data.n_name } }}</p>
    </div>
    <footer><button type="button" class="btn btn-outline-secondary" (click)="cancelDelete()">Fechar</button><button type="button" class="btn btn-danger" [disabled]="deleting()" (click)="confirmDelete()">{{ deleting() ? 'Excluindo...' : 'Excluir' }}</button></footer>
  </section>\r
</div>
`, styles: ["/* src/app/pages/admin-edit/admin-edit.page.scss */\n:host {\n  display: block;\n  background: #f4f5f6;\n  color: #252a2e;\n}\n.admin-edit {\n  min-height: 100vh;\n  padding: 2rem clamp(1.25rem, 4vw, 4.5rem) 4rem;\n}\n.admin-edit__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  max-width: 116rem;\n  margin: 0 auto 2.5rem;\n}\n.admin-edit__kicker {\n  margin: 0 0 0.25rem;\n  color: #c21874;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.admin-edit__header h1 {\n  margin: 0;\n  font-size: clamp(1.5rem, 2.2vw, 2.1rem);\n  font-weight: 300;\n  letter-spacing: -0.025em;\n}\n.admin-edit__record {\n  margin: 0.35rem 0 0;\n  color: #6c757d;\n}\n.rdf-groups {\n  max-width: 116rem;\n  margin: 0 auto;\n}\n.rdf-group + .rdf-group {\n  margin-top: 2.75rem;\n}\n.rdf-group__title {\n  margin: 0 0 1.15rem;\n  font-size: clamp(1.25rem, 2vw, 1.8rem);\n  font-weight: 300;\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n}\n.rdf-property {\n  display: grid;\n  grid-template-columns: minmax(15rem, 25%) minmax(0, 1fr);\n  align-items: start;\n}\n.rdf-property + .rdf-property {\n  margin-top: 1.05rem;\n}\n.rdf-property__label {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  min-height: 3.25rem;\n  padding: 0.6rem 1.35rem 0.6rem 0;\n  font-size: clamp(0.9rem, 1.1vw, 1.05rem);\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n.rdf-property__add {\n  display: inline-grid;\n  flex: 0 0 auto;\n  width: 1.75rem;\n  height: 1.75rem;\n  place-items: center;\n  padding: 0 0 0.12rem;\n  border: 2px solid #d3177b;\n  border-radius: 50%;\n  background: transparent;\n  color: #d3177b;\n  font-size: 1.45rem;\n  font-weight: 300;\n  line-height: 1;\n  transition: 0.18s ease;\n}\n.rdf-property__add:hover,\n.rdf-property__add:focus-visible {\n  background: #d3177b;\n  color: #fff;\n  box-shadow: 0 0 0 0.25rem rgba(211, 23, 123, 0.14);\n  transform: scale(1.06);\n}\n.rdf-property__values {\n  min-height: 3.25rem;\n  border-top: 2px solid #8a949b;\n  border-left: 2px solid #8a949b;\n}\n.rdf-property__values--empty {\n  display: flex;\n  align-items: center;\n}\n.rdf-property__empty {\n  padding: 0.8rem 1rem;\n  color: #8a949b;\n  font-style: italic;\n}\n.rdf-value {\n  display: flex;\n  gap: 0.65rem;\n  min-height: 3.25rem;\n  padding: 0.55rem 1rem;\n}\n.rdf-value + .rdf-value {\n  border-top: 1px solid #aab1b6;\n}\n.rdf-language-separator {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  border-top: 1px solid rgba(194, 24, 116, 0.32);\n  border-bottom: 1px solid rgba(194, 24, 116, 0.18);\n  background: rgba(194, 24, 116, 0.07);\n  color: #a71363;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.rdf-value__actions {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: flex-start;\n  gap: 0.2rem;\n  padding-top: 0.05rem;\n}\n.rdf-icon {\n  display: inline-grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  border-radius: 0.4rem;\n  background: transparent;\n  color: #5d6368;\n  font-size: 1.25rem;\n  transition: 0.15s ease;\n}\n.rdf-icon:hover,\n.rdf-icon:focus-visible {\n  background: #fff;\n  color: #252a2e;\n  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.13);\n}\n.rdf-icon--delete:hover,\n.rdf-icon--delete:focus-visible {\n  color: #c9293f;\n}\n.rdf-icon--edit:hover,\n.rdf-icon--edit:focus-visible {\n  color: #1266b3;\n}\n.rdf-value__content {\n  min-width: 0;\n  font-size: clamp(0.95rem, 1.15vw, 1.1rem);\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n.rdf-value__content sup {\n  margin-left: 0.35rem;\n  color: #42484c;\n  font-size: 0.65em;\n  font-weight: 500;\n}\n.admin-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 1080;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n}\n.admin-modal__backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(16, 20, 24, 0.62);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.admin-modal__panel {\n  position: relative;\n  width: min(640px, 100%);\n  max-height: calc(100vh - 2rem);\n  overflow: auto;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 1rem;\n  background: var(--bs-body-bg);\n  box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.34);\n  font-size: 0.92rem;\n}\n.admin-modal__panel--small {\n  width: min(460px, 100%);\n}\n.admin-modal__panel header,\n.admin-modal__panel footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.admin-modal__panel header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.admin-modal__panel footer {\n  justify-content: flex-end;\n  border-top: 1px solid var(--bs-border-color);\n  border-bottom: 0;\n}\n.admin-modal__body {\n  padding: 1.25rem;\n}\n.admin-modal__parameters {\n  margin-top: 1.25rem;\n}\n.admin-modal__parameters pre {\n  max-height: 18rem;\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.5rem;\n  background: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  font-size: 0.85rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.admin-edit__eyebrow {\n  color: #c21874;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n:host-context(body.theme-master.theme-dark) {\n  background: #171a1d;\n  color: #edf0f2;\n}\n:host-context(body.theme-master.theme-dark) .rdf-property__values {\n  border-color: #68747c;\n}\n:host-context(body.theme-master.theme-dark) .rdf-value + .rdf-value {\n  border-color: #4d565c;\n}\n:host-context(body.theme-master.theme-dark) .rdf-language-separator {\n  border-color: rgba(241, 123, 185, 0.28);\n  background: rgba(211, 23, 123, 0.1);\n  color: #f17bb9;\n}\n:host-context(body.theme-master.theme-dark) .rdf-icon {\n  color: #bac2c7;\n}\n:host-context(body.theme-master.theme-dark) .rdf-icon:hover {\n  background: #2b3035;\n  color: #fff;\n}\n:host-context(body.theme-master.theme-dark) .rdf-value__content sup {\n  color: #b9c0c5;\n}\n@media (max-width: 767.98px) {\n  .admin-edit {\n    padding: 1.25rem 1rem 3rem;\n  }\n  .admin-edit__header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .admin-edit__header .btn {\n    align-self: flex-start;\n  }\n  .rdf-property {\n    grid-template-columns: 1fr;\n  }\n  .rdf-property__label {\n    justify-content: flex-start;\n    min-height: auto;\n    padding: 0.25rem 0 0.55rem;\n  }\n  .rdf-property__values {\n    margin-left: 0.8rem;\n  }\n  .rdf-group + .rdf-group {\n    margin-top: 2.2rem;\n  }\n}\n/*# sourceMappingURL=admin-edit.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEditPage, { className: "AdminEditPage", filePath: "src/app/pages/admin-edit/admin-edit.page.ts", lineNumber: 79 });
})();
export {
  AdminEditPage
};
//# sourceMappingURL=chunk-4UUXAUSW.mjs.map
