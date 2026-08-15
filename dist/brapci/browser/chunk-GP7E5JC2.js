import {
  BrapciApiService
} from "./chunk-SPW4FZDW.js";
import "./chunk-FVCOQ7LK.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JBXEJVBW.js";
import {
  BasketService
} from "./chunk-LEUPCSYM.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-NJGCINW2.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-OYM44MPZ.js";
import {
  CommonModule,
  Component,
  HostListener,
  Input,
  NgComponentOutlet,
  NgForOf,
  NgIf,
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
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FWZKW7K5.js";
import "./chunk-3OV72XIM.js";

// src/app/components/area-events/area-events.component.ts
function AreaEventsComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Carregando eventos...");
    \u0275\u0275elementEnd();
  }
}
function AreaEventsComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AreaEventsComponent_ul_6_li_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 17);
    \u0275\u0275listener("error", function AreaEventsComponent_ul_6_li_1_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r3 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(event_r3.logo = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", event_r3.logo, \u0275\u0275sanitizeUrl)("alt", "Logo do evento " + event_r3.title);
  }
}
function AreaEventsComponent_ul_6_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " EVENTO ");
    \u0275\u0275elementEnd();
  }
}
function AreaEventsComponent_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function AreaEventsComponent_ul_6_li_1_Template_li_click_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToEvent(event_r3));
    })("keydown.enter", function AreaEventsComponent_ul_6_li_1_Template_li_keydown_enter_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToEvent(event_r3));
    })("keydown.space", function AreaEventsComponent_ul_6_li_1_Template_li_keydown_space_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToEvent(event_r3));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, AreaEventsComponent_ul_6_li_1_img_2_Template, 1, 2, "img", 12)(3, AreaEventsComponent_ul_6_li_1_div_3_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 16);
    \u0275\u0275listener("click", function AreaEventsComponent_ul_6_li_1_Template_a_click_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, " Mais detalhes ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", "Abrir detalhes do evento " + event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r3.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r3.logo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Data: ", event_r3.date, " - ", event_r3.location);
    \u0275\u0275advance();
    \u0275\u0275property("href", event_r3.redirectUrl, \u0275\u0275sanitizeUrl);
  }
}
function AreaEventsComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275template(1, AreaEventsComponent_ul_6_li_1_Template, 10, 7, "li", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.events())("ngForTrackBy", ctx_r0.trackByEventId);
  }
}
function AreaEventsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, " Nenhum evento encontrado. ");
    \u0275\u0275elementEnd();
  }
}
var AreaEventsComponent = class _AreaEventsComponent {
  brapciApiService = inject(BrapciApiService);
  redirectBaseUrl = "https://cip.brapci.inf.br/api/event/redirect";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  constructor() {
    this.loadEvents();
  }
  loadEvents() {
    this.loading.set(true);
    this.error.set(null);
    this.brapciApiService.get("event").subscribe({
      next: (response) => {
        const normalizedEvents = this.normalizeResponse(response);
        this.events.set(normalizedEvents);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Nao foi possivel carregar os eventos no momento.");
        this.events.set([]);
        this.loading.set(false);
      }
    });
  }
  normalizeResponse(response) {
    const source = this.extractArray(response);
    return source.map((item) => this.toAreaEvent(item)).filter((item) => item !== null);
  }
  extractArray(response) {
    if (Array.isArray(response)) {
      return response;
    }
    if (!response || typeof response !== "object") {
      return [];
    }
    const data = response;
    const candidates = ["events", "results", "items", "data", "rows", "list", "value"];
    for (const key of candidates) {
      if (Array.isArray(data[key])) {
        return data[key];
      }
    }
    return [];
  }
  toAreaEvent(item) {
    if (!item || typeof item !== "object") {
      return null;
    }
    const event = item;
    const title = this.pickText(event, ["event", "evento", "title", "name", "jnl_name"]);
    const redirectId = this.extractRedirectId(event);
    if (!title || !redirectId) {
      return null;
    }
    return {
      id: this.pickText(event, ["id", "ID", "id_event", "id_jnl"]) || redirectId,
      redirectId,
      redirectUrl: `${this.redirectBaseUrl}/${redirectId}`,
      title,
      date: this.pickText(event, ["date", "data", "start_date", "year", "ano", "start"]) || "-",
      location: this.pickText(event, ["location", "local", "city", "cidade", "country", "place"]) || "-",
      logo: this.pickText(event, ["logo", "image", "img", "banner", "thumb", "thumbnail"]) || null
    };
  }
  extractRedirectId(record) {
    const directId = this.pickText(record, ["id", "ID", "id_event"]);
    if (directId) {
      return directId;
    }
    const url = this.pickText(record, ["URL", "url", "link", "site"]);
    if (!url) {
      return "";
    }
    const match = url.match(/\/redirect\/(\d+)/i);
    return match?.[1] ?? "";
  }
  pickText(record, keys) {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
      if (typeof value === "number" && Number.isFinite(value)) {
        return String(value);
      }
    }
    return "";
  }
  trackByEventId(index, event) {
    return event.id || String(index);
  }
  goToEvent(event) {
    window.open(event.redirectUrl, "_blank", "noopener,noreferrer");
  }
  static \u0275fac = function AreaEventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AreaEventsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaEventsComponent, selectors: [["app-area-events"]], decls: 8, vars: 4, consts: [["aria-labelledby", "area-events-title", 1, "area-events"], [1, "area-events-header"], ["id", "area-events-title", 1, "area-events-title"], ["class", "area-events-state", 4, "ngIf"], ["class", "area-events-state area-events-state-error", 4, "ngIf"], ["class", "area-events-list", 4, "ngIf"], [1, "area-events-state"], [1, "area-events-state", "area-events-state-error"], [1, "area-events-list"], ["class", "area-events-item", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", "tabindex", "0", 1, "area-events-item", 3, "click", "keydown.enter", "keydown.space"], [1, "area-events-logo-wrap"], ["class", "area-events-logo", "width", "200", "height", "200", "loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt", "error", 4, "ngIf"], ["class", "area-events-logo-fallback", "aria-hidden", "true", 4, "ngIf"], [1, "area-events-item-title"], [1, "area-events-item-meta"], ["target", "_blank", "rel", "noreferrer", 1, "area-events-link", 3, "click", "href"], ["width", "200", "height", "200", "loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "area-events-logo", 3, "error", "src", "alt"], ["aria-hidden", "true", 1, "area-events-logo-fallback"]], template: function AreaEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Eventos da area");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, AreaEventsComponent_p_4_Template, 2, 0, "p", 3)(5, AreaEventsComponent_p_5_Template, 2, 1, "p", 4)(6, AreaEventsComponent_ul_6_Template, 2, 2, "ul", 5)(7, AreaEventsComponent_p_7_Template, 2, 0, "p", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.events().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && !ctx.events().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.area-events[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n  height: 100%;\n}\n.area-events-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.area-events-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  color: var(--theme-title);\n}\n.area-events-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.75rem;\n}\n.area-events-item[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--theme-line);\n  padding-top: 0.75rem;\n  cursor: pointer;\n  transition: transform 120ms ease, background-color 120ms ease;\n}\n.area-events-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-card-bg) 82%, var(--theme-line));\n  transform: translateY(-1px);\n}\n.area-events-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--bs-link-color);\n  outline-offset: 2px;\n}\n.area-events-logo-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.area-events-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 92px;\n  object-fit: contain;\n  border: 1px solid var(--theme-line);\n  border-radius: 8px;\n  background: #fff;\n  padding: 0.35rem;\n}\n.area-events-logo-fallback[_ngcontent-%COMP%] {\n  height: 72px;\n  border: 1px dashed var(--theme-line);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.area-events-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n  padding-top: 0;\n}\n.area-events-item-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--theme-ink);\n}\n.area-events-item-meta[_ngcontent-%COMP%] {\n  margin: 0.15rem 0;\n  font-size: 0.8rem;\n  color: var(--theme-muted);\n}\n.area-events-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.25rem;\n  font-size: 0.8rem;\n  text-decoration: underline;\n}\n.area-events-state[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n.area-events-state-error[_ngcontent-%COMP%] {\n  color: #a02b2b;\n}\n/*# sourceMappingURL=area-events.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaEventsComponent, [{
    type: Component,
    args: [{ selector: "app-area-events", imports: [CommonModule], template: `<section class="area-events" aria-labelledby="area-events-title">\r
  <header class="area-events-header">\r
    <h3 id="area-events-title" class="area-events-title">Eventos da area</h3>\r
  </header>\r
\r
  <p *ngIf="loading()" class="area-events-state">Carregando eventos...</p>\r
  <p *ngIf="error()" class="area-events-state area-events-state-error">{{ error() }}</p>\r
\r
  <ul *ngIf="!loading() && !error() && events().length" class="area-events-list">\r
    <li\r
      *ngFor="let event of events(); trackBy: trackByEventId"\r
      class="area-events-item"\r
      role="button"\r
      tabindex="0"\r
      (click)="goToEvent(event)"\r
      (keydown.enter)="goToEvent(event)"\r
      (keydown.space)="goToEvent(event)"\r
      [attr.aria-label]="'Abrir detalhes do evento ' + event.title"\r
    >\r
      <div class="area-events-logo-wrap">\r
        <img\r
          *ngIf="event.logo"\r
          class="area-events-logo"\r
          [src]="event.logo"\r
          [alt]="'Logo do evento ' + event.title"\r
          width="200"\r
          height="200"\r
          loading="lazy"\r
          decoding="async"\r
          referrerpolicy="no-referrer"\r
          (error)="event.logo = null"\r
        />\r
        <div *ngIf="!event.logo" class="area-events-logo-fallback" aria-hidden="true">\r
          EVENTO\r
        </div>\r
      </div>\r
      <h4 class="area-events-item-title">{{ event.title }}</h4>\r
      <p class="area-events-item-meta">Data: {{ event.date }} - {{ event.location }}</p>\r
      <a [href]="event.redirectUrl" target="_blank" rel="noreferrer" class="area-events-link" (click)="$event.stopPropagation()">\r
        Mais detalhes\r
      </a>\r
    </li>\r
  </ul>\r
\r
  <p *ngIf="!loading() && !error() && !events().length" class="area-events-state">\r
    Nenhum evento encontrado.\r
  </p>\r
</section>\r
`, styles: ["/* src/app/components/area-events/area-events.component.scss */\n.area-events {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n  height: 100%;\n}\n.area-events-header {\n  margin-bottom: 0.75rem;\n}\n.area-events-title {\n  font-size: 1rem;\n  margin: 0;\n  color: var(--theme-title);\n}\n.area-events-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.75rem;\n}\n.area-events-item {\n  border-top: 1px dashed var(--theme-line);\n  padding-top: 0.75rem;\n  cursor: pointer;\n  transition: transform 120ms ease, background-color 120ms ease;\n}\n.area-events-item:hover {\n  background: color-mix(in srgb, var(--theme-card-bg) 82%, var(--theme-line));\n  transform: translateY(-1px);\n}\n.area-events-item:focus-visible {\n  outline: 2px solid var(--bs-link-color);\n  outline-offset: 2px;\n}\n.area-events-logo-wrap {\n  margin-bottom: 0.5rem;\n}\n.area-events-logo {\n  width: 100%;\n  max-height: 92px;\n  object-fit: contain;\n  border: 1px solid var(--theme-line);\n  border-radius: 8px;\n  background: #fff;\n  padding: 0.35rem;\n}\n.area-events-logo-fallback {\n  height: 72px;\n  border: 1px dashed var(--theme-line);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.area-events-item:first-child {\n  border-top: none;\n  padding-top: 0;\n}\n.area-events-item-title {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--theme-ink);\n}\n.area-events-item-meta {\n  margin: 0.15rem 0;\n  font-size: 0.8rem;\n  color: var(--theme-muted);\n}\n.area-events-link {\n  display: inline-block;\n  margin-top: 0.25rem;\n  font-size: 0.8rem;\n  text-decoration: underline;\n}\n.area-events-state {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n.area-events-state-error {\n  color: #a02b2b;\n}\n/*# sourceMappingURL=area-events.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaEventsComponent, { className: "AreaEventsComponent", filePath: "src/app/components/area-events/area-events.component.ts", lineNumber: 23 });
})();

// src/app/components/area-news/area-news.component.ts
function AreaNewsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Carregando atualizacoes...");
    \u0275\u0275elementEnd();
  }
}
function AreaNewsComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.description);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AreaNewsComponent_div_9_article_1_li_6_ng_container_1_span_3_Template, 2, 1, "span", 23);
    \u0275\u0275elementStart(4, "a", 24);
    \u0275\u0275text(5, "ver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("href", item_r2.link, \u0275\u0275sanitizeUrl);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.description);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 26)(2, "strong", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_container_0_span_4_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", item_r2.nwLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.description);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.description);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_template_1_span_2_Template, 2, 1, "span", 23);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.description);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_container_0_Template, 5, 3, "ng-container", 21)(1, AreaNewsComponent_div_9_article_1_li_6_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const plainItem_r3 = \u0275\u0275reference(2);
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", item_r2.nwLink)("ngIfElse", plainItem_r3);
  }
}
function AreaNewsComponent_div_9_article_1_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275template(1, AreaNewsComponent_div_9_article_1_li_6_ng_container_1_Template, 6, 3, "ng-container", 21)(2, AreaNewsComponent_div_9_article_1_li_6_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const legacyLinkItem_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.link)("ngIfElse", legacyLinkItem_r4);
  }
}
function AreaNewsComponent_div_9_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 14)(1, "header", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "ul", 18);
    \u0275\u0275template(6, AreaNewsComponent_div_9_article_1_li_6_Template, 4, 2, "li", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(block_r5.version);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", block_r5.items)("ngForTrackBy", ctx_r0.trackByItem);
  }
}
function AreaNewsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AreaNewsComponent_div_9_article_1_Template, 7, 3, "article", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.updates())("ngForTrackBy", ctx_r0.trackByVersion);
  }
}
function AreaNewsComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, " Nenhuma atualiza\xE7\xE3o encontrada. ");
    \u0275\u0275elementEnd();
  }
}
var AreaNewsComponent = class _AreaNewsComponent {
  brapciApiService = inject(BrapciApiService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  updates = signal([], ...ngDevMode ? [{ debugName: "updates" }] : []);
  constructor() {
    this.loadNews();
  }
  formatBlockLabel(block) {
    return block.version;
  }
  loadNews() {
    this.loading.set(true);
    this.error.set(null);
    this.brapciApiService.get("brapci/news").subscribe({
      next: (response) => {
        this.updates.set(this.normalizeNews(response));
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Nao foi possivel carregar as atualizacoes no momento.");
        this.updates.set([]);
        this.loading.set(false);
      }
    });
  }
  normalizeNews(response) {
    if (!response || typeof response !== "object") {
      return [];
    }
    const root = response;
    const structuredNews = this.extractStructuredNews(root["news"]);
    if (structuredNews.length) {
      return structuredNews.slice(0, 6);
    }
    const html = this.pickText(root, ["text", "html", "content"]);
    if (!html) {
      return [];
    }
    const lines = html.split(/<br\s*\/?\s*>/gi).map((line) => this.stripHtml(line)).map((line) => this.decodeHtmlEntities(line).trim()).filter((line) => line.length > 0);
    const result = [];
    let current = null;
    for (const line of lines) {
      const versionMeta = this.parseVersionLine(line);
      if (versionMeta) {
        if (current) {
          result.push(current);
        }
        current = {
          version: versionMeta.version,
          items: []
        };
        continue;
      }
      if (!current) {
        current = { version: "Atualizacoes", items: [] };
      }
      current.items.push({ title: line, description: "", link: null, nwLink: null });
    }
    if (current) {
      result.push(current);
    }
    return result.slice(0, 6);
  }
  extractStructuredNews(newsValue) {
    if (!newsValue || typeof newsValue !== "object" || Array.isArray(newsValue)) {
      return [];
    }
    const entries = Object.entries(newsValue);
    return entries.map(([version, items]) => {
      if (!Array.isArray(items)) {
        return null;
      }
      const normalizedItems = items.map((item) => this.toNewsItem(item)).filter((item) => item !== null);
      return normalizedItems.length ? { version, items: normalizedItems } : null;
    }).filter((block) => block !== null);
  }
  toNewsItem(value) {
    if (!value || typeof value !== "object") {
      return null;
    }
    const record = value;
    const title = this.pickText(record, ["title", "name", "label"]);
    const description = this.pickText(record, ["description", "content", "text"]);
    const link = this.pickText(record, ["link"]) || null;
    const nwLink = this.pickText(record, ["nw_link", "nwLink", "link", "url"]) || null;
    if (!title) {
      return null;
    }
    return {
      title,
      description,
      link,
      nwLink
    };
  }
  parseVersionLine(value) {
    const normalized = value.trim();
    const match = normalized.match(/^((?:v\d{2}\.\d{2}\.\d{2})|(?:\d{4}[-/]\d{2}[-/]\d{2}))(?:(?:\s*[-|]\s*|\s+)(\d{2}[/-]\d{2}[/-]\d{2,4}|\d{4}[-/]\d{2}[-/]\d{2}))?$/i);
    if (!match) {
      return null;
    }
    return {
      version: match[1],
      releaseDate: match[2] ?? null
    };
  }
  stripHtml(value) {
    return value.replace(/<[^>]*>/g, " ");
  }
  decodeHtmlEntities(value) {
    return value.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }
  pickText(record, keys) {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  }
  trackByVersion(index, block) {
    return `${block.version}-${index}`;
  }
  trackByItem(index, item) {
    return `${item.title}-${index}`;
  }
  static \u0275fac = function AreaNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AreaNewsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaNewsComponent, selectors: [["app-area-news"]], decls: 11, vars: 4, consts: [["legacyLinkItem", ""], ["plainItem", ""], ["aria-labelledby", "area-news-title", 1, "area-news"], [1, "area-news-header"], [1, "area-news-header__text"], [1, "area-news-kicker"], ["id", "area-news-title", 1, "area-news-title"], ["class", "area-news-state", 4, "ngIf"], ["class", "area-news-state area-news-state-error", 4, "ngIf"], ["class", "area-news-list", 4, "ngIf"], [1, "area-news-state"], [1, "area-news-state", "area-news-state-error"], [1, "area-news-list"], ["class", "area-news-block", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "area-news-block"], [1, "area-news-block__header"], [1, "area-news-version"], [1, "area-news-content"], [1, "area-news-items"], ["class", "area-news-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "area-news-item"], [4, "ngIf", "ngIfElse"], [1, "area-news-item__title"], ["class", "area-news-item__description", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "area-news-item__action", 3, "href"], [1, "area-news-item__description"], ["target", "_blank", "rel", "noopener noreferrer", 1, "area-news-item__link", 3, "href"]], template: function AreaNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2)(1, "header", 3)(2, "div", 4)(3, "p", 5);
      \u0275\u0275text(4, "Novidades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3", 6);
      \u0275\u0275text(6, "Principais atualiza\xE7\xF5es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, AreaNewsComponent_p_7_Template, 2, 0, "p", 7)(8, AreaNewsComponent_p_8_Template, 2, 1, "p", 8)(9, AreaNewsComponent_div_9_Template, 2, 2, "div", 9)(10, AreaNewsComponent_p_10_Template, 2, 0, "p", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.updates().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && !ctx.updates().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.area-news[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 14px 40px rgba(16, 37, 66, 0.08);\n  padding: 0.85rem;\n  height: 100%;\n}\n.area-news-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.area-news-header__text[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n.area-news-kicker[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.12rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.area-news-title[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.area-news-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n.area-news-block[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.95rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.55),\n      rgba(255, 255, 255, 0.25));\n  overflow: hidden;\n}\n.area-news-block__header[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.3);\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.45rem 0.6rem;\n}\n.area-news-version[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(16, 37, 66, 0.08);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  display: inline-flex;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 0.18rem 0.45rem;\n  text-transform: uppercase;\n}\n.area-news-count[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.7rem;\n  margin: 0;\n  white-space: nowrap;\n}\n.area-news-content[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem 0.6rem;\n}\n.area-news-items[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  margin: 0;\n  padding-left: 0;\n}\n.area-news-item[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: var(--theme-ink);\n  display: block;\n  gap: 0.2rem;\n  list-style: none;\n  padding: 0.05rem 0;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\n.area-news-item__link[_ngcontent-%COMP%] {\n  color: inherit;\n  display: grid;\n  gap: 0.2rem;\n  text-decoration: none;\n}\n.area-news-item__link[_ngcontent-%COMP%]:hover, \n.area-news-item__link[_ngcontent-%COMP%]:focus-visible {\n  text-decoration: none;\n}\n.area-news-item__title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.area-news-item__description[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.area-news-item__action[_ngcontent-%COMP%] {\n  align-self: start;\n  color: var(--theme-link);\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 600;\n  margin-top: 0.1rem;\n  text-decoration: none;\n}\n.area-news-item__action[_ngcontent-%COMP%]:hover, \n.area-news-item__action[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.area-news-state[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.area-news-state-error[_ngcontent-%COMP%] {\n  color: #a02b2b;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.05),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-header__text[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-header__text[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-title[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-state[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-state[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-version[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-version[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__title[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-kicker[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-count[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-count[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__description[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__description[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-block[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-block[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-block__header[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-block__header[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.84);\n  border-bottom-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-version[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-version[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.94));\n  border: 1px solid rgba(100, 132, 173, 0.35);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(100, 132, 173, 0.16);\n  padding: 0.25rem 0;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%]:last-child, body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%] {\n  color: #9cc6ff;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__action[_ngcontent-%COMP%]:focus-visible, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .area-news-item__link[_ngcontent-%COMP%]:focus-visible {\n  color: #d0e4ff;\n}\n/*# sourceMappingURL=area-news.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaNewsComponent, [{
    type: Component,
    args: [{ selector: "app-area-news", imports: [CommonModule], template: '<section class="area-news" aria-labelledby="area-news-title">\r\n  <header class="area-news-header">\r\n    <div class="area-news-header__text">\r\n      <p class="area-news-kicker">Novidades</p>\r\n      <h3 id="area-news-title" class="area-news-title">Principais atualiza\xE7\xF5es</h3>\r\n    </div>\r\n  </header>\r\n\r\n  <p *ngIf="loading()" class="area-news-state">Carregando atualizacoes...</p>\r\n  <p *ngIf="error()" class="area-news-state area-news-state-error">{{ error() }}</p>\r\n\r\n  <div *ngIf="!loading() && !error() && updates().length" class="area-news-list">\r\n    <article *ngFor="let block of updates(); trackBy: trackByVersion" class="area-news-block">\r\n      <header class="area-news-block__header">\r\n        <span class="area-news-version">{{ block.version }}</span>\r\n      </header>\r\n\r\n      <div class="area-news-content">\r\n        <ul class="area-news-items">\r\n          <li *ngFor="let item of block.items; trackBy: trackByItem" class="area-news-item">\r\n            <ng-container *ngIf="item.link; else legacyLinkItem">\r\n              <strong class="area-news-item__title">{{ item.title }}</strong>\r\n              <span *ngIf="item.description" class="area-news-item__description">{{ item.description }}</span>\r\n              <a class="area-news-item__action" [href]="item.link" target="_blank" rel="noopener noreferrer">ver</a>\r\n            </ng-container>\r\n\r\n            <ng-template #legacyLinkItem>\r\n              <ng-container *ngIf="item.nwLink; else plainItem">\r\n              <a\r\n                class="area-news-item__link"\r\n                [href]="item.nwLink"\r\n                target="_blank"\r\n                rel="noopener noreferrer"\r\n              >\r\n                <strong class="area-news-item__title">{{ item.title }}</strong>\r\n                <span *ngIf="item.description" class="area-news-item__description">{{ item.description }}</span>\r\n              </a>\r\n            </ng-container>\r\n\r\n            <ng-template #plainItem>\r\n              <strong class="area-news-item__title">{{ item.title }}</strong>\r\n              <span *ngIf="item.description" class="area-news-item__description">{{ item.description }}</span>\r\n            </ng-template>\r\n            </ng-template>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </article>\r\n  </div>\r\n\r\n  <p *ngIf="!loading() && !error() && !updates().length" class="area-news-state">\r\n    Nenhuma atualiza\xE7\xE3o encontrada.\r\n  </p>\r\n</section>\r\n', styles: ["/* src/app/components/area-news/area-news.component.scss */\n.area-news {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 14px 40px rgba(16, 37, 66, 0.08);\n  padding: 0.85rem;\n  height: 100%;\n}\n.area-news-header {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.area-news-header__text {\n  display: grid;\n  gap: 0.15rem;\n}\n.area-news-kicker {\n  color: var(--theme-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.12rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.area-news-title {\n  color: var(--theme-ink);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.area-news-list {\n  display: grid;\n  gap: 0.55rem;\n}\n.area-news-block {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.95rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.55),\n      rgba(255, 255, 255, 0.25));\n  overflow: hidden;\n}\n.area-news-block__header {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.3);\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.45rem 0.6rem;\n}\n.area-news-version {\n  align-items: center;\n  background: rgba(16, 37, 66, 0.08);\n  border-radius: 999px;\n  color: var(--theme-ink);\n  display: inline-flex;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 0.18rem 0.45rem;\n  text-transform: uppercase;\n}\n.area-news-count {\n  color: var(--theme-muted);\n  font-size: 0.7rem;\n  margin: 0;\n  white-space: nowrap;\n}\n.area-news-content {\n  padding: 0.45rem 0.6rem 0.6rem;\n}\n.area-news-items {\n  display: grid;\n  gap: 0.35rem;\n  margin: 0;\n  padding-left: 0;\n}\n.area-news-item {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: var(--theme-ink);\n  display: block;\n  gap: 0.2rem;\n  list-style: none;\n  padding: 0.05rem 0;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\n.area-news-item__link {\n  color: inherit;\n  display: grid;\n  gap: 0.2rem;\n  text-decoration: none;\n}\n.area-news-item__link:hover,\n.area-news-item__link:focus-visible {\n  text-decoration: none;\n}\n.area-news-item__title {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.area-news-item__description {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.area-news-item__action {\n  align-self: start;\n  color: var(--theme-link);\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 600;\n  margin-top: 0.1rem;\n  text-decoration: none;\n}\n.area-news-item__action:hover,\n.area-news-item__action:focus-visible {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.area-news-state {\n  color: var(--theme-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.area-news-state-error {\n  color: #a02b2b;\n}\n:host-context(body.theme-master.theme-dark) .area-news {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.05),\n      transparent 34%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .area-news-header__text,\n:host-context(body.theme-master.theme-dark) .area-news-title,\n:host-context(body.theme-master.theme-dark) .area-news-state,\n:host-context(body.theme-master.theme-dark) .area-news-version,\n:host-context(body.theme-master.theme-dark) .area-news-item,\n:host-context(body.theme-master.theme-dark) .area-news-item__title {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .area-news-kicker,\n:host-context(body.theme-master.theme-dark) .area-news-count,\n:host-context(body.theme-master.theme-dark) .area-news-item__description {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .area-news-block {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .area-news-block__header {\n  background: rgba(18, 32, 51, 0.84);\n  border-bottom-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .area-news-version {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.94));\n  border: 1px solid rgba(100, 132, 173, 0.35);\n}\n:host-context(body.theme-master.theme-dark) .area-news-item {\n  border-bottom: 1px solid rgba(100, 132, 173, 0.16);\n  padding: 0.25rem 0;\n}\n:host-context(body.theme-master.theme-dark) .area-news-item:last-child {\n  border-bottom: 0;\n}\n:host-context(body.theme-master.theme-dark) .area-news-item__action,\n:host-context(body.theme-master.theme-dark) .area-news-item__link {\n  color: #9cc6ff;\n}\n:host-context(body.theme-master.theme-dark) .area-news-item__action:hover,\n:host-context(body.theme-master.theme-dark) .area-news-item__action:focus-visible,\n:host-context(body.theme-master.theme-dark) .area-news-item__link:hover,\n:host-context(body.theme-master.theme-dark) .area-news-item__link:focus-visible {\n  color: #d0e4ff;\n}\n/*# sourceMappingURL=area-news.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaNewsComponent, { className: "AreaNewsComponent", filePath: "src/app/components/area-news/area-news.component.ts", lineNumber: 25 });
})();

// src/app/components/area-statistics/area-statistics.component.ts
function AreaStatisticsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Carregando estatisticas...");
    \u0275\u0275elementEnd();
  }
}
function AreaStatisticsComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AreaStatisticsComponent_ul_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.total);
  }
}
function AreaStatisticsComponent_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275template(1, AreaStatisticsComponent_ul_9_li_1_Template, 5, 2, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.stats())("ngForTrackBy", ctx_r0.trackByName);
  }
}
function AreaStatisticsComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Nenhuma estatistica encontrada. ");
    \u0275\u0275elementEnd();
  }
}
function AreaStatisticsComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Atualizado em ", ctx_r0.updateDate(), " ");
  }
}
var AreaStatisticsComponent = class _AreaStatisticsComponent {
  brapciApiService = inject(BrapciApiService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  stats = signal([], ...ngDevMode ? [{ debugName: "stats" }] : []);
  updateDate = signal("", ...ngDevMode ? [{ debugName: "updateDate" }] : []);
  constructor() {
    this.loadStatistics();
  }
  loadStatistics() {
    this.loading.set(true);
    this.error.set(null);
    this.brapciApiService.get("brapci/statistics").subscribe({
      next: (response) => {
        const normalized = this.normalizeResponse(response);
        this.stats.set(normalized.stats);
        this.updateDate.set(normalized.updateDate);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Nao foi possivel carregar as estatisticas no momento.");
        this.stats.set([]);
        this.updateDate.set("");
        this.loading.set(false);
      }
    });
  }
  normalizeResponse(response) {
    if (!response || typeof response !== "object") {
      return { stats: [], updateDate: "" };
    }
    const root = response;
    const rawStats = Array.isArray(root["data"]) ? root["data"] : [];
    const updateDate = this.pickText(root, ["update", "updated_at", "date"]) || "";
    const stats = rawStats.map((item) => this.toStatistic(item)).filter((item) => item !== null);
    return { stats, updateDate };
  }
  toStatistic(value) {
    if (!value || typeof value !== "object") {
      return null;
    }
    const record = value;
    const name = this.pickText(record, ["name", "label", "title"]);
    const total = this.pickText(record, ["total", "count", "value"]);
    if (!name || !total) {
      return null;
    }
    return { name, total };
  }
  pickText(record, keys) {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
      if (typeof value === "number" && Number.isFinite(value)) {
        return String(value);
      }
    }
    return "";
  }
  trackByName(index, item) {
    return item.name || String(index);
  }
  static \u0275fac = function AreaStatisticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AreaStatisticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaStatisticsComponent, selectors: [["app-area-statistics"]], decls: 12, vars: 5, consts: [["aria-labelledby", "area-statistics-title", 1, "area-statistics"], [1, "area-statistics-header"], [1, "area-statistics-header__text"], [1, "area-statistics-kicker"], ["id", "area-statistics-title", 1, "area-statistics-title"], ["class", "area-statistics-state", 4, "ngIf"], ["class", "area-statistics-state area-statistics-state-error", 4, "ngIf"], ["class", "area-statistics-list", 4, "ngIf"], ["class", "area-statistics-update", 4, "ngIf"], [1, "area-statistics-state"], [1, "area-statistics-state", "area-statistics-state-error"], [1, "area-statistics-list"], ["class", "area-statistics-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "area-statistics-item"], [1, "area-statistics-name"], [1, "area-statistics-total"], [1, "area-statistics-update"]], template: function AreaStatisticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "Indicadores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3", 4);
      \u0275\u0275text(6, "Estat\xEDsticas da base");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, AreaStatisticsComponent_p_7_Template, 2, 0, "p", 5)(8, AreaStatisticsComponent_p_8_Template, 2, 1, "p", 6)(9, AreaStatisticsComponent_ul_9_Template, 2, 2, "ul", 7)(10, AreaStatisticsComponent_p_10_Template, 2, 0, "p", 5)(11, AreaStatisticsComponent_small_11_Template, 2, 1, "small", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.stats().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && !ctx.stats().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.updateDate());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.area-statistics[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n  padding: 1.1rem;\n  height: 100%;\n}\n.area-statistics-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.area-statistics-header__text[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n.area-statistics-kicker[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.11rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.area-statistics-title[_ngcontent-%COMP%] {\n  font-size: 1.03rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-ink);\n}\n.area-statistics-summary[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  background: rgba(255, 255, 255, 0.34);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n  display: grid;\n  gap: 0.1rem;\n  min-width: 7.75rem;\n  padding: 0.6rem 0.75rem;\n  text-align: right;\n}\n.area-statistics-summary__label[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.74rem;\n}\n.area-statistics-summary__value[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.area-statistics-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0.15rem 0 0;\n  display: grid;\n  gap: 0.3rem;\n}\n.area-statistics-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  padding: 0.15rem 0;\n}\n.area-statistics-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--theme-ink);\n}\n.area-statistics-total[_ngcontent-%COMP%] {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: var(--theme-muted);\n  display: inline-flex;\n  font-size: 0.9rem;\n  font-weight: 700;\n  justify-content: center;\n  min-width: auto;\n  padding: 0;\n}\n.area-statistics-state[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--theme-muted);\n}\n.area-statistics-state-error[_ngcontent-%COMP%] {\n  color: #a02b2b;\n}\n.area-statistics-update[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.75rem;\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n  letter-spacing: 0.01em;\n}\n/*# sourceMappingURL=area-statistics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaStatisticsComponent, [{
    type: Component,
    args: [{ selector: "app-area-statistics", imports: [CommonModule], template: '<section class="area-statistics" aria-labelledby="area-statistics-title">\r\n  <header class="area-statistics-header">\r\n    <div class="area-statistics-header__text">\r\n      <p class="area-statistics-kicker">Indicadores</p>\r\n      <h3 id="area-statistics-title" class="area-statistics-title">Estat\xEDsticas da base</h3>\r\n    </div>\r\n  </header>\r\n\r\n  <p *ngIf="loading()" class="area-statistics-state">Carregando estatisticas...</p>\r\n  <p *ngIf="error()" class="area-statistics-state area-statistics-state-error">{{ error() }}</p>\r\n\r\n  <ul *ngIf="!loading() && !error() && stats().length" class="area-statistics-list">\r\n    <li *ngFor="let item of stats(); trackBy: trackByName" class="area-statistics-item">\r\n      <span class="area-statistics-name">{{ item.name }}</span>\r\n      <strong class="area-statistics-total">{{ item.total }}</strong>\r\n    </li>\r\n  </ul>\r\n\r\n  <p *ngIf="!loading() && !error() && !stats().length" class="area-statistics-state">\r\n    Nenhuma estatistica encontrada.\r\n  </p>\r\n\r\n  <small *ngIf="!loading() && !error() && updateDate()" class="area-statistics-update">\r\n    Atualizado em {{ updateDate() }}\r\n  </small>\r\n</section>\r\n', styles: ["/* src/app/components/area-statistics/area-statistics.component.scss */\n.area-statistics {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n  padding: 1.1rem;\n  height: 100%;\n}\n.area-statistics-header {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.area-statistics-header__text {\n  display: grid;\n  gap: 0.15rem;\n}\n.area-statistics-kicker {\n  color: var(--theme-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.11rem;\n  margin: 0;\n  text-transform: uppercase;\n}\n.area-statistics-title {\n  font-size: 1.03rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-ink);\n}\n.area-statistics-summary {\n  align-items: flex-end;\n  background: rgba(255, 255, 255, 0.34);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.9rem;\n  display: grid;\n  gap: 0.1rem;\n  min-width: 7.75rem;\n  padding: 0.6rem 0.75rem;\n  text-align: right;\n}\n.area-statistics-summary__label {\n  color: var(--theme-muted);\n  font-size: 0.74rem;\n}\n.area-statistics-summary__value {\n  color: var(--theme-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.area-statistics-list {\n  list-style: none;\n  margin: 0;\n  padding: 0.15rem 0 0;\n  display: grid;\n  gap: 0.3rem;\n}\n.area-statistics-item {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  padding: 0.15rem 0;\n}\n.area-statistics-name {\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--theme-ink);\n}\n.area-statistics-total {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  color: var(--theme-muted);\n  display: inline-flex;\n  font-size: 0.9rem;\n  font-weight: 700;\n  justify-content: center;\n  min-width: auto;\n  padding: 0;\n}\n.area-statistics-state {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--theme-muted);\n}\n.area-statistics-state-error {\n  color: #a02b2b;\n}\n.area-statistics-update {\n  display: block;\n  margin-top: 0.75rem;\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n  letter-spacing: 0.01em;\n}\n/*# sourceMappingURL=area-statistics.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaStatisticsComponent, { className: "AreaStatisticsComponent", filePath: "src/app/components/area-statistics/area-statistics.component.ts", lineNumber: 18 });
})();

// src/app/components/search-filter-authors/search-filter-authors.component.ts
var _forTrack0 = ($index, $item) => $item.label + "-" + $index;
var _forTrack1 = ($index, $item) => $item.label + "-panel-" + $index;
function SearchFilterAuthorsComponent_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.count);
  }
}
function SearchFilterAuthorsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 5)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterAuthorsComponent_For_8_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r1.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.count !== null ? 3 : -1);
  }
}
function SearchFilterAuthorsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function SearchFilterAuthorsComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePanel());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.expanded() ? "Close" : "View more", " ");
  }
}
function SearchFilterAuthorsComponent_Conditional_10_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.count);
  }
}
function SearchFilterAuthorsComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 12)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterAuthorsComponent_Conditional_10_For_3_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r4.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.count !== null ? 3 : -1);
  }
}
function SearchFilterAuthorsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 7)(1, "ul", 11);
    \u0275\u0275repeaterCreate(2, SearchFilterAuthorsComponent_Conditional_10_For_3_Template, 4, 3, "li", 12, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.panelItems());
  }
}
var SearchFilterAuthorsComponent = class _SearchFilterAuthorsComponent {
  set items(value) {
    this.rawItems.set(Array.isArray(value) ? value : []);
  }
  encode(value) {
    return encodeURIComponent(value);
  }
  expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  rawItems = signal([], ...ngDevMode ? [{ debugName: "rawItems" }] : []);
  normalizedItems = computed(() => this.rawItems().map((item) => this.toFilterItem(item)).filter((item) => !!item.label), ...ngDevMode ? [{ debugName: "normalizedItems" }] : []);
  topItems = computed(() => this.normalizedItems().slice(0, 10), ...ngDevMode ? [{ debugName: "topItems" }] : []);
  panelItems = computed(() => this.normalizedItems().slice(0, 100), ...ngDevMode ? [{ debugName: "panelItems" }] : []);
  hasMoreThanTop = computed(() => this.normalizedItems().length > 10, ...ngDevMode ? [{ debugName: "hasMoreThanTop" }] : []);
  togglePanel() {
    this.expanded.update((value) => !value);
  }
  toFilterItem(item) {
    if (typeof item === "string") {
      return { label: item.trim(), count: null };
    }
    if (!item || typeof item !== "object") {
      return { label: "", count: null };
    }
    const data = item;
    const label = this.pickFirstString(data, ["label", "name", "author", "key", "value", "title"]);
    const count = this.pickFirstNumber(data, ["count", "doc_count", "total", "value"]);
    return { label, count };
  }
  pickFirstString(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  }
  pickFirstNumber(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "number" && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === "string") {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) {
          return parsed;
        }
      }
    }
    return null;
  }
  static \u0275fac = function SearchFilterAuthorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchFilterAuthorsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchFilterAuthorsComponent, selectors: [["app-search-filter-authors"]], inputs: { items: "items" }, decls: 11, vars: 3, consts: [["aria-labelledby", "search-filter-authors-title", 1, "filter-block"], [1, "filter-head"], ["id", "search-filter-authors-title", 1, "filter-title"], [1, "filter-count"], [1, "filter-list"], [1, "filter-item"], ["type", "button", 1, "view-more"], ["aria-label", "Authors list", 1, "panel"], ["target", "_blank", "rel", "noopener", 1, "link", "supersmall", 3, "href"], [1, "badge"], ["type", "button", 1, "view-more", 3, "click"], [1, "panel-list"], [1, "panel-item"]], template: function SearchFilterAuthorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Authors");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "ul", 4);
      \u0275\u0275repeaterCreate(7, SearchFilterAuthorsComponent_For_8_Template, 4, 3, "li", 5, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, SearchFilterAuthorsComponent_Conditional_9_Template, 2, 1, "button", 6);
      \u0275\u0275conditionalCreate(10, SearchFilterAuthorsComponent_Conditional_10_Template, 4, 0, "section", 7);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.normalizedItems().length);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.topItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasMoreThanTop() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expanded() ? 10 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.filter-block[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list[_ngcontent-%COMP%], \n.panel-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item[_ngcontent-%COMP%], \n.panel-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.view-more[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-authors.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchFilterAuthorsComponent, [{
    type: Component,
    args: [{ selector: "app-search-filter-authors", standalone: true, imports: [CommonModule], template: `<section class="filter-block" aria-labelledby="search-filter-authors-title">\r
  <header class="filter-head">\r
    <h3 id="search-filter-authors-title" class="filter-title">Authors</h3>\r
    <span class="filter-count">{{ normalizedItems().length }}</span>\r
  </header>\r
\r
  <ul class="filter-list">\r
    @for (item of topItems(); track item.label + '-' + $index) {\r
      <li class="filter-item">\r
        <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
        @if (item.count !== null) {\r
          <span class="badge">{{ item.count }}</span>\r
        }\r
      </li>\r
    }\r
  </ul>\r
\r
  @if (hasMoreThanTop()) {\r
    <button type="button" class="view-more" (click)="togglePanel()">\r
      {{ expanded() ? 'Close' : 'View more' }}\r
    </button>\r
  }\r
\r
  @if (expanded()) {\r
    <section class="panel" aria-label="Authors list">\r
      <ul class="panel-list">\r
        @for (item of panelItems(); track item.label + '-panel-' + $index) {\r
          <li class="panel-item">\r
            <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
            @if (item.count !== null) {\r
              <span class="badge">{{ item.count }}</span>\r
            }\r
          </li>\r
        }\r
      </ul>\r
    </section>\r
  }\r
</section>\r
`, styles: ['/* src/app/components/search-filter-authors/search-filter-authors.component.scss */\n.filter-block {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count,\n.badge {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list,\n.panel-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item,\n.panel-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item span {\n  font-size: 0.78rem;\n}\n.view-more {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-authors.component.css.map */\n'] }]
  }], null, { items: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchFilterAuthorsComponent, { className: "SearchFilterAuthorsComponent", filePath: "src/app/components/search-filter-authors/search-filter-authors.component.ts", lineNumber: 16 });
})();

// src/app/components/search-filter-keywords/search-filter-keywords.component.ts
var _forTrack02 = ($index, $item) => $item.label + "-" + $index;
var _forTrack12 = ($index, $item) => $item.label + "-panel-" + $index;
function SearchFilterKeywordsComponent_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.count);
  }
}
function SearchFilterKeywordsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 5)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterKeywordsComponent_For_8_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r1.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.count !== null ? 3 : -1);
  }
}
function SearchFilterKeywordsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function SearchFilterKeywordsComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePanel());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.expanded() ? "Close" : "View more", " ");
  }
}
function SearchFilterKeywordsComponent_Conditional_10_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.count);
  }
}
function SearchFilterKeywordsComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 12)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterKeywordsComponent_Conditional_10_For_3_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r4.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.count !== null ? 3 : -1);
  }
}
function SearchFilterKeywordsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 7)(1, "ul", 11);
    \u0275\u0275repeaterCreate(2, SearchFilterKeywordsComponent_Conditional_10_For_3_Template, 4, 3, "li", 12, _forTrack12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.panelItems());
  }
}
var SearchFilterKeywordsComponent = class _SearchFilterKeywordsComponent {
  set items(value) {
    this.rawItems.set(Array.isArray(value) ? value : []);
  }
  encode(value) {
    return encodeURIComponent(value);
  }
  expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  rawItems = signal([], ...ngDevMode ? [{ debugName: "rawItems" }] : []);
  normalizedItems = computed(() => this.rawItems().map((item) => this.toFilterItem(item)).filter((item) => !!item.label), ...ngDevMode ? [{ debugName: "normalizedItems" }] : []);
  topItems = computed(() => this.normalizedItems().slice(0, 10), ...ngDevMode ? [{ debugName: "topItems" }] : []);
  panelItems = computed(() => this.normalizedItems().slice(0, 100), ...ngDevMode ? [{ debugName: "panelItems" }] : []);
  hasMoreThanTop = computed(() => this.normalizedItems().length > 10, ...ngDevMode ? [{ debugName: "hasMoreThanTop" }] : []);
  togglePanel() {
    this.expanded.update((value) => !value);
  }
  toFilterItem(item) {
    if (typeof item === "string") {
      return { label: item.trim(), count: null };
    }
    if (!item || typeof item !== "object") {
      return { label: "", count: null };
    }
    const data = item;
    const label = this.pickFirstString(data, ["label", "name", "keyword", "key", "value", "title"]);
    const count = this.pickFirstNumber(data, ["count", "doc_count", "total", "value"]);
    return { label, count };
  }
  pickFirstString(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  }
  pickFirstNumber(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "number" && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === "string") {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) {
          return parsed;
        }
      }
    }
    return null;
  }
  static \u0275fac = function SearchFilterKeywordsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchFilterKeywordsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchFilterKeywordsComponent, selectors: [["app-search-filter-keywords"]], inputs: { items: "items" }, decls: 11, vars: 3, consts: [["aria-labelledby", "search-filter-keywords-title", 1, "filter-block"], [1, "filter-head"], ["id", "search-filter-keywords-title", 1, "filter-title"], [1, "filter-count"], [1, "filter-list"], [1, "filter-item"], ["type", "button", 1, "view-more"], ["aria-label", "Keywords list", 1, "panel"], ["target", "_blank", "rel", "noopener", 1, "link", "supersmall", 3, "href"], [1, "badge"], ["type", "button", 1, "view-more", 3, "click"], [1, "panel-list"], [1, "panel-item"]], template: function SearchFilterKeywordsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Keywords");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "ul", 4);
      \u0275\u0275repeaterCreate(7, SearchFilterKeywordsComponent_For_8_Template, 4, 3, "li", 5, _forTrack02);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, SearchFilterKeywordsComponent_Conditional_9_Template, 2, 1, "button", 6);
      \u0275\u0275conditionalCreate(10, SearchFilterKeywordsComponent_Conditional_10_Template, 4, 0, "section", 7);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.normalizedItems().length);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.topItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasMoreThanTop() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expanded() ? 10 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.filter-block[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list[_ngcontent-%COMP%], \n.panel-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item[_ngcontent-%COMP%], \n.panel-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.view-more[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-keywords.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchFilterKeywordsComponent, [{
    type: Component,
    args: [{ selector: "app-search-filter-keywords", standalone: true, imports: [CommonModule], template: `<section class="filter-block" aria-labelledby="search-filter-keywords-title">\r
  <header class="filter-head">\r
    <h3 id="search-filter-keywords-title" class="filter-title">Keywords</h3>\r
    <span class="filter-count">{{ normalizedItems().length }}</span>\r
  </header>\r
\r
  <ul class="filter-list">\r
    @for (item of topItems(); track item.label + '-' + $index) {\r
      <li class="filter-item">\r
        <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
        @if (item.count !== null) {\r
          <span class="badge">{{ item.count }}</span>\r
        }\r
      </li>\r
    }\r
  </ul>\r
\r
  @if (hasMoreThanTop()) {\r
    <button type="button" class="view-more" (click)="togglePanel()">\r
      {{ expanded() ? 'Close' : 'View more' }}\r
    </button>\r
  }\r
\r
  @if (expanded()) {\r
    <section class="panel" aria-label="Keywords list">\r
      <ul class="panel-list">\r
        @for (item of panelItems(); track item.label + '-panel-' + $index) {\r
          <li class="panel-item">\r
            <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
            @if (item.count !== null) {\r
              <span class="badge">{{ item.count }}</span>\r
            }\r
          </li>\r
        }\r
      </ul>\r
    </section>\r
  }\r
</section>\r
`, styles: ['/* src/app/components/search-filter-keywords/search-filter-keywords.component.scss */\n.filter-block {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count,\n.badge {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list,\n.panel-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item,\n.panel-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item span {\n  font-size: 0.78rem;\n}\n.view-more {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-keywords.component.css.map */\n'] }]
  }], null, { items: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchFilterKeywordsComponent, { className: "SearchFilterKeywordsComponent", filePath: "src/app/components/search-filter-keywords/search-filter-keywords.component.ts", lineNumber: 16 });
})();

// src/app/components/search-filter-sources/search-filter-sources.component.ts
var _forTrack03 = ($index, $item) => $item.label + "-" + $index;
var _forTrack13 = ($index, $item) => $item.label + "-panel-" + $index;
function SearchFilterSourcesComponent_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.count);
  }
}
function SearchFilterSourcesComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 5)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterSourcesComponent_For_8_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r1.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.count !== null ? 3 : -1);
  }
}
function SearchFilterSourcesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function SearchFilterSourcesComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePanel());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.expanded() ? "Close" : "View more", " ");
  }
}
function SearchFilterSourcesComponent_Conditional_10_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.count);
  }
}
function SearchFilterSourcesComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 12)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SearchFilterSourcesComponent_Conditional_10_For_3_Conditional_3_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", "/v/" + ctx_r1.encode(item_r4.label), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.count !== null ? 3 : -1);
  }
}
function SearchFilterSourcesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 7)(1, "ul", 11);
    \u0275\u0275repeaterCreate(2, SearchFilterSourcesComponent_Conditional_10_For_3_Template, 4, 3, "li", 12, _forTrack13);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.panelItems());
  }
}
var SearchFilterSourcesComponent = class _SearchFilterSourcesComponent {
  set items(value) {
    this.rawItems.set(Array.isArray(value) ? value : []);
  }
  encode(value) {
    return encodeURIComponent(value);
  }
  expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  rawItems = signal([], ...ngDevMode ? [{ debugName: "rawItems" }] : []);
  normalizedItems = computed(() => this.rawItems().map((item) => this.toFilterItem(item)).filter((item) => !!item.label), ...ngDevMode ? [{ debugName: "normalizedItems" }] : []);
  topItems = computed(() => this.normalizedItems().slice(0, 10), ...ngDevMode ? [{ debugName: "topItems" }] : []);
  panelItems = computed(() => this.normalizedItems().slice(0, 100), ...ngDevMode ? [{ debugName: "panelItems" }] : []);
  hasMoreThanTop = computed(() => this.normalizedItems().length > 10, ...ngDevMode ? [{ debugName: "hasMoreThanTop" }] : []);
  togglePanel() {
    this.expanded.update((value) => !value);
  }
  toFilterItem(item) {
    if (typeof item === "string") {
      return { label: item.trim(), count: null };
    }
    if (!item || typeof item !== "object") {
      return { label: "", count: null };
    }
    const data = item;
    const label = this.pickFirstString(data, ["label", "name", "key", "source", "value", "title"]);
    const count = this.pickFirstNumber(data, ["count", "doc_count", "total", "value"]);
    return { label, count };
  }
  pickFirstString(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  }
  pickFirstNumber(data, keys) {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "number" && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === "string") {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) {
          return parsed;
        }
      }
    }
    return null;
  }
  static \u0275fac = function SearchFilterSourcesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchFilterSourcesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchFilterSourcesComponent, selectors: [["app-search-filter-sources"]], inputs: { items: "items" }, decls: 11, vars: 3, consts: [["aria-labelledby", "search-filter-sources-title", 1, "filter-block"], [1, "filter-head"], ["id", "search-filter-sources-title", 1, "filter-title"], [1, "filter-count"], [1, "filter-list"], [1, "filter-item"], ["type", "button", 1, "view-more"], ["aria-label", "Sources list", 1, "panel"], ["target", "_blank", "rel", "noopener", 1, "link", "supersmall", 3, "href"], [1, "badge"], ["type", "button", 1, "view-more", 3, "click"], [1, "panel-list"], [1, "panel-item"]], template: function SearchFilterSourcesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Sources");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "ul", 4);
      \u0275\u0275repeaterCreate(7, SearchFilterSourcesComponent_For_8_Template, 4, 3, "li", 5, _forTrack03);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, SearchFilterSourcesComponent_Conditional_9_Template, 2, 1, "button", 6);
      \u0275\u0275conditionalCreate(10, SearchFilterSourcesComponent_Conditional_10_Template, 4, 0, "section", 7);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.normalizedItems().length);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.topItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasMoreThanTop() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expanded() ? 10 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.filter-block[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list[_ngcontent-%COMP%], \n.panel-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item[_ngcontent-%COMP%], \n.panel-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.view-more[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-sources.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchFilterSourcesComponent, [{
    type: Component,
    args: [{ selector: "app-search-filter-sources", standalone: true, imports: [CommonModule], template: `<section class="filter-block" aria-labelledby="search-filter-sources-title">\r
  <header class="filter-head">\r
    <h3 id="search-filter-sources-title" class="filter-title">Sources</h3>\r
    <span class="filter-count">{{ normalizedItems().length }}</span>\r
  </header>\r
\r
  <ul class="filter-list">\r
    @for (item of topItems(); track item.label + '-' + $index) {\r
      <li class="filter-item">\r
        <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
        @if (item.count !== null) {\r
          <span class="badge">{{ item.count }}</span>\r
        }\r
      </li>\r
    }\r
  </ul>\r
\r
  @if (hasMoreThanTop()) {\r
    <button type="button" class="view-more" (click)="togglePanel()">\r
      {{ expanded() ? 'Close' : 'View more' }}\r
    </button>\r
  }\r
\r
  @if (expanded()) {\r
    <section class="panel" aria-label="Sources list">\r
      <ul class="panel-list">\r
        @for (item of panelItems(); track item.label + '-panel-' + $index) {\r
          <li class="panel-item">\r
            <a class="link supersmall" [href]="'/v/' + encode(item.label)" target="_blank" rel="noopener">{{ item.label }}</a>\r
            @if (item.count !== null) {\r
              <span class="badge">{{ item.count }}</span>\r
            }\r
          </li>\r
        }\r
      </ul>\r
    </section>\r
  }\r
</section>\r
`, styles: ['/* src/app/components/search-filter-sources/search-filter-sources.component.scss */\n.filter-block {\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--theme-card-bg) 84%, transparent);\n  padding: 0.8rem;\n}\n.filter-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.filter-title {\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: "Raleway", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-count,\n.badge {\n  font-size: 0.73rem;\n  font-weight: 700;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  border-radius: 999px;\n  padding: 0.08rem 0.45rem;\n}\n.filter-list,\n.panel-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.32rem;\n}\n.filter-item,\n.panel-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.label {\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n}\n.panel-item span {\n  font-size: 0.78rem;\n}\n.view-more {\n  margin-top: 0.55rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  border-radius: 0.55rem;\n  background: var(--theme-sand);\n  color: var(--theme-hint);\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.3rem 0.55rem;\n}\n.panel {\n  margin-top: 0.55rem;\n  max-height: 230px;\n  overflow: auto;\n  border-top: 1px dashed color-mix(in srgb, var(--theme-line) 70%, transparent);\n  padding-top: 0.55rem;\n}\n/*# sourceMappingURL=search-filter-sources.component.css.map */\n'] }]
  }], null, { items: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchFilterSourcesComponent, { className: "SearchFilterSourcesComponent", filePath: "src/app/components/search-filter-sources/search-filter-sources.component.ts", lineNumber: 16 });
})();

// src/app/components/search-result/search-result.component.ts
var _c0 = (a0) => ({ items: a0 });
var _forTrack04 = ($index, $item) => $item.id + "-" + $index;
function SearchResultComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchResultComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchResultComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchResultComponent_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", card_r2.coverUrl, \u0275\u0275sanitizeUrl)("alt", "Capa de " + card_r2.title);
  }
}
function SearchResultComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Sem capa");
    \u0275\u0275elementEnd();
  }
}
function SearchResultComponent_For_13_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const keyword_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(keyword_r4);
  }
}
function SearchResultComponent_For_13_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, SearchResultComponent_For_13_Conditional_19_For_2_Template, 2, 1, "span", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(card_r2.keywords);
  }
}
function SearchResultComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, SearchResultComponent_For_13_Conditional_2_Template, 1, 2, "img", 11)(3, SearchResultComponent_For_13_Conditional_3_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "header", 16)(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "h3", 18)(14, "input", 19);
    \u0275\u0275listener("change", function SearchResultComponent_For_13_Template_input_change_14_listener($event) {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMarked(card_r2.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SearchResultComponent_For_13_Conditional_19_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(card_r2.coverUrl ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r2.journal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isMarked(card_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("href", "/v/" + card_r2.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.authors);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r2.keywords.length ? 19 : -1);
  }
}
function SearchResultComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Role a tela para carregar mais resultados...");
    \u0275\u0275elementEnd();
  }
}
var SearchResultComponent = class _SearchResultComponent {
  basket = inject(BasketService);
  isMarked(id) {
    return this.basket.isMarked(Number(id));
  }
  toggleMarked(id, checked) {
    const numId = Number(id);
    if (checked) {
      this.basket.add(numId);
    } else {
      this.basket.remove(numId);
    }
  }
  markedCount() {
    return this.basket.count();
  }
  pageSize = 5;
  set results(value) {
    this.allResults.set(Array.isArray(value) ? value : []);
    this.visibleCount.set(this.pageSize);
  }
  sources = [];
  authors = [];
  keywords = [];
  sourcesFilterComponent = SearchFilterSourcesComponent;
  authorsFilterComponent = SearchFilterAuthorsComponent;
  keywordsFilterComponent = SearchFilterKeywordsComponent;
  allResults = signal([], ...ngDevMode ? [{ debugName: "allResults" }] : []);
  visibleCount = signal(this.pageSize, ...ngDevMode ? [{ debugName: "visibleCount" }] : []);
  visibleResults = computed(() => this.allResults().slice(0, this.visibleCount()), ...ngDevMode ? [{ debugName: "visibleResults" }] : []);
  visibleCards = computed(() => this.visibleResults().map((item, index) => this.toWorkCard(item, index)), ...ngDevMode ? [{ debugName: "visibleCards" }] : []);
  hasMore = computed(() => this.visibleCount() < this.allResults().length, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  visibleTotal = computed(() => this.visibleResults().length, ...ngDevMode ? [{ debugName: "visibleTotal" }] : []);
  totalResults = computed(() => this.allResults().length, ...ngDevMode ? [{ debugName: "totalResults" }] : []);
  onWindowScroll() {
    if (!this.hasMore()) {
      return;
    }
    const threshold = 200;
    const viewportBottom = window.innerHeight + window.scrollY;
    const pageBottom = document.documentElement.scrollHeight;
    if (viewportBottom >= pageBottom - threshold) {
      this.loadMore();
    }
  }
  loadMore() {
    this.visibleCount.update((current) => Math.min(current + this.pageSize, this.allResults().length));
  }
  toWorkCard(item, index) {
    const entry = item ?? {};
    const data = entry.data ?? {};
    const id = this.asString(entry.id) || this.asString(data.ID) || String(index + 1);
    const title = this.asString(data.TITLE) || "Titulo nao informado";
    const authors = this.asString(data.AUTHORS) || "Autor(es) nao informado(s)";
    const journal = this.asString(data.JOURNAL) || "Fonte nao informada";
    const year = this.asString(entry.year) || "Ano nao informado";
    const type = this.asString(entry.type) || this.asString(data.CLASS) || "Tipo nao informado";
    const legend = this.asString(data.LEGEND);
    const coverUrl = this.asString(data.cover);
    const score = typeof entry.score === "number" ? entry.score.toFixed(2) : "-";
    const keywords = this.extractKeywords(data.KEYWORDS);
    return {
      id,
      title,
      authors,
      journal,
      year,
      type,
      legend,
      coverUrl,
      score,
      keywords
    };
  }
  extractKeywords(rawKeywords) {
    if (!rawKeywords) {
      return [];
    }
    return rawKeywords.split(";").map((keyword) => keyword.trim()).filter((keyword) => keyword.length > 0).slice(0, 4);
  }
  asString(value) {
    return typeof value === "string" ? value.trim() : "";
  }
  static \u0275fac = function SearchResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultComponent, selectors: [["app-search-result"]], hostBindings: function SearchResultComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function SearchResultComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { results: "results", sources: "sources", authors: "authors", keywords: "keywords" }, decls: 15, vars: 16, consts: [[1, "row", "g-3", "results-layout"], [1, "col-12", "col-lg-3"], [1, "filters-stack"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], ["type", "button", 1, "btn", "btn-primary", "mt-2", "w-100"], [1, "col-12", "col-lg-9"], [1, "results-count"], [1, "results"], [1, "result-card"], [1, "loading-more"], [1, "cover-wrap"], ["width", "180", "height", "240", "loading", "lazy", "decoding", "async", 1, "cover", 3, "src", "alt"], ["aria-hidden", "true", 1, "cover", "cover-fallback"], [1, "content"], [1, "meta-line"], [1, "journal"], [1, "meta-top"], [1, "pill"], [1, "title"], ["type", "checkbox", "title", "Marcar/desmarcar trabalho", 2, "margin-right", "0.5em", 3, "change", "checked"], ["target", "_blank", "rel", "noopener", 1, "title-link", "link", 3, "href"], [1, "authors"], [1, "keywords"], [1, "keyword"]], template: function SearchResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275template(3, SearchResultComponent_ng_container_3_Template, 1, 0, "ng-container", 3)(4, SearchResultComponent_ng_container_4_Template, 1, 0, "ng-container", 3)(5, SearchResultComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 5)(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 7);
      \u0275\u0275repeaterCreate(12, SearchResultComponent_For_13_Template, 20, 9, "li", 8, _forTrack04);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, SearchResultComponent_Conditional_14_Template, 2, 0, "p", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngComponentOutlet", ctx.sourcesFilterComponent)("ngComponentOutletInputs", \u0275\u0275pureFunction1(10, _c0, ctx.sources));
      \u0275\u0275advance();
      \u0275\u0275property("ngComponentOutlet", ctx.authorsFilterComponent)("ngComponentOutletInputs", \u0275\u0275pureFunction1(12, _c0, ctx.authors));
      \u0275\u0275advance();
      \u0275\u0275property("ngComponentOutlet", ctx.keywordsFilterComponent)("ngComponentOutletInputs", \u0275\u0275pureFunction1(14, _c0, ctx.keywords));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Trabalhos marcados: ", ctx.markedCount(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.visibleTotal(), "/", ctx.totalResults());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.visibleCards());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasMore() ? 14 : -1);
    }
  }, dependencies: [CommonModule, NgComponentOutlet], styles: ['\n\n.results-layout[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n}\n.filters-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.results-count[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0.75rem;\n  font-family: "Raleway", sans-serif;\n  font-size: 0.86rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: var(--theme-hint);\n}\n.results[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  list-style: none;\n  margin: 1rem 0 0;\n  padding: 0;\n}\n.result-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: 92px 1fr;\n  padding: 0.9rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 82%, transparent);\n  border-radius: 0.85rem;\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--theme-sand) 42%, transparent) 0%,\n      transparent 55%),\n    var(--theme-card-bg);\n  box-shadow: 0 6px 18px rgba(16, 37, 66, 0.08);\n}\n.cover-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cover[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 130px;\n  border-radius: 0.6rem;\n  object-fit: cover;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  background: var(--theme-sand);\n}\n.cover-fallback[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  font-size: 0.72rem;\n  letter-spacing: 0.02em;\n  color: var(--theme-hint);\n  text-transform: uppercase;\n  font-weight: 700;\n  background:\n    repeating-linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--theme-sand) 85%, transparent),\n      color-mix(in srgb, var(--theme-sand) 85%, transparent) 8px,\n      color-mix(in srgb, var(--theme-line) 18%, transparent) 8px,\n      color-mix(in srgb, var(--theme-line) 18%, transparent) 16px);\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.meta-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  width: 100%;\n  margin-bottom: 0.45rem;\n}\n.meta-line[_ngcontent-%COMP%]   .journal[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.meta-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 0.4rem;\n  margin-bottom: 0;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 92%, transparent);\n  background: color-mix(in srgb, var(--theme-sand) 44%, transparent);\n}\n.score[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--theme-ink) 80%, var(--theme-hint));\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.06rem;\n  line-height: 1.3;\n  color: var(--theme-ink);\n}\n.title-link[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  text-decoration: none;\n}\n.title-link[_ngcontent-%COMP%]:hover, \n.title-link[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-link);\n  text-decoration: underline;\n}\n.authors[_ngcontent-%COMP%], \n.journal[_ngcontent-%COMP%], \n.legend[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 0.4rem;\n  font-family: "Source Sans 3", sans-serif;\n  line-height: 1.35;\n}\n.authors[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-weight: 100;\n  font-style: italic;\n}\n.journal[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.95rem;\n}\n.legend[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.92rem;\n}\n.keywords[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.38rem;\n  margin-top: 0.55rem;\n}\n.keyword[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  line-height: 1;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.4rem;\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  color: var(--theme-hint);\n}\n.loading-more[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  margin: 0.8rem 0 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n}\n@media (max-width: 640px) {\n  .result-card[_ngcontent-%COMP%] {\n    grid-template-columns: 76px 1fr;\n    gap: 0.75rem;\n    padding: 0.75rem;\n  }\n  .cover[_ngcontent-%COMP%] {\n    width: 76px;\n    height: 110px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 0.98rem;\n  }\n}\n/*# sourceMappingURL=search-result.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchResultComponent, [{
    type: Component,
    args: [{ selector: "app-search-result", standalone: true, imports: [CommonModule], template: `<section class="row g-3 results-layout">\r
  <aside class="col-12 col-lg-3">\r
    <div class="filters-stack">\r
      <ng-container *ngComponentOutlet="sourcesFilterComponent; inputs: { items: sources }"></ng-container>\r
      <ng-container *ngComponentOutlet="authorsFilterComponent; inputs: { items: authors }"></ng-container>\r
      <ng-container *ngComponentOutlet="keywordsFilterComponent; inputs: { items: keywords }"></ng-container>\r
      <button type="button" class="btn btn-primary mt-2 w-100">\r
        Trabalhos marcados: {{ markedCount() }}\r
      </button>\r
    </div>\r
  </aside>\r
\r
  <section class="col-12 col-lg-9">\r
    <p class="results-count">{{ visibleTotal() }}/{{ totalResults() }}</p>\r
\r
    <ul class="results">\r
      @for (card of visibleCards(); track card.id + '-' + $index) {\r
        <li class="result-card">\r
          <div class="cover-wrap">\r
            @if (card.coverUrl) {\r
              <img class="cover" [src]="card.coverUrl" [alt]="'Capa de ' + card.title" width="180" height="240" loading="lazy" decoding="async" />\r
            } @else {\r
              <div class="cover cover-fallback" aria-hidden="true">Sem capa</div>\r
            }\r
          </div>\r
\r
          <div class="content">\r
            <div class="meta-line">\r
              <p class="journal">{{ card.journal }}</p>\r
\r
              <header class="meta-top">\r
                <span class="pill">{{ card.year }}</span>\r
                <span class="pill">{{ card.type }}</span>\r
              </header>\r
            </div>\r
\r
            <h3 class="title">\r
            <input\r
              type="checkbox"\r
              [checked]="isMarked(card.id)"\r
              (change)="toggleMarked(card.id, $event.target.checked)"\r
              title="Marcar/desmarcar trabalho"\r
              style="margin-right: 0.5em;"\r
            />\r
              <a class="title-link link" [href]="'/v/' + card.id" target="_blank" rel="noopener">{{ card.title }}</a>\r
            </h3>\r
\r
            <p class="authors">{{ card.authors }}</p>\r
\r
            @if (card.keywords.length) {\r
              <div class="keywords">\r
                @for (keyword of card.keywords; track keyword) {\r
                  <span class="keyword">{{ keyword }}</span>\r
                }\r
              </div>\r
            }\r
          </div>\r
        </li>\r
      }\r
    </ul>\r
\r
    @if (hasMore()) {\r
      <p class="loading-more">Role a tela para carregar mais resultados...</p>\r
    }\r
  </section>\r
</section>\r
`, styles: ['/* src/app/components/search-result/search-result.component.scss */\n.results-layout {\n  margin-top: 0.1rem;\n}\n.filters-stack {\n  display: grid;\n  gap: 0.75rem;\n}\n.results-count {\n  margin: 0.4rem 0 0.75rem;\n  font-family: "Raleway", sans-serif;\n  font-size: 0.86rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: var(--theme-hint);\n}\n.results {\n  display: grid;\n  gap: 1rem;\n  list-style: none;\n  margin: 1rem 0 0;\n  padding: 0;\n}\n.result-card {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: 92px 1fr;\n  padding: 0.9rem;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 82%, transparent);\n  border-radius: 0.85rem;\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--theme-sand) 42%, transparent) 0%,\n      transparent 55%),\n    var(--theme-card-bg);\n  box-shadow: 0 6px 18px rgba(16, 37, 66, 0.08);\n}\n.cover-wrap {\n  display: flex;\n}\n.cover {\n  width: 92px;\n  height: 130px;\n  border-radius: 0.6rem;\n  object-fit: cover;\n  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);\n  background: var(--theme-sand);\n}\n.cover-fallback {\n  display: grid;\n  place-items: center;\n  font-size: 0.72rem;\n  letter-spacing: 0.02em;\n  color: var(--theme-hint);\n  text-transform: uppercase;\n  font-weight: 700;\n  background:\n    repeating-linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--theme-sand) 85%, transparent),\n      color-mix(in srgb, var(--theme-sand) 85%, transparent) 8px,\n      color-mix(in srgb, var(--theme-line) 18%, transparent) 8px,\n      color-mix(in srgb, var(--theme-line) 18%, transparent) 16px);\n}\n.content {\n  min-width: 0;\n}\n.meta-line {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  width: 100%;\n  margin-bottom: 0.45rem;\n}\n.meta-line .journal {\n  margin-top: 0;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.meta-top {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 0.4rem;\n  margin-bottom: 0;\n}\n.pill {\n  display: inline-block;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--theme-hint);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 92%, transparent);\n  background: color-mix(in srgb, var(--theme-sand) 44%, transparent);\n}\n.score {\n  color: color-mix(in srgb, var(--theme-ink) 80%, var(--theme-hint));\n}\n.title {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.06rem;\n  line-height: 1.3;\n  color: var(--theme-ink);\n}\n.title-link {\n  color: var(--theme-ink);\n  text-decoration: none;\n}\n.title-link:hover,\n.title-link:focus-visible {\n  color: var(--theme-link);\n  text-decoration: underline;\n}\n.authors,\n.journal,\n.legend {\n  margin: 0;\n  margin-top: 0.4rem;\n  font-family: "Source Sans 3", sans-serif;\n  line-height: 1.35;\n}\n.authors {\n  color: var(--theme-ink);\n  font-weight: 100;\n  font-style: italic;\n}\n.journal {\n  color: var(--theme-hint);\n  font-size: 0.95rem;\n}\n.legend {\n  color: var(--theme-muted);\n  font-size: 0.92rem;\n}\n.keywords {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.38rem;\n  margin-top: 0.55rem;\n}\n.keyword {\n  font-size: 0.77rem;\n  line-height: 1;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.4rem;\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  border: 1px solid color-mix(in srgb, var(--theme-line) 80%, transparent);\n  color: var(--theme-hint);\n}\n.loading-more {\n  color: var(--theme-hint);\n  margin: 0.8rem 0 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n}\n@media (max-width: 640px) {\n  .result-card {\n    grid-template-columns: 76px 1fr;\n    gap: 0.75rem;\n    padding: 0.75rem;\n  }\n  .cover {\n    width: 76px;\n    height: 110px;\n  }\n  .title {\n    font-size: 0.98rem;\n  }\n}\n/*# sourceMappingURL=search-result.component.css.map */\n'] }]
  }], null, { results: [{
    type: Input
  }], sources: [{
    type: Input
  }], authors: [{
    type: Input
  }], keywords: [{
    type: Input
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultComponent, { className: "SearchResultComponent", filePath: "src/app/components/search-result/search-result.component.ts", lineNumber: 47 });
})();

// src/app/components/search-articles/search-articles.component.ts
function SearchArticlesComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "search.button"));
  }
}
function SearchArticlesComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "search.button"));
  }
}
function SearchArticlesComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/basket/selected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" | ", \u0275\u0275pipeBind1(2, 3, "search.selected"), " (", ctx_r0.markedCount, ") ");
  }
}
function SearchArticlesComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function SearchArticlesComponent_span_22_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearMarked());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "search.clear_selected"), " ");
  }
}
function SearchArticlesComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function SearchArticlesComponent_span_23_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectAllWorks());
    });
    \u0275\u0275text(1, " Selecionar Todos ");
    \u0275\u0275elementEnd();
  }
}
function SearchArticlesComponent_div_24_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r4);
  }
}
function SearchArticlesComponent_div_24_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r5 = ctx.$implicit;
    \u0275\u0275property("value", y_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r5);
  }
}
function SearchArticlesComponent_div_24_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "input", 35);
    \u0275\u0275listener("change", function SearchArticlesComponent_div_24_div_18_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCollectionChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pub_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate1("col-", pub_r7.value))("value", pub_r7.value)("checked", ctx_r0.filtersForm.value.collection.includes(pub_r7.value));
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("col-", pub_r7.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0", \u0275\u0275pipeBind1(4, 7, "search.filters.types." + pub_r7.value));
  }
}
function SearchArticlesComponent_div_24_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 37);
    \u0275\u0275elementStart(2, "label", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate1("field-", field_r8.value))("value", field_r8.value)("checked", ctx_r0.filtersForm.value.fields === field_r8.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("field-", field_r8.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "search.filters.fields." + field_r8.value));
  }
}
function SearchArticlesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "form", 24)(2, "div", 25)(3, "label", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 27);
    \u0275\u0275template(7, SearchArticlesComponent_div_24_option_7_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25)(9, "label", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 30);
    \u0275\u0275template(13, SearchArticlesComponent_div_24_option_13_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "label", 32);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SearchArticlesComponent_div_24_div_18_Template, 5, 9, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 31)(20, "label", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SearchArticlesComponent_div_24_div_23_Template, 5, 9, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.filtersForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "search.filters.year_start"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.yearsStart);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "search.filters.year_end"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.yearsEnd);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "search.filters.publication_type"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.publicationTypes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "search.filters.search_field"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.searchFields);
  }
}
function SearchArticlesComponent_Conditional_25_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-search-result", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("results", ctx_r0.apiResults())("sources", ctx_r0.filterSources())("authors", ctx_r0.filterAuthors())("keywords", ctx_r0.filterKeywords());
  }
}
function SearchArticlesComponent_Conditional_25_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "search.empty"), " ");
  }
}
function SearchArticlesComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 39);
    \u0275\u0275template(2, SearchArticlesComponent_Conditional_25_ng_container_2_Template, 2, 4, "ng-container", 9)(3, SearchArticlesComponent_Conditional_25_ng_container_3_Template, 4, 3, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hasResults());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading() && !ctx_r0.hasResults());
  }
}
function SearchArticlesComponent_div_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchArticlesComponent_div_26_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchArticlesComponent_div_26_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchArticlesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "section", 43);
    \u0275\u0275template(2, SearchArticlesComponent_div_26_ng_container_2_Template, 1, 0, "ng-container", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 45);
    \u0275\u0275template(4, SearchArticlesComponent_div_26_ng_container_4_Template, 1, 0, "ng-container", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 46);
    \u0275\u0275template(6, SearchArticlesComponent_div_26_ng_container_6_Template, 1, 0, "ng-container", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.areaNewsComponent);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.areaStatisticsComponent);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.areaEventsComponent);
  }
}
var SearchArticlesComponent = class _SearchArticlesComponent {
  router;
  loadingImg = "/assets/img/loading.svg";
  basketService = inject(BasketService);
  brapciApiService = inject(BrapciApiService);
  areaNewsComponent = AreaNewsComponent;
  areaEventsComponent = AreaEventsComponent;
  areaStatisticsComponent = AreaStatisticsComponent;
  showJsonPanel = signal(false, ...ngDevMode ? [{ debugName: "showJsonPanel" }] : []);
  showFilters = false;
  search = false;
  filtersForm;
  yearsStart = [];
  yearsEnd = [];
  publicationTypes = [
    { label: "Revistas Brasileiras", value: "JA" },
    { label: "Revistas estrangeiras", value: "JE" },
    { label: "Anais de eventos", value: "EV" },
    { label: "Livros e cap\xEDtulo", value: "BK" }
  ];
  searchFields = [
    { label: "T\xEDtulo", value: "TI" },
    { label: "Resumo", value: "AB" },
    { label: "Palavras-chave", value: "KW" },
    { label: "Autor", value: "AU" },
    { label: "Todos os campos", value: "FL" }
  ];
  constructor(router) {
    this.router = router;
    this.initYears();
    const allTypes = this.publicationTypes.map((t) => t.value);
    this.filtersForm = new FormGroup({
      year_start: new FormControl(this.yearsStart[0]),
      year_end: new FormControl(this.yearsEnd[0]),
      collection: new FormControl(allTypes),
      fields: new FormControl("FL")
    });
  }
  initYears() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let y = 1962; y <= currentYear + 1; y++) {
      this.yearsStart.push(y);
    }
    for (let y = currentYear + 1; y >= 1962; y--) {
      this.yearsEnd.push(y);
    }
  }
  onCollectionChange(event) {
    const value = event.target.value;
    const checked = event.target.checked;
    const collection = this.filtersForm.value.collection || [];
    if (checked) {
      if (!collection.includes(value)) {
        this.filtersForm.patchValue({ collection: [...collection, value] });
      }
    } else {
      this.filtersForm.patchValue({ collection: collection.filter((v) => v !== value) });
    }
  }
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  apiResults = signal([], ...ngDevMode ? [{ debugName: "apiResults" }] : []);
  filterSources = signal([], ...ngDevMode ? [{ debugName: "filterSources" }] : []);
  filterAuthors = signal([], ...ngDevMode ? [{ debugName: "filterAuthors" }] : []);
  filterKeywords = signal([], ...ngDevMode ? [{ debugName: "filterKeywords" }] : []);
  rawSearchResponse = signal(null, ...ngDevMode ? [{ debugName: "rawSearchResponse" }] : []);
  query = signal('"Indexa\xE7\xE3o Autom\xE1tica" OR "Indexa\xE7\xE3o Manual"', ...ngDevMode ? [{ debugName: "query" }] : []);
  hasResults = computed(() => this.apiResults().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  searchResponseJson = computed(() => {
    const response = this.rawSearchResponse();
    if (response === null || response === void 0) {
      return "";
    }
    try {
      return JSON.stringify(response, null, 2);
    } catch {
      return "[Nao foi possivel serializar a resposta da consulta]";
    }
  }, ...ngDevMode ? [{ debugName: "searchResponseJson" }] : []);
  get works() {
    const response = this.rawSearchResponse();
    if (response && typeof response === "object" && "works" in response) {
      return this.asArray(response.works);
    }
    return [];
  }
  get markedCount() {
    try {
      const marked = localStorage.getItem("marked");
      return !!marked ? JSON.parse(marked).length : 0;
    } catch {
      return 0;
    }
  }
  get hasMarked() {
    try {
      const marked = localStorage.getItem("marked");
      return !!marked && JSON.parse(marked).length > 0;
    } catch {
      return false;
    }
  }
  clearMarked() {
    if (window.confirm("Deseja realmente desmarcar todos os trabalhos selecionados?")) {
      window.localStorage.setItem("marked", "[]");
      this.basketService.changed.emit();
    }
  }
  showResultsPanel() {
    this.showJsonPanel.set(false);
  }
  showJsonResponsePanel() {
    this.showJsonPanel.set(true);
  }
  searchInBrapci() {
    const term = this.query().trim();
    const filters = [
      { name: "year_start", value: this.filtersForm.value.year_start },
      { name: "year_end", value: this.filtersForm.value.year_end },
      { name: "collection", value: this.filtersForm.value.collection },
      { name: "fields", value: this.filtersForm.value.fields }
    ];
    if (!term) {
      this.search = false;
      this.showJsonPanel.set(false);
      this.apiResults.set([]);
      this.filterSources.set([]);
      this.filterAuthors.set([]);
      this.filterKeywords.set([]);
      this.rawSearchResponse.set(null);
      return;
    }
    this.search = true;
    this.loading.set(true);
    this.brapciApiService.search(term, filters).subscribe({
      next: (response) => {
        const normalizedResults = this.normalizeApiResponse(response);
        const filters2 = this.normalizeFilters(response);
        this.loading.set(false);
        this.rawSearchResponse.set(response);
        this.apiResults.set(normalizedResults);
        this.filterSources.set(filters2.sources);
        this.filterAuthors.set(filters2.authors);
        this.filterKeywords.set(filters2.keywords);
        if (!normalizedResults.length) {
          console.warn("[search-articles] Nenhum resultado exibivel apos normalizacao", response);
        }
      },
      error: (error) => {
        console.error("[search-articles] Erro na consulta da API", error);
        this.loading.set(false);
        this.apiResults.set([]);
        this.filterSources.set([]);
        this.filterAuthors.set([]);
        this.filterKeywords.set([]);
        this.rawSearchResponse.set({ error: "Erro ao consultar a API" });
      }
    });
  }
  normalizeFilters(response) {
    if (!response || typeof response !== "object") {
      return { sources: [], authors: [], keywords: [] };
    }
    const root = response;
    if (!root["filters"] || typeof root["filters"] !== "object") {
      return { sources: [], authors: [], keywords: [] };
    }
    const filters = root["filters"];
    return {
      sources: this.asArray(filters["sources"]),
      authors: this.asArray(filters["authors"]),
      keywords: this.asArray(filters["keywords"])
    };
  }
  asArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (value && typeof value === "object") {
      return Object.entries(value).map(([key, count]) => ({
        key,
        count
      }));
    }
    return [];
  }
  selectAllWorks() {
    const response = this.rawSearchResponse();
    const works = this.asArray(response && typeof response === "object" && "works" in response ? response.works : []);
    const ids = works.map((work) => {
      if (work && typeof work === "object" && "id" in work) {
        return Number(work.id);
      }
      return null;
    }).filter((id) => id !== null);
    window.localStorage.setItem("marked", JSON.stringify(ids));
    this.basketService.changed.emit();
  }
  normalizeApiResponse(response) {
    if (Array.isArray(response)) {
      return response;
    }
    if (response && typeof response === "object") {
      const data = response;
      if (Array.isArray(data["works"])) {
        return data["works"];
      }
      if (Array.isArray(data["results"])) {
        return data["results"];
      }
      if (Array.isArray(data["items"])) {
        return data["items"];
      }
      if (Array.isArray(data["data"])) {
        return data["data"];
      }
    }
    return [];
  }
  static \u0275fac = function SearchArticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchArticlesComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchArticlesComponent, selectors: [["app-search-articles"]], decls: 27, vars: 23, consts: [["id", "search", "aria-labelledby", "search-title", "itemprop", "mainEntity", "itemscope", "", "itemtype", "https://schema.org/Dataset", 1, "col-12"], [1, "cardx", "h-100x", "shadow-sm", "border-0"], [1, "card-body"], ["id", "search-title", 1, "search-title"], [1, "search-form", "mb-0", 3, "ngSubmit"], ["for", "query", 1, "form-label", "mb-0"], [1, "input-group", "mt-0"], ["id", "query", "name", "query", "rows", "3", 1, "form-control", "border", "border-secondary", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "d-inline-flex align-items-center gap-2", 4, "ngIf"], [1, "search-actions"], ["type", "button", 1, "link", "search-action-link", 3, "click"], ["type", "button", "class", "link search-action-link text-success", 3, "routerLink", 4, "ngIf"], ["type", "button", "class", "link search-action-link text-danger btn-outline-danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "link search-action-link", 3, "click", 4, "ngIf"], ["class", "search-filters", 4, "ngIf"], [1, "search-results-grid", "mt-4"], ["class", "idle-layout mt-5", 4, "ngIf"], [1, "d-inline-flex", "align-items-center", "gap-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "link", "search-action-link", "text-success", 3, "routerLink"], ["type", "button", 1, "link", "search-action-link", "text-danger", "btn-outline-danger", 3, "click"], [1, "search-filters"], [1, "search-filters-form", 3, "formGroup"], [1, "search-filter-col-year"], ["for", "year_start"], ["id", "year_start", "formControlName", "year_start", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "year_end"], ["id", "year_end", "formControlName", "year_end", 1, "form-control"], [1, "search-filter-col-wide"], [1, "search-filter-title"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "change", "value", "checked", "id"], [3, "for"], ["type", "radio", "name", "fields", "formControlName", "fields", 3, "value", "id", "checked"], [1, "ms-1", 3, "for"], [1, "search-results-main"], [3, "results", "sources", "authors", "keywords"], [1, "hint", "mb-0", "mt-3"], [1, "idle-layout", "mt-5"], [1, "idle-col", "idle-col-news"], [4, "ngComponentOutlet"], [1, "idle-col", "idle-col-stats"], [1, "idle-col", "idle-col-events"]], template: function SearchArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function SearchArticlesComponent_Template_form_ngSubmit_6_listener() {
        return ctx.searchInBrapci();
      });
      \u0275\u0275elementStart(7, "label", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "textarea", 7);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("ngModelChange", function SearchArticlesComponent_Template_textarea_ngModelChange_11_listener($event) {
        return ctx.query.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275template(14, SearchArticlesComponent_span_14_Template, 3, 3, "span", 9)(15, SearchArticlesComponent_span_15_Template, 5, 3, "span", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
      \u0275\u0275listener("click", function SearchArticlesComponent_Template_span_click_17_listener() {
        return ctx.showFilters = !ctx.showFilters;
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, SearchArticlesComponent_span_20_Template, 3, 5, "span", 13);
      \u0275\u0275text(21, " | ");
      \u0275\u0275template(22, SearchArticlesComponent_span_22_Template, 3, 3, "span", 14)(23, SearchArticlesComponent_span_23_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, SearchArticlesComponent_div_24_Template, 24, 17, "div", 16);
      \u0275\u0275conditionalCreate(25, SearchArticlesComponent_Conditional_25_Template, 4, 2, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, SearchArticlesComponent_div_26_Template, 7, 3, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "search.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, "search.input"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(12, 19, "search.input")))("ngModel", ctx.query());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 21, "search.filters.title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasMarked);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasMarked);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.works.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFilters);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.search ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.search);
    }
  }, dependencies: [
    CommonModule,
    NgComponentOutlet,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterModule,
    RouterLink,
    TranslateModule,
    SearchResultComponent,
    TranslatePipe
  ], styles: ["\n\n.search-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.6rem;\n}\n.search-title[_ngcontent-%COMP%] {\n  color: var(--theme-title);\n  text-align: left;\n  line-height: 10px;\n  size: 2rem;\n}\n.hint[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n}\n.search-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.search-action-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.search-actions-separator[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--theme-muted);\n}\n.search-filters[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n}\n.search-filters-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.search-filter-col-year[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.search-filter-col-wide[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n.search-filter-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.search-results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n  width: 100%;\n}\n.search-results-main[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n.search-json-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n  align-self: start;\n}\n.search-json-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.search-json-tab[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 999px;\n  padding: 0.45rem 0.75rem;\n  font-size: 0.78rem;\n  cursor: pointer;\n}\n.search-json-tab.active[_ngcontent-%COMP%] {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n  color: #fff;\n}\n.search-json-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n}\n.search-json-card-help[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.search-json-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.search-json-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  color: var(--theme-title);\n}\n.search-json-subtitle[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 0.8rem;\n  color: var(--theme-muted);\n}\n.search-json-pre[_ngcontent-%COMP%] {\n  margin: 0;\n  max-height: 60vh;\n  overflow: auto;\n  padding: 0.75rem;\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-card-bg) 70%, var(--theme-line));\n  color: var(--theme-ink);\n  font-size: 0.74rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.search-json-empty[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--theme-muted);\n}\n.idle-layout[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.idle-col[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n  min-height: 100%;\n}\n.idle-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  color: var(--theme-title);\n}\n.idle-text[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n.idle-links[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.idle-link[_ngcontent-%COMP%] {\n  color: var(--bs-link-color);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.idle-col-events[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n.idle-col-news[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n.idle-col-stats[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n@media (max-width: 991.98px) {\n  .idle-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .search-results-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .search-json-sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=search-articles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchArticlesComponent, [{
    type: Component,
    args: [{ selector: "app-search-articles", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      TranslateModule,
      SearchResultComponent
    ], template: `<article\r
  class="col-12"\r
  id="search"\r
  aria-labelledby="search-title"\r
  itemprop="mainEntity"\r
  itemscope\r
  itemtype="https://schema.org/Dataset"\r
>\r
  <div class="cardx h-100x shadow-sm border-0">\r
    <div class="card-body">\r
      <h2 id="search-title" class="search-title">{{ 'search.title' | translate }}</h2>\r
\r
      <form (ngSubmit)="searchInBrapci()" class="search-form mb-0">\r
        <label for="query" class="form-label mb-0">{{ 'search.input' | translate }}</label>\r
        <div class="input-group mt-0">\r
          <textarea\r
            id="query"\r
            name="query"\r
            class="form-control border border-secondary"\r
            [ngModel]="query()"\r
            (ngModelChange)="query.set($event)"\r
            rows="3"\r
            placeholder="{{ 'search.input' | translate }}"\r
          ></textarea>\r
          <button type="submit" class="btn btn-primary" [disabled]="loading()">\r
            <span *ngIf="!loading()">{{ 'search.button' | translate }}</span>\r
            <span *ngIf="loading()" class="d-inline-flex align-items-center gap-2">\r
              <span\r
                class="spinner-border spinner-border-sm"\r
                role="status"\r
                aria-hidden="true"\r
              ></span>\r
              <span>{{ 'search.button' | translate }}</span>\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
\r
      <!-- Filtros da Pesquisa -->\r
      <div class="search-actions">\r
        <span type="button" (click)="showFilters = !showFilters" class="link search-action-link">\r
          {{ 'search.filters.title' | translate }}\r
        </span>\r
\r
        <span\r
          *ngIf="hasMarked"\r
          type="button"\r
          class="link search-action-link text-success"\r
          [routerLink]="'/basket/selected'"\r
        >\r
          | {{ 'search.selected' | translate }} ({{ markedCount }})\r
        </span>\r
        |\r
        <span\r
          *ngIf="hasMarked"\r
          type="button"\r
          class="link search-action-link text-danger btn-outline-danger"\r
          (click)="clearMarked()"\r
        >\r
          {{ 'search.clear_selected' | translate }}\r
        </span>\r
\r
        <span\r
          *ngIf="works.length > 0"\r
          type="button"\r
          class="link search-action-link"\r
          (click)="selectAllWorks()"\r
        >\r
          Selecionar Todos\r
        </span>\r
      </div>\r
\r
      <div *ngIf="showFilters" class="search-filters">\r
        <form [formGroup]="filtersForm" class="search-filters-form">\r
          <!-- Coluna 1: Anos -->\r
          <div class="search-filter-col-year">\r
            <label for="year_start">{{ 'search.filters.year_start' | translate }}</label>\r
            <select id="year_start" formControlName="year_start" class="form-control">\r
              <option *ngFor="let y of yearsStart" [value]="y">{{ y }}</option>\r
            </select>\r
          </div>\r
          <div class="search-filter-col-year">\r
            <label for="year_end">{{ 'search.filters.year_end' | translate }}</label>\r
            <select id="year_end" formControlName="year_end" class="form-control">\r
              <option *ngFor="let y of yearsEnd" [value]="y">{{ y }}</option>\r
            </select>\r
          </div>\r
          <!-- Coluna 2: Tipo de publica\xE7\xE3o -->\r
          <div class="search-filter-col-wide">\r
            <label class="search-filter-title">{{\r
              'search.filters.publication_type' | translate\r
            }}</label>\r
            <div *ngFor="let pub of publicationTypes">\r
              <input\r
                type="checkbox"\r
                [value]="pub.value"\r
                (change)="onCollectionChange($event)"\r
                [checked]="filtersForm.value.collection.includes(pub.value)"\r
                id="col-{{ pub.value }}"\r
              />\r
              <label for="col-{{ pub.value }}"\r
                >&nbsp;{{ 'search.filters.types.' + pub.value | translate }}</label\r
              >\r
            </div>\r
          </div>\r
          <!-- Coluna 3: Local de pesquisa -->\r
          <div class="search-filter-col-wide">\r
            <label class="search-filter-title">{{\r
              'search.filters.search_field' | translate\r
            }}</label>\r
            <div *ngFor="let field of searchFields">\r
              <input\r
                type="radio"\r
                name="fields"\r
                [value]="field.value"\r
                formControlName="fields"\r
                id="field-{{ field.value }}"\r
                [checked]="filtersForm.value.fields === field.value"\r
              />\r
              <label for="field-{{ field.value }}" class="ms-1">{{\r
                'search.filters.fields.' + field.value | translate\r
              }}</label>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
\r
      @if (search) {\r
        <div class="search-results-grid mt-4">\r
          <div class="search-results-main">\r
            <ng-container *ngIf="hasResults()">\r
              <app-search-result\r
                [results]="apiResults()"\r
                [sources]="filterSources()"\r
                [authors]="filterAuthors()"\r
                [keywords]="filterKeywords()"\r
              ></app-search-result>\r
            </ng-container>\r
\r
            <ng-container *ngIf="!loading() && !hasResults()">\r
              <p class="hint mb-0 mt-3">\r
                {{ 'search.empty' | translate }}\r
              </p>\r
            </ng-container>\r
          </div>\r
\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!search" class="idle-layout mt-5">\r
    <section class="idle-col idle-col-news">\r
      <ng-container *ngComponentOutlet="areaNewsComponent"></ng-container>\r
    </section>\r
\r
    <section class="idle-col idle-col-stats">\r
      <ng-container *ngComponentOutlet="areaStatisticsComponent"></ng-container>\r
    </section>\r
\r
    <section class="idle-col idle-col-events">\r
      <ng-container *ngComponentOutlet="areaEventsComponent"></ng-container>\r
    </section>\r
  </div>\r
</article>\r
`, styles: ["/* src/app/components/search-articles/search-articles.component.scss */\n.search-form {\n  display: grid;\n  gap: 0.6rem;\n}\n.search-title {\n  color: var(--theme-title);\n  text-align: left;\n  line-height: 10px;\n  size: 2rem;\n}\n.hint {\n  color: var(--theme-hint);\n}\n.search-actions {\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.search-action-link {\n  font-weight: 400;\n  font-size: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.search-actions-separator {\n  font-weight: 600;\n  color: var(--theme-muted);\n}\n.search-filters {\n  border: 1px solid var(--theme-line);\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n}\n.search-filters-form {\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.search-filter-col-year {\n  min-width: 100px;\n}\n.search-filter-col-wide {\n  min-width: 220px;\n}\n.search-filter-title {\n  font-weight: 600;\n}\n.search-results-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n  width: 100%;\n}\n.search-results-main {\n  min-width: 0;\n  width: 100%;\n}\n.search-json-sidebar {\n  position: sticky;\n  top: 1rem;\n  align-self: start;\n}\n.search-json-toolbar {\n  display: flex;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.search-json-tab {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 999px;\n  padding: 0.45rem 0.75rem;\n  font-size: 0.78rem;\n  cursor: pointer;\n}\n.search-json-tab.active {\n  background: var(--bs-primary);\n  border-color: var(--bs-primary);\n  color: #fff;\n}\n.search-json-card {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n}\n.search-json-card-help {\n  color: var(--theme-muted);\n}\n.search-json-header {\n  margin-bottom: 0.75rem;\n}\n.search-json-title {\n  margin: 0;\n  font-size: 0.98rem;\n  color: var(--theme-title);\n}\n.search-json-subtitle {\n  margin: 0.2rem 0 0;\n  font-size: 0.8rem;\n  color: var(--theme-muted);\n}\n.search-json-pre {\n  margin: 0;\n  max-height: 60vh;\n  overflow: auto;\n  padding: 0.75rem;\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-card-bg) 70%, var(--theme-line));\n  color: var(--theme-ink);\n  font-size: 0.74rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.search-json-empty {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--theme-muted);\n}\n.idle-layout {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.idle-col {\n  border: 1px solid var(--theme-line);\n  border-radius: 12px;\n  background: var(--theme-card-bg);\n  padding: 1rem;\n  min-height: 100%;\n}\n.idle-title {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  color: var(--theme-title);\n}\n.idle-text {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: var(--theme-muted);\n}\n.idle-links {\n  display: grid;\n  gap: 0.5rem;\n}\n.idle-link {\n  color: var(--bs-link-color);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.idle-col-events {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n.idle-col-news {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n.idle-col-stats {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n@media (max-width: 991.98px) {\n  .idle-layout {\n    grid-template-columns: 1fr;\n  }\n  .search-results-grid {\n    grid-template-columns: 1fr;\n  }\n  .search-json-sidebar {\n    position: static;\n  }\n}\n/*# sourceMappingURL=search-articles.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchArticlesComponent, { className: "SearchArticlesComponent", filePath: "src/app/components/search-articles/search-articles.component.ts", lineNumber: 27 });
})();

// src/app/components/home-search/home-search.component.ts
var HomeSearchComponent = class _HomeSearchComponent {
  static \u0275fac = function HomeSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSearchComponent, selectors: [["app-home-search"]], decls: 7, vars: 0, consts: [["role", "banner", 1, "hero", "pt-3"], [1, "container", "text-center"], ["src", "assets/img/brand_brapci_shadown.png", "alt", "Brapci", "width", "200", "height", "200", "loading", "lazy", "decoding", "async", 1, "hero-logo", "text-center"], ["itemscope", "", "itemtype", "https://schema.org/WebPage", 1, "layout", "py-4"], [1, "container"], [1, "row", "g-4"]], template: function HomeSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "app-search-articles");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, SearchArticlesComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--theme-line);\n}\n.hero-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  max-width: min(520px, 82vw);\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=home-search.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSearchComponent, [{
    type: Component,
    args: [{ selector: "app-home-search", imports: [CommonModule, SearchArticlesComponent], template: '<header class="hero pt-3" role="banner">\r\n  <div class="container text-center">\r\n    <img class="hero-logo text-center" src="assets/img/brand_brapci_shadown.png" alt="Brapci" width="200" height="200" loading="lazy" decoding="async" />\r\n  </div>\r\n</header>\r\n\r\n<main class="layout py-4" itemscope itemtype="https://schema.org/WebPage">\r\n  <div class="container">\r\n    <div class="row g-4">\r\n      <app-search-articles></app-search-articles>\r\n    </div>\r\n  </div>\r\n</main>\r\n', styles: ["/* src/app/components/home-search/home-search.component.scss */\n.hero {\n  border-bottom: 1px solid var(--theme-line);\n}\n.hero-logo {\n  display: inline-block;\n  height: auto;\n  max-width: min(520px, 82vw);\n  width: 100%;\n}\n.layout {\n  flex: 1;\n}\n/*# sourceMappingURL=home-search.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSearchComponent, { className: "HomeSearchComponent", filePath: "src/app/components/home-search/home-search.component.ts", lineNumber: 11 });
})();

// src/app/pages/home/home.page.ts
var HomePage = class _HomePage {
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], decls: 1, vars: 0, template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-home-search");
    }
  }, dependencies: [HomeSearchComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{
      selector: "app-home-page",
      imports: [HomeSearchComponent],
      template: "<app-home-search></app-home-search>"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.page.ts", lineNumber: 9 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-GP7E5JC2.js.map
