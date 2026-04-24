const ingot_mb = 144;
const ingot_processingTime = 180;

const types = {
  ingot: {
    mb: ingot_mb,
    tagPfx: "ingots",
    processingTime: ingot_processingTime
  },
  nugget: {
    mb: ingot_mb, / 9,
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

const defaultName = "createbigcannons";
const nameOverrides = {
  steel: "tfmg"
};

ServerEvents.recipes(event => {
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
  metals.forEach((metal) => {
    const modNamespace = (metal in nameOverrides) ? nameOverrides[metal] : defaultName;
    for (const [type, typeMeta] of Object.entries(types)) {
      // Deletions
      event.remove({ id: "createbigcannons:melting/melt_" + metal + "_" + type });
      event.remove({ id: "createbigcannons:compacting/forge_" + metal + "_" + type });
      // Recreations with corrected values
      foundryMelting("c:" + typeMeta.tagPfx + "/" + metal, typeMeta.processingTime, "createbigcannons:molten_" + metal, typeMeta.mb);
      foundryPressing("c:molten_" + metal, typeMeta.mb, modNamespace + ":" + metal + "_" + type);
    }
  });
});
