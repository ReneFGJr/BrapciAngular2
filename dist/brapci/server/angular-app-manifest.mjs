
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
    'index.csr.html': {size: 6085, hash: '4b03d6ed38f82f66b7bef616e0896975642494edc152c51e08381f95b83afeff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1944, hash: 'a7c187edc9286db966b2accb2e3bde91984decf6dcc4a6b21c81c6f96cb625ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71924, hash: '7ae9f09d6c3bf5c9d969216ca2f7400c15217afc9cb4b3e41aba1c8eb0254e4e', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106082, hash: '222a808792efafb36861a30bfa020fbfc4eb3111fcdfb9de14ace217af2a9976', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72925, hash: '6a1bad314f90638dab9c2ba067ac5b247368bdf66e385f5375f86bf3a99f2aba', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67727, hash: '2f8e4c4d4003b07178517d8cc77f46be008ce02b8d19d2eb21f5002f2e6950a2', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67760, hash: '55c9b1bb4e91c695d60cb621fa03ade232dccefa5e1f84c88744557b2f9e11a1', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 61391, hash: '26260b7dc4a9eea7e56481b6c0090da5ab8f5d2e7ee6516756a429b3d7840c3e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 73321, hash: '83f444a0fc5af6f1081cbe4f7bae9cf2d128e2399f97ccae4bc5319d746fdb03', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 172457, hash: '0214264db5e7ce7eef3c5515e32eedced959da213fafde2cd13451c3647b32c6', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75816, hash: '4e19e81710bd6ee16c6aeb44570b2488d1c0ced339e918d0be0bfdd64b9d682a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174280, hash: '1ceffbef7a1ccaaeabbf58f37243b14a740e3a1a8c9e6b6fcc369c610ae019d9', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66956, hash: '5f9aa82cd82e9e8c2ff593819a2125d1907fc940d7d170086f5c2abf48f37497', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67803, hash: 'b787e0a29a40f6400ccbcde9264d763ff2502ae3329a2d0eed2522e3919d50e7', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 64974, hash: '13e9b68457113cf1a6bba5fef8ee422462523b862f4e9c1d96fc1e09c06cfa60', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118772, hash: '77401af21744da6fe1dd00f21d9cb0d6376624ef99d87d3a3fcf06f650032625', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73764, hash: '0da025ecb6b4ce28226d4f8a76f13e1dc4d45276f39f95ed73648f496f962116', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65177, hash: '06d024c8081ff260ea804823785d7160a83fb89eafcf9947000a16f7673a42f1', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-H4BYFVH6.css': {size: 354145, hash: 'QhofQFvAc7Y', text: () => import('./assets-chunks/styles-H4BYFVH6_css.mjs').then(m => m.default)}
  },
};
