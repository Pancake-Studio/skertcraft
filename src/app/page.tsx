import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import IpServer from "@/components/custom/ip";
import SVStatus from "@/components/serverStatus";
import Image from "next/image";


export default function Home() {
  return (
    <>
      {/* <div className="w-full h-screen overflow-hidden dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
        <div className="absolute pointer-events-none inset-0 flex justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <Image
        className="opacity-5 animate-appear view-timeline-animation fixed h-screen w-full object-cover object-center mx-auto [filter:drop-shadow(-120px_-20px_50px_#ec9c24)_drop-shadow(120px_20px_50px_#aa571f91)] md:[filter:drop-shadow(-200px_-100px_150px_#ec9c24)_drop-shadow(200px_100px_100px_#aa571f91)]"
        src="/1159416.webp"
        alt="Server Title"
        width={2022}
        height={413}
      />

      <div className=" relative h-screen w-full flex items-center justify-center bg-transparent">
        <div className=" absolute top-[50px] right-[50px] flex gap-[8px] animate-slideUp transition-all duration-1000 ease-out">
          <a href="https://discord.gg/DqN9KRw3mN" className="text-white hover:text-blue-500 transition-colors">
            <AiOutlineDiscord size={40} />
          </a>
          <a href="https://www.facebook.com/minecraftsker.sk" className="text-white hover:text-blue-500 transition-colors">
            <CiFacebook size={40} />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-4 gap-4">
          {/* ปรับ animation logo */}
          <div className="opacity-0 translate-y-8 animate-slideUp transition-all duration-1000 ease-out">
            <Image
              className=" w-[65vw] md:w-[40vw] mx-auto [filter:drop-shadow(-120px_-20px_50px_#ec9c24)_drop-shadow(120px_20px_50px_#aa571f91)] md:[filter:drop-shadow(-200px_-100px_150px_#ec9c24)_drop-shadow(200px_100px_100px_#aa571f91)]"
              src="/minecraft_title2.png"
              alt="Server Title"
              width={2022}
              height={413}
            />
          </div>

          {/* ปรับ animation IP Server */}
          <div className="opacity-0 translate-y-8 animate-slideUp-delay-200 transition-all duration-1000 ease-out">
            <IpServer />
          </div>

          {/* ปรับ animation Status */}
          <div className="opacity-0 translate-y-8 animate-slideUp-delay-400 transition-all duration-1000 ease-out">
            <SVStatus />
          </div>
        </div>
      </div>
      <div className=" relative h-[100vh] bg-transparent">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-4 gap-4">
          <div className="flex lg:gap-[40px]">
            <div  data-aos="fade-up" data-aos-anchor-placement="top-center">
              <Image
                className="w-screen lg:max-w-[600px] rounded-lg border-2 border-dashed lg:p-2"
                src="/into-server.webp"
                alt="Into Server"
                width={1050}
                height={959}
              />
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
            >
              <div className=" flex-col-1">
                <h2 className="lg:text-[45px] font-bold text-white">
                  สิ่งที่ต้องทำก่อนเข้าเซิร์ฟเวอร์
                </h2>
                <h2 className="lg:text-[25px] font-bold text-gray-500">
                  เพื่อให้เซิร์ฟเวอร์แสดงผลได้อย่างถูกต้อง
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
