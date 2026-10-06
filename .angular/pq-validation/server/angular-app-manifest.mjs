
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
      "chunk-FKG6HFVT.js",
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
    'doc/index.html': {size: 385641, hash: '9a33e0b9b2bc467b55ff3f38e9d24841c7882ef6c08f2950ad382de80f1226b7', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 59090, hash: 'ce7f78bdf3398233534022dba93f63f0041cb19a124897de5af6d9ef5835d1f2', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 53069, hash: '943000cc7ecce382c9d07c42e2927bd090524640cbbce4544b1f38a24c4b5cd6', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 57226, hash: '44e1c4b2282d6c5c56db97f961a34f91f5d5e6dd345398e87589881e13112061', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 49414, hash: '295051417fdc0cf8de82e2e1d21b588dc2bbea0db6172368a68024c8ae00fd27', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 48035, hash: '4f8def92eac97029b6d25b6146dfc5bf98eec8bc9eb47096f270f5ff1250bc2e', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 48880, hash: 'ecd3dfa5dd539880bc78f4c7502358c8fd844393854e71c2dd5959bdb37a4622', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 47974, hash: 'fe3de0fedcbce48d285d7ae032f04813b273c0036b89356dc037c5b1a3a7a3e6', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 48858, hash: '89381d25021fd9f4da63c7ec6a9fb22f0f8cf0d6a871fa33b27b04a61359c31d', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 49832, hash: '98752061d600532ec18302fc16ad29540e48438658bc869f47aeb073f780821b', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 294238, hash: '9977b64e2ec62998ecb9fc8c905a5872d970b45ff9f1d2ee6ef584cfdbf34f7c', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 55135, hash: '4d6715394338354fcfa88e4b11f48ab2c0208a9c6dd5aae3c308a44ebcb3c129', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 49276, hash: '9a185514794e9bca92be7701e8f5f656a3ee91722cbd4a73f9470208981ac250', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 56800, hash: '31eb35e0aa0f8af9f9895a36f8d3453b761a93bdd2547fc02add7e814151f6e2', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 48562, hash: '963ccab5c4c524f342958449ab3e127a6422be87e807b457f5d9803281404530', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 57082, hash: '172aedab82e396e9b6c6a17eb8dbc7e99888d07f8c108c8d793d2e7291856a73', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 96978, hash: 'ab67c3d41e1f54c58c1c042d480b1efb3ce4619d8bc651aaa8e548067408fd84', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 49674, hash: '48664475f3172fb041fbadaf519f2e7ed9ea3b0ea103aa708f9d367adb8ea8d6', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 48695, hash: '977aad9e8e41c57b8b0d844e82632dc0895f66e9cb1904af5df5467cd84c5604', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 47364, hash: '2c8e223fbf87ab94cca5a2f52664fb72fc69e70a5c121ba53f3968e659ad1bf4', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 48395, hash: '412cc84da7866f19e96831b816a5703ee5af031a8eb3c370c8ecc8fe63a1071a', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 231010, hash: '6c24545a72c791c701cc79d4bd5531bd2e9264e1b4b35ae0a167332e18fcab15', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 56119, hash: '7f742ace4159c1e27b658273dab74f51cff9cfe34c6dcc6462acf580d8a1e413', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 152261, hash: 'd9a5a74214880f38993593e34a3f6a2563170cc6761230655d5b1609f3c61433', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 157444, hash: '6c7c56d2137065a97a9090a650aabf2ee7e793e09f1af188a62741a51092a313', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)}
  },
};
