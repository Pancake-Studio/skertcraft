"use client"

import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils"
import { AiOutlineDiscord } from "react-icons/ai";
import { useState } from "react";
import { ThemeSwitcher } from "../theme-changer";

export default function Navbar() {
    const navFuncion = [
        {
            "title": "หน้าหลัก",
            "direct": "#"
        },
        {
            "title": "ข่าวสาร",
            "direct": "#"
        },
        {
            "title": "กฏเซิร์ฟเวอร์",
            "direct": "#"
        },
        {
            "title": "วิธีการเล่น",
            "direct": "#"
        },
        {
            "title": "ทีมงาน",
            "direct": "#"
        },
        {
            "title": "ร้านค้า",
            "direct": "#"
        },
    ]
    return (
        <>
            <div className="flex items-center w-screen max-w-[1400px] px-[100px] justify-between">
                <a href="#home">
                    <Image
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="w-[200px] [filter:drop-shadow(-50px_-10px_80px_#ec9c2480)_drop-shadow(50px_10px_80px_#aa571f80)]"
                        src="/minecraft_title2.png"
                        alt="Server Title"
                        width={2022}
                        height={413}
                    />
                </a>
                <div className=" flex items-center">
                    <NavbarX />
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    );
};

function NavbarX({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <Menu setActive={setActive}>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="1500" className=" text-[18px]" href="#home" setActive={setActive} active={active} item="หน้าหลัก">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ กลับไปยังหน้าหลัก</p>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="2000" className=" text-[18px]" href="#news" setActive={setActive} active={active} item="ข่าวสาร">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ ข่าวสารต่างๆในเซิร์ฟเวอร์</p>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="1750" className=" text-[18px]" href="#howtoplay" setActive={setActive} active={active} item="วิธีการเล่น">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ วิธีเข้าเซิร์ฟ</p>
                    <p>✅ สิ่งที่ต้องทำหลังเข้าเซิร์ฟ</p>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="2000" className=" text-[18px]" href="#rule" setActive={setActive} active={active} item="กฏเซิร์ฟเวอร์">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ กฏระเบียบที่ผู้เล่นต้องปฏิบัติตาม</p>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="2250" className=" text-[18px]" href="#team" setActive={setActive} active={active} item="ทีมงาน">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ รายชื่อทีมงาน</p>
                </MenuItem>
                <MenuItem
                    className=" text-[18px] relative"
                    setActive={setActive}
                    active={active}
                    item="คอมมูนิตี้"
                    data-aos="fade-right" data-aos-duration="500" data-aos-delay="2500"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur pointer-events-none" />
                    <div className="flex flex-col space-y-4 text-sm relative z-30">
                        <HoveredLink href="https://discord.gg/DqN9KRw3mN">Discord</HoveredLink>
                        <HoveredLink href="/individual">Facebook</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem data-aos="fade-right" data-aos-duration="500" data-aos-delay="2750" className="text-white bg-[#1db53c] px-2 hover:text-white rounded-lg text-[20px] items-center text-center border-r-4 border-b-4 border-[#145722]" href="#" setActive={setActive} active={active} item="ร้านค้า">
                    <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-green-600 opacity-15 blur z-10" />
                    <p>✅ ไปยังร้านค้าของเซิร์ฟเวอร์</p>
                </MenuItem>
                <MenuItem
                    data-aos="fade-right" data-aos-duration="500" data-aos-delay="3000"
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
        </>
    );
}