"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';

const Testaos = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <>
        </>
    )
}

export { Testaos };