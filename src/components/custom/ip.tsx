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
            {/* Add a wrapper div with relative positioning */}
            <div className="relative">
                {/* Add a pseudo-element for the backdrop */}
                <div className="absolute inset-0 bg-gray-500 bg-opacity-35 backdrop-blur-sm rounded-lg" />
                
                {/* Main content */}
                <div className="relative flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md">
                    <span className="text-white text-[3vw] md:text-[16px] lg:text-[20px] font-mono">
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
        </div>
    );
};

export default IpServer;