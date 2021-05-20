import type * as Discord from "discord.js";
import { IHelpTask, Arg } from "../../types";

export class HelpTask implements IHelpTask {
  private embed: Discord.MessageEmbed;

  constructor(embed: Discord.MessageEmbed) {
    this.embed = embed;
  }

  private formatMessage(commands: Arg[]): string {
    return commands
      .map(
        (item, index) =>
          `${index + 1}. !bills ${item.name} -- ${item.description}`
      )
      .join("\n");
  }

  public run(msg: Discord.Message, allCommands: Arg[]) {
    const embed = this.embed
      .setColor("#5865F2")
      .setTitle("Bills Manager!!!")
      .setDescription(
        "Here is all of the things I can do. Whatever you choose, remember to say !bills before your option. Keep in mind that I can only do one option at a time 😎"
      )
      .addFields([
        {
          name: "Options",
          value: this.formatMessage(allCommands)
        }
      ]);
    return msg.reply(embed);
  }
}
