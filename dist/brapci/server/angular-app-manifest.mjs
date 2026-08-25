
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVOZOUUD.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DFSEZKJI.js",
      "chunk-DLHXC6NF.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PASNQTXG.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2ZXKR4ZN.js",
      "chunk-K5WXXQG2.js",
      "chunk-UYJP47CO.js",
      "chunk-LBW7UEQD.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DFQY2WKR.js",
      "chunk-Z5BLEU4G.js"
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
      "chunk-JQC4VHJE.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P42NK6I2.js",
      "chunk-LBW7UEQD.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DQ7OCDTO.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q2FICCEM.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JTHJFV7G.js",
      "chunk-UYJP47CO.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JSQMQCNU.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NJYIM5W4.js",
      "chunk-LBW7UEQD.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O22KRTSC.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NUFBPVKW.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3OEJ2OUF.js",
      "chunk-K5WXXQG2.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6A3XQ4YG.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KPERH6I7.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L5VWYGKZ.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IMPFPE3H.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT3RKGM7.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AATOVMN2.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7FNKRMGG.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OFF2GEPH.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QLQNB64C.js",
      "chunk-FDGO7C2O.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZLWBYCDR.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NFZJM45N.js",
      "chunk-FDGO7C2O.js",
      "chunk-Z5BLEU4G.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '2b1f15c20d48b90c5bf908a4c944dd1011dfb2bfd460a17a140075777c225639', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: 'f83bfe6bb330c497cbe6797fa5616d34feaad41286ddbba295aa478d0bf45efe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 77964, hash: 'ea07de7af7af3e605e178b9ed9685d8af8a8d248329ad432074c4cdbec87a3e6', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112018, hash: '0d64ca8ae28f60b1b9b36bf60eec2ab96cd3f3b2b0d7bd9d42179547f61ac58f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 248598, hash: '7fd497c28dcd97e7017079698f618838d2dbd23b2184344cddb29606dfec6317', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177307, hash: 'fb3e00f9a21668fc1f65ef70cef592a1479f14d3ad28baa0aa7e9668d629b814', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 77840, hash: '5a728414ad96f72dd601b036cbdfa0dc5ab4606d5da24a7e0b4b4b30f14f9d57', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 77875, hash: '3e3cff1966f6141d6bf6886c37957ca1b8c51017a5a76b1cc863aa3ad7114c5b', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 123651, hash: '7a10416c1ce61a910162352e95aac510aacc05559ceb5abd7c6db7520be7515c', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 72901, hash: '3ff7f74762167e4c6d7570cb546a5c168891faf6d053430c9d4b4b09cf463cf5', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 72655, hash: 'e53516390dc8b3fc4d1e308ca49b2598b674f80f2272bb1f63a932595bd3990c', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 71865, hash: '41a40f1b45f8a948a3d8192a5bd9c8a47515e398328cbaaf1edf7247d36f1277', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68111, hash: '1820e216a8998ab66aecd7d2a5dc967517eb9a273bc17a20953634212a282afa', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81083, hash: '7d07b2a7fbc06ce4545a98e425a7d7b112df957637f6969301395b8c8c2634ec', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76151, hash: '0648ea97d2d6aedf33d9383ed8bdc7c04b7b9af70bb2da1c3ed0194b23a51ecb', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76260, hash: '943d702feeb459f9042a0242a8e398e76b8bf582277c08695dd7c96c1a5859bc', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 148744, hash: '519d64c8f0e8e9402b4d3d2711c933a7ff6a284a34057c83f301caa320d4763c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70081, hash: 'b40fae77f0c6a37d6a0bf7fb8effe0ae0ff93d04239b70f7de6ac70b95e8dea4', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179134, hash: '27d127329ec439a8180fd46698bab5ab5bd8bc4daac672e7f5ab5202156ada9a', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 73072, hash: '6c782ca36166b7c7df658d0e5e730c5cdfc9379412b0fac605edf365920a5640', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 77704, hash: '5a9ff88530b540d9c95cd41e15ffd70f90daea63be5a7cf56d7fe22706e5c3e0', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 195889, hash: 'df8db5d62f792983724abeae1e28df37045ab5a08d551f7043d8833728780d6a', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81330, hash: '554b1ec66060c7c9f1ff5709fc29cd935612fdd6e1a8a9d1b8ad54a8244f4af9', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83150, hash: '791b3db189d40be437256c4a0f9e2dd3acae695216e47b13f951a027938996c8', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
