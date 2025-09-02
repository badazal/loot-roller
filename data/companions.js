export const companions = [
  // ----------------------------
  // Normal Companions: Extra Items
  // ----------------------------
  { name: "Bat", chance: 0.25, activities: ["Caving"], perks: { extraItems: "1-2" } },
  { name: "Mastiff", chance: 0.25, activities: ["Hunting"], perks: { extraItems: "1-2" } },
  { name: "Hyena", chance: 0.25, activities: ["Expeditions"], perks: { extraItems: "1-2" } },
  { name: "Cougar", chance: 0.25, activities: ["Fishing"], perks: { extraItems: "1-2" } },
  { name: "Racoon", chance: 0.25, activities: ["Foraging"], perks: { extraItems: "1-2" } },
  { name: "Wolf", chance: 0.25, activities: ["Crusades"], perks: { extraItems: "1-2" } },

  // ----------------------------
  // Normal Companions: Rare-Only
  // ----------------------------
  { name: "Tarantula", chance: 0.25, activities: ["Caving"], perks: { rareOnly: true } },
  { name: "Lynx", chance: 0.25, activities: ["Hunting"], perks: { rareOnly: true } },
  { name: "Crow", chance: 0.25, activities: ["Expeditions"], perks: { rareOnly: true } },
  { name: "Crocodile", chance: 0.25, activities: ["Fishing"], perks: { rareOnly: true } },
  { name: "Bear", chance: 0.25, activities: ["Foraging"], perks: { rareOnly: true } },
  { name: "Horse", chance: 0.25, activities: ["Crusades"], perks: { rareOnly: true } },

  // ----------------------------
  // Normal Companions: Double Roll
  // ----------------------------
  { name: "Salamander", chance: 0.25, activities: ["Caving"], perks: { doubleRoll: true } },
  { name: "Falcon", chance: 0.25, activities: ["Hunting"], perks: { doubleRoll: true } },
  { name: "Weasel", chance: 0.25, activities: ["Expeditions"], perks: { doubleRoll: true } },
  { name: "Hound", chance: 0.25, activities: ["Fishing"], perks: { doubleRoll: true } },
  { name: "Boar", chance: 0.25, activities: ["Foraging"], perks: { doubleRoll: true } },
  { name: "Snake", chance: 0.25, activities: ["Crusades"], perks: { doubleRoll: true } },

  // ----------------------------
  // Specialized Companions: Mini-Roll Tables
  // ----------------------------
  { name: "Mermaid", chance: 0.03, activities: ["Fishing"], perks: { addSpecialItems: { table: "mermaidList", number: 1 } } },
  { name: "Wysp", chance: 0.03, activities: ["all"], perks: { addSpecialItems: { table: "wyspList", number: 1 } } },
  { name: "Wyrm", chance: 0.10, activities: ["all"], perks: { addSpecialItems: { table: "wyrmList", number: 1 } } },
  { name: "Sphynx", chance: 0.03, activities: ["all"], perks: { addSpecialItems: { table: "sphynxList", number: 1 } } },
  { name: "Crystal Familiar", chance: 0.05, activities: ["Caving"], perks: { addSpecialItems: { table: "crystallineList", number: 1 } } },
  { name: "Griffin", chance: 1.0, activities: ["Hunting"], perks: { addSpecialItems: { table: "griffinList", number: "1-3" } } },
  { name: "Harpy", chance: 0.10, activities: ["all"], perks: { addSpecialItems: { table: "harpyList", number: 1 } } },
  { name: "Cerberus", chance: 0.05, activities: ["Hunting"], perks: { addSpecialItems: { table: "cerberusList", number: 1 } } },
  { name: "Chimera", chance: 0.05, activities: ["Hunting"], perks: { addSpecialItems: { table: "chimeraList", number: 1 } } },
  { name: "Charlie", chance: 0.15, activities: ["all"], perks: { addSpecialItems: { table: "charlieList", number: 1 } } },
  { name: "Sloth", chance: 0.15, activities: ["all"], perks: { addSpecialItems: { table: "slothList", number: 1 } } },

  // ----------------------------
  // Specialized Companions: Misc Perks
  // ----------------------------
  { name: "Bonehound", chance: 0.10, activities: ["all"], perks: { duplicateBaseRoll: true } }
];
