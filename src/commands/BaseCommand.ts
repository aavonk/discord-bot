import type * as Discord from "discord.js";
import { SuccessOrError, Arg } from "../types";

export interface BaseProps {
  name: string;
  description: string;
  args?: Arg[];
}

export abstract class BaseCommand {
  public name: string;
  public description: string;
  public args?: Arg[];

  constructor({ name, description, args }: BaseProps) {
    this.name = name;
    this.description = description;
    this.args = args;
  }

  protected validateArgs(args: string[]): SuccessOrError {
    if (!args.length) {
      return {
        success: false,
        message: `Oops! No arguments provided. Type "${this.name} help" to see what I can do.`
      };
    }

    if (args.length > 1) {
      return {
        success: false,
        message: `System overload!! Too many arguments at once. To see what I can do say "${this.name} help"`
      };
    }

    const task = args[0];

    const taskNames = this.args?.map((task) => task.name);

    if (!taskNames?.includes(task)) {
      return {
        success: false,
        message: `Hmmm.... I don't know what that means. Try "${this.name} help"`
      };
    }

    console.log(task);
    return { success: true };
  }

  abstract exec(message: Discord.Message, args?: string[]): void;
}
