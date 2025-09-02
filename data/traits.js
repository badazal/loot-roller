// ----------------------------
// traits.js
// Complete list of all traits for Nemeion Roller
// ----------------------------

export const traits = [
  // ----------------------------
  // Common Traits
  // ----------------------------

// Breeding Related
  {
    name: "Birthright",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { increaseTraitPassChance: 0.15 }
  },

// Competitions Related
  {
    name: "Challenger",
    chance: 1.0,
    activities: ["Competitions"],
    perks: { returnAmount: "5-5" }
  },

// Other Activities
// Reroll if Failed
  {
    name: "Iron Will",
    chance: 0.05,
    activities: ["Colosseum"],
    perks: { rerollAttempt: true }
  },

// Duplicate a base roll
  {
    name: "Silver Tongue",
    chance: 0.15,
    activities: ["Conquests"],
    perks: { duplicateBaseRoll: true }
  },

// Roll from a mini-table
  {
    name: "Heat Resistant",
    chance: 0.15,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "allTraitsList", number: 1 } }
  },
  {
    name: "Thick Coat",
    chance: 0.15,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "allTraitsList", number: 1 } }
  },
  {
    name: "Trader",
    chance: 0.15,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades", "Conquests"],
    perks: { addSpecialItems: { table: "traderList", number: 1 } }
  },
  {
    name: "Wild Nature",
    chance: 0.15,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "wildNatureList", number: 1 } }
  },

  // ----------------------------
  // Uncommon Traits
  // ----------------------------

  // Breeding Related
  {
    name: "Big Boned",
    chance: 0.15,
    activities: ["Breeding"],
    perks: { cubBuildChance: "Brute" }
  },
  {
    name: "Blessing of the Queen",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { cubGender: "Female" }
  },
  {
    name: "Blessing of the King",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { cubGender: "Male" }
  },
  {
    name: "Delicate",
    chance: 0.15,
    activities: ["Breeding"],
    perks: { cubBuildChance: "Regal" }
  },
  {
    name: "Rare Blood",
    chance: 0.15,
    activities: ["Breeding"],
    perks: { addSpecialItems: { table: "mutationsList", number: 1 } }
  },
  {
    name: "Fertility Treatment",
    chance: 0.15,
    activities: ["Breeding"],
    perks: { extraCubs: "1-2" }
  },

  // Competitions Related
  {
    name: "Quick Feet",
    chance: 1.0,
    activities: ["Competitions"],
    perks: { returnAmount: "10-10" }
  },

  // Other Activities

  // Restrict Rarity
  {
    name: "Daywalker",
    chance: 0.15,
    activities: ["Fishing","Hunting","Caving","Expeditions","Foraging","Crusades"],
    perks: { rareOnly: true }
  },
  {
    name: "Nightbane",
    chance: 0.15,
    activities: ["Fishing","Hunting","Caving","Expeditions","Foraging","Crusades"],
    perks: { rareOnly: true }
  },

  // Add Extra item(s)
  {
    name: "Lucky",
    chance: 0.15,
    activities: ["Fishing","Hunting","Caving","Expeditions","Foraging","Crusades"],
    perks: { extraItems: 1 }
  },

  // Roll from a mini-table
  {
    name: "Primal Instincts",
    chance: 0.15,
    activities: ["Beast Hunting"],
    perks: { addSpecialItems: { table: "primalInstinctsList", number: 1 } }
  },



  // ----------------------------
  // Rare Traits
  // ----------------------------
  
  // Breeding Related
  {
    name: "Casanova",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { extraBreedings: 1 }
  },
  {
    name: "Casanova II",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { extraBreedings: 2 }
  },
  {
    name: "Short Stature",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { cubBuild: "dwarf" }
  },

  // Colosseum Related
  {
    name: "Favored",
    chance: 0.15,
    activities: ["Colosseum"],
    perks: { returnAmount: "1-2" }
  },
  {
    name: "Battleborn",
    chance: 1.0,
    activities: ["Colosseum"],
    perks: { preventInjury: true }
  },
  {
    name: "Warmonger",
    chance: 1.0,
    activities: ["Munera"],
    perks: { reduceFailure: 0.99 }
  },

  // Other Activities

  // Reduce Failure
  {
    name: "Clever",
    chance: 1.0,
    activities: ["all"],
    perks: { reduceFailure: 0.99 }
  },

  // Add Items
  {
    name: "Fortune Finder",
    chance: 1.0,
    activities: ["all"],
    perks: { returnAmount: "2000-5000" }
  },
  {
    name: "Knowledge Seeker",
    chance: 0.15,
    activities: ["all"],
    perks: { returnAmount: "10-20" }
  },

  // Roll from mini-table
  {
    name: "Fellowship",
    chance: 1.0,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "fellowshipList", number: 1 } }
  },

  {
    name: "Historian",
    chance: 1.0,
    activities: ["all"],
    perks: { addSpecialItems: { table: "historianList", number: 1 } }
  },



  // ----------------------------
  // Epic Traits
  // ----------------------------

  // Breeding Related
  {
    name: "Aphrodite's Lament",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { substituteBlossom: true }
  },

  // Other Activities

  // Add items
  {
    name: "Gold Digger",
    chance: 1.0,
    activities: ["all"],
    perks: { returnAmount: "10000-10000" }
  },
  {
    name: "Mark of the Caver",
    chance: 1.0,
    activities: ["Caving"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Fisher",
    chance: 1.0,
    activities: ["Fishing"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Forager",
    chance: 1.0,
    activities: ["Foraging"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Hunter",
    chance: 1.0,
    activities: ["Hunting"],
    perks: { extraItems: "1-2" }
  },

  // Duplicate base roll
  {
    name: "Mark of the Traveller",
    chance: 0.10,
    activities: ["Expeditions"],
    perks: { duplicateRoll: true }
  },

  // Remove Junk
  {
    name: "One with Nature",
    chance: 0.15,
    activities: ["all"],
    perks: { removeJunk: true }
  },

  // Roll from a mini-table
  {
    name: "Artesian",
    chance: 0.15,
    activities: ["all"],
    perks: { addSpecialItems: { table: "artesianList", number: 1 } }
  },


  // ----------------------------
  // Legendary Traits
  // ----------------------------

  // Other Activities
  {
    name: "Supply Seeker",
    chance: 0.25,
    activities: ["all"],
    perks: { supplyCrate: true }
  },
  {
    name: "Treasure Tracker",
    chance: 0.25,
    activities: ["all"],
    perks: { treasureChest: true }
  },

  // ----------------------------
  // Specialty Traits: Rank Traits
  // ----------------------------

  // Breeding Related
  {
    name: "Breeder",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { minCubs: 3 }
  },
  {
    name: "Consul Breeding Bonus",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { extraCubChance: 0.25 }
  },

  // Other Acitivies
  // Extra items
  {
    name: "Legatus Activity Bonus",
    chance: 0.25,
    activities: ["all"],
    perks: { returnAmount: "2000-2000" }
  },
  {
    name: "Hastati Adventure Bonus",
    chance: 0.25,
    activities: ["all"],
    perks: { extraItems: true }
  },

  // Roll from mini-table
    {
    name: "Legatus Breeding Bonus",
    chance: 0.15,
    activities: ["Breeding"],
    perks: { addSpecialItems: { table: "mutationList", number: 1 } }
  },
  {
    name: "Alpha Blood",
    chance: 0.15,
    activities: ["all"],
    perks: { addSpecialItems: { table: "alphaBloodList", number: 1 } }
  },
  {
    name: "Currency Collector",
    chance: 0.15,
    activities: ["all"],
    perks: { addSpecialItems: { table: "currencyCollectorList", number: 1 } }
  },


  // ----------------------------
  // Specialty Traits: Feat Traits
  // ----------------------------
  {
    name: "Avid Quester",
    chance: 0.05,
    activities: ["Conquests"],
    perks: { rerollRewards: true }
  },
  {
    name: "Greedy",
    chance: 1.0,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { extraItems: 1 }
  },
  {
    name: "Legendary Angler",
    chance: 0.25,
    activities: ["Fishing"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Explorer",
    chance: 0.25,
    activities: ["Expeditions"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Fighter",
    chance: 0.25,
    activities: ["Colosseum"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Gatherer",
    chance: 0.25,
    activities: ["Foraging"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Trapper",
    chance: 0.25,
    activities: ["Hunting"],
    perks: { doubleRoll: true }
  },
  {
    name: "Self Sufficient",
    chance: 1.0,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { minItems: 2 }
  },

  // ----------------------------
  // Specialty Traits: Titan Traits
  // ----------------------------

  // Breeding Perks
  {
    name: "Indiscriminate Affections",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { allowSameGenderBreeding: true }
  },
  {
    name: "Breeder II",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { minCubs: "4-5" }
  },

  // Other Activities
  {
    name: "Blessing of the Titans",
    chance: 0.01,
    activities: ["all"],
    perks: { titanOrb: true }
  },
  {
    name: "Lavinia's Luck",
    chance: 1.0,
    activities: ["all"],
    perks: { companionBonus: 0.15 }
  },

    {
    name: "Twist of Fate",
    chance: 0.05,
    activities: ["all"],
    perks: { rerollTraitChance: true }
  },

  // Roll from mini-table
  {
    name: "Una's Gift",
    chance: 1.0,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "unasGiftList", number: 1 } }
  },
  {
    name: "Protean Blood",
    chance: 1.0,
    activities: ["Breeding"],
    perks: { addSpecialItems: { table: "mutationsList", number: 1 } }
  },
  {
    name: "Scholar of Alexandria",
    chance: 0.15,
    activities: ["Fishing", "Hunting", "Caving", "Expeditions", "Foraging", "Crusades"],
    perks: { addSpecialItems: { table: "scholarOfAlexandriaList", number: 1 } }
  },
  {
    name: "Souperior Slurper",
    chance: 0.05,
    activities: ["all"],
    perks: { addSpecialItems: { table: "souperiorSlurperList", number: 1 } }
  },

  // ----------------------------
  // Specialty Traits: Unique Traits
  // ----------------------------
  {
    name: "Cryptic Curse",
    chance: 1.0,
    activities: ["all"],
    perks: { addSpecialItems: { table: "crypticCurseList", number: 1 } }
  },
  {
    name: "Vengeful",
    chance: 1.0,
    activities: ["Colosseum"],
    perks: {
    extraItems: 1 , // roll 1 item from the table
    addFixedItems: ["Medal of Honor"] // always add this on top
    }
  },
];
