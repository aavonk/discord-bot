import type * as Discord from 'discord.js';

export abstract class BaseCommand {
  public name: string;
  public description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  abstract exec(message: Discord.Message): void;
}
