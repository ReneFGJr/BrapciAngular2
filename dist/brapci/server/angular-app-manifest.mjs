
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-F6E4JBJG.js",
      "chunk-ZPUTVDRH.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TF2VGZVY.js",
      "chunk-7ODSJGRW.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VRUQNU2P.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-35POF2UJ.js",
      "chunk-VRXOB36X.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js",
      "chunk-VB4FB36B.js"
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
      "chunk-G4TWH7RX.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V3CB5FNM.js",
      "chunk-VB4FB36B.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FFLEDEVC.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RGYZS3S4.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PLF2I6UC.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7IA4OYVC.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PI3ZRHBU.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QQKSP2EQ.js",
      "chunk-VRXOB36X.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IKBNGEW4.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O3S7CP53.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LDMOV7QA.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TBBTDLKQ.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SU2SE3ZK.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3HQQGIJ6.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH5OKSCX.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NOS5M5QH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5MZIMDI.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4EJFYTF5.js",
      "chunk-ZPUTVDRH.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7ART2KB6.js",
      "chunk-ZPUTVDRH.js",
      "chunk-NI4QFABF.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: '80212e28c96f4f857f15f550d9e099ab45d901d7e196cacd0848de4caf771077', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: 'c398b802526c57668fc7d8fe9757e205fbceced6af30eff52fd87d2f6bdb0043', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 36768, hash: '0142348395d21da51a6214f21286f93d87e1da8d36fa8feb7752cedab55b98f1', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 36569, hash: '378508a43855e89a68c7272263d3b3be1336807a8d00564d478967b9428e0b51', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 36169, hash: 'b20f6b09a7e9cf10ca32b4ef7ddd911fdfe0c02ab99468362309f84c05554bfb', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 34838, hash: 'a3e75619c506cccbdf0814050c49fbdaf8a4a7e53fd724235731a5a7ad648ddc', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 34927, hash: '8c28c0a61a1aeac32a433027cf1c449cde5948ba348e2594ccf0b48538af0160', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 34919, hash: 'b63325e6fff349c1bb83b7e3faaf785c977b11700c76c10c7a0759418f5713f4', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 42479, hash: 'fda026cbbb252fa6ec5fed53918c5ed859a7d23d0746eb2493f01b60782b7bb9', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'index.html': {size: 54719, hash: '917fbc28e33c12f412797e5a6ac56b895265e0c8dff177313c1ed89874e876de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 31812, hash: '3c5ec01c5988e3e1c0f0f106a5d43ec309393098735e0d37d52f917097a0f97d', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 38054, hash: '08ef18d481a0d6a9c6a71062a219e101b44ff55295da4d04cf87cea398c505fb', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 43210, hash: '8bb5c743352a4cb520dd195c28f871c3f832d0b11978959a32c68acd7b05827b', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 35109, hash: '2d3c6b3ba095f1474753a65dae9c520ce0ad310b6266c071bae41b6c3bd431d9', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 108445, hash: 'fa982cc2d93cb9f2e095b520910d6ec703d7abafcc109c904fdfdfc054e1e353', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 43056, hash: '25fe43c2df9b00af6a7c2a77a80ad9cc999e7c3520a3e33b7eaac14e09811086', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 71360, hash: '1b8ddb593885179824cb22140a6c12518c230c8966cbad4f2f0de36ab96e593b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 35751, hash: 'b316cf8787c5c1e745e3561c7e5cac08d03fc47f1776698d15ad93b9b2c84c2f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 36553, hash: '28fc3ffb268fab8db5402eedd8a53b1f75be82ca6dc85f594b3ab52dcbaf78f5', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 35280, hash: '6ee7caf14b57d350cc6c5aa140c1ae98beb75464b8000ef33c2699d0c62b8231', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 35464, hash: 'feb456c8558b320874b162cd71293370e216813f6154ea42cd0ff9b71cc5167b', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 44720, hash: '30a1e071758a5e0678a14ba59b765a3f0a7cb25b672e4ffe2daf5bb3c45abfd1', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)}
  },
};
