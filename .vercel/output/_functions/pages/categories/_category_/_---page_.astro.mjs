import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, d as addAttribute, u as unescapeHTML } from '../../../chunks/astro/server_qrAGd2zo.mjs';
import 'piccolore';
import { $ as $$Image } from '../../../chunks/_astro_assets_CJii7UwF.mjs';
import { $ as $$Base } from '../../../chunks/Base_zAWG4pPb.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_DTKgWGvf.mjs';
import { d as dateFormat } from '../../../chunks/dateFormat_BmxpTjpR.mjs';
import { h as humanize } from '../../../chunks/textConverter_DLzBZGw2.mjs';
import { $ as $$TrendingTicker } from '../../../chunks/TrendingTicker_DKK8sSBN.mjs';
import { BiChevronRight, BiLayer, BiTimeFive } from 'react-icons/bi';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://amina.or.id");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { category } = Astro2.params;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const pageSize = 9;
  const WP_URL = "https://studio.amina.or.id/graphql/";
  const query = {
    query: `
    query GetCategoryPosts($catSlug: ID!) {
      category(id: $catSlug, idType: SLUG) {
        name
        description
        posts(first: 100) {
          nodes {
            title
            slug
            excerpt
            date
            author { node { name } }
            categories { nodes { name } }
            featuredImage { node { sourceUrl } }
          }
        }
      }
      recentPosts: posts(first: 10) {
        nodes {
          title
          slug
        }
      }
    }
  `,
    variables: { catSlug: category }
  };
  let categoryData = null;
  let allFormattedPosts = [];
  let tickerPosts = [];
  try {
    const response = await fetch(WP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query)
    });
    const result = await response.json();
    categoryData = result.data?.category;
    const wpRecent = result.data?.recentPosts?.nodes || [];
    tickerPosts = wpRecent.map((p) => ({
      slug: p.slug,
      data: { title: p.title }
    }));
    if (categoryData) {
      const wpPosts = categoryData.posts?.nodes || [];
      allFormattedPosts = wpPosts.map((post) => ({
        slug: post.slug,
        data: {
          title: post.title || "Judul Tidak Tersedia",
          description: post.excerpt || "",
          date: post.date,
          image: post.featuredImage?.node?.sourceUrl || "/images/placeholder.png",
          categories: post.categories?.nodes.map((c) => c.name) || [categoryData.name],
          author: post.author?.node?.name || "Admin"
        }
      }));
    }
  } catch (e) {
    console.error("Gagal mengambil data kategori:", e);
  }
  if (!categoryData) return Astro2.redirect("/404");
  const totalPosts = allFormattedPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedPosts = allFormattedPosts.slice(startIdx, endIdx);
  const title = humanize(categoryData.name || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} - Halaman ${currentPage} | Amina Media`, "description": categoryData.description || `Kumpulan artikel islami dan berita terbaru kategori ${title}.` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TrendingTicker", $$TrendingTicker, { "posts": tickerPosts })} ${maybeRenderHead()}<header class="bg-[#0b1c3c] py-16 md:py-24 text-white w-full border-t border-white/5 relative overflow-hidden"> <div class="container relative z-10"> <nav class="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/40"> <a href="/" class="hover:text-primary transition">Beranda</a> ${renderComponent($$result2, "BiChevronRight", BiChevronRight, { "className": "opacity-20" })} <a href="/categories" class="hover:text-primary transition">Kategori</a> ${renderComponent($$result2, "BiChevronRight", BiChevronRight, { "className": "opacity-20" })} <span class="text-primary normal-case font-bold">${title}</span> </nav> <div class="max-w-5xl"> <div class="flex items-center gap-4 mb-6"> <span class="w-12 h-[2px] bg-primary"></span> <span class="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Arsip Konten</span> </div> <h1 class="text-5xl md:text-7xl font-black text-white leading-none mb-10 tracking-tighter uppercase">
Kategori<br> <span class="text-primary">${title}</span> </h1> ${categoryData.description && renderTemplate`<div class="border-l-4 border-orange-600 pl-8 mt-12"> <p class="text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-3xl"> ${categoryData.description} </p> </div>`} </div> </div> <div class="absolute -bottom-20 -right-20 opacity-5 pointer-events-none"> ${renderComponent($$result2, "BiLayer", BiLayer, { "className": "w-[500px] h-[500px]" })} </div> </header> <main class="py-20 bg-[#fcfcfc] dark:bg-dark transition-colors duration-300 min-h-[60vh]"> <div class="container"> ${paginatedPosts.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="mb-12 flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-6"> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-dark/40 dark:text-white/20">
DATABASE: ${paginatedPosts.length} ARTIKEL TERMUAT
</div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${paginatedPosts.map((post) => renderTemplate`<article class="group flex flex-col bg-white dark:bg-dark/50 border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="overflow-hidden block aspect-video bg-gray-100 dark:bg-white/5"> ${renderComponent($$result3, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 600, "height": 338, "class": "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" })} </a> <div class="p-8 flex flex-col flex-1"> <div class="flex items-center gap-3 mb-4"> <span class="text-[9px] font-black uppercase tracking-widest text-primary border-b-2 border-primary pb-0.5"> ${post.data.categories[0]} </span> </div> <a${addAttribute(`/blog/${post.slug}`, "href")}> <h2 class="text-xl font-black text-[#0b1c3c] dark:text-white leading-snug group-hover:text-primary transition-colors not-italic normal-case mb-4 line-clamp-2"> ${post.data.title} </h2> </a> <p class="text-dark/50 dark:text-white/40 text-sm line-clamp-3 mb-6 font-medium leading-relaxed">${unescapeHTML(post.data.description.slice(0, 120) + "...")}</p> <div class="mt-auto pt-6 border-t border-gray-50 dark:border-white/5 flex items-center justify-between"> <div class="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"> ${renderComponent($$result3, "BiTimeFive", BiTimeFive, { "className": "text-primary" })} ${dateFormat(post.data.date)} </div> <span class="text-primary group-hover:translate-x-1 transition-transform"> ${renderComponent($$result3, "BiChevronRight", BiChevronRight, { "className": "text-2xl" })} </span> </div> </div> </article>`)} </div> <div class="mt-24 py-12 border-t-2 border-dark dark:border-white/10 flex justify-center"> ${renderComponent($$result3, "Pagination", $$Pagination, { "section": `categories/${category}`, "currentPage": currentPage, "totalPages": totalPages })} </div> ` })}` : renderTemplate`<div class="text-center py-32 border border-gray-100 dark:border-white/5 bg-white dark:bg-transparent"> <p class="text-gray-400 italic font-bold text-2xl mb-8 uppercase tracking-tighter">
Belum ada jejak artikel di sini, Bos.
</p> <a href="/categories" class="inline-flex items-center gap-3 bg-[#0b1c3c] text-white px-10 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all"> ${renderComponent($$result2, "BiChevronRight", BiChevronRight, { "className": "rotate-180" })} Kembali ke Indeks
</a> </div>`} <div class="mt-24 pt-10 text-center opacity-20 border-t border-gray-100 dark:border-white/5"> <p class="text-[9px] font-black text-dark dark:text-white uppercase tracking-[0.5em]">
Amina Media Editorial Archive • Page ${currentPage} of ${totalPages} </p> </div> </div> </main> ` })} `;
}, "D:/website/amina/src/pages/categories/[category]/[...page].astro", void 0);
const $$file = "D:/website/amina/src/pages/categories/[category]/[...page].astro";
const $$url = "/categories/[category]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
