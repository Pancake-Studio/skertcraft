import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import IpServer from "@/components/custom/ip";
import SVStatus from "@/components/serverStatus";
import Image from "next/image";
import Navbar from "@/components/custom/navbar";


export default function Home() {
  return (
    <>
      <div id="home" className=" relative h-screen w-full flex bg-black">
        <div className="fixed top-0 z-50 w-full">
          <div className="relative w-full bg-black py-5 bg-opacity-[40%] backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-6 lg:px-8">
              <Navbar />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className=" absolute bottom-0 right-0 w-[100rem] ">
          <Image
            className=" w-full"
            src="/mc.png"
            alt="Into Server"
            width={1024}
            height={500}
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="200" className=" absolute top-20 right-96 w-[50rem]">
          <Image
            className=" w-full"
            src="/sky.webp"
            alt="Into Server"
            width={1024}
            height={500}
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="900" className=" absolute top-1/3 left-40 w-[50rem] ">
          <h1 className="text-[100px]">ยินดีต้อนรับ</h1>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1100" className=" absolute top-[45vh] left-40 w-[50rem]">
          <h1 className="text-[60px]">.......</h1>
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
