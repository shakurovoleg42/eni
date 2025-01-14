import { create } from "zustand";

interface Product {
  id: number;
  image: string;
  title: string;
  characteristics: [];
  slug: string;
}

interface ProductsState {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

const useProductStore = create<ProductsState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 3000)); // Delay for 3 seconds for testing spinner
      const res = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      set({ products: data.products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;
