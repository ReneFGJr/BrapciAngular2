
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
      "chunk-IWH5AATR.js",
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
      "chunk-2LM2TD7S.js",
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
    'index.csr.html': {size: 6520, hash: '1566b1c70fd82dbf11ac50b9a8dc6b4986fee72586e66d4a9a58ed0bb336435d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: '3d5d0643d5b3a9c1198ddb761b8098cd58da033061f36ffec232d68ff2ec2847', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73922, hash: '7088f4f220384297feb88caf6ab1af398e10e715552482834f50776cfd2b441b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79390, hash: '1a27f3684c7e269310a6abc9214e543ad876f2b4c0e4eda26507494f25daade5', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 86584, hash: 'c19fad7da14d2240516b1b1ac08e770fce5fbbe1861c8e70f199bb6dc35134a1', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128630, hash: 'fdd682cad70a48c8f2be0f50033908d9737a0706ec8a1e6a1eac2c70eb80f2fd', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 86711, hash: '5497c90113629db2fa541b22033050c11f03e366d2556fdf9e689311fe78b65d', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320031, hash: 'b19582712426462caf567fb04ad585e827c929d66809273accfe89dd84f2d6df', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 86748, hash: '7cbfe32f28f6ee8ed77ee0cbd4522915c2d9887ea0333cf637a22ac58ff5eb6b', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85031, hash: '851d12caed2eee54d12826a2710735788f064f3a9a3fbc7245fcb9cd7eaea1bd', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82392, hash: 'd609355cdae6dbd1a23a7ce15dd28db1020f2983a44b36cfd3d4cd20f94b2209', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92263, hash: '2f87fb1de173d35886366144fe6686109f1e03ea53a5d5a11bebbd39848f2f73', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85140, hash: '93cce00285c765d81d9097868877acd7278bd78b3980b32973373ccfc787ab8b', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 91971, hash: 'c30c1cbc28fdd23fc4927bdf1c97cd83fdec5a2059b63ae4b16cfc4bf6af554d', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 87966, hash: '73d5ab42ce13c1bf97fd94cee832d32267f4b66913c00b4d3cb7f4db06753883', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77332, hash: 'c996c8af87e1c73396d1ffd4d3ca67e256b00ad8543c38d2592b890deecb8eb0', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 408724, hash: 'db96a002176660511231adf9c45884c511a2a4dcc9e784b3c8204b6a5fe60ea0', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95035, hash: '00d53e418965d3116f4dbdb54396e0414ed1fa3e530480dcb1fa2a72c030e30a', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 86731, hash: '8973d3e44052f3687d841e7e768e6e8cd5812d5343f98d6741fd2c2c4c11872e', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82422, hash: '55a04a14e3308cce955ba6d42b4b59b69fd7cc533af3e9ea5634e046ef62d7f2', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 80685, hash: 'ebf360595e2e9605f1f093fc396470cc4bd15244c394a2d0af7d1efed5fa8e94', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186057, hash: 'f2e26aa79ed2832628dff7c11123b46ebe7c8a4db15bd1071ccc06b5217114e1', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 86793, hash: '0fbb07daaee64d52da19868bb2e9723269f63d558b300709731a0989ddcc54e6', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 187899, hash: '12fec42400fa8bfe04c1bf809dd15688020ab66ececefcdba751e60e34c24b3d', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 92640, hash: '17e0a1cdeb4c6d1a9908bf86012a995441093b7fc88696d3277b08e88c3b7a20', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 81772, hash: '8030916d141e3c79ccee287ca5bfef485bb68900e02e216f7f46fd2dbc0bb9df', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 78953, hash: '2960aa6a274f2b51bb4e768c21b398981dad9a1735a32b5c7f59fe7d3241406c', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 86770, hash: '43427fa8a1c0bda67bb32c9f9945ba4a70c26122e9129a1624f8a0543a523f1f', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 86809, hash: 'ba2125ae1d4c913baa04f0adfb7ed513219d01a50326e18cfcd96f927d278dc0', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 262520, hash: '80139e6f8b155f77b7be8fb914a6f644874db1973f32c3a58224506804ebdd6a', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 135525, hash: 'ab3b0f7835c9f2e16f1d7a738f7236020d66ab71bfc36d577a9d68a2f4f15691', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
