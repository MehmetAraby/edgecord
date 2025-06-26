import Client from "@/client/Client";

export function GUILD_CREATE(client: Client, data: any): void {
    client.emit('guildCreate', data);
}