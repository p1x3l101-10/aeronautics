const badRecipes = [
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "ae2:inscriber/silicon_print",
  "ae2:inscriber/calculation_processor_print",
  "ae2:inscriber/engineering_processor_print",
  "ae2:inscriber/logic_processor_print",
  "ae2:inscriber/ender_dust",
  "ae2:inscriber/fluix_dust",
  "ae2:inscriber/sky_stone_dust",
  "ae2:inscriber/certus_quartz_dust",
  "ae2:inscriber/calculation_processor_press",
  "ae2:inscriber/engineering_processor_press",
  "ae2:inscriber/logic_processor_press",
  "ae2:inscriber/silicon_press",
  "tfmg:compacting/cast_iron"
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
