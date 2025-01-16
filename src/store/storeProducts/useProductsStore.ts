import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  photo: string;
  name: string;
  characteristics: [];
  product_code: string;
  slug: string;
}

interface ProductsState {
  products: Product[];
  isLoading: boolean;

  error: string | null;
  fetchProducts: (name: string) => Promise<void>;
}

const useProductStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [],
      isLoading: false,
      error: null,
      fetchProducts: async (slug) => {
        set({ isLoading: true, error: null });

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/products/category/${slug}`,
            {
              method: "GET",
            }
          );

          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await res.json();
          set({ products: data.data, isLoading: false });
        } catch (error) {
          console.error("Error fetching products:", error);
          set({ error: (error as Error).message, isLoading: false });
        }
      },
    }),
    {
      name: "product-store",
      partialize: (state) => ({ products: state.products }),
    }
  )
);

export default useProductStore;
