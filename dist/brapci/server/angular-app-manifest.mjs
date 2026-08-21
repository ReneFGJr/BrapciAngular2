
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JI4IEYNZ.js",
      "chunk-XD5HWMGX.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5W3ZGS27.js",
      "chunk-4EUV2K6K.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2YASOTR.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RRM7BLS2.js",
      "chunk-ZYI6GY3A.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js",
      "chunk-A7SLUI6R.js"
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
      "chunk-BGRF2AW7.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6AQEAXJ7.js",
      "chunk-A7SLUI6R.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-677S7ZUW.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6I2CMN5M.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SR6WYA53.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TRQBQV32.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YU76I7ZG.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M5J62EVM.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O453LOEK.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ALA5MTIN.js",
      "chunk-ZYI6GY3A.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LVKI6QVU.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HDPS6IAK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWWKDJRL.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMGC3MTZ.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVT4EGZT.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVSWYC7F.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDNNM2XB.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IT3GEFA.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5YFNICIC.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HU2K37W3.js",
      "chunk-XD5HWMGX.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PYLY4T7.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'dbbaca6ef1576d67868a395cd2557abab4a3c7332b581a113bab9f7d81c3cd22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'b9725e626de8c60f450b89924eccbc711f4ccdfac93169acad3486b572eecd6e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74467, hash: 'fc3dd00014a9d546380a5403cc9c10bd2d11f7c3c70658a5024df81eac2793f4', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 64119, hash: '1665802c249ad4863cf4af4c888bc9f37498e1c77d37ed67911f1b7a4c8647bd', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107371, hash: '1fbc8e65138b3848b59fbf862213dc8c4ec0db0e126be4dfbbc133860eafd475', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74342, hash: 'ac7490bb72a9b4659ce88cc7e4094ce06540a73ee88ea76780e829d5d9d57a14', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173810, hash: '000359e0bca56791228a7343a0455c80092d975ce3ffcee4e75948084fe0690b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120233, hash: '0a2fcd6810225cecf5e2394bb674898d4fc6b714778a364d6570cf52c40e8ccd', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69157, hash: '3d081fe0290375b926e0d032648f176a42d20582e0fc4445b60286ea2e5192b4', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74387, hash: '91a9812647445b88500dc61bdbdf061696807e38fbe5f5d9317c3c5f3d208ed6', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69395, hash: '089a36b22dab7a549088f7f605ffed77222c460ec39430af8b93760dc7e5a6c8', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68368, hash: 'b265a2b6048774c2f1eb93fb661d6fd8fe18ab4f8bf55fd354a0670c5ff13969', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62808, hash: '5f67d8c6fe13cca8fcf7a4d4412795d292a0a7c1679e7285cda66e818aa842b9', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77586, hash: '49fd4364496b3a8019819830117fc07ab657186be995ec0088b5d049fbc8b1a0', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72653, hash: 'bf422191d3e7d5563aef48c4845862a8e90b41fb9bc53bfece1deb65f21a03f3', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72763, hash: '8542d93f53090b0ca3a27821ec1ef6e4bbb552fd3e9d9f50c2727066a1797d5d', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145247, hash: 'cbeedbd76d0a753db7b83494623f8a37bca4f89bf93e731cbb04bab0c24d959f', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175637, hash: '2f5179bbf1038157dc0ca78237a1c9031beb836792b9f8df256cf75530c3b26a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66583, hash: '75d0b52d0ad1dd118184627d6cba61409b53495fe2eba55817c01aae88207867', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69575, hash: 'a767c7c70d2437ba4920d5b83fdd9389e993374cc02dbe299131fd21431cf0ed', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74207, hash: 'bad2635e583fb42bfa2b64f03b9ca4a2dec8fb7e8be71302ce931f2abe703c3b', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79652, hash: '863ec377210457eff530f13e95249a200f703aca455a268cfc0defa1e3224312', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 64359, hash: '9502196a61b62f810ccb73d3b50d448e46325b3cbf0755a5f673cefd268cea08', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77833, hash: '51e6a0502874c6e0770dd1163d5d05cd1cbc0cf00bef2da46fa82106e6fb8edf', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
