ServerEvents.recipes(event => {
  const ingot_mb = 144;
  const ingot_processingTime = 180;
  const ingot_castingTime = 200;

  const types = {
    ingot: {
      mb: ingot_mb,
      tagPfx: "ingots",
      processingTime: ingot_processingTime,
      castingTime: ingot_castingTime
    },
    nugget: {
      mb: ingot_mb / 9,
      tagPfx: "nuggets",
      processingTime: ingot_processingTime / 9,
      castingTime: ingot_castingTime / 9
    },
    block: {
      mb: ingot_mb * 9,
      tagPfx: "storage_blocks",
      processingTime: ingot_processingTime * 9,
      castingTime: ingot_castingTime * 9
    },
  };

  const metals = [
    "cast_iron",
    "steel",
    "bronze",
    "nethersteel"
  ];

  const defaultName = "createbigcannons";
  const nameOverrides = {
    steel: "tfmg",
    cast_iron: "tfmg"
  };
  const liquidNameOverrides = {
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
  const foundryPressing = (inputTag, inputMb, outputId) => {
    event.custom({
      type: "create:compacting",
      heat_requirement: "heated",
      ingredients: [{
        type: "neoforge:tag",
        amount: inputMb,
        tag: inputTag
      }],
      results: [{
        id: outputId
      }]
    });
  };
  const foundryCasting = (inputTag, inputMb, castingTime, outputId) => {
    event.custom({
      type: "tfmg:casting",
      ingredients: [{
        type: "neoforge:tag",
        amount: inputMb,
        tag: inputTag
      }],
      processing_time: castingTime,
      results [{
        id: outputId
      }]
    });
  };
  // Recipe editing loop
  metals.forEach((metal) => {
    const modNamespace = (metal in nameOverrides) ? nameOverrides[metal] : defaultName;
    const modNamespaceLiquid = (metal in liquidNameOverrides) ? liquidNameOverrides[metal] : defaultName;
    for (const [type, typeMeta] of Object.entries(types)) {
      const itemNameProto = metal + "_" + type;
      const itemName = (itemNameProto in itemOverrides) ? itemOverrides[itemNameProto] : itemNameProto;
      // Deletions
      event.remove({ id: "createbigcannons:melting/melt_" + metal + "_" + type });
      event.remove({ id: "createbigcannons:compacting/forge_" + metal + "_" + type });
      // Recreations with corrected values
      foundryMelting("c:" + typeMeta.tagPfx + "/" + metal, typeMeta.processingTime, modNamespaceLiquid + ":molten_" + metal, typeMeta.mb);
    }
    // Add casting recipes (omitting steel because TFMG has that already)
    const castItemNameProto = metal + "_ingot";
    const castItemName = (castItemNameProto in itemOverrides) ? itemOverrides[castItemNameProto] : itemNameProto;
    if (metal != "steel") {
      foundryCasting("c:molten_" + metal, ingot_mb, ingot_castingTime, modNamespace + ":" + castItemName);
    }
  });
  // Add a shitty recipe for cast iron so you aren't stuck in a bootstrap paradox
  foundryPressing("c:molten_cast_iron", ingot_mb * 2, "tfmg:cast_iron_ingot");
});

// Fix molten metal tags
ServerEvents.tags('fluid', event => {
  event.add("c:molten_nethersteel", "createbigcannons:molten_nethersteel");
});

// Hide unused liquids
RecipeViewerEvents.removeEntries('fluid', event => {
  event.remove("createbigcannons:molten_steel");
});
