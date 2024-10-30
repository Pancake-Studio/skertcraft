"use client"

import { useState } from 'react';

const IpServer = () => {
    const [copied, setCopied] = useState(false);
    const serverIP = process.env.NEXT_PUBLIC_SERVERIP || 'play.skertcraft.net';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(serverIP);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-700 text-[3vw] md:text-[16px] lg:text-[20px] font-mono">
                    {serverIP}
                </span>
                <button
                    className="text-[3vw] md:text-[16px] lg:text-[20px] bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    onClick={handleCopy}
                >
                    {copied ? 'คัดลอกแล้ว!' : 'คัดลอก'}
                </button>
            </div>
        </div>
    );
};

export default IpServer;