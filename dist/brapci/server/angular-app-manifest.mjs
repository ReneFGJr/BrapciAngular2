
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
      "chunk-T6BLCDQW.js",
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
      "chunk-N22QA3WC.js",
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
    'index.csr.html': {size: 6158, hash: '05eb4d6b23ec23a0281cbb8b32a9796539f192e614c1f4a20cf872cc0e9ad0a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2023, hash: 'aed47250e86beb8119de0900809b3d1fc9834a0a3d2f48adf36d6cd19ec182c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74066, hash: '30a58e9b59bcca0cdcc5114b424df9a68e4690385c1439a1b87c3314c1021914', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79534, hash: '682ab5fd35d139af6efd977bff76ba349284d4c0522427bb7e9ac14415e68ffc', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 257768, hash: '4a407ef2121413c1ba25ccd4bac67d04467e496146e4d744797727dc21ff981d', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95172, hash: '4ce90718cff70e537e90dc43d3af79109dd02442b0a110ec333a4976aaf58d19', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 86728, hash: '1daeb0bd89d99d84e11c27ff1794061f7a146311ab6809265bc1b62cb3d418f0', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 92783, hash: '7561c51454bf7c231cd0dcb324857b0c35c3e3c483363f23b7dfb5d8f880c6ab', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 86876, hash: '8697b79a3b108cac338dedb9223262fb20c0e331d79da80812853fc025e37a61', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 86921, hash: 'ac3fe841a402ad6decb745d5a05d76c886f9a4d3aca37550e2cbd728f8602941', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82558, hash: '1c8dbc9c7ffdb8ed2c404d81f3cd8caff23483269a6adb05a979a4c75a45db5d', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 81909, hash: 'ffb651321328babd5b4ffd00912484a737b4f33d9fd01f48279d3d89b3883845', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 80828, hash: 'e31595c6405621ad75b0533568df6873a9ec2301054127f545678afd22070a2a', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 86930, hash: 'bc513236dff4083d5e7d899447f7e7f24b5be52f3db4037b9328cddd913a65d1', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 86953, hash: '379ac9e68f2b5a366d382548f6c77ec188f88e58cc92ad34259392cb0ce2c561', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79096, hash: '4f1e61933fc3cfeee158eb238a32220ca234060e4d64b19a07af17ef2f60e77f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 86899, hash: '4db4f8d7b3a27282a7f1939997ecedf7ac837633120459d8329106746d7a6360', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128790, hash: '57149ff9fed06fba475d3ba695c30f7fa0bd2a2e73780da53a6bc0d5dc82a785', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 342124, hash: 'bef03e357729df6156a5c334a7fde98fe9704a85bb64c85a31b466bfce858b00', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92415, hash: '2775c90260e5ada76c0d7fc95541c40545e077c7af24f2dbf3d5addef83c7971', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85276, hash: '008fc200463f39c93c68c70638e006c3af6453a546c852a13badc4890b9da66d', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88110, hash: '8012ad130e3bf010d7eb7921869af57be78b014e984289c3464370c03f485593', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 86856, hash: '9f3905700429153f2e0dc95c82c258ba6c0f158124a2c4ae9184e8553a218dde', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186208, hash: '166ac4d60e8284607a1326414f297579e7622d79dd40e890cc9d18a3c7c91e36', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82535, hash: '09c25acd3887407858d3d97b8fd52d7211565f1739a8128f3d407133f6d6cf9a', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77477, hash: '86b01dd2add5421a3e4f84844bf30f07a30fbd88da5e5efb3bc10ec91cc3fdb7', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85175, hash: '26a639097803837883fb6757b7b4459d1fe7ba1c0e955c59170e838eb70055bb', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92114, hash: 'f158978126e8812a4bb91eca9eff45eee46a4100d91502460fe4ccc55b543df8', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 262665, hash: '5f8e0e7fdd22e9a4f195965be502d067fc5090eb81f97d9c6cb3ca1175de4d4a', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188043, hash: 'd9a07eab4bc3f2130c591d16c28d9db521310fb05d2792fde13c2e8178359e7d', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-BNHEROQY.css': {size: 357134, hash: 'sbtIG176LKw', text: () => import('./assets-chunks/styles-BNHEROQY_css.mjs').then(m => m.default)}
  },
};
