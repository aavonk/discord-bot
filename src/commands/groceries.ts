import type * as Discord from 'discord.js';
import type { GroceryItem } from '../data/groceries';
import { BaseCommand } from './BaseCommand';
export class GroceriesCommand extends BaseCommand {
  private groceryItems: GroceryItem[];
  constructor(name: string, descripton: string, items: GroceryItem[]) {
    super(name, descripton);
    this.groceryItems = items;
  }

  private formatMessage() {
    const message: string = '';
    console.log(this.groceryItems);
    this.groceryItems.forEach((item) => {
      return message.concat(`${item.name} - ${item.amount.toString()} \n`, message);
    });

    console.log(message);
    return message;
  }

  exec(message: Discord.Message) {
    const text = this.formatMessage();

    return message.reply(text);
  }
}
