
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4CL4Z55J.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CY2JIV2B.js",
      "chunk-MCPB62NI.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AXQ3IF7Y.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QK6FDA65.js",
      "chunk-7MXJS4JZ.js",
      "chunk-UYJP47CO.js",
      "chunk-OQVYFBMR.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PZCEF2T3.js",
      "chunk-FUE7AGBK.js"
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
      "chunk-FWASUIR4.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IMLI7VBQ.js",
      "chunk-OQVYFBMR.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JW6FZFGQ.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XLGDY37T.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PB3MROZQ.js",
      "chunk-UYJP47CO.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7P2GYVJX.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4TMX4PR.js",
      "chunk-OQVYFBMR.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PNUJI7UH.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7HEJVYDX.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GCSM2RYN.js",
      "chunk-7MXJS4JZ.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QF6MQ5HS.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXNQDKSG.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EAOO2ELP.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LIVQKS5J.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6AYN4F2.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J4Z2SXJN.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2IAT5GAS.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TW62N6LR.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FFNCF3LA.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SHZEZU4B.js",
      "chunk-MM3UHFWB.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N7A5GV2Q.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MTU4UWSR.js",
      "chunk-MM3UHFWB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PJ7WRRCB.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '14decd04e7444fc53e08e9ee53a73dc59b4dd817a94a9a195d1ede43f6b968df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'df20363cb1776dc32b030b71c3e6e72c476e8dbd1f9b6cd2d66a3aa530d96040', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 79306, hash: 'ac0e6f3ad51552b47e3ebe6c8c3cb292d2bc26854a7ebd8247f996090bdcf523', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 249940, hash: '0081675342e1de0fa87b3535bb501af5fc449d48462fbb0fb81764d452a27dc7', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 79182, hash: 'f70a7ef18455a9abb60e72e72c45388f60263fc0d3cfd213ea7d479b8b0b5fd8', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 115164, hash: '5fa21c388baa799ee8b6fb6b3a7847dba22bb664ffbd881a54bb2ec88ea33017', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 79217, hash: '2f1082c4cb951e65c061aa283d34dda1585fd02b4d731368a2b5aa1ffe525bf3', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 74861, hash: 'bc957abba8d04a979b48965894648e8a64e1c274eb02d8d79837815443944728', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 77502, hash: 'b07cb4268079f65b3b060d5b0ab96fecea076e91c859385e5247e5cf307175b8', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 77602, hash: '89b02c40f05c7227d4e21498652eb85f08b626dfa13af5e358b0f79dc91e251a', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 84501, hash: 'aa8b6818edefa0767d24343fc09e2ff57914113f8f4a8cb5c992a5549574f2da', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 69453, hash: '5ddb98dda2454e0a630897e63c5dd27823edb860b865e889f015d73c8826f327', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 150086, hash: '0c973d988871985060f29be9ff2b98ce6a2f775d76df990ddec82d8aa7f1d4df', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 82434, hash: '4513842fa66ff8390f1718bb29c3ed2d8eecec1466f44a22646b6d872697399c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 79210, hash: '62a1d4becaa6e17992bbd74d6f886e50bd9af7c9c0443b5c044d86d1b186bc2c', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 74243, hash: 'a2fe18ce79ff26f9221393bdf003aa268c24e8340aa88e6220ef7cf3fab4703b', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 79331, hash: '6b78b5f86d1159c2821206e75c8857a3cd213bd1e1e1892f122e56901605b345', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 124993, hash: 'ae77ef3e8ace31b9f0546341f9e5211875eeb48c98cf0f577e33cf27cf5bf6d4', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 82663, hash: '84f974c45f51bffe7d3510145f2a4aa7c64bcfdfd72f76b1b37e2881e046ff32', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 255105, hash: '67fff4968eed48f223601fed171e6c6da73f86195b89cfb6476b8f8ce98f1527', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 73207, hash: '003323241289da3e32886d62fced26d8c05d5f76787a4ca069e570f55a49a49d', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 79061, hash: '6e5a694429ff8b0446864603e209a5df08078e724a18a3a9520f51d36e190bf4', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 71423, hash: '4524b9c6a678448d66a1716a1435065e4f9814fc4603e6a85b06f2680b909c60', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 178649, hash: '20a12cc6c307599c2757c869707daf5ff18c4ae06d219ab6fd04e11011536701', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 74006, hash: '50a41d9812d3d2a8a847c7d4c850e9c198ccc83a1bc1b758d5c74e8d544d573a', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 180476, hash: '0571b01c67bcebfe3381f92e0ace3ea574534241ab8d7b83e34d6b1c6cc36583', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
