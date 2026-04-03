"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Desserts, Sweets & Cookies",
  "Appetizers & Dips",
  "Vegetables & Casseroles",
  "Breads",
  "Meats",
  "Soups",
];

type Status = "idle" | "loading" | "success" | "error";

export default function SubmitRecipePage() {
  const [contributor, setContributor] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/recipes/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contributor: contributor.trim(),
        recipe_name: recipeName.trim(),
        category,
        ingredients: ingredients.trim(),
        instructions: instructions.trim(),
      }),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">📖</div>
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-3">Recipe Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Thanks for sharing your recipe with the family. It&apos;ll be reviewed and added to the cookbook soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/cookbook" className="btn-primary inline-block">← Back to Cookbook</Link>
          <button
            onClick={() => {
              setContributor(""); setRecipeName(""); setCategory(CATEGORIES[0]);
              setIngredients(""); setInstructions(""); setStatus("idle");
            }}
            className="inline-block border border-primary-300 hover:border-primary-500 text-primary-700 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-primary-50"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">📖</div>
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">Cook Book</p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-3">Submit a Recipe</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Have a family recipe to share? Submit it here and it will be reviewed for the{" "}
          <Link href="/cookbook" className="text-primary-600 hover:text-primary-800 underline underline-offset-2">
            Williams Cook Book
          </Link>.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contributor" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contributor"
              type="text"
              required
              value={contributor}
              onChange={(e) => setContributor(e.target.value)}
              placeholder="e.g. Aunt Linda, Grandma Peggy"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="recipe_name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Recipe Name <span className="text-red-500">*</span>
            </label>
            <input
              id="recipe_name"
              type="text"
              required
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="e.g. Mom's Apple Pie"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Ingredients <span className="text-red-500">*</span>
            </label>
            <textarea
              id="ingredients"
              required
              rows={7}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder={"1 C flour\n2 eggs\n1/2 C butter, softened\n..."}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none font-mono"
            />
            <p className="text-xs text-gray-400 mt-1">One ingredient per line</p>
          </div>

          <div>
            <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Instructions <span className="text-red-500">*</span>
            </label>
            <textarea
              id="instructions"
              required
              rows={7}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Mix flour and butter. Add eggs one at a time…"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              ⚠️ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary-800 hover:bg-primary-900 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-md"
          >
            {status === "loading" ? "Submitting…" : "📖 Submit Recipe"}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <Link href="/cookbook" className="text-sm text-gray-500 hover:text-primary-700 transition-colors">
          ← Back to Cook Book
        </Link>
      </div>
    </div>
  );
}
