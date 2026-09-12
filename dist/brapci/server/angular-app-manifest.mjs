
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
      "chunk-LXDRVTFF.js",
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
    'index.csr.html': {size: 6002, hash: 'e8e9efbcab80cbec374c08e9ea71899101342163890e1630a9f307e7580c0e5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '1d606898aac27c3a289b17c070cb9e2040a964411024681bd35a84cf5d174c2d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 83075, hash: 'b1477ea6eb5bf9ad6b8e53c6f660586fbc3aa6c10ae396f15d8b7605e950ea81', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253709, hash: '7aad2aa76ae010cc12034202977b3b616eccc64722277c148a8a988ae4254cc9', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136351, hash: 'f2e068f1298f530b542984ae4d4d6f1ab3cbe2a1f30a4e871a0f9cdabe6d72db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 130100, hash: '6a0be219e9f23fb296a96a6dd2913218f187e5dd3ed90bce732b37006a575c05', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82995, hash: '9c6acfeea58ee757c2542e6d74ef72aadfc6abaff8688dad3edb64883b266a56', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82951, hash: '26da5d9cf9ecd1fd7bd39cf904a4cd9b8071520ee3e759a4a32fdad660899c4b', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 182345, hash: '16188dc84919830bcaa372c19b5a19dce4ec2393ed800362120d14f86fcbc4c0', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 81262, hash: 'fddec0c12829dfc835d3e0e3dfe74964d0eeae1168ba60fbc072721e9312728d', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81371, hash: 'b0d50d407603191133f3e56a171169929bc0e83835ceeee8cbff48c0ab014e9f', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78639, hash: '9eb1f71b0126737af045db81f25902553c180a4b8533f8053a7f05055f08f762', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 88261, hash: '67b9bce36251d6a76d677f0b582ff9e87ae819643ae7741a650230de6815db60', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 73507, hash: '8bd57ae4cc589ddaf48d2b874b3cc83a4aef4acf36890c6e2600f72d46ba0402', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82970, hash: 'e3e349fafb2885e9c4d6e895c29e3ea8eca247669de4872e3c1dce87f580e6d3', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 86194, hash: 'a1611beca18b0a3c4c4f80519c3f284af0a9f4844d815ced2b2bd88cd6a6e1d6', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 78003, hash: '94da3012e4c643bc92e143479fc4dc68f37da5ceeaacac762b9ffbe3ec7fcf34', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 83100, hash: '5b7a1d5bc8d66636bf870af84281fbc5ecb586925cd436359221c5d34fe20099', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184199, hash: '6b31c8c0214f1541cefb83ad728e70b78741eeed684fb242c482cc8800e782ec', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153846, hash: '3bc75e233942574ce21c62bb0c1238c159f109714379e69727c870dd1b7bccec', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76976, hash: '565bf65172d68a9a4f03ca1b1c7cd3726be9f5d00a5e0d802735514a1d21c169', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86432, hash: '9175dca2b223361dad41be392aa4157a46dc8af073efdb123277c089fb3227b9', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258811, hash: 'fab52c666668f426ccdc0ce8629f434c796c2dbbef31796f51efc64f41457a62', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82815, hash: '5e9e50114d70eab34afd27ea07522d4a4cdfd772af1b2ab8d863dcb0f13e1446', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 75192, hash: '1383863e6c166269133a7d0e37d6b9eb7ab8b2b755767557a08d0def329201e9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77766, hash: 'dcd9d4f33483d7245231b28b8846c7c95a37d6368ac238ec118a81ecc71b1934', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
