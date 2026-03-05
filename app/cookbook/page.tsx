import type { Metadata } from "next";
import { cookbook } from "@/lib/cookbookData";
import PrintRecipeButton from "@/components/PrintRecipeButton";
import RandomRecipePicker from "@/components/RandomRecipePicker";

export const metadata: Metadata = {
  title: "Williams Cook Book",
  description: "The Williams Family Cook Book — cherished recipes passed down through generations.",
};

export default function CookbookPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="section-heading">Williams Cook Book</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          A collection of cherished recipes from Williams family members across
          the generations. From holiday favorites to reunion classics — enjoy!
        </p>
        {/* Random Recipe Picker */}
        <RandomRecipePicker />
      </div>

      {/* Recipe sections */}
      {cookbook.map((section) => (
        <section key={section.category} className="mb-14">
          {/* Category heading */}
          <div className="flex items-center gap-3 mb-6 border-b-2 border-primary-100 pb-3">
            <span className="text-3xl">{section.emoji}</span>
            <h2 className="text-2xl font-serif font-bold text-primary-800">
              {section.category}
            </h2>
            <span className="ml-auto text-sm text-gray-400 font-medium">
              {section.recipes.length} recipes
            </span>
          </div>

          {/* Recipes as expandable details */}
          <div className="space-y-3">
            {section.recipes.map((recipe) => (
              <details
                key={recipe.name}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors"
              >
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-primary-400 font-bold text-lg group-open:rotate-90 transition-transform duration-200 inline-block">
                      ›
                    </span>
                    <div>
                      <span className="font-serif font-bold text-gray-800 text-base">
                        {recipe.name}
                      </span>
                      {recipe.note && (
                        <span className="ml-2 text-xs italic text-gray-400">
                          — {recipe.note}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0 hidden sm:block">
                    {recipe.ingredients.filter(
                      (i) => !(i.startsWith("—") && i.endsWith("—"))
                    ).length}{" "}
                    ingredients
                  </span>
                </summary>

                {/* Expanded recipe content */}
                <div className="px-5 pb-6 pt-2 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {/* Ingredients */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-3">
                        Ingredients
                      </h3>
                      <ul className="space-y-1.5">
                        {recipe.ingredients.map((ing, i) =>
                          ing.startsWith("—") && ing.endsWith("—") ? (
                            <li
                              key={i}
                              className="text-xs font-bold italic text-gray-500 pt-2"
                            >
                              {ing}
                            </li>
                          ) : (
                            <li
                              key={i}
                              className="flex gap-2 text-sm text-gray-700"
                            >
                              <span className="text-warm-400 shrink-0 mt-0.5">•</span>
                              {ing}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-3">
                        Instructions
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {recipe.instructions}
                      </p>
                    </div>
                  </div>

                  {/* Print button */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <PrintRecipeButton recipe={recipe} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <p className="text-xs text-gray-400 text-center mt-4">
        Original cookbook last updated: January 30, 2000
      </p>
    </div>
  );
}
