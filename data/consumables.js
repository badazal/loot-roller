export const consumables = [
  // -------------------------
  // Fishing Consumables
  // -------------------------
  { name: "Lucky Bait", chance: 1.0, perk: "Increases rare item chance by 10%", activities: ["Fishing"] },
  { name: "Energy Drink", chance: 1.0, perk: "Reduces failure chance by 10%", activities: ["Fishing"] },

  // -------------------------
  // Hunting Consumables
  // -------------------------
  { name: "Hunter's Potion", chance: 1.0, perk: "Adds 1 extra item when rolling", activities: ["Hunting"] },
  { name: "Eagle Eye Elixir", chance: 1.0, perk: "Increases uncommon/rare item chance by 10%", activities: ["Hunting"] },

  // -------------------------
  // Exploring Consumables
  // -------------------------
  { name: "Explorer's Snack", chance: 1.0, perk: "Reduces failure chance by 5%", activities: ["Exploring"] },
  { name: "Mystery Powder", chance: 0.1, perk: "Small chance to upgrade item rarity", activities: ["Exploring"] },

  // -------------------------
  // Caving Consumables
  // -------------------------
  { name: "Torch Oil", chance: 1.0, perk: "Reduces failure chance by 10%", activities: ["Caving"] },
  { name: "Stamina Tonic", chance: 1.0, perk: "Adds 1 extra item when rolling", activities: ["Caving"] },

  // -------------------------
  // Universal Consumables
  // -------------------------
  { name: "Potion of Luck", chance: 0.05, perk: "Small chance to upgrade item rarity", activities: ["all"] },
  { name: "Elixir of Misfortune", chance: 0.05, perk: "Small chance to add a junk item", activities: ["all"] }
];
