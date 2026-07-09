import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, i as renderScript, j as renderSlot, k as renderTransition, l as renderHead } from './astro/server_qrAGd2zo.mjs';
import 'piccolore';
/* empty css                             */
import { $ as $$Image } from './_astro_assets_CJii7UwF.mjs';
import { IoChevronDown, IoSearch } from 'react-icons/io5';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { jsx } from 'react/jsx-runtime';
import 'react';
import * as FaIcons from 'react-icons/fa6';
import { BiMap, BiEnvelope, BiRightArrowAlt } from 'react-icons/bi';
import 'clsx';

const site = {"title":"Amina Media | Berbagi & Peduli","base_url":"https://amina.or.id","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"57","logo_text":"Amina"};
const settings = {"pagination":9};
const metadata = {"meta_author":"Amina Media","meta_image":"/images/og-image.png","meta_description":"Portal berita Islami dan aksi sosial Yayasan Amal Insan Abadi. Menebar manfaat, membangun kepedulian ummat."};
const google_tag_manager = {"enable":true,"gtm_id":"G-XDX1TKCDP1"};
const params = {"contact_form_action":"https://formspree.io/f/mlgvroyb","copyright":"© 2026 Yayasan Amal Insan Abadi | Developed by [Aris](https://amina.or.id)"};
const contactinfo = {"address":"Jl. Pahlawan, Purwokerto Barat, Banyumas, Jawa Tengah, Indonesia.","email":"admin@amina.or.id","phone":"0896-9595-6464"};
const config = {
  site,
  settings,
  metadata,
  google_tag_manager,
  params,
  contactinfo,
};

const $$Astro$4 = createAstro("https://amina.or.id");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  const { src } = Astro2.props;
  const {
    logo,
    logo_width,
    logo_height,
    title
  } = config.site;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="navbar-brand block"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": logo_width.replace("px", "") * 2, "height": logo_height.replace("px", "") * 2, "src": src ? src : logo, "alt": title, "style": {
    height: logo_height.replace("px", "") + "px",
    width: logo_width.replace("px", "") + "px"
  } })}` } </a>`;
}, "D:/website/amina/src/layouts/components/Logo.astro", void 0);

const main$1 = [{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"},{"name":"Pages","url":"","hasChildren":true,"children":[{"name":"Authors","url":"/authors"},{"name":"Categories","url":"/categories"},{"name":"Tags","url":"/tags"},{"name":"Privacy Policy","url":"/privacy-policy"}]}];
const footer = [{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"},{"name":"Privacy Policy","url":"/privacy-policy"}];
const menu = {
  main: main$1,
  footer,
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://amina.or.id");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const main = menu.main || [];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="main-header" class="w-full bg-white/90 dark:bg-[#0b1c3c]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 sticky top-0 z-50 transition-all duration-500 ease-in-out"> <div class="container relative"> <div class="flex items-center justify-between h-20 transition-all duration-500" id="header-main-row"> <div class="flex items-center shrink-0 transition-transform duration-500" id="logo-wrap"> ', ' </div> <nav id="scrolled-nav" class="hidden lg:flex flex-1 justify-end px-8 opacity-0 translate-y-4 pointer-events-none transition-all duration-500"> <ul class="flex items-center gap-6"> ', ' </ul> </nav> <div class="flex items-center gap-3 shrink-0"> <div id="search-box" class="relative hidden md:block transition-all duration-500 opacity-100 scale-100"> <input type="text" placeholder="Cari..." class="w-40 lg:w-56 pl-9 pr-4 py-2 rounded-none border border-gray-100 dark:border-white/10 text-xs focus:outline-none bg-gray-50/50 dark:bg-white/5 dark:text-white transition-all focus:w-64"> ', ' </div> <button id="theme-toggle" type="button" class="p-2.5 rounded-none bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-yellow-400 hover:bg-primary hover:text-white transition-all duration-300"> ', " ", ' </button> </div> </div> </div> <nav id="initial-nav-row" class="border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0b1c3c] transition-all duration-500 origin-top h-14 overflow-visible"> <div class="container h-full"> <ul class="flex items-center gap-8 h-full overflow-visible whitespace-nowrap"> ', " </ul> </div> </nav> </header>  <script>\n  function setupHeader() {\n    const header = document.getElementById('main-header');\n    const toggleBtn = document.getElementById('theme-toggle');\n    const moon = document.getElementById('icon-moon');\n    const sun = document.getElementById('icon-sun');\n\n    // 1. Scroll Logic with Performance Guard\n    let ticking = false;\n    window.addEventListener('scroll', () => {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          if (window.scrollY > 80) {\n            header.classList.add('is-scrolled');\n          } else {\n            header.classList.remove('is-scrolled');\n          }\n          ticking = false;\n        });\n        ticking = true;\n      }\n    });\n\n    // 2. Theme Toggle Logic\n    function updateIcons() {\n      const isDark = document.documentElement.classList.contains('dark');\n      if (isDark) {\n        moon?.classList.add('hidden');\n        sun?.classList.remove('hidden');\n      } else {\n        sun?.classList.add('hidden');\n        moon?.classList.remove('hidden');\n      }\n    }\n\n    if (toggleBtn) {\n      updateIcons();\n      toggleBtn.onclick = () => {\n        document.documentElement.classList.toggle('dark');\n        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');\n        updateIcons();\n      };\n    }\n  }\n\n  // Init on load\n  setupHeader();\n\n  // Support for Astro View Transitions\n  document.addEventListener('astro:after-swap', setupHeader);\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, {}), main.map((item) => renderTemplate`<li class="relative group"> ${item.hasChildren ? renderTemplate`<div class="flex items-center gap-1 cursor-pointer py-2"> <span class="text-[11px] font-black uppercase tracking-widest text-dark dark:text-white group-hover:text-primary transition">${item.name}</span> ${renderComponent($$result, "IoChevronDown", IoChevronDown, { "className": "h-3 w-3 text-primary group-hover:rotate-180 transition-transform duration-300" })} <div class="absolute top-full right-0 pt-2 hidden group-hover:block z-[70] min-w-[200px]"> <div class="bg-white dark:bg-[#0b1c3c] shadow-2xl border border-gray-100 dark:border-white/10 py-3 rounded-none"> ${item.children?.map((child) => renderTemplate`<a${addAttribute(child.url, "href")} class="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-dark dark:text-gray-300 hover:bg-primary hover:text-white transition-all">${child.name}</a>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="text-[11px] font-black uppercase tracking-widest text-dark dark:text-white hover:text-primary transition py-2">${item.name}</a>`} </li>`), renderComponent($$result, "IoSearch", IoSearch, { "className": "absolute left-3 top-2.5 text-gray-400 h-3.5 w-3.5" }), renderComponent($$result, "HiOutlineMoon", HiOutlineMoon, { "id": "icon-moon", "class": "h-4 w-4 pointer-events-none" }), renderComponent($$result, "HiOutlineSun", HiOutlineSun, { "id": "icon-sun", "class": "h-4 w-4 hidden pointer-events-none" }), main.map((item) => renderTemplate`<li class="relative group h-full flex items-center"> ${item.hasChildren ? renderTemplate`<div class="flex items-center gap-1 cursor-pointer py-1"> <span class="text-[13px] font-black uppercase tracking-widest text-primary group-hover:text-orange-600 transition"> ${item.name} </span> ${renderComponent($$result, "IoChevronDown", IoChevronDown, { "className": "h-3 w-3 text-primary group-hover:rotate-180 transition-transform" })} <div class="absolute top-full left-0 pt-0 hidden group-hover:block z-[60] min-w-[220px]"> <div class="bg-white dark:bg-[#0b1c3c] shadow-2xl border border-gray-100 dark:border-white/10 py-4 mt-[1px]"> ${item.children?.map((child) => renderTemplate`<a${addAttribute(child.url, "href")} class="block px-6 py-3 text-[11px] font-extrabold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all">${child.name}</a>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="text-[13px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 hover:text-primary transition"> ${item.name} </a>`} </li>`));
}, "D:/website/amina/src/layouts/partials/Header.astro", void 0);

const iconLibraries = {
  fa: FaIcons
};
const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : void 0;
  if (!Icon) {
    return /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Icon not found" });
  }
  return /* @__PURE__ */ jsx(Icon, { ...props });
};
const getIconLibrary = (icon) => {
  const libraryKey = icon.substring(0, 2).toLowerCase();
  return iconLibraries[libraryKey];
};

const $$Astro$2 = createAstro("https://amina.or.id");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Social;
  const { source, className } = Astro2.props;
  const iconMap = {
    facebook: "FaFacebook",
    x: "FaXTwitter",
    instagram: "FaInstagram",
    linkedin: "FaLinkedin",
    youtube: "FaYoutube"
  };
  const normalize = (src) => {
    if (!src) return [];
    if (Array.isArray(src)) return src;
    if (typeof src === "object" && src !== null) {
      return Object.entries(src).map(([name, link]) => ({
        name,
        link: String(link),
        icon: iconMap[String(name).toLowerCase()] || `Fa${String(name).charAt(0).toUpperCase()}${String(name).slice(1)}`
      }));
    }
    return [];
  };
  const items = normalize(source);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(className, "class")}> ${items.map((social) => renderTemplate`<li> <a${addAttribute(social.name, "aria-label")}${addAttribute(social.link, "href")} target="_blank" rel="noopener noreferrer nofollow"> <span class="sr-only">${social.name}</span> ${renderComponent($$result, "DynamicIcon", DynamicIcon, { "className": "inline-block", "icon": social.icon })} </a> </li>`)} </ul>`;
}, "D:/website/amina/src/layouts/components/Social.astro", void 0);

const main = [{"name":"facebook","icon":"FaFacebook","link":"https://www.facebook.com/"},{"name":"X","icon":"FaXTwitter","link":"https://x.com/"},{"name":"instagram","icon":"FaInstagram","link":"https://www.instagram.com/"},{"name":"linkedin","icon":"FaLinkedin","link":"https://www.linkedin.com/"},{"name":"YouTube","icon":"FaYoutube","link":"https://www.youtube.com/"}];
const social = {
  main,
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerMenu = menu.footer || [];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#fcfaf2] pt-20 pb-10 text-slate-600 relative overflow-hidden border-t border-slate-200"> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div> <div class="container relative z-10"> <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 text-left"> <div class="md:col-span-12 lg:col-span-4"> <div class="mb-6 flex justify-start"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> <p class="mb-6 text-sm leading-relaxed text-slate-500 max-w-sm">
Amina (Amal Insan Abadi) berdedikasi menyebarkan syiar Islam dan aksi nyata sosial. 
          Membangun kepedulian ummat melalui informasi yang bermanfaat dan tepercaya.
</p> <div class="space-y-3 mb-6 text-[13px]"> <div class="flex items-start gap-3"> ${renderComponent($$result, "BiMap", BiMap, { "className": "text-primary h-5 w-5 shrink-0 mt-0.5" })} <span class="text-slate-700 font-medium">Jl. Pahlawan, Purwokerto, Jawa Tengah</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result, "BiEnvelope", BiEnvelope, { "className": "text-primary h-5 w-5 shrink-0" })} <a href="mailto:admin@amina.or.id" class="text-slate-700 font-medium hover:text-primary transition">admin@amina.or.id</a> </div> </div> <div class="flex items-center gap-4 text-slate-800"> ${renderComponent($$result, "Social", $$Social, { "source": social.main, "className": "flex flex-row gap-4 text-xl hover:text-primary transition" })} </div> </div> <div class="md:col-span-6 lg:col-span-2"> <h4 class="mb-8 text-xs font-black text-slate-900 uppercase tracking-[0.3em]">
Kategori
</h4> <ul class="space-y-3 text-[13px] font-bold uppercase"> <li><a href="/categories/artikel-islami" class="text-slate-700 hover:text-primary transition">Artikel Islami</a></li> <li><a href="/categories/berita" class="text-slate-700 hover:text-primary transition">Berita</a></li> <li><a href="https://onislam.web.id" target="_blank" class="text-slate-700 hover:text-primary transition">Media Islam</a></li> <li><a href="/categories/oase-iman" class="text-slate-700 hover:text-primary transition">Oase Iman</a></li> </ul> </div> <div class="md:col-span-6 lg:col-span-3"> <h4 class="mb-8 text-xs font-black text-slate-900 uppercase tracking-[0.3em]">
Organisasi
</h4> <ul class="space-y-3 text-[13px] font-bold uppercase"> ${footerMenu.map((item) => renderTemplate`<li><a${addAttribute(item.url, "href")} class="text-slate-700 hover:text-primary transition">${item.name}</a></li>`)} <li><a href="/contact" class="text-primary font-black hover:brightness-90 transition">Hubungi Kami</a></li> </ul> </div> <div class="md:col-span-12 lg:col-span-3"> <h4 class="mb-8 text-xs font-black text-slate-900 uppercase tracking-[0.3em]">
Rekening Donasi
</h4> <div class="relative"> <div class="space-y-6"> <div class="flex flex-col"> <span class="text-[10px] font-black text-primary uppercase tracking-widest mb-1">BANK SYARIAH INDONESIA</span> <span class="text-[22px] font-mono text-slate-900 tracking-tighter font-black leading-none">7 888 99 1012</span> <span class="text-[11px] text-slate-500 uppercase mt-2 font-bold italic leading-tight">a.n. YAYASAN AMAL INSAN ABADI</span> </div> <a href="https://wa.me/6289695956464" target="_blank" class="inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white py-3 px-8 text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-md rounded-full group">
Konfirmasi ${renderComponent($$result, "BiRightArrowAlt", BiRightArrowAlt, { "className": "ml-2 text-xl group-hover:translate-x-1 transition-transform" })} </a> </div> </div> <p class="mt-8 text-[10px] text-slate-400 italic leading-relaxed">
*Dukungan Anda menggerakkan dakwah dan aksi sosial kami.
</p> </div> </div> <div class="mt-20 border-t border-slate-200 pt-8 text-center"> <p class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.site.title}. Semua Hak Dilindungi.
</p> </div> </div> </footer>`;
}, "D:/website/amina/src/layouts/partials/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://amina.or.id");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/website/amina/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/website/amina/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://amina.or.id");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Amina Media - Portal Berita Islami",
    description = "Portal berita dan dakwah Islam terpercaya",
    image = "/images/og.jpg",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site)
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preload" href="/fonts/inter-v12-latin-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/fonts/inter-v12-latin-700.woff2" as="font" type="font/woff2" crossorigin="anonymous"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" type="image/png" href="/images/favicon.png"><link rel="preconnect" href="https://studio.amina.or.id" crossorigin><link rel="dns-prefetch" href="https://studio.amina.or.id">', "<script>\n    const theme = (() => {\n      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n        return localStorage.getItem('theme');\n      }\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        return 'dark';\n      }\n      return 'light';\n    })();\n  \n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    window.localStorage.setItem('theme', theme);\n  <\/script>", '</head> <body class="bg-white dark:bg-[#0b1c3c] text-gray-900 dark:text-gray-100 antialiased selection:bg-primary selection:text-white transition-colors duration-300"> ', ' <main class="min-h-screen flex flex-col"', "> ", " </main> ", "  <script>\n    // Memastikan tema tetap konsisten saat perpindahan halaman via View Transitions\n    document.addEventListener('astro:after-swap', () => {\n      const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);\n      document.documentElement.classList.toggle('dark', isDark);\n    });\n  <\/script> </body> </html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(renderTransition($$result, "z3avlafq"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/website/amina/src/layouts/Base.astro", "self");

export { $$Base as $, $$Social as a, config as c };
