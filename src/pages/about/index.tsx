import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <Container className="mb-12">
      <Banner />
      <div className="flex flex-col mt-12 gap-40 font-inter font-[400] px-3">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-row gap-4">
            <Image
              src="/main-page-banner.jpeg"
              width={520}
              height={481}
              alt="about-images"
              className="rounded-[22px]"
            />
            <div className="hidden lg:flex flex-col gap-4">
              <Image
                src="/about-img-second.png"
                width={250}
                height={231.31}
                alt="about-images"
              />
              <Image
                src="/about-third.png"
                width={250}
                height={231.31}
                alt="about-images"
                className="rounded-[18px]"
              />
            </div>
          </div>

          <p className="text-[22.7px] max-w-[790px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <p className="text-[22.7px] max-w-[1060px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
            src="/about-fourth.png"
            width={520}
            height={481}
            alt="about-images"
            className="rounded-[22px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
