"use client";

import { useEffect, useState } from "react";
import { IconArrowDown } from "@tabler/icons-react";

interface PlayerOutput {
    playerName: string;
    avatar: string;
}

interface ServerStatus {
    result: {
        isOnline: boolean;
        onlinePlayer: number;
        maxPLayer: number;
        players: PlayerOutput[];
    };
}

export default function SVStatus() {
    const [data, setData] = useState<ServerStatus | null>(null);
    const [countdown, setCountdown] = useState(10);
    const [error, setError] = useState<string | null>(null);
    const [isPlayersVisible, setIsPlayersVisible] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/serverStatusGet", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const result = await response.json();
            setData(result);
            setCountdown(10);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    fetchData();
                    return 10;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!data) {
        return <div>กำลังโหลดข้อมูล...</div>;
    }

    const { isOnline, onlinePlayer, maxPLayer, players } = data.result;
    return (
        <div className="container mx-auto p-4 text-white relative isolation bg-gray-500/25 backdrop-blur-sm rounded-lg shadow-lg z-20">
            <div className="p-6">
                <div className=" absolute top-1 right-1">
                    <p className=" text-[10px] text-gray-400">จะรีเฟรชในอีก {countdown}s</p>
                </div>
                <div className="mb-4 text-[3vw] lg:text-[20px] grid md:flex md:space-x-5 justify-between">
                    <p className="flex items-center">
                        สถานะ:
                        <span
                            className={`ml-2 ${isOnline ? "text-green-500" : "text-red-500"
                                } ${isOnline
                                    ? "drop-shadow-[0_0_4px_#34ff22]"
                                    : "drop-shadow-[0_0_50px_#ff1212]"
                                }`}
                        >
                            {isOnline ? "Online" : "Offline"}
                        </span>
                    </p>
                    <div className="flex">
                        ผู้เล่น:{" "}
                        <p
                            className={`${isOnline ? "text-green-500" : "text-red-500"
                                } ml-2 ${isOnline
                                    ? "drop-shadow-[0_0_4px_#34ff22]"
                                    : "drop-shadow-[0_0_50px_#ff1212]"
                                }`}
                        >
                            {onlinePlayer}
                        </p>
                        /{maxPLayer}
                    </div>
                </div>
            </div>
        </div>
    );
}
