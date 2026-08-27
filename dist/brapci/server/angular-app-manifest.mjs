
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JHBLZSVF.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VDZBCVDK.js",
      "chunk-FNLVXBFN.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BLI7W5WO.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IIVVUBUW.js",
      "chunk-QWC4BB3D.js",
      "chunk-UYJP47CO.js",
      "chunk-TNROT2IL.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-77FWTK2Z.js",
      "chunk-S7DS3LGC.js"
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
      "chunk-FKUL2YQX.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MJ2GOHF3.js",
      "chunk-TNROT2IL.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R4YBXZR5.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIQEMK2H.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWFIYO43.js",
      "chunk-UYJP47CO.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RH7NKZLH.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LTC3KQ2N.js",
      "chunk-TNROT2IL.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N6UQIRMY.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWRY2UCQ.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-64V6CN6A.js",
      "chunk-QWC4BB3D.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5NKUNMF4.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQC3DN3A.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIYNQEET.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L456CK6Z.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EXBLU2VJ.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JZ3GJ6YV.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NXVH2XRM.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XPKAM6EA.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XD5E7OIE.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T34GMNOK.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4B57F76O.js",
      "chunk-N35FLL5M.js",
      "chunk-S7DS3LGC.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '6e6dfc60b5eccaa1d809c95632683708b9a6ccaca9c8f6eaa0291032510012a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'ce5306c29d58ddc387e271ead5a89d89e2ca1bd53ca24637139375e9e2648b88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 77964, hash: '79b1c5c37b86d3f110cd6bfd60397e4e8225d24bfb6189377eac1a4d9c99342f', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112018, hash: '66bf392a0692d03c023cc814fa0fa9ed8a0fcd39143981cd8aa49e09000f2135', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 248598, hash: '5b5d3d80c725818945afdd0c5a47534cad8af186c1c186d18f070caf9eb266b0', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 77840, hash: '355adf435e8c5b0cadcda2482fa539fd5c440e11b3dc85becd8c554b65d00b31', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177307, hash: 'f120d605d42c3bbe5bc67752551113342452f56313b66405fe85530d3a2c2b71', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 72664, hash: 'e2f29ab97714caec51668dc12dcf43d6d61bf34edaf951cfe79afc61eab0badb', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 77875, hash: 'c438982b7d43c3873c10c40e65cb095d47c088aba8219a00f5e7930c255e1078', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 123651, hash: 'bec07b7543f762dd5e8066e0a9bbecd6dfd029ea8b92242f1bd8ae5ce08478f8', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 72892, hash: '2c9909ec52f343fe8c3ccfb72099c1f5e100cdec1c9cb7637d125506c45ffd7f', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 71865, hash: '14734e14c71ab6fe67add8840573cf96c442b355db514121f480b99a799df338', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68111, hash: '322ea03af9fd6fab317720f39d25feb18d7460ba7e64c73d91944c0a77eef31e', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76151, hash: '6589e3ce21e73c7c4f1d0ba201f9b63edc16d4ad56125eff966f5168df94647c', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81092, hash: '7d11573c4b8a37a8832c745225862536e62cca851292bd57e248aec4ac078ec9', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76260, hash: '9dfab7dbc8cb1d765f925ccaae10721a192382622057bdfadbc7fb50d20dfa1f', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70081, hash: '5c824fe9e2b56b17c5328ace69d3af8b1b0ec718ad3ff0ac1c31ef6686eab3f9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 148735, hash: 'bc0aba2d46c7e0176fa61014c3eb4dde19206a81be62c77182c5a12822f591e4', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179134, hash: '3adafe4f2bed8d8532c6fab61082867502d4277ea3de3f66dfb24db4beab8d5f', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 73072, hash: '32b2157d71ae6b3c5fd180142d0baa2982ebeb44493f9fe872417970bd06d638', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83150, hash: 'efac6157660eca8ec4b6650af1e281950c7aef0140a25caf774ea5c93f501dbf', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 77704, hash: 'fbf3a3e2120050ff6384f5f44f72b0be1088edc22c51ad69d81e5e4a0eb202ef', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 195889, hash: '9134026315d80f7b3e991e32e6d14f519ad302727ea9006c17bb4b6c081bef4d', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81330, hash: '02068979ff45c688cbd160791adf7ae7e00446578f101779e4bcf37b249dc543', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
