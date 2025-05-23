import React, { useState, useRef } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Container } from "../Container";
import Modal from "../Modal";
import useFooterFormStore from "@/src/store/storeForms/useFooterForm";
import { Alert } from "@mui/material";

function Form() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { formData, postFooterForm } = useFooterFormStore();
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    useFooterFormStore.setState((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postFooterForm();
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="flex flex-col justify-center xl:flex-row mt-0 xl:mt-28 mb-32 font-arial">
      <div className="flex flex-col max-w-[654.92px] max-h-[442px] mt-[136px] bg-[#FBD218] py-[71px] pl-2 md:pl-[99.47px] gap-11 rounded-tl-[22px] rounded-bl-[22px]">
        <div className="flex flex-col gap-9  ">
          <p className="font-openSans font-[700] text-[25px] sm:text-[34px]">
            Обратная связь
          </p>
          <p className="text-[16px] sm:text-[20px]">
            Хотите получить более подробную информацию оставьте контакты и мы
            свяжемся с Вами!
          </p>
        </div>
        <div>
          <Button
            onClick={() => setModalOpen(true)}
            className="relative overflow-hidden text-[18px] sm:text-[25px] font-openSans font-[700] border-[2px] border-black bg-transparent group"
          >
            <span className="relative z-10">Заказать звонок</span>
            <span className="absolute inset-0 block bg-white transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Button>
          <Modal open={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
      <div className="flex flex-col min-h-[695px] bg-white shadow-custom rounded-[22px] px-2 md:pl-[90px]">
        <span className="mt-[71px] text-[25px] font-[400] leading-[36px]">
          Напишите нам и мы свяжемся с Вами!
        </span>
        {showAlert && (
          <Alert severity="success">
            Мы получили Вашу заявку и скоро свяжемся с Вами.
          </Alert>
        )}
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          method="post"
          className="mt-[71px] flex flex-col flex-wrap justify-between pr-44 pb-[90px]"
        >
          <div className="flex flex-wrap justify-between gap-11">
            <div className="flex flex-col">
              <span>Ваше имя</span>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-[300px] border-[2.84px] font-gilroy"
                required
              />
            </div>
            <div className="flex flex-col">
              <span>E-mail</span>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-[300px] border-[2.84px] font-gilroy"
                required
              />
            </div>
          </div>
          <div className="mt-[28px] flex flex-col">
            <span>Текст сообщение</span>
            <Textarea
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              className="border-[2.84px] font-gilroy"
              required
            />
          </div>
          <Button
            type="submit"
            variant={"submit"}
            size={"submit"}
            className="relative overflow-hidden px-2 text-[18px] sm:text-[25px] mt-[73px] font-openSans font-[700] bg-[#FBD218] border-2 border-transparent group transition-all duration-300"
          >
            <span className="relative z-10">Отправить</span>
            <span className="absolute inset-0 block bg-white transform origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            <span className="absolute inset-0 block border-2 border-black origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Form;
