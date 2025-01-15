/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import Form from "@/components/share/Form";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useProductStore from "@/src/store/storeProducts/useProductStore";

// import InnerImageZoom from "react-inner-image-zoom";

function Product() {
  // const [productImage, setProductImage] = useState(
  //   product.images[0] || product.image
  // );
  const router = useRouter();
  const product = useProductStore((state) => state.product);

  const slug = router.query.product as string;

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        await useProductStore.getState().fetchProduct(slug);
      };
      fetchProduct();
    }
  }, [slug]);

  console.log(product);

  return (
    <div>
      <Container className="flex flex-col mt-10 lg:mt-36">
        <span>Главная » {product && product.category}</span>
        {product && (
          <div className="flex flex-col items-center">
            <span className="w-full my-10 border-b-black border-[1px]"></span>
            <div className="flex flex-col w-full lg:flex-row items-start  lg:items-start">
              <img
                src={product.photo || "/no-image.svg"}
                alt="image"
                className="max-w-[318px] max-h-[442px]"
              />
              {/* 
              <div>
                <InnerImageZoom
                  src={productImage}
                  zoomSrc={productImage}
                  zoomType="hover"
                  hideHint
                  className="!flex items-center justify-center productLeft__img"
                />
                <MultiImage images={product.images} setImage={setProductImage} />
              </div>
            */}
              <div className="mt-5 lg:mt-0 lg:ml-16 text-center lg:text-start">
                <div>
                  <h1 className="font-[700] text-[22.56px] text-[#00A2FC] font-inter">
                    {product.name}
                  </h1>
                </div>
                <div className="mt-[27.59px]">
                  <p className="text-[24.88px] font-[400] text-[#696969] font-inter">
                    <span className="font-bold">Применение: </span>
                    {product.application || "Инструкция временно отсутствует"}
                  </p>
                  {product.warning && (
                    <p className="text-[24.88px] font-[400] text-[#696969] font-inter">
                      <span className="font-bold">Предупреждение: </span>
                      {product.warning}
                    </p>
                  )}
                </div>
                <div className="mt-2 ">
                  {product.warning ? (
                    <a href={product.commercial_offer} target="_blank">
                      <Button
                        type="submit"
                        variant={"submit"}
                        size={"submit"}
                        className="relative overflow-hidden text-[18px] sm:text-[25px] mt-2 font-openSans font-[700] bg-[#FBD218] border-2 border-transparent group transition-all duration-300"
                      >
                        <span className="relative z-10">Получить КП</span>
                        {/* Псевдоэлемент для фона */}
                        <span className="absolute inset-0 block bg-white transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        {/* Псевдоэлемент для границы */}
                        <span className="absolute inset-0 block border-2 border-black origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
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
              <span className="font-inter font-[700] text-[30.82px] text-[#696969] px-5 bg-[#F1F1EA]">
                Technical profile
              </span>
              <div className="bg-[#FBFBFB] px-6 py-3 font-inter font-[700] text-[21.36px] text-[#696969]">
                <ul className="flex flex-col gap-5">
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Product code:</span>
                    <span>0000000</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Name:</span>
                    <span>product AA</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Gradient:</span>
                    <span>xyz 00 - 00</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Description:</span>
                    <span>Description</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Specifications, approval, compatiblity:</span>
                    <span>XZ 000000 | XZ 00000| XY 00000 XYZ</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1.24px] ">
                    <span>Applications:</span>
                    <span>-</span>
                  </li>
                </ul>
                <button className="flex flex-row items-center gap-3 mt-5">
                  <Download />
                  Скачать технический профиль
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Form />
    </div>
  );
}

export default Product;
