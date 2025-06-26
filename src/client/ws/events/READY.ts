import Client from '@/client/Client';
import ClientUser from '@/client/ClientUser';

export function READY(client: Client, data: any): void {
    client.emit('ready', new ClientUser(client, data.user));
}