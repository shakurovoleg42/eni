import Link from "next/link";
import React, { useEffect, useState } from "react";
import useProductStore from "@/src/store/storeProducts/useProductStore";
import Spinner from "@/components/ui/spinner";
function Products() {
  const [loading, setLoading] = useState(true);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await useProductStore.getState().fetchProducts();
      setLoading(false);
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="mt-6 flex flex-col xl:flex-row gap-6">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col pt-3 items-center max-w-[400px]">
            Фильтры
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-wrap">
              {/* Карточка товара  */}

              <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
                <div className="flex flex-col">
                  <Link href="/products/slug" className="text-center">
                    <span className="font-[700] text-[18.95px] sm:text-[26.7px] text-[#00A2FC]">
                      Eni i-Sint 0w-40
                    </span>
                    {/* добавить пульсирующий спинер пока грузится фотка */}
                    <img
                      src="/test-product.png"
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

              {/* <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
                <div className="flex flex-col">
                  <Link href="/products/slug" className="text-center">
                    <span className="font-[700] text-[18.95px] sm:text-[26.7px] text-[#00A2FC]">
                      Eni i-Sint 0w-40
                    </span>
                    <img
                      src="/test-product.png"
                      alt=""
                      className="w-[166px] h-[154px]"
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
              </div> */}
              {/* Конец карточки  */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
