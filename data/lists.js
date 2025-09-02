
export const companionTables = {

// -------------------------------
// COMPANION SPECIALTY LISTS
// -------------------------------

    mermaidList: [
        "Sailing Seas",
        "Winter Forest",
        "Haunted Cage",
        "Fields of Love",
        "Spooky Forest",
    ],

    griffinList: {
    type: "weighted",
    items: [
      { name: "Carcass", chance: 0.4 },
      { name: "Raw Meat", chance: 0.4 },
      { name: "Haunchmeat", chance: 0.2 },
    ],
   },

    harpyList: {
    type: "weighted",
    items: [
      { name: "Strange Egg", chance: 0.2 },
      { name: "Spotted Eggs", chance: 0.2 },
      { name: "Frog Spawn", chance: 0.2 },
      { name: "Hefty Egg", chance: 0.1 },
      { name: "Peculiar Egg", chance: 0.1 },
      { name: "Curious Eggs", chance: 0.1 },
      { name: "Unusual Egg", chance: 0.1 },
    ],
   },

    cerberusList: {
    type: "weighted",
    items: [
      { name: "Bronze Semi-Custom", chance: 0.35 },
      { name: "Silver Semi-Custom", chance: 0.3 },
      { name: "Gold Semi-Custom", chance: 0.2 },
      { name: "Platinum Semi-Custom", chance: 0.1 },
      { name: "Chroma Semi-Custom", chance: 0.05 },
    ],
   },

   sphynxList: {
    type: "weighted",
    items: [
      { name: "Wishing Lamp", chance: 0.5 },
      { name: "Damaged Wishing Lamp", chance: 0.5 },
    ],
   },

    slothList: {
    type: "weighted",
    items: [
      { name: "Small Ingredient Box", chance: 0.65 },
      { name: "Large Ingredient Box", chance: 0.35 },
    ],
   },

  charlieList: [
    "Decoration Coffer",
  ],

   wyspList: {
    type: "weighted",
    items: [
      { name: "Mirror of Manifestation", chance: 0.667 },
      { name: "Broken Mirror of Manifestation", chance: 0.333 },
    ],
   },

  crystallineList: [
    "Star Ruby",
    "Peridot",
    "Cluster of Gems",
    "Chunk of Unakite",
    "Chunk of Azurite",
    "Fire Agate",
    "Topaz",
    "Moonstone",
    "Bloodstone",
  ],

    chimeraList: [
    "Star Ruby",
    "Peridot",
    "Cluster of Gems",
    "Chunk of Unakite",
    "Chunk of Azurite",
    "Fire Agate",
    "Topaz",
    "Moonstone",
    "Bloodstone",
  ],

  wyrmList: [
    "Ancient Tablet",
    "Large Sack of Coins",
    "Bag of Teeth",
    "Fragment of Distortion",
    "Star Ruby",
    "Topaz",
    "Fire Agate",
    "Chunk of Azurite",
    "Chunk of Unakite",
    "Mysterious Potion",
    "Cluster of Gems",
    "Blessing of Volcan",
    "Peridot",
    "Chroma Ingot",
    "Golden Lotus Potion",
    "Runestone",
    "Bottled Lightning",
    "Wishing Lamp",
    "Titan Orb",
    "Broken Mirror of Manifestation",
    "Befuddling Brew",
    "Blessing of Poseidon",
    "Poseidon's Promise",
    "Unicorn Meat",
    "Large Ingredient Box",
    "Treasure Chest",
    "Supply Crate",
    "Sunken Treasure Chest",
    "Moonstone",
  ],

};

export const traitTables = {

// -------------------------------
// TRAIT SPECIALTY LISTS
// -------------------------------

 crypticCurseList: {
    type: "weighted",
    items: [
        { name: "Bag of Teeth", chance: 0.2 },
        { name: "Teeth", chance: 0.8, min: 1, max: 5 },
    ],
},

  souperiorSlurperList: [
    "Appaling Soup",
    "Fishy Soup",
    "Savory Soup",
    "Sinister Soup",
    "Zesty Soup",
    "Meaty Soup",
    "Questionable Soup",
    "Hearty Soup",
    "Frightening Soup",
    "Fragrant Soup",
  ],

  traderList: [
    "Bow",
    "Arrows",
    "Snare",
    "Explorer's Map",
    "Leather Harness",
    "Satchel",
    "Fishing Rod",
    "Trap Netting",
    "Lure",
    "Axe",
    "Herbalist Gloves",
    "Wicker Basket",
    "Rope",
    "Torch",
    "Pickaxe",
    "Kopis Sword",
    "Iron Claw Tips",
    "Shield",
    "Leather Leg Wraps",
  ],

  primalInstinctsList: [
    "Large White Pelt",
    "Large Black Pelt",
    "Large Cream Pelt",
    "Large Tan Pelt",
    "Large Brown Pelt",
    "Small Brown Pelt",
    "Small Tan Pelt",
    "Small Cream Pelt",
    "Small Black Pelt",
    "Small White Pelt",
  ],


   wildNatureList: [
    "Bear",
    "Boar",
    "Cave Bat",
    "Crow",
    "Cougar",
    "Crocodile",
    "Falcon",
    "Horse",
    "Hound",
    "Hyena",
    "Lynx",
    "Mastiff",
    "Raccoon",
    "Salamander",
    "Snake",
    "Tarantula",
    "Weasel",
    "Wolf",
    "Griffin",
    "Rainfrog",
    "Harpy",
    "Scorpion",
  ],

   mutationsList: [
    "Melanistic",
    "Ablino",
    "Leucistic",
    "Vitiligo",
  ],

   fellowshipList: [
    "Khan F-29",
    "Korath F-30",
    "Octavia F-27",
    "Hadrian F-26",
    "Korath F-30",
  ],

   historianList: {
    type: "weighted",
    items: [
      { name: "Common Scroll", chance: 0.3 },
      { name: "Uncommon Scroll", chance: 0.3 },
      { name: "Rare Scroll", chance: 0.2 },
      { name: "Epic Scroll", chance: 0.1 },
      { name: "Legendary Scroll", chance: 0.1 },
    ],
   },

   artesianList: [
    "Befuddling Brew",
    "Golden Lotus Potion",
    "Bountiful Tonic",
    "Cryptic Curse",
    "Dreadful Drought",
    "Dwarfish Drought",
    "Rejuvenating Salve",
    "Hephaestus' Fervor",
    "Elixir of Adonis",
    "Regal Remedy",
    "Brute Potion",
    "Aphrodite's Passion",
    "Elixir of Olympus",
    "Mysterious Potion",
  ],

    alphaBloodList: {
    type: "weighted",
    items: [
      { name: "Bronze Semi-Custom", chance: 0.35 },
      { name: "Silver Semi-Custom", chance: 0.3 },
      { name: "Gold Semi-Custom", chance: 0.2 },
      { name: "Platinum Semi-Custom", chance: 0.1 },
      { name: "Chroma Semi-Custom", chance: 0.05 },
    ],
   },

    currencyCollectorList: {
    type: "weighted",
    items: [
        { name: "Coins", chance: 0.2, amount: 5000 },          
        { name: "Teeth", chance: 0.2, min: 1, max: 15 },       
        { name: "Doubloons", chance: 0.2, min: 1, max: 15 },   
        { name: "Medals", chance: 0.2, min: 1, max: 15 },      
        { name: "Crowns", chance: 0.2, min: 1, max: 15 },      
    ],
},

    unasGiftList: {
    type: "weighted",
    items: [
      { name: "Lost Brute Cub", chance: 0.3 },
      { name: "Lost Regal Cub", chance: 0.3 },
      { name: "Lost Dwarf Cub", chance: 0.2 },
      { name: "Lost Domestic Cub", chance: 0.1 },
      { name: "Lost Pharaoh Cub", chance: 0.1 },
    ],
   },

    scholarOfAlexandriaList: {
    type: "weighted",
    items: [
        { name: "Common Scroll", chance: 0.3 },
        { name: "Uncommon Scroll", chance: 0.2 },
        { name: "Rare Scroll", chance: 0.2 },
        { name: "Epic Scroll", chance: 0.1 },
        { name: "Legendary Scroll", chance: 0.05 },
        { name: "Missive", chance: 0.05 },
        { name: "Trait Tome", chance: 0.05 },
        { name: "Ancient Time Scroll", chance: 0.05 },
    ],
  },

    allTraitsList: [
    "Common Scroll",
    "Uncommon Scroll",
    "Rare Scroll",
    "Epic Scroll",
    "Legendary Scroll",
    "Birthright Scroll",
    "Challenger Scroll",
    "Heat Resistant Scroll",
    "Iron Will Scroll",
    "Loner Scroll",
    "Popular Scroll",
    "Silver Tongue Scroll",
    "Thick Coat Scroll",
    "Trader Scroll",
    "Wild Nature Scroll",
    "Big Boned Scroll",
    "Blessing of the Queen Scroll",
    "Blessing of the King Scroll",
    "Critter Keeper Scroll",
    "Critter Keeper II Scroll",
    "Daywalker Scroll",
    "Delicate Scroll",
    "Fertility Treatment Scroll",
    "Lucky Scroll",
    "Nightbane Scroll",
    "Primal Instincts Scroll",
    "Quick Feet Scroll",
    "Rare Blood Scroll",
    "Battleborn Scroll",
    "Casanova Scroll",
    "Casanova II Scroll",
    "Clever Scroll",
    "Favored Scroll",
    "Fellowship Scroll",
    "Fortune Finder Scroll",
    "Historian Scroll",
    "Knowledge Seeker Scroll",
    "Short Stature Scroll",
    "Warmonger Scroll",
    "Aphrodite's Lament Scroll",
    "Artesian Scroll",
    "Gold Digger Scroll",
    "Mark of the Caver Scroll",
    "Mark of the Fisher Scroll",
    "Mark of the Forager Scroll",
    "Mark of the Hunter Scroll",
    "Mark of the Traveller Scroll",
    "Noble Blood Scroll",
    "One with Nature Scroll",
    "Ambassador Scroll",
    "Ambassador II Scroll",
    "Devoted Scroll",
    "Natural Leader Scroll",
    "Time Traveller Scroll",
    "Supply Seeker Scroll",
    "Transmutation Scroll",
    "Treasure Tracker Scroll",
  ],

};
