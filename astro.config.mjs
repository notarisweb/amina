import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";

// 1. IMPORT ADAPTER VERCEL
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // 2. OUTPUT HYBRID (Sangat direkomendasikan untuk Headless WordPress)
  // Ini memungkinkan halaman statis (prerender) & dinamis (SSR) berjalan berdampingan
  output: "server",
  adapter: vercel(),

  // 3. KONFIGURASI DOMAIN & URL
  site: "https://amina.or.id",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",

  // 4. OPTIMASI GAMBAR TINGKAT LANJUT
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    domains: ["studio.amina.or.id"], // Whitelist domain backend Hawkhost
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio.amina.or.id",
      },
    ],
  },

  // 5. PENINGKATAN PERFORMA & VITE
  prefetch: true, // Memuat halaman di latar belakang saat link di-hover (Perceived Speed)
  vite: { 
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['sharp']
    },
    build: {
      cssCodeSplit: true, // Membagi CSS agar loading per halaman lebih ringan
    }
  },

  // 6. INTEGRASI SEO & FITUR
  integrations: [
    react(),
    sitemap({
      // Generate sitemap otomatis agar Google News lebih cepat merayapi Amina
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/studio') && !page.includes('/404')
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  // 7. MARKDOWN & SHIKI
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
});