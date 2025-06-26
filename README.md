# ⚡ Edgecord

**Edgecord** is an unofficial, lightweight Discord library built on **Node.js**, designed to connect directly to the Discord **Gateway API** using the `ws` WebSocket package.

This project gives you full control over your bot's WebSocket connection and a deeper understanding of how Discord's real-time gateway communication works — no bulky wrappers, just the essentials.


## 🛠️ Features

- ✅ Built on top of [`ws`](https://www.npmjs.com/package/ws)
- 🔌 Manual control over the WebSocket connection
- 🎯 Lightweight and modular
- 📡 Sends raw payloads to Discord Gateway v10
- 🧠 Educational: learn how Discord bots connect behind the scenes


## 📦 Get Started

```bash
- npm i
- bun run Main.ts
```

## 🚀 Usage
```ts
import 'dotenv/config';
import Client from '@/client/Client';
const $ = new Client({
    intents: Client.Intents
});

$.on('ready', (data) => {
    console.log(data);
})

$.connect(process.env.DISCORD_TOKEN as string);
```