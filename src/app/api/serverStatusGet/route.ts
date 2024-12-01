export const dynamic = 'force-static'

interface Result {
    isOnline: boolean;
    onlinePlayer: number;
    maxPLayer: number;
}

export async function POST() {
    const res = await fetch(`https://api.mcstatus.io/v2/status/java/${process.env.NEXT_PUBLIC_SERVERIP}`, {})
    const data = await res.json()
    const players = data.players || {};
    const result: Result = {
        isOnline: data.online || false,
        onlinePlayer: players.online || 0,
        maxPLayer: players.max || 0,
    }

    return Response.json({ result })
}
