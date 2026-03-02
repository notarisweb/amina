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
  // 2. OUTPUT SERVER & ADAPTER VERCEL (Untuk Analytics & Data Dinamis)
  output: "server",
  adapter: vercel(),

  // 3. KONFIGURASI DOMAIN & URL
  site: config.site.base_url ? config.site.base_url : "https://amina.or.id",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",

  // 4. OPTIMASI GAMBAR (Kunci Kecepatan & SEO)
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

  // 5. VITE & PLUGINS
  vite: { 
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['sharp']
    }
  },

  // 6. INTEGRASI
  integrations: [
    react(),
    sitemap({
      // Optimasi SEO: Generate sitemap otomatis untuk Google
      filter: (page) => !page.includes('/studio') 
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