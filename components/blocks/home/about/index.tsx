import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-col mt-10 mb-10 border-b-[2px] px-8">
      <span className="w-full h-[2px] border-b-[7px] border-forms"></span>
      <div>
        <div className="mt-[38px]">
          <span className="font-gilroy-bold text-[46.46px] leading-[55.21px] text-black ">
            О КОМПАНИИ
          </span>
        </div>
        <div className="border-collapse border-[#B9B9B9] border-t-[2px] mt-8 text-[#336699]">
          <h2 className="py-4 text-[32px] font-gilroy-bold">
            StandardOil – эксперт в смазочных материалах.
          </h2>
          <p className="text-[18px]">
            Более 20 лет мы предлагаем инновационные решения для смазки
            оборудования, транспортных средств и промышленной техники. Компания
            StandardOil специализируется на высококачественных продуктах,
            обеспечивая надежность и долговечность в самых сложных условиях
            эксплуатации.
          </p>
          <div className="my-4">
            <span className="text-[18px]">Почему выбирают нас:</span>
            <ul className="text-[18px] list-disc pl-5">
              <li className="py-1 ">
                <span className="font-gilroy-bold">Широкий ассортимент:</span>
                Смазочные материалы для автомобилей, сельскохозяйственной
                техники, промышленного оборудования, энергетических и оборонных
                предприятий, мототехники, велосипедов и водного транспорта.
              </li>
              <li className="py-1 ">
                <span className="font-gilroy-bold">
                  Профессиональная экспертиза:
                </span>
                Наши технические специалисты всегда готовы помочь в выборе
                подходящего продукта и проконсультировать по любым вопросам.
              </li>
              <li className="py-1 ">
                <span className="font-gilroy-bold">Складская доступность:</span>
                Вы всегда найдете нужный продукт на нашем складе.
              </li>
            </ul>
          </div>
          <p>
            <span className="font-gilroy-bold text-[18px]">StandardOil</span> –
            это гарантия качества, надежности и профессиональной поддержки. Мы
            создаем смазочные решения, которые работают на будущее.
          </p>
        </div>
        <div className="mt-[61px]">
          <Link
            href="/about"
            className="text-[25.28px] font-gilroy border-b border-black"
          >
            Читать далее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
