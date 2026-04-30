ServerEvents.recipes(event => {
  event.shaped(
    Item.of("drivebywire:wire_cutter", 1),
    [
      " A ",
      "B B",
      " A "
    ],
    {
      A: "#c:ingots/iron",
      B: "#c:rods/wood"
    }
  );
  event.shaped(
    Item.of("drivebywire:wire", 1),
    [
      "A",
      "B",
      "A"
    ],
    {
      A: "#c:ingots/iron",
      B: "#c:dusts/redstone"
    }
  );
  event.shapeless(
    Item.of("drivebywire:controller_hub", 1),
    [
      "synaxis:wire",
      "create:brass_casing",
      "create:linked_controller"
    ]
  );
  event.shaped(
    Item.of("drivebywire:backup_block", 1),
    [
      "ABA",
      "B B",
      "ABA"
    ],
    {
      A: "synaxis:wire",
      B: "#c:dusts/redstone"
    }
  );
});
