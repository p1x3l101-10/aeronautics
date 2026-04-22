ServerEvents.recipes(event => {
  // Make the basic steel recipe use cast iron (techincally cheaper, but also more complex)
  event.replaceInput(
    { id: "tfmg:industrial_blasting/steel_from_dust" },
    "create:crushed_raw_iron",
    "#c:ingots/cast_iron"
  );
});
