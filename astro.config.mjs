import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

export default defineConfig({
  // 1. SSG Mode untuk kecepatan maksimal dan kecocokan dengan Cloudflare Pages
  output: "static", 

  site: "https://amina.or.id",
  base: config.site.base_path ? config.site.base_path : "/",

  // Diabaikan sesuai kebutuhan standard struktur folder Cloudflare Pages
  trailingSlash: "ignore",

  image: {
    domains: ["studio.amina.or.id"],
    remotePatterns: [{ protocol: "https", hostname: "studio.amina.or.id" }],
  },

  prefetch: true,

  integrations: [
    tailwind({
      applyBaseStyles: false, 
    }),
    react(),
    sitemap({
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404')
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

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
  },

  // 2. JALUR FORCE STATIC: Mengunci Astro agar tidak mencoba me-render halaman sebagai server-side
  build: {
    format: 'directory', // Bikin URL bersih tanpa .html (sangat disukai Cloudflare)
    assets: '_astro'
  },

  vite: {
    optimizeDeps: {
      exclude: ['sharp']
    },
    build: {
      cssCodeSplit: true,
      // Bersihkan cache pemicu module-resolution lama dari vercel
      commonjsOptions: {
        transformMixedEsModules: true
      }
    }
  },
});