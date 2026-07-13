
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
    'index.csr.html': {size: 6085, hash: '0dfc60d52c87edf99bdd77301cc76183810177c1107561f1db6aa39fd9f64145', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1944, hash: 'fc0b0ce9b1816c6d0005349987299e47ff84c921f972e39ac8454b13b021ecc7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71924, hash: '876dd1512762c6374d50c94643b19b3d8fe14f841ffd600c216b26a07e4c5e2d', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106082, hash: '84a9c5d78933cae489ba1ba270645f2bac2bfbda46fd92e9260d5444c44314c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72925, hash: 'fbda1061c0da973e8cc41838c4c618724b7c595b39cc6734e02bd07717f64810', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67760, hash: '11a1af3732647f3ae6b1980c9e203480c7e4ccb2ee28779f27546cf106c75238', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 61391, hash: 'ab32264c9f089858e9c0f9330d16d11af72be54d467c4898b8e4e6df21c3756d', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67727, hash: 'ef30b76af377b9b2af5c2fd68abad4cc3ffc53a74432fc8a796a29153264507d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 73321, hash: '565b3c7c267b6e246ffd0f13c40f2e3275f44a2e5b2a5fd284ba66a2e70a7ae9', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75816, hash: 'd74911ac4973bb17589f88863c9d6d33cd66b14b619969db79fbe3860ab74fb3', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118772, hash: 'a17b3a6e544bfa8ac15662edbab353a0657962743b780f5551bb4ef8772a08da', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66956, hash: '4f25bae14a45c0736d1d5b31c49a38c03d95d4de74cc568ae1197afbf1a63a5f', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67812, hash: '292ccde9610d8ec8ff1c5bdce1c5fa82897f15de0cac045a0d35a0665f3d9240', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73773, hash: '4d5319e0d27fb811e1422233acc2fde459384bf6eac5371a5ffbd52b505c9ded', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 72800, hash: '809ee10d04464ad1084f639b20784a3bbddd4c2a725314d7eb102e6b59dc70f5', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65177, hash: 'cfb58049d1e01c3cb1ea1be987d6c7cdc6161be73c7e340eacb25a5e87e95ea1', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 172457, hash: 'ed2101294e3c2bb54f17623799ed70fcdbee3215395be9391ede1398c76fff2d', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174280, hash: 'd0b3a416d4829ad8278426c8250e31b9366e1fa27b1a804bb98487dbc4f2a5d7', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-SERCVHBM.css': {size: 354145, hash: '7gOFu39G0ks', text: () => import('./assets-chunks/styles-SERCVHBM_css.mjs').then(m => m.default)}
  },
};
