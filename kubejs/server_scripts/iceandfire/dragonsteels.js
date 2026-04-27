const dragonsteelTypes = [
  "fire",
  "ice",
  "lightning"
];

const ingotTime = 5000;

ServerEvents.recipes(event => {
  const dragonForge = (inputTag, type, outputId) => {
    event.custom({
      type: "iceandfire:dragonforge",
      dragonType: type,
      cookTime: ingotTime,
      input: {
        tag: inputTag
      },
      blood: {
        item: "iceandfire:" + type + "_dragon_blood"
      },
      result: {
        id: outputId
      }
    });
  };
  dragonsteelTypes.forEach((type) => {
    const ingot = "iceandfire:dragonsteel_" + type + "_ingot";
    event.remove({ output: ingot });
    dragonForge("c:ingots/steel", type, ingot);
  });
});
