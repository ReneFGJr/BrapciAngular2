
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
    'signin/index.html': {size: 72444, hash: 'ebbc253629e7c52e592cca073758ba68a24892df1cd85f140cac86dd16100028', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105601, hash: '495fafce2d988f24b136e72edc0d12d91116e4251d6dcfc3f5d061b7181a096b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67270, hash: '09a7a25dba5ecd1c947331b29268e3e47d29947938d1f3742ecd1a0f6541c808', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67255, hash: '38a206033f357d49f7b72d64264dc49f0bc5acd46df595c11b995ae11df8c566', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60910, hash: 'f82a108ce7b5315e2bba32ffddfc94982792400d668a0fe0004ddb7f9a9f4ff4', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 171976, hash: 'fb6ccf10e88f55313b0266f8b925d452804f5d4df3ed3a0e21eeb3a6a081b709', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72840, hash: '44be86c4905ea36be67aba541bc590a8b75edc8b97faee13cd6fa78f56732fed', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75326, hash: '1d762d98762351e61a05ea192d1e93d347c2936fd988519204c57446fa1f3650', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 173799, hash: 'f266f2914db95563550ebd9938a752dfa411256638beb6dacb4990a2ce7fc08f', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66475, hash: 'a81071a7cfec3b4b117509e42007aa2b2a042bb2311c05861de351b7a794f12c', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118291, hash: '57a9dc598e92697d4246c7c3768ac767e2d772ba112964dec603fda9ea36bacb', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73292, hash: 'eee399b2c587bec9e6f56916cdcb1b72744ee98548ce3a1e0bea3c76119a41f8', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 64484, hash: '4b0aa47f38129ef0ccd6b04f07ce0778bd0fb398cf8fca364ba6b0d38d937b40', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67322, hash: 'b6d0b7fd09466bfc426ddc4469c291d17454905002a70d4ad8e8b7f782ef327c', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64696, hash: '141eaa421a9b3ea28862fe75e81d345728c6d8bd48220a74b3badaf49f4a89df', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
