
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NCSN6XXM.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RFIRDMY6.js"
    ],
    "route": "/501"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6XIM3ZIX.js",
      "chunk-HDBEPRLZ.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4CVTH4F.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YFHZXGYG.js",
      "chunk-3UMVKPLE.js",
      "chunk-4YVL3FRT.js",
      "chunk-UYJP47CO.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VMMYIJDF.js"
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
      "chunk-TB3RWRRK.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UKQ6Y62D.js",
      "chunk-V4GPSLXE.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XRJVJQUD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXN3AJPL.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJUSGAGO.js",
      "chunk-UYJP47CO.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XIS35Y5D.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZK4GPS6O.js",
      "chunk-V4GPSLXE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7JJWFFY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUCQRWQQ.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2OSY2CTY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pensadores"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GVKIFSFA.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/pensadores/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XNQ4IX56.js",
      "chunk-VZWU7G4X.js",
      "chunk-3UMVKPLE.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ED4O3RAN.js",
      "chunk-VZWU7G4X.js",
      "chunk-4YVL3FRT.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BLOHOVP6.js",
      "chunk-VZWU7G4X.js",
      "chunk-4YVL3FRT.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/books/disclaimer/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W6CF6HXZ.js",
      "chunk-4YVL3FRT.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SD5BBQLS.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O544FA3T.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HFEL66TG.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O3MFRVS6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4DQ4MT6.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/normalize_cites"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIDLT2VD.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools/halflive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3VRFOY6U.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IG35GLEY.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3BHYE7E.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FLF5N2QT.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVZVNEAC.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VA3UEW7V.js",
      "chunk-CFLJ5ALR.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMCNNNFR.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZQN7BCQN.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6520, hash: 'c38197191715a8d3d45ea2c7ddc2b108ec755faaae88ecded72dc2ff46b37b65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'a5a5863e97ee80cf0cae89f59aff1f08acc8d17bcd8d6c40eff252815636d31b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74933, hash: 'e76f3d7ec9fd036a853e7be806e971bbf32aea6054ac1b2df4fee73be92cd7dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '501/index.html': {size: 80401, hash: '938548eae60fb8a2697d54c3ba7a8142ec87c6000459ac9e4cd97c9701ea41da', text: () => import('./assets-chunks/501_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 87595, hash: '855ecf6a550d7ba0619240b8718763397608838288865914d5900d73b7bd4642', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 88380, hash: '7a7dacebbaac6161c816bc8d89f92dad2d967fe41af10573af6b360444413005', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 129641, hash: '450b785322faaab5df2bfbe41f4f059852e739ea05f53acea96fbeac5578208e', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 321042, hash: 'a21e4907b31a086d3703cf16ace1c34ef5357db72c46e6a91a0865a89470c8ea', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 87766, hash: 'feb0bf0c0940ff7de9f08983c956505449e308b8e7dc3f244612114fc1a72e7f', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 86035, hash: 'be48d48d02cab8b90e85154450e99689972ca99ab79ad920dcc9929260298ff8', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 83410, hash: '5b56eeb99701977dd68f2abb21a1fb9abc4e9fda3ba4d3941b42712c97bee8f5', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 93274, hash: '5213d4959127dd7737c78599f11bbc7000900792cf6c7451f117bf4f2c5113fb', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 86144, hash: 'f44377cd4707c9f6c60186f56d0c255cafb5f95ac0855477dbf08c40e36c3c65', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92989, hash: 'e645fe88bae1c9a6c173b3116ad8ed82fc1b508a4d4aec869b5acf10c7a17ff1', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88977, hash: '3ef1d9a4ffbb04006571ee06548ed6d446b8e595999ce121a16f37670648c8b9', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 78342, hash: 'b55590b6d358576d98dc518f829c1ba34690114d2477fd2b7a43dbdfd29afbcd', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 96039, hash: 'ba5491a3966bc7578b2bb8bb9f528e7fe7eab37ffc30c6016d35a9f7ba70dac8', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409735, hash: '93b1b52180ea0869bd616eba5b9b7c584403645b1fa2dd36b6fd22e385b46419', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87743, hash: '2ddcf372f3d63b3d674ae220df172bd2355a3c73d8e872a4266b28c57dd6a8fa', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81694, hash: '3043c45c0b3cad4ade6c9b420e3fd9ddddd21e44f24b24076f489d6b498a2684', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 83425, hash: '8972e3c8863665a1a8b788b82afb755e517de0dad0a4db8480368c10e4085397', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 187075, hash: 'f30b81b497bd215881fd2425fcb59bbcc3e7e64f37ce2aed4274b06811797342', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87797, hash: '8ff38977692f9f8be50d6ae2f355f41fd7a45d01cb8eab6f7535f25ccc5c8a68', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93658, hash: '1d070c7489b0e6c82269cef43b756b783a2f6708d29acedc9f178004176c0e0c', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188910, hash: '55318c124e90ce436370a3052f666f628d74bcea808e03eeb6bfca5e331c7be6', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82776, hash: 'ce395f757c0049122c5df4a08ce60493cc0b7932885fdd238eaa56c3580b59f0', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79963, hash: '73dcdbb6d10ca8442053b1b00f8d58f3a4b12efffb3e5ef1a8783f9708233340', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87780, hash: 'b600440ab7b41aaedcbb1164b07e19639087775bee20b9fda347ee38a12a0d03', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 88253, hash: 'a36d8e20022d6d2c8722807ebd28dc0e1d6809c6044ea435cbcf351785ddcd8e', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263531, hash: '03af71136b8ea14d4caf2768cb506ee84ec7d35a6c392c288efdc6676df60fbf', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 136529, hash: '00fd962f2d956108b0fe70cb220676457a84e854d822599d250d05effa09eb9c', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'styles-RNMQ53JV.css': {size: 357305, hash: '6Rc7g5bR3tk', text: () => import('./assets-chunks/styles-RNMQ53JV_css.mjs').then(m => m.default)}
  },
};
