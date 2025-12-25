import { slug } from "github-slugger";
import { marked } from "marked";

// slugify - Menangani error jika content tidak ada
export const slugify = (content: string) => {
  if (!content) return "";
  return slug(content);
};

// markdownify - Menghindari error "marked(): input parameter is undefined or null"
export const markdownify = (content: string, div?: boolean) => {
  if (!content) return ""; // KUNCI PERBAIKAN: Berikan string kosong jika data null
  return div ? marked.parse(content) : marked.parseInline(content);
};

// humanize
export const humanize = (content: string) => {
  if (!content) return "";
  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/[-\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// titleify
export const titleify = (content: string) => {
  if (!content) return "";
  const humanized = humanize(content);
  return humanized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// plainify - Menangani pembersihan HTML dari konten WordPress yang mungkin kosong
export const plainify = (content: string) => {
  if (!content) return ""; // KUNCI PERBAIKAN: Mencegah error pada marked.parse
  
  const parseMarkdown: any = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string) => {
  if (!htmlWithEntities) return "";
  
  let entityList: { [key: string]: string } = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  
  let htmlWithoutEntities: string = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity: string): string => {
      return entityList[entity];
    },
  );
  return htmlWithoutEntities;
};