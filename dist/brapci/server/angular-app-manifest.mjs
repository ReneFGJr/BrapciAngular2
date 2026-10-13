
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
      "chunk-UBOBITNT.js",
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
    'index.csr.html': {size: 6520, hash: 'beb6543dbade7442bb90d51829ce73a0109b26f2e705071b3a14272d0e023952', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: '415b89b3b7cf3ebc1838cc00fdfab23eb206aea2dee0ae8bf86b7cdcf833afca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79390, hash: '1d1195c46de870a707fd8f3e27f8de6c9be85f1708db84ae36b070a23e0ce2cc', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 73922, hash: '2fc2bf8cc5d31a4e2cc5a2ee51ed4d01487a51128ffe111792230005fe1d8e39', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 86577, hash: '7a2cad3c86be6ef0f1345747bea6b465a416323dc4786a0619660cf2580db1be', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 128654, hash: 'dd0dbcd55ee33821ba2c63950bb1db2950f516c45d1681f86702771ff65e23ce', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 86710, hash: '5188f559b5a943016474222fcaa84833a39d5fc5c159bbbe143a1883c974877a', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 320031, hash: 'fd22e3d59dcdb65ca780473104e17bd64ba7f37721a11b0f5b5ef4b1135f6824', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 86755, hash: '5675d39e01adc63e4ff2417e4d765c6652b5fc8eecf13165b4a06eeeb0f39e82', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85024, hash: '805fd1ed0d04c7e5a43336e3b2c131682e05688c8b10493a42780ea9cf03cb84', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82399, hash: 'de3560fee5c70565464794b5fcb0266db63eca97dcdf0d62fff8c62227bdd4d3', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92263, hash: '580ba030ed69ad4de202dc707447fe0b9754622cdb40b6c541116c954e28a270', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85133, hash: '0c834ef3ae220af020c08589d56657dffc1a18c57dd53d94b9e491b02e5960b1', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 91978, hash: '5c1ccb2a336ca83472940b3d6e634f3709b4823cfbeacd3187480b2b8ded0df4', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77331, hash: 'fa5f6bd3e5c9531c6405ab54431f300976f0b440ae97a8a349c9795fd1c5bb91', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 87966, hash: 'cdca7915d76e44a6ce05aaca3c4cad20af05eb94f7037d3e5f7905cc968485e6', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95027, hash: '98e09cfdbffb5bcf92360e91191883711751af569d7b1cfd7c6163c6207a38ed', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 408724, hash: 'b3f326f4edd74d4a3c4a293abd3a56eac08d1811e1b170d699bbbed3f1fe2aa9', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 86731, hash: '89d5497830f27e15d1d806ede6945dfff7c359d9999a4c44c6f172f33e401567', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82414, hash: '1accf8a9fe17d2a61c3e642c41fe00c69ff4b8e71867f0b8bd217c60aae67718', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 80685, hash: 'd59f59f5373b3b1b324c75ccff1a79a19a843fa44e7fcb00127b5ce851de4956', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186064, hash: 'd33fec56562dc39c9513082c674c82492bf91b572be8d8f8a045181182389c1e', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 187900, hash: 'e5315f537db2611d5ee96436fc8366bb9566c861f8b279136cc964151941502c', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 86785, hash: '4ddee978a612629a40ba8ad52f2a0ea1fda92a828583b7f3fb644e4c0bf7d0b1', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 92647, hash: 'e1652f8104de6a6f172abf5150079ce6dcfda124a768d4eb45e70b53d7e72179', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 78953, hash: '1d13ae7cfe9be7b07b05f6a3639a4221dc72aac7aed629b9c4338ccc0089ee15', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 81765, hash: '4b11e0f5ffeb3d3aa80179920218bc49355015d10feac027a57f50dca1e750b9', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 86777, hash: 'a831763e849eaeeb7ccc57fbc493af9c12f97b62300aada6a1f372cd96c73865', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 86807, hash: 'baa0b494e63e63ed66a8161061f59a2cdd0aeb7e653a0a4f04821904869756d4', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 121253, hash: 'b5be0c97ede6f40fc93839d17da36017fc0fec77d76614ee3d1a25cfba9ad17d', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 262520, hash: 'd63591a6c35d14813f009990699755444300a328a1f097bfb58237a5be0110d7', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-XO4RCIET.css': {size: 357134, hash: 'arljsMZxWNo', text: () => import('./assets-chunks/styles-XO4RCIET_css.mjs').then(m => m.default)}
  },
};
