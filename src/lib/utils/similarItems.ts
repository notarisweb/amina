// similar products
const similarItems = (currentItem: any, allItems: any, slug: string) => {
  // Gunakan fallback array kosong [] jika categories atau tags tidak ada
  let categories: string[] = currentItem.data.categories || [];
  let tags: string[] = currentItem.data.tags || [];

  // Filter berdasarkan kategori
  const filterByCategories = allItems.filter(
    (item: any) =>
      item.data.categories && 
      categories.some((category) => item.data.categories.includes(category))
  );

  // Filter berdasarkan tags
  const filterByTags = allItems.filter(
    (item: any) =>
      item.data.tags && 
      tags.some((tag) => item.data.tags.includes(tag))
  );

  // Gabungkan hasil filter dan hapus duplikat
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // Hapus artikel yang sedang dibuka saat ini dari daftar "artikel terkait"
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarItems;