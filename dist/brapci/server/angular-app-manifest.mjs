
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5K6ZKSST.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FUOZKQ6J.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-3TXJOUYB.js",
      "chunk-7545D4WG.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTFYXSKB.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DK536H6F.js",
      "chunk-3MO3BXL5.js",
      "chunk-NRHQYV2G.js",
      "chunk-O6KWO46U.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4ZBS3D3.js",
      "chunk-F3MFPNRI.js"
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
      "chunk-JOUBPW2T.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KM36KN7W.js",
      "chunk-O6KWO46U.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MTC2YZOG.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FH56P6TL.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLZ7XWDW.js",
      "chunk-NRHQYV2G.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RZJPQXQY.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMDOVBG4.js",
      "chunk-O6KWO46U.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KRULSH5H.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZUDGV5PJ.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J27RIE2X.js",
      "chunk-MG7UZOLQ.js",
      "chunk-3MO3BXL5.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJZ77EOU.js",
      "chunk-TXG5ETFB.js",
      "chunk-MG7UZOLQ.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-M37NDRJM.js",
      "chunk-TXG5ETFB.js",
      "chunk-MG7UZOLQ.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GRTRSCVX.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SMLKHDTR.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3POV2QAR.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IHMXZMEY.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z77WY5GQ.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y7M4UN3M.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FUSAP53I.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5VTDJ4.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ANS57JTZ.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6RRJAO6.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GAGQ7GK4.js",
      "chunk-7JBWXSA7.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YYEA2GKG.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PRGUO564.js",
      "chunk-7JBWXSA7.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MK3ZB4BH.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I3W4HYL4.js",
      "chunk-F3MFPNRI.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1690, hash: '59f9c936ab1f600ecaa62dd89933ca2bde5e3dcde4601d7e1a3e4a352a64b72c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2230, hash: '4fded42171a89da3dd4117884913564533abe89fa29d3c36ec33e76dee064637', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 43708, hash: 'cebab784efcbd8f3c15f67ddb2f298e5395811fb5f5209d440f646f581ae486e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 45812, hash: 'd0c140d6aa46910c514a89f1ae684fad88f74f72eee745d0fbeb41bb4c8e8db9', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 55608, hash: '3feb5f130b81cc6189e9a1a78ad6b0cbfe4032a1d3e401286852fcb46f8ee869', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 314650, hash: 'a188c56a6b3ea38e8d2610d047c553f58502533fba92ce8c6b930ed2fa9bfa06', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 59451, hash: 'a7ac6d8a8eb8e6999743578a5c86a326c87b807dda57ba21df9e35c4fcf02162', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 57517, hash: '1df0fc200a63e7dc1a82ed766c71341bd01f79dccc1c9a0d6a96a0ef1e804d69', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 47789, hash: '06a83d3088b0f2d8ad626a5c4bec679812954e9fc179ee34869fceec70e4f2e0', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 47255, hash: '0770c764cc250be4e4f07a36e7e67c9b3d464674fc7088ba8680111b99bee923', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 46409, hash: '0eb4b3330a0c2e38a900b9a85daf28ee05249f1885efbf699ab1cad60eac645c', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 51435, hash: 'b37fd904450b329bc10ca103c7869df3175cd4f0112fce5ccd915a5d5cf59fd5', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 227556, hash: '68c7f0d161839325de8cdc530d9ca0dd8cf935336886db2bb414141c7cc1a077', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 46400, hash: '18265d2deda97739bc344752f8081f9d4c01500fa238bd4f64869ac2843267bd', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 48250, hash: '95483ed732d04f50f9bb3dc1e5a1dd75fc38e3fa210872ea3b9c073b3e41f312', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 47233, hash: '8337cc740e8be72ecd080fdd3faaa762532741a37dcd120a37d596a8c884189a', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 53564, hash: '9544f10aca719372a22eb43390123619bf677c46382b3bd85dfa28b662e8ce1a', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 55174, hash: '0cdfd6509acc9e83466f5bd4483f8a351bfd1a8f471bbf298c419910d464aade', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 47651, hash: '89e922843a07ef377738ac30a224bf04901452e91c15408113afc2d9aa06eb90', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 46937, hash: '948b400a0b72b083039832024b444d2e76b19520887aafe2a95e5f388935f96d', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 95396, hash: '2b98145ae9577f811063306aea572b0c53e01642ec60cfe8c4958d41f06cf76a', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 55511, hash: '81057750b962cd7afc931a115e51f11d815eb4857adbfd0529e9268e020dd8e4', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 48050, hash: '74856379be731b98d8dc77fe95a5fcdf361619fb33e62bab5e7f201557273092', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 47062, hash: '0dcf6bd2f5b0d64191adf3f03f246b775dbc7ced1aa801663a6d9d8f59ab1e57', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 45740, hash: '4ea7f57c00a5257b3650317686b4a9ee69faba0c17ba95ef8bbb51dc4dc0981c', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 46762, hash: 'f9922e8d95025475d86c1d92957794b4fb09fc3bdd2ba4ee2cc541d1a1a5606f', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 54538, hash: '05a3c08df592e0efc9a4f749b2fde49b0bbd3e1e21c9d7fb6175767c4a747d5b', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 229445, hash: 'ace92f06c5416fc7e2bf80fd43a19d00778c2924f212e88aebc5e93ba731f296', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 155869, hash: '6dd72aea70722f770f60c071fa230edc1a7d84b1e6b0fe440d6b599d52c4d183', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 150688, hash: 'f35040bc64ca93f95c0a10ba0e62b0de9e031c9733c20e460b2da3f618208abb', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)}
  },
};
