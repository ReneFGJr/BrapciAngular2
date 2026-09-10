
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIIJHDWB.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DSHNUOID.js",
      "chunk-P5SI2X4M.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6JZBSFU7.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OONEJAVV.js",
      "chunk-ZOLKZICN.js",
      "chunk-NRHQYV2G.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MJYY3H4T.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/admin/a/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sobre/about/brapci",
    "route": "/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTRHUTKO.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OOQJAT4F.js",
      "chunk-CBHFFT5K.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZASZIJGK.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MWOEFZRK.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GFAN2J7J.js",
      "chunk-NRHQYV2G.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZRBMZK7K.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RP22TRT4.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YLN7CXWV.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBZPPUNW.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AO4BXGJJ.js",
      "chunk-ZOLKZICN.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3X3COKJU.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KDAA56G3.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZVKOGWK3.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LOXM6ZSS.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V6A5QWSE.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RC4L4BT2.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDUEXUHT.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMBCTILH.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZWPY54L.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UNLLMAGX.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2PARAGKJ.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4BCLVWWH.js",
      "chunk-RFP7KIPN.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VRC54PAE.js",
      "chunk-PKO3PFF3.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: '5b4f1c52c07e1fce36f2d77114dbdad59a6deee83b8332fd36f1e0be53917995', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: '3eaa4c5001486921344cd3d01754fd9e6b534dff0d86ce3e875a6d3888e9dbfb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 43728, hash: 'f58deda8539631807a88e269e614fd21f95e9a877d749e4c39b3e92a0ba8b197', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 86843, hash: 'bed36d39a903e44e8f25fd1526512c9794fa54a46129a7b85d136e601c6eef6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 222854, hash: '8d0b4c015d83677b74c94cf9655eae373a509065f26f2b393445d7805cd12669', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 95590, hash: '8a73274c1ccc29ee936249ab21221b4ff59de54472eabbe9e4c7b7c6edf2c58d', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 43129, hash: 'd2dd866a31b229674f33867ea669da76e65b9f40b065cbe969fc4d5619789e80', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 43529, hash: 'da697e79c12d4c310325f079959087fa4626b1b142aa34be3b4d054281d0a4d2', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 42240, hash: 'e0785862f6e7fe5222af2acb8224053f716f08437f1dd3296680d44893910062', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 42540, hash: '9e8eec5c56f995c6f8f342274fe61243c00d372e7c35545c02b2e96ba1a88c46', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 50016, hash: '0ce8579a441f9c51b0160860b537e6d02c80f38f3382e7110187b996f9e98877', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 40852, hash: 'a941dce683d0a189b67f5e74f533fe25761707c5d306e9684e5dee65bca75d95', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 42424, hash: 'f00268716507b085ac380a90c6d843626d81469054d361a72a2fbefcaf61dd51', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 146164, hash: '61fd04f8a8cdd6397a4fb4f56a72aeabb10fbdd48a699f81d95c645b6df7eb23', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 51689, hash: '6296b44cb3f002129dbb508f67a08e4008b464364750348033d91968917f7bea', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 43267, hash: '6332e4cf4d7d267353affdc6496430d57894ec4fda7c84ad25c171b467ec971a', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 41896, hash: '619f82c3b1884d91ed704834bb17f953b83a3e75e597962781edcf1bfb16bd92', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 49042, hash: 'b0bfe4e8b94d6a3dbef0edb69bd4e519b0a7b334e263c4854c6c33633e14ea8c', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 151348, hash: '3a80b346740b1de2884830151b397f81ab79d06650c554d09f4036438fa9be63', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 115405, hash: '9eecfe08b710a4cd24775f0062c5c6d600fcae31b8d44d9d296dd395e8089cda', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 41879, hash: '71f35d8373a793f9570e3a64f5e4d3efd03e6689cd41cf0856aa6a5e734761fc', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 50170, hash: 'a316d3e61a65f44ae681888448f1d71c5fdeca855bf29b6c5f000037d1a5ee19', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 51078, hash: '1d5adce833740d2eb72386a5d3164cb76e5e6380cde45e126b557dc33fbcda50', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 41798, hash: '175eb829684b7310e2b56bb1940d69450a750bfc731573de9172bdb7b7dd9d84', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 42711, hash: 'a79ee1385ea7a2478af9860bba2df5bc9e5defb635d800ef484826cda594768a', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 224924, hash: 'c168467ea6072f5fe96ce8c0bc5b883950d76c5ee8f5f62acd8a1b51f2d2c72d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)}
  },
};
