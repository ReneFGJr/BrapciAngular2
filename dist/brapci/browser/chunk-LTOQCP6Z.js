import {
  toSignal
} from "./chunk-H3IWRHIK.js";
import {
  CommonModule,
  Component,
  Input,
  NavigationEnd,
  Router,
  RouterLink,
  computed,
  filter,
  inject,
  input,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IGL3YMRP.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// src/app/components/breadcrumbs/breadcrumbs.component.ts
var _forTrack0 = ($index, $item) => $item.url;
function BreadcrumbsComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function BreadcrumbsComponent_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function BreadcrumbsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275conditionalCreate(1, BreadcrumbsComponent_For_3_Conditional_1_Template, 2, 1, "span")(2, BreadcrumbsComponent_For_3_Conditional_2_Template, 2, 2, "a", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275classProp("active", item_r1.active);
    \u0275\u0275attribute("aria-current", item_r1.active ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.active ? 1 : 2);
  }
}
var DEFAULT_LABELS = {
  autoridade: "Autoridades",
  revistas: "Revistas",
  revista: "Revista",
  v: "Autor",
  about: "Sobre",
  brapci: "Sobre a Brapci",
  benancib: "Sobre o Benancib",
  brapcilivros: "Brapci Livros",
  how_index: "Como ser indexado na Brapci",
  team: "Equipe",
  doc: "Documentacao API"
};
var BreadcrumbsComponent = class _BreadcrumbsComponent {
  router = inject(Router);
  homeLabel = input("Inicio", ...ngDevMode ? [{ debugName: "homeLabel" }] : []);
  labels = input({}, ...ngDevMode ? [{ debugName: "labels" }] : []);
  currentUrl = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects), startWith(this.router.url)), { initialValue: this.router.url });
  items = computed(() => {
    const fullUrl = this.currentUrl() || "/";
    const pathOnly = fullUrl.split("?")[0]?.split("#")[0] ?? "/";
    const segments = pathOnly.split("/").filter(Boolean);
    const items = [
      {
        label: this.homeLabel(),
        url: "/",
        active: segments.length === 0
      }
    ];
    const mergedLabels = __spreadValues(__spreadValues({}, DEFAULT_LABELS), this.labels());
    let url = "";
    segments.forEach((segment, index) => {
      url += `/${segment}`;
      const decoded = decodeURIComponent(segment);
      const key = decoded.toLowerCase();
      const isLast = index === segments.length - 1;
      items.push({
        label: mergedLabels[key] ?? this.formatLabel(decoded),
        url,
        active: isLast
      });
    });
    return items;
  }, ...ngDevMode ? [{ debugName: "items" }] : []);
  formatLabel(value) {
    if (/^\d+$/.test(value)) {
      return `#${value}`;
    }
    return value.replaceAll("-", " ").replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
  static \u0275fac = function BreadcrumbsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], inputs: { homeLabel: [1, "homeLabel"], labels: [1, "labels"] }, decls: 4, vars: 0, consts: [["aria-label", "Breadcrumb", 1, "bc-wrap"], [1, "breadcrumb", "mb-1"], [1, "breadcrumb-item", 3, "active"], [1, "breadcrumb-item"], [3, "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "ol", 1);
      \u0275\u0275repeaterCreate(2, BreadcrumbsComponent_For_3_Template, 3, 4, "li", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items());
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.bc-wrap[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.breadcrumb-item[_ngcontent-%COMP%], \n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.breadcrumb-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-hint, #6c757d);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-ink, #212529);\n  text-decoration: underline;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%], \n.breadcrumb-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-ink, #212529);\n  font-weight: 600;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbsComponent, [{
    type: Component,
    args: [{ selector: "app-breadcrumbs", imports: [CommonModule, RouterLink], template: `<nav class="bc-wrap" aria-label="Breadcrumb">\r
  <ol class="breadcrumb mb-1">\r
    @for (item of items(); track item.url) {\r
      <li class="breadcrumb-item" [class.active]="item.active" [attr.aria-current]="item.active ? 'page' : null">\r
        @if (item.active) {\r
          <span>{{ item.label }}</span>\r
        } @else {\r
          <a [routerLink]="item.url">{{ item.label }}</a>\r
        }\r
      </li>\r
    }\r
  </ol>\r
</nav>\r
`, styles: ["/* src/app/components/breadcrumbs/breadcrumbs.component.scss */\n.bc-wrap {\n  padding-top: 0.25rem;\n}\n.breadcrumb {\n  margin-bottom: 0;\n}\n.breadcrumb-item,\n.breadcrumb-item a,\n.breadcrumb-item span {\n  color: var(--theme-hint, #6c757d);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.breadcrumb-item a:hover,\n.breadcrumb-item a:focus-visible {\n  color: var(--theme-ink, #212529);\n  text-decoration: underline;\n}\n.breadcrumb-item.active,\n.breadcrumb-item.active span {\n  color: var(--theme-ink, #212529);\n  font-weight: 600;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */\n"] }]
  }], null, { homeLabel: [{ type: Input, args: [{ isSignal: true, alias: "homeLabel", required: false }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbsComponent, { className: "BreadcrumbsComponent", filePath: "src/app/components/breadcrumbs/breadcrumbs.component.ts", lineNumber: 33 });
})();

export {
  BreadcrumbsComponent
};
//# sourceMappingURL=chunk-LTOQCP6Z.js.map
