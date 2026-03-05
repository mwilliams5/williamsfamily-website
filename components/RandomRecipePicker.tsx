"use client";

import { useState, useCallback } from "react";
import { cookbook } from "@/lib/cookbookData";
import PrintRecipeButton from "./PrintRecipeButton";

// Flatten all recipes into one list
const allRecipes = cookbook.flatMap((section) =>
  section.recipes.map((r) => ({ ...r, category: section.category, emoji: section.emoji }))
);

export default function RandomRecipePicker() {
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState(allRecipes[0]);

  const pickRandom = useCallback(() => {
    const idx = Math.floor(Math.random() * allRecipes.length);
    setRecipe(allRecipes[idx]);
    setOpen(true);
  }, []);

  const pickAnother = useCallback(() => {
    setRecipe((prev) => {
      let next;
      do { next = allRecipes[Math.floor(Math.random() * allRecipes.length)]; }
      while (next.name === prev.name);
      return next;
    });
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={pickRandom}
        className="inline-flex items-center gap-2 bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
      >
        🎲 What Should I Cook Today?
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-primary-800 text-white p-5 rounded-t-2xl">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-1">
                    {recipe.emoji} {recipe.category}
                  </p>
                  <h2 className="text-xl font-serif font-bold leading-tight">
                    {recipe.name}
                  </h2>
                  {recipe.note && (
                    <p className="text-primary-200 text-xs italic mt-1">{recipe.note}</p>
                  )}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-primary-300 hover:text-white text-2xl leading-none shrink-0 mt-0.5"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Ingredients */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-2">
                  Ingredients
                </h3>
                <ul className="space-y-1">
                  {recipe.ingredients.map((ing, i) =>
                    ing.startsWith("—") && ing.endsWith("—") ? (
                      <li key={i} className="text-xs font-bold italic text-gray-500 pt-2">
                        {ing}
                      </li>
                    ) : (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-warm-500 shrink-0">•</span>
                        {ing}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-2">
                  Instructions
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{recipe.instructions}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-4 flex items-center justify-between gap-3 flex-wrap">
              <PrintRecipeButton recipe={recipe} />
              <div className="flex gap-2">
                <button
                  onClick={pickAnother}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-800 border border-primary-200 hover:border-primary-400 px-4 py-2 rounded-lg transition-all hover:bg-primary-50"
                >
                  🎲 Pick Another
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 border border-gray-200 px-4 py-2 rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
