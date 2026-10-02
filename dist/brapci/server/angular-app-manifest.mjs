
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
      "chunk-SICUOC2G.js",
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
    'index.html': {size: 43709, hash: 'fd0941ae60e77f7eeafbabc0d3e138464d427cc7230b6170a7d1d5402f78a54d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 45813, hash: 'f2922f5cd99f8a3a40ce7ef7e70d120915c78cb884c7873225f13ea955932990', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 59452, hash: 'b69f228e3f5e019d34853f23a2ea8d4de2374ee80e3abb16855e71bc79449a8d', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 55609, hash: '4a3fa4e77123075b9f38fcd9637dfe3c51622f12333892ba8ebefe647981e2ae', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 314651, hash: '16a8ddf2a6b6feb982e1f6548998fb3b5fdb4f0410d49785bca55a1dea5e6124', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 57509, hash: '13829821f5855dbd4fee8b3c6fe65996b270729161e61e71c51ffc2f0d599be7', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 47798, hash: '3ee8e460d822737f5b656cde0bfdf009f8250340f283dff7a52e2567f8d1bd80', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 47247, hash: 'e822988800e34bfa9cbaeb953081ecc61673373439e4bea9142be1be03eacd9a', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 46418, hash: '0435b018d85a3754cdf8ac4f85a12e314d0875d594046ad8b7519773fbc75b90', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 51437, hash: '5c92266a9e7cde6540fddaa58c30b2811f35cb433803e0aeaf0938e91cd6ac19', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 46401, hash: '0948d8ffbe45c92c3a3c1100ba5af16edda8d60531d74dc5839b52f48d7f4d91', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 48252, hash: '4f02ef3b4fa9c572ca7943d563aa77272c83318dfd399fe79f19f5bfdae8e67e', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 53564, hash: '5c9759da8fc4b1da6a4a1868f77fa2c32ca199b9e5d789e23abd3cfccd3f2141', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 47233, hash: '98c4b0e0275a9da0c306182bd7beea7ae2d641728766fcbc136d1ff5d236b804', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 227557, hash: 'd77eea7364b8a60fe87a11cb0dbad97c86bcb0692e3d0700a79692802d46d9d6', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 47651, hash: 'f2538c7d3b3d0107109f9d9cfc159e85fba32a26221369e1719a757bae70006e', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 55175, hash: 'ab7cbeb1e9da7897fe2eefc577aa4cbc7f6b504aa1f807353b355643b81d20ca', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 46937, hash: '86896587c2df98169670626f5f546407e9d59134268438839fe05fe8db81c6dd', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 95406, hash: '03501447110352277f75246ce740362a8ff715822bd33a30703fc1deade94c33', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 55512, hash: 'fb959e218f9a2164e3695acf48395a6cc800dcd89ed61b4a065c8a00f5a42fae', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 48051, hash: 'c060bea1d3873982cd6c85b625328ec43adad164878f5b1b979574d0df35e821', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 47063, hash: '5d14ba1ef36ce64d8a5983b1be625a9f8fe956c58dbacfd93a5c541b5f11a6aa', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 45741, hash: 'f717ead5831b7f0290078f1f5dc63e7b694c187e68a9a1e0706e8f048f088a5d', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 46763, hash: '73101615e2299cb6c074474fbf7c3a88edc7a343c20bdbe3e8252c857012ecde', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 150688, hash: '8380c7bfc03a44e02b74596553e515d034ab1544f2cf5fcc31a952e7bbabe91a', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 229438, hash: '2e6bdd5eb3ea9b51d5964f4e7f88016dbbb22fb93d8f05c5459e0eadce1aa0d5', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 54539, hash: '81745147045e705e8777c35ef602a672d18ac23ea7e7103db3de673aa30e71b1', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 155879, hash: 'f42a118e480b603db51153f6c5940683bfcaca2aed1ce0cf27b75c349244b961', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)}
  },
};
