
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
      "chunk-CDA5I6ML.js"
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
      "chunk-FPRBTRXT.js",
      "chunk-FUE7AGBK.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'ce93164361ad7b7c78f905144ed89af05615d5fdaff520587fcd106a6637d306', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '40b798918537ce83beec30f1d50ce7d645e8a47e72d0b34654088cf495ff3da7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 78779, hash: 'b80420ccf2414d6973af35b3f8a4efa23d9c5dac8140d7c92cc330d7d255f48a', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 114637, hash: '11ab6c4a5a98e01b84eceeb8f01df96b8806c477f052edb39b05be2c86bdc4ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 78655, hash: '648163a0641b3343ddb6cc33b4b989ea7ea25f9aa632c0a4b419c65733d9c3a6', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 124466, hash: 'c362fc3186b5c45f9a963e58f05aa3594681cc426b1b90026f77aefbc51c87ca', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 249413, hash: 'ff1a4e815bde95cdf6e582d2223c8421898f5bfef383791c37b2f534398bc8b1', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 178122, hash: '039290abd72460aac52add8f57afe72062471590af85d98288bf5b73f13f4c27', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 78699, hash: '325854eca19b29a9ad5094e1df1b612cc11de40c954fbcaf3b491ced6023b345', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76966, hash: 'aba0d40d10f63b818165990158c5dee1f79cb98c0269b341692026d120aa9967', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 77075, hash: 'b44a4c4bdebd8acb9fa13da8c2ca0e64c32b04d8d23d8a1de094e957b55d20ae', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 74334, hash: 'b0999a8b9c9fb8c8e4298e2444b613f92cda5df0a9b7132fb3b56eaacf3460ce', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68926, hash: 'aa65a12c0bbcadd34563f21054b6f31de69ef4238512ecffefcd3a5c6b8620a7', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83974, hash: 'f5c7c1b146a2753cb944049dca42ce8581f995f05cec406799fe2ed18daea774', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 78683, hash: '31eb5dd77f7c9759e5a78c89715c3792fef58f348e5961325ea4d57f64bed0e0', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81898, hash: 'fd6c2e9a9d0ddc476a3c8af3ca4b64cb88e676f70dd3e1019a846953f99305d5', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 73716, hash: '0c8e15ea8b79eb3b397433d3b044a295201307eceecb60c9cde263aa16f45337', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 78797, hash: 'eac0c470706371c4a66272c82bbad971b7f27ef076b91654beaefe828337fc83', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 149550, hash: 'ea57212765849088f6478727ff352e9ae82a36d1f36550650b27633ecb13978c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179949, hash: 'df9abe546b1480bae6eeee3bc13794b265fe3d8a9a521543248f5aaaa7e6b7a2', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 82136, hash: 'd6a5b99fec9dd6003eefa99e1878d80070589d9abcb72ff6de02cdd9e4bddd48', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 254561, hash: '5c459e21a578bf980f3fc3d5dd53a74283b5441d8808a481fdd0dbbce0ec4b2c', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 72680, hash: '23d1b2b4d89f6287d8e0d55d753ab260df8cb90b466de736ba064bc682ae6e40', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70896, hash: '91b146dff544902aad94329a7b01b9323e9f84faebe8566e2db83c6b88a27d35', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 78519, hash: '0c4ab41e64fbdf7f3abf24a7644a1f72976d809081bc0ba9cdf2f0dbf43f5460', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 73479, hash: '1f7a168fab804712bc3496796a071415f4e3fe0f8bf084345b1bf613f3151ffb', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
