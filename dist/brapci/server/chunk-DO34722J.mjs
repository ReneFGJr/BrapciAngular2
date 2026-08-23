import './polyfills.server.mjs';
import {
  BrapciApiService
} from "./chunk-JPRPSVPQ.mjs";
import {
  takeUntilDestroyed
} from "./chunk-YPPRAXG6.mjs";
import {
  BasketService
} from "./chunk-2CEF6IR7.mjs";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZBQU5EHV.mjs";

// src/app/components/book-gadget/book-gadget.component.ts
var _c0 = (a0) => ["/v", a0];
function BookGadgetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275elementEnd()();
  }
}
function BookGadgetComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const author_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "/v/" + author_r3.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r3.name);
  }
}
function BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const author_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(author_r3.name);
  }
}
function BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "; ");
    \u0275\u0275elementEnd();
  }
}
function BookGadgetComponent_Conditional_2_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_0_Template, 3, 2, "a", 19)(1, BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_1_Template, 2, 1, "i");
    \u0275\u0275conditionalCreate(2, BookGadgetComponent_Conditional_2_Conditional_10_For_2_Conditional_2_Template, 2, 0, "span", 20);
  }
  if (rf & 2) {
    const author_r3 = ctx.$implicit;
    const \u0275$index_39_r4 = ctx.$index;
    const \u0275$count_39_r5 = ctx.$count;
    \u0275\u0275conditional(author_r3.id ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_39_r4 === \u0275$count_39_r5 - 1) ? 2 : -1);
  }
}
function BookGadgetComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275repeaterCreate(1, BookGadgetComponent_Conditional_2_Conditional_10_For_2_Template, 3, 2, null, null, \u0275\u0275componentInstance().trackAuthor, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.authorsWithLink());
  }
}
function BookGadgetComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.publisherName());
  }
}
function BookGadgetComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.str("hasSubtitle"));
  }
}
function BookGadgetComponent_Conditional_2_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const author_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(author_r6);
  }
}
function BookGadgetComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "Autor(es)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 22);
    \u0275\u0275repeaterCreate(4, BookGadgetComponent_Conditional_2_Conditional_15_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.arr("hasAuthor"));
  }
}
function BookGadgetComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.str("hasYear") || ctx_r0.str("hasDate"));
  }
}
function BookGadgetComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "ISBN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.str("hasISBN"));
  }
}
function BookGadgetComponent_Conditional_2_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kw_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kw_r7);
  }
}
function BookGadgetComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "Palavras-chave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, BookGadgetComponent_Conditional_2_Conditional_18_For_5_Template, 2, 1, "span", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.arr("hasKeyword"));
  }
}
function BookGadgetComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "Resumo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.str("hasAbstract") || ctx_r0.str("hasDescription"));
  }
}
function BookGadgetComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4, " Ver ficha completa \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "p", 12);
    \u0275\u0275text(7, "Livro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BookGadgetComponent_Conditional_2_Conditional_10_Template, 3, 0, "p", 14);
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function BookGadgetComponent_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleBasket());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, BookGadgetComponent_Conditional_2_Conditional_13_Template, 2, 1, "p", 16);
    \u0275\u0275conditionalCreate(14, BookGadgetComponent_Conditional_2_Conditional_14_Template, 2, 1, "p", 17);
    \u0275\u0275conditionalCreate(15, BookGadgetComponent_Conditional_2_Conditional_15_Template, 6, 0, "div", 18);
    \u0275\u0275conditionalCreate(16, BookGadgetComponent_Conditional_2_Conditional_16_Template, 5, 1, "div", 18);
    \u0275\u0275conditionalCreate(17, BookGadgetComponent_Conditional_2_Conditional_17_Template, 5, 1, "div", 18);
    \u0275\u0275conditionalCreate(18, BookGadgetComponent_Conditional_2_Conditional_18_Template, 6, 0, "div", 18);
    \u0275\u0275conditionalCreate(19, BookGadgetComponent_Conditional_2_Conditional_19_Template, 5, 1, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.coverUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.displayTitle());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx_r0.bookId));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.displayTitle());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.authorsWithLink().length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("book-gadget__basket-btn--active", ctx_r0.isMarked());
    \u0275\u0275attribute("aria-label", ctx_r0.isMarked() ? "remover sele\xE7\xE3o" : "Selecionar");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isMarked() ? "remover sele\xE7\xE3o" : "Selecionar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.publisherName() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.str("hasSubtitle") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.arr("hasAuthor").length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.str("hasYear") || ctx_r0.str("hasDate") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.str("hasISBN") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.arr("hasKeyword").length ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.str("hasAbstract") || ctx_r0.str("hasDescription") ? 19 : -1);
  }
}
var BookGadgetComponent = class _BookGadgetComponent {
  bookId = "";
  cover = "";
  title = "";
  data = null;
  api = inject(BrapciApiService);
  basketService = inject(BasketService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  bookData = signal(null, ...ngDevMode ? [{ debugName: "bookData" }] : []);
  basketVersion = signal(0, ...ngDevMode ? [{ debugName: "basketVersion" }] : []);
  constructor() {
    this.basketService.changed.pipe(takeUntilDestroyed()).subscribe(() => {
      this.basketVersion.update((value) => value + 1);
    });
  }
  ngOnChanges(changes) {
    if (this.data) {
      this.bookData.set(this.data);
      this.error.set("");
      this.loading.set(false);
    } else if (changes["bookId"] && this.bookId) {
      this.loadBook();
    }
  }
  loadBook() {
    this.loading.set(true);
    this.error.set("");
    this.bookData.set(null);
    this.api.getById(this.bookId).subscribe({
      next: (res) => {
        this.bookData.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("N\xE3o foi poss\xEDvel carregar os dados do livro.");
        this.loading.set(false);
      }
    });
  }
  str(key) {
    const d = this.bookData();
    if (!d)
      return "";
    const v = d[key];
    return typeof v === "string" && v.trim() ? v : "";
  }
  coverUrl() {
    const d = this.bookData();
    const nested = this.asRecord(d?.["data"]);
    return this.readText(d?.["hasCover"]) || this.readText(d?.["cover"]) || this.readText(d?.["Cover"]) || this.readText(d?.["image"]) || this.readText(nested?.["hasCover"]) || this.readText(nested?.["cover"]) || this.readText(nested?.["Cover"]) || this.readText(this.cover);
  }
  displayTitle() {
    const d = this.bookData();
    const nested = this.asRecord(d?.["data"]);
    return this.readText(d?.["hasTitle"]) || this.readText(d?.["title"]) || this.readText(d?.["TITLE"]) || this.readText(nested?.["hasTitle"]) || this.readText(nested?.["title"]) || this.readText(nested?.["TITLE"]) || this.readText(this.title);
  }
  arr(key) {
    const d = this.bookData();
    if (!d)
      return [];
    const v = d[key];
    if (Array.isArray(v))
      return v.filter((x) => typeof x === "string");
    return [];
  }
  publisherName() {
    return this.str("hasPublisher") || this.str("publisher");
  }
  authorsWithLink() {
    const d = this.bookData();
    if (!d)
      return [];
    const creatorAuthor = d["creator_author"];
    if (Array.isArray(creatorAuthor)) {
      const linked = creatorAuthor.filter((item) => !!item && typeof item === "object" && !Array.isArray(item)).map((item) => ({
        name: typeof item["name"] === "string" ? item["name"].trim() : "",
        id: typeof item["ID"] === "string" ? item["ID"].trim() : ""
      })).filter((item) => item.name.length > 0);
      if (linked.length) {
        return linked;
      }
    }
    const hasAuthor = d["hasAuthor"];
    if (Array.isArray(hasAuthor)) {
      return hasAuthor.filter((item) => typeof item === "string" && item.trim().length > 0).map((name) => ({ name: name.trim(), id: "" }));
    }
    return [];
  }
  trackAuthor(_, author) {
    return author.id || author.name;
  }
  isMarked() {
    this.basketVersion();
    const numericId = Number(this.bookId);
    if (!Number.isFinite(numericId))
      return false;
    return this.basketService.isMarked(numericId);
  }
  toggleBasket() {
    const numericId = Number(this.bookId);
    if (!Number.isFinite(numericId))
      return;
    if (this.basketService.isMarked(numericId)) {
      this.basketService.remove(numericId);
      return;
    }
    this.basketService.add(numericId);
  }
  readText(value) {
    return typeof value === "string" && value.trim() ? value.trim() : "";
  }
  asRecord(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return null;
    }
    return value;
  }
  static \u0275fac = function BookGadgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookGadgetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookGadgetComponent, selectors: [["app-book-gadget"]], inputs: { bookId: "bookId", cover: "cover", title: "title", data: "data" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [["aria-live", "polite", 1, "book-gadget__loading"], [1, "book-gadget__error"], [1, "book-gadget__body"], [1, "book-gadget__skeleton-cover"], [1, "book-gadget__skeleton-lines"], [1, "book-gadget__skeleton-line", "wide"], [1, "book-gadget__skeleton-line", "medium"], [1, "book-gadget__skeleton-line", "narrow"], [1, "book-gadget__cover-col"], ["width", "200", "height", "280", "loading", "lazy", "decoding", "async", 1, "book-gadget__cover", 3, "src", "alt"], [1, "book-gadget__link-full", 3, "routerLink"], [1, "book-gadget__info-col"], [1, "book-gadget__badge"], [1, "book-gadget__title"], [1, "book-gadget__authors-inline"], ["type", "button", 1, "book-gadget__basket-btn", 3, "click"], [1, "book-gadget__publisher-inline"], [1, "book-gadget__subtitle"], [1, "book-gadget__section"], ["target", "_blank", "rel", "noopener noreferrer", 1, "book-gadget__author-link", 3, "href"], [1, "book-gadget__author-sep"], [1, "book-gadget__label"], [1, "book-gadget__list"], [1, "book-gadget__tags"], [1, "book-gadget__tag"], [1, "book-gadget__abstract"]], template: function BookGadgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BookGadgetComponent_Conditional_0_Template, 6, 0, "div", 0)(1, BookGadgetComponent_Conditional_1_Template, 2, 1, "p", 1)(2, BookGadgetComponent_Conditional_2_Template, 20, 18, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.error() ? 1 : ctx.bookData() ? 2 : -1);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid var(--theme-line);\n  border-radius: 16px;\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n  padding: 1rem;\n}\n.book-gadget__body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.book-gadget__cover-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  flex: 0 0 auto;\n}\n.book-gadget__cover[_ngcontent-%COMP%] {\n  display: block;\n  width: 180px;\n  height: 260px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--theme-line);\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.16);\n  background: var(--theme-card-bg);\n}\n.book-gadget__link-full[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--theme-link);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.book-gadget__link-full[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.book-gadget__info-col[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.book-gadget__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.18rem 0.7rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-paper);\n  background: var(--theme-hint);\n  border-radius: 20px;\n}\n.book-gadget__title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--theme-ink);\n  line-height: 1.3;\n  margin-bottom: 0.3rem;\n}\n.book-gadget__authors-inline[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  color: var(--theme-muted);\n  line-height: 1.5;\n}\n.book-gadget__author-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.book-gadget__author-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.book-gadget__author-sep[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.book-gadget__basket-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 85%, var(--theme-link) 15%);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-sand) 72%, transparent);\n  color: var(--theme-link);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 0.35rem 0.85rem;\n  margin-bottom: 0.65rem;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.book-gadget__basket-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-sand) 88%, transparent);\n}\n.book-gadget__basket-btn--active[_ngcontent-%COMP%] {\n  background: var(--theme-hint);\n  border-color: var(--theme-hint);\n  color: var(--theme-paper);\n}\n.book-gadget__publisher-inline[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: var(--theme-muted);\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.book-gadget__subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--theme-ink);\n  margin-bottom: 0.75rem;\n}\n.book-gadget__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.85rem;\n  font-size: 0.9rem;\n  color: var(--theme-ink);\n}\n.book-gadget__label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--theme-muted);\n}\n.book-gadget__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.1rem;\n  line-height: 1.7;\n}\n.book-gadget__abstract[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  margin: 0;\n  max-height: 9em;\n  overflow-y: auto;\n  color: var(--theme-ink);\n}\n.book-gadget__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.book-gadget__tag[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  color: var(--theme-link);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, var(--theme-link) 22%);\n}\n.book-gadget__loading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.book-gadget__skeleton-cover[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 260px;\n  flex: 0 0 auto;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 25%,\n      color-mix(in srgb, var(--theme-card-bg) 92%, transparent) 50%,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n.book-gadget__skeleton-lines[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n}\n.book-gadget__skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 25%,\n      color-mix(in srgb, var(--theme-card-bg) 92%, transparent) 50%,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n.book-gadget__skeleton-line.wide[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.book-gadget__skeleton-line.medium[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.book-gadget__skeleton-line.narrow[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.book-gadget__error[_ngcontent-%COMP%] {\n  color: var(--theme-error);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=book-gadget.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookGadgetComponent, [{
    type: Component,
    args: [{ selector: "app-book-gadget", standalone: true, imports: [CommonModule, RouterLink], template: `@if (loading()) {\r
  <div class="book-gadget__loading" aria-live="polite">\r
    <div class="book-gadget__skeleton-cover"></div>\r
    <div class="book-gadget__skeleton-lines">\r
      <div class="book-gadget__skeleton-line wide"></div>\r
      <div class="book-gadget__skeleton-line medium"></div>\r
      <div class="book-gadget__skeleton-line narrow"></div>\r
    </div>\r
  </div>\r
} @else if (error()) {\r
  <p class="book-gadget__error">{{ error() }}</p>\r
} @else if (bookData()) {\r
  <div class="book-gadget__body">\r
\r
    <div class="book-gadget__cover-col">\r
      <img\r
        class="book-gadget__cover"\r
        [src]="coverUrl()"\r
        [alt]="displayTitle()"\r
        width="200"\r
        height="280"\r
        loading="lazy"\r
        decoding="async"\r
      />\r
      <a class="book-gadget__link-full" [routerLink]="['/v', bookId]">\r
        Ver ficha completa \u2192\r
      </a>\r
    </div>\r
\r
    <div class="book-gadget__info-col">\r
      <p class="book-gadget__badge">Livro</p>\r
\r
      <h2 class="book-gadget__title">{{ displayTitle() }}</h2>\r
\r
      @if (authorsWithLink().length) {\r
        <p class="book-gadget__authors-inline">\r
          @for (author of authorsWithLink(); track trackAuthor($index, author)) {\r
            @if (author.id) {\r
              <a\r
                class="book-gadget__author-link"\r
                [href]="'/v/' + author.id"\r
                target="_blank"\r
                rel="noopener noreferrer"\r
              >\r
                <i>{{ author.name }}</i>\r
              </a>\r
            } @else {\r
              <i>{{ author.name }}</i>\r
            }\r
            @if (!$last) {\r
              <span class="book-gadget__author-sep">; </span>\r
            }\r
          }\r
        </p>\r
      }\r
\r
      <button\r
        type="button"\r
        class="book-gadget__basket-btn"\r
        [class.book-gadget__basket-btn--active]="isMarked()"\r
        (click)="toggleBasket()"\r
        [attr.aria-label]="isMarked() ? 'remover sele\xE7\xE3o' : 'Selecionar'"\r
      >\r
        {{ isMarked() ? 'remover sele\xE7\xE3o' : 'Selecionar' }}\r
      </button>\r
\r
      @if (publisherName()) {\r
        <p class="book-gadget__publisher-inline">{{ publisherName() }}</p>\r
      }\r
\r
      @if (str('hasSubtitle')) {\r
        <p class="book-gadget__subtitle">{{ str('hasSubtitle') }}</p>\r
      }\r
\r
      @if (arr('hasAuthor').length) {\r
        <div class="book-gadget__section">\r
          <span class="book-gadget__label">Autor(es)</span>\r
          <ul class="book-gadget__list">\r
            @for (author of arr('hasAuthor'); track author) {\r
              <li>{{ author }}</li>\r
            }\r
          </ul>\r
        </div>\r
      }\r
\r
      @if (str('hasYear') || str('hasDate')) {\r
        <div class="book-gadget__section">\r
          <span class="book-gadget__label">Ano</span>\r
          <span>{{ str('hasYear') || str('hasDate') }}</span>\r
        </div>\r
      }\r
\r
      @if (str('hasISBN')) {\r
        <div class="book-gadget__section">\r
          <span class="book-gadget__label">ISBN</span>\r
          <span>{{ str('hasISBN') }}</span>\r
        </div>\r
      }\r
\r
      @if (arr('hasKeyword').length) {\r
        <div class="book-gadget__section">\r
          <span class="book-gadget__label">Palavras-chave</span>\r
          <div class="book-gadget__tags">\r
            @for (kw of arr('hasKeyword'); track kw) {\r
              <span class="book-gadget__tag">{{ kw }}</span>\r
            }\r
          </div>\r
        </div>\r
      }\r
\r
      @if (str('hasAbstract') || str('hasDescription')) {\r
        <div class="book-gadget__section">\r
          <span class="book-gadget__label">Resumo</span>\r
          <p class="book-gadget__abstract">{{ str('hasAbstract') || str('hasDescription') }}</p>\r
        </div>\r
      }\r
    </div>\r
\r
  </div>\r
}\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/book-gadget/book-gadget.component.scss */\n:host {\n  display: block;\n  border: 1px solid var(--theme-line);\n  border-radius: 16px;\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n  padding: 1rem;\n}\n.book-gadget__body {\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.book-gadget__cover-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  flex: 0 0 auto;\n}\n.book-gadget__cover {\n  display: block;\n  width: 180px;\n  height: 260px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--theme-line);\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.16);\n  background: var(--theme-card-bg);\n}\n.book-gadget__link-full {\n  font-size: 0.82rem;\n  color: var(--theme-link);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.book-gadget__link-full:hover {\n  text-decoration: underline;\n}\n.book-gadget__info-col {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.book-gadget__badge {\n  display: inline-block;\n  padding: 0.18rem 0.7rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-paper);\n  background: var(--theme-hint);\n  border-radius: 20px;\n}\n.book-gadget__title {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--theme-ink);\n  line-height: 1.3;\n  margin-bottom: 0.3rem;\n}\n.book-gadget__authors-inline {\n  margin: 0 0 0.6rem;\n  color: var(--theme-muted);\n  line-height: 1.5;\n}\n.book-gadget__author-link {\n  color: inherit;\n  text-decoration: none;\n}\n.book-gadget__author-link:hover {\n  text-decoration: underline;\n}\n.book-gadget__author-sep {\n  color: var(--theme-muted);\n}\n.book-gadget__basket-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 85%, var(--theme-link) 15%);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-sand) 72%, transparent);\n  color: var(--theme-link);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 0.35rem 0.85rem;\n  margin-bottom: 0.65rem;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.book-gadget__basket-btn:hover {\n  background: color-mix(in srgb, var(--theme-sand) 88%, transparent);\n}\n.book-gadget__basket-btn--active {\n  background: var(--theme-hint);\n  border-color: var(--theme-hint);\n  color: var(--theme-paper);\n}\n.book-gadget__publisher-inline {\n  margin: 0 0 0.75rem;\n  color: var(--theme-muted);\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.book-gadget__subtitle {\n  font-size: 1rem;\n  color: var(--theme-ink);\n  margin-bottom: 0.75rem;\n}\n.book-gadget__section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.85rem;\n  font-size: 0.9rem;\n  color: var(--theme-ink);\n}\n.book-gadget__label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--theme-muted);\n}\n.book-gadget__list {\n  margin: 0;\n  padding-left: 1.1rem;\n  line-height: 1.7;\n}\n.book-gadget__abstract {\n  line-height: 1.7;\n  margin: 0;\n  max-height: 9em;\n  overflow-y: auto;\n  color: var(--theme-ink);\n}\n.book-gadget__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.book-gadget__tag {\n  padding: 0.15rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  color: var(--theme-link);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, var(--theme-link) 22%);\n}\n.book-gadget__loading {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n.book-gadget__skeleton-cover {\n  width: 180px;\n  height: 260px;\n  flex: 0 0 auto;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 25%,\n      color-mix(in srgb, var(--theme-card-bg) 92%, transparent) 50%,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 75%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.book-gadget__skeleton-lines {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n}\n.book-gadget__skeleton-line {\n  height: 1rem;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 25%,\n      color-mix(in srgb, var(--theme-card-bg) 92%, transparent) 50%,\n      color-mix(in srgb, var(--theme-line) 70%, transparent) 75%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.book-gadget__skeleton-line.wide {\n  width: 90%;\n}\n.book-gadget__skeleton-line.medium {\n  width: 65%;\n}\n.book-gadget__skeleton-line.narrow {\n  width: 40%;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.book-gadget__error {\n  color: var(--theme-error);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=book-gadget.component.css.map */\n'] }]
  }], () => [], { bookId: [{
    type: Input,
    args: [{ required: true }]
  }], cover: [{
    type: Input
  }], title: [{
    type: Input
  }], data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookGadgetComponent, { className: "BookGadgetComponent", filePath: "src/app/components/book-gadget/book-gadget.component.ts", lineNumber: 22 });
})();

// src/app/components/book-panel/book-panel.component.ts
function BookPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function BookPanelComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("book-panel__backdrop--visible", ctx_r1.open);
  }
}
function BookPanelComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function BookPanelComponent_Conditional_2_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function BookPanelComponent_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12)(1, "h3");
    \u0275\u0275text(2, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.year);
  }
}
function BookPanelComponent_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12)(1, "h3");
    \u0275\u0275text(2, "ISBN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isbn);
  }
}
function BookPanelComponent_Conditional_2_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12)(1, "h3");
    \u0275\u0275text(2, "P\xE1ginas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pages);
  }
}
function BookPanelComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, BookPanelComponent_Conditional_2_Conditional_4_Conditional_1_Template, 5, 1, "article", 12);
    \u0275\u0275conditionalCreate(2, BookPanelComponent_Conditional_2_Conditional_4_Conditional_2_Template, 5, 1, "article", 12);
    \u0275\u0275conditionalCreate(3, BookPanelComponent_Conditional_2_Conditional_4_Conditional_3_Template, 5, 1, "article", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.year ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isbn ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pages ? 3 : -1);
  }
}
function BookPanelComponent_Conditional_2_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " visualiza\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.views);
  }
}
function BookPanelComponent_Conditional_2_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " downloads");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.downloads);
  }
}
function BookPanelComponent_Conditional_2_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " curtidas");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.likes);
  }
}
function BookPanelComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, BookPanelComponent_Conditional_2_Conditional_5_Conditional_1_Template, 4, 1, "span");
    \u0275\u0275conditionalCreate(2, BookPanelComponent_Conditional_2_Conditional_5_Conditional_2_Template, 4, 1, "span");
    \u0275\u0275conditionalCreate(3, BookPanelComponent_Conditional_2_Conditional_5_Conditional_3_Template, 4, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.views ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.downloads ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.likes ? 3 : -1);
  }
}
function BookPanelComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, " Baixar livro (PDF) ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.resourcePdf, \u0275\u0275sanitizeUrl);
  }
}
function BookPanelComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 10)(1, "h3");
    \u0275\u0275text(2, "Sobre a obra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.description);
  }
}
function BookPanelComponent_Conditional_2_Conditional_8_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const person_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(person_r4.complement);
  }
}
function BookPanelComponent_Conditional_2_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, BookPanelComponent_Conditional_2_Conditional_8_For_5_Conditional_3_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const person_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(person_r4.complement ? 3 : -1);
  }
}
function BookPanelComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 10)(1, "h3");
    \u0275\u0275text(2, "Organiza\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 13);
    \u0275\u0275repeaterCreate(4, BookPanelComponent_Conditional_2_Conditional_8_For_5_Template, 4, 2, "li", null, \u0275\u0275componentInstance().trackByName, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.creators);
  }
}
function BookPanelComponent_Conditional_2_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subject_r5.name);
  }
}
function BookPanelComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 10)(1, "h3");
    \u0275\u0275text(2, "Assuntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, BookPanelComponent_Conditional_2_Conditional_9_For_5_Template, 2, 1, "span", 17, \u0275\u0275componentInstance().trackByName, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.subjectsPt);
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4")(1, "a", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", "/v/" + chapter_r6.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chapter_r6.title, " ");
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(chapter_r6.title);
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(chapter_r6.pages);
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(chapter_r6.authors);
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275conditionalCreate(1, BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_1_Template, 3, 2, "h4")(2, BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_2_Template, 2, 1, "h4");
    \u0275\u0275conditionalCreate(3, BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_3_Template, 2, 1, "p", 20);
    \u0275\u0275conditionalCreate(4, BookPanelComponent_Conditional_2_Conditional_10_For_5_Conditional_4_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(chapter_r6.id ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(chapter_r6.pages ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(chapter_r6.authors ? 4 : -1);
  }
}
function BookPanelComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 10)(1, "h3");
    \u0275\u0275text(2, "Cap\xEDtulos do livro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol", 18);
    \u0275\u0275repeaterCreate(4, BookPanelComponent_Conditional_2_Conditional_10_For_5_Template, 5, 3, "li", 19, \u0275\u0275componentInstance().trackByChapter, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.chapters);
  }
}
function BookPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, BookPanelComponent_Conditional_2_Conditional_1_Template, 2, 0, "button", 4);
    \u0275\u0275element(2, "app-book-gadget", 5);
    \u0275\u0275elementStart(3, "section", 6);
    \u0275\u0275conditionalCreate(4, BookPanelComponent_Conditional_2_Conditional_4_Template, 4, 3, "div", 7);
    \u0275\u0275conditionalCreate(5, BookPanelComponent_Conditional_2_Conditional_5_Template, 4, 3, "div", 8);
    \u0275\u0275conditionalCreate(6, BookPanelComponent_Conditional_2_Conditional_6_Template, 2, 1, "a", 9);
    \u0275\u0275conditionalCreate(7, BookPanelComponent_Conditional_2_Conditional_7_Template, 5, 1, "article", 10);
    \u0275\u0275conditionalCreate(8, BookPanelComponent_Conditional_2_Conditional_8_Template, 6, 0, "article", 10);
    \u0275\u0275conditionalCreate(9, BookPanelComponent_Conditional_2_Conditional_9_Template, 6, 0, "article", 10);
    \u0275\u0275conditionalCreate(10, BookPanelComponent_Conditional_2_Conditional_10_Template, 6, 0, "article", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.embedded ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("bookId", ctx_r1.bookId)("cover", ctx_r1.cover)("title", ctx_r1.title)("data", ctx_r1.data);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMetadataGrid ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasEngagementStats ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resourcePdf ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.description ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.creators.length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subjectsPt.length ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapters.length ? 10 : -1);
  }
}
var BookPanelComponent = class _BookPanelComponent {
  bookId = "";
  cover = "";
  title = "";
  data = null;
  open = false;
  embedded = false;
  closed = new EventEmitter();
  get shouldRenderContent() {
    if (this.embedded) {
      return !!this.data;
    }
    return this.open && !!this.bookId;
  }
  get displayTitle() {
    return this.stringAt("title") || this.title;
  }
  get description() {
    return this.stringAt("description");
  }
  get publisher() {
    return this.stringAt("publisher");
  }
  get isbn() {
    return this.stringAt("isbn");
  }
  get year() {
    const year = this.at("year");
    return typeof year === "number" ? String(year) : this.stringAt("year");
  }
  get pages() {
    const pages = this.at("pages");
    return typeof pages === "number" ? String(pages) : this.stringAt("pages");
  }
  get resourcePdf() {
    return this.stringAt("resource_pdf");
  }
  get views() {
    return this.stringAt("Views");
  }
  get downloads() {
    return this.stringAt("Download");
  }
  get likes() {
    return this.stringAt("Likes");
  }
  get creators() {
    const value = this.at("creator_author");
    if (!Array.isArray(value))
      return [];
    return value.filter((item) => this.isRecord(item) && typeof item["name"] === "string").map((item) => ({
      name: String(item["name"]),
      ID: typeof item["ID"] === "string" ? item["ID"] : void 0,
      complement: typeof item["complement"] === "string" ? item["complement"] : void 0
    }));
  }
  get subjectsPt() {
    const subject = this.at("subject");
    if (!this.isRecord(subject))
      return [];
    const pt = subject["pt"];
    if (!Array.isArray(pt))
      return [];
    return pt.filter((item) => this.isRecord(item) && typeof item["name"] === "string").map((item) => ({
      name: String(item["name"]),
      ID: typeof item["ID"] === "string" ? item["ID"] : void 0,
      complement: typeof item["complement"] === "string" ? item["complement"] : void 0
    }));
  }
  get chapters() {
    const value = this.at("summary");
    if (!Array.isArray(value))
      return [];
    return value.filter((entry) => Array.isArray(entry) && entry.length >= 2).map((entry) => {
      const id = typeof entry[0] === "string" ? entry[0] : "";
      const html = typeof entry[1] === "string" ? entry[1] : "";
      return {
        id,
        title: this.extractHtmlTag(html, "b") || "Cap\xEDtulo sem t\xEDtulo",
        pages: this.extractPages(html),
        authors: this.extractHtmlTag(html, "i")
      };
    });
  }
  get hasMetadataGrid() {
    return !!(this.year || this.isbn || this.pages);
  }
  get hasEngagementStats() {
    return !!(this.views || this.downloads || this.likes);
  }
  trackByName(_, item) {
    return item.ID || item.name;
  }
  trackByChapter(_, item) {
    return item.id || item.title;
  }
  close() {
    this.closed.emit();
  }
  at(key) {
    if (!this.data)
      return void 0;
    return this.data[key];
  }
  stringAt(key) {
    const value = this.at(key);
    return typeof value === "string" ? value.trim() : "";
  }
  isRecord(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }
  extractHtmlTag(html, tag) {
    const match = html.match(new RegExp(`<${tag}>(.*?)<\\/${tag}>`, "i"));
    if (!match?.[1])
      return "";
    return this.cleanInlineHtml(match[1]);
  }
  extractPages(html) {
    const match = html.match(/\((p\s*[^)]*)\)/i);
    return match?.[1]?.trim() || "";
  }
  cleanInlineHtml(text) {
    return text.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }
  static \u0275fac = function BookPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookPanelComponent, selectors: [["app-book-panel"]], inputs: { bookId: "bookId", cover: "cover", title: "title", data: "data", open: "open", embedded: "embedded" }, outputs: { closed: "closed" }, decls: 3, vars: 7, consts: [["aria-hidden", "true", 1, "book-panel__backdrop", 3, "book-panel__backdrop--visible"], ["role", "dialog", "aria-modal", "true", 1, "book-panel__drawer"], [1, "book-panel__content", "p-3"], ["aria-hidden", "true", 1, "book-panel__backdrop", 3, "click"], ["type", "button", "aria-label", "Fechar painel", 1, "book-panel__close"], [3, "bookId", "cover", "title", "data"], ["aria-label", "Detalhes editoriais", 1, "book-panel__details"], [1, "book-panel__meta-grid"], ["aria-label", "M\xE9tricas de uso", 1, "book-panel__stats"], ["target", "_blank", "rel", "noopener noreferrer", 1, "book-panel__pdf-link", 3, "href"], [1, "book-panel__section-block"], ["type", "button", "aria-label", "Fechar painel", 1, "book-panel__close", 3, "click"], [1, "book-panel__meta-card"], [1, "book-panel__person-list"], [1, "book-panel__person-name"], [1, "book-panel__person-complement"], [1, "book-panel__chips"], [1, "book-panel__chip"], [1, "book-panel__chapter-list"], [1, "book-panel__chapter-item"], [1, "book-panel__chapter-pages"], [1, "book-panel__chapter-authors"], ["target", "_blank", "rel", "noopener noreferrer", 1, "book-panel__chapter-link", 3, "href"]], template: function BookPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BookPanelComponent_Conditional_0_Template, 1, 2, "div", 0);
      \u0275\u0275elementStart(1, "aside", 1);
      \u0275\u0275conditionalCreate(2, BookPanelComponent_Conditional_2_Template, 11, 12, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.embedded ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("book-panel__drawer--open", ctx.open)("book-panel__drawer--embedded", ctx.embedded);
      \u0275\u0275attribute("aria-label", ctx.title || "Detalhes do livro");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.shouldRenderContent ? 2 : -1);
    }
  }, dependencies: [CommonModule, BookGadgetComponent], styles: ['@charset "UTF-8";\n\n\n\n.book-panel__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1040;\n  background: rgba(10, 18, 34, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.book-panel__backdrop--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.book-panel__drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1050;\n  width: min(80vw, 860px);\n  height: 100dvh;\n  background: var(--theme-paper);\n  border-left: 1px solid var(--theme-line);\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.18);\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.book-panel__drawer--open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.book-panel__drawer--embedded[_ngcontent-%COMP%] {\n  position: static;\n  width: 100%;\n  height: auto;\n  transform: none;\n  box-shadow: none;\n  background: transparent;\n}\n.book-panel__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: -2.8rem;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border: none;\n  background: var(--theme-card-bg);\n  color: var(--theme-link);\n  font-size: 1rem;\n  cursor: pointer;\n  border: 1px solid var(--theme-line);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.book-panel__close[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-sand) 75%, transparent);\n  transform: scale(1.1);\n}\n.book-panel__content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 2rem 2rem 3rem;\n}\n.book-panel__drawer--embedded[_ngcontent-%COMP%]   .book-panel__content[_ngcontent-%COMP%] {\n  overflow: visible;\n  padding: 0;\n}\n.book-panel__details[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.book-panel__meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 0.75rem;\n}\n.book-panel__meta-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 0.85rem 0.95rem;\n}\n.book-panel__meta-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.68rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--theme-muted);\n}\n.book-panel__meta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.32rem 0 0;\n  color: var(--theme-ink);\n  line-height: 1.45;\n  font-weight: 600;\n}\n.book-panel__meta-card--publisher[_ngcontent-%COMP%] {\n  justify-self: start;\n  width: min(100%, 430px);\n}\n.book-panel__stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.book-panel__stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.35rem;\n  align-items: baseline;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-sand) 68%, transparent);\n  color: var(--theme-link);\n  font-size: 0.78rem;\n}\n.book-panel__pdf-link[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.85rem;\n  border-radius: 8px;\n  text-decoration: none;\n  border: 1px solid var(--theme-line);\n  color: var(--theme-paper);\n  background: var(--theme-hint);\n  transition: transform 0.15s ease, filter 0.15s ease;\n}\n.book-panel__pdf-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.04);\n}\n.book-panel__section-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n  color: var(--theme-ink);\n  font-size: 1rem;\n}\n.book-panel__section-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-ink);\n  line-height: 1.68;\n}\n.book-panel__person-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n.book-panel__person-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  line-height: 1.55;\n}\n.book-panel__person-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.book-panel__person-complement[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n  color: var(--theme-muted);\n}\n.book-panel__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n}\n.book-panel__chip[_ngcontent-%COMP%] {\n  padding: 0.26rem 0.64rem;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, var(--theme-link) 22%);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  color: var(--theme-link);\n  font-size: 0.79rem;\n}\n.book-panel__chapter-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.25rem;\n  display: grid;\n  gap: 0.8rem;\n}\n.book-panel__chapter-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-ink);\n  line-height: 1.42;\n  font-size: 0.98rem;\n}\n.book-panel__chapter-link[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.book-panel__chapter-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.book-panel__chapter-pages[_ngcontent-%COMP%], \n.book-panel__chapter-authors[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: var(--theme-muted);\n  font-size: 0.84rem;\n}\n@media (max-width: 600px) {\n  .book-panel__drawer[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n  .book-panel__close[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0.75rem;\n    top: 0.75rem;\n    position: fixed;\n  }\n  .book-panel__content[_ngcontent-%COMP%] {\n    padding: 1.2rem 1rem 2rem;\n  }\n  .book-panel__details[_ngcontent-%COMP%] {\n    margin-top: 1.4rem;\n    gap: 0.85rem;\n  }\n}\n/*# sourceMappingURL=book-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookPanelComponent, [{
    type: Component,
    args: [{ selector: "app-book-panel", standalone: true, imports: [CommonModule, BookGadgetComponent], template: `@if (!embedded) {\r
  <div\r
    class="book-panel__backdrop"\r
    [class.book-panel__backdrop--visible]="open"\r
    (click)="close()"\r
    aria-hidden="true"\r
  ></div>\r
}\r
\r
<aside\r
  class="book-panel__drawer"\r
  [class.book-panel__drawer--open]="open"\r
  [class.book-panel__drawer--embedded]="embedded"\r
  role="dialog"\r
  aria-modal="true"\r
  [attr.aria-label]="title || 'Detalhes do livro'"\r
>\r
  @if (shouldRenderContent) {\r
    <div class="book-panel__content p-3">\r
      @if (!embedded) {\r
        <button\r
          type="button"\r
          class="book-panel__close"\r
          (click)="close()"\r
          aria-label="Fechar painel"\r
        >\r
          \u2715\r
        </button>\r
      }\r
      <app-book-gadget\r
        [bookId]="bookId"\r
        [cover]="cover"\r
        [title]="title"\r
        [data]="data"\r
      ></app-book-gadget>\r
\r
      <section class="book-panel__details" aria-label="Detalhes editoriais">\r
        @if (hasMetadataGrid) {\r
          <div class="book-panel__meta-grid">\r
            @if (year) {\r
              <article class="book-panel__meta-card">\r
                <h3>Ano</h3>\r
                <p>{{ year }}</p>\r
              </article>\r
            }\r
\r
            @if (isbn) {\r
              <article class="book-panel__meta-card">\r
                <h3>ISBN</h3>\r
                <p>{{ isbn }}</p>\r
              </article>\r
            }\r
\r
            @if (pages) {\r
              <article class="book-panel__meta-card">\r
                <h3>P\xE1ginas</h3>\r
                <p>{{ pages }}</p>\r
              </article>\r
            }\r
          </div>\r
        }\r
\r
        @if (hasEngagementStats) {\r
          <div class="book-panel__stats" aria-label="M\xE9tricas de uso">\r
            @if (views) {\r
              <span><strong>{{ views }}</strong> visualiza\xE7\xF5es</span>\r
            }\r
            @if (downloads) {\r
              <span><strong>{{ downloads }}</strong> downloads</span>\r
            }\r
            @if (likes) {\r
              <span><strong>{{ likes }}</strong> curtidas</span>\r
            }\r
          </div>\r
        }\r
\r
        @if (resourcePdf) {\r
          <a\r
            class="book-panel__pdf-link"\r
            [href]="resourcePdf"\r
            target="_blank"\r
            rel="noopener noreferrer"\r
          >\r
            Baixar livro (PDF)\r
          </a>\r
        }\r
\r
        @if (description) {\r
          <article class="book-panel__section-block">\r
            <h3>Sobre a obra</h3>\r
            <p>{{ description }}</p>\r
          </article>\r
        }\r
\r
        @if (creators.length) {\r
          <article class="book-panel__section-block">\r
            <h3>Organiza\xE7\xE3o</h3>\r
            <ul class="book-panel__person-list">\r
              @for (person of creators; track trackByName($index, person)) {\r
                <li>\r
                  <span class="book-panel__person-name">{{ person.name }}</span>\r
                  @if (person.complement) {\r
                    <span class="book-panel__person-complement">{{ person.complement }}</span>\r
                  }\r
                </li>\r
              }\r
            </ul>\r
          </article>\r
        }\r
\r
        @if (subjectsPt.length) {\r
          <article class="book-panel__section-block">\r
            <h3>Assuntos</h3>\r
            <div class="book-panel__chips">\r
              @for (subject of subjectsPt; track trackByName($index, subject)) {\r
                <span class="book-panel__chip">{{ subject.name }}</span>\r
              }\r
            </div>\r
          </article>\r
        }\r
\r
        @if (chapters.length) {\r
          <article class="book-panel__section-block">\r
            <h3>Cap\xEDtulos do livro</h3>\r
            <ol class="book-panel__chapter-list">\r
              @for (chapter of chapters; track trackByChapter($index, chapter)) {\r
                <li class="book-panel__chapter-item">\r
                  @if (chapter.id) {\r
                    <h4>\r
                      <a\r
                        class="book-panel__chapter-link"\r
                        [href]="'/v/' + chapter.id"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                      >\r
                        {{ chapter.title }}\r
                      </a>\r
                    </h4>\r
                  } @else {\r
                    <h4>{{ chapter.title }}</h4>\r
                  }\r
                  @if (chapter.pages) {\r
                    <p class="book-panel__chapter-pages">{{ chapter.pages }}</p>\r
                  }\r
                  @if (chapter.authors) {\r
                    <p class="book-panel__chapter-authors">{{ chapter.authors }}</p>\r
                  }\r
                </li>\r
              }\r
            </ol>\r
          </article>\r
        }\r
      </section>\r
    </div>\r
  }\r
</aside>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/book-panel/book-panel.component.scss */\n.book-panel__backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1040;\n  background: rgba(10, 18, 34, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.book-panel__backdrop--visible {\n  opacity: 1;\n  pointer-events: all;\n}\n.book-panel__drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1050;\n  width: min(80vw, 860px);\n  height: 100dvh;\n  background: var(--theme-paper);\n  border-left: 1px solid var(--theme-line);\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.18);\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.book-panel__drawer--open {\n  transform: translateX(0);\n}\n.book-panel__drawer--embedded {\n  position: static;\n  width: 100%;\n  height: auto;\n  transform: none;\n  box-shadow: none;\n  background: transparent;\n}\n.book-panel__close {\n  position: absolute;\n  top: 1rem;\n  left: -2.8rem;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border: none;\n  background: var(--theme-card-bg);\n  color: var(--theme-link);\n  font-size: 1rem;\n  cursor: pointer;\n  border: 1px solid var(--theme-line);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.book-panel__close:hover {\n  background: color-mix(in srgb, var(--theme-sand) 75%, transparent);\n  transform: scale(1.1);\n}\n.book-panel__content {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 2rem 2rem 3rem;\n}\n.book-panel__drawer--embedded .book-panel__content {\n  overflow: visible;\n  padding: 0;\n}\n.book-panel__details {\n  margin-top: 2rem;\n  border-top: 1px solid var(--theme-line);\n  padding-top: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.book-panel__meta-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 0.75rem;\n}\n.book-panel__meta-card {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 0.85rem 0.95rem;\n}\n.book-panel__meta-card h3 {\n  margin: 0;\n  font-size: 0.68rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--theme-muted);\n}\n.book-panel__meta-card p {\n  margin: 0.32rem 0 0;\n  color: var(--theme-ink);\n  line-height: 1.45;\n  font-weight: 600;\n}\n.book-panel__meta-card--publisher {\n  justify-self: start;\n  width: min(100%, 430px);\n}\n.book-panel__stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.book-panel__stats span {\n  display: inline-flex;\n  gap: 0.35rem;\n  align-items: baseline;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-sand) 68%, transparent);\n  color: var(--theme-link);\n  font-size: 0.78rem;\n}\n.book-panel__pdf-link {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.85rem;\n  border-radius: 8px;\n  text-decoration: none;\n  border: 1px solid var(--theme-line);\n  color: var(--theme-paper);\n  background: var(--theme-hint);\n  transition: transform 0.15s ease, filter 0.15s ease;\n}\n.book-panel__pdf-link:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.04);\n}\n.book-panel__section-block h3 {\n  margin: 0 0 0.45rem;\n  color: var(--theme-ink);\n  font-size: 1rem;\n}\n.book-panel__section-block p {\n  margin: 0;\n  color: var(--theme-ink);\n  line-height: 1.68;\n}\n.book-panel__person-list {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n.book-panel__person-list li {\n  color: var(--theme-ink);\n  line-height: 1.55;\n}\n.book-panel__person-name {\n  font-weight: 600;\n}\n.book-panel__person-complement {\n  margin-left: 0.35rem;\n  color: var(--theme-muted);\n}\n.book-panel__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n}\n.book-panel__chip {\n  padding: 0.26rem 0.64rem;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, var(--theme-link) 22%);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  color: var(--theme-link);\n  font-size: 0.79rem;\n}\n.book-panel__chapter-list {\n  margin: 0;\n  padding-left: 1.25rem;\n  display: grid;\n  gap: 0.8rem;\n}\n.book-panel__chapter-item h4 {\n  margin: 0;\n  color: var(--theme-ink);\n  line-height: 1.42;\n  font-size: 0.98rem;\n}\n.book-panel__chapter-link {\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.book-panel__chapter-link:hover {\n  text-decoration: underline;\n}\n.book-panel__chapter-pages,\n.book-panel__chapter-authors {\n  margin-top: 0.2rem;\n  color: var(--theme-muted);\n  font-size: 0.84rem;\n}\n@media (max-width: 600px) {\n  .book-panel__drawer {\n    width: 100vw;\n  }\n  .book-panel__close {\n    left: auto;\n    right: 0.75rem;\n    top: 0.75rem;\n    position: fixed;\n  }\n  .book-panel__content {\n    padding: 1.2rem 1rem 2rem;\n  }\n  .book-panel__details {\n    margin-top: 1.4rem;\n    gap: 0.85rem;\n  }\n}\n/*# sourceMappingURL=book-panel.component.css.map */\n'] }]
  }], null, { bookId: [{
    type: Input
  }], cover: [{
    type: Input
  }], title: [{
    type: Input
  }], data: [{
    type: Input
  }], open: [{
    type: Input
  }], embedded: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookPanelComponent, { className: "BookPanelComponent", filePath: "src/app/components/book-panel/book-panel.component.ts", lineNumber: 33 });
})();

export {
  BookPanelComponent
};
//# sourceMappingURL=chunk-DO34722J.mjs.map
