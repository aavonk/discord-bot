import { MessageEmbed } from "discord.js";
import type * as Discord from "discord.js";
import { BaseCommand, BaseProps } from "./BaseCommand";
import { Meal } from "../data/groceries";
import { SuccessOrError } from "../types";

export class GroceriesCommand extends BaseCommand {
  private meals: Meal[];
  private CHANNEL_ID: string = "843898538437640192";

  constructor(props: BaseProps, items: Meal[]) {
    super(props);
    this.meals = items;
  }

  private createCollector(
    message: Discord.Message
  ): Discord.Collector<any, any> {
    let filter = (msg: Discord.Message) => !msg.author.bot;

    let options = {
      max: 5,
      time: 150000
    };

    return message.channel.createMessageCollector(filter, options);
  }

  private createMessageEmbed(): MessageEmbed {
    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("This weeks options: ")
      .setDescription(
        'Reply to this message with up to 3 meals you want this week in the same message. Example: "234" would be meals 2, 3 and 4'
      )
      .addFields([
        {
          name: "Meals",
          value: this.getMealOptions()
        }
      ]);

    return embed;
  }

  private validateCorrectChannel(message: Discord.Message): boolean {
    const channel = message.channel.id;

    if (channel !== this.CHANNEL_ID) {
      return false;
    }

    return true;
  }

  private validateResponse(response: string): SuccessOrError {
    if (response.indexOf(" ") >= 0) {
      return {
        success: false,
        message: "Please remove any spaces from your answer."
      };
    }

    if (response.length > 3) {
      return {
        success: false,
        message: "Please select only 3 meals."
      };
    }

    return { success: true };
  }

  // Answer will be a string up to 3 numbers
  private getSelectedMeals(answer: string): Meal[] {
    // Convert answer to a string of numbers. Subtract one to get the index
    // of the meals array.
    const items = answer.split("").map((item) => Number(item) - 1);
    const selectedMeals = items.map((item) => this.meals[item]);

    return selectedMeals;
  }

  private getMealOptions() {
    const names = this.meals.map((meal, index) => `${index + 1}. ${meal.name}`);
    return names.join("\n");
  }

  private getUniqueIngredients(meals: Meal[]) {
    const ingredients = [];
    for (let meal of meals) {
      ingredients.push(...meal.ingredients);
    }
    const ing = ingredients
      .map((item) => item.name.trim())
      .sort((a, b) => (a > b ? 1 : -1))
      .filter((a, index, arr) => {
        return arr.indexOf(a) === index;
      });

    return ing;
  }

  private getIngredientList(meals: Meal[]): string {
    const items = this.getUniqueIngredients(meals).map(
      (item, index) => `${index + 1}. ${item}`
    );
    const message = `Here's all the ingredients needed. Make sure that we don't already have them before buying! \n----------------------------------------------------------------------------\n`;
    return message.concat(items.join("\n"));
  }

  private showRecipeLinks(meals: Meal[], message: Discord.Message): void {
    const hasLinks = meals.filter((item) => item.recipe);

    if (!hasLinks.length) return;

    const embeds: MessageEmbed[] = [];

    for (let item of hasLinks) {
      const embed = new MessageEmbed()
        .setTitle(item.name)
        .setColor("#57F287")
        .setURL(item.recipe!);
      embeds.push(embed);
    }

    embeds.forEach((embed) => {
      message.reply(embed);
    });
  }

  exec(message: Discord.Message) {
    const isCorrectChannel = this.validateCorrectChannel(message);

    if (!isCorrectChannel) {
      return message.reply(
        "Beep boop! Please go over to the groceries channel!"
      );
    }
    const messageEmbed = this.createMessageEmbed();

    // Send the message with the meal list
    message.reply(messageEmbed);

    // Create the collector to accept input
    const collector = this.createCollector(message);

    collector.on("collect", (m: Discord.Message) => {
      const answer = m.content.trim();

      const isValid = this.validateResponse(answer);

      if (!isValid.success) {
        return m.reply(isValid.message);
      }

      // Get the selected meals
      const meals = this.getSelectedMeals(answer);
      const ingredients = this.getIngredientList(meals);

      m.reply(ingredients);
      this.showRecipeLinks(meals, m);
      return collector.stop();
    });

    return;
  }
}
