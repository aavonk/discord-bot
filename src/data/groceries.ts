export interface Ingredient {
  name: string;
  amount: number | string;
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
        amount: "1 bag"
      },
      {
        name: "Carrots",
        amount: "1 bag"
      },
      {
        name: "Cucumber 🤢",
        amount: 2
      },
      {
        name: "Black Beans",
        amount: "1 bag"
      },
      {
        name: "Quinoa",
        amount: "3 cups"
      }
    ]
  },
  {
    name: "Vegan Enchiladas",
    ingredients: [
      {
        name: "Enchilada Sauce",
        amount: "2 14oz cans"
      },
      {
        name: "Tortillas",
        amount: 1
      },
      {
        name: "Black Beans",
        amount: "1 bag"
      },
      {
        name: "Vegan Sausage",
        amount: "1 pack"
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
        amount: "2 cloves"
      },
      {
        name: "Sea Salt",
        amount: "1 Tbsp"
      },
      {
        name: "Olive Oil",
        amount: "1 Tbps"
      },
      {
        name: "Yellw Curry Paste (Mae Ploy)",
        amount: "2tsp"
      },
      {
        name: "Coconut Milk",
        amount: "2 Cups"
      },
      {
        name: "Lemon",
        amount: 1
      },
      {
        name: "Chicken Stock",
        amount: "3 Cups"
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
        amount: "3 Tbsp"
      },
      {
        name: "Onion",
        amount: 1
      },
      {
        name: "Garlic",
        amount: "4 Cloves"
      },
      {
        name: "Baby Portabello Mushrooms",
        amount: "1 pound"
      },
      {
        name: "Flour",
        amount: "1/4 Cup"
      },
      {
        name: "Vegetable Stock (or chicken stock)",
        amount: "1.75 Cups"
      },
      {
        name: "Heavy Cream",
        amount: "1/2 Cup"
      },
      {
        name: "Spinach",
        amount: "4 Cups"
      },
      {
        name: "Parmesan Cheese",
        amount: "1.5 Cups"
      },
      {
        name: " Mozzarella Cheese",
        amount: "8 oz"
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
        amount: "2.5 Cups"
      },
      {
        name: "Quinoa",
        amount: "1/2 Cup"
      },
      {
        name: "Black Beans",
        amount: "1.5 Cups"
      },
      {
        name: "Diced Tomatoes",
        amount: "14oz Can"
      },
      {
        name: "Red Bell Pepper",
        amount: "1/4 Cup"
      },
      {
        name: "Green Bell Pepper",
        amount: "1/4 Cup"
      },
      {
        name: "Carrots",
        amount: 1
      },
      {
        name: "Onion",
        amount: "1/2"
      },
      {
        name: "Garlic",
        amount: "4 Cloves"
      },
      {
        name: "Chilli Pepper",
        amount: "2 Tsps"
      },
      {
        name: "Cayenne Pepper",
        amount: "1/4 Tsp"
      },
      {
        name: "Sea Salt",
        amount: "1.5 Tsp"
      },
      {
        name: "Black Pepper",
        amount: "1 tsp"
      },
      {
        name: "Cumin",
        amount: "1 tsp"
      },
      {
        name: "Oregano",
        amount: "1 Tsp"
      },
      {
        name: "Corn",
        amount: "1/2 Cup"
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
