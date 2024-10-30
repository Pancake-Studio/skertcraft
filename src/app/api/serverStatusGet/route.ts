export const dynamic = 'force-static'

interface PlayerInfo {
    uuid: string;
    name_raw: string;
    name_clean: string;
    name_html: string;
}

interface ServerData {
    players: {
        online: number;
        max: number;
        list: PlayerInfo[];
    };
}

interface Result {
    isOnline: boolean;
    onlinePlayer: number;
    maxPLayer: number;
    players: PlayerOutput[];
}

// Define interface for the output format
interface PlayerOutput {
    playerName: string;
    avatar: string;
}

function getPlayersList(serverData: ServerData): PlayerOutput[] {
    return serverData.players.list.map(player => ({
        playerName: player.name_raw,
        avatar: `https://mc-heads.net/avatar/${player.name_raw}`
    }));
}

export async function GET() {
    const res = await fetch(`https://api.mcstatus.io/v2/status/java/${process.env.NEXT_PUBLIC_SERVERIP}`, {})
    const data = await res.json()
    const playerList = getPlayersList(data);
    const result: Result = {
        isOnline: data.online,
        onlinePlayer: data.players.online,
        maxPLayer: data.players.max,
        players: playerList
    }

    return Response.json({ result })
}