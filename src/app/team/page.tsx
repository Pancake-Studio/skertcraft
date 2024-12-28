export default function Team() {
    const teamData = [
        {
            quote: "คนที่ไม่เคยทำอะไรผิดพลาด คือคนที่ไม่เคยทำอะไรเลย",
            name: "NallyZ (แอดนิก)",
            designation: "Developer",
            src: "/team/nicky.webp",
        },
        {
            quote: "เป็นหนึ่งในสมาชิกของ เซิร์ฟเวอร์ skercraft อย่างเป็นทางการ \n : ''ซายหย่อ สูดเด๋''",
            name: "KreiSer (แอดอะตอม)",
            designation: "แอมิน SkerCraft",
            src: "/team/atom.webp",
        },
        {
            quote: "หมีตัวนั้นกำลังจับปลา ปลาตัวนั้นกำลังจับกระต่าย กระต่ายตัวนั้นกำลังจับแกะ แกะตัวนั้นกำลังจับมังกร มังกรตัวนั้นกำลังจับเฮ้ยนี่มัน ปืนใหญ่นีโออาร์มสตรอง ไซโคลนเจ็ทอาร์มสตรอง ไม่ใช่เหรอ? เล่นของยากเหมือนกันนะเนี่ย",
            name: "BotTH48 (แอดหมี)",
            designation: "Owner/CEO/DEV/LED/FHD/HD4kDigital1080p",
            src: "/team/non.webp",
        },
    ];

    return (
        <div id="team" className="relative py-20 bg-gray-100 dark:bg-gradient-to-b dark:to-transparent dark:from-orange-950/30">
            <div className="container mx-auto px-4">
                <h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-600 dark:text-orange-400"
                    data-aos="fade-up"
                >
                    ทีมงานของเรา
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            className="group relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg 
                                        transform transition-transform duration-300 group-hover:-translate-y-2">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={member.src}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-orange-300 text-sm">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Quote Container */}
                                <div className="p-6">
                                    <div className="relative">
                                        <svg 
                                            className="absolute -top-4 -left-4 h-8 w-8 text-orange-400/30"
                                            fill="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                        </svg>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                            {member.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
