
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-64CRT5RY.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RFIRDMY6.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-QXAIWKGG.js",
      "chunk-R4UZNDKT.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CVTH4F.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D3KU6GUW.js",
      "chunk-3UMVKPLE.js",
      "chunk-UYJP47CO.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6UU3NOPF.js"
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
      "chunk-6MYGVJ4M.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UKQ6Y62D.js",
      "chunk-V4GPSLXE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XRJVJQUD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXN3AJPL.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJUSGAGO.js",
      "chunk-UYJP47CO.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XIS35Y5D.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZK4GPS6O.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7JJWFFY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUCQRWQQ.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XNQ4IX56.js",
      "chunk-VZWU7G4X.js",
      "chunk-3UMVKPLE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDZDTVCO.js",
      "chunk-4YVL3FRT.js",
      "chunk-VZWU7G4X.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VEWULQX5.js",
      "chunk-4YVL3FRT.js",
      "chunk-VZWU7G4X.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7GEND6AF.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GI6V5BNZ.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WFBI74A6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJEHL5LB.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWGLJTWG.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4DQ4MT6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIDLT2VD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3VRFOY6U.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IG35GLEY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3BHYE7E.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZMQEN7T5.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVZVNEAC.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VA3UEW7V.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMCNNNFR.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZQN7BCQN.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6520, hash: '7771f81e3dab62cb8c72f0d70675ce38ad52847f5c96fb1659c4d1aaf17d1652', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: '134b7ab39943f3ac70c6959acbfbc85a419ea9bcd0881aa8ab79f4eccdd16b18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79893, hash: 'd2a4cb8790d88d5e63eab0e86ed06b73c4d543d486abf08d2e79700d6cfbf625', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 74425, hash: 'ed1770d877245ee6f16caba29e49a683abff9baf25c8b26cf812f067d4879430', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95538, hash: 'effa45c7daeb8782339d7fbb0d695ddcd025e5a5ecf2d19858897c0311de38e7', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93150, hash: '8a8f0a6110a7c53107e8b505efd8da5eb35146a0f2516f885fb3ff84805ef479', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87242, hash: '0e9759549595fa9b84dd33de1e8bb3d7f7ce3a48e32a6424c166ed089afdd3d7', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87280, hash: 'ecdb6378221f2c2c68b6c4c88ef2ab2bcd08ef994f3581e5605f9b7066a17a88', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82925, hash: 'd3042439be383f8dc77a0d45a369258a9a44f3c50c58ee506d7d1322192b568d', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82275, hash: '5b5e6a4422fab5ef91208dc3f6fa6af2e4396bae3152c0679c6b4d7c429d5dd6', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409227, hash: '4e8df352bcb63bb10f3bfbf9e5a5a69e9304990a4c1c66f65c16fc045d455308', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87080, hash: 'e880b92e4a7428b4d51353faf326c3f5fd1a4d3b0c1af51f46e008c51e64d036', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81187, hash: 'c1c7916a156afd89912577764965fcd27cefa31427a01848176d85b9e306c646', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87289, hash: '9ae9d42bbebe12d96d056e93f6ebc6de7b7113f21375536c7003b5955dd46a81', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79455, hash: '29921fd3d449d3dfd0e01ae71b7336b5cf499e426cc12f88483bcd02adab31fb', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320534, hash: 'c28d366782e3bec2d8c59e9b7d136c4a3466d4d885d19d7c39ab3bba727a632f', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 87312, hash: '5dadef3c439edb4f1048571e6673360589ddc12cc705582c97fc9546f31c0e93', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87250, hash: '4b9dfde3b97da357708203501b8afb49578a9477944625c5303b61ab2d96c2ad', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92766, hash: '59692508fe7e3578bdae303c3840ba9b70957301ed19081b101ea0235ffa604c', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85635, hash: '12f624336c7dfa5f4702e62ad3714f9bd008b6ff45e92451123decc19412d819', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88469, hash: 'ee3310e7bc112487aa3e1cb9dba0767cf0e96d121e4e243ed0884d9e46b36886', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129157, hash: '418f21684e3e3ac048b995648fa47314fac27f2588d8cfde7e97d704e13dd51a', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263024, hash: 'dec4c98093e2c937f2ff380e335bfbeb72bb40410e185776512aa4db4d40613b', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 87215, hash: 'bd4446f3c632650532b0e3e945535aac1bb4c603a8f28d87801f3f8ff834f340', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77834, hash: 'fc330c6e5a995f8f20e4d4fe64e8c86db65f6132df7014a8db043b6438e5cdb4', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82902, hash: '39e1d83a4c22d87a97825b0f863b3daefabec83971df165031c6f4ce90a9ca20', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186559, hash: 'da2a6201fb51572724ec296c432d2ad7bd8419451a1254db685ef69e49fcf53b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85526, hash: 'a08e533e5c985e626a7e5765b5131a6900b7d8934b8b7b5de1b82701ee1a30c5', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92481, hash: '45f5d2a651b564399f79d232662574d651946c39bed726beedf5d2d6b548ae52', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188403, hash: '3f73624181f71944241c435072e50842b9bdcc380eda71effdda36440e3a6788', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
