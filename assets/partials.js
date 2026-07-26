// Shared header/footer injection for static multi-page site
(function () {
  const header = `
  <header class="site-header">
    <div class="wrap nav">
      <a class="logo" href="/">Singleton<span>Ops</span></a>
      <nav class="nav-links" aria-label="Primary">
        <a href="/services.html">Services</a>
        <a href="/products/ai-markets-ops-kit.html">Product</a>
        <a href="/contact.html">Contact</a>
        <a href="/legal/disclaimer.html">Legal</a>
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <strong style="color:var(--text)">SingletonOps</strong>
          <div>by VibeX LLC</div>
        </div>
        <div class="footer-links">
          <a href="/services.html">Services</a>
          <a href="/products/ai-markets-ops-kit.html">Kit</a>
          <a href="/contact.html">Contact</a>
          <a href="/legal/disclaimer.html">Disclaimer</a>
          <a href="/legal/terms.html">Terms</a>
          <a href="/legal/license.html">License</a>
        </div>
      </div>
      <div class="footer-disclaimer">
        © <span data-year></span> VibeX LLC · SingletonOps · singletonops.ai · singletonops.com<br>
        Educational content and professional services. Not investment, trading, tax, or legal advice.
        No HIPAA/PHI, political campaign, or adult content projects. AI outputs can be wrong—verify critical facts.
      </div>
    </div>
  </footer>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;
})();
