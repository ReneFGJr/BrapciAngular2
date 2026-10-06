
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
      "chunk-YZFBH2VI.js",
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
    'index.csr.html': {size: 6520, hash: '8f89fd377ce85900659a84995e6e31f8e2cc31f6cd5102c4d015214998d0590e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'afeb016a5cae24711382c71db75cf7f28d60f09c703677d81363482a5c2c378a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74425, hash: '7acdc8070b247beff0ed0069beae0fd91cde6402aad1d5760aa7926042cac284', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79893, hash: '2ba40491e7ca9851d496564a44003ff98807ad93000f809d064a6bed1ff89d88', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 265327, hash: '2b1b25dbd4602d036c79f4c818a850433178940ac51d3a27885352825c1dc160', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95531, hash: '84bef66670ad471baff6388d86426921118ef1ca6b3da0db3db569aaa94ba636', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87087, hash: 'ca8c0913dfb3fc3b60494b5f2da8935431295625b710a6f32ee364be8c339e1d', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87235, hash: 'c2ab1cf6b82b83f4f20ca82b4a34c39dc1aaec2bee4d669cb18365dda1b3fae4', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93142, hash: '58462591803229a94d6608d470d21291fd3ad958dd712f309ce05cd86674d0b9', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87280, hash: '0cb00cbb60c93d1ddee5502b18522005aacab0b8cf779eeac8ec321b5e7510c0', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82918, hash: '1a3c77f7f7a3cca98988247a71e40e83615589967a29464f9b731fdcb3794ef2', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82267, hash: '27605d65553569b94e472093f735835b2ca1b884b8bbb625c39f22f7a0311f38', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81187, hash: '930c4397e7e881d9d02201dfc650b16b773411bda5565b9cd2683075ff1d0562', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 87310, hash: '8df1e141bbc8578037622276ab300c7b01a4ce72742898808d048b08be1b1531', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87288, hash: '47593cfb1024621b731cddf2a28961486567595e608acbbdfd9ad3b6b34806bd', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79455, hash: '86b8f014d249001227f3d1dd0adda541ef4a352065b381a0471542102f73c1f5', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87258, hash: 'ab6f57687c8726953243e5ec96498a9c63a061bf138ba6f91edc44d4f145005f', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129149, hash: '4eddee69cda808527a3a2f7290819af97f64fcb718bf551e4955d1e52e7de48e', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263024, hash: '8477e1edc0291b1895c83c93ef30fddb58a404de620ac9c2cc1a24743373c66b', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92774, hash: '071c97b201494a611877c4f91c4446e6353ced47919fda4475b1793cb4666785', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409227, hash: 'a553d8737acbdb000b71c71d93189d17198f36b094a453b17ca614369eada1f5', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85635, hash: 'a9007812f95a54e5d63fe1c3b3db3496f1471cee54b274c413e687d83f5845d0', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88467, hash: '4b2290f144bff4e50ca388a7de764bc8229b97b8b547b6ef3557c4e5ad1650c3', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82894, hash: 'df103db6d5ed86d7f8104c2d21e1ec80e01d6029d01bf78c96bc68cca7708ca5', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186567, hash: 'f4522fef3466740d5aaca9140a2e3530edca6f439d9001465e8143bf15ffd2a4', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 87215, hash: 'c08c31ff799c813087d49982fcb8ee629dae61766e426352417de80a5c78e675', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77834, hash: '31adb1c3f0ef382bc101d473edd3c40477c12da0438a4b77b3f4a350c2be1205', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85526, hash: '84502f1e71f18964cbee4f53dbebf9f63ce4a6a964a62a577fcf6bf2133e9afe', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92473, hash: '8d899076ac9167db1f7495f4bb35178c77eb192503405bfd7992a35f75420fa8', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188410, hash: '260be4afc8e7593f90dfed244675480ceb909a07faf8b1c54e36b698fde7cc6a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
