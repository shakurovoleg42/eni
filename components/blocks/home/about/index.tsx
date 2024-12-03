import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-col mt-10 mb-10">
      <span className="w-full h-[2px] border-b-[7px] border-forms"></span>
      <div>
        <div className="mt-[38px]">
          <span className="font-gilroy-bold text-[46.46px] leading-[55.21px] text-black ">
            О КОМПАНИИ
          </span>
        </div>
        <div className="border-collapse border-[#B9B9B9] border-t-[2px] mt-8">
          <p className="text-[#336699]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibpus fermentumeget dictum libero. Nam finibus.Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
            non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales. Quisque sagittis orci ut diam condimentum, vel
            euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibpus fermentumeget dictum libero. Nam finibus.Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          </p>
        </div>
        <div className="mt-[61px]">
          <Link
            href="/"
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
