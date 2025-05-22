/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Form from "@/components/share/Form";

interface Product {
  id: number;
  name: string;
  slug: string;
  photo: string;
  details: [{ type: string; value: string }];
  product_code: string;
  application?: string;
  warning?: string;
  category?: string;
  commercial_offer?: string;
}

interface ProductPageProps {
  product: Product | null;
}

function ProductPage({ product }: ProductPageProps) {
  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">Товар не найден</div>
    );
  }

  return (
    <div>
      <Container className="flex flex-col mt-10 lg:mt-36">
        <span className="font-bold">
          Главная » {product.category || "Категория отсутствует"}
        </span>
        <div className="flex flex-col items-center">
          <span className="w-full my-10 border-b-black border-[1px]"></span>
          <div className="flex flex-col w-full lg:flex-row items-start lg:items-start">
            <img
              src={product.photo || "/no-image.svg"}
              alt="image"
              className="max-w-[318px] max-h-[442px] flex self-center"
            />
            <div className="mt-5 lg:mt-0 lg:ml-16 text-center lg:text-start">
              <h1 className="font-bold text-[22.56px] text-[#00A2FC]">
                {product.name}
              </h1>
              <div className="mt-[27.59px]">
                <p className="text-[24.88px] text-[#696969]">
                  <span className="font-bold">Применение: </span>
                  {product.application || "Инструкция временно отсутствует"}
                </p>
                {product.warning && (
                  <p className="text-[24.88px] text-[#696969]">
                    <span className="font-bold">Предупреждение: </span>
                    {product.warning}
                  </p>
                )}
              </div>
              <div className="mt-2 ">
                {product.commercial_offer ? (
                  <a href={product.commercial_offer} target="_blank">
                    <Button className="text-[18px] sm:text-[25px] mt-2 font-bold bg-[#FBD218]">
                      Получить КП
                    </Button>
                  </a>
                ) : (
                  <span className="font-bold">Ссылка на КП отсутствует</span>
                )}
              </div>
            </div>
          </div>
          <span className="w-full h-[1px] my-10 border-b-black border-[1px]"></span>
          <div className="w-full max-w-[1300px] flex flex-col text-start">
            <span className="font-bold text-[30.82px] text-[#696969] px-5 bg-[#F1F1EA]">
              Технические данные
            </span>
            <div className="bg-[#FBFBFB] px-6 py-3 font-bold text-[21.36px] text-[#696969]">
              <ul className="flex flex-col gap-5">
                {product.details?.map((detail, index) => (
                  <li
                    key={index}
                    className="flex flex-row justify-between border-b border-[#696969]"
                  >
                    <span>{detail.type}:</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
              <button className="flex flex-row items-center gap-3 mt-5">
                <Download />
                Скачать технические данные
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Form />
    </div>
  );
}

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch product");

    const product = await res.json();
    return { props: { product: product.data } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
};
