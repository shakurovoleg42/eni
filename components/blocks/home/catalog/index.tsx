import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";

function Catalog() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="w-full flex flex-col items-center text-black mb-[190px] px-8">
      <span className="flex text-[34.11px] font-gilroy-bold">Каталог</span>
      <div className="flex flex-col flex-wrap xl:flex-nowrap md:flex-row gap-[85px] font-gilroy text-[34px] mt-[35px] ">
        <a href="#">
          <div className="flex flex-col gap-0 lg:gap-20 items-center text-center md:flex-row border-[2px] rounded-md bg-[#F1F1F1] justify-between max-w-[767px] min-h-[170px] hover:cursor-pointer">
            <div className="pl-0 xl:pl-16">
              <span>Каталог</span>
            </div>
            <div>
              <Image
                src="/car-card-home1.png"
                width={298}
                height={81}
                alt="car-card 1"
              />
            </div>
          </div>
        </a>
        <a target="_blank" href="https://oilproducts.eni.com/en_GB/lube-finder">
          <div className="flex flex-col gap-0 lg:gap-20 items-center text-center md:flex-row border-[2px] rounded-md bg-[#F1F1F1] justify-between max-w-[767px] min-h-[170px] hover:cursor-pointer">
            <div className="pl-0 xl:pl-16">
              <span>Подбор масел</span>
            </div>
            <div>
              <Image
                src="/car-card-home2.png"
                width={298}
                height={132}
                alt="car-card 2"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="w-full flex flex-col items-start mt-48">
        {/* Header Line */}
        <span className="w-full h-[1px] border-b-[7px] border-forms"></span>

        {/* Title */}
        <div className="mt-6">
          <span className="font-gilroy-bold text-[31.26px] text-black text-start">
            ПОПУЛЯРНЫЕ ТОВАРЫ
          </span>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            style={{ width: "100%", height: "auto" }}
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-10">
                <strong className="text-[20px] font-bold mt-4">
                  Eni Dicrea 46
                </strong>
                <img
                  src="/test-product.png"
                  alt="Popular Product 1"
                  className="max-w-[277px] max-h-[288px] p-11 border border-[#D4D4D4]"
                />

                <div className="flex flex-row items-center gap-4">
                  <span className="font-gilroy-bold">15 200,00 ₽</span>
                  <span className="p-2 border border-[#D4D4D4]">20л</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-20 gap-7 font-gilroy text-[24px] text-[#333333]">
        <h3>
          Автомасла AGIP/Eni имеют допуски крупнейших мировых автопроизводителей
        </h3>
        <div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <li>
              <Image
                src="/opel-logo.svg"
                width={144.95}
                height={112.26}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
            <li>
              <Image
                src="/chevrolet-logo.svg"
                width={170.53}
                height={83.84}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
            <li>
              <Image
                src="/renault-logo.svg"
                width={110.84}
                height={112.26}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
            <li>
              <Image
                src="/ford-logo.svg"
                width={198.95}
                height={75.32}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
            <li>
              <Image
                src="/mazda.svg"
                width={105.16}
                height={112.26}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
            <li>
              <Image
                src="/alfa-romeo-logo.svg"
                width={112.26}
                height={112.26}
                alt="auto brands"
                className="max-w-full h-auto"
              />
            </li>
          </ul>
        </div>
      </div>
      <Container>
        <div
          onClick={() => setModalOpen(true)}
          className="flex flex-col md:flex-row text-white mt-[120px] gap-8 md:gap-24"
        >
          <div className="bg-leftCardCatalog w-auto xl:w-[589px] h-auto bg-no-repeat bg-center rounded-2xl">
            <div className="flex py-[60px] items-start pl-5 hover:cursor-pointer">
              <span className="font-gilroy-bold text-[36px] md:text-[46px]">
                Заказать онлайн
              </span>
            </div>
            <Modal open={isModalOpen} onClose={() => setModalOpen(false)} />
          </div>
          <Link href="/contacts">
            <div className="bg-rightCardCatalog w-auto xl:w-[589px] h-auto bg-no-repeat bg-center rounded-xl">
              <div className="flex py-[60px] justify-end pr-5 hover:cursor-pointer">
                <span className="font-gilroy-bold text-[36px] md:text-[46px]">
                  Свяжитесь с нами
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Catalog;
