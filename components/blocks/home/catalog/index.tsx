import Image from "next/image"

function Catalog() {
  return (
    <div className="flex flex-col items-center text-black mb-[190px]">
        <span className="flex text-[34.11px] font-gilroy-bold">Каталог</span>
        <div className='flex flex-col md:flex-row gap-[85px] font-gilroy text-[34px] mt-[35px]'>
            <div className='flex flex-col items-center md:flex-row border-[2px] rounded-md bg-[#F1F1F1] justify-between w-[767px] h-[170px]'>
                <div className="pl-16">
                    <span>Каталог</span>
                </div>
                <div>
                    <Image src="/car-card-home1.png" width={298} height={81} alt="car-card 2"/>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row border-[2px] rounded-md bg-[#F1F1F1] justify-between w-[767px] h-[170px]'>
                <div className="pl-16">
                    <span>Подбор масел</span>
                </div>
                <div>
                    <Image src="/car-card-home2.png" width={298} height={132} alt="car-card 2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalog