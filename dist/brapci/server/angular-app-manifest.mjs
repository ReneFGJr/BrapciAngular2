
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
      "chunk-G6EY75NA.js",
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
    'index.csr.html': {size: 6002, hash: 'd31b99d9e2bbc932869aacf0f555b702cb4827e55879dd96e3a0b1d25ed34da0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'fee272141d9805658b057490fcbeefd794239ed77d5eadb81c126a28082c3291', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '5c788d1d6d61f5afd2b9ffc858392c90d0e1d93009736f6afd50ba27fb88e0a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: '63b493e4914c2ef4e95f77f36e668d99e10bae2a0f46cc9028216976d751aa23', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '3c66e0975c146411eca1ee615cba5b279cb0106c2a7ed521dc39ea2241636e82', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68629, hash: 'fc51d516d2fa1edf8899774332a14da5f96583efaef2b1807da401d221b6aff4', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68644, hash: '867a33581a7b489083b3d893b872a9ac6a7455127a9b161fea3f771196354d55', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: 'c26f5a6d17a2239a4486a55c4be615577fa8c14b0215fdf634b164a86d26785a', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '627ad77ef09c3f89158f223b77b9f21d5e4ed00605b93730ae2ef0219003581e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: '4ca66ac931dac033703ea252a1acc03e6989353cbcfa356aed9999cf2d4f68bd', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: '401eb5df7b327af48744419b5e90a528f6a8ad33ec8f2eaa54239e72a4e256c1', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77319, hash: '863e6039831300af03463ad5917f467e24723ef6759e692356b0ea2f24aa20f2', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '3d3cbcb474f543da00dd7b0c7f7d86a49d5e915580f0b7e74fb3d785dbd82404', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: 'c11d39678187c1c87aa69e0be84dc1a22db5dd264eb172114c21881f041b7b3c', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: '23ddaacdd011c62c3ef48d8feff1464cee99f20d304f9d230e6db8d9035e08e9', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68705, hash: 'f851bdc45ca85a0ba051f1ace26f0aae21a37a2f5ab146c26b9cd37662a02773', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'c4baf26acfa3c8e1c08db284e23bb3c851bc1eb53922ebec9b719db94963ba16', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '6eda47f819cddfb16cbab45c8ef771997c8b5799609e8d6753fb80011a6fd7c0', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
