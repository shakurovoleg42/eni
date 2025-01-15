import Link from "next/link";
import React, { useEffect, useState } from "react";
import useProductStore from "@/src/store/storeProducts/useProductsStore";
import Spinner from "@/components/ui/spinner";
function Products() {
  const [loading, setLoading] = useState(true);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    let didLog = false;

    const fetchProducts = async () => {
      setLoading(true);
      await useProductStore.getState().fetchProducts();
      setLoading(false);

      if (!didLog) {
        console.log(useProductStore.getState().products);
        didLog = true;
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-6 flex flex-col xl:flex-row gap-6">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* <div className="flex flex-col pt-3 items-center max-w-[400px]">
            Фильтры
          </div> */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-5 justify-center">
              {/* Карточка товара  */}
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex flex-col lg:flex-row flex-wrap lg:justify-center max-w-[400px] gap-1 items-center justify-center font-inter mt-[50px] hover:shadow-custom hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out rounded-lg py-4"
                >
                  <div className="flex flex-col items-center">
                    <Link
                      href={{
                        pathname: `/catalog`,
                        query: { product: product.slug },
                      }}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="font-[700] text-[18.95px] sm:text-[26.7px] text-[#00A2FC] px-6">
                        {product.name}
                      </span>
                      <img
                        src={product.photo || "/no-image.svg"}
                        alt=""
                        className="w-[166px] h-[154px] animate-zoomIn"
                      />
                    </Link>
                  </div>
                  <div className="max-w-[380px]">
                    <ul className="flex flex-col gap-1 text-[12px] md:text-[16px]">
                      <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                        <span className="w-auto ">Product code:</span>
                        <span>0000000</span>
                      </li>
                      <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                        <span className="w-auto">Name</span>
                        <span>product AA</span>
                      </li>
                      <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                        <span className="w-auto">Gradient:</span>
                        <span>xyz 00 - 00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              {/* Конец карточки  */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
