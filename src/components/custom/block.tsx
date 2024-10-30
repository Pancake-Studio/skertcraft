"use client"
import { useState } from "react";
import Image from "next/image";

const Grass = () => {
    const [img, setImg] = useState("/grass.webp");

    return (
        <Image 
            src={img} 
            alt="terrain block" 
            width={400} 
            height={400}
            onMouseEnter={() => setImg("/stone.webp")}
            onMouseLeave={() => setImg("/grass.webp")}
            className="transition-all w-[30vw] h-[30vw] lg:w-[15vw] lg:h-[15vw] duration-200 ease-in-out"
        />
    );
};

const Obsidian = () => {
    const [img, setImg] = useState("/Obsidian.webp");

    return (
        <Image 
            src={img} 
            alt="terrain block" 
            width={400} 
            height={400}
            onMouseEnter={() => setImg("/Crying_Obsidian.webp")}
            onMouseLeave={() => setImg("/Obsidian.webp")}
            className="transition-all w-[30vw] h-[30vw] lg:w-[15vw] lg:h-[15vw] duration-200 ease-in-out"
        />
    );
};

const Torch = () => {
    const [img, setImg] = useState("/TorchNew.webp");

    return (
        <Image 
            src={img} 
            alt="terrain block" 
            width={200} 
            height={200}
            onMouseEnter={() => setImg("/SoulFireTorch.webp")}
            onMouseLeave={() => setImg("/TorchNew.webp")}
            className="transition-all w-[30vw] h-[30vw] lg:w-[15vw] lg:h-[15vw] duration-200 ease-in-out"
        />
    );
};

export { Grass, Obsidian, Torch };