
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
    'index.csr.html': {size: 6199, hash: 'a794e1c792837db5e10ececa3c47b31861e394715b088a48f0afc1caea1b7328', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2058, hash: 'e79881cd3b97cef38ee46fd42d399d90cc2a0570c263ad9a9295a190316f8544', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 71494, hash: 'debc7587274178d6c9a73fb9ba8e647247b700b0c2354db33cd3ef59029293f3', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 72495, hash: '7baa4b32a3c5924f80661ee3277f72735acb863fbb074e7f7a0fce8c37744807', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100689, hash: '33a05a31ebaede36c46bfe7359c1aa664e454b033c27645b37fce4636fcc1a9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 134550, hash: 'f09c20675c72217c8be2445a76298c7dae0c0136b7ca738de2d462eb5761e6bc', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 157551, hash: 'd8c13d56f3d1f51c23129bee3c61ad6633c8491837129ab624ab071f39f6dd6f', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 60961, hash: '269107d298fc1fecf07aa9ee5b18a18168ddf6e57e176aad40ee1e9887a5a054', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 67321, hash: '49813cb3e34b28320ba3d3af0feeac53ef4733a11e63daf95cd6b2c70e8bcceb', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 67306, hash: 'e74529e3fc51f6df166fec0f662bb9e0b17886c641a590613243d6bfe07ae4a2', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 72882, hash: '4969d2f902e7e25b1a190f796e9041aed13767badde7c65a56f3bd1cf0ac9b60', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 75377, hash: '601b3dad44a24322e5925da2c7c42a187c922fdc97afb73206f9ca54ee970ed4', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 66526, hash: '4f309d81b7155324968dd9881b7fe6b891a1ca93860dccf73b5db402daedf336', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 67373, hash: '6962314fbd2f6dd76dbb5d5d7ca1e3118ffaaeadbed14f722b6e7d5a06fda57e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 118342, hash: '0c67a208ea05a27e60c1f2f39170f502331b1d03a22e6358f8ffa47d0f9ac06f', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 73343, hash: '4ce36d0b39523b815979d12296052dc5c98ab30c2eb2588fb6b6df1114ee7ede', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 71843, hash: '9f942979017b20ac64346f6a9c8214710bd4d9ca7b9089bead2a564715719243', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 64747, hash: '9acd5a7a53a4af4729f01e895428c15e6ed3b73facf761478ca119e7afc243bf', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'styles-MADQMGTU.css': {size: 269381, hash: 'qwEX3ZhhJXo', text: () => import('./assets-chunks/styles-MADQMGTU_css.mjs').then(m => m.default)}
  },
};
