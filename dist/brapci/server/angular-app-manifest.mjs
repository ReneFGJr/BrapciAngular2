
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
      "chunk-OMKBCFT7.js",
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
    'index.csr.html': {size: 6002, hash: '2cddf5a6984570c156dd97ee293c95c055fd0853b863e9cd2d39ad26d6d5c243', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '0bea294c9f71fb1ac50cce45da049d323f11c4361c22804bf3e321092287cf4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74702, hash: '65e91f58cbb22be5ac8cad7e72b88675ff0eda0fcfd770a32f84645e5865d7f6', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108795, hash: 'd7caa9345bfd186a27ccd002b1e8cc6241e10c76375991503ac86c3f5c0e655a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74578, hash: '03663dd4b18434c3a7a1ab71503dece27dd4d72d37d3f9b9d201aca1488c2d19', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 245336, hash: '6ba102ee815197ebaef7b511d0d6510ca8c0cd920ac1b9695b3aa20484b9f58c', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120468, hash: '4710214cd033ea49955e1873b024f94b2c989114c39ac7317bd42f3e1adbe935', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74622, hash: '96f056e49dab2be06cf67afec6e51c103da2900bc5edcb7de3b2b13617db19ab', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 174045, hash: 'd9de2ede5d207bfbbaf12470564532ff858dc50a8d4316a2cbe2998ec5d8016d', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69393, hash: '69b96c0f0a77a53cc652397bf4367296a6e20b8d47184698f7dc8d40fc5cb1fd', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69630, hash: '44106ed683ac9c4a820885a3d4bb075fb37e79830f2d2ff5856e46f944265f21', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68603, hash: '0ed6261cf1f604c4a4027baff657fb459c6ee07d3829a2834644c6fc5dbbca77', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 63044, hash: '5e4b16bbe1fbc596008a0882a7937deccbff6d93e9641a52c03913d590c688e6', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77830, hash: '540e8e0d7c25cbdca82023dc1929b0b47a74434c6d3abe53e41264491fe5ae01', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72889, hash: 'dffaf80ae3c9dc97c0444fd54c7ef08bd28ebc4432865ea935dbe42198117395', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 73007, hash: 'a1cd2ce963678ed646fab980af5b0f260453539f5de9b21d4705cce38b1f2816', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145473, hash: 'ed83efae84beef448b74f8ac42fdec8abc3c418896c08ba39e5c35ecd1861365', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175872, hash: '35660e8afb581cf354ec3c7b2f2822ebc5edc1a1bc4b72f17803546e507947fa', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66819, hash: '0dc1f67772c71b27d49e83e4f8359cfe56b0659ce3f53978163da79286e75fee', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74451, hash: '14722b615847862dcebefdf693d8a67d94a374c6e5c5d6c82f16d1bb279fc835', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69801, hash: '7702e194b9feca5837af05838664389464e385665553b9e7a3b4e829ca25dfe8', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79888, hash: '41ed6dd934faf7c75fa3aba43aec7015047edc6784fe4787d60b57c2f909eec4', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 78068, hash: '2c8b4dadb7ff19cdd27eff91f465d05e0c5b88027632700f248ef50f7c679652', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 192627, hash: '27a62ddc1d6d8a185a4f59fc7ca48fa9dc8a14023a106bc355cbb8211595488d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
