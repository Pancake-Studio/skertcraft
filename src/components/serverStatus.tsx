"use client";

import { useEffect, useState } from "react";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
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

const useServerStatus = () => {
    const [data, setData] = useState<ServerStatus | null>(null);
    const [error, setError] = useState<string | null>(null);

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
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error };
};

export const PlayerOnline = ({ data, error }: { data: ServerStatus | null, error: string | null }) => {
    if (error) return <div className="text-red-500">เกิดข้อผิดพลาดขึ้น โปรดรีหน้าเว็บ</div>;
    if (!data) return <div className=" py-1 px-7 bg-gray-200 text-gray-200 dark:text-gray-900 dark:bg-gray-900 rounded-sm"> ผู้เล่นออนไลน์อยู่ คน</div>;

    const { onlinePlayer = 0, maxPLayer = 0 } = data.result;

    return (
        <>
            <div className="flex gap-3 items-center text-xl md:text-3xl lg:text-4xl">
                <IoPersonOutline/>
                <span>ผู้เล่นออนไลน์อยู่ {onlinePlayer}/{maxPLayer} คน</span>
            </div>
        </>
    );
}

export const SVStatus = ({ data, error }: { data: ServerStatus | null, error: string | null }) => {
    if (error) return <div className="text-red-500">เกิดข้อผิดพลาดขึ้น โปรดรีหน้าเว็บ</div>;
    if (!data) return <div className=" py-1 px-7 bg-gray-200 text-gray-200 dark:text-gray-900 dark:bg-gray-900 rounded-sm">play.skercraft.com</div>;
    return (
        <div className="flex gap-3 items-center">
            <MdOutlineVideogameAsset />
            <div className={`${data.result.isOnline ? " bg-[#1db53c] border-[#145722]" : "bg-[#b51d1d] border-[#571414]"} px-2 border-r-4 border-b-4 text-white rounded-lg flex gap-10`}>
                <IpServer />
            </div>
        </div>
    );
}

export const ServerStatusWrapper = ({ type }: { type: "player" | "sv" }) => {
    const { data, error } = useServerStatus();
    if (type === "player") {
        return (
            <>
                <PlayerOnline data={data} error={error} />
            </>
        );
    }
    if (type === "sv") {
        return (
            <>
                <SVStatus data={data} error={error} />
            </>
        );
    }
}
