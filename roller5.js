// ----------------------------
// IMPORT DATA FILES
// ----------------------------
import { users } from "./data/users.js";
import { companions } from "./data/companions.js";
import { equipment } from "./data/equipment.js";
import { traits } from "./data/traits.js";
import { consumables } from "./data/consumables.js";
import { rollBaseLoot } from "./baseRoll.js";

// Hard-coded activity → items.js imports
import * as FishingItems from "./data/fishing/items.js";
import * as HuntingItems from "./data/hunting/items.js";
import * as ExpeditionsItems from "./data/expeditions/items.js";
import * as ForagingItems from "./data/foraging/items.js";
import * as CavingItems from "./data/caving/items.js";
import * as CrusadesItems from "./data/crusades/items.js";
import * as ConquestsItems from "./data/conquests/items.js";

const itemModules = {
  fishing: FishingItems,
  hunting: HuntingItems,
  expeditions: ExpeditionsItems,
  foraging: ForagingItems,
  caving: CavingItems,
  crusades: CrusadesItems,
  conquests: ConquestsItems
};


// ----------------------------
// GLOBALS
// ----------------------------
let currentUser = null;
const activities = ["fishing", "hunting", "expeditions", "foraging", "caving", "crusades", "conquests"];

// ----------------------------
// LOGIN LOGIC
// ----------------------------
document.getElementById("login-button").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const passcode = document.getElementById("passcode").value;

  const user = users.find(u => u.email === email && u.passcode === passcode);
  if (user) {
    currentUser = user;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("roller-section").style.display = "block";
    initActivitySelection();
  } else {
    document.getElementById("login-error").innerText = "Invalid login.";
  }
});

// ----------------------------
// ACTIVITY SELECTION
// ----------------------------
function initActivitySelection() {
  const container = document.getElementById("activity-selection");
  container.innerHTML = "";

  activities.forEach(act => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "activity";
    radio.value = act;
    radio.addEventListener("change", () => loadActivityOptions(act));
    label.appendChild(radio);
    label.appendChild(document.createTextNode(act));
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });
}

// ----------------------------
// FILTER OPTIONS BY ACTIVITY
// ----------------------------
function loadActivityOptions(activity) {
  const filteredCompanions = companions.filter(c => c.activities.includes(activity) || c.activities.includes("all"));
  const filteredEquipment = equipment.filter(e => e.activities.includes(activity) || e.activities.includes("all"));
  const filteredTraits = traits.filter(t => t.activities.includes(activity) || t.activities.includes("all"));
  const filteredConsumables = consumables.filter(c => c.activities.includes(activity) || c.activities.includes("all"));

  populateCheckboxes("companions-checkboxes", filteredCompanions);
  populateCheckboxes("equipment-checkboxes", filteredEquipment);
  populateCheckboxes("traits-checkboxes", filteredTraits);
  populateCheckboxes("consumables-checkboxes", filteredConsumables);
}

// ----------------------------
// POPULATE CHECKBOXES
// ----------------------------
function populateCheckboxes(containerId, items) {
  const container = document.getElementById(containerId);
  const header = container.querySelector("h4");
  container.innerHTML = "";
  if (header) container.appendChild(header);

  const wrap = document.createElement("div");
  wrap.className = "options-three-col";

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");
  col1.className = col2.className = col3.className = "options-col";

  const n = items.length;
  const size1 = Math.ceil(n / 3);
  const remaining = n - size1;
  const size2 = Math.ceil(remaining / 2);

  const chunks = [
    items.slice(0, size1),
    items.slice(size1, size1 + size2),
    items.slice(size1 + size2)
  ];
  const cols = [col1, col2, col3];

  chunks.forEach((chunk, i) => {
    chunk.forEach(item => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item.name;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${item.name} `));
      cols[i].appendChild(label);
    });
  });

  wrap.appendChild(col1);
  wrap.appendChild(col2);
  wrap.appendChild(col3);
  container.appendChild(wrap);
}

// ----------------------------
// HELPER: roll chance
// ----------------------------
function rollChance(chance) {
  return Math.random() < chance; // chance should be 0–1
}

// ----------------------------
// ROLL BUTTON
// ----------------------------
document.getElementById("roll-button").addEventListener("click", async () => {
  const activity = document.querySelector("input[name='activity']:checked")?.value;
  if (!activity) {
    alert("Please select an activity first.");
    return;
  }

  // Collect selected checkboxes
  const selectedCompanions = companions.filter(c =>
    document.querySelector(`#companions-checkboxes input[value="${c.name}"]`)?.checked
  );
  const selectedEquipment = equipment.filter(e =>
    document.querySelector(`#equipment-checkboxes input[value="${e.name}"]`)?.checked
  );
  const selectedTraits = traits.filter(t =>
    document.querySelector(`#traits-checkboxes input[value="${t.name}"]`)?.checked
  );
  const selectedConsumables = consumables.filter(c =>
    document.querySelector(`#consumables-checkboxes input[value="${c.name}"]`)?.checked
  );

  // ----------------------
  // 1. Build master list
  // ----------------------
  const allEntities = [
    ...selectedCompanions.map(c => ({ ...c, category: "companion", status: "off", originalChance: c.chance, chance: c.chance })),
    ...selectedEquipment.map(e => ({ ...e, category: "equipment", status: "off", originalChance: e.chance, chance: e.chance })),
    ...selectedTraits.map(t => ({ ...t, category: "trait", status: "off", originalChance: t.chance, chance: t.chance })),
    ...selectedConsumables.map(c => ({ ...c, category: "consumable", status: "off", originalChance: c.chance, chance: c.chance }))
  ];

  // ----------------------
  // 2. Handle Lavinia's Luck
  // ----------------------
  let companionBonus = 0;
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  if (lavinia) {
    lavinia.status = "on";
    companionBonus = lavinia.perks?.companionBonus || 0;
  }

  // ----------------------
  // 3. Roll everything else
  // ----------------------
  allEntities.forEach(e => {
    let finalChance = e.chance || 0;
    if (e.category === "companion" && companionBonus > 0) {
      finalChance += companionBonus;
      e.note = `(Lavinia's Luck applied!)`;
    }
    e.finalChance = finalChance;
    e.status = rollChance(finalChance) ? "on" : "off";
  });

  // ----------------------
  // 4. Twist of Fate rerolls
  // ----------------------
  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (e.category === "trait" && e.status === "off") {
        const reroll = rollChance(e.chance || 0);
        if (reroll) {
          e.status = "on";
          e.note = e.note
            ? `${e.note} (Twist of Fate reroll → On)`
            : "(Twist of Fate reroll → On)";
        } else {
          e.note = e.note
            ? `${e.note} (Twist of Fate reroll → still Off)`
            : "(Twist of Fate reroll → still Off)";
        }
      }
    });
  }

  // ----------------------
  // 5. Display entity results
  // ----------------------
  const rollResults = document.getElementById("roll-results");
  rollResults.innerHTML = `<h3>Results for ${activity}</h3>`;
  allEntities.forEach(e => {
    const oddsDisplay = e.finalChance !== undefined
      ? `(Odds: ${e.originalChance.toFixed(2)}${e.finalChance !== e.originalChance ? ` → ${e.finalChance.toFixed(2)}` : ""})`
      : "(Odds: N/A)";
    rollResults.innerHTML += `<p>${e.name} ${oddsDisplay}: ${e.status} ${e.note ? e.note : ""}</p>`;
  });

// ----------------------
// 6. Base roll for activity items
// ----------------------
try {
  const itemModule = itemModules[activity];

  // For now, hardcoded values — in the future, perks.js will modify these
  const failureRate = 0.2; // 20% fail
  const minRoll = 2;
  const maxRoll = 5;

  const baseResult = rollBaseLoot({
    failureRate,
    minRoll,
    maxRoll,
    itemPools: itemModule
  });

  rollResults.innerHTML += `<h4>Base Roll</h4>`;
  if (!baseResult.success) {
    rollResults.innerHTML += `<p>${baseResult.message}</p>`;
  } else {
    rollResults.innerHTML += `<p>${baseResult.message}</p>`;
    baseResult.items.forEach(it => {
      rollResults.innerHTML += `<p>- ${it.name} [${it.rarity}]</p>`;
    });
  }
} catch (err) {
  rollResults.innerHTML += `<p style="color:red;">Error loading items for ${activity}: ${err.message}</p>`;
}
});
