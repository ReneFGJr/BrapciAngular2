
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-HW6WKRO6.js",
      "chunk-TOIJD4SV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7VXKUQB.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-G5I3HY7T.js",
      "chunk-VOC3WIBA.js",
      "chunk-4D5HCA62.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
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
      "chunk-D65AAFJN.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSJHGXAB.js",
      "chunk-4D5HCA62.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MMEFXUGB.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2V7Z7Y3C.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RSI5L5GI.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HCYD6G2E.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NYXOYQIQ.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AX3MFKR6.js",
      "chunk-VOC3WIBA.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2AJJOP7.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S3JGDUWH.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U77JLHGV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPHVWQON.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GXJLX5FK.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OVBJ2YF3.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3AGVJTKX.js",
      "chunk-TOIJD4SV.js"
    ],
    "route": "/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '310d7dc6e97d020abbd5fe7a9a4bfe8ff7c3ea98fb506a3774c9187455392556', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'be960a4b219ffd2ff277583270199008fe426358e4362e4832820a4d69277ae9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'b57a85bf096387398ee7e5c2ebf336e3ced0c730efc79db826cb9e58a673f962', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '8cad38a7d6a443377347913292d77d31e36970a60a814c6530309f571205f6e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '100988b9df1531173fdcd9256cca9ed48447f058c338c3bf539dc569cef55295', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: '1505875c834d4d5a52d0acb1aa1c9ae88600ec6b371708ad3b2e73eb5cf976c2', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: '6f3979e7240b925cb51931c2e93180dc7d32d9d6facbc5ead24f1602eca1babd', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '73dde1d5beb4f46bd039f1857cda0866765fe9b6a79b33863d6bba8844737cf6', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: '05229e881615e67901e10c4a698886b5aef010915a2707e7f6882ccfcca72d49', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: 'be60ddd937d399a6433dcc738d40876aa510d405607486e25cf74ab025c049c1', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: 'c93e71d9606aeb49329859b69b46281611dc05bbbadd0d85fc4a9be433959d81', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'c4c364fcacf02557bec1ac42fc608b3a4639eaff9932f048eee5359bc461204e', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119722, hash: '6d8ab1ea3d29c971f2098e29cf8a7b410c58d30a4a6df7d9ce42b884afc86f99', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '7b8308524926afab0da1e9230eebd5c39eb47602c5cb3716c7657ac3e825cf25', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'bbcfe62b3bb9db402cf3678b1157eb9dcb6fd8fb3649fb2662abf3ef72cc2118', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74656, hash: '8ca7faef121490bdc1af0412b2c54be2ead9e4ea48216fe1ccbe4d6aed95489b', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68696, hash: '1f540c9e0a81c1b8231bbab3efd242fc8251da4026102f590ff4fe0ee3815e13', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: '8eaea7a1cdd62b3de01c291303d131561802019a598b6bc3b4eb1d17a9b3ba7a', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
