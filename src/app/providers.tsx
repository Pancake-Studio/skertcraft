"use client";

import { useState, useEffect } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={true}>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
}