ServerEvents.recipes(event => {
  const ingot_mb = 144;
  const ingot_processingTime = 180;
  const foundryMelting = (input1, input2, processingTime, outputId, outputMb) => {
    event.custom({
      type: "createbigcannons:melting",
      heat_requirement: "heated",
      ingredients: [
        {
          tag: input1
        },
        {
          tag: input2
        }
      ],
      processing_time: processingTime,
      results: [{
        amount: outputMb,
        id: outputId
      }]
    });
  };
  foundryMelting("c:ingots/iron", "c:coal", ingot_processingTime * 2, "createbigcannons:molten_cast_iron", ingot_mb * 2);
});
