export function applyPerksToRoll(allEntities, rollParams) {
  let { minRoll, maxRoll, itemPools } = rollParams;

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
        for (const [key, pool] of Object.entries(itemPools)) {
          itemPools[key] = pool.filter(i => i.type !== "junk");
        }
      }

      // Rare-only filter → keep only rare/epic/legendary
      if (e.perks.rareOnly) {
        for (const [key, pool] of Object.entries(itemPools)) {
          if (key === "rareItems" || key === "epicItems" || key === "legendaryItems") {
            continue; // keep these pools
          }
          itemPools[key] = []; // clear out everything else
        }
      }
    }
  });

  return { minRoll, maxRoll, itemPools };
}
