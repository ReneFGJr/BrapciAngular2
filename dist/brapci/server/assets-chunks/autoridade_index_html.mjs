export default `<!DOCTYPE html><html lang="pt-BR" style="--a11y-font-scale: 1;"><head>
  <meta charset="utf-8">
  <title>Brapci - Portal de Informacao Cientifica</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO.">
  <meta property="og:title" content="Brapci - Portal de Informacao Cientifica">
  <meta property="og:description" content="Portal da Brapci com autenticacao, busca na API e recursos semanticos para SEO.">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
  <script src="env.js"></script>
<link rel="stylesheet" href="styles.css"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&amp;family=Bitter:wght@500;700&amp;family=Raleway:wght@400;500;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" as="style"><style ng-app-id="ng">

.supersmall[_ngcontent-ng-c3802201851], 
a.supersmall[_ngcontent-ng-c3802201851], 
a.link.supersmall[_ngcontent-ng-c3802201851] {
  font-size: 0.75rem !important;
  text-decoration: none !important;
  line-height: 85%;
}
a.link.supersmall[_ngcontent-ng-c3802201851]:hover, 
a.supersmall[_ngcontent-ng-c3802201851]:hover, 
.supersmall[_ngcontent-ng-c3802201851]:hover {
  text-decoration: underline !important;
}
[_nghost-ng-c3802201851] {
  color: var(--theme-ink);
  display: flex;
  flex-direction: column;
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif;
  min-height: 100dvh;
  background: var(--theme-bg);
}
a.link.supersmall[_ngcontent-ng-c3802201851] {
  font-size: 0.75rem;
  color: green;
  text-decoration: none;
}
.navbar[_ngcontent-ng-c3802201851] {
  background-color: #483d8b !important;
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar[_ngcontent-ng-c3802201851]   *[_ngcontent-ng-c3802201851] {
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar-brand[_ngcontent-ng-c3802201851], 
.nav-item[_ngcontent-ng-c3802201851], 
.btn-link[_ngcontent-ng-c3802201851], 
.dropdown-item[_ngcontent-ng-c3802201851] {
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif !important;
  font-size: 1.1rem;
}
.nav-link[_ngcontent-ng-c3802201851] {
  font-family:
    "Barlow Condensed",
    "Times New Roman",
    sans-serif !important;
  font-size: 1.2rem;
}
.hero[_ngcontent-ng-c3802201851] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c3802201851] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.eyebrow[_ngcontent-ng-c3802201851] {
  font-size: 0.78rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c3802201851] {
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0.4rem 0;
}
.navbar-logo[_ngcontent-ng-c3802201851] {
  display: block;
  height: auto;
  max-height: 40px;
  width: clamp(120px, 16vw, 170px);
}
.nav-login-link[_ngcontent-ng-c3802201851], 
.nav-user-chip[_ngcontent-ng-c3802201851] {
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
.nav-login-link[_ngcontent-ng-c3802201851]:hover, 
.nav-login-link[_ngcontent-ng-c3802201851]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.nav-login-link[_ngcontent-ng-c3802201851]   svg[_ngcontent-ng-c3802201851], 
.nav-user-chip[_ngcontent-ng-c3802201851]   svg[_ngcontent-ng-c3802201851] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.nav-user-chip[_ngcontent-ng-c3802201851] {
  background: rgba(255, 255, 255, 0.12);
}
.docs-dropdown[_ngcontent-ng-c3802201851]   .btn-link[_ngcontent-ng-c3802201851] {
  border: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
}
.docs-dropdown[_ngcontent-ng-c3802201851]   .btn-link[_ngcontent-ng-c3802201851]:hover, 
.docs-dropdown[_ngcontent-ng-c3802201851]   .btn-link[_ngcontent-ng-c3802201851]:focus-visible, 
.docs-dropdown.show[_ngcontent-ng-c3802201851]   .btn-link[_ngcontent-ng-c3802201851] {
  color: #fff;
}
.language-picker[_ngcontent-ng-c3802201851] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.language-flag-btn[_ngcontent-ng-c3802201851] {
  background: transparent;
  border: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
}
.language-flag[_ngcontent-ng-c3802201851] {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.language-select[_ngcontent-ng-c3802201851] {
  font-size: 0.92rem;
  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;
  line-height: 1.1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
}
.language-select[_ngcontent-ng-c3802201851]   option[_ngcontent-ng-c3802201851] {
  color: #000;
  background-color: #fff;
}
.docs-dropdown[_ngcontent-ng-c3802201851]   .dropdown-menu[_ngcontent-ng-c3802201851] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  min-width: 13rem;
}
.docs-dropdown[_ngcontent-ng-c3802201851]   .dropdown-item[_ngcontent-ng-c3802201851] {
  color: var(--theme-ink);
}
.docs-dropdown[_ngcontent-ng-c3802201851]   .dropdown-item[_ngcontent-ng-c3802201851]:hover, 
.docs-dropdown[_ngcontent-ng-c3802201851]   .dropdown-item[_ngcontent-ng-c3802201851]:focus-visible {
  background: var(--theme-sand);
  color: var(--theme-ink);
}
.theme-switch[_ngcontent-ng-c3802201851]   .form-check-input[_ngcontent-ng-c3802201851] {
  cursor: pointer;
}
.accessibility-launcher[_ngcontent-ng-c3802201851] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.accessibility-toggle[_ngcontent-ng-c3802201851] {
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
.accessibility-toggle[_ngcontent-ng-c3802201851]:hover, 
.accessibility-toggle[_ngcontent-ng-c3802201851]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-1px);
}
.accessibility-toggle[_ngcontent-ng-c3802201851]   svg[_ngcontent-ng-c3802201851] {
  fill: currentColor;
  height: 1.4rem;
  width: 1.4rem;
}
@media (max-width: 991.98px) {
  .nav-login-link[_ngcontent-ng-c3802201851], 
   .nav-user-chip[_ngcontent-ng-c3802201851] {
    margin: 0.45rem 0;
  }
  .docs-dropdown[_ngcontent-ng-c3802201851]   .dropdown-menu[_ngcontent-ng-c3802201851] {
    position: static;
  }
}
.layout[_ngcontent-ng-c3802201851] {
  flex: 1;
}
.card[_ngcontent-ng-c3802201851] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.footer[_ngcontent-ng-c3802201851] {
  background: var(--theme-footer);
}
.footer-social[_ngcontent-ng-c3802201851] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-link[_ngcontent-ng-c3802201851] {
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
.footer-social-link[_ngcontent-ng-c3802201851]   svg[_ngcontent-ng-c3802201851] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.footer-social-link[_ngcontent-ng-c3802201851]:hover, 
.footer-social-link[_ngcontent-ng-c3802201851]:focus-visible {
  background-color: var(--theme-sand);
  border-color: var(--theme-hint);
  color: var(--theme-ink);
}
.footer-meta[_ngcontent-ng-c3802201851] {
  display: grid;
  gap: 0.1rem;
}
.footer-session[_ngcontent-ng-c3802201851] {
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}
.full[_ngcontent-ng-c3802201851] {
  width: 100%;
}
.small[_ngcontent-ng-c3802201851] {
  font-size: 0.75rem;
}
/*# sourceMappingURL=/app.css.map */</style><meta name="keywords" content="Brapci, Ciencia da Informacao, SEO, Angular 20, API"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json" id="brapci-jsonld">{"@context":"https://schema.org","@type":"WebSite","name":"Brapci","inLanguage":"pt-br","url":"https://cip.brapci.inf.br","potentialAction":{"@type":"SearchAction","target":"https://cip.brapci.inf.br/api?q={search_term_string}","query-input":"required name=search_term_string"}}</script><style ng-app-id="ng">

.autoridade-wrap[_ngcontent-ng-c3242192147] {
  color: var(--theme-ink);
}
.autoridade-card[_ngcontent-ng-c3242192147] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.autoridade-banner[_ngcontent-ng-c3242192147] {
  border: 1px solid var(--theme-line);
  border-radius: 0.75rem;
  display: block;
  max-height: 240px;
  object-fit: cover;
  width: 100%;
}
.autoridade-form[_ngcontent-ng-c3242192147] {
  display: grid;
  gap: 0.55rem;
}
.autoridade-results[_ngcontent-ng-c3242192147] {
  display: grid;
  gap: 0.55rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.autoridade-section-title[_ngcontent-ng-c3242192147] {
  color: var(--theme-hint);
  font-size: 1rem;
  font-weight: 700;
}
.autoridade-result-item[_ngcontent-ng-c3242192147] {
  margin: 0;
}
.autoridade-link[_ngcontent-ng-c3242192147] {
  align-items: center;
  background: var(--theme-sand);
  border: 1px solid var(--theme-line);
  border-radius: 0.6rem;
  color: var(--theme-ink);
  display: flex;
  gap: 0.75rem;
  min-height: 4.4rem;
  padding: 0.5rem 0.65rem;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.autoridade-link[_ngcontent-ng-c3242192147]:hover, 
.autoridade-link[_ngcontent-ng-c3242192147]:focus-visible {
  border-color: var(--theme-hint);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.09);
  color: var(--theme-hint);
  text-decoration: none;
  transform: translateY(-1px);
}
.autoridade-picture[_ngcontent-ng-c3242192147] {
  border: 1px solid var(--theme-line);
  border-radius: 0.5rem;
  flex: 0 0 3.1rem;
  height: 3.1rem;
  object-fit: cover;
  width: 3.1rem;
}
.autoridade-picture--placeholder[_ngcontent-ng-c3242192147] {
  align-items: center;
  background: color-mix(in oklab, var(--theme-sand) 60%, var(--theme-hint) 40%);
  color: var(--theme-card-bg);
  display: inline-flex;
  font-size: 1.05rem;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
}
.autoridade-content[_ngcontent-ng-c3242192147] {
  display: grid;
  gap: 0.18rem;
  min-width: 0;
}
.autoridade-term[_ngcontent-ng-c3242192147] {
  color: inherit;
  display: block;
  overflow-wrap: anywhere;
}
.autoridade-id[_ngcontent-ng-c3242192147] {
  color: var(--theme-hint);
  display: block;
  font-size: 0.78rem;
}
.autoridade-error[_ngcontent-ng-c3242192147] {
  color: var(--theme-error);
}
/*# sourceMappingURL=/autoridade.page.css.map */</style><style ng-app-id="ng">

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
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend"],["blur"]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c3802201851="" ngh="2" ng-server-context="ssg"><nav _ngcontent-ng-c3802201851="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c3802201851="" class="container"><a _ngcontent-ng-c3802201851="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c3802201851="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c3802201851="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c3802201851="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c3802201851="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c3802201851="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c3802201851="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c3802201851="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c3802201851="" class="dropdown-menu"><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas/avaliation" class="dropdown-item" href="/revistas/avaliation" jsaction="click:;">Estratificação</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c3802201851="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c3802201851="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c3802201851="" class="dropdown-menu"><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/pq" class="dropdown-item" href="/pq" jsaction="click:;">Bolsistas PQ do CNPq</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/statistics" class="dropdown-item" href="/statistics" jsaction="click:;">Estatísticas da base</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indices de Assuntos</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indices de Autores</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c3802201851="" class="d-flex align-items-center gap-2"><div _ngcontent-ng-c3802201851="" class="accessibility-launcher"><button _ngcontent-ng-c3802201851="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c3802201851="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c3802201851="" class="language-picker"><button _ngcontent-ng-c3802201851="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c3802201851="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c3802201851="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c3802201851="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c3802201851=""></router-outlet><app-autoridade-page _nghost-ng-c3242192147="" ngh="1"><section _ngcontent-ng-c3242192147="" aria-labelledby="autoridade-title" class="autoridade-wrap py-4"><div _ngcontent-ng-c3242192147="" class="container"><app-breadcrumbs _ngcontent-ng-c3242192147="" _nghost-ng-c3912997418="" ngh="0"><nav _ngcontent-ng-c3912997418="" aria-label="Breadcrumb" class="bc-wrap"><ol _ngcontent-ng-c3912997418="" class="breadcrumb mb-1"><li _ngcontent-ng-c3912997418="" class="breadcrumb-item"><!--container--><a _ngcontent-ng-c3912997418="" href="/" jsaction="click:;">Inicio</a><!--container--></li><li _ngcontent-ng-c3912997418="" class="breadcrumb-item active" aria-current="page"><span _ngcontent-ng-c3912997418="">Autoridades</span><!--container--><!--container--></li><!--container--></ol></nav></app-breadcrumbs><div _ngcontent-ng-c3242192147="" class="autoridade-card"><img _ngcontent-ng-c3242192147="" src="assets/img/banner_authority.png" class="autoridade-banner" alt="Controle de autoridade"><h1 _ngcontent-ng-c3242192147="" id="autoridade-title" class="h2 mt-3 mb-3 p-3">Controle de Autoridade</h1><form _ngcontent-ng-c3242192147="" novalidate="" class="autoridade-form mb-4 ng-untouched ng-pristine ng-valid" jsaction="submit:;"><label _ngcontent-ng-c3242192147="" for="term" class="form-label ps-3">Buscar termo</label><div _ngcontent-ng-c3242192147="" class="input-group ps-3 pe-3"><input _ngcontent-ng-c3242192147="" id="term" name="term" class="form-control ng-untouched ng-pristine ng-valid" placeholder="Informe o nome do autor" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"><button _ngcontent-ng-c3242192147="" type="submit" class="btn btn-primary">Buscar</button></div></form><!--container--><!--container--><!--container--><p _ngcontent-ng-c3242192147="" class="mb-0 ps-3 p-3">Nenhum resultado.</p><!--container--><!--container--></div></div></section></app-autoridade-page><!--container--><footer _ngcontent-ng-c3802201851="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c3802201851="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c3802201851="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c3802201851="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c3802201851="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c3802201851="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c3802201851="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c3802201851="" class="text-muted">BRAPCI | brapci.inf.br</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-JRX6NWBE.js"><link rel="modulepreload" href="chunk-Y3JQWDW7.js"><link rel="modulepreload" href="chunk-FC3OORFJ.js"><link rel="modulepreload" href="chunk-IYQHJWZ2.js"><link rel="modulepreload" href="chunk-IZYDDLZH.js"><link rel="modulepreload" href="chunk-3F47I5MF.js"><link rel="modulepreload" href="chunk-Y3FCEOIS.js"><link rel="modulepreload" href="chunk-UKK5MWW6.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-X6DSZAES.js">
<link rel="modulepreload" href="chunk-RFP7KIPN.js">
<link rel="modulepreload" href="chunk-VVA3KYIX.js">


<script id="ng-state" type="application/json">{"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4175925773":{"b":{"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar seleção","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos","export":"Exportar","export_format":"Exportar em {{format}}","panel_title":"Painel (Análise)","panel_link":"Ir para o painel","fetch_error":"Erro ao buscar dados da API.","download_error":"Não foi possível obter o link de download.","export_error":"Erro ao exportar os dados da cesta."}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"citationsGranted":{"label":"Citacoes concedidas"},"variants":{"label":"Variações do nome"},"researcherProfileTitle":"Acessar dados do pesquisador","scholarship":{"label":"Bolsista","modality":"Modalidade / nivel","institution":"Instituicao","period":"Periodo","history":"Historico"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"actions":{"selectAll":"Selecionar tudo"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"avaliation":{"title":"Estratificação das Revistas","menuItem":"Estratificação"},"pq":{"title":"Bolsistas Produtividade PQ do CNPq","menuItem":"Bolsistas PQ do CNPq"},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar perfil externo"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API","databaseStatistics":"Estatísticas da base"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET.","card3Title":"Análise de Rede","card3Text":"Explore os indicadores de redes de colaboração entre pesquisadores."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Secao","title":"Secoes"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citacoes"},"data":{"title":"Dados","copy":"Copiar","citationSummary":{"title":"Resumo das citações","typology":"Tipologia","sources":"Quantidade de fontes (%)","halfLife":"Meia-vida da literatura","withDoi":"Referências com DOI","general":"Geral","untyped":"Sem tipo","years":"anos","note":"Meia-vida calculada pela mediana da idade das fontes em relação ao ano do artigo.","empty":"Não há fontes disponíveis para calcular o resumo."},"tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referencias","citations":"Citacoes"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"select":"Selecionar","selected":"Selecionado","downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"},"home":{"news":{"kicker":"Novidades","title":"Principais atualizações","loading":"Carregando atualizações...","error":"Não foi possível carregar as atualizações no momento.","empty":"Nenhuma atualização encontrada.","view":"ver"},"statistics":{"kicker":"Indicadores","title":"Estatísticas da base","loading":"Carregando estatísticas...","error":"Não foi possível carregar as estatísticas no momento.","empty":"Nenhuma estatística encontrada.","updatedAt":"Atualizado em {{date}}","items":{"articles":"Total de artigos","books":"Total de livros","bookChapters":"Total de capítulos de livros","proceedings":"Total de trabalhos em eventos","authors":"Total de autores","institutions":"Total de instituições","sources":"Total de fontes","files":"Total de arquivos","indexedEvents":"Eventos indexados","indexedBrazilianJournals":"Revistas brasileiras indexadas","indexedForeignJournals":"Revistas estrangeiras indexadas","historicBrazilianJournals":"Revistas brasileiras históricas"}},"events":{"title":"Eventos da área","loading":"Carregando eventos...","error":"Não foi possível carregar os eventos no momento.","empty":"Nenhum evento encontrado.","openDetails":"Abrir detalhes do evento {{title}}","logoAlt":"Logo do evento {{title}}","logoFallback":"EVENTO","date":"Data","moreDetails":"Mais detalhes"}},"painelAnalysis":{"productionIndicators":"Indicadores de produção","connectionIndicators":"Indicadores de ligação","productionByYear":"Produção por Ano","exportCsv":"Exportar CSV","item":"Item","value":"Valor","noData":"Sem dados nesta seção.","sections":{"authors":"Autores","subjects":"Assuntos","session":"Sessão","sessionSub":"Subsessão","publications":"Publicações","types":"Tipos"},"network":{"title":"Rede de coautoria","author":"Autor","legendTitle":"Legenda dos indicadores","metrics":{"nodes":"Nós","edges":"Arestas","density":"Densidade","modularity":"Modularidade"},"metricDescriptions":{"nodes":"Quantidade de autores representados na rede.","edges":"Quantidade de conexões de coautoria entre os autores.","density":"Proporção entre as conexões existentes e todas as conexões possíveis na rede.","modularity":"Mede a intensidade com que a rede se divide em comunidades de autores mais conectados entre si."},"indicators":{"degree":"Grau","weightedDegree":"Grau ponderado","betweenness":"Intermediação","closeness":"Proximidade","eigenvector":"Autovetor","community":"Comunidade"},"descriptions":{"degree":"Número de autores diferentes com quem o autor publicou.","weightedDegree":"Total de vínculos de coautoria, considerando as publicações repetidas entre autores.","betweenness":"Indica quanto o autor atua como ponte nos caminhos entre outros autores da rede.","closeness":"Mede quão próximo o autor está de todos os demais autores da rede.","eigenvector":"Representa a influência do autor com base na importância de suas conexões.","community":"Identifica o grupo de autores mais conectados entre si ao qual o autor pertence."}}},"adminEdit":{"kicker":"Administração","title":"Editar conteúdo","record":"Registro #{{id}}","back":"Voltar ao registro","unauthorized":"É necessário entrar com uma conta de administrador para editar este registro.","loading":"Carregando registro...","content":"Conteúdo JSON","save":"Salvar alterações","saving":"Salvando...","success":"Alterações salvas com sucesso.","errors":{"load":"Não foi possível carregar o registro.","invalidJson":"O conteúdo informado não é um JSON válido.","save":"Não foi possível salvar as alterações.","upload":"Não foi possível enviar o arquivo.","delete":"Não foi possível excluir o dado."},"mainData":"Dados principais","add":"Adicionar valor","remove":"Remover valor","noValues":"Nenhum valor informado.","groups":{"CONCEPT":"Identificação","GENDER":"Gênero","AFFILIATIO":"Afiliação","DATE":"Datas","ID":"Identificadores","IMAGE":"Imagem"},"fields":{"n_name":"Nome ou valor","n_lang":"Idioma","c_class":"Classe","cc_status":"Status","ID":"ID relacionado"},"properties":{"hasGender":"Gênero","hasAffiliation":"Afiliação institucional","hasBorn":"Data de nascimento","hasDead":"Data de falecimento","hasOpenAlexID":"OpenAlex ID","hasGoogleScholar":"Google Scholar","hasISNI":"ISNI","hasEmail":"E-mail","hasOrcID":"ORCID","hasLattes":"Currículo Lattes","hasExitID":"Identificador externo","hasLinkedin":"LinkedIn","hasPhoto":"Fotografia"},"unnamed":"Sem nome","edit":"Editar","delete":"Excluir","modalTitle":"Editor de dado RDF","addTitle":"Adicionar dado","editTitle":"Modificar conteúdo","close":"Fechar","selectImage":"Selecione uma imagem","selectFile":"Selecione um arquivo","currentFile":"Arquivo atual","cancel":"Cancelar","confirm":"Confirmar submissão","uploading":"Enviando...","deleteTitle":"Excluir dado","deleteConfirm":"Confirma a exclusão de {{name}}?","deleting":"Excluindo..."}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{"t":{"3":"t6"},"c":{"3":[{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[],"2":[{"i":"t8","r":1}]}},{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[{"i":"t7","r":1}],"2":[]}}]}},{"t":{"19":"t9","20":"t10","21":"t11"},"c":{"19":[],"20":[],"21":[{"i":"t11","r":3,"t":{"0":"t12","1":"t13"},"c":{"0":[],"1":[{"i":"t13","r":1}]}}]}},{"t":{"42":"t0","102":"t1","103":"t2","109":"t3","110":"t4","111":"t5","119":"t14"},"c":{"42":[],"102":[],"103":[],"109":[],"110":[{"i":"t4","r":1}],"111":[],"112":[{"i":"c3242192147","r":1}],"119":[]}}]}</script></body></html>`;