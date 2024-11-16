import IpServer from "@/components/custom/ip";
import SVStatus from "@/components/serverStatus";
import { MdOutlineVideogameAsset } from "react-icons/md";
import Image from "next/image";
import Navbar from "@/components/custom/navbar";


export default function Home() {
  return (
    <>
      <div id="home" className="relative h-screen w-full flex bg-white dark:bg-gray-950">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Image
            src="/lobby1.webp"
            alt="alt"
            width={1920}
            height={1009}
            className="object-cover object-center h-full w-full"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="3000"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white dark:from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white dark:from-black to-transparent"></div>
        <div className="text-[4rem] absolute left-1/2 -translate-x-1/2 bottom-1/3 translate-y-1/2 z-50 w-full text-center">
          <a href="#home">
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="3000" className="[text-shadow:_0_8px_8px_#000] font-bold text-white">
              ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ของเรา
            </h1>
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 text-[3rem] absolute left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-[-120px] z-50 w-full">
          <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="3000" className="flex items-center">
            <SVStatus />
          </div>
        </div>
        <div className="fixed top-0 z-50 w-full">
          <div className="relative w-full bg-white dark:bg-black py-1 dark:bg-opacity-[40%] dark:backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-6 lg:px-8">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div id="howtoplay" className="relative h-screen bg-transparent">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-4 gap-4">
          <div className="flex flex-col space-y-7 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[40px]">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Image
                className="w-screen max-w-[300px] lg:max-w-[600px] rounded-lg border-2 border-dashed lg:p-2"
                src="/into-server.webp"
                alt="Into Server"
                width={1050}
                height={959}
              />
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
            >
              <div className=" flex-col-1">
                <h2 className=" text-[20px] lg:text-[45px] font-bold text-white">
                  สิ่งที่ต้องทำก่อนเข้าเซิร์ฟเวอร์
                </h2>
                <h2 className="text-[15px] lg:text-[25px] font-bold text-gray-500">
                  เพื่อให้เซิร์ฟเวอร์แสดงผลได้อย่างถูกต้อง
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative h-[100vh] bg-transparent">

      </div>
    </>
  );
}
