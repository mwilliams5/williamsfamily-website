"use client";

export interface PrintableRecipe {
  name: string;
  note?: string;
  ingredients: string[];
  instructions: string;
}

export default function PrintRecipeButton({ recipe }: { recipe: PrintableRecipe }) {
  const handlePrint = () => {
    const win = window.open("", "_blank", "width=700,height=900");
    if (!win) return;

    const ingredientRows = recipe.ingredients
      .map((ing) => {
        if (ing.startsWith("—") && ing.endsWith("—")) {
          return `<tr><td colspan="1" style="padding:8px 0 2px;font-weight:bold;font-style:italic;color:#7b2d00;font-size:12px;">${ing}</td></tr>`;
        }
        return `<tr><td style="padding:4px 0 4px 12px;font-size:14px;border-bottom:1px solid #f0e8e0;">• ${ing}</td></tr>`;
      })
      .join("");

    win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${recipe.name} — Williams Family Cook Book</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@400;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Open Sans', sans-serif; background: #fff; color: #333; padding: 32px; max-width: 620px; margin: 0 auto; }
    .header { border-bottom: 3px solid #7b2d00; padding-bottom: 12px; margin-bottom: 20px; }
    .site-name { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #999; }
    h1 { font-family: 'Lora', serif; font-size: 26px; color: #2c3e50; margin: 6px 0 4px; }
    .note { font-style: italic; color: #888; font-size: 13px; margin-bottom: 0; }
    .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1.5px; color: #c0392b; margin: 20px 0 8px; }
    table { width: 100%; border-collapse: collapse; }
    .instructions { font-size: 14px; line-height: 1.8; color: #444; }
    .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #eee;
      font-size: 11px; color: #bbb; text-align: center; }
    @media print {
      body { padding: 16px; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="site-name">The Williams Family Cook Book · williamsfamily.org</div>
    <h1>${recipe.name}</h1>
    ${recipe.note ? `<p class="note">${recipe.note}</p>` : ""}
  </div>

  <div class="section-label">Ingredients</div>
  <table>${ingredientRows}</table>

  <div class="section-label">Instructions</div>
  <p class="instructions">${recipe.instructions}</p>

  <div class="footer">The Williams Family · williamsfamily.org</div>

  <p class="no-print" style="text-align:center;margin-top:24px;">
    <button onclick="window.print()" style="background:#7b2d00;color:#fff;border:none;padding:10px 24px;border-radius:6px;font-size:14px;cursor:pointer;">
      🖨️ Print
    </button>
    &nbsp;
    <button onclick="window.close()" style="background:#eee;border:none;padding:10px 24px;border-radius:6px;font-size:14px;cursor:pointer;">
      Close
    </button>
  </p>

  <script>
    window.onload = () => { window.print(); };
  </script>
</body>
</html>`);
    win.document.close();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-800 border border-primary-200 hover:border-primary-400 rounded-lg px-3 py-1.5 transition-all hover:bg-primary-50"
      title={`Print recipe card for ${recipe.name}`}
    >
      🖨️ Print Recipe
    </button>
  );
}
