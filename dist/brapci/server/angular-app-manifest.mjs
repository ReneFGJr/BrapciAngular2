
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-HW6WKRO6.js",
      "chunk-TOIJD4SV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7VXKUQB.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6JWOPL5I.js",
      "chunk-VOC3WIBA.js",
      "chunk-4D5HCA62.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
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
      "chunk-D65AAFJN.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSJHGXAB.js",
      "chunk-4D5HCA62.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MMEFXUGB.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2V7Z7Y3C.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RSI5L5GI.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HCYD6G2E.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NYXOYQIQ.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AX3MFKR6.js",
      "chunk-VOC3WIBA.js",
      "chunk-TOIJD4SV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2AJJOP7.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S3JGDUWH.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U77JLHGV.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPHVWQON.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GXJLX5FK.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OVBJ2YF3.js",
      "chunk-IH6WKHC6.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3AGVJTKX.js",
      "chunk-TOIJD4SV.js"
    ],
    "route": "/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'be06b7b1c58760192baac78aa4f189f93f2292e771cd48849c52e0fe5b144af6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '41eea981d6bda83b0125ad1af9e63b6d1ccc9116f60ae06b84ed83e53398066c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'ca97a8a3e53b706702220569165586d1c5f7bf411229f55b994a7efa45d26a5f', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: 'e2158e9b119f208a866274d5742e563ab37b1ca55ae11a526fd7be4484eaec78', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68644, hash: '6810ae2ea02c87be0924e46180beb84c7b75d85aa497128ab264aa0903aa49c6', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: '9d8858430709e11caea6817f9c63850c14e24d08bf450bdb6d2ff59d736d2298', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '97d67fd8f4b996ef489bb8a8aabac898d97b0419c878f9c422172600d42c1eef', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: '7555fc6231b071a104188cfc9da500694e6984c998f1eab6b1ee7c8ac96e236b', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119713, hash: '7e0a09f042cd88c319c6b1381ebe5144d18c03c0b4a4a797ba8adc98da1ba6ea', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: '3876d6f04010631fa49c54bbdb935c05b78acdecaeb16e6171c84abc86622d2d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: '30e27a70c8777be9cd0a2b0733f2ab073b280fcc2b9712c2f587f770507a43e1', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: '9e43a966fc49ca08adbc287543629fbbd8f7467c1c84846e7cc473f6375c9dad', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'a75107b34580663cbaeb0143742a3b8ef0d57ae91deccceb66ec4f7ad6d7bcc8', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68705, hash: 'aa3b800bbd79e420ca7da1baec2074dd182f6a1d786be0b32b478cc1c0163575', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: 'a7566a80982e8258cb25b66249d2fb8d5ee26b94cc966b63a024dd2c39ecac71', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: 'a7eaf7969b27ed8001bb5fc8a82548c7b697d7b2c97e4cfea6f686b2ae49f811', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '3007ad23dacf01d7a4e26b9c4f9684fe2d56f0457b053c8cb2b1c05fbc76d873', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: 'a6825a62f7cd8ac977e5d6de2bdbf89f75bd1807ea3456d8f8ae9076179e49d5', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
