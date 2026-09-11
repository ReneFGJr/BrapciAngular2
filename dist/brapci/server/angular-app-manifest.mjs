
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-P6U4ERJY.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4ANWR2PR.js",
      "chunk-GIOKKPBG.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LJ7LMX3R.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HKHZLYKB.js",
      "chunk-V3L6YMEL.js",
      "chunk-UYJP47CO.js",
      "chunk-ESHY2KLN.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-N57LVFVU.js",
      "chunk-SZNFCELF.js"
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
      "chunk-BJAHULKV.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XQC5HTOE.js",
      "chunk-ESHY2KLN.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6WRHQ64Z.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJDEC27W.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YICDTQEW.js",
      "chunk-UYJP47CO.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2PK6QHJR.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-55OMXCM7.js",
      "chunk-ESHY2KLN.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NXT3RR4P.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y4D6CD3J.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AO475L7Y.js",
      "chunk-V3L6YMEL.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVIROWMT.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOZWGSUY.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COD6C65O.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AKQSRMHU.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OKQ7IQPV.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLWPS2M3.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YYK5GFB5.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AH2MYHZY.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSMMNR66.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2FD4XMY6.js",
      "chunk-GU64OLQ6.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UNCVWP3W.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L5NVGRRA.js",
      "chunk-GU64OLQ6.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AKOBG7KJ.js",
      "chunk-SZNFCELF.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '00eacd72584b998ac17a22fb17be40450d8c4fdea3dac7880a8d0de5325acb4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '7cdf11d26fbf27c9a257fb5b2149535097cdef58006a65105b984dead2d2c861', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 82722, hash: '89631c08fe3291d7e18473ae2819a5e85a3ba16dd57a2327ea4ec2a9421680ec', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253356, hash: '5bc3d17fe70c03a77ecf9d557926ad2d39d287f68416a1ba61cf102975cc9e4e', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128408, hash: '81e9aecab23080c20567c808dcc7153a5f3d1de1d5098e6c802448c3b8a5d024', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 135899, hash: 'a230ed253bbde26750dde370b6af56cbf511df00448584f233ed6cabf768a0dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82633, hash: 'ac226492f409cffbfea8efb066255d51e6366b3c90694cdd0a4c58e4df8b5962', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82598, hash: '78c57a0a1a90cf2ebb6ba3e34d26507651bed65c713da54c36dd1b1bddd392e9', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 80918, hash: 'cbd686c6cbaad0c11c1f5fe6d632e9778ec23715e7d8178a0798a6eca25f8d96', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78277, hash: '3abd1e94b21894d047d82ec1aa8769036b5666598b75bdf1cbaeb964d6e478e5', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 181992, hash: 'ee9587d780f3a14049cd1e29111de1bbffd1fd353e77a5d642ed671ccd3f191c', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81018, hash: '09435af3e1bfa1950458e7b5295188d9751d8ce30dc1ae3d4fa65f64a63200ac', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 72869, hash: 'e3f7a19dc64828695586f822cb893434e105a84fca953bd98910e77ac5bd66be', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 87917, hash: '238cb7f02b2d25b59cce75f3be313039265479def6a568edb56f1cd5ef037053', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 85841, hash: '7a993db92d4ed7f262172d4eb94880380a26e7c911acb7672e1f86df60940f46', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82626, hash: 'b427ae670d8a15b165ce2a421ba0ec3e403729d4236bd3fbe081e8a5ad2aab02', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 77650, hash: '065b578bcbcb31b78821f538c64d099607d9f5a45dd173b06d948173a188cfe0', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 183837, hash: '0e1d594c3070f7a5272f29ac01dbba3a101bcfb6fd1034e395812306e0b24b6b', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153493, hash: '5eb12ea0a1b42b7c917b093d8905dbf49cb346bf7e210978dd776643c52e780a', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 82747, hash: '3d2ecd44a8b9bb67c0df79c3a915f6a6e6279c7507e278b3abc3e3b16c60cacd', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86079, hash: 'bc3380a0dd7c9016f914d5733546f89f66b4a2608ccdcd9110fb23b8549600ac', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76623, hash: 'f1a5f41ab3cabd355c74309471bf6ccf3b16baabb7d653bcfe159a845245522e', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258458, hash: 'b06bfb0ddcedd22f2f5a142c0e876ff308de9a5ec2a06d00b0092103c84ae314', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 74839, hash: '8e41cd09b6509cea4b9c072857a7a9268adaac6b61a212ac38f1878a40ecf04b', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82471, hash: 'a622056f33450164fd741154bce5c1955f7e095db2b8a916586412c10a58686d', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77413, hash: 'cb919f5900b3ac8a92063a6288346fb12e6e2e112ba0ae5aa885f901442761f0', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
