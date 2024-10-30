export const dynamic = 'force-static'

interface PlayerInfo {
    uuid: string;
    name_raw: string;
    name_clean: string;
    name_html: string;
}

interface ServerData {
    online: boolean;
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

interface PlayerOutput {
    playerName: string;
    avatar: string;
}

function getPlayersList(serverData: ServerData): PlayerOutput[] {
    if (!serverData.players?.list) return [];
    
    return serverData.players.list.map(player => ({
        playerName: player.name_raw,
        avatar: `https://mc-heads.net/avatar/${player.name_raw}`
    }));
}

export async function GET() {
    const serverIP = process.env.NEXT_PUBLIC_SERVERIP || 'localhost';  // Provide a default value

    try {
        const res = await fetch(
            `https://api.mcstatus.io/v2/status/java/${serverIP}`,
            {
                headers: {
                    'Accept': 'application/json',
                },
                next: { revalidate: 30 }
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data: ServerData = await res.json();
        const playerList = getPlayersList(data);
        
        const result: Result = {
            isOnline: data.online,
            onlinePlayer: data.players?.online ?? 0,
            maxPLayer: data.players?.max ?? 0,
            players: playerList
        };

        return Response.json({ result }, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=59',
            },
        });

    } catch (error) {
        console.error('Server status fetch error:', error);
        
        return Response.json(
            { 
                error: 'Failed to fetch server status',
                details: error instanceof Error ? error.message : 'Unknown error',
                serverIP: serverIP // Include this for debugging
            },
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}