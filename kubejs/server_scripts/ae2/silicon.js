ServerEvents.recipes(event => {
  // Fix mods using ae2 silicon when it has been fully purged
  event.replaceInput(
    { input: "ae2:silicon" },
    "ae2:silicon",
    "#c:silicon"
  );
});
