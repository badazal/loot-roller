let currentUser = null;
let USERS = {};
let ITEMS = [];
let MODIFIERS = [];
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzzXyj2qWEmRT7kUJS-fKnb5-LyH5qze3H6biqKdmsODDmAdo28Xle93ZSJcWsy4NGm/exec";

// Load the config.json file
fetch("config.json")
  .then(response => response.json())
  .then(data => {
    USERS = data.users;       // { "player@example.com": "1234", ... }
    ITEMS = data.items;       // ["Sword", "Shield", "Potion", ...]
    MODIFIERS = data.modifiers; // [0, 0.1, 0.2, ...]
    console.log("Config loaded:", data);
  })
  .catch(err => console.error("Error loading config.json:", err));

function login() {
  const email = document.getElementById("email").value;
  const code = document.getElementById("code").value;

  if (USERS[email] && USERS[email] === code) {
    currentUser = email;
    document.getElementById("login").style.display = "none";
    document.getElementById("roller").style.display = "block";
    document.getElementById("userName").textContent = email;
  } else {
    alert("Invalid login");
  }
}

function rollItems() {
  if (!currentUser) return;

  const modifier = parseFloat(document.getElementById("modifier").value);
  const BASE_CHANCE = 0.5;

  const results = ITEMS.filter(() => Math.random() < BASE_CHANCE + modifier);

  document.getElementById("results").textContent = results.join(", ") || "No items";

  const now = new Date().toLocaleString();
  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({
      email: currentUser,
      item: results.join(", "),
      time: now
    })
  })
  .then(r => r.json())
  .then(data => console.log("Sheet response:", data))
  .catch(err => console.error("Error sending to sheet:", err));
}
