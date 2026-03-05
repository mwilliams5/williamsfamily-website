import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Williams Cook Book",
  description: "The Williams Family Cook Book — cherished recipes passed down through generations.",
};

const categories = [
  {
    name: "Desserts, Sweets & Cookies",
    emoji: "🍰",
    recipes: [
      "Joanie's Chocolate Mousse",
      "The Next Best Thing to Robert Redford",
      "Cherry Delight",
      "Betty's Strawberry Cake",
      "Peanut Butter Magic Cookies",
      "No Bake Holiday Orange Balls",
      "Fruitcake Cookies",
      "Seven Layer Cookies",
      "Susan & Christi's Favorite Cookies",
      "Snowballs",
      "Buckeyes",
      "Chocolate Crinkles",
      "Toffee Bars",
      "Libby's Pecan Pie",
      "Libby's Mini Cheese Cakes",
      "Linda's Fruit Compote",
      "Chocolate Chip Cookies – Chewy",
      "Chocolate Chip Cookies – Puffy",
      "Chocolate Chip Cookies – Thin",
      "Sour Cream Coffee Cake",
      "Pumpkin Gooey Butter Cake",
      "Nutty Fingers",
    ],
  },
  {
    name: "Appetizers & Dips",
    emoji: "🫙",
    recipes: [
      "Boiled Peanuts",
      "Cayenne Pecans",
      "Nacho Cheese Dip",
      "Rob's & Trish's Curry Dip",
      "Vegetable Dip",
      "Vegetable Dip II",
      "Schapiro's Mexi-Chile Dip",
      "Pepper Jelly",
      "Meatballs",
      "Barbeque Weinnies",
      "Ham Delights",
      "Hot Artichoke Dip",
      "Cucumber Ring Supreme",
      "Trash – Chex Mix",
      "Spiced Pumpkin Seeds",
    ],
  },
  {
    name: "Vegetables & Casseroles",
    emoji: "🥘",
    recipes: [
      "Rob & Trish's Sour Cream Corn",
      "Hashed Brown Potato Casserole",
      "Barbara & Ric's Green Bean Casserole",
      "Green Bean Parmesan",
      "Sweet and Sour Green Beans",
      "Broccoli Casserole with Cheese",
      "Broccoli Casserole with Cheese II",
      "Squash Casserole (Ole Timey)",
      "Squash Casserole (Quick)",
      "Asparagus/Pea Casserole",
      "Ratatouille",
      "Marinated Vegetables",
      "Overnite Slaw",
      "Rice Casserole",
      "Sausage Casserole",
      "Aunt Judy's Casserole",
      "Fideo Chicken",
      "Heart Attack Potatoes",
      "Sweet Potato Soufflé",
    ],
  },
  {
    name: "Breads",
    emoji: "🍞",
    recipes: [
      "Sourdough Bread",
      "Linda's Angel Biscuits",
      "Mrs. Ledbetter's Monkey Bread",
      "Linda's Carolina Cornbread",
      "Butterhorn Rolls",
    ],
  },
  {
    name: "Meats",
    emoji: "🍗",
    recipes: [
      "Koji's Favorite Chicken Wings",
      "Abba Eban Chicken",
      "Priss's Marinated Pork Loin",
      "Tarragon Chicken",
      "Curried Chicken Salad",
    ],
  },
  {
    name: "Soups",
    emoji: "🍲",
    recipes: [
      "French Onion Soup",
      "Pookie's Christmas Mushroom Soup",
      "Hamburger/Vegetable Soup",
      "Navy Bean Soup",
    ],
  },
];

// Featured recipe from the 2001 Reunion
const featuredRecipe = {
  title: "Peach Cobbler",
  subtitle: "As seen at the Williams Family Reunion 2001",
  ingredients: [
    "At least 5 medium to large yellow peaches",
    "2 sticks of butter",
    "1 teaspoon lemon juice",
    "1 tablespoon cinnamon",
    "Sugar (to taste)",
    "1 box Duncan Hines Real Butter Cake Mix",
    "Vanilla ice cream, to serve",
  ],
  instructions: [
    "Peel and slice peaches, place in a bowl and cover generously with sugar. Cover and allow to sit until they release their juices.",
    "Transfer the peach mixture to a pot, then add lemon juice, cinnamon, and one stick of butter. Simmer for 15–20 minutes until peaches are tender but not mushy.",
    "Pour the cooked peach mixture into a 9×13 inch cake pan.",
    "Sprinkle the cake mix evenly over the peach mixture. Crush any chunks with your hands or a fork.",
    "Melt the remaining stick of butter and drizzle it evenly over the cake mix.",
    "Bake in a preheated 350°F oven for 30–60 minutes until browned to your preference.",
    "Serve à la mode with vanilla ice cream.",
  ],
  note: "Adjust sugar and cinnamon to your personal taste. Baking time can extend to an hour or longer depending on batch size.",
};

export default function CookbookPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="section-heading">Williams Cook Book</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of cherished recipes from Williams family members across
          the generations. From holiday favorites to reunion classics — enjoy!
        </p>
      </div>

      {/* Featured Recipe */}
      <section className="mb-16 bg-warm-50 border border-warm-200 rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">⭐</span>
          <h2 className="text-2xl font-serif font-bold text-primary-800">
            {featuredRecipe.title}
          </h2>
        </div>
        <p className="text-sm font-semibold text-warm-600 mb-6 ml-10">
          {featuredRecipe.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide text-sm">
              Ingredients
            </h3>
            <ul className="space-y-1.5">
              {featuredRecipe.ingredients.map((ing) => (
                <li key={ing} className="flex items-start gap-2 text-gray-700">
                  <span className="text-warm-500 mt-0.5">•</span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide text-sm">
              Instructions
            </h3>
            <ol className="space-y-2">
              {featuredRecipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="font-bold text-primary-600 shrink-0">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs italic text-gray-500 border-t border-warm-200 pt-3">
              💡 {featuredRecipe.note}
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Index by Category */}
      <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
        Recipe Index
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.emoji}</span>
              <h3 className="font-serif font-bold text-primary-800 text-base leading-tight">
                {cat.name}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {cat.recipes.map((recipe) => (
                <li
                  key={recipe}
                  className="text-sm text-gray-700 flex items-start gap-2"
                >
                  <span className="text-primary-300 mt-0.5 shrink-0">›</span>
                  {recipe}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-10 text-center">
        Cookbook last updated: January 30, 2000
      </p>
    </div>
  );
}
