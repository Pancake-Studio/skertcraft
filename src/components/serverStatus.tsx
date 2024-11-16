"use client";

import { useEffect, useState } from "react";
import { MdOutlineVideogameAsset } from "react-icons/md";
import IpServer from "./custom/ip";

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
        <a href="#home" >
            <div className={`${isOnline ? " bg-[#1db53c] border-[#145722]" : "bg-[#b51d1d] border-[#571414]"} px-2 border-r-4 border-b-4 rounded-lg flex gap-10`}>
                <div className=" gap-3 flex">
                    <MdOutlineVideogameAsset />
                    <span className="text-[30px]">{onlinePlayer}/{maxPLayer}</span>
                </div>
                <IpServer />
            </div>
        </a>
    );
}
