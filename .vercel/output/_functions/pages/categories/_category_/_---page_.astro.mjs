import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, d as addAttribute } from '../../../chunks/astro/server_CuGOslB9.mjs';
import 'piccolore';
import { $ as $$Posts } from '../../../chunks/Posts_vDjtZXxa.mjs';
import { $ as $$Base } from '../../../chunks/Base_CpQkmDAo.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_CBWrNkSm.mjs';
import { h as humanize } from '../../../chunks/textConverter_DLzBZGw2.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://amina.or.id");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { category } = Astro2.params;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const pageSize = 10;
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
    }
  `,
    variables: { catSlug: category }
  };
  let categoryData = null;
  let allFormattedPosts = [];
  try {
    const response = await fetch(WP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query)
    });
    const result = await response.json();
    categoryData = result.data?.category;
    if (categoryData) {
      const wpPosts = categoryData.posts?.nodes || [];
      allFormattedPosts = wpPosts.map((post) => ({
        id: post.slug,
        slug: post.slug,
        body: post.excerpt || "",
        data: {
          title: post.title || "Judul Tidak Tersedia",
          description: post.excerpt || "",
          date: post.date,
          image: post.featuredImage?.node?.sourceUrl || "/images/placeholder.png",
          categories: post.categories?.nodes.map((c) => c.name) || [categoryData.name],
          authors: [post.author?.node?.name || "Admin"]
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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} - Halaman ${currentPage}`, "description": categoryData.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-[#0b1c3c] py-16 text-white w-full border-t border-white/5"> <div class="container text-center"> <p class="text-white/50 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">ARSIP KATEGORI</p> <h1 class="text-3xl md:text-5xl font-black text-primary uppercase italic">${title}</h1> <p class="mt-4 text-white/60 text-sm italic">Halaman ${currentPage} dari ${totalPages}</p> </div> </section> <section class="section py-16 bg-white"> <div class="container"> ${paginatedPosts.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Posts", $$Posts, { "posts": paginatedPosts, "fluid": false })} <div class="mt-16 flex justify-center"> ${renderComponent($$result3, "Pagination", $$Pagination, { "section": `categories/${category}`, "currentPage": currentPage, "totalPages": totalPages })} </div> ` })}` : renderTemplate`<div class="text-center py-24 border-2 border-dashed border-gray-100 rounded-3xl"> <p class="text-dark/40 italic">Tidak ada artikel di halaman ini.</p> <a${addAttribute(`/categories/${category}`, "href")} class="mt-4 inline-block text-primary font-bold">Kembali ke Halaman 1</a> </div>`} </div> </section> ` })}`;
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
