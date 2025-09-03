// ----------------------------
// IMPORT DATA FILES
// ----------------------------
import { users } from "./data/users.js";
import { companions } from "./data/companions.js";
import { equipment } from "./data/equipment.js";
import { traits } from "./data/traits.js";
import { consumables } from "./data/consumables.js";

// ----------------------------
// GLOBALS
// ----------------------------
let currentUser = null;
const activities = ["Fishing", "Hunting", "Expeditions", "Foraging", "Caving","Crusades","Conquests"];

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
  const size3 = n - size1 - size2;

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
// UTILITY: Roll Chance
// ----------------------------
function rollChance(chance) {
  return Math.random() < chance;
}

// ----------------------------
// ROLL BUTTON
// ----------------------------
document.getElementById("roll-button").addEventListener("click", () => {
  const selectedCompanions = getSelectedEntities("companions-checkboxes", companions);
  const selectedEquipment = getSelectedEntities("equipment-checkboxes", equipment);
  const selectedTraits = getSelectedEntities("traits-checkboxes", traits);
  const selectedConsumables = getSelectedEntities("consumables-checkboxes", consumables);

  const allEntities = [
    ...selectedCompanions,
    ...selectedEquipment,
    ...selectedTraits,
    ...selectedConsumables
  ].map(e => ({ ...e, status: "off", affectedBy: [] }));

  rollEntities(allEntities);
});

// ----------------------------
// GET SELECTED ENTITIES
// ----------------------------
function getSelectedEntities(containerId, sourceList) {
  const checkboxes = document.querySelectorAll(`#${containerId} input[type=checkbox]`);
  const selectedNames = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  return sourceList.filter(item => selectedNames.includes(item.name));
}

// ----------------------------
// ROLLER LOGIC
// ----------------------------
function rollEntities(allEntities) {
  // Check for Lavinia's Luck
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  let companionBonus = 0;
  if (lavinia && rollChance(lavinia.chance)) {
    lavinia.status = "on";
    companionBonus = lavinia.perks?.companionBonus || 0;
  }

  // Check for Twist of Fate
  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");

  // Roll all entities
  allEntities.forEach(e => {
    if (e.status === "off") {
      let chance = e.chance || 0;

      // Apply Lavinia's Luck bonus for companions
      if (companions.includes(e)) chance += companionBonus;

      const rolledOn = rollChance(chance);
      e.status = rolledOn ? "on" : "off";
    }
  });

  // Apply Twist of Fate: reroll traits that were off
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (traits.includes(e) && e.status === "off") {
        const rerolled = rollChance(e.chance);
        if (rerolled) {
          e.status = "on";
          e.affectedBy.push("Twist of Fate");
        }
      }
    });
  }

  // Mark Lavinia's Luck effects
  if (companionBonus > 0) {
    allEntities.forEach(e => {
      if (companions.includes(e) && e.status === "on") {
        e.affectedBy.push("Lavinia's Luck");
      }
    });
  }

  // ----------------------
  // DISPLAY RESULTS
  // ----------------------
  const rollResults = document.getElementById("roll-results");
  rollResults.innerHTML = "";
  const ul = document.createElement("ul");

  allEntities.forEach(e => {
    const li = document.createElement("li");
    let effectText = "";
    if (e.affectedBy.length > 0) {
      const causedFlips = e.affectedBy.map(effect => `${effect} caused flip`);
      effectText = ` (${causedFlips.join(", ")})`;
    }
    li.textContent = `${e.name}: ${e.status}${effectText}`;
    ul.appendChild(li);
  });

  rollResults.appendChild(ul);
}
