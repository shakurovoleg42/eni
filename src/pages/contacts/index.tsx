import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Contacts = () => {
  return (
    <Container>
      <Banner />
      <div className="mt-28 flex flex-col">
        <div className="flex flex-col gap-12">
          <h1 className="font-gilroy-bold text-[54px] text-[#151515]">
            Связаться с нами
          </h1>
          <p className="font-gilroy-medium text-[25px] text-[#151515]">
            Оставьте контактные данные чтобы мы могли с вами связаться
          </p>
        </div>
        <div className="mt-[50px] flex flex-col lg:flex-row gap-[135px]">
          <form
            action=""
            className="flex flex-col gap-12 w-[780px] px-5 lg:px-0"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div>
                <p className="font-gilroy-bold ">Имя</p>
                <Input className="border-[1px] w-[365px] py-6 px-4" />
              </div>
              <div>
                <p className="font-gilroy-bold ">Фамилия</p>
                <Input className="border-[1px] w-[365px] py-6 px-4" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div>
                <p className="font-gilroy-bold ">Почты</p>
                <Input className="border-[1px] w-[365px] py-6 px-4" />
              </div>
              <div>
                <p className="font-gilroy-bold ">Номер телефона</p>
                <Input className="border-[1px] w-[365px] py-6 px-4" />
              </div>
            </div>

            <div className="mt-[30px]">
              <button
                type="submit"
                className="group relative border-black border-[2px] bg-transparent py-[4px] px-[36px] overflow-hidden transition-colors duration-300 rounded-sm"
              >
                <span className="absolute inset-0 bg-[#FBD218] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-black">
                  <MoveRight
                    width={50}
                    height={40}
                    strokeWidth={1.25}
                    className="transform transition-transform duration-700 group-hover:translate-x-2"
                  />
                </span>
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-[50px]">
            <h2 className="font-gilroy-bold text-[44px] leading-[52px]">
              Контактные данные
            </h2>
            <p>
              Мы всегда рады помочь вам! Для консультаций и информации свяжитесь
              с нами любым удобным способом.
            </p>
            <div className="flex flex-col text-black text-[18px] gap-2">
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src="/call-icon.svg"
                  width={28}
                  height={28}
                  alt="phone icon"
                />
                <a href="tel:77788181844">
                  <p>+12 345 67 89</p>
                </a>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src="/mail-icon.svg"
                  width={28}
                  height={28}
                  alt="mail icon"
                />
                <a href="mailto:info@standardoil.com.kz">
                  <p>info@standardoil.com.kz</p>
                </a>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src="/location-icon.svg"
                  width={28}
                  height={28}
                  alt="location icon"
                />
                <p>
                  160016, Республика Казахстан, город Шымкент, микрорайон
                  Сайрам, дом 27/1,кв 17
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
