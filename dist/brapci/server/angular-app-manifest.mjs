
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNGNXUKI.js",
      "chunk-PL25ACWG.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E42FHC4W.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JO5WGQ6V.js",
      "chunk-FOTQYFGA.js",
      "chunk-MTE7AZFY.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
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
      "chunk-5ZO3NNLK.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PNGNJ4KN.js",
      "chunk-MTE7AZFY.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFJZ5YN2.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XAPVPPOR.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RU6LTM5N.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOSWTNCV.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7UJO4D7.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LJ6KIMAC.js",
      "chunk-FOTQYFGA.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PAAF4ZLD.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JCICOXX5.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R2PJV7JZ.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3ZRNQJRK.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJQMKBE2.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQTYMV3A.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A6HTMH53.js",
      "chunk-PL25ACWG.js"
    ],
    "route": "/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'a3304f9732fd0936f1d9c7d4a3a3545bab0f8e6761ed9f21b6b89ef771cd84af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '31d9cac5d3f476d4fa22ecf4fe458433d637ece6526a97d8f2c31c244f76627d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 72205, hash: '5b3745ee98cca40fd3d1e5934c0552fb57ea7e82e45338e614517df2c908f613', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106543, hash: 'b209785cee2ce3f14b1fc2e524bc4313c522409cf4cb246f3849001c9440fc4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73223, hash: '1b9f23c29aa4526c689f2f9cc0ce46b5efa5be7a38704f2d0309d3ccaf7e003e', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 172696, hash: '0eac269e27eb3172a49a3bd5f8569795aedab0664ff8d145e195b838a824d4e6', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68047, hash: 'aaf5f5bd36e5a03e71c09c9813b0bb1eab534341c619391864ed1d88c90758a7', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174514, hash: '1345ce69a271e9235a10cd8efeee60459af2e637625daf5f3ff4196585f097e6', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68014, hash: 'c647ff3635162d1a207ab453ea09ef46b32e28087927edaec7735af8aa0c7aa1', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 61689, hash: 'e602472356a5053edfec4b584e4187dadbdbefd4ef9bc79148190647f9e7b535', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 73608, hash: '1b6b137efe0562a887698adc231ef94152dd1199766479773f7505675bbd1ec6', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67248, hash: '5105d1b27c111b2ee47ae3cd0c7f985fbc66b07d6425994975701e922690dc84', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 76704, hash: '58d7c5d79fb027dba64b0ff8f48469b1781c7512e33f7af4a1310a8828e4ea65', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119042, hash: 'bdead0419bc236dca0239e72eb045d16dbc14c8809ff35a9de6fe624cf667afb', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73096, hash: '785cf39959426d0f4221cbdeba3732e1ee943a2cc44ef8e2154e4e6c54435872', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74041, hash: '38f1f9fca7a0c2b610f19b98f74217acf7e337277c60ea22fd7a1b75526dfa3f', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68090, hash: 'e22c41f8e8fb8b8e32d3e4c2ec07685398e7498041075c2da746b2e76105b252', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65464, hash: 'd4741a8d737504f997f7ceaa5c85710dc18d36b978c9b9e13de0a944e759cb2f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
