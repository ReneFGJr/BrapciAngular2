
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJAWOC4Y.js",
      "chunk-JYTOWM4H.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5XVHTO23.js",
      "chunk-ERTAZDVW.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMZM6HJV.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GXRI3WVT.js",
      "chunk-UYJP47CO.js",
      "chunk-XT4S7GN4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js",
      "chunk-ZNU7EEQI.js"
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
      "chunk-YBIQOYGD.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5EMEFILY.js",
      "chunk-ZNU7EEQI.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NOSDBKN7.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZCRQYDCL.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-67TNRB3X.js",
      "chunk-UYJP47CO.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OUDIQLU3.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FOCOXPJ4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js",
      "chunk-ZNU7EEQI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X4RIZ4T4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OZSW63J7.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A2LJEGYV.js",
      "chunk-XT4S7GN4.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FKDOOOBJ.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H37PPTB2.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QR2T4MXJ.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KLOGJRAS.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUPTRXKX.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBPSTPW7.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COSDY3FY.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBSJXGVZ.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFMKWUTI.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W5ANZY4N.js",
      "chunk-JYTOWM4H.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVE3A33R.js",
      "chunk-JYTOWM4H.js",
      "chunk-JIZTOM3P.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '93249e71e92b1dfb515006be4a70a1350d5bf725070e9c203bc5cb83516019f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '72a0319894a6d88d9fdeebff098f76701ebc1f751b4810135cb5582467b31aa0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 74702, hash: '80060914963f97450920c9957c19ff1ad0ee279b2e76419947adcee4aeec60d3', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 245336, hash: 'e92a39a05ee3285ac415ab4ba7c422130d34ef24c0758e43e6b36f132fcb8e00', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108795, hash: '47af17a923eff26f9de7065152c19916caf84d568508a672c1c6c0b3a6d05f08', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 74578, hash: 'ae4b4c617b435168364e0b5f23cbebe804254185b1fc7ebe4fc344a0d4616138', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 174045, hash: '4590f88bdf00dc54cd1a2b82431b4bcb58b8413601c6d68ae3a54f3b1b28136b', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 74622, hash: '77d0b3eecd03d90b4411d7f0f9f4e2f49ce8d3e3b03631a2514e212166321e0c', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 69393, hash: '7f85c051afc060a337d4950e741f9ebc0c12fded54d3c603d3ffbddcbf69cabf', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 120468, hash: 'b9276b07fc778f702c5f0fb8927ff43cf4824d12703ce52fe0d8256afc6427a1', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 69630, hash: 'b093eec3bb7bf7f307ab33c3871a8e12fafe79140b38886445f3fd4dbf3b29eb', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 68603, hash: '0493e28915d8ab415afc75e4e5641fef67c7023bed4ba33cb5e25a5a9026ae36', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 63044, hash: '8593004e060e0a1c223c53e2f257b57523f83e17d68ca4e2ec864cc798178fbf', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 77830, hash: '90841bfc34f487e6444f7ca9835bb5a7f7b7b67ac595e79a2835a185622081cb', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 72889, hash: '88cec0d9beaaa2edbadede81220da102351f224d91f53a8a429c39d4d2c9ad7d', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 66819, hash: 'cf6c64f5c61d317f68c2836b820cb3e6e14cb5ffd2bfe4f2b690fedf0d569552', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 73007, hash: '7f28f89c2ba7745c6fc6dfbc9c5845ef916b69da7eb3dd934a1a0d782b24984e', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 145473, hash: '693d538a7f170f88db8d3b8630de8d95fae7c0f820e0d29ff07bd83de06dfab8', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 175872, hash: '58a4ab17acf3605a89ca52ee6a915108826e070fbfea9d97c53076e062140d38', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 69810, hash: '76d030452a6cc0618877190a3b0dad49f1eef6a222d8b2134ce58cea9c6c7de9', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 74442, hash: '5bd18da75dde45c69ec49fa877498fc359bfbdcfd19e85820830abbd489073a4', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 79888, hash: '4e5055ac93f3e9d012febf781dad0f11d446bdff244a7574467bad00fbd34987', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 78068, hash: 'e47d2069e62b679978b0de4c9e56208129e6f7a316704b3504abdd039ca2acbc', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 192627, hash: 'df2b884474e6e20ede1a3a04e4f26a6dbfdccf0abc120f0d8bbad593273dff0c', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
