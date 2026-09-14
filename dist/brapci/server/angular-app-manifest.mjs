
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5HWXTZHG.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NIGFGBFT.js",
      "chunk-Z4MNR52Q.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQQQJZFI.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KITSOHS2.js",
      "chunk-36F5EEYL.js",
      "chunk-UYJP47CO.js",
      "chunk-OZM737ES.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ZTQ7XUWL.js",
      "chunk-ABF7DMVI.js"
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
      "chunk-PGQEPKLZ.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YXSSTR.js",
      "chunk-OZM737ES.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CO6T7SGY.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZDSLM7YA.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O4RJB2MX.js",
      "chunk-UYJP47CO.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7BU7UUDD.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4ZFU2MUY.js",
      "chunk-OZM737ES.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NUFCTH6F.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A3TH3GCK.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I6KRRRDD.js",
      "chunk-36F5EEYL.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6MJVJHHM.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5EUI5LB.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3M33EPC.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LAPSLXRT.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UOMKIPL2.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCYTACE4.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HFOZUXSI.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSADYCF7.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V44WEAYP.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5U7J5NZ.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6SQFCQFD.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WBZ7QJCO.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AEZM3DYJ.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4QIHG44A.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GWXZ2F7I.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G4XECAWQ.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '688c6ea6995fe059e8eee04c6468714519b3ee8300b1a79c020bcdcd4bf9168f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'ba7eff5c8d632303e0d8d879be99af999a790ea65faafc7228fd4cae1a297b7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 85297, hash: 'ad7a0f39afbd0eddefd455be9517c3da5a147bea5cc1796527d902603adc90a1', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 255988, hash: '936446f6c65b476cac1dc197cde7a912acfcd3f70bdb481938acabb641e50e6b', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 138573, hash: '9aa8ea220e3fdbcad805a7618a3c1d305d0d222d02a912ccab73a8f9df6641bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 181297, hash: '1a8fdb91f73e37f88cc9ebba20d76284688eb748900626338b1134efd7d8b5fd', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 85173, hash: 'c2ed2a8dce8122249ece16c1a39af888b1a6d6076940806670837e7893817471', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 132322, hash: '3b14b10b862270f980fa3d2d2db72b8a75405477a87321e874701efc388b0845', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 85217, hash: '849e50cdcbc405aef8165a6d474278fee1ee08df711cae093eec34995657f8e5', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 90724, hash: '89bb561a39e7e3b88a070ca29d62e4774578e7a8dec6dcdc69361b18f7e37f30', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 83484, hash: 'ed98e8731f0fdc7bbb2e36070589f3b7e27b20dc9e6c0ab09b683876c909b156', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 80852, hash: '21f592a80235731065960fb676d097471331415685c74dc3c6c64a19c42c8128', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 83602, hash: '43aea48c9538536ce9e169d7d695a712ef5118440b52c4c07acf9d8e31608e0b', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 90483, hash: '54ee4949e523452901e9180b31b2b6a836faf1b182bae500992e2aa3bf71f3ca', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 77414, hash: '71c2cb34ca257ef0f14d14f0313ff9a1c97e08980cfd3100dc9dc45c9e5fd58f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 86479, hash: 'de62efbf2025508e36c1e6c2f6dba96a4fbe31a84dc9b6abccead2d58a73b252', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 84797, hash: '6b1146cfb7584cc7bd7f77bdf2f2cec2e3c286b723eee177b2a520127993d45f', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 85230, hash: '916dedbac01ca1d7eb5f456388232375d9b105b0e56b1d9234a2ed9db014cdd6', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 91100, hash: '28cd9aaf22a8bb3385803a4e73e6f09f0e87e26d63080e30477076cb94adcea3', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 259407, hash: '510cde99d77494f0aa95f38fc1a23a5c07fd86e89a2827ae5a5b70c9c337131d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 80225, hash: '33a43789fb3a31d36e7ebd3569d8137622e201c2f9ea3977f647e32ff09ff431', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 85322, hash: '1ded8b1746c4537b7c4f64a44f38bd93ae241669c2155ba5ce09b78c93c268d5', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 88425, hash: '80ad995d03b528ea4573376264833d3f68531ab8250bc0b9918faa05265d00fd', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 80875, hash: '4fbc7eda7eb1e0c0036c49c62bc256f5adabeef033dab312b7cf33fa21f5461a', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 75729, hash: '88845c2dcd6ef2335b3c09694cea7abef9d7727b5909315afd50b611b7d29572', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 85201, hash: '7aa332198fd161ad3acc9b87a551fbe053d0f8fa4b4bafca5c371ea0e95db306', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 156068, hash: '6558ebedda25957e852c255212ffe46020a0de5f58f68ad3405f9a04a43d2f7e', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 79198, hash: '977feb627ca615451bda09d3dd6248624c74d785c883223b9c19fe019c462875', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184777, hash: 'f20da898c9e620f991e6b369d2d798b015595734510d1f017e7107bfc193dd51', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
