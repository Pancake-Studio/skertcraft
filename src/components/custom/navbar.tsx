"use client"

import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils"
import { AiOutlineDiscord } from "react-icons/ai";
import { useState } from "react";
import { ThemeSwitcher } from "../theme-changer";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="flex items-center w-full max-w-[1600px] justify-between px-4 md:px-8 lg:px-[50px] py-4">
                    <a href="#home">
                        <Image
                            data-aos="fade-right"
                            data-cursor-scale="10"
                            data-aos-duration="1500"
                            className="w-[120px] md:w-[150px] lg:w-[200px] [filter:drop-shadow(-50px_-10px_80px_#ec9c2480)_drop-shadow(50px_10px_80px_#aa571f80)]"
                            src="/minecraft_title2.png"
                            alt="Server Title"
                            width={2022}
                            height={413}
                        />
                    </a>
                    <div data-cursor-scale="6" className="flex items-center gap-4">
                        <NavbarX className="hidden lg:block" />
                        <ThemeSwitcher  />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-2xl text-black dark:text-white"
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden fixed top-[80px] left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
                    <div className="max-w-[1400px] mx-auto">
                        <NavbarMobie 
                            className="flex flex-col items-center p-4" 
                            setMobileMenuOpen={setMobileMenuOpen}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

function NavbarX({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("transition-all duration-300", className)}>
            <Menu setActive={setActive}>
                <MenuItem data-cursor-scale="6" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1500" className=" text-[18px]" href="/" setActive={setActive} active={active} item="หน้าหลัก">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ กลับไปยังหน้าหลัก</p>
                </MenuItem>
                <MenuItem data-cursor-scale="6" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1750" className=" text-[18px]" href="/details" setActive={setActive} active={active} item="รายละเอียด">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ วิธีเข้าเซิร์ฟ</p>
                </MenuItem>
                <MenuItem data-cursor-scale="6" data-aos="fade-right" data-aos-duration="500" data-aos-delay="2000" className=" text-[18px]" href="/rule" setActive={setActive} active={active} item="กฏเซิร์ฟเวอร์">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ กฏระเบียบที่ผู้เล่นต้องปฏิบัติตาม</p>
                </MenuItem>
                <MenuItem data-cursor-scale="6" data-aos="fade-right" data-aos-duration="500" data-aos-delay="2250" className=" text-[18px]" href="/team" setActive={setActive} active={active} item="ทีมงาน">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ รายชื่อทีมงาน</p>
                </MenuItem>
                <MenuItem
                    className=" text-[18px] relative"
                    setActive={setActive}
                    active={active}
                    item="คอมมูนิตี้"
                    data-cursor-scale="6"
                    data-aos="fade-right" data-aos-duration="500" data-aos-delay="2500"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur pointer-events-none" />
                    <div className="flex flex-col space-y-4 text-sm relative z-30">
                        <HoveredLink data-cursor-scale="4" href="https://discord.gg/DqN9KRw3mN">Discord</HoveredLink>
                        <HoveredLink data-cursor-scale="4" href="https://www.facebook.com/minecraftsker.sk">Facebook</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-cursor-scale="6" data-aos-duration="500" data-aos-delay="2750" className="text-white bg-[#1db53c] px-2 hover:text-white rounded-lg text-[20px] items-center text-center border-r-4 border-b-4 border-[#145722]" href="#" setActive={setActive} active={active} item="ร้านค้า">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ ไปยังร้านค้าของเซิร์ฟเวอร์</p>
                </MenuItem>
                <MenuItem
                    data-aos="fade-right" data-cursor-scale="6" data-aos-duration="500" data-aos-delay="3000"
                    className="text-white bg-[#1d4db5] px-2 hover:text-white rounded-lg text-[20px] items-center text-center border-r-4 border-b-4 border-[#151457]"
                    setActive={setActive}
                    active={active}
                    href="https://discord.gg/DqN9KRw3mN"
                    item="Discord"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <div className="flex items-center gap-2">
                        <AiOutlineDiscord className="text-2xl" />
                        <p>เข้าสู่ Discord ของเซิร์ฟเวอร์</p>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

function NavbarMobie({ 
    className,
    setMobileMenuOpen 
}: { 
    className?: string;
    setMobileMenuOpen: (open: boolean) => void;
}) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("transition-all duration-300 h-screen backdrop-blur-sm bg-white/75 dark:bg-black/75 top-0 left-0 right-0", className)}>
            <Menu setActive={setActive}>
                <div className="flex flex-col gap-4">
                    <MenuItem onClick={() => setMobileMenuOpen(false)} data-aos="fade-right" data-aos-duration="500" data-aos-delay="0" className=" text-[18px]" href="/" setActive={setActive} active={active} item="หน้าหลัก" />
                    <MenuItem onClick={() => setMobileMenuOpen(false)} data-aos="fade-right" data-aos-duration="500" data-aos-delay="250" className=" text-[18px]" href="/details" setActive={setActive} active={active} item="รายละเอียด" />
                    <MenuItem onClick={() => setMobileMenuOpen(false)} data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" className=" text-[18px]" href="/rule" setActive={setActive} active={active} item="กฏเซิร์ฟเวอร์" />
                    <MenuItem onClick={() => setMobileMenuOpen(false)} data-aos="fade-right" data-aos-duration="500" data-aos-delay="750" className=" text-[18px]" href="/team" setActive={setActive} active={active} item="ทีมงาน" />
                    <MenuItem onClick={() => setMobileMenuOpen(false)} data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000" className="text-white bg-[#1db53c] px-2 hover:text-white rounded-lg text-[20px] items-center text-center border-r-4 border-b-4 border-[#145722]" href="#" setActive={setActive} active={active} item="ร้านค้า">
                        <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                        <p>✅ ไปยังร้านค้าของเซิร์ฟเวอร์</p>
                    </MenuItem>
                    <MenuItem
                        onClick={() => setMobileMenuOpen(false)}
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"
                        className="text-white bg-[#1d4db5] px-2 hover:text-white rounded-lg text-[20px] items-center text-center border-r-4 border-b-4 border-[#151457]"
                        setActive={setActive}
                        active={active}
                        href="https://discord.gg/DqN9KRw3mN"
                        item="Discord"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                        <div className="flex items-center gap-2">
                            <AiOutlineDiscord className="text-2xl" />
                            <p>เข้าสู่ Discord ของเซิร์ฟเวอร์</p>
                        </div>
                    </MenuItem>
                </div>
            </Menu>
        </div>
    );
}