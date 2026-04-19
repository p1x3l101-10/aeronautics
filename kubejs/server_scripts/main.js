const badRecipes = [
  "oritech:foundry/alloy/steel",
  "ae2:inscriber/calculation_processor_print",
  "ae2:inscriber/logic_processor_print",
  "ae2:inscriber/engineering_processor_print",
  "ae2:inscriber/silicon_print",
  "ae2:smelting/silicon_from_certus_quartz_dust"
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
