import Image from "next/image";

function Catalog() {
  return (
    <div className="w-full flex flex-col items-center text-black mb-[190px]">
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
        <span className="w-full h-[1px] border-b-[7px] border-forms"></span>
        <div className="mt-6">
          <span className="font-gilroy-bold text-[31.26px] text-black text-start">
            ПОПУЛЯРНЫЕ ТОВАРЫ
          </span>
        </div>
        <div>{/* Слайдер с продуктами */}</div>
      </div>
      <div className="w-full flex flex-col items-center mt-20 gap-7 font-gilroy text-[24px] text-[#333333]">
        <h3>
          Автомасла AGIP/Eni имеют допуски крупнейших мировых автопроизводителей
        </h3>
        <div>
          <ul className="flex flex-row flex-wrap gap-24">
            <li>
              <Image
                src="/opel-logo.svg"
                width={144.95}
                height={112.26}
                alt="auto brands"
              />
            </li>
            <li>
              <Image
                src="/chevrolet-logo.svg"
                width={170.53}
                height={83.84}
                alt="auto brands"
              />
            </li>
            <li>
              <Image
                src="/renault-logo.svg"
                width={110.84}
                height={112.26}
                alt="auto brands"
              />
            </li>
            <li>
              <Image
                src="/ford-logo.svg"
                width={198.95}
                height={75.32}
                alt="auto brands"
              />
            </li>
            <li>
              <Image
                src="/mazda.svg"
                width={105.16}
                height={112.26}
                alt="auto brands"
              />
            </li>
            <li>
              <Image
                src="/alfa-romeo-logo.svg"
                width={112.26}
                height={112.26}
                alt="auto brands"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-white mt-[120px] gap-8 md:gap-24">
        <div className="bg-leftCardCatalog w-full md:w-[679px] h-auto bg-no-repeat bg-center rounded-2xl">
          <div className="flex py-[80px] items-start pl-5 hover:cursor-pointer">
            <span className="font-gilroy-bold text-[36px] md:text-[46px]">
              Заказать онлайн
            </span>
          </div>
        </div>
        <div className="bg-rightCardCatalog w-full md:w-[679px] h-auto bg-no-repeat bg-center rounded-xl">
          <div className="flex py-[80px] justify-end pr-5 hover:cursor-pointer">
            <span className="font-gilroy-bold text-[36px] md:text-[46px]">
              Свяжитесь с нами
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
