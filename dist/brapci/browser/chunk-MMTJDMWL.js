import {
  BarChartComponent
} from "./chunk-CBHFFT5K.js";
import {
  BasketService
} from "./chunk-IZYDDLZH.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3F47I5MF.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  Input,
  NgIf,
  RouterLink,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y3FCEOIS.js";
import "./chunk-UKK5MWW6.js";

// src/app/components/painel-analysis/painel-analysis.component.ts
var _c0 = () => ["nodes", "edges", "density", "modularity"];
var _c1 = () => ["degree", "weightedDegree", "betweenness", "closeness", "eigenvector", "community"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.author;
function PainelAnalysisComponent_For_16_Conditional_10_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
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
function PainelAnalysisComponent_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, PainelAnalysisComponent_For_16_Conditional_10_For_12_Template, 5, 2, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "painelAnalysis.item"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "painelAnalysis.value"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(section_r2.rows);
  }
}
function PainelAnalysisComponent_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "painelAnalysis.noData"));
  }
}
function PainelAnalysisComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 3)(3, "div", 4)(4, "h3", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function PainelAnalysisComponent_For_16_Template_button_click_7_listener() {
      const section_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportSectionCsv(section_r2));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, PainelAnalysisComponent_For_16_Conditional_10_Template, 13, 6, "div", 11)(11, PainelAnalysisComponent_For_16_Conditional_11_Template, 3, 3, "p", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, section_r2.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !section_r2.rows.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "painelAnalysis.exportCsv"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r2.rows.length ? 10 : 11);
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, metric_r6.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r6.value);
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, PainelAnalysisComponent_Conditional_17_Conditional_12_For_2_Template, 7, 4, "div", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.networkMetrics());
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_13_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const author_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.weightedDegree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.betweenness);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.closeness);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.eigenvector);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r7.community);
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_13_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "painelAnalysis.network.metrics." + metric_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "painelAnalysis.network.metricDescriptions." + metric_r8));
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_13_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const indicator_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "painelAnalysis.network.indicators." + indicator_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "painelAnalysis.network.descriptions." + indicator_r9));
  }
}
function PainelAnalysisComponent_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 14);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 14);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, PainelAnalysisComponent_Conditional_17_Conditional_13_For_27_Template, 15, 7, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 21);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "h4", 22);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dl", 23);
    \u0275\u0275repeaterCreate(34, PainelAnalysisComponent_Conditional_17_Conditional_13_For_35_Template, 7, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(36, PainelAnalysisComponent_Conditional_17_Conditional_13_For_37_Template, 7, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "painelAnalysis.network.author"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "painelAnalysis.network.indicators.degree"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "painelAnalysis.network.indicators.weightedDegree"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "painelAnalysis.network.indicators.betweenness"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "painelAnalysis.network.indicators.closeness"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 19, "painelAnalysis.network.indicators.eigenvector"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "painelAnalysis.network.indicators.community"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.networkAuthors());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 23, "painelAnalysis.network.legendTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 25, "painelAnalysis.network.legendTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(27, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(28, _c1));
  }
}
function PainelAnalysisComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function PainelAnalysisComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportNetworkAuthorsCsv());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, PainelAnalysisComponent_Conditional_17_Conditional_12_Template, 3, 0, "div", 17);
    \u0275\u0275conditionalCreate(13, PainelAnalysisComponent_Conditional_17_Conditional_13_Template, 38, 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "painelAnalysis.connectionIndicators"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "painelAnalysis.network.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.networkAuthors().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "painelAnalysis.exportCsv"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.networkMetrics().length ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.networkAuthors().length ? 13 : -1);
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
  networkMetrics = computed(() => {
    const network = this.asRecord(this.getSection(this.dataSignal(), "NETWORK"));
    const summary = this.asRecord(this.getSection(network, "network"));
    const specs = [
      { key: "nodes", labelKey: "painelAnalysis.network.metrics.nodes" },
      { key: "edges", labelKey: "painelAnalysis.network.metrics.edges" },
      { key: "density", labelKey: "painelAnalysis.network.metrics.density" },
      { key: "modularity", labelKey: "painelAnalysis.network.metrics.modularity" }
    ];
    return specs.map((spec) => ({
      key: spec.key,
      labelKey: spec.labelKey,
      value: this.toDisplayValue(this.getSection(summary, spec.key))
    })).filter((metric) => metric.value !== "-");
  }, ...ngDevMode ? [{ debugName: "networkMetrics" }] : []);
  networkAuthors = computed(() => {
    const network = this.asRecord(this.getSection(this.dataSignal(), "NETWORK"));
    const authors = this.getSection(network, "authors");
    if (!Array.isArray(authors)) {
      return [];
    }
    return authors.map((item) => {
      const author = this.asRecord(item);
      const name = this.pickText(author, ["author", "name", "label"]);
      if (!name) {
        return null;
      }
      return {
        author: name,
        degree: this.toDisplayValue(this.getSection(author, "degree")),
        weightedDegree: this.toDisplayValue(this.getSection(author, "weighted_degree")),
        betweenness: this.toDisplayValue(this.getSection(author, "betweenness")),
        closeness: this.toDisplayValue(this.getSection(author, "closeness")),
        eigenvector: this.toDisplayValue(this.getSection(author, "eigenvector")),
        community: this.toDisplayValue(this.getSection(author, "community"))
      };
    }).filter((author) => author !== null).sort((a, b) => {
      const weightedDifference = Number(b.weightedDegree) - Number(a.weightedDegree);
      return weightedDifference || a.author.localeCompare(b.author, "pt-BR", { sensitivity: "base" });
    });
  }, ...ngDevMode ? [{ debugName: "networkAuthors" }] : []);
  tableSections = computed(() => {
    const root = this.dataSignal();
    const specs = [
      { key: "AUTHORS", titleKey: "painelAnalysis.sections.authors" },
      { key: "SUBJECTS", titleKey: "painelAnalysis.sections.subjects" },
      { key: "SESSION", titleKey: "painelAnalysis.sections.session" },
      { key: "SESSION_SUB", titleKey: "painelAnalysis.sections.sessionSub" },
      { key: "PUBLICATIONS", titleKey: "painelAnalysis.sections.publications" },
      { key: "TYPES", titleKey: "painelAnalysis.sections.types" }
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
        titleKey: spec.titleKey,
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
    link.download = `${this.toFileName(section.key)}.csv`;
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
  exportNetworkAuthorsCsv() {
    const authors = this.networkAuthors();
    if (!authors.length || typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const header = [
      "Autor",
      "Grau",
      "Grau ponderado",
      "Intermedia\xE7\xE3o",
      "Proximidade",
      "Autovetor",
      "Comunidade"
    ];
    const lines = [
      header.map((cell) => this.escapeCsv(cell)).join(","),
      ...authors.map((author) => [
        author.author,
        author.degree,
        author.weightedDegree,
        author.betweenness,
        author.closeness,
        author.eigenvector,
        author.community
      ].map((cell) => this.escapeCsv(String(cell))).join(","))
    ];
    this.downloadCsv(lines.join("\n"), "rede-de-autores.csv");
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
  asRecord(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }
  toDisplayValue(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim()) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : value.trim();
    }
    return "-";
  }
  downloadCsv(content, fileName) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PainelAnalysisComponent, selectors: [["app-painel-analysis"]], inputs: { data: "data" }, decls: 18, vars: 12, consts: [[1, "painel-analysis"], [1, "h3", "mb-3"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "h6", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], ["title", "", 3, "points"], [1, "row", "g-3"], [1, "col-12", "col-lg-6"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "table-responsive"], [1, "text-muted", "mb-0"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "text-end"], [1, "text-end", "fw-semibold"], [1, "h3", "mt-4", "mb-3"], [1, "row", "g-2", "mb-3"], [1, "col-6", "col-lg-3"], [1, "network-metric", "h-100"], [1, "table-responsive", "network-table"], [1, "network-legend", "mt-3"], [1, "h6", "mb-2"], [1, "mb-0"]], template: function PainelAnalysisComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h3", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function PainelAnalysisComponent_Template_button_click_10_listener() {
        return ctx.exportYearsCsv();
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "app-bar-chart", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275repeaterCreate(15, PainelAnalysisComponent_For_16_Template, 12, 8, "div", 9, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, PainelAnalysisComponent_Conditional_17_Template, 14, 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "painelAnalysis.productionIndicators"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "painelAnalysis.productionByYear"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.yearsChartPoints().length);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "painelAnalysis.exportCsv"));
      \u0275\u0275advance(2);
      \u0275\u0275property("points", ctx.yearsChartPoints());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tableSections());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.networkMetrics().length || ctx.networkAuthors().length ? 17 : -1);
    }
  }, dependencies: [CommonModule, BarChartComponent, TranslateModule, TranslatePipe], styles: ["\n\n.painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.painel-analysis[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  max-height: 360px;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background: #f8f9fa;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.78rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-table[_ngcontent-%COMP%] {\n  max-height: 420px;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem 1.5rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #6c757d;\n  font-size: 0.82rem;\n}\n@media (max-width: 767.98px) {\n  .painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: rgba(24, 35, 52, 0.98);\n  color: var(--theme-ink);\n  border-bottom-color: rgba(100, 132, 173, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-color: rgba(100, 132, 173, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%] {\n  background: rgba(24, 35, 52, 0.98);\n  border-color: rgba(100, 132, 173, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%] {\n  border-top-color: rgba(100, 132, 173, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .network-legend[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, \nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible, body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .painel-analysis[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel-analysis.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PainelAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-painel-analysis", standalone: true, imports: [CommonModule, BarChartComponent, TranslateModule], template: `<div class="painel-analysis">
  <h1 class="h3 mb-3">{{ 'painelAnalysis.productionIndicators' | translate }}</h1>

  <div class="card border-0 shadow-sm mb-3">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
        <h3 class="h6 mb-0">{{ 'painelAnalysis.productionByYear' | translate }}</h3>
        <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!yearsChartPoints().length" (click)="exportYearsCsv()">{{ 'painelAnalysis.exportCsv' | translate }}</button>
      </div>
      <app-bar-chart title="" [points]="yearsChartPoints()"></app-bar-chart>
    </div>
  </div>

  <div class="row g-3">
    @for (section of tableSections(); track section.key) {
      <div class="col-12 col-lg-6">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
              <h3 class="h6 mb-0">{{ section.titleKey | translate }}</h3>
              <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!section.rows.length" (click)="exportSectionCsv(section)">{{ 'painelAnalysis.exportCsv' | translate }}</button>
            </div>
            @if (section.rows.length) {
              <div class="table-responsive">
                <table class="table table-sm align-middle mb-0">
                  <thead><tr><th>{{ 'painelAnalysis.item' | translate }}</th><th class="text-end">{{ 'painelAnalysis.value' | translate }}</th></tr></thead>
                  <tbody>
                    @for (row of section.rows; track row.label) {
                      <tr><td>{{ row.label }}</td><td class="text-end fw-semibold">{{ row.value }}</td></tr>
                    }
                  </tbody>
                </table>
              </div>
            } @else {
              <p class="text-muted mb-0">{{ 'painelAnalysis.noData' | translate }}</p>
            }
          </div>
        </div>
      </div>
    }
  </div>

  @if (networkMetrics().length || networkAuthors().length) {
    <h1 class="h3 mt-4 mb-3">{{ 'painelAnalysis.connectionIndicators' | translate }}</h1>
    <div class="card border-0 shadow-sm mb-3">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
          <h3 class="h6 mb-0">{{ 'painelAnalysis.network.title' | translate }}</h3>
          <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!networkAuthors().length" (click)="exportNetworkAuthorsCsv()">{{ 'painelAnalysis.exportCsv' | translate }}</button>
        </div>
        @if (networkMetrics().length) {
          <div class="row g-2 mb-3">
            @for (metric of networkMetrics(); track metric.key) {
              <div class="col-6 col-lg-3"><div class="network-metric h-100"><span>{{ metric.labelKey | translate }}</span><strong>{{ metric.value }}</strong></div></div>
            }
          </div>
        }
        @if (networkAuthors().length) {
          <div class="table-responsive network-table">
            <table class="table table-sm align-middle mb-0">
              <thead><tr>
                <th>{{ 'painelAnalysis.network.author' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.degree' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.weightedDegree' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.betweenness' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.closeness' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.eigenvector' | translate }}</th>
                <th class="text-end">{{ 'painelAnalysis.network.indicators.community' | translate }}</th>
              </tr></thead>
              <tbody>
                @for (author of networkAuthors(); track author.author) {
                  <tr><td>{{ author.author }}</td><td class="text-end">{{ author.degree }}</td><td class="text-end">{{ author.weightedDegree }}</td><td class="text-end">{{ author.betweenness }}</td><td class="text-end">{{ author.closeness }}</td><td class="text-end">{{ author.eigenvector }}</td><td class="text-end">{{ author.community }}</td></tr>
                }
              </tbody>
            </table>
          </div>
          <div class="network-legend mt-3" [attr.aria-label]="'painelAnalysis.network.legendTitle' | translate">
            <h4 class="h6 mb-2">{{ 'painelAnalysis.network.legendTitle' | translate }}</h4>
            <dl class="mb-0">
              @for (metric of ['nodes', 'edges', 'density', 'modularity']; track metric) {
                <div><dt>{{ 'painelAnalysis.network.metrics.' + metric | translate }}</dt><dd>{{ 'painelAnalysis.network.metricDescriptions.' + metric | translate }}</dd></div>
              }
              @for (indicator of ['degree', 'weightedDegree', 'betweenness', 'closeness', 'eigenvector', 'community']; track indicator) {
                <div><dt>{{ 'painelAnalysis.network.indicators.' + indicator | translate }}</dt><dd>{{ 'painelAnalysis.network.descriptions.' + indicator | translate }}</dd></div>
              }
            </dl>
          </div>
        }
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/components/painel-analysis/painel-analysis.component.scss */\n.painel-analysis .table {\n  font-size: 0.9rem;\n}\n.painel-analysis .table thead th {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.painel-analysis .table-responsive {\n  max-height: 360px;\n}\n.painel-analysis .network-metric {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background: #f8f9fa;\n}\n.painel-analysis .network-metric span {\n  color: #6c757d;\n  font-size: 0.78rem;\n}\n.painel-analysis .network-metric strong {\n  font-size: 1.2rem;\n}\n.painel-analysis .network-table {\n  max-height: 420px;\n}\n.painel-analysis .network-legend {\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.painel-analysis .network-legend dl {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem 1.5rem;\n}\n.painel-analysis .network-legend dt {\n  font-size: 0.85rem;\n}\n.painel-analysis .network-legend dd {\n  margin: 0.15rem 0 0;\n  color: #6c757d;\n  font-size: 0.82rem;\n}\n@media (max-width: 767.98px) {\n  .painel-analysis .network-legend dl {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .card {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .card-body {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table thead th {\n  background-color: rgba(24, 35, 52, 0.98);\n  color: var(--theme-ink);\n  border-bottom-color: rgba(100, 132, 173, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table tbody td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table tbody th,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table th {\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .table td,\n:host-context(body.theme-master.theme-dark) .painel-analysis .table th {\n  border-color: rgba(100, 132, 173, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .network-metric {\n  background: rgba(24, 35, 52, 0.98);\n  border-color: rgba(100, 132, 173, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .network-metric span {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .network-legend {\n  border-top-color: rgba(100, 132, 173, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .network-legend dd {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary {\n  background: rgba(18, 32, 51, 0.92);\n  border-color: rgba(48, 68, 95, 0.88);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary:hover,\n:host-context(body.theme-master.theme-dark) .painel-analysis .btn-outline-secondary:focus-visible {\n  background: rgba(28, 44, 68, 0.96);\n  border-color: rgba(100, 132, 173, 0.6);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .painel-analysis .text-muted {\n  color: var(--theme-muted) !important;\n}\n/*# sourceMappingURL=painel-analysis.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PainelAnalysisComponent, { className: "PainelAnalysisComponent", filePath: "src/app/components/painel-analysis/painel-analysis.component.ts", lineNumber: 42 });
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
//# sourceMappingURL=chunk-MMTJDMWL.js.map
