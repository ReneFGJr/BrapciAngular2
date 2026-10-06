
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
      "chunk-2POLGI2G.js",
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
    'livros/submit/index.html': {size: 61033, hash: '29367f03a12604f2d4c87d61c8affbc3156bf57d023f82c38206cf0451bf006d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 57226, hash: '44e1c4b2282d6c5c56db97f961a34f91f5d5e6dd345398e87589881e13112061', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 59090, hash: 'ce7f78bdf3398233534022dba93f63f0041cb19a124897de5af6d9ef5835d1f2', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 49415, hash: '8ba660fedc9ca0725f48528d2392602ba258a3378fe68d2f198165ed57dfc627', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 308901, hash: '8847d92b155703c20ab313a19bb3b593ebea06b85982e1c32b3fe2abe0272edf', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 48873, hash: '06c2efe8d5ccd2092606c37eb36a2450b7bda89ef4a0c8d1f72ab87d0a3b060e', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 53069, hash: '943000cc7ecce382c9d07c42e2927bd090524640cbbce4544b1f38a24c4b5cd6', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 48034, hash: 'e759bf81f3f69118211d85b857ba007e9d95e879d0c472fbf5ca9e13ae620d9d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 385641, hash: '9a33e0b9b2bc467b55ff3f38e9d24841c7882ef6c08f2950ad382de80f1226b7', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 47972, hash: '86dc0c3590c0a6913758c151d036100aec68dcecd2ec49f9b210fbde82d77274', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 55136, hash: '9131e5fd5594bb5159477b812bc7cc4fd37e134783acf8f57fae04d944def60a', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 49824, hash: '371df8ad34d63024898274adc668dc4432f9b5b483d7eaa9dbda498e4a4da904', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 48858, hash: '99da15eb8cb04517b0bf49add14bd5a567e88b3ed86ce2a91f385cf0b961abed', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 49276, hash: '6471bc89ccc48587c457d472b78313db4eb1588bc1af1ef57b40b32d989869f9', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 48562, hash: '18b11714a13337098b2ed20a3e6800cb71dad9f9fcbd9a280127623e8a0fb07c', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 56799, hash: '44f0a4e85744a8b7166261d5d61419c4d46f6199def51b17e71abef871a4ce1c', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 57084, hash: '03563b3eaa8dbfeb29df24903b16a5d6b2d4121c6e82f43cde71f8dabc2ea33e', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 49676, hash: 'f3ac5cc587905303e4002a97a5b941e03596cdc3e4ae4a343712385a0e275da9', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 96978, hash: '7ed8a6688211554d82a0c853a4a24c06015a38b9694c9662d1fd59080e972490', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 48687, hash: 'c15e0e3de9c0dd1b7b2b2f785f24de05ff315f56131be8d81d21b7e958309d08', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 47365, hash: '4e5873a1030fdf4e3a665a073a06763ebc86f2a1fbf06f6a04e3ebf47f3b79f5', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 48387, hash: '975ac5e6d21eefb87e4c2500cab7c7584842542fa511204650e59a9e9d913117', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 56111, hash: '143b40757411e1437fc393966181c698f2ef3b9698fed4df6dec73d743ce4ddf', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 231011, hash: '2e053564e1e532e343629c424877679bdfdce59f4fb994da92057a30b3fbb3c4', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 157451, hash: '8cdf62be57798860f62fc871544f8f02a834890e161b1d09b2f1a33abfdc0924', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 152261, hash: 'c618a34e30497c4ada2614e9f597b43737651e3125532d4c5981018ea6bfa47b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)}
  },
};
