/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect } from "react";
import useProductStore from "@/src/store/storeProducts/useProductsStore";
import Spinner from "@/components/ui/spinner";

interface ProductsProps {
  name: string | null;
}

function Products({ name }: ProductsProps) {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    if (name && name.trim() !== "") {
      fetchProducts(name);
    }
  }, [name, fetchProducts]);

  return (
    <div className="mt-6 flex flex-col xl:flex-row gap-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-5 justify-center">
            {/* Карточка товара */}
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full flex flex-col  lg:justify-center max-w-[400px] gap-1 items-center justify-center font-inter mt-[50px] hover:shadow-custom hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out rounded-lg py-4 shadow-xl"
              >
                <div className="flex flex-col items-center">
                  <Link
                    href={`/catalog/${product.slug}`}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="font-[700] text-[18.95px] sm:text-[26.7px] text-[#00A2FC] px-6">
                      {product.name}
                    </span>
                    <img
                      src={product.photo || "/no-image.svg"}
                      alt={product.name}
                      className="w-[166px] h-[154px] animate-zoomIn"
                    />
                  </Link>
                </div>
                <div className="max-w-[380px]">
                  <ul className="flex flex-col gap-1 text-[12px] md:text-[16px]">
                    <li className="flex flex-row justify-between border-[#696969] border-b-[1px]">
                      <span className="w-auto">Код продукта:</span>
                      <span>{product.product_code}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
            {/* Конец карточки */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
