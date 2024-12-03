import { Container } from "@/components/Container";
import { useRouter } from "next/router";

function Banner() {
    const router = useRouter();

    // Определяем задний фон 
    function getBannerBg() {
        if (router.asPath === '/') {
            return 'bg-main'
        } else if (router.asPath === '/contacts') {
            return 'bg-second'
        }
    }

    // Определяем название на баннере 
    function getBannerTitle() {
        if (router.asPath === '/') {
            return 'Моторные масла бренда ENI'
        } else if (router.asPath === '/contacts') {
            return 'Связаться с нами'
        }
    }

  return (
    <Container className={`flex ${getBannerBg()} bg-no-repeat bg-cover bg-center w-full py-44 text-white items-center relative`}>
      <div className="absolute inset-0 bg-black bg-opacity-15 backdrop-blur-[1px] z-0"></div>
      <div className="max-w-[620px] relative z-10 ml-16">
        <span className="text-[70.32px] font-gilroy-bold leading-[85px]">
        {getBannerTitle()}
        </span>
      </div>
    </Container>
  );
}

export default Banner;

