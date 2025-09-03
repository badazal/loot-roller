// roller.js

import { companions } from "./companions.js";
import { equipment } from "./equipment.js";
import { traits } from "./traits.js";
// consumables can be added later
import { companionTables, traitTables } from "./lists.js";

// ----------------------
// Utility Functions
// ----------------------
function getRandom() {
  return Math.random();
}

function rollChance(chance) {
  return getRandom() <= chance;
}

// ----------------------
// Roller Logic
// ----------------------
export function rollActivity(activity) {
  // ----------------------
  // 1. Build a single master list of all entities
  // ----------------------
  const allEntities = [
    ...companions,
    ...equipment,
    ...traits,
    // ...consumables
  ].map(entry => ({
    ...entry,
    status: "off" // initialize all as off
  }));

  // ----------------------
  // 2. Check traits for special effects in the same list
  // ----------------------
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  let companionBonus = 0;
  if (lavinia && rollChance(lavinia.chance)) {
    lavinia.status = "on";
    companionBonus = lavinia.perks.companionBonus || 0;
  }

  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");

  // ----------------------
  // 3. Roll all entities
  // ----------------------
  allEntities.forEach(e => {
    if (e.status === "off") {
      let chance = e.chance || 0;

      // Apply Lavinia's Luck bonus if this is a companion
      if (companions.includes(e)) chance += companionBonus;

      e.status = rollChance(chance) ? "on" : "off";
    }
  });

  // ----------------------
  // 4. Apply Twist of Fate: reroll traits that were off
  // ----------------------
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (traits.includes(e) && e.status === "off") {
        e.status = rollChance(e.chance) ? "on" : "off";
      }
    });
  }

  // ----------------------
  // 5. Display results
  // ----------------------
  console.log(`Activity: ${activity}`);
  allEntities.forEach(e => console.log(`${e.name}: ${e.status}`));

  return allEntities;
}
