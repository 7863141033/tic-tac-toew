# Base44 Dev Environment — LuxeHaus E-Commerce

## Project

Static multi-page e-commerce storefront (HTML/CSS/vanilla JS) served by nginx. No build step, no backend, no database. Cart, checkout, coupons and demo accounts are client-side (localStorage).

## Running

```bash
docker compose -f docker-compose.base44.yml up -d
```

nginx serves the repo root on host port 3000. No live-reload dev server exists for this project; call `reload_preview` after edits.

**Quirk:** the repo root directory must be `chmod 755` — nginx's worker user cannot traverse a 700 root (403 Forbidden).

## Architecture

- `js/data.js` — catalog: 32 products, 11 categories, coupons (WELCOME15/GLOW10/LUXE20), testimonials
- `js/store.js` — `Store` object: cart, coupons, orders, demo accounts (localStorage keys `lh_*`)
- `js/main.js` — injects shared header/footer into `#siteHeader`/`#siteFooter` on every page, renders product cards, toasts
- Pages: index, shop (`?cat=`), product (`?id=`), cart, checkout, account, about, contact, faq, 4 policy pages

## Payments note

Checkout is a demo flow (validated card form + PayPal/Apple Pay/Google Pay tabs, no real charge). Real payments require wiring a gateway with live credentials from the user.

## Verification

- `for f in index shop cart checkout; do curl -so /dev/null -w "%{http_code} " http://localhost:3000/$f.html; done` → all 200
- Logic test: run cart/coupon/order flows in a node:22-alpine container against `js/store.js`
