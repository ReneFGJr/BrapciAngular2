
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
      "chunk-M6NWISDB.js",
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
    'index.csr.html': {size: 6002, hash: 'b9fe8fbaff31724294934022f22592ddcab35fbbdc3fc4bab2528857591f68d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '9eaff87d88955f0509698874bcdfe205311e9e4825dea2f91b962037f10b43b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'f196bdadb685a8eb438fe2e4710b6c2d389b2c3eaf5a8d6f4614dc6dd83d8403', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '4c93f631f76857ff67db9e33081e1558258e20f7c0ab20f245e2516ba7102fb4', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: 'a6b8e24512535e5487f671d1ae25d266d77d98b66c7f16a1b8d343cd37a65c77', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68644, hash: 'fb66e0e64252862362932828d56209cbb29051bb59ab9cbab143413ba1d1a078', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68629, hash: 'c0f33d2ba40ceb7b783b7ec0d07aa5d2f7894ff9d6fa07b95248ccc7b2911195', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: 'ad7497c9fdb9581adbfb145562c612423dcc13eb27765219f543dc1d892e0dab', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '4b7246c344b12f1c115aad74772c07624723b7ef374e56d2217b9a53b1601575', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74214, hash: '37a0e26ab4be0f2297e81d3afa5666791be4b3bfe61d45c96b99a3657449de32', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'a42e5f5f4d0e7e138b6052cbd3f4ee598f949aefeb1bddfd8caa34dc04b4b3d7', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: '9c53242678c93d43bc0a068b8e3afa51601849ebe83be81997e5ef87fbc931d7', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: 'd2a4b0a8fe026cbe26084c030ad3fe0e1d4395640e43d223d3bdfd480843006a', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: '5041e366d43755731230d1f77a950c3e5a5e09dba7b54a35c9a0793042ea8e27', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: '8f27edd8dd126ff186b55ffedd3981f4e80dcd174bb33a68cc0fcedf34c68e76', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68696, hash: '0a615d7c1c3026badd567dd47fac332103f2e5f2fcecf7d48d6a0b5592db1c9c', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74656, hash: '83081989e5f8d9db099c510b24708e0b4fe0e74758fd7f20a600bae6cc13f523', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'c741701b436b414a1144e97d4fa591bc65795484284f952598b50e776c40d4a9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
