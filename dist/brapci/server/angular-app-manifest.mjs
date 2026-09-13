
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5HWXTZHG.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NIGFGBFT.js",
      "chunk-Z4MNR52Q.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQQQJZFI.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/autoridade"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KITSOHS2.js",
      "chunk-36F5EEYL.js",
      "chunk-UYJP47CO.js",
      "chunk-OZM737ES.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/v/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ZTQ7XUWL.js",
      "chunk-ABF7DMVI.js"
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
      "chunk-PGQEPKLZ.js"
    ],
    "route": "/basket/selected"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YXSSTR.js",
      "chunk-OZM737ES.js"
    ],
    "route": "/painel"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CO6T7SGY.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZDSLM7YA.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/doc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O4RJB2MX.js",
      "chunk-UYJP47CO.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/pq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7BU7UUDD.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4ZFU2MUY.js",
      "chunk-OZM737ES.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas/avaliation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NUFCTH6F.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/revistas/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A3TH3GCK.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I6KRRRDD.js",
      "chunk-36F5EEYL.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/livros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6MJVJHHM.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/livros/submit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5EUI5LB.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3M33EPC.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LAPSLXRT.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/txt4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UOMKIPL2.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/txt4network"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MCYTACE4.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools/term4net"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T65JMRNF.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_bibliografics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5U7J5NZ.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_bibliometric"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6SQFCQFD.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_text"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WBZ7QJCO.js",
      "chunk-YT7PEM4B.js"
    ],
    "route": "/tools_text/specialist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AEZM3DYJ.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/cited"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4QIHG44A.js",
      "chunk-YT7PEM4B.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/small_world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GWXZ2F7I.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/statistics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G4XECAWQ.js",
      "chunk-ABF7DMVI.js"
    ],
    "route": "/monitor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6002, hash: '832cef0d897d70b000dea1382f36307a158513fcebf8adceae402446ce84c4cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1867, hash: '6d484bade0297d321b3a29c991fc45b730c16ae931aa503372ae3386fe204cc1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'autoridade/index.html': {size: 85164, hash: '10d0d862d25ecae0c9a83b15ac45baf3a2211d83ba8e5510461b321a24c1ebef', text: () => import('./assets-chunks/autoridade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 138440, hash: 'd812a63121a3f119b26fd68afac7ca6387e0c12fa92e6d29170b75c233f3200e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'revistas/index.html': {size: 181164, hash: '9ca7a351dc50742caa49c8afcbd113729be922ab25538361de2efd3a126d4f30', text: () => import('./assets-chunks/revistas_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 85040, hash: '83207e992c9b06a5ed3cb64117f4d39dcdd2afa7e25a1f9b7af8612c3bb9f11f', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'pq/index.html': {size: 255855, hash: '321f16a55fffed5649e88ad82151abeb82bdff47fec446fac484dbdae474e198', text: () => import('./assets-chunks/pq_index_html.mjs').then(m => m.default)},
    'tools/txt4net/index.html': {size: 85075, hash: '2b268c72af698ab1286897357975b5505ed1dc58fd2681a05e112e76e4958f8a', text: () => import('./assets-chunks/tools_txt4net_index_html.mjs').then(m => m.default)},
    'tools/term4net/index.html': {size: 83360, hash: '8161859e78b0450a092805bba6ab40766d9648e3f94c91b07840cb1552776633', text: () => import('./assets-chunks/tools_term4net_index_html.mjs').then(m => m.default)},
    'livros/index.html': {size: 132189, hash: 'cc2b13d78dec1a75891f4e757a78f715da2bf9a557455f9edb675952f9901535', text: () => import('./assets-chunks/livros_index_html.mjs').then(m => m.default)},
    'tools_bibliometric/index.html': {size: 80719, hash: '8ae1585dcf2e0e1e8b9159550b6f7a38a3565528d8b19ed058c271977d37880e', text: () => import('./assets-chunks/tools_bibliometric_index_html.mjs').then(m => m.default)},
    'tools_text/specialist/index.html': {size: 83460, hash: '0f44008136c8916a7fe78eadc0cf40d59d5ddcc438c3ac1609b052cedc699b26', text: () => import('./assets-chunks/tools_text_specialist_index_html.mjs').then(m => m.default)},
    'small_world/index.html': {size: 90359, hash: 'e9d6ec0c9ba36e7dfa04c1f3b5d1422b01f2f6241de969a1ffabf08a300ec2d7', text: () => import('./assets-chunks/small_world_index_html.mjs').then(m => m.default)},
    'painel/index.html': {size: 77281, hash: 'fcd121406640ec0c202c530597427ff76e1b92c774f199b4d33387dc161bf645', text: () => import('./assets-chunks/painel_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 86346, hash: '6172dce8a7b7d68babb9580816718acbba78f64f2705bcc061cb0daed9081051', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 90967, hash: 'f8345f0619d98ebbc34fa66cfd4d041cc0d230a2a225944fcb324e171c9be684', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 84673, hash: '7b1bd9bf79ebff87bada2369d82723149ce68d22bd0991599b98874e5718ae90', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tools_bibliografics/index.html': {size: 79855, hash: '055dd581ccd530af45346715dd20e2fc0208192a0ae7a777ee4ae1421a45e008', text: () => import('./assets-chunks/tools_bibliografics_index_html.mjs').then(m => m.default)},
    'basket/selected/index.html': {size: 75596, hash: '137987f0cc2ab73b19ba1f65cfbd9d25133054b4c90cf60401d97aa0f0f6f89b', text: () => import('./assets-chunks/basket_selected_index_html.mjs').then(m => m.default)},
    'cited/index.html': {size: 79065, hash: '0475734596b37023a4fc02f9f556429b70498dd388ed6ff07d1448535b897589', text: () => import('./assets-chunks/cited_index_html.mjs').then(m => m.default)},
    'tools/txt4network/index.html': {size: 85068, hash: '457c41856643eeb52d01c708cf39e41d99114cb7ceb890a8e391dde3da1c55f4', text: () => import('./assets-chunks/tools_txt4network_index_html.mjs').then(m => m.default)},
    'statistics/index.html': {size: 85189, hash: '98831afba5e9a38365848fba702fe09dbcacbbc126cf08f472e256fe0e29c027', text: () => import('./assets-chunks/statistics_index_html.mjs').then(m => m.default)},
    'livros/submit/index.html': {size: 88292, hash: '6feeeccf3487e88ab7146a8bdae5eed5167a6a1b0a91a3ba3276bb33eee591b0', text: () => import('./assets-chunks/livros_submit_index_html.mjs').then(m => m.default)},
    'revistas/avaliation/index.html': {size: 259265, hash: 'd8ebec0cf712bbe21468094adf96d72114018c9d8713407994819193fe8bfd90', text: () => import('./assets-chunks/revistas_avaliation_index_html.mjs').then(m => m.default)},
    'tools_text/index.html': {size: 80101, hash: '4649ee0ebe97c76f4e84320750394b6cbd655a5a50019d79e757943efaee1955', text: () => import('./assets-chunks/tools_text_index_html.mjs').then(m => m.default)},
    'doc/index.html': {size: 155935, hash: '2010e09e9562da2dbf409b5ba8670bd99fdf780c020d04903c30fdb83f2bdb0a', text: () => import('./assets-chunks/doc_index_html.mjs').then(m => m.default)},
    'revistas/timeline/index.html': {size: 184644, hash: '56afe2fdcfcf1fe1e847b6035bd78d5b33668176a32f94f2a1c4ecb80a2fd784', text: () => import('./assets-chunks/revistas_timeline_index_html.mjs').then(m => m.default)},
    'styles-UC57ADNC.css': {size: 354369, hash: 'bcx+5GXSibo', text: () => import('./assets-chunks/styles-UC57ADNC_css.mjs').then(m => m.default)}
  },
};
