import type * as Discord from "discord.js";
import { BaseCommand, BaseProps } from "../BaseCommand";
import { IHelpTask } from "../../types";

export class BillManager extends BaseCommand {
  private CHANNEL_ID: string = "844597608755494962";
  private readonly helpTask: IHelpTask;

  constructor(props: BaseProps, helpTask: IHelpTask) {
    super(props);
    this.helpTask = helpTask;
  }

  private validateChannel(message: Discord.Message): boolean {
    if (message.channel.id !== this.CHANNEL_ID) {
      return false;
    }
    return true;
  }

  private pipeToTask(task: string, message: Discord.Message) {
    if (task === "help") {
      return this.helpTask.run(message, this.args!);
    }
    if (task === "due") {
      message.reply("Due");
    }
    return;
  }

  public exec(
    message: Discord.Message,
    args: string[]
  ): Promise<Discord.Message> {
    const isValidChannel = this.validateChannel(message);

    if (!isValidChannel) {
      return message.reply(
        "Beep boop! 👾👽 Please go to the bills channel to use that command"
      );
    }

    const isValidArgs = this.validateArgs(args);

    if (!isValidArgs.success) {
      return message.reply(isValidArgs.message);
    }

    const task = args[0];
    this.pipeToTask(task, message);
    return message.reply("Hello!");
  }
}
