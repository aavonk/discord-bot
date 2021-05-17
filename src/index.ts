import { Client, Collection } from "discord.js";
import type * as Discord from "discord.js";
import { misno, groceriesCommands } from "./commands";
import { BaseCommand } from "./commands/BaseCommand";

const test = "hi";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

interface MyClient extends Client {
  commands?: any;
}

type Command = BaseCommand | undefined;

const client: MyClient = new Client();
client.commands = new Collection();

const commandObjects = [misno, groceriesCommands];

for (let command of commandObjects) {
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", (message: Discord.Message) => {
  if (message.content === "ping") {
    message.reply("Pong!");
  }

  const command: Command = client.commands.get(message.content);

  if (!command) return;

  command.exec(message);
});

client.login(process.env["TOKEN"]);
