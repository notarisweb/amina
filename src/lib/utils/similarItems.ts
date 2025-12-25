// similar products - Sistem Pengaman Terintegrasi
const similarItems = (currentItem: any, allItems: any[] = [], slug: string) => {
  // 1. Cek apakah allItems ada dan merupakan array, jika tidak kembalikan array kosong
  if (!allItems || !Array.isArray(allItems)) {
    return [];
  }

  // 2. Ambil data kategori dan tag dari artikel yang sedang dibuka
  // Menggunakan fallback array kosong [] agar tidak error saat dibaca
  const categories: string[] = currentItem?.data?.categories || [];
  const tags: string[] = currentItem?.data?.tags || [];

  // 3. Filter berdasarkan kategori yang sama
  const filterByCategories = allItems.filter(
    (item: any) =>
      item.data?.categories && 
      categories.some((category) => item.data.categories.includes(category))
  );

  // 4. Filter berdasarkan tag yang sama
  const filterByTags = allItems.filter(
    (item: any) =>
      item.data?.tags && 
      tags.some((tag) => item.data.tags.includes(tag))
  );

  // 5. Gabungkan hasil filter dan hapus duplikat menggunakan Set
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // 6. Hapus artikel yang sedang dibuka saat ini dari daftar saran
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarItems;