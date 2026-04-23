ServerEvents.recipes(event => {
  const assemblerLazerRecipe = (input, result) => {
    event.custom({
      type: "pneumaticcraft:assembly_laser",
      input: {
        count: 1,
        item: input
      },
      program: "laser",
      result: {
        count: 1,
        id: result
      }
    });
  };
  // Fix mods using ae2 silicon when it has been fully purged
  event.remove({ id: "appliedpneumatics:assembly/silicon_to_silicon_print" });
  assemblerLazerRecipe("tfmg:silicon_ingot", "ae2:printed_silicon");
});
