"use client"

import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils"
import { useState } from "react";

export default function Navbar() {
    const navFuncion = [
        {
            "title": "หน้าหลัก",
            "direct": "#"
        },
        {
            "title": "วิธีการเล่น",
            "direct": "#"
        },
        {
            "title": "กฏเซิร์ฟเวอร์",
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
                <Image
                    className="w-[200px] [filter:drop-shadow(-50px_-10px_80px_#ec9c2480)_drop-shadow(50px_10px_80px_#aa571f80)]"
                    src="/minecraft_title2.png"
                    alt="Server Title"
                    width={2022}
                    height={413}
                />
                <NavbarX />
                {/* <div className="flex gap-[20px] transition-all duration-1000 ease-out items-center justify-items-end">
                    {navFuncion.map((item, index) => (
                        <a key={index} href={item.direct} className="text-white hover:text-yellow-500 transition-colors">
                            <p className=" text-[18px]">{item.title}</p>
                        </a>
                    ))}
                </div> */}
            </div>
        </>
    );
};

function NavbarX({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <Menu setActive={setActive}>
                <MenuItem href="#home" setActive={setActive} active={active} item="หน้าหลัก">
                    <p>✅ กลับไปยังหน้าหลัก</p>
                </MenuItem>
                <MenuItem href="#howtoplay" setActive={setActive} active={active} item="วิธีการเล่น">
                    <p>✅ วิธีเข้าเซิร์ฟ</p>
                    <p>✅ สิ่งที่ต้องทำหลังเข้าเซิร์ฟ</p>
                </MenuItem>
                <MenuItem href="#" setActive={setActive} active={active} item="กฏเซิร์ฟเวอร์">
                    <p>✅ กฏระเบียบที่ผู้เล่นต้องปฏิบัติตาม</p>
                </MenuItem>
                <MenuItem href="#" setActive={setActive} active={active} item="ทีมงาน">
                    <p>✅ รายชื่อทีมงาน</p>
                </MenuItem>
                <MenuItem href="#" setActive={setActive} active={active} item="ร้านค้า">
                    <p>✅ ไปยังร้านค้าของเซิร์ฟเวอร์</p>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="คอมมูนิตี้">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Discord</HoveredLink>
                        <HoveredLink href="/individual">Facebook</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </>
    );
}