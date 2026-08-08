
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
      "chunk-C6CGKV6J.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'a10b2b664457f593245d4907b31abd9be7d6802be97a784e2935e50bfc7bfdc8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'b4a968ff25437f900715a5eec6997c4722da06ef670aa2480817903271d69762', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73805, hash: 'd0e2bfb3485d49d94ba562973383f8cc091eb4ca179f85c9f579cb8d806ffdc9', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73681, hash: '32b4106e72f0bf37961288ad6b9efbc7c40eaf76598f43e667d61505f509cf6e', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107071, hash: '63b2173f04125d4c288c7191e99ff16d13475d3b263b7574e61ce93eb8a48210', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68496, hash: '3db2513d0ff1d7b6e9eae04abf2bbaf65b871d6ce16fc684fea97343d0d92943', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68481, hash: 'cd9607061c14119eb354e9b6fbc2fc16a7ebdc41f52600bd5b84aa9711d71600', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 77600, hash: 'be9883c3dbc58e99c8aab393b51fb35732408dab667b6acdc0722ce298662bd1', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65922, hash: '79271f385bbf0b3cd06462c428836b49c0fca42d4c4c5a928e46786644f7bcea', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173139, hash: 'e2e633d37984cbcc52c0cbabb3625ecb15c121c3fd13d9723272d63486312aed', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74508, hash: 'b6feff0102b44fe5ebf21756688be9735e638cb1365911c0f437c3303b421a42', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73545, hash: 'a7c2aff8b2812832f3b2f986bc5852b9fef8c4aabe96d2b0dd8fc8bd6f1d0193', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174957, hash: '719915254f2ec1d632a1ff020bf186d6f73d08f0d6ea260b778abd5b6df5c3b4', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68548, hash: '511ea275cb623681a51441683f2717627284539b93e8720760f88e6d94d26dde', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62147, hash: '6d142620b3ba0b157c789a26788398d2740b71b70a28e13e78b065c23dd43091', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67706, hash: '368ca6b3521f8d7549610a70bac505dc59e4ebdf4eff4cd88b28cdc868094228', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77162, hash: 'cfdc2e3113563cfa3fbd05e2ebf2cfb261fd9655772c619161b8e817c30c0bd6', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119571, hash: 'd28b4248153b7ee86f63cf776d3fd3e85d588754c341173e626a5939a96ef712', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144585, hash: '7cd1ea3a3bd1fcb863230f808ab35ea65ea4e407caf0a355de0b123b4be2b633', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
