
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BLZZG7BE.js",
      "chunk-I3Q2WKSF.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UPEH3TXN.js",
      "chunk-7VNOIBBP.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXBMPQ4E.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JROSXSJO.js",
      "chunk-GN4ZEOVP.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js",
      "chunk-5DAPT7BD.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sobre/about/brapci",
    "route": "/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWCGJRDS.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GNWGJ3LX.js",
      "chunk-5DAPT7BD.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DXPJQWLQ.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IKPXX67G.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IOGPMRAL.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AXCMKHOJ.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S43T3LAC.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XV4GLEDI.js",
      "chunk-GN4ZEOVP.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPBKIUCQ.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VMFQD7BL.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5IH3HTTZ.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXLELL2H.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGIIOK5X.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TU4JWXYL.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T3GJSJ63.js",
      "chunk-I3Q2WKSF.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EHCUC6TR.js",
      "chunk-I3Q2WKSF.js",
      "chunk-LTOQCP6Z.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: 'eb6c6f6c205bcc46c36d4926234b9f234910198f0ddf514d717a7e8602fbe0d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: '6455cb0e7dce6475f27da49001ea1c84ec2215f55e4f79d4117e122ac01cf40a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 36744, hash: '615a6677948abb09ab87dabb23414ab6da9ad59ed7f043af3a4f8699c13ac89c', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 36545, hash: 'ba23ac03a0291c8abd7518f4dd507a7478b576a9556077263073f9c16089c385', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 76101, hash: 'c3f12dffcafe5a7bb9419df265ad1d137284dd865487a4a7b7817e5ef5dd24f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 34814, hash: '2033250dc569d9990940cf1343b750163d6eedbf5a85ee10f39cb6625a162251', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 34790, hash: '5573c516b8e14887c406c025185415f60e6c5776c5453327a2c13a12ad914020', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 43032, hash: '0428d9e527508b7ce7678bd630db508cbca165cd98b2a1c7adf1d2a4888b49e0', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 35727, hash: '57dc5106e12034d8f85ae0986161d5bcce601bfaf7bbe11e4a969ce8d1e4a2ba', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 44705, hash: 'a68c5464c7fdb9f55693927f6da8a8d02d004911b851db48ce51b6c5083f5be7', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 139244, hash: 'f84dee76f9b1f06ca924eb12b48b893ebc01b69a2ef13f43c2786d0ad51340b1', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 44094, hash: 'bd5f87b7c07e900b416113f185c0fccc1f45847b0750919c52d9feceb4f84e3f', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 144401, hash: '5b45c525b0f98bd06f1e108871cc64253772e14a0ccda39cf8135266425f8cc0', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 34874, hash: 'd639c11d7a7308e30a3dbc72295a03e3076d109f834d7f37f08075fa464a622e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 31788, hash: '50040e8c123b13f674bab46fdd2af9e1b3c7b591fa1ef192a2eab132303a76cd', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 43195, hash: 'e34774e4cfaf607b70ee63f1178be4071b534f9979de10f604072a918ee8b363', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 34895, hash: '9b88d105254fb4350f274ecb93fc4e0ae472940ec0e38ec7e2cec5e8d285b6ab', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 108421, hash: '7c792391d6aa487b214bdc50e7c0679c7c8e1bf9fb07734866cdead2fc7eb660', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 88703, hash: 'bb663b0c7e641df645988785771aa7e3ddd949efdd81fabef54a7108ea3981e9', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)}
  },
};
