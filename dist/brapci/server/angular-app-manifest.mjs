
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
      "/web2/chunk-HCZDKXFL.js",
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
    'index.csr.html': {size: 6158, hash: '44473479e7000c8a51c15b801d5d90c0c13549362df977199d32c94c15a59928', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2017, hash: 'dd3f620f4a4bc6ae7efa6af69716a43bcfbb75e09e50a6a9388259b23fc8ad0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71443, hash: '42925e006b18ab385637103c8725347aeb30a9500d4c51456d06884c157d7829', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72444, hash: '1362613f952081469b57d765f03ad6361c70248a167f56f1d4a2a1e55e0784ee', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105601, hash: '8ce1a6d37e82cd59d677abd0d2bd5024ef8f5afd8cf7baa4ffab4718fda6826e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67270, hash: 'de6ef7d15d00eaed6d923f211f9fae7d130341cab7991ee559729fbffd3b0334', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67255, hash: 'f86deec15dd2276f5232b5d650a673ecd16e8881a9e56e2d6ce0702b7aa783f7', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60910, hash: 'be43d299dc3a08d076472107d942934b6aae174446d4a72bb5999221aa846d03', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 171976, hash: 'e22d623c6e465e112b8de288c5a62c9f83bd82220b63d88bdac84a630d993fef', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72840, hash: 'fd7e399db2d37f35f9ce93d6cdaf334a14426693b4d24b030f6d110a77bba5ba', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 173799, hash: '0a9429d0b9e3842931bb97aaadc8ba2c3fd710429a959777556202ba7c2477b7', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75326, hash: '1c5c3a336a3c03e758718b08f8a38f4573d3c68d3f16a91aa82b314c72f09197', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66475, hash: '9d84dbf22a7f41614939474602934049dad31a290c8e85aab6dfcf41dab92174', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 64484, hash: 'e7e19c6945414118f7bd895b3edae36a63d10a4466db93bb0fd62729108ad573', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67322, hash: '1a00592c8280223bf9af03c9847aa3b684816bec91a068bd7ae4a35944274686', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118291, hash: '02a4ca20e1120922ad3834170ddae7d0335960a697358df66da06582a36e3b4a', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73292, hash: '3150891e8de21489ccdac6f4c07f92e33accf842f5ee268021640bafce8c9c8c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64696, hash: '43c9452ab2d347a79e8fdc4b1efe7ae23a9077d9b278aec5319cbb0b509ece72', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
