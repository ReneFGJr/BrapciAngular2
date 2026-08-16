
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YAUUMBSL.js",
      "chunk-5OV44QDN.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VCW422X3.js",
      "chunk-XINPRYK6.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HYCHG4CO.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AIBPFLQV.js",
      "chunk-RCYS4EOM.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js",
      "chunk-26BDUA5B.js"
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
      "chunk-RNGFXS3M.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FI3CO24D.js",
      "chunk-26BDUA5B.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XWMTX7ZR.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JGNDPKNI.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ON27ACOH.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N5EWLGVQ.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5FUJQI27.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UCU4T6N3.js",
      "chunk-RCYS4EOM.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FMOCT4OG.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EOIRZJUL.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OMOQE2EH.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5YP7HM6H.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GJFVPU2Z.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YDS7Z7O2.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VE2N3IYZ.js",
      "chunk-5OV44QDN.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7OPVH7IU.js",
      "chunk-5OV44QDN.js",
      "chunk-7Z5LOZ22.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'aa5829c4b08c3d72ce0bec83ea08bff16c3e7bf44a4730fc6e07df74d693cf15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '43e3b34308473273704b44a2383f8e58999c86c7756805f3517340f664a44b40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74078, hash: 'f087108b734a041c693b86252c643171bec1e0cc3b8eebcaccc06504cfae22ad', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107364, hash: '4a0d85de38035209d58ebcd73c415cd97cb9c941a0f6ab499ffc93033c602913', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73954, hash: '6a1a542c90fcd42b25110d39c5a2466fd42941ab6dc7d5e3e960b844b5d7b2dc', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68745, hash: 'b6395a00add4e1703c5a1d4370b47ed2308a075811af9c69bb7093922871934d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68778, hash: '3aaae191e05cf9e8859383d1ee7dbe4464306d2208d7d60f64df89da0853df81', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173412, hash: 'd9326b48745f94c8c917b1a1d8fd8de1f5d56af5eb446899c3d2416cf0e12190', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79264, hash: '30f6efb4901b9e90142a9c9889d86da4d1026f71dd7a93111c08e72a91f86615', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175230, hash: '344f7feb24b120ba6e7c5b20750ed684007bb3d76ee708086b0c3dab9dab57c4', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66195, hash: '4e07e4153740e8cd517f34985398c9c6342a71dde1c22fb3f9e95589a50957c7', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77197, hash: 'cc92bb991e99f426f467b054fd4dfbf0c89f1efbcaee4398bc751d7efc6639ed', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62420, hash: '2217a12d00eefe77cfc4ca720e595d03da00ad66d1add7997264b2462920628b', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68821, hash: 'ff07a7ea92012aa1cae6d8c19b97ca913965ec95a9b7bbff1f3a826bd3a23f93', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73818, hash: '491da21156f5aaf5cbadc263038a2b09c6dc3ca2ddf2e7ff2ca5e98558049f17', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67979, hash: 'b6434cb5cfd2ac82e56b27f144491a09d63b3d8812be59bf66f63bc50dd091ae', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77435, hash: '0b977a36d6e1eaa1cfebfcedda26cb63aadc4ce9422a6febb2e4eb56300f8b62', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119844, hash: 'd825b9c13306dda0eaedd7d3515ccbec42e6f74697939d7ed7d908434ed8841b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144849, hash: '4c8a8280523cd57d0bb99f91fb1b266acf01eb5b6ce328ec9081fd792923617b', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
