
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
      "/web2/chunk-BCGKDNXU.js",
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
      "/web2/chunk-RU6LTM5N.js",
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
    'index.csr.html': {size: 6085, hash: 'ff3ec9947ad5e8bcc8c11be450618565dafdc877960c8eff30a9b14530204b0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1944, hash: '8b610b8a2e941aea12919931101f0862c978c5988a776f0839a7d4c81fd7729d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71924, hash: 'c2d5c7b7f92c06efc5947db369518636342c45e5411b92f84d14ea25d4afa33c', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72925, hash: 'd4dc8c90c10d52efdfa88d585262d250c9072b0793303b10eb2d82f3bcfa0fe1', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106082, hash: 'dac51b13066212d293e4cf21d7d72b59507ad39a69f6f100a1328f6f49715505', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67751, hash: '5f0c0318f37ec3712e3f3cf59e0627a39ec7894d336d32b719390cc74868b734', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67736, hash: 'aa6c2e1163653b4391f6aeafc089738bf6af99baed7c78beb23889a92146abdf', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 172457, hash: '69685fa5f8493c82124d8c075a750858a0f588f8eef712786ebbd61a8bc90953', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 61391, hash: '505266c7c84cfc14340c32ef5647be5b3017715bcc34d796c933ba203818cea4', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 73321, hash: 'fab22c14e604702cc93c992ac5a861c5b4fae9414be62620eceb3fdb8e462801', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75807, hash: '6244cc8d8b845a9bad81c5b676acca4ed215a0bdad37dc59cbe59a3e5ab7b43d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66956, hash: 'a2000683042ce9c44ca5b2cf60da735ba611a212805d8132603cbe355a502588', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174280, hash: 'e9710721672f36468e9f996252165caaaf7d84b225ce87daff0834ce25f60a7e', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67812, hash: '3061df31ebeb427a335692fde97f18a1096bd6e76e9f2db114afbacf25717d70', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 64965, hash: '2bcaa784b0bdb27f2c8b827d73ae91298d987a2e802d1737b635ebfac60b5511', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73764, hash: 'b81bcfe07dd77908a564093c938ce6853a32fd2bef6cde42e3268aa89164a971', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65177, hash: '1daf5c079dd887b08b401124197e3adc9f8ac749f02562375fadef9f0e7daf45', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118772, hash: 'd1049fcc1328abb3c7795f600b799cd42d863cac1753fa36b895d4ac535b9cac', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'styles-H4BYFVH6.css': {size: 354145, hash: 'QhofQFvAc7Y', text: () => import('./assets-chunks/styles-H4BYFVH6_css.mjs').then(m => m.default)}
  },
};
