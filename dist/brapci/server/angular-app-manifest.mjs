
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-64CRT5RY.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RFIRDMY6.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-QXAIWKGG.js",
      "chunk-R4UZNDKT.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CVTH4F.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D3KU6GUW.js",
      "chunk-3UMVKPLE.js",
      "chunk-UYJP47CO.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6UU3NOPF.js"
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
      "chunk-6MYGVJ4M.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UKQ6Y62D.js",
      "chunk-V4GPSLXE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XRJVJQUD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXN3AJPL.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJUSGAGO.js",
      "chunk-UYJP47CO.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XIS35Y5D.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZK4GPS6O.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7JJWFFY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUCQRWQQ.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2OSY2CTY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pensadores"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-52QUVUWA.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pensadores/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XNQ4IX56.js",
      "chunk-VZWU7G4X.js",
      "chunk-3UMVKPLE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDZDTVCO.js",
      "chunk-4YVL3FRT.js",
      "chunk-VZWU7G4X.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VEWULQX5.js",
      "chunk-4YVL3FRT.js",
      "chunk-VZWU7G4X.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7GEND6AF.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GI6V5BNZ.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WFBI74A6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJEHL5LB.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWGLJTWG.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4DQ4MT6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIDLT2VD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3VRFOY6U.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IG35GLEY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3BHYE7E.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZMQEN7T5.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVZVNEAC.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VA3UEW7V.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMCNNNFR.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZQN7BCQN.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6520, hash: 'cb00249f371ec5429123c9ef8f8f82938c0111b19e14d1bee90446b6dd150fad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'f3f8626b1decc8c18f74c7f982ec236753f2717e9cec78719646b94ef32c9934', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79390, hash: '6a222de4eae988fac9dedce426ad4ac47a18bdaf094f4c76a143f50307fa2b49', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 73922, hash: 'c2538c0c78a2026d88cfe29b8e65864751b6ee2774f7b82e3f9ca9d9a4d2f6f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 86577, hash: '53c598eb3c8a381bd244c980c61ea1548d373debeb0a72f5e6c8a2d79f1c2d2a', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320031, hash: '7bcad2da68737d868125807923275fc2d80c2a6151b1c5923c0d475ddcebe006', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128654, hash: '1f1681e930a798d162b1a8f7ca6167eb5b00fe0ed4199fe0cd6e30f513f22c96', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 86710, hash: '350b0e3fa28b664a8817e320e5394652900af81cab1345ec9f2ca9e8b084c1c9', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85031, hash: '6dc6872e151497a0a81b6011994c2135a4ec7b6237ff70555173883b480b7293', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 86747, hash: '483f9bc77f73da5bd3fed1a5f24ddc25a79fced89fee0e2372c6c6764dcea624', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92264, hash: 'cf24138364ea859bd05452bd22ba2deee668bc08ea877fb5373c02459014da0d', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85132, hash: 'f28795a4d52e483cee71c6fd47bad86ca78ac9347b1873f603e27a5649e38377', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82399, hash: 'a7dd20324a57c5bfb04bb75a6d27df734fe1349f44a2b78884446b97618a941f', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 91971, hash: '55fc0aaa6009c3ed4df6c4c3aa5b2ff981ee124e03100fe737df014006de6460', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 87966, hash: '42d11549eae5439b3db40a0ff076888d388838f438970af1a11612afe0af1fb8', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77332, hash: 'd7d7995eae5dcf3c5a2eff4d9d163f57d82f9419bb034588ce5289dd47d43426', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95035, hash: '6ed10bfaa48b97c1e3022c0e10fa00c8f2c6cb1586eea8e09cbdb91f66954617', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 408724, hash: '374c37693face0bd20e2431093449329a0a32e8556cafdbaf0df8b0956f17b43', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 86739, hash: '75ccb7720f7374d15903d0bf069cac0c2dc6a4d999dedf87a0ae5e759b8e3224', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 80684, hash: '543c3c9e195d306136a870940968a797eff9ec80875ddbf0a8b39b469c8d293c', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82414, hash: 'f9b7190eaf25bf20fcf892423f749027c380d04f3bcb5a70a48a3e168a03f864', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186057, hash: '60bab8334eeb0f61377aee35f7005e0409b6fdbe4dd2c3940e8d6f06d202418e', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 187899, hash: 'aefdec9d1de418112964b1ad4fff08acdd71a5bfcc4f00f2022d7f8fca04c1a4', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 86793, hash: '16644c524a48405c2501e3e9c7c225f591672191fd5862a8709b0770d85b2fbd', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 92640, hash: '9b185cfb0a9e71ffda110eb9bdd3df7ba0686cf4ea08f0ad10ae949f7f6100bb', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 78952, hash: 'd0aea9462dccb2fea12e06072f39b8fa7ec61d4e919c8c97198ec24489cf76a6', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 262520, hash: '9127c9bc63d83e714972adc9f50c1093e60a5a696c2c84af340d3ea00bfb1057', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 81764, hash: '60fcc6d0be4f56a4fcb321ae1e1c86b006fb3c25af8065a6090c5f97c770e62f', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 86770, hash: '147e26b8120b7eb002d715309b9f3e2c07a79823d7666cdedb8e810eca956b61', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 86809, hash: 'd42281178c0e01854c31eb0c4f6106999b88fd047dbb1f0e826851f40a91dcc4', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 118401, hash: '5521ad20a24926432f53f49c23a3844a6d35884d692796980eefe06959261445', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
