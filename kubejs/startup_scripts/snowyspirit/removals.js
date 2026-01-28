function removals_SnowySpirit() {
    global.REMOVALS.add([
        /snowyspirit:.*ginger.*/,
        /snowyspirit:glow_lights.*/,
        'snowyspirit:wreath',
        'snowyspirit:candy_cane_block',
        'snowyspirit:candy_cane',
    ])

    // No longer needed since I disabled the structure
    /*
    global.STRUCTURE_BLOCK_SWAPPER.set('snowyspirit:gingerbread_house', new Map([
        ['minecraft:dark_oak_planks', 'natures_spirit:fir_planks'],
        ['minecraft:dark_oak_slab', 'natures_spirit:fir_slab'],
        ['minecraft:dark_oak_stairs', 'natures_spirit:fir_stairs'],
        ['minecraft:polished_diorite', 'minecraft:bricks'],
        ['minecraft:polished_diorite_stairs', 'minecraft:brick_stairs'],
        ['minecraft:diorite_wall', 'sootychimneys:dirty_brick_chimney'],
        ['minecraft:spruce_stairs', 'everycomp:af/windswept/pine_table'],
        ['minecraft:bricks', 'create:layered_calcite'],
        ['minecraft:brick_stairs', 'create:cut_calcite_brick_stairs'],
    ]))

    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread', 'windswept:gingerbread_block')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_door', 'windswept:gingerbread_door')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_trapdoor', 'windswept:gingerbread_trapdoor')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_stairs', 'windswept:gingerbread_brick_stairs')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_slab', 'windswept:gingerbread_brick_slab')
    global.BLOCK_SWAPPER.set('snowyspirit:gingerbread_frosted', 'windswept:glazed_gingerbread_block')
    global.BLOCK_SWAPPER.set('snowyspirit:potted_ginger', 'windswept:potted_wild_ginger')

    global.ITEM_SWAPPER.set('snowyspirit:gingerbread_cookie', 'windswept:gingerbread_cookie')
    global.ITEM_SWAPPER.set('snowyspirit:gingerbread', 'windswept:ginger_root')
    */
}