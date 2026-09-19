import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-R3SGMIKW.js";

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

export {
  LoadingSpinnerComponent
};
//# sourceMappingURL=chunk-5XHEP7EI.js.map
