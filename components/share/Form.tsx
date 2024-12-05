import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

function Form() {
  return (
    <div className="flex flex-col justify-center xl:flex-row mt-28 mb-32 font-arial">
      <div className="flex flex-col max-w-[654.92px] max-h-[442px] mt-[136px] bg-[#FBD218] py-[71px] pl-[99.47px] gap-11 rounded-tl-[22px] rounded-bl-[22px]">
        <div className="flex flex-col gap-9  ">
          <p className="font-openSans font-[700] text-[34px]">Обратная связь</p>
          <p className="text-[25px]">
            Хотите получить более подробную информацию оставьте контакты и мы
            свяжемся с Вами!
          </p>
        </div>
        <div>
          <Button className="flex text-[25px] font-openSans font-[700]">
            Заказать звонок
          </Button>
        </div>
      </div>
      <div className="flex flex-col min-h-[695px] bg-white shadow-2xl rounded-[22px] pl-[90px]">
        <span className="mt-[71px] text-[25px] font-[400] leading-[36px]">
          Напишите нам и мы свяжемся с Вами!
        </span>
        <form
          action=""
          className="mt-[71px] flex flex-col flex-wrap justify-between pr-44 pb-[90px]"
        >
          <div className="flex flex-wrap justify-between gap-11">
            <div className="flex flex-col">
              <span>Ваше имя</span>
              <Input className="w-[300px] border-[2.84px] font-gilroy" />
            </div>
            <div className="flex flex-col">
              <span>E-mail</span>
              <Input className="w-[300px] border-[2.84px] font-gilroy" />
            </div>
          </div>
          <div className="mt-[28px] flex flex-col">
            <span>Текс сообщение</span>
            <Textarea className="border-[2.84px] font-gilroy" />
          </div>
          <Button
            type="submit"
            variant={'submit'}
            size={'submit'}
            className="text-[25px] mt-[73px] font-openSans font-[700]"
          >
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
