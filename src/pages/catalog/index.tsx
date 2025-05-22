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
    <Container className="flex flex-col items-center justify-center my-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-center">Категории</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && (
            <li className="col-span-full text-center text-gray-500">
              Loading...
            </li>
          )}
          {categories.map((category) => (
            <li
              key={category.id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <Link
                href={`/catalog/${category.slug}`}
                className="block text-lg font-semibold text-blue-600 hover:underline"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Categories;
