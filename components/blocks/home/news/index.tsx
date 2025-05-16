/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "@/components/Container";
import { NewsArticle } from "@/src/types/news";
import Link from "next/link";

function News() {
  const [news, setNews] = React.useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/news`);
      const data = await response.json();
      console.log(data);
      setNews(data.data.list);
    };
    fetchNews();
  }, []);

  return (
    <Container>
      <div className="flex flex-col px-8">
        <span className="w-full h-[2px] border-b-[7px] border-forms"></span>
        <div className="mt-[24px]">
          <h3 className="text-[31.26px] font-gilroy-bold">Новости</h3>
        </div>
        <div className="flex justify-center mt-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            style={{ width: "100%", height: "auto" }}
          >
            {news.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="flex flex-col items-center max-w-[450px]">
                  <Link href={`/news/${article.slug}`}>
                    <img
                      src={article.image}
                      alt="Slide Image"
                      className="max-w-[468px] max-h-[353px]"
                    />
                  </Link>
                  <p className="w-full text-start text-[20px] font-[600] mt-4">
                    {article.name}
                  </p>
                  <p className="text-start text-[16px] mt-2 font-[400]">
                    {article.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default News;
