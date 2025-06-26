import { Heartbeat, OPCODE, Payload } from '@/constants/Constants';
import { Identify } from './Identify';
import WebSocket from 'ws';
import WebSocketManager from './WebSocketManager';

export async function Message(ws: WebSocketManager, event: WebSocket.RawData) {
    const $Payload: Payload<any> = JSON.parse(event.toString());

    switch($Payload.op) {
        case OPCODE.DISPATCH :
            const Event = await import(`./events/${$Payload.t}.ts`);
            Event[$Payload.t](ws.client, $Payload.d);
        break;
        case OPCODE.HELLO :
            const { heartbeat_interval } = $Payload.d;
            setInterval(() => ws.send(Heartbeat), heartbeat_interval);
            Identify(ws);
        break;
        case OPCODE.HEARTBEAT_ACK :
            ws.ackReceived = true;
        break;
        case OPCODE.INVALID_SESSION :
            console.log('Invalid Gateway Session');
    }
}