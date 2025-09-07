// ----------------------------
// BASE ROLL LOGIC
// ----------------------------

/**
 * Roll base loot from activity items.
 *
 * @param {Object} options
 * @param {number} options.minRoll - Minimum number of items to roll.
 * @param {number} options.maxRoll - Maximum number of items to roll.
 * @param {Object} options.itemPools - The imported items.js module (with rarity arrays).
 * @returns {Object} Result { success, message, items[] }
 */
export function rollBaseLoot({ minRoll, maxRoll, itemPools }) {
  // 1. Determine number of items to roll
  const numItems = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;

  // 2. Rarity weights
  const rarityWeights = {
    common: 0.4,
    uncommon: 0.3,
    rare: 0.15,
    epic: 0.05,
    legendary: 0.1
  };

  const results = [];

  // 3. Roll each item
  for (let i = 0; i < numItems; i++) {
    const rarity = rollRarity(rarityWeights);
    const poolName = rarity + "Items";
    const pool = itemPools[poolName] || [];

    if (pool.length > 0) {
      const picked = pool[Math.floor(Math.random() * pool.length)];
      results.push(picked);
    }
  }

  return {
    success: true,
    message: `You rolled ${numItems} item(s).`,
    items: results
  };
}

// ----------------------------
// HELPERS
// ----------------------------
function rollRarity(weights) {
  const r = Math.random();
  let cumulative = 0;
  for (const [rarity, weight] of Object.entries(weights)) {
    cumulative += weight;
    if (r < cumulative) return rarity;
  }
  return "common"; // fallback
}
