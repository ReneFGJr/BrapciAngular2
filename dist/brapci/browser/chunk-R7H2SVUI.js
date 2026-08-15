import {
  TranslateModule,
  TranslatePipe
} from "./chunk-NJGCINW2.js";
import {
  CommonModule,
  Component,
  Input,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FWZKW7K5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// src/app/components/bar-chart/bar-chart.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
function BarChartComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275domElement(1, "span", 6);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, item_r1.label));
  }
}
function BarChartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, BarChartComponent_Conditional_3_For_2_Template, 5, 5, "span", 5, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.legend());
  }
}
function BarChartComponent_Conditional_4_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 13);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const segment_r3 = ctx.$implicit;
    \u0275\u0275styleProp("height", segment_r3.height, "%")("background", segment_r3.color);
    \u0275\u0275attribute("title", \u0275\u0275pipeBind1(1, 5, segment_r3.label) + ": " + segment_r3.value);
  }
}
function BarChartComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275repeaterCreate(5, BarChartComponent_Conditional_4_For_2_For_6_Template, 2, 7, "div", 11, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const point_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r4.total);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", point_r4.height, "%");
    \u0275\u0275advance();
    \u0275\u0275repeater(point_r4.stackedSegments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r4.label);
  }
}
function BarChartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, BarChartComponent_Conditional_4_For_2_Template, 9, 4, "div", 7, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.displayPoints());
  }
}
function BarChartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1, "Sem dados para o grafico.");
    \u0275\u0275domElementEnd();
  }
}
var BarChartComponent = class _BarChartComponent {
  title = "Grafico";
  set points(value) {
    this._points.set(Array.isArray(value) ? value : []);
  }
  _points = signal([], ...ngDevMode ? [{ debugName: "_points" }] : []);
  hasData = computed(() => this._points().length > 0, ...ngDevMode ? [{ debugName: "hasData" }] : []);
  legend = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const point of this._points()) {
      for (const segment of point.segments) {
        if (!map.has(segment.key)) {
          map.set(segment.key, {
            label: segment.label,
            color: segment.color
          });
        }
      }
    }
    return [...map.entries()].map(([key, value]) => __spreadValues({
      key
    }, value));
  }, ...ngDevMode ? [{ debugName: "legend" }] : []);
  maxValue = computed(() => {
    const values = this._points().map((point) => point.segments.reduce((sum, segment) => sum + segment.value, 0));
    return values.length ? Math.max(...values) : 0;
  }, ...ngDevMode ? [{ debugName: "maxValue" }] : []);
  displayPoints = computed(() => {
    const max = this.maxValue();
    return this._points().map((point) => __spreadProps(__spreadValues({}, point), {
      total: point.segments.reduce((sum, segment) => sum + segment.value, 0),
      height: max > 0 ? Math.max(point.segments.reduce((sum, segment) => sum + segment.value, 0) / max * 100, 3) : 0,
      stackedSegments: (() => {
        const total = point.segments.reduce((sum, segment) => sum + segment.value, 0);
        return point.segments.filter((segment) => segment.value > 0).map((segment) => __spreadProps(__spreadValues({}, segment), {
          height: total > 0 ? segment.value / total * 100 : 0
        }));
      })()
    }));
  }, ...ngDevMode ? [{ debugName: "displayPoints" }] : []);
  static \u0275fac = function BarChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChartComponent, selectors: [["app-bar-chart"]], inputs: { title: "title", points: "points" }, decls: 6, vars: 3, consts: [["aria-label", "Grafico de barras", 1, "bar-chart"], [1, "h6", "mb-2"], [1, "bar-chart__legend", "mb-2"], ["role", "img", 1, "bar-chart__plot"], [1, "mb-0"], [1, "bar-chart__legend-item"], [1, "bar-chart__legend-color"], [1, "bar-chart__item"], [1, "bar-chart__value"], [1, "bar-chart__bar-wrap"], [1, "bar-chart__bar"], [1, "bar-chart__segment", 3, "height", "background"], [1, "bar-chart__label"], [1, "bar-chart__segment"]], template: function BarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, BarChartComponent_Conditional_3_Template, 3, 0, "div", 2);
      \u0275\u0275conditionalCreate(4, BarChartComponent_Conditional_4_Template, 3, 1, "div", 3)(5, BarChartComponent_Conditional_5_Template, 2, 0, "p", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.legend().length > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasData() ? 4 : 5);
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.bar-chart[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.bar-chart__legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 0.8rem;\n}\n.bar-chart__legend-item[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--theme-ink);\n  display: inline-flex;\n  font-size: 0.75rem;\n  gap: 0.35rem;\n}\n.bar-chart__legend-color[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 3px;\n  display: inline-block;\n  height: 10px;\n  width: 14px;\n}\n.bar-chart__plot[_ngcontent-%COMP%] {\n  align-items: end;\n  display: grid;\n  gap: 0.2rem;\n  grid-auto-columns: minmax(30px, 1fr);\n  grid-auto-flow: column;\n  min-height: 190px;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n}\n.bar-chart__item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  justify-items: center;\n}\n.bar-chart__value[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  line-height: 1;\n}\n.bar-chart__bar-wrap[_ngcontent-%COMP%] {\n  align-items: end;\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.35rem;\n  display: flex;\n  height: 120px;\n  padding: 0.15rem;\n  width: 100%;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  border-radius: 0.2rem;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n  width: 100%;\n}\n.bar-chart__segment[_ngcontent-%COMP%] {\n  min-height: 1px;\n  width: 100%;\n}\n.bar-chart__label[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  text-align: center;\n  word-break: break-word;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarChartComponent, [{
    type: Component,
    args: [{ selector: "app-bar-chart", imports: [CommonModule, TranslateModule], template: `<section class="bar-chart" aria-label="Grafico de barras">\r
  <h3 class="h6 mb-2">{{ title }}</h3>\r
\r
  @if (legend().length > 0) {\r
    <div class="bar-chart__legend mb-2">\r
      @for (item of legend(); track item.key) {\r
        <span class="bar-chart__legend-item">\r
          <span class="bar-chart__legend-color" [style.background]="item.color"></span>\r
          <span>{{ item.label | translate }}</span>\r
        </span>\r
      }\r
    </div>\r
  }\r
\r
  @if (hasData()) {\r
    <div class="bar-chart__plot" role="img" [attr.aria-label]="title">\r
      @for (point of displayPoints(); track point.label) {\r
        <div class="bar-chart__item">\r
          <div class="bar-chart__value">{{ point.total }}</div>\r
          <div class="bar-chart__bar-wrap">\r
            <div class="bar-chart__bar" [style.height.%]="point.height">\r
              @for (segment of point.stackedSegments; track segment.key) {\r
                <div\r
                  class="bar-chart__segment"\r
                  [style.height.%]="segment.height"\r
                  [style.background]="segment.color"\r
                  [attr.title]="(segment.label | translate) + ': ' + segment.value"\r
                ></div>\r
              }\r
            </div>\r
          </div>\r
          <div class="bar-chart__label">{{ point.label }}</div>\r
        </div>\r
      }\r
    </div>\r
  } @else {\r
    <p class="mb-0">Sem dados para o grafico.</p>\r
  }\r
</section>\r
`, styles: ["/* src/app/components/bar-chart/bar-chart.component.scss */\n.bar-chart {\n  margin-top: 1rem;\n}\n.bar-chart__legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 0.8rem;\n}\n.bar-chart__legend-item {\n  align-items: center;\n  color: var(--theme-ink);\n  display: inline-flex;\n  font-size: 0.75rem;\n  gap: 0.35rem;\n}\n.bar-chart__legend-color {\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 3px;\n  display: inline-block;\n  height: 10px;\n  width: 14px;\n}\n.bar-chart__plot {\n  align-items: end;\n  display: grid;\n  gap: 0.2rem;\n  grid-auto-columns: minmax(30px, 1fr);\n  grid-auto-flow: column;\n  min-height: 190px;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n}\n.bar-chart__item {\n  display: grid;\n  gap: 0.2rem;\n  justify-items: center;\n}\n.bar-chart__value {\n  color: var(--theme-hint);\n  font-size: 0.72rem;\n  line-height: 1;\n}\n.bar-chart__bar-wrap {\n  align-items: end;\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.35rem;\n  display: flex;\n  height: 120px;\n  padding: 0.15rem;\n  width: 100%;\n}\n.bar-chart__bar {\n  border-radius: 0.2rem;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n  width: 100%;\n}\n.bar-chart__segment {\n  min-height: 1px;\n  width: 100%;\n}\n.bar-chart__label {\n  color: var(--theme-ink);\n  font-size: 0.68rem;\n  text-align: center;\n  word-break: break-word;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], points: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChartComponent, { className: "BarChartComponent", filePath: "src/app/components/bar-chart/bar-chart.component.ts", lineNumber: 23 });
})();

export {
  BarChartComponent
};
//# sourceMappingURL=chunk-R7H2SVUI.js.map
