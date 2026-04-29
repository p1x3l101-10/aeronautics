ServerEvents.recipes(event => {
  const ingot_mb = 144;
  const ingot_processingTime = 180;

  const types = {
    ingot: {
      mb: ingot_mb,
      tagPfx: "ingots",
      processingTime: ingot_processingTime
    },
    nugget: {
      mb: ingot_mb / 9,
      tagPfx: "nuggets",
      processingTime: ingot_processingTime / 9
    },
    ingot: {
      mb: ingot_mb * 9,
      tagPfx: "storage_blocks",
      processingTime: ingot_processingTime * 9
    },
  };

  const metals = [
    "cast_iron",
    "steel",
    "bronze",
    "nethersteel"
  ];

  const problemMetals = [
    "nethersteel"
  ];

  const defaultName = "createbigcannons";
  const nameOverrides = {
    steel: "tfmg"
  };

  const itemOverrides = {
    bronze_nugget: "bronze_scrap"
  };

  // Create foundry recipes
  const foundryMelting = (inputTag, processingTime, outputId, outputMb) => {
    event.custom({
      type: "createbigcannons:melting",
      heat_requirement: "heated",
      ingredients: [{
        tag: inputTag
      }],
      processing_time: processingTime,
      results: [{
        amount: outputMb,
        id: outputId
      }]
    });
  };
  const foundryPressing = (input, outputId) => {
    event.custom({
      type: "create:compacting",
      heat_requirement: "heated",
      ingredients: [input],
      results: [{
        id: outputId
      }]
    });
  };
  metals.forEach((metal) => {
    const modNamespace = (metal in nameOverrides) ? nameOverrides[metal] : defaultName;
    for (const [type, typeMeta] of Object.entries(types)) {
      const itemNameProto = metal + "_" + type;
      const itemName = (itemNameProto in itemOverrides) ? itemOverrides[itemNameProto] : itemNameProto;
      // Deletions
      event.remove({ id: "createbigcannons:melting/melt_" + metal + "_" + type });
      event.remove({ id: "createbigcannons:compacting/forge_" + metal + "_" + type });
      // Recreations with corrected values
      foundryMelting("c:" + typeMeta.tagPfx + "/" + metal, typeMeta.processingTime, "createbigcannons:molten_" + metal, typeMeta.mb);
      if (problemMetals.includes(metal)) {
        foundryPressing({ fluid: "createbigcannons:molten_" + metal, amount: typeMeta.mb, type: "neoforge:single" }, modNamespace + ":" + itemName);
      } else {
        foundryPressing({ tag: "c:molten_" + metal, amount: typeMeta.mb, type: "neoforge:tag" }, modNamespace + ":" + itemName);
      }
    }
  });
});
