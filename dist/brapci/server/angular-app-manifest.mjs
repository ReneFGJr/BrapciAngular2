
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-FQ6AKDJC.js",
      "chunk-NNGL4PBR.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SPBHGTHA.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-J5RGGB43.js",
      "chunk-L74R3MCY.js",
      "chunk-RTEKAKYA.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
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
      "chunk-7W6W2RAJ.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OBK23K5V.js",
      "chunk-RTEKAKYA.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XQGCL4DK.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BESL6OED.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLXSXAQW.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2PQJMZDH.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AQTU534W.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-37L2MNMC.js",
      "chunk-L74R3MCY.js",
      "chunk-NNGL4PBR.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KI4AMDC5.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K2ERZWOK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-REYXOFCK.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TFLHJMWG.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ZIWLBLX.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4P3FSIJ.js",
      "chunk-FHVEX3MJ.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VBYF3AQX.js",
      "chunk-NNGL4PBR.js"
    ],
    "route": "/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '42cd92aab688c67fe4830d5c9775171c9de4f35e46ced5cc7022aa16bed6cc62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '4cb75eb7fc3a5c8797978140f6d2b3e120990f0ec893e6f9573b3309b8944e73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'fca70041276f2b94633fae9e39bf3e80624c610f0086dc09f4190ed5b4b51ed1', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '8b814742926063029e2156da0869e07188311132bee83045a203e4eb33951a53', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '4ba075601ea84769077aaddd35186294db90893cec9069a1c1263b0f01f4815c', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: '75c549dfd3e2f012d29d97b7cc27cc67d9bcddbf8169c5e37ccebbe5ed0e7216', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '2378d059299c1c12894a2a4597844f39cfe7577217018f9c38c1d619e28a42c6', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: 'e30d0907ebf639d89a574e3295b85b82ef2e62c0bb09aaffb43027ffb02e5f97', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '3c6dde0d250b37c7c74e41cc1389492a1731e756624ed5845af7a002a76a9983', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'c5ac7a00c5524f2cd69c3b148415b606d9d164c7aaa091ae6a0aee3ab80774f0', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: '0c165cd9da3d7f298739ff80e2733a48f40ebdb4073178c1ee5c14bb3a1b9307', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77319, hash: '4ef904b48f527b90643bbd07be987830fd915237f8eafe2ab4a73ddd19e5448e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: 'f497b77aba707e2d54fcbb80afd7d2444e78c978c26e1dbffab04b2e6770f9ef', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: '365a0c39128529f1d366d2ce87c66213b8943cf8df01f1ee244fe014c5aeccb2', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: '8dd1ef37a41f91bf80c6e845d79e65d01e9a932d8a317d1909298a1188778160', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68705, hash: 'bc9a7d0f9ca02d150393f830e805a2dd58621fa5db903b01c225e2c82ef58686', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '642cdff4ad54dcf7bf1856a600f75191a30a174d1d8e318ca15e0b433397f6aa', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'd5b3983b4ebe5fee2e94090941b69881c35e2978c1fa6ce34bf6c60fadce4e69', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
