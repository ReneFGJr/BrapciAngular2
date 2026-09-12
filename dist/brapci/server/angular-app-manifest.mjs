
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
      "chunk-ZYUFOCTG.js",
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
    'index.csr.html': {size: 6002, hash: '17f38675bb4a8977b8078d19557de3219c769ea11157c544cd471372ab246b99', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'cd687955b05db8135bd33211e64c60e0d01dbd5295012cfc6c8462674a0a3d91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 83075, hash: 'a5053f6b5a1a279f0cf793e4e0e34d30990be9dd86b9a21967838d27b0f7802d', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136351, hash: '144c994ba6c99392b7426f018de8c72f91b4c5bab8c89789fd6419188c8b4405', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 253709, hash: 'fae6da2a4020b652862196b390201f21fe96a81105577b037b98ce7b37672861', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 82951, hash: '47e3c67d73b3c87a0cbf866a89a5fff0bf41c1e7be73a5b85486b48fc0cc61e8', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 130100, hash: 'fea3fcd0b6af01c36a7443748d5941684aecd55958751bbbfbea8ad325be8ad0', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 182345, hash: 'c1867802c6de396b28b7ec549c77f7aefdd82fcad611b635e363ce85d696a193', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 81271, hash: '2e942e4137466065ad46792af15770ad73eb2c24464a3c56995317147ffd1c37', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 82986, hash: '70551c3a243dd0bcb1250bf546fb8cf9be1f46697e537242a5f01017f55ae7b0', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 78630, hash: '4afb34431f1a399d1e34f3d853014c174c30dfb693ef21544fe496986fb067e6', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 81371, hash: 'e9908ad9288dca592b09015113e5b009df4e60a4e05724b1210a743a51e91513', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 88270, hash: 'd558807347522e410fd4229bc96f3efd01d0912712592798101b0c2961e671d4', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 73507, hash: '983701a5d70a28d56f309d456a888ac2f38b454c689428a28a9cfe6a4b78d1ab', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 86203, hash: '2864eb2f4c93888a6281e3a0c1ceb68d81f1278001b5d5804ba706704460ba26', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 82970, hash: 'd1128771257e2fb977f6bd98a289af581451561bf478baaa097b025c84027f25', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 78012, hash: '25136669f363a9bbea07e7f924c1bfc6322b5e12f7b28c57d52ae789ad387d3d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 83100, hash: 'd55a5639488aa43d1935d42e2a99351e84282607982c0b1a5aa0b6906a21cda7', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 153846, hash: 'd9d8739be1c27ba4062020bf647a76ec0f7d4eaff752effc1c207324b888ed4c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184190, hash: '392312946fe45328d8e46d625f4b694edc785ab1b830df17674b7b9ff99563d9', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 86432, hash: '6cbe815dd39c34c5b8940b512e51c47e00eac6086e1227426801ee6195d26c70', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 76976, hash: '3fe5d0b5b9b13848be866dd2586ce3302f688d119516122b04110a22eb9f3592', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 258820, hash: '05e8f362173adfb2e340dcde81f14f76f8ee54e76d6d07f10408a0dffe106d92', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 75192, hash: 'a658dc3ac86a7badbbcd05c52a02298dc945f5d9cec93568662d917cd7af207b', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 77766, hash: '2d0cddd0c03dfbec64c57b70d551824b97363d9a0845952a4d06c8895dd1f7a6', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 82815, hash: '97d95a897048092ebe87c41deeff137919528bda91805e4ac608ed7e5aa78174', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
