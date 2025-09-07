export function applyPerksToRoll(allEntities, rollParams, log = []) {
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
        const oldMin = minRoll;
        minRoll = Math.max(minRoll, e.perks.minItems);
        if (minRoll !== oldMin) log.push(`${e.name} activated minItems perk: minRoll ${oldMin} → ${minRoll}`);
      }

      // Override maximum roll
      if (e.perks.maxItems !== undefined) {
        const oldMax = maxRoll;
        maxRoll = Math.max(maxRoll, e.perks.maxItems);
        if (maxRoll !== oldMax) log.push(`${e.name} activated maxItems perk: maxRoll ${oldMax} → ${maxRoll}`);
      }

      // Remove junk from all rarity pools
      if (e.perks.removeJunk) {
        for (const key in newItemPools) {
          const originalCount = newItemPools[key].length;
          newItemPools[key] = newItemPools[key].filter(i => i.type !== "junk");
          if (originalCount !== newItemPools[key].length) {
            log.push(`${e.name} activated and removed Junk Items from Roll`);
          }
        }
      }

      // Rare-only filter → keep only rare/epic/legendary
      if (e.perks.rareOnly) {
        for (const key in newItemPools) {
          if (key === "rareItems" || key === "epicItems" || key === "legendaryItems") continue;
          const removedCount = newItemPools[key].length;
          newItemPools[key] = [];
          if (removedCount) log.push(`${e.name} activated and now only Rare + iems rolled`);
        }
      }
    }
  });

  return { minRoll, maxRoll, itemPools: newItemPools, log };
}
