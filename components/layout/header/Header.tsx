import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <header className="  sticky left-0 top-0 z-[100] w-full h-full   ">
        <div className="  border-b border-[#27272A]  justify-between">
          <div className=" flex bg-[#09090B] justify-between items-center w-full h-full px-10 py-5">
            <Link
              className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 flex items-center ring-offset-2"
              href="/"
            >
              <Image
                alt="Logo"
                width={40}
                height={40}
                decoding="async"
                data-nimg="1"
                src="/img/logoMont.png"
              />
            </Link>
           
            <div className="bg-[#1FDD8A]/65 px-3 py-2 rounded-full">
              <Link
                className="text-white"
                href="/"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </header>
      
    )
}

export default Footer