import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CuGOslB9.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_CpQkmDAo.mjs';
import { h as humanize } from '../chunks/textConverter_DLzBZGw2.mjs';
import { BiCategoryAlt } from 'react-icons/bi';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const WP_URL = "https://studio.amina.or.id/graphql/";
  const query = {
    query: `
    query GetCategories {
      categories(first: 100) {
        nodes {
          name
          slug
          count
        }
      }
    }
  `
  };
  let categories = [];
  try {
    const response = await fetch(WP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query)
    });
    const result = await response.json();
    const allCategories = result.data?.categories?.nodes || [];
    categories = allCategories.filter((cat) => (cat.count || 0) > 0);
  } catch (e) {
    console.error("Gagal mengambil kategori dari WordPress:", e);
  }
  const title = "Kategori Artikel";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": "Daftar kategori artikel Islami di Amina" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-[#0b1c3c] py-16 md:py-20 text-white w-full border-t border-white/5"> <div class="container text-center"> <h1 class="text-3xl md:text-5xl font-black mb-4">${title}</h1> <p class="text-white/60 text-sm md:text-base max-w-xl mx-auto italic">
Jelajahi berbagai hikmah dan ilmu melalui klasifikasi tema di bawah ini.
</p> </div> </section> <section class="section py-20 bg-white"> <div class="container text-center"> <ul class="flex flex-wrap justify-center gap-6 md:gap-8"> ${categories.length > 0 ? categories.map((category) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${category.slug}`, "href")} class="group flex items-center transition duration-300"> <div class="flex items-center space-x-4 border-b-2 border-transparent group-hover:border-primary pb-2 transition-all"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "text-primary h-6 w-6 opacity-80 group-hover:opacity-100" })} <span class="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition"> ${humanize(category.name)} </span> <span class="text-[10px] md:text-[11px] font-black bg-gray-100 px-2.5 py-1 rounded-full text-dark/40 group-hover:bg-primary group-hover:text-white transition"> ${category.count} </span> </div> </a> </li>`) : renderTemplate`<div class="py-20"> <p class="text-dark/40 italic">Belum ada kategori yang tersedia saat ini.</p> </div>`} </ul> </div> </section> ` })}`;
}, "D:/website/amina/src/pages/categories/index.astro", void 0);
const $$file = "D:/website/amina/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
