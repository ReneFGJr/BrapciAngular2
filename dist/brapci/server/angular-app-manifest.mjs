
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
      "chunk-VL7QVEIL.js",
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
    'index.csr.html': {size: 6002, hash: '339c01efe161c63b789734e8aef25b96c06d3c4760bef0998635091cc7a6932c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '2ca4f8c1d5f02945c945300170eaa2453db427506447c321311353b4dc86870e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74603, hash: 'd98a19d4975a1857952dfd4cd1927c7f87785ebf21dc019752ccb826a04d7c56', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108696, hash: 'aa9f76bea39dbb32bb268f69f2e0f3e47bd9c4f7bb2bb25b0b9a286c1829df37', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 245622, hash: '83618a64a4b1f68aaaec83dc6f819c344bad5e3a54c07ac4bcd9d8488fd33165', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173946, hash: '62f07f928b6531eec72ea8b741dad18b3a4150a5e05c639e9f26a0b51c5d7cf2', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120369, hash: '8853fb3e8dfe67d01104a4826393ac7dfce71d792f22327d013c00bede8ea61b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74479, hash: '24e8b59dce22df6b598e44eeafa330d42b96e250f137f28f607cdb2b6971b65c', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74514, hash: '8e781cd212a5383cf3700b5257bc71422d2f7e02c9906a832813107f4cce9f21', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69531, hash: '55c7398cbda19baa342305e395bd8463e6377145c91727deeba5b52e33ba5790', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69294, hash: '305b59771c0168f0eb4956e6e64465c42a37eee6c9508b87c45d5d7c4d4f3501', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68504, hash: '3dcc8da1a7e9c89d2d0bd0fe4bade3e3601923cf280aac1283ecf37ed4a0eae7', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62945, hash: 'def0d46c7152ab60bfe3d97a4ef89640458b2ca12d734bddd04788202c4ea5fe', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77731, hash: '8d3af5530066b4f6198fc99ce601614a736185a573a66302ab893e669caec6e0', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72790, hash: '2a20ff2d7e2dafda214e69e45853ce403933720a615096501420adb599797941', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66720, hash: 'a694eb5d9cb36c26d752f9074a593d4e4941165cceb06aac3db0222342e3aa2a', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72908, hash: 'b99aaf10c7e1fa7c2ff65dd6bcbe1794d2c593069546f60e70262f746ddabfff', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145374, hash: '13cf7473107a6d057415383463b3777784ba28e26a522520530b497148fc263e', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175773, hash: '573ab58984cf3fe85e41a07f847674ffb09138c8506437d592ba2e7e4ea4044c', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74343, hash: '69fb12c8f9073e5eee2c53efb659f038ca184bb18ea63d54b7195bdaec56304f', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69711, hash: 'e44b75215f23861f0b033193b5fb4ef134cbd78da36e2bfbf915b5e84a20c393', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79789, hash: '53210487fd317e901491959beacfe87a780316f4d5680bbd3ec64fcc0bd06291', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77960, hash: '3a04d6ed2b617559e961c413d1fac0d32bf52f5ae73ea3ce8854d95ecba60caa', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 192528, hash: 'b023d89953e1fb4aa90706423f7aad6f194cb17a4d62cd0b87f0e8624678f0eb', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
