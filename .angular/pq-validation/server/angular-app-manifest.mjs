
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y3NWLGKV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K276RYVV.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-XKVFCGEW.js",
      "chunk-UZ4PZVMZ.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-67SAA7T2.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-US3AWUYV.js",
      "chunk-7AT7SWTB.js",
      "chunk-NRHQYV2G.js",
      "chunk-6R3NEF53.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GWWTIJ6G.js"
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
      "chunk-DR5PL74S.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5ZIRNZH.js",
      "chunk-6R3NEF53.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3CXYGDJA.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7EDVJRES.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PCDOE67J.js",
      "chunk-NRHQYV2G.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-26WR4MEY.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WOK3GKR7.js",
      "chunk-6R3NEF53.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LLNUF6XS.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXW6R2SS.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFPTGESO.js",
      "chunk-R3FKZMDD.js",
      "chunk-7AT7SWTB.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PKFSTJRW.js",
      "chunk-UELXXSJM.js",
      "chunk-R3FKZMDD.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MKZXIJFO.js",
      "chunk-UELXXSJM.js",
      "chunk-R3FKZMDD.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-22ZETCKV.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKN7IN7Z.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UDOID36A.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JISUTEV4.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ETR56VTH.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E6UIDP67.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLEVRYGY.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6LLL64J.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBH3XB2X.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3Z672BML.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOFHP73F.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RKL2VOHZ.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGT7GWYV.js",
      "chunk-BU6M5KF3.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3EC7Y5QK.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XPA2PL3Y.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2052, hash: 'a70307dc826c7647fbf856a45fab53c94ed17d65986aee1f3e1f7eb54b3e8fac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2592, hash: '216dc91f0b6a9827612087fdfed4a781ba638aae53eea1f49b91d865b664dd5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 47436, hash: '453b54db3245b92fa3facd069275ef5b7bbd90adee36df3ad1a1b6e3b4f769a6', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45333, hash: 'abdc9e3e7592ddc3a4e99470edf781859238b86646b062244e56637fb1357725', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 385641, hash: '9a33e0b9b2bc467b55ff3f38e9d24841c7882ef6c08f2950ad382de80f1226b7', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 61033, hash: '29367f03a12604f2d4c87d61c8affbc3156bf57d023f82c38206cf0451bf006d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 59082, hash: 'bec5bd91b5ffb50c2a7dd89f3dd2d4d551eb876ecafac5ca710c47048613b5ee', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 49422, hash: '5a3c3e8bafa5b0ec91cffbf412d232d7912336dd8b8a9ec7adda899b572a1390', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 48880, hash: 'ecd3dfa5dd539880bc78f4c7502358c8fd844393854e71c2dd5959bdb37a4622', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 53061, hash: 'b282500cdae03c51a9a9f10f99f288b5ea1bb48048a0426c8353a32a01315837', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 57226, hash: '44e1c4b2282d6c5c56db97f961a34f91f5d5e6dd345398e87589881e13112061', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 294526, hash: '291e34139cddca32da13fd3f95c33b178e5bcf2ad51180b4bd1b9ce99bb4c2d0', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 47974, hash: '7070f36696bb5e0f71706b697b5c86e4cfd2616b3da0f0ac21498091a0246626', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 48042, hash: '70029a97bd1989059e1bcd322f1e61b601b9cd2c2bd2ed1a810d89974e0595d1', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 48858, hash: '2d4d78c41eb64b3edaa637920dcdb36b933b48a11732665cb067198317adaef8', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 55135, hash: '4d6715394338354fcfa88e4b11f48ab2c0208a9c6dd5aae3c308a44ebcb3c129', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 49824, hash: 'd5f7a62845baf082d43c657333b85c4ea002234e0cd99082fb4f1819786db7f7', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 56799, hash: '3c1a5b61ebc14392821882731e4d36f89e35b4c18c6922b033cfe935a495277e', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 49277, hash: '2446ec24f197447150c658befbdf31c75139f2a361c30e06b210c9f60f5b3b8d', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 48562, hash: '3113476c5c796991ae3d7146dae513c94bf47732cff3954fae582bb57de8917c', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 57082, hash: '4e38b873eda4afc7c2613559148781c652bd5dda25cfe4d9f1793914479c42d3', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 96970, hash: '172f8eb7b52ab035263b87e0b6ae521644f751481a08628c34212cc435c55666', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 231018, hash: '0b735bc3a10726e09dc79a90dc1f9cc0101421cb0ccb5afb66c18d65d7cd3828', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 152261, hash: '7204f46fca3bc9183e732b34c6781501435b7472645182b94f3513ed6ecabb6d', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 48687, hash: '36613e739664c44ec3ebb7e43b240724069139bd8a5dfcdff03344588e074ee5', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 49674, hash: '26289581fda7568ab7ab10b698c1cde05f106aa4a8e41f458f42ef2f0d6e0c78', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 48387, hash: 'fae1c7b9a82917a4901b1d56eef3b353a5f2b61be4b62721760b6b8e590571db', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 47365, hash: 'f7d790feef358652dda4adb5361288a6a05b51e8b3fef4b87fc608a04969a840', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 56112, hash: '20866539cfb72b6fe19e30f880ed97c29321f6a45be6affc75600efbf39540ef', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 157443, hash: '8e2566cbd4b0443b4a654660dcd4a886c5c5d299ab6ed1990b6d5a556d74838a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)}
  },
};
