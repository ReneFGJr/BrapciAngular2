
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-DNGNXUKI.js",
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
      "/web2/chunk-UYRDXOCB.js",
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
      "/web2/chunk-R2PJV7JZ.js",
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
    'index.csr.html': {size: 6085, hash: 'c85d42660c8ce20a2ca24f1a9d73f66279ed6c0b337df5a99008af8c83076da4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1944, hash: 'b6568619248c2dc8e3d00b22688a5a99842bd13bc57a2c842a90a348d7beeddd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 72982, hash: 'ab878695eecac0aac52ece545a3ff9217df5c4fa954689bb68b4548609b61ed9', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105992, hash: 'd2711586a812b2d88cbb13fd80c394cac0fb381199a91fedb1f14663f2f417a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73983, hash: '6ff39bdda5ccbaa6c257071ad2fab0596dc85ce95aeef8e39a168f69b30d16cf', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173473, hash: '118840e6d9b64e7f46ebad90613ae45d817341f193a87b911ca0ae082bf45f92', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68785, hash: '51e06d9d8fcf68e5aed066ec68ed71e56626300ff91b5444894dd9fc327b8aa2', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175296, hash: '1a78745ccf340607cfbd1be6a120d06d4602031c0858d7471c32d64547476356', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68818, hash: '87fbdcf0567ec973e7be9d6fd77a95e17f1c79c05d3dccc02de6a2419681ef01', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62449, hash: '975c10f396d776d8a9b1c5c841ed46677571172d918330899cb8cf881065621c', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77489, hash: '5f3696b0109b3beeee7c038924f5d43cebfad30364cf0942310722d1c3fd2916', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74370, hash: 'f4aa7d9beccd07399c9451b82c337453e7060fc1221f8ad48164468f99b87f94', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119895, hash: '43b11889ef4e89916d803cd55611104518552aff919bfc06b5d79bc4f040ba9c', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68014, hash: '0cb275e6bc1ad596745b925e3f1130b3f8ff9cc9c6f74ac525b6785bb5a6b05c', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73867, hash: 'aba5f9a68a4abae36c509a5d736767a2fc5a0a982caa8ad38a898fd53fc6b066', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68861, hash: '0c6392928d3bb7953dfbc430c5b3da157eed2c5b746fc10b85e56291fdf42802', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66235, hash: 'ec1aa11bb5d4006c3b53ca569e3135f229c35e08ee3f5b0ade19c703ad0090e3', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74822, hash: '9201d9d677365b150094f3ffe39424fa210dee4e52ab72b9eb060f73c5974391', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
