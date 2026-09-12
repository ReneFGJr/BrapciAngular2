
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
      "chunk-SI4ZZOBJ.js",
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
    'index.csr.html': {size: 6002, hash: '56fc45b3dc3493724e748a0c09644b6885e26cc25bceffd589603f74f6374a6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'e8765eb8c8a528d6cb927b3cf68e44d7830953c2df5a72e534f2451d3ce9108d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 83032, hash: '148346bd66398604edf8009058cddc333dd997e829de0f03c9530516dcb94f7a', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253666, hash: '09ccc5110d575b6eb275ebd939faba1de7b571bd7f69738e874d801bb1131489', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136308, hash: '878486bf9789bfbbc788d01eb870414a5f62d39353d7bfe610c587ade3cc94ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 130057, hash: 'b27def40a205afe73dd5d6f2302c98dad1e5d44ecf2c2750960527e6bbb97b2b', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82908, hash: 'b5b377f300aa4d07036412742052099c15ecd1e38fb9086e64f04b45aae2ba66', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 182302, hash: '6447389a3d28b84957030b3edf3af82f4e239996b16fb4cdfcc0507c41644a68', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 81219, hash: '527977987325ff9db2d559434a6ba1592f5f78a9d0b881d035af1bfe24fe516a', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82952, hash: '208b4423881a0fd7e02a66c2cef2e4162baa45423da3f1e4adcfe4f43ce18d07', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78587, hash: '9c1192fa1b7a6c579853890747fa2015749caeaaa343128c3b8cc9a5d2934531', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 88218, hash: '264c41f6a13eaf635eb9bb8656f34b09c8b8c5ae8c53a531b3f7f0c317337fc3', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 73464, hash: '24f63a2ff85c019643beb9d6a11dc0721f9f82f3f6ed21748441cc01d3572d79', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81328, hash: '2a1831d3d2d1971871f1daca91fbe4fd1817086a05ba387d6c9cfedff66048ec', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 86160, hash: 'd1f9bb485e8f26fbb16f9fd688626983ebb848ac1dde3ec6c29ae48fcc25297c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82927, hash: '5d3aea1520efa914ab66832dbddbb885ebfc5249c66703d627fa7f923750fa5a', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153803, hash: 'b40f8ba4b7faa63acb51196fa9acfe59bee418cee18829cc370cbebf619f522d', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 77969, hash: 'ad571301eb04d544fca45ac56e7b2b320136ba55aaaa093e809b1da66c9a2239', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 83057, hash: '2a185fee85462961c174bc8efced083b1dd22d603a88c3623c8ca66ef1d763d2', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184147, hash: '6d7991e4ee7c468b7c8e290557b096fedce4f0ac7105b593aad583f26b85d717', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86398, hash: 'c082f581a7217593e82ebb80a795b14e7dfcb0c40e2667d2ff2df2e09a124040', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76933, hash: '3a7c796a50e1830e94e097addf54b9748dd2b52eac1926018c437701aa774f49', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258768, hash: 'cc515914eb50ad5f33bd901a23156df13f760665b32cc8a50b40c22a635a4a32', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 75149, hash: 'b3b1ed3eb2f54128221ff6c7d938c6ab70771cd98467e26f26688f80b1b5e6cc', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77723, hash: '5eda871f50fc57e148eb9d985b984874f8da928d72f52a6d8bdd727cce9f380f', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82772, hash: 'c969b97e493021feaa56f4202566dc1c7161c433f437087aeb3b37c3972bc0f4', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
