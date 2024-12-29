import { ServerStatusWrapper } from "@/components/serverStatus";
import Image from "next/image";
import { ZFTERMIN } from "@/app/fonts";
import { FaCaretDown } from "react-icons/fa";

export default function Home() {
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
      {/* Hero Section */}
      <div id="home" className="relative h-screen w-full text-black dark:text-white">
        {/* Background Image */}
        <div className="relative h-full">
          <Image
            src="/lobby1.webp"
            alt="Lobby Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="transition-opacity duration-300"
            data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-delay="1500"
            loading="lazy"
            placeholder="blur"
            blurDataURL="..."
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              data-cursor-scale="13"
              className={`${ZFTERMIN.className} text-white text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-lg transition-transform duration-300 hover:scale-105`}
            >
              SkerCraft
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              data-cursor-scale="8"
              className="mt-4 text-orange-200 text-sm md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ไมน์คราฟต์ของพวกเรา
            </h2>
            <h3 data-aos="fade-up" data-aos-delay="800" className="text-sm md:text-xl lg:text-2xl font-bold flex items-center gap-2 text-white px-4 py-2 rounded-lg backdrop-blur-sm mt-5" data-cursor-scale="6">
              <FaCaretDown className="animate-bounce" />
              นายเลื่อนลงไปได้นะ
            </h3>
          </div>
        </div>
      </div>

      {/* Server Status Section */}
      <div className="relative w-full -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white dark:bg-[#19191b] rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="flex flex-col gap-4" data-cursor-scale="6">
              <ServerStatusWrapper type="sv" />
              <ServerStatusWrapper type="player" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative w-full py-20 px-6 md:px-10 text-black dark:text-white">
        <div data-aos="fade-up" className="max-w-7xl mx-auto">
          <h1
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
            data-cursor-scale="8"
          >
            เซิร์ฟเวอร์ที่ดีที่สุดในประเทศไทย
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {details.map((detail, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 bg-white dark:bg-[#19191b] rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4" data-cursor-scale="6">
                  {detail.title}
                </h2>
                <ul className="space-y-3">
                  {detail.description.map((desc, idx) => (
                    <li
                      key={idx}
                      data-cursor-scale="5"
                      className="text-lg flex items-center gap-2"
                    >
                      <span className="text-orange-400">•</span>
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
