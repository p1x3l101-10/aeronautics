ItemEvents.modification(event => {
  event.modify("minecraft:mace", item => {
    item.tier = tier => {
      tier.repairIngredient = "#c:ingots/compressed_iron";
    };
  });
});
