const badRecipes = [
  "ae2:smelting/silicon_from_certus_quartz_dust",
  "ae2:blasting/silicon_from_certus_quartz_dust",
  "tfmg:compacting/cast_iron"
];

ServerEvents.recipes(event => {
  badRecipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
