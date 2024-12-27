import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


export default function Team() {
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
                "เป็นหนึ่งในสมาชิกของ เซิร์ฟเวอร์ skercraft อย่างเป็นทางการ \n : ''ซายหย่อ สูดเด๋''",
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
    return (
        <>
            <div id="team" className="relative bg-gradient-to-t py-20">
                <div className="relative flex justify-center items-center px-6">
                    <AnimatedTestimonials testimonials={teamData} />
                </div>
            </div>
        </>
    );
};