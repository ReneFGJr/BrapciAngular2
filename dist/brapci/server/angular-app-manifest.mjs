
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4OMHN76.js",
      "chunk-QDPFUHUA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EL6SUADX.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YKRHPJD5.js",
      "chunk-BICBUGTI.js",
      "chunk-ZPG6C6CY.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
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
      "chunk-QVNU6COE.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5VJG4SK.js",
      "chunk-ZPG6C6CY.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DTAZDKDN.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YYIVLWC.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ER4ECLFR.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WVAPHC7U.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5GSCNP7.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FWDKSYA3.js",
      "chunk-BICBUGTI.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7OANO7MG.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RQOZS3EB.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7Q4NOXUE.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TBZH6RZS.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PBULQVAV.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PMAZQVL6.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMCEP7YD.js",
      "chunk-QDPFUHUA.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IYKQ4D45.js",
      "chunk-QDPFUHUA.js",
      "chunk-KOFGVJBX.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: 'ba82db9471a46696d9ef91bc6dd92b9e9e80dffeede04cbf86a320f63f47f9fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '0aa614c2712a6793a9d8e29eb6ef4830a05bfe0c7858ddc3eb56627002546277', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107071, hash: '5402d4a71ef9c24ebc8ea3f4e6eb8d1361a972e5d164807eba99029e2fafb620', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73805, hash: 'e4daa30a7d50d3d4fbc706119f7aa58220a280806be70410d491b27ec407b341', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73681, hash: '70cc109c358b0d2df3583b8b0ff98c0e1645fc87d1e8761d5132dc5c087d6be5', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68496, hash: '693c8914177f3c7dac323c1a809797774784760f81221ed282692c1bc012a7a1', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68481, hash: '3eb93990dd03413f63f92e0469d5232227f663c3588e92eba3404c095a487e32', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173139, hash: 'e24e588921ba519497a260bf48af25b8afc0e284cdd327ebe8f36171f0928e88', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 78991, hash: '8dc3e236074398c0b633881611150eea2e80a656833b694de55fb72ac0de820f', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65922, hash: 'f292f697625845e6a2e50a5b1b3a1aae105f2bc602dfa68c68dfbb7c143ea8ca', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174957, hash: '16740d3111463834226d65cc46dcd8f25d5d9ee67c683abd4b2456e955c17eef', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68557, hash: 'e4c9086bb92f2556efe6d2748f2804569d6093a49d4d69882e4486fa0ac8d154', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73545, hash: '85aca8b7b7a1038096d3377254fbc347daa4cd4eb5ce66e6a23e8e2e51f8f23b', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 76924, hash: '3a019f15ec99ed24e57e0f35611f5b2891e33aa9d99da51b205b014979ab39ea', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62147, hash: 'cf4d32b9172bdc0e6c52d76608ddc6f36c0d84bc3ce5b249497d210b6180dd91', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67706, hash: '74a6f51cb3265e02bef64f505247839a1270c974d3dc5b0dfda4139ce70d8b0d', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77162, hash: '34c36c0c908db2d58de3de39c110d73e6f10afd7e8b462a65e302474ebb607d4', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119580, hash: '06e2c8acf7b389620449be86b26daa3a32b75f83edabcabae6700952b5a5e537', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144576, hash: 'be719dd9e63ffc11de1b19b304d6931ec774812cae962d946a2ca5c625763c8c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
