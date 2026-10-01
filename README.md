# LuxeHaus — Premium Hair & Beauty E-Commerce

A polished, mobile-first e-commerce storefront for a beauty and hair products brand, built with semantic HTML, modern CSS, and vanilla JavaScript — no build step.

## Pages

- `index.html` — Home: hero, featured categories, best sellers, special offers, new arrivals, reviews, newsletter, social
- `shop.html` — Shop with category filters, quick filters and sorting
- `product.html` — Product detail (gallery, colors, lengths, quantity, reviews, related products)
- `cart.html` — Cart with quantity editing and discount codes
- `checkout.html` — Secure checkout (shipping options, card/PayPal/Apple Pay/Google Pay, confirmation + tracking)
- `account.html` — Customer accounts, order history and tracking
- `about.html` / `contact.html` / `faq.html` — brand story, contact form + WhatsApp, FAQ
- `shipping-policy.html`, `returns-policy.html`, `privacy-policy.html`, `terms.html` — legal/policy pages

## Architecture

- `js/data.js` — product catalog (32 products, 11 categories), coupons, testimonials
- `js/store.js` — cart, coupons, orders and demo accounts (localStorage-backed)
- `js/main.js` — shared header/footer injection, product card rendering, toasts, reveal animations
- `css/style.css` — design system (black / white / nude / beige / gold)

## Notes

- Cart, checkout and accounts are client-side demo flows persisted in `localStorage` — no backend required.
- Payments are a demo flow (validated card form, PayPal/Apple Pay/Google Pay tabs). Wire a real payment gateway with live credentials to accept actual payments.
- Run: `docker compose -f docker-compose.base44.yml up -d` (serves on port 3000).
