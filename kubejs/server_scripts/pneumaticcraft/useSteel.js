const compressedIronStarters = [
  "pneumaticcraft:pneumaticcraft/compressed_iron_ingot",
  "pneumaticcraft:pneumaticcraft/compressed_iron_block"
];

ServerEvents.recipes(event => {
  // TODO: Make explosioncrafting use cast iron
  compressedIronStarters.forEach((recipeID) => {
    event.remove({ id: recipeID });
  });
});
