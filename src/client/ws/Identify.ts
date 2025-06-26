import { OPCODE } from '@/constants/Constants';
import WebSocketManager from './WebSocketManager';

/**
 * Sends an IDENTIFY payload to the Discord Gateway to begin a new session.
 * 
 * This function is typically called once upon connecting to the WebSocket, allowing the bot
 * to authenticate and declare its operating system, client, and library.
 * 
 * @param {WebSocketManager} ws The WebSocketManager instance responsible for managing the gateway connection.
 * 
 * The payload includes:
 * - **`token`** → The bot's token for authentication.
 * - **`intents`** → Bitwise value representing the gateway events the bot wishes to receive.
 * - **`properties`** → Identifying information such as OS, browser (or client), and library name.
 * - Optionally spoofs the browser as `Discord iOS` if `phoneStatus` is enabled in client options.
 */
export function Identify(ws: WebSocketManager): void {
    return ws.send({
        op: OPCODE.IDENTIFY,
        d: {
            token: ws.client.token,
            intents: ws.client.options.intents,
            properties: {
                os: process.platform == 'win32' ? 'Windows OS' : process.platform === 'darwin' ? 'MacOS' : 'UnknownOS',
                browser: ws.client.options.phoneStatus ? 'Discord iOS' : 'Edgecord',
                libaray: 'Edgecord'
            }
        }
    })
}
