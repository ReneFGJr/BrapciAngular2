
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7UBQVBXW.js",
      "chunk-4TKDLIRL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7KNB4MOZ.js",
      "chunk-XVN7D46P.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QTWUUMIQ.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NBHQYF35.js",
      "chunk-NRHQYV2G.js",
      "chunk-VI3NFJNR.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js",
      "chunk-VZ4SFGJV.js"
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
      "chunk-URG47K6R.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RB6QVSGK.js",
      "chunk-VZ4SFGJV.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4OVXEDVG.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TI6GSMNI.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYUKWKL6.js",
      "chunk-NRHQYV2G.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNUTCNRI.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TXQZNPON.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js",
      "chunk-VZ4SFGJV.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R376A7PT.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WDYUB6T4.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EGES2IJO.js",
      "chunk-VI3NFJNR.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M4BN5IRZ.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAYGI3LJ.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6VC47FXT.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRNLBLIH.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RWC2J74Q.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SJAKUFJF.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCPFXTOQ.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GPPHM7GJ.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKAQHXF7.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZBTRGBGG.js",
      "chunk-4TKDLIRL.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSP7XEU4.js",
      "chunk-4TKDLIRL.js",
      "chunk-NVI7LSCX.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1534, hash: 'd8461fea83f78b475791e5fa0a19704a3ae284ce2feb7fb92ff73c4c1cc78e1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2074, hash: 'a1d9af5307839ff029f7b38bb23484f48519d74fb26638c8de14a6f6ec684b5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 37145, hash: '3f31598f01f3318b1067393b4f1620b86c8139bad1afdc91541ca0df1b54a4b9', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77345, hash: '618333e530867040ed687f4a8ba33e8d761869efd1768826abc5534e3f46c062', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 36946, hash: 'e622638feae73c78210acaada25cd7a2ff7d70c5a20c478e9a211488fceeafc2', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 36555, hash: '6a4ae8bd854b6aa7264e51f647ea4fb18ade5d3d0e2a226b5545f60c9a4f8a91', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 214808, hash: '31cb404397a5c07d973715f87193cfc470f30f0ec14f9e09c574d834eb20ccce', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 89104, hash: 'd39548102ddc04fa7ce2423308977e9651b327938cbbc882f9893d92330e4855', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 35224, hash: 'e5af10dae79667022a38218836764448c61e88fe363d196f694c2f4ac168c6ec', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 35296, hash: '805a5810c6aa42aaf012c922aceb240a735869cb453a931dbefe9dd478a51e59', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 35304, hash: 'a1e9cfa868d6fd8652c4bd18852c298608d7d84b68f6b329aa59f8d336ea5af8', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 32189, hash: 'fef6fa2c097ed9dc25cb9254acc6cee42d35b8624feddddaad7e1a0605a9690b', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 108822, hash: '33a618a84a5eff656bb7599b92c03210c32910dda45d4424508ee9e94b2bf405', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 35657, hash: '136f447c5390a442a904335ca06708a9ffb46da879a97e90bd8d653553b312f6', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 45106, hash: 'dddcbb0785423afa689850f1f24f8756b44dcd0c2e266336d54748bae7eacc9a', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 35832, hash: '1cbb6708a5de17c6d2f0e82ae5663adf653a8b86be14c52c23c4bcec323a2819', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 36128, hash: '1dfe0b3b7f515e6b2b1a7105ae62e582352895480873afc230f87bcded477bab', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 35495, hash: '1d49b079bacd91fe296c739e067008f665c52cc127c4aa8398a895ba5000acba', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 44495, hash: 'd1f460804b94e06d81fe563ca9fc90e065c6a54b9d38d0d84232c963c32993ec', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 43433, hash: 'b9f0940ef88abdb77f57eb3161575a5bda05c97d55a3cff952bebcd5b628f70f', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 160148, hash: '6a28ad32c0c181c06242562143f604535b0a7d17cbd1cddc564625d2a8f1fabe', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 43587, hash: '58ac5dcb2b2cd8cce22022906bdab150be18f6aaeeb0dc246ac4959b8c1d759a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 144820, hash: '42b86a59f3fcceeab2804854ea38724a005be05018244f9af5f672ea1c84f510', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 139654, hash: 'cf43bf838143c8f975d8fd3eccf683ea9e84fff72f8cc9b06bf401a4f3975b80', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)}
  },
};
