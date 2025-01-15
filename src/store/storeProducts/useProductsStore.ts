import { create } from "zustand";

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
  fetchProducts: () => Promise<void>;
}

const useProductStore = create<ProductsState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    const { products, isLoading } = get();

    if (products.length > 0 || isLoading) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products`, {
        method: "GET",
      });
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
}));

export default useProductStore;
