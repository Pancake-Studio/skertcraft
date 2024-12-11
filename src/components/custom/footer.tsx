import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {

  return (
    <>
      <div className="bg-orange-800 h-[20px] shadow-[0_-4px_10px_-1px_rgb(154,52,18,0.5)]"></div>
      <div className=" relative bg-orange-700 h-[100px] ">
        <div className=" absolute right-3 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <a href="https://discord.gg/skercraft">
              <FaDiscord className="text-white text-xs md:text-[20px]" />
            </a>
            <a href="https://tiktok.com/@skercraft">
              <FaTiktok className="text-white text-xs md:text-[20px]" />
            </a>
            <a href="https://facebook.com/skercraft">
              <FaFacebook className="text-white text-xs md:text-[20px]" />
            </a>
            <a href="https://youtube.com/@skercraft">
              <FaYoutube className="text-white text-xs md:text-[20px]" />
            </a>
          </div>
          <h1 className="text-white text-xs md:text-[20px]">
            Fridayz.VPS
          </h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center h-full">
          <h1 className="text-white text-xs md:text-[20px]">เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB</h1>
          <h1 className="text-white text-xs md:text-[20px]">Copyright © 2024</h1>
        </div>
      </div>
    </>
  );
}