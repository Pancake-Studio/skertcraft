"use client"

import { useState } from 'react';
import { toast } from 'sonner'

const IpServer = () => {
    const [copied, setCopied] = useState(false);
    const serverIP = process.env.NEXT_PUBLIC_SERVERIP || 'play.skertcraft.net';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(serverIP);
            toast.success("คัดลอกไอพีแล้ว")
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <>
            <span
                onClick={()=>{handleCopy();}}
                style={{ cursor: 'pointer' }}
                className=' hover:text-orange-200 duration-300 text-xl md:text-3xl lg:text-4xl  flex items-center gap-1'
            >
                {serverIP}
            </span>
        </>
    );
};

export default IpServer;