
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4Y3H6I47.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X6EMRSB6.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BHK27FYE.js",
      "chunk-NAR3ECQH.js",
      "chunk-V6ZL36VE.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
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
      "chunk-ISP53BCF.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XCJP7PD.js",
      "chunk-V6ZL36VE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YNS63RFJ.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GDRG4LR6.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PF6NZ7H3.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3OCUYUT.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJJS7VVV.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UIG554AH.js",
      "chunk-NAR3ECQH.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFU2FS6O.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNCZOWVG.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSWF74HP.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAFSNNYM.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K7PBJEZB.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVLKMVLE.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-APX2ISWB.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PU45AD7E.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '56cdaa7e2e83ca33d32acf707832edd65d3141c44e9cbdc102cca0516457faab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'c0b39e3c19cb74667b692a023ac900ca61d76a21be687e8b365fbb51365d83c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74016, hash: '956cb6df234793c29a39a7154cd0f0293da6390f891a7cbfcc1adfc4e9a2623f', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107282, hash: 'a16acc0c3b64051c6b631a0cc89df2eb2faaa9b6250fe4989718fa04b18becb5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73892, hash: '6d7cd46fa26bce0c2bc5d944a1d65b4bccce125ee16cf8d39cc83afa44dc79e0', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68716, hash: '49002fd148277c33da5f7ba1b645aeeef087ef1ffb21ac43347333c894af6d3d', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68683, hash: '30235ce737f3969f283f15e336cb3c2131e0d4cc62b8fd13acb14c432e12e22d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79211, hash: '63343dd0f6775f2738c4362942042427185a8bef57b0cf838c1558b18f2771fa', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66133, hash: 'd3de82e63a594e65e49f87f92e69bb5a1a926120629acaf76574e9e920711056', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173350, hash: 'd4fd84ee2ee83fd761ff161ccd0a53e871b20ae3d756c73bd9de08b240715c7e', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175168, hash: '52efc213b5944d36137395b28ef63a58f83b572488c780bc15f1531d3022c5cb', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77135, hash: 'c4096573818477159e6797d1937f730cb33270e2ec161186f8e7ecb8194efbff', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73765, hash: 'f1f0d96c7bb7ee09df0c849456b63f05f297a3b3425f778a14582e44a8f5c885', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68759, hash: '9466dcbc8439891d228fb61d5649336376c57c3293dc5f5b4f0cd2ce23526379', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62358, hash: 'c432b3cd8137895b57500d9ef17246650814caf5442a73064ffc8be3552346de', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67917, hash: 'b230c5f4c6e656cab108728835d2a2096171aab5627cef71528b4065eeddab70', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77373, hash: '8ec64e50cdccb05aef80b17bee18c240d438deeb6e137f52f631f6dccee74516', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119782, hash: 'b9a33d9e92c543b67f4cb34aa74e4f7117474b5dadcba377be211ffbf9d56b99', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144787, hash: '4ac741da9cb910816cabb3f094f11f1d6f8d48312b98cb135041c0dbf5e959ea', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
