
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-QJHW4BCH.js",
      "/web2/chunk-PL25ACWG.js"
    ],
    "route": "/web2"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-E42FHC4W.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "/web2/chunk-BFKYR7JN.js",
      "/web2/chunk-FOTQYFGA.js",
      "/web2/chunk-MTE7AZFY.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/v/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/web2/sobre/about/brapci",
    "route": "/web2/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-5ZO3NNLK.js"
    ],
    "route": "/web2/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-PNGNJ4KN.js",
      "/web2/chunk-MTE7AZFY.js"
    ],
    "route": "/web2/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "/web2/chunk-CFJZ5YN2.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-XAPVPPOR.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-PASSERRW.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-ZOSWTNCV.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-X7UJO4D7.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-LJ6KIMAC.js",
      "/web2/chunk-FOTQYFGA.js",
      "/web2/chunk-PL25ACWG.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-PAAF4ZLD.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-JCICOXX5.js"
    ],
    "route": "/web2/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-AFR2G5D7.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-3ZRNQJRK.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-DJQMKBE2.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-YQTYMV3A.js",
      "/web2/chunk-2JY4VJDB.js"
    ],
    "route": "/web2/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-A6HTMH53.js",
      "/web2/chunk-PL25ACWG.js"
    ],
    "route": "/web2/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6158, hash: '45e02c1fb4e9e65b11972adaf133662b451d82ced0f822ab5bc2e621db743c20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2017, hash: '4def2cffd71cc7fd83a7982a5e11bc004b0e9b0b339985b9e48ef0b426bcce62', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71443, hash: 'b36b3734c2b48b3c6542ad7ea8fd19b5e356f3d482db696200220a77ce1565e4', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105601, hash: '495fafce2d988f24b136e72edc0d12d91116e4251d6dcfc3f5d061b7181a096b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72444, hash: 'ebbc253629e7c52e592cca073758ba68a24892df1cd85f140cac86dd16100028', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67279, hash: 'b923a7fde90db5029473031ae63bd829221cdf43b51521e8e9ba955c68bdc24b', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67246, hash: '8e4b3bb143155b97998bda23517a317d9571ac369cf9cfc120dfc43d98439b1a', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60910, hash: '7a159a7cd8976120244f3f9863196ebed218676010336ccea1bbdbc87269e96f', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72831, hash: '0a396385db026b26802507cd84d02a20d1b863d84bba32928e3ef88a4c22cb2a', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 171976, hash: 'fb6ccf10e88f55313b0266f8b925d452804f5d4df3ed3a0e21eeb3a6a081b709', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75326, hash: '8661231a7b2f01e8de40e2dfe41bdb790b245b7b0d25abe06eec28cf5909ab26', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118300, hash: 'cc10b7cfa47effb5c3e1fda2fc922b0ed6676466f464b882085c23a93fb752c4', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66475, hash: '69801056907b6091b81461d12b5f18aec1b311b78f5bbe5f9f13bb7dbbd22582', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 173799, hash: 'f266f2914db95563550ebd9938a752dfa411256638beb6dacb4990a2ce7fc08f', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 64484, hash: '32f01edaeecd94e882232bdce603167d03eeb3b89e0b485c1bc22684c50dc1b3', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67331, hash: '3abfc0fa7c31bf54ca41c50b34cdce7f8479bb7addb78929b31f8243e9878d98', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73283, hash: '8f5a15a40b15d4b3df718b750cba27e1f0295856c6da45aeb2d3711c8d3f790d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64696, hash: '7a6151094755b03541cc53a2be38a1596baa743c354b94c8c72c897c8b7220ef', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
