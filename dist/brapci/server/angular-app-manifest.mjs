
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
      "chunk-PEYEQ3RK.js",
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
    'index.csr.html': {size: 6002, hash: 'ac4c5e35da54c1ef3c006c9f6384532dae673c03275344c9a4f85298e8787a8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '288ee87bd7365d2a287de95f684cddeba6ffb05cd3c4a9e605ecb2dfede4fb59', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'b8990ad30666df6cd13505cd27a552bfd28d40ebcaeb44f53fb22da832ab9bb3', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '3a4b203355aa5f476dd2b23999375ee0720ac19b4986b88961cd65f89f77da36', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '419e31562221ef438d49083c82bd29fca3fcac5a4a892703992b6b09a5cb645e', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: 'f9a3ff00f8c7c50f42f1b55a855ccce237ca52fe84c6445902fd23acfe1d81ca', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: 'e4a5e1a9dd995d6f5a98b28296caea2d3fc74b37eb24c76abd9ec25738d3426a', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '323e04441412688d55189da237181cf351946a4f3496cc00f914377f8434042e', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '5deec1afb350a046464e8761c037cdc499492cdb12034f9c2e5c67285152d4d6', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: '6d0442970a8338f0621974bcb9037ac9da3d5c398a79f0c6c819dc3ab0e153ca', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'fdd6cfed174a3c4294c47b2d6db0360464c5c9e858b83f6b71e7c3ab6e57bd43', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77319, hash: 'a2478164ab469578f27a381ccdaf6b544294baab63f46a95d3d7dbc17bdb9161', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: 'a13427f422c343488757f6682aafb8db5fcc4495f631994a86343ac0437a868d', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: '88a159796c301a6c43a2dc25ad90b1953f5dcc476a2f400f202fd8b92da7301b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68705, hash: 'dad507121ec6480542efcf8a2770f18e0a9b6c82425647bbc1fdfc6f369434da', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'cf7277fc597bdbdf42e305779a9b2b29c5b21aca19ba1439edee02b62e397360', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '2741e6ebe6ede139b54e9a64a52543d4273a527e96675bde1ff099b8b5b90fa5', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'ca9eb41d31df91a2b9bbbd8d95a909405aa4b7d950c9ed1af2287b665134f5cc', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
