
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KA2YG5LP.js",
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
      "chunk-AZLHSNLM.js",
      "chunk-UF3YMOF6.js",
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
      "chunk-JEISYM7R.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LYVX44R2.js",
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
      "chunk-32A4B7J2.js",
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
      "chunk-ZCQGCRY6.js",
      "chunk-UF3YMOF6.js",
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
      "chunk-U6WNBKWM.js",
      "chunk-N35FLL5M.js"
    ],
    "route": "/tools/txt4network"
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
      "chunk-OFHLCUHI.js",
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
    'index.csr.html': {size: 6002, hash: 'f1a50505bfe81668b337b11583c8558fa410a3ed7b36c2949d4075e98c283cd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '0193fd3c8440185a089d4946b3c559e37815cc41303c8983e74e920c5d33748a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 78561, hash: '4747207011e7afdb91c5aebc0c07cdae56d3d53064c5069ab89761683629fe55', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 112615, hash: '620678b55b55a1f464f7fdf9182eb8f01dd4e2da597f46968f05dd4315991faf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 78437, hash: '675f832b055e0c4293d23f2b2b18419db06f0291813a12731ad2bb6258f94a52', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 177904, hash: '24e9ed954e5660e822805a43986950d98afa7b4e9246b6531ccd46ef42846e42', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 78481, hash: '1e79d21147a255f233f79cb95282b37b88febc7731acf3b03497897e74d3eb67', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 76748, hash: '735da1a6dbba5e4bec904fd4b01fd298a7dc09d45bbb17b62c68ce2a89df0738', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 74125, hash: 'aefafdfad7200df6a63879a78b42aa8258548e625f0c40eed184a514d2be589c', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 124248, hash: '2dae09114e0d6b2d2282a19773982d645e24e78bf6070bf3355fc30e43550dbe', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 249195, hash: '9aea0c3972655c96f81d8670c121df8c80701b87e0a59ce3bf2ab636fddc597f', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 83756, hash: '886b69bb749942a28d7b83569c21c1d63f8dff565e45a6d275cbc8b2386a1609', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 76857, hash: 'c7c0839d526352fa92d5a86a107171fa3e125699b608e4eef9835e280cef9aa4', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 70678, hash: '6555a9ab419db3f8f1b136755e68a3839c6e02de9108d621f10c9b0bbac721a8', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 81918, hash: 'aac7b241babf96bc1e0bc61abe830b8fe63b116790b6aefa15d215a1843260e3', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 78310, hash: 'c0abcbe96c4991012ae7e9397ed9242fc8a6c2d5d88241b227b30248eac8cc8e', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 72462, hash: 'ff5c2de7d11f06d9c20f5693dfbf72c3555c86089da9344bc70371400c6fb038', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 73252, hash: '8b707d9b9ced3814dd8f7cc2c810f2364b2d81eb5ae2c3b9421b19a6bbe1560b', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 254334, hash: '4eccf3ecf62510fbf13b7180452867a147b9c601d18f8da25832982a92b434ce', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 81680, hash: 'e77f249bd0c3206fb5c2c6d5a1dee52ee0080e90982c463dc353c6884cdcbbb1', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 73489, hash: 'f0d436da5774b1735f5ddcb4e1280c6315931a03473b1ac1956dd57fc0deb56c', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 78456, hash: '022f40a58d083bb9d06bb3ca7afc245b16ee37ffcde62d12698fbc2bae4d5d4b', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 68708, hash: 'fff4b6191bb68cf4c8874c866282a16e3c1f5d3ee44b59cbc125f19c6894ba0f', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 149341, hash: 'db121985b829209cac189d695fde93645b465b68ff90ebd4e42d4944e11c5806', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 179731, hash: '649f0fdf8d239911fd2de2b9edf3925f296d79816f3f464dd7fbce9a4ef517e7', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
