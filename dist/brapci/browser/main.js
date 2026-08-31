import {
  AuthService,
  SessionService
} from "./chunk-JRX6NWBE.js";
import {
  toSignal
} from "./chunk-Y3JQWDW7.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FC3OORFJ.js";
import {
  API_CONFIG
} from "./chunk-IYQHJWZ2.js";
import {
  BasketService
} from "./chunk-IZYDDLZH.js";
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-3F47I5MF.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  DecimalPipe,
  EventEmitter,
  HttpBackend,
  HttpClient,
  Injectable,
  InjectionToken,
  Input,
  Meta,
  NavigationEnd,
  NgIf,
  Output,
  PLATFORM_ID,
  RendererFactory2,
  Router,
  RouterLink,
  RouterOutlet,
  Title,
  bootstrapApplication,
  computed,
  filter,
  importProvidersFrom,
  inject,
  isPlatformBrowser,
  map,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  startWith,
  withEventReplay,
  withFetch,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Y3FCEOIS.js";
import {
  __spreadValues
} from "./chunk-UKK5MWW6.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      prefix: "/assets/i18n/",
      suffix: ".json",
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    return this.http.get(`${this.config.prefix}${lang}${this.config.suffix}${cacheBuster}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/app.routes.ts
var routes = [
  __spreadValues({
    path: "chat",
    loadChildren: () => import("./chunk-W5E7CONC.js").then((m) => m.CHAT_ROUTES)
  }, false ? { \u0275entryName: "src/app/chat/chat.routes.ts" } : {}),
  __spreadValues({
    path: "autoridade",
    loadComponent: () => import("./chunk-X6DSZAES.js").then((m) => m.AutoridadePage)
  }, false ? { \u0275entryName: "src/app/pages/autoridade/autoridade.page.ts" } : {}),
  __spreadValues({
    path: "v/:id",
    loadComponent: () => import("./chunk-GGT2O566.js").then((m) => m.VIdPage)
  }, false ? { \u0275entryName: "src/app/pages/v-id/v-id.page.ts" } : {}),
  __spreadValues({
    path: "admin/a/:id",
    loadComponent: () => import("./chunk-YIOA7C67.js").then((m) => m.AdminEditPage)
  }, false ? { \u0275entryName: "src/app/pages/admin-edit/admin-edit.page.ts" } : {}),
  {
    path: "sobre/brapci",
    redirectTo: "about/brapci",
    pathMatch: "full"
  },
  __spreadValues({
    path: "basket/selected",
    loadComponent: () => import("./chunk-ETFZAHN5.js").then((m) => m.BasketSelectedPage)
  }, false ? { \u0275entryName: "src/app/pages/basket-selected/basket-selected.page.ts" } : {}),
  __spreadValues({
    path: "painel",
    loadComponent: () => import("./chunk-MMTJDMWL.js").then((m) => m.PainelPage)
  }, false ? { \u0275entryName: "src/app/pages/painel/painel.page.ts" } : {}),
  __spreadValues({
    path: "about/:page",
    loadComponent: () => import("./chunk-6CJCD6XE.js").then((m) => m.SobreBrapciPage)
  }, false ? { \u0275entryName: "src/app/pages/sobre-brapci/sobre-brapci.page.ts" } : {}),
  __spreadValues({
    path: "doc",
    loadComponent: () => import("./chunk-HJKG5YBK.js").then((m) => m.DocPage)
  }, false ? { \u0275entryName: "src/app/pages/doc/doc.page.ts" } : {}),
  __spreadValues({
    path: "pq",
    loadComponent: () => import("./chunk-OUY27BGZ.js").then((m) => m.PqPage)
  }, false ? { \u0275entryName: "src/app/pages/pq/pq.page.ts" } : {}),
  __spreadValues({
    path: "revistas",
    loadComponent: () => import("./chunk-QSOCRNWD.js").then((m) => m.RevistasPage)
  }, false ? { \u0275entryName: "src/app/pages/revistas/revistas.page.ts" } : {}),
  __spreadValues({
    path: "revistas/avaliation",
    loadComponent: () => import("./chunk-QBV37IRS.js").then((m) => m.RevistaAvaliationPage)
  }, false ? { \u0275entryName: "src/app/pages/revista-avaliation/revista-avaliation.page.ts" } : {}),
  __spreadValues({
    path: "revistas/timeline",
    loadComponent: () => import("./chunk-VTTOSY6Z.js").then((m) => m.RevistaTimelinePage)
  }, false ? { \u0275entryName: "src/app/pages/revista-timeline/revista-timeline.page.ts" } : {}),
  __spreadValues({
    path: "eventos",
    loadComponent: () => import("./chunk-DBZPPUNW.js").then((m) => m.EventosPage)
  }, false ? { \u0275entryName: "src/app/pages/eventos/eventos.page.ts" } : {}),
  __spreadValues({
    path: "livros",
    loadComponent: () => import("./chunk-KD6RSOZ3.js").then((m) => m.LivrosPage)
  }, false ? { \u0275entryName: "src/app/pages/livros/livros.page.ts" } : {}),
  __spreadValues({
    path: "livros/submit",
    loadComponent: () => import("./chunk-2HJV52PM.js").then((m) => m.LivrosSubmitPage)
  }, false ? { \u0275entryName: "src/app/pages/livros-submit/livros-submit.page.ts" } : {}),
  __spreadValues({
    path: "signin",
    loadComponent: () => import("./chunk-X62ZVZYK.js").then((m) => m.SigninPage)
  }, false ? { \u0275entryName: "src/app/pages/signin/signin.page.ts" } : {}),
  __spreadValues({
    path: "perfil",
    loadComponent: () => import("./chunk-YVDH3N7Q.js").then((m) => m.PerfilPage)
  }, false ? { \u0275entryName: "src/app/pages/perfil/perfil.page.ts" } : {}),
  __spreadValues({
    path: "tools/txt4net",
    loadComponent: () => import("./chunk-CH36IBH4.js").then((m) => m.ToolsTxt4netPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-txt4net/tools-txt4net.page.ts" } : {}),
  __spreadValues({
    path: "tools/txt4network",
    loadComponent: () => import("./chunk-RGLB2NB2.js").then((m) => m.ToolsTxt4networkPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-txt4network/tools-txt4network.page.ts" } : {}),
  __spreadValues({
    path: "tools/term4net",
    loadComponent: () => import("./chunk-LV3KJWAI.js").then((m) => m.ToolsTerm4netPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-term4net/tools-term4net.page.ts" } : {}),
  __spreadValues({
    path: "tools_bibliografics",
    loadComponent: () => import("./chunk-VDUEXUHT.js").then((m) => m.ToolsBibliograficsPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-bibliografics/tools-bibliografics.page.ts" } : {}),
  __spreadValues({
    path: "tools_bibliometric",
    loadComponent: () => import("./chunk-CS4D4RT6.js").then((m) => m.ToolsBibliometricPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-bibliometric/tools-bibliometric.page.ts" } : {}),
  __spreadValues({
    path: "tools_text/specialist",
    loadComponent: () => import("./chunk-2T3WDRFK.js").then((m) => m.ToolsTextSpecialistPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-text-specialist/tools-text-specialist.page.ts" } : {}),
  __spreadValues({
    path: "tools_text",
    loadComponent: () => import("./chunk-BZWPY54L.js").then((m) => m.ToolsTextPage)
  }, false ? { \u0275entryName: "src/app/pages/tools-text/tools-text.page.ts" } : {}),
  __spreadValues({
    path: "cited",
    loadComponent: () => import("./chunk-AFYNJP6B.js").then((m) => m.CitedPage)
  }, false ? { \u0275entryName: "src/app/pages/cited/cited.page.ts" } : {}),
  __spreadValues({
    path: "small_world",
    loadComponent: () => import("./chunk-MPRREHVL.js").then((m) => m.SmallWorldPage)
  }, false ? { \u0275entryName: "src/app/pages/small-world/small-world.page.ts" } : {}),
  __spreadValues({
    path: "statistics",
    loadComponent: () => import("./chunk-NYHRHSHR.js").then((m) => m.StatisticsPage)
  }, false ? { \u0275entryName: "src/app/pages/statistics/statistics.page.ts" } : {}),
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-FVDRPNBO.js").then((m) => m.HomePage)
  }, false ? { \u0275entryName: "src/app/pages/home/home.page.ts" } : {})
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const isAuthRequest = req.url.startsWith("/auth");
  if (!isAuthRequest) {
    return next(req);
  }
  return next(req.clone({ withCredentials: true }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    importProvidersFrom(TranslateModule.forRoot({
      fallbackLang: "pt-br",
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader
      }
    })),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: "/i18n/",
        suffix: ".json"
      }
    },
    {
      provide: API_CONFIG,
      useValue: {
        brapciApiBaseUrl: "https://cip.brapci.inf.br/api",
        authApiBaseUrl: "/auth",
        aiApiBaseUrl: "/api/ai"
      }
    }
  ]
};

// src/app/components/accessibility-panel/accessibility-panel.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function AccessibilityPanelComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 11);
    \u0275\u0275domListener("click", function AccessibilityPanelComponent_For_24_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFontScale(option_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.fontScale === option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, option_r2.labelKey), " ");
  }
}
var AccessibilityPanelComponent = class _AccessibilityPanelComponent {
  fontScale = 1;
  letterSpacing = false;
  cursorLarge = false;
  highlights = false;
  darkMode = false;
  close = new EventEmitter();
  fontScaleChange = new EventEmitter();
  letterSpacingChange = new EventEmitter();
  cursorLargeChange = new EventEmitter();
  highlightsChange = new EventEmitter();
  darkModeChange = new EventEmitter();
  fontOptions = [
    { labelKey: "accessibility.fontOptions.normal", value: 1 },
    { labelKey: "accessibility.fontOptions.large", value: 1.75 },
    { labelKey: "accessibility.fontOptions.giant", value: 2.5 }
  ];
  setFontScale(scale) {
    this.fontScaleChange.emit(scale);
  }
  toggleLetterSpacing() {
    this.letterSpacingChange.emit(!this.letterSpacing);
  }
  toggleCursorLarge() {
    this.cursorLargeChange.emit(!this.cursorLarge);
  }
  toggleHighlights() {
    this.highlightsChange.emit(!this.highlights);
  }
  toggleDarkMode() {
    this.darkModeChange.emit(!this.darkMode);
  }
  static \u0275fac = function AccessibilityPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessibilityPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityPanelComponent, selectors: [["app-accessibility-panel"]], inputs: { fontScale: "fontScale", letterSpacing: "letterSpacing", cursorLarge: "cursorLarge", highlights: "highlights", darkMode: "darkMode" }, outputs: { close: "close", fontScaleChange: "fontScaleChange", letterSpacingChange: "letterSpacingChange", cursorLargeChange: "cursorLargeChange", highlightsChange: "highlightsChange", darkModeChange: "darkModeChange" }, decls: 50, vars: 51, consts: [["role", "dialog", 1, "accessibility-panel", "shadow-lg"], [1, "accessibility-panel__header"], [1, "accessibility-panel__eyebrow"], [1, "accessibility-panel__title"], ["type", "button", 1, "accessibility-panel__close", 3, "click"], ["aria-hidden", "true"], [1, "accessibility-panel__section"], [1, "accessibility-panel__section-head"], [1, "accessibility-panel__button-row"], ["type", "button", 1, "accessibility-panel__chip", 3, "is-active"], ["type", "button", 1, "accessibility-panel__toggle", 3, "click"], ["type", "button", 1, "accessibility-panel__chip", 3, "click"]], template: function AccessibilityPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275domElementStart(2, "header", 1)(3, "div")(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "h2", 3);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "button", 4);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275domListener("click", function AccessibilityPanelComponent_Template_button_click_10_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275domElementStart(12, "span", 5);
      \u0275\u0275text(13, "\xD7");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 6)(15, "div", 7)(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "span");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "number");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 8);
      \u0275\u0275repeaterCreate(23, AccessibilityPanelComponent_For_24_Template, 3, 5, "button", 9, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 6)(26, "div", 7)(27, "strong");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "span");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "button", 10);
      \u0275\u0275domListener("click", function AccessibilityPanelComponent_Template_button_click_34_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "div", 6)(39, "button", 10);
      \u0275\u0275domListener("click", function AccessibilityPanelComponent_Template_button_click_39_listener() {
        return ctx.toggleLetterSpacing();
      });
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "div", 6)(43, "button", 10);
      \u0275\u0275domListener("click", function AccessibilityPanelComponent_Template_button_click_43_listener() {
        return ctx.toggleCursorLarge();
      });
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(46, "div", 6)(47, "button", 10);
      \u0275\u0275domListener("click", function AccessibilityPanelComponent_Template_button_click_47_listener() {
        return ctx.toggleHighlights();
      });
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("accessibility-panel--expanded", ctx.fontScale > 1);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 22, "accessibility.dialogLabel"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 24, "accessibility.eyebrow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 26, "accessibility.title"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 28, "accessibility.close"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 30, "accessibility.fontSize"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 32, ctx.fontScale * 100, "1.0-0"), "%");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.fontOptions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "accessibility.darkMode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.darkMode ? \u0275\u0275pipeBind1(32, 37, "accessibility.on") : \u0275\u0275pipeBind1(33, 39, "accessibility.off"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-active", ctx.darkMode);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.darkMode ? \u0275\u0275pipeBind1(36, 41, "accessibility.disableDarkMode") : \u0275\u0275pipeBind1(37, 43, "accessibility.enableDarkMode"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-active", ctx.letterSpacing);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 45, "accessibility.letterSpacing"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-active", ctx.cursorLarge);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 47, "accessibility.cursorLarge"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-active", ctx.highlights);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 49, "accessibility.highlights"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, DecimalPipe, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.accessibility-panel[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  color: var(--theme-ink);\n  padding: 1rem;\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.75rem);\n  width: min(320px, 92vw);\n  z-index: 1060;\n}\n.accessibility-panel--expanded[_ngcontent-%COMP%] {\n  width: min(80vw, 960px);\n}\n.accessibility-panel__header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.accessibility-panel__eyebrow[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n  letter-spacing: 0.12rem;\n  margin: 0 0 0.15rem;\n  text-transform: uppercase;\n}\n.accessibility-panel__title[_ngcontent-%COMP%] {\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: 1.2rem;\n  margin: 0;\n}\n.accessibility-panel__close[_ngcontent-%COMP%], \n.accessibility-panel__chip[_ngcontent-%COMP%], \n.accessibility-panel__toggle[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.2s ease;\n}\n.accessibility-panel__close[_ngcontent-%COMP%] {\n  align-items: center;\n  background: transparent;\n  color: var(--theme-ink);\n  display: inline-flex;\n  height: 2rem;\n  justify-content: center;\n  width: 2rem;\n}\n.accessibility-panel__close[_ngcontent-%COMP%]:hover, \n.accessibility-panel__close[_ngcontent-%COMP%]:focus-visible, \n.accessibility-panel__chip[_ngcontent-%COMP%]:hover, \n.accessibility-panel__chip[_ngcontent-%COMP%]:focus-visible, \n.accessibility-panel__toggle[_ngcontent-%COMP%]:hover, \n.accessibility-panel__toggle[_ngcontent-%COMP%]:focus-visible {\n  background: var(--theme-sand);\n  border-color: var(--theme-hint);\n  transform: translateY(-1px);\n}\n.accessibility-panel__section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  margin-bottom: 0.95rem;\n}\n.accessibility-panel__section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.accessibility-panel__section-head[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.accessibility-panel__button-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.accessibility-panel__chip[_ngcontent-%COMP%], \n.accessibility-panel__toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--theme-ink);\n  font-size: 0.92rem;\n  padding: 0.55rem 0.7rem;\n  text-align: left;\n}\n.accessibility-panel__chip.is-active[_ngcontent-%COMP%], \n.accessibility-panel__toggle.is-active[_ngcontent-%COMP%] {\n  background: var(--theme-ink);\n  border-color: var(--theme-ink);\n  color: var(--theme-paper);\n}\n.accessibility-panel__toggle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 991.98px) {\n  .accessibility-panel[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n    width: min(92vw, 560px);\n  }\n  .accessibility-panel--expanded[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=accessibility-panel.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityPanelComponent, [{
    type: Component,
    args: [{ selector: "app-accessibility-panel", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <section
      class="accessibility-panel shadow-lg"
      [class.accessibility-panel--expanded]="fontScale > 1"
      role="dialog"
      [attr.aria-label]="'accessibility.dialogLabel' | translate"
    >
      <header class="accessibility-panel__header">
        <div>
          <p class="accessibility-panel__eyebrow">{{ 'accessibility.eyebrow' | translate }}</p>
          <h2 class="accessibility-panel__title">{{ 'accessibility.title' | translate }}</h2>
        </div>
        <button type="button" class="accessibility-panel__close" (click)="close.emit()" [attr.aria-label]="'accessibility.close' | translate">
          <span aria-hidden="true">\xD7</span>
        </button>
      </header>

      <div class="accessibility-panel__section">
        <div class="accessibility-panel__section-head">
          <strong>{{ 'accessibility.fontSize' | translate }}</strong>
          <span>{{ (fontScale * 100) | number:'1.0-0' }}%</span>
        </div>
        <div class="accessibility-panel__button-row">
          @for (option of fontOptions; track option.value) {
            <button
              type="button"
              class="accessibility-panel__chip"
              [class.is-active]="fontScale === option.value"
              (click)="setFontScale(option.value)"
            >
              {{ option.labelKey | translate }}
            </button>
          }
        </div>
      </div>

      <div class="accessibility-panel__section">
        <div class="accessibility-panel__section-head">
          <strong>{{ 'accessibility.darkMode' | translate }}</strong>
          <span>{{ darkMode ? ('accessibility.on' | translate) : ('accessibility.off' | translate) }}</span>
        </div>
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="darkMode" (click)="toggleDarkMode()">
          {{ darkMode ? ('accessibility.disableDarkMode' | translate) : ('accessibility.enableDarkMode' | translate) }}
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="letterSpacing" (click)="toggleLetterSpacing()">
          {{ 'accessibility.letterSpacing' | translate }}
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="cursorLarge" (click)="toggleCursorLarge()">
          {{ 'accessibility.cursorLarge' | translate }}
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="highlights" (click)="toggleHighlights()">
          {{ 'accessibility.highlights' | translate }}
        </button>
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;2b1157db8466a10e12a620e2a5c41c92acc25818edc4d8745f2ed3c0e02b42c6;D:/Projeto/BrapciAngular2/src/app/components/accessibility-panel/accessibility-panel.component.ts */\n:host {\n  display: block;\n}\n.accessibility-panel {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  color: var(--theme-ink);\n  padding: 1rem;\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.75rem);\n  width: min(320px, 92vw);\n  z-index: 1060;\n}\n.accessibility-panel--expanded {\n  width: min(80vw, 960px);\n}\n.accessibility-panel__header {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.accessibility-panel__eyebrow {\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n  letter-spacing: 0.12rem;\n  margin: 0 0 0.15rem;\n  text-transform: uppercase;\n}\n.accessibility-panel__title {\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: 1.2rem;\n  margin: 0;\n}\n.accessibility-panel__close,\n.accessibility-panel__chip,\n.accessibility-panel__toggle {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.2s ease;\n}\n.accessibility-panel__close {\n  align-items: center;\n  background: transparent;\n  color: var(--theme-ink);\n  display: inline-flex;\n  height: 2rem;\n  justify-content: center;\n  width: 2rem;\n}\n.accessibility-panel__close:hover,\n.accessibility-panel__close:focus-visible,\n.accessibility-panel__chip:hover,\n.accessibility-panel__chip:focus-visible,\n.accessibility-panel__toggle:hover,\n.accessibility-panel__toggle:focus-visible {\n  background: var(--theme-sand);\n  border-color: var(--theme-hint);\n  transform: translateY(-1px);\n}\n.accessibility-panel__section {\n  display: grid;\n  gap: 0.55rem;\n  margin-bottom: 0.95rem;\n}\n.accessibility-panel__section:last-child {\n  margin-bottom: 0;\n}\n.accessibility-panel__section-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.accessibility-panel__button-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.accessibility-panel__chip,\n.accessibility-panel__toggle {\n  background: transparent;\n  color: var(--theme-ink);\n  font-size: 0.92rem;\n  padding: 0.55rem 0.7rem;\n  text-align: left;\n}\n.accessibility-panel__chip.is-active,\n.accessibility-panel__toggle.is-active {\n  background: var(--theme-ink);\n  border-color: var(--theme-ink);\n  color: var(--theme-paper);\n}\n.accessibility-panel__toggle {\n  width: 100%;\n}\n@media (max-width: 991.98px) {\n  .accessibility-panel {\n    right: auto;\n    left: 0;\n    width: min(92vw, 560px);\n  }\n  .accessibility-panel--expanded {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=accessibility-panel.component.css.map */\n'] }]
  }], null, { fontScale: [{
    type: Input
  }], letterSpacing: [{
    type: Input
  }], cursorLarge: [{
    type: Input
  }], highlights: [{
    type: Input
  }], darkMode: [{
    type: Input
  }], close: [{
    type: Output
  }], fontScaleChange: [{
    type: Output
  }], letterSpacingChange: [{
    type: Output
  }], cursorLargeChange: [{
    type: Output
  }], highlightsChange: [{
    type: Output
  }], darkModeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityPanelComponent, { className: "AccessibilityPanelComponent", filePath: "src/app/components/accessibility-panel/accessibility-panel.component.ts", lineNumber: 207 });
})();

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  translate = inject(TranslateService);
  sessionService = inject(SessionService);
  languageCookieKey = "brapci_locale";
  supportedLanguages = ["pt-br", "es", "en"];
  init() {
    this.translate.addLangs([...this.supportedLanguages]);
    this.translate.setFallbackLang("pt-br");
    const cookieLanguage = this.sessionService.getCookie(this.languageCookieKey);
    const selected = this.supportedLanguages.includes(cookieLanguage) ? cookieLanguage : "pt-br";
    this.translate.use(selected);
  }
  setLanguage(language) {
    this.translate.use(language);
    this.sessionService.setCookie(this.languageCookieKey, language);
    this.sessionService.setSessionValue(this.languageCookieKey, language);
  }
  getCurrentLanguage() {
    return this.translate.currentLang || this.translate.getFallbackLang() || "pt-br";
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/seo.service.ts
var SeoService = class _SeoService {
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);
  renderer;
  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  updateHomeMetadata(language) {
    const labels = {
      "pt-br": {
        title: "Brapci - Portal de Informacao Cientifica",
        description: "Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO."
      },
      en: {
        title: "Brapci - Scientific Information Portal",
        description: "Brapci portal with authentication, API search and semantic SEO resources."
      },
      es: {
        title: "Brapci - Portal de Informacion Cientifica",
        description: "Portal Brapci con autenticacion, busqueda en API y recursos semanticos para SEO."
      }
    };
    const content = labels[language] ?? labels["pt-br"];
    this.title.setTitle(content.title);
    this.meta.updateTag({ name: "description", content: content.description });
    this.meta.updateTag({ name: "keywords", content: "Brapci, Ciencia da Informacao, SEO, Angular 20, API" });
    this.meta.updateTag({ property: "og:title", content: content.title });
    this.meta.updateTag({ property: "og:description", content: content.description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ name: "twitter:card", content: "summary_large_image" });
    this.applyJsonLd(language);
  }
  applyJsonLd(language) {
    const previous = this.document.getElementById("brapci-jsonld");
    if (previous) {
      previous.remove();
    }
    const data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Brapci",
      inLanguage: language,
      url: "https://cip.brapci.inf.br",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cip.brapci.inf.br/api?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    const script = this.renderer.createElement("script");
    this.renderer.setAttribute(script, "type", "application/ld+json");
    this.renderer.setAttribute(script, "id", "brapci-jsonld");
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.document.head, script);
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/app.ts
var _forTrack02 = ($index, $item) => $item.code;
function App_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "button", 11);
    \u0275\u0275listener("click", function App_Conditional_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleToolsMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 12)(5, "li")(6, "a", 52);
    \u0275\u0275listener("click", function App_Conditional_42_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeToolsMenu());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 53);
    \u0275\u0275listener("click", function App_Conditional_42_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeToolsMenu());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 54);
    \u0275\u0275listener("click", function App_Conditional_42_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeToolsMenu());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li")(18, "a", 55);
    \u0275\u0275listener("click", function App_Conditional_42_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeToolsMenu());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.toolsMenuOpen());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.toolsMenuOpen());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "menu.tools"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r1.toolsMenuOpen());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "menu.toolsBibliographics"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "menu.toolsBibliometric"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "menu.toolsText"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, "menu.navbar.worldSmall"));
  }
}
function App_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-accessibility-panel", 56);
    \u0275\u0275listener("close", function App_Conditional_102_Template_app_accessibility_panel_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAccessibilityPanel());
    })("fontScaleChange", function App_Conditional_102_Template_app_accessibility_panel_fontScaleChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAccessibilityFontScale($event));
    })("letterSpacingChange", function App_Conditional_102_Template_app_accessibility_panel_letterSpacingChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAccessibilityLetterSpacing($event));
    })("cursorLargeChange", function App_Conditional_102_Template_app_accessibility_panel_cursorLargeChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAccessibilityCursorLarge($event));
    })("highlightsChange", function App_Conditional_102_Template_app_accessibility_panel_highlightsChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAccessibilityHighlights($event));
    })("darkModeChange", function App_Conditional_102_Template_app_accessibility_panel_darkModeChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fontScale", ctx_r1.accessibilityFontScale())("letterSpacing", ctx_r1.accessibilityLetterSpacing())("cursorLarge", ctx_r1.accessibilityCursorLarge())("highlights", ctx_r1.accessibilityHighlights())("darkMode", ctx_r1.isDarkMode());
  }
}
function App_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 59);
    \u0275\u0275element(4, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 4, "common.markedDocuments")))("routerLink", "/basket/selected");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.markedCount(), " ");
  }
}
function App_Conditional_109_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", option_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r5.label);
  }
}
function App_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 62);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function App_Conditional_109_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage($event));
    });
    \u0275\u0275repeaterCreate(3, App_Conditional_109_For_4_Template, 2, 2, "option", 63, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 5, "common.selectLanguage")));
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 7, "common.selectLanguage")))("ngModel", ctx_r1.selectedLanguage());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.languageOptions);
  }
}
function App_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function App_Conditional_110_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocsMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 3, "common.login")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "auth.submit"));
  }
}
function App_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 66);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function App_Conditional_111_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocsMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 3, "common.userProfile")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.firstName());
  }
}
function App_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "footer.session"), ": ", ctx_r1.sessionUserLabel());
  }
}
var App = class _App {
  basket = inject(BasketService);
  markedCountSignal = signal(0, ...ngDevMode ? [{ debugName: "markedCountSignal" }] : []);
  markedCount = computed(() => this.markedCountSignal(), ...ngDevMode ? [{ debugName: "markedCount" }] : []);
  authService = inject(AuthService);
  accessibilityPanelOpen = signal(false, ...ngDevMode ? [{ debugName: "accessibilityPanelOpen" }] : []);
  accessibilityFontScale = signal(1, ...ngDevMode ? [{ debugName: "accessibilityFontScale" }] : []);
  accessibilityLetterSpacing = signal(false, ...ngDevMode ? [{ debugName: "accessibilityLetterSpacing" }] : []);
  accessibilityCursorLarge = signal(false, ...ngDevMode ? [{ debugName: "accessibilityCursorLarge" }] : []);
  accessibilityHighlights = signal(false, ...ngDevMode ? [{ debugName: "accessibilityHighlights" }] : []);
  accessibilityStorageKey = "brapci_accessibility";
  constructor() {
    this.languageService.init();
    const currentLanguage = this.languageService.getCurrentLanguage();
    this.selectedLanguage.set(currentLanguage);
    this.seoService.updateHomeMetadata(currentLanguage);
    this.authService.loadUserFromSession();
    this.initializeTheme();
    this.initializeAccessibilityPreferences();
    this.authService.checkSession().subscribe();
    this.markedCountSignal.set(this.basket.count());
    this.basket.changed.subscribe(() => {
      this.markedCountSignal.set(this.basket.count());
    });
  }
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  sessionService = inject(SessionService);
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  themeCookieKey = "brapci_theme";
  currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  firstName = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return "";
    }
    const candidate = user.name.trim() || user.username.trim();
    return candidate.split(/\s+/)[0] ?? "";
  }, ...ngDevMode ? [{ debugName: "firstName" }] : []);
  sessionUserLabel = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return "";
    }
    const name = user.name.trim();
    const username = user.username.trim();
    if (name && username && name !== username) {
      return `${name} (${username})`;
    }
    return name || username;
  }, ...ngDevMode ? [{ debugName: "sessionUserLabel" }] : []);
  selectedLanguage = signal("pt-br", ...ngDevMode ? [{ debugName: "selectedLanguage" }] : []);
  languageOptions = [
    { code: "pt-br", label: "PT-BR", flagSrc: "assets/img/flags/br.svg" },
    { code: "es", label: "ES", flagSrc: "assets/img/flags/es.svg" },
    { code: "en", label: "EN", flagSrc: "assets/img/flags/gb.svg" }
  ];
  selectedLanguageOption = computed(() => this.languageOptions.find((option) => option.code === this.selectedLanguage()) ?? this.languageOptions[0], ...ngDevMode ? [{ debugName: "selectedLanguageOption" }] : []);
  isDarkMode = signal(false, ...ngDevMode ? [{ debugName: "isDarkMode" }] : []);
  docsMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "docsMenuOpen" }] : []);
  toolsMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "toolsMenuOpen" }] : []);
  revistasMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "revistasMenuOpen" }] : []);
  languageMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "languageMenuOpen" }] : []);
  currentUrl = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects), startWith(this.router.url)), { initialValue: this.router.url });
  isDocRoute = computed(() => {
    const url = this.currentUrl();
    return url.startsWith("/doc") || url.startsWith("/sobre/") || url.startsWith("/about/") || url.startsWith("/autoridade") || url.startsWith("/eventos") || url.startsWith("/v/") || url.startsWith("/revistas") || url.startsWith("/pq") || url.startsWith("/signin") || url.startsWith("/perfil") || url.startsWith("/search-boolean") || url.startsWith("/tools_") || url.startsWith("/basket/") || url.startsWith("/chat");
  }, ...ngDevMode ? [{ debugName: "isDocRoute" }] : []);
  setLanguage(language) {
    this.selectedLanguage.set(language);
    this.languageService.setLanguage(language);
    this.seoService.updateHomeMetadata(language);
    this.languageMenuOpen.set(false);
  }
  toggleLanguageMenu() {
    this.languageMenuOpen.update((open) => !open);
  }
  setDarkMode(enabled) {
    this.isDarkMode.set(enabled);
    this.applyThemeClass();
    if (isPlatformBrowser(this.platformId)) {
      const mode = enabled ? "dark" : "light";
      localStorage.setItem(this.themeCookieKey, mode);
      this.sessionService.setCookie(this.themeCookieKey, mode);
    }
    this.authService.updateThemePreference(enabled ? "dark" : "light");
  }
  toggleAccessibilityPanel() {
    this.accessibilityPanelOpen.update((open) => !open);
  }
  closeAccessibilityPanel() {
    this.accessibilityPanelOpen.set(false);
  }
  setAccessibilityFontScale(scale) {
    this.accessibilityFontScale.set(scale);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }
  setAccessibilityLetterSpacing(enabled) {
    this.accessibilityLetterSpacing.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }
  setAccessibilityCursorLarge(enabled) {
    this.accessibilityCursorLarge.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }
  setAccessibilityHighlights(enabled) {
    this.accessibilityHighlights.set(enabled);
    this.applyAccessibilityPreferences();
    this.persistAccessibilityPreferences();
  }
  toggleDocsMenu() {
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
    this.docsMenuOpen.update((open) => !open);
  }
  closeDocsMenu() {
    this.docsMenuOpen.set(false);
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
  }
  toggleToolsMenu() {
    this.docsMenuOpen.set(false);
    this.revistasMenuOpen.set(false);
    this.toolsMenuOpen.update((open) => !open);
  }
  closeToolsMenu() {
    this.toolsMenuOpen.set(false);
  }
  toggleRevistasMenu() {
    this.docsMenuOpen.set(false);
    this.toolsMenuOpen.set(false);
    this.revistasMenuOpen.update((open) => !open);
  }
  closeRevistasMenu() {
    this.revistasMenuOpen.set(false);
  }
  initializeTheme() {
    const userTheme = this.authService.getThemePreference();
    if (!isPlatformBrowser(this.platformId)) {
      this.isDarkMode.set(userTheme === "dark");
      this.applyThemeClass();
      return;
    }
    const cookieTheme = this.sessionService.getCookie(this.themeCookieKey);
    const storedTheme = localStorage.getItem(this.themeCookieKey);
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const persisted = userTheme ?? cookieTheme ?? storedTheme;
    const shouldUseDark = persisted ? persisted === "dark" : preferredDark;
    this.isDarkMode.set(shouldUseDark);
    this.applyThemeClass();
    const mode = shouldUseDark ? "dark" : "light";
    localStorage.setItem(this.themeCookieKey, mode);
    this.sessionService.setCookie(this.themeCookieKey, mode);
    this.authService.updateThemePreference(mode);
  }
  initializeAccessibilityPreferences() {
    if (!isPlatformBrowser(this.platformId)) {
      this.applyAccessibilityPreferences();
      return;
    }
    const raw = localStorage.getItem(this.accessibilityStorageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed.fontScale === "number") {
          this.accessibilityFontScale.set(parsed.fontScale);
        }
        this.accessibilityLetterSpacing.set(!!parsed.letterSpacing);
        this.accessibilityCursorLarge.set(!!parsed.cursorLarge);
        this.accessibilityHighlights.set(!!parsed.highlights);
      } catch {
        localStorage.removeItem(this.accessibilityStorageKey);
      }
    }
    this.applyAccessibilityPreferences();
  }
  persistAccessibilityPreferences() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.setItem(this.accessibilityStorageKey, JSON.stringify({
      fontScale: this.accessibilityFontScale(),
      letterSpacing: this.accessibilityLetterSpacing(),
      cursorLarge: this.accessibilityCursorLarge(),
      highlights: this.accessibilityHighlights()
    }));
  }
  applyAccessibilityPreferences() {
    const body = this.document.body;
    const root = this.document.documentElement;
    body.classList.add("theme-master");
    body.classList.toggle("theme-dark", this.isDarkMode());
    body.classList.toggle("a11y-letter-spacing", this.accessibilityLetterSpacing());
    body.classList.toggle("a11y-cursor-large", this.accessibilityCursorLarge());
    body.classList.toggle("a11y-highlights", this.accessibilityHighlights());
    body.classList.toggle("a11y-text-scale", this.accessibilityFontScale() !== 1);
    root.style.setProperty("--a11y-font-scale", String(this.accessibilityFontScale()));
  }
  applyThemeClass() {
    const body = this.document.body;
    const root = this.document.documentElement;
    body.classList.add("theme-master");
    body.classList.toggle("theme-dark", this.isDarkMode());
    root.style.setProperty("--a11y-font-scale", String(this.accessibilityFontScale()));
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 132, vars: 115, consts: [["role", "navigation", "aria-label", "navegacao principal", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "shadow-sm"], [1, "container"], ["href", "#", "aria-label", "Brapci", 1, "navbar-brand"], ["src", "assets/img/brand_brapci_shadown.png", "alt", "Brapci", 1, "navbar-logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#mainNavbar", "aria-controls", "mainNavbar", "aria-expanded", "false", 1, "navbar-toggler", 3, "aria-label"], [1, "navbar-toggler-icon"], ["id", "mainNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/autoridade", 1, "nav-link", 3, "click"], [1, "nav-item", "dropdown", "docs-dropdown"], ["type", "button", 1, "nav-link", "dropdown-toggle", "btn", "btn-link", 3, "click"], [1, "dropdown-menu"], ["routerLink", "/revistas", 1, "dropdown-item", 3, "click"], ["routerLink", "/revistas/avaliation", 1, "dropdown-item", 3, "click"], ["routerLink", "/revistas/timeline", 1, "dropdown-item", 3, "click"], ["routerLink", "/eventos", 1, "nav-link", 3, "click"], ["routerLink", "/v/101894", 1, "nav-link", 3, "click"], ["routerLink", "/livros", 1, "nav-link", 3, "click"], [1, "nav-item", "dropdown", "docs-dropdown", 3, "show"], ["routerLink", "/about/brapci", 1, "dropdown-item", 3, "click"], ["routerLink", "/about/benancib", 1, "dropdown-item", 3, "click"], ["routerLink", "/about/brapcilivros", 1, "dropdown-item", 3, "click"], ["routerLink", "/about/how_index", 1, "dropdown-item", 3, "click"], ["routerLink", "/pq", 1, "dropdown-item", 3, "click"], ["routerLink", "/about/team", 1, "dropdown-item", 3, "click"], ["routerLink", "/statistics", 1, "dropdown-item", 3, "click"], ["href", "#", 1, "dropdown-item", 3, "click"], ["routerLink", "/doc", 1, "dropdown-item", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], [1, "accessibility-launcher"], ["type", "button", 1, "accessibility-toggle", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-universal-access"], [3, "fontScale", "letterSpacing", "cursorLarge", "highlights", "darkMode"], ["class", "basket-indicator me-2", 4, "ngIf"], [1, "language-picker"], ["type", "button", 1, "language-flag-btn", 3, "click", "aria-label", "title"], ["width", "18", "height", "12", 1, "language-flag", 3, "src", "alt"], ["id", "languageSelect", 1, "form-select", "form-select-sm", "language-select", 3, "ngModel", "aria-label", "title"], ["routerLink", "/signin", 1, "nav-login-link", 3, "aria-label"], ["routerLink", "/perfil", 1, "nav-user-chip", 3, "aria-label"], [1, "footer", "mt-auto", "py-3", "border-top"], [1, "container", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-center", "gap-2"], [1, "footer-meta", "text-center", "text-md-start"], [1, "text-muted"], [1, "text-muted", "footer-session"], [1, "footer-social", 3, "aria-label"], ["href", "https://www.linkedin.com/groups/9831304/", "target", "_blank", "rel", "noreferrer", "title", "LinkedIn", 1, "footer-social-link", 3, "aria-label"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false"], ["d", "M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"], ["href", "https://www.instagram.com/brapci/", "target", "_blank", "rel", "noreferrer", "title", "Instagram", 1, "footer-social-link", 3, "aria-label"], ["d", "M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"], ["routerLink", "/tools_bibliografics", 1, "dropdown-item", 3, "click"], ["routerLink", "/tools_bibliometric", 1, "dropdown-item", 3, "click"], ["routerLink", "/tools_text", 1, "dropdown-item", 3, "click"], ["routerLink", "/small_world", 1, "dropdown-item", 3, "click"], [3, "close", "fontScaleChange", "letterSpacingChange", "cursorLargeChange", "highlightsChange", "darkModeChange", "fontScale", "letterSpacing", "cursorLarge", "highlights", "darkMode"], [1, "basket-indicator", "me-2"], ["id", "basket", 1, "position-relative", 2, "cursor", "pointer", 3, "title", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.83-3.41A2.996 2.996 0 0 0 16 13H8.42l-.94-2H20a1 1 0 0 0 0-2H7.21l-.94-2H4V5h2.42l3.6 7.59-1.35 2.44A2.996 2.996 0 0 0 7 17h10a1 1 0 0 0 0-2h-1.17z"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", 2, "font-size", "0.8em"], ["id", "languageSelect", 1, "form-select", "form-select-sm", "language-select", 3, "ngModelChange", "ngModel", "aria-label", "title"], [3, "ngValue"], ["routerLink", "/signin", 1, "nav-login-link", 3, "click", "aria-label"], ["d", "M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"], ["routerLink", "/perfil", 1, "nav-user-chip", 3, "click", "aria-label"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275element(6, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
      \u0275\u0275listener("click", function App_Template_a_click_10_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li", 10)(14, "button", 11);
      \u0275\u0275listener("click", function App_Template_button_click_14_listener() {
        return ctx.toggleRevistasMenu();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 12)(18, "li")(19, "a", 13);
      \u0275\u0275listener("click", function App_Template_a_click_19_listener() {
        return ctx.closeRevistasMenu();
      });
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 14);
      \u0275\u0275listener("click", function App_Template_a_click_23_listener() {
        return ctx.closeRevistasMenu();
      });
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 15);
      \u0275\u0275listener("click", function App_Template_a_click_27_listener() {
        return ctx.closeRevistasMenu();
      });
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "li", 8)(31, "a", 16);
      \u0275\u0275listener("click", function App_Template_a_click_31_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li", 8)(35, "a", 17);
      \u0275\u0275listener("click", function App_Template_a_click_35_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li", 8)(39, "a", 18);
      \u0275\u0275listener("click", function App_Template_a_click_39_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(42, App_Conditional_42_Template, 21, 20, "li", 19);
      \u0275\u0275elementStart(43, "li", 10)(44, "button", 11);
      \u0275\u0275listener("click", function App_Template_button_click_44_listener() {
        return ctx.toggleDocsMenu();
      });
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "ul", 12)(48, "li")(49, "a", 20);
      \u0275\u0275listener("click", function App_Template_a_click_49_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 21);
      \u0275\u0275listener("click", function App_Template_a_click_53_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 22);
      \u0275\u0275listener("click", function App_Template_a_click_57_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 23);
      \u0275\u0275listener("click", function App_Template_a_click_61_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 24);
      \u0275\u0275listener("click", function App_Template_a_click_65_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 25);
      \u0275\u0275listener("click", function App_Template_a_click_69_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 26);
      \u0275\u0275listener("click", function App_Template_a_click_73_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 27);
      \u0275\u0275listener("click", function App_Template_a_click_77_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 27);
      \u0275\u0275listener("click", function App_Template_a_click_81_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "li")(85, "a", 27);
      \u0275\u0275listener("click", function App_Template_a_click_85_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "li")(89, "a", 27);
      \u0275\u0275listener("click", function App_Template_a_click_89_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 28);
      \u0275\u0275listener("click", function App_Template_a_click_93_listener() {
        return ctx.closeDocsMenu();
      });
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "div", 29)(97, "div", 30)(98, "button", 31);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275listener("click", function App_Template_button_click_98_listener() {
        return ctx.toggleAccessibilityPanel();
      });
      \u0275\u0275element(101, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(102, App_Conditional_102_Template, 1, 5, "app-accessibility-panel", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(103, App_div_103_Template, 7, 6, "div", 34);
      \u0275\u0275elementStart(104, "div", 35)(105, "button", 36);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275listener("click", function App_Template_button_click_105_listener() {
        return ctx.toggleLanguageMenu();
      });
      \u0275\u0275element(108, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(109, App_Conditional_109_Template, 5, 9, "select", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(110, App_Conditional_110_Template, 7, 7, "a", 39)(111, App_Conditional_111_Template, 6, 5, "a", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(112, "router-outlet");
      \u0275\u0275elementStart(113, "footer", 41)(114, "div", 42)(115, "div", 43)(116, "small", 44);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(119, App_Conditional_119_Template, 3, 4, "small", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 46);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementStart(122, "a", 47);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(124, "svg", 48);
      \u0275\u0275element(125, "path", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(126, "a", 50);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(128, "svg", 48);
      \u0275\u0275element(129, "path", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(130, "small", 44);
      \u0275\u0275text(131, "BRAPCI | brapci.inf.br");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(5, 55, "common.toggleNavigation")));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 57, "menu.navbar.authorities"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("show", ctx.revistasMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.revistasMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 59, "menu.navbar.magazines"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("show", ctx.revistasMenuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 61, "journals.publicationsList"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 63, "avaliation.menuItem"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 65, "timeline.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 67, "menu.navbar.events"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 69, "menu.navbar.benancib"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 71, "menu.navbar.books"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentUser() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.docsMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.docsMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 73, "menu.navbar.about"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("show", ctx.docsMenuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 75, "menu.navbar.aboutBrapci"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 77, "menu.navbar.aboutBenancib"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 79, "menu.navbar.aboutBrapciBooks"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 81, "menu.navbar.howIndex"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 83, "pq.menuItem"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 85, "menu.navbar.team"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 87, "menu.navbar.databaseStatistics"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 89, "menu.navbar.subjectIndex"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 91, "menu.navbar.authorIndex"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 93, "menu.navbar.productionIndicator"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 95, "menu.navbar.searchIndicator"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 97, "menu.navbar.apiDoc"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.accessibilityPanelOpen())("aria-label", \u0275\u0275pipeBind1(99, 99, "accessibility.launcherAria"))("title", \u0275\u0275pipeBind1(100, 101, "accessibility.launcherTitle"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.accessibilityPanelOpen() ? 102 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.markedCount() > 0);
      \u0275\u0275advance(2);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(106, 103, "common.openLanguageSelection")));
      \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(107, 105, "common.selectLanguage")));
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.selectedLanguageOption().flagSrc, \u0275\u0275sanitizeUrl)("alt", ctx.selectedLanguageOption().label);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.languageMenuOpen() ? 109 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.currentUser() ? 110 : 111);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(118, 107, "app.title"), " \xA9 2026");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentUser() ? 119 : -1);
      \u0275\u0275advance();
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(121, 109, "footer.socialMedia")));
      \u0275\u0275advance(2);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(123, 111, "footer.linkedIn")));
      \u0275\u0275advance(4);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(127, 113, "footer.instagram")));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    RouterOutlet,
    RouterLink,
    AccessibilityPanelComponent,
    TranslateModule,
    TranslatePipe
  ], styles: ['\n\n.supersmall[_ngcontent-%COMP%], \na.supersmall[_ngcontent-%COMP%], \na.link.supersmall[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  text-decoration: none !important;\n  line-height: 85%;\n}\na.link.supersmall[_ngcontent-%COMP%]:hover, \na.supersmall[_ngcontent-%COMP%]:hover, \n.supersmall[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n[_nghost-%COMP%] {\n  color: var(--theme-ink);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif;\n  min-height: 100dvh;\n  background: var(--theme-bg);\n}\na.link.supersmall[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: green;\n  text-decoration: none;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #483d8b !important;\n  font-family: "Barlow Condensed", sans-serif !important;\n}\n.navbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: "Barlow Condensed", sans-serif !important;\n}\n.navbar-brand[_ngcontent-%COMP%], \n.nav-item[_ngcontent-%COMP%], \n.btn-link[_ngcontent-%COMP%], \n.dropdown-item[_ngcontent-%COMP%] {\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif !important;\n  font-size: 1.1rem;\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-family:\n    "Barlow Condensed",\n    "Times New Roman",\n    sans-serif !important;\n  font-size: 1.2rem;\n}\n.hero[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--theme-line);\n}\n.hero-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  max-width: min(520px, 82vw);\n  width: 100%;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  line-height: 1.1;\n  margin: 0.4rem 0;\n}\n.navbar-logo[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  max-height: 40px;\n  width: clamp(120px, 16vw, 170px);\n}\n.nav-login-link[_ngcontent-%COMP%], \n.nav-user-chip[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.84rem;\n  gap: 0.35rem;\n  line-height: 1;\n  padding: 0.34rem 0.62rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.nav-login-link[_ngcontent-%COMP%]:hover, \n.nav-login-link[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.nav-login-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.nav-user-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: currentColor;\n  height: 1rem;\n  width: 1rem;\n}\n.nav-user-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.docs-dropdown[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  border: 0;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 500;\n  padding: 0.5rem 0.8rem;\n  text-decoration: none;\n}\n.docs-dropdown[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover, \n.docs-dropdown[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:focus-visible, \n.docs-dropdown.show[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.language-picker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.language-flag-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  line-height: 0;\n  cursor: pointer;\n}\n.language-flag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 12px;\n  object-fit: cover;\n  border-radius: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.45);\n}\n.language-select[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;\n  line-height: 1.1;\n  background-color: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n}\n.language-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #fff;\n}\n.docs-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  min-width: 13rem;\n}\n.docs-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.docs-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, \n.docs-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus-visible {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n}\n.theme-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.accessibility-launcher[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.accessibility-toggle[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  height: 2.1rem;\n  justify-content: center;\n  padding: 0;\n  transition:\n    background-color 0.2s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n  width: 2.1rem;\n}\n.accessibility-toggle[_ngcontent-%COMP%]:hover, \n.accessibility-toggle[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #fff;\n  transform: translateY(-1px);\n}\n.accessibility-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: currentColor;\n  height: 1.4rem;\n  width: 1.4rem;\n}\n@media (max-width: 991.98px) {\n  .nav-login-link[_ngcontent-%COMP%], \n   .nav-user-chip[_ngcontent-%COMP%] {\n    margin: 0.45rem 0;\n  }\n  .docs-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.layout[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.footer[_ngcontent-%COMP%] {\n  background: var(--theme-footer);\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.footer-social-link[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  display: inline-flex;\n  height: 2rem;\n  justify-content: center;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n  width: 2rem;\n}\n.footer-social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: currentColor;\n  height: 1rem;\n  width: 1rem;\n}\n.footer-social-link[_ngcontent-%COMP%]:hover, \n.footer-social-link[_ngcontent-%COMP%]:focus-visible {\n  background-color: var(--theme-sand);\n  border-color: var(--theme-hint);\n  color: var(--theme-ink);\n}\n.footer-meta[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n}\n.footer-session[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.01em;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterOutlet,
      RouterLink,
      AccessibilityPanelComponent,
      TranslateModule
    ], template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm" role="navigation" aria-label="navegacao principal">\r
  <div class="container">\r
    <a class="navbar-brand" href="#" aria-label="Brapci">\r
      <img class="navbar-logo" src="assets/img/brand_brapci_shadown.png" alt="Brapci" />\r
    </a>\r
    <button\r
      class="navbar-toggler"\r
      type="button"\r
      data-bs-toggle="collapse"\r
      data-bs-target="#mainNavbar"\r
      aria-controls="mainNavbar"\r
      aria-expanded="false"\r
      aria-label="{{ 'common.toggleNavigation' | translate }}"\r
    >\r
      <span class="navbar-toggler-icon"></span>\r
    </button>\r
\r
    <div class="collapse navbar-collapse" id="mainNavbar">\r
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">\r
        <li class="nav-item">\r
          <a class="nav-link" routerLink="/autoridade" (click)="closeDocsMenu()">{{ 'menu.navbar.authorities' | translate }}</a>\r
        </li>\r
        <li class="nav-item dropdown docs-dropdown" [class.show]="revistasMenuOpen()">\r
          <button\r
            type="button"\r
            class="nav-link dropdown-toggle btn btn-link"\r
            [attr.aria-expanded]="revistasMenuOpen()"\r
            (click)="toggleRevistasMenu()"\r
          >\r
            {{ 'menu.navbar.magazines' | translate }}\r
          </button>\r
          <ul class="dropdown-menu" [class.show]="revistasMenuOpen()">\r
            <li>\r
              <a class="dropdown-item" routerLink="/revistas" (click)="closeRevistasMenu()">{{ 'journals.publicationsList' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/revistas/avaliation" (click)="closeRevistasMenu()">{{ 'avaliation.menuItem' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/revistas/timeline" (click)="closeRevistasMenu()">{{ 'timeline.title' | translate }}</a>\r
            </li>\r
          </ul>\r
        </li>\r
        <li class="nav-item">\r
          <a class="nav-link" routerLink="/eventos" (click)="closeDocsMenu()">{{ 'menu.navbar.events' | translate }}</a>\r
        </li>\r
        <li class="nav-item">\r
          <a class="nav-link" routerLink="/v/101894" (click)="closeDocsMenu()">{{ 'menu.navbar.benancib' | translate }}</a>\r
        </li>\r
        <li class="nav-item">\r
          <a class="nav-link" routerLink="/livros" (click)="closeDocsMenu()">{{ 'menu.navbar.books' | translate }}</a>\r
        </li>\r
        @if (currentUser()) {\r
          <li class="nav-item dropdown docs-dropdown" [class.show]="toolsMenuOpen()">\r
            <button\r
              type="button"\r
              class="nav-link dropdown-toggle btn btn-link"\r
              [attr.aria-expanded]="toolsMenuOpen()"\r
              (click)="toggleToolsMenu()"\r
            >\r
              {{ 'menu.tools' | translate }}\r
            </button>\r
            <ul class="dropdown-menu" [class.show]="toolsMenuOpen()">\r
              <li>\r
                <a class="dropdown-item" routerLink="/tools_bibliografics" (click)="closeToolsMenu()">{{ 'menu.toolsBibliographics' | translate }}</a>\r
              </li>\r
              <li>\r
                <a class="dropdown-item" routerLink="/tools_bibliometric" (click)="closeToolsMenu()">{{ 'menu.toolsBibliometric' | translate }}</a>\r
              </li>\r
              <li>\r
                <a class="dropdown-item" routerLink="/tools_text" (click)="closeToolsMenu()">{{ 'menu.toolsText' | translate }}</a>\r
              </li>\r
              <li>\r
                <a class="dropdown-item"  routerLink="/small_world" (click)="closeToolsMenu()">{{ 'menu.navbar.worldSmall' | translate }}</a>\r
              </li>\r
            </ul>\r
          </li>\r
        }\r
        <li class="nav-item dropdown docs-dropdown" [class.show]="docsMenuOpen()">\r
          <button\r
            type="button"\r
            class="nav-link dropdown-toggle btn btn-link"\r
            [attr.aria-expanded]="docsMenuOpen()"\r
            (click)="toggleDocsMenu()"\r
          >\r
            {{ 'menu.navbar.about' | translate }}\r
          </button>\r
          <ul class="dropdown-menu" [class.show]="docsMenuOpen()">\r
            <li>\r
              <a class="dropdown-item" routerLink="/about/brapci" (click)="closeDocsMenu()">{{ 'menu.navbar.aboutBrapci' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/about/benancib" (click)="closeDocsMenu()">{{ 'menu.navbar.aboutBenancib' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/about/brapcilivros" (click)="closeDocsMenu()">{{ 'menu.navbar.aboutBrapciBooks' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/about/how_index" (click)="closeDocsMenu()">{{ 'menu.navbar.howIndex' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/pq" (click)="closeDocsMenu()">{{ 'pq.menuItem' | translate }}</a>\r
            </li>\r
            <li>
              <a class="dropdown-item" routerLink="/about/team" (click)="closeDocsMenu()">{{ 'menu.navbar.team' | translate }}</a>
            </li>
            <li>
              <a class="dropdown-item" routerLink="/statistics" (click)="closeDocsMenu()">{{ 'menu.navbar.databaseStatistics' | translate }}</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" (click)="closeDocsMenu()">{{ 'menu.navbar.subjectIndex' | translate }}</a>
            </li>\r
            <li>\r
              <a class="dropdown-item" href="#" (click)="closeDocsMenu()">{{ 'menu.navbar.authorIndex' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" href="#" (click)="closeDocsMenu()">{{ 'menu.navbar.productionIndicator' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" href="#" (click)="closeDocsMenu()">{{ 'menu.navbar.searchIndicator' | translate }}</a>\r
            </li>\r
            <li>\r
              <a class="dropdown-item" routerLink="/doc" (click)="closeDocsMenu()">{{ 'menu.navbar.apiDoc' | translate }}</a>\r
            </li>\r
          </ul>\r
        </li>\r
      </ul>\r
\r
      <div class="d-flex align-items-center gap-2">\r
        <div class="accessibility-launcher">\r
          <button\r
            type="button"\r
            class="accessibility-toggle"\r
            [attr.aria-expanded]="accessibilityPanelOpen()"\r
            [attr.aria-label]="'accessibility.launcherAria' | translate"\r
            [attr.title]="'accessibility.launcherTitle' | translate"\r
            (click)="toggleAccessibilityPanel()"\r
          >\r
            <i class="bi bi-universal-access" aria-hidden="true"></i>\r
          </button>\r
\r
          @if (accessibilityPanelOpen()) {\r
            <app-accessibility-panel\r
              [fontScale]="accessibilityFontScale()"\r
              [letterSpacing]="accessibilityLetterSpacing()"\r
              [cursorLarge]="accessibilityCursorLarge()"\r
              [highlights]="accessibilityHighlights()"\r
              [darkMode]="isDarkMode()"\r
              (close)="closeAccessibilityPanel()"\r
              (fontScaleChange)="setAccessibilityFontScale($event)"\r
              (letterSpacingChange)="setAccessibilityLetterSpacing($event)"\r
              (cursorLargeChange)="setAccessibilityCursorLarge($event)"\r
              (highlightsChange)="setAccessibilityHighlights($event)"\r
              (darkModeChange)="setDarkMode($event)"\r
            />\r
          }\r
        </div>\r
\r
        <div class="basket-indicator me-2" *ngIf="markedCount() > 0">\r
          <span id="basket" class="position-relative" title="{{ 'common.markedDocuments' | translate }}" style="cursor:pointer;" [routerLink]="'/basket/selected'">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">\r
              <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.83-3.41A2.996 2.996 0 0 0 16 13H8.42l-.94-2H20a1 1 0 0 0 0-2H7.21l-.94-2H4V5h2.42l3.6 7.59-1.35 2.44A2.996 2.996 0 0 0 7 17h10a1 1 0 0 0 0-2h-1.17z"/>\r
            </svg>\r
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:0.8em;">\r
              {{ markedCount() }}\r
            </span>\r
          </span>\r
        </div>\r
        <div class="language-picker">\r
          <button\r
            type="button"\r
            class="language-flag-btn"\r
            (click)="toggleLanguageMenu()"\r
            aria-label="{{ 'common.openLanguageSelection' | translate }}"\r
            title="{{ 'common.selectLanguage' | translate }}"\r
          >\r
            <img\r
              class="language-flag"\r
              [src]="selectedLanguageOption().flagSrc"\r
              [alt]="selectedLanguageOption().label"\r
              width="18"\r
              height="12"\r
            />\r
          </button>\r
\r
          @if (languageMenuOpen()) {\r
            <select\r
              id="languageSelect"\r
              class="form-select form-select-sm language-select"\r
              [ngModel]="selectedLanguage()"\r
              (ngModelChange)="setLanguage($event)"\r
              aria-label="{{ 'common.selectLanguage' | translate }}"\r
              title="{{ 'common.selectLanguage' | translate }}"\r
            >\r
              @for (option of languageOptions; track option.code) {\r
                <option [ngValue]="option.code">{{ option.label }}</option>\r
              }\r
            </select>\r
          }\r
        </div>\r
\r
        @if (!currentUser()) {\r
          <a class="nav-login-link" routerLink="/signin" (click)="closeDocsMenu()" aria-label="{{ 'common.login' | translate }}">\r
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z" />\r
            </svg>\r
            <span>{{ 'auth.submit' | translate }}</span>\r
          </a>\r
        } @else {\r
          <a class="nav-user-chip" routerLink="/perfil" (click)="closeDocsMenu()" aria-label="{{ 'common.userProfile' | translate }}">\r
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z" />\r
            </svg>\r
            <span>{{ firstName() }}</span>\r
          </a>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
<router-outlet></router-outlet>\r
\r
<footer class="footer mt-auto py-3 border-top">\r
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">\r
    <div class="footer-meta text-center text-md-start">\r
      <small class="text-muted">{{ 'app.title' | translate }} \xA9 2026</small>\r
      @if (currentUser()) {\r
        <small class="text-muted footer-session">{{ 'footer.session' | translate }}: {{ sessionUserLabel() }}</small>\r
      }\r
    </div>\r
    <div class="footer-social" aria-label="{{ 'footer.socialMedia' | translate }}">\r
      <a\r
        class="footer-social-link"\r
        href="https://www.linkedin.com/groups/9831304/"\r
        target="_blank"\r
        rel="noreferrer"\r
        aria-label="{{ 'footer.linkedIn' | translate }}"\r
        title="LinkedIn"\r
      >\r
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z" />\r
        </svg>\r
      </a>\r
      <a\r
        class="footer-social-link"\r
        href="https://www.instagram.com/brapci/"\r
        target="_blank"\r
        rel="noreferrer"\r
        aria-label="{{ 'footer.instagram' | translate }}"\r
        title="Instagram"\r
      >\r
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r
          <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />\r
        </svg>\r
      </a>\r
    </div>\r
    <small class="text-muted">BRAPCI | brapci.inf.br</small>\r
  </div>\r
</footer>\r
`, styles: ['/* src/app/app.scss */\n.supersmall,\na.supersmall,\na.link.supersmall {\n  font-size: 0.75rem !important;\n  text-decoration: none !important;\n  line-height: 85%;\n}\na.link.supersmall:hover,\na.supersmall:hover,\n.supersmall:hover {\n  text-decoration: underline !important;\n}\n:host {\n  color: var(--theme-ink);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif;\n  min-height: 100dvh;\n  background: var(--theme-bg);\n}\na.link.supersmall {\n  font-size: 0.75rem;\n  color: green;\n  text-decoration: none;\n}\n.navbar {\n  background-color: #483d8b !important;\n  font-family: "Barlow Condensed", sans-serif !important;\n}\n.navbar * {\n  font-family: "Barlow Condensed", sans-serif !important;\n}\n.navbar-brand,\n.nav-item,\n.btn-link,\n.dropdown-item {\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif !important;\n  font-size: 1.1rem;\n}\n.nav-link {\n  font-family:\n    "Barlow Condensed",\n    "Times New Roman",\n    sans-serif !important;\n  font-size: 1.2rem;\n}\n.hero {\n  border-bottom: 1px solid var(--theme-line);\n}\n.hero-logo {\n  display: inline-block;\n  height: auto;\n  max-width: min(520px, 82vw);\n  width: 100%;\n}\n.eyebrow {\n  font-size: 0.78rem;\n  letter-spacing: 0.16rem;\n  margin: 0;\n  text-transform: uppercase;\n}\nh1 {\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  line-height: 1.1;\n  margin: 0.4rem 0;\n}\n.navbar-logo {\n  display: block;\n  height: auto;\n  max-height: 40px;\n  width: clamp(120px, 16vw, 170px);\n}\n.nav-login-link,\n.nav-user-chip {\n  align-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.84rem;\n  gap: 0.35rem;\n  line-height: 1;\n  padding: 0.34rem 0.62rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.nav-login-link:hover,\n.nav-login-link:focus-visible {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.nav-login-link svg,\n.nav-user-chip svg {\n  fill: currentColor;\n  height: 1rem;\n  width: 1rem;\n}\n.nav-user-chip {\n  background: rgba(255, 255, 255, 0.12);\n}\n.docs-dropdown .btn-link {\n  border: 0;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 500;\n  padding: 0.5rem 0.8rem;\n  text-decoration: none;\n}\n.docs-dropdown .btn-link:hover,\n.docs-dropdown .btn-link:focus-visible,\n.docs-dropdown.show .btn-link {\n  color: #fff;\n}\n.language-picker {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.language-flag-btn {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  line-height: 0;\n  cursor: pointer;\n}\n.language-flag {\n  display: inline-block;\n  width: 18px;\n  height: 12px;\n  object-fit: cover;\n  border-radius: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.45);\n}\n.language-select {\n  font-size: 0.92rem;\n  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;\n  line-height: 1.1;\n  background-color: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n}\n.language-select option {\n  color: #000;\n  background-color: #fff;\n}\n.docs-dropdown .dropdown-menu {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  min-width: 13rem;\n}\n.docs-dropdown .dropdown-item {\n  color: var(--theme-ink);\n}\n.docs-dropdown .dropdown-item:hover,\n.docs-dropdown .dropdown-item:focus-visible {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n}\n.theme-switch .form-check-input {\n  cursor: pointer;\n}\n.accessibility-launcher {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.accessibility-toggle {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  height: 2.1rem;\n  justify-content: center;\n  padding: 0;\n  transition:\n    background-color 0.2s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n  width: 2.1rem;\n}\n.accessibility-toggle:hover,\n.accessibility-toggle:focus-visible {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #fff;\n  transform: translateY(-1px);\n}\n.accessibility-toggle svg {\n  fill: currentColor;\n  height: 1.4rem;\n  width: 1.4rem;\n}\n@media (max-width: 991.98px) {\n  .nav-login-link,\n  .nav-user-chip {\n    margin: 0.45rem 0;\n  }\n  .docs-dropdown .dropdown-menu {\n    position: static;\n  }\n}\n.layout {\n  flex: 1;\n}\n.card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n}\n.footer {\n  background: var(--theme-footer);\n}\n.footer-social {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.footer-social-link {\n  align-items: center;\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  display: inline-flex;\n  height: 2rem;\n  justify-content: center;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n  width: 2rem;\n}\n.footer-social-link svg {\n  fill: currentColor;\n  height: 1rem;\n  width: 1rem;\n}\n.footer-social-link:hover,\n.footer-social-link:focus-visible {\n  background-color: var(--theme-sand);\n  border-color: var(--theme-hint);\n  color: var(--theme-ink);\n}\n.footer-meta {\n  display: grid;\n  gap: 0.1rem;\n}\n.footer-session {\n  font-size: 0.72rem;\n  letter-spacing: 0.01em;\n}\n.full {\n  width: 100%;\n}\n.small {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 30 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
