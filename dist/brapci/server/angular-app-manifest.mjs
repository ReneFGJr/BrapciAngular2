
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
    'index.csr.html': {size: 6104, hash: '0c5eb1daa8234938e3a2056475eb1e9e11d1e7258f6e5b0cc6159ae4a2b4ace4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1969, hash: '7db03238d752d78a10b583f67357cce3d1bf7c3c42845a289576a6522634d4b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72506, hash: '0e159608dd41680cb6d1386383de2a0c7955b7bb7bc497ae65d5b97e16b8576d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 77985, hash: '01c93ce62290c30f985f107ad6eedf2d5cfe8a64ca4b56780dfce18f8abb81e1', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 88538, hash: '84c90e993df95b7a907f9ecdccb10a52a27ac27c540ba9f6a4af890f5da882a2', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 156190, hash: '1f59634602ae9462ad9f374f2c96d5a10f6f5e05af8e9fc73cce8c0cebc56e6b', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 85168, hash: 'c2fbeacb9a15f84e58b0f3a117012f9b7367e2d5e65c24a5c7ed75ef4b279994', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 256206, hash: '04882e488ba0a59b6c36b738ed08aac36cf9dc72e7dc90e40922d5fc304e9062', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 91222, hash: '61311661ad9858fb3eb5280e5286773f0b7c21324e3d80d05139ea22fa5b3059', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 80998, hash: 'b5010e05cb7182d649e7301f63c027603d215a8046f5e7383d9f9f69645c6211', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 85361, hash: '1a13fbbb76fff3762ac6b03bf391debf00948fc8265e2c068747b946f7afe36d', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 85315, hash: '48f807d100e63630f942561d6361ee42342aa5a0b8061c077bdbca67c145a0de', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 80347, hash: '3073e6554671aed27d9440cc37fd9478d73ce49390bcb0de5f1167c6b116c3ac', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 85421, hash: 'f8c3f6380e0a881fd930728cc40e99e30cb177e41bf1da0de12cf56c18444cbb', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 79321, hash: '3f2a09263acc2943054d8d67f829b8f1452e787a8081ad3b5128868cb91889a6', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 85444, hash: '12803d0cb6d76e93a675fd2aec95ac040a15b2349005962a66eaa9c0d02e535f', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 77536, hash: '9f9664744a288d2ffc65699eb7fd862e723084255a1d2001467a61791948abfd', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 85339, hash: 'bccf8bec6b9d6d89da25f4a6cc82fb6e453052926fa1fcc1cd012c25d1a0ae61', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 132445, hash: 'd7f2254134697b92600714aebbec5e7e2c523f30ff3643d5f56fb0fe7cb5bebf', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 90846, hash: '3dea2ca0d6d4f9968a284c07e5ad67e06c7e318aafdaf20e614bd7dd93b395b3', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 261156, hash: 'e0c4e919086b4063a8c4fff74806b459fa77539881294a7423ec37024a4157d8', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 83724, hash: 'd0b61f7ee38a3320cddf4b884caa462bbb2bc5157b2efc6123b502730c28158c', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 86602, hash: 'e2f324ae3cf372586f35da7d39b6d9d29f9c26bedd8d279e817d2966e149eec7', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 85296, hash: 'fefd0044418befde5dee192a9c6a108f3661c5038988d74f2cb5908765f5274c', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 80983, hash: 'badb0d6f08fcda63afdc2434b86985cb18166edb73cc24b9a407e6a3a33bd123', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 184691, hash: 'df91fc3456bf72c09276a1cc463e44711e3fa9496a42b7ae0af2e7828f1a12b1', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 75852, hash: '38fdaa532f52eee83aa9718bd09719d2b15a1e8b333649f6a08b6c9e939a4d12', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 83607, hash: '432b52fb4fe843648054bc6dedf9fddf554ce6ba8786e90326e7d7e6ea8d6620', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 90605, hash: 'c2fb96fe286acd11b7c438dff221ae093291e50514d74fa9b04e12152f8ea2f5', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 186543, hash: 'adf676bc3f169e15f71543ae1a2ba64003bdb89b6878d240651c35a9bcc0bafb', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
