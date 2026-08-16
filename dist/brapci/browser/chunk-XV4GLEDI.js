import {
  BookPanelComponent
} from "./chunk-GN4ZEOVP.js";
import {
  BrapciApiService
} from "./chunk-I3Q2WKSF.js";
import {
  BreadcrumbsComponent
} from "./chunk-LTOQCP6Z.js";
import "./chunk-H3IWRHIK.js";
import "./chunk-DKSORO5X.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-PHIXLPJT.js";
import "./chunk-SERRY7FI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-DD5AALCM.js";
import {
  CommonModule,
  Component,
  NgModule,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGL3YMRP.js";
import "./chunk-3OV72XIM.js";

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

// src/app/components/book-btn-submit/book-btn-submit.component.ts
var BookBtnSubmitComponent = class _BookBtnSubmitComponent {
  static \u0275fac = function BookBtnSubmitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookBtnSubmitComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookBtnSubmitComponent, selectors: [["app-book-btn-submit"]], decls: 15, vars: 0, consts: [["href", "/livros/submit", "aria-label", "Submeter livro na Brapci Livros", 1, "submit-btn"], [1, "submit-btn-kicker"], [1, "submit-btn-title"], [1, "submit-btn-copy"], [1, "submit-btn-cta"]], template: function BookBtnSubmitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "a", 0)(1, "span", 1);
      \u0275\u0275text(2, "Brapci Livros");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "INDEXE SEU LIVRO");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 3);
      \u0275\u0275text(6, " E autor de uma obra? ");
      \u0275\u0275domElement(7, "br")(8, "br");
      \u0275\u0275text(9, " Clique aqui para submeter seu livro. ");
      \u0275\u0275domElement(10, "br")(11, "br");
      \u0275\u0275text(12, " Envie agora! Nao tem custo. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 4);
      \u0275\u0275text(14, "Submeter obra");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 0.9rem;\n  height: 100%;\n  min-height: 330px;\n  padding: 1.2rem;\n  border-radius: 20px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      165deg,\n      rgba(39, 24, 13, 0.9) 0%,\n      rgba(99, 62, 31, 0.76) 100%),\n    url(/assets/img/banner_authority.png) center center/cover no-repeat;\n  box-shadow: 0 18px 34px rgba(67, 41, 20, 0.28);\n  color: #fff6e9;\n  border: 1px solid rgba(255, 244, 226, 0.3);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  overflow: hidden;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.01);\n  box-shadow: 0 24px 40px rgba(67, 41, 20, 0.34);\n}\n.submit-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 214, 157, 0.08) 0%,\n      rgba(255, 214, 157, 0) 48%);\n  pointer-events: none;\n}\n.submit-btn-kicker[_ngcontent-%COMP%], \n.submit-btn-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.submit-btn-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  width: fit-content;\n  padding: 0.34rem 0.72rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 210, 138, 0.28) 0%,\n      rgba(255, 239, 211, 0.14) 100%);\n  border: 1px solid rgba(255, 229, 187, 0.65);\n  box-shadow: inset 0 1px 0 rgba(255, 246, 230, 0.35), 0 4px 12px rgba(24, 13, 6, 0.22);\n  color: #ffebc8;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);\n}\n.submit-btn-kicker[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 999px;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #ffe8c1 0%,\n      #ffc867 55%,\n      #b47023 100%);\n  box-shadow: 0 0 0 2px rgba(255, 232, 193, 0.2);\n}\n.submit-btn-kicker[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 1.25rem;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 233, 196, 0.55) 0%,\n      rgba(255, 233, 196, 0) 100%);\n}\n.submit-btn-title[_ngcontent-%COMP%] {\n  font-family: "Barlow Condensed", sans-serif;\n  font-size: clamp(1.45rem, 2.4vw, 1.9rem);\n  line-height: 1;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.34);\n}\n.submit-btn-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.96rem;\n  line-height: 1.4;\n  color: #ffeccc;\n  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.32);\n}\n.submit-btn-cta[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: auto;\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.85rem;\n  border-radius: 999px;\n  background: #ffd27f;\n  color: #3c240f;\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.submit-btn-cta[_ngcontent-%COMP%]::after {\n  content: "->";\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .submit-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      165deg,\n      rgba(26, 16, 10, 0.92) 0%,\n      rgba(69, 44, 22, 0.84) 100%),\n    url(/assets/img/banner_authority.png) center center/cover no-repeat;\n  border-color: rgba(255, 230, 196, 0.34);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .submit-btn-copy[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .submit-btn-copy[_ngcontent-%COMP%] {\n  color: #fff1db;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .submit-btn-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .submit-btn-kicker[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 197, 115, 0.24) 0%,\n      rgba(255, 231, 187, 0.1) 100%);\n  border-color: rgba(255, 220, 165, 0.55);\n  color: #ffe8c1;\n}\n@media (max-width: 991.98px) {\n  .submit-btn[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n}\n/*# sourceMappingURL=book-btn-submit.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookBtnSubmitComponent, [{
    type: Component,
    args: [{ selector: "app-book-btn-submit", standalone: true, template: '<a href="/livros/submit" class="submit-btn" aria-label="Submeter livro na Brapci Livros">\r\n  <span class="submit-btn-kicker">Brapci Livros</span>\r\n  <span class="submit-btn-title">INDEXE SEU LIVRO</span>\r\n  <span class="submit-btn-copy">\r\n    E autor de uma obra?\r\n    <br /><br />\r\n    Clique aqui para submeter seu livro.\r\n    <br /><br />\r\n    Envie agora! Nao tem custo.\r\n  </span>\r\n  <span class="submit-btn-cta">Submeter obra</span>\r\n</a>\r\n', styles: ['/* src/app/components/book-btn-submit/book-btn-submit.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n.submit-btn {\n  position: relative;\n  display: grid;\n  gap: 0.9rem;\n  height: 100%;\n  min-height: 330px;\n  padding: 1.2rem;\n  border-radius: 20px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      165deg,\n      rgba(39, 24, 13, 0.9) 0%,\n      rgba(99, 62, 31, 0.76) 100%),\n    url(/assets/img/banner_authority.png) center center/cover no-repeat;\n  box-shadow: 0 18px 34px rgba(67, 41, 20, 0.28);\n  color: #fff6e9;\n  border: 1px solid rgba(255, 244, 226, 0.3);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  overflow: hidden;\n}\n.submit-btn:hover {\n  transform: translateY(-3px) scale(1.01);\n  box-shadow: 0 24px 40px rgba(67, 41, 20, 0.34);\n}\n.submit-btn::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 214, 157, 0.08) 0%,\n      rgba(255, 214, 157, 0) 48%);\n  pointer-events: none;\n}\n.submit-btn-kicker,\n.submit-btn-title {\n  position: relative;\n  z-index: 1;\n}\n.submit-btn-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  width: fit-content;\n  padding: 0.34rem 0.72rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 210, 138, 0.28) 0%,\n      rgba(255, 239, 211, 0.14) 100%);\n  border: 1px solid rgba(255, 229, 187, 0.65);\n  box-shadow: inset 0 1px 0 rgba(255, 246, 230, 0.35), 0 4px 12px rgba(24, 13, 6, 0.22);\n  color: #ffebc8;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);\n}\n.submit-btn-kicker::before {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 999px;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #ffe8c1 0%,\n      #ffc867 55%,\n      #b47023 100%);\n  box-shadow: 0 0 0 2px rgba(255, 232, 193, 0.2);\n}\n.submit-btn-kicker::after {\n  content: "";\n  width: 1.25rem;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 233, 196, 0.55) 0%,\n      rgba(255, 233, 196, 0) 100%);\n}\n.submit-btn-title {\n  font-family: "Barlow Condensed", sans-serif;\n  font-size: clamp(1.45rem, 2.4vw, 1.9rem);\n  line-height: 1;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.34);\n}\n.submit-btn-copy {\n  position: relative;\n  z-index: 1;\n  font-size: 0.96rem;\n  line-height: 1.4;\n  color: #ffeccc;\n  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.32);\n}\n.submit-btn-cta {\n  position: relative;\n  z-index: 1;\n  margin-top: auto;\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.85rem;\n  border-radius: 999px;\n  background: #ffd27f;\n  color: #3c240f;\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.submit-btn-cta::after {\n  content: "->";\n}\n:host-context(body.theme-master.theme-dark) .submit-btn {\n  background:\n    linear-gradient(\n      165deg,\n      rgba(26, 16, 10, 0.92) 0%,\n      rgba(69, 44, 22, 0.84) 100%),\n    url(/assets/img/banner_authority.png) center center/cover no-repeat;\n  border-color: rgba(255, 230, 196, 0.34);\n}\n:host-context(body.theme-master.theme-dark) .submit-btn-copy {\n  color: #fff1db;\n}\n:host-context(body.theme-master.theme-dark) .submit-btn-kicker {\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 197, 115, 0.24) 0%,\n      rgba(255, 231, 187, 0.1) 100%);\n  border-color: rgba(255, 220, 165, 0.55);\n  color: #ffe8c1;\n}\n@media (max-width: 991.98px) {\n  .submit-btn {\n    min-height: 280px;\n  }\n}\n/*# sourceMappingURL=book-btn-submit.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookBtnSubmitComponent, { className: "BookBtnSubmitComponent", filePath: "src/app/components/book-btn-submit/book-btn-submit.component.ts", lineNumber: 9 });
})();

// src/app/components/book-btn-submit/book-btn-submit.module.ts
var BookBtnSubmitModule = class _BookBtnSubmitModule {
  static \u0275fac = function BookBtnSubmitModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookBtnSubmitModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BookBtnSubmitModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookBtnSubmitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BookBtnSubmitComponent],
      exports: [BookBtnSubmitComponent]
    }]
  }], null, null);
})();

// src/app/components/book-carousel/book-carousel.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function BookCarouselComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function BookCarouselComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, BookCarouselComponent_Conditional_6_For_3_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function BookCarouselComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function BookCarouselComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function BookCarouselComponent_Conditional_8_For_4_Template_button_click_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const book_r4 = ctx_r2.$implicit;
      const \u0275$index_33_r5 = ctx_r2.$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPanel(book_r4, \u0275$index_33_r5));
    });
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r4 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("in-view", ctx_r0.getPositionClass(\u0275$index_33_r5) === "in-view")("right", ctx_r0.getPositionClass(\u0275$index_33_r5) === "right")("left", ctx_r0.getPositionClass(\u0275$index_33_r5) === "left")("far-right", ctx_r0.getPositionClass(\u0275$index_33_r5) === "far-right")("far-left", ctx_r0.getPositionClass(\u0275$index_33_r5) === "far-left");
    \u0275\u0275attribute("aria-label", book_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r4.cover, \u0275\u0275sanitizeUrl)("alt", book_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r4.title);
  }
}
function BookCarouselComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function BookCarouselComponent_Conditional_8_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prev());
    });
    \u0275\u0275text(1, " \u25C0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function BookCarouselComponent_Conditional_8_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.next());
    });
    \u0275\u0275text(3, " \u25B6 ");
    \u0275\u0275elementEnd();
  }
}
function BookCarouselComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 11)(2, "div", 12);
    \u0275\u0275repeaterCreate(3, BookCarouselComponent_Conditional_8_For_4_Template, 4, 14, "button", 13, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, BookCarouselComponent_Conditional_8_Conditional_5_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("transform", ctx_r0.trackTransform());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.books());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasMultipleBooks() ? 5 : -1);
  }
}
var BookCarouselComponent = class _BookCarouselComponent {
  brapciApiService = inject(BrapciApiService);
  stepSize = 188;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  books = signal([], ...ngDevMode ? [{ debugName: "books" }] : []);
  activeIndex = signal(0, ...ngDevMode ? [{ debugName: "activeIndex" }] : []);
  hasMultipleBooks = computed(() => this.books().length > 1, ...ngDevMode ? [{ debugName: "hasMultipleBooks" }] : []);
  trackTransform = computed(() => `translateX(-${this.activeIndex() * this.stepSize}px)`, ...ngDevMode ? [{ debugName: "trackTransform" }] : []);
  panelOpen = signal(false, ...ngDevMode ? [{ debugName: "panelOpen" }] : []);
  panelBookId = signal("", ...ngDevMode ? [{ debugName: "panelBookId" }] : []);
  panelCover = signal("", ...ngDevMode ? [{ debugName: "panelCover" }] : []);
  panelTitle = signal("", ...ngDevMode ? [{ debugName: "panelTitle" }] : []);
  panelData = signal(null, ...ngDevMode ? [{ debugName: "panelData" }] : []);
  constructor() {
    this.loadBooks();
  }
  prev() {
    const total = this.books().length;
    if (total < 2) {
      return;
    }
    this.activeIndex.update((index) => (index - 1 + total) % total);
  }
  next() {
    const total = this.books().length;
    if (total < 2) {
      return;
    }
    this.activeIndex.update((index) => (index + 1) % total);
  }
  setActive(index) {
    const total = this.books().length;
    if (index < 0 || index >= total) {
      return;
    }
    this.activeIndex.set(index);
  }
  openPanel(book, index) {
    this.setActive(index);
    this.panelBookId.set(book.id);
    this.panelCover.set(book.cover);
    this.panelTitle.set(book.title);
    this.panelData.set(null);
    this.brapciApiService.getById(book.id).subscribe({
      next: (data) => {
        this.panelData.set(data);
        this.panelOpen.set(true);
      },
      error: () => {
        this.panelOpen.set(true);
      }
    });
  }
  closePanel() {
    this.panelOpen.set(false);
  }
  getPositionClass(index) {
    const offset = index - this.activeIndex();
    if (offset === 0) {
      return "in-view";
    }
    if (offset === 1) {
      return "right";
    }
    if (offset === -1) {
      return "left";
    }
    if (offset > 1) {
      return "far-right";
    }
    return "far-left";
  }
  loadBooks() {
    this.loading.set(true);
    this.error.set("");
    this.brapciApiService.get("book/vitrine").subscribe({
      next: (response) => {
        const books = (response.news ?? []).map((item, index) => this.mapApiItem(item, index)).filter((item) => item !== null);
        this.books.set(books);
        this.activeIndex.set(0);
        this.loading.set(false);
        if (!books.length) {
          this.error.set("Nenhum livro foi encontrado na vitrine.");
        }
      },
      error: () => {
        this.books.set([]);
        this.error.set("Nao foi possivel carregar a vitrine de livros.");
        this.loading.set(false);
      }
    });
  }
  mapApiItem(item, index) {
    const title = this.cleanText(item.data?.hasTitle);
    const cover = this.cleanText(item.data?.hasCover);
    if (!title || !cover) {
      return null;
    }
    return {
      id: String(item.ID ?? index),
      title,
      cover
    };
  }
  cleanText(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }
  static \u0275fac = function BookCarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookCarouselComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCarouselComponent, selectors: [["app-book-carousel"]], decls: 10, vars: 6, consts: [["aria-labelledby", "book-carousel-title", 1, "book-carousel"], [1, "container"], [1, "row"], [1, "col-sm-12", "book-carousel__headline"], ["id", "book-carousel-title", 1, "mb-0"], ["aria-live", "polite", 1, "book-carousel__catalog", "container"], [1, "book-carousel__catalog", "container"], [3, "closed", "bookId", "cover", "title", "data", "open"], [1, "book-carousel__loading-track"], [1, "book-carousel__skeleton-item"], [1, "book-carousel__message"], [1, "book-carousel__viewport"], [1, "book-carousel__slider"], ["type", "button", 1, "book-carousel__item", 3, "in-view", "right", "left", "far-right", "far-left"], ["type", "button", 1, "book-carousel__item", 3, "click"], ["width", "150", "height", "220", "loading", "lazy", "decoding", "async", 1, "book-carousel__cover", 3, "src", "alt"], [1, "book-carousel__book-title"], ["type", "button", "aria-label", "Livro anterior", 1, "book-carousel__scroll-btn", "left", 3, "click"], ["type", "button", "aria-label", "Proximo livro", 1, "book-carousel__scroll-btn", "right", 3, "click"]], template: function BookCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Novidades");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(6, BookCarouselComponent_Conditional_6_Template, 4, 1, "div", 5)(7, BookCarouselComponent_Conditional_7_Template, 3, 1, "div", 5)(8, BookCarouselComponent_Conditional_8_Template, 6, 3, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-book-panel", 7);
      \u0275\u0275listener("closed", function BookCarouselComponent_Template_app_book_panel_closed_9_listener() {
        return ctx.closePanel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.error() ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275property("bookId", ctx.panelBookId())("cover", ctx.panelCover())("title", ctx.panelTitle())("data", ctx.panelData())("open", ctx.panelOpen());
    }
  }, dependencies: [CommonModule, BookPanelComponent], styles: ['\n\n.book-carousel[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n}\n.book-carousel__headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Barlow Condensed", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #35210f;\n}\n.book-carousel__catalog[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 1.25rem 3.5rem;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 243, 0.98) 0%,\n      rgba(245, 236, 222, 0.98) 100%);\n  border: 1px solid rgba(124, 86, 46, 0.14);\n  box-shadow: 0 22px 44px rgba(92, 63, 29, 0.08);\n}\n.book-carousel__viewport[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.book-carousel__slider[_ngcontent-%COMP%], \n.book-carousel__loading-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  transition: transform 0.35s ease;\n  will-change: transform;\n}\n.book-carousel__item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  width: 172px;\n  flex: 0 0 172px;\n  padding: 0;\n  background: transparent;\n  border: 0;\n  text-align: left;\n  cursor: pointer;\n  opacity: 1;\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n.book-carousel__item.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.08);\n  filter: drop-shadow(0 8px 18px rgba(39, 25, 14, 0.22));\n}\n.book-carousel__item.left[_ngcontent-%COMP%], \n.book-carousel__item.right[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(0.96);\n}\n.book-carousel__item.far-left[_ngcontent-%COMP%], \n.book-carousel__item.far-right[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.book-carousel__cover[_ngcontent-%COMP%] {\n  display: block;\n  width: 172px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 14px;\n  box-shadow: 0 18px 30px rgba(28, 17, 8, 0.18);\n  background: #efe5d5;\n}\n.book-carousel__book-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  min-height: 3.3em;\n  overflow: hidden;\n  font-size: 0.92rem;\n  line-height: 1.35;\n  color: #4e3926;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.book-carousel__scroll-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 1.25rem);\n  z-index: 2;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(76, 47, 25, 0.92);\n  color: #fff7ed;\n  font-size: 1rem;\n  line-height: 1;\n  box-shadow: 0 10px 22px rgba(29, 18, 9, 0.2);\n}\n.book-carousel__scroll-btn.left[_ngcontent-%COMP%] {\n  left: 0.65rem;\n}\n.book-carousel__scroll-btn.right[_ngcontent-%COMP%] {\n  right: 0.65rem;\n}\n.book-carousel__message[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  color: #6d543d;\n}\n.book-carousel__skeleton-item[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 250px;\n  flex: 0 0 172px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(211, 194, 169, 0.55) 0%,\n      rgba(242, 233, 221, 0.9) 50%,\n      rgba(211, 194, 169, 0.55) 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_book-carousel-shimmer 1.3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_book-carousel-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .book-carousel__catalog[_ngcontent-%COMP%] {\n    padding: 1rem 2.8rem;\n  }\n  .book-carousel__item[_ngcontent-%COMP%], \n   .book-carousel__cover[_ngcontent-%COMP%], \n   .book-carousel__skeleton-item[_ngcontent-%COMP%] {\n    width: 136px;\n    flex-basis: 136px;\n  }\n  .book-carousel__cover[_ngcontent-%COMP%], \n   .book-carousel__skeleton-item[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .book-carousel__scroll-btn[_ngcontent-%COMP%] {\n    width: 2.2rem;\n    height: 2.2rem;\n  }\n}\n@media (max-width: 575.98px) {\n  .book-carousel__catalog[_ngcontent-%COMP%] {\n    padding-inline: 2.4rem;\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel[_ngcontent-%COMP%] {\n  background: transparent;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__catalog[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__catalog[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(38, 31, 25, 0.98) 0%,\n      rgba(28, 23, 20, 0.98) 100%);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__book-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__book-title[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__message[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__message[_ngcontent-%COMP%] {\n  color: #d6c4b2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__scroll-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__scroll-btn[_ngcontent-%COMP%] {\n  background: #d9a36a;\n  color: #24180f;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .book-carousel__cover[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .book-carousel__cover[_ngcontent-%COMP%] {\n  background: #332a24;\n}\n/*# sourceMappingURL=book-carousel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookCarouselComponent, [{
    type: Component,
    args: [{ selector: "app-book-carousel", imports: [CommonModule, BookPanelComponent], template: `<section class="book-carousel" aria-labelledby="book-carousel-title">\r
  <div class="container">\r
    <div class="row">\r
      <div class="col-sm-12 book-carousel__headline">\r
        <h2 id="book-carousel-title" class="mb-0">Novidades</h2>\r
      </div>\r
    </div>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="book-carousel__catalog container" aria-live="polite">\r
      <div class="book-carousel__loading-track">\r
        @for (item of [1, 2, 3, 4, 5]; track item) {\r
          <div class="book-carousel__skeleton-item"></div>\r
        }\r
      </div>\r
    </div>\r
  } @else if (error()) {\r
    <div class="book-carousel__catalog container" aria-live="polite">\r
      <div class="book-carousel__message">{{ error() }}</div>\r
    </div>\r
  } @else {\r
    <div class="book-carousel__catalog container">\r
      <div class="book-carousel__viewport">\r
        <div class="book-carousel__slider" [style.transform]="trackTransform()">\r
          @for (book of books(); track book.id; let index = $index) {\r
            <button\r
              type="button"\r
              class="book-carousel__item"\r
              [class.in-view]="getPositionClass(index) === 'in-view'"\r
              [class.right]="getPositionClass(index) === 'right'"\r
              [class.left]="getPositionClass(index) === 'left'"\r
              [class.far-right]="getPositionClass(index) === 'far-right'"\r
              [class.far-left]="getPositionClass(index) === 'far-left'"\r
              [attr.aria-label]="book.title"\r
              (click)="openPanel(book, index)"\r
            >\r
              <img class="book-carousel__cover" [src]="book.cover" [alt]="book.title" width="150" height="220" loading="lazy" decoding="async" />\r
              <span class="book-carousel__book-title">{{ book.title }}</span>\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      @if (hasMultipleBooks()) {\r
        <button type="button" class="book-carousel__scroll-btn left" (click)="prev()" aria-label="Livro anterior">\r
          \u25C0\r
        </button>\r
        <button type="button" class="book-carousel__scroll-btn right" (click)="next()" aria-label="Proximo livro">\r
          \u25B6\r
        </button>\r
      }\r
    </div>\r
  }\r
</section>\r
\r
<app-book-panel\r
  [bookId]="panelBookId()"\r
  [cover]="panelCover()"\r
  [title]="panelTitle()"\r
  [data]="panelData()"\r
  [open]="panelOpen()"\r
  (closed)="closePanel()"\r
></app-book-panel>\r
`, styles: ['/* src/app/components/book-carousel/book-carousel.component.scss */\n.book-carousel {\n  padding-bottom: 0.5rem;\n}\n.book-carousel__headline h2 {\n  font-family: "Barlow Condensed", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #35210f;\n}\n.book-carousel__catalog {\n  position: relative;\n  overflow: hidden;\n  padding: 1.25rem 3.5rem;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 243, 0.98) 0%,\n      rgba(245, 236, 222, 0.98) 100%);\n  border: 1px solid rgba(124, 86, 46, 0.14);\n  box-shadow: 0 22px 44px rgba(92, 63, 29, 0.08);\n}\n.book-carousel__viewport {\n  overflow: hidden;\n}\n.book-carousel__slider,\n.book-carousel__loading-track {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  transition: transform 0.35s ease;\n  will-change: transform;\n}\n.book-carousel__item {\n  display: grid;\n  gap: 0.7rem;\n  width: 172px;\n  flex: 0 0 172px;\n  padding: 0;\n  background: transparent;\n  border: 0;\n  text-align: left;\n  cursor: pointer;\n  opacity: 1;\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n.book-carousel__item.in-view {\n  opacity: 1;\n  transform: scale(1.08);\n  filter: drop-shadow(0 8px 18px rgba(39, 25, 14, 0.22));\n}\n.book-carousel__item.left,\n.book-carousel__item.right {\n  opacity: 1;\n  transform: scale(0.96);\n}\n.book-carousel__item.far-left,\n.book-carousel__item.far-right {\n  opacity: 1;\n}\n.book-carousel__cover {\n  display: block;\n  width: 172px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 14px;\n  box-shadow: 0 18px 30px rgba(28, 17, 8, 0.18);\n  background: #efe5d5;\n}\n.book-carousel__book-title {\n  display: -webkit-box;\n  min-height: 3.3em;\n  overflow: hidden;\n  font-size: 0.92rem;\n  line-height: 1.35;\n  color: #4e3926;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.book-carousel__scroll-btn {\n  position: absolute;\n  top: calc(50% - 1.25rem);\n  z-index: 2;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(76, 47, 25, 0.92);\n  color: #fff7ed;\n  font-size: 1rem;\n  line-height: 1;\n  box-shadow: 0 10px 22px rgba(29, 18, 9, 0.2);\n}\n.book-carousel__scroll-btn.left {\n  left: 0.65rem;\n}\n.book-carousel__scroll-btn.right {\n  right: 0.65rem;\n}\n.book-carousel__message {\n  padding: 1rem 0;\n  color: #6d543d;\n}\n.book-carousel__skeleton-item {\n  width: 172px;\n  height: 250px;\n  flex: 0 0 172px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(211, 194, 169, 0.55) 0%,\n      rgba(242, 233, 221, 0.9) 50%,\n      rgba(211, 194, 169, 0.55) 100%);\n  background-size: 200% 100%;\n  animation: book-carousel-shimmer 1.3s linear infinite;\n}\n@keyframes book-carousel-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .book-carousel__catalog {\n    padding: 1rem 2.8rem;\n  }\n  .book-carousel__item,\n  .book-carousel__cover,\n  .book-carousel__skeleton-item {\n    width: 136px;\n    flex-basis: 136px;\n  }\n  .book-carousel__cover,\n  .book-carousel__skeleton-item {\n    height: 200px;\n  }\n  .book-carousel__scroll-btn {\n    width: 2.2rem;\n    height: 2.2rem;\n  }\n}\n@media (max-width: 575.98px) {\n  .book-carousel__catalog {\n    padding-inline: 2.4rem;\n  }\n}\n:host-context(body.theme-master.theme-dark) .book-carousel {\n  background: transparent;\n}\n:host-context(body.theme-master.theme-dark) .book-carousel__headline h2 {\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .book-carousel__catalog {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(38, 31, 25, 0.98) 0%,\n      rgba(28, 23, 20, 0.98) 100%);\n  border-color: rgba(232, 213, 190, 0.1);\n  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .book-carousel__book-title,\n:host-context(body.theme-master.theme-dark) .book-carousel__message {\n  color: #d6c4b2;\n}\n:host-context(body.theme-master.theme-dark) .book-carousel__scroll-btn {\n  background: #d9a36a;\n  color: #24180f;\n}\n:host-context(body.theme-master.theme-dark) .book-carousel__cover {\n  background: #332a24;\n}\n/*# sourceMappingURL=book-carousel.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCarouselComponent, { className: "BookCarouselComponent", filePath: "src/app/components/book-carousel/book-carousel.component.ts", lineNumber: 30 });
})();

// src/app/components/search-book/search-book.component.ts
var _c02 = (a0) => ["/v", a0];
var _forTrack02 = ($index, $item) => $item.id + $item.title;
function SearchBookComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r1 = ctx.$implicit;
    \u0275\u0275property("value", year_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r1);
  }
}
function SearchBookComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r2 = ctx.$implicit;
    \u0275\u0275property("value", year_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r2);
  }
}
function SearchBookComponent_Conditional_52_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "searchBook.states.loadingResults"));
  }
}
function SearchBookComponent_Conditional_52_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.error()));
  }
}
function SearchBookComponent_Conditional_52_Conditional_3_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c02, item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "searchBook.actions.view"));
  }
}
function SearchBookComponent_Conditional_52_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 27)(1, "div")(2, "h3", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, SearchBookComponent_Conditional_52_Conditional_3_For_2_Conditional_7_Template, 3, 6, "a", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.subtitle || \u0275\u0275pipeBind1(6, 3, "searchBook.results.noMetadata"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.id ? 7 : -1);
  }
}
function SearchBookComponent_Conditional_52_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, SearchBookComponent_Conditional_52_Conditional_3_For_2_Template, 8, 5, "article", 27, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.results());
  }
}
function SearchBookComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275conditionalCreate(1, SearchBookComponent_Conditional_52_Conditional_1_Template, 3, 3, "p", 24)(2, SearchBookComponent_Conditional_52_Conditional_2_Template, 3, 3, "p", 25)(3, SearchBookComponent_Conditional_52_Conditional_3_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : ctx_r2.error() ? 2 : ctx_r2.hasResults() ? 3 : -1);
  }
}
var SearchBookComponent = class _SearchBookComponent {
  brapciApiService = inject(BrapciApiService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  results = signal([], ...ngDevMode ? [{ debugName: "results" }] : []);
  searched = signal(false, ...ngDevMode ? [{ debugName: "searched" }] : []);
  yearsStart = [];
  yearsEnd = [];
  form = new FormGroup({
    term: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    collection: new FormControl("", { nonNullable: true }),
    year_start: new FormControl(1960, { nonNullable: true }),
    year_end: new FormControl((/* @__PURE__ */ new Date()).getFullYear() + 1, { nonNullable: true })
  });
  hasResults = computed(() => this.results().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  constructor() {
    this.initYears();
    this.form.patchValue({
      year_start: this.yearsStart[0],
      year_end: this.yearsEnd[0]
    });
  }
  search() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { term, collection, year_start, year_end } = this.form.getRawValue();
    const normalizedTerm = term.trim();
    if (!normalizedTerm) {
      this.form.controls.term.setErrors({ required: true });
      return;
    }
    const selectedCollection = collection ? [collection] : ["BK", "BC"];
    this.loading.set(true);
    this.error.set("");
    this.searched.set(true);
    this.brapciApiService.search(normalizedTerm, [
      { name: "collection", value: selectedCollection },
      { name: "year_start", value: year_start },
      { name: "year_end", value: year_end },
      { name: "fields", value: "FL" }
    ]).subscribe({
      next: (response) => {
        console.log("Search response:", response);
        const normalized = this.normalizeWorks(response).map((item) => this.mapResult(item)).filter((item) => item !== null);
        this.results.set(normalized);
        this.loading.set(false);
        if (!normalized.length) {
          this.error.set("searchBook.errors.noneFound");
        }
      },
      error: () => {
        this.results.set([]);
        this.loading.set(false);
        this.error.set("searchBook.errors.requestFailed");
      }
    });
  }
  initYears() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear() + 1;
    for (let year = 1960; year <= currentYear; year += 1) {
      this.yearsStart.push(year);
    }
    for (let year = currentYear; year >= 1960; year -= 1) {
      this.yearsEnd.push(year);
    }
  }
  normalizeWorks(response) {
    if (Array.isArray(response)) {
      return response;
    }
    if (response && typeof response === "object") {
      const payload = response;
      if (Array.isArray(payload["works"])) {
        return payload["works"];
      }
      if (Array.isArray(payload["results"])) {
        return payload["results"];
      }
      if (Array.isArray(payload["items"])) {
        return payload["items"];
      }
    }
    return [];
  }
  mapResult(item) {
    const payload = this.extractWorkData(item);
    const id = String(item?.id ?? payload["id"] ?? item?.ID ?? payload["ID"] ?? "").trim();
    const title = String(item?.title ?? item?.TI ?? item?.name ?? payload["title"] ?? payload["TITLE"] ?? payload["TI"] ?? "").trim();
    const year = String(item?.year ?? item?.PY ?? item?.publish_year ?? payload["year"] ?? payload["PY"] ?? "").trim();
    const authors = this.parseAuthors(item);
    if (!title) {
      return null;
    }
    const subtitleParts = [authors, year].filter(Boolean);
    return {
      id,
      title,
      subtitle: subtitleParts.join(" - ")
    };
  }
  parseAuthors(item) {
    const payload = this.extractWorkData(item);
    const raw = item?.authors ?? item?.AU ?? item?.author ?? item?.creator ?? payload["authors"] ?? payload["AUTHORS"] ?? payload["AU"] ?? payload["author"];
    if (Array.isArray(raw)) {
      return raw.map((value) => String(value).trim()).filter(Boolean).slice(0, 3).join(", ");
    }
    return String(raw ?? "").trim();
  }
  extractWorkData(item) {
    if (item?.data && typeof item.data === "object" && !Array.isArray(item.data)) {
      return item.data;
    }
    return {};
  }
  static \u0275fac = function SearchBookComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchBookComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBookComponent, selectors: [["app-search-book"]], decls: 53, vars: 33, consts: [["aria-labelledby", "search-book-title", 1, "search-book"], ["novalidate", "", 1, "search-book__form", 3, "ngSubmit", "formGroup"], [1, "container", "mt-1", "search-book__frame"], [1, "row"], [1, "col-sm-12"], ["id", "search-book-title", 1, "text-center", "mb-4"], [1, "mb-3", "col-sm-12", "col-12"], ["for", "term", 1, "form-label"], ["id", "term", "type", "text", "formControlName", "term", 1, "form-control", 3, "placeholder"], [1, "mb-3", "col-sm-3", "col-6"], ["for", "collection", 1, "form-label", "small"], ["id", "collection", "formControlName", "collection", 1, "form-select"], ["value", ""], ["value", "BK"], ["value", "BC"], [1, "mb-3", "col-sm-2", "col-6"], ["for", "year_start", 1, "form-label", "small"], ["id", "year_start", "formControlName", "year_start", 1, "search-book__year-select"], [3, "value"], ["for", "year_end", 1, "form-label", "small"], ["id", "year_end", "formControlName", "year_end", 1, "search-book__year-select"], [1, "text-center", "col-sm-2", "col-12", "pt-4"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "container", "mt-3"], [1, "mb-0"], [1, "mb-0", "text-danger"], [1, "list-group", "search-book__results"], [1, "list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-start", "gap-3"], [1, "search-book__result-title", "mb-1"], [1, "mb-0", "search-book__result-meta"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"]], template: function SearchBookComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function SearchBookComponent_Template_form_ngSubmit_1_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementStart(8, "sup")(9, "i");
      \u0275\u0275text(10, "beta");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "label", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 8);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9)(18, "label", 10);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 11)(22, "option", 12);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 13);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 14);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(31, "div", 9);
      \u0275\u0275elementStart(32, "div", 15)(33, "label", 16);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "br");
      \u0275\u0275elementStart(37, "select", 17);
      \u0275\u0275repeaterCreate(38, SearchBookComponent_For_39_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 15)(41, "label", 19);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "br");
      \u0275\u0275elementStart(45, "select", 20);
      \u0275\u0275repeaterCreate(46, SearchBookComponent_For_47_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 21)(49, "button", 22);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(52, SearchBookComponent_Conditional_52_Template, 4, 1, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "searchBook.title"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "searchBook.labels.keywords"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 17, "searchBook.placeholders.keywords"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "searchBook.labels.workType"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "searchBook.options.selectType"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "searchBook.options.book"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 25, "searchBook.options.chapter"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 27, "search.filters.year_start"), ":");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.yearsStart);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(43, 29, "search.filters.year_end"), ":");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.yearsEnd);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 31, "search.button"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.searched() ? 52 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.search-book[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-card-bg) 86%, transparent);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  color: var(--theme-ink);\n}\n.search-book__form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);\n}\n.search-book__frame[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);\n}\n.search-book__year-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.375rem;\n  background: var(--theme-paper);\n  color: var(--theme-ink);\n}\n.search-book__results[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.search-book__results[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border-color: var(--theme-line);\n  color: var(--theme-ink);\n}\n.search-book__result-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--theme-ink);\n}\n.search-book__result-meta[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n/*# sourceMappingURL=search-book.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBookComponent, [{
    type: Component,
    args: [{ selector: "app-search-book", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule], template: `<section class="search-book" aria-labelledby="search-book-title">\r
  <form [formGroup]="form" (ngSubmit)="search()" novalidate class="search-book__form">\r
    <div class="container mt-1 search-book__frame">\r
      <div class="row">\r
        <div class="col-sm-12">\r
          <h2 id="search-book-title" class="text-center mb-4">\r
            {{ 'searchBook.title' | translate }} <sup><i>beta</i></sup>\r
          </h2>\r
        </div>\r
\r
        <div class="mb-3 col-sm-12 col-12">\r
          <label for="term" class="form-label">{{ 'searchBook.labels.keywords' | translate }}</label>\r
          <input\r
            id="term"\r
            type="text"\r
            formControlName="term"\r
            [placeholder]="'searchBook.placeholders.keywords' | translate"\r
            class="form-control"\r
          />\r
        </div>\r
\r
        <div class="mb-3 col-sm-3 col-6">\r
          <label for="collection" class="form-label small">{{ 'searchBook.labels.workType' | translate }}</label>\r
          <select id="collection" formControlName="collection" class="form-select">\r
            <option value="">{{ 'searchBook.options.selectType' | translate }}</option>\r
            <option value="BK">{{ 'searchBook.options.book' | translate }}</option>\r
            <option value="BC">{{ 'searchBook.options.chapter' | translate }}</option>\r
          </select>\r
        </div>\r
\r
        <div class="mb-3 col-sm-3 col-6"></div>\r
\r
        <div class="mb-3 col-sm-2 col-6">\r
          <label for="year_start" class="form-label small">{{ 'search.filters.year_start' | translate }}:</label>\r
          <br />\r
          <select id="year_start" formControlName="year_start" class="search-book__year-select">\r
            @for (year of yearsStart; track year) {\r
              <option [value]="year">{{ year }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <div class="mb-3 col-sm-2 col-6">\r
          <label for="year_end" class="form-label small">{{ 'search.filters.year_end' | translate }}:</label>\r
          <br />\r
          <select id="year_end" formControlName="year_end" class="search-book__year-select">\r
            @for (year of yearsEnd; track year) {\r
              <option [value]="year">{{ year }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <div class="text-center col-sm-2 col-12 pt-4">\r
          <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">\r
            {{ 'search.button' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </form>\r
\r
  @if (searched()) {\r
    <div class="container mt-3">\r
      @if (loading()) {\r
        <p class="mb-0">{{ 'searchBook.states.loadingResults' | translate }}</p>\r
      } @else if (error()) {\r
        <p class="mb-0 text-danger">{{ error() | translate }}</p>\r
      } @else if (hasResults()) {\r
        <div class="list-group search-book__results">\r
          @for (item of results(); track item.id + item.title) {\r
            <article class="list-group-item list-group-item-action d-flex justify-content-between align-items-start gap-3">\r
              <div>\r
                <h3 class="search-book__result-title mb-1">{{ item.title }}</h3>\r
                <p class="mb-0 search-book__result-meta">{{ item.subtitle || ('searchBook.results.noMetadata' | translate) }}</p>\r
              </div>\r
\r
              @if (item.id) {\r
                <a class="btn btn-sm btn-outline-primary" [routerLink]="['/v', item.id]">{{ 'searchBook.actions.view' | translate }}</a>\r
              }\r
            </article>\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/components/search-book/search-book.component.scss */\n.search-book {\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-card-bg) 86%, transparent);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  color: var(--theme-ink);\n}\n.search-book__form {\n  padding: 1rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);\n}\n.search-book__frame {\n  padding: 1rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);\n}\n.search-book__year-select {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.375rem;\n  background: var(--theme-paper);\n  color: var(--theme-ink);\n}\n.search-book__results {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.search-book__results .list-group-item {\n  background: var(--theme-card-bg);\n  border-color: var(--theme-line);\n  color: var(--theme-ink);\n}\n.search-book__result-title {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--theme-ink);\n}\n.search-book__result-meta {\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n/*# sourceMappingURL=search-book.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBookComponent, { className: "SearchBookComponent", filePath: "src/app/components/search-book/search-book.component.ts", lineNumber: 21 });
})();

// src/app/pages/livros/livros.page.ts
var LivrosPage = class _LivrosPage {
  static \u0275fac = function LivrosPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivrosPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivrosPage, selectors: [["app-livros-page"]], decls: 23, vars: 0, consts: [["aria-labelledby", "livros-title", 1, "livros-wrap", "py-4"], [1, "container", "livros-shell"], [1, "row", "g-3", "align-items-stretch", "livros-search-row"], [1, "col-sm-8", "col-lg-9", "col-12"], [1, "col-sm-4", "col-lg-3", "col-12"], [1, "livros-grid"], [1, "livros-card"], [1, "livros-card", "livros-card-accent"], ["routerLink", "/", 1, "livros-link"]], template: function LivrosPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-banner-livros");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1);
      \u0275\u0275element(3, "app-breadcrumbs")(4, "app-book-carousel");
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3);
      \u0275\u0275element(7, "app-search-book");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "app-book-btn-submit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "article", 6)(12, "h2");
      \u0275\u0275text(13, "Catalogo em construcao");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, " A rota /livros ja esta ativa e pronta para receber listagens, filtros e integracoes com a API da plataforma. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "article", 7)(17, "h2");
      \u0275\u0275text(18, "Proximo passo sugerido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, " Quando a fonte de dados estiver definida, esta pagina pode evoluir para uma vitrine com busca, categorias e destaques editoriais. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 8);
      \u0275\u0275text(22, "Voltar para a pagina inicial");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    BannerLivrosComponent,
    BreadcrumbsComponent,
    BookCarouselComponent,
    BookBtnSubmitModule,
    BookBtnSubmitComponent,
    SearchBookComponent
  ], styles: ["\n\n.livros-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.9),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.livros-shell[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.livros-hero[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 20px;\n  background: rgba(255, 252, 247, 0.88);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 20px 45px rgba(92, 63, 29, 0.08);\n}\n.livros-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #8a5a2b;\n}\n.livros-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  color: #35210f;\n}\n.livros-lead[_ngcontent-%COMP%] {\n  max-width: 52rem;\n  margin-top: 1rem;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: #5a4634;\n}\n.livros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.livros-search-row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.livros-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.84);\n  border: 1px solid rgba(124, 86, 46, 0.1);\n  box-shadow: 0 14px 32px rgba(92, 63, 29, 0.06);\n}\n.livros-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  font-size: 1.15rem;\n  color: #35210f;\n}\n.livros-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5a4634;\n  line-height: 1.6;\n}\n.livros-card-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4c2f19 0%,\n      #7b5230 100%);\n}\n.livros-card-accent[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.livros-card-accent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f8efe4;\n}\n.livros-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 1rem;\n  color: #fff4e6;\n  font-weight: 600;\n  text-decoration: none;\n}\n.livros-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-wrap[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-hero[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-hero[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%] {\n  background: rgba(37, 31, 26, 0.88);\n  border-color: rgba(232, 213, 190, 0.08);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.26);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-kicker[_ngcontent-%COMP%] {\n  color: #d9a36a;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-title[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-lead[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-lead[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .livros-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d6c4b2;\n}\n/*# sourceMappingURL=livros.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivrosPage, [{
    type: Component,
    args: [{ selector: "app-livros-page", standalone: true, imports: [
      CommonModule,
      RouterLink,
      BannerLivrosComponent,
      BreadcrumbsComponent,
      BookCarouselComponent,
      BookBtnSubmitModule,
      SearchBookComponent
    ], template: '<app-banner-livros></app-banner-livros>\r\n\r\n<section class="livros-wrap py-4" aria-labelledby="livros-title">\r\n  <div class="container livros-shell">\r\n    <app-breadcrumbs></app-breadcrumbs>\r\n\r\n    <app-book-carousel></app-book-carousel>\r\n\r\n    <div class="row g-3 align-items-stretch livros-search-row">\r\n      <div class="col-sm-8 col-lg-9 col-12">\r\n        <app-search-book></app-search-book>\r\n      </div>\r\n\r\n      <div class="col-sm-4 col-lg-3 col-12">\r\n        <app-book-btn-submit></app-book-btn-submit>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="livros-grid">\r\n      <article class="livros-card">\r\n        <h2>Catalogo em construcao</h2>\r\n        <p>\r\n          A rota /livros ja esta ativa e pronta para receber listagens, filtros e integracoes com a\r\n          API da plataforma.\r\n        </p>\r\n      </article>\r\n\r\n      <article class="livros-card livros-card-accent">\r\n        <h2>Proximo passo sugerido</h2>\r\n        <p>\r\n          Quando a fonte de dados estiver definida, esta pagina pode evoluir para uma vitrine com\r\n          busca, categorias e destaques editoriais.\r\n        </p>\r\n        <a class="livros-link" routerLink="/">Voltar para a pagina inicial</a>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/livros/livros.page.scss */\n.livros-wrap {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.9),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.livros-shell {\n  display: grid;\n  gap: 1.5rem;\n}\n.livros-hero {\n  padding: 2rem;\n  border-radius: 20px;\n  background: rgba(255, 252, 247, 0.88);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  box-shadow: 0 20px 45px rgba(92, 63, 29, 0.08);\n}\n.livros-kicker {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #8a5a2b;\n}\n.livros-title {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  color: #35210f;\n}\n.livros-lead {\n  max-width: 52rem;\n  margin-top: 1rem;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: #5a4634;\n}\n.livros-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.livros-search-row {\n  margin: 0;\n}\n.livros-card {\n  padding: 1.5rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.84);\n  border: 1px solid rgba(124, 86, 46, 0.1);\n  box-shadow: 0 14px 32px rgba(92, 63, 29, 0.06);\n}\n.livros-card h2 {\n  margin-bottom: 0.75rem;\n  font-size: 1.15rem;\n  color: #35210f;\n}\n.livros-card p {\n  margin: 0;\n  color: #5a4634;\n  line-height: 1.6;\n}\n.livros-card-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #4c2f19 0%,\n      #7b5230 100%);\n}\n.livros-card-accent h2,\n.livros-card-accent p {\n  color: #f8efe4;\n}\n.livros-link {\n  display: inline-flex;\n  margin-top: 1rem;\n  color: #fff4e6;\n  font-weight: 600;\n  text-decoration: none;\n}\n.livros-link:hover {\n  text-decoration: underline;\n}\n:host-context(body.theme-master.theme-dark) .livros-wrap {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\n:host-context(body.theme-master.theme-dark) .livros-hero,\n:host-context(body.theme-master.theme-dark) .livros-card {\n  background: rgba(37, 31, 26, 0.88);\n  border-color: rgba(232, 213, 190, 0.08);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.26);\n}\n:host-context(body.theme-master.theme-dark) .livros-kicker {\n  color: #d9a36a;\n}\n:host-context(body.theme-master.theme-dark) .livros-title,\n:host-context(body.theme-master.theme-dark) .livros-card h2 {\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .livros-lead,\n:host-context(body.theme-master.theme-dark) .livros-card p {\n  color: #d6c4b2;\n}\n/*# sourceMappingURL=livros.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivrosPage, { className: "LivrosPage", filePath: "src/app/pages/livros/livros.page.ts", lineNumber: 25 });
})();
export {
  LivrosPage
};
//# sourceMappingURL=chunk-XV4GLEDI.js.map
