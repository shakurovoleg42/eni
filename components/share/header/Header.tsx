import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <Container className="flex flex-col">
      {/* Left side header */}
      <div className="flex flex-row justify-between">
        <div>
          <Link href="/">
            <Image
              src="/header-logo.svg"
              alt="logo"
              width={338}
              height={105.48}
            />
          </Link>
        </div>
        <div className="mr-6">
          <Image
            src="/eni-logo.svg"
            alt="eni logo"
            width={296.88}
            height={148.44}
          />
        </div>
      </div>
      {/* burger menu icon */}
      <Sheet>
        <div className="flex lg:hidden mt-[16px] mb-[20px] ">
          <SheetTrigger asChild>
            <button className="w-[57px] h-[45px] bg-[#FED300] p-2 rounded-[7px]">
              <div className="flex flex-col gap-2 items-center">
                <span className="w-[37px] border-[2px] border-black rounded-md"></span>
                <span className="w-[37px] border-[2px] border-black rounded-md"></span>
                <span className="w-[37px] border-[2px] border-black rounded-md"></span>
              </div>
            </button>
          </SheetTrigger>
        </div>

        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
            <SheetDescription>
              <div className="flex flex-col mt-10 text-start gap-5 text-[#2D2723] text-[20px] font-gilroy-bold">
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="border-l-[2px] border-black p-2"
                  >
                    О компании
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/catalog/avtomobilnye-motornye-masla"
                    className="border-l-[2px] border-black p-2"
                  >
                    Автомобильные моторные масла
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="border-l-[2px] border-black p-2">
                    Моторные масла для мотоциклов
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="border-l-[2px] border-black p-2">
                    Смазочные материалы
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="border-l-[2px] border-black p-2">
                    Промышленные смазочные материалы
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contacts"
                    className="border-l-[2px] border-black p-2 hover:bg-white "
                  >
                    Связаться с нами
                  </Link>
                </SheetClose>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* Right side header */}
      <div className="hidden lg:flex bg-header rounded-t-sm">
        <div className="flex flex-row px-2 pb-2 text-center items-center gap-32">
          <div>
            <Link href="/">
              <Image
                src="/header-house-icon.svg"
                alt="header house icon"
                width={53.16}
                height={45.18}
              />
            </Link>
          </div>
          <div className="flex flex-row  gap-5 text-center text-[#2D2723] text-[14px] font-gilroy-bold">
            <Link href="/about" className="p-2 hover:bg-white rounded-lg">
              О компании
            </Link>
            <Link
              href="/catalog/avtomobilnye-motornye-masla"
              className="p-2 hover:bg-white rounded-lg"
            >
              Автомобильные моторные масла
            </Link>
            <Link href="/" className="p-2 hover:bg-white rounded-lg">
              Моторные масла для мотоциклов{" "}
            </Link>
            <Link href="/" className="p-2 hover:bg-white rounded-lg">
              Смазочные материалы
            </Link>
            <Link href="/" className="p-2 hover:bg-white rounded-lg">
              Промышленные смазочные материалы
            </Link>
            <Link href="/contacts" className="p-2 hover:bg-white rounded-lg">
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
