
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVDRPNBO.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W5E7CONC.js",
      "chunk-GL77MZ2Z.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X6DSZAES.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JOU7PQIM.js",
      "chunk-OX6OLN2L.js",
      "chunk-NRHQYV2G.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-YIOA7C67.js",
      "chunk-VVA3KYIX.js"
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
      "chunk-ETFZAHN5.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMTJDMWL.js",
      "chunk-CBHFFT5K.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6CJCD6XE.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJKG5YBK.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OUY27BGZ.js",
      "chunk-NRHQYV2G.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QSOCRNWD.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QBV37IRS.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTTOSY6Z.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
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
      "chunk-KD6RSOZ3.js",
      "chunk-OX6OLN2L.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2HJV52PM.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X62ZVZYK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YVDH3N7Q.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH36IBH4.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RGLB2NB2.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LV3KJWAI.js",
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
      "chunk-CS4D4RT6.js",
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
      "chunk-2T3WDRFK.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFYNJP6B.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MPRREHVL.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NYHRHSHR.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: 'b2875e15d6190442d64c40aa42670f5a4d5630f2ea5724415d3a81057be01307', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: '27200e76c8368a5827bdd0ec1a77724e2443cbce838b0b1556ec0a55ceae315e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 43668, hash: '4851c3be26047674c7fa0a15683d7df91ca8d725d65c49c511f460e20f17b545', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 85680, hash: 'f8ef408f7336fb8b357d8f4a65e14ff6a16a735ebfa94908b3f6d793a90d4312', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 43469, hash: '15ee292d46ff9a807c4a166cf8d1aaf01dd932fd5a692b3020242b6217815304', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 95531, hash: '8c8e45fbf7cb2c4f01aef43a6455b7d7d9be467bad899e2f1edd3ee85355544d', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 43078, hash: '6bfbacbaa0f034d88ef330a1931a2d0badf8ba96327cf5dc4519ef80ea98c04e', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 222794, hash: '6ded413538b7406c022317464ea290011d763c529377fb22c2cf4b0ad7a90d63', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 42180, hash: '689fd389f20c189eb6f9d3e168fbc8941cd90c48b49adb7901af969cf1215f1b', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 42489, hash: '856dbaab94775b0a4f05680ba740860987e84f689e9647c452175963e81da70f', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 49956, hash: '5dd51c95f45cf2111eb1740aa6780fb273668c2fa7ef475d5543e5e17818cfb3', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 42355, hash: 'fdb2390df17e3421df1d7dafdc1dc4411f01c2c663b901849d11ac16989888f8', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 40792, hash: 'f824b2c893f3db687e6781ab2aeebe6893e64c77533a58c5e70c54312a5d309c', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 115345, hash: '3f5cb6e3be4a399b5e96de870b255aa4fd73630f43a3f44e955fa78f64e914d7', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 43207, hash: 'd5331b919fc1bfc2bde987f783a4296f34b5386275dc0b25ba22d265e096c4c8', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 51629, hash: 'b3597fcbfdec8566d5a72f984b21afb144b96f5534c608225d1520c6c00b7ac5', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 146177, hash: '2ca82cf30de3fd15d47175da269c012fdcd527c3cfc04ef337f457b43d9a3d0a', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 41827, hash: '5f541a0ee9a530e6356d0f31f9177335c0a166e0b75d84604822bd41b1f422bc', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 48982, hash: '704c8c70f1ea66592c7e2959b4939e1e7d349c4d4eb8b57ad8bd0b5810664d1c', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 50110, hash: 'ef4e5ea6ac4aec392200985e7c5675c646119aed744674b9c93daab782b944ad', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 41819, hash: 'd05ece87e70ea56026da22cd86235cb057ac4b0df184e479d84d30929110cbd0', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 151343, hash: '32ada97c8a13ef9d0c36adb0fbb99fb3f7ca763492e32773e59512054b93509a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 42651, hash: '8208cd5783c5e99427f9c5deb67339a8fa609c987e1a35c239652376b4d2dc15', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 41738, hash: '78b10a58c5fdb2b55c7b79df2516d135a07279c7dac22ac652a02c2c04803f60', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 224892, hash: 'be9c4e8f89ae811e8983c9e2d7d442ff4b1804935b8cb702a2c2b8eb6be8cd2a', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 51018, hash: 'fd622c547c8c8dfe502b59e46fe05cfb3da0a0b4a9410d3102ca75f5b67eb8b8', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)}
  },
};
