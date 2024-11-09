"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSProvider({ children }: any) {
    useEffect(() => {
        AOS.init();
    }, []);

    return <>{children}</>;
}