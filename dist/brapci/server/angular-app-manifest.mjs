
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVOZOUUD.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DFSEZKJI.js",
      "chunk-DLHXC6NF.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PASNQTXG.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2ZXKR4ZN.js",
      "chunk-K5WXXQG2.js",
      "chunk-UYJP47CO.js",
      "chunk-LBW7UEQD.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FEIPAPAK.js",
      "chunk-Z5BLEU4G.js"
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
      "chunk-JQC4VHJE.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P42NK6I2.js",
      "chunk-LBW7UEQD.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DQ7OCDTO.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q2FICCEM.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JTHJFV7G.js",
      "chunk-UYJP47CO.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JSQMQCNU.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NJYIM5W4.js",
      "chunk-LBW7UEQD.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O22KRTSC.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NUFBPVKW.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3OEJ2OUF.js",
      "chunk-K5WXXQG2.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6A3XQ4YG.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KPERH6I7.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L5VWYGKZ.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IMPFPE3H.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT3RKGM7.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AATOVMN2.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7FNKRMGG.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OFF2GEPH.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QLQNB64C.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZLWBYCDR.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NFZJM45N.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '6dca5df4db63e6f490ea601dac8b105ad73bdad6b2cad6a5c726134fbaa6cd6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'f759742a541dad68106e9f70097266dcf19517c906ddcf35253e6ed7073e46fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 77964, hash: 'eb28c13c80cb1e44974abb95fd37972264afde6043fc3cfc56ce4d34cc77139a', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112018, hash: 'cc8e6f969d6cdc1f59c1a4010815b645679073c73e76e4ceeb9a63d52010957e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 248598, hash: 'a429c05be3173a83830b9dc167c6451061d470c1aa4e60e0369216ecdf1cdcff', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177307, hash: 'd629673e2a942edaed953b8cedbf1666c706cba8debdb6223b812e89de9c1e60', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 77840, hash: '557e8964e17b24afe9256f27cd4cea0a0c997b898add9913eb3e5b72ac191d56', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 77875, hash: '0565fb845ed2c308cd5018bf6e036399a4ad901aa67aba6457ae072522f690dc', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 72901, hash: '2f937a6012c7ce8a1f1c925c60c9b13ef9cfa2e419523a8d6f7388d17289f6c1', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 72655, hash: '7447d383b33e735250f40159ffb25dec5b7c545a82068b838834e816307af6fb', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 71865, hash: '10279c9bf9a9ce3ecc0b903968b57c464e15cec51dac46730701e22dd57b11a3', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68111, hash: '534ca459851810b529a9357b7127554f086f5d16e3340bb048576ad09170a832', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81092, hash: '6d1e5960099f01b08b1a5adbf3b5288277338a9d0dc81e838f44d4da1a185f37', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 123651, hash: '25625f458c231cd0444327e6ee8824f2c024b3ee7c0271fb0d48801f0fe30797', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 148735, hash: '3656860a8ce4322e3590549cad60cd5b9a8f2a5630ad0865eefb0ba6c6d44710', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76160, hash: 'bb81a698582abe6f419b9f4ffeffb5b00e37cc9fe01c304627f3f66a699eac62', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76260, hash: 'cefd839481ee1e1d4e7c1399426423bece42a8fb93b81de25804b8a1956936ab', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70081, hash: 'babea91b4bc88ec73132125a0222d250074fcc62665072a196bf27408ea14fbe', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 77713, hash: '78dae001e6650229671657d0dc9317166d6383e00ec5074b91a46bfb884ebc9f', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 73063, hash: 'f5a46a2d698ebf275c26db796a3060dbd6ed488da284ca6d8882c38b6faa107e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83159, hash: '89a8d9f355cd0dec239b5089b38838bbda6baa972e6489bb4e5701e255dd7b13', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 195889, hash: '9448dbc464b7f6a5cac17195b7aa60e3e6b9d29f22bd6b5f0df81c04beb48243', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81321, hash: '491968d0459e3f3204cc22df8286268c7d0a6f1a95f3ff358864b84a402a910e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179134, hash: '56abf15f1a6c4ce6ffe9ccb52484bd3f3a4075f0fa3781bf22972a9785f76704', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
