
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-X62RELY3.js",
      "/web2/chunk-GS3W7ICU.js"
    ],
    "route": "/web2"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-YVBR2C5O.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "/web2/chunk-OQPPZAZQ.js",
      "/web2/chunk-M5BDHKN6.js",
      "/web2/chunk-DMQZNPMN.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/v/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/web2/sobre/about/brapci",
    "route": "/web2/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-WENTOB5Z.js"
    ],
    "route": "/web2/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-A7TK2NCE.js",
      "/web2/chunk-DMQZNPMN.js"
    ],
    "route": "/web2/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "/web2/chunk-WSYCKUQB.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-T2I562C6.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-ZLSVGET6.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-H45XXMZX.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-LJL22FMW.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-JUUZHJBE.js",
      "/web2/chunk-M5BDHKN6.js",
      "/web2/chunk-GS3W7ICU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-NDFQXVJU.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-NFG3GWKA.js"
    ],
    "route": "/web2/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-Y2J74ILZ.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-XHD6IOLD.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-5YEN7TXF.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-BTN3DW7U.js",
      "/web2/chunk-EXXG6RDH.js"
    ],
    "route": "/web2/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-5G4L3O27.js",
      "/web2/chunk-GS3W7ICU.js"
    ],
    "route": "/web2/cited"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6158, hash: '4b19211ba39db2f9339356d181c86682bf55dd6dfdc349fb8f4533d886a97d1f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2017, hash: '14c5f6a81bd90046acca5c196c81508f6e948af550bd963dc8c4401694b04d7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71453, hash: 'cbf5124aa0006672b67c5a35d295fc543b3532a1c14c8d8ab88dc4a919506c50', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72454, hash: '3e6122a949883bb1bbce9bd9fbe248744a9ae8e0f8f0345bdaff7012c4b98f2a', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67280, hash: 'cf158a385d45b5adcc8d75f348fa63e1547b9eccce1b2ab6cdc993d9754e850d', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105611, hash: '74c887fb80f7f5a90974b807496e552b322204618adb9b2247d7d71a2adc9cbb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67256, hash: '9add301f31845e32503ec071a9623c62c5325aa2964c223ee37840762b31a2b0', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 157510, hash: '1ebee946b3021d6e17cd8df59ef015898a21085440d557a070019729a851d0c1', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60920, hash: '83fd5acf5a18f012625a465f57663e9e72edcec1262ef54b13dafb52b154a5eb', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 134509, hash: '60f7a72d38aafd777fe7624482e61229bdde4b2da64ceb9ad48c1c31f1b9f04d', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72841, hash: '7f0833f6439f74a32b64669836be867b305af11a484f40fa94508c5675128a1c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75345, hash: 'da2cde5a2791f3d12401019ffc804561eac54422823ca28244bd0a0aaaee602d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66485, hash: '58d18670432ba2de98d2db6680b1094a2c71d09ee0358e1cd591f5431ebac685', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67341, hash: '8197a2d7108b44963a73107f6cd49556baead849a1f154d600725e7d6cf26bf8', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118301, hash: '0e028990c4e931fd36e2fe837ae3fc7be3d4805203b5bf36e128b622e08ba74e', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 71802, hash: '07049df688ddbd67cec06bb90d517e12ae4fc3e4d1bb20935387802ede2bb048', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73293, hash: '178a6df676b6592649555421d816f4a08a96016824f6517a7a207ff29db3d94b', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64706, hash: '4c9cb76da9293f55a3d78060bae0dbade1eb0c1d487d568f145ec741a1a5ee4f', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
