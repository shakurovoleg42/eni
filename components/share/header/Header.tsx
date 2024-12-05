import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

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
      {/* Right side header */}
      <div className="bg-header rounded-t-sm">
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
          <div className="flex flex-row gap-5 text-center text-[#2D2723] text-[14px] font-gilroy-bold">
            <Link href='/' className="p-2 hover:bg-white rounded-lg">О компании</Link>
            <Link href='/' className="p-2 hover:bg-white rounded-lg">Автомобильные моторные масла</Link>
            <Link href='/' className="p-2 hover:bg-white rounded-lg">Моторные масла для мотоциклов </Link>
            <Link href='/' className="p-2 hover:bg-white rounded-lg">Смазочные материалы</Link>
            <Link href='/' className="p-2 hover:bg-white rounded-lg">Промышленные смазочные материалы</Link>
            <Link href='/contacts' className="p-2 hover:bg-white rounded-lg">Связаться с нами</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
