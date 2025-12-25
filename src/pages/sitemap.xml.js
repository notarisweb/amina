const WP_URL = import.meta.env.PUBLIC_WP_URL;

export async function GET() {
  // Query untuk mengambil semua slug artikel, kategori, dan tag
  const query = {
    query: `
      query GetSitemapData {
        posts(first: 100) { nodes { slug date } }
        categories(first: 100) { nodes { slug } }
        tags(first: 100) { nodes { slug } }
      }
    `,
  };

  const response = await fetch(WP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const result = await response.json();
  const posts = result.data?.posts?.nodes || [];
  const categories = result.data?.categories?.nodes || [];
  const tags = result.data?.tags?.nodes || [];

  const baseUrl = "https://amina.or.id";

  // Susun XML Sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${baseUrl}/</loc></url>
      <url><loc>${baseUrl}/categories</loc></url>
      <url><loc>${baseUrl}/authors</loc></url>
      
      ${posts.map(post => `
        <url>
          <loc>${baseUrl}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
        </url>
      `).join('')}

      ${categories.map(cat => `
        <url><loc>${baseUrl}/categories/${cat.slug}</loc></url>
      `).join('')}

      ${tags.map(tag => `
        <url><loc>${baseUrl}/tags/${tag.slug}</loc></url>
      `).join('')}
    </urlset>
  `.replace(/\s+/g, ' ').trim();

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
}