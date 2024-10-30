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
            const response = await fetch("/api/serverStatusGet");
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
        <div className="container mx-auto p-4 text-white relative isolation">
            <div className="bg-gray-500/25 backdrop-blur-sm rounded-lg shadow-lg p-6 relative z-10">
                <div className="mb-4 text-[3vw] lg:text-[20px] grid md:flex justify-between">
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

                {players.length > 0 && (
                    <div>
                        <div
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setIsPlayersVisible(!isPlayersVisible)}
                        >
                            <h3 className="text-[3vw] lg:text-xl font-semibold mb-3">
                                ผู้เล่นออนไลน์
                            </h3>
                            <h3 className="text-[3vw] lg:text-xl font-semibold mb-3 text-amber-500">
                                (คลิก)
                            </h3>
                            <IconArrowDown
                                className={`transform transition-transform duration-300 translate-y-[-5px] ${isPlayersVisible ? "rotate-0" : "-rotate-90"
                                    }`}
                                size={20}
                            />
                        </div>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isPlayersVisible
                                    ? "max-h-[60vh] opacity-100 transform translate-y-0"
                                    : "max-h-0 opacity-0 transform -translate-y-4"
                                }`}
                        >
                            <div className="overflow-y-auto max-h-[calc(60vh-2rem)] pr-2 hide-scrollbar">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                                    {players.map((player, index) => (
                                        <div
                                            key={index}
                                            className="inline-flex flex-wrap items-center space-x-3 p-3 
                                                bg-gray-900 hover:bg-yellow-300 hover:bg-opacity-25 duration-300
                                                border-[2px] border-transparent hover:border-yellow-600 
                                                bg-opacity-65 rounded-lg 
                                                cursor-pointer hover:scale-[1.02] transition-all
                                                shadow-md hover:shadow-lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigator.clipboard.writeText(player.playerName);
                                            }}
                                        >
                                            <img
                                                src={player.avatar}
                                                alt={`${player.playerName}'s avatar`}
                                                className="w-8 h-8 flex-shrink-0 rounded"
                                            />
                                            <span className="break-all overflow-wrap-anywhere select-none">
                                                {player.playerName}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}