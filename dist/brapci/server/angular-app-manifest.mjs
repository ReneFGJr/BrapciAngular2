
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XOM4JWUH.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CHGHF5VZ.js",
      "chunk-UROQKQFX.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7YFZTD4T.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ETEFA6YK.js",
      "chunk-L3VMNCWI.js",
      "chunk-UYJP47CO.js",
      "chunk-BYA7IONV.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IAFNRCEU.js",
      "chunk-ANSNJDQU.js"
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
      "chunk-I65ULIQC.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENE7QXB3.js",
      "chunk-BYA7IONV.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OZP5ZURY.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GOI26YZK.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PEJ5VIPA.js",
      "chunk-UYJP47CO.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VSGA7QIM.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7AREH6HB.js",
      "chunk-BYA7IONV.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YFUJVFEB.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2GEMETK5.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NWNWPLLQ.js",
      "chunk-L3VMNCWI.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WF5NIHMA.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EKZONCX2.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E56CAEBX.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FY7QD2KZ.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QOGKEYHZ.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIF4ZEGT.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YEXPTPKX.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3G3CYQ5V.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KNSUYBHD.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRLVXN5Q.js",
      "chunk-LJHF3KX7.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YYCWUY6M.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GOQZ6CMU.js",
      "chunk-LJHF3KX7.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J2AJOBGD.js",
      "chunk-ANSNJDQU.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '021dca38e1105b7c62b4d16d7f414d08bf705faf48352efe25e66565c7d5e1b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'ce18d1942a4b448c919940d61fbd6aeac9cf6e779bbdb0c02699781c8866a915', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 84191, hash: '0d6c7aeedc6ae62d089ae42f82333b8722eb2b7d94c77cf3ed26f94658b59a1b', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 137467, hash: '7eb74229e2133fa06507d1507ad731e9ebbd4956aee53e16af8fe8ea1118cf63', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 254825, hash: '0804430ae832de4b1f09f03b8587afab3a16b7e9c9dc426fb3394734335a697c', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 84067, hash: 'da398bfc21dbd86dc267106bf901ada0511ee0c5e47174de3512f4834d6ea54d', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 180191, hash: 'da3122f348861804422e236fc7a29d29ec036f42c933e3457c5393b72b14fa3b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 84102, hash: 'd5765d60e1da562260534ac44aad59be0c0800d15547e718acfcdba7e7d01910', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 82387, hash: 'aa2d605d6715c18838948a7623e851283da5aaea01110e358f6dae171a7e4ecc', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 79746, hash: 'ee1fdd043f055a430087693ea3298b60c25509a9af04efb1281fc2c47810bb41', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 82487, hash: '9b7748e308a8666313e9bcb24fea7a132fbf172910dde35c9fb3b99b0bfe7ee9', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 89386, hash: 'f0a92e245504db9f74346b7ec51a77233f33827c1842494bf8abaf8d2d86bf8e', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 74623, hash: 'f4519c0ddeec6f2d3c801c2c84e1bc117f94fa7d4e889f7bef639b508728c3bf', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 87310, hash: 'e583060a3b544081eae2c22413bbf3636627d36baf3c288bdd83b8f62f276278', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 154962, hash: '5b7e30cbb4f27d0fd2f557d9542f304550138af354707fb47cdc501cc2d9e261', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 84086, hash: '0a00777266b69844879c5cbf901797da15266f4510a9e1b4d94636c9d52f7f8e', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 79119, hash: 'fa06a8c9485e9f2e21959d922a171b1f38ca0c499224ba6d3a55f4c24e7cd264', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 183680, hash: '14f2107fb4e9cc97c5671028a05b4f18dd2a15241d379b7eba9c1915412db068', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 84216, hash: '4cf99fae01824c9438d51a3c26acf3e3665313c818aa424a72c033ba3193ee33', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 87557, hash: 'd08bb4e0c6c3493a2a05250fef44a5f30eeff1ba22279ba5bd6a1c8c51287834', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 78092, hash: 'd852d37170e94acb4eeff8090b6261d919182ccca14f06e237cd95f57da21558', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 76308, hash: '8c8f019fa242909f37eeb02e0b5385244b86a003017d03e70dbbf77a59404a91', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 83700, hash: '88e16c56c777ecb6497524eceb3faf6cbcf2b29d2f3ca6d9ca8fcdd5c06a50ad', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 78882, hash: 'd01bf477d7569dcf7130d9db50feb59b17df564c26d8835a1cf377cb94de1a52', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 131216, hash: '558e358daac65b5563d27c59b31d16a93d0961e3717e93114f73f40e36aac7ea', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258292, hash: 'b3e2357c33ed005952d1d33474a47b527ecd6f22c56fdbf932d9d09898426b3e', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
