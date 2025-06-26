import 'dotenv/config';
import Client from '@/client/Client';
const $ = new Client({
    intents: Client.Intents
});

$.on('ready', (data) => {
    console.log(data);
})

$.connect(process.env.DISCORD_TOKEN as string);