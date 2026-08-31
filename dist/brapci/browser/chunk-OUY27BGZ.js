import {
  identity_default,
  path_default
} from "./chunk-NRHQYV2G.js";
import {
  BreadcrumbsComponent
} from "./chunk-RFP7KIPN.js";
import "./chunk-Y3JQWDW7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FC3OORFJ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3F47I5MF.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  Input,
  NgIf,
  computed,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Y3FCEOIS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UKK5MWW6.js";

// src/app/pages/pq/pq-active-by-year.component.ts
var _forTrack0 = ($index, $item) => $item.year;
var _forTrack1 = ($index, $item) => $item.label;
function PqActiveByYearComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const current_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(current_r1.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("bolsas em ", current_r1.year);
  }
}
function PqActiveByYearComponent_For_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 17);
  }
  if (rf & 2) {
    const modality_r5 = ctx.$implicit;
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r3.modalityShare(modality_r5.count, item_r3.total), "%")("background-color", ctx_r3.modalityColor(modality_r5.label));
    \u0275\u0275attribute("aria-label", modality_r5.label + ": " + modality_r5.count)("title", modality_r5.label + ": " + modality_r5.count);
  }
}
function PqActiveByYearComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function PqActiveByYearComponent_For_11_Template_button_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectYear(item_r3.year));
    });
    \u0275\u0275domElementStart(1, "span", 11)(2, "span", 12)(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 14);
    \u0275\u0275repeaterCreate(6, PqActiveByYearComponent_For_11_For_7_Template, 1, 6, "span", 15, _forTrack1);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_26_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.selectedYear() === item_r3.year);
    \u0275\u0275attribute("aria-label", item_r3.year + ": " + item_r3.total + " bolsas ativas")("aria-pressed", ctx_r3.selectedYear() === item_r3.year);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r3.barHeight(item_r3.total), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.total);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r3.modalities);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.showYearLabel(\u0275$index_26_r6) ? item_r3.year : "");
  }
}
function PqActiveByYearComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const label_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r3.modalityColor(label_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r7);
  }
}
function PqActiveByYearComponent_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i");
    \u0275\u0275domElementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r3.modalityColor(item_r8.label));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.count);
  }
}
function PqActiveByYearComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 18);
    \u0275\u0275repeaterCreate(4, PqActiveByYearComponent_Conditional_15_For_5_Template, 5, 4, "span", null, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const current_r9 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Modalidades em ", current_r9.year);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(current_r9.modalities);
  }
}
var PqActiveByYearComponent = class _PqActiveByYearComponent {
  data = {};
  years = signal([], ...ngDevMode ? [{ debugName: "years" }] : []);
  selectedYear = signal("", ...ngDevMode ? [{ debugName: "selectedYear" }] : []);
  maximum = computed(() => Math.max(...this.years().map((item) => item.total), 1), ...ngDevMode ? [{ debugName: "maximum" }] : []);
  selected = computed(() => this.years().find((item) => item.year === this.selectedYear()) ?? this.years().at(-1), ...ngDevMode ? [{ debugName: "selected" }] : []);
  modalityLabels = computed(() => {
    const labels = new Set(this.years().flatMap((item) => item.modalities.map((modality) => modality.label)));
    return [...labels].sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
  }, ...ngDevMode ? [{ debugName: "modalityLabels" }] : []);
  ngOnChanges(changes) {
    if (!changes["data"])
      return;
    const items = Object.entries(this.data ?? {}).map(([year, rawModalities]) => {
      const normalized = /* @__PURE__ */ new Map();
      Object.entries(rawModalities ?? {}).forEach(([label, count]) => {
        const cleanLabel = label.trim();
        normalized.set(cleanLabel, (normalized.get(cleanLabel) ?? 0) + Number(count || 0));
      });
      const modalities = [...normalized.entries()].map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
      return { year, modalities, total: modalities.reduce((sum, item) => sum + item.count, 0) };
    }).sort((a, b) => Number(a.year) - Number(b.year));
    this.years.set(items);
    if (!items.some((item) => item.year === this.selectedYear())) {
      this.selectedYear.set(items.at(-1)?.year ?? "");
    }
  }
  selectYear(year) {
    this.selectedYear.set(year);
  }
  barHeight(total) {
    return Math.max(total / this.maximum() * 100, 2);
  }
  modalityShare(count, total) {
    return total ? count / total * 100 : 0;
  }
  modalityColor(label) {
    const index = Math.max(this.modalityLabels().indexOf(label), 0);
    return `var(--pq-history-orange-${index % 12 + 1})`;
  }
  showYearLabel(index) {
    const item = this.years()[index];
    return index === 0 || index === this.years().length - 1 || Number(item?.year) % 5 === 0;
  }
  static \u0275fac = function PqActiveByYearComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqActiveByYearComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqActiveByYearComponent, selectors: [["app-pq-active-by-year"]], inputs: { data: "data" }, features: [\u0275\u0275NgOnChangesFeature], decls: 16, vars: 4, consts: [["aria-labelledby", "pq-history-title", 1, "history-panel"], [1, "history-heading"], [1, "history-eyebrow"], ["id", "pq-history-title"], ["aria-live", "polite", 1, "selected-total"], [1, "chart-scroll"], ["role", "group", "aria-label", "Selecione um ano para ver as modalidades", 1, "year-chart"], ["type", "button", 1, "year-column", 3, "selected"], ["aria-label", "Legenda das modalidades", 1, "chart-legend"], [1, "modality-detail"], ["type", "button", 1, "year-column", 3, "click"], [1, "bar-slot"], [1, "bar-group"], [1, "bar-value"], [1, "year-bar"], [1, "bar-segment", 3, "height", "background-color"], [1, "year-label"], [1, "bar-segment"], [1, "modality-chips"]], template: function PqActiveByYearComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "S\xE9rie hist\xF3rica");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 3);
      \u0275\u0275text(6, "Bolsas ativas por ano");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, PqActiveByYearComponent_Conditional_7_Template, 5, 2, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275repeaterCreate(10, PqActiveByYearComponent_For_11_Template, 10, 8, "button", 7, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, PqActiveByYearComponent_For_14_Template, 3, 3, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(15, PqActiveByYearComponent_Conditional_15_Template, 6, 1, "div", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_0_0 = ctx.selected()) ? 7 : -1, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + ctx.years().length + ", minmax(14px, 1fr))");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.years());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.modalityLabels());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_4_0 = ctx.selected()) ? 15 : -1, tmp_4_0);
    }
  }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  --pq-history-orange-1: #7f3518;\n  --pq-history-orange-2: #96421b;\n  --pq-history-orange-3: #ad501e;\n  --pq-history-orange-4: #c35e22;\n  --pq-history-orange-5: #d66c27;\n  --pq-history-orange-6: #e47b30;\n  --pq-history-orange-7: #ed8b3d;\n  --pq-history-orange-8: #f19b4d;\n  --pq-history-orange-9: #f4aa60;\n  --pq-history-orange-10: #f6ba76;\n  --pq-history-orange-11: #f8c98e;\n  --pq-history-orange-12: #f9d8aa;\n  display: block;\n  margin-bottom: 1rem;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%] {\n  --pq-history-orange-1: #a94c22;\n  --pq-history-orange-2: #bc5927;\n  --pq-history-orange-3: #ce672c;\n  --pq-history-orange-4: #dc7532;\n  --pq-history-orange-5: #e7843b;\n  --pq-history-orange-6: #ee9347;\n  --pq-history-orange-7: #f2a255;\n  --pq-history-orange-8: #f5b166;\n  --pq-history-orange-9: #f7bf79;\n  --pq-history-orange-10: #f9cc8e;\n  --pq-history-orange-11: #fbd9a5;\n  --pq-history-orange-12: #fce5bf;\n}\n.history-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.history-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.history-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent, #9a654d);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.selected-total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.selected-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.65rem;\n  line-height: 1;\n}\n.selected-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.chart-scroll[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  overflow-x: auto;\n}\n.year-chart[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 850px;\n  height: 230px;\n  grid-template-columns: repeat(var(--year-count, 37), minmax(14px, 1fr));\n  align-items: stretch;\n  border-bottom: 1px solid var(--theme-line);\n}\n.year-column[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  height: 100%;\n  padding: 0 2px;\n  grid-template-rows: 1fr 1.6rem;\n  border: 0;\n  color: var(--theme-muted);\n  background: transparent;\n  text-align: center;\n}\n.year-column[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--theme-hint);\n  outline-offset: -2px;\n}\n.bar-slot[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  padding-top: 1rem;\n  align-items: flex-end;\n}\n.bar-group[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-height: 1.65rem;\n  grid-template-rows: 1.2rem 1fr;\n  transition: height 0.2s ease;\n}\n.bar-value[_ngcontent-%COMP%] {\n  align-self: center;\n  overflow: visible;\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  font-weight: 700;\n  line-height: 1;\n  opacity: 1;\n}\n.year-bar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 3px;\n  overflow: hidden;\n  flex-direction: column-reverse;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background: var(--theme-sand);\n}\n.bar-segment[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 1px;\n  transition: filter 0.15s ease;\n}\n.bar-segment[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.18);\n}\n.year-column.selected[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  color: var(--pq-accent, #9a654d);\n}\n.year-label[_ngcontent-%COMP%] {\n  padding-top: 0.35rem;\n  font-size: 0.65rem;\n}\n.year-column.selected[_ngcontent-%COMP%]   .year-label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-weight: 700;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 0.85rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.4rem 0.8rem;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.chart-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.modality-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.32rem;\n}\n.chart-legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.modality-chips[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.62rem;\n  height: 0.62rem;\n  flex: 0 0 0.62rem;\n  border-radius: 0.18rem;\n}\n.modality-detail[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n  gap: 1rem;\n}\n.modality-detail[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 0.82rem;\n}\n.modality-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.modality-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  color: var(--theme-ink);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.modality-chips[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--pq-accent, #9a654d);\n}\n@media (max-width: 575.98px) {\n  .history-panel[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n  }\n  .history-heading[_ngcontent-%COMP%], \n   .modality-detail[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .modality-detail[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.55rem;\n  }\n}\n/*# sourceMappingURL=pq-active-by-year.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqActiveByYearComponent, [{
    type: Component,
    args: [{ selector: "app-pq-active-by-year", standalone: true, imports: [CommonModule], template: `<article class="history-panel" aria-labelledby="pq-history-title">
  <div class="history-heading">
    <div>
      <span class="history-eyebrow">S\xE9rie hist\xF3rica</span>
      <h2 id="pq-history-title">Bolsas ativas por ano</h2>
    </div>
    @if (selected(); as current) {
      <div class="selected-total" aria-live="polite"><strong>{{ current.total }}</strong><span>bolsas em {{ current.year }}</span></div>
    }
  </div>

  <div class="chart-scroll">
    <div class="year-chart" [style.grid-template-columns]="'repeat(' + years().length + ', minmax(14px, 1fr))'" role="group" aria-label="Selecione um ano para ver as modalidades">
      @for (item of years(); track item.year; let index = $index) {
        <button
          type="button"
          class="year-column"
          [class.selected]="selectedYear() === item.year"
          [attr.aria-label]="item.year + ': ' + item.total + ' bolsas ativas'"
          [attr.aria-pressed]="selectedYear() === item.year"
          (click)="selectYear(item.year)"
        >
          <span class="bar-slot">
            <span class="bar-group" [style.height.%]="barHeight(item.total)">
              <span class="bar-value">{{ item.total }}</span>
              <span class="year-bar">
                @for (modality of item.modalities; track modality.label) {
                  <span
                    class="bar-segment"
                    [style.height.%]="modalityShare(modality.count, item.total)"
                    [style.background-color]="modalityColor(modality.label)"
                    [attr.aria-label]="modality.label + ': ' + modality.count"
                    [attr.title]="modality.label + ': ' + modality.count"
                  ></span>
                }
              </span>
            </span>
          </span>
          <span class="year-label">{{ showYearLabel(index) ? item.year : '' }}</span>
        </button>
      }
    </div>
  </div>

  <div class="chart-legend" aria-label="Legenda das modalidades">
    @for (label of modalityLabels(); track label) {
      <span><i [style.background-color]="modalityColor(label)"></i>{{ label }}</span>
    }
  </div>

  @if (selected(); as current) {
    <div class="modality-detail">
      <strong>Modalidades em {{ current.year }}</strong>
      <div class="modality-chips">
        @for (item of current.modalities; track item.label) {
          <span><i [style.background-color]="modalityColor(item.label)"></i><b>{{ item.label }}</b> {{ item.count }}</span>
        }
      </div>
    </div>
  }
</article>
`, styles: ['/* src/app/pages/pq/pq-active-by-year.component.scss */\n:host {\n  --pq-history-orange-1: #7f3518;\n  --pq-history-orange-2: #96421b;\n  --pq-history-orange-3: #ad501e;\n  --pq-history-orange-4: #c35e22;\n  --pq-history-orange-5: #d66c27;\n  --pq-history-orange-6: #e47b30;\n  --pq-history-orange-7: #ed8b3d;\n  --pq-history-orange-8: #f19b4d;\n  --pq-history-orange-9: #f4aa60;\n  --pq-history-orange-10: #f6ba76;\n  --pq-history-orange-11: #f8c98e;\n  --pq-history-orange-12: #f9d8aa;\n  display: block;\n  margin-bottom: 1rem;\n}\n:host-context(body.theme-master.theme-dark) {\n  --pq-history-orange-1: #a94c22;\n  --pq-history-orange-2: #bc5927;\n  --pq-history-orange-3: #ce672c;\n  --pq-history-orange-4: #dc7532;\n  --pq-history-orange-5: #e7843b;\n  --pq-history-orange-6: #ee9347;\n  --pq-history-orange-7: #f2a255;\n  --pq-history-orange-8: #f5b166;\n  --pq-history-orange-9: #f7bf79;\n  --pq-history-orange-10: #f9cc8e;\n  --pq-history-orange-11: #fbd9a5;\n  --pq-history-orange-12: #fce5bf;\n}\n.history-panel {\n  padding: 1.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  color: var(--theme-ink);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.history-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.history-eyebrow {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent, #9a654d);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh2 {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.selected-total {\n  text-align: right;\n}\n.selected-total strong {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.65rem;\n  line-height: 1;\n}\n.selected-total span {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.chart-scroll {\n  margin-top: 1.5rem;\n  overflow-x: auto;\n}\n.year-chart {\n  display: grid;\n  min-width: 850px;\n  height: 230px;\n  grid-template-columns: repeat(var(--year-count, 37), minmax(14px, 1fr));\n  align-items: stretch;\n  border-bottom: 1px solid var(--theme-line);\n}\n.year-column {\n  display: grid;\n  min-width: 0;\n  height: 100%;\n  padding: 0 2px;\n  grid-template-rows: 1fr 1.6rem;\n  border: 0;\n  color: var(--theme-muted);\n  background: transparent;\n  text-align: center;\n}\n.year-column:focus-visible {\n  outline: 2px solid var(--theme-hint);\n  outline-offset: -2px;\n}\n.bar-slot {\n  display: flex;\n  min-height: 0;\n  padding-top: 1rem;\n  align-items: flex-end;\n}\n.bar-group {\n  display: grid;\n  width: 100%;\n  min-height: 1.65rem;\n  grid-template-rows: 1.2rem 1fr;\n  transition: height 0.2s ease;\n}\n.bar-value {\n  align-self: center;\n  overflow: visible;\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  font-weight: 700;\n  line-height: 1;\n  opacity: 1;\n}\n.year-bar {\n  display: flex;\n  width: 100%;\n  min-height: 3px;\n  overflow: hidden;\n  flex-direction: column-reverse;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background: var(--theme-sand);\n}\n.bar-segment {\n  display: block;\n  width: 100%;\n  min-height: 1px;\n  transition: filter 0.15s ease;\n}\n.bar-segment:hover {\n  filter: brightness(1.18);\n}\n.year-column.selected .bar-value {\n  color: var(--pq-accent, #9a654d);\n}\n.year-label {\n  padding-top: 0.35rem;\n  font-size: 0.65rem;\n}\n.year-column.selected .year-label {\n  color: var(--theme-ink);\n  font-weight: 700;\n}\n.chart-legend {\n  display: flex;\n  padding-top: 0.85rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.4rem 0.8rem;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.chart-legend span,\n.modality-chips span {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.32rem;\n}\n.chart-legend i,\n.modality-chips i {\n  display: inline-block;\n  width: 0.62rem;\n  height: 0.62rem;\n  flex: 0 0 0.62rem;\n  border-radius: 0.18rem;\n}\n.modality-detail {\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n  gap: 1rem;\n}\n.modality-detail > strong {\n  flex: 0 0 auto;\n  font-size: 0.82rem;\n}\n.modality-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.modality-chips span {\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  color: var(--theme-ink);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.modality-chips b {\n  color: var(--pq-accent, #9a654d);\n}\n@media (max-width: 575.98px) {\n  .history-panel {\n    padding: 1.1rem;\n  }\n  .history-heading,\n  .modality-detail {\n    align-items: flex-start;\n  }\n  .modality-detail {\n    flex-direction: column;\n    gap: 0.55rem;\n  }\n}\n/*# sourceMappingURL=pq-active-by-year.component.css.map */\n'] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqActiveByYearComponent, { className: "PqActiveByYearComponent", filePath: "src/app/pages/pq/pq-active-by-year.component.ts", lineNumber: 19 });
})();

// src/app/pages/pq/pq-applications.component.ts
var _forTrack02 = ($index, $item) => $item.year;
var _forTrack12 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.id_bb + $item.inicio;
function PqApplicationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const current_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(current_r1.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("concess\xF5es em ", current_r1.year);
  }
}
function PqApplicationsComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 30);
    \u0275\u0275domListener("click", function PqApplicationsComponent_For_40_Template_button_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectYear(item_r3.year));
    });
    \u0275\u0275domElementStart(1, "span", 31)(2, "span", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 34);
    \u0275\u0275domElement(6, "span", 35)(7, "span", 36)(8, "span", 37);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.selectedYear() === item_r3.year);
    \u0275\u0275attribute("aria-pressed", ctx_r3.selectedYear() === item_r3.year)("aria-label", item_r3.year + ": " + item_r3.total + " concess\xF5es");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r3.barHeight(item_r3.total), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.total);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r3.share(item_r3.novas, item_r3.total), "%");
    \u0275\u0275attribute("title", "Novas: " + item_r3.novas);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r3.share(item_r3.reconcedidas, item_r3.total), "%");
    \u0275\u0275attribute("title", "Reconcedidas: " + item_r3.reconcedidas);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r3.share(item_r3.novas_apos_interrupcao, item_r3.total), "%");
    \u0275\u0275attribute("title", "Novas ap\xF3s interrup\xE7\xE3o: " + item_r3.novas_apos_interrupcao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.year);
  }
}
function PqApplicationsComponent_For_61_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 41);
  }
  if (rf & 2) {
    const modality_r5 = ctx.$implicit;
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r3.share(modality_r5.total, item_r6.total), "%")("background", ctx_r3.modalityColor(modality_r5.label));
    \u0275\u0275attribute("title", modality_r5.label + ": " + modality_r5.total);
  }
}
function PqApplicationsComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "span", 31)(2, "span", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 39);
    \u0275\u0275repeaterCreate(6, PqApplicationsComponent_For_61_For_7_Template, 1, 5, "span", 40, _forTrack12);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", item_r6.year + ": " + item_r6.total + " bolsas vigentes");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r3.activeBarHeight(item_r6.total), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.total);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r6.modalities);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.year);
  }
}
function PqApplicationsComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const modality_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r3.modalityColor(modality_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(modality_r7);
  }
}
function PqApplicationsComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275domElement(4, "i", 6);
    \u0275\u0275text(5, "Novas ");
    \u0275\u0275domElementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "span");
    \u0275\u0275domElement(9, "i", 7);
    \u0275\u0275text(10, "Reconcedidas ");
    \u0275\u0275domElementStart(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "span");
    \u0275\u0275domElement(14, "i", 8);
    \u0275\u0275text(15, "Ap\xF3s interrup\xE7\xE3o ");
    \u0275\u0275domElementStart(16, "b");
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "span");
    \u0275\u0275text(19, "Total ");
    \u0275\u0275domElementStart(20, "b");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const current_r8 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(current_r8.year);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r8.novas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r8.reconcedidas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r8.novas_apos_interrupcao);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(current_r8.total);
  }
}
function PqApplicationsComponent_For_102_Conditional_24_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td")(2, "a", 53)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(5, "td")(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 55);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275pipe(15, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const record_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", "/v/" + record_r11.id_bb, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r11.nome);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("renewed-badge", record_r11.tipo === "reconcedida")("returned-badge", record_r11.tipo === "nova_apos_interrupcao");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.typeLabel(record_r11.tipo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("PQ ", record_r11.nivel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r11.ies);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(14, 12, record_r11.inicio, "MM/yyyy", "UTC"), " \u2014 ", \u0275\u0275pipeBind3(15, 16, record_r11.fim, "MM/yyyy", "UTC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(record_r11.dias_interrupcao ? record_r11.dias_interrupcao + " dias" : "\u2014");
  }
}
function PqApplicationsComponent_For_102_Conditional_24_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2, "Nenhum registro neste ano.");
    \u0275\u0275domElementEnd()();
  }
}
function PqApplicationsComponent_For_102_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 49)(1, "td", 50)(2, "div", 51)(3, "table", 52)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Bolsista");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "N\xEDvel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Institui\xE7\xE3o");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Vig\xEAncia");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "th");
    \u0275\u0275text(17, "Interrup\xE7\xE3o");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, PqApplicationsComponent_For_102_Conditional_24_For_20_Template, 18, 20, "tr", null, _forTrack2, false, PqApplicationsComponent_For_102_Conditional_24_ForEmpty_21_Template, 3, 0, "tr");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("id", "applications-" + item_r10.year);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(item_r10.records);
  }
}
function PqApplicationsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 43)(1, "td")(2, "button", 44);
    \u0275\u0275domListener("click", function PqApplicationsComponent_For_102_Template_button_click_2_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleYear(item_r10.year));
    });
    \u0275\u0275domElement(3, "i", 45);
    \u0275\u0275domElementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "td", 28);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 28);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 28);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 28)(15, "span", 46);
    \u0275\u0275domElement(16, "i", 45);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "td", 28)(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "td", 47)(22, "button", 48);
    \u0275\u0275domListener("click", function PqApplicationsComponent_For_102_Template_button_click_22_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleYear(item_r10.year));
    });
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(24, PqApplicationsComponent_For_102_Conditional_24_Template, 22, 2, "tr", 49);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("expanded", ctx_r3.isExpanded(item_r10.year));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r3.isExpanded(item_r10.year))("aria-controls", "applications-" + item_r10.year);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-chevron-down", !ctx_r3.isExpanded(item_r10.year))("bi-chevron-up", ctx_r3.isExpanded(item_r10.year));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.novas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.reconcedidas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.novas_apos_interrupcao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.encerradas);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", ctx_r3.difference(item_r10) > 0)("negative", ctx_r3.difference(item_r10) < 0)("stable", ctx_r3.difference(item_r10) === 0);
    \u0275\u0275domProperty("title", ctx_r3.differenceLabel(item_r10));
    \u0275\u0275attribute("aria-label", ctx_r3.differenceLabel(item_r10));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-arrow-up", ctx_r3.difference(item_r10) > 0)("bi-arrow-down", ctx_r3.difference(item_r10) < 0)("bi-dash", ctx_r3.difference(item_r10) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r3.difference(item_r10) > 0 ? "+" : "", "", ctx_r3.difference(item_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.total);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", (ctx_r3.isExpanded(item_r10.year) ? "Ocultar" : "Mostrar") + " concess\xF5es de " + item_r10.year);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.isExpanded(item_r10.year) ? "Ocultar" : "Mostrar");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isExpanded(item_r10.year) ? 24 : -1);
  }
}
var PqApplicationsComponent = class _PqApplicationsComponent {
  data = {};
  years = signal([], ...ngDevMode ? [{ debugName: "years" }] : []);
  selectedYear = signal("", ...ngDevMode ? [{ debugName: "selectedYear" }] : []);
  expandedYear = signal(null, ...ngDevMode ? [{ debugName: "expandedYear" }] : []);
  maximum = computed(() => Math.max(...this.years().map((item) => item.total), 1), ...ngDevMode ? [{ debugName: "maximum" }] : []);
  activeScholarships = computed(() => {
    const uniqueRecords = /* @__PURE__ */ new Map();
    for (const item of this.years()) {
      for (const record of item.records) {
        const key = `${record.id_bb}|${record.inicio}|${record.fim}`;
        uniqueRecords.set(key, record);
      }
    }
    return this.years().map(({ year }) => {
      const selectedYear = Number(year);
      const referenceDate = this.referenceDateForYear(selectedYear);
      const activeContracts = [...uniqueRecords.values()].filter((record) => {
        const startDate = this.dateValue(record.inicio);
        const finishDate = this.dateValue(record.fim);
        return startDate !== null && finishDate !== null && startDate <= referenceDate && finishDate >= referenceDate;
      });
      const activeByScholar = /* @__PURE__ */ new Map();
      for (const record of activeContracts) {
        const scholarKey = String(record.id_bb || record.nome).trim();
        const current = activeByScholar.get(scholarKey);
        if (!current || String(record.inicio) > String(current.inicio)) {
          activeByScholar.set(scholarKey, record);
        }
      }
      const activeRecords = [...activeByScholar.values()];
      const counts = /* @__PURE__ */ new Map();
      for (const record of activeRecords) {
        const modality = this.modalityOf(record);
        counts.set(modality, (counts.get(modality) ?? 0) + 1);
      }
      return {
        year,
        total: activeRecords.length,
        modalities: [...counts.entries()].map(([label, total]) => ({ label, total })).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"))
      };
    });
  }, ...ngDevMode ? [{ debugName: "activeScholarships" }] : []);
  activeModalities = computed(() => [...new Set(this.activeScholarships().flatMap((item) => item.modalities.map((modality) => modality.label)))].sort((a, b) => a.localeCompare(b, "pt-BR")), ...ngDevMode ? [{ debugName: "activeModalities" }] : []);
  activeMaximum = computed(() => Math.max(...this.activeScholarships().map((item) => item.total), 1), ...ngDevMode ? [{ debugName: "activeMaximum" }] : []);
  yearsDescending = computed(() => [...this.years()].reverse(), ...ngDevMode ? [{ debugName: "yearsDescending" }] : []);
  selected = computed(() => this.years().find((item) => item.year === this.selectedYear()) ?? this.years().at(-1), ...ngDevMode ? [{ debugName: "selected" }] : []);
  totals = computed(() => this.years().reduce((sum, item) => ({
    novas: sum.novas + item.novas,
    reconcedidas: sum.reconcedidas + item.reconcedidas,
    novas_apos_interrupcao: sum.novas_apos_interrupcao + item.novas_apos_interrupcao,
    total: sum.total + item.total
  }), { novas: 0, reconcedidas: 0, novas_apos_interrupcao: 0, total: 0 }), ...ngDevMode ? [{ debugName: "totals" }] : []);
  ngOnChanges(changes) {
    if (!changes["data"])
      return;
    const items = Object.entries(this.data ?? {}).map(([year, value]) => {
      const novas = Array.isArray(value.novas) ? value.novas : [];
      const reconcedidas = Array.isArray(value.reconcedidas) ? value.reconcedidas : [];
      const interrupted = Array.isArray(value.novas_apos_interrupcao) ? value.novas_apos_interrupcao : [];
      const records = [...novas, ...reconcedidas, ...interrupted].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" }));
      return {
        year,
        novas: novas.length,
        reconcedidas: reconcedidas.length,
        novas_apos_interrupcao: interrupted.length,
        total: records.length,
        encerradas: 0,
        records
      };
    }).sort((a, b) => Number(a.year) - Number(b.year));
    const uniqueRecords = /* @__PURE__ */ new Map();
    for (const item of items) {
      for (const record of item.records) {
        uniqueRecords.set(`${record.id_bb}|${record.inicio}|${record.fim}`, record);
      }
    }
    for (const item of items) {
      item.encerradas = [...uniqueRecords.values()].filter((record) => this.yearFromDate(record.fim) === Number(item.year)).length;
    }
    this.years.set(items);
    if (!items.some((item) => item.year === this.selectedYear()))
      this.selectedYear.set(items.at(-1)?.year ?? "");
  }
  selectYear(year) {
    this.selectedYear.set(year);
  }
  toggleYear(year) {
    this.expandedYear.update((current) => current === year ? null : year);
  }
  isExpanded(year) {
    return this.expandedYear() === year;
  }
  difference(item) {
    return item.total - item.encerradas;
  }
  differenceLabel(item) {
    const value = this.difference(item);
    if (value > 0)
      return `Aumento de ${value}`;
    if (value < 0)
      return `Diminui\xE7\xE3o de ${Math.abs(value)}`;
    return "Estabilidade";
  }
  typeLabel(type) {
    const labels = { nova: "Nova", reconcedida: "Reconcedida", nova_apos_interrupcao: "Nova ap\xF3s interrup\xE7\xE3o" };
    return labels[type] || type.replaceAll("_", " ");
  }
  exportCsv() {
    const header = ["Ano", "Bolsas encerradas", "Pesquisador", "ID Brapci", "Tipo", "N\xEDvel", "Institui\xE7\xE3o", "In\xEDcio", "Fim", "Dias de interrup\xE7\xE3o"];
    const rows = this.yearsDescending().flatMap((year) => year.records.map((record) => [
      year.year,
      year.encerradas,
      record.nome,
      record.id_bb,
      this.typeLabel(record.tipo),
      record.nivel,
      record.ies,
      record.inicio,
      record.fim,
      record.dias_interrupcao ?? ""
    ]));
    const csv = [header, ...rows].map((row) => row.map((value) => this.csvCell(value)).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "concessoes-bolsistas-pq.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }
  csvCell(value) {
    return `"${String(value).replaceAll('"', '""')}"`;
  }
  barHeight(total) {
    return Math.max(total / this.maximum() * 100, 2);
  }
  activeBarHeight(total) {
    return total === 0 ? 0 : Math.max(total / this.activeMaximum() * 100, 2);
  }
  modalityColor(modality) {
    const normalized = modality.trim().toUpperCase();
    const redPalette = {
      "PQ A": "#9f2430",
      "PQ B": "#c43d45",
      "PQ C": "#e06464"
    };
    if (redPalette[normalized]) {
      return redPalette[normalized];
    }
    const palette = ["#c45112", "#df6f1d", "#ef8c32", "#f5a552", "#f8bd76", "#ffd09b"];
    const index = this.activeModalities().indexOf(modality);
    return palette[(index < 0 ? 0 : index) % palette.length];
  }
  share(value, total) {
    return total ? value / total * 100 : 0;
  }
  showYearLabel(index) {
    const item = this.years()[index];
    return index === 0 || index === this.years().length - 1 || Number(item?.year) % 5 === 0;
  }
  yearFromDate(value) {
    const match = String(value ?? "").match(/^(\d{4})/);
    return match ? Number(match[1]) : null;
  }
  referenceDateForYear(year) {
    const today = /* @__PURE__ */ new Date();
    if (year === today.getFullYear()) {
      return Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    }
    return Date.UTC(year, 11, 31);
  }
  dateValue(value) {
    const match = String(value ?? "").match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match)
      return null;
    return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  modalityOf(record) {
    const modality = String(record.modalidade ?? record.mod_sigla ?? record.mod ?? "PQ").trim() || "N\xE3o informada";
    const level = String(record.nivel ?? "").trim();
    return [modality, level].filter(Boolean).join(" ");
  }
  static \u0275fac = function PqApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqApplicationsComponent, selectors: [["app-pq-applications"]], inputs: { data: "data" }, features: [\u0275\u0275NgOnChangesFeature], decls: 103, vars: 10, consts: [["aria-labelledby", "applications-title"], [1, "applications-heading"], [1, "applications-eyebrow"], ["id", "applications-title"], ["aria-live", "polite", 1, "selected-total"], [1, "summary-cards"], [1, "dot", "new"], [1, "dot", "renewed"], [1, "dot", "returned"], [1, "chart-panel"], [1, "chart-scroll"], ["role", "group", "aria-label", "Concess\xF5es anuais por tipo", 1, "applications-chart"], ["type", "button", 1, "year-column", 3, "selected"], [1, "legend"], [1, "applications-heading", "active-heading"], ["id", "active-scholarships-title"], ["aria-labelledby", "active-scholarships-title", 1, "chart-panel"], ["role", "img", "aria-label", "Quantidade de bolsas vigentes acumuladas em cada ano", 1, "applications-chart", "active-scholarships-chart"], [1, "year-column"], [1, "selected-detail"], ["aria-labelledby", "year-table-title", 1, "year-table-section"], [1, "table-heading"], ["id", "year-table-title"], [1, "table-actions"], ["type", "button", 1, "export-button", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-file-earmark-spreadsheet"], [1, "table-responsive", "year-table-wrap"], [1, "table", "year-table"], [1, "text-center"], [1, "visually-hidden"], ["type", "button", 1, "year-column", 3, "click"], [1, "bar-slot"], [1, "bar-group"], [1, "bar-value"], [1, "year-bar"], [1, "segment", "new"], [1, "segment", "renewed"], [1, "segment", "returned"], [1, "year-label"], [1, "year-bar", "active-bar"], [1, "segment", 3, "height", "background"], [1, "segment"], [1, "dot"], [1, "year-summary"], ["type", "button", 1, "year-toggle", 3, "click"], ["aria-hidden", "true", 1, "bi"], [1, "difference", 3, "title"], [1, "text-end"], ["type", "button", 1, "details-button", 3, "click"], [1, "details-row", 3, "id"], ["colspan", "8"], [1, "record-table-wrap"], [1, "table", "table-sm", "record-table"], ["target", "_blank", "rel", "noopener noreferrer", 1, "researcher-link", 3, "href"], [1, "type-badge"], [1, "text-nowrap"], ["colspan", "6", 1, "empty-records"]], template: function PqApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "S\xE9rie hist\xF3rica");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 3);
      \u0275\u0275text(6, "Concess\xF5es por ano");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, PqApplicationsComponent_Conditional_7_Template, 5, 2, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "article");
      \u0275\u0275domElement(10, "i", 6);
      \u0275\u0275domElementStart(11, "div")(12, "strong");
      \u0275\u0275text(13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span");
      \u0275\u0275text(15, "Novas");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "article");
      \u0275\u0275domElement(17, "i", 7);
      \u0275\u0275domElementStart(18, "div")(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "span");
      \u0275\u0275text(22, "Reconcedidas");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(23, "article");
      \u0275\u0275domElement(24, "i", 8);
      \u0275\u0275domElementStart(25, "div")(26, "strong");
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "span");
      \u0275\u0275text(29, "Novas ap\xF3s interrup\xE7\xE3o");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "article")(31, "div")(32, "strong");
      \u0275\u0275text(33);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "span");
      \u0275\u0275text(35, "Total hist\xF3rico");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(36, "article", 9)(37, "div", 10)(38, "div", 11);
      \u0275\u0275repeaterCreate(39, PqApplicationsComponent_For_40_Template, 11, 17, "button", 12, _forTrack02);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "div", 13)(42, "span");
      \u0275\u0275domElement(43, "i", 6);
      \u0275\u0275text(44, "Novas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "span");
      \u0275\u0275domElement(46, "i", 7);
      \u0275\u0275text(47, "Reconcedidas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "span");
      \u0275\u0275domElement(49, "i", 8);
      \u0275\u0275text(50, "Novas ap\xF3s interrup\xE7\xE3o");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(51, "div", 14)(52, "div")(53, "span", 2);
      \u0275\u0275text(54, "S\xE9rie hist\xF3rica");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "h2", 15);
      \u0275\u0275text(56, "Bolsas vigentes acumuladas por ano");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(57, "article", 16)(58, "div", 10)(59, "div", 17);
      \u0275\u0275repeaterCreate(60, PqApplicationsComponent_For_61_Template, 10, 5, "div", 18, _forTrack02);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 13);
      \u0275\u0275repeaterCreate(63, PqApplicationsComponent_For_64_Template, 3, 3, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(65, PqApplicationsComponent_Conditional_65_Template, 22, 5, "div", 19);
      \u0275\u0275domElementStart(66, "section", 20)(67, "div", 21)(68, "div")(69, "span", 2);
      \u0275\u0275text(70, "Dados detalhados");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "h2", 22);
      \u0275\u0275text(72, "Concess\xF5es por ano");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(73, "div", 23)(74, "span");
      \u0275\u0275text(75, "Clique no ano para visualizar os registros");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "button", 24);
      \u0275\u0275domListener("click", function PqApplicationsComponent_Template_button_click_76_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275domElement(77, "i", 25);
      \u0275\u0275text(78, " Exportar para CSV");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(79, "div", 26)(80, "table", 27)(81, "thead")(82, "tr")(83, "th");
      \u0275\u0275text(84, "Ano");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "th", 28);
      \u0275\u0275text(86, "Novas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "th", 28);
      \u0275\u0275text(88, "Reconcedidas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "th", 28);
      \u0275\u0275text(90, "Ap\xF3s interrup\xE7\xE3o");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "th", 28);
      \u0275\u0275text(92, "Bolsas encerradas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(93, "th", 28);
      \u0275\u0275text(94, "Diferen\xE7a");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "th", 28);
      \u0275\u0275text(96, "Total");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "th")(98, "span", 29);
      \u0275\u0275text(99, "Expandir");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(100, "tbody");
      \u0275\u0275repeaterCreate(101, PqApplicationsComponent_For_102_Template, 25, 33, null, null, _forTrack02);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_10_0;
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_0_0 = ctx.selected()) ? 7 : -1, tmp_0_0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totals().novas);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totals().reconcedidas);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totals().novas_apos_interrupcao);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totals().total);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + ctx.years().length + ", minmax(14px, 1fr))");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.years());
      \u0275\u0275advance(20);
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + ctx.activeScholarships().length + ", minmax(14px, 1fr))");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.activeScholarships());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.activeModalities());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_10_0 = ctx.selected()) ? 65 : -1, tmp_10_0);
      \u0275\u0275advance(36);
      \u0275\u0275repeater(ctx.yearsDescending());
    }
  }, dependencies: [CommonModule, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  --pq-concession-new: #c35e22;\n  --pq-concession-renewed: #e47b30;\n  --pq-concession-returned: #f4aa60;\n  --pq-scholarship-active: #df6f1d;\n  display: block;\n  color: var(--theme-ink);\n}\n.applications-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.applications-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent, #9a654d);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.5rem;\n}\n.selected-total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.selected-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.65rem;\n  line-height: 1;\n}\n.selected-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.summary-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  gap: 0.65rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.summary-cards[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.4rem;\n  line-height: 1;\n}\n.summary-cards[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n}\n.chart-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.active-heading[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.active-scholarships-chart[_ngcontent-%COMP%] {\n  height: 290px;\n}\n.active-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--theme-sand);\n}\n.chart-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.applications-chart[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 850px;\n  height: 290px;\n  align-items: stretch;\n  border-bottom: 1px solid var(--theme-line);\n}\n.year-column[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  height: 100%;\n  padding: 0 2px;\n  grid-template-rows: 1fr 3.4rem;\n  border: 0;\n  color: var(--theme-muted);\n  background: transparent;\n  text-align: center;\n}\n.year-column[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--theme-hint);\n  outline-offset: -2px;\n}\n.bar-slot[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  padding-top: 1rem;\n  align-items: flex-end;\n}\n.bar-group[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-height: 1.65rem;\n  grid-template-rows: 1.2rem 1fr;\n  transition: height 0.2s ease;\n}\n.bar-value[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.year-bar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 3px;\n  overflow: hidden;\n  flex-direction: column-reverse;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background: var(--theme-sand);\n}\n.segment[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 1px;\n}\n.new[_ngcontent-%COMP%] {\n  background: var(--pq-concession-new);\n}\n.renewed[_ngcontent-%COMP%] {\n  background: var(--pq-concession-renewed);\n}\n.returned[_ngcontent-%COMP%] {\n  background: var(--pq-concession-returned);\n}\n.year-label[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-top: 0.35rem;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.62rem;\n  transform: rotate(-90deg);\n  transform-origin: center;\n  white-space: nowrap;\n}\n.year-column.selected[_ngcontent-%COMP%]   .year-label[_ngcontent-%COMP%], \n.year-column.selected[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  color: var(--pq-accent, #9a654d);\n  font-weight: 700;\n}\n.legend[_ngcontent-%COMP%], \n.selected-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem 1rem;\n}\n.legend[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  justify-content: center;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n}\n.legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.selected-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.7rem;\n  height: 0.7rem;\n  flex: 0 0 0.7rem;\n  border-radius: 0.2rem;\n}\n.selected-detail[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.selected-detail[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: "Bitter", serif;\n  font-size: 1.2rem;\n}\n.selected-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.82rem;\n}\n.selected-detail[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.year-table-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.table-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.85rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-actions[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.export-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.5rem 0.8rem;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid var(--pq-accent, #9a654d);\n  border-radius: 0.55rem;\n  color: var(--pq-accent, #9a654d);\n  background: transparent;\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.export-button[_ngcontent-%COMP%]:hover, \n.export-button[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-card-bg);\n  background: var(--pq-accent, #9a654d);\n}\n.year-table-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.year-table[_ngcontent-%COMP%], \n.record-table[_ngcontent-%COMP%] {\n  --bs-table-color:var(--theme-ink);\n  --bs-table-bg:transparent;\n  margin: 0;\n  color: var(--theme-ink);\n}\n.year-table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  font-size: 0.72rem;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.year-table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr.year-summary[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  border-color: var(--theme-line);\n  vertical-align: middle;\n}\n.difference[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 3.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.2rem;\n  font-weight: 700;\n}\n.difference.positive[_ngcontent-%COMP%] {\n  color: #26834a;\n}\n.difference.negative[_ngcontent-%COMP%] {\n  color: #bd3d36;\n}\n.difference.stable[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\n.year-summary.expanded[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent, #9a654d) 8%, transparent);\n}\n.year-toggle[_ngcontent-%COMP%], \n.details-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--theme-ink);\n  background: transparent;\n}\n.year-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.year-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--pq-accent, #9a654d);\n}\n.details-button[_ngcontent-%COMP%] {\n  color: var(--pq-accent, #9a654d);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.details-row[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border-color: var(--theme-line);\n  background: color-mix(in srgb, var(--theme-sand) 45%, transparent);\n}\n.record-table-wrap[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem 1.1rem 3rem;\n  overflow-x: auto;\n}\n.record-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.7rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  font-size: 0.7rem;\n  white-space: nowrap;\n}\n.record-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.7rem;\n  border-color: var(--theme-line);\n  vertical-align: middle;\n}\n.researcher-link[_ngcontent-%COMP%] {\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.researcher-link[_ngcontent-%COMP%]:hover, \n.researcher-link[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: #6d2d12;\n  background: color-mix(in srgb, var(--pq-concession-new) 24%, var(--theme-card-bg));\n  font-size: 0.7rem;\n  white-space: nowrap;\n}\n.type-badge.renewed-badge[_ngcontent-%COMP%] {\n  color: #704330;\n  background: color-mix(in srgb, var(--pq-concession-renewed) 24%, var(--theme-card-bg));\n}\n.type-badge.returned-badge[_ngcontent-%COMP%] {\n  color: #674813;\n  background: color-mix(in srgb, var(--pq-concession-returned) 28%, var(--theme-card-bg));\n}\n.empty-records[_ngcontent-%COMP%] {\n  padding: 1.5rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%] {\n  --pq-concession-new: #dc7532;\n  --pq-concession-renewed: #ee9347;\n  --pq-concession-returned: #f7bf79;\n  --pq-scholarship-active: #ef8c32;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .difference.positive[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .difference.positive[_ngcontent-%COMP%] {\n  color: #65c987;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .difference.negative[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .difference.negative[_ngcontent-%COMP%] {\n  color: #ff8179;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .type-badge[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .type-badge[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .type-badge.renewed-badge[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .type-badge.renewed-badge[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .type-badge.returned-badge[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .type-badge.returned-badge[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n@media (max-width: 767.98px) {\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-panel[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .table-heading[_ngcontent-%COMP%], \n   .table-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .record-table-wrap[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=pq-applications.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqApplicationsComponent, [{
    type: Component,
    args: [{ selector: "app-pq-applications", standalone: true, imports: [CommonModule], template: `<section aria-labelledby="applications-title">
  <div class="applications-heading">
    <div><span class="applications-eyebrow">S\xE9rie hist\xF3rica</span><h2 id="applications-title">Concess\xF5es por ano</h2></div>
    @if (selected(); as current) {<div class="selected-total" aria-live="polite"><strong>{{ current.total }}</strong><span>concess\xF5es em {{ current.year }}</span></div>}
  </div>

  <div class="summary-cards">
    <article><i class="dot new"></i><div><strong>{{ totals().novas }}</strong><span>Novas</span></div></article>
    <article><i class="dot renewed"></i><div><strong>{{ totals().reconcedidas }}</strong><span>Reconcedidas</span></div></article>
    <article><i class="dot returned"></i><div><strong>{{ totals().novas_apos_interrupcao }}</strong><span>Novas ap\xF3s interrup\xE7\xE3o</span></div></article>
    <article><div><strong>{{ totals().total }}</strong><span>Total hist\xF3rico</span></div></article>
  </div>

  <article class="chart-panel">
    <div class="chart-scroll"><div class="applications-chart" [style.grid-template-columns]="'repeat(' + years().length + ', minmax(14px, 1fr))'" role="group" aria-label="Concess\xF5es anuais por tipo">
      @for (item of years(); track item.year; let index = $index) {
        <button type="button" class="year-column" [class.selected]="selectedYear() === item.year" [attr.aria-pressed]="selectedYear() === item.year" [attr.aria-label]="item.year + ': ' + item.total + ' concess\xF5es'" (click)="selectYear(item.year)">
          <span class="bar-slot"><span class="bar-group" [style.height.%]="barHeight(item.total)"><span class="bar-value">{{ item.total }}</span><span class="year-bar">
            <span class="segment new" [style.height.%]="share(item.novas, item.total)" [attr.title]="'Novas: ' + item.novas"></span>
            <span class="segment renewed" [style.height.%]="share(item.reconcedidas, item.total)" [attr.title]="'Reconcedidas: ' + item.reconcedidas"></span>
            <span class="segment returned" [style.height.%]="share(item.novas_apos_interrupcao, item.total)" [attr.title]="'Novas ap\xF3s interrup\xE7\xE3o: ' + item.novas_apos_interrupcao"></span>
          </span></span></span><span class="year-label">{{ item.year }}</span>
        </button>
      }
    </div></div>
    <div class="legend"><span><i class="dot new"></i>Novas</span><span><i class="dot renewed"></i>Reconcedidas</span><span><i class="dot returned"></i>Novas ap\xF3s interrup\xE7\xE3o</span></div>
  </article>

  <div class="applications-heading active-heading">
    <div><span class="applications-eyebrow">S\xE9rie hist\xF3rica</span><h2 id="active-scholarships-title">Bolsas vigentes acumuladas por ano</h2></div>
  </div>

  <article class="chart-panel" aria-labelledby="active-scholarships-title">
    <div class="chart-scroll"><div class="applications-chart active-scholarships-chart" [style.grid-template-columns]="'repeat(' + activeScholarships().length + ', minmax(14px, 1fr))'" role="img" aria-label="Quantidade de bolsas vigentes acumuladas em cada ano">
      @for (item of activeScholarships(); track item.year) {
        <div class="year-column" [attr.aria-label]="item.year + ': ' + item.total + ' bolsas vigentes'">
          <span class="bar-slot"><span class="bar-group" [style.height.%]="activeBarHeight(item.total)"><span class="bar-value">{{ item.total }}</span><span class="year-bar active-bar">
            @for (modality of item.modalities; track modality.label) {
              <span class="segment" [style.height.%]="share(modality.total, item.total)" [style.background]="modalityColor(modality.label)" [attr.title]="modality.label + ': ' + modality.total"></span>
            }
          </span></span></span>
          <span class="year-label">{{ item.year }}</span>
        </div>
      }
    </div></div>
    <div class="legend">
      @for (modality of activeModalities(); track modality) {
        <span><i class="dot" [style.background]="modalityColor(modality)"></i>{{ modality }}</span>
      }
    </div>
  </article>

  @if (selected(); as current) {
    <div class="selected-detail"><strong>{{ current.year }}</strong><span><i class="dot new"></i>Novas <b>{{ current.novas }}</b></span><span><i class="dot renewed"></i>Reconcedidas <b>{{ current.reconcedidas }}</b></span><span><i class="dot returned"></i>Ap\xF3s interrup\xE7\xE3o <b>{{ current.novas_apos_interrupcao }}</b></span><span>Total <b>{{ current.total }}</b></span></div>
  }

  <section class="year-table-section" aria-labelledby="year-table-title">
    <div class="table-heading"><div><span class="applications-eyebrow">Dados detalhados</span><h2 id="year-table-title">Concess\xF5es por ano</h2></div><div class="table-actions"><span>Clique no ano para visualizar os registros</span><button type="button" class="export-button" (click)="exportCsv()"><i class="bi bi-file-earmark-spreadsheet" aria-hidden="true"></i> Exportar para CSV</button></div></div>
    <div class="table-responsive year-table-wrap">
      <table class="table year-table">
        <thead><tr><th>Ano</th><th class="text-center">Novas</th><th class="text-center">Reconcedidas</th><th class="text-center">Ap\xF3s interrup\xE7\xE3o</th><th class="text-center">Bolsas encerradas</th><th class="text-center">Diferen\xE7a</th><th class="text-center">Total</th><th><span class="visually-hidden">Expandir</span></th></tr></thead>
        <tbody>
          @for (item of yearsDescending(); track item.year) {
            <tr class="year-summary" [class.expanded]="isExpanded(item.year)">
              <td><button type="button" class="year-toggle" [attr.aria-expanded]="isExpanded(item.year)" [attr.aria-controls]="'applications-' + item.year" (click)="toggleYear(item.year)"><i class="bi" [class.bi-chevron-down]="!isExpanded(item.year)" [class.bi-chevron-up]="isExpanded(item.year)" aria-hidden="true"></i><strong>{{ item.year }}</strong></button></td>
              <td class="text-center">{{ item.novas }}</td><td class="text-center">{{ item.reconcedidas }}</td><td class="text-center">{{ item.novas_apos_interrupcao }}</td><td class="text-center">{{ item.encerradas }}</td>
              <td class="text-center"><span class="difference" [class.positive]="difference(item) > 0" [class.negative]="difference(item) < 0" [class.stable]="difference(item) === 0" [attr.aria-label]="differenceLabel(item)" [title]="differenceLabel(item)"><i class="bi" [class.bi-arrow-up]="difference(item) > 0" [class.bi-arrow-down]="difference(item) < 0" [class.bi-dash]="difference(item) === 0" aria-hidden="true"></i>{{ difference(item) > 0 ? '+' : '' }}{{ difference(item) }}</span></td>
              <td class="text-center"><strong>{{ item.total }}</strong></td>
              <td class="text-end"><button type="button" class="details-button" [attr.aria-label]="(isExpanded(item.year) ? 'Ocultar' : 'Mostrar') + ' concess\xF5es de ' + item.year" (click)="toggleYear(item.year)">{{ isExpanded(item.year) ? 'Ocultar' : 'Mostrar' }}</button></td>
            </tr>
            @if (isExpanded(item.year)) {
              <tr class="details-row" [id]="'applications-' + item.year"><td colspan="8">
                <div class="record-table-wrap"><table class="table table-sm record-table"><thead><tr><th>Bolsista</th><th>Tipo</th><th>N\xEDvel</th><th>Institui\xE7\xE3o</th><th>Vig\xEAncia</th><th>Interrup\xE7\xE3o</th></tr></thead><tbody>
                  @for (record of item.records; track record.id_bb + record.inicio) {
                    <tr><td><a class="researcher-link" [href]="'/v/' + record.id_bb" target="_blank" rel="noopener noreferrer"><strong>{{ record.nome }}</strong></a></td><td><span class="type-badge" [class.renewed-badge]="record.tipo === 'reconcedida'" [class.returned-badge]="record.tipo === 'nova_apos_interrupcao'">{{ typeLabel(record.tipo) }}</span></td><td>PQ {{ record.nivel }}</td><td>{{ record.ies }}</td><td class="text-nowrap">{{ record.inicio | date:'MM/yyyy':'UTC' }} \u2014 {{ record.fim | date:'MM/yyyy':'UTC' }}</td><td>{{ record.dias_interrupcao ? record.dias_interrupcao + ' dias' : '\u2014' }}</td></tr>
                  } @empty {<tr><td colspan="6" class="empty-records">Nenhum registro neste ano.</td></tr>}
                </tbody></table></div>
              </td></tr>
            }
          }
        </tbody>
      </table>
    </div>
  </section>
</section>
`, styles: ['/* src/app/pages/pq/pq-applications.component.scss */\n:host {\n  --pq-concession-new: #c35e22;\n  --pq-concession-renewed: #e47b30;\n  --pq-concession-returned: #f4aa60;\n  --pq-scholarship-active: #df6f1d;\n  display: block;\n  color: var(--theme-ink);\n}\n.applications-heading {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.applications-eyebrow {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent, #9a654d);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nh2 {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.5rem;\n}\n.selected-total {\n  text-align: right;\n}\n.selected-total strong {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.65rem;\n  line-height: 1;\n}\n.selected-total span {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.summary-cards article {\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  gap: 0.65rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.summary-cards strong {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.4rem;\n  line-height: 1;\n}\n.summary-cards span {\n  display: block;\n  margin-top: 0.25rem;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n}\n.chart-panel {\n  padding: 1.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.active-heading {\n  margin-top: 1.5rem;\n}\n.active-scholarships-chart {\n  height: 290px;\n}\n.active-bar {\n  height: 100%;\n  background: var(--theme-sand);\n}\n.chart-scroll {\n  overflow-x: auto;\n}\n.applications-chart {\n  display: grid;\n  min-width: 850px;\n  height: 290px;\n  align-items: stretch;\n  border-bottom: 1px solid var(--theme-line);\n}\n.year-column {\n  display: grid;\n  min-width: 0;\n  height: 100%;\n  padding: 0 2px;\n  grid-template-rows: 1fr 3.4rem;\n  border: 0;\n  color: var(--theme-muted);\n  background: transparent;\n  text-align: center;\n}\n.year-column:focus-visible {\n  outline: 2px solid var(--theme-hint);\n  outline-offset: -2px;\n}\n.bar-slot {\n  display: flex;\n  min-height: 0;\n  padding-top: 1rem;\n  align-items: flex-end;\n}\n.bar-group {\n  display: grid;\n  width: 100%;\n  min-height: 1.65rem;\n  grid-template-rows: 1.2rem 1fr;\n  transition: height 0.2s ease;\n}\n.bar-value {\n  align-self: center;\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.year-bar {\n  display: flex;\n  width: 100%;\n  min-height: 3px;\n  overflow: hidden;\n  flex-direction: column-reverse;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background: var(--theme-sand);\n}\n.segment {\n  display: block;\n  width: 100%;\n  min-height: 1px;\n}\n.new {\n  background: var(--pq-concession-new);\n}\n.renewed {\n  background: var(--pq-concession-renewed);\n}\n.returned {\n  background: var(--pq-concession-returned);\n}\n.year-label {\n  display: flex;\n  width: 100%;\n  padding-top: 0.35rem;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.62rem;\n  transform: rotate(-90deg);\n  transform-origin: center;\n  white-space: nowrap;\n}\n.year-column.selected .year-label,\n.year-column.selected .bar-value {\n  color: var(--pq-accent, #9a654d);\n  font-weight: 700;\n}\n.legend,\n.selected-detail {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem 1rem;\n}\n.legend {\n  padding-top: 1rem;\n  justify-content: center;\n  color: var(--theme-muted);\n  font-size: 0.75rem;\n}\n.legend span,\n.selected-detail span {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.dot {\n  display: inline-block;\n  width: 0.7rem;\n  height: 0.7rem;\n  flex: 0 0 0.7rem;\n  border-radius: 0.2rem;\n}\n.selected-detail {\n  margin-top: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.selected-detail > strong {\n  margin-right: auto;\n  font-family: "Bitter", serif;\n  font-size: 1.2rem;\n}\n.selected-detail span {\n  color: var(--theme-muted);\n  font-size: 0.82rem;\n}\n.selected-detail b {\n  color: var(--theme-ink);\n}\n.year-table-section {\n  margin-top: 1.5rem;\n}\n.table-heading {\n  display: flex;\n  margin-bottom: 0.85rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.table-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-actions > span {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.export-button {\n  display: inline-flex;\n  padding: 0.5rem 0.8rem;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid var(--pq-accent, #9a654d);\n  border-radius: 0.55rem;\n  color: var(--pq-accent, #9a654d);\n  background: transparent;\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.export-button:hover,\n.export-button:focus-visible {\n  color: var(--theme-card-bg);\n  background: var(--pq-accent, #9a654d);\n}\n.year-table-wrap {\n  overflow: hidden;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.year-table,\n.record-table {\n  --bs-table-color:var(--theme-ink);\n  --bs-table-bg:transparent;\n  margin: 0;\n  color: var(--theme-ink);\n}\n.year-table > thead th {\n  padding: 0.85rem 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 70%, transparent);\n  font-size: 0.72rem;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.year-table > tbody > tr.year-summary > td {\n  padding: 0.8rem 1rem;\n  border-color: var(--theme-line);\n  vertical-align: middle;\n}\n.difference {\n  display: inline-flex;\n  min-width: 3.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.2rem;\n  font-weight: 700;\n}\n.difference.positive {\n  color: #26834a;\n}\n.difference.negative {\n  color: #bd3d36;\n}\n.difference.stable {\n  color: var(--theme-muted);\n}\n.year-summary.expanded {\n  background: color-mix(in srgb, var(--pq-accent, #9a654d) 8%, transparent);\n}\n.year-toggle,\n.details-button {\n  border: 0;\n  color: var(--theme-ink);\n  background: transparent;\n}\n.year-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.year-toggle i {\n  color: var(--pq-accent, #9a654d);\n}\n.details-button {\n  color: var(--pq-accent, #9a654d);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.details-row > td {\n  padding: 0 !important;\n  border-color: var(--theme-line);\n  background: color-mix(in srgb, var(--theme-sand) 45%, transparent);\n}\n.record-table-wrap {\n  padding: 0.75rem 1rem 1.1rem 3rem;\n  overflow-x: auto;\n}\n.record-table th {\n  padding: 0.6rem 0.7rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  font-size: 0.7rem;\n  white-space: nowrap;\n}\n.record-table td {\n  padding: 0.65rem 0.7rem;\n  border-color: var(--theme-line);\n  vertical-align: middle;\n}\n.researcher-link {\n  color: var(--theme-link);\n  text-decoration: none;\n}\n.researcher-link:hover,\n.researcher-link:focus-visible {\n  color: var(--theme-hint);\n  text-decoration: underline;\n}\n.type-badge {\n  display: inline-flex;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: #6d2d12;\n  background: color-mix(in srgb, var(--pq-concession-new) 24%, var(--theme-card-bg));\n  font-size: 0.7rem;\n  white-space: nowrap;\n}\n.type-badge.renewed-badge {\n  color: #704330;\n  background: color-mix(in srgb, var(--pq-concession-renewed) 24%, var(--theme-card-bg));\n}\n.type-badge.returned-badge {\n  color: #674813;\n  background: color-mix(in srgb, var(--pq-concession-returned) 28%, var(--theme-card-bg));\n}\n.empty-records {\n  padding: 1.5rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\n:host-context(body.theme-master.theme-dark) {\n  --pq-concession-new: #dc7532;\n  --pq-concession-renewed: #ee9347;\n  --pq-concession-returned: #f7bf79;\n  --pq-scholarship-active: #ef8c32;\n}\n:host-context(body.theme-master.theme-dark) .difference.positive {\n  color: #65c987;\n}\n:host-context(body.theme-master.theme-dark) .difference.negative {\n  color: #ff8179;\n}\n:host-context(body.theme-master.theme-dark) .type-badge,\n:host-context(body.theme-master.theme-dark) .type-badge.renewed-badge,\n:host-context(body.theme-master.theme-dark) .type-badge.returned-badge {\n  color: var(--theme-ink);\n}\n@media (max-width: 767.98px) {\n  .summary-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .summary-cards {\n    grid-template-columns: 1fr;\n  }\n  .chart-panel {\n    padding: 1rem;\n  }\n  .table-heading,\n  .table-actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .table-actions {\n    gap: 0.5rem;\n  }\n  .record-table-wrap {\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=pq-applications.component.css.map */\n'] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqApplicationsComponent, { className: "PqApplicationsComponent", filePath: "src/app/pages/pq/pq-applications.component.ts", lineNumber: 50 });
})();

// src/app/pages/pq/pq.page.ts
var _forTrack03 = ($index, $item) => $item.code;
function PqBrazilMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275text(2, " Carregando mapa\u2026");
    \u0275\u0275domElementEnd();
  }
}
function PqBrazilMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar a malha do mapa.");
    \u0275\u0275domElementEnd();
  }
}
function PqBrazilMapComponent_Conditional_2_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "text", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const shape_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("x", shape_r1.x)("y", shape_r1.y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(shape_r1.code);
  }
}
function PqBrazilMapComponent_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "path")(1, "title");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(3, PqBrazilMapComponent_Conditional_2_For_6_Conditional_3_Template, 2, 3, ":svg:text", 6);
  }
  if (rf & 2) {
    const shape_r1 = ctx.$implicit;
    \u0275\u0275attribute("d", shape_r1.path)("class", "state-shape intensity-" + shape_r1.intensity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", shape_r1.name, ": ", shape_r1.count, " bolsista(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(shape_r1.count > 0 ? 3 : -1);
  }
}
function PqBrazilMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2)(1, "title", 4);
    \u0275\u0275text(2, "Distribui\xE7\xE3o de bolsistas por estado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "desc", 5);
    \u0275\u0275text(4, "Mapa coropl\xE9tico do Brasil. Estados mais escuros possuem mais bolsistas.");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(5, PqBrazilMapComponent_Conditional_2_For_6_Template, 4, 5, null, null, _forTrack03);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.shapes());
  }
}
var _forTrack13 = ($index, $item) => $item.label;
function PqPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 9);
    \u0275\u0275text(2, " Carregando dados dos bolsistas\u2026");
    \u0275\u0275elementEnd();
  }
}
function PqPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function PqPage_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PqPage_Conditional_12_Conditional_26_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pq-active-by-year", 26);
  }
  if (rf & 2) {
    \u0275\u0275property("data", ctx);
  }
}
function PqPage_Conditional_12_Conditional_26_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "N\xEDvel " + item_r5.label + ": " + item_r5.count + " bolsistas");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", item_r5.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.count);
  }
}
function PqPage_Conditional_12_Conditional_26_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_180_r7 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_180_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r6.count, " bolsistas");
  }
}
function PqPage_Conditional_12_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "article", 21)(2, "span", 22);
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Bolsistas ativos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "article", 24)(10, "span", 22);
    \u0275\u0275element(11, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Institui\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "article", 24)(18, "span", 22);
    \u0275\u0275element(19, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Regi\xF5es representadas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(25, PqPage_Conditional_12_Conditional_26_Conditional_25_Template, 1, 1, "app-pq-active-by-year", 26);
    \u0275\u0275elementStart(26, "div", 27)(27, "article", 28)(28, "div", 29)(29, "div")(30, "span", 4);
    \u0275\u0275text(31, "Perfil das bolsas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h2");
    \u0275\u0275text(33, "Modalidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "span", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 31);
    \u0275\u0275repeaterCreate(37, PqPage_Conditional_12_Conditional_26_For_38_Template, 7, 5, "div", 32, _forTrack13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "article", 28)(40, "div", 29)(41, "div")(42, "span", 4);
    \u0275\u0275text(43, "Maior concentra\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "h2");
    \u0275\u0275text(45, "Principais institui\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 33);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Conditional_26_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("instituicoes"));
    });
    \u0275\u0275text(47, "Ver todas ");
    \u0275\u0275element(48, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 35);
    \u0275\u0275repeaterCreate(50, PqPage_Conditional_12_Conditional_26_For_51_Template, 7, 3, "div", 36, _forTrack13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.response()) == null ? null : tmp_2_0.actives) || ctx_r1.scholars().length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.response()) == null ? null : tmp_3_0.institutions) || ctx_r1.institutionCounts().length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.regionCounts().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_5_0 = (tmp_5_0 = ctx_r1.response()) == null ? null : tmp_5_0.actives_by_year) ? 25 : -1, tmp_5_0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.scholars().length, " bolsistas");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levelCounts());
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.institutionCounts().slice(0, 6));
  }
}
function PqPage_Conditional_12_Conditional_27_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("N\xEDvel ", item_r9);
  }
}
function PqPage_Conditional_12_Conditional_27_For_39_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r10 = ctx.ngIf;
    \u0275\u0275property("href", url_r10, \u0275\u0275sanitizeUrl)("title", \u0275\u0275pipeBind1(1, 3, "author.researcherProfileTitle"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "author.researcherProfileTitle"));
  }
}
function PqPage_Conditional_12_Conditional_27_For_39_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r11 = ctx.ngIf;
    \u0275\u0275property("href", url_r11, \u0275\u0275sanitizeUrl);
  }
}
function PqPage_Conditional_12_Conditional_27_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 52);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275template(14, PqPage_Conditional_12_Conditional_27_For_39_a_14_Template, 4, 7, "a", 54)(15, PqPage_Conditional_12_Conditional_27_For_39_a_15_Template, 2, 1, "a", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.bs_nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r12.mod_sigla, " ", ctx_r1.level(item_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.BS_IES);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(11, 8, item_r12.bs_start, "MM/yyyy", "UTC"), " \u2014 ", \u0275\u0275pipeBind3(12, 12, item_r12.bs_finish, "MM/yyyy", "UTC"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.brapciUrl(item_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lattesUrl(item_r12));
  }
}
function PqPage_Conditional_12_Conditional_27_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2, "Nenhum bolsista encontrado com estes filtros.");
    \u0275\u0275elementEnd()();
  }
}
function PqPage_Conditional_12_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Rela\xE7\xE3o nominal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Bolsistas e modalidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "label", 43)(10, "span", 44);
    \u0275\u0275text(11, "Buscar bolsista");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "i", 45);
    \u0275\u0275elementStart(13, "input", 46);
    \u0275\u0275listener("ngModelChange", function PqPage_Conditional_12_Conditional_27_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label")(15, "span", 44);
    \u0275\u0275text(16, "Filtrar por n\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 47);
    \u0275\u0275listener("ngModelChange", function PqPage_Conditional_12_Conditional_27_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateLevel($event));
    });
    \u0275\u0275elementStart(18, "option", 48);
    \u0275\u0275text(19, "Todos os n\xEDveis");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, PqPage_Conditional_12_Conditional_27_For_21_Template, 2, 2, "option", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 50)(23, "table", 51)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "Bolsista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Institui\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Vig\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th")(35, "span", 44);
    \u0275\u0275text(36, "Perfis");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, PqPage_Conditional_12_Conditional_27_For_39_Template, 16, 16, "tr", null, \u0275\u0275componentInstance().trackScholar, true, PqPage_Conditional_12_Conditional_27_ForEmpty_40_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredScholars().length, " resultado(s)");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.searchTerm());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.levelFilter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredScholars());
  }
}
function PqPage_Conditional_12_Conditional_28_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 66);
    \u0275\u0275element(10, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "strong", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const \u0275$index_317_r14 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_317_r14 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.regionFor(item_r13.label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r13.count / ctx_r1.maxInstitutionCount() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.count);
  }
}
function PqPage_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "V\xEDnculo institucional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Institui\xE7\xF5es dos bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 61);
    \u0275\u0275repeaterCreate(9, PqPage_Conditional_12_Conditional_28_For_10_Template, 13, 6, "div", 62, _forTrack13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.institutionCounts().length, " institui\xE7\xF5es");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.institutionCounts());
  }
}
function PqPage_Conditional_12_Conditional_29_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 69)(1, "div", 72)(2, "span", 73);
    \u0275\u0275element(3, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10, "bolsistas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 75);
    \u0275\u0275element(12, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.count);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", item_r15.count / ctx_r1.maxRegionCount() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 5, item_r15.percentage, "1.1-1"), "% do total");
  }
}
function PqPage_Conditional_12_Conditional_29_For_20_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const institution_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(institution_r16.label);
  }
}
function PqPage_Conditional_12_Conditional_29_For_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PqPage_Conditional_12_Conditional_29_For_20_For_5_Conditional_0_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const institution_r16 = ctx.$implicit;
    const region_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.regionFor(institution_r16.label) === region_r17.label ? 0 : -1);
  }
}
function PqPage_Conditional_12_Conditional_29_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275repeaterCreate(4, PqPage_Conditional_12_Conditional_29_For_20_For_5_Template, 1, 1, null, null, _forTrack13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const region_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.institutionCounts());
  }
}
function PqPage_Conditional_12_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Distribui\xE7\xE3o territorial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Regi\xF5es dos bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7, "Brasil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 68);
    \u0275\u0275repeaterCreate(9, PqPage_Conditional_12_Conditional_29_For_10_Template, 16, 8, "article", 69, _forTrack13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "article", 70)(12, "div", 29)(13, "div")(14, "span", 4);
    \u0275\u0275text(15, "Composi\xE7\xE3o regional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Institui\xE7\xF5es por regi\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 71);
    \u0275\u0275repeaterCreate(19, PqPage_Conditional_12_Conditional_29_For_20_Template, 6, 1, "div", null, _forTrack13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.regionCounts());
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.regionCounts());
  }
}
function PqPage_Conditional_12_Conditional_30_For_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "span", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "strong", 91);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const state_r20 = ctx_r18.$implicit;
    const \u0275$index_468_r21 = ctx_r18.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_468_r21 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r20.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r20.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 5, state_r20.percentage, "1.1-1"), "% do total");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r20.count);
  }
}
function PqPage_Conditional_12_Conditional_30_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PqPage_Conditional_12_Conditional_30_For_33_Conditional_0_Template, 13, 8, "div", 88);
  }
  if (rf & 2) {
    const state_r20 = ctx.$implicit;
    \u0275\u0275conditional(state_r20.count > 0 ? 0 : -1);
  }
}
function PqPage_Conditional_12_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "span", 4);
    \u0275\u0275text(3, "Distribui\xE7\xE3o estadual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Mapa dos bolsistas por estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76)(9, "div", 77);
    \u0275\u0275element(10, "app-pq-brazil-map", 26);
    \u0275\u0275elementStart(11, "div", 78)(12, "span");
    \u0275\u0275text(13, "Menor concentra\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 79)(15, "i", 80)(16, "i", 81)(17, "i", 82)(18, "i", 83);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Maior concentra\xE7\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "aside", 84)(22, "div", 29)(23, "div")(24, "span", 4);
    \u0275\u0275text(25, "Ranking estadual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h2", 85);
    \u0275\u0275text(27, "Bolsistas por UF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 86);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Conditional_30_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportStateCsv());
    });
    \u0275\u0275element(29, "i", 87);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Exportar CSV");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(32, PqPage_Conditional_12_Conditional_30_For_33_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.scholars().length, " bolsistas");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.stateCounts());
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.stateCounts());
  }
}
function PqPage_Conditional_12_Conditional_31_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pq-applications", 26);
  }
  if (rf & 2) {
    \u0275\u0275property("data", ctx);
  }
}
function PqPage_Conditional_12_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, "N\xE3o h\xE1 dados de concess\xF5es dispon\xEDveis.");
    \u0275\u0275elementEnd();
  }
}
function PqPage_Conditional_12_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PqPage_Conditional_12_Conditional_31_Conditional_0_Template, 1, 1, "app-pq-applications", 26)(1, PqPage_Conditional_12_Conditional_31_Conditional_1_Template, 2, 0, "div", 92);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = (tmp_2_0 = ctx_r1.response()) == null ? null : tmp_2_0.applications) ? 0 : 1, tmp_2_0);
  }
}
function PqPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 11)(1, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("resumo"));
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Resumo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("bolsistas"));
    });
    \u0275\u0275element(6, "i", 14);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Bolsistas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("instituicoes"));
    });
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Institui\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("regioes"));
    });
    \u0275\u0275element(14, "i", 16);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Regi\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("mapa"));
    });
    \u0275\u0275element(18, "i", 17);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Mapa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 12);
    \u0275\u0275listener("click", function PqPage_Conditional_12_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("concessoes"));
    });
    \u0275\u0275element(22, "i", 18);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Concess\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275conditionalCreate(26, PqPage_Conditional_12_Conditional_26_Template, 52, 5);
    \u0275\u0275conditionalCreate(27, PqPage_Conditional_12_Conditional_27_Template, 41, 4);
    \u0275\u0275conditionalCreate(28, PqPage_Conditional_12_Conditional_28_Template, 11, 1);
    \u0275\u0275conditionalCreate(29, PqPage_Conditional_12_Conditional_29_Template, 21, 0);
    \u0275\u0275conditionalCreate(30, PqPage_Conditional_12_Conditional_30_Template, 34, 2);
    \u0275\u0275conditionalCreate(31, PqPage_Conditional_12_Conditional_31_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "resumo");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "resumo");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "bolsistas");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "bolsistas");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "instituicoes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "instituicoes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "regioes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "regioes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "mapa");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "mapa");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "concessoes");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "concessoes");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.activeTab() === "resumo" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "bolsistas" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "instituicoes" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "regioes" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "mapa" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "concessoes" ? 31 : -1);
  }
}
var INSTITUTION_REGION = {
  CNEN: "Sudeste",
  IBICT: "Sudeste",
  UEL: "Sul",
  UFC: "Nordeste",
  UFAL: "Nordeste",
  UFBA: "Nordeste",
  UFCA: "Nordeste",
  UFES: "Sudeste",
  UFG: "Centro-Oeste",
  UFMG: "Sudeste",
  UFPA: "Norte",
  UFPB: "Nordeste",
  UFPE: "Nordeste",
  UFF: "Sudeste",
  UFRGS: "Sul",
  UFRJ: "Sudeste",
  UFS: "Nordeste",
  UFSC: "Sul",
  UFSCAR: "Sudeste",
  UnB: "Centro-Oeste",
  UNESP: "Sudeste",
  UNIRIO: "Sudeste",
  USP: "Sudeste"
};
var INSTITUTION_STATE = {
  CNEN: "RJ",
  IBICT: "RJ",
  UEL: "PR",
  UFC: "CE",
  UFAL: "AL",
  UFBA: "BA",
  UFCA: "CE",
  UFES: "ES",
  UFG: "GO",
  UFMG: "MG",
  UFPA: "PA",
  UFPB: "PB",
  UFPE: "PE",
  UFF: "RJ",
  UFRGS: "RS",
  UFRJ: "RJ",
  UFS: "SE",
  UFSC: "SC",
  UFSCAR: "SP",
  UnB: "DF",
  UNESP: "SP",
  UNIRIO: "RJ",
  USP: "SP"
};
var STATE_INFO = {
  AC: { name: "Acre", ibgeCode: "12" },
  AL: { name: "Alagoas", ibgeCode: "27" },
  AP: { name: "Amap\xE1", ibgeCode: "16" },
  AM: { name: "Amazonas", ibgeCode: "13" },
  BA: { name: "Bahia", ibgeCode: "29" },
  CE: { name: "Cear\xE1", ibgeCode: "23" },
  DF: { name: "Distrito Federal", ibgeCode: "53" },
  ES: { name: "Esp\xEDrito Santo", ibgeCode: "32" },
  GO: { name: "Goi\xE1s", ibgeCode: "52" },
  MA: { name: "Maranh\xE3o", ibgeCode: "21" },
  MT: { name: "Mato Grosso", ibgeCode: "51" },
  MS: { name: "Mato Grosso do Sul", ibgeCode: "50" },
  MG: { name: "Minas Gerais", ibgeCode: "31" },
  PA: { name: "Par\xE1", ibgeCode: "15" },
  PB: { name: "Para\xEDba", ibgeCode: "25" },
  PR: { name: "Paran\xE1", ibgeCode: "41" },
  PE: { name: "Pernambuco", ibgeCode: "26" },
  PI: { name: "Piau\xED", ibgeCode: "22" },
  RJ: { name: "Rio de Janeiro", ibgeCode: "33" },
  RN: { name: "Rio Grande do Norte", ibgeCode: "24" },
  RS: { name: "Rio Grande do Sul", ibgeCode: "43" },
  RO: { name: "Rond\xF4nia", ibgeCode: "11" },
  RR: { name: "Roraima", ibgeCode: "14" },
  SC: { name: "Santa Catarina", ibgeCode: "42" },
  SP: { name: "S\xE3o Paulo", ibgeCode: "35" },
  SE: { name: "Sergipe", ibgeCode: "28" },
  TO: { name: "Tocantins", ibgeCode: "17" }
};
var PqBrazilMapComponent = class _PqBrazilMapComponent {
  http = inject(HttpClient);
  shapes = signal([], ...ngDevMode ? [{ debugName: "shapes" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  stateData = [];
  set data(value) {
    this.stateData = value || [];
    if (!this.loading())
      this.buildShapes(this.geoJson);
  }
  geoJson = null;
  ngOnInit() {
    this.http.get("assets/data/brasil-estados.geojson").subscribe({
      next: (geoJson) => {
        this.geoJson = geoJson;
        this.buildShapes(geoJson);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
  buildShapes(geoJson) {
    if (!geoJson?.features)
      return;
    const projection = identity_default().reflectY(true).fitExtent([[18, 18], [602, 552]], geoJson);
    const pathGenerator = path_default(projection);
    const max = Math.max(...this.stateData.map((item) => item.count), 1);
    const byIbge = new Map(this.stateData.map((item) => [item.ibgeCode, item]));
    this.shapes.set(geoJson.features.map((feature) => {
      const state = byIbge.get(String(feature.properties?.codarea)) || { code: "", ibgeCode: "", label: "", count: 0, percentage: 0 };
      const [x, y] = pathGenerator.centroid(feature);
      const ratio = state.count / max;
      return __spreadProps(__spreadValues({}, state), {
        name: state.label,
        path: pathGenerator(feature) || "",
        x,
        y,
        intensity: state.count === 0 ? 0 : ratio <= 0.15 ? 1 : ratio <= 0.3 ? 2 : ratio <= 0.5 ? 3 : ratio <= 0.75 ? 4 : 5
      });
    }));
  }
  static \u0275fac = function PqBrazilMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqBrazilMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqBrazilMapComponent, selectors: [["app-pq-brazil-map"]], inputs: { data: "data" }, decls: 3, vars: 1, consts: [[1, "map-status"], [1, "map-status", "text-danger"], ["viewBox", "0 0 620 570", "role", "img", "aria-labelledby", "map-title map-desc", 1, "brazil-map"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["id", "map-title"], ["id", "map-desc"], [1, "state-label"]], template: function PqBrazilMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PqBrazilMapComponent_Conditional_0_Template, 3, 0, "div", 0)(1, PqBrazilMapComponent_Conditional_1_Template, 2, 0, "div", 1)(2, PqBrazilMapComponent_Conditional_2_Template, 7, 0, ":svg:svg", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.error() ? 1 : 2);
    }
  }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.map-status[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 420px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--theme-muted);\n}\n.brazil-map[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 570px;\n}\n.state-shape[_ngcontent-%COMP%] {\n  stroke: var(--theme-card-bg);\n  stroke-width: 1.5;\n  vector-effect: non-scaling-stroke;\n  transition: fill 0.2s ease;\n}\n.intensity-0[_ngcontent-%COMP%] {\n  fill: var(--theme-sand);\n}\n.intensity-1[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 18%, var(--theme-sand));\n}\n.intensity-2[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 38%, var(--theme-sand));\n}\n.intensity-3[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 58%, var(--theme-sand));\n}\n.intensity-4[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 78%, var(--theme-sand));\n}\n.intensity-5[_ngcontent-%COMP%] {\n  fill: var(--pq-map-color, #9a654d);\n}\n.state-shape[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.92);\n  stroke: var(--theme-ink);\n}\n.state-label[_ngcontent-%COMP%] {\n  fill: #fff;\n  font: 700 12px "Raleway", sans-serif;\n  text-anchor: middle;\n  pointer-events: none;\n  paint-order: stroke;\n  stroke: rgba(0, 0, 0, 0.28);\n  stroke-width: 2px;\n}\n/*# sourceMappingURL=pq.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqBrazilMapComponent, [{
    type: Component,
    args: [{ selector: "app-pq-brazil-map", standalone: true, imports: [CommonModule], template: `
    @if (loading()) {
      <div class="map-status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando mapa\u2026</div>
    } @else if (error()) {
      <div class="map-status text-danger">N\xE3o foi poss\xEDvel carregar a malha do mapa.</div>
    } @else {
      <svg class="brazil-map" viewBox="0 0 620 570" role="img" aria-labelledby="map-title map-desc">
        <title id="map-title">Distribui\xE7\xE3o de bolsistas por estado</title>
        <desc id="map-desc">Mapa coropl\xE9tico do Brasil. Estados mais escuros possuem mais bolsistas.</desc>
        @for (shape of shapes(); track shape.code) {
          <path [attr.d]="shape.path" [attr.class]="'state-shape intensity-' + shape.intensity">
            <title>{{ shape.name }}: {{ shape.count }} bolsista(s)</title>
          </path>
          @if (shape.count > 0) {<text [attr.x]="shape.x" [attr.y]="shape.y" class="state-label">{{ shape.code }}</text>}
        }
      </svg>
    }
  `, styles: ['/* angular:styles/component:scss;801017c61b767774a162663bf49a78af3a2ecb33cb195dfbca9af53311d07ab7;D:/Projeto/BrapciAngular2/src/app/pages/pq/pq.page.ts */\n:host {\n  display: block;\n}\n.map-status {\n  display: flex;\n  min-height: 420px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--theme-muted);\n}\n.brazil-map {\n  display: block;\n  width: 100%;\n  max-height: 570px;\n}\n.state-shape {\n  stroke: var(--theme-card-bg);\n  stroke-width: 1.5;\n  vector-effect: non-scaling-stroke;\n  transition: fill 0.2s ease;\n}\n.intensity-0 {\n  fill: var(--theme-sand);\n}\n.intensity-1 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 18%, var(--theme-sand));\n}\n.intensity-2 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 38%, var(--theme-sand));\n}\n.intensity-3 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 58%, var(--theme-sand));\n}\n.intensity-4 {\n  fill: color-mix(in srgb, var(--pq-map-color, #9a654d) 78%, var(--theme-sand));\n}\n.intensity-5 {\n  fill: var(--pq-map-color, #9a654d);\n}\n.state-shape:hover {\n  filter: brightness(0.92);\n  stroke: var(--theme-ink);\n}\n.state-label {\n  fill: #fff;\n  font: 700 12px "Raleway", sans-serif;\n  text-anchor: middle;\n  pointer-events: none;\n  paint-order: stroke;\n  stroke: rgba(0, 0, 0, 0.28);\n  stroke-width: 2px;\n}\n/*# sourceMappingURL=pq.page.css.map */\n'] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqBrazilMapComponent, { className: "PqBrazilMapComponent", filePath: "src/app/pages/pq/pq.page.ts", lineNumber: 85 });
})();
var PqPage = class _PqPage {
  http = inject(HttpClient);
  endpoint = "https://cip.brapci.inf.br/api/pq";
  activeTab = signal("resumo", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  response = signal(null, ...ngDevMode ? [{ debugName: "response" }] : []);
  scholars = signal([], ...ngDevMode ? [{ debugName: "scholars" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  levelFilter = signal("todos", ...ngDevMode ? [{ debugName: "levelFilter" }] : []);
  levels = computed(() => [...new Set(this.scholars().map((item) => this.level(item)))].sort(this.sortLevel), ...ngDevMode ? [{ debugName: "levels" }] : []);
  filteredScholars = computed(() => {
    const term = this.normalize(this.searchTerm());
    const level = this.levelFilter();
    return this.scholars().filter((item) => (level === "todos" || this.level(item) === level) && (!term || this.normalize(`${item.bs_nome} ${item.BS_IES} ${this.level(item)}`).includes(term))).sort((a, b) => a.bs_nome.localeCompare(b.bs_nome, "pt-BR", { sensitivity: "base" }));
  }, ...ngDevMode ? [{ debugName: "filteredScholars" }] : []);
  levelCounts = computed(() => this.countBy(this.scholars(), (item) => this.level(item), this.sortLevel), ...ngDevMode ? [{ debugName: "levelCounts" }] : []);
  institutionCounts = computed(() => this.countBy(this.scholars(), (item) => item.BS_IES), ...ngDevMode ? [{ debugName: "institutionCounts" }] : []);
  regionCounts = computed(() => this.countBy(this.scholars(), (item) => this.regionFor(item.BS_IES)), ...ngDevMode ? [{ debugName: "regionCounts" }] : []);
  stateCounts = computed(() => {
    const counts = /* @__PURE__ */ new Map();
    this.scholars().forEach((item) => {
      const code = INSTITUTION_STATE[item.BS_IES];
      if (code)
        counts.set(code, (counts.get(code) || 0) + 1);
    });
    const total = this.scholars().length || 1;
    return Object.entries(STATE_INFO).map(([code, info]) => ({ code, ibgeCode: info.ibgeCode, label: info.name, count: counts.get(code) || 0, percentage: (counts.get(code) || 0) / total * 100 })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "pt-BR"));
  }, ...ngDevMode ? [{ debugName: "stateCounts" }] : []);
  maxInstitutionCount = computed(() => this.institutionCounts()[0]?.count || 1, ...ngDevMode ? [{ debugName: "maxInstitutionCount" }] : []);
  maxRegionCount = computed(() => this.regionCounts()[0]?.count || 1, ...ngDevMode ? [{ debugName: "maxRegionCount" }] : []);
  ngOnInit() {
    this.loadData();
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  updateSearch(value) {
    this.searchTerm.set(value);
  }
  updateLevel(value) {
    this.levelFilter.set(value);
  }
  loadData() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get(this.endpoint).subscribe({
      next: (response) => {
        this.response.set(response);
        this.scholars.set(Array.isArray(response.data) ? response.data : []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("N\xE3o foi poss\xEDvel carregar os dados dos bolsistas. Tente novamente.");
        this.loading.set(false);
      }
    });
  }
  level(item) {
    return item.bs_nivel?.trim() || "N\xE3o informado";
  }
  regionFor(institution) {
    return INSTITUTION_REGION[institution] || "N\xE3o informada";
  }
  lattesUrl(item) {
    return item.bs_lattes && item.bs_lattes !== "NI" ? `https://lattes.cnpq.br/${item.bs_lattes}` : null;
  }
  brapciUrl(item) {
    return item.bs_rdf_id && item.bs_rdf_id !== "0" ? `/v/${item.bs_rdf_id}` : null;
  }
  trackScholar(_, item) {
    return item.id_bb;
  }
  exportStateCsv() {
    const populatedStates = this.stateCounts().filter((state) => state.count > 0);
    const rows = populatedStates.map((state, index) => [
      index + 1,
      state.code,
      state.label,
      state.count,
      state.percentage.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    ]);
    const csv = [["Posi\xE7\xE3o", "UF", "Estado", "Bolsistas", "Percentual do total"], ...rows].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "bolsistas-pq-por-estado.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }
  countBy(items, label, sortLabels) {
    const counts = /* @__PURE__ */ new Map();
    items.forEach((item) => counts.set(label(item), (counts.get(label(item)) || 0) + 1));
    const total = items.length || 1;
    return [...counts.entries()].map(([itemLabel, count]) => ({ label: itemLabel, count, percentage: count / total * 100 })).sort((a, b) => sortLabels ? sortLabels(a.label, b.label) : b.count - a.count || a.label.localeCompare(b.label));
  }
  sortLevel = (a, b) => {
    const order = ["A", "B", "C", "1A", "1B", "1C", "1D", "2"];
    return (order.indexOf(a) < 0 ? 99 : order.indexOf(a)) - (order.indexOf(b) < 0 ? 99 : order.indexOf(b));
  };
  normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  static \u0275fac = function PqPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PqPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PqPage, selectors: [["app-pq-page"]], decls: 13, vars: 1, consts: [["aria-labelledby", "pq-title", 1, "pq-page", "py-4"], [1, "container"], [1, "pq-hero"], [1, "pq-hero-copy"], [1, "eyebrow"], ["id", "pq-title"], ["src", "assets/logos/logo_pq.png", "alt", "Base de dados dos bolsistas PQ", 1, "pq-logo"], ["role", "status", "aria-live", "polite", 1, "status-panel"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], ["aria-label", "Visualiza\xE7\xF5es dos bolsistas", "role", "tablist", 1, "pq-tabs"], ["type", "button", "role", "tab", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-grid-1x2"], ["aria-hidden", "true", 1, "bi", "bi-people"], ["aria-hidden", "true", 1, "bi", "bi-building"], ["aria-hidden", "true", 1, "bi", "bi-geo-alt"], ["aria-hidden", "true", 1, "bi", "bi-map"], ["aria-hidden", "true", 1, "bi", "bi-award"], ["role", "tabpanel", 1, "tab-content"], [1, "summary-grid"], [1, "metric-card", "metric-primary"], [1, "metric-icon"], ["aria-hidden", "true", 1, "bi", "bi-person-check"], [1, "metric-card"], ["aria-hidden", "true", 1, "bi", "bi-bank"], [3, "data"], [1, "content-grid"], [1, "panel"], [1, "panel-heading"], [1, "total-label"], [1, "level-list"], [1, "level-row"], ["type", "button", 1, "text-action", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-arrow-right"], [1, "ranking-list"], [1, "ranking-row"], [1, "level-badge"], ["role", "img", 1, "level-progress"], [1, "rank"], [1, "section-heading"], [1, "result-count"], [1, "filters"], [1, "search-field"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "bi", "bi-search"], ["type", "search", "placeholder", "Buscar por nome ou institui\xE7\xE3o", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "todos"], [3, "value"], [1, "table-responsive", "scholar-table-wrap"], [1, "table", "align-middle", "scholar-table"], [1, "text-nowrap"], [1, "profile-links"], ["target", "_blank", "rel", "noopener", 3, "href", "title", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "aria-label", "Abrir curr\xEDculo Lattes", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", "title"], ["aria-hidden", "true", 1, "bi", "bi-journal-text"], ["target", "_blank", "rel", "noopener", "aria-label", "Abrir curr\xEDculo Lattes", 3, "href"], ["aria-hidden", "true", 1, "bi", "bi-box-arrow-up-right"], ["colspan", "5", 1, "empty-state"], [1, "bar-list"], [1, "bar-row"], [1, "bar-rank"], [1, "bar-main"], [1, "bar-label"], [1, "bar-track"], [1, "bar-value"], [1, "region-grid"], [1, "region-card"], [1, "panel", "mt-4"], [1, "region-institutions"], [1, "region-top"], [1, "region-pin"], ["aria-hidden", "true", 1, "bi", "bi-geo-alt-fill"], [1, "region-share"], [1, "map-layout"], [1, "map-panel"], ["aria-label", "Legenda de intensidade", 1, "map-legend"], [1, "legend-step", "level-1"], [1, "legend-step", "level-2"], [1, "legend-step", "level-3"], [1, "legend-step", "level-4"], [1, "legend-step", "level-5"], ["aria-labelledby", "state-ranking-title", 1, "state-ranking"], ["id", "state-ranking-title"], ["type", "button", "aria-label", "Exportar ranking estadual para CSV", 1, "csv-button", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-file-earmark-spreadsheet"], [1, "state-row"], [1, "state-position"], [1, "state-code"], [1, "state-value"], [1, "empty-state"]], template: function PqPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "header", 2)(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6, "Panorama da Ci\xEAncia da Informa\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Bolsistas de Produtividade CNPq em Ci\xEAncia da Informa\xE7\xE3o");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, PqPage_Conditional_10_Template, 3, 0, "div", 7)(11, PqPage_Conditional_11_Template, 5, 1, "div", 8)(12, PqPage_Conditional_12_Template, 32, 24);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.error() ? 11 : 12);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslateModule, BreadcrumbsComponent, PqBrazilMapComponent, PqActiveByYearComponent, PqApplicationsComponent, DecimalPipe, DatePipe, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.pq-page[_ngcontent-%COMP%] {\n  --pq-accent: #9a654d;\n  --pq-accent-dark: #704330;\n  --pq-accent-soft: #f4e8e1;\n  --pq-green: #3b796b;\n  --pq-series-1: #4f8296;\n  --pq-series-2: #a6664e;\n  --pq-series-3: #d5a24f;\n  --pq-series-4: #577b68;\n  --pq-series-5: #7d6f9b;\n  --pq-series-6: #b27692;\n  --pq-series-7: #6b7892;\n  --pq-series-8: #7da765;\n  --pq-series-9: #c17b5c;\n  --pq-series-10: #4f9a91;\n  --pq-series-11: #9a7452;\n  --pq-series-12: #657eaa;\n  color: var(--theme-ink);\n  min-height: 70vh;\n}\n.pq-hero[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 210px;\n  margin: 1rem 0 1.5rem;\n  padding: 2.25rem 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--pq-accent) 25%, var(--theme-line));\n  border-radius: 1.25rem;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      color-mix(in srgb, var(--pq-accent) 13%, transparent),\n      transparent 34%),\n    linear-gradient(\n      125deg,\n      var(--theme-card-bg),\n      color-mix(in srgb, var(--theme-sand) 70%, transparent));\n}\n.pq-hero-copy[_ngcontent-%COMP%] {\n  max-width: 690px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.pq-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(1.9rem, 4vw, 3.25rem);\n  line-height: 1.08;\n}\n.pq-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 620px;\n  margin: 0;\n  color: var(--theme-muted);\n  font-size: 1.05rem;\n}\n.pq-logo[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.status-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 180px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n}\n.pq-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  margin-bottom: 1.5rem;\n  padding: 0.35rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.8rem 1rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: 0;\n  border-radius: 0.6rem;\n  color: var(--theme-muted);\n  background: transparent;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--pq-accent) 7%, transparent);\n}\n.pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--pq-accent-dark);\n  box-shadow: 0 4px 12px rgba(55, 32, 22, 0.18);\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.metric-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.region-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1.35rem;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 1rem;\n}\n.metric-card.metric-primary[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--pq-accent) 35%, var(--theme-line));\n}\n.metric-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 1.2rem;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n  line-height: 1;\n}\n.metric-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.88rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 1rem;\n}\n.panel-heading[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.total-label[_ngcontent-%COMP%], \n.result-count[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.level-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n.level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr 2rem;\n  align-items: center;\n  gap: 0.75rem;\n}\n.level-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 2.2rem;\n  padding: 0.28rem 0.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.level-progress[_ngcontent-%COMP%], \n.bar-track[_ngcontent-%COMP%], \n.region-share[_ngcontent-%COMP%] {\n  height: 8px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.level-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.bar-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.region-share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--pq-accent);\n}\n.text-action[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.ranking-list[_ngcontent-%COMP%] {\n  display: grid;\n}\n.ranking-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8rem 1fr auto;\n  padding: 0.72rem 0;\n  align-items: center;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.ranking-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.ranking-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  color: var(--theme-muted);\n  font-size: 0.83rem;\n}\n.rank[_ngcontent-%COMP%], \n.bar-rank[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-variant-numeric: tabular-nums;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(260px, 1fr) minmax(180px, 240px);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.search-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.9rem;\n  z-index: 1;\n  color: var(--theme-muted);\n  transform: translateY(-50%);\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 2.4rem;\n}\n.scholar-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.scholar-table[_ngcontent-%COMP%] {\n  --bs-table-color: var(--theme-ink);\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: var(--theme-ink);\n  --bs-table-hover-color: var(--theme-ink);\n  margin: 0;\n  color: var(--theme-ink);\n}\n.scholar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border-color: var(--theme-line);\n}\n.profile-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.8rem;\n  white-space: nowrap;\n}\n.profile-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pq-accent);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.bar-list[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.4rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem 1fr 2.5rem;\n  padding: 1rem 0;\n  align-items: center;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.bar-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.bar-value[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.region-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.region-card[_ngcontent-%COMP%] {\n  padding: 1.35rem;\n  border-radius: 1rem;\n}\n.region-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.region-pin[_ngcontent-%COMP%] {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-green);\n  background: color-mix(in srgb, var(--pq-green) 12%, transparent);\n}\n.region-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.region-pin), \n.region-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--theme-muted);\n}\n.region-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n}\n.region-share[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.region-share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--pq-green);\n}\n.region-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n  text-align: right;\n}\n.region-institutions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.region-institutions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0.55rem 0 0;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.region-institutions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: var(--theme-muted);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.map-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.75fr);\n  gap: 1rem;\n  align-items: start;\n}\n.map-panel[_ngcontent-%COMP%], \n.state-ranking[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.map-panel[_ngcontent-%COMP%] {\n  --pq-map-color: var(--pq-accent);\n  padding: 1rem 1.5rem;\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.75rem 0 0.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.76rem;\n}\n.legend-step[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 9px;\n  border-radius: 999px;\n}\n.legend-step.level-1[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 18%, var(--theme-sand));\n}\n.legend-step.level-2[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 38%, var(--theme-sand));\n}\n.legend-step.level-3[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 58%, var(--theme-sand));\n}\n.legend-step.level-4[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--pq-accent) 78%, var(--theme-sand));\n}\n.legend-step.level-5[_ngcontent-%COMP%] {\n  background: var(--pq-accent);\n}\n.state-ranking[_ngcontent-%COMP%] {\n  padding: 1.35rem;\n}\n.csv-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.45rem 0.65rem;\n  align-items: center;\n  gap: 0.35rem;\n  border: 1px solid var(--pq-accent);\n  border-radius: 0.5rem;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.75rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.csv-button[_ngcontent-%COMP%]:hover, \n.csv-button[_ngcontent-%COMP%]:focus-visible {\n  color: var(--theme-card-bg);\n  background: var(--pq-accent);\n}\n.state-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5rem 2.5rem 1fr 2rem;\n  padding: 0.68rem 0;\n  align-items: center;\n  gap: 0.55rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.state-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.state-position[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.state-code[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  border-radius: 0.55rem;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-weight: 700;\n}\n.state-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.state-value[_ngcontent-%COMP%] {\n  text-align: right;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-page[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-page[_ngcontent-%COMP%] {\n  --pq-accent: #d29b7e;\n  --pq-accent-dark: #865943;\n  --pq-accent-soft: #35261f;\n  --pq-green: #74bbaa;\n  --pq-series-1: #72abc0;\n  --pq-series-2: #d28b6f;\n  --pq-series-3: #e0b561;\n  --pq-series-4: #79a88c;\n  --pq-series-5: #a092c0;\n  --pq-series-6: #ca8eaa;\n  --pq-series-7: #91a0bd;\n  --pq-series-8: #9fc482;\n  --pq-series-9: #dd9777;\n  --pq-series-10: #72bcb3;\n  --pq-series-11: #bd9773;\n  --pq-series-12: #89a1d0;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-logo[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-logo[_ngcontent-%COMP%] {\n  mix-blend-mode: normal;\n  opacity: 0.9;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pq-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .scholar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n@media (max-width: 991.98px) {\n  .map-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767.98px) {\n  .pq-hero[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 1.5rem;\n  }\n  .pq-logo[_ngcontent-%COMP%] {\n    width: 105px;\n    height: 105px;\n  }\n  .pq-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .summary-grid[_ngcontent-%COMP%], \n   .content-grid[_ngcontent-%COMP%], \n   .region-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .region-institutions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .pq-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .pq-logo[_ngcontent-%COMP%] {\n    width: 72px;\n    height: 72px;\n  }\n  .pq-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.7rem 0.35rem;\n    font-size: 0.82rem;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .region-institutions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pq.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PqPage, [{
    type: Component,
    args: [{ selector: "app-pq-page", standalone: true, imports: [CommonModule, FormsModule, TranslateModule, BreadcrumbsComponent, PqBrazilMapComponent, PqActiveByYearComponent, PqApplicationsComponent], template: `<section class="pq-page py-4" aria-labelledby="pq-title">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>
    <header class="pq-hero">
      <div class="pq-hero-copy"><span class="eyebrow">Panorama da Ci\xEAncia da Informa\xE7\xE3o</span><h1 id="pq-title">Bolsistas de Produtividade CNPq em Ci\xEAncia da Informa\xE7\xE3o</h1></div>
      <img src="assets/logos/logo_pq.png" alt="Base de dados dos bolsistas PQ" class="pq-logo" />
    </header>

    @if (loading()) {
      <div class="status-panel" role="status" aria-live="polite"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Carregando dados dos bolsistas\u2026</div>
    } @else if (error()) {
      <div class="alert alert-warning d-flex flex-wrap align-items-center justify-content-between gap-3" role="alert"><span>{{ error() }}</span><button type="button" class="btn btn-outline-dark btn-sm" (click)="loadData()">Tentar novamente</button></div>
    } @else {
      <nav class="pq-tabs" aria-label="Visualiza\xE7\xF5es dos bolsistas" role="tablist">
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'resumo'" [class.active]="activeTab() === 'resumo'" (click)="setTab('resumo')"><i class="bi bi-grid-1x2" aria-hidden="true"></i><span>Resumo</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'bolsistas'" [class.active]="activeTab() === 'bolsistas'" (click)="setTab('bolsistas')"><i class="bi bi-people" aria-hidden="true"></i><span>Bolsistas</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'instituicoes'" [class.active]="activeTab() === 'instituicoes'" (click)="setTab('instituicoes')"><i class="bi bi-building" aria-hidden="true"></i><span>Institui\xE7\xF5es</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'regioes'" [class.active]="activeTab() === 'regioes'" (click)="setTab('regioes')"><i class="bi bi-geo-alt" aria-hidden="true"></i><span>Regi\xF5es</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'mapa'" [class.active]="activeTab() === 'mapa'" (click)="setTab('mapa')"><i class="bi bi-map" aria-hidden="true"></i><span>Mapa</span></button>
        <button type="button" role="tab" [attr.aria-selected]="activeTab() === 'concessoes'" [class.active]="activeTab() === 'concessoes'" (click)="setTab('concessoes')"><i class="bi bi-award" aria-hidden="true"></i><span>Concess\xF5es</span></button>
      </nav>

      <div class="tab-content" role="tabpanel">
        @if (activeTab() === 'resumo') {
          <div class="summary-grid">
            <article class="metric-card metric-primary"><span class="metric-icon"><i class="bi bi-person-check" aria-hidden="true"></i></span><div><strong>{{ response()?.actives || scholars().length }}</strong><span>Bolsistas ativos</span></div></article>
            <article class="metric-card"><span class="metric-icon"><i class="bi bi-bank" aria-hidden="true"></i></span><div><strong>{{ response()?.institutions || institutionCounts().length }}</strong><span>Institui\xE7\xF5es</span></div></article>
            <article class="metric-card"><span class="metric-icon"><i class="bi bi-map" aria-hidden="true"></i></span><div><strong>{{ regionCounts().length }}</strong><span>Regi\xF5es representadas</span></div></article>
          </div>
          @if (response()?.actives_by_year; as history) {
            <app-pq-active-by-year [data]="history"></app-pq-active-by-year>
          }
          <div class="content-grid">
            <article class="panel"><div class="panel-heading"><div><span class="eyebrow">Perfil das bolsas</span><h2>Modalidades</h2></div><span class="total-label">{{ scholars().length }} bolsistas</span></div><div class="level-list">
              @for (item of levelCounts(); track item.label) {<div class="level-row"><span class="level-badge">{{ item.label }}</span><div class="level-progress" role="img" [attr.aria-label]="'N\xEDvel ' + item.label + ': ' + item.count + ' bolsistas'"><span [style.width.%]="item.percentage"></span></div><strong>{{ item.count }}</strong></div>}
            </div></article>
            <article class="panel"><div class="panel-heading"><div><span class="eyebrow">Maior concentra\xE7\xE3o</span><h2>Principais institui\xE7\xF5es</h2></div><button class="text-action" type="button" (click)="setTab('instituicoes')">Ver todas <i class="bi bi-arrow-right" aria-hidden="true"></i></button></div><div class="ranking-list">
              @for (item of institutionCounts().slice(0, 6); track item.label; let index = $index) {<div class="ranking-row"><span class="rank">{{ index + 1 }}</span><strong>{{ item.label }}</strong><span>{{ item.count }} bolsistas</span></div>}
            </div></article>
          </div>
        }

        @if (activeTab() === 'bolsistas') {
          <div class="section-heading"><div><span class="eyebrow">Rela\xE7\xE3o nominal</span><h2>Bolsistas e modalidades</h2></div><span class="result-count">{{ filteredScholars().length }} resultado(s)</span></div>
          <div class="filters"><label class="search-field"><span class="visually-hidden">Buscar bolsista</span><i class="bi bi-search" aria-hidden="true"></i><input type="search" class="form-control" placeholder="Buscar por nome ou institui\xE7\xE3o" [ngModel]="searchTerm()" (ngModelChange)="updateSearch($event)" /></label><label><span class="visually-hidden">Filtrar por n\xEDvel</span><select class="form-select" [ngModel]="levelFilter()" (ngModelChange)="updateLevel($event)"><option value="todos">Todos os n\xEDveis</option>@for (item of levels(); track item) {<option [value]="item">N\xEDvel {{ item }}</option>}</select></label></div>
          <div class="table-responsive scholar-table-wrap"><table class="table align-middle scholar-table"><thead><tr><th>Bolsista</th><th>Modalidade</th><th>Institui\xE7\xE3o</th><th>Vig\xEAncia</th><th><span class="visually-hidden">Perfis</span></th></tr></thead><tbody>
            @for (item of filteredScholars(); track trackScholar($index, item)) {<tr><td><strong>{{ item.bs_nome }}</strong></td><td><span class="level-badge">{{ item.mod_sigla }} {{ level(item) }}</span></td><td>{{ item.BS_IES }}</td><td class="text-nowrap">{{ item.bs_start | date:'MM/yyyy':'UTC' }} \u2014 {{ item.bs_finish | date:'MM/yyyy':'UTC' }}</td><td class="profile-links"><a *ngIf="brapciUrl(item) as url" [href]="url" target="_blank" rel="noopener" [title]="'author.researcherProfileTitle' | translate" [attr.aria-label]="'author.researcherProfileTitle' | translate"><i class="bi bi-journal-text" aria-hidden="true"></i></a><a *ngIf="lattesUrl(item) as url" [href]="url" target="_blank" rel="noopener" aria-label="Abrir curr\xEDculo Lattes"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a></td></tr>} @empty {<tr><td colspan="5" class="empty-state">Nenhum bolsista encontrado com estes filtros.</td></tr>}
          </tbody></table></div>
        }

        @if (activeTab() === 'instituicoes') {
          <div class="section-heading"><div><span class="eyebrow">V\xEDnculo institucional</span><h2>Institui\xE7\xF5es dos bolsistas</h2></div><span class="result-count">{{ institutionCounts().length }} institui\xE7\xF5es</span></div>
          <div class="bar-list">@for (item of institutionCounts(); track item.label; let index = $index) {<div class="bar-row"><span class="bar-rank">{{ index + 1 }}</span><div class="bar-main"><div class="bar-label"><strong>{{ item.label }}</strong><span>{{ regionFor(item.label) }}</span></div><div class="bar-track"><span [style.width.%]="item.count / maxInstitutionCount() * 100"></span></div></div><strong class="bar-value">{{ item.count }}</strong></div>}</div>
        }

        @if (activeTab() === 'regioes') {
          <div class="section-heading"><div><span class="eyebrow">Distribui\xE7\xE3o territorial</span><h2>Regi\xF5es dos bolsistas</h2></div><span class="result-count">Brasil</span></div>
          <div class="region-grid">@for (item of regionCounts(); track item.label) {<article class="region-card"><div class="region-top"><span class="region-pin"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></span><div><span>{{ item.label }}</span><strong>{{ item.count }}</strong><small>bolsistas</small></div></div><div class="region-share"><span [style.width.%]="item.count / maxRegionCount() * 100"></span></div><p>{{ item.percentage | number:'1.1-1' }}% do total</p></article>}</div>
          <article class="panel mt-4"><div class="panel-heading"><div><span class="eyebrow">Composi\xE7\xE3o regional</span><h2>Institui\xE7\xF5es por regi\xE3o</h2></div></div><div class="region-institutions">@for (region of regionCounts(); track region.label) {<div><strong>{{ region.label }}</strong><p>@for (institution of institutionCounts(); track institution.label) {@if (regionFor(institution.label) === region.label) {<span>{{ institution.label }}</span>}}</p></div>}</div></article>
        }

        @if (activeTab() === 'mapa') {
          <div class="section-heading"><div><span class="eyebrow">Distribui\xE7\xE3o estadual</span><h2>Mapa dos bolsistas por estado</h2></div><span class="result-count">{{ scholars().length }} bolsistas</span></div>
          <div class="map-layout">
            <div class="map-panel">
              <app-pq-brazil-map [data]="stateCounts()"></app-pq-brazil-map>
              <div class="map-legend" aria-label="Legenda de intensidade"><span>Menor concentra\xE7\xE3o</span><i class="legend-step level-1"></i><i class="legend-step level-2"></i><i class="legend-step level-3"></i><i class="legend-step level-4"></i><i class="legend-step level-5"></i><span>Maior concentra\xE7\xE3o</span></div>
            </div>
            <aside class="state-ranking" aria-labelledby="state-ranking-title">
              <div class="panel-heading"><div><span class="eyebrow">Ranking estadual</span><h2 id="state-ranking-title">Bolsistas por UF</h2></div><button type="button" class="csv-button" (click)="exportStateCsv()" aria-label="Exportar ranking estadual para CSV"><i class="bi bi-file-earmark-spreadsheet" aria-hidden="true"></i><span>Exportar CSV</span></button></div>
              @for (state of stateCounts(); track state.code; let index = $index) {
                @if (state.count > 0) {<div class="state-row"><span class="state-position">{{ index + 1 }}</span><span class="state-code">{{ state.code }}</span><div><strong>{{ state.label }}</strong><small>{{ state.percentage | number:'1.1-1' }}% do total</small></div><strong class="state-value">{{ state.count }}</strong></div>}
              }
            </aside>
          </div>
        }

        @if (activeTab() === 'concessoes') {
          @if (response()?.applications; as applications) {
            <app-pq-applications [data]="applications"></app-pq-applications>
          } @else {
            <div class="empty-state">N\xE3o h\xE1 dados de concess\xF5es dispon\xEDveis.</div>
          }
        }
      </div>
    }
  </div>
</section>
`, styles: ['/* src/app/pages/pq/pq.page.scss */\n:host {\n  display: block;\n}\n.pq-page {\n  --pq-accent: #9a654d;\n  --pq-accent-dark: #704330;\n  --pq-accent-soft: #f4e8e1;\n  --pq-green: #3b796b;\n  --pq-series-1: #4f8296;\n  --pq-series-2: #a6664e;\n  --pq-series-3: #d5a24f;\n  --pq-series-4: #577b68;\n  --pq-series-5: #7d6f9b;\n  --pq-series-6: #b27692;\n  --pq-series-7: #6b7892;\n  --pq-series-8: #7da765;\n  --pq-series-9: #c17b5c;\n  --pq-series-10: #4f9a91;\n  --pq-series-11: #9a7452;\n  --pq-series-12: #657eaa;\n  color: var(--theme-ink);\n  min-height: 70vh;\n}\n.pq-hero {\n  display: flex;\n  min-height: 210px;\n  margin: 1rem 0 1.5rem;\n  padding: 2.25rem 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--pq-accent) 25%, var(--theme-line));\n  border-radius: 1.25rem;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      color-mix(in srgb, var(--pq-accent) 13%, transparent),\n      transparent 34%),\n    linear-gradient(\n      125deg,\n      var(--theme-card-bg),\n      color-mix(in srgb, var(--theme-sand) 70%, transparent));\n}\n.pq-hero-copy {\n  max-width: 690px;\n}\n.eyebrow {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: var(--pq-accent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.pq-hero h1 {\n  margin: 0 0 0.75rem;\n  font-family:\n    "Bitter",\n    Georgia,\n    serif;\n  font-size: clamp(1.9rem, 4vw, 3.25rem);\n  line-height: 1.08;\n}\n.pq-hero p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--theme-muted);\n  font-size: 1.05rem;\n}\n.pq-logo {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.status-panel {\n  display: flex;\n  min-height: 180px;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: var(--theme-muted);\n}\n.pq-tabs {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  margin-bottom: 1.5rem;\n  padding: 0.35rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  background: var(--theme-card-bg);\n}\n.pq-tabs button {\n  display: flex;\n  padding: 0.8rem 1rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: 0;\n  border-radius: 0.6rem;\n  color: var(--theme-muted);\n  background: transparent;\n  font-family: "Raleway", sans-serif;\n  font-weight: 600;\n  transition: 0.2s ease;\n}\n.pq-tabs button:hover {\n  color: var(--theme-ink);\n  background: color-mix(in srgb, var(--pq-accent) 7%, transparent);\n}\n.pq-tabs button.active {\n  color: #fff;\n  background: var(--pq-accent-dark);\n  box-shadow: 0 4px 12px rgba(55, 32, 22, 0.18);\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.metric-card,\n.panel,\n.region-card {\n  border: 1px solid var(--theme-line);\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.metric-card {\n  display: flex;\n  padding: 1.35rem;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 1rem;\n}\n.metric-card.metric-primary {\n  border-color: color-mix(in srgb, var(--pq-accent) 35%, var(--theme-line));\n}\n.metric-icon {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 1.2rem;\n}\n.metric-card strong {\n  display: block;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n  line-height: 1;\n}\n.metric-card div span {\n  display: block;\n  margin-top: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.88rem;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.panel {\n  padding: 1.5rem;\n  border-radius: 1rem;\n}\n.panel-heading,\n.section-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.panel-heading {\n  margin-bottom: 1.25rem;\n}\n.panel-heading h2,\n.section-heading h2 {\n  margin: 0;\n  font-family: "Bitter", serif;\n  font-size: 1.35rem;\n}\n.total-label,\n.result-count {\n  color: var(--theme-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.level-list {\n  display: grid;\n  gap: 0.9rem;\n}\n.level-row {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr 2rem;\n  align-items: center;\n  gap: 0.75rem;\n}\n.level-badge {\n  display: inline-flex;\n  min-width: 2.2rem;\n  padding: 0.28rem 0.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.level-progress,\n.bar-track,\n.region-share {\n  height: 8px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--theme-sand);\n}\n.level-progress span,\n.bar-track span,\n.region-share span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--pq-accent);\n}\n.text-action {\n  border: 0;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.ranking-list {\n  display: grid;\n}\n.ranking-row {\n  display: grid;\n  grid-template-columns: 1.8rem 1fr auto;\n  padding: 0.72rem 0;\n  align-items: center;\n  gap: 0.5rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.ranking-row:last-child {\n  border-bottom: 0;\n}\n.ranking-row > span:last-child {\n  color: var(--theme-muted);\n  font-size: 0.83rem;\n}\n.rank,\n.bar-rank {\n  color: var(--theme-muted);\n  font-variant-numeric: tabular-nums;\n}\n.section-heading {\n  margin: 0.35rem 0 1rem;\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(260px, 1fr) minmax(180px, 240px);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.search-field {\n  position: relative;\n}\n.search-field i {\n  position: absolute;\n  top: 50%;\n  left: 0.9rem;\n  z-index: 1;\n  color: var(--theme-muted);\n  transform: translateY(-50%);\n}\n.search-field input {\n  padding-left: 2.4rem;\n}\n.scholar-table-wrap {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.scholar-table {\n  --bs-table-color: var(--theme-ink);\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: var(--theme-ink);\n  --bs-table-hover-color: var(--theme-ink);\n  margin: 0;\n  color: var(--theme-ink);\n}\n.scholar-table th {\n  padding: 1rem;\n  border-color: var(--theme-line);\n  color: var(--theme-muted);\n  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);\n  font-family: "Raleway", sans-serif;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.scholar-table td {\n  padding: 0.9rem 1rem;\n  border-color: var(--theme-line);\n}\n.profile-links {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.8rem;\n  white-space: nowrap;\n}\n.profile-links a {\n  color: var(--pq-accent);\n}\n.empty-state {\n  padding: 3rem !important;\n  color: var(--theme-muted);\n  text-align: center;\n}\n.bar-list {\n  padding: 0.4rem 1.4rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n}\n.bar-row {\n  display: grid;\n  grid-template-columns: 2rem 1fr 2.5rem;\n  padding: 1rem 0;\n  align-items: center;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.bar-row:last-child {\n  border-bottom: 0;\n}\n.bar-label {\n  display: flex;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.bar-label span {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.bar-value {\n  text-align: right;\n}\n.region-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.region-card {\n  padding: 1.35rem;\n  border-radius: 1rem;\n}\n.region-top {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.region-pin {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--pq-green);\n  background: color-mix(in srgb, var(--pq-green) 12%, transparent);\n}\n.region-top span:not(.region-pin),\n.region-top small {\n  display: block;\n  color: var(--theme-muted);\n}\n.region-top strong {\n  margin-right: 0.35rem;\n  font-family: "Bitter", serif;\n  font-size: 1.8rem;\n}\n.region-share {\n  margin-top: 1rem;\n}\n.region-share span {\n  background: var(--pq-green);\n}\n.region-card p {\n  margin: 0.55rem 0 0;\n  color: var(--theme-muted);\n  font-size: 0.8rem;\n  text-align: right;\n}\n.region-institutions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.region-institutions p {\n  display: flex;\n  margin: 0.55rem 0 0;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.region-institutions p span {\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  color: var(--theme-muted);\n  background: var(--theme-sand);\n  font-size: 0.76rem;\n}\n.map-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.75fr);\n  gap: 1rem;\n  align-items: start;\n}\n.map-panel,\n.state-ranking {\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  background: var(--theme-card-bg);\n  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);\n}\n.map-panel {\n  --pq-map-color: var(--pq-accent);\n  padding: 1rem 1.5rem;\n}\n.map-legend {\n  display: flex;\n  padding: 0.75rem 0 0.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  color: var(--theme-muted);\n  font-size: 0.76rem;\n}\n.legend-step {\n  width: 28px;\n  height: 9px;\n  border-radius: 999px;\n}\n.legend-step.level-1 {\n  background: color-mix(in srgb, var(--pq-accent) 18%, var(--theme-sand));\n}\n.legend-step.level-2 {\n  background: color-mix(in srgb, var(--pq-accent) 38%, var(--theme-sand));\n}\n.legend-step.level-3 {\n  background: color-mix(in srgb, var(--pq-accent) 58%, var(--theme-sand));\n}\n.legend-step.level-4 {\n  background: color-mix(in srgb, var(--pq-accent) 78%, var(--theme-sand));\n}\n.legend-step.level-5 {\n  background: var(--pq-accent);\n}\n.state-ranking {\n  padding: 1.35rem;\n}\n.csv-button {\n  display: inline-flex;\n  padding: 0.45rem 0.65rem;\n  align-items: center;\n  gap: 0.35rem;\n  border: 1px solid var(--pq-accent);\n  border-radius: 0.5rem;\n  color: var(--pq-accent);\n  background: transparent;\n  font-size: 0.75rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.csv-button:hover,\n.csv-button:focus-visible {\n  color: var(--theme-card-bg);\n  background: var(--pq-accent);\n}\n.state-row {\n  display: grid;\n  grid-template-columns: 1.5rem 2.5rem 1fr 2rem;\n  padding: 0.68rem 0;\n  align-items: center;\n  gap: 0.55rem;\n  border-bottom: 1px solid var(--theme-line);\n}\n.state-row:last-child {\n  border-bottom: 0;\n}\n.state-position {\n  color: var(--theme-muted);\n  font-size: 0.78rem;\n}\n.state-code {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  border-radius: 0.55rem;\n  color: var(--pq-accent-dark);\n  background: var(--pq-accent-soft);\n  font-weight: 700;\n}\n.state-row small {\n  display: block;\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n}\n.state-value {\n  text-align: right;\n}\n:host-context(body.theme-master.theme-dark) .pq-page {\n  --pq-accent: #d29b7e;\n  --pq-accent-dark: #865943;\n  --pq-accent-soft: #35261f;\n  --pq-green: #74bbaa;\n  --pq-series-1: #72abc0;\n  --pq-series-2: #d28b6f;\n  --pq-series-3: #e0b561;\n  --pq-series-4: #79a88c;\n  --pq-series-5: #a092c0;\n  --pq-series-6: #ca8eaa;\n  --pq-series-7: #91a0bd;\n  --pq-series-8: #9fc482;\n  --pq-series-9: #dd9777;\n  --pq-series-10: #72bcb3;\n  --pq-series-11: #bd9773;\n  --pq-series-12: #89a1d0;\n}\n:host-context(body.theme-master.theme-dark) .pq-logo {\n  mix-blend-mode: normal;\n  opacity: 0.9;\n}\n:host-context(body.theme-master.theme-dark) .pq-tabs button.active {\n  color: #fff;\n}\n:host-context(body.theme-master.theme-dark) .scholar-table,\n:host-context(body.theme-master.theme-dark) .scholar-table td,\n:host-context(body.theme-master.theme-dark) .scholar-table td strong {\n  color: var(--theme-ink);\n}\n@media (max-width: 991.98px) {\n  .map-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767.98px) {\n  .pq-hero {\n    min-height: auto;\n    padding: 1.5rem;\n  }\n  .pq-logo {\n    width: 105px;\n    height: 105px;\n  }\n  .pq-tabs {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .summary-grid,\n  .content-grid,\n  .region-grid {\n    grid-template-columns: 1fr;\n  }\n  .region-institutions {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 479.98px) {\n  .pq-hero {\n    align-items: flex-start;\n  }\n  .pq-logo {\n    width: 72px;\n    height: 72px;\n  }\n  .pq-tabs button {\n    padding: 0.7rem 0.35rem;\n    font-size: 0.82rem;\n  }\n  .filters {\n    grid-template-columns: 1fr;\n  }\n  .section-heading {\n    align-items: flex-start;\n  }\n  .region-institutions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pq.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PqPage, { className: "PqPage", filePath: "src/app/pages/pq/pq.page.ts", lineNumber: 123 });
})();
export {
  PqBrazilMapComponent,
  PqPage
};
//# sourceMappingURL=chunk-OUY27BGZ.js.map
