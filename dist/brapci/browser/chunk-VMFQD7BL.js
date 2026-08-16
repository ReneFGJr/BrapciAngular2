import {
  AuthService
} from "./chunk-KPJQR57O.js";
import {
  toSignal
} from "./chunk-H3IWRHIK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-PHIXLPJT.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-DD5AALCM.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Router,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IGL3YMRP.js";
import "./chunk-3OV72XIM.js";

// src/app/components/auth-panel/auth-panel.component.ts
function AuthPanelComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6, 0);
    \u0275\u0275listener("ngSubmit", function AuthPanelComponent_Conditional_0_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(2, "label", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.loginPayload.user, $event) || (ctx_r1.loginPayload.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.loginPayload.pwd, $event) || (ctx_r1.loginPayload.pwd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "button", 13);
    \u0275\u0275listener("click", function AuthPanelComponent_Conditional_0_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMode("forgot"));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function AuthPanelComponent_Conditional_0_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMode("register"));
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loginForm_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "auth.username"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginPayload.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "auth.password"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginPayload.pwd);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !loginForm_r3.valid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "auth.submit"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "auth.resendPassword"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "auth.register"));
  }
}
function AuthPanelComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6, 1);
    \u0275\u0275listener("ngSubmit", function AuthPanelComponent_Conditional_0_Conditional_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerPayload.name, $event) || (ctx_r1.registerPayload.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerPayload.username, $event) || (ctx_r1.registerPayload.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_1_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerPayload.email, $event) || (ctx_r1.registerPayload.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 20);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_1_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.registerPayload.password, $event) || (ctx_r1.registerPayload.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 22)(22, "button", 13);
    \u0275\u0275listener("click", function AuthPanelComponent_Conditional_0_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMode("login"));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const registerForm_r5 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "auth.fullName"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerPayload.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "auth.username"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerPayload.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "auth.email"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerPayload.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "auth.password"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerPayload.password);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !registerForm_r5.valid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 19, "auth.createAccount"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "auth.backToLogin"));
  }
}
function AuthPanelComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6, 2);
    \u0275\u0275listener("ngSubmit", function AuthPanelComponent_Conditional_0_Conditional_2_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendPassword());
    });
    \u0275\u0275elementStart(2, "label", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AuthPanelComponent_Conditional_0_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.forgotPasswordPayload.email, $event) || (ctx_r1.forgotPasswordPayload.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "button", 13);
    \u0275\u0275listener("click", function AuthPanelComponent_Conditional_0_Conditional_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMode("login"));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const forgotForm_r7 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "auth.accountEmail"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.forgotPasswordPayload.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !forgotForm_r7.valid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "auth.resendPassword"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "auth.backToLogin"));
  }
}
function AuthPanelComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function AuthPanelComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function AuthPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuthPanelComponent_Conditional_0_Conditional_0_Template, 20, 18, "form", 3);
    \u0275\u0275conditionalCreate(1, AuthPanelComponent_Conditional_0_Conditional_1_Template, 25, 23, "form", 3);
    \u0275\u0275conditionalCreate(2, AuthPanelComponent_Conditional_0_Conditional_2_Template, 13, 11, "form", 3);
    \u0275\u0275conditionalCreate(3, AuthPanelComponent_Conditional_0_Conditional_3_Template, 2, 1, "p", 4);
    \u0275\u0275conditionalCreate(4, AuthPanelComponent_Conditional_0_Conditional_4_Template, 2, 1, "p", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.mode() === "login" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "register" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "forgot" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.successMessage() ? 4 : -1);
  }
}
function AuthPanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function AuthPanelComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "auth.welcome"), ", ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.firstName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "auth.logout"), " ");
  }
}
var AuthPanelComponent = class _AuthPanelComponent {
  authService = inject(AuthService);
  translate = inject(TranslateService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  currentUser = toSignal(this.authService.currentUser$, { initialValue: null });
  mode = signal("login", ...ngDevMode ? [{ debugName: "mode" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  loginPayload = {
    user: "",
    pwd: ""
  };
  registerPayload = {
    name: "",
    username: "",
    email: "",
    password: ""
  };
  forgotPasswordPayload = {
    email: ""
  };
  firstName = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return "";
    }
    const candidate = user.name.trim() || user.username.trim();
    return candidate.split(/\s+/)[0] ?? "";
  }, ...ngDevMode ? [{ debugName: "firstName" }] : []);
  switchMode(nextMode) {
    this.mode.set(nextMode);
    this.errorMessage.set("");
    this.successMessage.set("");
  }
  login() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.successMessage.set("");
    this.authService.login(this.loginPayload).subscribe((user) => {
      this.loading.set(false);
      if (!user) {
        this.errorMessage.set(this.translate.instant("auth.messages.invalidCredentials"));
        return;
      }
      this.loginPayload.pwd = "";
      const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
      void this.router.navigateByUrl(returnUrl?.startsWith("/") && !returnUrl.startsWith("//") ? returnUrl : "/perfil");
    });
  }
  register() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.successMessage.set("");
    this.authService.register(this.registerPayload).subscribe((user) => {
      this.loading.set(false);
      if (!user) {
        this.errorMessage.set(this.translate.instant("auth.messages.registerFailed"));
        return;
      }
      this.successMessage.set(this.translate.instant("auth.messages.registerSuccess"));
      this.registerPayload.password = "";
      this.router.navigate(["/perfil"]);
    });
  }
  resendPassword() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.successMessage.set("");
    this.authService.resendPassword(this.forgotPasswordPayload).subscribe((ok) => {
      this.loading.set(false);
      if (!ok) {
        this.errorMessage.set(this.translate.instant("auth.messages.resendFailed"));
        return;
      }
      this.successMessage.set(this.translate.instant("auth.messages.resendSuccess"));
    });
  }
  logout() {
    this.authService.logout().subscribe();
    this.switchMode("login");
  }
  static \u0275fac = function AuthPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthPanelComponent, selectors: [["app-auth-panel"]], decls: 2, vars: 1, consts: [["loginForm", "ngForm"], ["registerForm", "ngForm"], ["forgotForm", "ngForm"], ["novalidate", "", 1, "auth-form"], [1, "error", "mt-3", "mb-0"], [1, "success", "mt-3", "mb-0"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit"], ["for", "username", 1, "form-label"], ["id", "username", "name", "username", "required", "", "autocomplete", "username", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "form-label"], ["id", "password", "name", "password", "required", "", "type", "password", "autocomplete", "current-password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "mt-2", 3, "disabled"], [1, "auth-links"], ["type", "button", 1, "btn", "btn-link", "p-0", 3, "click"], ["for", "registerName", 1, "form-label"], ["id", "registerName", "name", "registerName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "registerUsername", 1, "form-label"], ["id", "registerUsername", "name", "registerUsername", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "registerEmail", 1, "form-label"], ["id", "registerEmail", "name", "registerEmail", "required", "", "type", "email", "autocomplete", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "registerPassword", 1, "form-label"], ["id", "registerPassword", "name", "registerPassword", "required", "", "type", "password", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "auth-links", "auth-links--single"], ["for", "forgotEmail", 1, "form-label"], ["id", "forgotEmail", "name", "forgotEmail", "required", "", "type", "email", "autocomplete", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function AuthPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuthPanelComponent_Conditional_0_Template, 5, 5)(1, AuthPanelComponent_Conditional_1_Template, 8, 7);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.currentUser() ? 0 : 1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ["\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.6rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.auth-links[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  margin-top: 0.25rem;\n}\n.auth-links--single[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  text-decoration: none;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover, \n.auth-links[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-ink);\n  text-decoration: underline;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n}\n.success[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n}\n/*# sourceMappingURL=auth-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthPanelComponent, [{
    type: Component,
    args: [{ selector: "app-auth-panel", imports: [CommonModule, FormsModule, TranslateModule], template: `@if (!currentUser()) {\r
  @if (mode() === 'login') {\r
    <form (ngSubmit)="login()" #loginForm="ngForm" class="auth-form" novalidate>\r
      <label for="username" class="form-label">{{ 'auth.username' | translate }}</label>\r
      <input\r
        id="username"\r
        name="username"\r
        required\r
        [(ngModel)]="loginPayload.user"\r
        autocomplete="username"\r
        class="form-control"\r
      />\r
\r
      <label for="password" class="form-label">{{ 'auth.password' | translate }}</label>\r
      <input\r
        id="password"\r
        name="password"\r
        required\r
        type="password"\r
        [(ngModel)]="loginPayload.pwd"\r
        autocomplete="current-password"\r
        class="form-control"\r
      />\r
\r
      <button type="submit" class="btn btn-primary mt-2" [disabled]="!loginForm.valid || loading()">\r
        {{ 'auth.submit' | translate }}\r
      </button>\r
\r
      <div class="auth-links">\r
        <button type="button" class="btn btn-link p-0" (click)="switchMode('forgot')">{{ 'auth.resendPassword' | translate }}</button>\r
        <button type="button" class="btn btn-link p-0" (click)="switchMode('register')">{{ 'auth.register' | translate }}</button>\r
      </div>\r
    </form>\r
  }\r
\r
  @if (mode() === 'register') {\r
    <form (ngSubmit)="register()" #registerForm="ngForm" class="auth-form" novalidate>\r
      <label for="registerName" class="form-label">{{ 'auth.fullName' | translate }}</label>\r
      <input id="registerName" name="registerName" required [(ngModel)]="registerPayload.name" class="form-control" />\r
\r
      <label for="registerUsername" class="form-label">{{ 'auth.username' | translate }}</label>\r
      <input id="registerUsername" name="registerUsername" required [(ngModel)]="registerPayload.username" class="form-control" />\r
\r
      <label for="registerEmail" class="form-label">{{ 'auth.email' | translate }}</label>\r
      <input\r
        id="registerEmail"\r
        name="registerEmail"\r
        required\r
        type="email"\r
        [(ngModel)]="registerPayload.email"\r
        autocomplete="email"\r
        class="form-control"\r
      />\r
\r
      <label for="registerPassword" class="form-label">{{ 'auth.password' | translate }}</label>\r
      <input\r
        id="registerPassword"\r
        name="registerPassword"\r
        required\r
        type="password"\r
        [(ngModel)]="registerPayload.password"\r
        autocomplete="new-password"\r
        class="form-control"\r
      />\r
\r
      <button type="submit" class="btn btn-primary mt-2" [disabled]="!registerForm.valid || loading()">\r
        {{ 'auth.createAccount' | translate }}\r
      </button>\r
\r
      <div class="auth-links auth-links--single">\r
        <button type="button" class="btn btn-link p-0" (click)="switchMode('login')">{{ 'auth.backToLogin' | translate }}</button>\r
      </div>\r
    </form>\r
  }\r
\r
  @if (mode() === 'forgot') {\r
    <form (ngSubmit)="resendPassword()" #forgotForm="ngForm" class="auth-form" novalidate>\r
      <label for="forgotEmail" class="form-label">{{ 'auth.accountEmail' | translate }}</label>\r
      <input\r
        id="forgotEmail"\r
        name="forgotEmail"\r
        required\r
        type="email"\r
        [(ngModel)]="forgotPasswordPayload.email"\r
        autocomplete="email"\r
        class="form-control"\r
      />\r
\r
      <button type="submit" class="btn btn-primary mt-2" [disabled]="!forgotForm.valid || loading()">\r
        {{ 'auth.resendPassword' | translate }}\r
      </button>\r
\r
      <div class="auth-links auth-links--single">\r
        <button type="button" class="btn btn-link p-0" (click)="switchMode('login')">{{ 'auth.backToLogin' | translate }}</button>\r
      </div>\r
    </form>\r
  }\r
\r
  @if (errorMessage()) {\r
    <p class="error mt-3 mb-0">{{ errorMessage() }}</p>\r
  }\r
\r
  @if (successMessage()) {\r
    <p class="success mt-3 mb-0">{{ successMessage() }}</p>\r
  }\r
} @else {\r
  <p class="mb-3">\r
    {{ 'auth.welcome' | translate }},\r
    <strong>{{ firstName() }}</strong>\r
  </p>\r
\r
  <button type="button" class="btn btn-outline-primary" (click)="logout()">\r
    {{ 'auth.logout' | translate }}\r
  </button>\r
}\r
`, styles: ["/* src/app/components/auth-panel/auth-panel.component.scss */\n.auth-form {\n  display: grid;\n  gap: 0.6rem;\n}\n.auth-form .form-label {\n  color: var(--theme-ink);\n}\n.auth-links {\n  align-items: center;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  margin-top: 0.25rem;\n}\n.auth-links--single {\n  justify-content: flex-start;\n}\n.auth-links .btn-link {\n  color: var(--theme-hint);\n  text-decoration: none;\n}\n.auth-links .btn-link:hover,\n.auth-links .btn-link:focus-visible {\n  color: var(--theme-ink);\n  text-decoration: underline;\n}\n.error {\n  color: var(--theme-error);\n}\n.success {\n  color: var(--theme-success);\n}\n/*# sourceMappingURL=auth-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthPanelComponent, { className: "AuthPanelComponent", filePath: "src/app/components/auth-panel/auth-panel.component.ts", lineNumber: 18 });
})();

// src/app/components/auth-signin/auth-signin.component.ts
var AuthSigninComponent = class _AuthSigninComponent {
  static \u0275fac = function AuthSigninComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthSigninComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthSigninComponent, selectors: [["app-auth-signin"]], decls: 10, vars: 6, consts: [["aria-labelledby", "auth-title", 1, "h-100"], [1, "signin-card", "card", "h-100", "border-0"], [1, "card-body", "p-4", "p-md-5"], ["id", "auth-title", 1, "h4", "mb-1"], [1, "signin-card-subtitle", "mb-4"]], template: function AuthSigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "app-auth-panel");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "auth.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "signin.cardSubtitle"));
    }
  }, dependencies: [CommonModule, TranslateModule, AuthPanelComponent, TranslatePipe], styles: ["\n\n.signin-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.signin-card-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.94rem;\n}\n[_nghost-%COMP%]     .auth-form .btn.btn-primary {\n  border-radius: 0.75rem;\n  font-weight: 600;\n  min-height: 2.65rem;\n}\n[_nghost-%COMP%]     .auth-form .form-control {\n  border-radius: 0.7rem;\n  min-height: 2.7rem;\n}\n/*# sourceMappingURL=auth-signin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthSigninComponent, [{
    type: Component,
    args: [{ selector: "app-auth-signin", imports: [CommonModule, TranslateModule, AuthPanelComponent], template: `<section class="h-100" aria-labelledby="auth-title">\r
  <div class="signin-card card h-100 border-0">\r
    <div class="card-body p-4 p-md-5">\r
      <h2 id="auth-title" class="h4 mb-1">{{ 'auth.title' | translate }}</h2>\r
      <p class="signin-card-subtitle mb-4">{{ 'signin.cardSubtitle' | translate }}</p>\r
      <app-auth-panel></app-auth-panel>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/components/auth-signin/auth-signin.component.scss */\n.signin-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.8rem;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.signin-card-subtitle {\n  color: var(--theme-hint);\n  font-size: 0.94rem;\n}\n:host ::ng-deep .auth-form .btn.btn-primary {\n  border-radius: 0.75rem;\n  font-weight: 600;\n  min-height: 2.65rem;\n}\n:host ::ng-deep .auth-form .form-control {\n  border-radius: 0.7rem;\n  min-height: 2.7rem;\n}\n/*# sourceMappingURL=auth-signin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthSigninComponent, { className: "AuthSigninComponent", filePath: "src/app/components/auth-signin/auth-signin.component.ts", lineNumber: 12 });
})();

// src/app/pages/signin/signin.page.ts
var SigninPage = class _SigninPage {
  static \u0275fac = function SigninPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SigninPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninPage, selectors: [["app-signin-page"]], decls: 15, vars: 9, consts: [["aria-labelledby", "auth-title", 1, "signin-page", "py-4"], [1, "container"], [1, "row", "align-items-center", "justify-content-center", "g-4", "signin-layout"], ["aria-label", "Apresentacao da plataforma", 1, "col-12", "col-md-6", "signin-intro"], [1, "signin-kicker", "mb-2"], [1, "signin-title", "mb-2"], [1, "signin-subtitle", "mb-0"], [1, "col-12", "col-md-6"]], template: function SigninPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "article", 3)(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275element(14, "app-auth-signin");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "signin.kicker"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "signin.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "signin.subtitle"));
    }
  }, dependencies: [CommonModule, TranslateModule, AuthSigninComponent, TranslatePipe], styles: ['\n\n.signin-page[_ngcontent-%COMP%] {\n  background: var(--theme-bg);\n  min-height: calc(100dvh - 180px);\n}\n.signin-layout[_ngcontent-%COMP%] {\n  align-content: center;\n  min-height: 70vh;\n  row-gap: 1.4rem;\n}\n.signin-intro[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.signin-kicker[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.08rem;\n  text-transform: uppercase;\n}\n.signin-title[_ngcontent-%COMP%] {\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: clamp(1.55rem, 2.6vw, 2rem);\n  font-weight: 700;\n  line-height: 1.2;\n}\n.signin-subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.98rem;\n}\n@media (max-width: 991.98px) {\n  .signin-layout[_ngcontent-%COMP%] {\n    min-height: 60vh;\n  }\n}\n/*# sourceMappingURL=signin.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninPage, [{
    type: Component,
    args: [{ selector: "app-signin-page", imports: [CommonModule, TranslateModule, AuthSigninComponent], template: `<section class="signin-page py-4" aria-labelledby="auth-title">\r
  <div class="container">\r
    <div class="row align-items-center justify-content-center g-4 signin-layout">\r
      <article class="col-12 col-md-6 signin-intro" aria-label="Apresentacao da plataforma">\r
        <p class="signin-kicker mb-2">{{ 'signin.kicker' | translate }}</p>\r
        <h1 class="signin-title mb-2">{{ 'signin.title' | translate }}</h1>\r
        <p class="signin-subtitle mb-0">{{ 'signin.subtitle' | translate }}</p>\r
      </article>\r
\r
      <div class="col-12 col-md-6">\r
        <app-auth-signin></app-auth-signin>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/signin/signin.page.scss */\n.signin-page {\n  background: var(--theme-bg);\n  min-height: calc(100dvh - 180px);\n}\n.signin-layout {\n  align-content: center;\n  min-height: 70vh;\n  row-gap: 1.4rem;\n}\n.signin-intro {\n  color: var(--theme-ink);\n}\n.signin-kicker {\n  color: var(--theme-hint);\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.08rem;\n  text-transform: uppercase;\n}\n.signin-title {\n  font-family:\n    "Raleway",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: clamp(1.55rem, 2.6vw, 2rem);\n  font-weight: 700;\n  line-height: 1.2;\n}\n.signin-subtitle {\n  color: var(--theme-hint);\n  font-size: 0.98rem;\n}\n@media (max-width: 991.98px) {\n  .signin-layout {\n    min-height: 60vh;\n  }\n}\n/*# sourceMappingURL=signin.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninPage, { className: "SigninPage", filePath: "src/app/pages/signin/signin.page.ts", lineNumber: 12 });
})();
export {
  SigninPage
};
//# sourceMappingURL=chunk-VMFQD7BL.js.map
