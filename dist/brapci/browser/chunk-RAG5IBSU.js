import {
  BarChartComponent
} from "./chunk-R7H2SVUI.js";
import {
  BasketService
} from "./chunk-LEUPCSYM.js";
import "./chunk-NJGCINW2.js";
import {
  RouterLink
} from "./chunk-OYM44MPZ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  Input,
  NgIf,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FWZKW7K5.js";
import "./chunk-3OV72XIM.js";

// src/app/components/painel-analysis/painel-analysis.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
function PainelAnalysisComponent_For_11_Conditional_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.value);
  }
}
function PainelAnalysisComponent_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 13);
    \u0275\u0275text(7, "Valor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, PainelAnalysisComponent_For_11_Conditional_8_For_10_Template, 5, 2, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275repeater(section_r2.rows);
  }
}
function PainelAnalysisComponent_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Sem dados nesta se\xE7\xE3o.");
    \u0275\u0275elementEnd();
  }
}
function PainelAnalysisComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function PainelAnalysisComponent_For_11_Template_button_click_6_listener() {
      const section_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportSectionCsv(section_r2));
    });
    \u0275\u0275text(7, " Exportar CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, PainelAnalysisComponent_For_11_Conditional_8_Template, 11, 0, "div", 10)(9, PainelAnalysisComponent_For_11_Conditional_9_Template, 2, 0, "p", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(section_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !section_r2.rows.length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r2.rows.length ? 8 : 9);
  }
}
var PainelAnalysisComponent = class _PainelAnalysisComponent {
  dataSignal = signal(null, ...ngDevMode ? [{ debugName: "dataSignal" }] : []);
  set data(value) {
    this.dataSignal.set(value);
  }
  yearsChartPoints = computed(() => {
    const section = this.getSection(this.dataSignal(), "YEARS");
    const pairs = this.normalizeSectionToPairs(section).filter((item) => Number(item.value) > 0).sort((a, b) => Number(a.label) - Number(b.label));
    return pairs.map((item) => ({
      label: item.label,
      segments: [
        {
          key: "years",
          label: "Produ\xE7\xE3o",
          value: Number(item.value),
          color: "#1f77b4"
        }
      ]
    }));
  }, ...ngDevMode ? [{ debugName: "yearsChartPoints" }] : []);
  tableSections = computed(() => {
    const root = this.dataSignal();
    const specs = [
      { key: "AUTHORS", title: "Autores" },
      { key: "SUBJECTS", title: "Assuntos" },
      { key: "SESSION", title: "Sess\xE3o" },
      { key: "SESSION_SUB", title: "Subsess\xE3o" },
      { key: "PUBLICATIONS", title: "Publica\xE7\xF5es" },
      { key: "TYPES", title: "Tipos" }
    ];
    return specs.map((spec) => {
      const section = this.getSection(root, spec.key);
      const rows = this.normalizeSectionToPairs(section).sort((a, b) => {
        const aNum = this.toNumber(a.value);
        const bNum = this.toNumber(b.value);
        if (aNum !== null && bNum !== null) {
          return bNum - aNum;
        }
        return String(a.value).localeCompare(String(b.value), "pt-BR", { sensitivity: "base" });
      }).map((item) => ({ label: item.label, value: item.value }));
      return {
        key: spec.key,
        title: spec.title,
        rows
      };
    });
  }, ...ngDevMode ? [{ debugName: "tableSections" }] : []);
  exportSectionCsv(section) {
    if (!section.rows.length || typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const header = ["Item", "Valor"];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(","),
      ...section.rows.map((row) => [this.escapeCsv(row.label), this.escapeCsv(String(row.value))].join(","))
    ];
    const csvContent = lines.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this.toFileName(section.title)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  exportYearsCsv() {
    const points = this.yearsChartPoints();
    if (!points.length || typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const header = ["Ano", "Produ\xE7\xE3o"];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(","),
      ...points.map((point) => {
        const total = point.segments.reduce((sum, segment) => sum + segment.value, 0);
        return [this.escapeCsv(point.label), this.escapeCsv(String(total))].join(",");
      })
    ];
    const csvContent = lines.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "producao-por-ano.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  getSection(source, expectedKey) {
    if (!source || typeof source !== "object") {
      return null;
    }
    const record = source;
    const wanted = expectedKey.toLowerCase();
    for (const [key, value] of Object.entries(record)) {
      if (key.toLowerCase() === wanted) {
        return value;
      }
    }
    return null;
  }
  normalizeSectionToPairs(section) {
    if (!section) {
      return [];
    }
    if (Array.isArray(section)) {
      const rows = section.map((item) => this.normalizeArrayItem(item)).filter((item) => item !== null);
      if (rows.length > 0) {
        return rows;
      }
      const counts = /* @__PURE__ */ new Map();
      for (const item of section) {
        if (typeof item === "string" && item.trim()) {
          const key = item.trim();
          counts.set(key, (counts.get(key) ?? 0) + 1);
        }
      }
      return [...counts.entries()].map(([label, value]) => ({ label, value }));
    }
    if (typeof section === "object") {
      return Object.entries(section).map(([label, rawValue]) => {
        if (typeof rawValue === "number" && Number.isFinite(rawValue)) {
          return { label, value: rawValue };
        }
        if (typeof rawValue === "string" && rawValue.trim()) {
          const parsed = Number(rawValue);
          return { label, value: Number.isFinite(parsed) ? parsed : rawValue.trim() };
        }
        if (rawValue && typeof rawValue === "object") {
          const normalized = this.normalizeArrayItem(rawValue);
          if (normalized) {
            return normalized;
          }
        }
        return null;
      }).filter((item) => item !== null);
    }
    return [];
  }
  normalizeArrayItem(item) {
    if (!item || typeof item !== "object") {
      return null;
    }
    const rec = item;
    const label = this.pickText(rec, ["label", "name", "key", "title", "author", "subject", "session", "type"]);
    const value = this.pickValue(rec, ["count", "value", "total", "n", "qty", "qtd"]);
    if (!label) {
      return null;
    }
    return {
      label,
      value: value ?? "-"
    };
  }
  pickText(record, keys) {
    const lowerMap = new Map(Object.entries(record).map(([k, v]) => [k.toLowerCase(), v]));
    for (const key of keys) {
      const value = lowerMap.get(key.toLowerCase());
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
      if (typeof value === "number" && Number.isFinite(value)) {
        return String(value);
      }
    }
    return "";
  }
  pickValue(record, keys) {
    const lowerMap = new Map(Object.entries(record).map(([k, v]) => [k.toLowerCase(), v]));
    for (const key of keys) {
      const value = lowerMap.get(key.toLowerCase());
      if (typeof value === "number" && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === "string" && value.trim()) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : value.trim();
      }
    }
    return null;
  }
  toNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim()) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
  }
  escapeCsv(value) {
    const escaped = value.replace(/"/g, '""');
    return `"${escaped}"`;
  }
  toFileName(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "export";
  }
  static \u0275fac = function PainelAnalysisComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PainelAnalysisComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PainelAnalysisComponent, selectors: [["app-painel-analysis"]], inputs: { data: "data" }, decls: 12, vars: 2, consts: [[1, "painel-analysis"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "h6", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], ["title", "", 3, "points"], [1, "row", "g-3"], [1, "col-12", "col-lg-6"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "table-responsive"], [1, "text-muted", "mb-0"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "text-end"], [1, "text-end", "fw-semibold"]], template: function PainelAnalysisComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Produ\xE7\xE3o por Ano");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function PainelAnalysisComponent_Template_button_click_6_listener() {
        return ctx.exportYearsCsv();
      });
      \u0275\u0275text(7, " Exportar CSV ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "app-bar-chart", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275repeaterCreate(10, PainelAnalysisComponent_For_11_Template, 10, 3, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.yearsChartPoints().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("points", ctx.yearsChartPoints());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tableSections());
    }
  }, dependencies: [CommonModule, BarChartComponent], styles: ["\n\n.painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.painel-analysis[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  max-height: 360px;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: rgba(24, 35, 52, 0.98);\n  color: var(--theme-ink);\n  border-bottom-color: rgba(100, 132, 173, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-color: rgba(100, 132, 173, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel-analysis.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PainelAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-painel-analysis", standalone: true, imports: [CommonModule, BarChartComponent], template: '<div class="painel-analysis">\r\n  <div class="card border-0 shadow-sm mb-3">\r\n    <div class="card-body">\r\n      <div class="d-flex align-items-center justify-content-between gap-2 mb-3">\r\n        <h3 class="h6 mb-0">Produ\xE7\xE3o por Ano</h3>\r\n        <button\r\n          type="button"\r\n          class="btn btn-sm btn-outline-secondary"\r\n          [disabled]="!yearsChartPoints().length"\r\n          (click)="exportYearsCsv()"\r\n        >\r\n          Exportar CSV\r\n        </button>\r\n      </div>\r\n      <app-bar-chart title="" [points]="yearsChartPoints()"></app-bar-chart>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row g-3">\r\n    @for (section of tableSections(); track section.key) {\r\n      <div class="col-12 col-lg-6">\r\n        <div class="card border-0 shadow-sm h-100">\r\n          <div class="card-body">\r\n            <div class="d-flex align-items-center justify-content-between gap-2 mb-3">\r\n              <h3 class="h6 mb-0">{{ section.title }}</h3>\r\n              <button\r\n                type="button"\r\n                class="btn btn-sm btn-outline-secondary"\r\n                [disabled]="!section.rows.length"\r\n                (click)="exportSectionCsv(section)"\r\n              >\r\n                Exportar CSV\r\n              </button>\r\n            </div>\r\n\r\n            @if (section.rows.length) {\r\n              <div class="table-responsive">\r\n                <table class="table table-sm align-middle mb-0">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Item</th>\r\n                      <th class="text-end">Valor</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    @for (row of section.rows; track row.label) {\r\n                      <tr>\r\n                        <td>{{ row.label }}</td>\r\n                        <td class="text-end fw-semibold">{{ row.value }}</td>\r\n                      </tr>\r\n                    }\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            } @else {\r\n              <p class="text-muted mb-0">Sem dados nesta se\xE7\xE3o.</p>\r\n            }\r\n          </div>\r\n        </div>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/painel-analysis/painel-analysis.component.scss */\n.painel-analysis .table {\n  font-size: 0.9rem;\n}\n.painel-analysis .table thead th {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.painel-analysis .table-responsive {\n  max-height: 360px;\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .card {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .card-body {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table thead th {\n  background-color: rgba(24, 35, 52, 0.98);\n  color: var(--theme-ink);\n  border-bottom-color: rgba(100, 132, 173, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table tbody td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table tbody th,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table th {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table th {\n  border-color: rgba(100, 132, 173, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary:hover,\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .text-muted {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel-analysis.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PainelAnalysisComponent, { className: "PainelAnalysisComponent", filePath: "src/app/components/painel-analysis/painel-analysis.component.ts", lineNumber: 25 });
})();

// src/app/pages/painel/painel.page.ts
function PainelPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Carregando an\xE1lise...");
    \u0275\u0275elementEnd();
  }
}
function PainelPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PainelPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-painel-analysis", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.result());
  }
}
var PainelPage = class _PainelPage {
  basket = inject(BasketService);
  http = inject(HttpClient);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  worksIds = signal([], ...ngDevMode ? [{ debugName: "worksIds" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  endpoint = "https://cip.brapci.inf.br/api/brapci/analysis";
  ngOnInit() {
    const ids = this.basket.getMarked();
    this.worksIds.set(ids);
    if (!ids.length) {
      this.error.set("Nenhum artigo selecionado no Basket.");
      return;
    }
    this.loadAnalysis(ids);
  }
  loadAnalysis(ids) {
    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);
    const formData = new FormData();
    formData.append("worksID", ids.join(","));
    this.http.post(this.endpoint, formData).subscribe({
      next: (response) => {
        this.result.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erro ao carregar a an\xE1lise do endpoint.");
        this.loading.set(false);
      }
    });
  }
  resultJson() {
    const value = this.result();
    if (value === null || value === void 0) {
      return "";
    }
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "Nao foi possivel serializar a resposta.";
    }
  }
  static \u0275fac = function PainelPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PainelPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PainelPage, selectors: [["app-painel-page"]], decls: 11, vars: 4, consts: [[1, "container", "py-4"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "gap-2", "mb-3"], [1, "mb-0"], ["routerLink", "/basket/selected", 1, "btn", "btn-outline-secondary"], [1, "text-muted", "mb-3"], ["class", "alert alert-secondary mb-0", 4, "ngIf"], ["class", "alert alert-warning mb-0", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-secondary", "mb-0"], [1, "alert", "alert-warning", "mb-0"], [3, "data"]], template: function PainelPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Painel de an\xE1lise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Voltar para sele\xE7\xE3o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, PainelPage_div_8_Template, 2, 0, "div", 5)(9, PainelPage_div_9_Template, 2, 1, "div", 6)(10, PainelPage_ng_container_10_Template, 2, 1, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("IDs enviados em worksID: ", ctx.worksIds().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.result());
    }
  }, dependencies: [CommonModule, NgIf, HttpClientModule, RouterLink, PainelAnalysisComponent], styles: ["\n\n.page-shell[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.result-json[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 70vh;\n  overflow: auto;\n  font-size: 0.85rem;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert-secondary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert-secondary[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert-warning[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .alert-warning[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .page-shell[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PainelPage, [{
    type: Component,
    args: [{ selector: "app-painel-page", standalone: true, imports: [CommonModule, HttpClientModule, RouterLink, PainelAnalysisComponent], template: '<section class="container py-4">\r\n  <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">\r\n    <h2 class="mb-0">Painel de an\xE1lise</h2>\r\n    <a class="btn btn-outline-secondary" routerLink="/basket/selected">Voltar para sele\xE7\xE3o</a>\r\n  </div>\r\n\r\n  <p class="text-muted mb-3">IDs enviados em worksID: {{ worksIds().length }}</p>\r\n\r\n  <div *ngIf="loading()" class="alert alert-secondary mb-0">Carregando an\xE1lise...</div>\r\n\r\n  <div *ngIf="error()" class="alert alert-warning mb-0">{{ error() }}</div>\r\n\r\n  <ng-container *ngIf="!loading() && !error() && result()">\r\n    <app-painel-analysis [data]="result()"></app-painel-analysis>\r\n  </ng-container>\r\n</section>\r\n', styles: ["/* src/app/pages/painel/painel.page.scss */\n.page-shell {\n  color: var(--theme-ink);\n}\n.result-json {\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 70vh;\n  overflow: auto;\n  font-size: 0.85rem;\n}\n:host-context(body.theme-master.theme-dark) .page-shell,\n:host-context(body.theme-master.theme-dark) .page-shell h2,\n:host-context(body.theme-master.theme-dark) .page-shell p,\n:host-context(body.theme-master.theme-dark) .page-shell .alert,\n:host-context(body.theme-master.theme-dark) .page-shell .btn,\n:host-context(body.theme-master.theme-dark) .page-shell a {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .page-shell .btn-outline-secondary {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .page-shell .btn-outline-secondary:hover,\n:host-context(body.theme-master.theme-dark) .page-shell .btn-outline-secondary:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .page-shell .alert-secondary,\n:host-context(body.theme-master.theme-dark) .page-shell .alert-warning {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .page-shell .text-muted {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PainelPage, { className: "PainelPage", filePath: "src/app/pages/painel/painel.page.ts", lineNumber: 15 });
})();
export {
  PainelPage
};
//# sourceMappingURL=chunk-RAG5IBSU.js.map
