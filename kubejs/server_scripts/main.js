const badRecipes = [
  "oritech:foundry/alloy/steel",
  "ae2:inscriber/calculation_processor_print",
  "ae2:inscriber/logic_processor_print",
  "ae2:inscriber/engineering_processor_print",
  "ae2:inscriber/silicon_print",
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
  // Fix mods using ae2 silicon when it has been fully purged
  event.replaceInput(
    { input: "ae2:silicon" },
    "ae2:silicon",
    "#c:silicon"
  );
  // Need cast iron instead
  event.replaceInput(
    { output: "pneumaticcraft:iron_ingot_compressed" },
    "#c:ingots/iron",
    "#c:ingots/cast_iron"
  );
  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_block" },
    "#c:storage_blocks/iron",
    "#c:storage_blocks/cast_iron"
  );
});
