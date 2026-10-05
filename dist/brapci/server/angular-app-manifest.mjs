
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
      "chunk-N22QA3WC.js",
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
    'index.csr.html': {size: 6520, hash: '384f006b3c8876ba169212d8b6fc1d3771831f630883a80b9647a7034b7b35e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'f7f6a3ae114c6a4d27030eced9b112daa1fda30c6ab1cdc1b0fe19d79458dac8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 79893, hash: '27e72cc6a46ce6d345dbc381895468efc446ac0435f993b8e57b32866c3cb20b', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 74425, hash: '52007a41ae85f46e21937813575232b630a91e32efe3fd443fcaf92f7a91906b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 258127, hash: '1fc4214b1d976700c532cc4bde9f8a32b1c0b5801e91f1d9dcdd794a5241d903', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 95538, hash: 'fe0beb8fdc821cb232fd0426beed5a4ba49c307c2afa5dfb60c2859ac7f11b2a', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87080, hash: 'bc1b0a3459b2235e0c1327ff17a89c63abba34144db91206c7321290f7816205', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93142, hash: 'a2e209297c5cde37f0584e7feac88f49d07bef0703d756d1328a6e2d50429e0a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87242, hash: 'be4699675da11bf9dbbfd926e1bf5c016f1f7614eaa84aa1aa33b472dcb6335f', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87273, hash: '65f95e1947156383ada97382056690ef5e638aca0a7356dd6cd9624ec354b9bb', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 82917, hash: '3cf6c3b29dd31e3029511b04714a79a7777ea9e71d2bb1b17de403a19ce27689', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82275, hash: 'da0493a3f0a77b4af3cb5c1174d7e60fed8767528570a55c364ba12191cefd94', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81186, hash: 'e92628f6b3deb7aa02b8cba860204dc467dc08dae4a404a9995ebd7399922964', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 87312, hash: '93678152dd267cba0b100b15ff5ec0db48951769908fd132a5e07f2e9513b583', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79454, hash: '46e945bda9fd3b6d18483ba3ba791ec069269a812ed963f9b3b11933248f12ab', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87296, hash: '0e978911f1914fe87fdd26ed956fae8c2a4fd3fc8bf7a37b13c6191b5b3effbb', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87258, hash: 'f8c13456566a766f420e9dce8dd9be284acf9e8ed458eb78303f6ec1474f6f02', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129150, hash: 'ecdb85cc4481ccf99e3caf3879841be4e52e40f063a5e2f2cec06964263a7722', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 92774, hash: '07bce0607152c817023745f18cc23e54f730681320bae201f217f15803f1abe5', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 342483, hash: '3dfe9a71f4f7a5d921ce3e145faf7b08aacb6366461aa37c06e2576c95fc4e96', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263023, hash: 'b6d623ee7d3683d2f02023982db66f68e50013d23edcd798c86546c545d6830a', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 85636, hash: 'c52c4527575ff1c1de61b45d861e3c1ba3db33fb653764caf8ce5c227c60dd9c', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88468, hash: '4dcd9cf95b6e633085e9594e72403164652e50a7bb2db808480803275fdac48b', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 87215, hash: '7f3ed2dc3e6bcabd2e105690c906ad854e06bb8cc296912e49c773e10fd67b24', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 77835, hash: '8557cbf91e363ad1828e9baf5ca65ebac8716687d083c8595177a1f1c70828af', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 82895, hash: '38640db06579e70664cdc67124bb7ebf736e3e625d37565f1de7a8147e53901f', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 85526, hash: 'e4918bf687b35ee1cb921733a7cd3c7155402e904e871359ca9bd619af94ca24', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 186559, hash: '8f07efa55604feb2efdeaeb57fed336b252ad1602e2f173a395fc3cb66178d15', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92474, hash: 'cc3f04dbce853cd60babbd10f808a74f05de2f5875bf3ae3cd1114a74a8cc35b', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188410, hash: '22cb8388a306600e379ac6fd17148182df00b4bf146bb719131ecd330016b874', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-BNHEROQY.css': {size: 357134, hash: 'sbtIG176LKw', text: () => import('./assets-chunks/styles-BNHEROQY_css.mjs').then(m => m.default)}
  },
};
