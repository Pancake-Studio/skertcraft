"use server"

import { ServerStatusWrapper } from "@/components/serverStatus";
import Image from "next/image";
import { ZFTERMIN } from "@/app/fonts";

export default async function Home() {
  return (
    <>
      <div id="home" className="relative h-screen w-full flex text-black dark:text-white">
        <div className=" left-1/2 top-[0px] -translate-x-1/2 w-full h-1/2 relative">
          <Image
            src="/lobby1.webp"
            alt="alt"
            width={1920}
            height={1009}
            className="object-cover object-center h-full w-full"
            data-aos="fade-zoom-in"
            data-aos-duration="1000" data-aos-easing="ease-in-out"
          />
          <div
            data-aos="fade-zoom-in"
            data-aos-duration="1000" data-aos-easing="ease-in-out"
            className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white dark:from-black to-transparent" />
          <div className="fixed left-1/2 top-[200px] -translate-x-1/2 -translate-y-1/2 w-full h-1/2 flex flex-col justify-center items-center">
            <h1 data-aos="fade-zoom-in" data-cursor-scale="14 " data-aos-duration="1000" data-aos-easing="ease-in-out"
              className={`${ZFTERMIN.className} text-white text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-[0_5px_6px_rgba(0,0,0,0.8)] transition-all duration-300`}>
              SkerCraft
            </h1>
            <h2 data-aos="fade-zoom-in" data-cursor-scale="7" data-aos-duration="1000"  data-aos-easing="ease-in-out"
              className="text-orange-200 text-xs md:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transition-all duration-300 bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
              ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ไมน์คราฟต์ของพวกเรา
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000" data-aos-easing="ease-in-out"
          className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#aaa] dark:from-black to-transparent" />
        <div className=" text-3xl md:text-5xl lg:text-6xl absolute left-1/2 bottom-1/3 -translate-x-1/2 translate-y-2/3 z-50 w-[90%] flex flex-col gap-4">
          <div data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex flex-col md:flex-row items-center justify-end gap-8 mt-20 w-full px-10">
            <div data-cursor-scale="9" className="flex flex-col gap-4">
              <ServerStatusWrapper type="sv" />
              <ServerStatusWrapper type="player" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-[3rem] absolute left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-[-120px] z-50 w-full">
        </div>
      </div>
      <div id="The Best" className="relative h-screen w-full flex text-black dark:text-white">
        
      </div>
    </>
  );
}
