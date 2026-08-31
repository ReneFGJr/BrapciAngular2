import {
  BreadcrumbsComponent
} from "./chunk-RFP7KIPN.js";
import {
  AuthService
} from "./chunk-JRX6NWBE.js";
import {
  toSignal
} from "./chunk-Y3JQWDW7.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3F47I5MF.js";
import {
  CommonModule,
  Component,
  DatePipe,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y3FCEOIS.js";
import {
  __async
} from "./chunk-UKK5MWW6.js";

// src/app/pages/perfil/perfil.page.ts
function PerfilPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "profile.notLogged"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "profile.goToLogin"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.apiTokenCopied"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.apiTokenCopyError"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_51_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx, "short"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_51_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 13)(1, "div", 14)(2, "dt");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "dt");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "dt");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "dt");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd");
    \u0275\u0275conditionalCreate(30, PerfilPage_Conditional_9_Conditional_0_Conditional_51_Conditional_30_Template, 2, 4)(31, PerfilPage_Conditional_9_Conditional_0_Conditional_51_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const localUserData_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "profile.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "profile.username"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r3.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "profile.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "profile.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r3.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 18, "profile.sessionExpiresAt"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.localSessionExpiresAtDate()) ? 30 : 31, tmp_14_0);
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.noLocalUser"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.externalProfileUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "profile.openExternal"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "section", 12)(10, "dl", 13)(11, "div", 14)(12, "dt");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "dt");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "dt");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "dt");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "section", 15)(36, "h2", 16);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 17);
    \u0275\u0275element(40, "input", 18);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "button", 19);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyUserApiToken());
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(45, PerfilPage_Conditional_9_Conditional_0_Conditional_45_Template, 3, 3, "p", 20)(46, PerfilPage_Conditional_9_Conditional_0_Conditional_46_Template, 3, 3, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "section", 22)(48, "h2", 16);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(51, PerfilPage_Conditional_9_Conditional_0_Conditional_51_Template, 32, 20, "dl", 13)(52, PerfilPage_Conditional_9_Conditional_0_Conditional_52_Template, 3, 3, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 24);
    \u0275\u0275conditionalCreate(54, PerfilPage_Conditional_9_Conditional_0_Conditional_54_Template, 3, 4, "a", 25);
    \u0275\u0275elementStart(55, "button", 26);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const user_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.name || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "auth.welcome"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "profile.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 25, "profile.username"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 27, "profile.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "profile.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 31, "profile.apiTokenTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.userApiToken() || "-");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(41, 33, "profile.apiTokenTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.userApiToken());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 35, "profile.copyApiToken"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.copyStatus() === "success" ? 45 : ctx_r1.copyStatus() === "error" ? 46 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 37, "profile.localUserTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_21_0 = ctx_r1.localUser()) ? 51 : 52, tmp_21_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.externalProfileUrl() ? 54 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 39, "auth.logout"), " ");
  }
}
function PerfilPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PerfilPage_Conditional_9_Conditional_0_Template, 58, 41);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.currentUser()) ? 0 : -1, tmp_1_0);
  }
}
var PerfilPage = class _PerfilPage {
  authService = inject(AuthService);
  externalProfileBaseUrl = "https://cip.brapci.inf.br/social/token/?token=";
  copyFeedbackTimeoutMs = 2500;
  currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  isLogged = computed(() => !!this.currentUser(), ...ngDevMode ? [{ debugName: "isLogged" }] : []);
  copyStatus = signal("idle", ...ngDevMode ? [{ debugName: "copyStatus" }] : []);
  localUser = computed(() => {
    this.currentUser();
    return this.authService.getLocalUser();
  }, ...ngDevMode ? [{ debugName: "localUser" }] : []);
  userApiToken = computed(() => this.currentUser()?.token || this.localUser()?.token || "", ...ngDevMode ? [{ debugName: "userApiToken" }] : []);
  localSessionExpiresAt = computed(() => {
    this.currentUser();
    return this.authService.getLocalSessionExpiresAt();
  }, ...ngDevMode ? [{ debugName: "localSessionExpiresAt" }] : []);
  localSessionExpiresAtDate = computed(() => {
    const expiresAt = this.localSessionExpiresAt();
    return expiresAt ? new Date(expiresAt) : null;
  }, ...ngDevMode ? [{ debugName: "localSessionExpiresAtDate" }] : []);
  externalProfileUrl = computed(() => {
    const token = this.userApiToken();
    return token ? `${this.externalProfileBaseUrl}${encodeURIComponent(token)}` : "";
  }, ...ngDevMode ? [{ debugName: "externalProfileUrl" }] : []);
  resetCopyStatus() {
    if (typeof window === "undefined") {
      return;
    }
    window.setTimeout(() => {
      this.copyStatus.set("idle");
    }, this.copyFeedbackTimeoutMs);
  }
  copyUserApiToken() {
    return __async(this, null, function* () {
      const token = this.userApiToken();
      if (!token) {
        this.copyStatus.set("error");
        this.resetCopyStatus();
        return;
      }
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
          yield navigator.clipboard.writeText(token);
        } else if (typeof document !== "undefined") {
          const input = document.createElement("textarea");
          input.value = token;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.appendChild(input);
          input.select();
          const copied = document.execCommand("copy");
          document.body.removeChild(input);
          if (!copied) {
            throw new Error("Nao foi possivel copiar para a area de transferencia.");
          }
        } else {
          throw new Error("Clipboard indisponivel neste ambiente.");
        }
        this.copyStatus.set("success");
      } catch {
        this.copyStatus.set("error");
      }
      this.resetCopyStatus();
    });
  }
  logout() {
    this.authService.logout().subscribe();
  }
  static \u0275fac = function PerfilPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfilPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilPage, selectors: [["app-perfil-page"]], decls: 10, vars: 4, consts: [["aria-labelledby", "perfil-title", 1, "perfil-wrap", "py-4"], [1, "container"], [1, "perfil-card", "card", "border-0", "shadow-sm"], [1, "card-body", "p-4", "p-md-5"], ["id", "perfil-title", 1, "h3", "mb-4"], [1, "perfil-empty-state"], [1, "mb-3"], ["routerLink", "/signin", 1, "btn", "btn-primary"], [1, "perfil-header", "mb-4"], ["aria-hidden", "true", 1, "perfil-avatar"], [1, "perfil-overline", "mb-1"], [1, "perfil-name", "mb-0"], ["aria-label", "Dados do usuario", 1, "perfil-section", "mb-4"], [1, "perfil-grid", "mb-0"], [1, "perfil-item"], ["aria-label", "Token de API do usuario", 1, "perfil-section", "mb-4"], [1, "h5", "mb-3"], [1, "perfil-api-row"], ["type", "text", "readonly", "", 1, "form-control", "perfil-api-input", 3, "value"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "perfil-copy-feedback", "text-success", "mb-0"], [1, "perfil-copy-feedback", "text-danger", "mb-0"], ["aria-label", "Dados da sessao local", 1, "perfil-section", "mb-4"], [1, "mb-0"], [1, "perfil-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function PerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, PerfilPage_Conditional_8_Template, 7, 6, "div", 5)(9, PerfilPage_Conditional_9_Template, 1, 1);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "profile.title"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isLogged() ? 8 : 9);
    }
  }, dependencies: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent, DatePipe, TranslatePipe], styles: ['\n\n.perfil-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.perfil-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.perfil-empty-state[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.9rem;\n}\n.perfil-avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #483d8b;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 2.7rem;\n  justify-content: center;\n  width: 2.7rem;\n}\n.perfil-overline[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.8rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n}\n.perfil-name[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.perfil-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n.perfil-item[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 0.7rem 0.8rem;\n}\n.perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n.perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n}\n.perfil-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  min-width: 240px;\n}\n.perfil-copy-feedback[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-top: 0.55rem;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-card[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-section[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-section[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-item[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%] {\n  background: rgba(24, 35, 52, 0.94);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-avatar[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  color: var(--theme-ink);\n  border: 1px solid rgba(100, 132, 173, 0.45);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-overline[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-overline[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-name[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-name[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus-visible {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(45, 62, 90, 0.96),\n      rgba(28, 44, 68, 0.96));\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-api-input[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-api-input[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n/*# sourceMappingURL=perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilPage, [{
    type: Component,
    args: [{ selector: "app-perfil-page", imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent], template: `<section class="perfil-wrap py-4" aria-labelledby="perfil-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
\r
    <div class="perfil-card card border-0 shadow-sm">\r
      <div class="card-body p-4 p-md-5">\r
        <h1 id="perfil-title" class="h3 mb-4">{{ 'profile.title' | translate }}</h1>\r
\r
        @if (!isLogged()) {\r
          <div class="perfil-empty-state">\r
            <p class="mb-3">{{ 'profile.notLogged' | translate }}</p>\r
            <a class="btn btn-primary" routerLink="/signin">{{ 'profile.goToLogin' | translate }}</a>\r
          </div>\r
        } @else {\r
          @if (currentUser(); as user) {\r
            <header class="perfil-header mb-4">\r
              <div class="perfil-avatar" aria-hidden="true">{{ (user.name || '?').charAt(0).toUpperCase() }}</div>\r
              <div>\r
                <p class="perfil-overline mb-1">{{ 'auth.welcome' | translate }}</p>\r
                <h2 class="perfil-name mb-0">{{ user.name }}</h2>\r
              </div>\r
            </header>\r
\r
            <section class="perfil-section mb-4" aria-label="Dados do usuario">\r
              <dl class="perfil-grid mb-0">\r
                <div class="perfil-item">\r
                  <dt>{{ 'profile.name' | translate }}</dt>\r
                  <dd>{{ user.name }}</dd>\r
                </div>\r
                <div class="perfil-item">\r
                  <dt>{{ 'profile.username' | translate }}</dt>\r
                  <dd>{{ user.username }}</dd>\r
                </div>\r
                <div class="perfil-item">\r
                  <dt>{{ 'profile.id' | translate }}</dt>\r
                  <dd>{{ user.id }}</dd>\r
                </div>\r
                <div class="perfil-item">\r
                  <dt>{{ 'profile.role' | translate }}</dt>\r
                  <dd>{{ user.role }}</dd>\r
                </div>\r
              </dl>\r
            </section>\r
\r
            <section class="perfil-section mb-4" aria-label="Token de API do usuario">\r
              <h2 class="h5 mb-3">{{ 'profile.apiTokenTitle' | translate }}</h2>\r
\r
              <div class="perfil-api-row">\r
                <input\r
                  class="form-control perfil-api-input"\r
                  type="text"\r
                  [value]="userApiToken() || '-'"\r
                  [attr.aria-label]="'profile.apiTokenTitle' | translate"\r
                  readonly\r
                />\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-primary"\r
                  (click)="copyUserApiToken()"\r
                  [disabled]="!userApiToken()"\r
                >\r
                  {{ 'profile.copyApiToken' | translate }}\r
                </button>\r
              </div>\r
\r
              @if (copyStatus() === 'success') {\r
                <p class="perfil-copy-feedback text-success mb-0">{{ 'profile.apiTokenCopied' | translate }}</p>\r
              } @else if (copyStatus() === 'error') {\r
                <p class="perfil-copy-feedback text-danger mb-0">{{ 'profile.apiTokenCopyError' | translate }}</p>\r
              }\r
            </section>\r
\r
            <section class="perfil-section mb-4" aria-label="Dados da sessao local">\r
              <h2 class="h5 mb-3">{{ 'profile.localUserTitle' | translate }}</h2>\r
\r
              @if (localUser(); as localUserData) {\r
                <dl class="perfil-grid mb-0">\r
                  <div class="perfil-item">\r
                    <dt>{{ 'profile.name' | translate }}</dt>\r
                    <dd>{{ localUserData.name }}</dd>\r
                  </div>\r
                  <div class="perfil-item">\r
                    <dt>{{ 'profile.username' | translate }}</dt>\r
                    <dd>{{ localUserData.username }}</dd>\r
                  </div>\r
                  <div class="perfil-item">\r
                    <dt>{{ 'profile.id' | translate }}</dt>\r
                    <dd>{{ localUserData.id }}</dd>\r
                  </div>\r
                  <div class="perfil-item">\r
                    <dt>{{ 'profile.role' | translate }}</dt>\r
                    <dd>{{ localUserData.role }}</dd>\r
                  </div>\r
                  <div class="perfil-item">\r
                    <dt>{{ 'profile.sessionExpiresAt' | translate }}</dt>\r
                    <dd>\r
                      @if (localSessionExpiresAtDate(); as expiresDate) {\r
                        {{ expiresDate | date: 'short' }}\r
                      } @else {\r
                        -\r
                      }\r
                    </dd>\r
                  </div>\r
                </dl>\r
              } @else {\r
                <p class="mb-0">{{ 'profile.noLocalUser' | translate }}</p>\r
              }\r
            </section>\r
\r
            <div class="perfil-actions">\r
              @if (externalProfileUrl()) {\r
                <a\r
                  class="btn btn-primary"\r
                  [href]="externalProfileUrl()"\r
                  target="_blank"\r
                  rel="noopener noreferrer"\r
                >\r
                  {{ 'profile.openExternal' | translate }}\r
                </a>\r
              }\r
\r
              <button type="button" class="btn btn-outline-primary" (click)="logout()">\r
                {{ 'auth.logout' | translate }}\r
              </button>\r
            </div>\r
          }\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/perfil/perfil.page.scss */\n.perfil-wrap {\n  color: var(--theme-ink);\n}\n.perfil-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.perfil-empty-state {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-header {\n  align-items: center;\n  display: flex;\n  gap: 0.9rem;\n}\n.perfil-avatar {\n  align-items: center;\n  background: #483d8b;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 2.7rem;\n  justify-content: center;\n  width: 2.7rem;\n}\n.perfil-overline {\n  color: var(--theme-hint);\n  font-size: 0.8rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n}\n.perfil-name {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.perfil-section {\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n.perfil-item {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 0.7rem 0.8rem;\n}\n.perfil-grid dt {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n.perfil-grid dd {\n  font-size: 1rem;\n  margin: 0;\n}\n.perfil-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-row {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-input {\n  flex: 1;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  min-width: 240px;\n}\n.perfil-copy-feedback {\n  font-size: 0.9rem;\n  margin-top: 0.55rem;\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap,\n:host-context(body.theme-master.theme-dark) .perfil-wrap h1,\n:host-context(body.theme-master.theme-dark) .perfil-wrap h2,\n:host-context(body.theme-master.theme-dark) .perfil-wrap p,\n:host-context(body.theme-master.theme-dark) .perfil-wrap dt,\n:host-context(body.theme-master.theme-dark) .perfil-wrap dd,\n:host-context(body.theme-master.theme-dark) .perfil-wrap a,\n:host-context(body.theme-master.theme-dark) .perfil-wrap button {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-card,\n:host-context(body.theme-master.theme-dark) .perfil-empty-state,\n:host-context(body.theme-master.theme-dark) .perfil-section,\n:host-context(body.theme-master.theme-dark) .perfil-item {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .perfil-empty-state {\n  background: rgba(24, 35, 52, 0.94);\n}\n:host-context(body.theme-master.theme-dark) .perfil-avatar {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  color: var(--theme-ink);\n  border: 1px solid rgba(100, 132, 173, 0.45);\n}\n:host-context(body.theme-master.theme-dark) .perfil-overline {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .perfil-name {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-grid dt {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .perfil-grid dd {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary:hover,\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary:focus-visible {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(45, 62, 90, 0.96),\n      rgba(28, 44, 68, 0.96));\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary:hover,\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-api-input {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n/*# sourceMappingURL=perfil.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilPage, { className: "PerfilPage", filePath: "src/app/pages/perfil/perfil.page.ts", lineNumber: 15 });
})();
export {
  PerfilPage
};
//# sourceMappingURL=chunk-YVDH3N7Q.js.map
