
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
      "chunk-WCKBAERZ.js",
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
      "chunk-YPF7S2YX.js",
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
    'index.csr.html': {size: 6002, hash: 'e5c7a2941a55eac03bb7683cf3149ff55eb1f571d30cbca141bab506d5445995', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'b65a7027b7be458304180b5952fc7eb96f1b727f1e36ae6acdb8ebffdddff88a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 78445, hash: '4b797ccdc36947e617cde554042bad76c1ce138c6ac59ddae175e4a7eb371bcf', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 249079, hash: '4bffd967762f71b3176ae0c04bfb10ea72f0e3b4fcc25753ca521f5ed2385684', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112499, hash: 'e78c157c587abc411f0ed081f6f30883acb722980d3fabd2be0dcba665092eb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 124132, hash: '6021705981bc212156d5125f95f6e2e386cfb1dc93c66d884fa69a84420c64aa', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 78321, hash: '6496c5199ff1282a6b62078df9e73409d323a9b4bd9d7d4569bca7f9a768981d', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 78365, hash: 'e29964fe82bbeb3fac80986df8cd7c74edc69c869bee12882944173eef76ca58', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 73136, hash: '3171676a34cfc6ac12dd9184efc80998bb948dd7a5b25a78840a71355fe1f45f', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177788, hash: '9688262ae708531765561e3b16461c1ade6bd2b230845089285cd1d2cf738158', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 73373, hash: '65a57d67677781a184fec028b35d99fd5a627fd3361a93a2cf868b8da00ce7c5', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 72346, hash: 'e0a7dd6afa5dd3f6c86513298f047efddfd9e00d716fd137a0b0592f5bce2793', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68592, hash: 'fa1db9287fbce9016dd7f7be558f35d9ce897bf9f38ea2628e30570ee2745d87', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81573, hash: 'bb99f2b0627894fb142682cf2e2bb2283b9e48a1062025a7d34ea57d249ad42f', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76632, hash: 'ce5da7bfe7a861dd6b3dc76113c74f3bdccfff107b7726bf7f00d8ea3f5759b8', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76750, hash: 'e1f2ea2c4e2018837f432553963476d57f93cac3619b5851d39f7cef73dec03e', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179615, hash: '39eba8f12d3d5a8f71a11258ac3ee31a1c254344735fba450aa0dba197e7ccb8', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70562, hash: '747284ea5081682227653d6feb79e5a57531498280a636b9734f9f47e26dc4b2', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 149216, hash: '46fc167048353e95b03aeb2f50fc11b5540808b7a03cc197d19faf3cfa05af2e', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 78194, hash: 'ae312e09e80abee3afe6958bd97ca1abce29ec2541977f2b3233b28994487ae8', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 73544, hash: '71e543457180fae0ee7c016926d6206722df4735145778dbb760c877ca98b5f5', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83631, hash: 'f256e7af6b95ad8dce57041928b88132cc1f7b48d65fd77aca9ee8026f9febe6', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81811, hash: '1fbe64cbace79a74621de9c1784d9a164afa9e31ba9c892f9f30aba6ba6f848c', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 196370, hash: '972fe8c6791f658523b42f4cc62bcd8ae660e8658693f60213437e39fb11a3b8', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
