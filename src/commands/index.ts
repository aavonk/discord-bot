import { MessageEmbed } from "discord.js";
import { Misno } from "./misno";
import { BaseProps } from "./BaseCommand";
import { GroceriesCommand } from "./groceries";
import { BillManager } from "./bills/bills";
import { HelpTask } from "./bills/helpTask";
import { MEALS } from "../data/groceries";

const misnoProps: BaseProps = {
  name: "!misno",
  description: "Returns a random image of Missy"
};

const misno = new Misno(misnoProps);

const groceriesProps: BaseProps = {
  name: "!groceries",
  description: "Generate grocery list for the week"
};

const groceriesCommands = new GroceriesCommand(groceriesProps, MEALS);

const billsProps: BaseProps = {
  name: "!bills",
  description: "Manage Bills",
  args: [
    { name: "help", description: "Shows the help message" },
    {
      name: "due",
      description:
        "Displays a list of all bills due each month and their due date"
    }
  ]
};

const helpTask = new HelpTask(new MessageEmbed());
const billsManager = new BillManager(billsProps, helpTask);

export { misno, groceriesCommands, billsManager };
