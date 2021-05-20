import type * as Discord from "discord.js";

type Success = {
  success: boolean;
};

type ErrorMessage =
  | { success: true; message?: never }
  | { success: false; message: string };

export type SuccessOrError = Success & ErrorMessage;

export interface IHelpTask {
  run(msg: Discord.Message, allComands: Arg[]): Promise<Discord.Message>;
}

export interface Arg {
  name: string;
  description: string;
}
