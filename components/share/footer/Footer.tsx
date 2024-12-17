import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F8F7F5] border-black border-y-[0.99px] mb-4 font-gilroy">
      <Container className="flex flex-row flex-wrap justify-center md:justify-between pt-4 pb-14  items-center">
        <div>
          <Link href="/">
            <Image
              src="/footer-logo.svg"
              alt="logo"
              width={231}
              height={187.44}
            />
          </Link>
        </div>
        <div className="md:grid-cols-4 flex flex-row justify-between  flex-wrap gap-16 ">
          <div className="flex flex-col max-w-[246px]">
            <div className="border-collapse border-[#979797] border-b-[0.82px]">
              <span className="text-[20.48px] leading-[22.53px] text-[#F0B000] ">
                Навигация
              </span>
            </div>
            <div>
              <ul className="flex flex-col text-[14px] gap-2 text-[#636363] mt-3">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/">Каталог</Link>
                </li>
                <li>
                  <Link href="/about">О компании</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col max-w-[246px]">
            <div className="border-collapse border-[#979797] border-b-[0.82px]">
              <span className="text-[20.48px] leading-[22.53px] text-[#F0B000] ">
                Каталог
              </span>
            </div>
            <div>
              <ul className="flex flex-col text-[14px] gap-2 text-[#636363] mt-3">
                <li>
                  <Link href="/">Смазочные материалы</Link>
                </li>
                <li>
                  <Link href="/">Моторные масла для мотоциклов</Link>
                </li>
                <li>
                  <Link href="/catalog/avtomobilnye-motornye-masla">
                    Автомобильные моторные масла
                  </Link>
                </li>
                <li>
                  <Link href="/">Промышленные смазочные материалы</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col max-w-[246px]">
            <div className="border-collapse border-[#979797] border-b-[0.82px]">
              <span className="text-[20.48px] leading-[22.53px] text-[#F0B000] ">
                Полезные ссылки
              </span>
            </div>
            <div>
              <ul className="flex flex-col text-[14px] gap-2 text-[#636363] mt-3">
                <li>
                  <Link href="/about">О компании</Link>
                </li>
                <li>
                  <Link href="/contacts">Контакты</Link>
                </li>
                <li>
                  <Link href="/contacts">Связаться с нами</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col max-w-[246px]">
            <div className="border-collapse border-[#979797] border-b-[0.82px]">
              <span className="text-[20.48px] leading-[22.53px] text-[#F0B000] ">
                Контакты
              </span>
            </div>
            <div>
              <ul className="flex flex-col text-[14px] gap-2 text-[#636363] mt-3">
                <li>
                  <Link href="tel:77788181844">+7 (778) 818-18-44</Link>
                </li>
                <li>
                  <span>Компания: STANDARDOIL ТОО</span>
                </li>
                <li>
                  <span>
                    160016, Республика Казахстан, город Шымкент, микрорайон
                    Сайрам, дом 27/1,кв 17
                  </span>
                </li>
                <li>
                  <Link href="mailto:info@standardoil.com.kz">
                    info@standardoil.com.kz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mr-6">
          <Image
            src="/eni-logo.svg"
            alt="eni logo"
            width={237.09}
            height={98.55}
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
