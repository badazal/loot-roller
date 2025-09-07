export const equipment = [
  // ----------------------------
  // Reduce Failure Equipment
  // ----------------------------
  { name: "Arrows", chance: 0.95, activities: ["hunting"], perks: { reduceFailure: 0.15 } },
  { name: "Leather Harness", chance: 0.95, activities: ["expeditions"], perks: { reduceFailure: 0.15 } },
  { name: "Iron Claw Tips", chance: 0.95, activities: ["crusades"], perks: { reduceFailure: 0.15 } },
  { name: "Torch", chance: 0.95, activities: ["caving"], perks: { reduceFailure: 0.15 } },
  { name: "Herbalist Gloves", chance: 0.95, activities: ["foraging"], perks: { reduceFailure: 0.15 } },
  { name: "Trap Netting", chance: 0.95, activities: ["fishing"], perks: { reduceFailure: 0.15 } },

  // ----------------------------
  // Extra Items Equipment
  // ----------------------------
  { name: "Pickaxe", chance: 0.15, activities: ["caving"], perks: { extraItems: "1-2" } },
  { name: "Satchel", chance: 0.15, activities: ["expeditions"], perks: { extraItems: "1-2" } },
  { name: "Shield", chance: 0.15, activities: ["crusades"], perks: { extraItems: "1-2" } },
  { name: "Snare", chance: 0.15, activities: ["hunting"], perks: { extraItems: "1-2" } },
  { name: "Wicker Basket", chance: 0.15, activities: ["foraging"], perks: { extraItems: "1-2" } },
  { name: "Lure", chance: 0.15, activities: ["fishing"], perks: { extraItems: "1-2" } },

  // ----------------------------
  // Rare-Only Equipment
  // ----------------------------
  { name: "Fishing Rod", chance: 0.15, activities: ["fishing"], perks: { rareOnly: true } },
  { name: "Kopis Sword", chance: 0.15, activities: ["crusades"], perks: { rareOnly: true } },
  { name: "Rope", chance: 0.15, activities: ["caving"], perks: { rareOnly: true } },
  { name: "Bow", chance: 0.15, activities: ["hunting"], perks: { rareOnly: true } },
  { name: "Axe", chance: 0.15, activities: ["foraging"], perks: { rareOnly: true } },
  { name: "Explorer's Map", chance: 0.15, activities: ["expeditions"], perks: { rareOnly: true } },

  // ----------------------------
  // Specialty Equipment
  // ----------------------------
  { name: "Leather Leg Wraps", chance: 1.0, activities: ["all"], perks: { preventsInjury: true } }
];
