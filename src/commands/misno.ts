import type * as Discord from 'discord.js';
import { MessageAttachment } from 'discord.js';
import { BaseCommand } from './BaseCommand';
import path from 'path';

export class Misno extends BaseCommand {
  private images: string[] = [
    path.resolve(__dirname, '../images/missy-1.jpg'),
    path.resolve(__dirname, '../images/missy-2.jpg'),
    path.resolve(__dirname, '../images/missy-3.jpg'),
    path.resolve(__dirname, '../images/missy-4.jpg'),
    path.resolve(__dirname, '../images/missy-5.jpg'),
    path.resolve(__dirname, '../images/missy-6.jpg'),
    path.resolve(__dirname, '../images/missy-7.jpg'),
    path.resolve(__dirname, '../images/missy-8.jpg'),
    path.resolve(__dirname, '../images/missy-9.jpg'),
    path.resolve(__dirname, '../images/missy-10.jpg'),
    path.resolve(__dirname, '../images/missy-11.PNG'),
  ];

  constructor(name: string, description: string) {
    super(name, description);
  }

  private getPicture(): string {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }
  exec(message: Discord.Message) {
    const attachment = new MessageAttachment(this.getPicture());
    message.channel.send(attachment);
  }
}
