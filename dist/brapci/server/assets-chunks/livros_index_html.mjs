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

.livros-wrap[_ngcontent-ng-c2740596230] {
  min-height: calc(100vh - 70px);
  background:
    radial-gradient(
      circle at top left,
      rgba(208, 223, 255, 0.9),
      transparent 34%),
    linear-gradient(
      180deg,
      #f6f1e8 0%,
      #efe5d5 100%);
}
.livros-shell[_ngcontent-ng-c2740596230] {
  display: grid;
  gap: 1.5rem;
}
.livros-hero[_ngcontent-ng-c2740596230] {
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 252, 247, 0.88);
  border: 1px solid rgba(124, 86, 46, 0.12);
  box-shadow: 0 20px 45px rgba(92, 63, 29, 0.08);
}
.livros-kicker[_ngcontent-ng-c2740596230] {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8a5a2b;
}
.livros-title[_ngcontent-ng-c2740596230] {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #35210f;
}
.livros-lead[_ngcontent-ng-c2740596230] {
  max-width: 52rem;
  margin-top: 1rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #5a4634;
}
.livros-grid[_ngcontent-ng-c2740596230] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
.livros-search-row[_ngcontent-ng-c2740596230] {
  margin: 0;
}
.livros-card[_ngcontent-ng-c2740596230] {
  padding: 1.5rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(124, 86, 46, 0.1);
  box-shadow: 0 14px 32px rgba(92, 63, 29, 0.06);
}
.livros-card[_ngcontent-ng-c2740596230]   h2[_ngcontent-ng-c2740596230] {
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  color: #35210f;
}
.livros-card[_ngcontent-ng-c2740596230]   p[_ngcontent-ng-c2740596230] {
  margin: 0;
  color: #5a4634;
  line-height: 1.6;
}
.livros-card-accent[_ngcontent-ng-c2740596230] {
  background:
    linear-gradient(
      135deg,
      #4c2f19 0%,
      #7b5230 100%);
}
.livros-card-accent[_ngcontent-ng-c2740596230]   h2[_ngcontent-ng-c2740596230], 
.livros-card-accent[_ngcontent-ng-c2740596230]   p[_ngcontent-ng-c2740596230] {
  color: #f8efe4;
}
.livros-link[_ngcontent-ng-c2740596230] {
  display: inline-flex;
  margin-top: 1rem;
  color: #fff4e6;
  font-weight: 600;
  text-decoration: none;
}
.livros-link[_ngcontent-ng-c2740596230]:hover {
  text-decoration: underline;
}
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-wrap[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-wrap[_ngcontent-ng-c2740596230] {
  background:
    radial-gradient(
      circle at top left,
      rgba(89, 117, 168, 0.18),
      transparent 34%),
    linear-gradient(
      180deg,
      #181512 0%,
      #241e19 100%);
}
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-hero[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-hero[_ngcontent-ng-c2740596230], 
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230] {
  background: rgba(37, 31, 26, 0.88);
  border-color: rgba(232, 213, 190, 0.08);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.26);
}
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-kicker[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-kicker[_ngcontent-ng-c2740596230] {
  color: #d9a36a;
}
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-title[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-title[_ngcontent-ng-c2740596230], 
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230]   h2[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230]   h2[_ngcontent-ng-c2740596230] {
  color: #f7ecdf;
}
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-lead[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-lead[_ngcontent-ng-c2740596230], 
body.theme-master.theme-dark[_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230]   p[_ngcontent-ng-c2740596230], body.theme-master.theme-dark   [_nghost-ng-c2740596230]   .livros-card[_ngcontent-ng-c2740596230]   p[_ngcontent-ng-c2740596230] {
  color: #d6c4b2;
}
/*# sourceMappingURL=/livros.page.css.map */</style><style ng-app-id="ng">

.image-div[_ngcontent-ng-c2100221580] {
  display: grid;
  place-items: center;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 1.2rem 1rem;
  border-radius: 0;
  background: url(/assets/img/background_library.webp) center center/cover no-repeat;
  border: none;
  box-shadow: none;
}
.logo[_ngcontent-ng-c2100221580] {
  display: block;
  width: min(640px, 92%);
  max-height: 160px;
  object-fit: contain;
  filter: drop-shadow(0 8px 20px rgba(39, 25, 14, 0.2));
}
body.theme-master.theme-dark[_nghost-ng-c2100221580]   .image-div[_ngcontent-ng-c2100221580], body.theme-master.theme-dark   [_nghost-ng-c2100221580]   .image-div[_ngcontent-ng-c2100221580] {
  background: url(/assets/img/background_library.webp) center center/cover no-repeat;
}
/*# sourceMappingURL=/banner-livros.component.css.map */</style><style ng-app-id="ng">

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
/*# sourceMappingURL=/breadcrumbs.component.css.map */</style><style ng-app-id="ng">

.book-carousel[_ngcontent-ng-c2051018456] {
  padding-bottom: 0.5rem;
}
.book-carousel__headline[_ngcontent-ng-c2051018456]   h2[_ngcontent-ng-c2051018456] {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #35210f;
}
.book-carousel__catalog[_ngcontent-ng-c2051018456] {
  position: relative;
  overflow: hidden;
  padding: 1.25rem 3.5rem;
  border-radius: 28px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 250, 243, 0.98) 0%,
      rgba(245, 236, 222, 0.98) 100%);
  border: 1px solid rgba(124, 86, 46, 0.14);
  box-shadow: 0 22px 44px rgba(92, 63, 29, 0.08);
}
.book-carousel__viewport[_ngcontent-ng-c2051018456] {
  overflow: hidden;
}
.book-carousel__slider[_ngcontent-ng-c2051018456], 
.book-carousel__loading-track[_ngcontent-ng-c2051018456] {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.35s ease;
  will-change: transform;
}
.book-carousel__item[_ngcontent-ng-c2051018456] {
  display: grid;
  gap: 0.7rem;
  width: 172px;
  flex: 0 0 172px;
  padding: 0;
  background: transparent;
  border: 0;
  text-align: left;
  cursor: pointer;
  opacity: 1;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}
.book-carousel__item.in-view[_ngcontent-ng-c2051018456] {
  opacity: 1;
  transform: scale(1.08);
  filter: drop-shadow(0 8px 18px rgba(39, 25, 14, 0.22));
}
.book-carousel__item.left[_ngcontent-ng-c2051018456], 
.book-carousel__item.right[_ngcontent-ng-c2051018456] {
  opacity: 1;
  transform: scale(0.96);
}
.book-carousel__item.far-left[_ngcontent-ng-c2051018456], 
.book-carousel__item.far-right[_ngcontent-ng-c2051018456] {
  opacity: 1;
}
.book-carousel__cover[_ngcontent-ng-c2051018456] {
  display: block;
  width: 172px;
  height: 250px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 18px 30px rgba(28, 17, 8, 0.18);
  background: #efe5d5;
}
.book-carousel__book-title[_ngcontent-ng-c2051018456] {
  display: -webkit-box;
  min-height: 3.3em;
  overflow: hidden;
  font-size: 0.92rem;
  line-height: 1.35;
  color: #4e3926;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.book-carousel__scroll-btn[_ngcontent-ng-c2051018456] {
  position: absolute;
  top: calc(50% - 1.25rem);
  z-index: 2;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 999px;
  background: rgba(76, 47, 25, 0.92);
  color: #fff7ed;
  font-size: 1rem;
  line-height: 1;
  box-shadow: 0 10px 22px rgba(29, 18, 9, 0.2);
}
.book-carousel__scroll-btn.left[_ngcontent-ng-c2051018456] {
  left: 0.65rem;
}
.book-carousel__scroll-btn.right[_ngcontent-ng-c2051018456] {
  right: 0.65rem;
}
.book-carousel__message[_ngcontent-ng-c2051018456] {
  padding: 1rem 0;
  color: #6d543d;
}
.book-carousel__skeleton-item[_ngcontent-ng-c2051018456] {
  width: 172px;
  height: 250px;
  flex: 0 0 172px;
  border-radius: 14px;
  background:
    linear-gradient(
      90deg,
      rgba(211, 194, 169, 0.55) 0%,
      rgba(242, 233, 221, 0.9) 50%,
      rgba(211, 194, 169, 0.55) 100%);
  background-size: 200% 100%;
  animation: _ngcontent-ng-c2051018456_book-carousel-shimmer 1.3s linear infinite;
}
@keyframes _ngcontent-ng-c2051018456_book-carousel-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
@media (max-width: 767.98px) {
  .book-carousel__catalog[_ngcontent-ng-c2051018456] {
    padding: 1rem 2.8rem;
  }
  .book-carousel__item[_ngcontent-ng-c2051018456], 
   .book-carousel__cover[_ngcontent-ng-c2051018456], 
   .book-carousel__skeleton-item[_ngcontent-ng-c2051018456] {
    width: 136px;
    flex-basis: 136px;
  }
  .book-carousel__cover[_ngcontent-ng-c2051018456], 
   .book-carousel__skeleton-item[_ngcontent-ng-c2051018456] {
    height: 200px;
  }
  .book-carousel__scroll-btn[_ngcontent-ng-c2051018456] {
    width: 2.2rem;
    height: 2.2rem;
  }
}
@media (max-width: 575.98px) {
  .book-carousel__catalog[_ngcontent-ng-c2051018456] {
    padding-inline: 2.4rem;
  }
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel[_ngcontent-ng-c2051018456] {
  background: transparent;
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__headline[_ngcontent-ng-c2051018456]   h2[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__headline[_ngcontent-ng-c2051018456]   h2[_ngcontent-ng-c2051018456] {
  color: #f7ecdf;
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__catalog[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__catalog[_ngcontent-ng-c2051018456] {
  background:
    linear-gradient(
      180deg,
      rgba(38, 31, 25, 0.98) 0%,
      rgba(28, 23, 20, 0.98) 100%);
  border-color: rgba(232, 213, 190, 0.1);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.28);
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__book-title[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__book-title[_ngcontent-ng-c2051018456], 
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__message[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__message[_ngcontent-ng-c2051018456] {
  color: #d6c4b2;
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__scroll-btn[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__scroll-btn[_ngcontent-ng-c2051018456] {
  background: #d9a36a;
  color: #24180f;
}
body.theme-master.theme-dark[_nghost-ng-c2051018456]   .book-carousel__cover[_ngcontent-ng-c2051018456], body.theme-master.theme-dark   [_nghost-ng-c2051018456]   .book-carousel__cover[_ngcontent-ng-c2051018456] {
  background: #332a24;
}
/*# sourceMappingURL=/book-carousel.component.css.map */</style><style ng-app-id="ng">

.search-book[_ngcontent-ng-c1490403949] {
  border-radius: 18px;
  background: color-mix(in srgb, var(--theme-card-bg) 86%, transparent);
  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, transparent);
  color: var(--theme-ink);
}
.search-book__form[_ngcontent-ng-c1490403949] {
  padding: 1rem;
  border: 1px solid var(--theme-line);
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);
}
.search-book__frame[_ngcontent-ng-c1490403949] {
  padding: 1rem;
  border: 1px solid var(--theme-line);
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--theme-card-bg) 92%, transparent);
}
.search-book__year-select[_ngcontent-ng-c1490403949] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--theme-line);
  border-radius: 0.375rem;
  background: var(--theme-paper);
  color: var(--theme-ink);
}
.search-book__results[_ngcontent-ng-c1490403949] {
  border-radius: 12px;
  overflow: hidden;
}
.search-book__results[_ngcontent-ng-c1490403949]   .list-group-item[_ngcontent-ng-c1490403949] {
  background: var(--theme-card-bg);
  border-color: var(--theme-line);
  color: var(--theme-ink);
}
.search-book__result-title[_ngcontent-ng-c1490403949] {
  margin: 0;
  font-size: 1rem;
  color: var(--theme-ink);
}
.search-book__result-meta[_ngcontent-ng-c1490403949] {
  font-size: 0.9rem;
  color: var(--theme-muted);
}
/*# sourceMappingURL=/search-book.component.css.map */</style><style ng-app-id="ng">

[_nghost-ng-c3139248834] {
  display: block;
  height: 330px;
}
.submit-btn[_ngcontent-ng-c3139248834] {
  position: relative;
  display: grid;
  gap: 0.9rem;
  box-sizing: border-box;
  height: 330px;
  padding: 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  background:
    linear-gradient(
      165deg,
      rgba(39, 24, 13, 0.9) 0%,
      rgba(99, 62, 31, 0.76) 100%),
    url(/assets/img/banner_authority.png) center center/cover no-repeat;
  box-shadow: 0 18px 34px rgba(67, 41, 20, 0.28);
  color: #fff6e9;
  border: 1px solid rgba(255, 244, 226, 0.3);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}
.submit-btn[_ngcontent-ng-c3139248834]:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 24px 40px rgba(67, 41, 20, 0.34);
}
.submit-btn[_ngcontent-ng-c3139248834]::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(255, 214, 157, 0.08) 0%,
      rgba(255, 214, 157, 0) 48%);
  pointer-events: none;
}
.submit-btn-kicker[_ngcontent-ng-c3139248834], 
.submit-btn-title[_ngcontent-ng-c3139248834] {
  position: relative;
  z-index: 1;
}
.submit-btn-kicker[_ngcontent-ng-c3139248834] {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  padding: 0.34rem 0.72rem;
  border-radius: 999px;
  background:
    linear-gradient(
      120deg,
      rgba(255, 210, 138, 0.28) 0%,
      rgba(255, 239, 211, 0.14) 100%);
  border: 1px solid rgba(255, 229, 187, 0.65);
  box-shadow: inset 0 1px 0 rgba(255, 246, 230, 0.35), 0 4px 12px rgba(24, 13, 6, 0.22);
  color: #ffebc8;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
}
.submit-btn-kicker[_ngcontent-ng-c3139248834]::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background:
    radial-gradient(
      circle at 30% 30%,
      #ffe8c1 0%,
      #ffc867 55%,
      #b47023 100%);
  box-shadow: 0 0 0 2px rgba(255, 232, 193, 0.2);
}
.submit-btn-kicker[_ngcontent-ng-c3139248834]::after {
  content: "";
  width: 1.25rem;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      rgba(255, 233, 196, 0.55) 0%,
      rgba(255, 233, 196, 0) 100%);
}
.submit-btn-title[_ngcontent-ng-c3139248834] {
  font-family: "Barlow Condensed", sans-serif;
  font-size: clamp(1.45rem, 2.4vw, 1.9rem);
  line-height: 1;
  letter-spacing: 0.03em;
  font-weight: 700;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.34);
}
.submit-btn-copy[_ngcontent-ng-c3139248834] {
  position: relative;
  z-index: 1;
  font-size: 0.96rem;
  line-height: 1.4;
  color: #ffeccc;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.32);
}
.submit-btn-cta[_ngcontent-ng-c3139248834] {
  position: relative;
  z-index: 1;
  margin-top: auto;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: #ffd27f;
  color: #3c240f;
  font-size: 0.86rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.submit-btn-cta[_ngcontent-ng-c3139248834]::after {
  content: "->";
}
body.theme-master.theme-dark[_nghost-ng-c3139248834]   .submit-btn[_ngcontent-ng-c3139248834], body.theme-master.theme-dark   [_nghost-ng-c3139248834]   .submit-btn[_ngcontent-ng-c3139248834] {
  background:
    linear-gradient(
      165deg,
      rgba(26, 16, 10, 0.92) 0%,
      rgba(69, 44, 22, 0.84) 100%),
    url(/assets/img/banner_authority.png) center center/cover no-repeat;
  border-color: rgba(255, 230, 196, 0.34);
}
body.theme-master.theme-dark[_nghost-ng-c3139248834]   .submit-btn-copy[_ngcontent-ng-c3139248834], body.theme-master.theme-dark   [_nghost-ng-c3139248834]   .submit-btn-copy[_ngcontent-ng-c3139248834] {
  color: #fff1db;
}
body.theme-master.theme-dark[_nghost-ng-c3139248834]   .submit-btn-kicker[_ngcontent-ng-c3139248834], body.theme-master.theme-dark   [_nghost-ng-c3139248834]   .submit-btn-kicker[_ngcontent-ng-c3139248834] {
  background:
    linear-gradient(
      120deg,
      rgba(255, 197, 115, 0.24) 0%,
      rgba(255, 231, 187, 0.1) 100%);
  border-color: rgba(255, 220, 165, 0.55);
  color: #ffe8c1;
}
/*# sourceMappingURL=/book-btn-submit.component.css.map */</style><style ng-app-id="ng">@charset "UTF-8";



.book-panel__backdrop[_ngcontent-ng-c2199762631] {
  position: fixed;
  inset: 0;
  z-index: 1040;
  background: rgba(10, 18, 34, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.book-panel__backdrop--visible[_ngcontent-ng-c2199762631] {
  opacity: 1;
  pointer-events: all;
}
.book-panel__drawer[_ngcontent-ng-c2199762631] {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1050;
  width: min(80vw, 860px);
  height: 100dvh;
  background: var(--theme-paper);
  border-left: 1px solid var(--theme-line);
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.18);
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}
.book-panel__drawer--open[_ngcontent-ng-c2199762631] {
  transform: translateX(0);
}
.book-panel__drawer--embedded[_ngcontent-ng-c2199762631] {
  position: static;
  width: 100%;
  height: auto;
  transform: none;
  box-shadow: none;
  background: transparent;
}
.book-panel__close[_ngcontent-ng-c2199762631] {
  position: absolute;
  top: 1rem;
  left: -2.8rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: none;
  background: var(--theme-card-bg);
  color: var(--theme-link);
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid var(--theme-line);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}
.book-panel__close[_ngcontent-ng-c2199762631]:hover {
  background: color-mix(in srgb, var(--theme-sand) 75%, transparent);
  transform: scale(1.1);
}
.book-panel__content[_ngcontent-ng-c2199762631] {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 2rem 2rem 3rem;
}
.book-panel__drawer--embedded[_ngcontent-ng-c2199762631]   .book-panel__content[_ngcontent-ng-c2199762631] {
  overflow: visible;
  padding: 0;
}
.book-panel__details[_ngcontent-ng-c2199762631] {
  margin-top: 2rem;
  border-top: 1px solid var(--theme-line);
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.book-panel__meta-grid[_ngcontent-ng-c2199762631] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}
.book-panel__meta-card[_ngcontent-ng-c2199762631] {
  border: 1px solid var(--theme-line);
  border-radius: 12px;
  background: var(--theme-card-bg);
  padding: 0.85rem 0.95rem;
}
.book-panel__meta-card[_ngcontent-ng-c2199762631]   h3[_ngcontent-ng-c2199762631] {
  margin: 0;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--theme-muted);
}
.book-panel__meta-card[_ngcontent-ng-c2199762631]   p[_ngcontent-ng-c2199762631] {
  margin: 0.32rem 0 0;
  color: var(--theme-ink);
  line-height: 1.45;
  font-weight: 600;
}
.book-panel__meta-card--publisher[_ngcontent-ng-c2199762631] {
  justify-self: start;
  width: min(100%, 430px);
}
.book-panel__stats[_ngcontent-ng-c2199762631] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.book-panel__stats[_ngcontent-ng-c2199762631]   span[_ngcontent-ng-c2199762631] {
  display: inline-flex;
  gap: 0.35rem;
  align-items: baseline;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--theme-sand) 68%, transparent);
  color: var(--theme-link);
  font-size: 0.78rem;
}
.book-panel__pdf-link[_ngcontent-ng-c2199762631] {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid var(--theme-line);
  color: var(--theme-paper);
  background: var(--theme-hint);
  transition: transform 0.15s ease, filter 0.15s ease;
}
.book-panel__pdf-link[_ngcontent-ng-c2199762631]:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}
.book-panel__section-block[_ngcontent-ng-c2199762631]   h3[_ngcontent-ng-c2199762631] {
  margin: 0 0 0.45rem;
  color: var(--theme-ink);
  font-size: 1rem;
}
.book-panel__section-block[_ngcontent-ng-c2199762631]   p[_ngcontent-ng-c2199762631] {
  margin: 0;
  color: var(--theme-ink);
  line-height: 1.68;
}
.book-panel__person-list[_ngcontent-ng-c2199762631] {
  margin: 0;
  padding-left: 1.1rem;
}
.book-panel__person-list[_ngcontent-ng-c2199762631]   li[_ngcontent-ng-c2199762631] {
  color: var(--theme-ink);
  line-height: 1.55;
}
.book-panel__person-name[_ngcontent-ng-c2199762631] {
  font-weight: 600;
}
.book-panel__person-complement[_ngcontent-ng-c2199762631] {
  margin-left: 0.35rem;
  color: var(--theme-muted);
}
.book-panel__chips[_ngcontent-ng-c2199762631] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
.book-panel__chip[_ngcontent-ng-c2199762631] {
  padding: 0.26rem 0.64rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--theme-line) 78%, var(--theme-link) 22%);
  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);
  color: var(--theme-link);
  font-size: 0.79rem;
}
.book-panel__chapter-list[_ngcontent-ng-c2199762631] {
  margin: 0;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.8rem;
}
.book-panel__chapter-item[_ngcontent-ng-c2199762631]   h4[_ngcontent-ng-c2199762631] {
  margin: 0;
  color: var(--theme-ink);
  line-height: 1.42;
  font-size: 0.98rem;
}
.book-panel__chapter-link[_ngcontent-ng-c2199762631] {
  color: var(--theme-link);
  text-decoration: none;
}
.book-panel__chapter-link[_ngcontent-ng-c2199762631]:hover {
  text-decoration: underline;
}
.book-panel__chapter-pages[_ngcontent-ng-c2199762631], 
.book-panel__chapter-authors[_ngcontent-ng-c2199762631] {
  margin-top: 0.2rem;
  color: var(--theme-muted);
  font-size: 0.84rem;
}
@media (max-width: 600px) {
  .book-panel__drawer[_ngcontent-ng-c2199762631] {
    width: 100vw;
  }
  .book-panel__close[_ngcontent-ng-c2199762631] {
    left: auto;
    right: 0.75rem;
    top: 0.75rem;
    position: fixed;
  }
  .book-panel__content[_ngcontent-ng-c2199762631] {
    padding: 1.2rem 1rem 2rem;
  }
  .book-panel__details[_ngcontent-ng-c2199762631] {
    margin-top: 1.4rem;
    gap: 0.85rem;
  }
}
/*# sourceMappingURL=/book-panel.component.css.map */</style></head>
<body class="theme-master"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend","change"],["error","blur"]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c3802201851="" ngh="5" ng-server-context="ssg"><nav _ngcontent-ng-c3802201851="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c3802201851="" class="container"><a _ngcontent-ng-c3802201851="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c3802201851="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c3802201851="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c3802201851="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c3802201851="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c3802201851="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c3802201851="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c3802201851="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c3802201851="" class="dropdown-menu"><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas/avaliation" class="dropdown-item" href="/revistas/avaliation" jsaction="click:;">Estratificação</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c3802201851="" class="nav-item"><a _ngcontent-ng-c3802201851="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c3802201851="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c3802201851="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c3802201851="" class="dropdown-menu"><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/pq" class="dropdown-item" href="/pq" jsaction="click:;">Bolsistas PQ do CNPq</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/statistics" class="dropdown-item" href="/statistics" jsaction="click:;">Estatísticas da base</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indices de Assuntos</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indices de Autores</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c3802201851=""><a _ngcontent-ng-c3802201851="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c3802201851="" class="d-flex align-items-center gap-2"><div _ngcontent-ng-c3802201851="" class="accessibility-launcher"><button _ngcontent-ng-c3802201851="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c3802201851="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c3802201851="" class="language-picker"><button _ngcontent-ng-c3802201851="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c3802201851="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c3802201851="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c3802201851="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c3802201851=""></router-outlet><app-livros-page _nghost-ng-c2740596230="" ngh="0"><app-banner-livros _ngcontent-ng-c2740596230="" _nghost-ng-c2100221580="" ngh="0"><div _ngcontent-ng-c2100221580="" class="image-div"><img _ngcontent-ng-c2100221580="" alt="Brapci Livros" width="300" height="100" loading="lazy" decoding="async" class="logo" src="/assets/img/logo_brapci_livros.png" jsaction="error:;"></div></app-banner-livros><section _ngcontent-ng-c2740596230="" aria-labelledby="livros-title" class="livros-wrap py-4"><div _ngcontent-ng-c2740596230="" class="container livros-shell"><app-breadcrumbs _ngcontent-ng-c2740596230="" _nghost-ng-c3912997418="" ngh="1"><nav _ngcontent-ng-c3912997418="" aria-label="Breadcrumb" class="bc-wrap"><ol _ngcontent-ng-c3912997418="" class="breadcrumb mb-1"><li _ngcontent-ng-c3912997418="" class="breadcrumb-item"><!--container--><a _ngcontent-ng-c3912997418="" href="/" jsaction="click:;">Inicio</a><!--container--></li><li _ngcontent-ng-c3912997418="" class="breadcrumb-item active" aria-current="page"><span _ngcontent-ng-c3912997418="">Livros</span><!--container--><!--container--></li><!--container--></ol></nav></app-breadcrumbs><app-book-carousel _ngcontent-ng-c2740596230="" _nghost-ng-c2051018456="" ngh="3"><section _ngcontent-ng-c2051018456="" aria-labelledby="book-carousel-title" class="book-carousel"><div _ngcontent-ng-c2051018456="" class="container"><div _ngcontent-ng-c2051018456="" class="row"><div _ngcontent-ng-c2051018456="" class="col-sm-12 book-carousel__headline"><h2 _ngcontent-ng-c2051018456="" id="book-carousel-title" class="mb-0">Novidades</h2></div></div></div><!--container--><!--container--><div _ngcontent-ng-c2051018456="" class="book-carousel__catalog container"><div _ngcontent-ng-c2051018456="" class="book-carousel__viewport"><div _ngcontent-ng-c2051018456="" class="book-carousel__slider" style="transform: translateX(-0px);"><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item in-view" aria-label="A perspectiva da araucária: Leilah Santiago Bufrem e as interseções críticas na Ciência da Informação" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/45/94/23/image.png" alt="A perspectiva da araucária: Leilah Santiago Bufrem e as interseções críticas na Ciência da Informação"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">A perspectiva da araucária: Leilah Santiago Bufrem e as interseções críticas na Ciência da Informação</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item right" aria-label="A mediação dos saberes em perspectiva: v colóquio científico internacional da rede mussi" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/38/image.png" alt="A mediação dos saberes em perspectiva: v colóquio científico internacional da rede mussi"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">A mediação dos saberes em perspectiva: v colóquio científico internacional da rede mussi</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Comunicação científica aberta" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/32/image.png" alt="Comunicação científica aberta"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Comunicação científica aberta</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Filosofia e história da Ciência da Informação: travessias especulativas e praxiológicas" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/27/image.png" alt="Filosofia e história da Ciência da Informação: travessias especulativas e praxiológicas"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Filosofia e história da Ciência da Informação: travessias especulativas e praxiológicas</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Ciência da Informação: crítica epistemológica e historiográfica" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/24/image.png" alt="Ciência da Informação: crítica epistemológica e historiográfica"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Ciência da Informação: crítica epistemológica e historiográfica</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Ciência da Informação: sociedade, crítica e inovação" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/20/image.png" alt="Ciência da Informação: sociedade, crítica e inovação"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Ciência da Informação: sociedade, crítica e inovação</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Ecologia, infomação e inovação: 15 anos de pesquisa" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/17/image.png" alt="Ecologia, infomação e inovação: 15 anos de pesquisa"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Ecologia, infomação e inovação: 15 anos de pesquisa</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Comunicação científica em rede" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/13/image.png" alt="Comunicação científica em rede"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Comunicação científica em rede</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Competência crítica em informação: teoria, consciência e práxis" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/09/image.png" alt="Competência crítica em informação: teoria, consciência e práxis"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Competência crítica em informação: teoria, consciência e práxis</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Os múltiplos cenários da informação tecnológica no Brasil no século XXI" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/97/03/image.png" alt="Os múltiplos cenários da informação tecnológica no Brasil no século XXI"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Os múltiplos cenários da informação tecnológica no Brasil no século XXI</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Hipátia: modelo de preservação para repositórios arquivísticos digitais confiáveis" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/84/image.png" alt="Hipátia: modelo de preservação para repositórios arquivísticos digitais confiáveis"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Hipátia: modelo de preservação para repositórios arquivísticos digitais confiáveis</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Vocabulário técnico da organização inteligente na era digital" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/78/image.png" alt="Vocabulário técnico da organização inteligente na era digital"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Vocabulário técnico da organização inteligente na era digital</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="História e memória da organização do conhecimento no Brasil: percursos e releituras" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/75/image.png" alt="História e memória da organização do conhecimento no Brasil: percursos e releituras"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">História e memória da organização do conhecimento no Brasil: percursos e releituras</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Cultura, conhecimento e mediação de saberes em saúde: diálogos da informação e da educação popular" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/70/image.png" alt="Cultura, conhecimento e mediação de saberes em saúde: diálogos da informação e da educação popular"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Cultura, conhecimento e mediação de saberes em saúde: diálogos da informação e da educação popular</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Contribuições francesas para a institucionalização da arquivologia brasileira" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/65/image.png" alt="Contribuições francesas para a institucionalização da arquivologia brasileira"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Contribuições francesas para a institucionalização da arquivologia brasileira</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Yves jeanneret: trivalité et médiations de la culture: v journées scientifiques internationales du réseau mussi" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/61/image.png" alt="Yves jeanneret: trivalité et médiations de la culture: v journées scientifiques internationales du réseau mussi"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Yves jeanneret: trivalité et médiations de la culture: v journées scientifiques internationales du réseau mussi</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Comunicación visual de la información: qué y cómo podemos narrar con datos" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/57/image.png" alt="Comunicación visual de la información: qué y cómo podemos narrar con datos"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Comunicación visual de la información: qué y cómo podemos narrar con datos</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Informação e memória: perspectivas em movimento" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/53/image.png" alt="Informação e memória: perspectivas em movimento"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Informação e memória: perspectivas em movimento</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Teorias críticas em organização do conhecimento" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/49/image.png" alt="Teorias críticas em organização do conhecimento"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Teorias críticas em organização do conhecimento</span></button><button _ngcontent-ng-c2051018456="" type="button" class="book-carousel__item far-right" aria-label="Princípios fair aplicados à gestão de dados de pesquisa" jsaction="click:;"><img _ngcontent-ng-c2051018456="" width="150" height="220" loading="lazy" decoding="async" class="book-carousel__cover" src="https://cip.brapci.inf.br/_repository/00/44/96/45/image.png" alt="Princípios fair aplicados à gestão de dados de pesquisa"><span _ngcontent-ng-c2051018456="" class="book-carousel__book-title">Princípios fair aplicados à gestão de dados de pesquisa</span></button><!--container--></div></div><button _ngcontent-ng-c2051018456="" type="button" aria-label="Livro anterior" class="book-carousel__scroll-btn left" jsaction="click:;"> ◀ </button><button _ngcontent-ng-c2051018456="" type="button" aria-label="Proximo livro" class="book-carousel__scroll-btn right" jsaction="click:;"> ▶ </button><!--container--></div><!--container--></section><app-book-panel _ngcontent-ng-c2051018456="" _nghost-ng-c2199762631="" ngh="2"><div _ngcontent-ng-c2199762631="" aria-hidden="true" class="book-panel__backdrop" jsaction="click:;"></div><!--container--><aside _ngcontent-ng-c2199762631="" role="dialog" aria-modal="true" class="book-panel__drawer" aria-label="Detalhes do livro"><!--container--></aside></app-book-panel></app-book-carousel><div _ngcontent-ng-c2740596230="" class="row g-3 align-items-stretch livros-search-row"><div _ngcontent-ng-c2740596230="" class="col-sm-8 col-lg-9 col-12"><app-search-book _ngcontent-ng-c2740596230="" _nghost-ng-c1490403949="" ngh="4"><section _ngcontent-ng-c1490403949="" aria-labelledby="search-book-title" class="search-book"><form _ngcontent-ng-c1490403949="" novalidate="" class="search-book__form ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c1490403949="" class="container mt-1 search-book__frame"><div _ngcontent-ng-c1490403949="" class="row"><div _ngcontent-ng-c1490403949="" class="col-sm-12"><h2 _ngcontent-ng-c1490403949="" id="search-book-title" class="text-center mb-4"> Busca de Trabalhos - Livros <sup _ngcontent-ng-c1490403949=""><i _ngcontent-ng-c1490403949="">beta</i></sup></h2></div><div _ngcontent-ng-c1490403949="" class="mb-3 col-sm-12 col-12"><label _ngcontent-ng-c1490403949="" for="term" class="form-label">Palavras-chave:</label><input _ngcontent-ng-c1490403949="" id="term" type="text" formcontrolname="term" class="form-control ng-untouched ng-pristine ng-invalid" placeholder="Digite os termos de busca" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c1490403949="" class="mb-3 col-sm-3 col-6"><label _ngcontent-ng-c1490403949="" for="collection" class="form-label small">Tipo de Trabalho:</label><select _ngcontent-ng-c1490403949="" id="collection" formcontrolname="collection" class="form-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c1490403949="" value="">Selecione o Tipo</option><option _ngcontent-ng-c1490403949="" value="BK">Livro</option><option _ngcontent-ng-c1490403949="" value="BC">Capitulo</option></select></div><div _ngcontent-ng-c1490403949="" class="mb-3 col-sm-3 col-6"></div><div _ngcontent-ng-c1490403949="" class="mb-3 col-sm-2 col-6"><label _ngcontent-ng-c1490403949="" for="year_start" class="form-label small">Ano inicial:</label><br _ngcontent-ng-c1490403949=""><select _ngcontent-ng-c1490403949="" id="year_start" formcontrolname="year_start" class="search-book__year-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c1490403949="" value="1960">1960</option><option _ngcontent-ng-c1490403949="" value="1961">1961</option><option _ngcontent-ng-c1490403949="" value="1962">1962</option><option _ngcontent-ng-c1490403949="" value="1963">1963</option><option _ngcontent-ng-c1490403949="" value="1964">1964</option><option _ngcontent-ng-c1490403949="" value="1965">1965</option><option _ngcontent-ng-c1490403949="" value="1966">1966</option><option _ngcontent-ng-c1490403949="" value="1967">1967</option><option _ngcontent-ng-c1490403949="" value="1968">1968</option><option _ngcontent-ng-c1490403949="" value="1969">1969</option><option _ngcontent-ng-c1490403949="" value="1970">1970</option><option _ngcontent-ng-c1490403949="" value="1971">1971</option><option _ngcontent-ng-c1490403949="" value="1972">1972</option><option _ngcontent-ng-c1490403949="" value="1973">1973</option><option _ngcontent-ng-c1490403949="" value="1974">1974</option><option _ngcontent-ng-c1490403949="" value="1975">1975</option><option _ngcontent-ng-c1490403949="" value="1976">1976</option><option _ngcontent-ng-c1490403949="" value="1977">1977</option><option _ngcontent-ng-c1490403949="" value="1978">1978</option><option _ngcontent-ng-c1490403949="" value="1979">1979</option><option _ngcontent-ng-c1490403949="" value="1980">1980</option><option _ngcontent-ng-c1490403949="" value="1981">1981</option><option _ngcontent-ng-c1490403949="" value="1982">1982</option><option _ngcontent-ng-c1490403949="" value="1983">1983</option><option _ngcontent-ng-c1490403949="" value="1984">1984</option><option _ngcontent-ng-c1490403949="" value="1985">1985</option><option _ngcontent-ng-c1490403949="" value="1986">1986</option><option _ngcontent-ng-c1490403949="" value="1987">1987</option><option _ngcontent-ng-c1490403949="" value="1988">1988</option><option _ngcontent-ng-c1490403949="" value="1989">1989</option><option _ngcontent-ng-c1490403949="" value="1990">1990</option><option _ngcontent-ng-c1490403949="" value="1991">1991</option><option _ngcontent-ng-c1490403949="" value="1992">1992</option><option _ngcontent-ng-c1490403949="" value="1993">1993</option><option _ngcontent-ng-c1490403949="" value="1994">1994</option><option _ngcontent-ng-c1490403949="" value="1995">1995</option><option _ngcontent-ng-c1490403949="" value="1996">1996</option><option _ngcontent-ng-c1490403949="" value="1997">1997</option><option _ngcontent-ng-c1490403949="" value="1998">1998</option><option _ngcontent-ng-c1490403949="" value="1999">1999</option><option _ngcontent-ng-c1490403949="" value="2000">2000</option><option _ngcontent-ng-c1490403949="" value="2001">2001</option><option _ngcontent-ng-c1490403949="" value="2002">2002</option><option _ngcontent-ng-c1490403949="" value="2003">2003</option><option _ngcontent-ng-c1490403949="" value="2004">2004</option><option _ngcontent-ng-c1490403949="" value="2005">2005</option><option _ngcontent-ng-c1490403949="" value="2006">2006</option><option _ngcontent-ng-c1490403949="" value="2007">2007</option><option _ngcontent-ng-c1490403949="" value="2008">2008</option><option _ngcontent-ng-c1490403949="" value="2009">2009</option><option _ngcontent-ng-c1490403949="" value="2010">2010</option><option _ngcontent-ng-c1490403949="" value="2011">2011</option><option _ngcontent-ng-c1490403949="" value="2012">2012</option><option _ngcontent-ng-c1490403949="" value="2013">2013</option><option _ngcontent-ng-c1490403949="" value="2014">2014</option><option _ngcontent-ng-c1490403949="" value="2015">2015</option><option _ngcontent-ng-c1490403949="" value="2016">2016</option><option _ngcontent-ng-c1490403949="" value="2017">2017</option><option _ngcontent-ng-c1490403949="" value="2018">2018</option><option _ngcontent-ng-c1490403949="" value="2019">2019</option><option _ngcontent-ng-c1490403949="" value="2020">2020</option><option _ngcontent-ng-c1490403949="" value="2021">2021</option><option _ngcontent-ng-c1490403949="" value="2022">2022</option><option _ngcontent-ng-c1490403949="" value="2023">2023</option><option _ngcontent-ng-c1490403949="" value="2024">2024</option><option _ngcontent-ng-c1490403949="" value="2025">2025</option><option _ngcontent-ng-c1490403949="" value="2026">2026</option><option _ngcontent-ng-c1490403949="" value="2027">2027</option><!--container--></select></div><div _ngcontent-ng-c1490403949="" class="mb-3 col-sm-2 col-6"><label _ngcontent-ng-c1490403949="" for="year_end" class="form-label small">Ano final:</label><br _ngcontent-ng-c1490403949=""><select _ngcontent-ng-c1490403949="" id="year_end" formcontrolname="year_end" class="search-book__year-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c1490403949="" value="2027">2027</option><option _ngcontent-ng-c1490403949="" value="2026">2026</option><option _ngcontent-ng-c1490403949="" value="2025">2025</option><option _ngcontent-ng-c1490403949="" value="2024">2024</option><option _ngcontent-ng-c1490403949="" value="2023">2023</option><option _ngcontent-ng-c1490403949="" value="2022">2022</option><option _ngcontent-ng-c1490403949="" value="2021">2021</option><option _ngcontent-ng-c1490403949="" value="2020">2020</option><option _ngcontent-ng-c1490403949="" value="2019">2019</option><option _ngcontent-ng-c1490403949="" value="2018">2018</option><option _ngcontent-ng-c1490403949="" value="2017">2017</option><option _ngcontent-ng-c1490403949="" value="2016">2016</option><option _ngcontent-ng-c1490403949="" value="2015">2015</option><option _ngcontent-ng-c1490403949="" value="2014">2014</option><option _ngcontent-ng-c1490403949="" value="2013">2013</option><option _ngcontent-ng-c1490403949="" value="2012">2012</option><option _ngcontent-ng-c1490403949="" value="2011">2011</option><option _ngcontent-ng-c1490403949="" value="2010">2010</option><option _ngcontent-ng-c1490403949="" value="2009">2009</option><option _ngcontent-ng-c1490403949="" value="2008">2008</option><option _ngcontent-ng-c1490403949="" value="2007">2007</option><option _ngcontent-ng-c1490403949="" value="2006">2006</option><option _ngcontent-ng-c1490403949="" value="2005">2005</option><option _ngcontent-ng-c1490403949="" value="2004">2004</option><option _ngcontent-ng-c1490403949="" value="2003">2003</option><option _ngcontent-ng-c1490403949="" value="2002">2002</option><option _ngcontent-ng-c1490403949="" value="2001">2001</option><option _ngcontent-ng-c1490403949="" value="2000">2000</option><option _ngcontent-ng-c1490403949="" value="1999">1999</option><option _ngcontent-ng-c1490403949="" value="1998">1998</option><option _ngcontent-ng-c1490403949="" value="1997">1997</option><option _ngcontent-ng-c1490403949="" value="1996">1996</option><option _ngcontent-ng-c1490403949="" value="1995">1995</option><option _ngcontent-ng-c1490403949="" value="1994">1994</option><option _ngcontent-ng-c1490403949="" value="1993">1993</option><option _ngcontent-ng-c1490403949="" value="1992">1992</option><option _ngcontent-ng-c1490403949="" value="1991">1991</option><option _ngcontent-ng-c1490403949="" value="1990">1990</option><option _ngcontent-ng-c1490403949="" value="1989">1989</option><option _ngcontent-ng-c1490403949="" value="1988">1988</option><option _ngcontent-ng-c1490403949="" value="1987">1987</option><option _ngcontent-ng-c1490403949="" value="1986">1986</option><option _ngcontent-ng-c1490403949="" value="1985">1985</option><option _ngcontent-ng-c1490403949="" value="1984">1984</option><option _ngcontent-ng-c1490403949="" value="1983">1983</option><option _ngcontent-ng-c1490403949="" value="1982">1982</option><option _ngcontent-ng-c1490403949="" value="1981">1981</option><option _ngcontent-ng-c1490403949="" value="1980">1980</option><option _ngcontent-ng-c1490403949="" value="1979">1979</option><option _ngcontent-ng-c1490403949="" value="1978">1978</option><option _ngcontent-ng-c1490403949="" value="1977">1977</option><option _ngcontent-ng-c1490403949="" value="1976">1976</option><option _ngcontent-ng-c1490403949="" value="1975">1975</option><option _ngcontent-ng-c1490403949="" value="1974">1974</option><option _ngcontent-ng-c1490403949="" value="1973">1973</option><option _ngcontent-ng-c1490403949="" value="1972">1972</option><option _ngcontent-ng-c1490403949="" value="1971">1971</option><option _ngcontent-ng-c1490403949="" value="1970">1970</option><option _ngcontent-ng-c1490403949="" value="1969">1969</option><option _ngcontent-ng-c1490403949="" value="1968">1968</option><option _ngcontent-ng-c1490403949="" value="1967">1967</option><option _ngcontent-ng-c1490403949="" value="1966">1966</option><option _ngcontent-ng-c1490403949="" value="1965">1965</option><option _ngcontent-ng-c1490403949="" value="1964">1964</option><option _ngcontent-ng-c1490403949="" value="1963">1963</option><option _ngcontent-ng-c1490403949="" value="1962">1962</option><option _ngcontent-ng-c1490403949="" value="1961">1961</option><option _ngcontent-ng-c1490403949="" value="1960">1960</option><!--container--></select></div><div _ngcontent-ng-c1490403949="" class="text-center col-sm-2 col-12 pt-4"><button _ngcontent-ng-c1490403949="" type="submit" class="btn btn-primary w-100"> Buscar </button></div></div></div></form><!--container--></section></app-search-book></div><div _ngcontent-ng-c2740596230="" class="col-sm-4 col-lg-3 col-12"><app-book-btn-submit _ngcontent-ng-c2740596230="" _nghost-ng-c3139248834="" ngh="0"><a _ngcontent-ng-c3139248834="" href="/livros/submit" aria-label="Submeter livro na Brapci Livros" class="submit-btn"><span _ngcontent-ng-c3139248834="" class="submit-btn-kicker">Brapci Livros</span><span _ngcontent-ng-c3139248834="" class="submit-btn-title">INDEXE SEU LIVRO</span><span _ngcontent-ng-c3139248834="" class="submit-btn-copy"> E autor de uma obra? <br _ngcontent-ng-c3139248834=""><br _ngcontent-ng-c3139248834=""> Clique aqui para submeter seu livro. <br _ngcontent-ng-c3139248834=""><br _ngcontent-ng-c3139248834=""> Envie agora! Nao tem custo. </span><span _ngcontent-ng-c3139248834="" class="submit-btn-cta">Submeter obra</span></a></app-book-btn-submit></div></div><div _ngcontent-ng-c2740596230="" class="livros-grid"><article _ngcontent-ng-c2740596230="" class="livros-card"><h2 _ngcontent-ng-c2740596230="">Catalogo em construcao</h2><p _ngcontent-ng-c2740596230=""> A rota /livros ja esta ativa e pronta para receber listagens, filtros e integracoes com a API da plataforma. </p></article><article _ngcontent-ng-c2740596230="" class="livros-card livros-card-accent"><h2 _ngcontent-ng-c2740596230="">Proximo passo sugerido</h2><p _ngcontent-ng-c2740596230=""> Quando a fonte de dados estiver definida, esta pagina pode evoluir para uma vitrine com busca, categorias e destaques editoriais. </p><a _ngcontent-ng-c2740596230="" routerlink="/" class="livros-link" href="/" jsaction="click:;">Voltar para a pagina inicial</a></article></div></div></section></app-livros-page><!--container--><footer _ngcontent-ng-c3802201851="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c3802201851="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c3802201851="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c3802201851="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c3802201851="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c3802201851="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c3802201851="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c3802201851="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c3802201851="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c3802201851="" class="text-muted">BRAPCI | brapci.inf.br</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-JRX6NWBE.js"><link rel="modulepreload" href="chunk-Y3JQWDW7.js"><link rel="modulepreload" href="chunk-FC3OORFJ.js"><link rel="modulepreload" href="chunk-IYQHJWZ2.js"><link rel="modulepreload" href="chunk-IZYDDLZH.js"><link rel="modulepreload" href="chunk-3F47I5MF.js"><link rel="modulepreload" href="chunk-Y3FCEOIS.js"><link rel="modulepreload" href="chunk-UKK5MWW6.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-KD6RSOZ3.js">
<link rel="modulepreload" href="chunk-OX6OLN2L.js">
<link rel="modulepreload" href="chunk-RFP7KIPN.js">
<link rel="modulepreload" href="chunk-VVA3KYIX.js">


<script id="ng-state" type="application/json">{"2701900808":{"b":{"news":[{"ID":"459423","data":{"hasTitle":"A perspectiva da araucária: Leilah Santiago Bufrem e as interseções críticas na Ciência da Informação","hasCover":"https://cip.brapci.inf.br/_repository/00/45/94/23/image.png","hasAuthor":"Patrícia Pedri"}},{"ID":"449738","data":{"hasTitle":"A mediação dos saberes em perspectiva: v colóquio científico internacional da rede mussi","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/38/image.png","hasAuthor":"Regina Marteleto"}},{"ID":"449732","data":{"hasTitle":"Comunicação científica aberta","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/32/image.png","hasAuthor":"Eloísa Príncipe"}},{"ID":"449727","data":{"hasTitle":"Filosofia e história da Ciência da Informação: travessias especulativas e praxiológicas","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/27/image.png","hasAuthor":"Maria nélida gonzález de gómez"}},{"ID":"449724","data":{"hasTitle":"Ciência da Informação: crítica epistemológica e historiográfica","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/24/image.png","hasAuthor":"Gustavo Saldanha"}},{"ID":"449720","data":{"hasTitle":"Ciência da Informação: sociedade, crítica e inovação","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/20/image.png","hasAuthor":"Gustavo Saldanha"}},{"ID":"449717","data":{"hasTitle":"Ecologia, infomação e inovação: 15 anos de pesquisa","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/17/image.png","hasAuthor":"Liz-Rejane Issberner"}},{"ID":"449713","data":{"hasTitle":"Comunicação científica em rede","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/13/image.png","hasAuthor":"Isa maria freire"}},{"ID":"449709","data":{"hasTitle":"Competência crítica em informação: teoria, consciência e práxis","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/09/image.png","hasAuthor":"Arthur Coelho Bezerra"}},{"ID":"449703","data":{"hasTitle":"Os múltiplos cenários da informação tecnológica no Brasil no século XXI","hasCover":"https://cip.brapci.inf.br/_repository/00/44/97/03/image.png","hasAuthor":"Lillian Maria Araujo de Rezende Alvares"}},{"ID":"449684","data":{"hasTitle":"Hipátia: modelo de preservação para repositórios arquivísticos digitais confiáveis","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/84/image.png","hasAuthor":"Miguel Márdero Arellano"}},{"ID":"449678","data":{"hasTitle":"Vocabulário técnico da organização inteligente na era digital","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/78/image.png","hasAuthor":"Kira Tarapanoff"}},{"ID":"449675","data":{"hasTitle":"História e memória da organização do conhecimento no Brasil: percursos e releituras","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/75/image.png","hasAuthor":"Gustavo Saldanha"}},{"ID":"449670","data":{"hasTitle":"Cultura, conhecimento e mediação de saberes em saúde: diálogos da informação e da educação popular","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/70/image.png","hasAuthor":"Regina Maria Martelo"}},{"ID":"449665","data":{"hasTitle":"Contribuições francesas para a institucionalização da arquivologia brasileira","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/65/image.png","hasAuthor":"Angélica Alves da Cunha Marques"}},{"ID":"449661","data":{"hasTitle":"Yves jeanneret: trivalité et médiations de la culture: v journées scientifiques internationales du réseau mussi","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/61/image.png","hasAuthor":"Regina Marteleto"}},{"ID":"449657","data":{"hasTitle":"Comunicación visual de la información: qué y cómo podemos narrar con datos","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/57/image.png","hasAuthor":"Mario Pérez-Montoro"}},{"ID":"449653","data":{"hasTitle":"Informação e memória: perspectivas em movimento","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/53/image.png","hasAuthor":"Ricardo Medeiros Pimenta"}},{"ID":"449649","data":{"hasTitle":"Teorias críticas em organização do conhecimento","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/49/image.png","hasAuthor":"Gustavo Saldanha"}},{"ID":"449645","data":{"hasTitle":"Princípios fair aplicados à gestão de dados de pesquisa","hasCover":"https://cip.brapci.inf.br/_repository/00/44/96/45/image.png","hasAuthor":"Luana farias sales"}}]},"h":{},"s":200,"st":"OK","u":"https://cip.brapci.inf.br/api/book/vitrine","rt":"json"},"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4175925773":{"b":{"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar seleção","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos","export":"Exportar","export_format":"Exportar em {{format}}","panel_title":"Painel (Análise)","panel_link":"Ir para o painel","fetch_error":"Erro ao buscar dados da API.","download_error":"Não foi possível obter o link de download.","export_error":"Erro ao exportar os dados da cesta."}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","selectAllPublications":"Selecionar todas as publicações","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"citationsGranted":{"label":"Citacoes concedidas"},"variants":{"label":"Variações do nome"},"researcherProfileTitle":"Acessar dados do pesquisador","scholarship":{"label":"Bolsista","modality":"Modalidade / nivel","institution":"Instituicao","period":"Periodo","history":"Historico"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"actions":{"selectAll":"Selecionar tudo"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"avaliation":{"title":"Estratificação das Revistas","menuItem":"Estratificação"},"pq":{"title":"Bolsistas Produtividade PQ do CNPq","menuItem":"Bolsistas PQ do CNPq"},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar perfil externo"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API","databaseStatistics":"Estatísticas da base"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET.","card3Title":"Análise de Rede","card3Text":"Explore os indicadores de redes de colaboração entre pesquisadores."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Secao","title":"Secoes"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citacoes"},"data":{"title":"Dados","copy":"Copiar","citationSummary":{"title":"Resumo das citações","typology":"Tipologia","sources":"Quantidade de fontes (%)","halfLife":"Meia-vida da literatura","withDoi":"Referências com DOI","general":"Geral","untyped":"Sem tipo","years":"anos","note":"Meia-vida calculada pela mediana da idade das fontes em relação ao ano do artigo.","empty":"Não há fontes disponíveis para calcular o resumo."},"tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referencias","citations":"Citacoes"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"select":"Selecionar","selected":"Selecionado","downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"},"home":{"news":{"kicker":"Novidades","title":"Principais atualizações","loading":"Carregando atualizações...","error":"Não foi possível carregar as atualizações no momento.","empty":"Nenhuma atualização encontrada.","view":"ver"},"statistics":{"kicker":"Indicadores","title":"Estatísticas da base","loading":"Carregando estatísticas...","error":"Não foi possível carregar as estatísticas no momento.","empty":"Nenhuma estatística encontrada.","updatedAt":"Atualizado em {{date}}","items":{"articles":"Total de artigos","books":"Total de livros","bookChapters":"Total de capítulos de livros","proceedings":"Total de trabalhos em eventos","authors":"Total de autores","institutions":"Total de instituições","sources":"Total de fontes","files":"Total de arquivos","indexedEvents":"Eventos indexados","indexedBrazilianJournals":"Revistas brasileiras indexadas","indexedForeignJournals":"Revistas estrangeiras indexadas","historicBrazilianJournals":"Revistas brasileiras históricas"}},"events":{"title":"Eventos da área","loading":"Carregando eventos...","error":"Não foi possível carregar os eventos no momento.","empty":"Nenhum evento encontrado.","openDetails":"Abrir detalhes do evento {{title}}","logoAlt":"Logo do evento {{title}}","logoFallback":"EVENTO","date":"Data","moreDetails":"Mais detalhes"}},"painelAnalysis":{"productionIndicators":"Indicadores de produção","connectionIndicators":"Indicadores de ligação","productionByYear":"Produção por Ano","exportCsv":"Exportar CSV","item":"Item","value":"Valor","noData":"Sem dados nesta seção.","sections":{"authors":"Autores","subjects":"Assuntos","session":"Sessão","sessionSub":"Subsessão","publications":"Publicações","types":"Tipos"},"network":{"title":"Rede de coautoria","author":"Autor","legendTitle":"Legenda dos indicadores","metrics":{"nodes":"Nós","edges":"Arestas","density":"Densidade","modularity":"Modularidade"},"metricDescriptions":{"nodes":"Quantidade de autores representados na rede.","edges":"Quantidade de conexões de coautoria entre os autores.","density":"Proporção entre as conexões existentes e todas as conexões possíveis na rede.","modularity":"Mede a intensidade com que a rede se divide em comunidades de autores mais conectados entre si."},"indicators":{"degree":"Grau","weightedDegree":"Grau ponderado","betweenness":"Intermediação","closeness":"Proximidade","eigenvector":"Autovetor","community":"Comunidade"},"descriptions":{"degree":"Número de autores diferentes com quem o autor publicou.","weightedDegree":"Total de vínculos de coautoria, considerando as publicações repetidas entre autores.","betweenness":"Indica quanto o autor atua como ponte nos caminhos entre outros autores da rede.","closeness":"Mede quão próximo o autor está de todos os demais autores da rede.","eigenvector":"Representa a influência do autor com base na importância de suas conexões.","community":"Identifica o grupo de autores mais conectados entre si ao qual o autor pertence."}}},"adminEdit":{"kicker":"Administração","title":"Editar conteúdo","record":"Registro #{{id}}","back":"Voltar ao registro","unauthorized":"É necessário entrar com uma conta de administrador para editar este registro.","loading":"Carregando registro...","content":"Conteúdo JSON","save":"Salvar alterações","saving":"Salvando...","success":"Alterações salvas com sucesso.","errors":{"load":"Não foi possível carregar o registro.","invalidJson":"O conteúdo informado não é um JSON válido.","save":"Não foi possível salvar as alterações.","upload":"Não foi possível enviar o arquivo.","delete":"Não foi possível excluir o dado."},"mainData":"Dados principais","add":"Adicionar valor","remove":"Remover valor","noValues":"Nenhum valor informado.","groups":{"CONCEPT":"Identificação","GENDER":"Gênero","AFFILIATIO":"Afiliação","DATE":"Datas","ID":"Identificadores","IMAGE":"Imagem"},"fields":{"n_name":"Nome ou valor","n_lang":"Idioma","c_class":"Classe","cc_status":"Status","ID":"ID relacionado"},"properties":{"hasGender":"Gênero","hasAffiliation":"Afiliação institucional","hasBorn":"Data de nascimento","hasDead":"Data de falecimento","hasOpenAlexID":"OpenAlex ID","hasGoogleScholar":"Google Scholar","hasISNI":"ISNI","hasEmail":"E-mail","hasOrcID":"ORCID","hasLattes":"Currículo Lattes","hasExitID":"Identificador externo","hasLinkedin":"LinkedIn","hasPhoto":"Fotografia"},"unnamed":"Sem nome","edit":"Editar","delete":"Excluir","modalTitle":"Editor de dado RDF","addTitle":"Adicionar dado","editTitle":"Modificar conteúdo","close":"Fechar","selectImage":"Selecione uma imagem","selectFile":"Selecione um arquivo","currentFile":"Arquivo atual","cancel":"Cancelar","confirm":"Confirmar submissão","uploading":"Enviando...","deleteTitle":"Excluir dado","deleteConfirm":"Confirma a exclusão de {{name}}?","deleting":"Excluindo..."}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{},{"t":{"3":"t6"},"c":{"3":[{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[],"2":[{"i":"t8","r":1}]}},{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[{"i":"t7","r":1}],"2":[]}}]}},{"t":{"0":"t20","2":"t21"},"c":{"0":[{"i":"t20","r":1}],"2":[]}},{"t":{"6":"t15","7":"t16","8":"t17"},"c":{"6":[],"7":[],"8":[{"i":"t17","r":1,"t":{"4":"t18","5":"t19"},"c":{"4":[{"i":"t18","r":1,"x":20}],"5":[{"i":"t19","r":2}]}}]}},{"t":{"39":"t22","47":"t23","52":"t24"},"c":{"39":[{"i":"t22","r":1,"x":68}],"47":[{"i":"t23","r":1,"x":68}],"52":[]}},{"t":{"42":"t0","102":"t1","103":"t2","109":"t3","110":"t4","111":"t5","119":"t14"},"c":{"42":[],"102":[],"103":[],"109":[],"110":[{"i":"t4","r":1}],"111":[],"112":[{"i":"c2740596230","r":1}],"119":[]}}]}</script></body></html>`;