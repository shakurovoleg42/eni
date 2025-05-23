import { Container } from "@/components/Container";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await res.json();
      setCategories(data.data.list);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Container className="flex flex-col items-center justify-center my-16 px-4">
      <div className="space-y-10 w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center drop-shadow-sm">
          Категории
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading && (
            <li className="col-span-full text-center text-gray-500 text-lg animate-pulse">
              Загружается...
            </li>
          )}

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalog/${category.slug}`}
              className="block w-full bg-gradient-to-tr from-[#fff5da] to-white border border-[#ffe59c]/40 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="text-2xl sm:text-3xl font-semibold  hover:text-black hover:underline transition-colors duration-200">
                {category.name}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Categories;
