
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNGNXUKI.js",
      "chunk-PL25ACWG.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E42FHC4W.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UYRDXOCB.js",
      "chunk-FOTQYFGA.js",
      "chunk-MTE7AZFY.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
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
      "chunk-5ZO3NNLK.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PNGNJ4KN.js",
      "chunk-MTE7AZFY.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFJZ5YN2.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XAPVPPOR.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RU6LTM5N.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOSWTNCV.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7UJO4D7.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LJ6KIMAC.js",
      "chunk-FOTQYFGA.js",
      "chunk-PL25ACWG.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PAAF4ZLD.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JCICOXX5.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R2PJV7JZ.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3ZRNQJRK.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJQMKBE2.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQTYMV3A.js",
      "chunk-2JY4VJDB.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A6HTMH53.js",
      "chunk-PL25ACWG.js"
    ],
    "route": "/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '42f629fba459eaab782b84e57ce4060d5de6c6241e752e7e02ca5bd4a978f935', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'ebfbe57f84348b65b741339f4b10f512cb1b7ea0897ac04ff73c4e68afca2bef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 72811, hash: '0797933415128b320121a4247830b9f05c6f372461f2134e6beed701d86793ba', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107149, hash: '6c46946c34ba7ec734c52c43b1834f28ae9e89d6e322d7eff490c71cbaef2d2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: 'b600d91bd98f6b66b2909102f52bb2628686d7295c1963a4daf5f333d385797d', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: 'dddff027407fc0ff6c723f5c21fc64a4b0f715e1b648e9e6f39f5f469f6655da', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '5c686ae14346b8c6b64e51717a6d4878a50dc638c4d8a964672ef27bb342cb09', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: '914a04545a9eec2cbfd9b4875bbfac4c42887dc091daa7a9ed8c3abf6ab55945', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: '9f0954370cf2e5423cf49e20fa19223c1e238b134360d7f7e64668a4c6426eb8', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: 'e6c5f4f725700d5f817b47efd0efa306aad7fde5600fcd3b948ddf109ea3b120', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: 'bb30dcf7a1ac265d2de22293476db8368545db5b809a6a585faa4c722c2dbca8', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119657, hash: '37f4740bd735dadbba62a5ea68d54b0cb173dde6da4ba25ba853c3423d5f111b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: 'ad7ba1e7db22080434e6426f055e3fd03d753ddbd6e7036e447dc5cf1bfeb8d0', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '7567e42f559f7c3909d408e6d2c3abd0ec0ed9ec95dfa71c6e4e97060afeecda', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'e2853aadd7b71e3cdf4f7ea114a9213da2c613b413255dd7dd0c153ea7db6ba1', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'cb422bbb6391a46acd758990f629a4508962b7acd40dc231d375f13dec07267c', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68705, hash: 'fe440bd3b533d60647c7e1a8e4885295d6666ecf695bf265189e370bea78b6fe', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: 'ba739d2f57babfe30381f93e3ce831af4bf51f87a9b2d882bed238d982da2d3c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
