import dateFormat from "@/lib/utils/dateFormat";
import { humanize, slugify } from "@/lib/utils/textConverter";
import Fuse from "fuse.js";
import React, { useEffect, useRef, useState } from "react";
import { BiCalendarEdit, BiCategoryAlt, BiChevronLeft, BiChevronRight } from "react-icons/bi";

export type SearchItem = {
  slug: string;
  data: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

const cleanText = (html: string) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const text = doc.body.textContent || "";
  return text.length > 150 ? text.substring(0, 150) + "..." : text;
};

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  
  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
    setCurrentPage(1); // Reset ke halaman 1 setiap kali mengetik
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
      }
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    const searchParams = new URLSearchParams(window.location.search);
    if (inputVal.length > 0) {
      searchParams.set("q", inputVal);
    } else {
      searchParams.delete("q");
    }
    const newPath = window.location.pathname + (inputVal ? "?" + searchParams.toString() : "");
    history.pushState(null, "", newPath);
  }, [inputVal]);

  // Logika Pemotongan Data per Halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults ? searchResults.slice(indexOfFirstItem, indexOfLastItem) : [];
  const totalPages = Math.ceil((searchResults?.length || 0) / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas saat pindah halaman
  };

  return (
    <div className="min-h-[45vh]">
      <input
        className="form-input w-full text-center py-4 text-lg border-primary/20 focus:border-primary"
        placeholder="Ketik kata kunci untuk mencari artikel..."
        type="text"
        name="search"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        ref={inputRef}
      />

      {inputVal.length > 1 && (
        <div className="my-8 text-center text-text italic">
          Ditemukan {searchResults?.length} hasil untuk '{inputVal}'
        </div>
      )}

      <div className="row gy-4 gx-4">
        {currentItems.map(({ item }) => (
          <div key={item.slug} className={"col-12 mb-10 sm:col-6"}>
            {item.data.image && (
              <a
                href={`/blog/${item.slug}`}
                className="relative block aspect-video w-full overflow-hidden rounded-lg bg-gray-100 group shadow-sm"
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.data.image}
                  alt={item.data.title}
                  loading="lazy"
                />
              </a>
            )}

            <ul className="mt-6 mb-4 flex flex-wrap items-center text-sm text-text">
              <li className="mr-5 flex items-center font-medium">
                <BiCalendarEdit className="mr-1 h-4 w-4 text-primary" />
                {dateFormat(item.data.date)}
              </li>
              <li className="mr-5 flex items-center flex-wrap">
                <BiCategoryAlt className="mr-1 h-4 w-4 text-gray-500" />
                <ul className="flex flex-wrap gap-2">
                  {item.data.categories.map((category: string, i: number) => (
                    <li key={i} className="inline-block">
                      <a href={`/categories/${slugify(category)}`} className="hover:text-primary font-bold text-dark transition">
                        {humanize(category)}{i !== item.data.categories.length - 1 && ","}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <h3 className="mb-3 h4">
              <a
                href={`/blog/${item.slug}`}
                className="block hover:text-primary transition duration-300 leading-snug font-extrabold"
                dangerouslySetInnerHTML={{ __html: item.data.title }}
              />
            </h3>
            <p className="text-text line-clamp-2 text-sm leading-relaxed">
              {cleanText(item.content)}
            </p>
          </div>
        ))}
      </div>

      {/* Kontrol Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md border ${currentPage === 1 ? 'text-gray-300' : 'hover:bg-primary hover:text-white'}`}
          >
            <BiChevronLeft size={24} />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md border transition-all ${currentPage === index + 1 ? 'bg-primary text-white border-primary' : 'hover:bg-gray-100'}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md border ${currentPage === totalPages ? 'text-gray-300' : 'hover:bg-primary hover:text-white'}`}
          >
            <BiChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}