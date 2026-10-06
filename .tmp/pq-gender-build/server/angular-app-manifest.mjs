
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
      "chunk-AWPLVUMZ.js",
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
    'eventos/index.html': {size: 57226, hash: '44e1c4b2282d6c5c56db97f961a34f91f5d5e6dd345398e87589881e13112061', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 385641, hash: '9a33e0b9b2bc467b55ff3f38e9d24841c7882ef6c08f2950ad382de80f1226b7', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 61033, hash: '29367f03a12604f2d4c87d61c8affbc3156bf57d023f82c38206cf0451bf006d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 59083, hash: 'c85c27e2b91abc067f4c5bbaa9e68d90796a58d665f9a07f9275c4f0089400de', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 49414, hash: '295051417fdc0cf8de82e2e1d21b588dc2bbea0db6172368a68024c8ae00fd27', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 53069, hash: 'f756f878bd4b63fb117751d7df095b814612f80cdd680610d3be90d27b3ec4f0', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 48873, hash: '06c2efe8d5ccd2092606c37eb36a2450b7bda89ef4a0c8d1f72ab87d0a3b060e', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 236358, hash: '8bf49174594369662025cb47e26f841695a8375a9e7e6e025c4829bf1697ea17', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 47973, hash: '87670480a4c7712a52cfae326ef7e6310837f8f2ca3111cebdf369e49c3c82b9', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 48034, hash: '6a9adfba82caf8b3781072cf3aaec12799d949622881af7cc8836f7c6e2872ae', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 55135, hash: '615aeb5929de7542a461020bbd04617cb16d69dd0fc745b57b048d71ac3a6d33', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 48857, hash: 'e0af08cbd42c5e276c7b62e3c686d9e114851ba6f1be37e718b790ba8bf99f8f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 49824, hash: 'bbd0d0bfa60ca15599db3a07e29c487c34825ad1c3dc06c139265d8c7f0612fe', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 56799, hash: '324051d636649e1058896268b2675733369e51465100cee92235604244e07740', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 49284, hash: '1417b30dbda3a971a22a7b2e129de086f38a5a63b9defed366250a4a835dbd2b', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 96971, hash: '33a4fc79c7ed79bdd13c554e6e452f6dc818a8fb2d6e82ad571e21e97ff0c928', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 48562, hash: 'a7963a014c484e4251943887671febd29025764cda624b8932574173c8b7f660', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 57083, hash: 'f1841542dd2b8b6c41d47bbde1f76b6eacc2e6e39d9aeb05a1d22f98d7f7c60b', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 49676, hash: '9c67a8dd7beb144df647173942313296437b03fbb8eca54a415d21b501447cac', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 48695, hash: '977aad9e8e41c57b8b0d844e82632dc0895f66e9cb1904af5df5467cd84c5604', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 231010, hash: 'cd5d95039146e61f3ed852fc4f99c6d32890c5aa4dcf0b654fa61d38410f6f53', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 152262, hash: 'b1c33cdffe0544490bf1d4bc5c595546ae61214d256019c1c8867fdfd0858ee2', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 48395, hash: '90fdbd05c6171a9205b14053027f395ece42a039858547a977058dc281e50bd3', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 47366, hash: '48d18be98090a7848872a96d087d0ad0b25518dc244f483a49bb8eec0cc9cd41', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 56112, hash: '8e669ea581a7908886805a8d8cc6619baf52ee28596dac67653908b2f0256215', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 157443, hash: '92aef7e1065a4457d37b998ff07e53ffa0c4e30d06a08a1dd091b4548e4567fb', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)}
  },
};
