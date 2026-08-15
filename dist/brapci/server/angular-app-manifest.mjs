
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-2S2USFQ2.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X6EMRSB6.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HZ5YM522.js",
      "chunk-NAR3ECQH.js",
      "chunk-V6ZL36VE.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sobre/about/brapci",
    "route": "/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ISP53BCF.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XCJP7PD.js",
      "chunk-V6ZL36VE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YNS63RFJ.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GDRG4LR6.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PF6NZ7H3.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3OCUYUT.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJJS7VVV.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UIG554AH.js",
      "chunk-NAR3ECQH.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFU2FS6O.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNCZOWVG.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSWF74HP.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAFSNNYM.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K7PBJEZB.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVLKMVLE.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-APX2ISWB.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PU45AD7E.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '372cf45bf4a0ff2312f3267790b8bfa4beb440b86d9a6295f8caff76ffbd1a1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '695a9551da2cce5bf07ad0b27334e46b49c42e6d7ec4fc49efbc443a8a8d48d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74016, hash: 'e44dc4577da57372a5a0d7f9d835fa093a2a7dd165049f59f0888178e82e935f', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107298, hash: '19dfa0729f7107b5a8247df7e4a21533a2ce2fa86ce36a6c3160fef6ca9b2cda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73892, hash: '8ade2e73d95057cf7389551e34e60f6c3f3861c0314b0ae7d092425807c253c8', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68683, hash: '11353aed06a481d07c45afaae9f15c98e7b0a1ee78ea32985c284fdf2338451f', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68716, hash: 'b416f1e9a3430302de4448e1c003d664ad348815f4e775243bd8e2e46a920736', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173350, hash: '86da2465c492da99ee6815a3076657b1ca158094548fafb64d201faf128ea3fd', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79202, hash: '38859ad2941bc808d5cf2b573f567e7b18a9b7821842aaa924f57bdb0445f2a3', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175168, hash: '2340e3abe865e25b94bcc7dcfd0c60453dca2c17e37f7917997a704c4ebdcd9a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66133, hash: '1ecf43fa23e0ccc83f226641247577a10a7e928b67dba1901e3b4141f9afd5ed', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73756, hash: '7276f8dd6887b23f7c6c3aa760c32c5ca4d39364b62b66e3785f1c2e66d7af8b', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77135, hash: '955317fcfbedf4f6a0fbfb9e552c7e06388eaabb7c574125722086dc886d89a2', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68759, hash: 'babf5f427b3b8e8483be0c872d687b5587ac126876dadc5f8dcf8350d4203a2e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67917, hash: 'eca834b99779c3cd80b03e861e03b2acb57ac676e8d38444987f6b293423a344', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62358, hash: 'c5a7e230b835a35a268bc90ae6ccc8e176df717cb73d7215a6fbbfa996f54d65', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77373, hash: '59cedfe86976809b8d9d92338aa90e29d5f08b3d4db38fe25d69a081e61386d1', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119782, hash: '0751891e5f886ae3a3fa1020e2c78c194da2cde514aa520e13861cda86e5e47f', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144787, hash: '8a2bae13e6047008bdeb6bc365649cfdc31030685679e5495dbf5aeae2e841a9', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
