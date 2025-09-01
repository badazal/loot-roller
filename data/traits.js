export const traits = [
  // -------------------------
  // Fishing Traits
  // -------------------------
  { name: "One with Nature", chance: 1.0, perk: "No junk items rolled", activities: ["Fishing"] },
  { name: "Patient", chance: 1.0, perk: "10% higher chance to get rare items", activities: ["Fishing"] },

  // -------------------------
  // Hunting Traits
  // -------------------------
  { name: "Wild Nature", chance: 0.15, perk: "15% chance to add a companion animal", activities: ["Hunting"] },
  { name: "Sharp Eye", chance: 1.0, perk: "Better chance for uncommon or rare items", activities: ["Hunting"] },

  // -------------------------
  // Exploring Traits
  // -------------------------
  { name: "Curious", chance: 1.0, perk: "Small chance to reveal hidden items", activities: ["Exploring"] },
  { name: "Adventurous", chance: 1.0, perk: "Increases chance for uncommon items", activities: ["Exploring"] },

  // -------------------------
  // Caving Traits
  // -------------------------
  { name: "Night Vision", chance: 1.0, perk: "Increases chance to find rare items at night", activities: ["Caving"] },
  { name: "Sturdy", chance: 1.0, perk: "Reduces failure chance by 10%", activities: ["Caving"] },

  // -------------------------
  // Universal Traits (all activities)
  // -------------------------
  { name: "Lucky", chance: 0.05, perk: "Small chance to upgrade item rarity", activities: ["all"] },
  { name: "Unlucky", chance: 0.05, perk: "Small chance to add a junk item", activities: ["all"] }
];
