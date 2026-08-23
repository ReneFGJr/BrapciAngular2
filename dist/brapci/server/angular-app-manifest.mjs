
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJAWOC4Y.js",
      "chunk-JYTOWM4H.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5XVHTO23.js",
      "chunk-ERTAZDVW.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMZM6HJV.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TX64LR2E.js",
      "chunk-UYJP47CO.js",
      "chunk-XT4S7GN4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js",
      "chunk-ZNU7EEQI.js"
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
      "chunk-YBIQOYGD.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5EMEFILY.js",
      "chunk-ZNU7EEQI.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NOSDBKN7.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZCRQYDCL.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UKQDSWS3.js",
      "chunk-UYJP47CO.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OUDIQLU3.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FOCOXPJ4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js",
      "chunk-ZNU7EEQI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4RIZ4T4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OZSW63J7.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A2LJEGYV.js",
      "chunk-XT4S7GN4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FKDOOOBJ.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H37PPTB2.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QR2T4MXJ.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KLOGJRAS.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUPTRXKX.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBPSTPW7.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COSDY3FY.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBSJXGVZ.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFMKWUTI.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W5ANZY4N.js",
      "chunk-JYTOWM4H.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVE3A33R.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '213bf699d5852198000095bd5e38947c43a91e9d2758d1bf303705c0ae4010d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '91dcc15fb953f250e43b1b96d9bb0663eb1b228c2a38c29f01a7549278f9b263', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74603, hash: '60ce7a4eac3c8d93a896eeb74828524266790977fb82f59e29dda802f2e6a928', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108696, hash: '39a87d2636ae80e2ebb776ac3a11b02d64a12277d8bbf98d2daec1348307d58c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 245622, hash: '175326e18f76648d9acb204a6179a4194ff42466f9b2fecf12634bbfac09e1f4', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74479, hash: 'ce36253cea320fba54c6f720ca96a8904dba2d71426f8a2c69f58497b61be28d', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120369, hash: '275a5ef61096f4565b8542fa1fd6edea010c306e75d6e5e707d285ee400d3276', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173946, hash: '359cc583eb633b5e74810556bd5fae17388755f179586d904596f0b5777d3bcb', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74514, hash: 'a2565eeea3f8cb20fe48234e693688fdbb81db3c3dc443e924010ed2253afa76', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69303, hash: '6681f42825eae8a53811ab015343c73f42421f88d6e21e0b6fded95725dd2c89', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69531, hash: '6c839a2cd74daaf9db7e314be1d26c679f80b2fa5ec08c100e834e400846620d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68504, hash: '369d3a0f40b5baf2e36952978b321c12c6d27c69b4439d5b2238551d00c602a9', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62945, hash: 'd47cec199efa542d5d17c999eb88c0c0d5b2e01b72a7a9162b4be0486697b196', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77722, hash: 'a276069342a8cd3c318deb6301d90f7488ee40ed162654d23c2a6c785ac0ebcb', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72790, hash: 'f9866a404b57f10c4d382c895083c5144bb219293fa75afac297f92d0552d4c4', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72899, hash: 'b94ac3d43a82311e34e356cd853669936761369b20c62c198106b818c5e858cf', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145383, hash: '320f9359b7681717fac962133f71c590407fc1454711240f3d15ef3de846cd76', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66720, hash: 'a7ec1ea10cd279c4a9c32887165485c9460e32958b11ea738cfd1c510cca89e7', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69711, hash: 'ddda2684c904104964315d8b820658848e0d85483eb938cba64e04c150e9f41b', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74343, hash: 'e28ee53606fbc905691b202feab8e2b7b5904b42e7e1a0aa05983c4a12cc3341', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 192528, hash: '468af23f8ff2983eb6a7d494911ed660ae881117cbbb76069d2c1b238ece7b33', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79798, hash: '37010b89bcc43202907957be6fc287a639e3b08d2db56b48af8bb5951b1f3ef2', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77960, hash: '499b1534650bfe4293fba4e2148e3a2cc2debe56c0604c086e5944d8bdd713c1', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175773, hash: 'bf892c079d8a27e7885883d91a46430feed9b55c0dbeb86d39dbb94e488525ed', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
