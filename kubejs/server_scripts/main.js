const badRecipes = [
  "oritech:foundry/alloy/steel",
  "oritech:crafting/alloy/steel",
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "tfmg:compacting/cast_iron"
];

ServerEvents.recipes(event => {
  // Custom functions
  const basinFoundryMelting = (inputs, output, processingTime) => {
    event.custom({
      type: "createbigcannons:melting",
      heat_requirement: "heated",
      ingredients: inputs,
      processing_time: processingTime,
      results: output
    });
  };

  // Delete bad recipes
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
  
  // Add a cast iron recipe
  basinFoundryMelting(
    [
      { tag: "c:ingots/iron" }
    ],
    [{
      id: "createbigcannons:molten_cast_iron",
      amount: 180
    }],
    180
  );
  // Make the basic steel recipe use cast iron (techincally cheaper, but also more complex)
  event.replaceInput(
    { id: "tfmg:industrial_blasting/steel_from_dust" },
    "create:crushed_raw_iron",
    "#c:ingots/cast_iron"
  );
});
