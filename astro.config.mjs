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
  // SSG Mode untuk kecepatan maksimal
  output: "static", 
  
  // SOLUSI UTAMA: Hapus adapter Vercel agar hasil build menjadi HTML statis murni untuk Cloudflare
  // adapter: vercel() dihapus di sini

  site: "https://amina.or.id",
  base: config.site.base_path ? config.site.base_path : "/",

  // Diturunkan menjadi 'always' atau 'ignore' sesuai kebutuhan standard Cloudflare Pages
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

  build: {
    format: 'directory' // Bikin URL bersih tanpa .html, Cloudflare Pages sangat suka format ini
  },

  vite: {
    optimizeDeps: {
      exclude: ['sharp']
    },
    build: {
      cssCodeSplit: true,
    }
  },
});