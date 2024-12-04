import { Container } from "@/components/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Banner() {
  const router = useRouter();
  const [bannerBg, setBannerBg] = useState('bg-main');
  const [bannerTitle, setBannerTitle] = useState('');

  useEffect(() => {
    // Определяем задний фон
    if (router.asPath === '/') {
      setBannerBg('bg-main');
      setBannerTitle('Моторные масла бренда ENI');
    } else if (router.asPath === '/contacts') {
      setBannerBg('bg-second');
      setBannerTitle('Связаться с нами');
    }
  }, [router.asPath]);

  return (
    <Container
      className={`flex ${bannerBg} bg-no-repeat bg-cover bg-center w-full py-44 text-white items-center relative`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-15 backdrop-blur-[1px] z-0"></div>
      <div className="max-w-[620px] relative z-10 ml-16">
        <p className="text-[70.32px] font-gilroy-bold leading-[85px]">{bannerTitle}</p>
      </div>
    </Container>
  );
}

export default Banner;
