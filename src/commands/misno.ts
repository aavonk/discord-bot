import type * as Discord from 'discord.js';

import { BaseCommand } from './BaseCommand';

export class Misno extends BaseCommand {
  constructor(name: string, description: string) {
    super(name, description);
  }
  exec(message: Discord.Message) {
    message.reply('Missy!');
  }
}
