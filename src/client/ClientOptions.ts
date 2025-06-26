import { Intents } from "@/constants/Constants";
import ClientUser from "./ClientUser";

export interface ClientOptions {
    /**
     * 
     */
    phoneStatus?: boolean;

    /**
     * 
     */
    intents: number | (keyof typeof Intents)[];
}

export interface ClientEvents {

    ready: [user: ClientUser];
    guildCreate: [guild: any];
    
}