import { create } from "zustand";

interface Product {
  id: number;
  category: string;
  photo: string;
  name: string;
  application: string;
  warning: string;
  commercial_offer: string;
  characteristics: [];
  product_code: string;
  slug: string;
}

interface ProductState {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
  fetchProduct: (slug: string) => Promise<void>;
}

const useProductStore = create<ProductState>((set, get) => ({
  product: null,
  isLoading: false,
  error: null,
  fetchProduct: async (slug) => {
    const { product, isLoading } = get();
    if (product?.slug === slug || isLoading) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API + "/products/" + slug,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await res.json();
      set({ product: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching product:", error);
      set({
        error: error instanceof Error ? error.message : String(error),
        isLoading: false,
      });
    }
  },
}));

export default useProductStore;
