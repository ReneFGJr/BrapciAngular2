
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7UBQVBXW.js",
      "chunk-4TKDLIRL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7KNB4MOZ.js",
      "chunk-XVN7D46P.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QTWUUMIQ.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NBHQYF35.js",
      "chunk-NRHQYV2G.js",
      "chunk-VI3NFJNR.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js",
      "chunk-VZ4SFGJV.js"
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
      "chunk-URG47K6R.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RB6QVSGK.js",
      "chunk-VZ4SFGJV.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4OVXEDVG.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TI6GSMNI.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32NYNO3Y.js",
      "chunk-NRHQYV2G.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNUTCNRI.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TXQZNPON.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js",
      "chunk-VZ4SFGJV.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R376A7PT.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WDYUB6T4.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EGES2IJO.js",
      "chunk-VI3NFJNR.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M4BN5IRZ.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAYGI3LJ.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6VC47FXT.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRNLBLIH.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RWC2J74Q.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SJAKUFJF.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCPFXTOQ.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GPPHM7GJ.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKAQHXF7.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZBTRGBGG.js",
      "chunk-4TKDLIRL.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSP7XEU4.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: 'd8461fea83f78b475791e5fa0a19704a3ae284ce2feb7fb92ff73c4c1cc78e1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: 'a1d9af5307839ff029f7b38bb23484f48519d74fb26638c8de14a6f6ec684b5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 77345, hash: '618333e530867040ed687f4a8ba33e8d761869efd1768826abc5534e3f46c062', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 37145, hash: '3f31598f01f3318b1067393b4f1620b86c8139bad1afdc91541ca0df1b54a4b9', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 36946, hash: '529a36c39b2cbc145698213bc7a6ae497b0948cdb072084c20776e433fb5b516', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 89113, hash: 'c34d9a2df232fd7fcb30d7c6779cb6f4c9df96d31371979530b2aa5ef94e5cd9', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 82888, hash: '3a7c139ab239291851695c86062ea4081d36668357b437e529bb5aad8644ba85', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 35224, hash: 'c4fe44a9f0eb5ffc83e5c3faf804fd4f15745f5d972410b82c04f9f850bdcdf8', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 36546, hash: 'ca0d74226475ed7403891e03e203e603fc4e6401d48d4e512b85f80653c710b9', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 35296, hash: 'b304f58560fd1e77efee965674816a791d6c8f9cd3aad7f0216df956c849d80c', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 32189, hash: '59c7a633268c72a0ff79331ecae67a412624df486991de4054eaf4edeee7361e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 35304, hash: '0c2329e20edac8284827b825e9dcafa0893b0afce3bb988bf5e8fd11575b7bda', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 108831, hash: '62cfbb256f6a9b0fb01fd04355cc4c40afc65229d66556faaa8b6f1f6641e049', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 35666, hash: '8e5faae669616310465ecbe5038a88c407b8952cfb125d5a7b7e4957a5d8c4ce', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 35841, hash: 'eccd8a2dd96178bb92f949dedb91b499067a98f948e8d765b8f2e2e525cb5eb5', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 45097, hash: 'a6119a9198342ae7700b5cbde9fbc78e4b40e368f92dd98d95f3e2f9f60f3dc3', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 139654, hash: 'cf43bf838143c8f975d8fd3eccf683ea9e84fff72f8cc9b06bf401a4f3975b80', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 36128, hash: '773165355c28ccb2fafc4e8479ed3256cd3720efd1f1402bbffa34c5194d4b4b', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 35486, hash: 'e82caa47a4f38fee21ac8c54a5a7ca6227f364362816ee4c7ac5c4e145ce4a6a', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 44495, hash: '92809078feeb9df5b97740169f8acbdbd62c9d05bf58a31c6228de46bd0297d1', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 144820, hash: 'e30b81de3a025f7a0d397f35b2bfac0afe0d7fee60828e1a8e9a416c900bbbca', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 43433, hash: 'ee2858065e3c4303aec9dab6ad9b65b09e62d9d815d04b3413571658e6a4d3ed', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 43587, hash: '7c0a709c65c769ccfd5a54a46922a8868f3684b9808704a6556791d9c1216a62', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 160150, hash: 'edbdde7ed346b8d9f129c71c7d0f4b4a9b9811e9777b9604bfe04a3129e5473d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)}
  },
};
