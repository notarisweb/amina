import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, i as renderScript, j as renderSlot, k as renderTransition, l as renderHead } from './astro/server_CuGOslB9.mjs';
import 'piccolore';
/* empty css                             */
import { $ as $$Image } from './_astro_assets_HJVYoUCb.mjs';
import { IoChevronDown, IoSearch } from 'react-icons/io5';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { jsx } from 'react/jsx-runtime';
import 'react';
import * as FaIcons from 'react-icons/fa6';
import { BiMap, BiEnvelope } from 'react-icons/bi';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import 'clsx';

const site = {"title":"Amina Media | Berbagi & Peduli","base_url":"https://amina.or.id","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"57","logo_text":"Amina"};
const settings = {"pagination":9};
const metadata = {"meta_author":"Amina Media","meta_image":"/images/og-image.png","meta_description":"Portal berita Islami dan aksi sosial Yayasan Amal Insan Abadi. Menebar manfaat, membangun kepedulian ummat."};
const google_tag_manager = {"enable":true,"gtm_id":"G-XDX1TKCDP1"};
const params = {"contact_form_action":"#","copyright":"© 2026 Yayasan Amal Insan Abadi | Developed by [Aris](https://amina.or.id)"};
const contactinfo = {"address":"Indonesia","email":"info@amina.or.id","phone":"-"};
const config = {
  site,
  settings,
  metadata,
  google_tag_manager,
  params,
  contactinfo,
};

const $$Astro$3 = createAstro("https://amina.or.id");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const main$1 = [{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"},{"name":"Pages","url":"","hasChildren":true,"children":[{"name":"Authors","url":"/authors"},{"name":"Categories","url":"/categories"},{"name":"Tags","url":"/tags"},{"name":"Elements","url":"/elements"},{"name":"Privacy Policy","url":"/privacy-policy"}]}];
const footer = [{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"},{"name":"Elements","url":"/elements"},{"name":"Privacy Policy","url":"/privacy-policy"}];
const menu = {
  main: main$1,
  footer,
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const main = menu.main || [];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="w-full bg-white dark:bg-[#0b1c3c] border-b border-gray-200 dark:border-white/10 sticky top-0 z-50 transition-colors duration-300"> <div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8"> <div class="flex items-center"> ', ' </div> <div class="flex items-center gap-4"> <div class="relative hidden md:block"> <input type="text" placeholder="Cari..." class="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-100 dark:border-white/10 text-sm focus:outline-none bg-gray-50/50 dark:bg-white/5 dark:text-white"> ', ' </div> <button id="theme-toggle" type="button" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-gray-600 dark:text-yellow-400 focus:outline-none"> ', " ", ' </button> </div> </div> <nav class="border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0b1c3c] transition-colors"> <div class="max-w-7xl mx-auto px-4 lg:px-8"> <ul class="flex items-center gap-8 py-3 overflow-visible whitespace-nowrap"> ', " </ul> </div> </nav> </header> <script>\n  function applyTheme() {\n    const moon = document.getElementById('icon-moon');\n    const sun = document.getElementById('icon-sun');\n    const isDark = document.documentElement.classList.contains('dark');\n\n    if (isDark) {\n      moon?.classList.add('hidden');\n      sun?.classList.remove('hidden');\n    } else {\n      sun?.classList.add('hidden');\n      moon?.classList.remove('hidden');\n    }\n  }\n\n  function initTheme() {\n    const themeToggleBtn = document.getElementById('theme-toggle');\n    if (!themeToggleBtn) return;\n\n    // 1. Cek tema saat ini dan update icon\n    applyTheme();\n\n    // 2. Listener Klik Ganti Tema\n    themeToggleBtn.onclick = () => {\n      document.documentElement.classList.toggle('dark');\n      const isDark = document.documentElement.classList.contains('dark');\n      localStorage.setItem('theme', isDark ? 'dark' : 'light');\n      \n      // Update icon secara paksa\n      applyTheme();\n    };\n  }\n\n  // Jalankan saat load awal\n  initTheme();\n\n  // Jalankan saat pindah halaman (View Transitions)\n  document.addEventListener('astro:after-swap', () => {\n    // Pastikan class dark tetap ada sesuai localStorage\n    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    initTheme();\n  });\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "IoSearch", IoSearch, { "className": "absolute left-3 top-2.5 text-gray-400 h-4 w-4" }), renderComponent($$result, "HiOutlineMoon", HiOutlineMoon, { "id": "icon-moon", "class": "h-5 w-5 pointer-events-none" }), renderComponent($$result, "HiOutlineSun", HiOutlineSun, { "id": "icon-sun", "class": "h-5 w-5 hidden pointer-events-none" }), main.map((item) => renderTemplate`<li class="relative group h-full"> ${item.hasChildren ? renderTemplate`<div class="flex items-center gap-1 cursor-pointer py-1"> <span class="text-[13px] font-black uppercase tracking-widest text-[#009688] group-hover:text-orange-600 transition"> ${item.name} </span> ${renderComponent($$result, "IoChevronDown", IoChevronDown, { "className": "h-3 w-3 text-[#009688] group-hover:text-orange-600 transition group-hover:rotate-180 duration-300" })} <div class="absolute top-full left-0 pt-3 hidden group-hover:block z-[60] min-w-[200px]"> <div class="bg-white dark:bg-[#0b1c3c] shadow-2xl border border-gray-100 dark:border-white/10 py-4"> <ul class="flex flex-col"> ${item.children?.map((child) => renderTemplate`<li> <a${addAttribute(child.url, "href")} class="block px-6 py-3 text-[11px] font-extrabold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#009688] transition-all"> ${child.name} </a> </li>`)} </ul> </div> </div> </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="text-[13px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 hover:text-[#009688] transition py-1"> ${item.name} </a>`} </li>`));
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

const propertyId = "517642703";
const base64Key = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiaW5kZXhpbi0xMi03NWtsay04MTI4NTExMjA3MTMxIiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiMDQ1MDZjOGRiMjQ5YjZkZTYyZGQ0Yjk0NDdhMWI1YWMwZGIxMmFjOSIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFEVDNIL285aDFYWHIvelxuaDc5V1ZJK2xlZGFaWklBdnJMREtqdzdwd01CcWV0L0NhbzlFVGtFeGdja0xnRWdpT0hZS01VbWJ3Y0pKOUtXMVxuWkQzQnEyWlppRkkzVWtJd3ZZb1pMakxqZG04ejVaZm5QSHZ0Q0dHTnprTDRnQU1IUWc4VFlBSzF3R25SSElqZVxuYmVQNGV2cnJ5ZW9pQnR1NmtyVkpwd0d2dWI4OVJIRnpsM3Y1UnN4QVBlWTdEVUdsSElyOS94YW11cTdIdDdtYVxuSTVzK1hBbTBwNXFRVlBaOWV5dldHMXFId0VQY2dPRTQ2Z1o3a1dFRU5VQWs1UlNkY2kwZzhUQU9hZzlSVEdiQlxuNWFLbERRTGQ5U3BVMXBMK2twZlB3QkFHd1Uwc0lGY3FCeU9qVkdYaE43M2xRcUx4NFhtQW1mWjdqTGRLSmlHYVxuY2tHTnIzLzdBZ01CQUFFQ2dnRUFFc3NWQjUvSlk0WXlwZEl0WFdXYjVuUmozbkNGVkhWUHEzQThSTzBGeEl4SVxuekJDeXk3N2JWcDVxTEp5QkNaUVRtSHpkeURUTVhNNFlZdnBVNWhpanVCNTVHSkl4Nyt2b1U2cCs5aUY3NU5FaFxuZy9BZ0dCc3R1Q3dMVWNyZE9lZ1l1VUhEaThiWlBDVDVXUzNMVXEvcUVUOTBodmN2eDZHYTlrRWJ5N0JBOEJpNFxuTmpEYTEzbHo4WEl1U2g2T0NDUlMwVHl4SXIvNmpCY2JGVFBxNnNoTVRvWkJnQ1JCUkhDeU96eTIvUGNNdm1qQlxuZVhoVGp1emlBSEx6TlBKRzRTSkxqKzFoRGVpc1hROU5xNjcrREpwSDRJYUlKWHpwaHl6YVUzVytFTXlYcDNXOVxucjFkQkFJclVaMGtLQTdzeXo5dWFiUXg3WTdzMWY2VWRWUklteFNLbklRS0JnUUQ5aVVIMG1FaVZWc0VNK1NpalxuZFdmQ01lMnJ3azBZbk1rSDE4Wmp0cGtwbTNUdlQ0Z2dWc3RMejZzZk40U0ZhTWNFZmI0OFVoaGRpU0NLMlkwRFxuZHF5c2hwZUdkV0ZNcUM0QjlxNDhLeVVBM2lNVkQrdHcwVURTOGYvQXZqQVRUNnJpY0FKQXROdlVuN3h2TmlyelxuVk5QeWVic1cvdzJiRHFBTGNuODlITHZ1NFFLQmdRRFY2NUJzdnJXZ0x1ZHl0U21qQlliUUs1L2d0aStTVldYWVxudlRDZ01aaXZmYnBpazhCc0s5YzhOMTA0Y1hUWlJYMGtlaGh2VSt6ckJza1NDWm1PTEFhcWlYRjI1bnVHMmFrU1xudS82M2FMMXRLd1grU0NjTEFyTEhiYk0xUWJaN1o5WG93YVBSTjF0bGRSMmhldzRtZ2JYb0RWNndSVndkTDRxSVxuL2djOGt1SldXd0tCZ1FDaEtIQk9ROFpQZHhlN1lWMWRtYkZjbFZRWUM2ZnA3eTh4MXd4Nk1ZVm1GelRiTVZpOFxuQmErdi9zOHRScUxzRWsvL0lOYWRqU21EdXpoK1NnOENscHJvQjUybGtGTks0TlJ0MXhtbGtWOHlFQUdJejllK1xubktSeDhmVzUxS3JHZTZ1Sng5MEd1Ry9MMWNWM2c1MEZrM1F0K3diYmRVQjJ3WE1tRTUraGZ2Uk93UUtCZ0VDb1xucUFuR2h4MTRyK3FEQ2FmRnh0N3JJTE1LUGt6TDFUSHkxVnpHUVBGaVhsRG5lZlQ0TjJGekZwRTE4ZXl1VFVvV1xuUVlaODVwS1BoWDBYTzd1MllQbHcrOFBGbkxiQTJaTFpFZitjQUEyY1FINkFqcFNNWno5U1VDV2J6QzEyMERnL1xuTjJYSWhxNmUvS3JQaUJKcGlITXdmMXRtUzVaaXhVdnRCSUR4b01vYkFvR0JBS09Jd1EvU2w1OEJDNVlrRmt1RVxucnlLWTZTYmVsY1RGT1dmdjJFOC90TDFoZ1FVa0NsL3A4cmdSWTB3dVRrNVlWWjVIaWxOYU9zSnk5NC9DcGpoYVxuTFBSbzBZSGhlQ1FPSFJtQUtvWjMweGlIbVN4L0l2UTdHM29wYWNjMHJvQ1VzMnlNMFF2bUlZcFdHRUlhMWdXOVxuaStpN3hWaEtKZ0tOVjIxTFJmWWdKenhWXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiYW1pbmEtb3ItaWRAaW5kZXhpbi0xMi03NWtsay04MTI4NTExMjA3MTMxLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjExMDgwNjY1OTA5NzA1NDc0Nzc5NyIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tI3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi8vMS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvYW1pbmEtb3ItaWQlNDBpbmRleGluLTEyLTc1a2xrLTgxMjg1MTEyMDcxMzEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0K";
let analyticsDataClient;
{
  try {
    const decodedKey = typeof Buffer !== "undefined" ? Buffer.from(base64Key, "base64").toString("utf-8") : atob(base64Key);
    const credentials = JSON.parse(decodedKey);
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials
    });
  } catch (err) {
    console.warn("Gagal inisialisasi GA Client:", err.message);
  }
}
async function getVisitorStats() {
  if (!analyticsDataClient || !propertyId) {
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
  try {
    const requestOptions = { timeout: 2e4 };
    const [realtimeResponse, historisResponse] = await Promise.all([
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [
          { name: "activeUsers" },
          { name: "screenPageViews" }
          // Ambil juga views hari ini dari realtime
        ]
      }, requestOptions),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
          { startDate: "today", endDate: "today" },
          { startDate: "yesterday", endDate: "yesterday" },
          { startDate: "2020-01-01", endDate: "yesterday" }
          // Ambil total HANYA sampai kemarin
        ],
        metrics: [{ name: "screenPageViews" }]
      }, requestOptions)
    ]);
    const online = realtimeResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const viewsTodayRealtime = realtimeResponse[0].rows?.[0]?.metricValues?.[1]?.value || 0;
    const todayReport = historisResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const yesterday = historisResponse[0].rows?.[1]?.metricValues?.[0]?.value || 0;
    const totalUntilYesterday = historisResponse[0].rows?.[2]?.metricValues?.[0]?.value || 0;
    const effectiveToday = Math.max(parseInt(todayReport), parseInt(viewsTodayRealtime));
    const totalHits = parseInt(totalUntilYesterday) + effectiveToday;
    return {
      online: parseInt(online),
      today: effectiveToday,
      yesterday: parseInt(yesterday),
      total: totalHits
    };
  } catch (error) {
    console.error("Analytics Timeout/Error:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const footerMenu = menu.footer || [];
  let stats = {
    online: 0,
    today: 0,
    total: 0
  };
  try {
    const data = await getVisitorStats();
    if (data) stats = data;
  } catch (e) {
    console.log("Analytics error:", e.message);
  }
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0b1c3c] pt-24 pb-12 text-white/70 relative overflow-hidden border-t border-white/5"> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div> <div class="max-w-7xl mx-auto px-4 relative z-10"> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 text-left"> <!-- KOLOM 1 --> <div class="md:col-span-12 lg:col-span-4"> <div class="mb-8 flex justify-start"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> <p class="mb-8 text-sm leading-relaxed text-white/50 max-w-sm">
Amina (Amal Insan Abadi) berdedikasi menyebarkan syiar Islam dan aksi nyata sosial.
Kami hadir untuk membangun kepedulian dan kemaslahatan ummat melalui informasi yang bermanfaat.
</p> <div class="space-y-4 mb-8 text-[13px]"> <div class="flex items-start gap-3"> ${renderComponent($$result, "BiMap", BiMap, { "className": "text-primary h-5 w-5 shrink-0" })} <span>Jl. Pahlawan, Purwokerto, Jawa Tengah</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result, "BiEnvelope", BiEnvelope, { "className": "text-primary h-5 w-5 shrink-0" })} <a href="mailto:admin@amina.or.id">admin@amina.or.id</a> </div> </div> <!-- SOCIAL MEDIA HORIZONTAL --> <div class="flex items-center gap-4 mt-6"> ${renderComponent($$result, "Social", $$Social, { "source": social.main, "className": "flex flex-row gap-4 text-xl" })} </div> </div> <!-- KOLOM 2 --> <div class="md:col-span-6 lg:col-span-2"> <h4 class="mb-10 text-xs font-black text-white uppercase tracking-[0.3em]">
Kategori
</h4> <ul class="space-y-4 text-[13px] font-bold uppercase"> <li> <a href="/categories/artikel-islami" class="hover:text-primary transition">
Artikel Islami
</a> </li> <li> <a href="/categories/khazanah" class="hover:text-primary transition">
Khazanah
</a> </li> <li> <a href="https://onislam.web.id" class="hover:text-primary transition">
Media Islam
</a> </li> <li> <a href="/categories/kegiatan-sosial" class="hover:text-primary transition">
Kegiatan Sosial
</a> </li> </ul> </div> <!-- KOLOM 3 --> <div class="md:col-span-6 lg:col-span-3"> <h4 class="mb-10 text-xs font-black text-white uppercase tracking-[0.3em]">
Organisasi
</h4> <ul class="space-y-4 text-[13px] font-bold uppercase"> ${footerMenu.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")} class="hover:text-primary transition"> ${item.name} </a> </li>`)} <li> <a href="/contact" class="text-primary hover:brightness-125 transition">
Hubungi Kami
</a> </li> </ul> </div> <!-- KOLOM 4 --> <div class="md:col-span-12 lg:col-span-3"> <h4 class="mb-10 text-xs font-black text-white uppercase tracking-[0.3em]">
Live Traffic
</h4> <div class="bg-white/5 rounded-2xl p-6 border border-white/10"> <ul class="space-y-5 text-[12px] font-bold"> <li class="flex justify-between"> <span>Status</span> <span class="text-green-400"> ${stats.online} Online
</span> </li> <li class="flex justify-between"> <span>Hari Ini</span> <span> ${stats.today.toLocaleString("id-ID")} </span> </li> <li class="flex justify-between"> <span>Total Hits</span> <span> ${stats.total.toLocaleString("id-ID")} </span> </li> </ul> </div> </div> </div> <!-- COPYRIGHT --> <div class="mt-24 border-t border-white/10 pt-10 text-center text-xs text-white/30">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.site.title}. Semua Hak Dilindungi.
</div> </div> </footer>`;
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
  return renderTemplate(_a || (_a = __template(['<html lang="id" class="light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">', "<script>\n    const theme = (() => {\n      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n        return localStorage.getItem('theme');\n      }\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        return 'dark';\n      }\n      return 'light';\n    })();\n  \n    if (theme === 'light') {\n      document.documentElement.classList.remove('dark');\n    } else {\n      document.documentElement.classList.add('dark');\n    }\n    window.localStorage.setItem('theme', theme);\n  <\/script>", '</head> <body class="bg-white dark:bg-[#0b1c3c] text-gray-900 dark:text-gray-100 antialiased selection:bg-primary selection:text-white transition-colors duration-300"> ', ' <main class="min-h-screen"', "> ", " </main> ", "  <script>\n    document.addEventListener('astro:after-swap', () => {\n      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n    });\n  <\/script> </body> </html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(renderTransition($$result, "xadcznoe"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/website/amina/src/layouts/Base.astro", "self");

export { $$Base as $, $$Social as a, config as c };
