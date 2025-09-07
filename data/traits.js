export const traits = [
  // ----------------------------
  // Common Traits
  // ----------------------------

// Breeding Related
  {
    name: "Birthright",
    chance: 1.0,
    activities: ["breeding"],
    perks: { increaseTraitPassChance: 0.15 }
  },

// Competitions Related
  {
    name: "Challenger",
    chance: 1.0,
    activities: ["competitions"],
    perks: { returnAmount: "5-5" }
  },

// Other Activities
// Reroll if Failed
  {
    name: "Iron Will",
    chance: 0.05,
    activities: ["colosseum"],
    perks: { rerollAttempt: true }
  },

// Duplicate a base roll
  {
    name: "Silver Tongue",
    chance: 0.15,
    activities: ["conquests"],
    perks: { duplicateBaseRoll: true }
  },

// Roll from a mini-table
  {
    name: "Heat Resistant",
    chance: 0.15,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { addSpecialItems: { table: "allTraitsList", number: 1 } }
  },
  {
    name: "Thick Coat",
    chance: 0.15,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { addSpecialItems: { table: "allTraitsList", number: 1 } }
  },
  {
    name: "Trader",
    chance: 0.15,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades", "conquests"],
    perks: { addSpecialItems: { table: "traderList", number: 1 } }
  },
  {
    name: "Wild Nature",
    chance: 0.15,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { addSpecialItems: { table: "wildNatureList", number: 1 } }
  },

  // ----------------------------
  // Uncommon Traits
  // ----------------------------

  // Breeding Related
  {
    name: "Big Boned",
    chance: 0.15,
    activities: ["breeding"],
    perks: { cubBuildChance: "Brute" }
  },
  {
    name: "Blessing of the Queen",
    chance: 1.0,
    activities: ["breeding"],
    perks: { cubGender: "Female" }
  },
  {
    name: "Blessing of the King",
    chance: 1.0,
    activities: ["breeding"],
    perks: { cubGender: "Male" }
  },
  {
    name: "Delicate",
    chance: 0.15,
    activities: ["breeding"],
    perks: { cubBuildChance: "Regal" }
  },
  {
    name: "Rare Blood",
    chance: 0.15,
    activities: ["breeding"],
    perks: { addSpecialItems: { table: "mutationsList", number: 1 } }
  },
  {
    name: "Fertility Treatment",
    chance: 0.15,
    activities: ["breeding"],
    perks: { extraCubs: "1-2" }
  },

  // Competitions Related
  {
    name: "Quick Feet",
    chance: 1.0,
    activities: ["competitions"],
    perks: { returnAmount: "10-10" }
  },

  // Other Activities

  // Restrict Rarity
  {
    name: "Daywalker",
    chance: 0.15,
    activities: ["fishing","hunting","caving","expeditions","foraging","crusades"],
    perks: { rareOnly: true }
  },
  {
    name: "Nightbane",
    chance: 0.15,
    activities: ["fishing","hunting","caving","expeditions","foraging","crusades"],
    perks: { rareOnly: true }
  },

  // Add Extra item(s)
  {
    name: "Lucky",
    chance: 0.15,
    activities: ["fishing","hunting","caving","expeditions","foraging","crusades"],
    perks: { extraItems: 1 }
  },

  // Roll from a mini-table
  {
    name: "Primal Instincts",
    chance: 0.15,
    activities: ["beast hunting"],
    perks: { addSpecialItems: { table: "primalInstinctsList", number: 1 } }
  },

  // ----------------------------
  // Rare Traits
  // ----------------------------
  
  // Breeding Related
  {
    name: "Casanova",
    chance: 1.0,
    activities: ["breeding"],
    perks: { extraBreedings: 1 }
  },
  {
    name: "Casanova II",
    chance: 1.0,
    activities: ["breeding"],
    perks: { extraBreedings: 2 }
  },
  {
    name: "Short Stature",
    chance: 1.0,
    activities: ["breeding"],
    perks: { cubBuild: "dwarf" }
  },

  // Colosseum Related
  {
    name: "Favored",
    chance: 0.15,
    activities: ["colosseum"],
    perks: { returnAmount: "1-2" }
  },
  {
    name: "Battleborn",
    chance: 1.0,
    activities: ["colosseum"],
    perks: { preventInjury: true }
  },
  {
    name: "Warmonger",
    chance: 1.0,
    activities: ["munera"],
    perks: { reduceFailure: 0.19 }
  },

  // Other Activities

  // Reduce Failure
  {
    name: "Clever",
    chance: 1.0,
    activities: ["all"],
    perks: { reduceFailure: 0.19 }
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
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
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
    activities: ["breeding"],
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
    activities: ["caving"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Fisher",
    chance: 1.0,
    activities: ["fishing"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Forager",
    chance: 1.0,
    activities: ["foraging"],
    perks: { extraItems: "1-2" }
  },
  {
    name: "Mark of the Hunter",
    chance: 1.0,
    activities: ["hunting"],
    perks: { extraItems: "1-2" }
  },

  // Duplicate base roll
  {
    name: "Mark of the Traveller",
    chance: 0.10,
    activities: ["expeditions"],
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
    activities: ["breeding"],
    perks: { minCubs: 3 }
  },
  {
    name: "Consul Breeding Bonus",
    chance: 1.0,
    activities: ["breeding"],
    perks: { extraCubChance: 0.25 }
  },

  // Other Acitivies
  // Extra items
  {
    name: "Legatus Activity Bonus",
    chance: 1.0,
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
    activities: ["breeding"],
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
    activities: ["conquests"],
    perks: { rerollRewards: true }
  },
  {
    name: "Greedy",
    chance: 1.0,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { extraItems: 1 }
  },
  {
    name: "Legendary Angler",
    chance: 0.25,
    activities: ["fishing"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Explorer",
    chance: 0.25,
    activities: ["expeditions"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Fighter",
    chance: 0.25,
    activities: ["colosseum"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Gatherer",
    chance: 0.25,
    activities: ["foraging"],
    perks: { doubleRoll: true }
  },
  {
    name: "Legendary Trapper",
    chance: 0.25,
    activities: ["hunting"],
    perks: { doubleRoll: true }
  },
  {
    name: "Self Sufficient",
    chance: 1.0,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { minItems: 2 }
  },

  // ----------------------------
  // Specialty Traits: Titan Traits
  // ----------------------------

  // Breeding Perks
  {
    name: "Indiscriminate Affections",
    chance: 1.0,
    activities: ["breeding"],
    perks: { allowSameGenderBreeding: true }
  },
  {
    name: "Breeder II",
    chance: 1.0,
    activities: ["breeding"],
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
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
    perks: { addSpecialItems: { table: "unasGiftList", number: 1 } }
  },
  {
    name: "Protean Blood",
    chance: 1.0,
    activities: ["breeding"],
    perks: { addSpecialItems: { table: "mutationsList", number: 1 } }
  },
  {
    name: "Scholar of Alexandria",
    chance: 0.15,
    activities: ["fishing", "hunting", "caving", "expeditions", "foraging", "crusades"],
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
    activities: ["colosseum"],
    perks: {
    extraItems: 1 , // roll 1 item from the table
    addFixedItems: ["Medal of Honor"] // always add this on top
    }
  },
];
