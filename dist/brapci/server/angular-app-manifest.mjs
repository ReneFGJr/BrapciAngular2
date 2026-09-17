
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-QGBZABQJ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N44IPXH2.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ZYOJRVDR.js",
      "chunk-JWO4DPO5.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HPBUNKS4.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GMO2LASC.js",
      "chunk-GKGS4G4I.js",
      "chunk-UYJP47CO.js",
      "chunk-WIAYG2HZ.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DEMTEGJJ.js",
      "chunk-DTUOTARO.js"
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
      "chunk-5BAPUL6G.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U67G7CTO.js",
      "chunk-WIAYG2HZ.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7DEYSE5X.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GWGHOFVP.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TW7V3D5E.js",
      "chunk-UYJP47CO.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NTY5AQWX.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RIBKF4BO.js",
      "chunk-WIAYG2HZ.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJ64KYKY.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O7LSIYSD.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PWGST6Z2.js",
      "chunk-GKGS4G4I.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UR5ILDA2.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UBS5O3FQ.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M56TGKYX.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4UIVADS2.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUMM52SV.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NS7QZRN3.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NLK7NQ7O.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S65KOGIH.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YFAIIW4M.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7ASY7W5.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VSYAOPWA.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOTQDV2D.js",
      "chunk-YOQA6HUU.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XFG65BFJ.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TCULY22O.js",
      "chunk-YOQA6HUU.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AN4VO73G.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RXX5D7BI.js",
      "chunk-DTUOTARO.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6158, hash: '2015b52eca830cd81e72d61d21ff24c05a81e9eb572738b59a23fd6abc69d15d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2023, hash: '7c3519b99a93b16cb57682e86ad1b67736c371da0fec0b72c591ed321905f3ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 77995, hash: 'bc0c37803b8f07a88a9850d1b35f9c303eaa7e7c0cbecf827bae690e223e9bed', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 72526, hash: '33c1aadc6b77c730bd5b13b2b6ba9638f67730e0c36fa0165241bf0b55214068', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 88567, hash: '18e359c8af51e4170fe21fcb60cd19107430d2a2eef696a162e808deabd038e7', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 85179, hash: 'ec8a8f4d5765bfa459ab76a8a651a63d874e0e940ffa6eaff0bd021b4a925314', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 156210, hash: 'a0a3072b774b275007bc77c99b8b8dc45144a8ebcbe5dc213fd4de33ffe7e9b0', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 91251, hash: 'c388964d739dd0dfc1f160848b870fab1aaa5b05e0e048d8b8c5dfacfaf4ee7d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 256226, hash: '808f3d6a97c3dd8b91dd9ac0ac72c2b8430512e045672fe9eb4a783ccf63c687', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 85334, hash: '3d29ef987e7e10c1d54cbd621782b40e2a66300799852d67d8233dcbacaf9834', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 85373, hash: '8a28cbe0fc68dcb0608ca323b3ebdc156c0af553335cfb0c6f8b17f4cc717a92', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 81026, hash: '6c7505ab18bef2879be5b75a1387e5ce5970549931916f92d70cc933d75c6548', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 80368, hash: '2f08fcd97221ad23cb23b12485d8a52cd4b5d718e5e846709893cac20103be92', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 79340, hash: '9fe7b6ec54169c407669c5fe17ae3ca0936fb099d34d491d4c2710d19872eebe', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 85449, hash: '89e78ff00acbcceee5c2eada0431cf631e8b809f43af4d333c0f2f04e7410cc5', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 77557, hash: 'e4612f7018ea7ff8b47db326bcb4459fa3675b52187cb97ff3dadbbfb1ebce25', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 85465, hash: '5e3cf94e47a1e72a71f84b7384d46cafbe0b601f42906175cb10742a68181f85', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 85351, hash: '7cc2ba55f4ecb60ef936ff0bda280d2af395b10ec21d8d72c477bc734b772a83', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 90867, hash: 'f6af520907e1e3f80fb1f1ab8b8b30d5fa8fbbdb04b678eb3fec82de4eefb936', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 132473, hash: '49b5de47fe76c53633d0d41ec489493eb7e76cc50e7a07e03f17202b0fd8edd2', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 83736, hash: 'd783cdfe610a0429e6005949b11f0d7b56ca0dc39b3be5e4bc4584331e10cf3f', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 86622, hash: 'e29c630b65900f5397445c1c13ab9a13146d2b813c52cfbf03550e1f166f90fb', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 85316, hash: '17f109ed63dce30c6bf916c2525bd7117d731a173f04cfde808dd56374c74205', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 261175, hash: '5438025205476a40b86130fa89ee97353ed098102b1e559742e4f96250ecdc5c', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 184720, hash: '58f86045215d5cf425a6d940af4b85e5945bed4b75ec5adaff29a98fc7d3bcf9', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 75872, hash: 'e707a92db846513943e0ab41f9b2bbbc52f50bf3da11c072199663c2224ac48c', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 80995, hash: 'c13a186eb3a38d62efc0a93c2889ec4a08c70c803bfe2e5534f2e5516eb8c360', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 83626, hash: 'f1fc9dada02cc19dfa8afa933befaa2cffc87801f82ed69d3359a1187c36a600', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 90626, hash: '81d38e2e21abd4b56aa9b5cd23402f04519f1472f768a13deea3fcb35b0eb95c', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 186563, hash: 'b7b7bde075c68ec9ef8e7c279eb0038098134628ced6c3c33b95cbcbfaa8c52b', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
