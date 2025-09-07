// perks.js
import { companionTables, traitTables } from "./data/lists.js";
import { rollBaseLoot } from "./baseRoll.js";

// ----------------------------
// HELPER FUNCTIONS
// ----------------------------

// Roll a weighted table
function rollWeightedTable(table) {
  const rand = Math.random();
  let sum = 0;
  for (const item of table.items) {
    sum += item.chance;
    if (rand <= sum) {
      const result = { name: item.name };
      if (item.min !== undefined && item.max !== undefined) {
        result.amount = Math.floor(Math.random() * (item.max - item.min + 1)) + item.min;
      } else if (item.amount !== undefined) {
        result.amount = item.amount;
      }
      return result;
    }
  }
  return null;
}

// Roll from a simple list
function rollSimpleList(list, number = 1) {
  const results = [];
  for (let i = 0; i < number; i++) {
    const idx = Math.floor(Math.random() * list.length);
    results.push({ name: list[idx] });
  }
  return results;
}

// ----------------------------
// APPLY PERKS FUNCTION
// ----------------------------
export function applyPerks(entities) {
  const perkResults = [];

  entities.forEach(e => {
    if (e.status !== "on") return; // Only apply perks for "on" entities
    const perks = e.perks || {};
    const results = [];

    // --- MINI-TABLE ROLLS ---
    if (perks.addSpecialItems) {
      const tableName = perks.addSpecialItems.table;
      let number = perks.addSpecialItems.number || 1;
      if (typeof number === "string" && number.includes("-")) {
        number = parseInt(number.split("-")[0]); // pick min for simplicity
      }

      let table = companionTables[tableName] || traitTables[tableName];
      if (!table) {
        results.push(`Error: Table ${tableName} not found`);
      } else if (Array.isArray(table)) {
        results.push(...rollSimpleList(table, number));
      } else if (table.type === "weighted") {
        for (let i = 0; i < number; i++) {
          results.push(rollWeightedTable(table));
        }
      }
    }

    // --- EXTRA ITEMS ---
    if (perks.extraItems) {
      const extraNumber = typeof perks.extraItems === "string"
        ? parseInt(perks.extraItems.split("-")[0])
        : perks.extraItems;
      results.push(`Extra items x${extraNumber}`);
    }

    // --- DUPLICATE BASE ROLL FLAG ---
    if (perks.duplicateBaseRoll) {
      results.push("Duplicate base roll active");
    }

    // --- MIN ITEMS ---
    if (perks.minItems) {
      results.push(`Minimum items guaranteed: ${perks.minItems}`);
    }

    // --- OTHER PERKS ---
    if (perks.preventsInjury) results.push("Prevents injury");
    if (perks.removeJunk) results.push("Removes junk items");
    if (perks.rerollTraitChance) results.push("Twist of Fate reroll applied");
    if (perks.supplyCrate) results.push("Grants a supply crate");
    if (perks.treasureChest) results.push("Grants a treasure chest");
    if (perks.companionBonus) results.push(`Companion bonus: ${(perks.companionBonus * 100).toFixed(0)}%`);
    if (perks.reduceFailure !== undefined) results.push(`Reduces failure chance by ${(perks.reduceFailure * 100).toFixed(0)}%`);

    if (results.length > 0) {
      perkResults.push({ name: e.name, results });
    }
  });

  return perkResults;
}
