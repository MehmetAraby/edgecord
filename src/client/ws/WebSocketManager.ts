import { MessageEvent, WebSocket } from 'ws';
import Client from '@/client/Client';
import { Constants, Payload } from '@/constants/Constants';
import { Message } from './Message';

class WebSocketManager {
    public client: Client;
    private ws: WebSocket;
    public ackReceived: boolean;
    public constructor(client: Client) {
        this.client = client;
        this.ackReceived = false;
        this.ws = new WebSocket(Constants.GATEWAY_URL);
    }



    public start() {
        this.ws.on('message', (data) => Message(this, data));
    }


    public send(data: Record<string, any>) {
        return this.ws.send(JSON.stringify(data));
    }
}




export default WebSocketManager;