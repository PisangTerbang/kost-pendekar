import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Sembunyikan indikator "N" Next.js di pojok layar saat npm run dev.
  // Error tetap muncul kalau ada.
  devIndicators: false,
  // Tidak menampilkan header "X-Powered-By: Next.js"
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
