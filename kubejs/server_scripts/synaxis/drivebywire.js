ServerEvents.recipes(event => {
  event.shaped(
    Item.of("drivebywire:wire_cutter", 1),
    [
      " A ",
      "B B"
    ],
    {
      A: "#c:plates/iron",
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
      A: "#c:wires/copper",
      B: "#c:dusts/redstone"
    }
  );
  event.shapeless(
    Item.of("drivebywire:controller_hub", 1),
    [
      "drivebywire:wire",
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
      A: "drivebywire:wire",
      B: "#c:dusts/redstone"
    }
  );
});
