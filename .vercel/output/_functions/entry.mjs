import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C_lc7NPc.mjs';
import { manifest } from './manifest_Cj9wOFVE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/authors/_single_/_---page_.astro.mjs');
const _page4 = () => import('./pages/authors.astro.mjs');
const _page5 = () => import('./pages/blog/_single_.astro.mjs');
const _page6 = () => import('./pages/blog/_---page_.astro.mjs');
const _page7 = () => import('./pages/categories/_category_/_---page_.astro.mjs');
const _page8 = () => import('./pages/categories.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/page/_slug_.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/sitemap.xml.astro.mjs');
const _page14 = () => import('./pages/tags/_tag_.astro.mjs');
const _page15 = () => import('./pages/tags.astro.mjs');
const _page16 = () => import('./pages/_regular_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/authors/[single]/[...page].astro", _page3],
    ["src/pages/authors/index.astro", _page4],
    ["src/pages/blog/[single].astro", _page5],
    ["src/pages/blog/[...page].astro", _page6],
    ["src/pages/categories/[category]/[...page].astro", _page7],
    ["src/pages/categories/index.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/page/[slug].astro", _page10],
    ["src/pages/privacy-policy.astro", _page11],
    ["src/pages/search.astro", _page12],
    ["src/pages/sitemap.xml.js", _page13],
    ["src/pages/tags/[tag].astro", _page14],
    ["src/pages/tags/index.astro", _page15],
    ["src/pages/[regular].astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "92ad6fcf-7edd-4afc-bbf5-d0c00c345b38",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
