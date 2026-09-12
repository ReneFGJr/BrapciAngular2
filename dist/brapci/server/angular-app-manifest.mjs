
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
      "chunk-GYO7QA5B.js",
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
    'index.csr.html': {size: 6002, hash: 'bea22d1f054a5b7be5306128976d8e79233827d8a8b4a720f9c5f70388e38470', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '8cb857ba7a1100bfe619a17911199bd2a2b6fa20118bbb8787cc745302690084', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 84191, hash: '45511e648cb009861b851dc8eb9064433e4490554b49a260277bbdb7cc251146', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 114048, hash: '3e5d67a45a4518f8299da9b83c1de42d34786ca38d447328b1628fb8f92aa988', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 94143, hash: 'b2d121ee5321f1f1564a099c69fd299adb30353b0153aab73198e8c7bade316f', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 113866, hash: 'c4a1ab6361cdaa4c8ddac98cec6d22a1cf317b4a1be672e8273b3ee9d185c2b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 77352, hash: '53bf0d55b7c4599711ef6309bd4a535ceadc724181c83b047b27ebb922c4e7be', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 84067, hash: '181607666716bfe3f8f410e14b824f09c60b1318282d8dddb7eb74065620e93e', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 84102, hash: '5a0796dd9b2d556285b3cc63adf21b19247e3c133e073af96c3207a9663853ed', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 79746, hash: 'cfc5e6b118970767ccf569e87cd4b7fd49fdf73eb08df2ce067e9002401287a2', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 82487, hash: 'e1a6bcd59f5b457532bb09972d2489c4bf0f27e7b8351f2f5e67e30d08f73c93', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 82387, hash: '96b61d82500f18d40a1b9ff0cbc42cf526c514c50a38b0982279c85ea87fbb8d', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 89377, hash: 'c6a5e6e2ac5f412375a74f12190362769186bd4545e257efb00b0955f572b568', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 74623, hash: 'a4ae7bc6b2fdc1e5122f121c8c0ce61733d38f80e900c6b211168917f71b96c4', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 87310, hash: 'a5d103f7c7b3cc90ac6cea3cda155f0e3e686c05de7cf4e1e7a105bd189e004c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 84086, hash: '13326ad578fd5f87205934c2b35755320670b51dec61c513bfd7a9dca91f395d', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 79119, hash: 'b0e21ce88c38f8ed532f94abd2963cf3ad6bfd44cc2fa5f2a98de848ed7b97a6', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 154962, hash: '6defbeaaaae3eb1b3b522a182cc9438934e40ca072f6d0121ebb8a306652eda1', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 87548, hash: '80a61e12b4e032c585d91480ad4e819500e71c6379d7b189b74afd7d29d41e53', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 78092, hash: '231b4a499e94612c8183facfac184fa7e5ea3f2077b6b8d4cf2f52766fa51f66', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 86208, hash: '1878020eb6d8fe10d6ec3d09e1c9599f5873d309dbc977266c10322ee808da69', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 76308, hash: '83dedd2ace3bee93df2a948d1d6d25f9b99121a5df1805df92466c072dbe801f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 82023, hash: '36b6022c79e7bef799fb986bb5c087facfd325ccaf27255d83fa7ef8a205dcae', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 79249, hash: '1493f5b9fc02db0f379be80353509d0d43bb1fb3b3c2902809c148da16698be1', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 78882, hash: 'f50e0962de3f3da0ef7649ba910c47f2b3815e87da6471d8197ea805f547f05c', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 76096, hash: '0448164a4f2da1181394720718236dff5c4adee4929552d7197a6559c68721da', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
