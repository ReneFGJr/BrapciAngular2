import {
  BrapciApiService
} from "./chunk-I3Q2WKSF.js";
import {
  BreadcrumbsComponent
} from "./chunk-LTOQCP6Z.js";
import "./chunk-H3IWRHIK.js";
import "./chunk-DKSORO5X.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-DD5AALCM.js";
import {
  CommonModule,
  Component,
  Input,
  NgComponentOutlet,
  Router,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IGL3YMRP.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// src/app/pages/revistas/revistas-location-map/revistas-location-map.component.ts
var _c0 = ["mapContainer"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function RevistasLocationMapComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td")(8, "div", 13);
    \u0275\u0275domElement(9, "div", 14);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const city_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(city_r1.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(city_r1.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(city_r1.total);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.cityBarWidth(city_r1.total), "%");
  }
}
function RevistasLocationMapComponent_Conditional_9_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.issn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.country);
  }
}
function RevistasLocationMapComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "div", 8, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 9)(4, "table", 10)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Cidade");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Pa\xEDs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Total");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Distribui\xE7\xE3o");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RevistasLocationMapComponent_Conditional_9_For_17_Template, 10, 5, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 11)(19, "table", 12)(20, "thead")(21, "tr")(22, "th");
    \u0275\u0275text(23, "T\xEDtulo da revista");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th");
    \u0275\u0275text(25, "ISSN");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "th");
    \u0275\u0275text(27, "Cidade");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "th");
    \u0275\u0275text(29, "Estado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "th");
    \u0275\u0275text(31, "Pa\xEDs");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(32, "tbody");
    \u0275\u0275repeaterCreate(33, RevistasLocationMapComponent_Conditional_9_For_34_Template, 11, 5, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.cityAggregates());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.tableRows());
  }
}
function RevistasLocationMapComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 6);
    \u0275\u0275text(1, "Nenhuma revista com latitude e longitude foi encontrada.");
    \u0275\u0275domElementEnd();
  }
}
var COUNTRY_LABELS = {
  AR: "Argentina",
  BR: "Brasil",
  CL: "Chile",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  EC: "Equador",
  ES: "Espanha",
  ET: "Estonia",
  MX: "M\xE9xico",
  PA: "Panam\xE1",
  PE: "Peru",
  PT: "Portugal",
  UY: "Uruguai",
  US: "Estados Unidos"
};
var RevistasLocationMapComponent = class _RevistasLocationMapComponent {
  journalsInput = [];
  set journals(value) {
    this.journalsInput = this.normalizeJournalsInput(value);
  }
  get journals() {
    return this.journalsInput;
  }
  mapContainer;
  mapInstance = null;
  renderAttempts = 0;
  mapPoints = (() => this.buildPoints());
  cityAggregates = (() => this.buildCityAggregates());
  tableRows = (() => this.buildTableRows());
  ngAfterViewInit() {
    this.scheduleRender();
  }
  ngOnChanges(changes) {
    if (changes["journals"]) {
      this.scheduleRender();
    }
  }
  ngOnDestroy() {
    this.destroyMap();
  }
  buildPoints() {
    return this.journals.map((journal) => this.toPoint(journal)).filter((point) => point !== null);
  }
  buildTableRows() {
    return this.journals.map((journal) => this.toTableRow(journal)).filter((row) => row !== null).sort((left, right) => left.title.localeCompare(right.title, "pt-BR"));
  }
  normalizeJournalsInput(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (value && typeof value === "object") {
      const record = value;
      if (Array.isArray(record["data"])) {
        return record["data"];
      }
      if (Array.isArray(record["items"])) {
        return record["items"];
      }
    }
    return [];
  }
  buildCityAggregates() {
    const grouped = /* @__PURE__ */ new Map();
    for (const point of this.buildPoints()) {
      const key = `${point.city}__${point.country}__${point.lat.toFixed(6)}__${point.long.toFixed(6)}`;
      const current = grouped.get(key);
      if (current) {
        current.total += 1;
        current.journals.push(point);
        continue;
      }
      grouped.set(key, {
        key,
        city: point.city,
        country: point.country,
        lat: point.lat,
        long: point.long,
        total: 1,
        journals: [point]
      });
    }
    return Array.from(grouped.values()).sort((left, right) => {
      if (right.total !== left.total) {
        return right.total - left.total;
      }
      return left.city.localeCompare(right.city, "pt-BR");
    });
  }
  toPoint(journal) {
    const lat = Number.parseFloat(String(journal.lat ?? "").trim());
    const long = Number.parseFloat(String(journal.long ?? "").trim());
    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }
    return {
      id: String(journal.id_jnl),
      name: journal.jnl_name?.trim() || journal.jnl_name_abrev?.trim() || "Revista",
      issn: journal.jnl_issn?.trim() || "-",
      city: journal.gc_name?.trim() || "-",
      country: this.countryFromCode(journal.code),
      lat,
      long
    };
  }
  toTableRow(journal) {
    const lat = Number.parseFloat(String(journal.lat ?? "").trim());
    const long = Number.parseFloat(String(journal.long ?? "").trim());
    if (!Number.isFinite(lat) || !Number.isFinite(long)) {
      return null;
    }
    return {
      id: String(journal.id_jnl),
      title: this.pickText(journal, ["jnl_name", "jnl_name_abrev"]) || "Revista",
      issn: this.pickText(journal, ["jnl_issn", "jnl_eissn", "issn", "eissn"]) || "-",
      city: this.pickText(journal, ["gc_name", "city", "cidade"]) || "-",
      state: this.stateFromJournal(journal),
      country: this.countryFromCode(this.pickText(journal, ["code", "country_code", "country"]))
    };
  }
  pickText(source, keys) {
    for (const key of keys) {
      const value = source[key];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
      if (typeof value === "number" && Number.isFinite(value)) {
        return String(value);
      }
    }
    return "";
  }
  stateFromJournal(journal) {
    const explicitState = this.pickText(journal, ["state", "uf", "estado"]);
    if (explicitState) {
      return explicitState;
    }
    const code = this.pickText(journal, ["code"]);
    if (code.includes("-")) {
      const parts = code.split("-").map((part) => part.trim()).filter(Boolean);
      if (parts.length > 1) {
        return parts[1];
      }
    }
    return "-";
  }
  countryFromCode(code) {
    const value = String(code ?? "").trim().toUpperCase();
    if (!value) {
      return "-";
    }
    const countryCode = value.includes("-") ? value.split("-")[0] : value;
    return COUNTRY_LABELS[countryCode] ?? countryCode;
  }
  renderMap() {
    return __async(this, null, function* () {
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }
      const container = this.mapContainer?.nativeElement;
      const cities = this.buildCityAggregates();
      if (!container || cities.length === 0) {
        return;
      }
      if (container.getBoundingClientRect().width === 0 || container.getBoundingClientRect().height === 0) {
        this.scheduleRender();
        return;
      }
      const leafletModule = yield import("./chunk-ZHZVHXYQ.js");
      const leaflet = leafletModule.default ?? leafletModule;
      this.destroyMap();
      const map = leaflet.map(container, {
        zoomControl: true,
        scrollWheelZoom: true
      });
      leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(map);
      const bounds = leaflet.latLngBounds([]);
      for (const city of cities) {
        const marker = leaflet.circleMarker([city.lat, city.long], {
          color: "#385a7c",
          fillColor: "#385a7c",
          fillOpacity: 0.9,
          radius: this.markerRadius(city.total),
          weight: 2
        }).addTo(map);
        marker.bindPopup(`<strong>${city.city}</strong><br>Pa\xEDs: ${city.country}<br>Total de revistas: ${city.total}<br>${city.journals.map((journal) => journal.name).join("<br>")}`);
        bounds.extend([city.lat, city.long]);
      }
      if (bounds.isValid()) {
        map.fitBounds(bounds.pad(0.2));
      } else {
        map.setView([cities[0].lat, cities[0].long], 4);
      }
      this.mapInstance = map;
      this.renderAttempts = 0;
      requestAnimationFrame(() => {
        map.invalidateSize();
        setTimeout(() => map.invalidateSize(), 120);
      });
    });
  }
  scheduleRender() {
    if (this.renderAttempts >= 8) {
      return;
    }
    this.renderAttempts += 1;
    setTimeout(() => requestAnimationFrame(() => this.renderMap()), 50);
  }
  destroyMap() {
    if (!this.mapInstance) {
      return;
    }
    this.mapInstance.remove();
    this.mapInstance = null;
  }
  markerRadius(total) {
    return Math.min(18, 7 + Math.max(0, total - 1) * 2);
  }
  cityBarWidth(total) {
    const maxTotal = this.cityAggregates()[0]?.total ?? 0;
    if (!maxTotal) {
      return 0;
    }
    return Math.max(8, Math.round(total / maxTotal * 100));
  }
  static \u0275fac = function RevistasLocationMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevistasLocationMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevistasLocationMapComponent, selectors: [["app-revistas-location-map"]], viewQuery: function RevistasLocationMapComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapContainer = _t.first);
    }
  }, inputs: { journals: "journals" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 3, consts: [["mapContainer", ""], ["aria-labelledby", "revistas-location-map-title", 1, "revistas-location-map", "card", "p-3", "p-md-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "revistas-location-map__kicker", "mb-1"], ["id", "revistas-location-map-title", 1, "h5", "mb-0"], [1, "revistas-location-map__count", "mb-0"], [1, "mb-0", "text-secondary"], [1, "revistas-location-map__canvas"], [1, "revistas-location-map__map"], ["aria-label", "Totais por cidade", 1, "table-responsive", "mt-3"], [1, "table", "table-sm", "align-middle", "revistas-location-map__city-table", "mb-0"], [1, "table-responsive", "mt-3"], [1, "table", "table-sm", "align-middle", "revistas-location-map__table", "mb-0"], [1, "revistas-location-map__bar-track"], [1, "revistas-location-map__bar-fill"]], template: function RevistasLocationMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 1)(1, "header", 2)(2, "div")(3, "p", 3);
      \u0275\u0275text(4, "Localiza\xE7\xE3o");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h3", 4);
      \u0275\u0275text(6, "Revistas geolocalizadas");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(9, RevistasLocationMapComponent_Conditional_9_Template, 35, 0)(10, RevistasLocationMapComponent_Conditional_10_Template, 2, 0, "p", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2(" ", ctx.cityAggregates().length, " cidade(s) com ", ctx.mapPoints().length, " revista(s) geolocalizadas ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cityAggregates().length ? 9 : 10);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.revistas-location-map[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  box-shadow: 0 14px 40px rgba(16, 37, 66, 0.08);\n}\n.revistas-location-map__kicker[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n  letter-spacing: 0.12rem;\n  text-transform: uppercase;\n}\n.revistas-location-map__count[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n  font-size: 0.9rem;\n}\n.revistas-location-map__canvas[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  overflow: hidden;\n}\n.revistas-location-map__map[_ngcontent-%COMP%] {\n  min-height: 620px;\n  width: 100%;\n}\n.revistas-location-map__city-table[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.revistas-location-map__city-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(56, 90, 124, 0.1);\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.revistas-location-map__city-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.revistas-location-map__bar-track[_ngcontent-%COMP%] {\n  background: rgba(56, 90, 124, 0.12);\n  border-radius: 999px;\n  height: 0.7rem;\n  min-width: 180px;\n  overflow: hidden;\n}\n.revistas-location-map__bar-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #385a7c,\n      #6b93b8);\n  border-radius: 999px;\n  height: 100%;\n}\n.revistas-location-map__table[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.revistas-location-map__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.revistas-location-map__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--theme-ink);\n}\n.revistas-location-map__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.24);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.06),\n      transparent 36%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__canvas[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__canvas[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%] {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(33, 47, 70, 0.96);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__bar-track[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__bar-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__kicker[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__count[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__count[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__city-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--theme-muted);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(33, 47, 70, 0.96);\n  color: var(--theme-ink);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even), body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-map__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.04);\n}\n/*# sourceMappingURL=revistas-location-map.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevistasLocationMapComponent, [{
    type: Component,
    args: [{ selector: "app-revistas-location-map", standalone: true, imports: [CommonModule], template: '<section class="revistas-location-map card p-3 p-md-4" aria-labelledby="revistas-location-map-title">\r\n  <header class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">\r\n    <div>\r\n      <p class="revistas-location-map__kicker mb-1">Localiza\xE7\xE3o</p>\r\n      <h3 id="revistas-location-map-title" class="h5 mb-0">Revistas geolocalizadas</h3>\r\n    </div>\r\n\r\n    <p class="revistas-location-map__count mb-0">\r\n      {{ cityAggregates().length }} cidade(s) com {{ mapPoints().length }} revista(s) geolocalizadas\r\n    </p>\r\n  </header>\r\n\r\n  @if (cityAggregates().length) {\r\n    <div class="revistas-location-map__canvas">\r\n      <div #mapContainer class="revistas-location-map__map"></div>\r\n    </div>\r\n\r\n    <div class="table-responsive mt-3" aria-label="Totais por cidade">\r\n      <table class="table table-sm align-middle revistas-location-map__city-table mb-0">\r\n        <thead>\r\n          <tr>\r\n            <th>Cidade</th>\r\n            <th>Pa\xEDs</th>\r\n            <th>Total</th>\r\n            <th>Distribui\xE7\xE3o</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          @for (city of cityAggregates(); track city.key) {\r\n            <tr>\r\n              <td>{{ city.city }}</td>\r\n              <td>{{ city.country }}</td>\r\n              <td>{{ city.total }}</td>\r\n              <td>\r\n                <div class="revistas-location-map__bar-track">\r\n                  <div class="revistas-location-map__bar-fill" [style.width.%]="cityBarWidth(city.total)"></div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          }\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class="table-responsive mt-3">\r\n      <table class="table table-sm align-middle revistas-location-map__table mb-0">\r\n        <thead>\r\n          <tr>\r\n            <th>T\xEDtulo da revista</th>\r\n            <th>ISSN</th>\r\n            <th>Cidade</th>\r\n            <th>Estado</th>\r\n            <th>Pa\xEDs</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          @for (row of tableRows(); track row.id) {\r\n            <tr>\r\n              <td>{{ row.title }}</td>\r\n              <td>{{ row.issn }}</td>\r\n              <td>{{ row.city }}</td>\r\n              <td>{{ row.state }}</td>\r\n              <td>{{ row.country }}</td>\r\n            </tr>\r\n          }\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  } @else {\r\n    <p class="mb-0 text-secondary">Nenhuma revista com latitude e longitude foi encontrada.</p>\r\n  }\r\n</section>\r\n', styles: ["/* src/app/pages/revistas/revistas-location-map/revistas-location-map.component.scss */\n.revistas-location-map {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  box-shadow: 0 14px 40px rgba(16, 37, 66, 0.08);\n}\n.revistas-location-map__kicker {\n  color: var(--theme-muted);\n  font-size: 0.72rem;\n  letter-spacing: 0.12rem;\n  text-transform: uppercase;\n}\n.revistas-location-map__count {\n  color: var(--theme-muted);\n  font-size: 0.9rem;\n}\n.revistas-location-map__canvas {\n  border: 1px solid var(--theme-line);\n  border-radius: 0.85rem;\n  overflow: hidden;\n}\n.revistas-location-map__map {\n  min-height: 620px;\n  width: 100%;\n}\n.revistas-location-map__city-table {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.revistas-location-map__city-table thead th {\n  background: rgba(56, 90, 124, 0.1);\n  color: var(--theme-ink);\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.revistas-location-map__city-table td {\n  color: var(--theme-ink);\n}\n.revistas-location-map__bar-track {\n  background: rgba(56, 90, 124, 0.12);\n  border-radius: 999px;\n  height: 0.7rem;\n  min-width: 180px;\n  overflow: hidden;\n}\n.revistas-location-map__bar-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #385a7c,\n      #6b93b8);\n  border-radius: 999px;\n  height: 100%;\n}\n.revistas-location-map__table {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.revistas-location-map__table thead th {\n  background: var(--theme-sand);\n  color: var(--theme-ink);\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.revistas-location-map__table td {\n  color: var(--theme-ink);\n}\n.revistas-location-map__table tbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.24);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.06),\n      transparent 36%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__canvas,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__city-table,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__table {\n  background: rgba(18, 32, 51, 0.94);\n  border-color: rgba(48, 68, 95, 0.88);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__city-table thead th {\n  background: rgba(33, 47, 70, 0.96);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__bar-track {\n  background: rgba(255, 255, 255, 0.1);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__kicker,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__count,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__city-table td,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__city-table th,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__table td,\n:host-context(body.theme-master.theme-dark) .revistas-location-map__table th {\n  color: var(--theme-muted);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__table thead th {\n  background: rgba(33, 47, 70, 0.96);\n  color: var(--theme-ink);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-map__table tbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.04);\n}\n/*# sourceMappingURL=revistas-location-map.component.css.map */\n"] }]
  }], null, { journals: [{
    type: Input
  }], mapContainer: [{
    type: ViewChild,
    args: ["mapContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevistasLocationMapComponent, { className: "RevistasLocationMapComponent", filePath: "src/app/pages/revistas/revistas-location-map/revistas-location-map.component.ts", lineNumber: 94 });
})();

// src/app/pages/revistas/revistas.page.ts
var _c02 = (a0) => ({ journals: a0 });
var _forTrack02 = ($index, $item) => $item.id_jnl;
function RevistasPage_Conditional_3_Conditional_34_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function RevistasPage_Conditional_3_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RevistasPage_Conditional_3_Conditional_34_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", ctx_r1.revistasLocationMapComponent)("ngComponentOutletInputs", \u0275\u0275pureFunction1(2, _c02, ctx_r1.locationJournals()));
  }
}
function RevistasPage_Conditional_3_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h3", 18);
    \u0275\u0275text(2, "Localiza\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, " Nenhuma revista com coordenadas v\xE1lidas foi encontrada no filtro atual. ");
    \u0275\u0275elementEnd()();
  }
}
function RevistasPage_Conditional_3_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, RevistasPage_Conditional_3_Conditional_34_Conditional_1_Template, 1, 4, "ng-container")(2, RevistasPage_Conditional_3_Conditional_34_Conditional_2_Template, 5, 0, "section", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.locationJournals().length ? 1 : 2);
  }
}
function RevistasPage_Conditional_3_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "journals.noResultsForFilters"));
  }
}
function RevistasPage_Conditional_3_Conditional_36_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const journal_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", journal_r4.cover, \u0275\u0275sanitizeUrl)("alt", journal_r4.jnl_name);
  }
}
function RevistasPage_Conditional_3_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Conditional_36_For_2_Template_div_click_0_listener() {
      const journal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openV(journal_r4));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275conditionalCreate(2, RevistasPage_Conditional_3_Conditional_36_For_2_Conditional_2_Template, 1, 2, "img", 22);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const journal_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(journal_r4.cover ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(journal_r4.jnl_name_abrev);
  }
}
function RevistasPage_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, RevistasPage_Conditional_3_Conditional_36_For_2_Template, 5, 2, "div", 20, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredJournals());
  }
}
function RevistasPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("ALL"));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("JA"));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTypeFilter("JE"));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "button", 9);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter("ALL"));
    });
    \u0275\u0275text(20, " Todas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 9);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter("CURRENT"));
    });
    \u0275\u0275text(22, " Correntes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 9);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter("HISTORIC"));
    });
    \u0275\u0275text(24, " Hist\xF3ricas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 11);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSection("location"));
    });
    \u0275\u0275text(26, " Localiza\xE7\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 12);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSection("list"));
    });
    \u0275\u0275text(28, " Lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 13);
    \u0275\u0275listener("click", function RevistasPage_Conditional_3_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 14);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275listener("input", function RevistasPage_Conditional_3_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTitleQuery($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, RevistasPage_Conditional_3_Conditional_34_Template, 3, 1, "div", 5);
    \u0275\u0275conditionalCreate(35, RevistasPage_Conditional_3_Conditional_35_Template, 4, 3, "div", 5);
    \u0275\u0275conditionalCreate(36, RevistasPage_Conditional_3_Conditional_36_Template, 3, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 42, "journals.publicationsList"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 44, "journals.filterAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.typeFilter() === "ALL")("btn-outline-primary", ctx_r1.typeFilter() !== "ALL");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 46, "journals.filterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.typeFilter() === "JA")("btn-outline-primary", ctx_r1.typeFilter() !== "JA");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 48, "journals.filterJa"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.typeFilter() === "JE")("btn-outline-primary", ctx_r1.typeFilter() !== "JE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 50, "journals.filterJe"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-danger", ctx_r1.statusFilter() === "ALL")("btn-outline-danger", ctx_r1.statusFilter() !== "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", ctx_r1.statusFilter() === "CURRENT")("btn-outline-danger", ctx_r1.statusFilter() !== "CURRENT");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", ctx_r1.statusFilter() === "HISTORIC")("btn-outline-danger", ctx_r1.statusFilter() !== "HISTORIC");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeSection() === "location");
    \u0275\u0275attribute("aria-pressed", ctx_r1.activeSection() === "location");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeSection() === "list");
    \u0275\u0275attribute("aria-pressed", ctx_r1.activeSection() === "list");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.filteredJournals().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 52, "journals.exportCsv"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 54, "journals.searchPlaceholder"))("value", ctx_r1.titleQuery());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeSection() === "location" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeSection() === "list" && !ctx_r1.hasFilteredResults() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeSection() === "list" ? 36 : -1);
  }
}
var RevistasPage = class _RevistasPage {
  revistasLocationMapComponent = RevistasLocationMapComponent;
  brapciApiService = inject(BrapciApiService);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  journals = signal([], ...ngDevMode ? [{ debugName: "journals" }] : []);
  typeFilter = signal("ALL", ...ngDevMode ? [{ debugName: "typeFilter" }] : []);
  statusFilter = signal("ALL", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  titleQuery = signal("", ...ngDevMode ? [{ debugName: "titleQuery" }] : []);
  activeSection = signal("list", ...ngDevMode ? [{ debugName: "activeSection" }] : []);
  allLocationJournals = computed(() => this.journals().filter((journal) => this.hasLocation(journal)), ...ngDevMode ? [{ debugName: "allLocationJournals" }] : []);
  locationJournals = computed(() => this.allLocationJournals().filter((journal) => {
    const query = this.titleQuery().trim().toLowerCase();
    const activeType = this.typeFilter();
    const activeStatus = this.statusFilter();
    const collection = String(journal.jnl_collection ?? "").trim().toUpperCase();
    const title = String(journal.jnl_name ?? "").toLowerCase();
    const matchesType = activeType === "ALL" ? true : collection === activeType;
    const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
    const matchesTitle = query ? title.includes(query) : true;
    return matchesType && matchesStatus && matchesTitle;
  }), ...ngDevMode ? [{ debugName: "locationJournals" }] : []);
  filteredJournals = computed(() => {
    const activeType = this.typeFilter();
    const activeStatus = this.statusFilter();
    const query = this.titleQuery().trim().toLowerCase();
    return this.journals().filter((journal) => {
      const collection = String(journal.jnl_collection ?? "").trim().toUpperCase();
      const title = String(journal.jnl_name ?? "").toLowerCase();
      const matchesType = activeType === "ALL" ? true : collection === activeType;
      const matchesStatus = this.matchesStatusFilter(journal, activeStatus);
      const matchesTitle = query ? title.includes(query) : true;
      return matchesType && matchesStatus && matchesTitle;
    });
  }, ...ngDevMode ? [{ debugName: "filteredJournals" }] : []);
  hasResults = computed(() => this.journals().length > 0, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  hasFilteredResults = computed(() => this.filteredJournals().length > 0, ...ngDevMode ? [{ debugName: "hasFilteredResults" }] : []);
  constructor() {
    this.loadJournals();
  }
  loadJournals() {
    this.loading.set(true);
    this.error.set("");
    this.brapciApiService.get("brapci/source/journal").subscribe({
      next: (response) => {
        const items = Array.isArray(response) ? response : [];
        this.journals.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.journals.set([]);
        this.error.set("N\xE3o foi poss\xEDvel carregar as revistas. Tente novamente mais tarde.");
        this.loading.set(false);
      }
    });
  }
  setTypeFilter(type) {
    this.typeFilter.set(type);
  }
  setStatusFilter(status) {
    this.statusFilter.set(status);
  }
  setTitleQuery(value) {
    this.titleQuery.set(value);
  }
  setSection(section) {
    this.activeSection.set(section);
  }
  exportCsv() {
    const journals = this.filteredJournals();
    if (!journals.length || typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const preferredKeys = [
      "id_jnl",
      "jnl_name",
      "jnl_name_abrev",
      "jnl_collection",
      "jnl_issn",
      "jnl_eissn",
      "jnl_ano_inicio",
      "jnl_ano_final",
      "jnl_active",
      "jnl_frbr",
      "jnl_url",
      "cover"
    ];
    const allKeys = /* @__PURE__ */ new Set();
    for (const journal of journals) {
      for (const key of Object.keys(journal)) {
        allKeys.add(key);
      }
    }
    const columns = [
      ...preferredKeys.filter((key) => allKeys.has(key)),
      ...[...allKeys].filter((key) => !preferredKeys.includes(key)).sort((a, b) => a.localeCompare(b))
    ];
    const rows = [
      columns,
      ...journals.map((journal) => columns.map((column) => this.toCsvValue(journal[column])))
    ];
    const csvContent = rows.map((row) => row.map((cell) => this.escapeCsv(cell)).join(",")).join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "revistas.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  openV(journal) {
    const id = String(journal?.jnl_frbr ?? "").trim();
    if (!id) {
      return;
    }
    this.router.navigate(["/v/", id]);
  }
  escapeCsv(value) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  toCsvValue(value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  hasLocation(journal) {
    const lat = Number.parseFloat(String(journal["lat"] ?? "").trim());
    const long = Number.parseFloat(String(journal["long"] ?? "").trim());
    return Number.isFinite(lat) && Number.isFinite(long);
  }
  matchesStatusFilter(journal, status) {
    if (status === "ALL") {
      return true;
    }
    const isHistoric = this.isHistoricJournal(journal);
    return status === "HISTORIC" ? isHistoric : !isHistoric;
  }
  isHistoricJournal(journal) {
    const value = journal.jnl_historic;
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "number") {
      return value === 1;
    }
    const normalized = String(value ?? "").trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "yes";
  }
  static \u0275fac = function RevistasPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevistasPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevistasPage, selectors: [["app-revistas-page"]], decls: 4, vars: 1, consts: [["aria-labelledby", "publications-title", 1, "revistas-wrap", "py-4"], [1, "container"], [1, "container", "mt-0", "mb-4"], [1, "col-12"], ["id", "publications-title", 1, "eventos-title", "mb-0"], [1, "container", "mb-4"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "revistas-tabs"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "ms-2", 3, "click"], ["role", "group", "aria-label", "Filtro de status das revistas", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "ms-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", "ms-4", 3, "click", "disabled"], ["type", "text", 1, "form-control", "form-control-sm", "ms-lg-auto", 2, "max-width", "320px", 3, "input", "placeholder", "value"], [1, "container", "revistas-grid"], [1, "revistas-location-empty", "card", "p-3", "p-md-4"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "h5", "mb-2"], [1, "mb-0", "text-secondary"], [1, "revista-card", "border", "p-0", 2, "cursor", "pointer"], [1, "revista-card", "border", "p-0", 2, "cursor", "pointer", 3, "click"], [1, "revista-cover", 3, "src", "alt"], [1, "mb-2", "small"]], template: function RevistasPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, RevistasPage_Conditional_3_Template, 37, 56);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.hasResults() ? 3 : -1);
    }
  }, dependencies: [CommonModule, NgComponentOutlet, TranslateModule, BreadcrumbsComponent, TranslatePipe], styles: ["\n\n.revistas-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: calc(100vh - 70px);\n}\n.revistas-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.revistas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.eventos-title[_ngcontent-%COMP%] {\n  color: #222;\n}\n@media (min-width: 992px) {\n  .revistas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\n.revista-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n}\n.revista-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.revista-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  word-break: break-word;\n}\n.revista-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333;\n}\n.revista-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.revista-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-weight: 500;\n}\n.revista-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #0052a3;\n  text-decoration: underline;\n}\n.revista-cover[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 0;\n  background: #f0f0f0;\n}\n.small[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.35rem 0 0.5rem;\n  padding: 0 0.25rem;\n  font-size: 0.875rem;\n  color: #666;\n  line-height: 1.25rem;\n  text-align: center;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .eventos-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .eventos-title[_ngcontent-%COMP%] {\n  color: #e8e8e8;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n  border-color: #444;\n  border: 1px solid #444;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);\n  border-color: #666;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revista-cover[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revista-cover[_ngcontent-%COMP%] {\n  background: #444;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .small[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.revistas-location-empty[_ngcontent-%COMP%] {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.btn.active[_ngcontent-%COMP%], \n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .revistas-location-empty[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .revistas-location-empty[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.06),\n      transparent 36%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .btn-outline-primary.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .btn-outline-primary.active[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:active, body.theme-master.theme-dark   [_nghost-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.94));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: #fff;\n}\n/*# sourceMappingURL=revistas.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevistasPage, [{
    type: Component,
    args: [{ selector: "app-revistas-page", standalone: true, imports: [CommonModule, TranslateModule, BreadcrumbsComponent], template: `<section class="revistas-wrap py-4" aria-labelledby="publications-title">\r
  <div class="container">\r
    <app-breadcrumbs></app-breadcrumbs>\r
  </div>\r
\r
@if (hasResults()) {\r
  <div class="container mt-0 mb-4">\r
    <div class="col-12">\r
      <h2 id="publications-title" class="eventos-title mb-0">{{ 'journals.publicationsList' | translate }}</h2>\r
    </div>\r
  </div>\r
\r
  <div class="container mb-4">\r
    <div class="d-flex flex-wrap gap-2 align-items-center revistas-tabs">\r
      <div class="btn-group btn-group-sm" role="group" [attr.aria-label]="'journals.filterAriaLabel' | translate">\r
        <button\r
          type="button"\r
          class="btn"\r
          [class.btn-primary]="typeFilter() === 'ALL'"\r
          [class.btn-outline-primary]="typeFilter() !== 'ALL'"\r
          (click)="setTypeFilter('ALL')"\r
        >\r
          {{ 'journals.filterAll' | translate }}\r
        </button>\r
        <button\r
          type="button"\r
          class="btn ms-2"\r
          [class.btn-primary]="typeFilter() === 'JA'"\r
          [class.btn-outline-primary]="typeFilter() !== 'JA'"\r
          (click)="setTypeFilter('JA')"\r
        >\r
          {{ 'journals.filterJa' | translate }}\r
        </button>\r
        <button\r
          type="button"\r
          class="btn ms-2"\r
          [class.btn-primary]="typeFilter() === 'JE'"\r
          [class.btn-outline-primary]="typeFilter() !== 'JE'"\r
          (click)="setTypeFilter('JE')"\r
        >\r
          {{ 'journals.filterJe' | translate }}\r
        </button>\r
      </div>\r
\r
      <div class="btn-group btn-group-sm" role="group" aria-label="Filtro de status das revistas">\r
        <button\r
          type="button"\r
          class="btn ms-2"\r
          [class.btn-danger]="statusFilter() === 'ALL'"\r
          [class.btn-outline-danger]="statusFilter() !== 'ALL'"\r
          (click)="setStatusFilter('ALL')"\r
        >\r
          Todas\r
        </button>\r
        <button\r
          type="button"\r
          class="btn ms-2"\r
          [class.btn-danger]="statusFilter() === 'CURRENT'"\r
          [class.btn-outline-danger]="statusFilter() !== 'CURRENT'"\r
          (click)="setStatusFilter('CURRENT')"\r
        >\r
          Correntes\r
        </button>\r
        <button\r
          type="button"\r
          class="btn ms-2"\r
          [class.btn-danger]="statusFilter() === 'HISTORIC'"\r
          [class.btn-outline-danger]="statusFilter() !== 'HISTORIC'"\r
          (click)="setStatusFilter('HISTORIC')"\r
        >\r
          Hist\xF3ricas\r
        </button>\r
      </div>\r
\r
        <button\r
          type="button"\r
          class="btn btn-sm btn-outline-warning ms-2"\r
          (click)="setSection('location')"\r
          [class.active]="activeSection() === 'location'"\r
          [attr.aria-pressed]="activeSection() === 'location'"\r
        >\r
          Localiza\xE7\xE3o\r
        </button>\r
\r
        <button\r
          type="button"\r
          class="btn btn-sm btn-outline-warning"\r
          (click)="setSection('list')"\r
          [class.active]="activeSection() === 'list'"\r
          [attr.aria-pressed]="activeSection() === 'list'"\r
        >\r
          Lista\r
        </button>\r
\r
      <button\r
        type="button"\r
        class="btn btn-sm btn-outline-success ms-4"\r
        (click)="exportCsv()"\r
        [disabled]="!filteredJournals().length"\r
      >\r
        {{ 'journals.exportCsv' | translate }}\r
      </button>\r
\r
      <input\r
        class="form-control form-control-sm ms-lg-auto"\r
        style="max-width: 320px"\r
        type="text"\r
        [placeholder]="'journals.searchPlaceholder' | translate"\r
        [value]="titleQuery()"\r
        (input)="setTitleQuery($any($event.target).value)"\r
      />\r
    </div>\r
  </div>\r
\r
  @if (activeSection() === 'location') {\r
    <div class="container mb-4">\r
      @if (locationJournals().length) {\r
        <ng-container\r
          *ngComponentOutlet="revistasLocationMapComponent; inputs: { journals: locationJournals() }"\r
        ></ng-container>\r
      } @else {\r
        <section class="revistas-location-empty card p-3 p-md-4">\r
          <h3 class="h5 mb-2">Localiza\xE7\xE3o</h3>\r
          <p class="mb-0 text-secondary">\r
            Nenhuma revista com coordenadas v\xE1lidas foi encontrada no filtro atual.\r
          </p>\r
        </section>\r
      }\r
    </div>\r
  }\r
\r
  @if (activeSection() === 'list' && !hasFilteredResults()) {\r
    <div class="container mb-4">\r
      <p class="mb-0 text-secondary">{{ 'journals.noResultsForFilters' | translate }}</p>\r
    </div>\r
  }\r
\r
  @if (activeSection() === 'list') {\r
    <div class="container revistas-grid">\r
      @for (journal of filteredJournals(); track journal.id_jnl) {\r
        <div class="revista-card border p-0" (click)="openV(journal)" style="cursor: pointer">\r
          <div>\r
            @if (journal.cover) {\r
              <img class="revista-cover" [src]="journal.cover" [alt]="journal.jnl_name" />\r
            }\r
\r
            <span class="mb-2 small">{{ journal.jnl_name_abrev }}</span>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  }\r
}\r
</section>\r
`, styles: ["/* src/app/pages/revistas/revistas.page.scss */\n.revistas-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: calc(100vh - 70px);\n}\n.revistas-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.revistas-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.eventos-title {\n  color: #222;\n}\n@media (min-width: 992px) {\n  .revistas-grid {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n}\n.revista-card {\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n}\n.revista-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.revista-card h2 {\n  color: #333;\n  word-break: break-word;\n}\n.revista-card p {\n  color: #333;\n}\n.revista-card p strong {\n  color: #333;\n}\n.revista-card .link {\n  color: #0066cc;\n  text-decoration: none;\n  font-weight: 500;\n}\n.revista-card .link:hover {\n  color: #0052a3;\n  text-decoration: underline;\n}\n.revista-cover {\n  display: block;\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 0;\n  background: #f0f0f0;\n}\n.small {\n  display: block;\n  margin: 0.35rem 0 0.5rem;\n  padding: 0 0.25rem;\n  font-size: 0.875rem;\n  color: #666;\n  line-height: 1.25rem;\n  text-align: center;\n}\n:host-context(body.theme-master.theme-dark) .revistas-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\n:host-context(body.theme-master.theme-dark) .eventos-title {\n  color: #e8e8e8;\n}\n:host-context(body.theme-master.theme-dark) .revista-card {\n  background: #2a2a2a;\n  border-color: #444;\n  border: 1px solid #444;\n}\n:host-context(body.theme-master.theme-dark) .revista-card:hover {\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);\n  border-color: #666;\n}\n:host-context(body.theme-master.theme-dark) .revista-cover {\n  background: #444;\n}\n:host-context(body.theme-master.theme-dark) .small {\n  color: #b0b0b0;\n}\n.revistas-location-empty {\n  background: var(--theme-card-bg);\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n}\n.btn.active,\n.btn:active {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);\n}\n:host-context(body.theme-master.theme-dark) .revistas-location-empty {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 255, 255, 0.06),\n      transparent 36%),\n    linear-gradient(\n      180deg,\n      rgba(16, 23, 39, 0.92),\n      rgba(13, 19, 31, 0.88));\n  border-color: rgba(48, 68, 95, 0.88);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);\n}\n:host-context(body.theme-master.theme-dark) .btn-outline-primary.active,\n:host-context(body.theme-master.theme-dark) .btn-outline-primary:active {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(33, 47, 70, 0.96),\n      rgba(24, 35, 52, 0.94));\n  border-color: rgba(100, 132, 173, 0.6);\n  color: #fff;\n}\n/*# sourceMappingURL=revistas.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevistasPage, { className: "RevistasPage", filePath: "src/app/pages/revistas/revistas.page.ts", lineNumber: 35 });
})();
export {
  RevistasPage
};
//# sourceMappingURL=chunk-IOGPMRAL.js.map
