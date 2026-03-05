export interface Recipe {
  name: string;
  note?: string;
  ingredients: string[];
  instructions: string;
}

export interface CookbookSection {
  category: string;
  emoji: string;
  recipes: Recipe[];
}

export const cookbook: CookbookSection[] = [
  {
    category: "Desserts, Sweets & Cookies",
    emoji: "🍰",
    recipes: [
      {
        name: "Joanie's Chocolate Mousse",
        ingredients: ["6 oz semi-sweet chocolate chips","2 T dark rum (optional)","5 T boiling water","4 eggs, separated"],
        instructions: "Beat egg whites until stiff. Blend chocolate chips 6 seconds on high. Add boiling water and blend 10 seconds. Mix in egg yolks and rum, blend 3 seconds until smooth. Fold chocolate mixture gently into egg whites. Spoon into 6 dessert cups and chill at least 2 hours.",
      },
      {
        name: "The Next Best Thing to Robert Redford",
        ingredients: ["1 C flour","1 C chopped pecans","½ C softened butter","1 (8 oz) cream cheese, softened","1 C sugar","1 (9 oz) Cool Whip","3 C cold milk","1 (6 oz) pkg instant vanilla pudding","1 (6 oz) pkg instant chocolate pudding","Grated chocolate (optional)"],
        instructions: "Mix flour, margarine, and pecans; press into greased 9×13\" pan. Bake at 350° for 15–20 minutes until golden. Cool. Beat cream cheese with sugar, fold in half the Cool Whip, spread over crust. Combine pudding mixes, beat in milk, spread over cheese layer. Top with remaining Cool Whip and grated chocolate. Refrigerate overnight. Makes 16 servings.",
      },
      {
        name: "Cherry Delight",
        ingredients: ["1 graham cracker crust","1 can sweetened condensed milk","⅓ C lemon juice","8 oz cream cheese, softened","1 t vanilla extract","1 can cherry pie filling"],
        instructions: "Cream cheese until fluffy. Slowly add condensed milk until well blended. Stir in lemon juice and vanilla. Pour into crust, top with pie filling, and refrigerate.",
      },
      {
        name: "Betty's Strawberry Cake",
        ingredients: ["1 box Duncan Hines white cake mix","3 T plain flour","4 eggs","1 pkg strawberry Jell-O (small)","⅔ C milk","1 (10 oz) pkg frozen strawberries, thawed","— Frosting —","½ stick butter","1 box powdered sugar","¼ t lemon juice"],
        instructions: "Mix cake mix, Jell-O, and flour. Add milk and eggs; mix thoroughly. Add ⅔ of the thawed strawberries; mix. Pour into two greased 8\" round pans. Bake at 350° for 35 minutes. Frosting: Cream butter, add sugar, remaining strawberries, and lemon juice. Ice cooled cake and refrigerate.",
      },
      {
        name: "Peanut Butter Magic Cookies",
        ingredients: ["1 C peanut butter","1 C granulated sugar","1 egg","Hershey kisses"],
        instructions: "Mix peanut butter, sugar, and egg until smooth. Drop by teaspoon or form into balls. Bake 8–10 minutes at 350°. Top each with a Hershey kiss immediately after removing from oven.",
      },
      {
        name: "No Bake Holiday Orange Balls",
        ingredients: ["1 (7½ oz) box vanilla wafers","1 stick soft margarine","1 can grated coconut","1 lb powdered sugar","¾ C chopped pecans","6 oz frozen orange juice"],
        instructions: "Crush vanilla wafers into crumbs. Stir in nuts. Work in margarine. Add orange juice. Mix, form into balls, and roll in coconut. Keep refrigerated.",
      },
      {
        name: "Fruitcake Cookies",
        ingredients: ["1½ C all-purpose flour","¼ t each ground nutmeg, cloves, and cinnamon","¼ t baking soda","¼ t salt","3 C chopped pecans","½ lb chopped dates","¼ lb each candied red and green cherries, chopped","¾ C butter, softened","1 C firmly packed brown sugar","2 eggs","⅓ C white wine","1½ T milk"],
        instructions: "Combine flour and spices; set aside ¾ cup. Dredge pecans, dates, and cherries in reserved flour. Cream butter, gradually add sugar, beat until fluffy. Add eggs one at a time. Add dry ingredients alternately with wine and milk. Stir in fruit. Drop by level teaspoons on greased sheets. Bake at 325° for 15 minutes. Yields 4 dozen.",
      },
      {
        name: "Seven Layer Cookies",
        ingredients: ["½ stick butter","1 C graham cracker crumbs","6 oz chocolate chips","6 oz butterscotch chips","7 oz fine coconut","1 C chopped pecans","1 can Eagle Brand sweetened condensed milk"],
        instructions: "Melt butter in 9×12\" pan. Layer: graham crackers, chocolate chips, coconut, butterscotch chips. Pour condensed milk over all; sprinkle with pecans. Bake at 325° for 30 minutes.",
      },
      {
        name: "Susan & Christi's Favorite Cookies",
        ingredients: ["3 egg whites","⅛ t salt","¾ C sugar","3½ t raspberry-flavored gelatin","1 T vinegar","1 C chocolate drops (optional)"],
        instructions: "Beat egg whites with salt until foamy. Gradually add gelatin and sugar, ensuring sugar dissolves. Beat until stiff peaks form. Mix in vinegar; fold in chocolate drops. Drop by teaspoon onto brown-paper-lined ungreased sheet. Bake 25 minutes at 250°. Turn off heat, leave in oven 20 more minutes. Makes 7 dozen.",
      },
      {
        name: "Snowballs",
        ingredients: ["¾ C butter","¼ C evaporated milk","1 t vanilla","1¾ C sifted flour","6 T powdered sugar (for dough)","1 C chopped pecans","1 lb powdered sugar (for rolling)"],
        instructions: "Cream butter; add milk slowly, cream until fluffy. Add vanilla, flour, and 6 T powdered sugar. Stir in pecans. Form 1\" balls on floured sheet. Bake 12–15 minutes at 350°. Roll in powdered sugar immediately after removing from oven.",
      },
      {
        name: "Buckeyes",
        ingredients: ["½ C butter","2 C crunchy or creamy peanut butter","1 lb powdered sugar","1 t vanilla","6 oz semi-sweet chocolate","⅓ bar paraffin"],
        instructions: "Blend butter, peanut butter, powdered sugar, and vanilla. Chill if needed. Form walnut-size balls. Melt chocolate and paraffin in double boiler. Dip balls using a toothpick; place on wax paper to cool.",
      },
      {
        name: "Chocolate Crinkles",
        ingredients: ["¾ C vegetable oil","4 oz unsweetened chocolate, melted","2 C sugar","4 eggs","2 t vanilla","2 t baking powder","2 C flour","1 box powdered sugar (for coating)"],
        instructions: "Blend oil, chocolate, sugar, eggs, and vanilla. Mix flour and baking powder; add to mixture. Chill overnight. Form ¾\" balls, coat in powdered sugar, place 2\" apart on greased sheet. Bake 10–12 minutes at 350°. Do not overcook.",
      },
      {
        name: "Toffee Bars",
        ingredients: ["1 C softened butter","1 C firmly packed light brown sugar","1 egg yolk","1 t vanilla","2¼ C sifted all-purpose flour","12 oz semi-sweet chocolate pieces","1 C chopped pecans"],
        instructions: "Beat butter, sugar, egg yolk, and vanilla at high speed until crumbly. Stir in flour. Press evenly in greased 13×9\" pan. Bake 25 minutes at 350°. Remove; sprinkle chocolate, return to oven 3–4 minutes until melted. Spread chocolate; sprinkle nuts, pressing in gently.",
      },
      {
        name: "Libby's Pecan Pie",
        ingredients: ["2 eggs","¾ C sugar","1 t salt","2 t plain flour","1 C dark corn syrup","½ can evaporated milk","¾ t vanilla","1 C chopped pecans","2 frozen 9\" pie shells"],
        instructions: "Combine flour, sugar, salt. Add eggs and syrup; blend. Add milk, pecans, and vanilla; blend well. Pour into frozen shells. Bake at 350° for 50 minutes.",
      },
      {
        name: "Libby's Mini Cheesecakes",
        ingredients: ["1 box vanilla wafers","2 (8 oz) packages cream cheese, softened","¾ C sugar","2 eggs","1 T lemon juice","¼ t vanilla","1 can pie filling (blueberry, cherry, or strawberry)","Double cupcake liners"],
        instructions: "Cream sugar, cream cheese, and eggs well. Add lemon juice and vanilla; blend. Place one vanilla wafer in each double cupcake liner in muffin tin. Fill each ⅔ full with cheese mixture. Bake 20 minutes at 300–325°. Cool on racks; top with a small amount of pie filling.",
      },
      {
        name: "Linda's Fruit Compote",
        ingredients: ["20 oz can sliced peaches (drained, or fresh ripe)","3–4 bananas","1 pkg frozen strawberries","20 oz can chunk pineapple (do not drain)","2 T Tang","1 small box instant vanilla pudding"],
        instructions: "Mix all ingredients together. Include pineapple with its juice to blend the pudding. Chill and serve.",
      },
      {
        name: "Chocolate Chip Cookies – Chewy",
        note: "Alton Brown's recipe",
        ingredients: ["Bread flour","Whole egg + egg yolk","Melted butter","White and brown sugars","Milk, vanilla","2 C semi-sweet chocolate chips"],
        instructions: "Melt butter; cream with sugars. Incorporate eggs, milk, and vanilla. Slowly incorporate the flour mixture until thoroughly combined. Stir in chocolate chips. Chill dough. Portion with an ice cream scooper (6 per sheet) onto parchment-lined sheets. Bake at 375° for approximately 14 minutes, rotating halfway through. Cool completely before storing in airtight container.",
      },
      {
        name: "Chocolate Chip Cookies – Puffy",
        note: "Alton Brown's recipe",
        ingredients: ["1 C butter-flavored shortening","Cake flour (for tender crumb)","White and brown sugars","2 eggs, vanilla","2 C semi-sweet chocolate chips"],
        instructions: "Cream fats and sugars. Incorporate eggs and vanilla. Fold in sifted dry ingredients. Chill dough. Bake at 375° for approximately 13 minutes until golden brown and puffy. Portion with an ice cream scooper onto parchment.",
      },
      {
        name: "Chocolate Chip Cookies – Thin",
        note: "Alton Brown's recipe",
        ingredients: ["2¼ C all-purpose flour","1 t kosher salt","1 t baking soda","Butter, brown and granulated sugar","1 egg, milk, vanilla","2 C semi-sweet chocolate chips"],
        instructions: "Preheat oven to 375°. Sift dry ingredients. Cream butter with sugars until light and fluffy. Gradually incorporate egg mixture and flour. Fold in chips. Place 6 cookies per parchment-lined sheet. Bake 13–15 minutes, rotating pan after 5 minutes. Transfer immediately to rack; cool before storing.",
      },
      {
        name: "Sour Cream Coffee Cake",
        ingredients: ["— Streusel —","¼ C sugar + 3 T dark brown sugar","2 t vanilla","½ C walnuts, toasted and coarsely chopped","— Cake —","2 C unbleached all-purpose flour","1 t baking soda, ½ t salt","Pinch nutmeg and mace","¾ C unsalted butter","1 C sugar","2 eggs","Sour cream"],
        instructions: "Combine streusel ingredients; set aside. Preheat oven to 350°. Butter a 9×2\" round cake pan. Whisk dry ingredients. Cream butter and sugar until fluffy. Add eggs one at a time. Mix vanilla with sour cream. Alternate adding flour and sour cream to butter mixture. Layer: half batter, half streusel, remaining batter, remaining streusel. Bake 1 hour 10 minutes. Cool 10–15 minutes before serving.",
      },
      {
        name: "Pumpkin Gooey Butter Cake",
        note: "Paula Deen's recipe",
        ingredients: ["— Crust —","1 (18¼ oz) yellow cake mix","1 egg","8 T butter, melted","— Filling —","1 (8 oz) cream cheese, softened","1 (15 oz) can pumpkin","3 eggs, 1 t vanilla","8 T butter, melted","1 (16 oz) box powdered sugar","1 t cinnamon, 1 t nutmeg"],
        instructions: "Mix cake layer ingredients; press into greased 13×9\" pan. Beat cream cheese, pumpkin, eggs, vanilla, and butter until smooth; add powdered sugar and spices. Spread over cake batter. Bake at 350° for 40–50 minutes. Center should be a little gooey — do not overbake. Serve with whipped cream or vanilla ice cream.",
      },
      {
        name: "Nutty Fingers",
        ingredients: ["⅔ C soft butter","6 T powdered sugar (plus more for rolling)","Flour, salt","Chopped pecans","Vanilla and other extracts"],
        instructions: "Cream butter and sugar until light. Incorporate remaining ingredients except extra powdered sugar. Shape dough into 2\" finger shapes; place on ungreased baking sheet. Bake at 325° for approximately 30 minutes. Roll warm cookies in powdered sugar.",
      },
    ],
  },
  {
    category: "Appetizers & Dips",
    emoji: "🫙",
    recipes: [
      {
        name: "Nacho Cheese Dip",
        ingredients: ["Velveeta cheese","Taco sauce (2:1 cheese to sauce ratio)"],
        instructions: "Dice cheese; add sauce. Heat via microwave or double boiler until melted and smooth. Serve with nachos.",
      },
      {
        name: "Rob's & Trish's Curry Dip",
        ingredients: ["Mayonnaise","Horseradish","Curry powder","Tarragon vinegar","Dried onions"],
        instructions: "Mix all ingredients; chill. Serve with raw vegetables.",
      },
      {
        name: "Vegetable Dip I",
        ingredients: ["1 pkg frozen chopped spinach","1 pkg Knorr Vegetable Soup Mix","Green onions","Sour cream","Mayonnaise","1 can water chestnuts"],
        instructions: "Squeeze spinach dry. Combine all ingredients in a bowl; refrigerate 2 hours. Stir before serving. Can be served with vegetables, crackers, or in a hollowed bread loaf.",
      },
      {
        name: "Vegetable Dip II",
        ingredients: ["Sour cream","Mayonnaise","Minced onion flakes","Dill weed","Parsley flakes","Beau Monde seasoning"],
        instructions: "Mix all ingredients with mixer on low speed. Refrigerate. Keeps for 2 weeks.",
      },
      {
        name: "Schapiro's Mexi-Chile Dip",
        ingredients: ["1 tomato, chopped","1 can green chiles","1 can black olives, chopped","1 onion, chopped","Vinegar, olive oil, garlic salt"],
        instructions: "Chop vegetables; combine vinegar, garlic salt, and olive oil; pour over vegetables. Serve with nacho chips.",
      },
      {
        name: "Pepper Jelly",
        ingredients: ["Bell peppers","Hot peppers","Sugar","Vinegar","Certo or Sure Jell (pectin)","Food coloring"],
        instructions: "Grind peppers; mix with sugar and vinegar. Boil 5 minutes; add pectin; add coloring; boil 1 minute; let stand 5 minutes; jar and seal. Serve with cream cheese and crackers.",
      },
      {
        name: "Meatballs",
        ingredients: ["Frozen precooked meatballs","Ketchup","Grape jelly (equal parts ketchup and jelly)"],
        instructions: "Mix jelly and ketchup; warm. Add meatballs to crock pot with mixture. Cook 4–5 hours.",
      },
      {
        name: "Bar-B-Que Weenies",
        ingredients: ["Hot dogs","Mustard","Grape jelly (equal parts mustard and jelly)"],
        instructions: "Cut hot dogs into pieces. Mix mustard and jelly; combine in crock pot. Cook until hot and glazed.",
      },
      {
        name: "Ham Delights",
        ingredients: ["Party buns","Sliced ham","Sliced cheese","Butter, softened","Mustard","Poppy seeds","Minced onion","Worcestershire sauce"],
        instructions: "Mix softened butter and mustard; add poppy seeds, onion, and Worcestershire. Spread on bun halves; add ham and cheese. Bake at 250–300° until hot.",
      },
      {
        name: "Hot Artichoke Dip",
        ingredients: ["1 can artichoke hearts, drained and mashed","Mayonnaise","Parmesan cheese"],
        instructions: "Combine artichokes, mayo, and cheese. Place in baking dish; bake at 350° for 15–20 minutes until bubbly. Serve hot with crackers.",
      },
      {
        name: "Cucumber Ring Supreme",
        ingredients: ["Lemon gelatin","Boiling water","Lemon juice","Cucumber (sliced and shredded)","Unflavored gelatin","Cream cheese","Sugar, salt","Onion, mayonnaise, parsley"],
        instructions: "Dissolve lemon gelatin in boiling water with lemon juice; partially set; arrange cucumber slices; chill. Prepare cream cheese mixture with unflavored gelatin; combine with shredded cucumber, mayo, onion, and parsley; pour over gelatin layer; chill until firm. Unmold and fill center with tomatoes.",
      },
      {
        name: "Boiled Peanuts",
        ingredients: ["Raw peanuts","Salt (1 C per gallon water)","Water"],
        instructions: "Soak raw peanuts in salted water about 8 hours. Discard soaking water; prepare fresh salt solution. Maintain a gentle boil for 6–12 hours, keeping water level constant. Taste-test periodically for desired texture and saltiness. Refrigerate up to 10 days or freeze.",
      },
      {
        name: "Cayenne Pecans",
        ingredients: ["1 lb pecans","1 egg white","Brown sugar","Salt, paprika, cayenne"],
        instructions: "Whisk egg white until thick; coat pecans. Add seasoning blend of sugar, salt, paprika, and cayenne. Bake at 375° for 12–15 minutes until sugar crystals form. Cool completely; store in airtight container up to three weeks.",
      },
      {
        name: "Trash – Chex Mix",
        ingredients: ["Wheat, Rice, and Corn Chex cereals","Cheerios","Stick pretzels","Peanuts","Butter","Worcestershire sauce","Garlic powder, seasoning salt, curry powder"],
        instructions: "Toast curry powder briefly. Melt butter with seasonings; coat all dry ingredients. Bake at 200° in foil turkey roasters, stirring every 15 minutes for 2 hours.",
      },
      {
        name: "Spiced Pumpkin Seeds",
        ingredients: ["2 C raw whole pumpkin seeds","1½ T butter","Salt, garlic salt, Worcestershire sauce"],
        instructions: "Preheat oven to 275°. Combine all ingredients in a shallow baking dish. Bake approximately 1 hour, stirring at intervals.",
      },
    ],
  },
  {
    category: "Vegetables & Casseroles",
    emoji: "🥘",
    recipes: [
      {
        name: "Rob & Trish's Sour Cream Corn",
        ingredients: ["2 (10 oz) pkgs frozen corn","½ lb bacon","2 T bacon fat","¼ C sour cream"],
        instructions: "Fry bacon; cook corn in bacon fat until done. Crumble bacon; add sour cream. Warm but don't scald or burn. Stir in bacon and serve immediately.",
      },
      {
        name: "Hashed Brown Potato Casserole",
        ingredients: ["1 (32 oz) pkg frozen hash browns, thawed","½ C chopped onion","¾ C melted butter","1 can cream of chicken soup","1 C sour cream","4 oz shredded cheddar","2 C crushed cornflakes"],
        instructions: "Combine potatoes, ½ C butter, onion, soup, sour cream, and cheese; spoon into greased casserole. Mix cornflakes with remaining butter; sprinkle over top. Bake at 350° for 50 minutes. Garnish with lemon twists and parsley. Yields 10 servings.",
      },
      {
        name: "Barbara & Ric's Green Bean Casserole",
        ingredients: ["2 cans french cut green beans","1 can cream of mushroom soup","1 can Durkee French fried onions"],
        instructions: "Mix beans and soup. Bake at 350° for 30 minutes. Top with onions and bake 5 minutes more.",
      },
      {
        name: "Green Bean Parmesan",
        ingredients: ["2 (1 lb) cans green beans","1 medium onion, sliced in rings","½ C grated Parmesan","¼ C cider vinegar","½ C oil","1 t salt, pepper"],
        instructions: "Cook beans 15 minutes in butter; drain. Layer with onion rings. Mix oil, vinegar, salt, pepper, and Parmesan; pour over. Refrigerate overnight; serve cold.",
      },
      {
        name: "Sweet and Sour Green Beans",
        ingredients: ["2 (1 lb) cans green beans","8 slices bacon","1 large onion, chopped","¼ C bacon drippings","½ C vinegar","½ C sugar"],
        instructions: "Preheat oven to 350°. Layer beans and crispy bacon in casserole. Heat drippings, onion, sugar, and vinegar; pour over beans. Bake covered 30 minutes, then uncovered 30 minutes.",
      },
      {
        name: "Broccoli Casserole with Cheese",
        ingredients: ["2 (10 oz) pkgs broccoli florets","8 oz Velveeta cheese","1 stick melted butter","12 Ritz crackers, crumbled"],
        instructions: "Place cooked broccoli in 2½ qt baking dish. Sprinkle cheese on top. Drizzle half the butter over broccoli and cheese. Mix remaining butter with crackers; sprinkle over all. Bake 20 minutes at 350°.",
      },
      {
        name: "Broccoli Casserole with Cheese II",
        ingredients: ["2 (10 oz) pkgs chopped broccoli, cooked and drained","1½ C shredded sharp cheese","1 can cream of mushroom soup","¾ C mayonnaise","Ritz crackers"],
        instructions: "Mix broccoli, cheese, soup, and mayo; pour into greased baking dish. Top with crumbled crackers or extra cheese. Bake 30 minutes at 350° until hot and bubbly.",
      },
      {
        name: "Squash Casserole (Ole Timey)",
        ingredients: ["2 C cooked squash","1 C bread crumbs","1 C scalded milk","5 T bacon drippings","½ stick butter","2 eggs, beaten","1 onion, grated","½ lb sharp cheddar, grated","½ t baking powder","Ritz cracker crumbs for topping"],
        instructions: "Mix scalded milk and bacon drippings; pour over bread crumbs. Add squash, eggs, onion, cheese, and baking powder. Pour into greased casserole; top with buttered cracker crumbs. Bake 30 minutes at 350°.",
      },
      {
        name: "Squash Casserole (Quick)",
        ingredients: ["2 C cooked squash","1 C bread crumbs","1 egg, beaten","½ C milk","1 onion, chopped","½ lb sharp cheddar, grated","Ritz cracker crumbs for topping"],
        instructions: "Combine squash, bread crumbs, and onion. Blend egg with milk; add to squash. Stir in cheese. Top with Ritz crumbs or extra cheese and bake.",
      },
      {
        name: "Asparagus/Pea Casserole",
        ingredients: ["1 (14½ oz) can green asparagus, drained","2 cans LeSueur peas","1 C grated cheddar or sharp cheese","1 can cream of mushroom soup","Salt and pepper"],
        instructions: "Mix all ingredients; bake at 350° for 30 minutes. Optional: add water chestnuts or fresh mushrooms.",
      },
      {
        name: "Ratatouille",
        ingredients: ["1 large onion","3 crushed garlic cloves","⅓ C olive oil","1 small eggplant, cubed","2 zucchini, sliced","1 bell pepper","5 tomatoes, chopped","¾ C tomato juice","1 t basil, 1 t oregano"],
        instructions: "Sauté onion and garlic in olive oil until transparent. Lightly flour eggplant and add with tomato juice. Cover and cook slowly until eggplant releases juice. Add zucchini and pepper; continue cooking. Add seasonings and tomatoes; cook 15 minutes. Top with Jack, mozzarella, or Parmesan. Alternatively, use a slow cooker.",
      },
      {
        name: "Marinated Vegetables",
        ingredients: ["1 can garden peas","1 can cut green beans","1 onion, chopped","1 celery heart, chopped","1 small jar chopped pimento","— Marinade —","⅓ C salad oil","¾ C each sugar, vinegar, and water"],
        instructions: "Drain peas and beans. Toss with remaining ingredients. Combine marinade ingredients and pour over vegetables.",
      },
      {
        name: "Overnite Slaw",
        ingredients: ["1 medium head cabbage, shredded","3 medium onions, chopped","1 T celery salt","— Marinade —","1 C vinegar","¾ C sugar","1 T prepared mustard","½ t red pepper flakes","2 T butter, 1 egg, 1 T flour"],
        instructions: "Sprinkle salt generously over cabbage and onion. Cook marinade ingredients until thick, stirring constantly. Pour over cabbage without stirring. Cover; let stand 1 hour. Stir, cover, and refrigerate overnight.",
      },
      {
        name: "Rice Casserole",
        ingredients: ["1 C uncooked rice","1 can onion soup","1 can beef consommé","⅓ stick butter"],
        instructions: "Combine all ingredients in 1½ qt casserole. Cover with foil and lid. Bake at 350° for one hour.",
      },
      {
        name: "Sausage Casserole",
        ingredients: ["1 lb hot sausage, cooked crumbly","2 (8 oz) pkgs Lipton chicken noodle soup","1 C brown rice","4 stalks celery with leaves, chopped","4 green onions, chopped","1 large pepper, chopped","4½ C boiling water","1 (4 oz) can water chestnuts","¼ C slivered almonds","Salt, pepper, 3 T sausage fat"],
        instructions: "Mix all ingredients; place in casserole. Spread almonds on top. Cover with foil; bake at 350° for 1½ hours. Remove foil during last 20 minutes.",
      },
      {
        name: "Christi's Crock Pot Macaroni & Cheese",
        ingredients: ["8 oz macaroni, cooked and drained","1 stick butter, melted","3–3½ C grated sharp and mild cheddar (reserve ½ C)","1¼ C milk","1 large can evaporated milk","2 eggs, beaten","Salt and pepper"],
        instructions: "Grease crock pot. Mix all ingredients except reserved cheese. Sprinkle reserved cheese on top. Cook 3–4 hours on low without lifting the lid.",
      },
      {
        name: "Christmas Breakfast Casserole",
        ingredients: ["8 slices white bread, crust removed","Soft margarine","1 lb cubed ham or fried sausage","8 slices American cheese","2½ C milk","6 eggs","½ t salt, ½ t dry mustard","¼ C onion, ½ C bell pepper, 2 T pimento (optional)","2 C crushed cornflakes + ¼ C melted margarine (topping)"],
        instructions: "Butter bread slices; place butter-side down in 9×13\" dish. Layer with meat then cheese. Mix milk, eggs, salt, mustard, onion, peppers, and pimento; pour over layers. Top with cornflake-margarine mixture. Cover; refrigerate overnight. Bake at 325° for 50–60 minutes.",
      },
      {
        name: "Aunt Judy's Casserole",
        ingredients: ["1 pkg shell noodle pasta","1 lb ground beef","16 oz red pasta sauce","1 can peas","1 can corn","1 can sliced black olives (optional)","16 oz shredded cheddar cheese"],
        instructions: "Cook noodles as directed. Brown and season ground beef. In a crock pot, layer sauce, beef, cheese, noodles, corn, peas, and olives. Cook on high until it boils, then turn to low.",
      },
      {
        name: "Fideo Chicken",
        ingredients: ["3 chicken breasts, cubed","½ onion, minced","2 garlic cloves","Olive oil","1 can minced seasoned tomatoes","1 large can diced green chiles","Chicken broth","Tomato paste","Fideo pasta"],
        instructions: "Sauté cubed chicken with onion and garlic in olive oil for about 20 minutes. Add tomatoes, broth, and chiles; bring to a boil. Stir in tomato paste; add fideo pasta. Cover and simmer 15 minutes until pasta is done.",
      },
      {
        name: "Heart Attack Potatoes",
        ingredients: ["3 lb frozen shredded hash browns, thawed","1 can cream of chicken soup","1 can cheddar cheese soup","Butter, sour cream","Shredded chicken","Grated cheddar cheese","Bacon bits","Green onions","Crushed Cheez Its (topping)"],
        instructions: "Preheat oven to 350°. Blend potatoes with soups and melted butter. Incorporate cheese, green onions, sour cream, chicken, and seasonings. Transfer to baking pan. Top with Cheez Its and bacon bits. Bake approximately one hour until golden and bubbly. Serves ~20.",
      },
      {
        name: "Sweet Potato Soufflé",
        ingredients: ["3 C sweet potatoes, cooked and mashed","Half and half","Butter","Orange zest","Cinnamon, nutmeg, brown sugar","Egg yolks and stiffly beaten egg whites"],
        instructions: "Combine sweet potato base with half and half, butter, orange zest, spices, and egg yolks. Gently fold in stiffly beaten egg whites. Bake in a water bath at 375° for approximately 45 minutes until light golden brown. Serve immediately.",
      },
    ],
  },
  {
    category: "Breads",
    emoji: "🍞",
    recipes: [
      {
        name: "Sourdough Bread",
        ingredients: ["1½ C starter","¾ C milk","3 T sugar","1 t salt","2 T margarine","1 pkg active dry yeast","¼ C warm water","5–6 C flour"],
        instructions: "Scald milk with sugar, salt, and margarine; cool. Dissolve yeast in warm water. Mix milk, starter, and 2½ C flour; beat smooth. Add flour for stiff dough. Knead 8–10 minutes until elastic. Let rise 1 hour until doubled. Divide into 3 pieces; shape and score with knife cuts. Let rise 1 hour. Bake at 400° for about 25 minutes. Makes 3 loaves.",
      },
      {
        name: "Linda's Angel Biscuits",
        ingredients: ["2 pkgs yeast","½ C warm water","5½ C self-rising flour","1 t soda","¼ C sugar","1 C vegetable shortening","2 C buttermilk"],
        instructions: "Dissolve yeast in warm water. Sift flour with soda; sprinkle sugar over mixture. Cut in shortening. Add yeast and buttermilk. Knead lightly on floured board. Roll and cut. Bake at 350° until brown, about 15–20 minutes. Makes 3–4 dozen.",
      },
      {
        name: "Mrs. Ledbetter's Monkey Bread",
        ingredients: ["6 C flour","2 C oatmeal","1–1½ C mashed potatoes","2 sticks margarine","1 C warm milk","½ C warm water","2 pkgs yeast","¼ C sugar","2 eggs","1 C pecans","1 C sugar + ¼ C cinnamon (filling)","Powdered sugar icing"],
        instructions: "Warm milk with sugar and margarine. Add yeast to warm water; combine with dry ingredients. Add eggs; knead. Rise 1 hour. Roll out; baste with margarine; sprinkle cinnamon-sugar and pecans. Roll up; slice ¼\" thick; flatten on sheets. Bake at 400° for 20 minutes. Ice while hot.",
      },
      {
        name: "Linda's Carolina Cornbread",
        ingredients: ["6 C crumbled cornbread","4 C crumbled loaf bread","1 C chopped celery","¾ C chopped onion","2 t salt, ⅛ t pepper, ½–1 t sage","3 eggs, beaten","2–2½ C turkey or chicken broth"],
        instructions: "Mix breads. Sauté celery and onion in butter; add to bread. Mix in salt, pepper, sage, eggs, and enough broth for moistness. Spoon into 9×13\" pan. Bake at 400° for 30–45 minutes or until browned. Serves 12.",
      },
      {
        name: "Butterhorn Rolls",
        ingredients: ["Yeast, warm water","Sugar, butter, salt, milk","Flour, eggs"],
        instructions: "Soften yeast in warm water. Combine sugar, butter, salt, and milk; cool to lukewarm. Incorporate flour and yeast mixture with eggs. Knead 5–8 minutes until smooth and elastic. Rise ~1½ hours. Shape into triangles; roll into horn shapes; second rise ~2 hours. Bake at 400° for 10–12 minutes until golden brown. Makes 24 rolls.",
      },
      {
        name: "Mayonnaise Muffins",
        ingredients: ["3 C sifted flour","2 C milk","1 C mayonnaise"],
        instructions: "Mix all together; pour into paper-lined or greased muffin tins. Bake at 350° until brown on top. Makes 18–24 muffins.",
      },
      {
        name: "Beer Bread",
        ingredients: ["1 can cold beer","2½ C self-rising flour"],
        instructions: "Stir ingredients until wet; pour into greased 3×5×9\" bread pan. Bake until done.",
      },
    ],
  },
  {
    category: "Meats",
    emoji: "🍗",
    recipes: [
      {
        name: "Koji's Favorite Chicken Wings",
        ingredients: ["20 chicken wings, breaded (cornstarch, ginger, garlic powder)","— Sauce —","¾ C chicken broth","½ C rice vinegar","¼ C soy sauce","½ C sugar","¼ C ketchup"],
        instructions: "Mix sauce ingredients. Fry breaded wings until brown, turning once. Transfer to baking dish; cover with sauce. Bake at 350° for one hour.",
      },
      {
        name: "Abba Eban Chicken",
        ingredients: ["2 broilers/fryers, cut up","1 C vegetable oil","½ C lemon juice","1 T salt","1 t paprika","2 t basil","2 t onion powder","½ t garlic powder","½ t thyme"],
        instructions: "Combine oil, lemon juice, and seasonings. Marinate chicken 6–8 hours or overnight. Bake at 325° for approximately one hour until done. Serve with rice.",
      },
      {
        name: "Tarragon Chicken",
        ingredients: ["2 chicken breasts, halved","2 t tarragon","2 t oregano","1½ T lemon juice (or 2 T tarragon vinegar)"],
        instructions: "Place chicken skin-side down in casserole; sprinkle with seasonings. Cover; bake at 350° for one hour.",
      },
      {
        name: "Priss's Marinated Pork Loin",
        ingredients: ["2 lbs pork loin, cut","¼ C soy sauce","¼ C sugar","2 t hoisin sauce","1 t ginger","1 t MSG","2 garlic cloves, crushed"],
        instructions: "Marinate pork at least 4 hours. Bake at 350° for one hour, turning once. Serve with pan juices over rice.",
      },
      {
        name: "Curried Chicken Salad",
        ingredients: ["2 C cooked rice","2 C cooked diced chicken","1 C diced celery","⅓ C green onions","1½ C peas","2 T diced pimento","1¼ C mayonnaise","1½ T curry powder","1½ T lemon juice","1 t salt, ¼ t pepper"],
        instructions: "Combine mayo and seasonings. Mix rice, chicken, vegetables, and pimento; add dressing. Chill 2 hours. Serves 6.",
      },
      {
        name: "Annie's Spaghetti Sauce",
        ingredients: ["2 lbs ground beef","2 onions, chopped","1 large pepper, diced","2 garlic cloves, minced","1 medium can crushed tomatoes","2 cans sliced mushrooms","1 can tomato paste","1 (32 oz) jar Ragu","Seasoning packet"],
        instructions: "Brown beef; drain (save 3 T grease). Sauté garlic, onions, and peppers in drippings; add beef and seasonings. Mix in tomatoes, Ragu, paste, and 2 C water. Simmer one hour.",
      },
      {
        name: "Lasagna Made Easy",
        note: "Use Annie's Spaghetti Sauce (see above)",
        ingredients: ["Annie's Spaghetti Sauce","Uncooked lasagna noodles","1½ lbs cottage cheese","1½ C mozzarella","1½ C Romano"],
        instructions: "Layer sauce, noodles, cottage cheese, sauce, and cheese in a 9×13\" dish. After two layers, sprinkle cheese. Cover with foil; bake at 350° for 45 minutes. Uncover; bake 15 minutes more.",
      },
    ],
  },
  {
    category: "Soups",
    emoji: "🍲",
    recipes: [
      {
        name: "French Onion Soup",
        ingredients: ["3 large onions, sliced","2 garlic cloves, minced","3 T butter","½ C white wine","1 can beef consommé","1 can beef broth","4 slices seasoned French bread","Mozzarella and Parmesan/Romano cheese"],
        instructions: "Sauté garlic in butter; add onions. Cover until golden. Add wine; cook uncovered until reduced by half. Add soups; bring to boil. Toast buttered bread at 300° for 15–20 minutes. Ladle soup into oven-safe bowls; top with bread and cheese. Broil until browned.",
      },
      {
        name: "Pookie's Christmas Mushroom Soup",
        ingredients: ["4 medium onions","2 lbs mushrooms","2 garlic cloves","¼ C butter","2 C whipping cream","2 C beef bouillon","1 C slivered almonds","1 C Parmesan","Fresh parsley"],
        instructions: "Sauté onions and garlic in butter until tender. Add mushrooms; cook 10 minutes. Gradually add cream and bouillon; heat thoroughly without boiling. Garnish each serving with almonds, Parmesan, and parsley.",
      },
      {
        name: "Hamburger/Vegetable Soup",
        ingredients: ["1 lb hamburger","1 pkg onion soup mix","1 (46 oz) can V-8 juice","1–2 pkgs mixed vegetables"],
        instructions: "Combine all ingredients; bring to a slow boil. Serve with grilled cheese.",
      },
      {
        name: "Navy Bean Soup",
        ingredients: ["1 lb navy beans","1 lb smoked ham hocks","10 C cold water","1 medium each: onion, carrot, potato","3 T butter"],
        instructions: "Boil beans 2 minutes; soak 1 hour; drain. Simmer ham hocks 2 hours; shred meat. Sauté onion and carrot in butter 5 minutes. Combine all; boil, skim, season, cook until tender. Or: soak beans overnight, add everything to a crock pot.",
      },
      {
        name: "Peach Cobbler",
        note: "As served at the Williams Family Reunion 2001",
        ingredients: ["At least 5 medium to large yellow peaches","Sugar (to taste)","2 sticks butter","1 t lemon juice","1 T cinnamon","1 box Duncan Hines Real Butter Cake Mix","Vanilla ice cream, to serve"],
        instructions: "Peel and slice peaches; cover generously with sugar. Let sit until juices release. Simmer peaches with lemon juice, cinnamon, and 1 stick butter for 15–20 minutes. Pour into 9×13\" pan. Sprinkle dry cake mix evenly over peaches; crush any chunks. Drizzle melted second stick of butter over top. Bake at 350° for 30–60 minutes until browned. Serve à la mode.",
      },
    ],
  },
];
