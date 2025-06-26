import EventEmitter from 'node:events';
import ClientUser from '@/client/ClientUser';
import WebSocketManager from './ws/WebSocketManager';
import { Intents } from '@/constants/Constants';
import { ClientEvents, ClientOptions } from './ClientOptions';

interface Client {
    /**
     * Authorization token for the logged in bot.
     * 
     * @type {string}
     */
    token: string | null;

    /**
     * User that the client is logged in as
     *
     * @type {ClientUser}
     */
    user: ClientUser | null;

    /**
     * The WebSocket Manager of the Client.
     * 
     * @type {WebSocketManager}
     */
    ws: WebSocketManager;

    /**
     * The options of the Client.
     * 
     * @type {ClientOptions}
     */
    options: ClientOptions;
}

class Client extends EventEmitter<ClientEvents> {
    public constructor(options: ClientOptions) {
        super({ captureRejections: true });
        this.ws = new WebSocketManager(this);
        this.token = null;
        this.user = null;
        this.options = options;
    }

    /**
     * Logs the client in, establishing a WebSocket connection to Discord.
     * 
     * @example
     * ```ts
     * $.connect('[DISCORD_TOKEN]');
     * $.connect(process.env.DISCORD_TOKEN);
     * ```
     * @param {string} token Token of the account to log in.
     * @returns {Promise<string>} Token of the accout used
     */
    public async connect(token: string): Promise<string> {
        this.token = token = token.replace(/^(bot|Bot)\s*/i, '');
        this.ws.start();
        return token;
    }

    /**
     * Increments max listeners by one, if they are not zero.
     * @return {void}
     */
    incrementMaxListeners(): void {
        const MaxListeners = this.getMaxListeners();
        if(MaxListeners !== 0) this.setMaxListeners(MaxListeners + 1);
    }

    /**
     * Decrements max listeners by one, if they are not zero.
     * @return {void}
     */
    decrementMaxListeners(): void {
        const MaxListeners = this.getMaxListeners();
        if(MaxListeners !== 0) this.setMaxListeners(MaxListeners - 1);
    }

    static Intents: number = Intents.GUILDS | Intents.GUILD_MESSAGES | Intents.MESSAGE_CONTENT;
}

export default Client;