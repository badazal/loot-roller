// roller5.js
import { users } from "./data/users.js";
import { companions } from "./data/companions.js";
import { equipment } from "./data/equipment.js";
import { traits } from "./data/traits.js";
import { consumables } from "./data/consumables.js";
import { rollBaseLoot } from "./baseRoll.js";
import { applyPerks } from "./perks2.js";

// Activity item pools
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

// Helper
function rollChance(chance) { return Math.random() < chance; }

// ----------------------------
// LOGIN LOGIC
// ----------------------------
let currentUser = null;
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
const activities = ["fishing", "hunting", "expeditions", "foraging", "caving", "crusades", "conquests"];
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

  chunks.forEach((chunk, i) => {
    chunk.forEach(item => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item.name;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${item.name} `));
      [col1, col2, col3][i].appendChild(label);
    });
  });

  wrap.appendChild(col1);
  wrap.appendChild(col2);
  wrap.appendChild(col3);
  container.appendChild(wrap);
}

// ----------------------------
// ROLL BUTTON
// ----------------------------
document.getElementById("roll-button").addEventListener("click", async () => {
  const activity = document.querySelector("input[name='activity']:checked")?.value;
  if (!activity) { alert("Select an activity first."); return; }

  const selectedCompanions = companions.filter(c => document.querySelector(`#companions-checkboxes input[value="${c.name}"]`)?.checked);
  const selectedEquipment = equipment.filter(e => document.querySelector(`#equipment-checkboxes input[value="${e.name}"]`)?.checked);
  const selectedTraits = traits.filter(t => document.querySelector(`#traits-checkboxes input[value="${t.name}"]`)?.checked);
  const selectedConsumables = consumables.filter(c => document.querySelector(`#consumables-checkboxes input[value="${c.name}"]`)?.checked);

  const allEntities = [
    ...selectedCompanions.map(c => ({ ...c, category: "companion", status: "off", originalChance: c.chance, chance: c.chance })),
    ...selectedEquipment.map(e => ({ ...e, category: "equipment", status: "off", originalChance: e.chance, chance: e.chance })),
    ...selectedTraits.map(t => ({ ...t, category: "trait", status: "off", originalChance: t.chance, chance: t.chance })),
    ...selectedConsumables.map(c => ({ ...c, category: "consumable", status: "off", originalChance: c.chance, chance: c.chance }))
  ];

  const rollResults = document.getElementById("roll-results");

  // ----------------------
  // 1. Original entity rolling
  // ----------------------
  let companionBonus = 0;
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  if (lavinia) { lavinia.status = "on"; companionBonus = lavinia.perks?.companionBonus || 0; }

  allEntities.forEach(e => {
    let finalChance = e.chance || 0;
    if (e.category === "companion" && companionBonus > 0) { finalChance += companionBonus; e.note = "(Lavinia's Luck applied!)"; }
    e.finalChance = finalChance;
    e.status = rollChance(finalChance) ? "on" : "off";
  });

  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (e.category === "trait" && e.status === "off") {
        const reroll = rollChance(e.chance || 0);
        e.status = reroll ? "on" : "off";
        e.note = e.note ? `${e.note} (Twist of Fate reroll → ${e.status})` : `(Twist of Fate reroll → ${e.status})`;
      }
    });
  }

  // ----------------------
  // 2. Failure check
  // ----------------------
  let baseFailureRate = 0.2;
  let adjustedFailureRate = baseFailureRate;
  allEntities.forEach(e => { if (e.status === "on" && e.perks?.reduceFailure) adjustedFailureRate -= e.perks.reduceFailure; });
  const activityFailed = Math.random() < adjustedFailureRate;
  if (activityFailed) {
    rollResults.innerHTML = `<h3>Activity Failed!</h3><p>The roll failed due to failure chance (${(adjustedFailureRate*100).toFixed(0)}%).</p>`;
    return;
  }

  // ----------------------
  // 3. Display entity statuses
  // ----------------------
  rollResults.innerHTML = `<h3>Results for ${activity}</h3>`;
  allEntities.forEach(e => {
    const oddsDisplay = e.finalChance !== undefined ? `(Odds: ${e.originalChance.toFixed(2)}${e.finalChance !== e.originalChance ? ` → ${e.finalChance.toFixed(2)}` : ""})` : "(Odds: N/A)";
    rollResults.innerHTML += `<p>${e.name} ${oddsDisplay}: ${e.status} ${e.note ? e.note : ""}</p>`;
  });

  // ----------------------
  // 4. Apply perks
  // ----------------------
  const perkResults = applyPerks(allEntities);

  // Compute total extra items
  let moreItems = 0;
  const extraItemSources = [];
  perkResults.forEach(pr => {
    pr.results.forEach(r => {
      if (typeof r === "string" && r.includes("Extra items x")) {
        const match = r.match(/Extra items x(\d+)/);
        if (match) { moreItems += parseInt(match[1]); extraItemSources.push(pr.name); }
      }
    });
  });

  // ----------------------
  // 5. Roll base loot
  // ----------------------
  const itemModule = itemModules[activity];
  let minRoll = 2;
  let maxRoll = 5;

  const minItemsEntities = allEntities.filter(e => e.status === "on" && e.perks?.minItems);
  if (minItemsEntities.length > 0) { minRoll = Math.max(...minItemsEntities.map(e => e.perks.minItems)); }

  let numItems = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
  let baseResult = rollBaseLoot({ minRoll: numItems, maxRoll: numItems, itemPools: itemModule });

  const duplicateBaseRollActive = allEntities.some(e => e.status === "on" && e.perks?.duplicateBaseRoll);

  // ----------------------
  // 6. Output base roll
  // ----------------------
  rollResults.innerHTML += `<h4>Base Roll</h4>`;
  if (!baseResult.success) {
    rollResults.innerHTML += `<p>${baseResult.message}</p>`;
  } else {
    baseResult.items.forEach(it => rollResults.innerHTML += `<p>- ${it.name}${it.rarity ? ` [${it.rarity}]` : ""}${it.amount ? ` x${it.amount}` : ""}</p>`);

    if (duplicateBaseRollActive) {
      rollResults.innerHTML += `<p><em>Duplicated base roll due to perks:</em></p>`;
      baseResult.items.forEach(it => {
        const amount = it.amount ? it.amount * 2 : 2;
        rollResults.innerHTML += `<p>- ${it.name}${it.rarity ? ` [${it.rarity}]` : ""} x${amount}</p>`;
      });
    }

    if (moreItems > 0) {
      rollResults.innerHTML += `<h4>Additional Items (${moreItems}) from perks: ${extraItemSources.join(", ")}</h4>`;
      const extraRoll = rollBaseLoot({ minRoll: moreItems, maxRoll: moreItems, itemPools: itemModule });
      if (extraRoll.success) {
        extraRoll.items.forEach(it => rollResults.innerHTML += `<p>- ${it.name}${it.rarity ? ` [${it.rarity}]` : ""}${it.amount ? ` x${it.amount}` : ""}</p>`);
      } else {
        rollResults.innerHTML += `<p>${extraRoll.message}</p>`;
      }
    }
  }

  // ----------------------
  // 7. Output perk mini-table results
  // ----------------------
  perkResults.forEach(pr => {
    const filtered = pr.results.filter(r => typeof r === "string" && !r.includes("Extra items") && !r.includes("Duplicate base roll"));
    if (filtered.length > 0) {
      rollResults.innerHTML += `<p><strong>${pr.name} Perks:</strong> ${filtered.join(", ")}</p>`;
    }
  });
});
