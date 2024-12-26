import { useRef, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";

import useContactFormStore from "@/src/store/storeForms/useContactForm";
import { Alert } from "@mui/material";

const Contacts = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { formData, postContactForm } = useContactFormStore();
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    useContactFormStore.setState((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postContactForm();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Banner />
      <div className="my-10 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col">
            <div className="flex flex-col gap-12 max-w-[700px]">
              <h1 className="font-gilroy-bold text-[54px] text-[#151515]">
                Связаться с нами
              </h1>
              <p className="font-gilroy-medium text-[25px] text-[#151515]">
                Оставьте контактные данные чтобы мы могли с вами связаться
              </p>
            </div>

            <div className="mt-[50px] flex flex-col xl:flex-row gap-[135px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col gap-5 max-w-[880px] p-5 lg:p-5 shadow-custom rounded-[22px]"
              >
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-12">
                  <div>
                    <p className="font-gilroy-bold ">Имя</p>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-[1px] w-full max-w-[365px] py-6 px-3"
                    />
                  </div>
                  <div>
                    <p className="font-gilroy-bold ">Фамилия</p>
                    <Input
                      name="surname"
                      type="text"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="border-[1px] w-full max-w-[365px] py-6 px-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-12">
                  <div>
                    <p className="font-gilroy-bold ">Почта</p>
                    <Input
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-[1px] w-full max-w-[365px] py-6 px-3"
                    />
                  </div>
                  <div>
                    <p className="font-gilroy-bold ">Номер телефона</p>
                    <Input
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-[1px] w-full max-w-[365px] py-6 px-3"
                    />
                  </div>
                </div>
                <div className="mt-[10px] flex flex-col lg:flex-row gap-6 ">
                  <button
                    type="submit"
                    className="max-w-[150px] group relative border-black border-[2px] bg-[#FBD218] py-[4px] px-[36px] overflow-hidden transition-colors duration-300 rounded-sm"
                  >
                    <span className="relative z-10 text-black">
                      <MoveRight
                        width={50}
                        height={40}
                        strokeWidth={1.25}
                        className="transform transition-transform duration-700 group-hover:translate-x-2"
                      />
                    </span>
                  </button>
                  <div>
                    {showAlert && (
                      <Alert severity="success">
                        Мы получили Вашу заявку и скоро свяжемся с Вами.
                      </Alert>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] max-w-[600px]">
            <h1 className="font-gilroy-bold text-[44px] leading-[81px]">
              Контактные данные
            </h1>
            <p className="font-gilroy-medium text-[22px] text-[#151515]">
              Мы всегда рады помочь вам! Для консультаций и информации свяжитесь
              с нами любым удобным способом.
            </p>
            <div className="flex flex-col text-black text-[16px] gap-6">
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src="/call-icon.svg"
                  width={28}
                  height={28}
                  alt="phone icon"
                />
                <a href="tel:77788181844">
                  <p>+7 (778) 818-18-44</p>
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
              <div className="flex flex-row gap-5 items-start">
                <Image
                  src="/location-icon.svg"
                  width={25}
                  height={25}
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
        <div>{/* Карта */}</div>
      </div>
    </Container>
  );
};

export default Contacts;
