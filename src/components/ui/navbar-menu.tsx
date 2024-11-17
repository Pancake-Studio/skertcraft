"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    className,
    href,
    ...props
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    href?: string;
    className?: string;
    children?: React.ReactNode;
}) => {
    const content = (
        <div onMouseEnter={() => setActive(item)} {...props} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className={`${className} cursor-pointer text-black dark:text-white hover:opacity-[0.9] hover:text-yellow-500 transition-colors`}
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="drop-shadow-[0_0_20px_#a0a0a03d] bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className={`w-max text-black dark:text-white h-full p-4`}
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
};


export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border-transparent flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    const content = (
        <div className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
};

export const HoveredLink = ({ children, href, className, ...rest }: any) => {
    const content = (
        <span className={`text-neutral-700 dark:text-neutral-200 hover:text-yellow-500 ${className || ''}`}>
            {children}
        </span>
    );

    return href ? (
        <div className="w-fit">
            <Link href={href} {...rest}>
                {content}
            </Link>
        </div>
    ) : (
        content
    );
};