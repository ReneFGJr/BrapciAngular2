
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
      "chunk-EAHS4NVJ.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js",
      "chunk-A7SLUI6R.js"
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
    'index.csr.html': {size: 6002, hash: '475dcf21a1a6d6cc5c85b7ace8d40c454def3686163acc3c54d8b2a361b46601', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '52d1eda67da644193ad67d7ba406758891669dddacb67a152d011659deaa4023', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 64119, hash: '1b0c869a48ee8e67413629b459fd50fcdae94a52a9fbea487bab414c5e6e7557', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107371, hash: '9202f3914435c854d07646bd3d57c8f18f2984735151361cb3aea438365a9d4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74467, hash: 'f8ab024cd49896847c99ba9bd994489469e2b23446efaa90238d3164bdf18707', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74378, hash: '37fb71ff2a0021b011c4e3a7549e6a387510245151c34ad362f88e444385a1af', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74343, hash: 'e947f145f952895afd0d6792755bda9a7e25334a1de2b44fb5dfefbc6805abcf', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173810, hash: '646283c5833ee7cb2f9154d863b291419a16e503dfef2d4b5f2c4093f1399466', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69158, hash: 'f407749813e353d1fd9880f740c34951c753d4b9ea9c923420428d22638d0a6a', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120232, hash: 'd7ffdc8b32971147939ecaec4adb11a5f2bec9a88a093cd0f596dc6ef3fa480c', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69404, hash: '9f886a5ac56c9b95e31f1c72a9c805fbfda8672ac6be2bd3db5689830f3abaee', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68368, hash: 'f68563aa672ffce2f47a38c34055e89c7b50683abb495ae1f18111e4431d8ee6', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62809, hash: '6826df924b5dc8e64aa14ae4ef35d5003e07cb5dcd06440b371649e23d3a90a7', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77586, hash: 'e6d8c7122122eae6a453445cbd047a0cf31c99e4b707e9df2a0d850053dd628e', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72654, hash: '194940fce1c2a755a6f4f59f8ecdb5a7678ba982e8f0a5fed4747e1ff1fd0c6d', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72763, hash: '6835f0692ba4d92b07ae43fbef9576ae7d2a0c4418dedc78c8702d3260258637', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175646, hash: '54b6a8f830c1739c03d9403d24d95382cf123bee886032e2862c84819d155322', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145237, hash: 'd15a4520c1813a5a9a7774e7bddbd4b1100c4d8808d0243cf22fad1dd36ff769', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66584, hash: 'c69e28985377c4a2ac3187f371d3bc267118fd5278cd99675950aa47e53e737c', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74207, hash: '0e483d88e5e6acb63993005a5b8480347f73c0d146685725f7d9edd817422b12', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69575, hash: 'a159255f4b5110503c5433bf85ec971f26d3a59f599dfb3824035f0cf83c11ca', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79653, hash: '8b373279ab7396e1cfb2c202508e6d4b226552d90a3b5724eeb3f9bdc29407e9', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 174362, hash: 'cd0c37ed11ea9aac3959bef59a8d876eaf65d3544e6f8e2a80f3f9786ec8e06d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77824, hash: 'aecb7164ff0f801418a89566c8d85a8c66e7c0729deb689c8a6129af1e657090', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
