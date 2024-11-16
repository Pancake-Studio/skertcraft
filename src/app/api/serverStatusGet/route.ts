export const dynamic = 'force-static'

interface Result {
    isOnline: boolean;
    onlinePlayer: number;
    maxPLayer: number;
}

// Define interface for the output format
interface PlayerOutput {
    playerName: string;
    avatar: string;
}

export async function POST() {
    const res = await fetch(`https://api.mcstatus.io/v2/status/java/${process.env.NEXT_PUBLIC_SERVERIP}`, {})
    const data = await res.json()
    const result: Result = {
        isOnline: data.online,
        onlinePlayer: data.players.online,
        maxPLayer: data.players.max,
    }

    return Response.json({ result })
}
