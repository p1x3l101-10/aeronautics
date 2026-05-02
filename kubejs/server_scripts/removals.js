const badRecipes = [
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "ae2:inscriber/calculation_processor_press",
  "ae2:inscriber/engineering_processor_press",
  "ae2:inscriber/logic_processor_press",
  "ae2:inscriber/silicon_press",
  "tfmg:compacting/cast_iron",
  "createbigcannons:mixing/alloy_steel",
  "createnuclear:mixing/steel"
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
