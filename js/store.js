/* ============ LUXEHAUS — Store (cart, coupons, orders, account) ============ */
const Store = {
  read(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  write(k, v) { localStorage.setItem(k, JSON.stringify(v)); },

  // --- Cart ---
  getCart() { return this.read("lh_cart", []); },
  saveCart(c) { this.write("lh_cart", c); this.updateBadge(); },
  addToCart(id, opts = {}, qty = 1) {
    const key = [id, opts.color || "", opts.length || ""].join("|");
    const cart = this.getCart();
    const line = cart.find(i => i.key === key);
    if (line) line.qty += qty; else cart.push({ key, id, color: opts.color || "", length: opts.length || "", qty });
    this.saveCart(cart);
  },
  setQty(key, qty) {
    let cart = this.getCart();
    cart = qty <= 0 ? cart.filter(i => i.key !== key) : cart.map(i => i.key === key ? { ...i, qty } : i);
    this.saveCart(cart);
  },
  remove(key) { this.saveCart(this.getCart().filter(i => i.key !== key)); },
  clear() { this.saveCart([]); },
  count() { return this.getCart().reduce((s, i) => s + i.qty, 0); },
  updateBadge() {
    const el = document.getElementById("cartCount");
    if (el) { const n = this.count(); el.textContent = n; el.style.display = n ? "grid" : "none"; }
  },

  // --- Totals ---
  lineTotal(line) {
    const prod = PRODUCTS.find(p => p.id === line.id);
    if (!prod) return 0;
    return (prod.sale ?? prod.price) * line.qty;
  },
  totals(cart = this.getCart()) {
    const subtotal = cart.reduce((s, l) => s + this.lineTotal(l), 0);
    const code = (this.read("lh_coupon", "") || "").toUpperCase();
    const rate = COUPONS[code] || 0;
    const discount = +(subtotal * rate).toFixed(2);
    const after = subtotal - discount;
    const shipping = after > 0 && after < 75 ? 5.99 : 0;
    const tax = +(after * 0.08).toFixed(2);
    return { subtotal, discount, code: rate ? code : "", rate, shipping, tax, total: +(after + shipping + tax).toFixed(2) };
  },
  applyCoupon(code) {
    code = (code || "").toUpperCase().trim();
    if (!COUPONS[code]) return false;
    this.write("lh_coupon", code);
    return true;
  },
  clearCoupon() { this.write("lh_coupon", ""); },

  // --- Orders ---
  placeOrder(data) {
    const orders = this.read("lh_orders", []);
    const id = "LX-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    const order = { id, date: new Date().toISOString(), status: "Processing", items: this.getCart().map(l => ({ ...l, name: (PRODUCTS.find(p => p.id === l.id) || {}).name })), ...this.totals(), payment: data.payment, shipMethod: data.shipMethod, customer: { name: data.name, email: data.email, address: `${data.address}, ${data.city}, ${data.state} ${data.zip}` } };
    orders.unshift(order);
    this.write("lh_orders", orders);
    this.clear();
    this.clearCoupon();
    return order;
  },
  getOrders() { return this.read("lh_orders", []); },

  // --- Account (demo, client-side) ---
  signup(name, email, pass) {
    const users = this.read("lh_users", []);
    if (users.some(u => u.email === email)) return { ok: false, msg: "An account with this email already exists." };
    users.push({ name, email, pass });
    this.write("lh_users", users);
    this.write("lh_session", { name, email });
    return { ok: true };
  },
  login(email, pass) {
    const u = this.read("lh_users", []).find(u => u.email === email && u.pass === pass);
    if (!u) return { ok: false, msg: "Invalid email or password." };
    this.write("lh_session", { name: u.name, email: u.email });
    return { ok: true };
  },
  session() { return this.read("lh_session", null); },
  logout() { localStorage.removeItem("lh_session"); }
};
