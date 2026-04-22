const dragonsteelIngots = [
  "iceandfire:dragonsteel_fire_ingot"
  "iceandfire:dragonsteel_ice_ingot"
  "iceandfire:dragonsteel_lightning_ingot"
];

ServerEvents.recipes(event => {
  dragonsteelIngots.foreach((ingotID) => {
    event.replaceInput(
      { output: ingotID , type: "iceandfire:dragonforge" },
      "minecraft:netherite_ingot",
      "#c:ingots/steel"
    )
  });
});
