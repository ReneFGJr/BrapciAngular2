export default `<!DOCTYPE html><html lang="pt-BR" style="--a11y-font-scale: 1;"><head>
  <meta charset="utf-8">
  <title>Pensadores | Brapci</title>
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

.supersmall[_ngcontent-ng-c1606430066], 
a.supersmall[_ngcontent-ng-c1606430066], 
a.link.supersmall[_ngcontent-ng-c1606430066] {
  font-size: 0.75rem !important;
  text-decoration: none !important;
  line-height: 85%;
}
a.link.supersmall[_ngcontent-ng-c1606430066]:hover, 
a.supersmall[_ngcontent-ng-c1606430066]:hover, 
.supersmall[_ngcontent-ng-c1606430066]:hover {
  text-decoration: underline !important;
}
[_nghost-ng-c1606430066] {
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
[_nghost-ng-c1606430066]::before {
  background: url(/assets/background/brapci_mapa_mundi.png) top center/contain no-repeat;
  content: "";
  inset: 10% 0 0;
  opacity: 0.15;
  pointer-events: none;
  position: fixed;
  z-index: -1;
}
@media (max-width: 575.98px) {
  [_nghost-ng-c1606430066]::before {
    opacity: 0.3;
  }
}
a.link.supersmall[_ngcontent-ng-c1606430066] {
  font-size: 0.75rem;
  color: green;
  text-decoration: none;
}
.navbar[_ngcontent-ng-c1606430066] {
  background-color: #483d8b !important;
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar[_ngcontent-ng-c1606430066]   *[_ngcontent-ng-c1606430066] {
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar-brand[_ngcontent-ng-c1606430066], 
.nav-item[_ngcontent-ng-c1606430066], 
.btn-link[_ngcontent-ng-c1606430066], 
.dropdown-item[_ngcontent-ng-c1606430066] {
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif !important;
  font-size: 1.1rem;
}
.nav-link[_ngcontent-ng-c1606430066] {
  font-family:
    "Barlow Condensed",
    "Times New Roman",
    sans-serif !important;
  font-size: 1.2rem;
}
.hero[_ngcontent-ng-c1606430066] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c1606430066] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.eyebrow[_ngcontent-ng-c1606430066] {
  font-size: 0.78rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c1606430066] {
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0.4rem 0;
}
.navbar-logo[_ngcontent-ng-c1606430066] {
  display: block;
  height: auto;
  max-height: 40px;
  width: clamp(120px, 16vw, 170px);
}
.nav-login-link[_ngcontent-ng-c1606430066], 
.nav-user-chip[_ngcontent-ng-c1606430066] {
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
.nav-login-link[_ngcontent-ng-c1606430066]:hover, 
.nav-login-link[_ngcontent-ng-c1606430066]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.nav-login-link[_ngcontent-ng-c1606430066]   svg[_ngcontent-ng-c1606430066], 
.nav-user-chip[_ngcontent-ng-c1606430066]   svg[_ngcontent-ng-c1606430066] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.nav-user-chip[_ngcontent-ng-c1606430066] {
  background: rgba(255, 255, 255, 0.12);
}
.docs-dropdown[_ngcontent-ng-c1606430066]   .btn-link[_ngcontent-ng-c1606430066] {
  border: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
}
.docs-dropdown[_ngcontent-ng-c1606430066]   .btn-link[_ngcontent-ng-c1606430066]:hover, 
.docs-dropdown[_ngcontent-ng-c1606430066]   .btn-link[_ngcontent-ng-c1606430066]:focus-visible, 
.docs-dropdown.show[_ngcontent-ng-c1606430066]   .btn-link[_ngcontent-ng-c1606430066] {
  color: #fff;
}
.language-picker[_ngcontent-ng-c1606430066] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.language-flag-btn[_ngcontent-ng-c1606430066] {
  background: transparent;
  border: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
}
.language-flag[_ngcontent-ng-c1606430066] {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.language-select[_ngcontent-ng-c1606430066] {
  font-size: 0.92rem;
  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;
  line-height: 1.1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
}
.language-select[_ngcontent-ng-c1606430066]   option[_ngcontent-ng-c1606430066] {
  color: #000;
  background-color: #fff;
}
.docs-dropdown[_ngcontent-ng-c1606430066]   .dropdown-menu[_ngcontent-ng-c1606430066] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  min-width: 13rem;
}
.docs-dropdown[_ngcontent-ng-c1606430066]   .dropdown-item[_ngcontent-ng-c1606430066] {
  color: var(--theme-ink);
}
.docs-dropdown[_ngcontent-ng-c1606430066]   .dropdown-item[_ngcontent-ng-c1606430066]:hover, 
.docs-dropdown[_ngcontent-ng-c1606430066]   .dropdown-item[_ngcontent-ng-c1606430066]:focus-visible {
  background: var(--theme-sand);
  color: var(--theme-ink);
}
.theme-switch[_ngcontent-ng-c1606430066]   .form-check-input[_ngcontent-ng-c1606430066] {
  cursor: pointer;
}
.bug-toggle[_ngcontent-ng-c1606430066] {
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
.bug-toggle[_ngcontent-ng-c1606430066]:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.accessibility-launcher[_ngcontent-ng-c1606430066] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.accessibility-toggle[_ngcontent-ng-c1606430066] {
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
.accessibility-toggle[_ngcontent-ng-c1606430066]:hover, 
.accessibility-toggle[_ngcontent-ng-c1606430066]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-1px);
}
.accessibility-toggle[_ngcontent-ng-c1606430066]   svg[_ngcontent-ng-c1606430066] {
  fill: currentColor;
  height: 1.4rem;
  width: 1.4rem;
}
@media (max-width: 991.98px) {
  .nav-login-link[_ngcontent-ng-c1606430066], 
   .nav-user-chip[_ngcontent-ng-c1606430066] {
    margin: 0.45rem 0;
  }
  .docs-dropdown[_ngcontent-ng-c1606430066]   .dropdown-menu[_ngcontent-ng-c1606430066] {
    position: static;
  }
}
.layout[_ngcontent-ng-c1606430066] {
  flex: 1;
}
.card[_ngcontent-ng-c1606430066] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.footer[_ngcontent-ng-c1606430066] {
  background: var(--theme-footer);
}
.footer-social[_ngcontent-ng-c1606430066] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-link[_ngcontent-ng-c1606430066] {
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
.footer-social-link[_ngcontent-ng-c1606430066]   svg[_ngcontent-ng-c1606430066] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.footer-social-link[_ngcontent-ng-c1606430066]:hover, 
.footer-social-link[_ngcontent-ng-c1606430066]:focus-visible {
  background-color: var(--theme-sand);
  border-color: var(--theme-hint);
  color: var(--theme-ink);
}
.footer-meta[_ngcontent-ng-c1606430066] {
  display: grid;
  gap: 0.1rem;
}
.footer-session[_ngcontent-ng-c1606430066] {
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}
.full[_ngcontent-ng-c1606430066] {
  width: 100%;
}
.small[_ngcontent-ng-c1606430066] {
  font-size: 0.75rem;
}
/*# sourceMappingURL=/app.css.map */</style><meta name="keywords" content="Brapci, Ciencia da Informacao, SEO, Angular 20, API"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json" id="brapci-jsonld">{"@context":"https://schema.org","@type":"WebSite","name":"Brapci","inLanguage":"pt-br","url":"https://cip.brapci.inf.br","potentialAction":{"@type":"SearchAction","target":"https://cip.brapci.inf.br/api?q={search_term_string}","query-input":"required name=search_term_string"}}</script><style ng-app-id="ng">

[_nghost-ng-c2251933016] {
  display: block;
}
.pensadores-wrap[_ngcontent-ng-c2251933016] {
  min-height: calc(100vh - 70px);
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #eef3f7 100%);
}
.page-heading[_ngcontent-ng-c2251933016] {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
}
.eyebrow[_ngcontent-ng-c2251933016] {
  color: #31726a;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c2251933016] {
  color: #17252a;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
}
.subtitle[_ngcontent-ng-c2251933016] {
  color: #65747b;
}
.total[_ngcontent-ng-c2251933016] {
  min-width: 2.5rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: #dceeea;
  color: #245c56;
  font-weight: 700;
  text-align: center;
}
.search-box[_ngcontent-ng-c2251933016] {
  display: flex;
  align-items: center;
  width: min(100%, 42rem);
  min-height: 3rem;
  padding: 0 0.9rem;
  border: 1px solid #ccd8dc;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.06);
  color: #687a80;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}
.search-box[_ngcontent-ng-c2251933016]:focus-within {
  border-color: #438a81;
  box-shadow: 0 0 0 0.2rem rgba(67, 138, 129, 0.16);
}
.search-box[_ngcontent-ng-c2251933016]   input[_ngcontent-ng-c2251933016] {
  flex: 1;
  min-width: 0;
  padding: 0.7rem;
  border: 0;
  outline: 0;
  background: transparent;
  color: #1e3035;
}
.search-box[_ngcontent-ng-c2251933016]   input[_ngcontent-ng-c2251933016]::placeholder {
  color: #849298;
}
.search-box[_ngcontent-ng-c2251933016]   button[_ngcontent-ng-c2251933016] {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #64757b;
}
.search-box[_ngcontent-ng-c2251933016]   button[_ngcontent-ng-c2251933016]:hover {
  background: #e7efee;
  color: #245c56;
}
.pensadores-grid[_ngcontent-ng-c2251933016] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.pensador-card[_ngcontent-ng-c2251933016] {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #dde5e8;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 3px 12px rgba(26, 49, 55, 0.07);
  transition: box-shadow 180ms ease, transform 180ms ease;
}
.pensador-card[_ngcontent-ng-c2251933016]:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(26, 49, 55, 0.14);
}
.pensador-foto[_ngcontent-ng-c2251933016], 
.pensador-placeholder[_ngcontent-ng-c2251933016] {
  display: block;
  width: 100%;
  aspect-ratio: 4/5;
  background: #e8eeef;
}
.profile-media[_ngcontent-ng-c2251933016] {
  display: block;
  color: inherit;
  text-decoration: none;
}
.pensador-foto[_ngcontent-ng-c2251933016] {
  object-fit: cover;
}
.pensador-placeholder[_ngcontent-ng-c2251933016] {
  display: grid;
  place-items: center;
  color: #5c7777;
  font-family: Georgia, serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  background:
    linear-gradient(
      145deg,
      #e8f1ef,
      #d5e4e1);
}
.card-body[_ngcontent-ng-c2251933016] {
  padding: 0.85rem;
}
.card-body[_ngcontent-ng-c2251933016]   h2[_ngcontent-ng-c2251933016] {
  margin: 0;
  color: #1e3035;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.card-body[_ngcontent-ng-c2251933016]   h2[_ngcontent-ng-c2251933016]   a[_ngcontent-ng-c2251933016] {
  color: inherit;
  text-decoration: none;
}
.card-body[_ngcontent-ng-c2251933016]   h2[_ngcontent-ng-c2251933016]   a[_ngcontent-ng-c2251933016]:hover {
  color: #236c64;
  text-decoration: underline;
}
.citation[_ngcontent-ng-c2251933016] {
  margin-top: 0.35rem;
  color: #718087;
  font-size: 0.8rem;
  line-height: 1.35;
}
.links[_ngcontent-ng-c2251933016] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.7rem;
  margin-top: 0.75rem;
  font-size: 0.78rem;
}
.links[_ngcontent-ng-c2251933016]   a[_ngcontent-ng-c2251933016] {
  color: #236c64;
  font-weight: 600;
  text-decoration: none;
}
.links[_ngcontent-ng-c2251933016]   a[_ngcontent-ng-c2251933016]:hover {
  text-decoration: underline;
}
.profile-link[_ngcontent-ng-c2251933016] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.8rem;
  color: #236c64;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
}
.profile-link[_ngcontent-ng-c2251933016]:hover {
  text-decoration: underline;
}
.state[_ngcontent-ng-c2251933016] {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-height: 12rem;
  color: #65747b;
}
@media (min-width: 576px) {
  .pensadores-grid[_ngcontent-ng-c2251933016] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 992px) {
  .pensadores-grid[_ngcontent-ng-c2251933016] {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .pensadores-wrap[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .pensadores-wrap[_ngcontent-ng-c2251933016] {
  background:
    linear-gradient(
      180deg,
      #181d1f 0%,
      #20282b 100%);
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   h1[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   h1[_ngcontent-ng-c2251933016], 
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .card-body[_ngcontent-ng-c2251933016]   h2[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .card-body[_ngcontent-ng-c2251933016]   h2[_ngcontent-ng-c2251933016] {
  color: #edf4f3;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .subtitle[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .subtitle[_ngcontent-ng-c2251933016], 
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .citation[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .citation[_ngcontent-ng-c2251933016], 
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .state[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .state[_ngcontent-ng-c2251933016] {
  color: #aebcbe;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .pensador-card[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .pensador-card[_ngcontent-ng-c2251933016] {
  border-color: #3b484b;
  background: #273033;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016] {
  border-color: #465457;
  background: #273033;
  color: #aebcbe;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016]   input[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016]   input[_ngcontent-ng-c2251933016] {
  color: #edf4f3;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016]   button[_ngcontent-ng-c2251933016]:hover, body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .search-box[_ngcontent-ng-c2251933016]   button[_ngcontent-ng-c2251933016]:hover {
  background: #354244;
  color: #b9d9d4;
}
body.theme-master.theme-dark[_nghost-ng-c2251933016]   .pensador-placeholder[_ngcontent-ng-c2251933016], body.theme-master.theme-dark   [_nghost-ng-c2251933016]   .pensador-placeholder[_ngcontent-ng-c2251933016] {
  color: #a6c7c2;
  background:
    linear-gradient(
      145deg,
      #344441,
      #263532);
}
/*# sourceMappingURL=/pensadores.page.css.map */</style><style ng-app-id="ng">

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
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","input"],["error"]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c1606430066="" ngh="2" ng-server-context="ssg"><nav _ngcontent-ng-c1606430066="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c1606430066="" class="container"><a _ngcontent-ng-c1606430066="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c1606430066="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c1606430066="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c1606430066="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c1606430066="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c1606430066="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c1606430066="" class="nav-item"><a _ngcontent-ng-c1606430066="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c1606430066="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c1606430066="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c1606430066="" class="dropdown-menu"><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/revistas/avaliation" class="dropdown-item" href="/revistas/avaliation" jsaction="click:;">Estratificação</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c1606430066="" class="nav-item"><a _ngcontent-ng-c1606430066="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c1606430066="" class="nav-item"><a _ngcontent-ng-c1606430066="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c1606430066="" class="nav-item"><a _ngcontent-ng-c1606430066="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c1606430066="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c1606430066="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c1606430066="" class="dropdown-menu"><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/pq" class="dropdown-item" href="/pq" jsaction="click:;">Bolsistas PQ do CNPq</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/statistics" class="dropdown-item" href="/statistics" jsaction="click:;">Estatísticas da base</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c1606430066=""><a _ngcontent-ng-c1606430066="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c1606430066="" class="d-flex align-items-center gap-2"><button _ngcontent-ng-c1606430066="" type="button" title="Reportar problema" aria-label="Reportar problema" class="bug-toggle" jsaction="click:;"><i _ngcontent-ng-c1606430066="" aria-hidden="true" class="bi bi-bug"></i></button><div _ngcontent-ng-c1606430066="" class="accessibility-launcher"><button _ngcontent-ng-c1606430066="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c1606430066="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c1606430066="" class="language-picker"><button _ngcontent-ng-c1606430066="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c1606430066="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c1606430066="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c1606430066="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c1606430066="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c1606430066="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c1606430066=""></router-outlet><app-pensadores-page _nghost-ng-c2251933016="" ngh="1"><section _ngcontent-ng-c2251933016="" aria-labelledby="pensadores-title" class="pensadores-wrap py-4"><div _ngcontent-ng-c2251933016="" class="container"><app-breadcrumbs _ngcontent-ng-c2251933016="" _nghost-ng-c3912997418="" ngh="0"><nav _ngcontent-ng-c3912997418="" aria-label="Breadcrumb" class="bc-wrap"><ol _ngcontent-ng-c3912997418="" class="breadcrumb mb-1"><li _ngcontent-ng-c3912997418="" class="breadcrumb-item"><!--container--><a _ngcontent-ng-c3912997418="" href="/" jsaction="click:;">Inicio</a><!--container--></li><li _ngcontent-ng-c3912997418="" class="breadcrumb-item active" aria-current="page"><span _ngcontent-ng-c3912997418="">Pensadores</span><!--container--><!--container--></li><!--container--></ol></nav></app-breadcrumbs><div _ngcontent-ng-c2251933016="" class="page-heading mb-4"><div _ngcontent-ng-c2251933016=""><p _ngcontent-ng-c2251933016="" class="eyebrow mb-1">Brapci</p><h1 _ngcontent-ng-c2251933016="" id="pensadores-title" class="mb-1">Pensadores</h1><p _ngcontent-ng-c2251933016="" class="subtitle mb-0">Autores que ajudam a construir o pensamento científico.</p></div><span _ngcontent-ng-c2251933016="" aria-label="Quantidade de pensadores exibidos" class="total"> 21 </span><!--container--></div><!--container--><!--container--><!--container--><div _ngcontent-ng-c2251933016="" role="search" class="search-box mb-4"><i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-search"></i><label _ngcontent-ng-c2251933016="" for="pensadores-search" class="visually-hidden">Pesquisar pensadores</label><input _ngcontent-ng-c2251933016="" id="pensadores-search" type="search" placeholder="Pesquisar por nome ou nome de citação" autocomplete="off" value="" jsaction="input:;"><!--container--></div><!--container--><div _ngcontent-ng-c2251933016="" class="pensadores-grid"><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Alexander Ivanovich Mikhailov" href="/pensadores/12" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/12/thinker_12_upload_01.jpg" alt="Retrato de Alexander Ivanovich Mikhailov" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/12" jsaction="click:;">Alexander Ivanovich Mikhailov</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Mikhailov, A</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Alexander_Ivanovich_Mikhailov"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q2343468"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/12" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Aristóteles" href="/pensadores/17" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/17/thinker_17_01.jpg" alt="Retrato de Aristóteles" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/17" jsaction="click:;">Aristóteles</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Aristóteles</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Aristotle"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q868"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/17" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Bertram Brookes" href="/pensadores/3" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/3/thinker_3_01.jpg" alt="Retrato de Bertram Brookes" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/3" jsaction="click:;">Bertram Brookes</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">BROOKES, B</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/B._(Bertram)_C._Brookes"> Wikipédia </a><!--container--><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/3" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Birger Hjørland" href="/pensadores/2" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/2/thinker_2_brapci.jpg" alt="Retrato de Birger Hjørland" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/2" jsaction="click:;">Birger Hjørland</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Hjørland</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Birger_Hj%C3%B8rland"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q4916221"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/2" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Edson Nery da Fonseca" href="/pensadores/19" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/19/thinker_19_brapci.jpg" alt="Retrato de Edson Nery da Fonseca" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/19" jsaction="click:;">Edson Nery da Fonseca</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Fonseca, E</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/19" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Eugene Garfield" href="/pensadores/9" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/9/thinker_9_01.jpg" alt="Retrato de Eugene Garfield" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/9" jsaction="click:;">Eugene Garfield</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">GARFIELD, E</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Eugene_Garfield"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q2142532"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/9" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Frederick Wilfrid Lancaster" href="/pensadores/11" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> F </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/11" jsaction="click:;">Frederick Wilfrid Lancaster</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">LANCASTER, Frederick Wilfrid</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Frederick_Wilfrid_Lancaster"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q5499042"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/11" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Hagar Espanha" href="/pensadores/20" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> H </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/20" jsaction="click:;">Hagar Espanha</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Gomes. H</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/20" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Hilton Japiassu" href="/pensadores/10" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> H </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/10" jsaction="click:;">Hilton Japiassu</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">JAPIASSU, Hilton</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/10" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Jaime Robredo" href="/pensadores/18" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/18/thinker_18_brapci.jpg" alt="Retrato de Jaime Robredo" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/18" jsaction="click:;">Jaime Robredo</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">ROBREDO, J</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/18" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Leilah Santiago Bufrem" href="/pensadores/13" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/13/thinker_13_brapci.jpg" alt="Retrato de Leilah Santiago Bufrem" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/13" jsaction="click:;">Leilah Santiago Bufrem</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Bufrem, L</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q135105164"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/13" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Lena Vânia Ribeiro Pinheiro" href="/pensadores/15" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> L </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/15" jsaction="click:;">Lena Vânia Ribeiro Pinheiro</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Pinheiro, L</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/15" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Manuel Castells" href="/pensadores/8" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/8/thinker_8_01.jpg" alt="Retrato de Manuel Castells" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/8" jsaction="click:;">Manuel Castells</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">CASTELLS, Manuel</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Manuel_Castells"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q310161"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/8" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Michael Buckland" href="/pensadores/4" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> M </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/4" jsaction="click:;">Michael Buckland</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">BUCKLAND, Michael.</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q100764353"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/4" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Oswaldo Francisco de Almeida Júnior" href="/pensadores/21" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> O </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/21" jsaction="click:;">Oswaldo Francisco de Almeida Júnior</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Almeida Junior</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/21" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Pierre Bourdieu" href="/pensadores/1" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/1/thinker_1_01.jpg" alt="Retrato de Pierre Bourdieu" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/1" jsaction="click:;">Pierre Bourdieu</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Bourdieu</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Pierre_Bourdieu"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q156268"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/1" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Platão" href="/pensadores/16" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/16/thinker_16_01.jpg" alt="Retrato de Platão" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/16" jsaction="click:;">Platão</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">Platão</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Plato"> Wikipédia </a><!--container--><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/16" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Rafael Capurro" href="/pensadores/7" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/7/thinker_7_01.jpg" alt="Retrato de Rafael Capurro" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/7" jsaction="click:;">Rafael Capurro</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">CAPURRO, Rafael</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Rafael_Capurro"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q477277"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/7" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Vannevar Bush" href="/pensadores/6" jsaction="click:;"><img _ngcontent-ng-c2251933016="" loading="lazy" class="pensador-foto" src="https://cip.brapci.inf.br/_repository/thinkers/6/thinker_6_01.jpg" alt="Retrato de Vannevar Bush" jsaction="error:;"><!--container--><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/6" jsaction="click:;">Vannevar Bush</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">BUSH, Vannevar</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Vannevar_Bush"> Wikipédia </a><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q299595"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/6" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Vera Dodebei" href="/pensadores/14" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> V </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/14" jsaction="click:;">Vera Dodebei</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">DODEBEI, V</p><!--container--><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/14" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><article _ngcontent-ng-c2251933016="" class="pensador-card"><a _ngcontent-ng-c2251933016="" class="profile-media" aria-label="Ver perfil de Wilson da Costa Bueno" href="/pensadores/5" jsaction="click:;"><!--container--><div _ngcontent-ng-c2251933016="" aria-hidden="true" class="pensador-placeholder"> W </div><!--container--></a><div _ngcontent-ng-c2251933016="" class="card-body"><h2 _ngcontent-ng-c2251933016=""><a _ngcontent-ng-c2251933016="" href="/pensadores/5" jsaction="click:;">Wilson da Costa Bueno</a></h2><p _ngcontent-ng-c2251933016="" class="citation mb-0">BUENO, Wilson da Costa</p><!--container--><div _ngcontent-ng-c2251933016="" aria-label="Fontes externas" class="links"><!--container--><a _ngcontent-ng-c2251933016="" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Q101236317"> Wikidata </a><!--container--></div><!--container--><a _ngcontent-ng-c2251933016="" class="profile-link" href="/pensadores/5" jsaction="click:;"> Ver perfil <i _ngcontent-ng-c2251933016="" aria-hidden="true" class="bi bi-arrow-right"></i></a></div></article><!--container--></div><!--container--><!--container--></div></section></app-pensadores-page><!--container--><!--container--><footer _ngcontent-ng-c1606430066="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c1606430066="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c1606430066="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c1606430066="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c1606430066="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c1606430066="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c1606430066="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c1606430066="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c1606430066="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c1606430066="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c1606430066="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c1606430066="" class="text-muted">BRAPCI | brapci.inf.br | v0.26.10.05</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-PG43O4WH.js"><link rel="modulepreload" href="chunk-O7EM4I2L.js"><link rel="modulepreload" href="chunk-WJASMFZO.js"><link rel="modulepreload" href="chunk-MURG4VPZ.js"><link rel="modulepreload" href="chunk-SJ4BTPG5.js"><link rel="modulepreload" href="chunk-B656RPDE.js"><link rel="modulepreload" href="chunk-4B336FI2.js"><link rel="modulepreload" href="chunk-CM64UOJM.js"><link rel="modulepreload" href="chunk-5VDMIUJO.js"><link rel="modulepreload" href="chunk-PFN54DTC.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-3X23EI3E.js">
<link rel="modulepreload" href="chunk-BU6M5KF3.js">


<script id="ng-state" type="application/json">{"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4163174733":{"b":[{"id":"12","nome":"Alexander Ivanovich Mikhailov","nome_citacao":"Mikhailov, A","link_wikipedia":"https://pt.wikipedia.org/wiki/Alexander_Ivanovich_Mikhailov","link_wikidata":"https://www.wikidata.org/wiki/Q2343468","brapci_id":"0","foto":"https://cip.brapci.inf.br/_repository/thinkers/12/thinker_12_upload_01.jpg"},{"id":"17","nome":"Aristóteles","nome_citacao":"Aristóteles","link_wikipedia":"https://en.wikipedia.org/wiki/Aristotle","link_wikidata":"https://www.wikidata.org/wiki/Q868","brapci_id":"0","foto":"https://cip.brapci.inf.br/_repository/thinkers/17/thinker_17_01.jpg"},{"id":"3","nome":"Bertram Brookes","nome_citacao":"BROOKES, B","link_wikipedia":"https://en.wikipedia.org/wiki/B._(Bertram)_C._Brookes","link_wikidata":"","brapci_id":"0","foto":"https://cip.brapci.inf.br/_repository/thinkers/3/thinker_3_01.jpg"},{"id":"2","nome":"Birger Hjørland","nome_citacao":"Hjørland","link_wikipedia":"https://en.wikipedia.org/wiki/Birger_Hj%C3%B8rland","link_wikidata":"https://www.wikidata.org/wiki/Q4916221","brapci_id":"68024","foto":"https://cip.brapci.inf.br/_repository/thinkers/2/thinker_2_brapci.jpg"},{"id":"19","nome":"Edson Nery da Fonseca","nome_citacao":"Fonseca, E","link_wikipedia":"","link_wikidata":"","brapci_id":"18441","foto":"https://cip.brapci.inf.br/_repository/thinkers/19/thinker_19_brapci.jpg"},{"id":"9","nome":"Eugene Garfield","nome_citacao":"GARFIELD, E","link_wikipedia":"https://pt.wikipedia.org/wiki/Eugene_Garfield","link_wikidata":"https://www.wikidata.org/wiki/Q2142532","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/9/thinker_9_01.jpg"},{"id":"11","nome":"Frederick Wilfrid Lancaster","nome_citacao":"LANCASTER, Frederick Wilfrid","link_wikipedia":"https://pt.wikipedia.org/wiki/Frederick_Wilfrid_Lancaster","link_wikidata":"https://www.wikidata.org/wiki/Q5499042","brapci_id":null,"foto":null},{"id":"20","nome":"Hagar Espanha","nome_citacao":"Gomes. H","link_wikipedia":"","link_wikidata":"","brapci_id":null,"foto":null},{"id":"10","nome":"Hilton Japiassu","nome_citacao":"JAPIASSU, Hilton","link_wikipedia":"","link_wikidata":"","brapci_id":null,"foto":null},{"id":"18","nome":"Jaime Robredo","nome_citacao":"ROBREDO, J","link_wikipedia":"","link_wikidata":"","brapci_id":"5545","foto":"https://cip.brapci.inf.br/_repository/thinkers/18/thinker_18_brapci.jpg"},{"id":"13","nome":"Leilah Santiago Bufrem","nome_citacao":"Bufrem, L","link_wikipedia":"","link_wikidata":"https://www.wikidata.org/wiki/Q135105164","brapci_id":"4219","foto":"https://cip.brapci.inf.br/_repository/thinkers/13/thinker_13_brapci.jpg"},{"id":"15","nome":"Lena Vânia Ribeiro Pinheiro","nome_citacao":"Pinheiro, L","link_wikipedia":"","link_wikidata":"","brapci_id":"4549","foto":null},{"id":"8","nome":"Manuel Castells","nome_citacao":"CASTELLS, Manuel","link_wikipedia":"https://pt.wikipedia.org/wiki/Manuel_Castells","link_wikidata":"https://www.wikidata.org/wiki/Q310161","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/8/thinker_8_01.jpg"},{"id":"4","nome":"Michael Buckland","nome_citacao":"BUCKLAND, Michael.","link_wikipedia":"","link_wikidata":"https://www.wikidata.org/wiki/Q100764353","brapci_id":null,"foto":null},{"id":"21","nome":"Oswaldo Francisco de Almeida Júnior","nome_citacao":"Almeida Junior","link_wikipedia":"","link_wikidata":"","brapci_id":"7677","foto":null},{"id":"1","nome":"Pierre Bourdieu","nome_citacao":"Bourdieu","link_wikipedia":"https://pt.wikipedia.org/wiki/Pierre_Bourdieu","link_wikidata":"https://www.wikidata.org/wiki/Q156268","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/1/thinker_1_01.jpg"},{"id":"16","nome":"Platão","nome_citacao":"Platão","link_wikipedia":"https://en.wikipedia.org/wiki/Plato","link_wikidata":"","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/16/thinker_16_01.jpg"},{"id":"7","nome":"Rafael Capurro","nome_citacao":"CAPURRO, Rafael","link_wikipedia":"https://pt.wikipedia.org/wiki/Rafael_Capurro","link_wikidata":"https://www.wikidata.org/wiki/Q477277","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/7/thinker_7_01.jpg"},{"id":"6","nome":"Vannevar Bush","nome_citacao":"BUSH, Vannevar","link_wikipedia":"https://pt.wikipedia.org/wiki/Vannevar_Bush","link_wikidata":"https://www.wikidata.org/wiki/Q299595","brapci_id":null,"foto":"https://cip.brapci.inf.br/_repository/thinkers/6/thinker_6_01.jpg"},{"id":"14","nome":"Vera Dodebei","nome_citacao":"DODEBEI, V","link_wikipedia":"","link_wikidata":"","brapci_id":null,"foto":null},{"id":"5","nome":"Wilson da Costa Bueno","nome_citacao":"BUENO, Wilson da Costa","link_wikipedia":"","link_wikidata":"https://www.wikidata.org/wiki/Q101236317","brapci_id":null,"foto":null}],"h":{},"s":200,"st":"OK","u":"https://cip.brapci.inf.br/api/pensadores","rt":"json"},"4175925773":{"b":{"bugs":{"tab":"Bugs reportado","notice":"Seu problema será reportado à equipe. Em breve, você receberá um retorno em seu perfil, na aba Bugs reportado.","loading":"Carregando relatos…","error":"Não foi possível carregar seus relatos.","retry":"Tentar novamente","empty":"Você ainda não reportou problemas.","record":"Registro","problem":"Problema","description":"Descrição","url":"Página acessada","status":"Status","solution":"Retorno da equipe","pending":"Pendente","resolved":"Resolvido","pdfIncorrect":"PDF incorreto","pdfInaccessible":"PDF inacessível","other":"Outro","authorincorrect":"Autor incorreto"},"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar seleção","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos","export":"Exportar","export_format":"Exportar em {{format}}","export_login_required":"Exportação somente para usuários logados.","panel_title":"Painel (Análise)","panel_link":"Ir para o painel","fetch_error":"Erro ao buscar dados da API.","download_error":"Não foi possível obter o link de download.","export_error":"Erro ao exportar os dados da cesta."}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Ver selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","select_all_items":"Selecionar os {{total}} itens","method":"Método de busca","result_limit":"Limite de resultados","methods":{"v3":"Metodo anterior (2024)","v4":"Método atual (2026)","v5":"Método ponderado"},"filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","selectAllPublications":"Selecionar todas as publicações","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"clusters":{"label":"Clusters de autores","overviewTitle":"Mapa global dos clusters","authorsWith":"Autores com","moreThanOnePublication":"mais de uma publicação","biggerPoints":"Pontos maiores indicam maior produção.","summary":"{{groups}} clusters · {{authors}} autores","groupSummary":"{{groups}} grupos · {{authors}} autores","cluster":"Cluster","group":"Grupo","authors":"autores","publications":"publicações","connections":"conexões","zoomControls":"Controles de zoom","zoomOut":"Afastar","zoomIn":"Ampliar","resetZoom":"Restaurar zoom","savePng":"Salvar PNG","source":"Fonte","clickAuthor":"Clique em um autor para abrir seu perfil.","openProfile":"Abrir perfil de","overviewAria":"Mapa de conexões entre clusters de autores","sankeyAria":"Gráfico Sankey dos clusters e seus autores","sankeyTitle":"Clusters de autores","sankeySubtitle":"Comunidades identificadas pela intensidade das conexões de coautoria.","topAuthorsNote":"Exibindo os 70 autores com maior intensidade de conexão.","noRepresentativeAuthors":"Nenhum autor com mais de uma publicação foi encontrado.","noClusterData":"Sem dados suficientes para identificar clusters."},"citationsGranted":{"label":"Citações concedidas"},"variants":{"label":"Variações do nome"},"researcherProfileTitle":"Acessar dados do pesquisador","scholarship":{"label":"Bolsista","modality":"Modalidade / nivel","institution":"Instituicao","period":"Periodo","history":"Historico"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"actions":{"selectAll":"Selecionar tudo"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"avaliation":{"title":"Estratificação das Revistas","menuItem":"Estratificação"},"pq":{"title":"Bolsistas Produtividade PQ do CNPq","menuItem":"Bolsistas PQ do CNPq"},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar Brapci Labs (beta)","tabsLabel":"Áreas do perfil","sessionTab":"Dados da Sessão","monitorTab":"Monitor","monitorDescription":"Acesse as ferramentas de acompanhamento da infraestrutura Brapci.","computers":"Computadores","computersDescription":"Ver computadores ligados e desligados","status":"Status","statusDescription":"Acessar o status dos serviços"},"monitor":{"kicker":"Infraestrutura","title":"Monitor de computadores","description":"Situação atual dos computadores e servidores conectados à Brapci.","refresh":"Atualizar","availableNow":"Disponíveis agora","onlineComputers":"Computadores ligados","loading":"Consultando computadores...","error":"Não foi possível consultar os computadores neste momento.","tryAgain":"Tentar novamente","online":"Ligados","offline":"Desligados","total":"Total","updatedAt":"Atualizado às {{time}}","onlineStatus":"Online","noneOnline":"Nenhum computador está ligado.","showOffline":"Mostrar computadores desligados","offlineStatus":"Offline"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API","databaseStatistics":"Estatísticas da base"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos.","card3Title":"Análise das citações (meia-vida)","card3Text":"Analise as referências citadas e estime a meia-vida da literatura."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET.","card3Title":"Análise de Rede","card3Text":"Explore os indicadores de redes de colaboração entre pesquisadores."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Sessão","title":"Sessões"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citações"},"data":{"title":"Dados","copy":"Copiar","citationSummary":{"title":"Resumo das citações","typology":"Tipologia","sources":"Quantidade de fontes (%)","halfLife":"Meia-vida da literatura","withDoi":"Referências com DOI","general":"Geral","untyped":"Sem tipo","years":"anos","note":"Meia-vida calculada pela mediana da idade das fontes em relação ao ano do artigo.","empty":"Não há fontes disponíveis para calcular o resumo."},"tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referências","citations":"Citações"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"select":"Selecionar","selected":"Selecionado","downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"},"home":{"news":{"kicker":"Novidades","title":"Principais atualizações","loading":"Carregando atualizações...","error":"Não foi possível carregar as atualizações no momento.","empty":"Nenhuma atualização encontrada.","view":"ver"},"statistics":{"kicker":"Indicadores","title":"Estatísticas da base","loading":"Carregando estatísticas...","error":"Não foi possível carregar as estatísticas no momento.","empty":"Nenhuma estatística encontrada.","updatedAt":"Atualizado em {{date}}","items":{"articles":"Total de artigos","books":"Total de livros","bookChapters":"Total de capítulos de livros","proceedings":"Total de trabalhos em eventos","authors":"Total de autores","institutions":"Total de instituições","sources":"Total de fontes","files":"Total de arquivos","indexedEvents":"Eventos indexados","indexedBrazilianJournals":"Revistas brasileiras indexadas","indexedForeignJournals":"Revistas estrangeiras indexadas","historicBrazilianJournals":"Revistas brasileiras históricas"}},"events":{"title":"Eventos da área","loading":"Carregando eventos...","error":"Não foi possível carregar os eventos no momento.","empty":"Nenhum evento encontrado.","openDetails":"Abrir detalhes do evento {{title}}","logoAlt":"Logo do evento {{title}}","logoFallback":"EVENTO","date":"Data","moreDetails":"Mais detalhes"}},"painelAnalysis":{"productionIndicators":"Indicadores de produção","connectionIndicators":"Indicadores de ligação","productionByYear":"Produção por Ano","exportCsv":"Exportar CSV","item":"Item","value":"Valor","noData":"Sem dados nesta seção.","sections":{"authors":"Autores","subjects":"Assuntos","session":"Sessão","sessionSub":"Subsessão","publications":"Publicações","types":"Tipos"},"network":{"title":"Rede de coautoria","author":"Autor","legendTitle":"Legenda dos indicadores","metrics":{"nodes":"Nós","edges":"Arestas","density":"Densidade","modularity":"Modularidade"},"metricDescriptions":{"nodes":"Quantidade de autores representados na rede.","edges":"Quantidade de conexões de coautoria entre os autores.","density":"Proporção entre as conexões existentes e todas as conexões possíveis na rede.","modularity":"Mede a intensidade com que a rede se divide em comunidades de autores mais conectados entre si."},"indicators":{"degree":"Grau","weightedDegree":"Grau ponderado","betweenness":"Intermediação","closeness":"Proximidade","eigenvector":"Autovetor","community":"Comunidade"},"descriptions":{"degree":"Número de autores diferentes com quem o autor publicou.","weightedDegree":"Total de vínculos de coautoria, considerando as publicações repetidas entre autores.","betweenness":"Indica quanto o autor atua como ponte nos caminhos entre outros autores da rede.","closeness":"Mede quão próximo o autor está de todos os demais autores da rede.","eigenvector":"Representa a influência do autor com base na importância de suas conexões.","community":"Identifica o grupo de autores mais conectados entre si ao qual o autor pertence."}}},"adminEdit":{"kicker":"Administração","title":"Editar conteúdo","record":"Registro #{{id}}","back":"Voltar ao registro","unauthorized":"É necessário entrar com uma conta de administrador para editar este registro.","loading":"Carregando registro...","content":"Conteúdo JSON","save":"Salvar alterações","saving":"Salvando...","success":"Alterações salvas com sucesso.","errors":{"load":"Não foi possível carregar o registro.","invalidJson":"O conteúdo informado não é um JSON válido.","save":"Não foi possível salvar as alterações.","upload":"Não foi possível enviar o arquivo.","delete":"Não foi possível excluir o dado."},"mainData":"Dados principais","add":"Adicionar valor","remove":"Remover valor","noValues":"Nenhum valor informado.","groups":{"CONCEPT":"Identificação","GENDER":"Gênero","AFFILIATIO":"Afiliação","DATE":"Datas","ID":"Identificadores","IMAGE":"Imagem"},"fields":{"n_name":"Nome ou valor","n_lang":"Idioma","c_class":"Classe","cc_status":"Status","ID":"ID relacionado"},"properties":{"hasGender":"Gênero","hasAffiliation":"Afiliação institucional","hasBorn":"Data de nascimento","hasDead":"Data de falecimento","hasOpenAlexID":"OpenAlex ID","hasGoogleScholar":"Google Scholar","hasISNI":"ISNI","hasEmail":"E-mail","hasOrcID":"ORCID","hasLattes":"Currículo Lattes","hasExitID":"Identificador externo","hasLinkedin":"LinkedIn","hasPhoto":"Fotografia"},"unnamed":"Sem nome","edit":"Editar","delete":"Excluir","modalTitle":"Editor de dado RDF","addTitle":"Adicionar dado","editTitle":"Modificar conteúdo","close":"Fechar","selectImage":"Selecione uma imagem","selectFile":"Selecione um arquivo","currentFile":"Arquivo atual","cancel":"Cancelar","confirm":"Confirmar submissão","uploading":"Enviando...","deleteTitle":"Excluir dado","deleteConfirm":"Confirma a exclusão de {{name}}?","deleting":"Excluindo..."},"eventView":{"searchTitle":"Buscar trabalhos deste evento","searchPlaceholder":"Digite título, autor, resumo ou palavra-chave","tabs":{"authors":"Autores","ariaLabel":"Abas de conteúdo do evento","json":"JSON","search":"Busca de trabalhos","summary":"Resumo","issues":"Edições"}},"journalView":{"title":"Revista","tabsLabel":"Abas de conteúdo da revista","search":"Busca de trabalhos","searchTitle":"Buscar trabalhos desta revista","searchPlaceholder":"Digite título, autor, resumo ou palavra-chave","summary":"Resumo","authors":"Autores","issues":"Fascículos","location":"Localização","theme":"Temas","strata":"Estratos","json":"JSON","themesTitle":"Temas da revista","emptyThemes":"Sem temas disponíveis.","emptyIssues":"Sem fascículos disponíveis.","city":"Cidade","name":"Nome","latitude":"Latitude","longitude":"Longitude","altitude":"Altitude","emptyLocation":"Sem localização disponível."},"timeCloud":{"title":"Evolução temporal dos temas","period":"Termos publicados entre {{start}} e {{end}}","years":"{{count}} anos","year":"{{count}} ano","start":"Ano inicial","end":"Ano final","controls":"Controles da animação temporal","play":"Reproduzir","pause":"Pausar","duration":"Duração por ano","range":"Intervalo de anos","topics":"Temas no período selecionado","empty":"Sem temas no período selecionado"},"authorNameActions":{"copy":"Copiar nome","copied":"Nome copiado.","failed":"Não foi possível copiar o nome."}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{"t":{"3":"t6"},"c":{"3":[{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[],"2":[{"i":"t8","r":1}]}},{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[{"i":"t7","r":1}],"2":[]}}]}},{"t":{"11":"t47","12":"t48","13":"t49","14":"t50","15":"t51"},"c":{"11":[{"i":"t47","r":1}],"12":[],"13":[],"14":[],"15":[{"i":"t51","r":4,"t":{"5":"t52","6":"t53","7":"t54"},"c":{"5":[],"6":[],"7":[{"i":"t54","r":1,"t":{"2":"t55"},"c":{"2":[{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]},"x":2},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[]},"x":2},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[]}}]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[{"i":"t56","r":1}],"3":[],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[{"i":"t60","r":1}],"2":[{"i":"t61","r":1}]}}]},"x":2},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[]}},{"i":"t55","r":1,"t":{"2":"t56","3":"t57","8":"t58","9":"t59"},"c":{"2":[],"3":[{"i":"t57","r":1}],"8":[{"i":"t58","r":1}],"9":[{"i":"t59","r":1,"t":{"1":"t60","2":"t61"},"c":{"1":[],"2":[{"i":"t61","r":1}]}}]}}]}}]}}]}},{"t":{"42":"t0","96":"t1","97":"t2","103":"t3","104":"t4","105":"t5","107":"t35","114":"t36"},"c":{"42":[],"96":[],"97":[],"103":[],"104":[{"i":"t4","r":1}],"105":[],"106":[{"i":"c2251933016","r":1}],"107":[],"114":[]}}]}</script></body></html>`;