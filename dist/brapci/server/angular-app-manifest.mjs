
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
      "chunk-HTROBOBX.js",
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
      "chunk-67TNRB3X.js",
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
    'index.csr.html': {size: 6002, hash: '71c7826569b737fa27db894a2b08f3cef22082e2823f4fae0fb68969dcaebb77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'f6965507ab72ab40ec5dd4311cf05f29ba0343f4adec092d44217ac1a67b2516', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74702, hash: '1d1138e9d7516e5ee429a695de67d4d54e334e027f363c5d19536cf56ab955d8', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108795, hash: '5159a00ef04c4a0f695bb7353e2a841217b4037a4b1c4a823b60fd5898878c19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 245336, hash: '932635a2f5a4bbc7ccc19156de5a014b721932806588b5acc76c64ebdbb4b675', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74578, hash: '3bef15ca5fe9b86d412e426c9125bd17348b81bbf01b46d329b7b9766d2b7fa6', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120468, hash: '974fb013c5924c630861942e02898b4bf79f94e0b4c9551bdfe618a962d95a0c', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69402, hash: '76b9bc68e5da4a36e7e0171ee324cf745daa30d42841dc05c83e3696a440f818', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74613, hash: '0bac7c86e6aa77a07de26020980fd2fe3ee51c09e295ab5e565a1fae0696e91c', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 174045, hash: '4669b378a74e62b3b46ead2e687c50fb83b53d7716ccf57f72e33abb045ef648', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68603, hash: '0142640903ea119982b3a5ad9010bd4ba49f4f04801c901b9e1c93ee0b9430ed', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69630, hash: 'c7ca1bcfc9d2419821b9694005ca33a96c5ce9d8f8cb4c9a2ac712e2ce153bf9', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 63044, hash: 'd95f744e91a80a74c0484d2ce42014a0ea59190a9e4638a42ee86476c3e7501e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77821, hash: '4449ab2e536ef9e9d682daf7195254273d83841575bafd970822b918d1a58834', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72889, hash: '57f2f01ec904fccedf88c4a0e4a11d02b0960da97040c3e9c848d677d54187c4', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72998, hash: '7fe338c7cc74f99e15c69f14e097da3b143e33b64de5abd316058f18415ead3a', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175881, hash: '1904b2f597dbe2430281819020602bf97658d7bf18b1b00d124d3153683ba7e0', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145473, hash: '279bc5f0fa6e2eae11bba31b032a4fd9c456acc670f8797406d179e13098feb5', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66819, hash: '2d6e1c2f559aea450f32dc227ec2c1d0da5234bdae015cab95a2a11cb30d2696', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69810, hash: '2e96e0197417d6437ce63373dfcc35a0f9950909dff3ee5afda8a43e9bc3a161', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79888, hash: 'b2b94b7c30ddb8b120360fdc81ba7bd7c8ab9a4296540a808d0f1590fa8c6049', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74442, hash: '3630b6eb60d4d9127d6baf289cfbcb2da4176fc6d645b9251e3eb8981d96f90b', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 192627, hash: '026c9968300cae274d0718c94048b289eed6d4b41bd86b9d60bc9d62f76f232d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 78068, hash: '883fb08bc0887b989195d35411b3cb665a7aca9534eeff7d2ea7efad8daeaaf5', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
