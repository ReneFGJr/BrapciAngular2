import {
  AuthService
} from "./chunk-ZNHZ3OZM.js";
import {
  API_CONFIG
} from "./chunk-FVCOQ7LK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JBXEJVBW.js";
import {
  Component,
  HttpClient,
  HttpHeaders,
  Inject,
  Injectable,
  Input,
  Observable,
  Output,
  ViewChild,
  computed,
  finalize,
  forkJoin,
  inject,
  input,
  map,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-FWZKW7K5.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// src/app/chat/services/chat-api.service.ts
var ChatApiService = class _ChatApiService {
  http;
  auth;
  baseUrl;
  constructor(http, auth, config) {
    this.http = http;
    this.auth = auth;
    this.baseUrl = config.aiApiBaseUrl.replace(/\/$/, "");
  }
  options() {
    const token = this.auth.getLocalUser()?.token;
    return {
      withCredentials: true,
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders()
    };
  }
  getModels() {
    return this.http.get(`${this.baseUrl}/models`, this.options()).pipe(map((response) => Array.isArray(response) ? response : response.data));
  }
  getProjects() {
    return this.http.get(`${this.baseUrl}/projects`, this.options()).pipe(map((response) => Array.isArray(response) ? response : response.data));
  }
  createProject(payload) {
    return this.http.post(`${this.baseUrl}/projects`, payload, this.options()).pipe(map((response) => "data" in response ? response.data : response));
  }
  getChats() {
    return this.http.get(`${this.baseUrl}/chats`, this.options()).pipe(map((response) => Array.isArray(response) ? response : response.data));
  }
  createChat(payload) {
    return this.http.post(`${this.baseUrl}/chats`, payload, this.options()).pipe(map((response) => "data" in response ? response.data : response));
  }
  updateChat(id, payload) {
    return this.http.put(`${this.baseUrl}/chats/${id}`, payload, this.options()).pipe(map((response) => "data" in response ? response.data : response));
  }
  deleteChat(id) {
    return this.http.delete(`${this.baseUrl}/chats/${id}`, this.options());
  }
  getMessages(chatId) {
    return this.http.get(`${this.baseUrl}/chats/${chatId}/messages`, this.options()).pipe(map((response) => Array.isArray(response) ? response : response.data));
  }
  streamingUrl(chatId) {
    return `${this.baseUrl}/chats/${chatId}/message`;
  }
  authHeaders() {
    const token = this.auth.getLocalUser()?.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  static \u0275fac = function ChatApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService), \u0275\u0275inject(API_CONFIG));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatApiService, factory: _ChatApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: void 0, decorators: [{
    type: Inject,
    args: [API_CONFIG]
  }] }], null);
})();

// src/app/chat/services/streaming.service.ts
var StreamingService = class _StreamingService {
  api;
  constructor(api) {
    this.api = api;
  }
  send(chatId, payload, signal2) {
    return new Observable((subscriber) => {
      void this.consume(chatId, payload, signal2, (event) => subscriber.next(event)).then(() => subscriber.complete()).catch((error) => subscriber.error(error));
    });
  }
  consume(chatId, payload, signal2, emit) {
    return __async(this, null, function* () {
      const response = yield fetch(this.api.streamingUrl(chatId), {
        method: "POST",
        credentials: "include",
        headers: __spreadValues({ "Content-Type": "application/json", Accept: "text/event-stream, application/x-ndjson" }, this.api.authHeaders()),
        body: JSON.stringify(payload),
        signal: signal2
      });
      if (!response.ok)
        throw new Error(this.messageForStatus(response.status));
      if (!response.body)
        throw new Error("O servidor n\xE3o iniciou o streaming.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const result = yield reader.read();
        if (result.done)
          break;
        buffer += decoder.decode(result.value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() ?? "";
        for (const line of lines)
          this.parseLine(line, emit);
      }
      if (buffer.trim())
        this.parseLine(buffer, emit);
    });
  }
  parseLine(rawLine, emit) {
    const line = rawLine.replace(/^data:\s?/, "").trim();
    if (!line || line === "[DONE]")
      return;
    try {
      const parsed = JSON.parse(line);
      if ("type" in parsed)
        emit(parsed);
      else if (parsed.response)
        emit({ type: parsed.done ? "done" : "token", content: parsed.response });
      else if (parsed.done)
        emit({ type: "done" });
    } catch {
      emit({ type: "token", content: line });
    }
  }
  messageForStatus(status) {
    if (status === 401)
      return "Sua sess\xE3o expirou. Entre novamente.";
    if (status === 403)
      return "Voc\xEA n\xE3o tem acesso a esta conversa.";
    if (status === 404)
      return "A conversa ou o modelo n\xE3o est\xE1 mais dispon\xEDvel.";
    if (status === 408 || status === 504)
      return "O modelo demorou demais para responder.";
    if (status >= 500)
      return "O servi\xE7o de IA est\xE1 indispon\xEDvel no momento.";
    return "N\xE3o foi poss\xEDvel enviar a mensagem.";
  }
  static \u0275fac = function StreamingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StreamingService)(\u0275\u0275inject(ChatApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StreamingService, factory: _StreamingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StreamingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ChatApiService }], null);
})();

// src/app/chat/components/chat-sidebar/chat-sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChatSidebarComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ChatSidebarComponent_For_23_Template_button_click_0_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProject.emit(project_r2));
    });
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", project_r2.id === ctx_r2.activeProjectId());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.name);
  }
}
function ChatSidebarComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ChatSidebarComponent_For_27_Template_button_click_0_listener() {
      const chat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectChat.emit(chat_r5));
    });
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", chat_r5.id === ctx_r2.activeChatId());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chat_r5.title);
  }
}
function ChatSidebarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ChatSidebarComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close.emit());
    });
    \u0275\u0275elementEnd();
  }
}
var ChatSidebarComponent = class _ChatSidebarComponent {
  projects = input.required(...ngDevMode ? [{ debugName: "projects" }] : []);
  chats = input.required(...ngDevMode ? [{ debugName: "chats" }] : []);
  activeProjectId = input(null, ...ngDevMode ? [{ debugName: "activeProjectId" }] : []);
  activeChatId = input(null, ...ngDevMode ? [{ debugName: "activeChatId" }] : []);
  open = input(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  collapsed = input(false, ...ngDevMode ? [{ debugName: "collapsed" }] : []);
  newChat = output();
  newProject = output();
  selectProject = output();
  selectChat = output();
  close = output();
  collapse = output();
  query = "";
  filteredChats() {
    const q = this.query.trim().toLocaleLowerCase();
    return q ? this.chats().filter((c) => c.title.toLocaleLowerCase().includes(q)) : this.chats();
  }
  static \u0275fac = function ChatSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatSidebarComponent, selectors: [["app-chat-sidebar"]], inputs: { projects: [1, "projects"], chats: [1, "chats"], activeProjectId: [1, "activeProjectId"], activeChatId: [1, "activeChatId"], open: [1, "open"], collapsed: [1, "collapsed"] }, outputs: { newChat: "newChat", newProject: "newProject", selectProject: "selectProject", selectChat: "selectChat", close: "close", collapse: "collapse" }, decls: 33, vars: 6, consts: [["aria-label", "Conversas", 1, "sidebar"], [1, "brand"], [1, "bi", "bi-stars"], ["type", "button", "aria-label", "Recolher barra lateral", 3, "click"], [1, "bi", "bi-layout-sidebar"], ["type", "button", 1, "new-chat", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "search"], [1, "bi", "bi-search"], [1, "visually-hidden"], ["type", "search", "placeholder", "Buscar", 3, "ngModelChange", "ngModel"], [1, "section-title"], ["type", "button", "aria-label", "Criar projeto", 3, "click"], [1, "bi", "bi-plus"], ["type", "button", 1, "item", 3, "active"], [1, "section-title", "recent"], ["href", "/", 1, "back"], [1, "bi", "bi-arrow-left"], ["type", "button", "aria-label", "Fechar menu", 1, "backdrop"], ["type", "button", 1, "item", 3, "click"], [1, "bi", "bi-folder"], [1, "bi", "bi-chat-left-text"], ["type", "button", "aria-label", "Fechar menu", 1, "backdrop", 3, "click"]], template: function ChatSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "strong");
      \u0275\u0275text(4, "BRAPCI IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ChatSidebarComponent_Template_button_click_5_listener() {
        return ctx.collapse.emit();
      });
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function ChatSidebarComponent_Template_button_click_7_listener() {
        return ctx.newChat.emit();
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Nova conversa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "Buscar conversas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ChatSidebarComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "nav")(17, "div", 11)(18, "span");
      \u0275\u0275text(19, "Projetos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function ChatSidebarComponent_Template_button_click_20_listener() {
        return ctx.newProject.emit();
      });
      \u0275\u0275element(21, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(22, ChatSidebarComponent_For_23_Template, 4, 3, "button", 14, _forTrack0);
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25, "Recentes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, ChatSidebarComponent_For_27_Template, 4, 3, "button", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Voltar \xE0 BRAPCI");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(32, ChatSidebarComponent_Conditional_32_Template, 1, 0, "button", 18);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.open())("collapsed", ctx.collapsed());
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.query);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.projects());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.filteredChats());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.open() ? 32 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 17rem;\n  flex: 0 0 17rem;\n  background: #242238;\n  color: #eeedf7;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  min-height: 0;\n  z-index: 20;\n  transition: width 0.2s, transform 0.2s;\n}\n.brand[_ngcontent-%COMP%] {\n  height: 2.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0 0.4rem;\n}\n.brand[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #b8afea;\n}\n.brand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: #cfcbdf;\n}\n.new-chat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  border: 1px solid #55506d;\n  border-radius: 0.65rem;\n  background: #312e49;\n  color: #fff;\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n}\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #1d1b2d;\n  border-radius: 0.55rem;\n  padding: 0.5rem 0.65rem;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #aaa5bd;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 0.7rem 0.55rem 0.3rem;\n}\n.section-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #aaa5bd;\n}\n.recent[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n}\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  border: 0;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: #d9d7e3;\n  padding: 0.55rem;\n  text-align: left;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item[_ngcontent-%COMP%]:hover, \n.item.active[_ngcontent-%COMP%] {\n  background: #3b3755;\n  color: #fff;\n}\nnav[_ngcontent-%COMP%] {\n  overflow: auto;\n  flex: 1;\n}\n.back[_ngcontent-%COMP%] {\n  color: #c8c4d7;\n  text-decoration: none;\n  padding: 0.55rem;\n  display: flex;\n  gap: 0.55rem;\n}\n.collapsed[_ngcontent-%COMP%] {\n  width: 4.2rem;\n  flex-basis: 4.2rem;\n}\n.collapsed[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: none;\n}\n.collapsed[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.collapsed[_ngcontent-%COMP%]   .new-chat[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 850px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0 auto 0 0;\n    transform: translateX(-105%);\n    width: min(18rem, 86vw) !important;\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    border: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 15;\n  }\n}\n/*# sourceMappingURL=chat-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-chat-sidebar", standalone: true, imports: [FormsModule], template: `<aside class="sidebar" [class.open]="open()" [class.collapsed]="collapsed()" aria-label="Conversas">
    <div class="brand"><i class="bi bi-stars"></i><strong>BRAPCI IA</strong><button type="button" (click)="collapse.emit()" aria-label="Recolher barra lateral"><i class="bi bi-layout-sidebar"></i></button></div>
    <button class="new-chat" type="button" (click)="newChat.emit()"><i class="bi bi-plus-lg"></i><span>Nova conversa</span></button>
    <label class="search"><i class="bi bi-search"></i><span class="visually-hidden">Buscar conversas</span><input type="search" [(ngModel)]="query" placeholder="Buscar" /></label>
    <nav>
      <div class="section-title"><span>Projetos</span><button type="button" (click)="newProject.emit()" aria-label="Criar projeto"><i class="bi bi-plus"></i></button></div>
      @for(project of projects();track project.id){<button class="item" type="button" [class.active]="project.id===activeProjectId()" (click)="selectProject.emit(project)"><i class="bi bi-folder"></i><span>{{project.name}}</span></button>}
      <div class="section-title recent">Recentes</div>
      @for(chat of filteredChats();track chat.id){<button class="item" type="button" [class.active]="chat.id===activeChatId()" (click)="selectChat.emit(chat)"><i class="bi bi-chat-left-text"></i><span>{{chat.title}}</span></button>}
    </nav>
    <a class="back" href="/"><i class="bi bi-arrow-left"></i><span>Voltar \xE0 BRAPCI</span></a>
  </aside>@if(open()){<button class="backdrop" type="button" (click)="close.emit()" aria-label="Fechar menu"></button>}`, styles: ["/* angular:styles/component:scss;5dc0c956fcd2d7cbb29f51216c7e6073832f6b0898a9f4991c032235e6a16545;D:/Projeto/BrapciAngular2/src/app/chat/components/chat-sidebar/chat-sidebar.component.ts */\n.sidebar {\n  width: 17rem;\n  flex: 0 0 17rem;\n  background: #242238;\n  color: #eeedf7;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  min-height: 0;\n  z-index: 20;\n  transition: width 0.2s, transform 0.2s;\n}\n.brand {\n  height: 2.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0 0.4rem;\n}\n.brand > i {\n  color: #b8afea;\n}\n.brand button {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: #cfcbdf;\n}\n.new-chat {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  border: 1px solid #55506d;\n  border-radius: 0.65rem;\n  background: #312e49;\n  color: #fff;\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n}\n.search {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #1d1b2d;\n  border-radius: 0.55rem;\n  padding: 0.5rem 0.65rem;\n}\n.search input {\n  min-width: 0;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n}\n.section-title {\n  display: flex;\n  justify-content: space-between;\n  color: #aaa5bd;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 0.7rem 0.55rem 0.3rem;\n}\n.section-title button {\n  border: 0;\n  background: transparent;\n  color: #aaa5bd;\n}\n.recent {\n  margin-top: 0.55rem;\n}\n.item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  border: 0;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: #d9d7e3;\n  padding: 0.55rem;\n  text-align: left;\n}\n.item span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item:hover,\n.item.active {\n  background: #3b3755;\n  color: #fff;\n}\nnav {\n  overflow: auto;\n  flex: 1;\n}\n.back {\n  color: #c8c4d7;\n  text-decoration: none;\n  padding: 0.55rem;\n  display: flex;\n  gap: 0.55rem;\n}\n.collapsed {\n  width: 4.2rem;\n  flex-basis: 4.2rem;\n}\n.collapsed strong,\n.collapsed span,\n.collapsed .search,\n.collapsed .section-title {\n  display: none;\n}\n.collapsed .brand button {\n  margin-left: 0;\n}\n.collapsed .new-chat,\n.collapsed .item {\n  justify-content: center;\n}\n.backdrop {\n  display: none;\n}\n@media (max-width: 850px) {\n  .sidebar {\n    position: fixed;\n    inset: 0 auto 0 0;\n    transform: translateX(-105%);\n    width: min(18rem, 86vw) !important;\n  }\n  .sidebar.open {\n    transform: translateX(0);\n  }\n  .backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    border: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 15;\n  }\n}\n/*# sourceMappingURL=chat-sidebar.component.css.map */\n"] }]
  }], null, { projects: [{ type: Input, args: [{ isSignal: true, alias: "projects", required: true }] }], chats: [{ type: Input, args: [{ isSignal: true, alias: "chats", required: true }] }], activeProjectId: [{ type: Input, args: [{ isSignal: true, alias: "activeProjectId", required: false }] }], activeChatId: [{ type: Input, args: [{ isSignal: true, alias: "activeChatId", required: false }] }], open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }], newChat: [{ type: Output, args: ["newChat"] }], newProject: [{ type: Output, args: ["newProject"] }], selectProject: [{ type: Output, args: ["selectProject"] }], selectChat: [{ type: Output, args: ["selectChat"] }], close: [{ type: Output, args: ["close"] }], collapse: [{ type: Output, args: ["collapse"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatSidebarComponent, { className: "ChatSidebarComponent", filePath: "src/app/chat/components/chat-sidebar/chat-sidebar.component.ts", lineNumber: 21 });
})();

// src/app/chat/components/model-selector/model-selector.component.ts
var _forTrack02 = ($index, $item) => $item.name;
function ModelSelectorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 2);
    \u0275\u0275text(1, "Nenhum modelo dispon\xEDvel");
    \u0275\u0275elementEnd();
  }
}
function ModelSelectorComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const model_r1 = ctx.$implicit;
    \u0275\u0275property("value", model_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(model_r1.displayName || model_r1.name);
  }
}
var ModelSelectorComponent = class _ModelSelectorComponent {
  models = input.required(...ngDevMode ? [{ debugName: "models" }] : []);
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  valueChange = output();
  static \u0275fac = function ModelSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModelSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModelSelectorComponent, selectors: [["app-model-selector"]], inputs: { models: [1, "models"], value: [1, "value"], disabled: [1, "disabled"] }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 3, consts: [["for", "chat-model", 1, "model-label"], ["id", "chat-model", 1, "form-select", "form-select-sm", 3, "ngModelChange", "disabled", "ngModel"], ["value", ""], [3, "value"]], template: function ModelSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label", 0);
      \u0275\u0275text(1, "Modelo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "select", 1);
      \u0275\u0275listener("ngModelChange", function ModelSelectorComponent_Template_select_ngModelChange_2_listener($event) {
        return ctx.valueChange.emit($event);
      });
      \u0275\u0275conditionalCreate(3, ModelSelectorComponent_Conditional_3_Template, 2, 0, "option", 2);
      \u0275\u0275repeaterCreate(4, ModelSelectorComponent_For_5_Template, 2, 2, "option", 3, _forTrack02);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disabled() || !ctx.models().length)("ngModel", ctx.value());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.models().length ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.models());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.model-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-hint);\n  margin-bottom: 0.2rem;\n}\n.form-select[_ngcontent-%COMP%] {\n  min-width: 11rem;\n  background-color: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-color: var(--theme-line);\n}\n/*# sourceMappingURL=model-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModelSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-model-selector", standalone: true, imports: [FormsModule], template: `<label class="model-label" for="chat-model">Modelo</label>
    <select id="chat-model" class="form-select form-select-sm" [disabled]="disabled() || !models().length"
      [ngModel]="value()" (ngModelChange)="valueChange.emit($event)">
      @if (!models().length) { <option value="">Nenhum modelo dispon\xEDvel</option> }
      @for (model of models(); track model.name) { <option [value]="model.name">{{ model.displayName || model.name }}</option> }
    </select>`, styles: ["/* angular:styles/component:scss;d891ef96da0f38f758d2d7730fba6fb5d977eaa559edd42f7e39e61f128b8044;D:/Projeto/BrapciAngular2/src/app/chat/components/model-selector/model-selector.component.ts */\n.model-label {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-hint);\n  margin-bottom: 0.2rem;\n}\n.form-select {\n  min-width: 11rem;\n  background-color: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-color: var(--theme-line);\n}\n/*# sourceMappingURL=model-selector.component.css.map */\n"] }]
  }], null, { models: [{ type: Input, args: [{ isSignal: true, alias: "models", required: true }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModelSelectorComponent, { className: "ModelSelectorComponent", filePath: "src/app/chat/components/model-selector/model-selector.component.ts", lineNumber: 15 });
})();

// src/app/chat/components/chat-header/chat-header.component.ts
var ChatHeaderComponent = class _ChatHeaderComponent {
  chat = input(null, ...ngDevMode ? [{ debugName: "chat" }] : []);
  project = input(null, ...ngDevMode ? [{ debugName: "project" }] : []);
  models = input.required(...ngDevMode ? [{ debugName: "models" }] : []);
  model = input.required(...ngDevMode ? [{ debugName: "model" }] : []);
  streaming = input(false, ...ngDevMode ? [{ debugName: "streaming" }] : []);
  menu = output();
  modelChange = output();
  static \u0275fac = function ChatHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatHeaderComponent, selectors: [["app-chat-header"]], inputs: { chat: [1, "chat"], project: [1, "project"], models: [1, "models"], model: [1, "model"], streaming: [1, "streaming"] }, outputs: { menu: "menu", modelChange: "modelChange" }, decls: 10, vars: 5, consts: [[1, "chat-header"], [1, "title-row"], ["type", "button", "aria-label", "Abrir menu", 1, "icon-btn", "menu-btn", 3, "click"], [1, "bi", "bi-list"], [1, "title-block"], [3, "valueChange", "models", "value", "disabled"]], template: function ChatHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function ChatHeaderComponent_Template_button_click_2_listener() {
        return ctx.menu.emit();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "app-model-selector", 5);
      \u0275\u0275listener("valueChange", function ChatHeaderComponent_Template_app_model_selector_valueChange_9_listener($event) {
        return ctx.modelChange.emit($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(((tmp_0_0 = ctx.project()) == null ? null : tmp_0_0.name) || "Conversa sem projeto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.chat()) == null ? null : tmp_1_0.title) || "Nova conversa");
      \u0275\u0275advance();
      \u0275\u0275property("models", ctx.models())("value", ctx.model())("disabled", ctx.streaming());
    }
  }, dependencies: [ModelSelectorComponent], styles: ['\n\n.chat-header[_ngcontent-%COMP%] {\n  min-height: 4.5rem;\n  padding: 0.7rem 1.25rem;\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  background: var(--theme-card-bg);\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.title-block[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.title-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--theme-hint);\n}\nh1[_ngcontent-%COMP%] {\n  font: 600 1.05rem/1.25 "Raleway", sans-serif;\n  margin: 0;\n  color: var(--theme-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--theme-ink);\n  font-size: 1.35rem;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 850px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .title-block[_ngcontent-%COMP%] {\n    max-width: 42vw;\n  }\n}\n/*# sourceMappingURL=chat-header.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-chat-header", standalone: true, imports: [ModelSelectorComponent], template: `<header class="chat-header">
    <div class="title-row">
      <button type="button" class="icon-btn menu-btn" (click)="menu.emit()" aria-label="Abrir menu"><i class="bi bi-list"></i></button>
      <div class="title-block"><span>{{ project()?.name || 'Conversa sem projeto' }}</span><h1>{{ chat()?.title || 'Nova conversa' }}</h1></div>
    </div>
    <app-model-selector [models]="models()" [value]="model()" [disabled]="streaming()" (valueChange)="modelChange.emit($event)" />
  </header>`, styles: ['/* angular:styles/component:scss;f400b8e30006c5b15d4407f873ddbf35afbd2d76e4ad0f0fa0059ddf158bf1d1;D:/Projeto/BrapciAngular2/src/app/chat/components/chat-header/chat-header.component.ts */\n.chat-header {\n  min-height: 4.5rem;\n  padding: 0.7rem 1.25rem;\n  border-bottom: 1px solid var(--theme-line);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  background: var(--theme-card-bg);\n}\n.title-row {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.title-block {\n  min-width: 0;\n}\n.title-block span {\n  font-size: 0.72rem;\n  color: var(--theme-hint);\n}\nh1 {\n  font: 600 1.05rem/1.25 "Raleway", sans-serif;\n  margin: 0;\n  color: var(--theme-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-btn {\n  border: 0;\n  background: transparent;\n  color: var(--theme-ink);\n  font-size: 1.35rem;\n}\n.menu-btn {\n  display: none;\n}\n@media (max-width: 850px) {\n  .menu-btn {\n    display: inline-flex;\n  }\n  .chat-header {\n    padding: 0.65rem;\n  }\n  .title-block {\n    max-width: 42vw;\n  }\n}\n/*# sourceMappingURL=chat-header.component.css.map */\n'] }]
  }], null, { chat: [{ type: Input, args: [{ isSignal: true, alias: "chat", required: false }] }], project: [{ type: Input, args: [{ isSignal: true, alias: "project", required: false }] }], models: [{ type: Input, args: [{ isSignal: true, alias: "models", required: true }] }], model: [{ type: Input, args: [{ isSignal: true, alias: "model", required: true }] }], streaming: [{ type: Input, args: [{ isSignal: true, alias: "streaming", required: false }] }], menu: [{ type: Output, args: ["menu"] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatHeaderComponent, { className: "ChatHeaderComponent", filePath: "src/app/chat/components/chat-header/chat-header.component.ts", lineNumber: 16 });
})();

// src/app/chat/components/chat-input/chat-input.component.ts
var _c0 = ["editor"];
function ChatInputComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ChatInputComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel.emit());
    });
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementEnd();
  }
}
function ChatInputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ChatInputComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.disabled() || !ctx_r2.draft.trim());
  }
}
var ChatInputComponent = class _ChatInputComponent {
  streaming = input(false, ...ngDevMode ? [{ debugName: "streaming" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  send = output();
  cancel = output();
  editor = viewChild("editor", ...ngDevMode ? [{ debugName: "editor" }] : []);
  draft = "";
  submit() {
    const value = this.draft.trim();
    if (!value || this.disabled() || this.streaming())
      return;
    this.send.emit(value);
    this.draft = "";
    this.resize();
  }
  onKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.submit();
    }
  }
  resize() {
    const el = this.editor()?.nativeElement;
    if (!el)
      return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 176)}px`;
  }
  static \u0275fac = function ChatInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatInputComponent, selectors: [["app-chat-input"]], viewQuery: function ChatInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.editor, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { streaming: [1, "streaming"], disabled: [1, "disabled"] }, outputs: { send: "send", cancel: "cancel" }, decls: 10, vars: 3, consts: [["editor", ""], [1, "composer-shell"], [1, "composer"], ["for", "chat-message", 1, "visually-hidden"], ["id", "chat-message", "rows", "1", "maxlength", "12000", "placeholder", "Digite uma mensagem...", 3, "ngModelChange", "input", "keydown", "ngModel", "disabled"], ["type", "button", "aria-label", "Interromper gera\xE7\xE3o", "title", "Interromper", 1, "send", "stop"], ["type", "button", "aria-label", "Enviar mensagem", "title", "Enviar", 1, "send", 3, "disabled"], ["type", "button", "aria-label", "Interromper gera\xE7\xE3o", "title", "Interromper", 1, "send", "stop", 3, "click"], [1, "bi", "bi-stop-fill"], ["type", "button", "aria-label", "Enviar mensagem", "title", "Enviar", 1, "send", 3, "click", "disabled"], [1, "bi", "bi-arrow-up"]], template: function ChatInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "label", 3);
      \u0275\u0275text(3, "Digite uma mensagem");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "textarea", 4, 0);
      \u0275\u0275twoWayListener("ngModelChange", function ChatInputComponent_Template_textarea_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ChatInputComponent_Template_textarea_input_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resize());
      })("keydown", function ChatInputComponent_Template_textarea_keydown_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeydown($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ChatInputComponent_Conditional_6_Template, 2, 0, "button", 5)(7, ChatInputComponent_Conditional_7_Template, 2, 1, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "small");
      \u0275\u0275text(9, "Enter envia \xB7 Shift+Enter cria uma nova linha");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft);
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.streaming() ? 6 : 7);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.composer-shell[_ngcontent-%COMP%] {\n  padding: 0.85rem clamp(0.75rem, 3vw, 2rem) 1rem;\n  background: var(--theme-card-bg);\n  border-top: 1px solid var(--theme-line);\n}\n.composer[_ngcontent-%COMP%] {\n  max-width: 52rem;\n  margin: auto;\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  padding: 0.55rem;\n  background: var(--theme-bg);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n}\ntextarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--theme-ink);\n  resize: none;\n  min-height: 2.25rem;\n  max-height: 11rem;\n  padding: 0.45rem;\n  font: inherit;\n}\n.send[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  border: 0;\n  border-radius: 0.7rem;\n  width: 2.35rem;\n  height: 2.35rem;\n  background: #483d8b;\n  color: #fff;\n}\n.send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.stop[_ngcontent-%COMP%] {\n  background: #9d3340;\n}\nsmall[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: var(--theme-hint);\n  font-size: 0.68rem;\n  margin-top: 0.35rem;\n}\n/*# sourceMappingURL=chat-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatInputComponent, [{
    type: Component,
    args: [{ selector: "app-chat-input", standalone: true, imports: [FormsModule], template: `<div class="composer-shell">
    <div class="composer">
      <label class="visually-hidden" for="chat-message">Digite uma mensagem</label>
      <textarea #editor id="chat-message" rows="1" maxlength="12000" [(ngModel)]="draft" (input)="resize()"
        (keydown)="onKeydown($event)" [disabled]="disabled()" placeholder="Digite uma mensagem..."></textarea>
      @if (streaming()) {
        <button type="button" class="send stop" (click)="cancel.emit()" aria-label="Interromper gera\xE7\xE3o" title="Interromper"><i class="bi bi-stop-fill"></i></button>
      } @else {
        <button type="button" class="send" (click)="submit()" [disabled]="disabled() || !draft.trim()" aria-label="Enviar mensagem" title="Enviar"><i class="bi bi-arrow-up"></i></button>
      }
    </div><small>Enter envia \xB7 Shift+Enter cria uma nova linha</small>
  </div>`, styles: ["/* angular:styles/component:scss;7d235d9801e35aec47e1968fd9f4661e66ded47a95a5edd4f91f6c96a1d31d9d;D:/Projeto/BrapciAngular2/src/app/chat/components/chat-input/chat-input.component.ts */\n.composer-shell {\n  padding: 0.85rem clamp(0.75rem, 3vw, 2rem) 1rem;\n  background: var(--theme-card-bg);\n  border-top: 1px solid var(--theme-line);\n}\n.composer {\n  max-width: 52rem;\n  margin: auto;\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  border: 1px solid var(--theme-line);\n  border-radius: 1rem;\n  padding: 0.55rem;\n  background: var(--theme-bg);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n}\ntextarea {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--theme-ink);\n  resize: none;\n  min-height: 2.25rem;\n  max-height: 11rem;\n  padding: 0.45rem;\n  font: inherit;\n}\n.send {\n  flex: 0 0 auto;\n  border: 0;\n  border-radius: 0.7rem;\n  width: 2.35rem;\n  height: 2.35rem;\n  background: #483d8b;\n  color: #fff;\n}\n.send:disabled {\n  opacity: 0.4;\n}\n.stop {\n  background: #9d3340;\n}\nsmall {\n  display: block;\n  text-align: center;\n  color: var(--theme-hint);\n  font-size: 0.68rem;\n  margin-top: 0.35rem;\n}\n/*# sourceMappingURL=chat-input.component.css.map */\n"] }]
  }], null, { streaming: [{ type: Input, args: [{ isSignal: true, alias: "streaming", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], send: [{ type: Output, args: ["send"] }], cancel: [{ type: Output, args: ["cancel"] }], editor: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatInputComponent, { className: "ChatInputComponent", filePath: "src/app/chat/components/chat-input/chat-input.component.ts", lineNumber: 20 });
})();

// src/app/chat/components/chat-message/chat-message.component.ts
function ChatMessageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message().model);
  }
}
function ChatMessageComponent_For_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "div")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 9);
    \u0275\u0275domListener("click", function ChatMessageComponent_For_10_Case_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const block_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copy(block_r3.text));
    });
    \u0275\u0275domElement(5, "i", 10);
    \u0275\u0275text(6, " Copiar");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "pre")(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(block_r3.language || "c\xF3digo");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(block_r3.text);
  }
}
function ChatMessageComponent_For_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r3.text);
  }
}
function ChatMessageComponent_For_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r3.text);
  }
}
function ChatMessageComponent_For_10_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
function ChatMessageComponent_For_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ChatMessageComponent_For_10_Case_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(block_r3.items);
  }
}
function ChatMessageComponent_For_10_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r3.text);
  }
}
function ChatMessageComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ChatMessageComponent_For_10_Case_0_Template, 10, 2, "div", 8)(1, ChatMessageComponent_For_10_Case_1_Template, 2, 1, "h3")(2, ChatMessageComponent_For_10_Case_2_Template, 2, 1, "blockquote")(3, ChatMessageComponent_For_10_Case_3_Template, 3, 0, "ul")(4, ChatMessageComponent_For_10_Case_4_Template, 2, 1, "p");
  }
  if (rf & 2) {
    let tmp_10_0;
    const block_r3 = ctx.$implicit;
    \u0275\u0275conditional((tmp_10_0 = block_r3.kind) === "code" ? 0 : tmp_10_0 === "heading" ? 1 : tmp_10_0 === "quote" ? 2 : tmp_10_0 === "list" ? 3 : 4);
  }
}
function ChatMessageComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 6);
  }
}
function ChatMessageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 11);
    \u0275\u0275domListener("click", function ChatMessageComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copy(ctx_r0.message().content));
    });
    \u0275\u0275domElement(1, "i", 10);
    \u0275\u0275domElementEnd();
  }
}
var ChatMessageComponent = class _ChatMessageComponent {
  message = input.required(...ngDevMode ? [{ debugName: "message" }] : []);
  label() {
    return this.message().role === "user" ? "Voc\xEA" : "Assistente";
  }
  blocks() {
    const content = this.message().content;
    const result = [];
    const parts = content.split(/```/);
    parts.forEach((part, index) => {
      if (index % 2) {
        const newline = part.indexOf("\n");
        result.push({ kind: "code", language: newline > -1 ? part.slice(0, newline).trim() : "", text: newline > -1 ? part.slice(newline + 1).trimEnd() : part });
        return;
      }
      const list = [];
      for (const line of part.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed)
          continue;
        if (/^[-*]\s/.test(trimmed))
          list.push(trimmed.slice(2));
        else {
          if (list.length)
            result.push({ kind: "list", text: "", items: list.splice(0) });
          if (/^#{1,3}\s/.test(trimmed))
            result.push({ kind: "heading", text: trimmed.replace(/^#{1,3}\s/, "") });
          else if (trimmed.startsWith("> "))
            result.push({ kind: "quote", text: trimmed.slice(2) });
          else
            result.push({ kind: "text", text: line });
        }
      }
      if (list.length)
        result.push({ kind: "list", text: "", items: list });
    });
    return result;
  }
  copy(text) {
    void navigator.clipboard?.writeText(text);
  }
  static \u0275fac = function ChatMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatMessageComponent, selectors: [["app-chat-message"]], inputs: { message: [1, "message"] }, decls: 13, vars: 11, consts: [[1, "message"], ["aria-hidden", "true", 1, "avatar"], [1, "bi"], [1, "content"], [1, "meta"], [1, "body"], ["aria-label", "Gerando resposta", 1, "cursor"], ["type", "button", "aria-label", "Copiar resposta", 1, "copy-answer"], [1, "code"], ["type", "button", "aria-label", "Copiar c\xF3digo", 3, "click"], [1, "bi", "bi-copy"], ["type", "button", "aria-label", "Copiar resposta", 1, "copy-answer", 3, "click"]], template: function ChatMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "i", 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "strong");
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(7, ChatMessageComponent_Conditional_7_Template, 2, 1, "span");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5);
      \u0275\u0275repeaterCreate(9, ChatMessageComponent_For_10_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275conditionalCreate(11, ChatMessageComponent_Conditional_11_Template, 1, 0, "span", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(12, ChatMessageComponent_Conditional_12_Template, 2, 0, "button", 7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("user", ctx.message().role === "user");
      \u0275\u0275attribute("aria-label", ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-person-fill", ctx.message().role === "user")("bi-stars", ctx.message().role === "assistant");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message().model ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.blocks());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.message().status === "streaming" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message().role === "assistant" && ctx.message().content ? 12 : -1);
    }
  }, styles: ["\n\n.message[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem minmax(0, 1fr);\n  gap: 0.75rem;\n  padding: 1rem clamp(0.85rem, 3vw, 1.5rem);\n  max-width: 56rem;\n  margin: auto;\n}\n.message.user[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-sand) 45%, transparent);\n  border-radius: 1rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #483d8b;\n  color: #fff;\n}\n.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background: #50725b;\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 0;\n  position: relative;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  margin-bottom: 0.35rem;\n}\n.meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-hint);\n  font-size: 0.68rem;\n}\n.body[_ngcontent-%COMP%] {\n  line-height: 1.65;\n  color: var(--theme-ink);\n}\np[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  margin: 0 0 0.65rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  margin: 1rem 0 0.45rem;\n}\nblockquote[_ngcontent-%COMP%] {\n  border-left: 3px solid #776db5;\n  padding-left: 0.8rem;\n  color: var(--theme-hint);\n}\n.code[_ngcontent-%COMP%] {\n  border-radius: 0.65rem;\n  overflow: hidden;\n  background: #171821;\n  color: #edf0f7;\n  margin: 0.65rem 0;\n}\n.code[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0.7rem;\n  background: #252735;\n  font-size: 0.7rem;\n}\n.code[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #d9dce7;\n}\n.code[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.8rem;\n  overflow: auto;\n  font-size: 0.82rem;\n}\n.copy-answer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  border: 0;\n  background: transparent;\n  color: var(--theme-hint);\n  opacity: 0;\n}\n.message[_ngcontent-%COMP%]:hover   .copy-answer[_ngcontent-%COMP%], \n.copy-answer[_ngcontent-%COMP%]:focus-visible {\n  opacity: 1;\n}\n.cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.45rem;\n  height: 1.05rem;\n  background: #6f63aa;\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n  vertical-align: text-bottom;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=chat-message.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatMessageComponent, [{
    type: Component,
    args: [{ selector: "app-chat-message", standalone: true, template: `<article class="message" [class.user]="message().role === 'user'" [attr.aria-label]="label()">
    <div class="avatar" aria-hidden="true"><i class="bi" [class.bi-person-fill]="message().role === 'user'" [class.bi-stars]="message().role === 'assistant'"></i></div>
    <div class="content"><div class="meta"><strong>{{ label() }}</strong>@if(message().model){<span>{{message().model}}</span>}</div>
      <div class="body">@for(block of blocks(); track $index){
        @switch(block.kind){
          @case('code'){<div class="code"><div><span>{{block.language || 'c\xF3digo'}}</span><button type="button" (click)="copy(block.text)" aria-label="Copiar c\xF3digo"><i class="bi bi-copy"></i> Copiar</button></div><pre><code>{{block.text}}</code></pre></div>}
          @case('heading'){<h3>{{block.text}}</h3>}
          @case('quote'){<blockquote>{{block.text}}</blockquote>}
          @case('list'){<ul>@for(item of block.items;track $index){<li>{{item}}</li>}</ul>}
          @default{<p>{{block.text}}</p>}
        }
      }@if(message().status==='streaming'){<span class="cursor" aria-label="Gerando resposta"></span>}</div>
      @if(message().role==='assistant' && message().content){<button class="copy-answer" type="button" (click)="copy(message().content)" aria-label="Copiar resposta"><i class="bi bi-copy"></i></button>}
    </div>
  </article>`, styles: ["/* angular:styles/component:scss;1271b3fe78c32fb3e8858d1065f80cbd7dee5410abb9297e1047167236294343;D:/Projeto/BrapciAngular2/src/app/chat/components/chat-message/chat-message.component.ts */\n.message {\n  display: grid;\n  grid-template-columns: 2rem minmax(0, 1fr);\n  gap: 0.75rem;\n  padding: 1rem clamp(0.85rem, 3vw, 1.5rem);\n  max-width: 56rem;\n  margin: auto;\n}\n.message.user {\n  background: color-mix(in srgb, var(--theme-sand) 45%, transparent);\n  border-radius: 1rem;\n}\n.avatar {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #483d8b;\n  color: #fff;\n}\n.user .avatar {\n  background: #50725b;\n}\n.content {\n  min-width: 0;\n  position: relative;\n}\n.meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  margin-bottom: 0.35rem;\n}\n.meta span {\n  color: var(--theme-hint);\n  font-size: 0.68rem;\n}\n.body {\n  line-height: 1.65;\n  color: var(--theme-ink);\n}\np {\n  white-space: pre-wrap;\n  margin: 0 0 0.65rem;\n}\nh3 {\n  font-size: 1.08rem;\n  margin: 1rem 0 0.45rem;\n}\nblockquote {\n  border-left: 3px solid #776db5;\n  padding-left: 0.8rem;\n  color: var(--theme-hint);\n}\n.code {\n  border-radius: 0.65rem;\n  overflow: hidden;\n  background: #171821;\n  color: #edf0f7;\n  margin: 0.65rem 0;\n}\n.code > div {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0.7rem;\n  background: #252735;\n  font-size: 0.7rem;\n}\n.code button {\n  border: 0;\n  background: transparent;\n  color: #d9dce7;\n}\n.code pre {\n  margin: 0;\n  padding: 0.8rem;\n  overflow: auto;\n  font-size: 0.82rem;\n}\n.copy-answer {\n  position: absolute;\n  right: 0;\n  top: 0;\n  border: 0;\n  background: transparent;\n  color: var(--theme-hint);\n  opacity: 0;\n}\n.message:hover .copy-answer,\n.copy-answer:focus-visible {\n  opacity: 1;\n}\n.cursor {\n  display: inline-block;\n  width: 0.45rem;\n  height: 1.05rem;\n  background: #6f63aa;\n  animation: blink 1s infinite;\n  vertical-align: text-bottom;\n}\n@keyframes blink {\n  50% {\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=chat-message.component.css.map */\n"] }]
  }], null, { message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatMessageComponent, { className: "ChatMessageComponent", filePath: "src/app/chat/components/chat-message/chat-message.component.ts", lineNumber: 23 });
})();

// src/app/chat/components/project-dialog/project-dialog.component.ts
function ProjectDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProjectDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "section", 2);
    \u0275\u0275listener("click", function ProjectDialogComponent_Conditional_0_Template_section_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header")(3, "h2", 3);
    \u0275\u0275text(4, "Novo projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ProjectDialogComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Nome");
    \u0275\u0275elementStart(9, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDialogComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Descri\xE7\xE3o");
    \u0275\u0275elementStart(12, "textarea", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDialogComponent_Conditional_0_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.description, $event) || (ctx_r1.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Contexto do projeto");
    \u0275\u0275elementStart(15, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDialogComponent_Conditional_0_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.context, $event) || (ctx_r1.context = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "footer")(17, "button", 9);
    \u0275\u0275listener("click", function ProjectDialogComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(18, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function ProjectDialogComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.context);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.name.trim() || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Criando..." : "Criar projeto");
  }
}
var ProjectDialogComponent = class _ProjectDialogComponent {
  open = input(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  saving = input(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  close = output();
  save = output();
  name = "";
  description = "";
  context = "";
  submit() {
    if (!this.name.trim())
      return;
    this.save.emit({ name: this.name.trim(), description: this.description.trim(), context: this.context.trim() });
  }
  static \u0275fac = function ProjectDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDialogComponent, selectors: [["app-project-dialog"]], inputs: { open: [1, "open"], saving: [1, "saving"] }, outputs: { close: "close", save: "save" }, decls: 1, vars: 1, consts: [["role", "presentation", 1, "shade"], ["role", "presentation", 1, "shade", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "project-title", 1, "dialog", 3, "click"], ["id", "project-title"], ["type", "button", "aria-label", "Fechar", 3, "click"], [1, "bi", "bi-x-lg"], ["maxlength", "150", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "5", "placeholder", "Informa\xE7\xF5es usadas automaticamente nas conversas", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ProjectDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProjectDialogComponent_Conditional_0_Template, 21, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.shade[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.dialog[_ngcontent-%COMP%] {\n  width: min(34rem, 100%);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n}\nheader[_ngcontent-%COMP%], \nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: inherit;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n  border-color: var(--theme-line);\n}\nfooter[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin-top: 1.2rem;\n}\n/*# sourceMappingURL=project-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDialogComponent, [{
    type: Component,
    args: [{ selector: "app-project-dialog", standalone: true, imports: [FormsModule], template: `@if(open()){<div class="shade" role="presentation" (click)="close.emit()"><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="project-title" (click)="$event.stopPropagation()"><header><h2 id="project-title">Novo projeto</h2><button type="button" (click)="close.emit()" aria-label="Fechar"><i class="bi bi-x-lg"></i></button></header><label>Nome<input class="form-control" maxlength="150" [(ngModel)]="name" /></label><label>Descri\xE7\xE3o<textarea class="form-control" rows="2" [(ngModel)]="description"></textarea></label><label>Contexto do projeto<textarea class="form-control" rows="5" [(ngModel)]="context" placeholder="Informa\xE7\xF5es usadas automaticamente nas conversas"></textarea></label><footer><button class="btn btn-light" type="button" (click)="close.emit()">Cancelar</button><button class="btn btn-primary" type="button" [disabled]="!name.trim()||saving()" (click)="submit()">{{saving()?'Criando...':'Criar projeto'}}</button></footer></section></div>}`, styles: ["/* angular:styles/component:scss;e595ac556cd5ee4970fe160b325ca9e27b31b8d23db9c0473348dd2933d90e74;D:/Projeto/BrapciAngular2/src/app/chat/components/project-dialog/project-dialog.component.ts */\n.shade {\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.dialog {\n  width: min(34rem, 100%);\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n}\nheader,\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n}\nh2 {\n  font-size: 1.2rem;\n  margin: 0;\n}\nheader button {\n  border: 0;\n  background: transparent;\n  color: inherit;\n}\nlabel {\n  display: grid;\n  gap: 0.3rem;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\ninput,\ntextarea {\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n  border-color: var(--theme-line);\n}\nfooter {\n  justify-content: flex-end;\n  margin-top: 1.2rem;\n}\n/*# sourceMappingURL=project-dialog.component.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], saving: [{ type: Input, args: [{ isSignal: true, alias: "saving", required: false }] }], close: [{ type: Output, args: ["close"] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDialogComponent, { className: "ProjectDialogComponent", filePath: "src/app/chat/components/project-dialog/project-dialog.component.ts", lineNumber: 10 });
})();

// src/app/chat/pages/chat-page/chat-page.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function ChatPageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "span", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando seu espa\xE7o...");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Como posso ajudar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Converse com um modelo local de forma privada. Selecione um projeto para usar seu contexto automaticamente.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "button", 15);
    \u0275\u0275listener("click", function ChatPageComponent_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send("Resuma os principais conceitos de Ci\xEAncia da Informa\xE7\xE3o."));
    });
    \u0275\u0275text(9, "Explorar um tema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function ChatPageComponent_Conditional_6_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send("Ajude-me a estruturar uma estrat\xE9gia de busca bibliogr\xE1fica."));
    });
    \u0275\u0275text(11, "Criar estrat\xE9gia de busca");
    \u0275\u0275elementEnd()()();
  }
}
function ChatPageComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chat-message", 7);
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    \u0275\u0275property("message", message_r3);
  }
}
function ChatPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ChatPageComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(null));
    });
    \u0275\u0275text(5, "Fechar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var ChatPageComponent = class _ChatPageComponent {
  api = inject(ChatApiService);
  streamingService = inject(StreamingService);
  controller = null;
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  chats = signal([], ...ngDevMode ? [{ debugName: "chats" }] : []);
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
  models = signal([], ...ngDevMode ? [{ debugName: "models" }] : []);
  activeProject = signal(null, ...ngDevMode ? [{ debugName: "activeProject" }] : []);
  activeChat = signal(null, ...ngDevMode ? [{ debugName: "activeChat" }] : []);
  selectedModel = signal("", ...ngDevMode ? [{ debugName: "selectedModel" }] : []);
  state = signal("loading", ...ngDevMode ? [{ debugName: "state" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
  projectDialogOpen = signal(false, ...ngDevMode ? [{ debugName: "projectDialogOpen" }] : []);
  projectSaving = signal(false, ...ngDevMode ? [{ debugName: "projectSaving" }] : []);
  visibleMessages = computed(() => this.messages().filter((m) => m.role === "user" || m.role === "assistant"), ...ngDevMode ? [{ debugName: "visibleMessages" }] : []);
  constructor() {
    this.loadWorkspace();
  }
  toggleSidebar() {
    this.sidebarCollapsed.update((value) => !value);
  }
  loadWorkspace() {
    this.state.set("loading");
    this.error.set(null);
    forkJoin({ models: this.api.getModels(), projects: this.api.getProjects(), chats: this.api.getChats() }).subscribe({ next: ({ models, projects, chats }) => {
      this.models.set(models);
      this.projects.set(projects);
      this.chats.set(chats.filter((c) => c.status === "active"));
      this.selectedModel.set(models[0]?.name ?? "");
      this.state.set("idle");
    }, error: () => {
      this.state.set("error");
      this.error.set("N\xE3o foi poss\xEDvel carregar o chat. Verifique a API e tente novamente.");
    } });
  }
  selectProject(project) {
    this.activeProject.set(project);
    if (project.defaultModel && this.models().some((m) => m.name === project.defaultModel))
      this.selectedModel.set(project.defaultModel);
    this.sidebarOpen.set(false);
  }
  selectChat(chat) {
    if (this.state() === "streaming")
      return;
    this.activeChat.set(chat);
    this.activeProject.set(this.projects().find((p) => p.id === chat.projectId) ?? null);
    this.selectedModel.set(chat.model);
    this.messages.set([]);
    this.state.set("loading");
    this.sidebarOpen.set(false);
    this.api.getMessages(chat.id).subscribe({ next: (m) => {
      this.messages.set(m);
      this.state.set("idle");
    }, error: () => {
      this.state.set("error");
      this.error.set("N\xE3o foi poss\xEDvel abrir esta conversa.");
    } });
  }
  newChat() {
    if (this.state() === "streaming")
      return;
    this.activeChat.set(null);
    this.messages.set([]);
    this.error.set(null);
    this.state.set("idle");
    this.sidebarOpen.set(false);
  }
  changeModel(model) {
    this.selectedModel.set(model);
    const chat = this.activeChat();
    if (chat)
      this.api.updateChat(chat.id, { model }).subscribe({ next: (updated) => {
        this.activeChat.set(updated);
        this.chats.update((items) => items.map((c) => c.id === updated.id ? updated : c));
      } });
  }
  send(content) {
    if (this.state() === "streaming" || !this.selectedModel())
      return;
    const chat = this.activeChat();
    if (chat) {
      this.streamMessage(chat, content);
      return;
    }
    this.state.set("loading");
    this.api.createChat({ title: "Nova conversa", model: this.selectedModel(), projectId: this.activeProject()?.id ?? null }).subscribe({ next: (created) => {
      this.activeChat.set(created);
      this.chats.update((items) => [created, ...items]);
      this.streamMessage(created, content);
    }, error: () => {
      this.state.set("error");
      this.error.set("N\xE3o foi poss\xEDvel criar a conversa.");
    } });
  }
  streamMessage(chat, content) {
    const stamp = (/* @__PURE__ */ new Date()).toISOString();
    const clientId = crypto.randomUUID();
    const user = { id: clientId, chatId: chat.id, role: "user", content, model: null, status: "completed", createdAt: stamp };
    const assistantId = `assistant-${clientId}`;
    const assistant = { id: assistantId, chatId: chat.id, role: "assistant", content: "", model: this.selectedModel(), status: "streaming", createdAt: stamp };
    this.messages.update((items) => [...items, user, assistant]);
    this.state.set("streaming");
    this.error.set(null);
    this.controller = new AbortController();
    this.streamingService.send(chat.id, { content, model: this.selectedModel(), clientMessageId: clientId }, this.controller.signal).pipe(finalize(() => {
      this.controller = null;
    })).subscribe({ next: (event) => this.applyStreamEvent(assistantId, event), error: (error) => {
      if (this.state() === "cancelled" || this.state() === "error")
        return;
      this.messages.update((items) => items.map((m) => m.id === assistantId ? __spreadProps(__spreadValues({}, m), { status: "error" }) : m));
      this.state.set("error");
      this.error.set(error instanceof Error ? error.message : "A resposta foi interrompida por uma falha.");
    }, complete: () => {
      if (this.state() === "streaming") {
        this.messages.update((items) => items.map((m) => m.id === assistantId ? __spreadProps(__spreadValues({}, m), { status: "completed" }) : m));
        this.state.set("completed");
      }
    } });
  }
  applyStreamEvent(id, event) {
    if (event.type === "error") {
      this.messages.update((items) => items.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status: "error" }) : m));
      this.state.set("error");
      this.error.set(event.error || "Falha durante a gera\xE7\xE3o.");
      this.controller?.abort();
      return;
    }
    if (event.type === "token" && event.content)
      this.messages.update((items) => items.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { content: m.content + event.content }) : m));
    if (event.type === "message" && event.message)
      this.messages.update((items) => items.map((m) => m.id === id ? event.message : m));
    if (event.type === "done") {
      this.messages.update((items) => items.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status: "completed" }) : m));
      this.state.set("completed");
    }
  }
  cancel() {
    if (!this.controller)
      return;
    this.state.set("cancelled");
    this.controller.abort();
    this.messages.update((items) => items.map((m) => m.status === "streaming" ? __spreadProps(__spreadValues({}, m), { status: "cancelled" }) : m));
  }
  createProject(payload) {
    this.projectSaving.set(true);
    this.api.createProject(__spreadProps(__spreadValues({}, payload), { defaultModel: this.selectedModel() })).pipe(finalize(() => this.projectSaving.set(false))).subscribe({ next: (p) => {
      this.projects.update((items) => [p, ...items]);
      this.activeProject.set(p);
      this.projectDialogOpen.set(false);
    }, error: () => this.error.set("N\xE3o foi poss\xEDvel criar o projeto.") });
  }
  static \u0275fac = function ChatPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatPageComponent, selectors: [["app-chat-page"]], decls: 12, vars: 17, consts: [[1, "chat-layout"], [3, "close", "collapse", "newChat", "newProject", "selectProject", "selectChat", "projects", "chats", "activeProjectId", "activeChatId", "open", "collapsed"], [1, "chat-main"], [3, "menu", "modelChange", "chat", "project", "models", "model", "streaming"], ["aria-live", "polite", "aria-label", "Mensagens da conversa", 1, "messages"], [1, "center-state"], [1, "welcome"], [3, "message"], ["role", "alert", 1, "error"], [3, "send", "cancel", "streaming", "disabled"], [3, "close", "save", "open", "saving"], ["aria-hidden", "true", 1, "spinner-border"], [1, "welcome-icon"], [1, "bi", "bi-stars"], [1, "suggestions"], ["type", "button", 3, "click"], [1, "bi", "bi-exclamation-circle"]], template: function ChatPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "app-chat-sidebar", 1);
      \u0275\u0275listener("close", function ChatPageComponent_Template_app_chat_sidebar_close_1_listener() {
        return ctx.sidebarOpen.set(false);
      })("collapse", function ChatPageComponent_Template_app_chat_sidebar_collapse_1_listener() {
        return ctx.toggleSidebar();
      })("newChat", function ChatPageComponent_Template_app_chat_sidebar_newChat_1_listener() {
        return ctx.newChat();
      })("newProject", function ChatPageComponent_Template_app_chat_sidebar_newProject_1_listener() {
        return ctx.projectDialogOpen.set(true);
      })("selectProject", function ChatPageComponent_Template_app_chat_sidebar_selectProject_1_listener($event) {
        return ctx.selectProject($event);
      })("selectChat", function ChatPageComponent_Template_app_chat_sidebar_selectChat_1_listener($event) {
        return ctx.selectChat($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 2)(3, "app-chat-header", 3);
      \u0275\u0275listener("menu", function ChatPageComponent_Template_app_chat_header_menu_3_listener() {
        return ctx.sidebarOpen.set(true);
      })("modelChange", function ChatPageComponent_Template_app_chat_header_modelChange_3_listener($event) {
        return ctx.changeModel($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275conditionalCreate(5, ChatPageComponent_Conditional_5_Template, 4, 0, "div", 5)(6, ChatPageComponent_Conditional_6_Template, 12, 0, "div", 6);
      \u0275\u0275repeaterCreate(7, ChatPageComponent_For_8_Template, 1, 1, "app-chat-message", 7, _forTrack03);
      \u0275\u0275conditionalCreate(9, ChatPageComponent_Conditional_9_Template, 6, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-chat-input", 9);
      \u0275\u0275listener("send", function ChatPageComponent_Template_app_chat_input_send_10_listener($event) {
        return ctx.send($event);
      })("cancel", function ChatPageComponent_Template_app_chat_input_cancel_10_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "app-project-dialog", 10);
      \u0275\u0275listener("close", function ChatPageComponent_Template_app_project_dialog_close_11_listener() {
        return ctx.projectDialogOpen.set(false);
      })("save", function ChatPageComponent_Template_app_project_dialog_save_11_listener($event) {
        return ctx.createProject($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275property("projects", ctx.projects())("chats", ctx.chats())("activeProjectId", ((tmp_2_0 = ctx.activeProject()) == null ? null : tmp_2_0.id) ?? null)("activeChatId", ((tmp_3_0 = ctx.activeChat()) == null ? null : tmp_3_0.id) ?? null)("open", ctx.sidebarOpen())("collapsed", ctx.sidebarCollapsed());
      \u0275\u0275advance(2);
      \u0275\u0275property("chat", ctx.activeChat())("project", ctx.activeProject())("models", ctx.models())("model", ctx.selectedModel())("streaming", ctx.state() === "streaming");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state() === "loading" && !ctx.messages().length ? 5 : !ctx.visibleMessages().length ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.visibleMessages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("streaming", ctx.state() === "streaming")("disabled", ctx.state() === "loading" || !ctx.models().length);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.projectDialogOpen())("saving", ctx.projectSaving());
    }
  }, dependencies: [ChatSidebarComponent, ChatHeaderComponent, ChatInputComponent, ChatMessageComponent, ProjectDialogComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  flex: 1;\n  min-height: 0;\n}\n.chat-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100dvh - 4.6rem);\n  min-height: 32rem;\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n}\n.chat-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.25rem 0;\n  scrollbar-gutter: stable;\n}\n.center-state[_ngcontent-%COMP%], \n.welcome[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n  color: var(--theme-hint);\n}\n.welcome[_ngcontent-%COMP%] {\n  max-width: 38rem;\n  margin: auto;\n}\n.welcome-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  background: #483d8b;\n  color: #fff;\n  font-size: 1.35rem;\n}\n.welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 600 clamp(1.45rem, 4vw, 2rem) "Bitter", serif;\n  color: var(--theme-ink);\n  margin: 1rem 0 0.45rem;\n}\n.suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 1.2rem;\n}\n.suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  padding: 0.55rem 0.8rem;\n}\n.error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  max-width: 52rem;\n  margin: 1rem auto;\n  padding: 0.7rem 1rem;\n  border-radius: 0.65rem;\n  background: #fbe8e8;\n  color: #7d2028;\n}\n.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-decoration: underline;\n}\n@media (max-width: 850px) {\n  .chat-layout[_ngcontent-%COMP%] {\n    height: calc(100dvh - 3.7rem);\n  }\n}\n/*# sourceMappingURL=chat-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatPageComponent, [{
    type: Component,
    args: [{ selector: "app-chat-page", standalone: true, imports: [ChatSidebarComponent, ChatHeaderComponent, ChatInputComponent, ChatMessageComponent, ProjectDialogComponent], template: `<main class="chat-layout">
  <app-chat-sidebar [projects]="projects()" [chats]="chats()" [activeProjectId]="activeProject()?.id ?? null" [activeChatId]="activeChat()?.id ?? null" [open]="sidebarOpen()" [collapsed]="sidebarCollapsed()" (close)="sidebarOpen.set(false)" (collapse)="toggleSidebar()" (newChat)="newChat()" (newProject)="projectDialogOpen.set(true)" (selectProject)="selectProject($event)" (selectChat)="selectChat($event)" />
  <section class="chat-main">
    <app-chat-header [chat]="activeChat()" [project]="activeProject()" [models]="models()" [model]="selectedModel()" [streaming]="state() === 'streaming'" (menu)="sidebarOpen.set(true)" (modelChange)="changeModel($event)" />
    <div class="messages" aria-live="polite" aria-label="Mensagens da conversa">
      @if(state() === 'loading' && !messages().length){<div class="center-state"><span class="spinner-border" aria-hidden="true"></span><p>Carregando seu espa\xE7o...</p></div>}
      @else if(!visibleMessages().length){<div class="welcome"><div class="welcome-icon"><i class="bi bi-stars"></i></div><h2>Como posso ajudar?</h2><p>Converse com um modelo local de forma privada. Selecione um projeto para usar seu contexto automaticamente.</p><div class="suggestions"><button type="button" (click)="send('Resuma os principais conceitos de Ci\xEAncia da Informa\xE7\xE3o.')">Explorar um tema</button><button type="button" (click)="send('Ajude-me a estruturar uma estrat\xE9gia de busca bibliogr\xE1fica.')">Criar estrat\xE9gia de busca</button></div></div>}
      @for(message of visibleMessages();track message.id){<app-chat-message [message]="message" />}
      @if(error()){<div class="error" role="alert"><i class="bi bi-exclamation-circle"></i><span>{{error()}}</span><button type="button" (click)="error.set(null)">Fechar</button></div>}
    </div>
    <app-chat-input [streaming]="state() === 'streaming'" [disabled]="state() === 'loading' || !models().length" (send)="send($event)" (cancel)="cancel()" />
  </section>
</main>
<app-project-dialog [open]="projectDialogOpen()" [saving]="projectSaving()" (close)="projectDialogOpen.set(false)" (save)="createProject($event)" />
`, styles: ['/* src/app/chat/pages/chat-page/chat-page.component.scss */\n:host {\n  display: block;\n  flex: 1;\n  min-height: 0;\n}\n.chat-layout {\n  display: flex;\n  height: calc(100dvh - 4.6rem);\n  min-height: 32rem;\n  background: var(--theme-bg);\n  color: var(--theme-ink);\n}\n.chat-main {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.25rem 0;\n  scrollbar-gutter: stable;\n}\n.center-state,\n.welcome {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n  color: var(--theme-hint);\n}\n.welcome {\n  max-width: 38rem;\n  margin: auto;\n}\n.welcome-icon {\n  display: grid;\n  place-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  background: #483d8b;\n  color: #fff;\n  font-size: 1.35rem;\n}\n.welcome h2 {\n  font: 600 clamp(1.45rem, 4vw, 2rem) "Bitter", serif;\n  color: var(--theme-ink);\n  margin: 1rem 0 0.45rem;\n}\n.suggestions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 1.2rem;\n}\n.suggestions button {\n  border: 1px solid var(--theme-line);\n  border-radius: 999px;\n  background: var(--theme-card-bg);\n  color: var(--theme-ink);\n  padding: 0.55rem 0.8rem;\n}\n.error {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  max-width: 52rem;\n  margin: 1rem auto;\n  padding: 0.7rem 1rem;\n  border-radius: 0.65rem;\n  background: #fbe8e8;\n  color: #7d2028;\n}\n.error button {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-decoration: underline;\n}\n@media (max-width: 850px) {\n  .chat-layout {\n    height: calc(100dvh - 3.7rem);\n  }\n}\n/*# sourceMappingURL=chat-page.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatPageComponent, { className: "ChatPageComponent", filePath: "src/app/chat/pages/chat-page/chat-page.component.ts", lineNumber: 16 });
})();
export {
  ChatPageComponent
};
//# sourceMappingURL=chunk-EP5O2E3E.js.map
