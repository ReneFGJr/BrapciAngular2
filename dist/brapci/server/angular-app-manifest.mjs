
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/web2/chunk-Y25CTMTP.js",
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
      "/web2/chunk-X7YPUBDA.js",
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
    'index.csr.html': {size: 6158, hash: '181e66a8af6768029cb4ade033596bf8eafb26e4368c81af4c93b211f8098a48', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2017, hash: '1f431d10ff1f24c9805ec46141069613a3483c886f9bd7997dcf55b5dea9b327', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71453, hash: '21c3d8c6335223b3ace6187c9a883c3005c2e50adea38c5654007407af4e3d92', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72454, hash: 'ec70a2704a8ea1af4077bf35ae35d637b7d8801221141514c1ebbf1bd4968936', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67280, hash: '6eed6d6db0d2769c8acbb721ad6c6736f06656940b3c4546c0fd329acd9876d8', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100648, hash: '489ed4daea77672ad388e717d0b1bb2e5e1f047cf8f6b61566064732ccc49323', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 134509, hash: 'a359dbbae630bd91403aac1e406b026e54efb3460c570e361c0eec9ee75cdee5', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67256, hash: '989fdd355bc749b6ceae520c17423f335ccc3bbff07b95b34051f6a1384c5c8b', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60920, hash: '1f3ad0fcc192043bcef4c9ff2ddddd444177a1472f7c38234dc690ceee93a7c2', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72841, hash: 'bcdc3afb39fba18f0273d70300cdb039a6981359d797872766e5ca7bb50b4e86', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75345, hash: '806b79e796b2d6102c3e9d7d0f2dced72cbd5c33a6611cfa559dbd1984abc50a', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66485, hash: 'd12908317d752c5b0877cac090e31d6b3d21bacd4758dbf4660a2a16f1be6d89', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 157510, hash: 'ae37ba7e6f931af482abec0b972223feaf0028420dbe2ea540e049e17d52882d', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118301, hash: '1e39f2f9767410004e4c09bbc18abe8eedcdc105d3d7b232213f66261beeeca3', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 71811, hash: '1af426c7a90df5da918439f4a7e98df1ddd8a7ec447ab1e64e6d317d4fbc009c', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67332, hash: 'a547ff1d1b11ac3fb454b4e95bacf84d0666e0f9ab9e21c19be1f6af63cca915', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73293, hash: 'e521e8c8749cfbfd095763dad35b711358faa6fff5cd95fa6e74dc6a861d7add', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64706, hash: '5be874bde17068a16ed4875d176dfd08dcb6a05551de578dbbb2f717ffd1201e', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
