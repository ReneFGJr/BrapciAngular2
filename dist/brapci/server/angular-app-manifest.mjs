
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
      "chunk-XPO6RNIA.js",
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
    'index.csr.html': {size: 6520, hash: 'd78f568afe00a793bd41462347a2728b8ae380cb325f85fb3580766845e67d63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: '4e3ca37c22536cf03e54cd169967a13f70279bb42fcf21237d740d1a84c1e7e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74425, hash: '1e53c321149adb27ab0e0f9e96f04d0dc94f0a3189692359a83de9df2affdb42', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79893, hash: 'fd810dcb774c610880353e9f1271892e058c4d2b485d30e6bb43b63669414223', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95531, hash: '5c46fcaf214433a56e33730800a1b95675cc18da921d5d7d8a4eb3cc87d675a0', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87087, hash: '56ab7980b49312bd3b54c8b79513922d820ff3887443d8ddc9aedebb3e54e9a2', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320534, hash: 'dddb2cf7df9487b3279429bb5353ebd294285b1f2f3ad2725d8e6477427f252e', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93143, hash: '93a868f830ab68d20392a9be13fce959ea257a8698a89d7148dfa5f501d0f8ff', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87242, hash: '896c6790121da3a9bdc4f6d1f76209007ce1c18a60337192259cd64ec33f3a97', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82918, hash: 'fbf093b408b72bc90b87668d1007090bfddcbddf3a0e34df43002e2def1b6424', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87272, hash: '9a9c1a8cd143823525b9fec0fe8ba6427fe69eb3d9c4c7770b4f03fcfa8d5db3', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82275, hash: 'bd29ebc77b1658c93f4fd8ac3a1300ffb42399f8466760578ab04a22f8170042', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81186, hash: 'e2d7c900b2835f55fd240e1bd5ca2b2093725b0afede8d8d0328a2638ad0392e', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 87312, hash: '6976439e818b1f515f7c94e065593399784ca91a3d4d9403745ddf7d8be0bbe4', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79454, hash: 'dc64bdf4baf86fbd3fe03efec0f9c7356aea0ea35de5b163eef77947c637d54e', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87296, hash: 'f0c2c0d0f43cebd3a24f316f3d0665d6d0339632e065a852585360f64527f2fa', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87258, hash: 'ea7e1682f70d8adab2ed4746ecb6a4d4eea73f0cc3852e0296c0e378aa4acfaf', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409227, hash: '901ff13bb3c9b482bb6ba8ad2a2ab0334b9da0e0b978b7576d7b2e4de493e318', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129150, hash: '0450798ab0de2af6d66cf618b0fa4b9746455bedb04ad6c269746b3167b16369', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92774, hash: '2cdea48e1693f5970fd5d3e2b9e68fe1bd84ce98c045478485ce14ba4e3ab3b6', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85635, hash: 'f57903899917041bb1fd3628e6937b46fb1edf2cae80cc9594fe4850abcd9da4', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263023, hash: '2325490b256cae38a0379f5ed881abe2adc931b7f382bffd73388ae80ae98e6c', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88467, hash: 'c2dadc5a69d68ea68b62855bf0d28ddcb380f2f2738e51a49944327d3155dd85', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 87215, hash: 'a1357825550e46ecb39552946e48b383c1a9bf9ef014174aa93c73345a023328', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186567, hash: 'e9410b409c76ceb68cc312bd30ccb7bcc9ed3e14f8b1e8aaf76030447cb5ae13', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77834, hash: '5ed386206c83b06489c2968a37a4367cd71f469d99a46a9c531ed2afeac98f8e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82894, hash: '9a56ae8726a0e92a26bc52fe587531aedd82ffb3b80ed3967c11ff2cd494245d', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92474, hash: 'db554493d6e929c44e50ebf1d0df87459b2505a3dad19b248c4d4bb23ff709c3', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85526, hash: 'b12b3585cc3d98213424cfa1c42cce03f5dba2eed7be993b41f801f88988a25f', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188410, hash: '329519843a250f25ca9359bcd7ee271e7353c74a326539fc0d8d29ca0359cf3a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
