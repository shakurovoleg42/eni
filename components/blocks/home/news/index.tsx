import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "@/components/Container";

function News() {
  return (
    <Container>
      <div className="flex flex-col px-8">
        <span className="w-full h-[2px] border-b-[7px] border-forms"></span>
        <div className="mt-[24px]">
          <h3 className="text-[31.26px]">Новости</h3>
        </div>
        <div className="flex justify-center mt-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            style={{ width: "100%", height: "auto" }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center max-w-[450px]">
                <img
                  src="/test-news.png"
                  alt="Slide Image"
                  className="max-w-[468px] max-h-[353px]"
                />
                <p className="w-full text-start text-[20px] font-[600] mt-4">
                  Заголовок
                </p>
                <p className="text-start text-[16px] mt-2 font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default News;
