// ----------------------------
// BASE ROLL LOGIC
// ----------------------------
export function rollBaseLoot({ minRoll, maxRoll, itemPools, rareOnlyActive = false }) {
  // 1. Determine number of items to roll
  const numItems = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;

  // 2. Rarity weights (hard-coded sets)
  const defaultWeights = {
    common: 0.4,
    uncommon: 0.3,
    rare: 0.15,
    epic: 0.05,
    legendary: 0.1
  };

  const rareOnlyWeights = {
    rare: 0.6,
    epic: 0.25,
    legendary: 0.15
  };

  const weights = rareOnlyActive ? rareOnlyWeights : defaultWeights;

  const results = [];

  // 3. Roll each item
  for (let i = 0; i < numItems; i++) {
    const rarity = rollRarity(weights);
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
  return Object.keys(weights)[0]; // fallback to first available
}
