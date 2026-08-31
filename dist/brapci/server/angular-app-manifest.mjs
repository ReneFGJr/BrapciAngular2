
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVDRPNBO.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W5E7CONC.js",
      "chunk-GL77MZ2Z.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X6DSZAES.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GGT2O566.js",
      "chunk-OX6OLN2L.js",
      "chunk-NRHQYV2G.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-YIOA7C67.js",
      "chunk-VVA3KYIX.js"
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
      "chunk-ETFZAHN5.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMTJDMWL.js",
      "chunk-CBHFFT5K.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6CJCD6XE.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJKG5YBK.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OUY27BGZ.js",
      "chunk-NRHQYV2G.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QSOCRNWD.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QBV37IRS.js",
      "chunk-CBHFFT5K.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VTTOSY6Z.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBZPPUNW.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KD6RSOZ3.js",
      "chunk-OX6OLN2L.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2HJV52PM.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X62ZVZYK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YVDH3N7Q.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH36IBH4.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RGLB2NB2.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LV3KJWAI.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDUEXUHT.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CS4D4RT6.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZWPY54L.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2T3WDRFK.js",
      "chunk-RFP7KIPN.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFYNJP6B.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MPRREHVL.js",
      "chunk-RFP7KIPN.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NYHRHSHR.js",
      "chunk-VVA3KYIX.js"
    ],
    "route": "/statistics"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: 'b2875e15d6190442d64c40aa42670f5a4d5630f2ea5724415d3a81057be01307', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: '27200e76c8368a5827bdd0ec1a77724e2443cbce838b0b1556ec0a55ceae315e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 43728, hash: '7ed590b73252956929e7adbaaa8ab10ed44073e0981acf91e4f045c5f5c0c2ae', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 85740, hash: 'ee0dfab8892dc7c54f22fab4cbe745c15c1598c0734fb076e2a674bdf1e6a4e1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 43529, hash: 'b995cc0aa7a33e9b65d9c12d09bab2510c82c7d54e841f8d3abe67192d0df175', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 43138, hash: 'a3ffed337bfbadba226bb1ea410c8b17c3fc3d38a497530acd439b27f1afe876', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 42249, hash: 'e78b2462d0857285643070edd5b6ef42eb2cd90c7678b89bfe48cc6983352568', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 95591, hash: '4fc87b47e736a5fc9f96a14e99198d25e1e8ac5ef27112f819a7ab9551423dbc', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 42549, hash: 'a2163b96a6e3cc3cd402051e785657a497d7a9d668c0be379ba2e1e874647022', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 42415, hash: 'b3279b5298bb4ac6cf17e82d0eaa4459ab38f6507a2363aca465ce6ca6cbfea7', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 50025, hash: '1b4d84eac283172413392ffb8b6206dd2ddba0ffee9426c523157a668cc5d9d0', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 40852, hash: 'd8e4feda85a604a6135894c349babd7e13e3e99796e8f142c57b0394fc5d514d', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 115414, hash: '31870d4ec7c128295a6fe7775a4804b595358acb475499d1889f7cc53c360cf2', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 222854, hash: 'ab9d5e5b94a28cdd496eb8c5a4c6cb6c3834f2a5618a3655d590f7ad8eae50a1', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 43267, hash: 'b0f7e5d7924ac58a2ad2f5e5185735605f0fdb50673d5900a657b8a0d166b63e', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 51689, hash: '577cf5f490e0139c635ce73de33fbbf64699f91495f6a7fa08ba9ece7bcaed2a', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 41887, hash: 'd0231a90716edab3299a379f3a9799393edeeaa04970db660c091fe1c0d964a9', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 49044, hash: '494b7e18bb51dcedb4b57f3bac1b499b673888426b14c6b5dd19e53d92fd79e0', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 50182, hash: '67e4581b50012d7f96f52e2d8e3ec9c15331ed60ac73aec95560b6ba190856ea', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 41884, hash: '4feeaf7cf4654af6305bdea7baa4ad6cdbd11fcd9754970d363b3387a9d7d637', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 151403, hash: '89e8bec97b83ad477f261a6a69b67ce399c462fd0e12d70500157e3af13837fc', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 146237, hash: '34aa60ed9c182044f8cc2ac3164e9a4342babc89c7a54b74d2df2af3e6877270', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 42711, hash: 'eba0bf08e8a3547bcdf684b0379abb2864e5788d8707733c6f86e4cbb6b94400', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 51093, hash: '83f5bc7fe5d59847e7fc990312027eeb7514f6d9cd563341635198fb936c8100', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 41798, hash: '441668e56158d8905f20a7a9b7bed167f9e4871100688f49f6e2edd579d66961', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 224952, hash: '266efe5bf7c5bab9edd000e642f95caceef95304c635cd01b828a41467473dd6', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)}
  },
};
