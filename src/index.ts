import { Client, Collection } from "discord.js";
import type * as Discord from "discord.js";
import { misno, groceriesCommands, billsManager } from "./commands";
import { BaseCommand } from "./commands/BaseCommand";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

interface MyClient extends Client {
  commands?: any;
}

type Command = BaseCommand | undefined;

const client: MyClient = new Client();
client.commands = new Collection();

const commandObjects = [misno, groceriesCommands, billsManager];

for (let command of commandObjects) {
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", (message: Discord.Message) => {
  if (message.author.bot) return;

  if (message.content === "ping") {
    message.reply("Pong!");
  }
  const args = message.content.slice(0).split(/ +/);
  const commandName = args.shift()?.toLowerCase();
  const command: Command = client.commands.get(commandName);

  if (!command) return;

  if (command.args) {
    return command.exec(message, args);
  }

  command.exec(message);
});

client.login(process.env["TOKEN"]);
