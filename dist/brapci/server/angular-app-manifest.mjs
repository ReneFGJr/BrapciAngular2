
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z4L4U7SG.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-URJVBBL5.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NFTFN7HZ.js",
      "chunk-4NPVSILY.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPXSY24O.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UOYOSRO2.js",
      "chunk-XMMUA2OA.js",
      "chunk-75IHTP63.js",
      "chunk-NZHJYLQ4.js",
      "chunk-UYJP47CO.js",
      "chunk-O7COU62E.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TJY2ANTG.js"
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
      "chunk-DYWPAIOX.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OKEX7L4C.js",
      "chunk-O7COU62E.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IX4MLJH5.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G5PZ3QDA.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WX5376EK.js",
      "chunk-UYJP47CO.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JZAULADJ.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZRUKXB74.js",
      "chunk-O7COU62E.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YE2O4L7J.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XGCLWN3D.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5SNDMQK.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/pensadores"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WHIKCVNU.js",
      "chunk-XMMUA2OA.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/pensadores/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2UVUTFYV.js",
      "chunk-JYTUMIR6.js",
      "chunk-75IHTP63.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YB4BLBWN.js",
      "chunk-JYTUMIR6.js",
      "chunk-NZHJYLQ4.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SF47H45X.js",
      "chunk-JYTUMIR6.js",
      "chunk-NZHJYLQ4.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TA65LUSQ.js",
      "chunk-NZHJYLQ4.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NLZHLOQ3.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOM6LTKQ.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DR7WATNW.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XW4TYXPP.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HZDG2LYX.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WMPUSK2J.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EYYP35UH.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EEOH2QMK.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K7EPZXNH.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2FXTMTNF.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSVL4GMB.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SCOBZTK.js",
      "chunk-3BNUKCKZ.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NJKGT2U4.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-22LAIK56.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6520, hash: '4eb84da6a4a48d9240e840e80d41320743b8a00f46d585a58d5268a667ee2cb9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'faa50363943d81054f9a5c6e009833a2d77e8e1e702e992d1e9deb88f8b1ee0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    '501/index.html': {size: 80400, hash: 'b79efba2aeb21d8c03e31955efec3a68da37d92e74ef0964edc853627a6ee2fb', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'index.html': {size: 74932, hash: '486bb8d2f3f31ed9ae8c7a3a41cbcd522c9b4061d947b42abb16a8d5b9738a3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87587, hash: '01cc98526fd600050214d7270f08502949b458d178fa64eb5f273b17c41a6c14', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 90145, hash: 'cc8340b7893bd8f1db482f665092581e88342d44edfd67fbde31f9d6a8be8293', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 321041, hash: '0b7c1b8a862b1b2bc7d8c635c4265999fc518ede9c0d3729d5436f0f3785ded9', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87758, hash: 'd6542f1012abf7eae9444fe7e2acc6aba91c35dccea2c13d6d0668c8fdd36c7b', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 93274, hash: '7cce0a7c483c041a507a8ff07311e5bce4a9253030e97a20ace5ce896f61cb10', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 86033, hash: '67e7a7422577f667e3082dbc1075ce054c993253c4a9fcd108555134a26df295', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 83402, hash: 'a433c4f1e7e5bd9961315b3ff22f684b06ded382e6092367d662be3cc7ca7a51', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 86142, hash: 'b8c8e1d21cadf2c715015f0379d8e6af625e54f402f6bc75945f563cf8e22d4d', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92981, hash: '44d7aca5fbeb8162a00b34a4b9d7ded70fc8f25f8a33ff7baec2ce839774f02f', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88976, hash: 'b705747159310602cac092cd4b1ded0e0ff7ea7c13656de964a887b951a2d826', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129647, hash: '596f13e060283d2ec520fecd73660674faacbe548194b0b9b852e00d9b7a1d75', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 78341, hash: 'b16d9111150718afdba2223b87fc6024da5710692659acf3c08776a40326dace', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 96038, hash: 'd57fede9f6d9e01f1e07d95ac8c08e45f4db4b3a1d16e9db0b5089058c8ab23f', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409734, hash: 'a48eef41cb7d15355edbdb1cf43e2cc2a7c07ca486ebc24ab1904008eb394d31', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87742, hash: 'fb6229f8763598af8c4032b2ed6d5c0044d8e87527257848ba82eb05a0ba794b', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 83424, hash: '0f7c82d0d9f30d05102580712b25efa22487a315c046dc36d58c0dba5712c268', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81693, hash: 'fa3ab7f4ac47b608d85b5b5b73e5e4e61a41ad02765fb3c0c7a34479e7340783', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 187066, hash: '47ba2d8881cdf17381c2c3fcc89d74e277ed176dab821b20d96d71d26475c598', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87795, hash: '5de312704d89445eafc4934033f7d79981173192cf2f677e9a8589ee2a2d749c', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 96705, hash: 'bb8ec93d43dbbd354f75e5a036106d98fbeda6d7c0d3107fdf63ef1c42f4f933', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82774, hash: 'a5aa37b504f5a3e26ff0eb5332a8ac7536c369181b004b59fe13b32a2102f898', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79963, hash: 'fac5ed68a1d6b8aa95f9c714bf434bb61c01e588575ec4dddcc36a71a209efd8', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87779, hash: '41e9b5ecaca13e8ef52d846e71122a222d0d3c3a2bbab6654bc8463dc3ed9b2b', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188917, hash: '69c569ef1db5f031b52adc588e5ea4e7738d31c497b245fe6ca93f94a1042729', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 87819, hash: '5ead4c27c2b07445c5197bac20d9bbe31be3329c7b7f44f4c1700652a9ad8007', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263531, hash: 'f8fd7b90e9f4ac093927ba80aad1436e94b67e09bed484389b04ffdb4bc559e1', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 179962, hash: 'b045dfc6b460915e9f6be0e94afa74ce05bc620469f2d89b760c601d1f5a9edc', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'styles-RNMQ53JV.css': {size: 357305, hash: '6Rc7g5bR3tk', text: () => import('./assets-chunks/styles-RNMQ53JV_css.mjs').then(m => m.default)}
  },
};
