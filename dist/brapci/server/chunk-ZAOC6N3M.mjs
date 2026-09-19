import './polyfills.server.mjs';
import {
  BrapciApiService
} from "./chunk-AIGT3YYC.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-626Q7N5T.mjs";
import {
  takeUntilDestroyed
} from "./chunk-VL7NMCPF.mjs";
import "./chunk-2L3G2T4S.mjs";
import {
  ActivatedRoute,
  CommonModule
} from "./chunk-TG5MYEEE.mjs";
import {
  Component,
  DestroyRef,
  ViewEncapsulation,
  catchError,
  computed,
  distinctUntilChanged,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QTSSUGT7.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/sobre-brapci/sobre-brapci.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function SobreBrapciPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Carregando conte\xFAdo...");
    \u0275\u0275elementEnd();
  }
}
function SobreBrapciPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function SobreBrapciPage_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nav", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.navigationHtml(), \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_5_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "a", 14)(2, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", section_r2.id);
    \u0275\u0275attribute("name", section_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", section_r2.html, \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, SobreBrapciPage_Conditional_5_Conditional_9_For_2_Template, 3, 3, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sections());
  }
}
function SobreBrapciPage_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.htmlContent(), \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "A API n\xE3o retornou conte\xFAdo HTML formatado. Exibindo JSON formatado:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.jsonFallbackHtml(), \u0275\u0275sanitizeHtml);
  }
}
function SobreBrapciPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Base de Dados em Ci\xEAncia da Informa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275conditionalCreate(7, SobreBrapciPage_Conditional_5_Conditional_7_Template, 1, 1, "nav", 9);
    \u0275\u0275elementStart(8, "article", 10);
    \u0275\u0275conditionalCreate(9, SobreBrapciPage_Conditional_5_Conditional_9_Template, 3, 0, "div", 11)(10, SobreBrapciPage_Conditional_5_Conditional_10_Template, 1, 1, "div", 12)(11, SobreBrapciPage_Conditional_5_Conditional_11_Template, 3, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.title());
    \u0275\u0275advance();
    \u0275\u0275classProp("without-navigation", !ctx_r0.navigationHtml());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.navigationHtml() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.sections().length ? 9 : ctx_r0.htmlContent() ? 10 : !ctx_r0.navigationHtml() ? 11 : -1);
  }
}
var SobreBrapciPage = class _SobreBrapciPage {
  brapciApiService = inject(BrapciApiService);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  pageLabels = {
    brapci: "Sobre a Brapci",
    benancib: "Sobre o Benancib",
    brapcilivros: "Brapci Livros",
    how_index: "Como ser indexado na Brapci",
    team: "Equipe"
  };
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  response = signal(null, ...ngDevMode ? [{ debugName: "response" }] : []);
  pageKey = signal("brapci", ...ngDevMode ? [{ debugName: "pageKey" }] : []);
  title = computed(() => {
    const html = this.htmlContent();
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (h1Match?.[1]) {
      return h1Match[1].replace(/<[^>]+>/g, "").trim() || this.fallbackTitle();
    }
    const value = this.response();
    if (!value || typeof value !== "object") {
      return this.fallbackTitle();
    }
    const data = value;
    const candidate = data["title"];
    return typeof candidate === "string" && candidate.trim() ? candidate : this.fallbackTitle();
  }, ...ngDevMode ? [{ debugName: "title" }] : []);
  sections = computed(() => {
    const response = this.response();
    if (!response || Array.isArray(response) || typeof response !== "object")
      return [];
    const data = response;
    if (!Array.isArray(data["content"]))
      return [];
    const groups = /* @__PURE__ */ new Map();
    for (const item of data["content"]) {
      if (!item || typeof item !== "object" || this.isNavigationRow(item))
        continue;
      const key = typeof item.section === "string" ? item.section.trim() : "";
      if (key === "menu")
        continue;
      const id = key || `section-${groups.size + 1}`;
      const html = this.rowHtml(item);
      if (!html)
        continue;
      const content = html.replace(/\s+id\s*=\s*(["'])(.*?)\1/gi, (attribute, _quote, value) => value === id ? "" : attribute);
      groups.set(id, [...groups.get(id) ?? [], content]);
    }
    const labels = {
      apresentacao: "Apresenta\xE7\xE3o",
      missao: "Miss\xE3o",
      historico: "Hist\xF3rico",
      coordenacao: "Coordena\xE7\xE3o",
      citacao: "Como citar",
      acesso: "Acesso"
    };
    const menu = Array.isArray(data["menu"]) ? data["menu"] : [...groups.keys()];
    const keys = [.../* @__PURE__ */ new Set([...menu.filter((key) => typeof key === "string" && groups.has(key)), ...groups.keys()])];
    return keys.map((id) => ({
      id,
      label: labels[id] ?? id.replace(/[_-]/g, " "),
      html: groups.get(id).join("\n"),
      inMenu: menu.includes(id)
    }));
  }, ...ngDevMode ? [{ debugName: "sections" }] : []);
  navigationHtml = computed(() => {
    const sections = this.sections().filter((section) => section.inMenu);
    if (sections.length) {
      return "<strong>Nesta p\xE1gina</strong><ul>" + sections.map((section) => `<li><a href="/about/${encodeURIComponent(this.pageKey())}#${encodeURIComponent(section.id)}">${this.escapeHtml(section.label)}</a></li>`).join("") + "</ul>";
    }
    const value = this.response();
    if (!Array.isArray(value))
      return "";
    return value.filter((item) => this.isNavigationRow(item)).map((item) => this.rowHtml(item)).join("\n");
  }, ...ngDevMode ? [{ debugName: "navigationHtml" }] : []);
  isNavigationRow(item) {
    if (!item || typeof item !== "object")
      return false;
    const order = item["ordem"];
    return order === 0 || order === "0";
  }
  rowHtml(item) {
    if (!item || typeof item !== "object")
      return "";
    const row = item["row"];
    if (typeof row !== "string" || !row.trim())
      return "";
    return /<[^>]+>/.test(row) ? row : `<p>${this.escapeHtml(row)}</p>`;
  }
  navigateToSection(event) {
    const target = event.target;
    if (!(target instanceof Element))
      return;
    const link = target.closest("a");
    const href = link?.getAttribute("href");
    if (!href)
      return;
    const currentPath = link.ownerDocument.location.pathname;
    const url = new URL(href, link.ownerDocument.baseURI);
    const isLocalAnchor = href.startsWith("#") || href.startsWith("/#") || url.origin === link.ownerDocument.location.origin && url.pathname === currentPath && !!url.hash;
    if (!isLocalAnchor)
      return;
    event.preventDefault();
    let id;
    try {
      id = decodeURIComponent(url.hash.slice(1));
    } catch {
      return;
    }
    const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const anchors = target.closest(".sobre-wrap")?.querySelectorAll("[id]");
    const section = Array.from(anchors ?? []).find((anchor) => anchor.id === id) ?? Array.from(anchors ?? []).find((anchor) => normalize(anchor.id) === normalize(id));
    if (section) {
      section.scrollIntoView({ behavior: "auto", block: "start" });
      const location = link.ownerDocument.location;
      link.ownerDocument.defaultView?.history.replaceState(link.ownerDocument.defaultView.history.state, "", `${location.pathname}${location.search}#${encodeURIComponent(section.id)}`);
    }
  }
  htmlContent = computed(() => {
    const sections = this.sections();
    if (sections.length)
      return sections.map((section) => `<div id="${this.escapeHtml(section.id)}" class="sobre-section">${section.html}</div>`).join("\n");
    const value = this.response();
    if (!value) {
      return "";
    }
    if (Array.isArray(value)) {
      const rows = value.filter((item) => !this.isNavigationRow(item)).map((item) => {
        if (!item || typeof item !== "object") {
          return "";
        }
        const row = item["row"];
        if (typeof row !== "string" || !row.trim()) {
          return "";
        }
        return /<[^>]+>/.test(row) ? row : `<p>${this.escapeHtml(row)}</p>`;
      }).filter(Boolean).join("\n");
      return rows;
    }
    if (typeof value !== "object") {
      return "";
    }
    const data = value;
    const directHtml = data["html"];
    if (typeof directHtml === "string" && directHtml.trim()) {
      return directHtml;
    }
    const content = data["content"];
    if (typeof content === "string" && content.trim()) {
      return content;
    }
    const description = data["description"];
    if (typeof description === "string" && description.trim()) {
      return `<p>${description}</p>`;
    }
    return "";
  }, ...ngDevMode ? [{ debugName: "htmlContent" }] : []);
  jsonFallback = computed(() => JSON.stringify(this.response(), null, 2), ...ngDevMode ? [{ debugName: "jsonFallback" }] : []);
  jsonFallbackHtml = computed(() => this.renderJsonNode(this.response()), ...ngDevMode ? [{ debugName: "jsonFallbackHtml" }] : []);
  constructor() {
    this.route.paramMap.pipe(map((params) => params.get("page")?.trim().toLowerCase() || "brapci"), distinctUntilChanged(), tap((page) => {
      this.pageKey.set(page);
      this.loading.set(true);
      this.error.set("");
      this.response.set(null);
    }), switchMap((page) => this.brapciApiService.get(`page/${page}`).pipe(map((data) => ({ ok: true, data })), catchError(() => of({ ok: false, data: null })))), takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      if (!result.ok) {
        this.error.set(`Nao foi possivel carregar o conteudo de ${this.fallbackTitle()}.`);
        this.loading.set(false);
        return;
      }
      this.response.set(result.data);
      this.loading.set(false);
    });
  }
  fallbackTitle() {
    return this.pageLabels[this.pageKey()] ?? "Sobre";
  }
  renderJsonNode(value) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return '<span class="json-empty">[]</span>';
      }
      const items = value.map((item) => `<li><span class="json-key">item</span>${this.renderJsonValue(item)}</li>`).join("");
      return `<ul class="json-list">${items}</ul>`;
    }
    if (value && typeof value === "object") {
      const entries = Object.entries(value);
      if (entries.length === 0) {
        return '<span class="json-empty">{}</span>';
      }
      const items = entries.map(([key, entryValue]) => `<li><span class="json-key">${this.escapeHtml(key)}</span>${this.renderJsonValue(entryValue)}</li>`).join("");
      return `<ul class="json-list">${items}</ul>`;
    }
    return this.renderJsonValue(value);
  }
  renderJsonValue(value) {
    if (Array.isArray(value) || value && typeof value === "object") {
      return this.renderJsonNode(value);
    }
    if (value === null) {
      return '<span class="json-null">null</span>';
    }
    if (typeof value === "string") {
      return `<span class="json-string">${this.escapeHtml(value)}</span>`;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return `<span class="json-primitive">${String(value)}</span>`;
    }
    return `<span class="json-primitive">${this.escapeHtml(String(value ?? ""))}</span>`;
  }
  escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }
  static \u0275fac = function SobreBrapciPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SobreBrapciPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SobreBrapciPage, selectors: [["app-sobre-brapci-page"]], decls: 6, vars: 1, consts: [[1, "sobre-wrap", 3, "click"], [1, "container"], ["role", "status", 1, "sobre-status"], ["role", "alert", 1, "sobre-status", "sobre-error"], [1, "hero"], [1, "hero__content"], [1, "eyebrow"], ["id", "sobre-title"], [1, "layout"], ["aria-label", "Navega\xE7\xE3o desta p\xE1gina", 1, "sobre-navigation", 3, "innerHTML"], ["aria-labelledby", "sobre-title", 1, "sobre-main"], [1, "sobre-content"], [1, "sobre-content", 3, "innerHTML"], [1, "sobre-section"], ["aria-hidden", "true", 1, "sobre-anchor", 3, "id"], [3, "innerHTML"], [1, "sobre-json", 3, "innerHTML"]], template: function SobreBrapciPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function SobreBrapciPage_Template_div_click_0_listener($event) {
        return ctx.navigateToSection($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, SobreBrapciPage_Conditional_3_Template, 2, 0, "p", 2)(4, SobreBrapciPage_Conditional_4_Template, 2, 1, "p", 3)(5, SobreBrapciPage_Conditional_5_Template, 12, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.error() ? 4 : 5);
    }
  }, dependencies: [CommonModule, BreadcrumbsComponent], styles: ["/* src/app/pages/sobre-brapci/sobre-brapci.page.scss */\n.sobre-wrap {\n  --primary: var(--theme-hint, #483d8b);\n  --primary-dark: var(--theme-ink, #302861);\n  --primary-light: var(--theme-sand, #eeeafd);\n  --text: var(--theme-ink, #263238);\n  --muted: var(--theme-muted, #607078);\n  --border: var(--theme-line, #dfe3e8);\n  --background: var(--theme-bg, #f6f7f9);\n  --surface: var(--theme-card-bg, #fff);\n  --max-width: 1080px;\n}\n.sobre-wrap * {\n  box-sizing: border-box;\n}\n.sobre-wrap {\n  margin: 0;\n  color: var(--text);\n  background: var(--background);\n}\n.sobre-wrap .layout a:not(.access-button) {\n  color: var(--primary);\n}\n.sobre-wrap .layout a:not(.access-button):hover {\n  color: var(--primary-dark);\n}\n.sobre-wrap .hero {\n  padding: 4.5rem 1.5rem 3.5rem;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n}\n.sobre-wrap .hero__content,\n.sobre-wrap .layout,\n.sobre-wrap footer {\n  max-width: var(--max-width);\n  margin: 0 auto;\n}\n.sobre-wrap .eyebrow {\n  margin: 0 0 0.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  opacity: 0.82;\n}\n.sobre-wrap .hero h1 {\n  margin: 0;\n}\n.sobre-wrap .hero p:last-child {\n  max-width: 760px;\n  margin: 1.25rem 0 0;\n  opacity: 0.93;\n}\n.sobre-wrap .layout {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 2rem;\n  padding: 2rem 1.5rem 4rem;\n}\n.sobre-wrap .sobre-navigation {\n  position: sticky;\n  top: 6rem;\n  align-self: start;\n  padding: 1.25rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: var(--surface);\n}\n.sobre-wrap .sobre-navigation strong {\n  display: block;\n  margin-bottom: 0.65rem;\n  color: var(--primary-dark);\n}\n.sobre-wrap .sobre-navigation ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sobre-wrap .sobre-navigation li + li {\n  margin-top: 0.3rem;\n}\n.sobre-wrap .sobre-navigation a {\n  display: block;\n  padding: 0.25rem 0;\n  text-decoration: none;\n}\n.sobre-wrap .sobre-main {\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  background: var(--surface);\n  box-shadow: 0 12px 35px rgba(25, 30, 40, 0.06);\n}\n.sobre-wrap footer {\n  padding: 0 1.5rem 2rem;\n  color: var(--muted);\n  text-align: center;\n}\n@media (max-width: 760px) {\n  .sobre-wrap .hero {\n    padding-top: 3.25rem;\n  }\n  .sobre-wrap .layout {\n    display: block;\n    padding-inline: 1rem;\n  }\n  .sobre-wrap .sobre-navigation {\n    position: static;\n    margin-bottom: 1rem;\n  }\n}\n@media print {\n  .sobre-wrap {\n    background: #fff;\n  }\n  .sobre-wrap .hero {\n    padding: 2rem 0;\n    color: #000;\n    background: #fff;\n  }\n  .sobre-wrap .layout {\n    display: block;\n    max-width: none;\n    padding: 0;\n  }\n  .sobre-wrap .sobre-navigation {\n    display: none;\n  }\n  .sobre-wrap .sobre-main {\n    border: 0;\n    box-shadow: none;\n  }\n}\n.sobre-wrap .hero {\n  background:\n    linear-gradient(\n      135deg,\n      #302861,\n      #483d8b);\n}\n.sobre-wrap .hero h1 {\n  color: #fff;\n}\n.sobre-wrap .layout.without-navigation {\n  grid-template-columns: minmax(0, 1fr);\n}\n.sobre-wrap .sobre-main {\n  min-width: 0;\n}\n.sobre-wrap .sobre-status {\n  max-width: var(--max-width);\n  margin: 2rem auto;\n  padding: 1rem;\n}\n.sobre-wrap .sobre-error {\n  color: var(--theme-error);\n}\n.sobre-wrap .sobre-json {\n  padding: 1rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=sobre-brapci.page.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SobreBrapciPage, [{
    type: Component,
    args: [{ selector: "app-sobre-brapci-page", encapsulation: ViewEncapsulation.None, imports: [CommonModule, BreadcrumbsComponent], template: '<div class="sobre-wrap" (click)="navigateToSection($event)">\r\n  <div class="container"><app-breadcrumbs></app-breadcrumbs></div>\r\n  @if (loading()) {\r\n    <p class="sobre-status" role="status">Carregando conte\xFAdo...</p>\r\n  } @else if (error()) {\r\n    <p class="sobre-status sobre-error" role="alert">{{ error() }}</p>\r\n  } @else {\r\n    <header class="hero">\r\n      <div class="hero__content">\r\n        <p class="eyebrow">Base de Dados em Ci\xEAncia da Informa\xE7\xE3o</p>\r\n        <h1 id="sobre-title">{{ title() }}</h1>\r\n      </div>\r\n    </header>\r\n    <div class="layout" [class.without-navigation]="!navigationHtml()">\r\n      @if (navigationHtml()) {\r\n        <nav class="sobre-navigation" aria-label="Navega\xE7\xE3o desta p\xE1gina" [innerHTML]="navigationHtml()"></nav>\r\n      }\r\n      <article class="sobre-main" aria-labelledby="sobre-title">\r\n        @if (sections().length) {\r\n          <div class="sobre-content">\r\n            @for (section of sections(); track section.id) {\r\n              <div class="sobre-section">\r\n                <a class="sobre-anchor" [id]="section.id" [attr.name]="section.id" aria-hidden="true"></a>\r\n                <div [innerHTML]="section.html"></div>\r\n              </div>\r\n            }\r\n          </div>\r\n        } @else if (htmlContent()) {\r\n          <div class="sobre-content" [innerHTML]="htmlContent()"></div>\r\n        } @else if (!navigationHtml()) {\r\n          <p>A API n\xE3o retornou conte\xFAdo HTML formatado. Exibindo JSON formatado:</p>\r\n          <div class="sobre-json" [innerHTML]="jsonFallbackHtml()"></div>\r\n        }\r\n      </article>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/sobre-brapci/sobre-brapci.page.scss */\n.sobre-wrap {\n  --primary: var(--theme-hint, #483d8b);\n  --primary-dark: var(--theme-ink, #302861);\n  --primary-light: var(--theme-sand, #eeeafd);\n  --text: var(--theme-ink, #263238);\n  --muted: var(--theme-muted, #607078);\n  --border: var(--theme-line, #dfe3e8);\n  --background: var(--theme-bg, #f6f7f9);\n  --surface: var(--theme-card-bg, #fff);\n  --max-width: 1080px;\n}\n.sobre-wrap * {\n  box-sizing: border-box;\n}\n.sobre-wrap {\n  margin: 0;\n  color: var(--text);\n  background: var(--background);\n}\n.sobre-wrap .layout a:not(.access-button) {\n  color: var(--primary);\n}\n.sobre-wrap .layout a:not(.access-button):hover {\n  color: var(--primary-dark);\n}\n.sobre-wrap .hero {\n  padding: 4.5rem 1.5rem 3.5rem;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n}\n.sobre-wrap .hero__content,\n.sobre-wrap .layout,\n.sobre-wrap footer {\n  max-width: var(--max-width);\n  margin: 0 auto;\n}\n.sobre-wrap .eyebrow {\n  margin: 0 0 0.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  opacity: 0.82;\n}\n.sobre-wrap .hero h1 {\n  margin: 0;\n}\n.sobre-wrap .hero p:last-child {\n  max-width: 760px;\n  margin: 1.25rem 0 0;\n  opacity: 0.93;\n}\n.sobre-wrap .layout {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 2rem;\n  padding: 2rem 1.5rem 4rem;\n}\n.sobre-wrap .sobre-navigation {\n  position: sticky;\n  top: 6rem;\n  align-self: start;\n  padding: 1.25rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: var(--surface);\n}\n.sobre-wrap .sobre-navigation strong {\n  display: block;\n  margin-bottom: 0.65rem;\n  color: var(--primary-dark);\n}\n.sobre-wrap .sobre-navigation ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sobre-wrap .sobre-navigation li + li {\n  margin-top: 0.3rem;\n}\n.sobre-wrap .sobre-navigation a {\n  display: block;\n  padding: 0.25rem 0;\n  text-decoration: none;\n}\n.sobre-wrap .sobre-main {\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  background: var(--surface);\n  box-shadow: 0 12px 35px rgba(25, 30, 40, 0.06);\n}\n.sobre-wrap footer {\n  padding: 0 1.5rem 2rem;\n  color: var(--muted);\n  text-align: center;\n}\n@media (max-width: 760px) {\n  .sobre-wrap .hero {\n    padding-top: 3.25rem;\n  }\n  .sobre-wrap .layout {\n    display: block;\n    padding-inline: 1rem;\n  }\n  .sobre-wrap .sobre-navigation {\n    position: static;\n    margin-bottom: 1rem;\n  }\n}\n@media print {\n  .sobre-wrap {\n    background: #fff;\n  }\n  .sobre-wrap .hero {\n    padding: 2rem 0;\n    color: #000;\n    background: #fff;\n  }\n  .sobre-wrap .layout {\n    display: block;\n    max-width: none;\n    padding: 0;\n  }\n  .sobre-wrap .sobre-navigation {\n    display: none;\n  }\n  .sobre-wrap .sobre-main {\n    border: 0;\n    box-shadow: none;\n  }\n}\n.sobre-wrap .hero {\n  background:\n    linear-gradient(\n      135deg,\n      #302861,\n      #483d8b);\n}\n.sobre-wrap .hero h1 {\n  color: #fff;\n}\n.sobre-wrap .layout.without-navigation {\n  grid-template-columns: minmax(0, 1fr);\n}\n.sobre-wrap .sobre-main {\n  min-width: 0;\n}\n.sobre-wrap .sobre-status {\n  max-width: var(--max-width);\n  margin: 2rem auto;\n  padding: 1rem;\n}\n.sobre-wrap .sobre-error {\n  color: var(--theme-error);\n}\n.sobre-wrap .sobre-json {\n  padding: 1rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=sobre-brapci.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SobreBrapciPage, { className: "SobreBrapciPage", filePath: "src/app/pages/sobre-brapci/sobre-brapci.page.ts", lineNumber: 16 });
})();
export {
  SobreBrapciPage
};
//# sourceMappingURL=chunk-ZAOC6N3M.mjs.map
