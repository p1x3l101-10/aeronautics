const moltenIngotAmount = 90;

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
  // Add a cast iron recipe
  basinFoundryMelting(
    [
      { tag: "c:ingots/iron" }
    ],
    [{
      id: "createbigcannons:molten_cast_iron",
      amount: (moltenIngotAmount * 2)
    }],
    (moltenIngotAmount * 2)
  );
});
