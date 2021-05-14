import { Misno } from './misno';
import { GroceriesCommand } from './groceries';
import { generalItems } from '../data/groceries';
const misno = new Misno('!misno', 'Returns a random image of Missy');
const groceriesCommands = new GroceriesCommand('!groceries', 'Generates grocery list for the week', generalItems);

export { misno, groceriesCommands };
