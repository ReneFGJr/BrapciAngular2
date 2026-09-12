
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
      "chunk-3T54G3QY.js",
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
    'index.csr.html': {size: 6002, hash: 'db0194f0548ed5b52f93f35b0df57cf5d309174e28df31e96543e78dd8cda4e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '027b8bdb6d04a4adfc0ec9c9e8236a1a9d2c1dd54f865ddda218c80da53418ae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 83032, hash: '1b455f2177e7b3cb7380ed53cad61368da45ab3dab4bf3500745493a08cc18e7', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136308, hash: 'dcb6869e07a5eda634dd781890375bd425da71a9a295c4bd92f2ef27b0999494', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253666, hash: '15ff93eef22fc34c85fcf2bc249398de87f3ae0f22f5cfb7940431b8ea3d5997', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82908, hash: '797bce487ee3b4029696037af6029c3950fc241d3c03c09aac5487458a94c033', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 130057, hash: 'b96c5e9b0e6972c68c039669b2f19e88b8d375c30af6e3a98ba6278cb2288e51', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82943, hash: '80c5cc4a21cbe2d1916a57f4e5f86ed2b07cbde7c387960cef91855a2c065cb4', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 81228, hash: 'd3b9da8077ed9301aa21d363f993a319ad9864fa912a0e7e09c1973540e85f23', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78587, hash: '5c66af4e8d9418ae00de515977b0575799404e71666b281c2b19a70f939b1ed7', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81328, hash: '2ffa238c58eb49bea40f36b1ffd3b6c3941ef6bb57b08020598b6ed0b9057de3', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 88227, hash: '1be22f27d16b83acd95951e69ee213c89a93ccc04252be8160b9c69d8f60d69e', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 73464, hash: 'fa7769f06076f2b79fe45ed33ba23ca55a48c2e9506428dc3fbbc2073f6f4ab0', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 86151, hash: 'f3c996cf952fe5eae932f24d4201069724f97ef761ab0cb50aa364d0787c043c', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82927, hash: '949f07143ae5527a9915998910b4a5ea668738dc3949ca3f7b66176ced1246e8', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153803, hash: '4a206635420c3c7398b10852c8fe375bbc45896fb378b436828119a8dae9ab30', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 77960, hash: '4c601b03c4337661d09e21e0561bd4fef50136a859f668c3665b858d6fc6b0a4', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 182302, hash: 'bdc2156fe4b5ae18b360d94566062657f7419a08518630e813c26e9ad95c37d8', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86389, hash: '058b2f12b3d950fe3773decbc5693bf916ec63db141b0d32a54bc41cf314756a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76933, hash: '90b18508e85a8765f0159d8ae91ad3e4ed65453d5769d08756721b76b6ca87e0', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 83057, hash: '06649d2980e328c3d89752f2dec565c01647be1d06c879553203d4b08c67809a', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 75149, hash: '94eef95c25e32b34e94f6ab30d13a6dcdc4037523bc28fe89291bd697ea58b99', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77723, hash: '7d555817d0141e4931a194c7799ded2c2947b4d23d0db1a97c0b838d654ae3a0', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82772, hash: '54e52f6d899bdc7b74caa03d608d6e8fcfff7a00a05f8ea0999d9bbcc0d54b78', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184156, hash: '5d26f3603c50af3c8b3461c74c55122fef6dd4926ebea3fca4837414c84b530c', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258768, hash: '0a949117d83974747bdb73b0ff9175a3161fc2da8a90a283ba0a7f2835896c74', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
