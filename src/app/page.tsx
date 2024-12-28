import { ServerStatusWrapper } from "@/components/serverStatus";
import Image from "next/image";
import { ZFTERMIN } from "@/app/fonts";
import { FaCaretDown } from "react-icons/fa";


export default async function Home() {
  const details = [
    {
      title: "ระบบการเล่นแบบ Survival ผสม RPG",
      description: [
        "รูปแบบการเล่นคล้าย Minecraft ดั้งเดิม",
        "เน้นการหาของและฟาร์มทรัพยากรด้วยตัวเอง",
        "นำไอเทมที่ได้มาอัพเกรดตัวละคร",
      ],
    },
    {
      title: "ระบบการอัพเกรดตัวละคร",
      description: [
        "อัพเกรดอาวุธให้แข็งแกร่งขึ้น",
        "พัฒนาอุปกรณ์การทำฟาร์มให้มีประสิทธิภาพ",
        "เสริมความแข็งแกร่งของชุดเกราะป้องกัน",
      ],
    },
    {
      title: "โลกแห่งการผจญภัย",
      description: [
        "พื้นที่สร้างถิ่นฐานและฟาร์ม",
        "ดันเจี้ยนสำหรับฟาร์มเลเวล",
        "พื้นที่จัดกิจกรรมพิเศษบนเซิร์ฟเวอร์",
      ],
    },
    {
      title: "ระบบการตีบวกไอเทม",
      description: [
        "ระบบอัพเกรดไอเทมที่ท้าทาย",
        "ต้องใช้เวลาและความอดทนในการฟาร์ม",
        "รางวัลคือความแข็งแกร่งที่เพิ่มขึ้น",
      ],
    },
    {
      title: "กิจกรรมในเซิร์ฟเวอร์",
      description: [
        "กิจกรรมพิเศษหลากหลาย",
        "โอกาสได้ไอเทมและรางวัลพิเศษ",
        "สร้างความสนุกและความท้าทายให้ผู้เล่น",
      ],
    },
  ];
  return (
    <>
      <div id="home" className="relative h-screen w-full flex text-black dark:text-white">
        <div className="left-1/2 top-[0px] -translate-x-1/2 w-full h-1/2 relative">
          <Image
            src="/lobby1.webp"
            alt="alt"
            width={1920}
            height={1009}
            className="object-cover object-center h-full w-full transition-opacity duration-300"
            data-aos="fade-in"
            data-aos-duration="1500"
            loading="lazy"
            placeholder="blur"
            blurDataURL="..."
          />

          {/* Hero Section Overlay */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/90 to-transparent "
          />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-6">
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              data-cursor-scale="13"
              className={`${ZFTERMIN.className} text-white text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-lg transition-all duration-300 hover:scale-105`}
            >
              SkerCraft
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              data-cursor-scale="8"
              className="text-orange-200 text-xs md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ไมน์คราฟต์ของพวกเรา
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent"
        />

        {/* Server Status Section */}
        <div className="absolute left-1/2 bottom-1/3 -translate-x-1/2 translate-y-2/3 z-50 w-[90%] max-w-7xl">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2" data-cursor-scale="6">
                <FaCaretDown className="animate-bounce" />
                นายเลื่อนลงไปได้นะ
              </h3>
            </div>
            <div className="flex flex-col gap-4" data-cursor-scale="6">
              <ServerStatusWrapper type="sv" />
              <ServerStatusWrapper type="player" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative min-h-screen w-full py-20 px-6 md:px-10 text-black dark:text-white">
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-12" data-cursor-scale="8">
            เซิร์ฟเวอร์ที่ดีที่สุดในประเทศไทย
          </h1>

          <div className="grid md:grid-cols-2 gap-8 ">
            {details.map((detail, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" data-cursor-scale="6">
                  {detail.title}
                </h2>
                <ul className="space-y-3">
                  {detail.description.map((desc, idx) => (
                    <li
                      key={idx}
                      data-cursor-scale="5"
                      className="text-lg md:text-xl flex items-center gap-2 before:content-['•'] before:text-orange-400"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
