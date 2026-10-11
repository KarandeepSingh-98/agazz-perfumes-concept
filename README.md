# AGazz Perfumes — Concept Storefront

A frontend-only concept website for AGazz Perfumes, a niche fragrance brand. Built to present the AGazz catalogue — perfumes, concentrated attars, home fragrance, and hanging car diffusers — in a cinematic, editorial layout with a working catalogue, filters, search, sorting, product detail pages, and a persistent wishlist.

This is a **frontend demo only**. There is no backend, database, authentication, or payment processing — it is not connected to any order, checkout, or account system.

## Stack

- **React 19** + **Vite 8** — app shell and dev/build tooling
- **React Router 7** — client-side routing
- **Framer Motion 14** — page and scroll-triggered animations (respects `prefers-reduced-motion` via `MotionConfig`)
- **CSS Modules** — component-scoped styling, no CSS framework
- **ESLint** — linting (`eslint.config.js`)

## Getting started

Requires Node.js (a recent LTS version) and npm.

```bash
npm install     # install dependencies
npm run dev     # start the local dev server (Vite)
npm run build   # production build, output to dist/
npm run preview # preview the production build locally
npm run lint    # run ESLint
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, featured fragrances, shop-by-category, brand story |
| `/shop` | Catalogue | All products with category filter, search, and price/name sorting |
| `/product/:id` | Product detail | Pricing, size, description, fragrance notes, related products |
| `/wishlist` | Wishlist | Saved products, persisted to the browser via `localStorage` |
| `/about` | Our House | Brand copy |
| any other path | 404 | Redirect/fallback page |

## Project structure

```
src/
  assets/products/     product photography (originals + cropped derivatives in derived/)
  components/          layout, product, filter, and common UI components
  context/              wishlist state (Context + localStorage)
  data/products.js      the product catalogue — single source of truth
  pages/                route-level page components
```

## Product data and imagery

All product names, sizes, prices, and fragrance notes in `src/data/products.js` are taken directly from the supplied product artwork — nothing is invented. Where a product's source photo is a fragrance-notes infographic, a cropped, text-free version is used for cards and listings, and the original full artwork is shown separately on that product's detail page.

## Known limitations

- No backend: catalogue data is static, defined in `src/data/products.js`.
- No checkout, payment, or account system — the wishlist is the only persisted user state, stored locally in the browser.
- Brand history, heritage, and business/contact details are intentionally omitted pending confirmation — see the disclaimers in the footer, About page, and product detail pages.
