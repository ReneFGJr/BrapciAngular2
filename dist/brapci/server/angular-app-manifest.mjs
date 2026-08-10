
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4Y3H6I47.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X6EMRSB6.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7KLIEXOL.js",
      "chunk-NAR3ECQH.js",
      "chunk-V6ZL36VE.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sobre/about/brapci",
    "route": "/sobre/brapci"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ISP53BCF.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3XCJP7PD.js",
      "chunk-V6ZL36VE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YNS63RFJ.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GDRG4LR6.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PF6NZ7H3.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3OCUYUT.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TJJS7VVV.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UIG554AH.js",
      "chunk-NAR3ECQH.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFU2FS6O.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNCZOWVG.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSWF74HP.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HAFSNNYM.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K7PBJEZB.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVLKMVLE.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-APX2ISWB.js",
      "chunk-Q4JWN5QU.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PU45AD7E.js",
      "chunk-Q4JWN5QU.js",
      "chunk-AEV6XAP7.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '32e6adac32560da34e11a7beb0d73556f5221e50112a6c096e6c32e1067d091a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '1026833df8338a20538e106196a92e62e1eddb20781281668cc265382f682b05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107282, hash: '7ac2fdca97ef8e6c8c922ef3a6006c4a1dd013ce6d72056a650a0cb03db00a1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74016, hash: 'ce97d0d7d9ea80497d92fb287187ca6d3ed30be44e1d0f962cea5b50a09dca97', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73892, hash: '89e889e588f8c7f54e7fb66f208a2146fb567698c89f53017eb19be9c7dfe265', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173350, hash: '3bf5bd57bf2ec8c89ee6808a43862ebf763571a95ac381a2f86b00cedd471288', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68707, hash: '357cc2e31e9e17ab13155f6804bb145a3b3497a7875d8a89bcbc38051a810d20', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68692, hash: '903c98e94d3174d6e2300b3ccc03de39a92f8f2df72c1c728ee995daa0003530', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175168, hash: '6bb2c499043914f84f5079d0047612861f5d3a741f01456455b875576f840374', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66133, hash: '241852acef25bc2a8e978e2e02daf1349bb0d7ed0d55dac189696131e36af0a9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79202, hash: '021e527d7ea4223928504ca226b4c295eb7d5dbb8dbe05337f31eb877003c273', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73765, hash: '5a052e8715e4ea893b53c708d898a819e335ffda673e0c251fe0f4ba66a8904b', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68759, hash: 'b0753803658b5f4b55786c560c4b8c803e2dc6549a998003747ca1ac94825b29', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77135, hash: 'eacf2447d8e6999fd3922964631af7711a97f47dbdb8e584202164ea77dc911f', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62358, hash: 'd405ce4faa5af2d98ab322835039c733493fe783c27805afe72682e70e1e7709', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67917, hash: 'cca06ce1f52ede485419c33d859910f01dd9ce9f68d4d9496ef658e6ad39247c', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77373, hash: '1889fc34e2e639c35ef3bf149473c885d6090e2824c16559e493291f150d2354', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119791, hash: '3c68712c341ced385c7c4c0569bd61c6627e70202c34f758a99bcab25643fdc4', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 144787, hash: '05849297a1aba0913cfd4518c067c9c6f55ce4d6913524999cc10c7901b8b57c', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
