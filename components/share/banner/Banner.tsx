import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container } from "@/components/Container";

function Banner() {
  const router = useRouter();
  const [backgroundClass, setBackgroundClass] = useState("bg-main");
  const [title, setTitle] = useState("Моторные масла бренда ENI");

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setBackgroundClass("bg-main");
        setTitle("Моторные масла бренда ENI");
        break;
      case "/contacts":
        setBackgroundClass("bg-second");
        setTitle("Связаться с нами");
        break;
      default:
        break;
    }
  }, [router.asPath]);

  return (
    <Container
      className={`flex ${backgroundClass} bg-no-repeat bg-cover bg-center w-full py-44 text-white items-center relative`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-15 backdrop-blur-[1px] z-0"></div>
      <div className="max-w-[620px] relative z-10 ml-16">
        <p className="text-[70.32px] font-gilroy-bold leading-[85px]">
          {title}
        </p>
      </div>
    </Container>
  );
}

export default Banner;
