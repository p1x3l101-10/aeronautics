const dragonsteelIngots = [
  "iceandfire:dragonsteel_fire_ingot",
  "iceandfire:dragonsteel_ice_ingot",
  "iceandfire:dragonsteel_lightning_ingot"
];

ServerEvents.recipes(event => {
  dragonsteelIngots.forEach((ingotID) => {
    // TODO: Make recipe use steel instead of netherite
    event.remove({ output: ingotID });
  });
});
