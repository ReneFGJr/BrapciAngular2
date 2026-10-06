export default `<!DOCTYPE html><html lang="pt-BR" style="--a11y-font-scale: 1;"><head>
  <meta charset="utf-8">
  <title>Brapci - Base de dados em Ciência da Informação</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO.">
  <meta property="og:title" content="Brapci - Base de dados em Ciência da Informação">
  <meta property="og:description" content="Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO.">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
  <script src="env.js"></script>
  <!-- Google Analytics: generated from .env -->
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-HSS9RYF8ZS"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-HSS9RYF8ZS');
  </script>
  <!-- /Google Analytics -->
<link rel="stylesheet" href="styles.css"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&amp;family=Bitter:wght@500;700&amp;family=Raleway:wght@400;500;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" as="style"><style ng-app-id="ng">

.supersmall[_ngcontent-ng-c4287088047], 
a.supersmall[_ngcontent-ng-c4287088047], 
a.link.supersmall[_ngcontent-ng-c4287088047] {
  font-size: 0.75rem !important;
  text-decoration: none !important;
  line-height: 85%;
}
a.link.supersmall[_ngcontent-ng-c4287088047]:hover, 
a.supersmall[_ngcontent-ng-c4287088047]:hover, 
.supersmall[_ngcontent-ng-c4287088047]:hover {
  text-decoration: underline !important;
}
[_nghost-ng-c4287088047] {
  color: var(--theme-ink);
  display: flex;
  flex-direction: column;
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif;
  isolation: isolate;
  min-height: 100dvh;
  position: relative;
  background: var(--theme-bg);
}
[_nghost-ng-c4287088047]::before {
  background: url(/assets/background/brapci_mapa_mundi.png) top center/contain no-repeat;
  content: "";
  inset: 10% 0 0;
  opacity: 0.15;
  pointer-events: none;
  position: fixed;
  z-index: -1;
}
@media (max-width: 575.98px) {
  [_nghost-ng-c4287088047]::before {
    opacity: 0.3;
  }
}
a.link.supersmall[_ngcontent-ng-c4287088047] {
  font-size: 0.75rem;
  color: green;
  text-decoration: none;
}
.navbar[_ngcontent-ng-c4287088047] {
  background-color: #483d8b !important;
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar[_ngcontent-ng-c4287088047]   *[_ngcontent-ng-c4287088047] {
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar-brand[_ngcontent-ng-c4287088047], 
.nav-item[_ngcontent-ng-c4287088047], 
.btn-link[_ngcontent-ng-c4287088047], 
.dropdown-item[_ngcontent-ng-c4287088047] {
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif !important;
  font-size: 1.1rem;
}
.nav-link[_ngcontent-ng-c4287088047] {
  font-family:
    "Barlow Condensed",
    "Times New Roman",
    sans-serif !important;
  font-size: 1.2rem;
}
.hero[_ngcontent-ng-c4287088047] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c4287088047] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.eyebrow[_ngcontent-ng-c4287088047] {
  font-size: 0.78rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c4287088047] {
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0.4rem 0;
}
.navbar-logo[_ngcontent-ng-c4287088047] {
  display: block;
  height: auto;
  max-height: 40px;
  width: clamp(120px, 16vw, 170px);
}
.nav-login-link[_ngcontent-ng-c4287088047], 
.nav-user-chip[_ngcontent-ng-c4287088047] {
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  color: #fff;
  display: inline-flex;
  font-size: 0.84rem;
  gap: 0.35rem;
  line-height: 1;
  padding: 0.34rem 0.62rem;
  text-decoration: none;
  white-space: nowrap;
}
.nav-login-link[_ngcontent-ng-c4287088047]:hover, 
.nav-login-link[_ngcontent-ng-c4287088047]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.nav-login-link[_ngcontent-ng-c4287088047]   svg[_ngcontent-ng-c4287088047], 
.nav-user-chip[_ngcontent-ng-c4287088047]   svg[_ngcontent-ng-c4287088047] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.nav-user-chip[_ngcontent-ng-c4287088047] {
  background: rgba(255, 255, 255, 0.12);
}
.docs-dropdown[_ngcontent-ng-c4287088047]   .btn-link[_ngcontent-ng-c4287088047] {
  border: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
}
.docs-dropdown[_ngcontent-ng-c4287088047]   .btn-link[_ngcontent-ng-c4287088047]:hover, 
.docs-dropdown[_ngcontent-ng-c4287088047]   .btn-link[_ngcontent-ng-c4287088047]:focus-visible, 
.docs-dropdown.show[_ngcontent-ng-c4287088047]   .btn-link[_ngcontent-ng-c4287088047] {
  color: #fff;
}
.language-picker[_ngcontent-ng-c4287088047] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.language-flag-btn[_ngcontent-ng-c4287088047] {
  background: transparent;
  border: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
}
.language-flag[_ngcontent-ng-c4287088047] {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.language-select[_ngcontent-ng-c4287088047] {
  font-size: 0.92rem;
  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;
  line-height: 1.1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
}
.language-select[_ngcontent-ng-c4287088047]   option[_ngcontent-ng-c4287088047] {
  color: #000;
  background-color: #fff;
}
.docs-dropdown[_ngcontent-ng-c4287088047]   .dropdown-menu[_ngcontent-ng-c4287088047] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  min-width: 13rem;
}
.docs-dropdown[_ngcontent-ng-c4287088047]   .dropdown-item[_ngcontent-ng-c4287088047] {
  color: var(--theme-ink);
}
.docs-dropdown[_ngcontent-ng-c4287088047]   .dropdown-item[_ngcontent-ng-c4287088047]:hover, 
.docs-dropdown[_ngcontent-ng-c4287088047]   .dropdown-item[_ngcontent-ng-c4287088047]:focus-visible {
  background: var(--theme-sand);
  color: var(--theme-ink);
}
.theme-switch[_ngcontent-ng-c4287088047]   .form-check-input[_ngcontent-ng-c4287088047] {
  cursor: pointer;
}
.bug-toggle[_ngcontent-ng-c4287088047] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  margin-right: 0.75rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
}
.bug-toggle[_ngcontent-ng-c4287088047]:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.accessibility-launcher[_ngcontent-ng-c4287088047] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.accessibility-toggle[_ngcontent-ng-c4287088047] {
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  color: #fff;
  display: inline-flex;
  height: 2.1rem;
  justify-content: center;
  padding: 0;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    border-color 0.2s ease;
  width: 2.1rem;
}
.accessibility-toggle[_ngcontent-ng-c4287088047]:hover, 
.accessibility-toggle[_ngcontent-ng-c4287088047]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-1px);
}
.accessibility-toggle[_ngcontent-ng-c4287088047]   svg[_ngcontent-ng-c4287088047] {
  fill: currentColor;
  height: 1.4rem;
  width: 1.4rem;
}
@media (max-width: 991.98px) {
  .nav-login-link[_ngcontent-ng-c4287088047], 
   .nav-user-chip[_ngcontent-ng-c4287088047] {
    margin: 0.45rem 0;
  }
  .docs-dropdown[_ngcontent-ng-c4287088047]   .dropdown-menu[_ngcontent-ng-c4287088047] {
    position: static;
  }
}
.layout[_ngcontent-ng-c4287088047] {
  flex: 1;
}
.card[_ngcontent-ng-c4287088047] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.footer[_ngcontent-ng-c4287088047] {
  background: var(--theme-footer);
}
.footer-social[_ngcontent-ng-c4287088047] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-link[_ngcontent-ng-c4287088047] {
  align-items: center;
  border: 1px solid var(--theme-line);
  border-radius: 999px;
  color: var(--theme-ink);
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  width: 2rem;
}
.footer-social-link[_ngcontent-ng-c4287088047]   svg[_ngcontent-ng-c4287088047] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.footer-social-link[_ngcontent-ng-c4287088047]:hover, 
.footer-social-link[_ngcontent-ng-c4287088047]:focus-visible {
  background-color: var(--theme-sand);
  border-color: var(--theme-hint);
  color: var(--theme-ink);
}
.footer-meta[_ngcontent-ng-c4287088047] {
  display: grid;
  gap: 0.1rem;
}
.footer-session[_ngcontent-ng-c4287088047] {
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}
.full[_ngcontent-ng-c4287088047] {
  width: 100%;
}
.small[_ngcontent-ng-c4287088047] {
  font-size: 0.75rem;
}
/*# sourceMappingURL=/app.css.map */</style><meta name="keywords" content="Brapci, Ciencia da Informacao, SEO, Angular 20, API"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json" id="brapci-jsonld">{"@context":"https://schema.org","@type":"WebSite","name":"Brapci","inLanguage":"pt-br","url":"https://cip.brapci.inf.br","potentialAction":{"@type":"SearchAction","target":"https://cip.brapci.inf.br/api?q={search_term_string}","query-input":"required name=search_term_string"}}</script><style ng-app-id="ng">

.small-world-page[_ngcontent-ng-c2757603175] {
  min-height: calc(100vh - 70px);
  background:
    linear-gradient(
      135deg,
      #f5f7fa 0%,
      #c3cfe2 100%);
  color: #212529;
}
.search-card[_ngcontent-ng-c2757603175] {
  position: relative;
  padding: clamp(1.25rem, 3vw, 2.5rem);
  background: #fff;
  border: 1px solid #d7dee8;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(22, 40, 68, 0.1);
}
.eyebrow[_ngcontent-ng-c2757603175] {
  color: #0d6efd;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.lead[_ngcontent-ng-c2757603175], 
.form-text[_ngcontent-ng-c2757603175] {
  color: #59636e;
}
.small-world-header[_ngcontent-ng-c2757603175] {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
}
.small-world-logo[_ngcontent-ng-c2757603175] {
  display: block;
  width: min(120px, 28vw);
  height: auto;
  object-fit: contain;
}
.small-world-references[_ngcontent-ng-c2757603175] {
  padding: clamp(1rem, 2.5vw, 1.5rem);
  color: #344254;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #d7dee8;
  border-radius: 0.75rem;
}
.small-world-references[_ngcontent-ng-c2757603175]   p[_ngcontent-ng-c2757603175] {
  overflow-wrap: anywhere;
}
.search-grid[_ngcontent-ng-c2757603175] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(9rem, 0.45fr);
  gap: 1rem;
  align-items: start;
}
.author-field[_ngcontent-ng-c2757603175] {
  position: relative;
  min-width: 0;
}
.author-field[_ngcontent-ng-c2757603175]   label[_ngcontent-ng-c2757603175] {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
}
.button-field[_ngcontent-ng-c2757603175] {
  padding-top: 1.9rem;
}
.button-field[_ngcontent-ng-c2757603175]   .btn[_ngcontent-ng-c2757603175] {
  width: 100%;
  min-height: 2.4rem;
}
.status-text[_ngcontent-ng-c2757603175], 
.invalid-message[_ngcontent-ng-c2757603175] {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
}
.status-text[_ngcontent-ng-c2757603175] {
  color: #59636e;
}
.invalid-message[_ngcontent-ng-c2757603175] {
  color: #b02a37;
}
.suggestions[_ngcontent-ng-c2757603175] {
  position: absolute;
  z-index: 20;
  top: calc(100% + 0.25rem);
  right: 0;
  left: 0;
  max-height: 18rem;
  margin: 0;
  padding: 0.35rem;
  overflow-y: auto;
  list-style: none;
  background: #fff;
  border: 1px solid #b8c2cf;
  border-radius: 0.5rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}
.suggestions[_ngcontent-ng-c2757603175]   li[_ngcontent-ng-c2757603175] {
  padding: 0.6rem 0.75rem;
  border-radius: 0.3rem;
  cursor: pointer;
}
.suggestions[_ngcontent-ng-c2757603175]   li[_ngcontent-ng-c2757603175]:hover, 
.suggestions[_ngcontent-ng-c2757603175]   li.active[_ngcontent-ng-c2757603175] {
  color: #fff;
  background: #0d6efd;
}
.result[_ngcontent-ng-c2757603175] {
  padding: 1rem;
  background: #f5f7fa;
  border: 1px solid #d7dee8;
  border-radius: 0.75rem;
}
.result[_ngcontent-ng-c2757603175]   pre[_ngcontent-ng-c2757603175] {
  max-height: 28rem;
  overflow: auto;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: inherit;
}
input[_ngcontent-ng-c2757603175]:focus-visible, 
button[_ngcontent-ng-c2757603175]:focus-visible, 
.suggestions[_ngcontent-ng-c2757603175]   li[_ngcontent-ng-c2757603175]:focus-visible {
  outline: 3px solid #ffbf47;
  outline-offset: 2px;
}
@media (max-width: 767.98px) {
  .small-world-header[_ngcontent-ng-c2757603175] {
    flex-direction: column;
    align-items: flex-start;
  }
  .small-world-logo[_ngcontent-ng-c2757603175] {
    align-self: center;
    width: min(220px, 70vw);
  }
  .search-grid[_ngcontent-ng-c2757603175] {
    grid-template-columns: 1fr;
  }
  .button-field[_ngcontent-ng-c2757603175] {
    padding-top: 0;
  }
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .small-world-page[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .small-world-page[_ngcontent-ng-c2757603175] {
  color: #eef2f7;
  background:
    linear-gradient(
      135deg,
      #1a1a1a 0%,
      #2d2d2d 100%);
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .search-card[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .search-card[_ngcontent-ng-c2757603175], 
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .suggestions[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .suggestions[_ngcontent-ng-c2757603175], 
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .small-world-references[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .small-world-references[_ngcontent-ng-c2757603175] {
  background: #202834;
  border-color: #46556a;
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .small-world-references[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .small-world-references[_ngcontent-ng-c2757603175] {
  color: #dce5ef;
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .lead[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .lead[_ngcontent-ng-c2757603175], 
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .form-text[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .form-text[_ngcontent-ng-c2757603175], 
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .status-text[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .status-text[_ngcontent-ng-c2757603175] {
  color: #c4ced9;
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .form-control[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .form-control[_ngcontent-ng-c2757603175] {
  color: #f4f7fa;
  background: #141a22;
  border-color: #607089;
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .form-control[_ngcontent-ng-c2757603175]::placeholder, body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .form-control[_ngcontent-ng-c2757603175]::placeholder {
  color: #aab5c2;
}
body.theme-master.theme-dark[_nghost-ng-c2757603175]   .result[_ngcontent-ng-c2757603175], body.theme-master.theme-dark   [_nghost-ng-c2757603175]   .result[_ngcontent-ng-c2757603175] {
  background: #141a22;
  border-color: #46556a;
}
/*# sourceMappingURL=/small-world.page.css.map */</style><style ng-app-id="ng">

.bc-wrap[_ngcontent-ng-c3912997418] {
  padding-top: 0.25rem;
}
.breadcrumb[_ngcontent-ng-c3912997418] {
  margin-bottom: 0;
}
.breadcrumb-item[_ngcontent-ng-c3912997418], 
.breadcrumb-item[_ngcontent-ng-c3912997418]   a[_ngcontent-ng-c3912997418], 
.breadcrumb-item[_ngcontent-ng-c3912997418]   span[_ngcontent-ng-c3912997418] {
  color: var(--theme-hint, #6c757d);
  font-size: 0.9rem;
  text-decoration: none;
}
.breadcrumb-item[_ngcontent-ng-c3912997418]   a[_ngcontent-ng-c3912997418]:hover, 
.breadcrumb-item[_ngcontent-ng-c3912997418]   a[_ngcontent-ng-c3912997418]:focus-visible {
  color: var(--theme-ink, #212529);
  text-decoration: underline;
}
.breadcrumb-item.active[_ngcontent-ng-c3912997418], 
.breadcrumb-item.active[_ngcontent-ng-c3912997418]   span[_ngcontent-ng-c3912997418] {
  color: var(--theme-ink, #212529);
  font-weight: 600;
}
/*# sourceMappingURL=/breadcrumbs.component.css.map */</style></head>
<body class="theme-master"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend","keydown"],["blur"]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c4287088047="" ngh="2" ng-server-context="ssg"><nav _ngcontent-ng-c4287088047="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c4287088047="" class="container"><a _ngcontent-ng-c4287088047="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c4287088047="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c4287088047="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c4287088047="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c4287088047="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c4287088047="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c4287088047="" class="nav-item"><a _ngcontent-ng-c4287088047="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c4287088047="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c4287088047="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c4287088047="" class="dropdown-menu"><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/revistas/avaliation" class="dropdown-item" href="/revistas/avaliation" jsaction="click:;">Estratificação</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c4287088047="" class="nav-item"><a _ngcontent-ng-c4287088047="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c4287088047="" class="nav-item"><a _ngcontent-ng-c4287088047="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c4287088047="" class="nav-item"><a _ngcontent-ng-c4287088047="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c4287088047="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c4287088047="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c4287088047="" class="dropdown-menu"><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/pq" class="dropdown-item" href="/pq" jsaction="click:;">Bolsistas PQ do CNPq</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/statistics" class="dropdown-item" href="/statistics" jsaction="click:;">Estatísticas da base</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" href="#" class="dropdown-item" jsaction="click:;">Indices de Assuntos</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" href="#" class="dropdown-item" jsaction="click:;">Indices de Autores</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c4287088047=""><a _ngcontent-ng-c4287088047="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c4287088047="" class="d-flex align-items-center gap-2"><button _ngcontent-ng-c4287088047="" type="button" title="Reportar problema" aria-label="Reportar problema" class="bug-toggle" jsaction="click:;"><i _ngcontent-ng-c4287088047="" aria-hidden="true" class="bi bi-bug"></i></button><div _ngcontent-ng-c4287088047="" class="accessibility-launcher"><button _ngcontent-ng-c4287088047="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c4287088047="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c4287088047="" class="language-picker"><button _ngcontent-ng-c4287088047="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c4287088047="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c4287088047="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c4287088047="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c4287088047="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c4287088047="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c4287088047=""></router-outlet><app-small-world-page _nghost-ng-c2757603175="" ngh="1"><main _ngcontent-ng-c2757603175="" aria-labelledby="small-world-title" class="small-world-page py-4"><div _ngcontent-ng-c2757603175="" class="container"><app-breadcrumbs _ngcontent-ng-c2757603175="" _nghost-ng-c3912997418="" ngh="0"><nav _ngcontent-ng-c3912997418="" aria-label="Breadcrumb" class="bc-wrap"><ol _ngcontent-ng-c3912997418="" class="breadcrumb mb-1"><li _ngcontent-ng-c3912997418="" class="breadcrumb-item"><!--container--><a _ngcontent-ng-c3912997418="" href="/" jsaction="click:;">Inicio</a><!--container--></li><li _ngcontent-ng-c3912997418="" class="breadcrumb-item active" aria-current="page"><span _ngcontent-ng-c3912997418="">Small World</span><!--container--><!--container--></li><!--container--></ol></nav></app-breadcrumbs><section _ngcontent-ng-c2757603175="" class="search-card"><header _ngcontent-ng-c2757603175="" class="small-world-header mb-4"><div _ngcontent-ng-c2757603175=""><p _ngcontent-ng-c2757603175="" class="eyebrow mb-1">Rede de colaboração</p><h1 _ngcontent-ng-c2757603175="" id="small-world-title" class="h2 mb-2">Pequeno Mundo</h1><h2 _ngcontent-ng-c2757603175="" class="h4 mb-3">Projeto Brapci - Conectando pesquisadores, gerando colaborações.</h2><p _ngcontent-ng-c2757603175="" class="mb-0">Descubra a rede de colaboração entre pesquisadores com base em suas publicações. Digite os nomes dos autores para explorar as conexões e identificar potenciais colaborações.</p></div><img _ngcontent-ng-c2757603175="" src="/assets/logos/brapci_small_world.png" alt="Brapci Small World" class="small-world-logo"></header><form _ngcontent-ng-c2757603175="" novalidate="" class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c2757603175="" class="search-grid"><div _ngcontent-ng-c2757603175="" class="author-field"><label _ngcontent-ng-c2757603175="" for="author">Primeiro autor</label><input _ngcontent-ng-c2757603175="" id="author" type="text" formcontrolname="author" autocomplete="off" placeholder="Digite ao menos 4 caracteres" role="combobox" aria-autocomplete="list" aria-controls="author-options" aria-describedby="author-help author-error" class="form-control ng-untouched ng-pristine ng-invalid" aria-expanded="false" aria-invalid="false" value="" jsaction="input:;blur:;compositionstart:;compositionend:;keydown:;"><span _ngcontent-ng-c2757603175="" id="author-help" class="form-text">Escolha um nome da lista.</span><!--container--><!--container--><!--container--></div><div _ngcontent-ng-c2757603175="" class="author-field"><label _ngcontent-ng-c2757603175="" for="coauthor">Segundo autor</label><input _ngcontent-ng-c2757603175="" id="coauthor" type="text" formcontrolname="coauthor" autocomplete="off" placeholder="Digite ao menos 4 caracteres" role="combobox" aria-autocomplete="list" aria-controls="coauthor-options" aria-describedby="coauthor-help coauthor-error" class="form-control ng-untouched ng-pristine ng-invalid" aria-expanded="false" aria-invalid="false" value="" jsaction="input:;blur:;compositionstart:;compositionend:;keydown:;"><span _ngcontent-ng-c2757603175="" id="coauthor-help" class="form-text">Escolha um nome da lista.</span><!--container--><!--container--><!--container--></div><div _ngcontent-ng-c2757603175="" class="button-field"><button _ngcontent-ng-c2757603175="" type="submit" class="btn btn-primary"><!--container--> Buscar <!--container--></button></div></div></form><div _ngcontent-ng-c2757603175="" aria-live="polite" class="feedback"><!--container--><!--container--></div></section><section _ngcontent-ng-c2757603175="" aria-labelledby="references-title" class="small-world-references mt-4"><h2 _ngcontent-ng-c2757603175="" id="references-title" class="h5 mb-3">Referências</h2><p _ngcontent-ng-c2757603175=""> KARINTHY, Frigyes. <strong _ngcontent-ng-c2757603175="">CHAINS</strong>. In: <em _ngcontent-ng-c2757603175="">Everything is different</em>. Budapeste: Officina, 1929. </p><p _ngcontent-ng-c2757603175="" class="mb-0"> MILGRAM, Stanley. <strong _ngcontent-ng-c2757603175="">The small-world problem</strong>. <em _ngcontent-ng-c2757603175="">Psychology Today</em>, 1967. </p></section></div></main></app-small-world-page><!--container--><!--container--><footer _ngcontent-ng-c4287088047="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c4287088047="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c4287088047="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c4287088047="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c4287088047="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c4287088047="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c4287088047="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c4287088047="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c4287088047="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c4287088047="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c4287088047="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c4287088047="" class="text-muted">BRAPCI | brapci.inf.br | v0.26.10.05</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-5HVS5XOB.js"><link rel="modulepreload" href="chunk-QGZNV3QF.js"><link rel="modulepreload" href="chunk-WJASMFZO.js"><link rel="modulepreload" href="chunk-WY54EBDC.js"><link rel="modulepreload" href="chunk-SJ4BTPG5.js"><link rel="modulepreload" href="chunk-B656RPDE.js"><link rel="modulepreload" href="chunk-4B336FI2.js"><link rel="modulepreload" href="chunk-TV5LKXQJ.js"><link rel="modulepreload" href="chunk-5VDMIUJO.js"><link rel="modulepreload" href="chunk-PFN54DTC.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-DGT7GWYV.js">
<link rel="modulepreload" href="chunk-BU6M5KF3.js">


<script id="ng-state" type="application/json">{"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4175925773":{"b":{"bugs":{"tab":"Bugs reportado","notice":"Seu problema será reportado à equipe. Em breve, você receberá um retorno em seu perfil, na aba Bugs reportado.","loading":"Carregando relatos…","error":"Não foi possível carregar seus relatos.","retry":"Tentar novamente","empty":"Você ainda não reportou problemas.","record":"Registro","problem":"Problema","description":"Descrição","url":"Página acessada","status":"Status","solution":"Retorno da equipe","pending":"Pendente","resolved":"Resolvido","pdfIncorrect":"PDF incorreto","pdfInaccessible":"PDF inacessível","other":"Outro","authorincorrect":"Autor incorreto"},"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar seleção","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos","export":"Exportar","export_format":"Exportar em {{format}}","export_login_required":"Exportação somente para usuários logados.","panel_title":"Painel (Análise)","panel_link":"Ir para o painel","fetch_error":"Erro ao buscar dados da API.","download_error":"Não foi possível obter o link de download.","export_error":"Erro ao exportar os dados da cesta."}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Ver selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","select_all_items":"Selecionar os {{total}} itens","method":"Método de busca","result_limit":"Limite de resultados","methods":{"v3":"Metodo anterior (2024)","v4":"Método atual (2026)","v5":"Método ponderado"},"filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","selectAllPublications":"Selecionar todas as publicações","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"clusters":{"label":"Clusters de autores","overviewTitle":"Mapa global dos clusters","authorsWith":"Autores com","moreThanOnePublication":"mais de uma publicação","biggerPoints":"Pontos maiores indicam maior produção.","summary":"{{groups}} clusters · {{authors}} autores","groupSummary":"{{groups}} grupos · {{authors}} autores","cluster":"Cluster","group":"Grupo","authors":"autores","publications":"publicações","connections":"conexões","zoomControls":"Controles de zoom","zoomOut":"Afastar","zoomIn":"Ampliar","resetZoom":"Restaurar zoom","savePng":"Salvar PNG","source":"Fonte","clickAuthor":"Clique em um autor para abrir seu perfil.","openProfile":"Abrir perfil de","overviewAria":"Mapa de conexões entre clusters de autores","sankeyAria":"Gráfico Sankey dos clusters e seus autores","sankeyTitle":"Clusters de autores","sankeySubtitle":"Comunidades identificadas pela intensidade das conexões de coautoria.","topAuthorsNote":"Exibindo os 70 autores com maior intensidade de conexão.","noRepresentativeAuthors":"Nenhum autor com mais de uma publicação foi encontrado.","noClusterData":"Sem dados suficientes para identificar clusters."},"citationsGranted":{"label":"Citações concedidas"},"variants":{"label":"Variações do nome"},"researcherProfileTitle":"Acessar dados do pesquisador","scholarship":{"label":"Bolsista","modality":"Modalidade / nivel","institution":"Instituicao","period":"Periodo","history":"Historico"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"actions":{"selectAll":"Selecionar tudo"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"avaliation":{"title":"Estratificação das Revistas","menuItem":"Estratificação"},"pq":{"title":"Bolsistas Produtividade PQ do CNPq","menuItem":"Bolsistas PQ do CNPq"},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar Brapci Labs (beta)","tabsLabel":"Áreas do perfil","sessionTab":"Dados da Sessão","monitorTab":"Monitor","monitorDescription":"Acesse as ferramentas de acompanhamento da infraestrutura Brapci.","computers":"Computadores","computersDescription":"Ver computadores ligados e desligados","status":"Status","statusDescription":"Acessar o status dos serviços"},"monitor":{"kicker":"Infraestrutura","title":"Monitor de computadores","description":"Situação atual dos computadores e servidores conectados à Brapci.","refresh":"Atualizar","availableNow":"Disponíveis agora","onlineComputers":"Computadores ligados","loading":"Consultando computadores...","error":"Não foi possível consultar os computadores neste momento.","tryAgain":"Tentar novamente","online":"Ligados","offline":"Desligados","total":"Total","updatedAt":"Atualizado às {{time}}","onlineStatus":"Online","noneOnline":"Nenhum computador está ligado.","showOffline":"Mostrar computadores desligados","offlineStatus":"Offline"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API","databaseStatistics":"Estatísticas da base"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos.","card3Title":"Análise das citações (meia-vida)","card3Text":"Analise as referências citadas e estime a meia-vida da literatura."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET.","card3Title":"Análise de Rede","card3Text":"Explore os indicadores de redes de colaboração entre pesquisadores."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Sessão","title":"Sessões"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citações"},"data":{"title":"Dados","copy":"Copiar","citationSummary":{"title":"Resumo das citações","typology":"Tipologia","sources":"Quantidade de fontes (%)","halfLife":"Meia-vida da literatura","withDoi":"Referências com DOI","general":"Geral","untyped":"Sem tipo","years":"anos","note":"Meia-vida calculada pela mediana da idade das fontes em relação ao ano do artigo.","empty":"Não há fontes disponíveis para calcular o resumo."},"tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referências","citations":"Citações"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"select":"Selecionar","selected":"Selecionado","downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"},"home":{"news":{"kicker":"Novidades","title":"Principais atualizações","loading":"Carregando atualizações...","error":"Não foi possível carregar as atualizações no momento.","empty":"Nenhuma atualização encontrada.","view":"ver"},"statistics":{"kicker":"Indicadores","title":"Estatísticas da base","loading":"Carregando estatísticas...","error":"Não foi possível carregar as estatísticas no momento.","empty":"Nenhuma estatística encontrada.","updatedAt":"Atualizado em {{date}}","items":{"articles":"Total de artigos","books":"Total de livros","bookChapters":"Total de capítulos de livros","proceedings":"Total de trabalhos em eventos","authors":"Total de autores","institutions":"Total de instituições","sources":"Total de fontes","files":"Total de arquivos","indexedEvents":"Eventos indexados","indexedBrazilianJournals":"Revistas brasileiras indexadas","indexedForeignJournals":"Revistas estrangeiras indexadas","historicBrazilianJournals":"Revistas brasileiras históricas"}},"events":{"title":"Eventos da área","loading":"Carregando eventos...","error":"Não foi possível carregar os eventos no momento.","empty":"Nenhum evento encontrado.","openDetails":"Abrir detalhes do evento {{title}}","logoAlt":"Logo do evento {{title}}","logoFallback":"EVENTO","date":"Data","moreDetails":"Mais detalhes"}},"painelAnalysis":{"productionIndicators":"Indicadores de produção","connectionIndicators":"Indicadores de ligação","productionByYear":"Produção por Ano","exportCsv":"Exportar CSV","item":"Item","value":"Valor","noData":"Sem dados nesta seção.","sections":{"authors":"Autores","subjects":"Assuntos","session":"Sessão","sessionSub":"Subsessão","publications":"Publicações","types":"Tipos"},"network":{"title":"Rede de coautoria","author":"Autor","legendTitle":"Legenda dos indicadores","metrics":{"nodes":"Nós","edges":"Arestas","density":"Densidade","modularity":"Modularidade"},"metricDescriptions":{"nodes":"Quantidade de autores representados na rede.","edges":"Quantidade de conexões de coautoria entre os autores.","density":"Proporção entre as conexões existentes e todas as conexões possíveis na rede.","modularity":"Mede a intensidade com que a rede se divide em comunidades de autores mais conectados entre si."},"indicators":{"degree":"Grau","weightedDegree":"Grau ponderado","betweenness":"Intermediação","closeness":"Proximidade","eigenvector":"Autovetor","community":"Comunidade"},"descriptions":{"degree":"Número de autores diferentes com quem o autor publicou.","weightedDegree":"Total de vínculos de coautoria, considerando as publicações repetidas entre autores.","betweenness":"Indica quanto o autor atua como ponte nos caminhos entre outros autores da rede.","closeness":"Mede quão próximo o autor está de todos os demais autores da rede.","eigenvector":"Representa a influência do autor com base na importância de suas conexões.","community":"Identifica o grupo de autores mais conectados entre si ao qual o autor pertence."}}},"adminEdit":{"kicker":"Administração","title":"Editar conteúdo","record":"Registro #{{id}}","back":"Voltar ao registro","unauthorized":"É necessário entrar com uma conta de administrador para editar este registro.","loading":"Carregando registro...","content":"Conteúdo JSON","save":"Salvar alterações","saving":"Salvando...","success":"Alterações salvas com sucesso.","errors":{"load":"Não foi possível carregar o registro.","invalidJson":"O conteúdo informado não é um JSON válido.","save":"Não foi possível salvar as alterações.","upload":"Não foi possível enviar o arquivo.","delete":"Não foi possível excluir o dado."},"mainData":"Dados principais","add":"Adicionar valor","remove":"Remover valor","noValues":"Nenhum valor informado.","groups":{"CONCEPT":"Identificação","GENDER":"Gênero","AFFILIATIO":"Afiliação","DATE":"Datas","ID":"Identificadores","IMAGE":"Imagem"},"fields":{"n_name":"Nome ou valor","n_lang":"Idioma","c_class":"Classe","cc_status":"Status","ID":"ID relacionado"},"properties":{"hasGender":"Gênero","hasAffiliation":"Afiliação institucional","hasBorn":"Data de nascimento","hasDead":"Data de falecimento","hasOpenAlexID":"OpenAlex ID","hasGoogleScholar":"Google Scholar","hasISNI":"ISNI","hasEmail":"E-mail","hasOrcID":"ORCID","hasLattes":"Currículo Lattes","hasExitID":"Identificador externo","hasLinkedin":"LinkedIn","hasPhoto":"Fotografia"},"unnamed":"Sem nome","edit":"Editar","delete":"Excluir","modalTitle":"Editor de dado RDF","addTitle":"Adicionar dado","editTitle":"Modificar conteúdo","close":"Fechar","selectImage":"Selecione uma imagem","selectFile":"Selecione um arquivo","currentFile":"Arquivo atual","cancel":"Cancelar","confirm":"Confirmar submissão","uploading":"Enviando...","deleteTitle":"Excluir dado","deleteConfirm":"Confirma a exclusão de {{name}}?","deleting":"Excluindo..."},"eventView":{"searchTitle":"Buscar trabalhos deste evento","searchPlaceholder":"Digite título, autor, resumo ou palavra-chave","tabs":{"authors":"Autores","ariaLabel":"Abas de conteúdo do evento","json":"JSON","search":"Busca de trabalhos","summary":"Resumo","issues":"Edições"}},"journalView":{"title":"Revista","tabsLabel":"Abas de conteúdo da revista","search":"Busca de trabalhos","searchTitle":"Buscar trabalhos desta revista","searchPlaceholder":"Digite título, autor, resumo ou palavra-chave","summary":"Resumo","authors":"Autores","issues":"Fascículos","location":"Localização","theme":"Temas","strata":"Estratos","json":"JSON","themesTitle":"Temas da revista","emptyThemes":"Sem temas disponíveis.","emptyIssues":"Sem fascículos disponíveis.","city":"Cidade","name":"Nome","latitude":"Latitude","longitude":"Longitude","altitude":"Altitude","emptyLocation":"Sem localização disponível."},"timeCloud":{"title":"Evolução temporal dos temas","period":"Termos publicados entre {{start}} e {{end}}","years":"{{count}} anos","year":"{{count}} ano","start":"Ano inicial","end":"Ano final","controls":"Controles da animação temporal","play":"Reproduzir","pause":"Pausar","duration":"Duração por ano","range":"Intervalo de anos","topics":"Temas no período selecionado","empty":"Sem temas no período selecionado"},"authorNameActions":{"copy":"Copiar nome","copied":"Nome copiado.","failed":"Não foi possível copiar o nome."}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{"t":{"3":"t8"},"c":{"3":[{"i":"t8","r":1,"t":{"1":"t9","2":"t10"},"c":{"1":[],"2":[{"i":"t10","r":1}]}},{"i":"t8","r":1,"t":{"1":"t9","2":"t10"},"c":{"1":[{"i":"t9","r":1}],"2":[]}}]}},{"t":{"23":"t35","24":"t36","25":"t37","32":"t38","33":"t39","34":"t40","37":"t41","38":"t42","40":"t43","41":"t44"},"c":{"23":[],"24":[],"25":[],"32":[],"33":[],"34":[],"37":[],"38":[{"i":"t42","r":1}],"40":[],"41":[]}},{"t":{"42":"t0","104":"t1","105":"t2","111":"t3","112":"t4","113":"t5","115":"t6","122":"t7"},"c":{"42":[],"104":[],"105":[],"111":[],"112":[{"i":"t4","r":1}],"113":[],"114":[{"i":"c2757603175","r":1}],"115":[],"122":[]}}]}</script></body></html>`;