
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SICCAM64.js",
      "chunk-ULAXK6EF.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SN6JLLSP.js",
      "chunk-ZDKW473F.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLH4LQN6.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LKAPOZUG.js",
      "chunk-CRGTNUSW.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js",
      "chunk-6QUJCCCV.js"
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
      "chunk-C5UT67R5.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EFEEDIK4.js",
      "chunk-6QUJCCCV.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VOQVT2R4.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4OPN43P.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GTNYCDZC.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IGSYRVIB.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ODAIDZQA.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VNPH3JN2.js",
      "chunk-CRGTNUSW.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ARJNC5HN.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MVZXNGSF.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-37R4O7XL.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U7PP2WM.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJT77MV6.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MJPOMLRE.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2CDV3HUT.js",
      "chunk-ULAXK6EF.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RBBKAFN5.js",
      "chunk-ULAXK6EF.js",
      "chunk-EXPWHRGB.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '76c485c515f7b42150c5d0b70af4059c74ce66d19e7d0ba5900da4adb3d17546', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'd50b5b73863ee9f3295ea70733009e35340a66268efe090374bab04e1daa7d82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74078, hash: '3000f6f9fe315e1a07036bde7f0da00ad2bde9d641b3a3784d42ffb57eebbaa7', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73954, hash: '9766c01d4a9d8ddcb068ccbbdbfa1aba2d7c161f427c4aee5497bffed9ab0290', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107364, hash: '0601133556e4e7d4146138197e616e339cccbd0c9c41e00690099767a4cc7eba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68769, hash: '94fdbc15dff3bf3c9562f3d3cbcc34d6de615f19ad06ae2f8044394eec3244dc', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68754, hash: 'b1d1cd2964838810180792f78e47ddcdca29fc536f97f433591ea45d7e9e2e7c', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79264, hash: '12a7277534329e0a06de9a1f75be961fd5bb5987a0e790fb244fcd147dd6feff', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66195, hash: 'b1f8bd9207f58df7d48969646d3aac7a0ca1b867c64851d16e94c64afeb56e0e', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77206, hash: 'dd2fb7d1b8963e93b66ee9f296a1d9279340f38778b4a87bdaa2920c88bc10dc', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68830, hash: '2752e6aced608d951e1b8d3420b3a55ecf9597a67d24338e1e4f424e3ab209cc', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62420, hash: '3766d1bffb1328abb5e9f503f92ca7802f0a0e87581a111cae2a7f2cb908486e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73818, hash: '334ef7656f845e74ced599ffb484a974e8fba640b19a92b5807efcc2c3cbaeeb', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119853, hash: '66bc354fa4ac2ed307f4a864d92961ca4832eb7126f153bd8f31432eeb7506e9', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67979, hash: '7571567896b3ede0cae9d4515e2ec6b617065306c19876f8e396c0d0e9d5b70d', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77444, hash: '90437ca1181c930e5a3897bb1603366e96c86f4391a6f699e08a26e2920c79b3', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144849, hash: '5a6b43eb5ece8467041d134d4d5209f394bf622c754203ea44989d8e23f5b7fc', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173412, hash: '2a0facc9204e1f2b23c9dedc676579b6c9d5f39b319f7bc997a665b9595c7d64', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175230, hash: 'b0328aca1f6c265dc09ef3b81d5ee286b06ccdf8552217d7eeb01634aca731d3', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
