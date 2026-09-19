import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-LP2Y7HO2.mjs";
import {
  Router
} from "./chunk-TG5MYEEE.mjs";
import {
  inject,
  map
} from "./chunk-QTSSUGT7.mjs";
import {
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

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
  loadComponent: () => import("./chunk-BC3HMF5P.mjs").then((m) => m.ChatPageComponent)
}, true ? { \u0275entryName: "src/app/chat/pages/chat-page/chat-page.component.ts" } : {})];
export {
  CHAT_ROUTES
};
//# sourceMappingURL=chunk-LEZO35H3.mjs.map
