import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CategoriesState {
  categories: Category[];
  isLoading: boolean;

  error: string | null;
  fetchCategories: (name: string) => Promise<void>;
}

const useCategoriesStore = create<CategoriesState>()(
  persist(
    (set) => ({
      categories: [],
      isLoading: false,
      error: null,
      fetchCategories: async () => {
        set({ isLoading: true, error: null });

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`, {
            method: "GET",
          });

          if (!res.ok) {
            throw new Error("Failed to fetch categories");
          }

          const data = await res.json();
          set({ categories: data.data, isLoading: false });
        } catch (error) {
          console.error("Error fetching categories:", error);
          set({ error: (error as Error).message, isLoading: false });
        }
      },
    }),
    {
      name: "categories-store",
      partialize: (state) => ({ categories: state.categories }),
    }
  )
);

export default useCategoriesStore;
