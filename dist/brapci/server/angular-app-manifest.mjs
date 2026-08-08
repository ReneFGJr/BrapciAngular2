
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4AQM55WL.js",
      "chunk-6R3I6X5P.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CASNSXTW.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-G72OFOKB.js",
      "chunk-OJ3SN526.js",
      "chunk-GZBPE32H.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
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
      "chunk-LWTYOQ6E.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3HQWV7U.js",
      "chunk-GZBPE32H.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FDOXUPKM.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V4AASTQ3.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJGWJJ3A.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6LEMAPUG.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WU5RDZW6.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SEBR3DDH.js",
      "chunk-OJ3SN526.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z7BPE2NN.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QT2PXWVD.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EA7GD5LJ.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q4D4JMUR.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F4TAK4KG.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J4GU455I.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAATY5ZL.js",
      "chunk-6R3I6X5P.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ZQH37AR.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'cd87b957d5d3a66a304ad26ae1316360dc9da670dde3f01c4eff0c9e98f862fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '30406e41bdc3bd4f4d5d55aeb2c5195da85d8479e47610232f40d71057928e4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73805, hash: 'a9de0be2cc3359c78be67e0b119bf2d87395583bb05ec3c10055305100bfc07d', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107071, hash: 'bd27fda3f0809b32dc784fa6e178e367700ff8e91d7a715bcef8ee40a22841ab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73681, hash: '56d1b0e75ef5c2d62e28ecd79d552598a3df8b739fb8795bb353a6e97acafea4', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68472, hash: '748a758850e7e96d55c099faefb939d4194d2ebb73f990ed7216428ae5d156d4', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68505, hash: 'b48845e34c6fcc9cf2256c02275ed152384fa27a7209d99f435e5ab584e347e1', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 76680, hash: '2df45592aa92a33a1b41ef834add67d68b136128b0d843cabe368b3e680bcb9f', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65922, hash: '59fbbe872565e0de70b172e26c2a5c3fe18d42d74f6cc39b92246f447bbb44a2', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173139, hash: '8ae47e067af2815d5406a4eac13be75cd5cd8d5e87255c46469eb0bb70d4da9f', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174957, hash: 'df704d262218b6860bf41b2a581a816889bf10fc913c062782ebc1169556eea7', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74508, hash: 'b9a077cf942f018cb7b7035ba21773f8d2d2aaabc10c1c6279d7acaa9c7143c5', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68548, hash: '4519e7a930f130a78d385ac790ee55631c4ce10eee27ec5a2509543bcc808b2d', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73545, hash: 'bc70e8d81124dae75a8f25b09c0314ba083e83ea8f24ea0c55232d5534ba0099', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62147, hash: 'f62337751402b2daf83baf9dc409e0692eec8c00090a2593997dee05373b591e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77162, hash: 'd63272d1a59cd113c57911c2f6cb6dfd5e15a6d88eefddc0fb1c686880385609', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67706, hash: '7abb4eec6f5fff1a6a0c8c4386b11a7e5908c7f3c650bdd2ccca2dbad9b65359', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119580, hash: '43f7b4345030f014a14b1f95e2a16af1e89802305683f3d7cd993592ad6a2274', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144576, hash: '2601eec8c0c245a8d8de68e4035212147cc381ce723d220dcca966cfdd8d5886', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
