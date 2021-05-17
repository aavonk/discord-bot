import { Misno } from "./misno";
import { GroceriesCommand } from "./groceries";
import { MEALS } from "../data/groceries";

const misno = new Misno("!misno", "Returns a random image of Missy");
const groceriesCommands = new GroceriesCommand(
  "!groceries",
  "Generates grocery list for the week",
  MEALS
);

export { misno, groceriesCommands };
