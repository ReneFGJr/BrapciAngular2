
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
      "chunk-XR2VRSCV.js",
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
    'index.csr.html': {size: 6002, hash: 'a4bfd41f43755b92a69058ef238ed46f83781fe637acdca6e63524908d152fac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '0b77c1123b63bd412b0debc15b578a8e51d315011fe25778a8869b3b6a74022f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 83032, hash: '462bd88ab759328f9898c41268d9d8da2ff4d50b144ede24b1acdd155eeaeb9b', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253666, hash: 'ebf44d4d87a8115fb950cf57375bbe3842efdc4b74fb796f7f847feb4e72d235', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 130057, hash: '0e58259b82b238cb1d210b0fac4f396ecd6911eb36e5d17810087a64e03728e3', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136308, hash: '5a2374679d0d1056993f82f9922758471040ada69a1fff9cff5c70216a19705c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 179032, hash: '3dbc692d13776e10acfe089590cc5ff8d0d0887342ad2fc9f157982938ccf827', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82908, hash: '96777aac52ba644c1bdd492216452a8e47f38872b6981b05152b4a100217ebab', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82943, hash: '2b0442e90e32d375e98598daecaf5fe090dcf39e10e03572a843f4b19d4866a3', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 81228, hash: 'd389ecc2b559d10232cf92a80595c4767e93572a81478f447c2df3d17687677c', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78587, hash: '7adb385d1c7a4f98cd762551c8e762fe6ba08eca62c6fa9f73b66315f9e8716e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81328, hash: '8ca424c25857c48011f63e5a908c25f5007560252dc42d74ae74cd6adf715f01', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 88218, hash: '7de3d6639379bb26982cf07f2986e5c864474f149c0411138971e1d23323454e', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 73464, hash: '0f62f8e63d0a130a516d5f7eeb0be32c5ab714532418385c14ceda4ccdf6cbbb', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 86151, hash: 'a9c0f3aa395914c4d91cfc882d7db3ab464a7b44b090acf11450fb634c4b039d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82936, hash: 'b0df5072b145f531f76bcda090fc969df0586f06a557323aec5f278f10c084fd', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 77960, hash: '7c31b25a41103742fc07970d48901f9e21028e538ecba78a4ad2f3d4cd6ae9f2', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153803, hash: 'a1e8ea25d758efb5da59e80d69f4ebad0ccf76467aef012c9279ebba90561b48', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 182512, hash: 'b099c6898a3d7a46b475805fcdc2638188165a20ae142fbfc01db5da2a4f84cd', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 83057, hash: '83cb57418dc151e5b7db57276d046590bf4e1fcba01c9720081105dcbd589d10', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86389, hash: '99992eb63191bdac287756f9b881cdfa1a1119c1f6f4a72932d8a6fb7bf2ae3e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76933, hash: '92b0a3b9cb0599d8d3d378a5ea2b1da93625cc481ded8a3f9bfc43a294d70875', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82541, hash: '17a9aea09e2d958488a954461f6f6661a79a0723a54f7ae33e9c8a35f8a249bd', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 257133, hash: '2e091e6caa8ca0c4efb6534df36804294708bc2bf391293254791b7cd0638561', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 75149, hash: '363ce3882eb9146b3e3c4cd9fd739044127f4b84bed10269669ff48c03eb55a4', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77723, hash: '40f76296743736a5434353f24c61fba7e0defa47bd5be2aeed7aabcb20c8bf82', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
