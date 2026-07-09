import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_qrAGd2zo.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://amina.or.id");
const $$TrendingTicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrendingTicker;
  const { posts = [] } = Astro2.props;
  const tickerPosts = posts.slice(0, 10);
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-white dark:bg-[#0b1c3c] border-b border-gray-100 dark:border-white/5 h-11 lg:h-12 flex items-center overflow-hidden relative z-40 transition-colors duration-300" data-astro-cid-osiywyym> <div class="container flex items-center h-full relative" data-astro-cid-osiywyym> <div class="relative h-full flex items-center shrink-0 z-20 pr-8" data-astro-cid-osiywyym> <div class="bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 h-full flex items-center relative shadow-[5px_0_15px_rgba(234,88,12,0.3)] slanted-badge" data-astro-cid-osiywyym> <span class="flex items-center gap-2 relative z-10" data-astro-cid-osiywyym> <span class="relative flex h-2 w-2" data-astro-cid-osiywyym> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" data-astro-cid-osiywyym></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-white" data-astro-cid-osiywyym></span> </span>
Terkini
</span> </div> </div> <div class="flex-1 overflow-hidden h-full flex items-center relative group" data-astro-cid-osiywyym> <div class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#0b1c3c] to-transparent z-10" data-astro-cid-osiywyym></div> <div class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#0b1c3c] to-transparent z-10" data-astro-cid-osiywyym></div> <div class="animate-marquee whitespace-nowrap flex items-center py-1" data-astro-cid-osiywyym> ${tickerPosts.length > 0 ? tickerPosts.map((p) => renderTemplate`<a${addAttribute(`/blog/${p.slug}`, "href")} class="text-[12px] font-bold text-dark/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all mx-8 flex items-center gap-4" data-astro-cid-osiywyym> <span class="w-1.5 h-1.5 bg-orange-600 rotate-45" data-astro-cid-osiywyym></span> ${p.data.title} </a>`) : renderTemplate`<span class="text-[12px] text-gray-400 italic mx-8" data-astro-cid-osiywyym>Menghubungkan ke pusat informasi Amina Media...</span>`} ${tickerPosts.map((p) => renderTemplate`<a${addAttribute(`/blog/${p.slug}`, "href")} class="text-[12px] font-bold text-dark/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all mx-8 flex items-center gap-4" data-astro-cid-osiywyym> <span class="w-1.5 h-1.5 bg-orange-600 rotate-45" data-astro-cid-osiywyym></span> ${p.data.title} </a>`)} </div> </div> </div> </div> `;
}, "D:/website/amina/src/components/homepage/TrendingTicker.astro", void 0);

export { $$TrendingTicker as $ };
