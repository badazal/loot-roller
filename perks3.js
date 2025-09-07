export function applyPerksToRoll(allEntities, rollParams) {
  let { minRoll, maxRoll, itemPools } = rollParams;

  // Make a completely new object instead of modifying in place
  const newItemPools = {};
  for (const [key, pool] of Object.entries(itemPools)) {
    newItemPools[key] = [...pool]; // clone array
  }

  allEntities.forEach(e => {
    if (e.status === "on" && e.perks) {
      // Override minimum roll
      if (e.perks.minItems !== undefined) {
        minRoll = Math.max(minRoll, e.perks.minItems);
      }

      // Override maximum roll
      if (e.perks.maxItems !== undefined) {
        maxRoll = Math.max(maxRoll, e.perks.maxItems);
      }

      // Remove junk from all rarity pools
      if (e.perks.removeJunk) {
        for (const key in newItemPools) {
          newItemPools[key] = newItemPools[key].filter(i => i.type !== "junk");
        }
      }

      // Rare-only filter → keep only rare/epic/legendary
      if (e.perks.rareOnly) {
        for (const key in newItemPools) {
          if (key === "rareItems" || key === "epicItems" || key === "legendaryItems") continue;
          newItemPools[key] = [];
        }
      }
    }
  });

  return { minRoll, maxRoll, itemPools: newItemPools };
}
