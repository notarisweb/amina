import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_qrAGd2zo.mjs';
import 'piccolore';
import { c as config, $ as $$Base } from '../chunks/Base_zAWG4pPb.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_DTKgWGvf.mjs';
import { $ as $$TrendingTicker } from '../chunks/TrendingTicker_DKK8sSBN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "https://studio.amina.or.id/wp-json/wp/v2";
  let authors = [];
  let tickerPosts = [];
  let totalPages = 1;
  try {
    const [resUsers, resPosts] = await Promise.all([
      fetch(`${API_BASE}/users?per_page=100`),
      fetch(`${API_BASE}/posts?per_page=10`)
    ]);
    const wpAuthors = await resUsers.json();
    const wpPosts = await resPosts.json();
    authors = Array.isArray(wpAuthors) ? wpAuthors.map((user) => ({
      slug: user.slug,
      name: user.name || "Penulis",
      image: user.avatar_urls?.["96"] || "/images/author-placeholder.png"
    })) : [];
    tickerPosts = Array.isArray(wpPosts) ? wpPosts.map((p) => ({
      slug: p.slug,
      data: { title: p.title.rendered }
    })) : [];
    totalPages = Math.ceil(authors.length / config.settings.pagination);
  } catch (e) {
    console.error("Gagal mengambil data penulis:", e);
  }
  const currentAuthors = authors.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Daftar Penulis | Amina Media", "data-astro-cid-5ijxez7g": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TrendingTicker", $$TrendingTicker, { "posts": tickerPosts, "data-astro-cid-5ijxez7g": true })} ${maybeRenderHead()}<main class="py-20 bg-[#f8fafc] dark:bg-dark transition-colors duration-300 min-h-[80vh]" data-astro-cid-5ijxez7g> <div class="container max-w-6xl mx-auto px-6" data-astro-cid-5ijxez7g> <div class="text-center mb-24 relative" data-astro-cid-5ijxez7g> <div class="inline-flex items-center bg-orange-100 dark:bg-orange-600/10 text-orange-600 text-[11px] font-black px-4 py-1.5 rounded-full uppercase mb-6 tracking-[0.2em] border border-orange-200 dark:border-orange-600/20" data-astro-cid-5ijxez7g>
The Team
</div> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 leading-none" data-astro-cid-5ijxez7g>
Para <span class="text-orange-600" data-astro-cid-5ijxez7g>Penulis</span> </h1> <p class="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed" data-astro-cid-5ijxez7g>
Mengenal sosok inspiratif di balik layar <span class="text-slate-900 dark:text-white font-bold" data-astro-cid-5ijxez7g>amina.or.id</span>.
</p> </div> <div class="relative z-10" data-astro-cid-5ijxez7g> ${currentAuthors.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-5ijxez7g> ${currentAuthors.map((author) => renderTemplate`<a${addAttribute(`/authors/${author.slug}`, "href")} class="author-card group" data-astro-cid-5ijxez7g> <div class="avatar-wrapper" data-astro-cid-5ijxez7g> <img${addAttribute(author.image, "src")}${addAttribute(author.name, "alt")} data-astro-cid-5ijxez7g> </div> <h3 class="author-name" data-astro-cid-5ijxez7g>${author.name}</h3> <span class="view-profile" data-astro-cid-5ijxez7g>Lihat Profil</span> </a>`)} </div>` : renderTemplate`<div class="py-24 text-center bg-white dark:bg-white/5 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 shadow-sm" data-astro-cid-5ijxez7g> <p class="text-slate-500 font-bold uppercase tracking-widest" data-astro-cid-5ijxez7g>Belum ada penulis, Bos.</p> </div>`} ${totalPages > 1 && renderTemplate`<div class="mt-32 py-12 border-t border-slate-200 dark:border-white/5 flex justify-center" data-astro-cid-5ijxez7g> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": 1, "totalPages": totalPages, "data-astro-cid-5ijxez7g": true })} </div>`} </div> </div> </main> ` })} `;
}, "D:/website/amina/src/pages/authors/index.astro", void 0);

const $$file = "D:/website/amina/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
