
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JHBLZSVF.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5QNAHBRC.js",
      "chunk-NCTABKKR.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BLI7W5WO.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NP5MRQ27.js",
      "chunk-QWC4BB3D.js",
      "chunk-UYJP47CO.js",
      "chunk-TNROT2IL.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4V6CXX5O.js",
      "chunk-S7DS3LGC.js"
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
      "chunk-FKUL2YQX.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MJ2GOHF3.js",
      "chunk-TNROT2IL.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R4YBXZR5.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIQEMK2H.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWFIYO43.js",
      "chunk-UYJP47CO.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RH7NKZLH.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LTC3KQ2N.js",
      "chunk-TNROT2IL.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N6UQIRMY.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWRY2UCQ.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-64V6CN6A.js",
      "chunk-QWC4BB3D.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7VJ2HXP.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QZO3OTW7.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJSWAAAQ.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SKXEW6YH.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HYGONWQP.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JZ3GJ6YV.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NXVH2XRM.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XPKAM6EA.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ED7X4MRM.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T34GMNOK.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4B57F76O.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '3410b6919d879f10013df6f36a3d081581be8ebcab62a86445beef5e37b1db15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'b5b9f132e595080df1f476a0b8c12c22e3e2c63d1b020139b95ea520033b5f98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 77964, hash: 'a9f67b2f19a38cf88fd5ac4d26f314078f8fdcf2026900cba45fce4273aa870a', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112018, hash: '0bd19fe35874aca9dfc5e9290c4b7cae31c3657c6f87fcfaa926db9487bea2e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 248598, hash: 'd6310219c88028693c4ef916eb5e6fa864aea8c9b904d53c94c54d4c4c73a23a', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 77840, hash: 'f1fb3ece219aeda99ff4f71d2744c4ecfcfe21fbc53e9ecab5029af9e17fe6db', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 123651, hash: '745a3545eded00103f2f2785c8d3b68d174c5ebe30374e8b2b071c47e09a9d18', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177307, hash: '36986f0b46c2ad4461499d7069227d2762dce31d77a5165e08b706b28d782856', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 72664, hash: '0c2f8575e54ca6740308a360c31b71fd7a911e661648c2d9d14128ef1221ff45', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 72892, hash: '70ffb9c79fe13f71e765aaae13a4ace52d3f489ab30dbe68a84d83af6fac1f87', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 77875, hash: '5731f1423c1fe68fe09b04feb7b6a7c467bf95ee950c0ae47ce36250dc30e38d', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 71865, hash: 'f6ab697a0583afcf3c4137bfea7cbe6181435c1ad7496394bee48efdeaa1b99b', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68111, hash: '6990d72f2b83a64c76a6205c3108e11aa477ca1558d60149f090b6abe556efd8', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76160, hash: 'eaa358640fa4c7ac8b19c042735a96e0c2939afede15a995bbfa1c826e530e08', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81083, hash: 'd3f608b8960955355c0185103c564da7d68a9e4c61d3e2c1c7e3bcb51c9690b4', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76269, hash: 'c7b29475ef87fcfc2c11e1296e61457c412b0f0043bf1e03be13cc5ab4122d11', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 148735, hash: 'ab5beaba8b17e8ad6b54e1e5edad50322602f0c9714c765f9c79b5a79a5c4f47', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70081, hash: '998b75296be3cdb6e79240b3620b381f3253682485801ceb043aff83cdc6c2fb', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179134, hash: 'c88acf706c681d268d0b729fff88d7e4b306147e6c5f1686dcf831401941a7f6', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 73063, hash: '13b0e79abd5b06db367f95690821366e68d19b4eddb3ab449a6e194476e107f1', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 77713, hash: 'b2605cb7842c713224a48856be17691e5203ddbe05a24b48c8f6c5f4d60c1eec', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83150, hash: '117b1c01275cce85721e96c4815f985eda53815566c6846a0e07726b1286418c', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 195889, hash: 'af357c752ae634a692652c0aec4880e1e0887932f358625df5f3908bc942fbd1', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81321, hash: '6373b5f1322b2406687dd77799147ac91bceee11d526cba04b54517251898228', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
