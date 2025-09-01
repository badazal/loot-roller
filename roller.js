// Paste the Web App URL from Apps Script here
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxRuQ07ChU3hjaOGxM3vJIerOtEWFHlRS3IDdLFsUkRBGyQY4jSYVXJqWW49aPX11w/exec";

let currentUser = null;

// Example user list (or loaded from config.json)
const USERS = {
  "player@example.com": "1234",
  "test@example.com": "abcd"
};

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
  
  // Example items & base chance
  const ITEMS = ["Sword", "Shield", "Potion", "Bow"];
  const BASE_CHANCE = 0.5;

  // Roll logic
  const results = ITEMS.filter(() => Math.random() < BASE_CHANCE + modifier);

  // Show results
  document.getElementById("results").textContent = results.join(", ") || "No items";

  // Log to Google Sheet
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
