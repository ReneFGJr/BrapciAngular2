import './polyfills.server.mjs';
import {
  BasketService
} from "./chunk-6S37LFUB.mjs";
import {
  AuthService
} from "./chunk-LP2Y7HO2.mjs";
import {
  BrapciApiService
} from "./chunk-AIGT3YYC.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-626Q7N5T.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PPKTTR3S.mjs";
import {
  toSignal
} from "./chunk-VL7NMCPF.mjs";
import "./chunk-2L3G2T4S.mjs";
import {
  CommonModule,
  DatePipe,
  RouterLink
} from "./chunk-TG5MYEEE.mjs";
import {
  Component,
  Input,
  computed,
  effect,
  inject,
  input,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QTSSUGT7.mjs";
import {
  __async
} from "./chunk-DTEGX4RB.mjs";

// src/app/components/user-liked/liked-periods.ts
var labels = [
  "Hoje",
  "Ontem",
  "\xDAltima semana",
  "Pen\xFAltima semana",
  "Tr\xEAs semanas",
  "Quatro semanas",
  "M\xEAs passado",
  "Dois meses atr\xE1s",
  "Tr\xEAs meses atr\xE1s",
  "Este ano",
  "Ano passado",
  "Mais de um ano",
  "Data n\xE3o informada"
];
function parseDate(value) {
  if (!value)
    return null;
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|[T ])/);
  if (!match)
    return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 && date.getDate() === Number(match[3]) ? date : null;
}
function groupLikes(works, now = /* @__PURE__ */ new Date()) {
  const groups = labels.map((label) => ({ label, works: [] }));
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const sorted = works.map((work) => ({ work, date: parseDate(work.likedAt) })).sort((a, b) => (b.date?.getTime() ?? -Infinity) - (a.date?.getTime() ?? -Infinity) || (b.work.likedAt || "").localeCompare(a.work.likedAt || ""));
  for (const { work, date } of sorted) {
    let index = 12;
    if (date) {
      const days = (today - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) / 864e5;
      const months = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
      if (days < 0)
        index = 12;
      else if (days === 0)
        index = 0;
      else if (days === 1)
        index = 1;
      else if (days <= 7)
        index = 2;
      else if (days <= 14)
        index = 3;
      else if (days <= 21)
        index = 4;
      else if (days <= 28)
        index = 5;
      else if (months >= 1 && months <= 3)
        index = 5 + months;
      else if (date.getFullYear() === now.getFullYear())
        index = 9;
      else if (date.getFullYear() === now.getFullYear() - 1)
        index = 10;
      else
        index = 11;
    }
    groups[index].works.push(work);
  }
  return groups.filter((group) => group.works.length > 0);
}

// src/app/components/user-liked/user-liked.component.ts
var _c0 = (a0) => ["/v", a0];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function UserLikedComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275text(2, "Carregando curtidas...");
    \u0275\u0275elementEnd();
  }
}
function UserLikedComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 5);
    \u0275\u0275listener("click", function UserLikedComponent_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry.update(ctx_r1.increment));
    });
    \u0275\u0275text(3, "Tentar novamente");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UserLikedComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 12);
    \u0275\u0275text(3, "Abrir Basket");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.basketFeedback(), " ");
  }
}
function UserLikedComponent_Conditional_5_For_8_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18)(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const work_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(work_r4.authors);
  }
}
function UserLikedComponent_Conditional_5_For_8_For_7_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
  }
}
function UserLikedComponent_Conditional_5_For_8_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UserLikedComponent_Conditional_5_For_8_For_7_Conditional_4_Conditional_2_Template, 2, 0, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const work_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", work_r4.publication, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(work_r4.publication && work_r4.year ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", work_r4.year);
  }
}
function UserLikedComponent_Conditional_5_For_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16)(1, "a", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UserLikedComponent_Conditional_5_For_8_For_7_Conditional_3_Template, 3, 1, "p", 18);
    \u0275\u0275conditionalCreate(4, UserLikedComponent_Conditional_5_For_8_For_7_Conditional_4_Template, 4, 3, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const work_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, work_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(work_r4.title || "Registro " + work_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(work_r4.authors ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(work_r4.publication || work_r4.year ? 4 : -1);
  }
}
function UserLikedComponent_Conditional_5_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h3", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ul", 15);
    \u0275\u0275repeaterCreate(6, UserLikedComponent_Conditional_5_For_8_For_7_Template, 5, 6, "li", 16, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", group_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", group_r5.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r5.works.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5.works);
  }
}
function UserLikedComponent_Conditional_5_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Voc\xEA ainda n\xE3o curtiu nenhum trabalho.");
    \u0275\u0275elementEnd();
  }
}
function UserLikedComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function UserLikedComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendToBasket());
    });
    \u0275\u0275element(4, "i", 9);
    \u0275\u0275text(5, " Enviar todos para o Basket ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, UserLikedComponent_Conditional_5_Conditional_6_Template, 4, 1, "p", 10);
    \u0275\u0275repeaterCreate(7, UserLikedComponent_Conditional_5_For_8_Template, 8, 3, "section", 11, _forTrack0, false, UserLikedComponent_Conditional_5_ForEmpty_9_Template, 2, 0, "p");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.works().length, " trabalho(s)");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.works().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.basketFeedback() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupedWorks());
  }
}
var UserLikedComponent = class _UserLikedComponent {
  userKey = input.required(...ngDevMode ? [{ debugName: "userKey" }] : []);
  works = signal([], ...ngDevMode ? [{ debugName: "works" }] : []);
  groupedWorks = computed(() => groupLikes(this.works()), ...ngDevMode ? [{ debugName: "groupedWorks" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  retry = signal(0, ...ngDevMode ? [{ debugName: "retry" }] : []);
  increment = (value) => value + 1;
  api = inject(BrapciApiService);
  basket = inject(BasketService);
  basketFeedback = signal("", ...ngDevMode ? [{ debugName: "basketFeedback" }] : []);
  sendToBasket() {
    if (this.loading() || this.error())
      return;
    const ids = this.works().map((work) => Number(work.id)).filter((id) => Number.isInteger(id) && id > 0);
    try {
      this.basket.addMany(ids);
      this.basketFeedback.set("Trabalhos enviados para o Basket.");
    } catch {
      this.basketFeedback.set("N\xE3o foi poss\xEDvel salvar no Basket. Tente novamente.");
    }
  }
  constructor() {
    effect((onCleanup) => {
      const userKey = this.userKey();
      this.retry();
      this.works.set([]);
      this.basketFeedback.set("");
      this.error.set("");
      this.loading.set(false);
      if (!userKey) {
        this.error.set("Entre novamente para consultar suas curtidas.");
        return;
      }
      this.loading.set(true);
      const request = this.api.postForm("like/getUserLiked", { userKey }).subscribe({
        next: (response) => {
          if (String(response.status) === "200" && Array.isArray(response.works))
            this.works.set(response.works);
          else
            this.error.set("N\xE3o foi poss\xEDvel carregar as curtidas.");
          this.loading.set(false);
        },
        error: () => {
          this.error.set("N\xE3o foi poss\xEDvel carregar as curtidas.");
          this.loading.set(false);
        }
      });
      onCleanup(() => request.unsubscribe());
    });
  }
  static \u0275fac = function UserLikedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserLikedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLikedComponent, selectors: [["app-user-liked"]], inputs: { userKey: [1, "userKey"] }, decls: 6, vars: 2, consts: [["aria-labelledby", "liked-title"], ["id", "liked-title", 1, "h5", "mb-3"], ["role", "status"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["role", "alert"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "liked-total", "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled"], ["aria-hidden", "true", 1, "bi", "bi-basket", "me-1"], ["role", "status", 1, "small", "mb-3"], [1, "liked-group"], ["routerLink", "/basket/selected"], [1, "liked-group-title"], [1, "liked-count"], [1, "liked-list"], [1, "liked-item"], ["target", "_blank", "rel", "noopener noreferrer", 1, "liked-title", 3, "routerLink"], [1, "liked-authors"], [1, "liked-publication"], ["aria-hidden", "true"]], template: function UserLikedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Trabalhos curtidos");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, UserLikedComponent_Conditional_3_Template, 3, 0, "p", 2)(4, UserLikedComponent_Conditional_4_Template, 4, 1)(5, UserLikedComponent_Conditional_5_Template, 10, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-busy", ctx.loading());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.error() ? 4 : 5);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.liked-total[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n}\n.liked-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.1rem;\n}\n.liked-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0.45rem 0.65rem;\n  border-radius: 0.4rem;\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.liked-count[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.45rem;\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.liked-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.15rem 0 0;\n  padding: 0 0.65rem;\n}\n.liked-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 5px solid rgba(72, 61, 139, 0.2);\n  border-radius: 0.4rem;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.liked-item[_ngcontent-%COMP%]    + .liked-item[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.liked-title[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  font-weight: 600;\n  text-decoration: none;\n}\n.liked-title[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.liked-title[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--theme-link);\n  outline-offset: 3px;\n}\n.liked-authors[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-size: 0.9rem;\n  color: var(--theme-ink);\n}\n.liked-publication[_ngcontent-%COMP%] {\n  margin: 0.1rem 0 0;\n  font-size: 0.82rem;\n  color: var(--theme-muted);\n}\n/*# sourceMappingURL=user-liked.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLikedComponent, [{
    type: Component,
    args: [{ selector: "app-user-liked", standalone: true, imports: [RouterLink], template: `
    <section aria-labelledby="liked-title" [attr.aria-busy]="loading()">
      <h2 id="liked-title" class="h5 mb-3">Trabalhos curtidos</h2>
      @if (loading()) {
        <p role="status"><span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Carregando curtidas...</p>
      } @else if (error()) {
        <p role="alert">{{ error() }}</p>
        <button type="button" class="btn btn-outline-primary" (click)="retry.update(increment)">Tentar novamente</button>
      } @else {
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <p class="liked-total mb-0">{{ works().length }} trabalho(s)</p>
          <button type="button" class="btn btn-outline-primary btn-sm" [disabled]="!works().length" (click)="sendToBasket()">
            <i class="bi bi-basket me-1" aria-hidden="true"></i> Enviar todos para o Basket
          </button>
        </div>
        @if (basketFeedback()) {
          <p class="small mb-3" role="status">{{ basketFeedback() }} <a routerLink="/basket/selected">Abrir Basket</a></p>
        }
        @for (group of groupedWorks(); track group.label) {
          <section class="liked-group" [attr.aria-label]="group.label">
            <h3 class="liked-group-title">{{ group.label }} <span class="liked-count">{{ group.works.length }}</span></h3>
            <ul class="liked-list">
              @for (work of group.works; track work.id) {
                <li class="liked-item">
                  <a [routerLink]="['/v', work.id]" target="_blank" rel="noopener noreferrer" class="liked-title">{{ work.title || ('Registro ' + work.id) }}</a>
                  @if (work.authors) { <p class="liked-authors"><em>{{ work.authors }}</em></p> }
                  @if (work.publication || work.year) { <p class="liked-publication">{{ work.publication }} @if (work.publication && work.year) { <span aria-hidden="true">&middot;</span> } {{ work.year }}</p> }
                </li>
              }
            </ul>
          </section>
        } @empty { <p>Voc\xEA ainda n\xE3o curtiu nenhum trabalho.</p> }
      }
    </section>
  `, styles: ["/* src/app/components/user-liked/user-liked.component.scss */\n:host {\n  display: block;\n}\n.liked-total {\n  margin: 0 0 0.85rem;\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n}\n.liked-group {\n  margin-bottom: 1.1rem;\n}\n.liked-group-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0.45rem 0.65rem;\n  border-radius: 0.4rem;\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.liked-count {\n  padding: 0.1rem 0.45rem;\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.liked-list {\n  list-style: none;\n  margin: 0.15rem 0 0;\n  padding: 0 0.65rem;\n}\n.liked-item {\n  padding: 10px;\n  border: 5px solid rgba(72, 61, 139, 0.2);\n  border-radius: 0.4rem;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.liked-item + .liked-item {\n  margin-top: 0.4rem;\n}\n.liked-title {\n  color: var(--theme-link);\n  font-weight: 600;\n  text-decoration: none;\n}\n.liked-title:hover {\n  text-decoration: underline;\n}\n.liked-title:focus-visible {\n  outline: 2px solid var(--theme-link);\n  outline-offset: 3px;\n}\n.liked-authors {\n  margin: 0.15rem 0 0;\n  font-size: 0.9rem;\n  color: var(--theme-ink);\n}\n.liked-publication {\n  margin: 0.1rem 0 0;\n  font-size: 0.82rem;\n  color: var(--theme-muted);\n}\n/*# sourceMappingURL=user-liked.component.css.map */\n"] }]
  }], () => [], { userKey: [{ type: Input, args: [{ isSignal: true, alias: "userKey", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLikedComponent, { className: "UserLikedComponent", filePath: "src/app/components/user-liked/user-liked.component.ts", lineNumber: 49 });
})();

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
function PerfilPage_Conditional_9_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setTab("monitor"));
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "monitor");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "monitor");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "profile.monitorTab"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.apiTokenCopied"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.apiTokenCopyError"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx, "short"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 21)(1, "div", 22)(2, "dt");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "dt");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 22)(20, "dt");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 22)(26, "dt");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd");
    \u0275\u0275conditionalCreate(30, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Conditional_30_Template, 2, 4)(31, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const localUserData_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "profile.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "profile.username"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r5.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "profile.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "profile.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(localUserData_r5.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 18, "profile.sessionExpiresAt"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.localSessionExpiresAtDate()) ? 30 : 31, tmp_15_0);
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.noLocalUser"));
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", ctx_r1.externalProfileUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "profile.openExternal"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "dl", 21)(3, "div", 22)(4, "dt");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "dt");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "dt");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 22)(22, "dt");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "section", 20);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "h2", 23);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24);
    \u0275\u0275element(33, "input", 25);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "button", 26);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyUserApiToken());
    });
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_38_Template, 3, 3, "p", 27)(39, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_39_Template, 3, 3, "p", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "section", 20);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "h2", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_45_Template, 32, 20, "dl", 21)(46, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_46_Template, 3, 3, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 30);
    \u0275\u0275conditionalCreate(48, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Conditional_48_Template, 3, 4, "a", 31);
    \u0275\u0275elementStart(49, "button", 32);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Conditional_19_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const user_r6 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 21, "profile.sessionTab"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "profile.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 25, "profile.username"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 27, "profile.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "profile.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 31, "profile.apiTokenTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 33, "profile.apiTokenTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.userApiToken() || "-");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 35, "profile.apiTokenTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.userApiToken());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 37, "profile.copyApiToken"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.copyStatus() === "success" ? 38 : ctx_r1.copyStatus() === "error" ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(41, 39, "profile.localUserTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 41, "profile.localUserTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.localUser()) ? 45 : 46, tmp_22_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.externalProfileUrl() ? 48 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 43, "auth.logout"), " ");
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-user-liked", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("userKey", ctx_r1.userApiToken());
  }
}
function PerfilPage_Conditional_9_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 33)(2, "span", 34);
    \u0275\u0275element(3, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 37)(12, "a", 38);
    \u0275\u0275element(13, "i", 39);
    \u0275\u0275elementStart(14, "span")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 41);
    \u0275\u0275element(23, "i", 42);
    \u0275\u0275elementStart(24, "span")(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "profile.monitorTab"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "profile.monitorDescription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "profile.computers"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "profile.computersDescription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 14, "profile.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 16, "profile.statusDescription"));
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
    \u0275\u0275elementStart(9, "nav", 12);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "button", 13);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("session"));
    });
    \u0275\u0275element(12, "i", 14);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function PerfilPage_Conditional_9_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("likes"));
    });
    \u0275\u0275element(16, "i", 15);
    \u0275\u0275text(17, " Curtidas ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, PerfilPage_Conditional_9_Conditional_0_Conditional_18_Template, 4, 6, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, PerfilPage_Conditional_9_Conditional_0_Conditional_19_Template, 52, 45)(20, PerfilPage_Conditional_9_Conditional_0_Conditional_20_Template, 1, 1, "app-user-liked", 17)(21, PerfilPage_Conditional_9_Conditional_0_Conditional_21_Template, 32, 18, "section", 18);
  }
  if (rf & 2) {
    const user_r6 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r6.name || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "auth.welcome"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 15, "profile.tabsLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "session");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "session");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "profile.sessionTab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "likes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "likes");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isAdmin() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "session" ? 19 : ctx_r1.activeTab() === "likes" ? 20 : ctx_r1.isAdmin() ? 21 : -1);
  }
}
function PerfilPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PerfilPage_Conditional_9_Conditional_0_Template, 22, 19);
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
  isAdmin = computed(() => this.currentUser()?.role === "admin", ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  activeTab = signal("session", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
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
  setTab(tab) {
    if (tab === "monitor" && !this.isAdmin())
      return;
    this.activeTab.set(tab);
  }
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
          const input2 = document.createElement("textarea");
          input2.value = token;
          input2.setAttribute("readonly", "");
          input2.style.position = "fixed";
          input2.style.opacity = "0";
          document.body.appendChild(input2);
          input2.select();
          const copied = document.execCommand("copy");
          document.body.removeChild(input2);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilPage, selectors: [["app-perfil-page"]], decls: 10, vars: 4, consts: [["aria-labelledby", "perfil-title", 1, "perfil-wrap", "py-4"], [1, "container"], [1, "perfil-card", "card", "border-0", "shadow-sm"], [1, "card-body", "p-4", "p-md-5"], ["id", "perfil-title", 1, "h3", "mb-4"], [1, "perfil-empty-state"], [1, "mb-3"], ["routerLink", "/signin", 1, "btn", "btn-primary"], [1, "perfil-header", "mb-4"], ["aria-hidden", "true", 1, "perfil-avatar"], [1, "perfil-overline", "mb-1"], [1, "perfil-name", "mb-0"], ["role", "tablist", 1, "perfil-tabs", "mb-4"], ["type", "button", "role", "tab", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-person-vcard"], ["aria-hidden", "true", 1, "bi", "bi-heart-fill", "text-danger"], ["type", "button", "role", "tab", 3, "active"], [3, "userKey"], ["aria-labelledby", "perfil-monitor-title", 1, "perfil-section", "perfil-monitor"], ["aria-hidden", "true", 1, "bi", "bi-activity"], [1, "perfil-section", "mb-4"], [1, "perfil-grid", "mb-0"], [1, "perfil-item"], [1, "h5", "mb-3"], [1, "perfil-api-row"], ["type", "text", "readonly", "", 1, "form-control", "perfil-api-input", 3, "value"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "perfil-copy-feedback", "text-success", "mb-0"], [1, "perfil-copy-feedback", "text-danger", "mb-0"], [1, "mb-0"], [1, "perfil-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "perfil-monitor-header"], [1, "perfil-monitor-icon"], ["aria-hidden", "true", 1, "bi", "bi-display"], ["id", "perfil-monitor-title", 1, "h5", "mb-1"], [1, "perfil-monitor-actions"], ["routerLink", "/monitor", 1, "perfil-monitor-link"], ["aria-hidden", "true", 1, "bi", "bi-pc-display-horizontal"], ["aria-hidden", "true", 1, "bi", "bi-arrow-right"], ["routerLink", "/status", 1, "perfil-monitor-link"], ["aria-hidden", "true", 1, "bi", "bi-heart-pulse"]], template: function PerfilPage_Template(rf, ctx) {
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
  }, dependencies: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent, UserLikedComponent, DatePipe, TranslatePipe], styles: ['\n\n.perfil-wrap[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.perfil-card[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.perfil-empty-state[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.9rem;\n}\n.perfil-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.perfil-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: -1px;\n  padding: 0.7rem 1rem;\n  align-items: center;\n  gap: 0.45rem;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-muted);\n  background: transparent;\n  font-weight: 600;\n}\n.perfil-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--theme-link);\n}\n.perfil-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.perfil-avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #483d8b;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 2.7rem;\n  justify-content: center;\n  width: 2.7rem;\n}\n.perfil-overline[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.8rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n}\n.perfil-name[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.perfil-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n.perfil-item[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 0.7rem 0.8rem;\n}\n.perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n.perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n}\n.perfil-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  min-width: 240px;\n}\n.perfil-copy-feedback[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-top: 0.55rem;\n}\n.perfil-monitor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.perfil-monitor-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.perfil-monitor-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  border-radius: 0.75rem;\n  color: var(--theme-link);\n  background: var(--theme-sand);\n  font-size: 1.3rem;\n}\n.perfil-monitor-actions[_ngcontent-%COMP%] {\n  display: grid;\n  margin-top: 1.25rem;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.perfil-monitor-link[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.8rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  text-decoration: none;\n  transition: border-color 0.2s ease, transform 0.2s ease;\n}\n.perfil-monitor-link[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:first-child {\n  color: var(--theme-link);\n  font-size: 1.35rem;\n}\n.perfil-monitor-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n}\n.perfil-monitor-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.perfil-monitor-link[_ngcontent-%COMP%]:hover, \n.perfil-monitor-link[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--theme-link);\n  color: var(--theme-ink);\n  transform: translateY(-2px);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-card[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-section[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-section[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-item[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-empty-state[_ngcontent-%COMP%] {\n  background: rgba(24, 35, 52, 0.94);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-avatar[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  color: var(--theme-ink);\n  border: 1px solid rgba(100, 132, 173, 0.45);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-overline[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-overline[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-name[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-name[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus-visible {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(45, 62, 90, 0.96),\n      rgba(28, 44, 68, 0.96));\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-wrap[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .perfil-api-input[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .perfil-api-input[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n@media (max-width: 575.98px) {\n  .perfil-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .perfil-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .perfil-monitor-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilPage, [{
    type: Component,
    args: [{ selector: "app-perfil-page", imports: [CommonModule, RouterLink, TranslateModule, BreadcrumbsComponent, UserLikedComponent], template: `<section class="perfil-wrap py-4" aria-labelledby="perfil-title">\r
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
            <nav class="perfil-tabs mb-4" role="tablist" [attr.aria-label]="'profile.tabsLabel' | translate">\r
              <button type="button" role="tab" [class.active]="activeTab() === 'session'" [attr.aria-selected]="activeTab() === 'session'" (click)="setTab('session')">\r
                <i class="bi bi-person-vcard" aria-hidden="true"></i> {{ 'profile.sessionTab' | translate }}\r
              </button>\r
              <button type="button" role="tab" [class.active]="activeTab() === 'likes'" [attr.aria-selected]="activeTab() === 'likes'" (click)="setTab('likes')">\r
                <i class="bi bi-heart-fill text-danger" aria-hidden="true"></i> Curtidas\r
              </button>\r
              @if (isAdmin()) {\r
                <button type="button" role="tab" [class.active]="activeTab() === 'monitor'" [attr.aria-selected]="activeTab() === 'monitor'" (click)="setTab('monitor')">\r
                  <i class="bi bi-activity" aria-hidden="true"></i> {{ 'profile.monitorTab' | translate }}\r
                </button>\r
              }\r
            </nav>\r
\r
            @if (activeTab() === 'session') {\r
            <section class="perfil-section mb-4" [attr.aria-label]="'profile.sessionTab' | translate">\r
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
            <section class="perfil-section mb-4" [attr.aria-label]="'profile.apiTokenTitle' | translate">\r
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
            <section class="perfil-section mb-4" [attr.aria-label]="'profile.localUserTitle' | translate">\r
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
            } @else if (activeTab() === 'likes') {\r
              <app-user-liked [userKey]="userApiToken()" />\r
            } @else if (isAdmin()) {\r
              <section class="perfil-section perfil-monitor" aria-labelledby="perfil-monitor-title">\r
                <div class="perfil-monitor-header">\r
                  <span class="perfil-monitor-icon"><i class="bi bi-display" aria-hidden="true"></i></span>\r
                  <div>\r
                    <h2 id="perfil-monitor-title" class="h5 mb-1">{{ 'profile.monitorTab' | translate }}</h2>\r
                    <p class="mb-0">{{ 'profile.monitorDescription' | translate }}</p>\r
                  </div>\r
                </div>\r
                <div class="perfil-monitor-actions">\r
                  <a class="perfil-monitor-link" routerLink="/monitor">\r
                    <i class="bi bi-pc-display-horizontal" aria-hidden="true"></i>\r
                    <span><strong>{{ 'profile.computers' | translate }}</strong><small>{{ 'profile.computersDescription' | translate }}</small></span>\r
                    <i class="bi bi-arrow-right" aria-hidden="true"></i>\r
                  </a>\r
                  <a class="perfil-monitor-link" routerLink="/status">\r
                    <i class="bi bi-heart-pulse" aria-hidden="true"></i>\r
                    <span><strong>{{ 'profile.status' | translate }}</strong><small>{{ 'profile.statusDescription' | translate }}</small></span>\r
                    <i class="bi bi-arrow-right" aria-hidden="true"></i>\r
                  </a>\r
                </div>\r
              </section>\r
            }\r
          }\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/perfil/perfil.page.scss */\n.perfil-wrap {\n  color: var(--theme-ink);\n}\n.perfil-card {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.perfil-empty-state {\n  background: var(--theme-sand);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-header {\n  align-items: center;\n  display: flex;\n  gap: 0.9rem;\n}\n.perfil-tabs {\n  display: flex;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.perfil-tabs button {\n  display: inline-flex;\n  margin-bottom: -1px;\n  padding: 0.7rem 1rem;\n  align-items: center;\n  gap: 0.45rem;\n  border: 0;\n  border-bottom: 3px solid transparent;\n  color: var(--theme-muted);\n  background: transparent;\n  font-weight: 600;\n}\n.perfil-tabs button:hover {\n  color: var(--theme-link);\n}\n.perfil-tabs button.active {\n  border-bottom-color: var(--theme-link);\n  color: var(--theme-link);\n}\n.perfil-avatar {\n  align-items: center;\n  background: #483d8b;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-family:\n    "Barlow Condensed",\n    "Trebuchet MS",\n    sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 2.7rem;\n  justify-content: center;\n  width: 2.7rem;\n}\n.perfil-overline {\n  color: var(--theme-hint);\n  font-size: 0.8rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n}\n.perfil-name {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.perfil-section {\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  padding: 1rem;\n}\n.perfil-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n.perfil-item {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.7rem;\n  padding: 0.7rem 0.8rem;\n}\n.perfil-grid dt {\n  color: var(--theme-hint);\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n.perfil-grid dd {\n  font-size: 1rem;\n  margin: 0;\n}\n.perfil-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-row {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.perfil-api-input {\n  flex: 1;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  min-width: 240px;\n}\n.perfil-copy-feedback {\n  font-size: 0.9rem;\n  margin-top: 0.55rem;\n}\n.perfil-monitor-header {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.perfil-monitor-header p {\n  color: var(--theme-muted);\n}\n.perfil-monitor-icon {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  border-radius: 0.75rem;\n  color: var(--theme-link);\n  background: var(--theme-sand);\n  font-size: 1.3rem;\n}\n.perfil-monitor-actions {\n  display: grid;\n  margin-top: 1.25rem;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.perfil-monitor-link {\n  display: grid;\n  padding: 1rem;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.8rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  text-decoration: none;\n  transition: border-color 0.2s ease, transform 0.2s ease;\n}\n.perfil-monitor-link > i:first-child {\n  color: var(--theme-link);\n  font-size: 1.35rem;\n}\n.perfil-monitor-link span {\n  display: grid;\n  gap: 0.12rem;\n}\n.perfil-monitor-link small {\n  color: var(--theme-muted);\n}\n.perfil-monitor-link:hover,\n.perfil-monitor-link:focus-visible {\n  border-color: var(--theme-link);\n  color: var(--theme-ink);\n  transform: translateY(-2px);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap,\n:host-context(body.theme-master.theme-dark) .perfil-wrap h1,\n:host-context(body.theme-master.theme-dark) .perfil-wrap h2,\n:host-context(body.theme-master.theme-dark) .perfil-wrap p,\n:host-context(body.theme-master.theme-dark) .perfil-wrap dt,\n:host-context(body.theme-master.theme-dark) .perfil-wrap dd,\n:host-context(body.theme-master.theme-dark) .perfil-wrap a,\n:host-context(body.theme-master.theme-dark) .perfil-wrap button {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-card,\n:host-context(body.theme-master.theme-dark) .perfil-empty-state,\n:host-context(body.theme-master.theme-dark) .perfil-section,\n:host-context(body.theme-master.theme-dark) .perfil-item {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .perfil-empty-state {\n  background: rgba(24, 35, 52, 0.94);\n}\n:host-context(body.theme-master.theme-dark) .perfil-avatar {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  color: var(--theme-ink);\n  border: 1px solid rgba(100, 132, 173, 0.45);\n}\n:host-context(body.theme-master.theme-dark) .perfil-overline {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .perfil-name {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-grid dt {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .perfil-grid dd {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.92));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary:hover,\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-primary:focus-visible {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(45, 62, 90, 0.96),\n      rgba(28, 44, 68, 0.96));\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary:hover,\n:host-context(body.theme-master.theme-dark) .perfil-wrap .btn-outline-primary:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(128, 160, 196, 0.7);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .perfil-api-input {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n@media (max-width: 575.98px) {\n  .perfil-tabs {\n    overflow-x: auto;\n  }\n  .perfil-tabs button {\n    white-space: nowrap;\n  }\n  .perfil-monitor-actions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=perfil.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilPage, { className: "PerfilPage", filePath: "src/app/pages/perfil/perfil.page.ts", lineNumber: 16 });
})();
export {
  PerfilPage
};
//# sourceMappingURL=chunk-N4YNNNMF.mjs.map
