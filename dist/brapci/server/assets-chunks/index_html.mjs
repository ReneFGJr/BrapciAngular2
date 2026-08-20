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

.supersmall[_ngcontent-ng-c845305433], 
a.supersmall[_ngcontent-ng-c845305433], 
a.link.supersmall[_ngcontent-ng-c845305433] {
  font-size: 0.75rem !important;
  text-decoration: none !important;
  line-height: 85%;
}
a.link.supersmall[_ngcontent-ng-c845305433]:hover, 
a.supersmall[_ngcontent-ng-c845305433]:hover, 
.supersmall[_ngcontent-ng-c845305433]:hover {
  text-decoration: underline !important;
}
[_nghost-ng-c845305433] {
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
a.link.supersmall[_ngcontent-ng-c845305433] {
  font-size: 0.75rem;
  color: green;
  text-decoration: none;
}
.navbar[_ngcontent-ng-c845305433] {
  background-color: #483d8b !important;
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar[_ngcontent-ng-c845305433]   *[_ngcontent-ng-c845305433] {
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar-brand[_ngcontent-ng-c845305433], 
.nav-item[_ngcontent-ng-c845305433], 
.btn-link[_ngcontent-ng-c845305433], 
.dropdown-item[_ngcontent-ng-c845305433] {
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif !important;
  font-size: 1.1rem;
}
.nav-link[_ngcontent-ng-c845305433] {
  font-family:
    "Barlow Condensed",
    "Times New Roman",
    sans-serif !important;
  font-size: 1.2rem;
}
.hero[_ngcontent-ng-c845305433] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c845305433] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.eyebrow[_ngcontent-ng-c845305433] {
  font-size: 0.78rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c845305433] {
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0.4rem 0;
}
.navbar-logo[_ngcontent-ng-c845305433] {
  display: block;
  height: auto;
  max-height: 40px;
  width: clamp(120px, 16vw, 170px);
}
.nav-login-link[_ngcontent-ng-c845305433], 
.nav-user-chip[_ngcontent-ng-c845305433] {
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
.nav-login-link[_ngcontent-ng-c845305433]:hover, 
.nav-login-link[_ngcontent-ng-c845305433]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.nav-login-link[_ngcontent-ng-c845305433]   svg[_ngcontent-ng-c845305433], 
.nav-user-chip[_ngcontent-ng-c845305433]   svg[_ngcontent-ng-c845305433] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.nav-user-chip[_ngcontent-ng-c845305433] {
  background: rgba(255, 255, 255, 0.12);
}
.docs-dropdown[_ngcontent-ng-c845305433]   .btn-link[_ngcontent-ng-c845305433] {
  border: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
}
.docs-dropdown[_ngcontent-ng-c845305433]   .btn-link[_ngcontent-ng-c845305433]:hover, 
.docs-dropdown[_ngcontent-ng-c845305433]   .btn-link[_ngcontent-ng-c845305433]:focus-visible, 
.docs-dropdown.show[_ngcontent-ng-c845305433]   .btn-link[_ngcontent-ng-c845305433] {
  color: #fff;
}
.language-picker[_ngcontent-ng-c845305433] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.language-flag-btn[_ngcontent-ng-c845305433] {
  background: transparent;
  border: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
}
.language-flag[_ngcontent-ng-c845305433] {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.language-select[_ngcontent-ng-c845305433] {
  font-size: 0.92rem;
  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;
  line-height: 1.1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
}
.language-select[_ngcontent-ng-c845305433]   option[_ngcontent-ng-c845305433] {
  color: #000;
  background-color: #fff;
}
.docs-dropdown[_ngcontent-ng-c845305433]   .dropdown-menu[_ngcontent-ng-c845305433] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  min-width: 13rem;
}
.docs-dropdown[_ngcontent-ng-c845305433]   .dropdown-item[_ngcontent-ng-c845305433] {
  color: var(--theme-ink);
}
.docs-dropdown[_ngcontent-ng-c845305433]   .dropdown-item[_ngcontent-ng-c845305433]:hover, 
.docs-dropdown[_ngcontent-ng-c845305433]   .dropdown-item[_ngcontent-ng-c845305433]:focus-visible {
  background: var(--theme-sand);
  color: var(--theme-ink);
}
.theme-switch[_ngcontent-ng-c845305433]   .form-check-input[_ngcontent-ng-c845305433] {
  cursor: pointer;
}
.accessibility-launcher[_ngcontent-ng-c845305433] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.accessibility-toggle[_ngcontent-ng-c845305433] {
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
.accessibility-toggle[_ngcontent-ng-c845305433]:hover, 
.accessibility-toggle[_ngcontent-ng-c845305433]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-1px);
}
.accessibility-toggle[_ngcontent-ng-c845305433]   svg[_ngcontent-ng-c845305433] {
  fill: currentColor;
  height: 1.4rem;
  width: 1.4rem;
}
@media (max-width: 991.98px) {
  .nav-login-link[_ngcontent-ng-c845305433], 
   .nav-user-chip[_ngcontent-ng-c845305433] {
    margin: 0.45rem 0;
  }
  .docs-dropdown[_ngcontent-ng-c845305433]   .dropdown-menu[_ngcontent-ng-c845305433] {
    position: static;
  }
}
.layout[_ngcontent-ng-c845305433] {
  flex: 1;
}
.card[_ngcontent-ng-c845305433] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.footer[_ngcontent-ng-c845305433] {
  background: var(--theme-footer);
}
.footer-social[_ngcontent-ng-c845305433] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-link[_ngcontent-ng-c845305433] {
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
.footer-social-link[_ngcontent-ng-c845305433]   svg[_ngcontent-ng-c845305433] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.footer-social-link[_ngcontent-ng-c845305433]:hover, 
.footer-social-link[_ngcontent-ng-c845305433]:focus-visible {
  background-color: var(--theme-sand);
  border-color: var(--theme-hint);
  color: var(--theme-ink);
}
.footer-meta[_ngcontent-ng-c845305433] {
  display: grid;
  gap: 0.1rem;
}
.footer-session[_ngcontent-ng-c845305433] {
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}
.full[_ngcontent-ng-c845305433] {
  width: 100%;
}
.small[_ngcontent-ng-c845305433] {
  font-size: 0.75rem;
}
/*# sourceMappingURL=/app.css.map */</style><meta name="keywords" content="Brapci, Ciencia da Informacao, SEO, Angular 20, API"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json" id="brapci-jsonld">{"@context":"https://schema.org","@type":"WebSite","name":"Brapci","inLanguage":"pt-br","url":"https://cip.brapci.inf.br","potentialAction":{"@type":"SearchAction","target":"https://cip.brapci.inf.br/api?q={search_term_string}","query-input":"required name=search_term_string"}}</script><style ng-app-id="ng">

.hero[_ngcontent-ng-c1702890461] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c1702890461] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.layout[_ngcontent-ng-c1702890461] {
  flex: 1;
}
/*# sourceMappingURL=/home-search.component.css.map */</style><style ng-app-id="ng">

.search-form[_ngcontent-ng-c2415007335] {
  display: grid;
  gap: 0.6rem;
}
.search-title[_ngcontent-ng-c2415007335] {
  color: var(--theme-title);
  text-align: left;
  line-height: 10px;
  size: 2rem;
}
.hint[_ngcontent-ng-c2415007335] {
  color: var(--theme-hint);
}
.search-actions[_ngcontent-ng-c2415007335] {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
}
.search-action-link[_ngcontent-ng-c2415007335] {
  font-weight: 400;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.search-actions-separator[_ngcontent-ng-c2415007335] {
  font-weight: 600;
  color: var(--theme-muted);
}
.search-filters[_ngcontent-ng-c2415007335] {
  border: 1px solid var(--theme-line);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: var(--theme-card-bg);
  color: var(--theme-ink);
}
.search-filters-form[_ngcontent-ng-c2415007335] {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.search-filter-col-year[_ngcontent-ng-c2415007335] {
  min-width: 100px;
}
.search-filter-col-wide[_ngcontent-ng-c2415007335] {
  min-width: 220px;
}
.search-filter-title[_ngcontent-ng-c2415007335] {
  font-weight: 600;
}
.search-results-grid[_ngcontent-ng-c2415007335] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  width: 100%;
}
.search-results-main[_ngcontent-ng-c2415007335] {
  min-width: 0;
  width: 100%;
}
.search-json-sidebar[_ngcontent-ng-c2415007335] {
  position: sticky;
  top: 1rem;
  align-self: start;
}
.search-json-toolbar[_ngcontent-ng-c2415007335] {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
}
.search-json-tab[_ngcontent-ng-c2415007335] {
  border: 1px solid var(--theme-line);
  background: var(--theme-card-bg);
  color: var(--theme-ink);
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-size: 0.78rem;
  cursor: pointer;
}
.search-json-tab.active[_ngcontent-ng-c2415007335] {
  background: var(--bs-primary);
  border-color: var(--bs-primary);
  color: #fff;
}
.search-json-card[_ngcontent-ng-c2415007335] {
  border: 1px solid var(--theme-line);
  border-radius: 12px;
  background: var(--theme-card-bg);
  padding: 1rem;
}
.search-json-card-help[_ngcontent-ng-c2415007335] {
  color: var(--theme-muted);
}
.search-json-header[_ngcontent-ng-c2415007335] {
  margin-bottom: 0.75rem;
}
.search-json-title[_ngcontent-ng-c2415007335] {
  margin: 0;
  font-size: 0.98rem;
  color: var(--theme-title);
}
.search-json-subtitle[_ngcontent-ng-c2415007335] {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--theme-muted);
}
.search-json-pre[_ngcontent-ng-c2415007335] {
  margin: 0;
  max-height: 60vh;
  overflow: auto;
  padding: 0.75rem;
  border-radius: 10px;
  background: color-mix(in srgb, var(--theme-card-bg) 70%, var(--theme-line));
  color: var(--theme-ink);
  font-size: 0.74rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}
.search-json-empty[_ngcontent-ng-c2415007335] {
  margin: 0;
  font-size: 0.85rem;
  color: var(--theme-muted);
}
.idle-layout[_ngcontent-ng-c2415007335] {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.idle-col[_ngcontent-ng-c2415007335] {
  border: 1px solid var(--theme-line);
  border-radius: 12px;
  background: var(--theme-card-bg);
  padding: 1rem;
  min-height: 100%;
}
.idle-title[_ngcontent-ng-c2415007335] {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--theme-title);
}
.idle-text[_ngcontent-ng-c2415007335] {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: var(--theme-muted);
}
.idle-links[_ngcontent-ng-c2415007335] {
  display: grid;
  gap: 0.5rem;
}
.idle-link[_ngcontent-ng-c2415007335] {
  color: var(--bs-link-color);
  text-decoration: underline;
  cursor: pointer;
}
.idle-col-events[_ngcontent-ng-c2415007335] {
  padding: 0;
  border: none;
  background: transparent;
}
.idle-col-news[_ngcontent-ng-c2415007335] {
  padding: 0;
  border: none;
  background: transparent;
}
.idle-col-stats[_ngcontent-ng-c2415007335] {
  padding: 0;
  border: none;
  background: transparent;
}
@media (max-width: 991.98px) {
  .idle-layout[_ngcontent-ng-c2415007335] {
    grid-template-columns: 1fr;
  }
  .search-results-grid[_ngcontent-ng-c2415007335] {
    grid-template-columns: 1fr;
  }
  .search-json-sidebar[_ngcontent-ng-c2415007335] {
    position: static;
  }
}
/*# sourceMappingURL=/search-articles.component.css.map */</style><style ng-app-id="ng">

.area-news[_ngcontent-ng-c668438204] {
  border: 1px solid var(--theme-line);
  border-radius: 1rem;
  background: var(--theme-card-bg);
  box-shadow: 0 14px 40px rgba(16, 37, 66, 0.08);
  padding: 0.85rem;
  height: 100%;
}
.area-news-header[_ngcontent-ng-c668438204] {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
}
.area-news-header__text[_ngcontent-ng-c668438204] {
  display: grid;
  gap: 0.15rem;
}
.area-news-kicker[_ngcontent-ng-c668438204] {
  color: var(--theme-muted);
  font-size: 0.68rem;
  letter-spacing: 0.12rem;
  margin: 0;
  text-transform: uppercase;
}
.area-news-title[_ngcontent-ng-c668438204] {
  color: var(--theme-ink);
  font-size: 0.95rem;
  margin: 0;
}
.area-news-list[_ngcontent-ng-c668438204] {
  display: grid;
  gap: 0.55rem;
}
.area-news-block[_ngcontent-ng-c668438204] {
  border: 1px solid var(--theme-line);
  border-radius: 0.95rem;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.55),
      rgba(255, 255, 255, 0.25));
  overflow: hidden;
}
.area-news-block__header[_ngcontent-ng-c668438204] {
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid var(--theme-line);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.45rem 0.6rem;
}
.area-news-version[_ngcontent-ng-c668438204] {
  align-items: center;
  background: rgba(16, 37, 66, 0.08);
  border-radius: 999px;
  color: var(--theme-ink);
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.18rem 0.45rem;
  text-transform: uppercase;
}
.area-news-count[_ngcontent-ng-c668438204] {
  color: var(--theme-muted);
  font-size: 0.7rem;
  margin: 0;
  white-space: nowrap;
}
.area-news-content[_ngcontent-ng-c668438204] {
  padding: 0.45rem 0.6rem 0.6rem;
}
.area-news-items[_ngcontent-ng-c668438204] {
  display: grid;
  gap: 0.35rem;
  margin: 0;
  padding-left: 0;
}
.area-news-item[_ngcontent-ng-c668438204] {
  background: transparent;
  border: 0;
  border-radius: 0;
  color: var(--theme-ink);
  display: block;
  gap: 0.2rem;
  list-style: none;
  padding: 0.05rem 0;
  font-size: 0.75rem;
  text-decoration: none;
}
.area-news-item__link[_ngcontent-ng-c668438204] {
  color: inherit;
  display: grid;
  gap: 0.2rem;
  text-decoration: none;
}
.area-news-item__link[_ngcontent-ng-c668438204]:hover, 
.area-news-item__link[_ngcontent-ng-c668438204]:focus-visible {
  text-decoration: none;
}
.area-news-item__title[_ngcontent-ng-c668438204] {
  font-size: 0.85rem;
  font-weight: 600;
}
.area-news-item__description[_ngcontent-ng-c668438204] {
  color: var(--theme-muted);
  font-size: 0.78rem;
}
.area-news-item__action[_ngcontent-ng-c668438204] {
  align-self: start;
  color: var(--theme-link);
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 600;
  margin-top: 0.1rem;
  text-decoration: none;
}
.area-news-item__action[_ngcontent-ng-c668438204]:hover, 
.area-news-item__action[_ngcontent-ng-c668438204]:focus-visible {
  color: var(--theme-hint);
  text-decoration: underline;
}
.area-news-state[_ngcontent-ng-c668438204] {
  color: var(--theme-muted);
  font-size: 0.95rem;
  margin: 0;
}
.area-news-state-error[_ngcontent-ng-c668438204] {
  color: #a02b2b;
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news[_ngcontent-ng-c668438204] {
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.05),
      transparent 34%),
    linear-gradient(
      180deg,
      rgba(16, 23, 39, 0.92),
      rgba(13, 19, 31, 0.88));
  border-color: rgba(48, 68, 95, 0.88);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-header__text[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-header__text[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-title[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-title[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-state[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-state[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-version[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-version[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__title[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__title[_ngcontent-ng-c668438204] {
  color: var(--theme-ink);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-kicker[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-kicker[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-count[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-count[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__description[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__description[_ngcontent-ng-c668438204] {
  color: var(--theme-muted);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-block[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-block[_ngcontent-ng-c668438204] {
  background: rgba(18, 32, 51, 0.94);
  border-color: rgba(48, 68, 95, 0.88);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-block__header[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-block__header[_ngcontent-ng-c668438204] {
  background: rgba(18, 32, 51, 0.84);
  border-bottom-color: rgba(48, 68, 95, 0.88);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-version[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-version[_ngcontent-ng-c668438204] {
  background:
    linear-gradient(
      180deg,
      rgba(33, 47, 70, 0.96),
      rgba(24, 35, 52, 0.94));
  border: 1px solid rgba(100, 132, 173, 0.35);
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204] {
  border-bottom: 1px solid rgba(100, 132, 173, 0.16);
  padding: 0.25rem 0;
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204]:last-child, body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item[_ngcontent-ng-c668438204]:last-child {
  border-bottom: 0;
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204], 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204], body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204] {
  color: #9cc6ff;
}
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204]:hover, body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204]:hover, 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204]:focus-visible, body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__action[_ngcontent-ng-c668438204]:focus-visible, 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204]:hover, body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204]:hover, 
body.theme-master.theme-dark[_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204]:focus-visible, body.theme-master.theme-dark   [_nghost-ng-c668438204]   .area-news-item__link[_ngcontent-ng-c668438204]:focus-visible {
  color: #d0e4ff;
}
/*# sourceMappingURL=/area-news.component.css.map */</style><style ng-app-id="ng">

.area-statistics[_ngcontent-ng-c4076269799] {
  border: 1px solid var(--theme-line);
  border-radius: 1rem;
  background: var(--theme-card-bg);
  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);
  padding: 1.1rem;
  height: 100%;
}
.area-statistics-header[_ngcontent-ng-c4076269799] {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}
.area-statistics-header__text[_ngcontent-ng-c4076269799] {
  display: grid;
  gap: 0.15rem;
}
.area-statistics-kicker[_ngcontent-ng-c4076269799] {
  color: var(--theme-muted);
  font-size: 0.68rem;
  letter-spacing: 0.11rem;
  margin: 0;
  text-transform: uppercase;
}
.area-statistics-title[_ngcontent-ng-c4076269799] {
  font-size: 1.03rem;
  font-weight: 600;
  margin: 0;
  color: var(--theme-ink);
}
.area-statistics-summary[_ngcontent-ng-c4076269799] {
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.34);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
  display: grid;
  gap: 0.1rem;
  min-width: 7.75rem;
  padding: 0.6rem 0.75rem;
  text-align: right;
}
.area-statistics-summary__label[_ngcontent-ng-c4076269799] {
  color: var(--theme-muted);
  font-size: 0.74rem;
}
.area-statistics-summary__value[_ngcontent-ng-c4076269799] {
  color: var(--theme-muted);
  font-size: 0.82rem;
  font-weight: 600;
}
.area-statistics-list[_ngcontent-ng-c4076269799] {
  list-style: none;
  margin: 0;
  padding: 0.15rem 0 0;
  display: grid;
  gap: 0.3rem;
}
.area-statistics-item[_ngcontent-ng-c4076269799] {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0.15rem 0;
}
.area-statistics-name[_ngcontent-ng-c4076269799] {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--theme-ink);
}
.area-statistics-total[_ngcontent-ng-c4076269799] {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 0;
  color: var(--theme-muted);
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  min-width: auto;
  padding: 0;
}
.area-statistics-state[_ngcontent-ng-c4076269799] {
  margin: 0;
  font-size: 0.95rem;
  color: var(--theme-muted);
}
.area-statistics-state-error[_ngcontent-ng-c4076269799] {
  color: #a02b2b;
}
.area-statistics-update[_ngcontent-ng-c4076269799] {
  display: block;
  margin-top: 0.75rem;
  color: var(--theme-muted);
  font-size: 0.78rem;
  letter-spacing: 0.01em;
}
/*# sourceMappingURL=/area-statistics.component.css.map */</style><style ng-app-id="ng">

.area-events[_ngcontent-ng-c3126730500] {
  border: 1px solid var(--theme-line);
  border-radius: 12px;
  background: var(--theme-card-bg);
  padding: 1rem;
  height: 100%;
}
.area-events-header[_ngcontent-ng-c3126730500] {
  margin-bottom: 0.75rem;
}
.area-events-title[_ngcontent-ng-c3126730500] {
  font-size: 1rem;
  margin: 0;
  color: var(--theme-title);
}
.area-events-list[_ngcontent-ng-c3126730500] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}
.area-events-item[_ngcontent-ng-c3126730500] {
  border-top: 1px dashed var(--theme-line);
  padding-top: 0.75rem;
  cursor: pointer;
  transition: transform 120ms ease, background-color 120ms ease;
}
.area-events-item[_ngcontent-ng-c3126730500]:hover {
  background: color-mix(in srgb, var(--theme-card-bg) 82%, var(--theme-line));
  transform: translateY(-1px);
}
.area-events-item[_ngcontent-ng-c3126730500]:focus-visible {
  outline: 2px solid var(--bs-link-color);
  outline-offset: 2px;
}
.area-events-logo-wrap[_ngcontent-ng-c3126730500] {
  margin-bottom: 0.5rem;
}
.area-events-logo[_ngcontent-ng-c3126730500] {
  width: 100%;
  max-height: 92px;
  object-fit: contain;
  border: 1px solid var(--theme-line);
  border-radius: 8px;
  background: #fff;
  padding: 0.35rem;
}
.area-events-logo-fallback[_ngcontent-ng-c3126730500] {
  height: 72px;
  border: 1px dashed var(--theme-line);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.area-events-item[_ngcontent-ng-c3126730500]:first-child {
  border-top: none;
  padding-top: 0;
}
.area-events-item-title[_ngcontent-ng-c3126730500] {
  margin: 0;
  font-size: 0.95rem;
  color: var(--theme-ink);
}
.area-events-item-meta[_ngcontent-ng-c3126730500] {
  margin: 0.15rem 0;
  font-size: 0.8rem;
  color: var(--theme-muted);
}
.area-events-link[_ngcontent-ng-c3126730500] {
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  text-decoration: underline;
}
.area-events-state[_ngcontent-ng-c3126730500] {
  margin: 0;
  font-size: 0.9rem;
  color: var(--theme-muted);
}
.area-events-state-error[_ngcontent-ng-c3126730500] {
  color: #a02b2b;
}
/*# sourceMappingURL=/area-events.component.css.map */</style></head>
<body class="theme-master"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend"],["blur"]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c845305433="" ngh="5" ng-server-context="ssg"><nav _ngcontent-ng-c845305433="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c845305433="" class="container"><a _ngcontent-ng-c845305433="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c845305433="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c845305433="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c845305433="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c845305433="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c845305433="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c845305433="" class="nav-item"><a _ngcontent-ng-c845305433="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c845305433="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c845305433="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c845305433="" class="dropdown-menu"><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c845305433="" class="nav-item"><a _ngcontent-ng-c845305433="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c845305433="" class="nav-item"><a _ngcontent-ng-c845305433="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c845305433="" class="nav-item"><a _ngcontent-ng-c845305433="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c845305433="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c845305433="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c845305433="" class="dropdown-menu"><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" href="#" class="dropdown-item" jsaction="click:;">Indices de Assuntos</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" href="#" class="dropdown-item" jsaction="click:;">Indices de Autores</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c845305433=""><a _ngcontent-ng-c845305433="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c845305433="" class="d-flex align-items-center gap-2"><div _ngcontent-ng-c845305433="" class="accessibility-launcher"><button _ngcontent-ng-c845305433="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c845305433="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c845305433="" class="language-picker"><button _ngcontent-ng-c845305433="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c845305433="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c845305433="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c845305433="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c845305433="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c845305433="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c845305433=""></router-outlet><app-home-page ngh="4"><app-home-search _nghost-ng-c1702890461="" ngh="4"><header _ngcontent-ng-c1702890461="" role="banner" class="hero pt-3"><div _ngcontent-ng-c1702890461="" class="container text-center"><img _ngcontent-ng-c1702890461="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" width="200" height="200" loading="lazy" decoding="async" class="hero-logo text-center"></div></header><main _ngcontent-ng-c1702890461="" itemscope="" itemtype="https://schema.org/WebPage" class="layout py-4"><div _ngcontent-ng-c1702890461="" class="container"><div _ngcontent-ng-c1702890461="" class="row g-4"><app-search-articles _ngcontent-ng-c1702890461="" _nghost-ng-c2415007335="" ngh="3"><article _ngcontent-ng-c2415007335="" id="search" aria-labelledby="search-title" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Dataset" class="col-12"><div _ngcontent-ng-c2415007335="" class="cardx h-100x shadow-sm border-0"><div _ngcontent-ng-c2415007335="" class="card-body"><h2 _ngcontent-ng-c2415007335="" id="search-title" class="search-title">O que está procurando?</h2><form _ngcontent-ng-c2415007335="" novalidate="" class="search-form mb-0 ng-untouched ng-pristine ng-valid" jsaction="submit:;"><label _ngcontent-ng-c2415007335="" for="query" class="form-label mb-0">Digite um termo</label><div _ngcontent-ng-c2415007335="" class="input-group mt-0"><textarea _ngcontent-ng-c2415007335="" id="query" name="query" rows="3" class="form-control border border-secondary ng-untouched ng-pristine ng-valid" placeholder="Digite um termo" jsaction="input:;blur:;compositionstart:;compositionend:;">"Indexação Automática" OR "Indexação Manual"</textarea><button _ngcontent-ng-c2415007335="" type="submit" class="btn btn-primary"><span _ngcontent-ng-c2415007335="">Buscar</span><!--container--><!--container--></button></div></form><div _ngcontent-ng-c2415007335="" class="search-actions"><span _ngcontent-ng-c2415007335="" type="button" class="link search-action-link" jsaction="click:;"> Filtros da pesquisa </span><!--container--> | <!--container--><!--container--></div><!--container--><!--container--></div></div><div _ngcontent-ng-c2415007335="" class="idle-layout mt-5"><section _ngcontent-ng-c2415007335="" class="idle-col idle-col-news"><app-area-news _nghost-ng-c668438204="" ngh="0"><section _ngcontent-ng-c668438204="" aria-labelledby="area-news-title" class="area-news"><header _ngcontent-ng-c668438204="" class="area-news-header"><div _ngcontent-ng-c668438204="" class="area-news-header__text"><p _ngcontent-ng-c668438204="" class="area-news-kicker">Novidades</p><h3 _ngcontent-ng-c668438204="" id="area-news-title" class="area-news-title">Principais atualizações</h3></div></header><!--container--><p _ngcontent-ng-c668438204="" class="area-news-state area-news-state-error">Nao foi possivel carregar as atualizacoes no momento.</p><!--container--><!--container--><!--container--></section></app-area-news><!--container--></section><section _ngcontent-ng-c2415007335="" class="idle-col idle-col-stats"><app-area-statistics _nghost-ng-c4076269799="" ngh="1"><section _ngcontent-ng-c4076269799="" aria-labelledby="area-statistics-title" class="area-statistics"><header _ngcontent-ng-c4076269799="" class="area-statistics-header"><div _ngcontent-ng-c4076269799="" class="area-statistics-header__text"><p _ngcontent-ng-c4076269799="" class="area-statistics-kicker">Indicadores</p><h3 _ngcontent-ng-c4076269799="" id="area-statistics-title" class="area-statistics-title">Estatísticas da base</h3></div></header><!--container--><p _ngcontent-ng-c4076269799="" class="area-statistics-state area-statistics-state-error">Nao foi possivel carregar as estatisticas no momento.</p><!--container--><!--container--><!--container--><!--container--></section></app-area-statistics><!--container--></section><section _ngcontent-ng-c2415007335="" class="idle-col idle-col-events"><app-area-events _nghost-ng-c3126730500="" ngh="2"><section _ngcontent-ng-c3126730500="" aria-labelledby="area-events-title" class="area-events"><header _ngcontent-ng-c3126730500="" class="area-events-header"><h3 _ngcontent-ng-c3126730500="" id="area-events-title" class="area-events-title">Eventos da area</h3></header><!--container--><p _ngcontent-ng-c3126730500="" class="area-events-state area-events-state-error">Nao foi possivel carregar os eventos no momento.</p><!--container--><!--container--><!--container--></section></app-area-events><!--container--></section></div><!--container--></article></app-search-articles></div></div></main></app-home-search></app-home-page><!--container--><footer _ngcontent-ng-c845305433="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c845305433="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c845305433="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c845305433="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c845305433="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c845305433="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c845305433="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c845305433="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c845305433="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c845305433="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c845305433="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c845305433="" class="text-muted">BRAPCI | brapci.inf.br</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-NXK6FIJG.js"><link rel="modulepreload" href="chunk-YP4CUC5U.js"><link rel="modulepreload" href="chunk-UQTTNLOX.js"><link rel="modulepreload" href="chunk-MMYNVZIM.js"><link rel="modulepreload" href="chunk-USCFRWX6.js"><link rel="modulepreload" href="chunk-U6CLDCGY.js"><link rel="modulepreload" href="chunk-Q2GW23SR.js"><link rel="modulepreload" href="chunk-3OV72XIM.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-F6E4JBJG.js">
<link rel="modulepreload" href="chunk-ZPUTVDRH.js">


<script id="ng-state" type="application/json">{"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4175925773":{"b":{"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar selecao","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos"}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"citationsGranted":{"label":"Citacoes concedidas"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar perfil externo"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Secao","title":"Secoes"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citacoes"},"data":{"title":"Dados","copy":"Copiar","tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referencias","citations":"Citacoes"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{"t":{"7":"t15","8":"t16","9":"t17","10":"t18"},"c":{"7":[],"8":[{"i":"t16","r":1}],"9":[],"10":[]}},{"t":{"7":"t20","8":"t21","9":"t22","10":"t23","11":"t24"},"c":{"7":[],"8":[{"i":"t21","r":1}],"9":[],"10":[],"11":[]}},{"t":{"4":"t26","5":"t27","6":"t28","7":"t29"},"c":{"4":[],"5":[{"i":"t27","r":1}],"6":[],"7":[]}},{"t":{"14":"t6","15":"t7","20":"t8","22":"t9","23":"t10","24":"t11","25":"t12","26":"t13"},"c":{"14":[{"i":"t6","r":1}],"15":[],"20":[],"22":[],"23":[],"24":[],"25":[],"26":[{"i":"t13","r":1,"t":{"2":"t14","4":"t19","6":"t25"},"c":{"2":[{"i":"c668438204","r":1}],"4":[{"i":"c4076269799","r":1}],"6":[{"i":"c3126730500","r":1}]}}]}},{},{"t":{"38":"t0","90":"t1","91":"t2","97":"t3","98":"t4","99":"t5","107":"t30"},"c":{"38":[],"90":[],"91":[],"97":[],"98":[{"i":"t4","r":1}],"99":[],"100":[{"i":"c2248299605","r":1}],"107":[]}}]}</script></body></html>`;