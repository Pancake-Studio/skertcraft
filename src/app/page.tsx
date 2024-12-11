import { ServerStatusWrapper } from "@/components/serverStatus";
import Image from "next/image";
import Navbar from "@/components/custom/navbar";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ZFTERMIN } from "@/app/fonts";
import Footer from "@/components/custom/footer";
import SnowParticles from "@/components/ui/snow-particles";

function AppleCardsCarousel() {
  const cards = newsData.map((card: { src: string, title: string, category: string, content: React.ReactNode }, index: number) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 ">
      <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="  max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200  pt-7">
        ข่าวสารต่าง SkerCraft
      </h2>
      <Carousel data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="300"
        items={cards} />
    </div>
  );
}

const DummyContent = ({ content, date }: { content?: string; date?: string }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl  max-w-3xl mx-auto">
              {content}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl  max-w-3xl mx-auto absolute bottom-4 right-4">
              {date}
            </p>
          </div>
        );
      })}
    </>
  );
};

const newsData = [
  {
    category: "กิจกรรม",
    title: "ของฟรี!! วันคริสมาส",
    src: "/lobby1.webp",
    content: <DummyContent content="ของฟรี!! วันคริสมาส ห้ามพลาดเด็ดขาด" date="25/12/2023" />,
  },
  {
    category: "ข่าวสาร",
    title: "แอดมินมีการแกล้งผู้เล่นในเซิร์ฟเวอร์",
    src: "/lobby2.webp",
    content: <DummyContent content="มีแอดมินแกล้งผู้เล่นจนเลิกเล่น" date="23/12/2023" />,
  },
  {
    category: "กิจกรรม",
    title: "ลงดันเจี่ยนรับของแรร์!!",
    src: "/1159416.webp",
    content: <DummyContent />,
  },

  {
    category: "ข่าวสาร",
    title: "ผู้เล่นปริศนา เกรียนชาวบ้าน",
    src: "/lobby1.webp",
    content: <DummyContent />,
  },
  {
    category: "ข่าวสาร",
    title: "แอดมินแจกเงิน 10,000 ให้ผู้เล่น",
    src: "/lobby2.webp",
    content: <DummyContent />,
  },
  {
    category: "ข่าวสาร",
    title: "เกิดเหตุการณ์ซอมบี้บุก",
    src: "/1159416.webp",
    content: <DummyContent />,
  },
];

const teamData = [
  {
    quote:
      "คนที่ไม่เคยทำอะไรผิดพลาด คือคนที่ไม่เคยทำอะไรเลย",
    name: "NallyZ (แอดนิก)",
    designation: "Developer",
    src: "/team/nicky.webp",
  },
  {
    quote:
      "เป็นหนึ่งในสมาชิกของ เซิร์ฟเวอร์ skercraft อย่างเป็นทางการ \n คำคม : ''ซายหย่อ สูดเด๋''",
    name: "KreiSer (แอดอะตอม)",
    designation: "แอมิน SkerCraft",
    src: "/team/atom.webp",
  },
  {
    quote:
      "หมีตัวนั้นกำลังจับปลา ปลาตัวนั้นกำลังจับกระต่าย กระต่ายตัวนั้นกำลังจับแกะ แกะตัวนั้นกำลังจับมังกร มังกรตัวนั้นกำลังจับเฮ้ยนี่มัน ปืนใหญ่นีโออาร์มสตรอง ไซโคลนเจ็ทอาร์มสตรอง ไม่ใช่เหรอ? เล่นของยากเหมือนกันนะเนี่ย",
    name: "BotTH48 (แอดหมี)",
    designation: "Owner/CEO/DEV/LED/FHD/HD4kDigital1080p",
    src: "/team/non.webp",
  },
];

export default function Home() {
  return (
    <>
      <SnowParticles />
      <div id="home" className="relative h-screen w-full flex text-black bg-[#ddd] dark:bg-black dark:text-white">
        <div className=" left-1/2 top-[80px] -translate-x-1/2 w-full h-1/2 relative">
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
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="3000"
            className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white dark:from-black to-transparent" />
          <div className="fixed left-1/2 top-[100px] -translate-x-1/2 -translate-y-1/2 w-full h-1/2 flex flex-col justify-center items-center">
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="3000"
              className={`${ZFTERMIN.className} text-white text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-[0_5px_6px_rgba(0,0,0,0.8)] transition-all duration-300`}>
              SkerCraft
            </h1>
            <h2 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="3000" 
              className="text-orange-200 text-xs md:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transition-all duration-300 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ไมน์คราฟต์ของพวกเรา
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="3000"
          className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#aaa] dark:from-black to-transparent" />
        <div className=" text-3xl md:text-5xl lg:text-6xl absolute left-1/2 bottom-1/3 -translate-x-1/2 translate-y-1/2 z-50 w-[90%] flex flex-col gap-4">
          <a href="#home" className="w-full">
            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="3000" className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20 w-full px-10">
              <ServerStatusWrapper type="sv" />
              <ServerStatusWrapper type="player" />
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 text-[3rem] absolute left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-[-120px] z-50 w-full">
        </div>
        <div className="fixed top-0 z-50 w-full">
          <div className="relative w-full bg-white dark:bg-black py-1 bg-opacity-[70%] dark:bg-opacity-[40%] backdrop-blur-md border-b-1 dark:border-b-0 border-gray-300">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-6 lg:px-8">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div id="news" className=" relative h-[100vh] bg-transparent">
        <AppleCardsCarousel />
      </div>
      <div id="howtoplay" className="relative h-screen bg-transparent">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-4 gap-4">
          <div className="flex flex-col space-y-7 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[40px]">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Image
                className="w-screen max-w-[300px] lg:max-w-[600px] rounded-lg border-2 border-dashed border-gray-800 dark:border-gray-400 lg:p-2"
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
                <h2 className=" text-[20px] lg:text-[45px] font-bold text-black dark:text-white">
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
      <div id="rule" className="relative h-screen bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[45px]">ที่นี่ไม่มีกฎ :)</h1>
        </div>
      </div>
      <div id="team" className="relative h-screen bg-gradient-to-t ">
        <div className="relative flex justify-center items-center min-h-screen">
          <AnimatedTestimonials testimonials={teamData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
