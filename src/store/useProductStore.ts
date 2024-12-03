import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  description: string;
}

interface ProductsState {
  products: Product[];
  fetchProducts: () => Promise<void>;
  // тут будет еще по одному продукту
}

const useProductStore = create<ProductsState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
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
