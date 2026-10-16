
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NCSN6XXM.js"
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
      "chunk-YFHZXGYG.js",
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
      "chunk-VMMYIJDF.js"
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
      "chunk-OUKI5FBS.js"
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
    'index.csr.html': {size: 6520, hash: 'ac25cf0320d93b7370382da7076b0af7c39fa3171f6e66371532a90037fe2db0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'd5a4254c55f84465efefc8811ea1c8f760f65b172e7b3b91929f27f0cc03c497', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74933, hash: '0ecde2c0d89104379fe2c40cd0fcf210ccba31a6f6ac466cc2a519eb011b18eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 80401, hash: '27aeefe2b016a6cc9710ae6480fdfa3f365c6b25db43aab3b7b075a24609b009', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87595, hash: 'a81b11581feb505287b2870eac5c23b9d104cb3cfd45779743215ed90625efe6', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129641, hash: 'a20c5d61c8d7aa5c000b0561347047820572ced83c0d423d4cd39ae8fd4b4936', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 88380, hash: '7ddb01568eb2c8b08ad9aef04d7e07f81d8ce7972ce69658eef57da4a551fc06', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 321042, hash: '24f76fb34c1d23495a65ebb34a23719f610df21e9ed126b8824b1d1e8dae58e6', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87759, hash: '5a3238afd0cf5824f8d9dbb4399f56b703d1147aa701399bc65cdf4aa8bc4e9d', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 86042, hash: '200d459a1af379f33d61c5a0f82a67d9c026a2ba4b3add28228006a003a4c801', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 93274, hash: 'cb47aa62128314d045ab2dc512152972a24c54ba14e3625993d9f1bfc6133d9b', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 83403, hash: '66b113b084f59db7458aaec91f39b64b497f864724eb752b6193ccd8f4493349', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 86151, hash: 'b5c028da32a9a7717933ea925d7e16dd47f8a20f93062bc05841977458d308f2', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92981, hash: '68d03d88438ae7b5c8210933d54a0f87ab3db913b29575a07a59e1ec07ede588', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88975, hash: 'e0202cdd963b76b612ad50b9832e101551e23542dc17616d19aaa363c550db7c', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 78343, hash: '3ed4bd3832735ab59d1d5c8775b5748a6ad1b5fe4735bf3975a099eee2ae6995', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 96046, hash: 'fc61590d5db67220245ff1f008737beaba9d6b2898c50ec6ba53c9376375be72', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87750, hash: 'cdb16a5fc8a22a7558af31ed20bf4cebcb52b918fec443530eeeb6f06e24b6ce', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 187067, hash: 'ca01663f9977cea3d1dea1233681d81df905ed25b3d71a17d3f4e18c4ff6b4bf', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 83433, hash: '7c6d135a2ad172e739a53db806e980b6c6be9015b71cc353d0cb086e5cede9c9', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81696, hash: '29976d08e9bbdae097dc510318a5284d89eb557b01e835947d1da13199c9d8fd', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87804, hash: '7b2dcb4a2e5e64b431f728dd819499acd064569532c4dcedbbdb2523ee4f8fe9', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409735, hash: 'b30f62aab09c550860094a0394c3e1cba15658dc73548c39116eb8a456ee7933', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93658, hash: '5e85e78b14acd7ea0ca6de2cbd9b735abcb53d69ab33d1afe4e21d40b881b41a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82775, hash: 'cc2cdbde6426a7b3cf31064a169afc3d1daf8e41d4b9b52d29d8d01c15d9b6dd', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79963, hash: '912456da4155d414d88b6465bcc578664d158a60c17d87812b33b87b3ca162a9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87780, hash: 'f16b49f16d01e27f3e73c69f4d56689ab20cb5f1492a117818ad028527ba88b9', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 136536, hash: 'ec1354eca7e4e357c55ee89ba09ec62929142236a47b7d0478203b974883279c', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188911, hash: '2b943dcb63c8be09bd9e58978e79421b3b76233abcda78e82e2bd105ed8bae4c', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 88254, hash: 'a51d5a245ca768efece2ecc8a7cc69f9ff6ed1a2d898eb853bae109d194e10ea', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263531, hash: '7183b48ea41b5e47cc3187a2ffea9efc87c422e9e8a1a9473dd84a4c76e2f48e', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-RNMQ53JV.css': {size: 357305, hash: '6Rc7g5bR3tk', text: () => import('./assets-chunks/styles-RNMQ53JV_css.mjs').then(m => m.default)}
  },
};
