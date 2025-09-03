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

  // Wrapper for three columns
  const wrap = document.createElement("div");
  wrap.className = "options-three-col";

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");
  col1.className = col2.className = col3.className = "options-col";

  // Compute balanced sizes so columns are as even as possible.
  const n = items.length;
  const size1 = Math.ceil(n / 3);
  const remaining = n - size1;
  const size2 = Math.ceil(remaining / 2);
  const size3 = n - size1 - size2; // last column gets the rest (same or one fewer)

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
// ROLL UTILITY
// ----------------------------
function rollChance(chance = 0) {
  return Math.random() < chance;
}

// ----------------------------
// UTILITY: get selected checkboxes and map to data
// ----------------------------
function getSelectedCheckboxes(containerId, dataList) {
  const container = document.getElementById(containerId);
  const checkedInputs = Array.from(container.querySelectorAll('input[type="checkbox"]:checked'));
  const names = checkedInputs.map(input => input.value);
  return dataList.filter(item => names.includes(item.name));
}

// ----------------------------
// ROLL ACTIVITY
// ----------------------------
function rollActivity(activity) {
  // ----------------------
  // 1. Build allEntities from selected checkboxes only
  // ----------------------
  const selectedCompanions = getSelectedCheckboxes("companions-checkboxes", companions);
  const selectedEquipment = getSelectedCheckboxes("equipment-checkboxes", equipment);
  const selectedTraits = getSelectedCheckboxes("traits-checkboxes", traits);
  const selectedConsumables = getSelectedCheckboxes("consumables-checkboxes", consumables);

  const allEntities = [
    ...selectedCompanions,
    ...selectedEquipment,
    ...selectedTraits,
    ...selectedConsumables
  ].map(e => ({ ...e, status: "off" }));

  // ----------------------
  // 2. Check Lavinia's Luck
  // ----------------------
  const lavinia = allEntities.find(e => e.name === "Lavinia's Luck");
  let companionBonus = 0;
  if (lavinia && rollChance(lavinia.chance)) {
    lavinia.status = "on";
    companionBonus = lavinia.perks?.companionBonus || 0;
  }

  // ----------------------
  // 3. Check Twist of Fate
  // ----------------------
  const twistOfFate = allEntities.find(e => e.name === "Twist of Fate");

  // ----------------------
  // 4. Roll all entities
  // ----------------------
  allEntities.forEach(e => {
    if (e.status === "off") {
      let chance = e.chance || 0;
      if (selectedCompanions.includes(e)) chance += companionBonus;
      e.status = rollChance(chance) ? "on" : "off";
    }
  });

  // ----------------------
  // 5. Apply Twist of Fate reroll for off traits
  // ----------------------
  if (twistOfFate && twistOfFate.status === "on") {
    allEntities.forEach(e => {
      if (selectedTraits.includes(e) && e.status === "off") {
        e.status = rollChance(e.chance) ? "on" : "off";
      }
    });
  }

  // ----------------------
  // 6. Display results
  // ----------------------
  const rollResults = document.getElementById("roll-results");
  rollResults.innerHTML = "";
  const ul = document.createElement("ul");
  allEntities.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.name}: ${e.status}`;
    ul.appendChild(li);
  });
  rollResults.appendChild(ul);

  return allEntities;
}

// ----------------------------
// ROLL BUTTON
// ----------------------------
document.getElementById("roll-button").addEventListener("click", () => {
  const selectedActivity = document.querySelector('input[name="activity"]:checked')?.value;
  if (!selectedActivity) {
    alert("Please select an activity first.");
    return;
  }
  rollActivity(selectedActivity);
});
