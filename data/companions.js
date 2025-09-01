export const companions = [
  // -------------------------
  // Fishing Companions
  // -------------------------
  { name: "Dog", chance: 0.10, perk: "Increases catch by 1", activities: ["Fishing"] },
  { name: "Cat", chance: 0.05, perk: "Reduces failure chance by 5%", activities: ["Fishing"] },
  { name: "Heron", chance: 0.15, perk: "Increases rare drop chance", activities: ["Fishing"] },

  // -------------------------
  // Hunting Companions
  // -------------------------
  { name: "Hawk", chance: 0.15, perk: "Increases rare drop chance", activities: ["Hunting"] },
  { name: "Bear", chance: 0.15, perk: "Can trigger a second roll", activities: ["Hunting"] },
  { name: "Wolf", chance: 0.10, perk: "Adds +1 uncommon or rare item", activities: ["Hunting"] },

  // -------------------------
  // Exploring Companions
  // -------------------------
  { name: "Raven", chance: 0.10, perk: "Reveals hidden items", activities: ["Exploring"] },
  { name: "Monkey", chance: 0.08, perk: "Steals an extra common item", activities: ["Exploring"] },
  { name: "Owl", chance: 0.12, perk: "Increases rare item chance at night", activities: ["Exploring"] },

  // -------------------------
  // Caving Companions
  // -------------------------
  { name: "Bat", chance: 0.10, perk: "Illuminates dark areas", activities: ["Caving"] },
  { name: "Mole", chance: 0.08, perk: "Finds hidden tunnels", activities: ["Caving"] },
  { name: "Spider", chance: 0.05, perk: "Catches small critters", activities: ["Caving"] },

  // -------------------------
  // Universal / All Activities
  // -------------------------
  { name: "Spirit Wolf", chance: 0.10, perk: "Adds +1 to all rolls", activities: ["all"] },
  { name: "Fairy", chance: 0.05, perk: "Small chance to upgrade item rarity", activities: ["all"] },
  { name: "Imp", chance: 0.05, perk: "Small chance to add junk item", activities: ["all"] }
];
