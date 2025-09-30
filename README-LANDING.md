# Winvest Landing

Landing page Next.js (App Router, TypeScript, Tailwind v4) siap produksi.

## Menjalankan
- Dev: `npm run dev`
- Build: `npm run build` lalu `npm start`

## Struktur & Aset
- Halaman utama: `src/app/page.tsx`
- Layout & metadata: `src/app/layout.tsx`
- Style global & util: `src/app/globals.css`
- Aset: `public/assets/`
  - Wajib: `logo-winvest.png`, `hero-model.png`, `bg-hexagon.png`, `bg-candles.png`, `phone-watchlist.png`
  - Ikon: `ic-stats.png`, `ic-portfolio.png`, `ic-stack.png`, `ic-ai.png`
  - Lihat `public/assets/README-ASSETS.txt`

## Font
- Menggunakan Satoshi via Fontshare CDN (lihat import di `globals.css`).
- Untuk produksi terbaik, self-host font dengan `next/font/local` dan file `.woff2`.

## SEO
- Metadata dasar sudah di `layout.tsx`. Sesuaikan domain `metadataBase`.

## Kustomisasi Warna/Utilitas
- Utilitas khusus (`bg-hero`, `bg-hexagon`, `bg-candles`, `btn-primary`, `btn-secondary`, `card`) berada di `globals.css` menggunakan Tailwind v4.

## Catatan
- IDE mungkin menampilkan peringatan `@theme`/`@apply` pada CSS, namun Tailwind v4 mendukungnya saat build.
