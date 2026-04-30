ServerEvents.generateData("after_mods", (event) => {
  event.json("hexcasting:advancement/grant_patchi_book", {
    display: { hidden: true },
    criteria: {
      impossible: {
        trigger: "minecraft:impossible"
      }
    }
  });
});
