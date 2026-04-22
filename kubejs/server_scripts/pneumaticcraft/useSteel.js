ServerEvents.recipes(event => {
  // Need cast iron instead
  event.replaceInput(
    { output: "pneumaticcraft:iron_ingot_compressed" },
    "minecraft:iron_ingot",
    "#c:ingots/cast_iron"
  );
  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_block" },
    "minecraft:iron_block",
    "#c:storage_blocks/cast_iron"
  );
});
