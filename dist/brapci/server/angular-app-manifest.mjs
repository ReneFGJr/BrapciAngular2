
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
      "chunk-4N2E2AJF.js",
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
    'index.csr.html': {size: 6002, hash: 'b669fb24864a2ae60d43471ac3ea1721a0547f6b2bc26c43c774718187b2bc57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '37f96ab3e40f374cbb436b2c810d583d2972e71abf4be5d25d7d83253ec47284', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '02aa1a282e95db4200497c17aa3e5a0b15e4776011bd546f918083fbe02f3d26', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: '169a9dcf0c7af738ef4938bf5ee7c8783850dab42245dade494bcea9f090f39f', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '14e28d0dfe063697fb43e30b164ae1d8a29dea593698ffbad59ae44c62d3544a', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68644, hash: 'e2e2110d2fb0d97958ae15daf3f2c55bfb43859c750f064246f1841feb8c88d8', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68629, hash: 'ac9dd7cb477dc1fa4078d59da08e5e4c2f8d681768d19021662c104f1aebc063', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: 'feb3ebdf8e827ae93a4b11361afd9476e17d6e29d3f3b2ed75c8c94195de7377', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: 'f2a705b2be57e4873cbe573b3a66516d2f33d16f6803f2e2a0a51e267b2c1a5b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: '70042099e8c9c12147a6d88edbf62e4f5ab65e6f16c7b1ddda6002dbe1298bd8', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74214, hash: 'cbcfd4b0014949ae7a7bd300f21998ba13fc4c38a4ce0d9bdbc18b4f24d2929b', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: '82279fed8f52e29db548382165cd15749e3eaa18a31e87ed544b731a3996f3c2', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '5cdfe1fd2da35b83730ef002f3a08593d6c42d5c54fceeb1c40db39493325daf', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73702, hash: '532d8c07b4da65229e6439e8ca5416de28914bf3c0542a56882c37616fd0bba2', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68696, hash: 'de153915804c03dc8764b84ee2d9149dced9369a12db7820e9b49937c418ce3e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: 'cba263675801604f6e4b8fe6171bed7c0abbf1fb43ebbe84da2d97b19239edeb', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '5fc79c7157da1e98b58f52e018a7425af4f7b085d67b6509f68af1a51caefa9b', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: '7cf36a1b3cf79a337b26b8e004bc1f53e2929b03c99a6398feb57c348400164b', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
