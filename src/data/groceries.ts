export interface Ingredient {
  name: string;
  amount: number | string;
  amountNum?: number;
  measurement?: string;
}

export interface Meal {
  name: string;
  ingredients: Ingredient[];
  recipe?: string;
}

export const MEALS: Meal[] = [
  {
    name: "Quinoa Bowls",
    ingredients: [
      {
        name: "Purple Cabbage",
        amount: 1
      },
      {
        name: "Peas",
        amount: "1 bag",
        amountNum: 1,
        measurement: "bag"
      },
      {
        name: "Carrots",
        amount: 5
      },
      {
        name: "Cucumber 🤢",
        amount: 2
      },
      {
        name: "Black Beans",
        amount: "1 bag",
        amountNum: 1,
        measurement: "bag"
      },
      {
        name: "Quinoa",
        amount: "3 cups",
        amountNum: 3,
        measurement: "Cups"
      }
    ]
  },
  {
    name: "Vegan Enchiladas",
    ingredients: [
      {
        name: "Enchilada Sauce",
        amount: "2 14oz cans",
        amountNum: 2,
        measurement: "14oz Cans"
      },
      {
        name: "Tortillas",
        amount: 1
      },
      {
        name: "Black Beans",
        amount: "1 bag",
        amountNum: 1,
        measurement: "bag"
      },
      {
        name: "Vegan Sausage",
        amount: "1 pack",
        amountNum: 1,
        measurement: "Pack"
      },
      {
        name: "Potatoes",
        amount: 2
      },
      { name: "Sweet potatoes", amount: 2 }
    ]
  },
  {
    name: "Butternut Squash Soup",
    ingredients: [
      {
        name: "Butternut Squash",
        amount: 1
      },
      {
        name: "Onion",
        amount: 1
      },
      {
        name: "Carrots",
        amount: 3
      },
      {
        name: "Garlic",
        amount: "2 cloves",
        amountNum: 2,
        measurement: "Cloves"
      },
      {
        name: "Sea Salt",
        amount: "1 Tbsp",
        amountNum: 1,
        measurement: "Tbsp"
      },
      {
        name: "Olive Oil",
        amount: "1 Tbsp",
        amountNum: 1,
        measurement: "Tbsp"
      },
      {
        name: "Yellow Curry Paste (Mae Ploy)",
        amount: "2tsp",
        amountNum: 2,
        measurement: "Tbsp"
      },
      {
        name: "Coconut Milk",
        amount: "2 Cups",
        amountNum: 2,
        measurement: "Cups"
      },
      {
        name: "Lemon",
        amount: 1
      },
      {
        name: "Vegetable Broth",
        amount: "3 Cups",
        amountNum: 3,
        measurement: "Cups"
      },
      {
        name: "Chicken Breast",
        amount: 2
      },
      {
        name: "Rice Noodles",
        amount: 1
      }
    ]
  },
  {
    name: "Pasta (with or without squash)",
    ingredients: [
      {
        name: "Pasta",
        amount: 2
      },
      {
        name: "Pasta Sauce",
        amount: 1
      },
      {
        name: "Zuchinni Squash",
        amount: 2
      }
    ]
  },
  {
    name: "Mushroom Spinach Lasagna",
    recipe: "https://www.lifeasastrawberry.com/mushroom-and-spinach-lasagna/",
    ingredients: [
      {
        name: "Lasagna Noodles",
        amount: 2
      },
      {
        name: "Olive Oil",
        amount: "3 Tbsp",
        amountNum: 3,
        measurement: "Cups"
      },
      {
        name: "Onion",
        amount: 1
      },
      {
        name: "Garlic",
        amount: "4 Cloves",
        amountNum: 4,
        measurement: "Cloves"
      },
      {
        name: "Baby Portabello Mushrooms",
        amount: "1 pound",
        amountNum: 1,
        measurement: "Pound"
      },
      {
        name: "Flour",
        amount: "1/4 Cup",
        amountNum: 0.25,
        measurement: "Cup"
      },
      {
        name: "Vegetable Stock (or chicken stock)",
        amount: "1.75 Cups",
        amountNum: 1.75,
        measurement: "Cups"
      },
      {
        name: "Heavy Cream",
        amount: "1/2 Cup",
        amountNum: 0.5,
        measurement: "Cups"
      },
      {
        name: "Spinach",
        amount: "4 Cups",
        amountNum: 4,
        measurement: "Cups"
      },
      {
        name: "Parmesan Cheese",
        amount: "1.5 Cups",
        amountNum: 1.5,
        measurement: "Cups"
      },
      {
        name: " Mozzarella Cheese",
        amount: "1 Block",
        amountNum: 1,
        measurement: "Block"
      }
    ]
  },
  {
    name: "Vegan Chilli (Slow Cooker)",
    recipe:
      "https://jessicainthekitchen.com/slow-cooker-sweet-potato-quinoa-and-black-bean-chili/",
    ingredients: [
      {
        name: "Vegetable Broth",
        amount: "2.5 Cups",
        amountNum: 2.5,
        measurement: "Cups"
      },
      {
        name: "Quinoa",
        amount: "1/2 Cup",
        amountNum: 0.5,
        measurement: "Cups"
      },
      {
        name: "Black Beans",
        amount: "1.5 Cups",
        amountNum: 1.5,
        measurement: "Cups"
      },
      {
        name: "Diced Tomatoes",
        amount: "14oz Can",
        amountNum: 1,
        measurement: "14oz Can"
      },
      {
        name: "Red Bell Pepper",
        amount: "1/4 Cup",
        amountNum: 0.25,
        measurement: "Cups"
      },
      {
        name: "Green Bell Pepper",
        amount: "1/4 Cup",
        amountNum: 0.25,
        measurement: "Cups"
      },
      {
        name: "Carrots",
        amount: 1
      },
      {
        name: "Onion",
        amount: "1/2",
        amountNum: 0.5,
        measurement: "Onion"
      },
      {
        name: "Garlic",
        amount: "4 Cloves",
        amountNum: 4,
        measurement: "Cloves"
      },
      {
        name: "Chilli Pepper",
        amount: "2 Tsp",
        amountNum: 2,
        measurement: "Tsp"
      },
      {
        name: "Cayenne Pepper",
        amount: "1/4 Tsp",
        amountNum: 0.25,
        measurement: "Tsp"
      },
      {
        name: "Sea Salt",
        amount: "1.5 Tsp",
        amountNum: 1.5,
        measurement: "Tsp"
      },
      {
        name: "Black Pepper",
        amount: "1 tsp",
        amountNum: 1,
        measurement: "Tsp"
      },
      {
        name: "Cumin",
        amount: "1 tsp",
        amountNum: 1,
        measurement: "Tsp"
      },
      {
        name: "Oregano",
        amount: "1 Tsp",
        amountNum: 1,
        measurement: "Tsp"
      },
      {
        name: "Corn",
        amount: "1/2 Cup",
        amountNum: 0.5,
        measurement: "Cups"
      },
      {
        name: "Sweet Potato",
        amount: 1
      },
      {
        name: "Avacado",
        amount: 2
      }
    ]
  }
];
