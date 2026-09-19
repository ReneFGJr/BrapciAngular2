import {
  BrapciApiService
} from "./chunk-FCV3HS54.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-WUIAYDCK.js";
import {
  takeUntilDestroyed
} from "./chunk-JWX6LNFA.js";
import "./chunk-U6AVKRN4.js";
import {
  CommonModule,
  DatePipe,
  RouterLink
} from "./chunk-BDVW3XMC.js";
import {
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  interval,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-R3SGMIKW.js";
import "./chunk-UKK5MWW6.js";

// src/app/pages/monitor/monitor.page.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ({ time: a0 });
var _forTrack0 = ($index, $item) => $item.ip;
function MonitorPage_Conditional_22_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 17);
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275element(3, "i")(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 20);
    \u0275\u0275elementEnd();
  }
}
function MonitorPage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div")(2, "p", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275element(9, "i", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275repeaterCreate(14, MonitorPage_Conditional_22_For_15_Template, 6, 0, "article", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "monitor.availableNow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "monitor.onlineComputers"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "monitor.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 10, "monitor.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(12, _c0));
  }
}
function MonitorPage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function MonitorPage_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadComputers());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r1.error()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "monitor.tryAgain"));
  }
}
function MonitorPage_Conditional_24_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, "monitor.updatedAt", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind2(2, 1, ctx_r1.updatedAt(), "HH:mm:ss"))));
  }
}
function MonitorPage_Conditional_24_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 33)(1, "div", 34);
    \u0275\u0275element(2, "i", 35)(3, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275element(8, "i", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const computer_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(computer_r3.server);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", computer_r3.ip);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 3, "monitor.onlineStatus"));
  }
}
function MonitorPage_Conditional_24_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, MonitorPage_Conditional_24_Conditional_31_For_2_Template, 13, 5, "article", 33, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.online());
  }
}
function MonitorPage_Conditional_24_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "monitor.noneOnline"));
  }
}
function MonitorPage_Conditional_24_Conditional_33_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 41)(1, "div", 34);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "i", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const computer_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(computer_r4.server);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", computer_r4.ip);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "monitor.offlineStatus"));
  }
}
function MonitorPage_Conditional_24_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 32)(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275repeaterCreate(7, MonitorPage_Conditional_24_Conditional_33_For_8_Template, 12, 5, "article", 41, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "monitor.showOffline"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.offline().length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.offline());
  }
}
function MonitorPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "article", 24)(2, "span");
    \u0275\u0275element(3, "i", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 26)(9, "span");
    \u0275\u0275element(10, "i", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "article", 28)(16, "span");
    \u0275\u0275element(17, "i", 29);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 30)(23, "div")(24, "p", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, MonitorPage_Conditional_24_Conditional_30_Template, 4, 9, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, MonitorPage_Conditional_24_Conditional_31_Template, 3, 0, "div", 16)(32, MonitorPage_Conditional_24_Conditional_32_Template, 5, 3, "div", 31);
    \u0275\u0275conditionalCreate(33, MonitorPage_Conditional_24_Conditional_33_Template, 9, 4, "details", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "monitor.online"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.online().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "monitor.offline"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.offline().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 15, "monitor.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.computers().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 17, "monitor.availableNow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 19, "monitor.onlineComputers"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.updatedAt() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.online().length ? 31 : 32);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.offline().length ? 33 : -1);
  }
}
var MonitorPage = class _MonitorPage {
  api = inject(BrapciApiService);
  destroyRef = inject(DestroyRef);
  computers = signal([], ...ngDevMode ? [{ debugName: "computers" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  refreshing = signal(false, ...ngDevMode ? [{ debugName: "refreshing" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  updatedAt = signal(null, ...ngDevMode ? [{ debugName: "updatedAt" }] : []);
  online = computed(() => this.computers().filter((computer) => computer.status === "On"), ...ngDevMode ? [{ debugName: "online" }] : []);
  offline = computed(() => this.computers().filter((computer) => computer.status === "Off"), ...ngDevMode ? [{ debugName: "offline" }] : []);
  constructor() {
    afterNextRender(() => {
      this.loadComputers();
      interval(3e4).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadComputers(true));
    });
  }
  loadComputers(silent = false) {
    if (this.refreshing())
      return;
    if (!silent)
      this.loading.set(true);
    this.refreshing.set(true);
    this.error.set("");
    this.api.get("tools/monitor").subscribe({
      next: (response) => {
        this.computers.set(this.normalize(response));
        this.updatedAt.set(/* @__PURE__ */ new Date());
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set("monitor.error");
        this.loading.set(false);
        this.refreshing.set(false);
      }
    });
  }
  normalize(response) {
    if (!response || typeof response !== "object")
      return [];
    const root = Array.isArray(response) ? null : response;
    const values = Array.isArray(response) ? response : Array.isArray(root?.["value"]) ? root["value"] : [];
    return values.flatMap((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item))
        return [];
      const record = item;
      const server = String(record["server"] ?? "").trim();
      const ip = String(record["ip"] ?? "").trim();
      const status = String(record["status"] ?? "").trim().toLowerCase() === "on" ? "On" : "Off";
      return server && ip ? [{ server, ip, status }] : [];
    }).sort((a, b) => Number(b.status === "On") - Number(a.status === "On") || a.server.localeCompare(b.server));
  }
  static \u0275fac = function MonitorPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonitorPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonitorPage, selectors: [["app-monitor-page"]], decls: 25, vars: 16, consts: [[1, "monitor-page"], [1, "monitor-hero"], [1, "container"], ["routerLink", "/", 1, "monitor-back"], ["aria-hidden", "true", 1, "bi", "bi-arrow-left"], [1, "monitor-heading"], [1, "monitor-kicker"], [1, "monitor-description"], ["type", "button", 1, "refresh-button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "bi", "bi-arrow-clockwise"], ["aria-live", "polite", 1, "container", "monitor-content"], [1, "monitor-state", "monitor-state--error"], [1, "loading-heading"], [1, "section-kicker"], [1, "loading-indicator"], ["aria-hidden", "true", 1, "bi", "bi-arrow-clockwise", "spinning"], [1, "computer-grid"], ["aria-hidden", "true", 1, "computer-card", "computer-card--loading"], [1, "skeleton", "skeleton-icon"], [1, "skeleton-lines"], [1, "skeleton", "skeleton-badge"], ["aria-hidden", "true", 1, "bi", "bi-exclamation-triangle"], [1, "btn", "btn-primary", 3, "click"], [1, "monitor-summary"], [1, "summary-card", "summary-card--online"], [1, "bi", "bi-check-circle-fill"], [1, "summary-card", "summary-card--offline"], [1, "bi", "bi-x-circle-fill"], [1, "summary-card"], [1, "bi", "bi-pc-display"], [1, "section-heading"], [1, "empty-online"], ["open", "", 1, "offline-section"], [1, "computer-card", "computer-card--online"], [1, "computer-icon"], ["aria-hidden", "true", 1, "bi", "bi-pc-display-horizontal"], [1, "status-dot"], [1, "bi", "bi-hdd-network"], [1, "status-badge"], [1, "bi", "bi-wifi-off"], [1, "computer-grid", "mt-3"], [1, "computer-card", "computer-card--offline"], [1, "bi", "bi-pc-display-horizontal"]], template: function MonitorPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Brapci");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div")(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function MonitorPage_Template_button_click_17_listener() {
        return ctx.loadComputers();
      });
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "section", 10);
      \u0275\u0275conditionalCreate(22, MonitorPage_Conditional_22_Template, 16, 13)(23, MonitorPage_Conditional_23_Template, 8, 6, "div", 11)(24, MonitorPage_Conditional_24_Template, 34, 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "monitor.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "monitor.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "monitor.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.refreshing());
      \u0275\u0275advance();
      \u0275\u0275classProp("spinning", ctx.refreshing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "monitor.refresh"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 22 : ctx.error() ? 23 : 24);
    }
  }, dependencies: [CommonModule, RouterLink, TranslateModule, DatePipe, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.monitor-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  color: var(--theme-ink);\n}\n.monitor-hero[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 2rem;\n  border-bottom: 1px solid var(--theme-line);\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n}\n.monitor-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 1.4rem;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.monitor-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.monitor-kicker[_ngcontent-%COMP%], \n.section-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  color: var(--theme-hint);\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n.monitor-description[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  color: var(--theme-muted);\n}\n.refresh-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.55rem 0.85rem;\n  align-items: center;\n  gap: 0.45rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.55rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  font-weight: 700;\n}\n.refresh-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.monitor-content[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n}\n.loading-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.loading-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n}\n.monitor-summary[_ngcontent-%COMP%] {\n  display: grid;\n  margin-bottom: 2.25rem;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem 1.15rem;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  background: var(--theme-card-bg);\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n}\n.summary-card--online[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-success) 42%, var(--theme-line));\n  background: color-mix(in srgb, var(--theme-success) 15%, var(--theme-card-bg));\n}\n.summary-card--offline[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-error) 42%, var(--theme-line));\n  background: color-mix(in srgb, var(--theme-error) 15%, var(--theme-card-bg));\n}\n.summary-card--online[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n}\n.summary-card--offline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n}\n.section-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.computer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n.computer-card[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.8rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: var(--theme-card-bg);\n}\n.computer-card--online[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 15%, var(--theme-card-bg));\n}\n.computer-card--offline[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-error) 42%, var(--theme-line));\n  border-left: 4px solid var(--theme-error);\n  background: color-mix(in srgb, var(--theme-error) 15%, var(--theme-card-bg));\n}\n.computer-card--loading[_ngcontent-%COMP%] {\n  min-height: 5rem;\n  overflow: hidden;\n}\n.skeleton[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0.45rem;\n  background: var(--theme-sand);\n}\n.skeleton[_ngcontent-%COMP%]::after, \n.skeleton-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.38),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 1.25s infinite;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 2.7rem;\n  height: 2.7rem;\n}\n.skeleton-lines[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n.skeleton-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 65%;\n  height: 0.65rem;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.skeleton-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  width: 85%;\n  height: 0.85rem;\n}\n.skeleton-badge[_ngcontent-%COMP%] {\n  width: 3.8rem;\n  height: 1.35rem;\n  border-radius: 999px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n.computer-icon[_ngcontent-%COMP%] {\n  display: grid;\n  position: relative;\n  width: 2.7rem;\n  height: 2.7rem;\n  place-items: center;\n  border-radius: 0.65rem;\n  color: var(--theme-hint);\n  background: var(--theme-sand);\n  font-size: 1.25rem;\n}\n.status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -0.1rem;\n  bottom: -0.1rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  border: 2px solid var(--theme-card-bg);\n  border-radius: 50%;\n  background: var(--theme-success);\n}\n.computer-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.computer-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: var(--theme-muted);\n  font-family: monospace;\n  font-size: 0.78rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, transparent);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.computer-card--offline[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n  background: color-mix(in srgb, var(--theme-error) 12%, transparent);\n}\n.offline-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--theme-line);\n}\n.offline-section[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  cursor: pointer;\n  font-weight: 600;\n}\n.offline-section[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  background: var(--theme-sand);\n  font-size: 0.72rem;\n}\n.monitor-state[_ngcontent-%COMP%], \n.empty-online[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 16rem;\n  place-items: center;\n  align-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.monitor-state--error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-online[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n  font-size: 2rem;\n}\n@media (max-width: 767.98px) {\n  .monitor-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .monitor-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-heading[_ngcontent-%COMP%], \n   .loading-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=monitor.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonitorPage, [{
    type: Component,
    args: [{ selector: "app-monitor-page", standalone: true, imports: [CommonModule, RouterLink, TranslateModule], template: `<main class="monitor-page">
  <section class="monitor-hero">
    <div class="container">
      <a class="monitor-back" routerLink="/"><i class="bi bi-arrow-left" aria-hidden="true"></i> Brapci</a>
      <div class="monitor-heading">
        <div>
          <p class="monitor-kicker">{{ 'monitor.kicker' | translate }}</p>
          <h1>{{ 'monitor.title' | translate }}</h1>
          <p class="monitor-description">{{ 'monitor.description' | translate }}</p>
        </div>
        <button type="button" class="refresh-button" [disabled]="refreshing()" (click)="loadComputers()">
          <i class="bi bi-arrow-clockwise" [class.spinning]="refreshing()" aria-hidden="true"></i>
          {{ 'monitor.refresh' | translate }}
        </button>
      </div>
    </div>
  </section>

  <section class="container monitor-content" aria-live="polite">
    @if (loading()) {
      <div class="loading-heading">
        <div><p class="section-kicker">{{ 'monitor.availableNow' | translate }}</p><h2>{{ 'monitor.onlineComputers' | translate }}</h2></div>
        <span class="loading-indicator"><i class="bi bi-arrow-clockwise spinning" aria-hidden="true"></i> {{ 'monitor.loading' | translate }}</span>
      </div>
      <div class="computer-grid" [attr.aria-label]="'monitor.loading' | translate">
        @for (placeholder of [1, 2, 3, 4, 5, 6]; track placeholder) {
          <article class="computer-card computer-card--loading" aria-hidden="true">
            <span class="skeleton skeleton-icon"></span>
            <span class="skeleton-lines"><i></i><i></i></span>
            <span class="skeleton skeleton-badge"></span>
          </article>
        }
      </div>
    } @else if (error()) {
      <div class="monitor-state monitor-state--error"><i class="bi bi-exclamation-triangle" aria-hidden="true"></i><p>{{ error() | translate }}</p><button class="btn btn-primary" (click)="loadComputers()">{{ 'monitor.tryAgain' | translate }}</button></div>
    } @else {
      <div class="monitor-summary">
        <article class="summary-card summary-card--online"><span><i class="bi bi-check-circle-fill"></i> {{ 'monitor.online' | translate }}</span><strong>{{ online().length }}</strong></article>
        <article class="summary-card summary-card--offline"><span><i class="bi bi-x-circle-fill"></i> {{ 'monitor.offline' | translate }}</span><strong>{{ offline().length }}</strong></article>
        <article class="summary-card"><span><i class="bi bi-pc-display"></i> {{ 'monitor.total' | translate }}</span><strong>{{ computers().length }}</strong></article>
      </div>

      <div class="section-heading"><div><p class="section-kicker">{{ 'monitor.availableNow' | translate }}</p><h2>{{ 'monitor.onlineComputers' | translate }}</h2></div>@if (updatedAt()) { <small>{{ 'monitor.updatedAt' | translate: { time: (updatedAt() | date:'HH:mm:ss') } }}</small> }</div>
      @if (online().length) {
        <div class="computer-grid">
          @for (computer of online(); track computer.ip) {
            <article class="computer-card computer-card--online">
              <div class="computer-icon"><i class="bi bi-pc-display-horizontal" aria-hidden="true"></i><span class="status-dot"></span></div>
              <div><h3>{{ computer.server }}</h3><p><i class="bi bi-hdd-network"></i> {{ computer.ip }}</p></div>
              <span class="status-badge">{{ 'monitor.onlineStatus' | translate }}</span>
            </article>
          }
        </div>
      } @else { <div class="empty-online"><i class="bi bi-wifi-off"></i><p>{{ 'monitor.noneOnline' | translate }}</p></div> }

      @if (offline().length) {
        <details class="offline-section" open>
          <summary>{{ 'monitor.showOffline' | translate }} <span>{{ offline().length }}</span></summary>
          <div class="computer-grid mt-3">
            @for (computer of offline(); track computer.ip) {
              <article class="computer-card computer-card--offline"><div class="computer-icon"><i class="bi bi-pc-display-horizontal"></i></div><div><h3>{{ computer.server }}</h3><p><i class="bi bi-hdd-network"></i> {{ computer.ip }}</p></div><span class="status-badge">{{ 'monitor.offlineStatus' | translate }}</span></article>
            }
          </div>
        </details>
      }
    }
  </section>
</main>
`, styles: ['/* src/app/pages/monitor/monitor.page.scss */\n:host {\n  display: block;\n}\n.monitor-page {\n  min-height: 70vh;\n  color: var(--theme-ink);\n}\n.monitor-hero {\n  padding: 2.5rem 0 2rem;\n  border-bottom: 1px solid var(--theme-line);\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n}\n.monitor-back {\n  display: inline-flex;\n  margin-bottom: 1.4rem;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.monitor-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.monitor-kicker,\n.section-kicker {\n  margin: 0 0 0.3rem;\n  color: var(--theme-hint);\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh1 {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n.monitor-description {\n  margin: 0.5rem 0 0;\n  color: var(--theme-muted);\n}\n.refresh-button {\n  display: inline-flex;\n  padding: 0.55rem 0.85rem;\n  align-items: center;\n  gap: 0.45rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.55rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  font-weight: 700;\n}\n.refresh-button:disabled {\n  opacity: 0.6;\n}\n.spinning {\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.monitor-content {\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n}\n.loading-heading {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.loading-heading h2 {\n  margin: 0;\n  font-size: 1.35rem;\n}\n.loading-indicator {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n}\n.monitor-summary {\n  display: grid;\n  margin-bottom: 2.25rem;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n.summary-card {\n  display: flex;\n  padding: 1rem 1.15rem;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  background: var(--theme-card-bg);\n}\n.summary-card span {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.summary-card strong {\n  font-size: 1.65rem;\n}\n.summary-card--online {\n  border-color: color-mix(in srgb, var(--theme-success) 42%, var(--theme-line));\n  background: color-mix(in srgb, var(--theme-success) 15%, var(--theme-card-bg));\n}\n.summary-card--offline {\n  border-color: color-mix(in srgb, var(--theme-error) 42%, var(--theme-line));\n  background: color-mix(in srgb, var(--theme-error) 15%, var(--theme-card-bg));\n}\n.summary-card--online i {\n  color: var(--theme-success);\n}\n.summary-card--offline i {\n  color: var(--theme-error);\n}\n.section-heading {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.section-heading h2 {\n  margin: 0;\n  font-size: 1.35rem;\n}\n.section-heading small {\n  color: var(--theme-muted);\n}\n.computer-grid {\n  display: grid;\n  gap: 0.85rem;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n.computer-card {\n  display: grid;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.8rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  background: var(--theme-card-bg);\n}\n.computer-card--online {\n  border-left: 4px solid var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 15%, var(--theme-card-bg));\n}\n.computer-card--offline {\n  border-color: color-mix(in srgb, var(--theme-error) 42%, var(--theme-line));\n  border-left: 4px solid var(--theme-error);\n  background: color-mix(in srgb, var(--theme-error) 15%, var(--theme-card-bg));\n}\n.computer-card--loading {\n  min-height: 5rem;\n  overflow: hidden;\n}\n.skeleton {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0.45rem;\n  background: var(--theme-sand);\n}\n.skeleton::after,\n.skeleton-lines i::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.38),\n      transparent);\n  animation: shimmer 1.25s infinite;\n}\n.skeleton-icon {\n  width: 2.7rem;\n  height: 2.7rem;\n}\n.skeleton-lines {\n  display: grid;\n  gap: 0.55rem;\n}\n.skeleton-lines i {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 65%;\n  height: 0.65rem;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.skeleton-lines i:first-child {\n  width: 85%;\n  height: 0.85rem;\n}\n.skeleton-badge {\n  width: 3.8rem;\n  height: 1.35rem;\n  border-radius: 999px;\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n.computer-icon {\n  display: grid;\n  position: relative;\n  width: 2.7rem;\n  height: 2.7rem;\n  place-items: center;\n  border-radius: 0.65rem;\n  color: var(--theme-hint);\n  background: var(--theme-sand);\n  font-size: 1.25rem;\n}\n.status-dot {\n  position: absolute;\n  right: -0.1rem;\n  bottom: -0.1rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  border: 2px solid var(--theme-card-bg);\n  border-radius: 50%;\n  background: var(--theme-success);\n}\n.computer-card h3 {\n  margin: 0;\n  font-size: 1rem;\n}\n.computer-card p {\n  margin: 0.2rem 0 0;\n  color: var(--theme-muted);\n  font-family: monospace;\n  font-size: 0.78rem;\n}\n.status-badge {\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, transparent);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.computer-card--offline .status-badge {\n  color: var(--theme-error);\n  background: color-mix(in srgb, var(--theme-error) 12%, transparent);\n}\n.offline-section {\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--theme-line);\n}\n.offline-section summary {\n  color: var(--theme-muted);\n  cursor: pointer;\n  font-weight: 600;\n}\n.offline-section summary span {\n  margin-left: 0.35rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  background: var(--theme-sand);\n  font-size: 0.72rem;\n}\n.monitor-state,\n.empty-online {\n  display: grid;\n  min-height: 16rem;\n  place-items: center;\n  align-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.monitor-state--error i,\n.empty-online i {\n  color: var(--theme-error);\n  font-size: 2rem;\n}\n@media (max-width: 767.98px) {\n  .monitor-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .monitor-summary {\n    grid-template-columns: 1fr;\n  }\n  .section-heading,\n  .loading-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=monitor.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonitorPage, { className: "MonitorPage", filePath: "src/app/pages/monitor/monitor.page.ts", lineNumber: 22 });
})();
export {
  MonitorPage
};
//# sourceMappingURL=chunk-ZZSI3CXR.js.map
