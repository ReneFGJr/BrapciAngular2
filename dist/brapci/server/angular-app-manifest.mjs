
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GP7E5JC2.js",
      "chunk-SPW4FZDW.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2QQ5VS2V.js",
      "chunk-EP5O2E3E.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AS4IU2BO.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-635MIMJ4.js",
      "chunk-X7ZMGRHY.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js",
      "chunk-R7H2SVUI.js"
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
      "chunk-SARZLTIG.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RAG5IBSU.js",
      "chunk-R7H2SVUI.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6XXVJZA5.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A42AKJVD.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5V4VGKN.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-763SMARJ.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O2DHCIFI.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZY6TM2NT.js",
      "chunk-X7ZMGRHY.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TK2J7VN.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZWCMJUO4.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3KCFAEF.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXPG3OFL.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JDZ6TP77.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-75ZHYGL3.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZK264TW7.js",
      "chunk-SPW4FZDW.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RCDVLWKX.js",
      "chunk-SPW4FZDW.js",
      "chunk-TPMMW2PY.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1585, hash: '582afcf3d8662bf35643423f1f75dfdfb59abeea82e910645d4611429701adb7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2125, hash: '6d734dc389bf63491fcd8a77b501ae93b8faa00d8c3ac0bab892c976f1db0fa4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 76152, hash: 'e83a91b7b75a040c37d398ff6759aa84fc229f2dc4b6ad6d9017b89863366a70', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 36596, hash: 'da58bd3a79804eee01935956584d264385302d7d9c6c66a2e6abed59f470f277', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 34874, hash: 'b703d2e3efd06d907c6dd3e5d001738edf8211cc5f93bf7181d432ec9ded7fdc', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 34841, hash: 'c8d0e5b2d8d5af76a490f30a04da667bed555fe6998ce2ee51e9b35416139dce', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 36795, hash: 'f642f1a29ef33592e3a8a7767373593f1a0fb27a0bc63ebbc92e42c01ed80117', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 43092, hash: 'f432d5b26b646ed9bffc62a5080a6193ddb5ff65b04b18f658bc8a7ef0b49382', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 35778, hash: 'e32c1ca88ecd9437f25dbcd61fc51c2ab4908b38ac9db551df8bc5c07e7d39c1', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 44154, hash: '32ebb52bb76673dfb1949ea8fad3dc5695b3ceaf5a4a7ebb5873937dd2c23d29', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 34925, hash: '636d71948125ded210853059d2812e7edd5a0d7ba5d2018f66e242894d0c1833', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 44747, hash: '982c5dddcafab515215fb8af9447d81d0a93b8b60bd0dcf6e12e978f8d33346a', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 31839, hash: '40b6359337010072cca40523dcb9b32c9f6ee9f61740e6a9a6e7b18a40ddd130', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 34946, hash: '06517497bdb39964e1e887919520b0c6bc74707bda3492a8f1e3e45d8852f6d6', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 43246, hash: 'c22e17f6a223965a10c27a627cf2a5c00e0ecb25347b2bf73e7d79061dbc8b5e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 88754, hash: '97cfb801692c8d5eb9636edc1fa3e2729747f8bb7f58c2f32b244b0286aaaff2', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 108481, hash: '619a161ef6cc1d0d9ad771534fe2bfc794a6e4f281013a2696acd91cf8d66acc', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 139295, hash: 'b4fab36bb4e40cadb0838f2eaa58d64d74c86aa4850df29ce56b2f16363f3040', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 144452, hash: 'ea640d6a5be3df8fa4f6fb518fc430fe0d2abf0c09fea6d13404074d6218cf09', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)}
  },
};
