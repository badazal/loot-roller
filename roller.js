let ITEMS = [];
let MODIFIERS = {};
let USERS = {};

// Load config.json when the page loads
fetch("config.json")
  .then(response => response.json())
  .then(data => {
    ITEMS = data.items;
    MODIFIERS = data.modifiers;
    USERS = data.users;
  })
  .catch(err => console.error("Error loading config:", err));

// Function to roll items
function doRoll(selectedModifiers) {
  // Calculate total boost
  let boost = selectedModifiers.reduce((sum, mod) => sum + (MODIFIERS[mod] || 0), 0);

  // Roll each item independently
  let results = [];
  for (const it of ITEMS) {
    if (Math.random() < it.base + boost) {
      results.push(it.name);
    }
  }

  if (results.length === 0) results.push("Nothing");
  return results;
}
