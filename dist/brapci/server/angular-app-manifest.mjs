
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JI4IEYNZ.js",
      "chunk-XD5HWMGX.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5W3ZGS27.js",
      "chunk-4EUV2K6K.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2YASOTR.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RRM7BLS2.js",
      "chunk-ZYI6GY3A.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js",
      "chunk-A7SLUI6R.js"
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
      "chunk-BGRF2AW7.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6AQEAXJ7.js",
      "chunk-A7SLUI6R.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-677S7ZUW.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6I2CMN5M.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SR6WYA53.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TRQBQV32.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ELH4BC6.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js",
      "chunk-A7SLUI6R.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M5J62EVM.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O453LOEK.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ALA5MTIN.js",
      "chunk-ZYI6GY3A.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LVKI6QVU.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HDPS6IAK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWWKDJRL.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMGC3MTZ.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVT4EGZT.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RVSWYC7F.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDNNM2XB.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IT3GEFA.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5YFNICIC.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HU2K37W3.js",
      "chunk-XD5HWMGX.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PYLY4T7.js",
      "chunk-XD5HWMGX.js",
      "chunk-JEAKCVMI.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '64c6afc76f25964b92407928b9fbded732435353aed443a52f8814f66423426e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '0cd411022c583ffa809f0b1b640fca8b4ea5d36e8a0786abf28cca42e1a43b47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107371, hash: '6af62a2d7e1733ba12fd8006b581bf97295eb90519ccd6393240dd690a6e27a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 64119, hash: '3b28bedae229330c2aeb9cce4a2efc3e37eafb9436b8b9035a3e0b6ef442e9db', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74467, hash: 'ba3cd9ea150cc895615f9123639e4df832eec03692163b8803609bc08023377a', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74378, hash: '76f20db721369fb817aeff0539915946707652e9fa07c9c6767b9af2c211c8d5', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74342, hash: '9384c457a483efc9c8baf60eed48b2fe3bfaf7aa813f466aa165ff9ca9605be1', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69394, hash: 'ab60698c7d22a765863ea3ab1c3b3038f86367c7e1d12da2be6b8b69d3d71c7d', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120242, hash: '23c71b85e045b7af7d8e39c82ad076d101393a2b7130664dd64febabeee0e5a0', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69158, hash: '2c75f3da63c238dae99ddd0a88b42047fc11bf9d35994e88c3b83f59f07834b0', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68367, hash: '6a71f52db67150e94d39dad6da4d349dd88521c99b23e133e1f50ab6f8f21a54', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62809, hash: 'a16f592bb554d9c72f73610d8781c4016a6afb041f7388b7f36adddc9cc5e72a', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77595, hash: 'e6c42ce7d3c5809ac43f910fbe40cdba73e1871c46d53fe086bd7cd37c5052a8', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173810, hash: 'd59eaa4cd27a9fb54444f4b277bfae7fa3408bf87628f1e8cfe7685fc1c4c659', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145238, hash: '66301b0ee15d7cac604d76ac6d6d6a03c691a16589fe8f6a4b0f9871429277cb', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72663, hash: '2c2930621e48cb98fe884f348dc3ed4a4cd3f68c0094dc8d5758abd318a7c4c8', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 72763, hash: 'f2d73e5175f9b500d877c0ddb45881de0197fe73f30c6d58866683194d1da91d', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66584, hash: 'efdb92767b2a46843067ade97a479b864950500c0882e9c630aa2afe60ea25a7', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74216, hash: 'a679a5fb7183fcc915323678e6bb996461b8750c22970103d0c656ac94e8dd33', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69566, hash: 'b94bde20c9c72d725d9b21bdc7a5e071d5a47de280c01f2363c49cbc8e067007', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79662, hash: '691af9bbf407ef468ae65b9c1ef9b91ab94eacdfa4a846b34c894b709de2fe5e', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77824, hash: 'c5c08d4636afbcff647f852a7b5e6fb57d6191e563fc9569bf63a3b01d909a9e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175636, hash: 'c62a98fa81d795a5233ef43a781df51e528ccace68018ba0415038f707db34ff', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 178702, hash: '895f5ada58b84cede3503bc7c5988f1f40687f417958a79ca103909e01a4ef57', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
