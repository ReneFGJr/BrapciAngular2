
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-4AQM55WL.js",
      "chunk-6R3I6X5P.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CASNSXTW.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-G72OFOKB.js",
      "chunk-OJ3SN526.js",
      "chunk-GZBPE32H.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
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
      "chunk-LWTYOQ6E.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3HQWV7U.js",
      "chunk-GZBPE32H.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FDOXUPKM.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J3CKY2GM.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJGWJJ3A.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6LEMAPUG.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WU5RDZW6.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SEBR3DDH.js",
      "chunk-OJ3SN526.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z7BPE2NN.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QT2PXWVD.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EA7GD5LJ.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q4D4JMUR.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F4TAK4KG.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J4GU455I.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAATY5ZL.js",
      "chunk-6R3I6X5P.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ZQH37AR.js",
      "chunk-6R3I6X5P.js",
      "chunk-I3OECSBU.js"
    ],
    "route": "/small_world"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '3fa3d7a3d0dfd3efb0cd7a8ed0da77405b53661e5964d5d5a37decd1f2d80a07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '682a6f740e9d82d16fe002f00b2c4187a3bf118896c683b1a946c31610712971', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 73805, hash: 'c7c858f7a0cb95d3300385d61faf2d3d9189e20550aee56dbdcdaa20aba15cac', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107071, hash: 'c8ce062de25167cfc0a561cdbfbe5e195fc5ef5a821f02388b483cef8ec2a3d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 73681, hash: 'ede11fc9c9bf64f09c14d5dbaa88bd8296f7523476ea81b20c985dcecb2a3a48', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 68505, hash: '11a3d15a3063cfea577fc6f975ce79fe0a49a7727d46656df6fc044e278ef210', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 68472, hash: '087168e386c8b4dad8235a536ad4f4f2afde1d44658c7e5c71e172f075989576', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 76689, hash: '746016b66aa8e8b3e03aff7289189d2939d467f41e3c0805a73aaf5e27e4115e', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 65922, hash: '71d74d004f657a6f9f24b6d24116074c95093d9ad29cf69ce7aa3e21c6f63ef9', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 73554, hash: '94daccff3725e7729977e90928bb33b970ef001cb561dfdcdaba8e368a0fed04', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 173139, hash: '34f5e1fe5144f6ea103ff49ddd43ffeb1e9bf3a6c24fa31a226c71ca663b5a23', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 74499, hash: 'bc1bfd9e161c70ae3d6f74d8529a2a08d6b2c9929408880ae3f2c3145ecc46d6', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 174957, hash: '32eb1187cc5fbdfbc3c8cbcac2e8875c182345e18768b151fcc1787cc83b6bac', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 68557, hash: '24bc45886514b38cdc77c39895f4249c25e9ad80883bac66b10cd40da0cf0151', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 62147, hash: 'a49b22d43cd7a2c938137e4271f9636d649bd908b0f6e53b80a3e6f0191283dc', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 67706, hash: 'f0519335dd555b6c4cf6848738e0d090611544c6f203d4a19754b00a131dfb75', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 77171, hash: '4146e379117eee3b9d976ac0dae0472ce3d9b23a5b6a72d63f82675f4285e37e', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 74057, hash: '75268e2227d45917a0081d12972aed9845d0206b61edb568e15fee2f159a36e1', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 119571, hash: '865581f32a08dda14ce5611e84e803f4afdc7d8b3ef42af298e9fe12b7a5ccce', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'styles-7BPI2AFQ.css': {size: 354097, hash: 'tNWdIDcnFxA', text: () => import('./assets-chunks/styles-7BPI2AFQ_css.mjs').then(m => m.default)}
  },
};
