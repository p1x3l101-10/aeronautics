const badRecipes = [
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "createnuclear:mixing/steel"
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
  // Overwrite silicon type
  event.replaceInput({ input: "ae2:silicon" }, "ae2:silicon", "#c:ingots/silicon");
});
