import {
  LoadingSpinnerComponent
} from "./chunk-5XHEP7EI.js";
import {
  BannerLivrosComponent
} from "./chunk-MG7UZOLQ.js";
import {
  BreadcrumbsComponent
} from "./chunk-7JBWXSA7.js";
import {
  BrapciApiService
} from "./chunk-FCV3HS54.js";
import {
  takeUntilDestroyed
} from "./chunk-JWX6LNFA.js";
import "./chunk-U6AVKRN4.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink
} from "./chunk-BDVW3XMC.js";
import {
  Component,
  DestroyRef,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-R3SGMIKW.js";
import "./chunk-UKK5MWW6.js";

// src/app/pages/book-disclaimer/book-disclaimer.page.ts
var _c0 = () => ({ books: "Brapci Livros", disclaimer: "Confirmacao da submissao" });
function BookDisclaimerPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "Brapci Livros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 6);
    \u0275\u0275text(4, "Validando sua submissao");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aguarde enquanto registramos a concordancia com os termos.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-loading-spinner");
    \u0275\u0275elementEnd();
  }
}
function BookDisclaimerPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, "Confirmacao concluida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Sua submissao do arquivo ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " foi validada com sucesso. A obra esta liberada para analise pela equipe da Brapci Livros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275text(13, " A concordancia com os termos foi registrada. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 10);
    \u0275\u0275text(15, "Ir para Brapci Livros");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Obrigado, ", ctx_r0.details().name, "!");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.details().file);
  }
}
function BookDisclaimerPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, "Nao foi possivel confirmar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 6);
    \u0275\u0275text(6, "Link de confirmacao invalido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "button", 14);
    \u0275\u0275listener("click", function BookDisclaimerPage_Conditional_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retry());
    });
    \u0275\u0275text(11, "Tentar novamente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 15);
    \u0275\u0275text(13, "Nova submissao");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var BookDisclaimerPage = class _BookDisclaimerPage {
  api = inject(BrapciApiService);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  state = signal("loading", ...ngDevMode ? [{ debugName: "state" }] : []);
  details = signal({ name: "", file: "" }, ...ngDevMode ? [{ debugName: "details" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  constructor() {
    this.confirmSubmission();
  }
  retry() {
    this.confirmSubmission();
  }
  confirmSubmission() {
    const id = this.route.snapshot.paramMap.get("id")?.trim() ?? "";
    const check = this.route.snapshot.paramMap.get("check")?.trim() ?? "";
    if (!/^\d+$/.test(id) || !/^[a-f\d]{32}$/i.test(check)) {
      this.fail("O link de confirmacao e invalido ou esta incompleto.");
      return;
    }
    this.state.set("loading");
    this.errorMessage.set("");
    this.api.post(`brapci/book/disclaimer/${id}/${check}`, new FormData()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        const post = this.parseSubmission(response?.bs_post);
        if (!post) {
          this.fail(response?.message || "Nao foi possivel validar os dados da submissao.");
          return;
        }
        this.details.set({
          name: this.asText(post["name"]) || "autor(a)",
          file: this.asText(post["file"]) || "enviado"
        });
        this.state.set("success");
      },
      error: () => {
        this.fail("Nao foi possivel confirmar a submissao. Verifique o link e tente novamente.");
      }
    });
  }
  parseSubmission(value) {
    if (value && typeof value === "object")
      return value;
    if (typeof value !== "string" || value.trim() === "")
      return null;
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }
  asText(value) {
    return typeof value === "string" ? value.trim() : "";
  }
  fail(message) {
    this.errorMessage.set(message);
    this.state.set("error");
  }
  static \u0275fac = function BookDisclaimerPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDisclaimerPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDisclaimerPage, selectors: [["app-book-disclaimer-page"]], decls: 8, vars: 3, consts: [["aria-labelledby", "disclaimer-title", 1, "disclaimer-wrap", "py-4"], [1, "container", "disclaimer-shell"], [3, "labels"], ["aria-live", "polite", 1, "disclaimer-card"], [1, "disclaimer-state", "text-center"], [1, "eyebrow"], ["id", "disclaimer-title"], ["aria-hidden", "true", 1, "status-icon", "success"], [1, "bi", "bi-check-lg"], ["role", "status", 1, "alert", "alert-success", "mb-0"], ["routerLink", "/livros", 1, "btn", "btn-primary", "mt-4"], ["aria-hidden", "true", 1, "status-icon", "error"], [1, "bi", "bi-exclamation-lg"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/livros/submit", 1, "btn", "btn-outline-secondary"]], template: function BookDisclaimerPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-banner-livros");
      \u0275\u0275elementStart(1, "main", 0)(2, "div", 1);
      \u0275\u0275element(3, "app-breadcrumbs", 2);
      \u0275\u0275elementStart(4, "article", 3);
      \u0275\u0275conditionalCreate(5, BookDisclaimerPage_Conditional_5_Template, 8, 0, "div", 4)(6, BookDisclaimerPage_Conditional_6_Template, 16, 2, "div", 4)(7, BookDisclaimerPage_Conditional_7_Template, 14, 1, "div", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("labels", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state() === "loading" ? 5 : ctx.state() === "success" ? 6 : 7);
    }
  }, dependencies: [
    BannerLivrosComponent,
    BreadcrumbsComponent,
    CommonModule,
    LoadingSpinnerComponent,
    RouterLink
  ], styles: ["\n\n.disclaimer-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.84),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.disclaimer-shell[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.2rem;\n}\n.disclaimer-card[_ngcontent-%COMP%] {\n  width: min(760px, 100%);\n  margin: 1rem auto 0;\n  padding: clamp(1.5rem, 5vw, 3.5rem);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 18px 42px rgba(92, 63, 29, 0.1);\n}\n.disclaimer-state[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n.disclaimer-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0.8rem;\n  color: #35210f;\n  font-size: clamp(1.7rem, 4vw, 2.5rem);\n}\n.disclaimer-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 590px;\n  margin-bottom: 1.25rem;\n  color: #5a4634;\n  line-height: 1.65;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #76502d;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.status-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 68px;\n  height: 68px;\n  margin-bottom: 1rem;\n  place-items: center;\n  border-radius: 50%;\n  font-size: 2rem;\n}\n.status-icon.success[_ngcontent-%COMP%] {\n  color: #17663b;\n  background: #dcf4e6;\n}\n.status-icon.error[_ngcontent-%COMP%] {\n  color: #9c2c2c;\n  background: #fbe1e1;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .disclaimer-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .disclaimer-wrap[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .disclaimer-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .disclaimer-card[_ngcontent-%COMP%] {\n  border-color: rgba(232, 213, 190, 0.1);\n  background: rgba(37, 31, 26, 0.92);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .disclaimer-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .disclaimer-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #f7ecdf;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .disclaimer-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .disclaimer-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d6c4b2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .eyebrow[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #e0b98f;\n}\n/*# sourceMappingURL=book-disclaimer.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookDisclaimerPage, [{
    type: Component,
    args: [{ selector: "app-book-disclaimer-page", standalone: true, imports: [
      BannerLivrosComponent,
      BreadcrumbsComponent,
      CommonModule,
      LoadingSpinnerComponent,
      RouterLink
    ], template: `<app-banner-livros></app-banner-livros>

<main class="disclaimer-wrap py-4" aria-labelledby="disclaimer-title">
  <div class="container disclaimer-shell">
    <app-breadcrumbs
      [labels]="{ books: 'Brapci Livros', disclaimer: 'Confirmacao da submissao' }"
    ></app-breadcrumbs>

    <article class="disclaimer-card" aria-live="polite">
      @if (state() === 'loading') {
        <div class="disclaimer-state text-center">
          <span class="eyebrow">Brapci Livros</span>
          <h1 id="disclaimer-title">Validando sua submissao</h1>
          <p>Aguarde enquanto registramos a concordancia com os termos.</p>
          <app-loading-spinner></app-loading-spinner>
        </div>
      } @else if (state() === 'success') {
        <div class="disclaimer-state text-center">
          <span class="status-icon success" aria-hidden="true">
            <i class="bi bi-check-lg"></i>
          </span>
          <span class="eyebrow">Confirmacao concluida</span>
          <h1 id="disclaimer-title">Obrigado, {{ details().name }}!</h1>
          <p>
            Sua submissao do arquivo <strong>{{ details().file }}</strong> foi validada com sucesso.
            A obra esta liberada para analise pela equipe da Brapci Livros.
          </p>
          <div class="alert alert-success mb-0" role="status">
            A concordancia com os termos foi registrada.
          </div>
          <a class="btn btn-primary mt-4" routerLink="/livros">Ir para Brapci Livros</a>
        </div>
      } @else {
        <div class="disclaimer-state text-center">
          <span class="status-icon error" aria-hidden="true">
            <i class="bi bi-exclamation-lg"></i>
          </span>
          <span class="eyebrow">Nao foi possivel confirmar</span>
          <h1 id="disclaimer-title">Link de confirmacao invalido</h1>
          <p>{{ errorMessage() }}</p>
          <div class="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <button type="button" class="btn btn-primary" (click)="retry()">Tentar novamente</button>
            <a class="btn btn-outline-secondary" routerLink="/livros/submit">Nova submissao</a>
          </div>
        </div>
      }
    </article>
  </div>
</main>
`, styles: ["/* src/app/pages/book-disclaimer/book-disclaimer.page.scss */\n.disclaimer-wrap {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(208, 223, 255, 0.84),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #f6f1e8 0%,\n      #efe5d5 100%);\n}\n.disclaimer-shell {\n  display: grid;\n  gap: 1.2rem;\n}\n.disclaimer-card {\n  width: min(760px, 100%);\n  margin: 1rem auto 0;\n  padding: clamp(1.5rem, 5vw, 3.5rem);\n  border: 1px solid rgba(124, 86, 46, 0.12);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 18px 42px rgba(92, 63, 29, 0.1);\n}\n.disclaimer-state {\n  display: grid;\n  justify-items: center;\n}\n.disclaimer-state h1 {\n  margin: 0.45rem 0 0.8rem;\n  color: #35210f;\n  font-size: clamp(1.7rem, 4vw, 2.5rem);\n}\n.disclaimer-state p {\n  max-width: 590px;\n  margin-bottom: 1.25rem;\n  color: #5a4634;\n  line-height: 1.65;\n}\n.eyebrow {\n  color: #76502d;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.status-icon {\n  display: grid;\n  width: 68px;\n  height: 68px;\n  margin-bottom: 1rem;\n  place-items: center;\n  border-radius: 50%;\n  font-size: 2rem;\n}\n.status-icon.success {\n  color: #17663b;\n  background: #dcf4e6;\n}\n.status-icon.error {\n  color: #9c2c2c;\n  background: #fbe1e1;\n}\n:host-context(body.theme-master.theme-dark) .disclaimer-wrap {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(89, 117, 168, 0.18),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      #181512 0%,\n      #241e19 100%);\n}\n:host-context(body.theme-master.theme-dark) .disclaimer-card {\n  border-color: rgba(232, 213, 190, 0.1);\n  background: rgba(37, 31, 26, 0.92);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\n:host-context(body.theme-master.theme-dark) .disclaimer-state h1 {\n  color: #f7ecdf;\n}\n:host-context(body.theme-master.theme-dark) .disclaimer-state p {\n  color: #d6c4b2;\n}\n:host-context(body.theme-master.theme-dark) .eyebrow {\n  color: #e0b98f;\n}\n/*# sourceMappingURL=book-disclaimer.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDisclaimerPage, { className: "BookDisclaimerPage", filePath: "src/app/pages/book-disclaimer/book-disclaimer.page.ts", lineNumber: 36 });
})();
export {
  BookDisclaimerPage
};
//# sourceMappingURL=chunk-NZJZW4YB.js.map
