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

.supersmall[_ngcontent-ng-c72857277], 
a.supersmall[_ngcontent-ng-c72857277], 
a.link.supersmall[_ngcontent-ng-c72857277] {
  font-size: 0.75rem !important;
  text-decoration: none !important;
  line-height: 85%;
}
a.link.supersmall[_ngcontent-ng-c72857277]:hover, 
a.supersmall[_ngcontent-ng-c72857277]:hover, 
.supersmall[_ngcontent-ng-c72857277]:hover {
  text-decoration: underline !important;
}
[_nghost-ng-c72857277] {
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
a.link.supersmall[_ngcontent-ng-c72857277] {
  font-size: 0.75rem;
  color: green;
  text-decoration: none;
}
.navbar[_ngcontent-ng-c72857277] {
  background-color: #483d8b !important;
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar[_ngcontent-ng-c72857277]   *[_ngcontent-ng-c72857277] {
  font-family: "Barlow Condensed", sans-serif !important;
}
.navbar-brand[_ngcontent-ng-c72857277], 
.nav-item[_ngcontent-ng-c72857277], 
.btn-link[_ngcontent-ng-c72857277], 
.dropdown-item[_ngcontent-ng-c72857277] {
  font-family:
    "Raleway",
    "Trebuchet MS",
    sans-serif !important;
  font-size: 1.1rem;
}
.nav-link[_ngcontent-ng-c72857277] {
  font-family:
    "Barlow Condensed",
    "Times New Roman",
    sans-serif !important;
  font-size: 1.2rem;
}
.hero[_ngcontent-ng-c72857277] {
  border-bottom: 1px solid var(--theme-line);
}
.hero-logo[_ngcontent-ng-c72857277] {
  display: inline-block;
  height: auto;
  max-width: min(520px, 82vw);
  width: 100%;
}
.eyebrow[_ngcontent-ng-c72857277] {
  font-size: 0.78rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
}
h1[_ngcontent-ng-c72857277] {
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0.4rem 0;
}
.navbar-logo[_ngcontent-ng-c72857277] {
  display: block;
  height: auto;
  max-height: 40px;
  width: clamp(120px, 16vw, 170px);
}
.nav-login-link[_ngcontent-ng-c72857277], 
.nav-user-chip[_ngcontent-ng-c72857277] {
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
.nav-login-link[_ngcontent-ng-c72857277]:hover, 
.nav-login-link[_ngcontent-ng-c72857277]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.nav-login-link[_ngcontent-ng-c72857277]   svg[_ngcontent-ng-c72857277], 
.nav-user-chip[_ngcontent-ng-c72857277]   svg[_ngcontent-ng-c72857277] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.nav-user-chip[_ngcontent-ng-c72857277] {
  background: rgba(255, 255, 255, 0.12);
}
.docs-dropdown[_ngcontent-ng-c72857277]   .btn-link[_ngcontent-ng-c72857277] {
  border: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
}
.docs-dropdown[_ngcontent-ng-c72857277]   .btn-link[_ngcontent-ng-c72857277]:hover, 
.docs-dropdown[_ngcontent-ng-c72857277]   .btn-link[_ngcontent-ng-c72857277]:focus-visible, 
.docs-dropdown.show[_ngcontent-ng-c72857277]   .btn-link[_ngcontent-ng-c72857277] {
  color: #fff;
}
.language-picker[_ngcontent-ng-c72857277] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.language-flag-btn[_ngcontent-ng-c72857277] {
  background: transparent;
  border: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
}
.language-flag[_ngcontent-ng-c72857277] {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.language-select[_ngcontent-ng-c72857277] {
  font-size: 0.92rem;
  padding: 0.08rem 1.2rem 0.08rem 0.35rem !important;
  line-height: 1.1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
}
.language-select[_ngcontent-ng-c72857277]   option[_ngcontent-ng-c72857277] {
  color: #000;
  background-color: #fff;
}
.docs-dropdown[_ngcontent-ng-c72857277]   .dropdown-menu[_ngcontent-ng-c72857277] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  min-width: 13rem;
}
.docs-dropdown[_ngcontent-ng-c72857277]   .dropdown-item[_ngcontent-ng-c72857277] {
  color: var(--theme-ink);
}
.docs-dropdown[_ngcontent-ng-c72857277]   .dropdown-item[_ngcontent-ng-c72857277]:hover, 
.docs-dropdown[_ngcontent-ng-c72857277]   .dropdown-item[_ngcontent-ng-c72857277]:focus-visible {
  background: var(--theme-sand);
  color: var(--theme-ink);
}
.theme-switch[_ngcontent-ng-c72857277]   .form-check-input[_ngcontent-ng-c72857277] {
  cursor: pointer;
}
.accessibility-launcher[_ngcontent-ng-c72857277] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.accessibility-toggle[_ngcontent-ng-c72857277] {
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
.accessibility-toggle[_ngcontent-ng-c72857277]:hover, 
.accessibility-toggle[_ngcontent-ng-c72857277]:focus-visible {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-1px);
}
.accessibility-toggle[_ngcontent-ng-c72857277]   svg[_ngcontent-ng-c72857277] {
  fill: currentColor;
  height: 1.4rem;
  width: 1.4rem;
}
@media (max-width: 991.98px) {
  .nav-login-link[_ngcontent-ng-c72857277], 
   .nav-user-chip[_ngcontent-ng-c72857277] {
    margin: 0.45rem 0;
  }
  .docs-dropdown[_ngcontent-ng-c72857277]   .dropdown-menu[_ngcontent-ng-c72857277] {
    position: static;
  }
}
.layout[_ngcontent-ng-c72857277] {
  flex: 1;
}
.card[_ngcontent-ng-c72857277] {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-line);
  border-radius: 0.9rem;
}
.footer[_ngcontent-ng-c72857277] {
  background: var(--theme-footer);
}
.footer-social[_ngcontent-ng-c72857277] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-link[_ngcontent-ng-c72857277] {
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
.footer-social-link[_ngcontent-ng-c72857277]   svg[_ngcontent-ng-c72857277] {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
.footer-social-link[_ngcontent-ng-c72857277]:hover, 
.footer-social-link[_ngcontent-ng-c72857277]:focus-visible {
  background-color: var(--theme-sand);
  border-color: var(--theme-hint);
  color: var(--theme-ink);
}
.footer-meta[_ngcontent-ng-c72857277] {
  display: grid;
  gap: 0.1rem;
}
.footer-session[_ngcontent-ng-c72857277] {
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}
.full[_ngcontent-ng-c72857277] {
  width: 100%;
}
.small[_ngcontent-ng-c72857277] {
  font-size: 0.75rem;
}
/*# sourceMappingURL=/app.css.map */</style><meta name="keywords" content="Brapci, Ciencia da Informacao, SEO, Angular 20, API"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json" id="brapci-jsonld">{"@context":"https://schema.org","@type":"WebSite","name":"Brapci","inLanguage":"pt-br","url":"https://cip.brapci.inf.br","potentialAction":{"@type":"SearchAction","target":"https://cip.brapci.inf.br/api?q={search_term_string}","query-input":"required name=search_term_string"}}</script><style ng-app-id="ng">

[_nghost-ng-c3634193745] {
  display: block;
}
.pq-page[_ngcontent-ng-c3634193745] {
  --pq-accent: #9a654d;
  --pq-accent-dark: #704330;
  --pq-accent-soft: #f4e8e1;
  --pq-green: #3b796b;
  color: var(--theme-ink);
  min-height: 70vh;
}
.pq-hero[_ngcontent-ng-c3634193745] {
  display: flex;
  min-height: 210px;
  margin: 1rem 0 1.5rem;
  padding: 2.25rem 3rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--pq-accent) 25%, var(--theme-line));
  border-radius: 1.25rem;
  background:
    radial-gradient(
      circle at 82% 20%,
      color-mix(in srgb, var(--pq-accent) 13%, transparent),
      transparent 34%),
    linear-gradient(
      125deg,
      var(--theme-card-bg),
      color-mix(in srgb, var(--theme-sand) 70%, transparent));
}
.pq-hero-copy[_ngcontent-ng-c3634193745] {
  max-width: 690px;
}
.eyebrow[_ngcontent-ng-c3634193745] {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--pq-accent);
  font-family: "Raleway", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.pq-hero[_ngcontent-ng-c3634193745]   h1[_ngcontent-ng-c3634193745] {
  margin: 0 0 0.75rem;
  font-family:
    "Bitter",
    Georgia,
    serif;
  font-size: clamp(1.9rem, 4vw, 3.25rem);
  line-height: 1.08;
}
.pq-hero[_ngcontent-ng-c3634193745]   p[_ngcontent-ng-c3634193745] {
  max-width: 620px;
  margin: 0;
  color: var(--theme-muted);
  font-size: 1.05rem;
}
.pq-logo[_ngcontent-ng-c3634193745] {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  mix-blend-mode: multiply;
}
.status-panel[_ngcontent-ng-c3634193745] {
  display: flex;
  min-height: 180px;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--theme-muted);
}
.pq-tabs[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 1.5rem;
  padding: 0.35rem;
  border: 1px solid var(--theme-line);
  border-radius: 0.85rem;
  background: var(--theme-card-bg);
}
.pq-tabs[_ngcontent-ng-c3634193745]   button[_ngcontent-ng-c3634193745] {
  display: flex;
  padding: 0.8rem 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 0.6rem;
  color: var(--theme-muted);
  background: transparent;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  transition: 0.2s ease;
}
.pq-tabs[_ngcontent-ng-c3634193745]   button[_ngcontent-ng-c3634193745]:hover {
  color: var(--theme-ink);
  background: color-mix(in srgb, var(--pq-accent) 7%, transparent);
}
.pq-tabs[_ngcontent-ng-c3634193745]   button.active[_ngcontent-ng-c3634193745] {
  color: #fff;
  background: var(--pq-accent-dark);
  box-shadow: 0 4px 12px rgba(55, 32, 22, 0.18);
}
.summary-grid[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
.metric-card[_ngcontent-ng-c3634193745], 
.panel[_ngcontent-ng-c3634193745], 
.region-card[_ngcontent-ng-c3634193745] {
  border: 1px solid var(--theme-line);
  background: var(--theme-card-bg);
  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);
}
.metric-card[_ngcontent-ng-c3634193745] {
  display: flex;
  padding: 1.35rem;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
}
.metric-card.metric-primary[_ngcontent-ng-c3634193745] {
  border-color: color-mix(in srgb, var(--pq-accent) 35%, var(--theme-line));
}
.metric-icon[_ngcontent-ng-c3634193745] {
  display: grid;
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  place-items: center;
  border-radius: 50%;
  color: var(--pq-accent-dark);
  background: var(--pq-accent-soft);
  font-size: 1.2rem;
}
.metric-card[_ngcontent-ng-c3634193745]   strong[_ngcontent-ng-c3634193745] {
  display: block;
  font-family: "Bitter", serif;
  font-size: 1.8rem;
  line-height: 1;
}
.metric-card[_ngcontent-ng-c3634193745]   div[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745] {
  display: block;
  margin-top: 0.35rem;
  color: var(--theme-muted);
  font-size: 0.88rem;
}
.content-grid[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.panel[_ngcontent-ng-c3634193745] {
  padding: 1.5rem;
  border-radius: 1rem;
}
.panel-heading[_ngcontent-ng-c3634193745], 
.section-heading[_ngcontent-ng-c3634193745] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.panel-heading[_ngcontent-ng-c3634193745] {
  margin-bottom: 1.25rem;
}
.panel-heading[_ngcontent-ng-c3634193745]   h2[_ngcontent-ng-c3634193745], 
.section-heading[_ngcontent-ng-c3634193745]   h2[_ngcontent-ng-c3634193745] {
  margin: 0;
  font-family: "Bitter", serif;
  font-size: 1.35rem;
}
.total-label[_ngcontent-ng-c3634193745], 
.result-count[_ngcontent-ng-c3634193745] {
  color: var(--theme-muted);
  font-size: 0.85rem;
  white-space: nowrap;
}
.level-list[_ngcontent-ng-c3634193745] {
  display: grid;
  gap: 0.9rem;
}
.level-row[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: 3.25rem 1fr 2rem;
  align-items: center;
  gap: 0.75rem;
}
.level-badge[_ngcontent-ng-c3634193745] {
  display: inline-flex;
  min-width: 2.2rem;
  padding: 0.28rem 0.55rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--pq-accent-dark);
  background: var(--pq-accent-soft);
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}
.level-progress[_ngcontent-ng-c3634193745], 
.bar-track[_ngcontent-ng-c3634193745], 
.region-share[_ngcontent-ng-c3634193745] {
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--theme-sand);
}
.level-progress[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745], 
.bar-track[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745], 
.region-share[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745] {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--pq-accent);
}
.text-action[_ngcontent-ng-c3634193745] {
  border: 0;
  color: var(--pq-accent);
  background: transparent;
  font-size: 0.85rem;
  font-weight: 600;
}
.ranking-list[_ngcontent-ng-c3634193745] {
  display: grid;
}
.ranking-row[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: 1.8rem 1fr auto;
  padding: 0.72rem 0;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--theme-line);
}
.ranking-row[_ngcontent-ng-c3634193745]:last-child {
  border-bottom: 0;
}
.ranking-row[_ngcontent-ng-c3634193745]    > span[_ngcontent-ng-c3634193745]:last-child {
  color: var(--theme-muted);
  font-size: 0.83rem;
}
.rank[_ngcontent-ng-c3634193745], 
.bar-rank[_ngcontent-ng-c3634193745] {
  color: var(--theme-muted);
  font-variant-numeric: tabular-nums;
}
.section-heading[_ngcontent-ng-c3634193745] {
  margin: 0.35rem 0 1rem;
}
.filters[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(180px, 240px);
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.search-field[_ngcontent-ng-c3634193745] {
  position: relative;
}
.search-field[_ngcontent-ng-c3634193745]   i[_ngcontent-ng-c3634193745] {
  position: absolute;
  top: 50%;
  left: 0.9rem;
  z-index: 1;
  color: var(--theme-muted);
  transform: translateY(-50%);
}
.search-field[_ngcontent-ng-c3634193745]   input[_ngcontent-ng-c3634193745] {
  padding-left: 2.4rem;
}
.scholar-table-wrap[_ngcontent-ng-c3634193745] {
  border: 1px solid var(--theme-line);
  border-radius: 1rem;
  background: var(--theme-card-bg);
}
.scholar-table[_ngcontent-ng-c3634193745] {
  --bs-table-color: var(--theme-ink);
  --bs-table-bg: transparent;
  --bs-table-striped-color: var(--theme-ink);
  --bs-table-hover-color: var(--theme-ink);
  margin: 0;
  color: var(--theme-ink);
}
.scholar-table[_ngcontent-ng-c3634193745]   th[_ngcontent-ng-c3634193745] {
  padding: 1rem;
  border-color: var(--theme-line);
  color: var(--theme-muted);
  background: color-mix(in srgb, var(--theme-sand) 65%, transparent);
  font-family: "Raleway", sans-serif;
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.scholar-table[_ngcontent-ng-c3634193745]   td[_ngcontent-ng-c3634193745] {
  padding: 0.9rem 1rem;
  border-color: var(--theme-line);
}
.profile-links[_ngcontent-ng-c3634193745] {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  white-space: nowrap;
}
.profile-links[_ngcontent-ng-c3634193745]   a[_ngcontent-ng-c3634193745] {
  color: var(--pq-accent);
}
.empty-state[_ngcontent-ng-c3634193745] {
  padding: 3rem !important;
  color: var(--theme-muted);
  text-align: center;
}
.bar-list[_ngcontent-ng-c3634193745] {
  padding: 0.4rem 1.4rem;
  border: 1px solid var(--theme-line);
  border-radius: 1rem;
  background: var(--theme-card-bg);
}
.bar-row[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: 2rem 1fr 2.5rem;
  padding: 1rem 0;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--theme-line);
}
.bar-row[_ngcontent-ng-c3634193745]:last-child {
  border-bottom: 0;
}
.bar-label[_ngcontent-ng-c3634193745] {
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.bar-label[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745] {
  color: var(--theme-muted);
  font-size: 0.78rem;
}
.bar-value[_ngcontent-ng-c3634193745] {
  text-align: right;
}
.region-grid[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.region-card[_ngcontent-ng-c3634193745] {
  padding: 1.35rem;
  border-radius: 1rem;
}
.region-top[_ngcontent-ng-c3634193745] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.region-pin[_ngcontent-ng-c3634193745] {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 50%;
  color: var(--pq-green);
  background: color-mix(in srgb, var(--pq-green) 12%, transparent);
}
.region-top[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745]:not(.region-pin), 
.region-top[_ngcontent-ng-c3634193745]   small[_ngcontent-ng-c3634193745] {
  display: block;
  color: var(--theme-muted);
}
.region-top[_ngcontent-ng-c3634193745]   strong[_ngcontent-ng-c3634193745] {
  margin-right: 0.35rem;
  font-family: "Bitter", serif;
  font-size: 1.8rem;
}
.region-share[_ngcontent-ng-c3634193745] {
  margin-top: 1rem;
}
.region-share[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745] {
  background: var(--pq-green);
}
.region-card[_ngcontent-ng-c3634193745]   p[_ngcontent-ng-c3634193745] {
  margin: 0.55rem 0 0;
  color: var(--theme-muted);
  font-size: 0.8rem;
  text-align: right;
}
.region-institutions[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.region-institutions[_ngcontent-ng-c3634193745]   p[_ngcontent-ng-c3634193745] {
  display: flex;
  margin: 0.55rem 0 0;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.region-institutions[_ngcontent-ng-c3634193745]   p[_ngcontent-ng-c3634193745]   span[_ngcontent-ng-c3634193745] {
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  color: var(--theme-muted);
  background: var(--theme-sand);
  font-size: 0.76rem;
}
.map-layout[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.75fr);
  gap: 1rem;
  align-items: start;
}
.map-panel[_ngcontent-ng-c3634193745], 
.state-ranking[_ngcontent-ng-c3634193745] {
  border: 1px solid var(--theme-line);
  border-radius: 1rem;
  background: var(--theme-card-bg);
  box-shadow: 0 8px 24px rgba(16, 37, 66, 0.05);
}
.map-panel[_ngcontent-ng-c3634193745] {
  --pq-map-color: var(--pq-accent);
  padding: 1rem 1.5rem;
}
.map-legend[_ngcontent-ng-c3634193745] {
  display: flex;
  padding: 0.75rem 0 0.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  color: var(--theme-muted);
  font-size: 0.76rem;
}
.legend-step[_ngcontent-ng-c3634193745] {
  width: 28px;
  height: 9px;
  border-radius: 999px;
}
.legend-step.level-1[_ngcontent-ng-c3634193745] {
  background: color-mix(in srgb, var(--pq-accent) 28%, var(--theme-sand));
}
.legend-step.level-2[_ngcontent-ng-c3634193745] {
  background: color-mix(in srgb, var(--pq-accent) 55%, var(--theme-sand));
}
.legend-step.level-3[_ngcontent-ng-c3634193745] {
  background: var(--pq-accent);
}
.state-ranking[_ngcontent-ng-c3634193745] {
  padding: 1.35rem;
}
.state-row[_ngcontent-ng-c3634193745] {
  display: grid;
  grid-template-columns: 1.5rem 2.5rem 1fr 2rem;
  padding: 0.68rem 0;
  align-items: center;
  gap: 0.55rem;
  border-bottom: 1px solid var(--theme-line);
}
.state-row[_ngcontent-ng-c3634193745]:last-child {
  border-bottom: 0;
}
.state-position[_ngcontent-ng-c3634193745] {
  color: var(--theme-muted);
  font-size: 0.78rem;
}
.state-code[_ngcontent-ng-c3634193745] {
  display: grid;
  width: 2.25rem;
  height: 2.25rem;
  place-items: center;
  border-radius: 0.55rem;
  color: var(--pq-accent-dark);
  background: var(--pq-accent-soft);
  font-weight: 700;
}
.state-row[_ngcontent-ng-c3634193745]   small[_ngcontent-ng-c3634193745] {
  display: block;
  color: var(--theme-muted);
  font-size: 0.72rem;
}
.state-value[_ngcontent-ng-c3634193745] {
  text-align: right;
}
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .pq-page[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .pq-page[_ngcontent-ng-c3634193745] {
  --pq-accent: #d29b7e;
  --pq-accent-dark: #865943;
  --pq-accent-soft: #35261f;
  --pq-green: #74bbaa;
}
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .pq-logo[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .pq-logo[_ngcontent-ng-c3634193745] {
  mix-blend-mode: normal;
  opacity: 0.9;
}
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .pq-tabs[_ngcontent-ng-c3634193745]   button.active[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .pq-tabs[_ngcontent-ng-c3634193745]   button.active[_ngcontent-ng-c3634193745] {
  color: #fff;
}
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745], 
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745]   td[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745]   td[_ngcontent-ng-c3634193745], 
body.theme-master.theme-dark[_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745]   td[_ngcontent-ng-c3634193745]   strong[_ngcontent-ng-c3634193745], body.theme-master.theme-dark   [_nghost-ng-c3634193745]   .scholar-table[_ngcontent-ng-c3634193745]   td[_ngcontent-ng-c3634193745]   strong[_ngcontent-ng-c3634193745] {
  color: var(--theme-ink);
}
@media (max-width: 991.98px) {
  .map-layout[_ngcontent-ng-c3634193745] {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 767.98px) {
  .pq-hero[_ngcontent-ng-c3634193745] {
    min-height: auto;
    padding: 1.5rem;
  }
  .pq-logo[_ngcontent-ng-c3634193745] {
    width: 105px;
    height: 105px;
  }
  .pq-tabs[_ngcontent-ng-c3634193745] {
    grid-template-columns: repeat(3, 1fr);
  }
  .summary-grid[_ngcontent-ng-c3634193745], 
   .content-grid[_ngcontent-ng-c3634193745], 
   .region-grid[_ngcontent-ng-c3634193745] {
    grid-template-columns: 1fr;
  }
  .region-institutions[_ngcontent-ng-c3634193745] {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 479.98px) {
  .pq-hero[_ngcontent-ng-c3634193745] {
    align-items: flex-start;
  }
  .pq-logo[_ngcontent-ng-c3634193745] {
    width: 72px;
    height: 72px;
  }
  .pq-tabs[_ngcontent-ng-c3634193745]   button[_ngcontent-ng-c3634193745] {
    padding: 0.7rem 0.35rem;
    font-size: 0.82rem;
  }
  .filters[_ngcontent-ng-c3634193745] {
    grid-template-columns: 1fr;
  }
  .section-heading[_ngcontent-ng-c3634193745] {
    align-items: flex-start;
  }
  .region-institutions[_ngcontent-ng-c3634193745] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=/pq.page.css.map */</style><style ng-app-id="ng">

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
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="20.3.18" _nghost-ng-c72857277="" ngh="2" ng-server-context="ssg"><nav _ngcontent-ng-c72857277="" role="navigation" aria-label="navegacao principal" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"><div _ngcontent-ng-c72857277="" class="container"><a _ngcontent-ng-c72857277="" href="#" aria-label="Brapci" class="navbar-brand"><img _ngcontent-ng-c72857277="" src="assets/img/brand_brapci_shadown.png" alt="Brapci" class="navbar-logo"></a><button _ngcontent-ng-c72857277="" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" class="navbar-toggler" aria-label="Alternar navegacao"><span _ngcontent-ng-c72857277="" class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c72857277="" id="mainNavbar" class="collapse navbar-collapse"><ul _ngcontent-ng-c72857277="" class="navbar-nav me-auto mb-2 mb-lg-0"><li _ngcontent-ng-c72857277="" class="nav-item"><a _ngcontent-ng-c72857277="" routerlink="/autoridade" class="nav-link" href="/autoridade" jsaction="click:;">Autoridades</a></li><li _ngcontent-ng-c72857277="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c72857277="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Revistas </button><ul _ngcontent-ng-c72857277="" class="dropdown-menu"><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/revistas" class="dropdown-item" href="/revistas" jsaction="click:;">Lista de publicacoes</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/revistas/avaliation" class="dropdown-item" href="/revistas/avaliation" jsaction="click:;">Estratificação</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/revistas/timeline" class="dropdown-item" href="/revistas/timeline" jsaction="click:;">Timeline das Revistas</a></li></ul></li><li _ngcontent-ng-c72857277="" class="nav-item"><a _ngcontent-ng-c72857277="" routerlink="/eventos" class="nav-link" href="/eventos" jsaction="click:;">Eventos</a></li><li _ngcontent-ng-c72857277="" class="nav-item"><a _ngcontent-ng-c72857277="" routerlink="/v/101894" class="nav-link" href="/v/101894" jsaction="click:;">Benancib</a></li><li _ngcontent-ng-c72857277="" class="nav-item"><a _ngcontent-ng-c72857277="" routerlink="/livros" class="nav-link" href="/livros" jsaction="click:;">Livros</a></li><!--container--><li _ngcontent-ng-c72857277="" class="nav-item dropdown docs-dropdown"><button _ngcontent-ng-c72857277="" type="button" class="nav-link dropdown-toggle btn btn-link" aria-expanded="false" jsaction="click:;"> Sobre </button><ul _ngcontent-ng-c72857277="" class="dropdown-menu"><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/about/brapci" class="dropdown-item" href="/about/brapci" jsaction="click:;">Sobre a Brapci</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/about/benancib" class="dropdown-item" href="/about/benancib" jsaction="click:;">Sobre o Benancib</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/about/brapcilivros" class="dropdown-item" href="/about/brapcilivros" jsaction="click:;">Sobre a Brapci Livros</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/about/how_index" class="dropdown-item" href="/about/how_index" jsaction="click:;">Como ser indexado na Brapci</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/pq" class="dropdown-item" href="/pq" jsaction="click:;">Bolsistas PQ do CNPq</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/about/team" class="dropdown-item" href="/about/team" jsaction="click:;">Equipe</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" href="#" class="dropdown-item" jsaction="click:;">Indices de Assuntos</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" href="#" class="dropdown-item" jsaction="click:;">Indices de Autores</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" href="#" class="dropdown-item" jsaction="click:;">Indicador das Producoes</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" href="#" class="dropdown-item" jsaction="click:;">Indicador de Buscas</a></li><li _ngcontent-ng-c72857277=""><a _ngcontent-ng-c72857277="" routerlink="/doc" class="dropdown-item" href="/doc" jsaction="click:;">Documentacao API</a></li></ul></li></ul><div _ngcontent-ng-c72857277="" class="d-flex align-items-center gap-2"><div _ngcontent-ng-c72857277="" class="accessibility-launcher"><button _ngcontent-ng-c72857277="" type="button" class="accessibility-toggle" aria-expanded="false" aria-label="Abrir painel de acessibilidade" title="Acessibilidade" jsaction="click:;"><i _ngcontent-ng-c72857277="" aria-hidden="true" class="bi bi-universal-access"></i></button><!--container--></div><!--container--><div _ngcontent-ng-c72857277="" class="language-picker"><button _ngcontent-ng-c72857277="" type="button" class="language-flag-btn" aria-label="Abrir selecao de idioma" title="Selecionar idioma" jsaction="click:;"><img _ngcontent-ng-c72857277="" width="18" height="12" class="language-flag" src="assets/img/flags/br.svg" alt="PT-BR"></button><!--container--></div><a _ngcontent-ng-c72857277="" routerlink="/signin" class="nav-login-link" aria-label="Fazer login" href="/signin" jsaction="click:;"><svg _ngcontent-ng-c72857277="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c72857277="" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.34 0-10 1.68-10 5v3h20v-3c0-3.32-6.66-5-10-5Z"></path></svg><span _ngcontent-ng-c72857277="">Entrar</span></a><!--container--><!--container--></div></div></div></nav><router-outlet _ngcontent-ng-c72857277=""></router-outlet><app-pq-page _nghost-ng-c3634193745="" ngh="1"><section _ngcontent-ng-c3634193745="" aria-labelledby="pq-title" class="pq-page py-4"><div _ngcontent-ng-c3634193745="" class="container"><app-breadcrumbs _ngcontent-ng-c3634193745="" _nghost-ng-c3912997418="" ngh="0"><nav _ngcontent-ng-c3912997418="" aria-label="Breadcrumb" class="bc-wrap"><ol _ngcontent-ng-c3912997418="" class="breadcrumb mb-1"><li _ngcontent-ng-c3912997418="" class="breadcrumb-item"><!--container--><a _ngcontent-ng-c3912997418="" href="/" jsaction="click:;">Inicio</a><!--container--></li><li _ngcontent-ng-c3912997418="" class="breadcrumb-item active" aria-current="page"><span _ngcontent-ng-c3912997418="">Pq</span><!--container--><!--container--></li><!--container--></ol></nav></app-breadcrumbs><header _ngcontent-ng-c3634193745="" class="pq-hero"><div _ngcontent-ng-c3634193745="" class="pq-hero-copy"><span _ngcontent-ng-c3634193745="" class="eyebrow">Panorama da Ciência da Informação</span><h1 _ngcontent-ng-c3634193745="" id="pq-title">Bolsistas de Produtividade CNPq</h1><p _ngcontent-ng-c3634193745="">Conheça a distribuição dos pesquisadores por modalidade, instituição e região do Brasil.</p></div><img _ngcontent-ng-c3634193745="" src="assets/logos/logo_pq.png" alt="Base de dados dos bolsistas PQ" class="pq-logo"></header><!--container--><!--container--><nav _ngcontent-ng-c3634193745="" aria-label="Visualizações dos bolsistas" role="tablist" class="pq-tabs"><button _ngcontent-ng-c3634193745="" type="button" role="tab" class="active" aria-selected="true" jsaction="click:;"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-grid-1x2"></i><span _ngcontent-ng-c3634193745="">Resumo</span></button><button _ngcontent-ng-c3634193745="" type="button" role="tab" class="" aria-selected="false" jsaction="click:;"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-people"></i><span _ngcontent-ng-c3634193745="">Bolsistas</span></button><button _ngcontent-ng-c3634193745="" type="button" role="tab" class="" aria-selected="false" jsaction="click:;"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-building"></i><span _ngcontent-ng-c3634193745="">Instituições</span></button><button _ngcontent-ng-c3634193745="" type="button" role="tab" class="" aria-selected="false" jsaction="click:;"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-geo-alt"></i><span _ngcontent-ng-c3634193745="">Regiões</span></button><button _ngcontent-ng-c3634193745="" type="button" role="tab" class="" aria-selected="false" jsaction="click:;"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-map"></i><span _ngcontent-ng-c3634193745="">Mapa</span></button></nav><div _ngcontent-ng-c3634193745="" role="tabpanel" class="tab-content"><div _ngcontent-ng-c3634193745="" class="summary-grid"><article _ngcontent-ng-c3634193745="" class="metric-card metric-primary"><span _ngcontent-ng-c3634193745="" class="metric-icon"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-person-check"></i></span><div _ngcontent-ng-c3634193745=""><strong _ngcontent-ng-c3634193745="">71</strong><span _ngcontent-ng-c3634193745="">Bolsistas ativos</span></div></article><article _ngcontent-ng-c3634193745="" class="metric-card"><span _ngcontent-ng-c3634193745="" class="metric-icon"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-bank"></i></span><div _ngcontent-ng-c3634193745=""><strong _ngcontent-ng-c3634193745="">23</strong><span _ngcontent-ng-c3634193745="">Instituições</span></div></article><article _ngcontent-ng-c3634193745="" class="metric-card"><span _ngcontent-ng-c3634193745="" class="metric-icon"><i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-map"></i></span><div _ngcontent-ng-c3634193745=""><strong _ngcontent-ng-c3634193745="">5</strong><span _ngcontent-ng-c3634193745="">Regiões representadas</span></div></article></div><div _ngcontent-ng-c3634193745="" class="content-grid"><article _ngcontent-ng-c3634193745="" class="panel"><div _ngcontent-ng-c3634193745="" class="panel-heading"><div _ngcontent-ng-c3634193745=""><span _ngcontent-ng-c3634193745="" class="eyebrow">Perfil das bolsas</span><h2 _ngcontent-ng-c3634193745="">Modalidades</h2></div><span _ngcontent-ng-c3634193745="" class="total-label">71 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="level-list"><div _ngcontent-ng-c3634193745="" class="level-row"><span _ngcontent-ng-c3634193745="" class="level-badge">A</span><div _ngcontent-ng-c3634193745="" role="img" class="level-progress" aria-label="Nível A: 5 bolsistas"><span _ngcontent-ng-c3634193745="" style="width: 7.042253521126761%;"></span></div><strong _ngcontent-ng-c3634193745="">5</strong></div><div _ngcontent-ng-c3634193745="" class="level-row"><span _ngcontent-ng-c3634193745="" class="level-badge">B</span><div _ngcontent-ng-c3634193745="" role="img" class="level-progress" aria-label="Nível B: 7 bolsistas"><span _ngcontent-ng-c3634193745="" style="width: 9.859154929577464%;"></span></div><strong _ngcontent-ng-c3634193745="">7</strong></div><div _ngcontent-ng-c3634193745="" class="level-row"><span _ngcontent-ng-c3634193745="" class="level-badge">C</span><div _ngcontent-ng-c3634193745="" role="img" class="level-progress" aria-label="Nível C: 42 bolsistas"><span _ngcontent-ng-c3634193745="" style="width: 59.154929577464785%;"></span></div><strong _ngcontent-ng-c3634193745="">42</strong></div><div _ngcontent-ng-c3634193745="" class="level-row"><span _ngcontent-ng-c3634193745="" class="level-badge">1D</span><div _ngcontent-ng-c3634193745="" role="img" class="level-progress" aria-label="Nível 1D: 7 bolsistas"><span _ngcontent-ng-c3634193745="" style="width: 9.859154929577464%;"></span></div><strong _ngcontent-ng-c3634193745="">7</strong></div><div _ngcontent-ng-c3634193745="" class="level-row"><span _ngcontent-ng-c3634193745="" class="level-badge">2</span><div _ngcontent-ng-c3634193745="" role="img" class="level-progress" aria-label="Nível 2: 10 bolsistas"><span _ngcontent-ng-c3634193745="" style="width: 14.084507042253522%;"></span></div><strong _ngcontent-ng-c3634193745="">10</strong></div><!--container--></div></article><article _ngcontent-ng-c3634193745="" class="panel"><div _ngcontent-ng-c3634193745="" class="panel-heading"><div _ngcontent-ng-c3634193745=""><span _ngcontent-ng-c3634193745="" class="eyebrow">Maior concentração</span><h2 _ngcontent-ng-c3634193745="">Principais instituições</h2></div><button _ngcontent-ng-c3634193745="" type="button" class="text-action" jsaction="click:;">Ver todas <i _ngcontent-ng-c3634193745="" aria-hidden="true" class="bi bi-arrow-right"></i></button></div><div _ngcontent-ng-c3634193745="" class="ranking-list"><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">1</span><strong _ngcontent-ng-c3634193745="">UFMG</strong><span _ngcontent-ng-c3634193745="">11 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">2</span><strong _ngcontent-ng-c3634193745="">IBICT</strong><span _ngcontent-ng-c3634193745="">10 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">3</span><strong _ngcontent-ng-c3634193745="">UNESP</strong><span _ngcontent-ng-c3634193745="">7 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">4</span><strong _ngcontent-ng-c3634193745="">UFRGS</strong><span _ngcontent-ng-c3634193745="">6 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">5</span><strong _ngcontent-ng-c3634193745="">UFPE</strong><span _ngcontent-ng-c3634193745="">4 bolsistas</span></div><div _ngcontent-ng-c3634193745="" class="ranking-row"><span _ngcontent-ng-c3634193745="" class="rank">6</span><strong _ngcontent-ng-c3634193745="">UFAL</strong><span _ngcontent-ng-c3634193745="">3 bolsistas</span></div><!--container--></div></article></div><!--container--><!--container--><!--container--><!--container--><!--container--></div><!--container--></div></section></app-pq-page><!--container--><footer _ngcontent-ng-c72857277="" class="footer mt-auto py-3 border-top"><div _ngcontent-ng-c72857277="" class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"><div _ngcontent-ng-c72857277="" class="footer-meta text-center text-md-start"><small _ngcontent-ng-c72857277="" class="text-muted">Brapci © 2026</small><!--container--></div><div _ngcontent-ng-c72857277="" class="footer-social" aria-label="Midias sociais da Brapci"><a _ngcontent-ng-c72857277="" href="https://www.linkedin.com/groups/9831304/" target="_blank" rel="noreferrer" title="LinkedIn" class="footer-social-link" aria-label="LinkedIn da Brapci"><svg _ngcontent-ng-c72857277="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c72857277="" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.2 8 24 10.66 24 16.13V23h-4v-6.04c0-3.6-2.15-4.67-3.33-4.67-1.82 0-3.17 1.23-3.17 4V23h-4V8Z"></path></svg></a><a _ngcontent-ng-c72857277="" href="https://www.instagram.com/brapci/" target="_blank" rel="noreferrer" title="Instagram" class="footer-social-link" aria-label="Instagram da Brapci"><svg _ngcontent-ng-c72857277="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c72857277="" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.5a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z"></path></svg></a></div><small _ngcontent-ng-c72857277="" class="text-muted">BRAPCI | brapci.inf.br</small></div></footer></app-root>
<link rel="modulepreload" href="chunk-EAX4WRIZ.js"><link rel="modulepreload" href="chunk-NIH3DZUO.js"><link rel="modulepreload" href="chunk-IZFBC5RH.js"><link rel="modulepreload" href="chunk-6NCLE24J.js"><link rel="modulepreload" href="chunk-YVSLTLYB.js"><link rel="modulepreload" href="chunk-7UNGF5KQ.js"><link rel="modulepreload" href="chunk-JXUQBXUX.js"><link rel="modulepreload" href="chunk-UKK5MWW6.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer=""></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-32NYNO3Y.js">
<link rel="modulepreload" href="chunk-NRHQYV2G.js">
<link rel="modulepreload" href="chunk-NVI7LSCX.js">


<script id="ng-state" type="application/json">{"1314940448":{"b":{"status":"200","message":"Resume","actives":71,"institutions":23,"data":[{"id_bb":"389","bb_person":"129","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFF","bs_ativo":"1","id_bs":"129","bs_use":"0","bs_nome":"Ana Célia Rodrigues","bs_rdf_id":"21813","bs_lattes":"6919374280380925","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"395","bb_person":"4","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"4","bs_use":"0","bs_nome":"Benildes Coura Moreira dos Santos Maculan","bs_rdf_id":"192465","bs_lattes":"5336218259257800","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"398","bb_person":"7","bs_tipo":"1","bs_nivel":"1D","bs_start":"2023-03-01","bs_finish":"2027-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"7","bs_use":"0","bs_nome":"Carlos Henrique Marcondes","bs_rdf_id":"187115","bs_lattes":"6126712875843734","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"407","bb_person":"13","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFPE","bs_ativo":"1","id_bs":"13","bs_use":"0","bs_nome":"Fabio Assis Pinho","bs_rdf_id":"200659","bs_lattes":"4220711855480007","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"408","bb_person":"103","bs_tipo":"1","bs_nivel":"1D","bs_start":"2024-03-01","bs_finish":"2028-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"103","bs_use":"0","bs_nome":"Fabio Castro Gouveia","bs_rdf_id":"193212","bs_lattes":"0733908324235348","bd_brapci":"9010","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"412","bb_person":"22","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFRJ","bs_ativo":"1","id_bs":"22","bs_use":"0","bs_nome":"Gustavo Henrique de Araújo Freire","bs_rdf_id":"16526","bs_lattes":"5458344734085444","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"415","bb_person":"25","bs_tipo":"1","bs_nivel":"1D","bs_start":"2024-03-01","bs_finish":"2028-07-31","BS_IES":"UNIRIO","bs_ativo":"1","id_bs":"25","bs_use":"0","bs_nome":"Icleia Thiesen","bs_rdf_id":"171682","bs_lattes":"2196624633172103","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"416","bb_person":"130","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UnB","bs_ativo":"1","id_bs":"130","bs_use":"0","bs_nome":"João de Melo Maricato","bs_rdf_id":"21813","bs_lattes":"3991129099537472","bd_brapci":"10816","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"422","bb_person":"100","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"100","bs_use":"0","bs_nome":"Liz Rejane Issberner","bs_rdf_id":"122663","bs_lattes":"5424368847166565","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"423","bb_person":"104","bs_tipo":"1","bs_nivel":"1D","bs_start":"2024-03-01","bs_finish":"2028-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"104","bs_use":"0","bs_nome":"Luana Farias Sales Marques","bs_rdf_id":"110073","bs_lattes":"9090064478702633","bd_brapci":"103248","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"426","bb_person":"33","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"CNEN","bs_ativo":"1","id_bs":"33","bs_use":"0","bs_nome":"Luis Fernando Sayão","bs_rdf_id":"215790","bs_lattes":"3422623122948389","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"430","bb_person":"38","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFSCAR","bs_ativo":"1","id_bs":"38","bs_use":"0","bs_nome":"Maria Cristina Piumbato Innocentini Hayashi","bs_rdf_id":"3426","bs_lattes":"7263318849588556","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"433","bb_person":"105","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFS","bs_ativo":"1","id_bs":"105","bs_use":"0","bs_nome":"Martha Suzana Cabral Nunes","bs_rdf_id":"200732","bs_lattes":"3737917347678121","bd_brapci":"10870","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"436","bb_person":"131","bs_tipo":"1","bs_nivel":"2 ","bs_start":"2024-03-01","bs_finish":"2027-07-31","BS_IES":"UFF","bs_ativo":"1","id_bs":"131","bs_use":"0","bs_nome":"Natália Bolfarini Tognoli","bs_rdf_id":"21813","bs_lattes":"5668344562019395","bd_brapci":"271331","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"467","bb_person":"2","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFG","bs_ativo":"1","id_bs":"2","bs_use":"0","bs_nome":"André Porto Ancona Lopez","bs_rdf_id":"181715","bs_lattes":"2683882609392455","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"468","bb_person":"113","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"113","bs_use":"0","bs_nome":"Angelica Alves da Cunha Marques","bs_rdf_id":"10558","bs_lattes":"2413567691663920","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"469","bb_person":"5","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"5","bs_use":"0","bs_nome":"Carlos Alberto Avila Araujo","bs_rdf_id":"101835","bs_lattes":"4009452150201421","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"470","bb_person":"6","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"6","bs_use":"0","bs_nome":"Carlos Cândido de Almeida","bs_rdf_id":"214510","bs_lattes":"3901317157203491","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"471","bb_person":"140","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"140","bs_use":"0","bs_nome":"Cintia Aparecida Chagas","bs_rdf_id":"101433","bs_lattes":"3275908765222466","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"472","bb_person":"141","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFPA","bs_ativo":"1","id_bs":"141","bs_use":"0","bs_nome":"Cristian Berrío Zapata","bs_rdf_id":"84582","bs_lattes":"0976534900847907","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"473","bb_person":"9","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"9","bs_use":"0","bs_nome":"Edberto Ferneda","bs_rdf_id":"176655","bs_lattes":"8596568228676820","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"474","bb_person":"106","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFAL","bs_ativo":"1","id_bs":"106","bs_use":"0","bs_nome":"Edivanio Duarte de Souza","bs_rdf_id":"188820","bs_lattes":"5646522403599369","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"475","bb_person":"142","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"142","bs_use":"0","bs_nome":"Elisângela Cristina Aganette","bs_rdf_id":"184444","bs_lattes":"6224307970906388","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"476","bb_person":"143","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFES","bs_ativo":"1","id_bs":"143","bs_use":"0","bs_nome":"Fabiano Couto Corrêa da Silva","bs_rdf_id":"22318","bs_lattes":"4635807083312321","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"477","bb_person":"17","bs_tipo":"1","bs_nivel":"B ","bs_start":"2025-08-01","bs_finish":"2029-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"17","bs_use":"0","bs_nome":"Gercina Ângela de Lima","bs_rdf_id":"171959","bs_lattes":"3183050056105009","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"478","bb_person":"23","bs_tipo":"1","bs_nivel":"B ","bs_start":"2025-08-01","bs_finish":"2029-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"23","bs_use":"0","bs_nome":"Gustavo Silva Saldanha","bs_rdf_id":"190241","bs_lattes":"6143079905555041","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"480","bb_person":"28","bs_tipo":"1","bs_nivel":"A ","bs_start":"2025-08-01","bs_finish":"2030-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"28","bs_use":"0","bs_nome":"José Augusto Chaves Guimarães","bs_rdf_id":"7049","bs_lattes":"6380929054652063","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"481","bb_person":"31","bs_tipo":"1","bs_nivel":"A ","bs_start":"2025-08-01","bs_finish":"2030-07-31","BS_IES":"UFPE","bs_ativo":"1","id_bs":"31","bs_use":"0","bs_nome":"Leilah Santiago Bufrem","bs_rdf_id":"4219","bs_lattes":"1526528881898399","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"482","bb_person":"108","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFSCAR","bs_ativo":"1","id_bs":"108","bs_use":"0","bs_nome":"Luciana de Souza Gracioso","bs_rdf_id":"192726","bs_lattes":"4898201916360294","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"483","bb_person":"144","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"USP","bs_ativo":"1","id_bs":"144","bs_use":"0","bs_nome":"Maria Cristiane Barbosa Galvão","bs_rdf_id":"17239","bs_lattes":"9163421021115381","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"484","bb_person":"112","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFC","bs_ativo":"1","id_bs":"112","bs_use":"0","bs_nome":"Maria Giovanna Guedes Farias","bs_rdf_id":"244","bs_lattes":"3383299470190507","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"485","bb_person":"145","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"145","bs_use":"0","bs_nome":"Patrícia Nascimento Silva","bs_rdf_id":"26630","bs_lattes":"1807279435788513","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"486","bb_person":"46","bs_tipo":"1","bs_nivel":"B ","bs_start":"2025-08-01","bs_finish":"2029-07-31","BS_IES":"UFPE","bs_ativo":"1","id_bs":"46","bs_use":"0","bs_nome":"Raimundo Nonato Macedo dos Santos","bs_rdf_id":"199292","bs_lattes":"2595121603577953","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"487","bb_person":"47","bs_tipo":"1","bs_nivel":"A ","bs_start":"2025-08-01","bs_finish":"2030-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"47","bs_use":"0","bs_nome":"Regina Maria Marteleto","bs_rdf_id":"103865","bs_lattes":"6352285207676599","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"488","bb_person":"146","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"146","bs_use":"0","bs_nome":"Ricardo Cesar Gonçalves Sant'Ana","bs_rdf_id":"201886","bs_lattes":"1022660730972320","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"489","bb_person":"147","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFSC","bs_ativo":"1","id_bs":"147","bs_use":"0","bs_nome":"Rodrigo de Sales","bs_rdf_id":"6313","bs_lattes":"0144377022254487","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"490","bb_person":"51","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFSC","bs_ativo":"1","id_bs":"51","bs_use":"0","bs_nome":"Rosângela Schwarz Rodrigues","bs_rdf_id":"181973","bs_lattes":"6722222615474343","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"491","bb_person":"53","bs_tipo":"1","bs_nivel":"A ","bs_start":"2025-08-01","bs_finish":"2030-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"53","bs_use":"0","bs_nome":"Sarita Albagli","bs_rdf_id":"1872","bs_lattes":"8946328562221916","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"492","bb_person":"59","bs_tipo":"1","bs_nivel":"B ","bs_start":"2025-08-01","bs_finish":"2029-07-31","BS_IES":"UFC","bs_ativo":"1","id_bs":"59","bs_use":"0","bs_nome":"Virginia Bentes Pinto","bs_rdf_id":"201826","bs_lattes":"8992341585329383","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"493","bb_person":"148","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFG","bs_ativo":"1","id_bs":"148","bs_use":"0","bs_nome":"Andréa Pereira dos Santos","bs_rdf_id":"1840","bs_lattes":"9315618025567235","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"496","bb_person":"21","bs_tipo":"1","bs_nivel":"1D","bs_start":"2019-03-01","bs_finish":"2027-07-31","BS_IES":"UFPB","bs_ativo":"1","id_bs":"21","bs_use":"0","bs_nome":"Guilherme Ataíde Dias","bs_rdf_id":"215795","bs_lattes":"9553707435669429","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"500","bb_person":"35","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"USP","bs_ativo":"1","id_bs":"35","bs_use":"0","bs_nome":"Marco Antônio de Almeida","bs_rdf_id":"29687","bs_lattes":"1950508075947990","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"502","bb_person":"149","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UFBA","bs_ativo":"1","id_bs":"149","bs_use":"0","bs_nome":"Barbara Coelho Neves","bs_rdf_id":"7076","bs_lattes":"7327673330074701","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"503","bb_person":"135","bs_tipo":"1","bs_nivel":"C ","bs_start":"2025-08-01","bs_finish":"2028-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"135","bs_use":"0","bs_nome":"Helen de Castro Silva Casarin","bs_rdf_id":"92026","bs_lattes":"0592809928580900","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"504","bb_person":"36","bs_tipo":"1","bs_nivel":"1D","bs_start":"2026-03-01","bs_finish":"2027-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"36","bs_use":"0","bs_nome":"Maria Aparecida Moura","bs_rdf_id":"173167","bs_lattes":"3179079966117749","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"505","bb_person":"116","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UnB","bs_ativo":"1","id_bs":"116","bs_use":"0","bs_nome":"Ana Carolina Simionato Arakaki","bs_rdf_id":"120146","bs_lattes":"9896600626524397","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"506","bb_person":"117","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UEL","bs_ativo":"1","id_bs":"117","bs_use":"0","bs_nome":"Ana Cristina de Albuquerque","bs_rdf_id":"215026","bs_lattes":"4752632781155101","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"507","bb_person":"118","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"118","bs_use":"0","bs_nome":"Ana Maria Mielniczuk de Moura","bs_rdf_id":"218455","bs_lattes":"1734997653639992","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"508","bb_person":"3","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"3","bs_use":"0","bs_nome":"Arthur Coelho Bezerra","bs_rdf_id":"29526","bs_lattes":"1359214991662158","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"509","bb_person":"8","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFAL","bs_ativo":"1","id_bs":"8","bs_use":"0","bs_nome":"Daniel Flores","bs_rdf_id":"145","bs_lattes":"9640543272532398","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"510","bb_person":"151","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UNIRIO","bs_ativo":"1","id_bs":"151","bs_use":"0","bs_nome":"Eliezer Pires da Silva","bs_rdf_id":"24622","bs_lattes":"3806798888576249","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"511","bb_person":"152","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"152","bs_use":"0","bs_nome":"Fabrício José Nascimento da Silveira","bs_rdf_id":"26000","bs_lattes":"8840124188505402","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"512","bb_person":"153","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFPB","bs_ativo":"1","id_bs":"153","bs_use":"0","bs_nome":"Gisele Rocha Côrtes","bs_rdf_id":"14773","bs_lattes":"9665648668089568","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"513","bb_person":"25","bs_tipo":"1","bs_nivel":"1D","bs_start":"2028-08-01","bs_finish":"2031-02-28","BS_IES":"UNIRIO","bs_ativo":"1","id_bs":"25","bs_use":"0","bs_nome":"Icleia Thiesen","bs_rdf_id":"171682","bs_lattes":"2196624633172103","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"514","bb_person":"154","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFPB","bs_ativo":"1","id_bs":"154","bs_use":"0","bs_nome":"Izabel França de Lima","bs_rdf_id":"3267","bs_lattes":"2774920113255079","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"515","bb_person":"155","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFPA","bs_ativo":"1","id_bs":"155","bs_use":"0","bs_nome":"João Arlindo dos Santos Neto","bs_rdf_id":"1886","bs_lattes":"9296179246118904","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"516","bb_person":"29","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"USP","bs_ativo":"1","id_bs":"29","bs_use":"0","bs_nome":"José Eduardo Santarem Segundo","bs_rdf_id":"11021","bs_lattes":"5562746387565465","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"517","bb_person":"30","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"30","bs_use":"0","bs_nome":"Jussara Borges de Lima","bs_rdf_id":"11867","bs_lattes":"0229801641242896","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"518","bb_person":"34","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"34","bs_use":"0","bs_nome":"Marco André Feldman Schneider","bs_rdf_id":"186890","bs_lattes":"6589062304969432","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"519","bb_person":"156","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFCA","bs_ativo":"1","id_bs":"156","bs_use":"0","bs_nome":"Maria Cleide Rodrigues Bernardino","bs_rdf_id":"2625","bs_lattes":"5619979866984830","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"520","bb_person":"41","bs_tipo":"1","bs_nivel":"A ","bs_start":"2026-08-01","bs_finish":"2031-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"41","bs_use":"0","bs_nome":"Mariângela Spotti Lopes Fujita","bs_rdf_id":"217866","bs_lattes":"6530346906709462","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"521","bb_person":"44","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"44","bs_use":"0","bs_nome":"Maurício Barcellos Almeida","bs_rdf_id":"8202","bs_lattes":"5218069708058487","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"522","bb_person":"157","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFPE","bs_ativo":"1","id_bs":"157","bs_use":"0","bs_nome":"Nadi Helena Presser","bs_rdf_id":"7586","bs_lattes":"7300520149420928","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"523","bb_person":"121","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"121","bs_use":"0","bs_nome":"Rene Faustino Gabriel Junior","bs_rdf_id":"199371","bs_lattes":"5900345665779424","bd_brapci":"4604","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"524","bb_person":"126","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFMG","bs_ativo":"1","id_bs":"126","bs_use":"0","bs_nome":"Rodrigo Moreno Marques","bs_rdf_id":"24587","bs_lattes":"4390865555343440","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"525","bb_person":"158","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFAL","bs_ativo":"1","id_bs":"158","bs_use":"0","bs_nome":"Ronaldo Ferreira de Araujo","bs_rdf_id":"8108","bs_lattes":"3328212638040851","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"526","bb_person":"52","bs_tipo":"1","bs_nivel":"B ","bs_start":"2026-08-01","bs_finish":"2030-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"52","bs_use":"0","bs_nome":"Samile Andréa de Souza Vanz","bs_rdf_id":"8956","bs_lattes":"5243732207004083","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"527","bb_person":"55","bs_tipo":"1","bs_nivel":"B ","bs_start":"2026-08-01","bs_finish":"2030-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"55","bs_use":"0","bs_nome":"Sonia Elisa Caregnato","bs_rdf_id":"8616","bs_lattes":"5627209208288722","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"528","bb_person":"122","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"UFRGS","bs_ativo":"1","id_bs":"122","bs_use":"0","bs_nome":"Thiago Henrique Bragato Barros","bs_rdf_id":"201027","bs_lattes":"0339496971217162","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"529","bb_person":"125","bs_tipo":"1","bs_nivel":"C ","bs_start":"2026-08-01","bs_finish":"2029-07-31","BS_IES":"IBICT","bs_ativo":"1","id_bs":"125","bs_use":"0","bs_nome":"Luciane de Fátima Beckman Cavalcante","bs_rdf_id":"200603","bs_lattes":"5012034338598304","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"},{"id_bb":"530","bb_person":"37","bs_tipo":"1","bs_nivel":"B ","bs_start":"2026-08-01","bs_finish":"2030-07-31","BS_IES":"UNESP","bs_ativo":"1","id_bs":"37","bs_use":"0","bs_nome":"Maria Cláudia Cabrini Grácio","bs_rdf_id":"199014","bs_lattes":"5170688300970006","bd_brapci":"0","id_mod":"1","mod_sigla":"PQ","mod_descricao":"Bolsista Produtividade em Pesquisa"}]},"h":{},"s":200,"st":"OK","u":"https://cip.brapci.inf.br/api/pq","rt":"json"},"4047896222":{"b":{"authenticated":false,"user":null},"h":{},"s":200,"st":"OK","u":"/auth/me","rt":"json"},"4175925773":{"b":{"common":{"loading":"Carregando...","dark":"Escuro","toggleDarkMode":"Alternar modo escuro","toggleNavigation":"Alternar navegacao","selectLanguage":"Selecionar idioma","openLanguageSelection":"Abrir selecao de idioma","login":"Fazer login","userProfile":"Perfil do usuario","markedDocuments":"Documentos marcados","sessionLabel":"Sessao"},"accessibility":{"eyebrow":"Acessibilidade","title":"Ajustes rápidos","dialogLabel":"Painel de acessibilidade","close":"Fechar painel","launcherAria":"Abrir painel de acessibilidade","launcherTitle":"Acessibilidade","fontSize":"Tamanho da fonte","fontOptions":{"normal":"Normal","large":"Grande","giant":"Gigante"},"darkMode":"Modo escuro","enableDarkMode":"Entrar no modo dark","disableDarkMode":"Desativar modo dark","letterSpacing":"Aumentar espaçamento das letras","cursorLarge":"Aumentar tamanho do cursor","highlights":"Destacar headings H1-H6","on":"Ativo","off":"Inativo"},"app":{"title":"Brapci","subtitle":"Portal com SEO semantico, autenticacao e busca na API"},"language":{"label":"Idioma","pt":"Portugues","en":"Ingles","es":"Espanhol"},"basket":{"selected":{"title":"Documentos selecionados","none":"Nenhum documento selecionado.","loading":"Carregando selecao...","none_category":"Nenhum item nesta categoria.","clear":"Limpar selecao","Articles":"Artigos","Books":"Livros","BooksChapter":"Capitulos","Proceedings":"Trabalhos de eventos"}},"cited":{"title":"Busca de citacoes","subtitle":"Pesquise trabalhos e visualize os formatos de citacao.","inputLabel":"Termo da busca","placeholder":"Digite um termo, autor ou titulo","searchButton":"Buscar citacoes","loading":"Buscando citacoes...","empty":"Nenhuma citacao encontrada para o termo informado.","error":"Erro ao buscar citacoes."},"auth":{"title":"Autenticacao","fullName":"Nome completo","username":"Usuario","email":"Email","accountEmail":"Email da conta","password":"Senha","submit":"Entrar","register":"Cadastrar-se","createAccount":"Criar conta","backToLogin":"Voltar para login","resendPassword":"Reenviar senha","logout":"Sair","welcome":"Bem-vindo","invalid":"Credenciais invalidas. Use admin/admin123 ou user/user123.","messages":{"invalidCredentials":"Usuario ou senha invalidos.","registerFailed":"Nao foi possivel cadastrar. Verifique os dados e tente novamente.","registerSuccess":"Cadastro realizado com sucesso.","resendFailed":"Nao foi possivel reenviar a senha no momento.","resendSuccess":"Se o email existir, enviaremos as instrucoes de recuperacao."}},"signin":{"kicker":"Acesso Brapci","title":"Portal institucional de autenticacao","subtitle":"Entre com sua conta para acessar recursos personalizados da plataforma.","cardSubtitle":"Use seu usuario e senha para entrar na plataforma."},"search":{"bollean":{"title":"Busca booleana","strategy":"Estratégia de busca booleana","button":"Pesquisar","linkBack":"Voltar para a busca normal"},"title":"O que está procurando?","input":"Digite um termo","button":"Buscar","selected":"Selecionados","empty":"Nenhum resultado encontrado para a consulta.","idle":"Digite um termo para consultar a API Brapci.","clear_selected":"Limpar seleção","filters":{"title":"Filtros da pesquisa","year_start":"Ano inicial","year_end":"Ano final","publication_type":"Tipo de publicação","search_field":"Local de pesquisa","types":{"JA":"Revistas Brasileiras","JE":"Revistas estrangeiras","BK":"Livros e capítulo","EV":"Anais de eventos"},"fields":{"TI":"Título","AB":"Resumo","KW":"Palavras-chave","AU":"Autor","FL":"Todos os campos"}}},"searchBook":{"title":"Busca de Trabalhos - Livros","labels":{"keywords":"Palavras-chave:","workType":"Tipo de Trabalho:"},"placeholders":{"keywords":"Digite os termos de busca"},"options":{"selectType":"Selecione o Tipo","book":"Livro","chapter":"Capitulo"},"states":{"loadingResults":"Carregando resultados..."},"errors":{"noneFound":"Nenhum livro encontrado para os filtros informados.","requestFailed":"Nao foi possivel buscar livros neste momento."},"results":{"noMetadata":"Sem metadados adicionais"},"actions":{"view":"Ver"}},"authority":{"bannerAlt":"Controle de autoridade","title":"Controle de Autoridade","searchLabel":"Buscar termo","placeholder":"Informe o nome do autor","loading":"Carregando...","resultsTitle":"Termos com use = ID","empty":"Nenhum resultado.","apiError":"Nao foi possivel consultar a API de autoridade."},"author":{"gadget":"Gadget de Autor","name":"Nome","nameAbnt":"Nome ABNT","id":"ID","allProduction":"Toda producao","yearsProduction":"anos","bibliographic":"Producoes bibliograficas","total":"Total","noRecords":"Sem registros para este tipo.","coauthors":{"label":"Coautores","name":"Nome","publications":"Publicacoes"},"network":{"label":"Rede de Colaboracao"},"citationsGranted":{"label":"Citacoes concedidas"},"workTypes":{"Article":"Artigos","Book":"Livros","BookChapter":"Capitulos","Proceeding":"Trabalhos de eventos"},"summary":{"label":"Resumo","journals":"Information Channel","points":"Pontos","volume":"Volume","dispersionTitle":"Distribuition by Information Channel","yearAxis":"Position","volumeAxis":"Frequency","frequency":"Frequencia","journal":"Information Channel","tableTitle":"Data set","pieTitle":"Distribuition by Information Channel","others":"Others/Outros","noData":"Sem dados de dataJOUR para exibicao."},"tags":{"title":"Nuvem de tags","noData":"Sem dados de dataTAG para exibicao."}},"issue":{"hero":{"kicker":"Fascículo","badgesLabel":"Resumo rápido do fascículo","metricsLabel":"Indicadores do fascículo"},"badges":{"id":"ID","volume":"Vol.","nr":"N.","articles":"Artigos"},"tabs":{"ariaLabel":"Abas de conteúdo da issue","summary":"Resumo","works":"Trabalhos","authors":"Autores","keywords":"Palavras-chave","json":"JSON"},"common":{"csv":"CSV"},"summary":{"main":{"title":"Dados principais","acronym":"Acrônimo","source":"Fonte","journalId":"Identificador da revista","year":"Ano","issue":"Fascículo","location":"Local"},"production":{"title":"Produção","works":"Trabalhos","authors":"Autores","coauthorAverage":"Média de coautoria"}},"works":{"empty":"Sem trabalhos disponíveis.","authorsLabel":"Autores","flagsLabel":"Indicadores do trabalho"},"authors":{"title":"Autores","subtitle":"Total de trabalhos por autor","exportCsv":"Exportar autores em CSV","empty":"Sem autores disponíveis.","distribution":{"title":"Distribuição","subtitle":"Número de autores por trabalho","unit":"autor(es)","empty":"Sem distribuição disponível."}},"keywords":{"title":"Nuvem de tags","subtitle":"Palavras-chave ordenadas pela frequência","exportCsv":"Exportar palavras-chave em CSV","frequencyTitle":"Frequência","frequencySubtitle":"Tabela com as ocorrências por termo","table":{"keyword":"Palavra-chave","freq":"Freq."},"empty":"Sem palavras-chave disponíveis."},"tags":{"title":"Nuvem de tags","noData":"Sem palavras-chave disponíveis."}},"journals":{"accessLink":"Acessar revista","publicationsList":"Lista de publicacoes","eventsList":"Lista de eventos","exportCsv":"Exportar CSV","filterAriaLabel":"Filtro por tipo de publicacao","filterAll":"Todas","filterJa":"Revistas Brasileiras","filterJe":"Revistas Estrangeiras","searchPlaceholder":"Pesquisar por titulo","noResultsForFilters":"Nenhum resultado para os filtros selecionados.","noResults":"Nenhuma revista encontrada."},"timeline":{"title":"Timeline das Revistas","loading":"Carregando timeline das revistas...","yearsRange":"Revistas de {{min}} a {{max}}","period":"Periodo","collection":"Colecao","active":"Ativa","inactive":"Inativa","noData":"Nenhum dado de timeline disponivel para os filtros selecionados."},"avaliation":{"title":"Estratificação das Revistas","menuItem":"Estratificação"},"pq":{"title":"Bolsistas Produtividade PQ do CNPq","menuItem":"Bolsistas PQ do CNPq"},"profile":{"title":"Perfil do Usuario","notLogged":"Voce precisa estar logado para visualizar seu perfil.","goToLogin":"Ir para login","name":"Nome","username":"Usuario","id":"ID","role":"Perfil","apiTokenTitle":"Token da API do usuario","copyApiToken":"Copiar API","apiTokenCopied":"Token da API copiado para a area de transferencia.","apiTokenCopyError":"Nao foi possivel copiar o token da API.","localUserTitle":"Dados de sessao local","sessionExpiresAt":"Expira em","noLocalUser":"Nenhum dado de sessao local encontrado.","openExternal":"Acessar perfil externo"},"menu":{"tools":"Ferramentas","toolsBibliographics":"Ferramentas bibliograficas","toolsBibliometric":"Ferramentas bibliometricas","toolsText":"Ferramentas textuais","navbar":{"authorities":"Autoridades","magazines":"Revistas","events":"Eventos","benancib":"Benancib","books":"Livros","about":"Sobre","worldSmall":"Pequeno Mundo na CI","aboutBrapci":"Sobre a Brapci","aboutBenancib":"Sobre o Benancib","aboutBrapciBooks":"Sobre a Brapci Livros","howIndex":"Como ser indexado na Brapci","team":"Equipe","subjectIndex":"Indices de Assuntos","authorIndex":"Indices de Autores","productionIndicator":"Indicador das Producoes","searchIndicator":"Indicador de Buscas","apiDoc":"Documentacao API"}},"tools":{"kicker":"Ferramentas","bibliographics":{"title":"Ferramentas bibliograficas","subtitle":"Area dedicada a utilitarios para apoio em citacao, referencia e organizacao bibliografica.","card1Title":"Normalizacao de referencias","card1Text":"Padronize referencias segundo normas academicas e exporte em formatos comuns.","card2Title":"Gerador de citacoes","card2Text":"Monte citacoes diretas e indiretas com base em metadados de artigos."},"bibliometric":{"title":"Ferramentas bibliometricas","subtitle":"Area para analises bibliometricas, indicadores de producao e exploracao de redes de citacao.","card1Title":"Converter TXT para .NET (Autor)","card1Text":"Visualize metricas de citacao, producao por periodo e distribuicao por periodicos.","card2Title":"Converter TXT para .NET (Assunto)","card2Text":"Converta uma lista de assuntos em um arquivo de rede no formato .NET."},"text":{"title":"Ferramentas textuais","subtitle":"Recursos para analise, revisao e preparacao textual de conteudos cientificos.","card1Title":"Busca por especialista","card1Text":"Apoie a revisao ortografica e a clareza de textos academicos.","card2Title":"Extracao de palavras-chave","card2Text":"Identifique termos centrais para indexacao e recuperacao da informacao."}},"subject":{"title":"Assunto","emptyDescription":"Sem descricao disponivel.","metadata":"Metadados","aliases":"Nomes alternativos","broaderTerms":"Termos amplos","narrowerTerms":"Termos especificos","relatedTerms":"Termos relacionados","json":"JSON","tabs":{"ariaLabel":"Abas do assunto","summary":"Resumo","works":"Trabalhos","json":"JSON"},"stats":{"works":"Trabalhos","records":"Registros","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas"},"summary":{"main":{"title":"Resumo do assunto"},"description":"Descricao","stats":{"title":"Estatisticas"},"distribution":{"title":"Distribuicao dos registros","byClass":"Por classe","byLanguage":"Por idioma"},"citation":{"title":"Como citar"}},"works":{"title":"Trabalhos relacionados","empty":"Nenhum trabalho encontrado para este assunto."},"fields":{"id":"ID","class":"Classe","title":"Titulo","prefLabel":"Rotulo preferencial"}},"adminArea":{"eyebrow":"Área de administração","title":"Ações do registro","actions":{"delete":"Excluir","edit":"Editar","translate":"Traduzir","process":"Processar"}},"article":{"kicker":"Artigo Cientifico","proceedingKicker":"Anais de eventos","noCover":"Imagem nao disponivel","sections":{"label":"Secao","title":"Secoes"},"authors":{"label":"Autores","title":"Autores do artigo","profile":"Ver Perfil"},"meta":{"journal":"Revista","year":"Ano","doi":"DOI","language":"Idioma"},"abstract":{"title":"Resumo"},"citation":{"title":"Como citar"},"indicators":{"title":"Indicadores","views":"Visualizacoes","downloads":"Downloads","likes":"Curtidas","citations":"Citacoes"},"data":{"title":"Dados","copy":"Copiar","tabs":{"fulltext":"Texto Completo","json":"JSON","rdf":"RDF (Turtle)","ris":"RIS","marc21":"MARC21","references":"Referencias","citations":"Citacoes"},"aria":{"viewData":"Ver dados em {{format}}","copyData":"Copiar {{format}} para area de transferencia"}},"actions":{"downloadPdf":"Baixar PDF","copyLink":"Copiar link","shareWhatsApp":"Compartilhar WhatsApp","shareInstagram":"Compartilhar no Instagram","shareLinkedIn":"Compartilhar no LinkedIn"}},"bookChapter":{"aria":{"page":"Pagina de capitulo de livro"},"kicker":"Capitulo de Livro","cover":{"alt":"Capa do livro","unavailable":"Sem capa"},"actions":{"openBook":"Acessar livro completo","openPdf":"Abrir PDF do capitulo"},"meta":{"authors":"Autores","book":"Livro","year":"Ano","pages":"Paginas","language":"Idioma"},"sections":{"abstract":"Resumo","citation":"Como citar","indicators":"Indicadores","data":"Dados"}},"citation":{"styles":{"abnt":"ABNT","apa":"APA","vancouver":"Vancouver"},"actions":{"copy":"Copiar Citacao"},"aria":{"tabs":"Estilos de citacao"}},"footer":{"copyright":"Brapci © 2026","session":"Sessao","linkedIn":"LinkedIn da Brapci","instagram":"Instagram da Brapci","socialMedia":"Midias sociais da Brapci"}},"h":{},"s":200,"st":"OK","u":"/i18n/pt-br.json","rt":"json"},"__nghData__":[{"t":{"3":"t6"},"c":{"3":[{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[],"2":[{"i":"t8","r":1}]}},{"i":"t6","r":1,"t":{"1":"t7","2":"t8"},"c":{"1":[{"i":"t7","r":1}],"2":[]}}]}},{"t":{"12":"t9","13":"t10","14":"t11"},"c":{"12":[],"13":[],"14":[{"i":"t11","r":2,"t":{"22":"t12","23":"t15","24":"t16","25":"t17","26":"t18"},"c":{"22":[{"i":"t12","r":2,"t":{"37":"t13","50":"t14"},"c":{"37":[{"i":"t13","r":1,"x":5}],"50":[{"i":"t14","r":1,"x":6}]}}],"23":[],"24":[],"25":[],"26":[]}}]}},{"t":{"42":"t0","98":"t1","99":"t2","105":"t3","106":"t4","107":"t5","115":"t19"},"c":{"42":[],"98":[],"99":[],"105":[],"106":[{"i":"t4","r":1}],"107":[],"108":[{"i":"c3634193745","r":1}],"115":[]}}]}</script></body></html>`;