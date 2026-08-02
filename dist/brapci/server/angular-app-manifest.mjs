
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
      "chunk-MIS6465Y.js",
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
    'index.csr.html': {size: 6002, hash: '17e302dd3ce7842a78231fb2c318842ff5920ecaa8934e7f4d481578be0f6f31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '366118a4bfb4a42173a8b67ae96acbf3ffcb225fdab5d4156666e03336a586c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73953, hash: 'f28e4267029b2d9ff9555c34339cea34c8d9e30bb33dae9f94f1a7dc39f847a4', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107207, hash: 'bcf3574f8a478aadb5990114f8b8dc8b6e9233aa3f9d579c603b17c99752f8ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73829, hash: '1d212e67bcc281572a92cf18366647d516d0dda9e8e021e73f9dadb354583eba', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68653, hash: '1eddc8552bbb136ee073b7d72223ba70503c533e9d7bbc475213ec225c3ff092', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173302, hash: '0661e6d3011b7380a1abd1c39d428826fbe89b597324096d0076fc88d6cc69ff', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62295, hash: '1acc51a559c1a494842b3f02a14ca9a4143de3ee8dd5b8fdda4f6102c20ec405', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68620, hash: '75d8e02a10c5debfdf1b71377abacd4b67de879e3e83910846f43a143e04598f', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175120, hash: '7209a00a440489838099399101f90b4952eed5f31246e2f410ccd4580239c5f1', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74205, hash: 'dc7937f623ea7cdd3acdd39cf17c517607019ec383bd86201c0dd0c088893a55', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77310, hash: 'd873f41393b06fd1b61927a9adf8effec85c2fb3dcb6056c9be27c8cce969558', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67854, hash: 'da8bb54512cdcfbc56feb14c5a183229979f2ae14a1a17af4a9a135c3882e5ff', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119722, hash: '8b79e0318fd454f578acb5b295e8745d2e0044128bd3a4f29f6eba43a32b6ef9', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68696, hash: 'f4653e7912172c77c3fc95cb962816c15b6f0b19604551b0355fb7e041a9e4ef', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73693, hash: 'ffbf9cca2db26f41a8fa26e6662caccd5a8bb99294853c9e56da4229e809e02c', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74647, hash: '8d34c94ba52f42efd299e94260197c74826b9f20e3933bef0b1811ff233ee593', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66070, hash: '6a57286e7e666974a79abc886c7cc3517cc5d11f07359e490525951e67894cd0', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
