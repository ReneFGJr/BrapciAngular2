
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-QFVPXADV.js"
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
      "chunk-6XIM3ZIX.js",
      "chunk-HDBEPRLZ.js"
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
      "chunk-HZ4H5WAB.js",
      "chunk-3UMVKPLE.js",
      "chunk-4YVL3FRT.js",
      "chunk-UYJP47CO.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VCNK4PBF.js"
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
      "chunk-4Y3P27AE.js"
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
      "chunk-GVKIFSFA.js",
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
      "chunk-ED4O3RAN.js",
      "chunk-VZWU7G4X.js",
      "chunk-4YVL3FRT.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BLOHOVP6.js",
      "chunk-VZWU7G4X.js",
      "chunk-4YVL3FRT.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W6CF6HXZ.js",
      "chunk-4YVL3FRT.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SD5BBQLS.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O544FA3T.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HFEL66TG.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O3MFRVS6.js",
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
      "chunk-FLF5N2QT.js",
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
    'index.csr.html': {size: 6520, hash: '5a93ff30532efc1a802a58a77175de43a4e6b753988a6589fda44f482a948a68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'd479a9a5be01354a80f585c75291bfacfb541f74d9caf184de2c4c26b3f179ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79390, hash: 'e70d2e5dfd5e1af268eb296322bf4dc9335c3d1a5570001fbb41c150fb236523', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 73922, hash: 'c20e8e9aac5541fac37165673077dfd481dadcbbb69caef966e9cda37c20c9f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 86577, hash: 'b167d4650b1ae45334a226f98576cdc739527d29c04508619aa0761c4b8ee6c7', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320031, hash: 'd4bf50e400b9b91fd2baade497980394063dff03aacd415e2677c8909e66343f', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 87368, hash: '18071557d867f61d6a7b129ca30a717be0a646aaa6d4f7e544eb67ae336d7ea0', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 86747, hash: '20ffe8d2be2b0f25fe33fb9b3eb87000e7af7491efe309fca37cf82135203781', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85024, hash: '76514aba06c50f9f5974f9eee857bc6a13ddeccf1ac13bd2a35716007e378001', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128637, hash: '35bddae7db07d1d90dc5cd982fd36d049676b23efb14c17e0838d8b8ca8d6467', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92263, hash: '22402ce9c4551b173ecfb6271c30f2fce37807e1e5ca7713df7439b783a1c018', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82392, hash: 'e0b7ad158ab985d05874f6a2d06f196dd3197fe46b28a5fc861b4244e8f8790b', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85140, hash: '957cccff776bf9138aadba02b2b385dfc36e15f7179fab2e092ee27f5ba456fd', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 91970, hash: 'ab4dc39f6640c3d03e16f7a80ed23568543d398c6269856706451ac445421662', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 87964, hash: '02b61f5f124f82d0ce292fd84052cc1b8f58f8b5e12ca9c99f5418313090ff97', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77332, hash: '4aaa7277e031b1b42f924743ce47bbff01c437de63f705af276a5226d6e36535', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95035, hash: '62ac6885cdd6c8beb58ed6f69c479bc8dd6dae20f9f5cb86ef75ef168ba47572', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 86739, hash: '736b15b9303c2c0d52d8df5ab52599e873f388475129c54a153faae4b2626432', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186056, hash: '5b2d1aabd63e7a101d851ee154cf1ad27320397d1b6d6de0152409aa253f2bf4', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82422, hash: '2fce606ba6841ff9594f9382b85f848bb027396e6502e9c4a5be234ed21aafc4', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 408724, hash: '483334ad7c1c2d6b691d0dd14fc709d9397b4acc04f1e5659186e9b7fb916716', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 80685, hash: '635e47d379a5d474e6c589e2b05088c36e5ba07c0a1f39251191590f797df711', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 86793, hash: '890a2fabdab0bb0351b51d5664d0f32b299dc16dea48d5672b64748089f75198', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 92639, hash: 'bd14010af1c0edd2b9c8e0e079f719cc18ac894a774ee15d176a1b7d3064149d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 81772, hash: '01ce1837dfbb43ebe10bb9189d38ea95934939ff8b407a33db4a4823a61012ad', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 78953, hash: '51dba1a04f37735d4ae02df2ad7bee3acfc7037663e5240f812032cceba041e4', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 86777, hash: 'c8a74c36e0687d5cd566b713565dea03c7d060caf05f3fb18283c4d2233e23a5', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 86808, hash: 'd852aedd10a6821eac581ece2b6f0967e79ad3ea50a3157ec49a6a1e26265b2f', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 187900, hash: 'efd6a6c33799f1fd6ec7a3d1d746731aded93932b634e5a769902919c014aa1d', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 262520, hash: 'e830d987ce329d05541c5d95d573652bee2e11784bd89363aed6585e779669c4', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 135517, hash: 'c291acc955053dc4f3c9a07f6c7119d79d829e992b098a02384edc84189f8fa3', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
