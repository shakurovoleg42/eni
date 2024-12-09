/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <Container>
      <Banner />
      <div className="w-full bg-[#F5F5F5] pl-5 py-3 mt-16">
        <span>Главная » Моторное масло</span>
      </div>
      <div className="mt-6 flex flex-col xl:flex-row gap-6">
        <div className="flex flex-col pt-3 items-center w-[400px]">Фильтры</div>
        <div className="w-full flex flex-col">
          <div className="flex flex-wrap">
            {/* Карточка товара  */}
            <div className="w-full flex flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
              <div className="flex flex-col">
                <Link href="/products/slug">
                  <span className="font-[700] text-[26.7px] text-[#00A2FC]">
                    Eni i-Sint 0w-40
                  </span>
                  <img
                    src="/test-product.png"
                    alt="image"
                    className="w-[166px] h-[230px]"
                  />
                </Link>
              </div>
              <div className="max-w-[380px]">
                <ul className="flex flex-col gap-1">
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Product code:</span>
                    <span>0000000</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Name</span>
                    <span>product AA</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Gradient:</span>
                    <span>xyz 00 - 00</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Конец карточки  */}

            <div className="w-full flex flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
              <div className="flex flex-col">
                <Link href="/products/slug">
                  <span className="font-[700] text-[26.7px] text-[#00A2FC]">
                    Eni i-Sint 0w-40
                  </span>
                  <img
                    src="/test-product.png"
                    alt="image"
                    className="w-[166px] h-[230px]"
                  />
                </Link>
              </div>
              <div className="max-w-[380px]">
                <ul className="flex flex-col gap-1">
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Product code:</span>
                    <span>0000000</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Name</span>
                    <span>product AA</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Gradient:</span>
                    <span>xyz 00 - 00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
              <div className="flex flex-col">
                <Link href="/products/slug">
                  <span className="font-[700] text-[26.7px] text-[#00A2FC]">
                    Eni i-Sint 0w-40
                  </span>
                  <img
                    src="/test-product.png"
                    alt="image"
                    className="w-[166px] h-[230px]"
                  />
                </Link>
              </div>
              <div className="max-w-[380px]">
                <ul className="flex flex-col gap-1">
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Product code:</span>
                    <span>0000000</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Name</span>
                    <span>product AA</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Gradient:</span>
                    <span>xyz 00 - 00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center lg:justify-start max-w-[450px] gap-1 items-center font-inter mt-[50px]">
              <div className="flex flex-col">
                <Link href="/products/slug">
                  <span className="font-[700] text-[26.7px] text-[#00A2FC]">
                    Eni i-Sint 0w-40
                  </span>
                  <img
                    src="/test-product.png"
                    alt="image"
                    className="w-[166px] h-[230px]"
                  />
                </Link>
              </div>
              <div className="max-w-[380px]">
                <ul className="flex flex-col gap-1">
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Product code:</span>
                    <span>0000000</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Name</span>
                    <span>product AA</span>
                  </li>
                  <li className="flex flex-row justify-between border-[#696969] border-b-[1px] ">
                    <span className="w-auto">Gradient:</span>
                    <span>xyz 00 - 00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </Container>
  );
}

export default index;
