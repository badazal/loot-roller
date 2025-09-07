export const equipment = [
  // ----------------------------
  // Reduce Failure Equipment
  // ----------------------------
  { name: "Arrows", chance: 0.95, activities: ["Hunting"], perks: { reduceFailure: 0.15 } },
  { name: "Leather Harness", chance: 0.95, activities: ["Expeditions"], perks: { reduceFailure: 0.15 } },
  { name: "Iron Claw Tips", chance: 0.95, activities: ["Crusades"], perks: { reduceFailure: 0.15 } },
  { name: "Torch", chance: 0.95, activities: ["Caving"], perks: { reduceFailure: 0.15 } },
  { name: "Herbalist Gloves", chance: 0.95, activities: ["Foraging"], perks: { reduceFailure: 0.15 } },
  { name: "Trap Netting", chance: 0.95, activities: ["Fishing"], perks: { reduceFailure: 0.15 } },

  // ----------------------------
  // Extra Items Equipment
  // ----------------------------
  { name: "Pickaxe", chance: 0.15, activities: ["Caving"], perks: { extraItems: "1-2" } },
  { name: "Satchel", chance: 0.15, activities: ["Expeditions"], perks: { extraItems: "1-2" } },
  { name: "Shield", chance: 0.15, activities: ["Crusades"], perks: { extraItems: "1-2" } },
  { name: "Snare", chance: 0.15, activities: ["Hunting"], perks: { extraItems: "1-2" } },
  { name: "Wicker Basket", chance: 0.15, activities: ["Foraging"], perks: { extraItems: "1-2" } },
  { name: "Lure", chance: 0.15, activities: ["Fishing"], perks: { extraItems: "1-2" } },

  // ----------------------------
  // Rare-Only Equipment
  // ----------------------------
  { name: "Fishing Rod", chance: 0.15, activities: ["Fishing"], perks: { rareOnly: true } },
  { name: "Kopis Sword", chance: 0.15, activities: ["Crusades"], perks: { rareOnly: true } },
  { name: "Rope", chance: 0.15, activities: ["Caving"], perks: { rareOnly: true } },
  { name: "Bow", chance: 0.15, activities: ["Hunting"], perks: { rareOnly: true } },
  { name: "Axe", chance: 0.15, activities: ["Foraging"], perks: { rareOnly: true } },
  { name: "Explorer's Map", chance: 0.15, activities: ["Expeditions"], perks: { rareOnly: true } },

  // ----------------------------
  // Specialty Equipment
  // ----------------------------
  { name: "Leather Leg Wraps", chance: 1.0, activities: ["all"], perks: { preventsInjury: true } }
];
