// ----------------------------
// IMPORT DATA FILES
// ----------------------------
import { companions } from "./data/companions.js";
import { equipment } from "./data/equipment.js";
import { traits } from "./data/traits.js";
import { consumables } from "./data/consumables.js";

// ----------------------------
// UTILITY
// ----------------------------
function rollChance(chance = 0) {
  return Math.random() < chance;
}

// ----------------------------
// GET SELECTED CHECKBOX ITEMS
// ----------------------------
function getSelectedCheckboxes(containerId, allItems) {
  const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
  const selectedNames = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
  return allItems.filter(item => selectedNames.includes(item.name));
}

// ----------------------------
// ROLL ENTITIES
// ----------------------------
function rollEntities(allEntities, selectedCompanions) {
  // Step 1: Check for Lavinia's Luck
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  let companionBonus = 0;
  if (lavinia && rollChance(lavinia.chance)) {
    lavinia.status = "on";
    companionBonus = lavinia.perks?.companionBonus || 0;
  }

  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");

  // Step 2: Roll all entities
  allEntities.forEach(e => {
    e.affectedBy = [];

    if (e.status === "off") {
      let chance = e.chance || 0;

      // Apply Lavinia's Luck bonus if selected companion
      if (selectedCompanions.includes(e) && companionBonus > 0) {
        chance += companionBonus;
        e.affectedBy.push("Lavinia's Luck");
      }

      e.status = rollChance(chance) ? "on" : "off";
    }
  });

  // Step 3: Apply Twist of Fate to traits
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (traits.includes(e) && e.status === "off") {
        const original = e.status;
        e.status = rollChance(e.chance) ? "on" : "off";
        if (original === "off" && e.status === "on") {
          e.affectedBy.push("Twist of Fate");
        }
      }
    });
  }

  return allEntities;
}

// ----------------------------
// DISPLAY RESULTS
// ----------------------------
function displayResults(allEntities) {
  const container = document.getElementById("roll-results");
  container.innerHTML = "";

  allEntities.forEach(e => {
    const div = document.createElement("div");
    const affectedText = e.affectedBy.length ? ` (${e.affectedBy.join(", ")})` : "";
    div.textContent = `${e.name}: ${e.status}${affectedText}`;
    container.appendChild(div);
  });
}

// ----------------------------
// ROLL BUTTON
// ----------------------------
document.getElementById("roll-button").addEventListener("click", () => {
  // Gather selected checkboxes
  const selectedCompanions = getSelectedCheckboxes("companions-checkboxes", companions);
  const selectedEquipment = getSelectedCheckboxes("equipment-checkboxes", equipment);
  const selectedTraits = getSelectedCheckboxes("traits-checkboxes", traits);
  const selectedConsumables = getSelectedCheckboxes("consumables-checkboxes", consumables);

  // Build master list
  const allEntities = [
    ...selectedCompanions,
    ...selectedEquipment,
    ...selectedTraits,
    ...selectedConsumables
  ].map(e => ({ ...e, status: "off" }));

  // Roll
  const results = rollEntities(allEntities, selectedCompanions);

  // Display
  displayResults(results);
});
