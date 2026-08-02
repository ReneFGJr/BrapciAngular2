
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
      "chunk-UH5RDSF5.js",
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
    'index.csr.html': {size: 6002, hash: '4ed9dd39ab5115c80ec29caa8c74ed40b437e618f779d3625c5f0d7088dc0aa7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'c4b5d992e306cffd2025fdbf99186ecbb5609a47dc001cb38e50629cabbcdce0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: '56767a38ca3eaee154e5b635aaf5118711b86e69cc7a20c6660f5f99dc40d999', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '4152e01d7c36be6937eb81a1e88d478269ac77cb746fb56c9f8ff75e6c429b13', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: 'a1a4fde6a2fcd2fb197a466f6cad9bbcca1db9242bfabac8648cdda2d8369934', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: '970195c2e00bcfe3d9e9c7bf8237d5d8528f3bba6b8ef07dc7e5a8eb1b5f723a', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: 'fe1f2de999a432401e2464e27bb3d7a515d5d561f12ab48829aa58453a054b4d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '7be9cbd5ea2e86c03663b3ba1d3f8a871327a3244f8402cae45476abacfd8498', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '3dedf0df941426f2db4bdcc7be2729e6e98f940e88a668b128e6db035c681a4f', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: 'f8d3fed3f6fa153246b202bc3d70ba595084343ca7fc4be4e4ef0400f419dbff', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'd0aca5ba90df717f2ddf36db917aa70edc384eb48e9dab649436b449f32fd932', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '7cc2e7f15730cfc72c4f742f0ad2bd6331c92b20c2642a256e3a52ff2b03bc2a', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: 'fdafb2a450fc47c03843e21a6624dd585f7be3b726bf53cfd5f443dcc4d60413', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119722, hash: '69edec49b7bf4a16f2ab0a694ef0853d50f544cb8185247f63e8dee60bc641ac', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68696, hash: '8ca53d4c6e92e896c2d06f341bc25db7538139fb1eaabae694fa87f46d7c3138', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '79bdf49355d765bc635f6c224bbe46dba583987c7c218afd03e1499ae72787c1', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'a350f5e5da0a0f69006adb09753f01a5face4d0071e08fdf6ec068d73006f9ea', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: '67d9bed58dedd5d62517eb0607a4d20112583054bb160f3b17dc0ed28c6706a8', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
