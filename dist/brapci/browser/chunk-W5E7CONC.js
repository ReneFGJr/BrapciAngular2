import {
  AuthService
} from "./chunk-JRX6NWBE.js";
import {
  Router,
  inject,
  map
} from "./chunk-Y3FCEOIS.js";
import {
  __spreadValues
} from "./chunk-UKK5MWW6.js";

// src/app/chat/guards/chat-auth.guard.ts
var chatAuthGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.getLocalUser())
    return true;
  return auth.checkSession().pipe(map((user) => user ? true : router.createUrlTree(["/signin"], { queryParams: { returnUrl: "/chat" } })));
};

// src/app/chat/chat.routes.ts
var CHAT_ROUTES = [__spreadValues({
  path: "",
  canActivate: [chatAuthGuard],
  loadComponent: () => import("./chunk-GL77MZ2Z.js").then((m) => m.ChatPageComponent)
}, false ? { \u0275entryName: "src/app/chat/pages/chat-page/chat-page.component.ts" } : {})];
export {
  CHAT_ROUTES
};
//# sourceMappingURL=chunk-W5E7CONC.js.map
