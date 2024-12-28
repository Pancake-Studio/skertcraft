import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaDiscord, href: "https://discord.gg/skercraft", label: "Discord" },
    { icon: FaTiktok, href: "https://tiktok.com/@skercraft", label: "TikTok" },
    { icon: FaFacebook, href: "https://facebook.com/skercraft", label: "Facebook" },
    { icon: FaYoutube, href: "https://youtube.com/@skercraft", label: "YouTube" },
  ];

  return (
    <footer className="relative">
      {/* Decorative top border */}
      <div 
        className="bg-gradient-to-r from-orange-700 to-orange-800 h-[4px] 
        shadow-[0_-4px_15px_-1px_rgb(154,52,18,0.5)]"
      />

      {/* Main footer content */}
      <div className="relative bg-gradient-to-b from-orange-700 to-orange-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright section */}
          <div 
            className="flex flex-col gap-2 text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="text-white/90 text-sm md:text-base">
              เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB
            </p>
            <p className="text-white/80 text-sm">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>

          {/* Social links */}
          <div 
            className="flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                  data-cursor-scale="4"
                  aria-label={social.label}
                >
                  <social.icon className="text-white/90 hover:text-white text-xl md:text-2xl" />
                </a>
              ))}
            </div>
            <p className="text-white/90 text-sm md:text-base font-medium">
              Fridayz.VPS
            </p>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/20" />
      </div>
    </footer>
  );
}
