import { slug } from 'github-slugger';
import { marked } from 'marked';

const slugify = (content) => {
  if (!content) return "";
  return slug(content);
};
const markdownify = (content, div) => {
  if (!content) return "";
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  if (!content) return "";
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/[-\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const plainify = (content) => {
  if (!content) return "";
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  if (!htmlWithEntities) return "";
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

export { humanize as h, markdownify as m, plainify as p, slugify as s };
