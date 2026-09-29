import './polyfills.server.mjs';
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵsanitizeUrl
} from "./chunk-QTSSUGT7.mjs";

// src/app/components/banner-livros/banner-livros.component.ts
var BannerLivrosComponent = class _BannerLivrosComponent {
  logoSrc = signal("/assets/img/logo_brapci_livros.png", ...ngDevMode ? [{ debugName: "logoSrc" }] : []);
  useFallbackLogo() {
    this.logoSrc.set("/assets/img/brand_brapci_shadown.png");
  }
  static \u0275fac = function BannerLivrosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BannerLivrosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerLivrosComponent, selectors: [["app-banner-livros"]], decls: 2, vars: 1, consts: [[1, "image-div"], ["alt", "Brapci Livros", "width", "300", "height", "100", "loading", "lazy", "decoding", "async", 1, "logo", 3, "error", "src"]], template: function BannerLivrosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "img", 1);
      \u0275\u0275domListener("error", function BannerLivrosComponent_Template_img_error_1_listener() {
        return ctx.useFallbackLogo();
      });
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.logoSrc(), \u0275\u0275sanitizeUrl);
    }
  }, styles: ["\n\n.image-div[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  margin-right: calc(50% - 50vw);\n  padding: 1.2rem 1rem;\n  border-radius: 0;\n  background: url(/assets/img/background_library.webp) center center/cover no-repeat;\n  border: none;\n  box-shadow: none;\n}\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  width: min(640px, 92%);\n  max-height: 160px;\n  object-fit: contain;\n  filter: drop-shadow(0 8px 20px rgba(39, 25, 14, 0.2));\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .image-div[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .image-div[_ngcontent-%COMP%] {\n  background: url(/assets/img/background_library.webp) center center/cover no-repeat;\n}\n/*# sourceMappingURL=banner-livros.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BannerLivrosComponent, [{
    type: Component,
    args: [{ selector: "app-banner-livros", standalone: true, template: '<div class="image-div">\r\n  <img\r\n    class="logo"\r\n    [src]="logoSrc()"\r\n    alt="Brapci Livros"\r\n    width="300"\r\n    height="100"\r\n    loading="lazy"\r\n    decoding="async"\r\n    (error)="useFallbackLogo()"\r\n  />\r\n</div>\r\n', styles: ["/* src/app/components/banner-livros/banner-livros.component.scss */\n.image-div {\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  margin-right: calc(50% - 50vw);\n  padding: 1.2rem 1rem;\n  border-radius: 0;\n  background: url(/assets/img/background_library.webp) center center/cover no-repeat;\n  border: none;\n  box-shadow: none;\n}\n.logo {\n  display: block;\n  width: min(640px, 92%);\n  max-height: 160px;\n  object-fit: contain;\n  filter: drop-shadow(0 8px 20px rgba(39, 25, 14, 0.2));\n}\n:host-context(body.theme-master.theme-dark) .image-div {\n  background: url(/assets/img/background_library.webp) center center/cover no-repeat;\n}\n/*# sourceMappingURL=banner-livros.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerLivrosComponent, { className: "BannerLivrosComponent", filePath: "src/app/components/banner-livros/banner-livros.component.ts", lineNumber: 9 });
})();

export {
  BannerLivrosComponent
};
//# sourceMappingURL=chunk-OLVSDB4Y.mjs.map
