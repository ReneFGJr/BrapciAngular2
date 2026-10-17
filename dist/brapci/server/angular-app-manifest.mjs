
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
    'tools/txt4net/index.html': {size: 87766, hash: 'feb0bf0c0940ff7de9f08983c956505449e308b8e7dc3f244612114fc1a72e7f', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 321042, hash: 'a21e4907b31a086d3703cf16ace1c34ef5357db72c46e6a91a0865a89470c8ea', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 86035, hash: 'be48d48d02cab8b90e85154450e99689972ca99ab79ad920dcc9929260298ff8', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'tools/halflive/index.html': {size: 93282, hash: '9584bf7cff0ed733e59cc7ef16e2670c68517c95554fa4e104bf0801917955d7', text: () => import('./assets-chunks/tools_halflive_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 83402, hash: '8ff0fa48bf5bfdbbf52af9f800c3a687cc8839e89a822d30278dfce4e3fc66ae', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 86144, hash: 'f44377cd4707c9f6c60186f56d0c255cafb5f95ac0855477dbf08c40e36c3c65', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 92989, hash: 'c2290239f7503bdde88439b409336035c46f672384d8dd5ca0c282bd961065ac', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 88977, hash: 'a0361ea5310d8e706b7d4a2b98c126796ba7a9e21008c14376754332d7f44f77', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 78342, hash: 'b55590b6d358576d98dc518f829c1ba34690114d2477fd2b7a43dbdfd29afbcd', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 409735, hash: '93b1b52180ea0869bd616eba5b9b7c584403645b1fa2dd36b6fd22e385b46419', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 96039, hash: 'ba5491a3966bc7578b2bb8bb9f528e7fe7eab37ffc30c6016d35a9f7ba70dac8', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 87742, hash: '815a9dfea7dad7a3b44c69134781452d0db9f32770b154f5d1e3577ce36d8eec', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 83426, hash: 'c13bc98b171f27cdb560dd8f378bb564952f0e23e3750e9a9dd5dd3eeda1a4cb', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 87797, hash: 'd6271d0df2c12caafcd3e2e03e6c4500aa1866135306858acf91a3da9184c264', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 187075, hash: 'bb60c5d74c12be6e238873d7c5d575b29fa3a62516af7b845c79c59c64643fc7', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 81696, hash: 'cced5897fd16b702ef0e3f42910b1faf37e84e9eff7483c1c12b6535f6ff32df', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 188910, hash: '5586fc9f03a1314e0a8fd2782f3cebef4d410a4e814819fe118ea0e1debe0e5c', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 93658, hash: 'dea95847c36a7779a6d0de7f2d83b1b3b7ddf98fcb538260fce3f7b30072ae7d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 82775, hash: '0e7ce5f7fba89789d409503c1b8fa9d0d95f32b83ea3ccf98745333a9504cf5a', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'tools/normalize_cites/index.html': {size: 87788, hash: 'f6c3e5fe2de3330f6f531a4491245f2fe56c888984acd8409e8ec56ef0c95a8a', text: () => import('./assets-chunks/tools_normalize_cites_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 79964, hash: '4d5f79bc75f3b8e75f006f89830264640ccc38e2b5db4ab176df2eca9d03d53c', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 88253, hash: '225c6ad700b960411456674c09acdb2908afc8a126c1f3b47153ea50e4b014d0', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'pensadores/index.html': {size: 136528, hash: 'ae197d819e0d48b30bdf9c2246b83684b843eed831c9a715ec4e425f8e48b475', text: () => import('./assets-chunks/pensadores_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 263532, hash: 'a35be9e74fd1461910f87d99ff404c6a32bc21a87978fa609847b5247e0c56c2', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'styles-RNMQ53JV.css': {size: 357305, hash: '6Rc7g5bR3tk', text: () => import('./assets-chunks/styles-RNMQ53JV_css.mjs').then(m => m.default)}
  },
};
