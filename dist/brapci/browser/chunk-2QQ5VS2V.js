import {
  AuthService
} from "./chunk-ZNHZ3OZM.js";
import {
  Router
} from "./chunk-OYM44MPZ.js";
import {
  inject,
  map
} from "./chunk-FWZKW7K5.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

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
  loadComponent: () => import("./chunk-EP5O2E3E.js").then((m) => m.ChatPageComponent)
}, false ? { \u0275entryName: "src/app/chat/pages/chat-page/chat-page.component.ts" } : {})];
export {
  CHAT_ROUTES
};
//# sourceMappingURL=chunk-2QQ5VS2V.js.map
