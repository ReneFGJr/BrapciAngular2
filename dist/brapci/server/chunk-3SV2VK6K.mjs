import './polyfills.server.mjs';
import {
  BrapciApiService
} from "./chunk-JPRPSVPQ.mjs";
import {
  BreadcrumbsComponent
} from "./chunk-XW3PUGC7.mjs";
import {
  takeUntilDestroyed
} from "./chunk-YPPRAXG6.mjs";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-KBHAFJY6.mjs";
import "./chunk-ALHJCIVJ.mjs";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DestroyRef,
  Input,
  catchError,
  debounceTime,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ZBQU5EHV.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/pages/small-world/small-world-connection/small-world-connection.component.ts
var _forTrack0 = ($index, $item) => $item.step;
function SmallWorldConnectionComponent_Conditional_13_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275domElement(1, "span")(2, "i", 15);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_25_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275styleProp("--link-delay", \u0275$index_25_r1 * 180 + 100, "ms");
  }
}
function SmallWorldConnectionComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(8, SmallWorldConnectionComponent_Conditional_13_For_2_Conditional_8_Template, 3, 2, "div", 13);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_25_r1 = ctx.$index;
    const \u0275$count_25_r3 = ctx.$count;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--node-delay", \u0275$index_25_r1 * 180, "ms");
    \u0275\u0275classProp("is-origin", \u0275$index_25_r1 === 0)("is-target", \u0275$index_25_r1 === \u0275$count_25_r3 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.nodeRole(\u0275$index_25_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.node);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_25_r1 === \u0275$count_25_r3 - 1) ? 8 : -1);
  }
}
function SmallWorldConnectionComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_48_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("Etapa ", item_r5.step, ": ", item_r5.node, ", ", ctx_r3.nodeRole(\u0275$index_48_r6), ".");
  }
}
function SmallWorldConnectionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, SmallWorldConnectionComponent_Conditional_13_For_2_Template, 9, 10, null, null, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "ol", 8);
    \u0275\u0275repeaterCreate(4, SmallWorldConnectionComponent_Conditional_13_For_5_Template, 2, 3, "li", null, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "Caminho de " + ctx_r3.data.origin + " at\xE9 " + ctx_r3.data.target + ", com " + ctx_r3.data.distance + " conex\xF5es.");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.data.path);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.data.path);
  }
}
function SmallWorldConnectionComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 6);
    \u0275\u0275text(1, "Nenhum caminho de colabora\xE7\xE3o foi encontrado.");
    \u0275\u0275domElementEnd();
  }
}
var SmallWorldConnectionComponent = class _SmallWorldConnectionComponent {
  data;
  nodeRole(index) {
    if (index === 0)
      return "Origem";
    if (index === this.data.path.length - 1)
      return "Destino";
    return "Conex\xE3o";
  }
  static \u0275fac = function SmallWorldConnectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmallWorldConnectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmallWorldConnectionComponent, selectors: [["app-small-world-connection"]], inputs: { data: "data" }, decls: 15, vars: 5, consts: [["aria-labelledby", "connection-title", 1, "connection"], [1, "connection__header"], [1, "connection__eyebrow", "mb-1"], ["id", "connection-title", 1, "h4", "mb-1"], [1, "connection__summary", "mb-0"], [1, "connection__distance"], ["role", "status", 1, "connection__empty", "mb-0"], ["role", "img", 1, "connection__path"], [1, "visually-hidden"], [1, "connection__node-wrap"], [1, "connection__node"], ["aria-hidden", "true", 1, "connection__step"], [1, "connection__role"], ["aria-hidden", "true", 1, "connection__link", 3, "--link-delay"], ["aria-hidden", "true", 1, "connection__link"], [1, "bi", "bi-chevron-right"]], template: function SmallWorldConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Caminho encontrado");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 3);
      \u0275\u0275text(6, "Rede de colabora\xE7\xE3o");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275domElementStart(11, "small");
      \u0275\u0275text(12, "dist\xE2ncia");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(13, SmallWorldConnectionComponent_Conditional_13_Template, 6, 1)(14, SmallWorldConnectionComponent_Conditional_14_Template, 2, 0, "p", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2(" ", ctx.data.distance, " ", ctx.data.distance === 1 ? "conex\xE3o" : "conex\xF5es", " entre origem e destino ");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.data.distance + " conex\xF5es");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.distance, " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.data.path.length ? 13 : 14);
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.connection[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 3vw, 1.75rem);\n  color: #24344b;\n  background:\n    radial-gradient(\n      circle at 90% 0,\n      rgba(13, 110, 253, 0.12),\n      transparent 32%),\n    linear-gradient(\n      145deg,\n      #fff,\n      #f4f8ff);\n  border: 1px solid #cbd8e8;\n  border-radius: 1rem;\n}\n.connection__header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);\n}\n.connection__eyebrow[_ngcontent-%COMP%], \n.connection__role[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.connection__summary[_ngcontent-%COMP%] {\n  color: #59697c;\n}\n.connection__distance[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  width: 4.5rem;\n  height: 4.5rem;\n  place-content: center;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd,\n      #6548d8);\n  border-radius: 50%;\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  text-align: center;\n}\n.connection__distance[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.connection__path[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n}\n.connection__node-wrap[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 0;\n  opacity: 0;\n  transform: translateY(14px) scale(0.96);\n  animation: _ngcontent-%COMP%_node-arrive 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;\n  animation-delay: var(--node-delay);\n}\n.connection__node[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 8.5rem;\n  height: 100%;\n  padding: 1.15rem 0.9rem 1rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.84);\n  border: 1px solid #ced9e7;\n  border-radius: 0.9rem;\n  text-align: center;\n}\n.connection__node[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.45rem;\n  overflow-wrap: anywhere;\n  line-height: 1.3;\n}\n.connection__step[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.85rem;\n  display: grid;\n  width: 1.9rem;\n  height: 1.9rem;\n  place-items: center;\n  color: #fff;\n  background: #52657c;\n  border: 3px solid #f7faff;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.is-origin[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%] {\n  border-color: #188754;\n}\n.is-origin[_ngcontent-%COMP%]   .connection__step[_ngcontent-%COMP%] {\n  background: #188754;\n}\n.is-target[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%] {\n  border-color: #6548d8;\n}\n.is-target[_ngcontent-%COMP%]   .connection__step[_ngcontent-%COMP%] {\n  background: #6548d8;\n}\n.connection__link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 0 1 4rem;\n  min-width: 1.5rem;\n  align-items: center;\n  color: #0d6efd;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_link-arrive 0.45s ease-out forwards;\n  animation-delay: var(--link-delay);\n}\n.connection__link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #55a2ff,\n      #6548d8);\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: _ngcontent-%COMP%_link-grow 0.5s ease-out forwards;\n  animation-delay: var(--link-delay);\n}\n.connection__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: -0.35rem;\n  font-size: 1.2rem;\n}\n.connection__empty[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: #59697c;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_node-arrive {\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_link-arrive {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_link-grow {\n  to {\n    transform: scaleX(1);\n  }\n}\n@media (max-width: 767.98px) {\n  .connection__path[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .connection__node-wrap[_ngcontent-%COMP%] {\n    flex-basis: auto;\n  }\n  .connection__node[_ngcontent-%COMP%] {\n    min-height: 6.5rem;\n  }\n  .connection__link[_ngcontent-%COMP%] {\n    flex: 0 0 2.75rem;\n    min-height: 2.75rem;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .connection__link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 3px;\n    height: 100%;\n    background:\n      linear-gradient(\n        180deg,\n        #55a2ff,\n        #6548d8);\n    transform: scaleY(0);\n    transform-origin: top;\n    animation-name: _ngcontent-%COMP%_link-grow-mobile;\n  }\n  .connection__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: -0.45rem 0 0;\n    transform: rotate(90deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_link-grow-mobile {\n  to {\n    transform: scaleY(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .connection__node-wrap[_ngcontent-%COMP%], \n   .connection__link[_ngcontent-%COMP%], \n   .connection__link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n    animation: none;\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .connection[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .connection[_ngcontent-%COMP%] {\n  color: #edf3fb;\n  background:\n    radial-gradient(\n      circle at 90% 0,\n      rgba(88, 157, 255, 0.16),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      #182231,\n      #111923);\n  border-color: #40516a;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .connection__summary[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .connection__summary[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .connection__empty[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .connection__empty[_ngcontent-%COMP%] {\n  color: #bac7d7;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .connection__node[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .connection__node[_ngcontent-%COMP%] {\n  background: rgba(29, 41, 57, 0.9);\n  border-color: #53657d;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .connection__step[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .connection__step[_ngcontent-%COMP%] {\n  border-color: #182231;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .is-origin[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .is-origin[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%] {\n  border-color: #45b983;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .is-target[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .is-target[_ngcontent-%COMP%]   .connection__node[_ngcontent-%COMP%] {\n  border-color: #9a83ef;\n}\n/*# sourceMappingURL=small-world-connection.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmallWorldConnectionComponent, [{
    type: Component,
    args: [{ selector: "app-small-world-connection", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="connection" aria-labelledby="connection-title">
  <header class="connection__header">
    <div>
      <p class="connection__eyebrow mb-1">Caminho encontrado</p>
      <h2 id="connection-title" class="h4 mb-1">Rede de colabora\xE7\xE3o</h2>
      <p class="connection__summary mb-0">
        {{ data.distance }} {{ data.distance === 1 ? 'conex\xE3o' : 'conex\xF5es' }} entre origem e destino
      </p>
    </div>
    <span class="connection__distance" [attr.aria-label]="data.distance + ' conex\xF5es'">
      {{ data.distance }}
      <small>dist\xE2ncia</small>
    </span>
  </header>

  @if (data.path.length) {
    <div
      class="connection__path"
      role="img"
      [attr.aria-label]="'Caminho de ' + data.origin + ' at\xE9 ' + data.target + ', com ' + data.distance + ' conex\xF5es.'"
    >
      @for (item of data.path; track item.step; let index = $index; let last = $last) {
        <div
          class="connection__node-wrap"
          [class.is-origin]="index === 0"
          [class.is-target]="last"
          [style.--node-delay.ms]="index * 180"
        >
          <div class="connection__node">
            <span class="connection__step" aria-hidden="true">{{ item.step }}</span>
            <span class="connection__role">{{ nodeRole(index) }}</span>
            <strong>{{ item.node }}</strong>
          </div>
        </div>

        @if (!last) {
          <div
            class="connection__link"
            aria-hidden="true"
            [style.--link-delay.ms]="index * 180 + 100"
          >
            <span></span>
            <i class="bi bi-chevron-right"></i>
          </div>
        }
      }
    </div>

    <ol class="visually-hidden">
      @for (item of data.path; track item.step; let index = $index) {
        <li>Etapa {{ item.step }}: {{ item.node }}, {{ nodeRole(index) }}.</li>
      }
    </ol>
  } @else {
    <p class="connection__empty mb-0" role="status">Nenhum caminho de colabora\xE7\xE3o foi encontrado.</p>
  }
</section>
`, styles: ["/* src/app/pages/small-world/small-world-connection/small-world-connection.component.scss */\n:host {\n  display: block;\n}\n.connection {\n  padding: clamp(1rem, 3vw, 1.75rem);\n  color: #24344b;\n  background:\n    radial-gradient(\n      circle at 90% 0,\n      rgba(13, 110, 253, 0.12),\n      transparent 32%),\n    linear-gradient(\n      145deg,\n      #fff,\n      #f4f8ff);\n  border: 1px solid #cbd8e8;\n  border-radius: 1rem;\n}\n.connection__header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);\n}\n.connection__eyebrow,\n.connection__role {\n  color: #0d6efd;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.connection__summary {\n  color: #59697c;\n}\n.connection__distance {\n  display: grid;\n  flex: 0 0 auto;\n  width: 4.5rem;\n  height: 4.5rem;\n  place-content: center;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd,\n      #6548d8);\n  border-radius: 50%;\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  text-align: center;\n}\n.connection__distance small {\n  margin-top: 0.25rem;\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.connection__path {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n}\n.connection__node-wrap {\n  flex: 1 1 0;\n  min-width: 0;\n  opacity: 0;\n  transform: translateY(14px) scale(0.96);\n  animation: node-arrive 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;\n  animation-delay: var(--node-delay);\n}\n.connection__node {\n  position: relative;\n  display: flex;\n  min-height: 8.5rem;\n  height: 100%;\n  padding: 1.15rem 0.9rem 1rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.84);\n  border: 1px solid #ced9e7;\n  border-radius: 0.9rem;\n  text-align: center;\n}\n.connection__node strong {\n  margin-top: 0.45rem;\n  overflow-wrap: anywhere;\n  line-height: 1.3;\n}\n.connection__step {\n  position: absolute;\n  top: -0.85rem;\n  display: grid;\n  width: 1.9rem;\n  height: 1.9rem;\n  place-items: center;\n  color: #fff;\n  background: #52657c;\n  border: 3px solid #f7faff;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.is-origin .connection__node {\n  border-color: #188754;\n}\n.is-origin .connection__step {\n  background: #188754;\n}\n.is-target .connection__node {\n  border-color: #6548d8;\n}\n.is-target .connection__step {\n  background: #6548d8;\n}\n.connection__link {\n  position: relative;\n  display: flex;\n  flex: 0 1 4rem;\n  min-width: 1.5rem;\n  align-items: center;\n  color: #0d6efd;\n  opacity: 0;\n  animation: link-arrive 0.45s ease-out forwards;\n  animation-delay: var(--link-delay);\n}\n.connection__link span {\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #55a2ff,\n      #6548d8);\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: link-grow 0.5s ease-out forwards;\n  animation-delay: var(--link-delay);\n}\n.connection__link i {\n  margin-left: -0.35rem;\n  font-size: 1.2rem;\n}\n.connection__empty {\n  padding: 1rem;\n  color: #59697c;\n  text-align: center;\n}\n@keyframes node-arrive {\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes link-arrive {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes link-grow {\n  to {\n    transform: scaleX(1);\n  }\n}\n@media (max-width: 767.98px) {\n  .connection__path {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .connection__node-wrap {\n    flex-basis: auto;\n  }\n  .connection__node {\n    min-height: 6.5rem;\n  }\n  .connection__link {\n    flex: 0 0 2.75rem;\n    min-height: 2.75rem;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .connection__link span {\n    width: 3px;\n    height: 100%;\n    background:\n      linear-gradient(\n        180deg,\n        #55a2ff,\n        #6548d8);\n    transform: scaleY(0);\n    transform-origin: top;\n    animation-name: link-grow-mobile;\n  }\n  .connection__link i {\n    margin: -0.45rem 0 0;\n    transform: rotate(90deg);\n  }\n}\n@keyframes link-grow-mobile {\n  to {\n    transform: scaleY(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .connection__node-wrap,\n  .connection__link,\n  .connection__link span {\n    opacity: 1;\n    transform: none;\n    animation: none;\n  }\n}\n:host-context(body.theme-master.theme-dark) .connection {\n  color: #edf3fb;\n  background:\n    radial-gradient(\n      circle at 90% 0,\n      rgba(88, 157, 255, 0.16),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      #182231,\n      #111923);\n  border-color: #40516a;\n}\n:host-context(body.theme-master.theme-dark) .connection__summary,\n:host-context(body.theme-master.theme-dark) .connection__empty {\n  color: #bac7d7;\n}\n:host-context(body.theme-master.theme-dark) .connection__node {\n  background: rgba(29, 41, 57, 0.9);\n  border-color: #53657d;\n}\n:host-context(body.theme-master.theme-dark) .connection__step {\n  border-color: #182231;\n}\n:host-context(body.theme-master.theme-dark) .is-origin .connection__node {\n  border-color: #45b983;\n}\n:host-context(body.theme-master.theme-dark) .is-target .connection__node {\n  border-color: #9a83ef;\n}\n/*# sourceMappingURL=small-world-connection.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmallWorldConnectionComponent, { className: "SmallWorldConnectionComponent", filePath: "src/app/pages/small-world/small-world-connection/small-world-connection.component.ts", lineNumber: 24 });
})();

// src/app/pages/small-world/small-world.page.ts
var _forTrack02 = ($index, $item) => $item.id;
function SmallWorldPage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Buscando autores\u2026");
    \u0275\u0275elementEnd();
  }
}
function SmallWorldPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Selecione um autor v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function SmallWorldPage_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275listener("mousedown", function SmallWorldPage_Conditional_25_For_2_Template_li_mousedown_0_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.selectAuthor("author", item_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_52_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeOption.author() === \u0275$index_52_r4);
    \u0275\u0275property("id", "author-option-" + \u0275$index_52_r4);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeOption.author() === \u0275$index_52_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function SmallWorldPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275repeaterCreate(1, SmallWorldPage_Conditional_25_For_2_Template, 2, 5, "li", 30, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.suggestions.author());
  }
}
function SmallWorldPage_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Buscando autores\u2026");
    \u0275\u0275elementEnd();
  }
}
function SmallWorldPage_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Selecione um autor v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function SmallWorldPage_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275listener("mousedown", function SmallWorldPage_Conditional_34_For_2_Template_li_mousedown_0_listener($event) {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.selectAuthor("coauthor", item_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_77_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeOption.coauthor() === \u0275$index_77_r7);
    \u0275\u0275property("id", "coauthor-option-" + \u0275$index_77_r7);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeOption.coauthor() === \u0275$index_77_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function SmallWorldPage_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275repeaterCreate(1, SmallWorldPage_Conditional_34_For_2_Template, 2, 5, "li", 30, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.suggestions.coauthor());
  }
}
function SmallWorldPage_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Buscando\u2026 ");
  }
}
function SmallWorldPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Buscar ");
  }
}
function SmallWorldPage_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function SmallWorldPage_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-small-world-connection", 27);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.data);
  }
}
var SmallWorldPage = class _SmallWorldPage {
  api = inject(BrapciApiService);
  destroyRef = inject(DestroyRef);
  contactForm = new FormGroup({
    author: new FormControl("", { nonNullable: true, validators: Validators.required }),
    coauthor: new FormControl("", { nonNullable: true, validators: Validators.required })
  });
  suggestions = {
    author: signal([]),
    coauthor: signal([])
  };
  loadingSuggestions = {
    author: signal(false),
    coauthor: signal(false)
  };
  selected = {
    author: signal(null),
    coauthor: signal(null)
  };
  activeOption = {
    author: signal(-1),
    coauthor: signal(-1)
  };
  searching = signal(false, ...ngDevMode ? [{ debugName: "searching" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  data = null;
  constructor() {
    this.configureAutocomplete("author");
    this.configureAutocomplete("coauthor");
  }
  selectAuthor(field, author) {
    this.selected[field].set(author);
    this.contactForm.controls[field].setValue(author.name, { emitEvent: false });
    this.suggestions[field].set([]);
    this.activeOption[field].set(-1);
    this.contactForm.controls[field].setErrors(null);
  }
  onKeydown(event, field) {
    const options = this.suggestions[field]();
    if (!options.length)
      return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const current = this.activeOption[field]();
      this.activeOption[field].set((current + delta + options.length) % options.length);
    } else if (event.key === "Enter" && this.activeOption[field]() >= 0) {
      event.preventDefault();
      this.selectAuthor(field, options[this.activeOption[field]()]);
    } else if (event.key === "Escape") {
      this.suggestions[field].set([]);
      this.activeOption[field].set(-1);
    }
  }
  search() {
    this.error.set("");
    if (!this.selected.author() || !this.selected.coauthor()) {
      this.markInvalidSelections();
      this.error.set("Selecione os dois autores nas listas de sugest\xF5es.");
      return;
    }
    this.searching.set(true);
    this.data = null;
    this.api.get("tools/dijkstra", {
      source: this.contactForm.value.author ?? "",
      target: this.contactForm.value.coauthor ?? ""
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.data = response;
        this.searching.set(false);
      },
      error: () => {
        this.error.set("N\xE3o foi poss\xEDvel realizar a busca. Tente novamente.");
        this.searching.set(false);
      }
    });
  }
  configureAutocomplete(field) {
    this.contactForm.controls[field].valueChanges.pipe(tap(() => {
      this.selected[field].set(null);
      this.activeOption[field].set(-1);
    }), map((value) => value.trim()), debounceTime(300), distinctUntilChanged(), switchMap((query) => {
      if (query.length <= 3) {
        this.suggestions[field].set([]);
        this.loadingSuggestions[field].set(false);
        return of([]);
      }
      this.loadingSuggestions[field].set(true);
      return this.api.get("sri/query_author", { q: query }).pipe(map((response) => {
        if (Array.isArray(response)) {
          return response;
        }
        return Array.isArray(response?.value) ? response.value : [];
      }), catchError(() => of([])));
    }), takeUntilDestroyed(this.destroyRef)).subscribe((authors) => {
      this.suggestions[field].set(authors);
      this.loadingSuggestions[field].set(false);
    });
  }
  markInvalidSelections() {
    ["author", "coauthor"].forEach((field) => {
      if (!this.selected[field]()) {
        this.contactForm.controls[field].setErrors({ invalidSelection: true });
        this.contactForm.controls[field].markAsTouched();
      }
    });
  }
  static \u0275fac = function SmallWorldPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmallWorldPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmallWorldPage, selectors: [["app-small-world-page"]], decls: 61, vars: 17, consts: [["aria-labelledby", "small-world-title", 1, "small-world-page", "py-4"], [1, "container"], [1, "search-card"], [1, "small-world-header", "mb-4"], [1, "eyebrow", "mb-1"], ["id", "small-world-title", 1, "h2", "mb-2"], [1, "h4", "mb-3"], [1, "mb-0"], ["src", "/assets/logos/brapci_small_world.png", "alt", "Brapci Small World", 1, "small-world-logo"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "search-grid"], [1, "author-field"], ["for", "author"], ["id", "author", "type", "text", "formControlName", "author", "autocomplete", "off", "placeholder", "Digite ao menos 4 caracteres", "role", "combobox", "aria-autocomplete", "list", "aria-controls", "author-options", "aria-describedby", "author-help author-error", 1, "form-control", 3, "keydown"], ["id", "author-help", 1, "form-text"], ["role", "status", 1, "status-text"], ["id", "author-error", "role", "alert", 1, "invalid-message"], ["id", "author-options", "role", "listbox", "aria-label", "Sugest\xF5es para o primeiro autor", 1, "suggestions"], ["for", "coauthor"], ["id", "coauthor", "type", "text", "formControlName", "coauthor", "autocomplete", "off", "placeholder", "Digite ao menos 4 caracteres", "role", "combobox", "aria-autocomplete", "list", "aria-controls", "coauthor-options", "aria-describedby", "coauthor-help coauthor-error", 1, "form-control", 3, "keydown"], ["id", "coauthor-help", 1, "form-text"], ["id", "coauthor-error", "role", "alert", 1, "invalid-message"], ["id", "coauthor-options", "role", "listbox", "aria-label", "Sugest\xF5es para o segundo autor", 1, "suggestions"], [1, "button-field"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-live", "polite", 1, "feedback"], ["role", "alert", 1, "alert", "alert-danger", "mb-0", "mt-4"], [1, "mt-4", 3, "data"], ["aria-labelledby", "references-title", 1, "small-world-references", "mt-4"], ["id", "references-title", 1, "h5", "mb-3"], ["role", "option", 3, "id", "active"], ["role", "option", 3, "mousedown", "id"]], template: function SmallWorldPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-breadcrumbs");
      \u0275\u0275elementStart(3, "section", 2)(4, "header", 3)(5, "div")(6, "p", 4);
      \u0275\u0275text(7, "Rede de colabora\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 5);
      \u0275\u0275text(9, "Pequeno Mundo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2", 6);
      \u0275\u0275text(11, "Projeto Brapci - Conectando pesquisadores, gerando colabora\xE7\xF5es.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13, "Descubra a rede de colabora\xE7\xE3o entre pesquisadores com base em suas publica\xE7\xF5es. Digite os nomes dos autores para explorar as conex\xF5es e identificar potenciais colabora\xE7\xF5es.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(14, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form", 9);
      \u0275\u0275listener("ngSubmit", function SmallWorldPage_Template_form_ngSubmit_15_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "label", 12);
      \u0275\u0275text(19, "Primeiro autor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13);
      \u0275\u0275listener("keydown", function SmallWorldPage_Template_input_keydown_20_listener($event) {
        return ctx.onKeydown($event, "author");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "Escolha um nome da lista.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, SmallWorldPage_Conditional_23_Template, 2, 0, "span", 15);
      \u0275\u0275conditionalCreate(24, SmallWorldPage_Conditional_24_Template, 2, 0, "span", 16);
      \u0275\u0275conditionalCreate(25, SmallWorldPage_Conditional_25_Template, 3, 0, "ul", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 18);
      \u0275\u0275text(28, "Segundo autor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 19);
      \u0275\u0275listener("keydown", function SmallWorldPage_Template_input_keydown_29_listener($event) {
        return ctx.onKeydown($event, "coauthor");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 20);
      \u0275\u0275text(31, "Escolha um nome da lista.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, SmallWorldPage_Conditional_32_Template, 2, 0, "span", 15);
      \u0275\u0275conditionalCreate(33, SmallWorldPage_Conditional_33_Template, 2, 0, "span", 21);
      \u0275\u0275conditionalCreate(34, SmallWorldPage_Conditional_34_Template, 3, 0, "ul", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 23)(36, "button", 24);
      \u0275\u0275conditionalCreate(37, SmallWorldPage_Conditional_37_Template, 1, 0)(38, SmallWorldPage_Conditional_38_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 25);
      \u0275\u0275conditionalCreate(40, SmallWorldPage_Conditional_40_Template, 2, 1, "p", 26);
      \u0275\u0275conditionalCreate(41, SmallWorldPage_Conditional_41_Template, 1, 1, "app-small-world-connection", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "section", 28)(43, "h2", 29);
      \u0275\u0275text(44, "Refer\xEAncias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p");
      \u0275\u0275text(46, " KARINTHY, Frigyes. ");
      \u0275\u0275elementStart(47, "strong");
      \u0275\u0275text(48, "CHAINS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, ". In: ");
      \u0275\u0275elementStart(50, "em");
      \u0275\u0275text(51, "Everything is different");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, ". Budapeste: Officina, 1929. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 7);
      \u0275\u0275text(54, " MILGRAM, Stanley. ");
      \u0275\u0275elementStart(55, "strong");
      \u0275\u0275text(56, "The small-world problem");
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, ". ");
      \u0275\u0275elementStart(58, "em");
      \u0275\u0275text(59, "Psychology Today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, ", 1967. ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-expanded", ctx.suggestions.author().length > 0)("aria-activedescendant", ctx.activeOption.author() >= 0 ? "author-option-" + ctx.activeOption.author() : null)("aria-invalid", ctx.contactForm.controls.author.invalid && ctx.contactForm.controls.author.touched);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loadingSuggestions.author() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.contactForm.controls.author.invalid && ctx.contactForm.controls.author.touched ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.suggestions.author().length ? 25 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.suggestions.coauthor().length > 0)("aria-activedescendant", ctx.activeOption.coauthor() >= 0 ? "coauthor-option-" + ctx.activeOption.coauthor() : null)("aria-invalid", ctx.contactForm.controls.coauthor.invalid && ctx.contactForm.controls.coauthor.touched);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loadingSuggestions.coauthor() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.contactForm.controls.coauthor.invalid && ctx.contactForm.controls.coauthor.touched ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.suggestions.coauthor().length ? 34 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.searching());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searching() ? 37 : 38);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.error() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data !== null ? 41 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbsComponent, SmallWorldConnectionComponent], styles: ["\n\n.small-world-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  color: #212529;\n}\n.search-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: clamp(1.25rem, 3vw, 2.5rem);\n  background: #fff;\n  border: 1px solid #d7dee8;\n  border-radius: 1rem;\n  box-shadow: 0 12px 30px rgba(22, 40, 68, 0.1);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.lead[_ngcontent-%COMP%], \n.form-text[_ngcontent-%COMP%] {\n  color: #59636e;\n}\n.small-world-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.small-world-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: min(120px, 28vw);\n  height: auto;\n  object-fit: contain;\n}\n.small-world-references[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 2.5vw, 1.5rem);\n  color: #344254;\n  background: rgba(255, 255, 255, 0.82);\n  border: 1px solid #d7dee8;\n  border-radius: 0.75rem;\n}\n.small-world-references[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.search-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(9rem, 0.45fr);\n  gap: 1rem;\n  align-items: start;\n}\n.author-field[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n}\n.author-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n.button-field[_ngcontent-%COMP%] {\n  padding-top: 1.9rem;\n}\n.button-field[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.4rem;\n}\n.status-text[_ngcontent-%COMP%], \n.invalid-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n}\n.status-text[_ngcontent-%COMP%] {\n  color: #59636e;\n}\n.invalid-message[_ngcontent-%COMP%] {\n  color: #b02a37;\n}\n.suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 20;\n  top: calc(100% + 0.25rem);\n  right: 0;\n  left: 0;\n  max-height: 18rem;\n  margin: 0;\n  padding: 0.35rem;\n  overflow-y: auto;\n  list-style: none;\n  background: #fff;\n  border: 1px solid #b8c2cf;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);\n}\n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-radius: 0.3rem;\n  cursor: pointer;\n}\n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \n.suggestions[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0d6efd;\n}\n.result[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f5f7fa;\n  border: 1px solid #d7dee8;\n  border-radius: 0.75rem;\n}\n.result[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-height: 28rem;\n  overflow: auto;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus-visible, \nbutton[_ngcontent-%COMP%]:focus-visible, \n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ffbf47;\n  outline-offset: 2px;\n}\n@media (max-width: 767.98px) {\n  .small-world-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .small-world-logo[_ngcontent-%COMP%] {\n    align-self: center;\n    width: min(220px, 70vw);\n  }\n  .search-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .button-field[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .small-world-page[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .small-world-page[_ngcontent-%COMP%] {\n  color: #eef2f7;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .search-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .search-card[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .suggestions[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .suggestions[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .small-world-references[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .small-world-references[_ngcontent-%COMP%] {\n  background: #202834;\n  border-color: #46556a;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .small-world-references[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .small-world-references[_ngcontent-%COMP%] {\n  color: #dce5ef;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .lead[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .lead[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .form-text[_ngcontent-%COMP%], \nbody.theme-master.theme-dark[_nghost-%COMP%]   .status-text[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #c4ced9;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  color: #f4f7fa;\n  background: #141a22;\n  border-color: #607089;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder, body.theme-master.theme-dark   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #aab5c2;\n}\nbody.theme-master.theme-dark[_nghost-%COMP%]   .result[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .result[_ngcontent-%COMP%] {\n  background: #141a22;\n  border-color: #46556a;\n}\n/*# sourceMappingURL=small-world.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmallWorldPage, [{
    type: Component,
    args: [{ selector: "app-small-world-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, BreadcrumbsComponent, SmallWorldConnectionComponent], template: `<main class="small-world-page py-4" aria-labelledby="small-world-title">
  <div class="container">
    <app-breadcrumbs></app-breadcrumbs>

    <section class="search-card">
      <header class="small-world-header mb-4">
        <div>
          <p class="eyebrow mb-1">Rede de colabora\xE7\xE3o</p>
          <h1 id="small-world-title" class="h2 mb-2">Pequeno Mundo</h1>
          <h2 class="h4 mb-3">Projeto Brapci - Conectando pesquisadores, gerando colabora\xE7\xF5es.</h2>
          <p class="mb-0">Descubra a rede de colabora\xE7\xE3o entre pesquisadores com base em suas publica\xE7\xF5es. Digite os nomes dos autores para explorar as conex\xF5es e identificar potenciais colabora\xE7\xF5es.</p>

        </div>
        <img
          class="small-world-logo"
          src="/assets/logos/brapci_small_world.png"
          alt="Brapci Small World"
        />
      </header>

      <form [formGroup]="contactForm" (ngSubmit)="search()" novalidate>
        <div class="search-grid">
          <div class="author-field">
            <label for="author">Primeiro autor</label>
            <input
              id="author"
              type="text"
              class="form-control"
              formControlName="author"
              autocomplete="off"
              placeholder="Digite ao menos 4 caracteres"
              role="combobox"
              aria-autocomplete="list"
              aria-controls="author-options"
              [attr.aria-expanded]="suggestions.author().length > 0"
              [attr.aria-activedescendant]="activeOption.author() >= 0 ? 'author-option-' + activeOption.author() : null"
              [attr.aria-invalid]="contactForm.controls.author.invalid && contactForm.controls.author.touched"
              aria-describedby="author-help author-error"
              (keydown)="onKeydown($event, 'author')"
            />
            <span id="author-help" class="form-text">Escolha um nome da lista.</span>
            @if (loadingSuggestions.author()) { <span class="status-text" role="status">Buscando autores\u2026</span> }
            @if (contactForm.controls.author.invalid && contactForm.controls.author.touched) {
              <span id="author-error" class="invalid-message" role="alert">Selecione um autor v\xE1lido.</span>
            }
            @if (suggestions.author().length) {
              <ul id="author-options" class="suggestions" role="listbox" aria-label="Sugest\xF5es para o primeiro autor">
                @for (item of suggestions.author(); track item.id; let index = $index) {
                  <li
                    [id]="'author-option-' + index"
                    role="option"
                    [attr.aria-selected]="activeOption.author() === index"
                    [class.active]="activeOption.author() === index"
                    (mousedown)="$event.preventDefault(); selectAuthor('author', item)"
                  >{{ item.name }}</li>
                }
              </ul>
            }
          </div>

          <div class="author-field">
            <label for="coauthor">Segundo autor</label>
            <input
              id="coauthor"
              type="text"
              class="form-control"
              formControlName="coauthor"
              autocomplete="off"
              placeholder="Digite ao menos 4 caracteres"
              role="combobox"
              aria-autocomplete="list"
              aria-controls="coauthor-options"
              [attr.aria-expanded]="suggestions.coauthor().length > 0"
              [attr.aria-activedescendant]="activeOption.coauthor() >= 0 ? 'coauthor-option-' + activeOption.coauthor() : null"
              [attr.aria-invalid]="contactForm.controls.coauthor.invalid && contactForm.controls.coauthor.touched"
              aria-describedby="coauthor-help coauthor-error"
              (keydown)="onKeydown($event, 'coauthor')"
            />
            <span id="coauthor-help" class="form-text">Escolha um nome da lista.</span>
            @if (loadingSuggestions.coauthor()) { <span class="status-text" role="status">Buscando autores\u2026</span> }
            @if (contactForm.controls.coauthor.invalid && contactForm.controls.coauthor.touched) {
              <span id="coauthor-error" class="invalid-message" role="alert">Selecione um autor v\xE1lido.</span>
            }
            @if (suggestions.coauthor().length) {
              <ul id="coauthor-options" class="suggestions" role="listbox" aria-label="Sugest\xF5es para o segundo autor">
                @for (item of suggestions.coauthor(); track item.id; let index = $index) {
                  <li
                    [id]="'coauthor-option-' + index"
                    role="option"
                    [attr.aria-selected]="activeOption.coauthor() === index"
                    [class.active]="activeOption.coauthor() === index"
                    (mousedown)="$event.preventDefault(); selectAuthor('coauthor', item)"
                  >{{ item.name }}</li>
                }
              </ul>
            }
          </div>

          <div class="button-field">
            <button class="btn btn-primary" type="submit" [disabled]="searching()">
              @if (searching()) { Buscando\u2026 } @else { Buscar }
            </button>
          </div>
        </div>
      </form>

      <div class="feedback" aria-live="polite">
        @if (error()) { <p class="alert alert-danger mb-0 mt-4" role="alert">{{ error() }}</p> }
        @if (data !== null) {
          <app-small-world-connection class="mt-4" [data]="data"></app-small-world-connection>
        }
      </div>
    </section>

    <section class="small-world-references mt-4" aria-labelledby="references-title">
      <h2 id="references-title" class="h5 mb-3">Refer\xEAncias</h2>
      <p>
        KARINTHY, Frigyes. <strong>CHAINS</strong>. In: <em>Everything is different</em>.
        Budapeste: Officina, 1929.
      </p>
      <p class="mb-0">
        MILGRAM, Stanley. <strong>The small-world problem</strong>.
        <em>Psychology Today</em>, 1967.
      </p>
    </section>
  </div>
</main>
`, styles: ["/* src/app/pages/small-world/small-world.page.scss */\n.small-world-page {\n  min-height: calc(100vh - 70px);\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  color: #212529;\n}\n.search-card {\n  position: relative;\n  padding: clamp(1.25rem, 3vw, 2.5rem);\n  background: #fff;\n  border: 1px solid #d7dee8;\n  border-radius: 1rem;\n  box-shadow: 0 12px 30px rgba(22, 40, 68, 0.1);\n}\n.eyebrow {\n  color: #0d6efd;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.lead,\n.form-text {\n  color: #59636e;\n}\n.small-world-header {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.small-world-logo {\n  display: block;\n  width: min(120px, 28vw);\n  height: auto;\n  object-fit: contain;\n}\n.small-world-references {\n  padding: clamp(1rem, 2.5vw, 1.5rem);\n  color: #344254;\n  background: rgba(255, 255, 255, 0.82);\n  border: 1px solid #d7dee8;\n  border-radius: 0.75rem;\n}\n.small-world-references p {\n  overflow-wrap: anywhere;\n}\n.search-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(9rem, 0.45fr);\n  gap: 1rem;\n  align-items: start;\n}\n.author-field {\n  position: relative;\n  min-width: 0;\n}\n.author-field label {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n.button-field {\n  padding-top: 1.9rem;\n}\n.button-field .btn {\n  width: 100%;\n  min-height: 2.4rem;\n}\n.status-text,\n.invalid-message {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n}\n.status-text {\n  color: #59636e;\n}\n.invalid-message {\n  color: #b02a37;\n}\n.suggestions {\n  position: absolute;\n  z-index: 20;\n  top: calc(100% + 0.25rem);\n  right: 0;\n  left: 0;\n  max-height: 18rem;\n  margin: 0;\n  padding: 0.35rem;\n  overflow-y: auto;\n  list-style: none;\n  background: #fff;\n  border: 1px solid #b8c2cf;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);\n}\n.suggestions li {\n  padding: 0.6rem 0.75rem;\n  border-radius: 0.3rem;\n  cursor: pointer;\n}\n.suggestions li:hover,\n.suggestions li.active {\n  color: #fff;\n  background: #0d6efd;\n}\n.result {\n  padding: 1rem;\n  background: #f5f7fa;\n  border: 1px solid #d7dee8;\n  border-radius: 0.75rem;\n}\n.result pre {\n  max-height: 28rem;\n  overflow: auto;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  color: inherit;\n}\ninput:focus-visible,\nbutton:focus-visible,\n.suggestions li:focus-visible {\n  outline: 3px solid #ffbf47;\n  outline-offset: 2px;\n}\n@media (max-width: 767.98px) {\n  .small-world-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .small-world-logo {\n    align-self: center;\n    width: min(220px, 70vw);\n  }\n  .search-grid {\n    grid-template-columns: 1fr;\n  }\n  .button-field {\n    padding-top: 0;\n  }\n}\n:host-context(body.theme-master.theme-dark) .small-world-page {\n  color: #eef2f7;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n}\n:host-context(body.theme-master.theme-dark) .search-card,\n:host-context(body.theme-master.theme-dark) .suggestions,\n:host-context(body.theme-master.theme-dark) .small-world-references {\n  background: #202834;\n  border-color: #46556a;\n}\n:host-context(body.theme-master.theme-dark) .small-world-references {\n  color: #dce5ef;\n}\n:host-context(body.theme-master.theme-dark) .lead,\n:host-context(body.theme-master.theme-dark) .form-text,\n:host-context(body.theme-master.theme-dark) .status-text {\n  color: #c4ced9;\n}\n:host-context(body.theme-master.theme-dark) .form-control {\n  color: #f4f7fa;\n  background: #141a22;\n  border-color: #607089;\n}\n:host-context(body.theme-master.theme-dark) .form-control::placeholder {\n  color: #aab5c2;\n}\n:host-context(body.theme-master.theme-dark) .result {\n  background: #141a22;\n  border-color: #46556a;\n}\n/*# sourceMappingURL=small-world.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmallWorldPage, { className: "SmallWorldPage", filePath: "src/app/pages/small-world/small-world.page.ts", lineNumber: 25 });
})();
export {
  SmallWorldPage
};
//# sourceMappingURL=chunk-3SV2VK6K.mjs.map
