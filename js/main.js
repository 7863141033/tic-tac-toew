/* ============ LUXEHAUS — Shared UI ============ */
const fmt = n => "$" + n.toFixed(2);
const ICONS = {
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.2 1.3-1.9 1.4-.5.1-1.2.2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.5 2.9 1.7.3.2.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.2.5.3.6.4.1.2.1.9-.2 1.8z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.1 1.8 3.6 4 3.9v3c-1.6 0-3-.5-4.2-1.4v6.6c0 3.8-2.6 6-5.9 6-3 0-5.4-2.3-5.4-5.3 0-3.2 2.8-5.6 6.1-5.3v3.1c-1.5-.4-3 .6-3 2.2 0 1.3 1.1 2.3 2.4 2.3 1.5 0 2.7-1.1 2.7-3V3h3.3z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7 2 3 6 3 11c0 3.7 2.2 6.8 5.4 8.3-.1-.7-.2-1.8 0-2.5l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.9.8 2.4l-.4 1.3c-.1.3-.3.4-.6.3-1.3-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6.9.3 1.9.5 2.9.5 5 0 9-4 9-9s-4-9-9-9z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h13v8H1zM14 11h5l3 3v2h-8z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4c-9 0-16-7-16-16z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  pin2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'
};

function stars(rating, count) {
  const full = Math.round(rating);
  return `<span class="stars" aria-label="${rating} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)}${count ? `<small>(${count})</small>` : ""}</span>`;
}

function cardHtml(p) {
  const price = p.sale != null ? `<del>${fmt(p.price)}</del> ${fmt(p.sale)}` : fmt(p.price);
  const badge = p.tags.includes("sale") ? '<span class="card-badge sale">Sale</span>' : p.tags.includes("new") ? '<span class="card-badge">New</span>' : p.tags.includes("best") ? '<span class="card-badge">Best Seller</span>' : "";
  const swatches = p.colors.length ? `<div class="swatch-row">${p.colors.slice(0, 4).map(c => `<span class="swatch" style="background:${c.hex}" title="${c.name}"></span>`).join("")}</div>` : "";
  return `<article class="card">
    <a class="card-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
      ${badge}
      <div class="card-actions"><span class="btn btn-dark btn-sm">View Product</span></div>
    </a>
    <div class="card-body">
      <span class="card-cat">${catName(p.cat)}</span>
      <a class="card-name" href="product.html?id=${p.id}">${p.name}</a>
      ${stars(p.rating, p.reviews)}
      <div class="card-price">${price}</div>
      ${swatches}
    </div>
  </article>`;
}
const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;

function renderGrid(id, list) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = list.map(cardHtml).join("");
}

function renderCategories(id, limit) {
  const el = document.getElementById(id);
  if (!el) return;
  const cats = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;
  el.innerHTML = cats.map(c => `<a class="cat-card" href="shop.html?cat=${c.id}">
    <img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none'">
    <span class="cat-label"><h3>${c.name}</h3><span>Shop →</span></span></a>`).join("");
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.innerHTML = ICONS.check + "<span></span>"; document.body.appendChild(t); }
  t.querySelector("span").textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============ Header / Footer injection ============ */
const NAV_LINKS = [["index.html", "Home"], ["shop.html", "Shop"], ["about.html", "About"], ["faq.html", "FAQ"], ["contact.html", "Contact"]];

function buildHeader() {
  const page = (location.pathname.split("/").pop() || "index.html");
  const el = document.getElementById("siteHeader");
  if (!el) return;
  el.innerHTML = `
  <div class="topbar">Free shipping on orders over $75 &nbsp;·&nbsp; Use code <b>WELCOME15</b> for 15% off</div>
  <header class="header">
    <div class="container header-inner">
      <button class="nav-toggle" id="navToggle" aria-label="Open menu">${ICONS.menu}</button>
      <a class="logo" href="index.html" aria-label="LuxeHaus home">
        <span class="logo-mark">L</span>
        <span class="logo-word">LUXEHAUS<em>Hair &amp; Beauty</em></span>
      </a>
      <nav class="nav" id="mainNav" aria-label="Main navigation">
        ${NAV_LINKS.map(([href, label]) => `<a href="${href}" class="${page === href ? "active" : ""}">${label}</a>`).join("")}
      </nav>
      <div class="header-icons">
        <a class="icon-btn" href="account.html" aria-label="Account">${ICONS.user}</a>
        <a class="icon-btn" href="cart.html" aria-label="Shopping cart">${ICONS.bag}<span class="cart-badge" id="cartCount">0</span></a>
      </div>
    </div>
  </header>`;
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function buildFooter() {
  const el = document.getElementById("siteFooter");
  if (!el) return;
  el.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="logo" href="index.html"><span class="logo-mark">L</span><span class="logo-word">LUXEHAUS<em>Hair &amp; Beauty</em></span></a>
          <p>Premium wigs, bundles and beauty essentials for the confident you. Quality you can trust, prices you'll love.</p>
          <div class="social-row">
            <a href="#" aria-label="Instagram">${ICONS.ig}</a>
            <a href="#" aria-label="Facebook">${ICONS.fb}</a>
            <a href="#" aria-label="TikTok">${ICONS.tiktok}</a>
            <a href="#" aria-label="Pinterest">${ICONS.pin}</a>
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html">All Products</a></li>
            <li><a href="shop.html?cat=wigs">Wigs</a></li>
            <li><a href="shop.html?cat=bundles">Bundles</a></li>
            <li><a href="shop.html?cat=hair-care">Hair Care</a></li>
            <li><a href="shop.html?cat=makeup">Makeup</a></li>
            <li><a href="shop.html?cat=skincare">Skincare</a></li>
            <li><a href="shop.html?cat=new-arrivals">New Arrivals</a></li>
            <li><a href="shop.html?cat=sale">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="account.html">My Account</a></li>
            <li><a href="account.html">Order Tracking</a></li>
          </ul>
        </div>
        <div>
          <h4>Customer Care</h4>
          <ul>
            <li><a href="shipping-policy.html">Shipping Policy</a></li>
            <li><a href="returns-policy.html">Return Policy</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms &amp; Conditions</a></li>
            <li><a href="mailto:support@luxehausbeauty.com">support@luxehausbeauty.com</a></li>
            <li><a href="tel:+18885550170">+1 (888) 555-0170</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 LuxeHaus Beauty. All rights reserved.</span>
        <div class="pay-icons"><span>VISA</span><span>Mastercard</span><span>AMEX</span><span>PayPal</span><span>Apple Pay</span><span>Google Pay</span></div>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/18885550170" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.wa}</a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  Store.updateBadge();
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  document.querySelectorAll("[data-newsletter]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const input = f.querySelector("input");
    if (input.value.trim()) { localStorage.setItem("lh_newsletter", input.value.trim()); input.value = ""; toast("You're on the list — welcome to LuxeHaus ✨"); }
  }));
});
