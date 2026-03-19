import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

// FIX: Import Vercel adapter terbaru
import vercel from "@astrojs/vercel";

export default defineConfig({
  // FIX: Gunakan 'static' untuk kecepatan maksimal di Vercel (SSG)
  output: "static", 
  
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  site: "https://amina.or.id",
  base: config.site.base_path ? config.site.base_path : "/",

  // FIX 404: Set ke 'ignore' supaya URL pake/tanpa slash di akhir tetep jalan
  // Ini obat paling manjur buat drama 404 di Astro + Vercel
  trailingSlash: "ignore",

  image: {
    domains: ["studio.amina.or.id"],
    remotePatterns: [{ protocol: "https", hostname: "studio.amina.or.id" }],
  },

  prefetch: true,

  integrations: [
    tailwind({
      applyBaseStyles: false, // Kontrol penuh ada di CSS utama kita
    }),
    react(),
    sitemap({
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

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
  },

  build: {
    // FIX: Pastikan format output adalah directory (clean URL)
    format: 'directory'
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